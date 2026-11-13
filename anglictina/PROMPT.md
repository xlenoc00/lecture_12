# Zadání (prompt), podle kterého aplikace vznikla

Tento text můžeš vložit do Claude (nebo jiného AI nástroje), když budeš chtít aplikaci postavit znovu, rozšířit ji, nebo si nechat udělat podobnou pro jiný jazyk. Hranaté závorky uprav podle sebe.

---

Postav mi webovou aplikaci na samostudium angličtiny. Všechny texty rozhraní a všechna vysvětlení piš česky.

## Kdo jsem a co chci

- Jsem [začátečník, znám jen pár základních slovíček, větu neposkládám].
- Chci [obecný pevný základ: gramatiku, každodenní slovíčka a výslovnost].
- Budu se učit [20 minut denně] po dobu [14 týdnů, tedy 98 dní].
- Budu se učit [střídavě na mobilu a na počítači].
- Na konci chci [rozumět jednoduchým větám, domluvit se v běžných situacích a umět přítomný, minulý a budoucí čas, zhruba úroveň A1 až začátek A2].

## Jak má vypadat kurz

- 14 týdnů, každý má jedno téma ze života (pozdravy, rodina, čísla a čas, domov, jídlo, denní režim, město a cestování, nakupování, volný čas, právě teď a počasí, minulost I a II, budoucnost, porovnávání a zdraví).
- Každý týden má 6 lekcí a sedmý den test z celého týdne.
- Každý týden obsahuje 48 slovíček (6 skupin po 8), 3 gramatická témata, 12 vzorových vět a 1 výslovnostní tip zaměřený na to, co dělá potíže Čechům.
- Gramatika postupuje od slovesa být přes přítomný čas prostý a průběhový, can, minulý čas, going to a will až po stupňování a must / have to / should. Každé téma se probírá dva dny po sobě: první den výklad, druhý den připomenutí.
- U každého slovíčka uveď český překlad a přibližnou výslovnost zapsanou českými písmeny.
- Výklad gramatiky piš krátce, s příklady a s upozorněním, v čem se angličtina liší od češtiny.

## Jak má vypadat jedna denní lekce (asi 20 minut)

1. Opakování: kartičky se slovíčky z minulých dní podle rozloženého opakování (rozestupy 1, 2, 4, 7, 14, 30 a 60 dní; při chybě se kartička vrací na začátek).
2. Nová slovíčka: 8 slov, každé nejdřív ukázat s výslovností a přehráním, potom procvičit výběrem z možností oběma směry a psaním.
3. Gramatika: krátký výklad a doplňování správného tvaru do věty.
4. Věty: skládání anglické věty z rozházených slov podle českého překladu.
5. Poslech: přehraje se slovo a já vyberu, které to bylo.
6. Výslovnost: poslechnu si slovo nebo větu a zopakuju nahlas.

Na co jsem odpověděl špatně, se mi v lekci vrátí ještě jednou na konci.

## Rozhraní

- Co nejjednodušší. Na úvodní obrazovce jedno velké tlačítko, které spustí dnešní lekci, a přehled, co mě v ní čeká.
- Během lekce vždy jen jedna úloha na obrazovce, ukazatel postupu nahoře a hned zpětná vazba se správnou odpovědí.
- Velká tlačítka pro ovládání palcem na mobilu. Na počítači ovládání klávesnicí (číslice 1–4 pro výběr, Enter pro pokračování).
- Záložky: Dnes, Plán (všech 14 týdnů, hotové lekce jdou zopakovat), Slovíčka (seznam s vyhledáváním a úrovní znalosti), Gramatika (přehled probraného), Nastavení.
- Motivace: počet dní v řadě, mapa 14 týdnů s vybarvenými hotovými lekcemi, výsledky týdenních testů.
- Světlý i tmavý režim podle nastavení zařízení, dobře čitelné písmo.

## Technické požadavky

- Čistý HTML, CSS a JavaScript bez instalace a bez serveru. Musí fungovat po otevření souboru `index.html` i na statickém hostingu.
- Postup ukládej do prohlížeče (localStorage). Přidej přenos postupu mezi zařízeními pomocí kódu, který se dá zkopírovat a vložit jinde.
- Výslovnost přehrávej hlasem zabudovaným v prohlížeči (Web Speech API) s nastavitelnou rychlostí. Když hlas není k dispozici, aplikace musí fungovat dál jen s psaným přepisem.
- Obsah kurzu drž odděleně od kódu v datových souborech, aby šel snadno upravovat a rozšiřovat.

## Než začneš

Zeptej se mě na cokoli, co ti chybí. Potom aplikaci postav, projdi si v prohlížeči celou první lekci i týdenní test a oprav, co nefunguje.
