"""Volání Claude API pro jednotlivé agenty."""

from __future__ import annotations

import os

import anthropic

MODEL = os.environ.get("INVESTICNI_TYM_MODEL", "claude-opus-5-5")
WEB_SEARCH_TOOL = {"type": "web_search_20260209", "name": "web_search", "max_uses": 6}
MAX_PAUSE_ROUNDS = 5

_client: anthropic.Anthropic | None = None


def client() -> anthropic.Anthropic:
    global _client
    if _client is None:
        _client = anthropic.Anthropic()
    return _client


def ask(system: str, prompt: str, *, effort: str = "medium", web_search: bool = False) -> str:
    """Pošle dotaz jednomu agentovi a vrátí jeho textovou odpověď.

    Používá streaming (dlouhé odpovědi), adaptivní přemýšlení, volitelně webové
    vyhledávání a záložní model pro případ odmítnutí.
    """
    messages: list = [{"role": "user", "content": prompt}]
    kwargs = dict(
        model=MODEL,
        max_tokens=32000,
        system=system,
        thinking={"type": "adaptive"},
        output_config={"effort": effort},
        betas=["server-side-fallback-2026-07-01"],
        fallbacks="default",
    )
    if web_search:
        kwargs["tools"] = [WEB_SEARCH_TOOL]

    for _ in range(MAX_PAUSE_ROUNDS):
        with client().beta.messages.stream(messages=messages, **kwargs) as stream:
            response = stream.get_final_message()
        # Webové vyhledávání může odpověď přerušit (pause_turn) – pokračujeme.
        if response.stop_reason == "pause_turn":
            messages.append({"role": "assistant", "content": response.content})
            continue
        break

    if response.stop_reason == "refusal":
        return "_(Agent odmítl odpovědět.)_"
    text = "\n".join(b.text for b in response.content if b.type == "text").strip()
    if response.stop_reason == "max_tokens":
        text += "\n\n_(Odpověď byla zkrácena limitem délky.)_"
    return text or "_(Bez odpovědi.)_"
