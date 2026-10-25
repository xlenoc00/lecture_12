"""Orchestrace porady investičního týmu."""

from __future__ import annotations

import datetime as dt
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import anthropic
import yaml

from . import llm, market_data
from .agents import HLAVNI_STRATEG, RISK_MANAGER, SPECIALISTE, SPOLECNA_PRAVIDLA, Agent

PACKAGE_DIR = Path(__file__).parent
DEFAULT_PROFILE = PACKAGE_DIR / "profil.yaml"
REPORTS_DIR = PACKAGE_DIR.parent / "reports"


def load_profile(path: Path = DEFAULT_PROFILE) -> dict:
    with open(path, encoding="utf-8") as f:
        return yaml.safe_load(f)


def portfolio_value(profile: dict, data: dict[str, dict]) -> str:
    """Textový přehled pozic se ziskem/ztrátou v měně instrumentu."""
    lines = []
    for pos in profile.get("portfolio") or []:
        snap = data.get(pos["ticker"], {})
        price = snap.get("cena")
        if price is None:
            lines.append(f"- {pos['ticker']}: {pos['kusy']} ks, cena nedostupná")
            continue
        pnl = (price / pos["nakupni_cena"] - 1) * 100
        lines.append(
            f"- {pos['ticker']}: {pos['kusy']} ks, nákup {pos['nakupni_cena']}, nyní {price}, "
            f"hodnota {price * pos['kusy']:.2f}, zisk/ztráta {pnl:+.1f} %"
        )
    return "\n".join(lines) or "- (prázdné portfolio)"


def last_report() -> str | None:
    if not REPORTS_DIR.exists():
        return None
    files = sorted(REPORTS_DIR.glob("*.md"))
    return files[-1].read_text(encoding="utf-8") if files else None


def build_context(profile: dict) -> str:
    tickers = [p["ticker"] for p in profile.get("portfolio") or []] + list(profile.get("watchlist") or [])
    rows = market_data.collect(tickers)
    by_ticker = {r["ticker"]: r for r in rows}
    now = dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

    parts = [
        f"# Porada týmu – {now}",
        "## Profil investora",
        yaml.safe_dump(
            {k: v for k, v in profile.items() if k not in ("portfolio", "watchlist")},
            allow_unicode=True, sort_keys=False,
        ),
        "## Aktuální portfolio",
        portfolio_value(profile, by_ticker),
        "## Tržní data (denní, Yahoo Finance)",
        market_data.format_table(rows),
    ]
    previous = last_report()
    if previous:
        parts += ["## Závěry z minulé porady (pro kontinuitu)", previous[:6000]]
    return "\n\n".join(parts)


def run_agent(agent: Agent, prompt: str) -> str:
    system = f"{SPOLECNA_PRAVIDLA}\n\nTvoje role: {agent.name}\n{agent.role}"
    try:
        return llm.ask(system, prompt, effort=agent.effort, web_search=agent.web_search)
    except anthropic.APIError as exc:
        return f"_(Chyba agenta {agent.name}: {exc})_"


def meeting(profile: dict, question: str | None = None, log=print) -> str:
    """Jedna porada: specialisté paralelně → risk manager → hlavní stratég."""
    log("Sbírám tržní data…")
    context = build_context(profile)
    task = (
        f"Investor se ptá: {question}\n\nOdpověz z pohledu své role."
        if question
        else "Proveď pravidelnou analýzu ze své role a navrhni konkrétní kroky."
    )
    base_prompt = f"{context}\n\n## Úkol\n{task}"

    log(f"Pracují specialisté: {', '.join(a.name for a in SPECIALISTE)}…")
    with ThreadPoolExecutor(max_workers=len(SPECIALISTE)) as pool:
        results = list(pool.map(lambda a: run_agent(a, base_prompt), SPECIALISTE))
    analyses = "\n\n".join(f"### {a.name}\n{r}" for a, r in zip(SPECIALISTE, results))

    log("Risk manager kontroluje návrhy…")
    risk = run_agent(RISK_MANAGER, f"{context}\n\n## Návrhy týmu\n{analyses}\n\n## Úkol\n{task}")

    log("Hlavní stratég sestavuje doporučení…")
    final = run_agent(
        HLAVNI_STRATEG,
        f"{context}\n\n## Analýzy týmu\n{analyses}\n\n### Risk manager\n{risk}\n\n## Úkol\n{task}",
    )

    now = dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    header = f"# Investiční porada – {now}\n"
    if question:
        header += f"\n**Dotaz:** {question}\n"
    return (
        f"{header}\n{final}\n\n---\n\n<details><summary>Podklady jednotlivých agentů</summary>\n\n"
        f"{analyses}\n\n### Risk manager\n{risk}\n\n</details>\n"
    )


def save_report(report: str) -> Path:
    REPORTS_DIR.mkdir(exist_ok=True)
    path = REPORTS_DIR / f"{dt.datetime.now(dt.timezone.utc):%Y-%m-%d_%H%M}.md"
    path.write_text(report, encoding="utf-8")
    return path
