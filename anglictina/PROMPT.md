# Zadání (prompt), podle kterého aplikace vznikla

Tento text můžeš vložit do Claude (nebo jiného AI nástroje), když budeš chtít aplikaci postavit znovu, rozšířit ji, nebo si nechat udělat podobnou pro jiný jazyk. Hranaté závorky uprav podle sebe.

---

Postav mi webovou aplikaci na samostudium angličtiny. Všechny texty rozhraní a všechna vysvětlení piš česky.

## Kdo jsem a co chci

- Jsem [začátečník, znám jen pár základních slovíček, větu neposkládám].
- Chci [obecný pevný základ: gramatiku, každodenní slovíčka a výslovnost].
- Budu se učit [20 minut denně] po dobu [jednoho roku, tedy 52 týdnů]. Když mě to chytne, chci mít možnost pokračovat další lekcí hned ten den.
- Budu se učit [střídavě na mobilu a na počítači].
- Na konci chci [být v angličtině opravdu dobrý: plynule se domluvit, rozumět běžným textům a filmům a ovládat celou gramatiku úrovně B1 až B2].

## Jak má vypadat kurz

- 52 týdnů ve čtyřech stupních: základy (A1, týdny 1–14), rozjezd (A2, 15–26), samostatnost (B1, 27–39) a jistota (B1+ až B2, 40–52). Každý týden má jedno téma ze života, od pozdravů a rodiny přes práci, cestování a zdraví až po média, politiku, formální e-maily, frázová slovesa a idiomy.
- Každý týden má 6 lekcí a sedmý den test z celého týdne.
- Každý týden obsahuje 48 slovíček (6 skupin po 8), 3 gramatická témata, 12 vzorových vět, 2 krátké rozhovory ze života a 1 výslovnostní tip zaměřený na to, co dělá potíže Čechům.
- Gramatika postupuje od slovesa být přes všechny časy (včetně předpřítomného, předminulého a předbudoucího), trpný rod, podmínkové věty, nepřímou řeč a vztažné věty až po slovotvorbu a typické české chyby. Každé téma se probírá dva dny po sobě: první den výklad, druhý den připomenutí.
- U každého slovíčka uveď český překlad a na úrovních A1 a A2 i přibližnou výslovnost zapsanou českými písmeny.
- Výklad gramatiky piš krátce, s příklady a s upozorněním, v čem se angličtina liší od češtiny.

## Jak má vypadat jedna denní lekce (asi 20 minut)

1. Opakování: kartičky se slovíčky z minulých dní podle rozloženého opakování (rozestupy 1, 2, 4, 7, 14, 30 a 60 dní; při chybě se kartička vrací na začátek).
2. Nová slovíčka: 8 slov, každé nejdřív ukázat s výslovností a přehráním, potom procvičit výběrem z možností oběma směry a psaním.
3. Gramatika: krátký výklad a doplňování správného tvaru do věty.
4. Věty: skládání anglické věty z rozházených slov podle českého překladu.
5. Diktát: přehraje se věta (i zpomaleně) a já ji napíšu.
6. Poslech a výslovnost: vyberu slovo, které slyším, a zopakuju slova a věty nahlas.
7. Dvakrát týdně rozhovor: nejdřív si ho poslechnu, potom vybírám správné odpovědi a nakonec hraju jednu roli nahlas.

Na co jsem odpověděl špatně, se mi v lekci vrátí ještě jednou na konci. Chyby z gramatiky a vět se navíc vracejí i v dalších dnech, dokud je třikrát po sobě neodpovím správně.

Když nemám čas, chci „pětiminutovku“: pár kartiček, tři otázky z gramatiky a jeden diktát. Počítá se do série, ale neposouvá mě v kurzu.

## Rozhraní

- Co nejjednodušší. Na úvodní obrazovce jedno velké tlačítko, které spustí dnešní lekci, a přehled, co mě v ní čeká.
- Během lekce vždy jen jedna úloha na obrazovce, ukazatel postupu nahoře a hned zpětná vazba se správnou odpovědí.
- Velká tlačítka pro ovládání palcem na mobilu. Na počítači ovládání klávesnicí (číslice 1–4 pro výběr, Enter pro pokračování).
- Záložky: Dnes, Plán (všech 52 týdnů, hotové lekce jdou zopakovat), Slovíčka (seznam s vyhledáváním a úrovní znalosti), Gramatika (přehled probraného), Nastavení.
- Docházka, ať vidím, jestli se neflákám: počet dní v řadě, nejdelší série, dnešní minuty proti cíli 20 minut, kalendář posledních 28 dní a upozornění, když sérii přeruším. Počítej jen čas, kdy opravdu odpovídám, a jen dokončené lekce.
- Mapa celého roku s vybarvenými hotovými týdny a výsledky týdenních testů.
- Po dokončení lekce nabídni tlačítko pro pokračování další lekcí.
- Světlý i tmavý režim podle nastavení zařízení.
- Přizpůsob vzhled padesátiletému uživateli, ale bez blahosklonnosti: žádný text menší než 16 px, vysoký kontrast, přepínač velikosti písma ve třech stupních, spodní nabídka s ikonami i popisky, tlačítka přehrávání se slovem „Přehrát“ a vedle nich „Pomalu“.
- Lekce jde kdykoli přerušit a později dokončit přesně tam, kde jsem skončil. Nahoře ukazuj krok a odhad zbývajících minut.
- Chyby oznamuj klidně („Skoro. Správně je…“) a bez červené barvy. Po vynechaném dni mě přivítej zpátky, nevyčítej.
- V nastavení možnost nepsat na klávesnici: místo diktátu skládání věty ze slov, místo psaní slovíček výběr z možností.
- Při prvním spuštění krátký průvodce: jak lekce vypadá, zkouška zvuku a volba velikosti písma.

## Technické požadavky

- Čistý HTML, CSS a JavaScript bez instalace a bez serveru. Musí fungovat po otevření souboru `index.html` i na statickém hostingu.
- Postup ukládej do prohlížeče (localStorage). Přidej přenos postupu mezi zařízeními pomocí kódu, který se dá zkopírovat a vložit jinde.
- Výslovnost přehrávej hlasem zabudovaným v prohlížeči (Web Speech API) s nastavitelnou rychlostí. Když hlas není k dispozici, aplikace musí fungovat dál jen s psaným přepisem.
- Obsah kurzu drž odděleně od kódu v datových souborech, aby šel snadno upravovat a rozšiřovat.

## Než začneš

Zeptej se mě na cokoli, co ti chybí. Potom aplikaci postav, projdi si v prohlížeči celou první lekci i týdenní test a oprav, co nefunguje.
