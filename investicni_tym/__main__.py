"""Příkazová řádka investičního týmu.

  python -m investicni_tym porada            # jedna porada, uloží report
  python -m investicni_tym hlidej --hodiny 4 # běží nonstop, porada každé 4 hodiny
  python -m investicni_tym dotaz "Mám teď přikoupit NVDA?"
  python -m investicni_tym data              # jen tržní data, bez AI
"""

from __future__ import annotations

import argparse
import sys
import time
from pathlib import Path

from . import market_data, notify, team


def _run(profile_path: Path, question: str | None) -> None:
    profile = team.load_profile(profile_path)
    report = team.meeting(profile, question, log=lambda m: print(m, file=sys.stderr))
    path = team.save_report(report)
    print(notify.summary(report))
    print(f"\nReport uložen: {path}", file=sys.stderr)
    try:
        if notify.telegram(notify.summary(report)):
            print("Odesláno na Telegram.", file=sys.stderr)
    except Exception as exc:
        print(f"Telegram selhal: {exc}", file=sys.stderr)


def main() -> None:
    parser = argparse.ArgumentParser(prog="investicni_tym", description="24/7 investiční AI tým")
    parser.add_argument("--profil", type=Path, default=team.DEFAULT_PROFILE, help="cesta k profil.yaml")
    sub = parser.add_subparsers(dest="cmd", required=True)
    sub.add_parser("porada", help="jedna porada týmu")
    hl = sub.add_parser("hlidej", help="porady nonstop v intervalu")
    hl.add_argument("--hodiny", type=float, default=4.0)
    dq = sub.add_parser("dotaz", help="zeptej se týmu na konkrétní věc")
    dq.add_argument("otazka")
    sub.add_parser("data", help="vypiš tržní data bez AI")
    args = parser.parse_args()

    if args.cmd == "data":
        profile = team.load_profile(args.profil)
        tickers = [p["ticker"] for p in profile.get("portfolio") or []] + list(profile.get("watchlist") or [])
        print(market_data.format_table(market_data.collect(tickers)))
    elif args.cmd == "porada":
        _run(args.profil, None)
    elif args.cmd == "dotaz":
        _run(args.profil, args.otazka)
    elif args.cmd == "hlidej":
        while True:
            try:
                _run(args.profil, None)
            except Exception as exc:  # běh nonstop nesmí spadnout kvůli jedné chybě
                print(f"Porada selhala: {exc}", file=sys.stderr)
            print(f"Další porada za {args.hodiny} h.", file=sys.stderr)
            time.sleep(args.hodiny * 3600)


if __name__ == "__main__":
    main()
