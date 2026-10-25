"""Volitelné odeslání doporučení na Telegram."""

from __future__ import annotations

import json
import os
import urllib.request


def telegram(text: str) -> bool:
    token = os.environ.get("TELEGRAM_BOT_TOKEN")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID")
    if not token or not chat_id:
        return False
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    # Telegram má limit 4096 znaků na zprávu.
    for i in range(0, len(text), 4000):
        body = json.dumps({"chat_id": chat_id, "text": text[i:i + 4000]}).encode()
        req = urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"})
        urllib.request.urlopen(req, timeout=30).read()
    return True


def summary(report: str) -> str:
    """Pro notifikaci pošleme jen finální doporučení, ne podklady agentů."""
    return report.split("<details>")[0].strip()
