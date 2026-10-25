# Investiční AI tým (24/7)

Tým šesti AI agentů postavený na Claude API, který nonstop sleduje trhy a tvoje portfolio
a radí s dlouhodobou strategií, krátkodobými (swing) investicemi i tradingem.

> ⚠️ Nejde o licencované finanční poradenství. Agenti se mohou mýlit – každé rozhodnutí
> je na tobě. Nikdy neinvestuj peníze, jejichž ztrátu si nemůžeš dovolit.

## Členové týmu

| Agent | Na co se dívá | Webové vyhledávání |
|---|---|---|
| Makroekonom | sazby, inflace, geopolitika, sentiment, kalendář událostí | ano |
| Dlouhodobý investor | fundamenty, diverzifikace, rebalancing, pravidelné investování | ano |
| Swing analytik | setupy na dny–týdny (trend, RSI, katalyzátory) | ano |
| Trader | intraday a krátké obchody, momentum, přesné úrovně | ano |
| Risk manager | kontroluje všechny návrhy, má právo veta | ne |
| Hlavní stratég | spojí vše do jednoho doporučení | ne |

Průběh porady: stáhnou se tržní data (Yahoo Finance) → 4 specialisté pracují paralelně
a hledají aktuální zprávy → risk manager je zkontroluje → stratég napíše finální doporučení.
Tým si pamatuje závěry minulé porady (čte poslední report ve složce `reports/`).

## Nastavení

1. Uprav svůj profil v [`profil.yaml`](profil.yaml) – kapitál, riziko, horizont, portfolio, watchlist.
2. Nainstaluj závislosti: `pip install -r requirements.txt`
3. Nastav klíč: `export ANTHROPIC_API_KEY=...` (z console.anthropic.com)

## Použití

```bash
python -m investicni_tym porada                       # jedna porada
python -m investicni_tym dotaz "Mám teď přikoupit NVDA?"
python -m investicni_tym hlidej --hodiny 4            # běží nonstop na tvém PC/serveru
python -m investicni_tym data                         # jen tržní data, bez AI
```

## Běh 24/7 zdarma přes GitHub Actions

Workflow [`.github/workflows/investicni-tym.yml`](../.github/workflows/investicni-tym.yml)
spouští poradu každé 4 hodiny, ukládá report do `reports/` a výsledek ukáže v souhrnu běhu.

1. V GitHubu: **Settings → Secrets and variables → Actions** přidej `ANTHROPIC_API_KEY`.
2. (Volitelně) pro zprávy do mobilu přidej `TELEGRAM_BOT_TOKEN` a `TELEGRAM_CHAT_ID`
   (bota založíš u @BotFather, chat ID zjistíš např. přes @userinfobot).
3. Workflow musí být ve výchozí větvi (`main`), aby se plánované spouštění zapnulo.
4. Dotaz mimo plán: **Actions → Investiční AI tým → Run workflow** a vyplň otázku.

Interval změníš v řádku `cron` (např. `"17 */2 * * *"` = každé 2 hodiny).

## Náklady

Jedna porada = 6 volání modelu Claude Opus 5.5 + webové vyhledávání, zhruba v řádu
desítek centů až korun. Při poradě každé 4 hodiny počítej přibližně s jednotkami dolarů
denně. Levnější varianta: `export INVESTICNI_TYM_MODEL=claude-sonnet-5-5`
(proměnnou lze nastavit i ve workflow).

## Technické poznámky

- Model `claude-opus-5-5` s adaptivním přemýšlením; risk manager a stratég na vyšším úsilí.
- Zapnutý záložní model pro případ, že model odmítne odpovědět (`fallbacks: "default"`).
- Když Yahoo Finance nevrátí data, tým pokračuje jen s webovým vyhledáváním.
