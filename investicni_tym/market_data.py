"""Tržní data z Yahoo Finance a základní technické ukazatele."""

from __future__ import annotations

import math

try:
    import yfinance as yf
except ImportError:  # tým funguje i bez dat, jen s webovým vyhledáváním
    yf = None


def _rsi(close, period: int = 14) -> float | None:
    if len(close) <= period:
        return None
    delta = close.diff()
    gain = delta.clip(lower=0).ewm(alpha=1 / period, adjust=False).mean()
    loss = (-delta.clip(upper=0)).ewm(alpha=1 / period, adjust=False).mean()
    last_loss = loss.iloc[-1]
    if last_loss == 0:
        return 100.0
    return float(100 - 100 / (1 + gain.iloc[-1] / last_loss))


def _change(close, days: int) -> float | None:
    if len(close) <= days:
        return None
    return float((close.iloc[-1] / close.iloc[-1 - days] - 1) * 100)


def snapshot(ticker: str) -> dict:
    """Vrátí přehled jednoho instrumentu za poslední rok."""
    if yf is None:
        return {"ticker": ticker, "chyba": "yfinance není nainstalované"}
    try:
        hist = yf.Ticker(ticker).history(period="1y", interval="1d", auto_adjust=True)
    except Exception as exc:  # síť, neznámý ticker…
        return {"ticker": ticker, "chyba": str(exc)}
    if hist.empty:
        return {"ticker": ticker, "chyba": "žádná data"}

    close = hist["Close"].dropna()
    returns = close.pct_change().dropna()
    sma50 = close.rolling(50).mean().iloc[-1] if len(close) >= 50 else None
    sma200 = close.rolling(200).mean().iloc[-1] if len(close) >= 200 else None
    high_52w = float(close.max())

    def r(x, n=2):
        return None if x is None or (isinstance(x, float) and math.isnan(x)) else round(float(x), n)

    return {
        "ticker": ticker,
        "cena": r(close.iloc[-1], 4),
        "datum": str(close.index[-1].date()),
        "zmena_1d_%": r(_change(close, 1)),
        "zmena_1t_%": r(_change(close, 5)),
        "zmena_1m_%": r(_change(close, 21)),
        "zmena_3m_%": r(_change(close, 63)),
        "zmena_1r_%": r(_change(close, len(close) - 1)),
        "rsi14": r(_rsi(close), 1),
        "sma50": r(sma50, 4),
        "sma200": r(sma200, 4),
        "od_52t_maxima_%": r((close.iloc[-1] / high_52w - 1) * 100),
        "volatilita_rocni_%": r(returns.std() * math.sqrt(252) * 100, 1),
    }


def collect(tickers: list[str]) -> list[dict]:
    seen, out = set(), []
    for t in tickers:
        if t and t not in seen:
            seen.add(t)
            out.append(snapshot(t))
    return out


def format_table(rows: list[dict]) -> str:
    """Kompaktní textová tabulka pro prompt."""
    cols = ["ticker", "cena", "zmena_1d_%", "zmena_1t_%", "zmena_1m_%", "zmena_3m_%",
            "zmena_1r_%", "rsi14", "sma50", "sma200", "od_52t_maxima_%", "volatilita_rocni_%"]
    lines = [" | ".join(cols)]
    for row in rows:
        if "chyba" in row:
            lines.append(f"{row['ticker']} | data nedostupná ({row['chyba']})")
        else:
            lines.append(" | ".join("" if row.get(c) is None else str(row.get(c)) for c in cols))
    return "\n".join(lines)
