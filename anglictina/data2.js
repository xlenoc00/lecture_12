// Obsah kurzu, týdny 8–14. Formát stejný jako v data1.js.
window.UNITS.push(
{
  t: "Nakupování a oblečení", s: "Oblečení, barvy, ceny a množství",
  groups: [
    ["Oblečení", ["clothes|oblečení|kloudz", "shirt|košile|šért", "T-shirt|tričko|tý šért", "trousers|kalhoty|trauzrz", "jeans|džíny|džínz", "skirt|sukně|skért", "jacket|bunda, sako|džekit", "coat|kabát|kout"]],
    ["Doplňky", ["shoes|boty|šúz", "socks|ponožky|soks", "hat|klobouk, čepice|het", "sweater|svetr|swetr", "glasses|brýle|glásiz", "scarf|šála|skárf", "gloves|rukavice|glavz", "umbrella|deštník|ambrela"]],
    ["Barvy", ["colour|barva|kalr", "red|červený|red", "blue|modrý|blú", "green|zelený|grín", "yellow|žlutý|jelou", "black|černý|blek", "white|bílý|wajt", "brown|hnědý|braun"]],
    ["V obchodě", ["price|cena|prajs", "pay|platit|pej", "cash|hotovost|keš", "card|karta|kárd", "size|velikost|sajz", "sale|výprodej, sleva|sejl", "customer|zákazník|kastomr", "change|drobné, změnit|čejndž"]],
    ["Kolik", ["how much|kolik (cena, nepočitatelné)|hau mač", "how many|kolik (kusů)|hau meny", "some|nějaký, trochu|sam", "any|nějaký (v otázce), žádný (v záporu)|eny", "a lot of|hodně|e lot ov", "more|více|mór", "all|všechno, všichni|ól", "enough|dost|inaf"]],
    ["Nosit a zkoušet", ["wear|nosit (oblečení)|wér", "try on|zkusit si (oblečení)|traj on", "sell|prodávat|sel", "give|dát|giv", "get|dostat|get", "long|dlouhý|long", "short|krátký|šórt", "too|příliš, také|tú"]]
  ],
  grammar: [
    { t: "some a any",
      h: `<p>Obě slova znamenají „nějaký, trochu“. Rozdíl je v typu věty:</p>
<ul class="ex"><li><b>some</b> v kladné větě: I have <b>some</b> money.</li><li><b>any</b> v záporu: I don't have <b>any</b> money. (nemám žádné)</li><li><b>any</b> v otázce: Do you have <b>any</b> money?</li></ul>
<p>Když něco nabízíš nebo o něco prosíš, zůstává <b>some</b>: <i>Would you like some tea?</i></p>`,
      q: ["I have ___ new shoes.|some|any|a", "We don't have ___ milk.|any|some|a", "Do you have ___ brothers?|any|some|a", "There are ___ apples on the table.|some|any|a", "There isn't ___ bread.|any|some|a", "Would you like ___ coffee?|some|any|a"] },
    { t: "How much × how many",
      h: `<p><b>How many</b> se ptá na věci, které jdou spočítat na kusy (jsou v množném čísle). <b>How much</b> se ptá na to, co počítat nejde (voda, peníze, čas), a také na cenu.</p>
<p class="ex">How many shirts do you have? · How much water do you drink? · How much is this jacket?</p>
<p>Hodně čehokoli: <b>a lot of</b> books, <b>a lot of</b> money.</p>`,
      q: ["How ___ is this coat?|much|many|price", "How ___ children do you have?|many|much|lot", "How ___ milk do we need?|much|many|lot", "How ___ are these shoes?|much|many|cost", "She has ___ clothes.|a lot of|much of|many of", "How ___ eggs do you want?|many|much|lot"] },
    { t: "I'd like a too",
      h: `<p><b>I'd like</b> (= I would like) je zdvořilé „chtěl bych“. V obchodě a restauraci ho používej místo <i>I want</i>.</p>
<p class="ex">I'd like this T-shirt, please. · I'd like to try on these jeans.</p>
<p><b>too</b> před přídavným jménem znamená „příliš“: <b>too big</b>, <b>too expensive</b>. Na konci věty znamená „také“: <i>I like it too.</i></p>
<p>Užitečné: <b>Can I pay by card?</b> · <b>Can I try it on?</b></p>`,
      q: ["I'd ___ a coffee, please.|like|want|likes", "This jacket is ___ small.|too|to|very much", "I'd like ___ try on this shirt.|to|for|–", "Can I pay ___ card?|by|with the|on", "These shoes are ___ expensive for me.|too|enough|more", "I like this colour ___.|too|to|also much"] }
  ],
  sent: ["How much is this jacket?|Kolik stojí tahle bunda?", "I'd like to try on these jeans.|Chtěl bych si zkusit tyhle džíny.", "Do you have any black shoes?|Máte nějaké černé boty?", "This shirt is too small.|Tahle košile je příliš malá.", "Can I pay by card?|Můžu platit kartou?", "I don't have any cash.|Nemám žádnou hotovost.", "She always wears a red coat.|Vždy nosí červený kabát.", "How many T-shirts do you need?|Kolik triček potřebuješ?", "I need some new socks.|Potřebuju nějaké nové ponožky.", "What size are you?|Jakou máte velikost?", "The blue sweater is on sale.|Modrý svetr je ve slevě.", "It is too expensive for me.|Je to pro mě příliš drahé."],
  pron: { t: "Otevřené e ve slovech jako black", h: `<p>Písmeno <b>a</b> v krátkých slovech nezní jako české „a“ ani úplně jako „e“. Otevři pusu jako na „a“ a řekni „e“. V přepisu píšeme <b>e</b>.</p><p>Rozdíl je důležitý: <i>bad</i> (špatný) × <i>bed</i> (postel), <i>man</i> (muž) × <i>men</i> (muži).</p>`, w: ["black|blek", "bag|beg", "hat|het", "cash|keš", "jacket|džekit"] }
},
{
  t: "Volný čas", s: "Koníčky, sport a co umím",
  groups: [
    ["Koníčky", ["hobby|koníček|hobi", "music|hudba|mjúzik", "film|film|film", "sport|sport|spórt", "game|hra|gejm", "song|píseň|song", "guitar|kytara|gitár", "photo|fotka|foutou"]],
    ["Sport", ["football|fotbal|futból", "tennis|tenis|tenys", "swim|plavat|swim", "run|běhat|ran", "ski|lyžovat|skí", "dance|tančit|dáns", "ride|jezdit (na kole, na koni)|rajd", "team|tým|tým"]],
    ["Co ještě děláme", ["sing|zpívat|sing", "draw|kreslit|dró", "paint|malovat|pejnt", "jump|skákat|džamp", "climb|lézt|klajm", "fly|létat|flaj", "win|vyhrát|win", "lose|prohrát, ztratit|lúz"]],
    ["Kam vyrazit", ["weekend|víkend|wíkend", "party|večírek|párty", "concert|koncert|konsrt", "beach|pláž|bíč", "mountains|hory|mauntynz", "sea|moře|sí", "forest|les|forist", "lake|jezero|lejk"]],
    ["Jaké to je", ["fun|zábava|fan", "boring|nudný|bóring", "interesting|zajímavý|intrestyng", "easy|snadný|ízi", "difficult|těžký, obtížný|dyfiklt", "fast|rychlý|fást", "slow|pomalý|slou", "favourite|oblíbený|fejvrit"]],
    ["Vztah k činnosti", ["well|dobře (jak)|wel", "hate|nesnášet|hejt", "enjoy|užívat si|indžoj", "prefer|dávat přednost|prifér", "together|spolu|tugedr", "alone|sám|eloun", "both|oba|bouth", "maybe|možná|mejbí"]]
  ],
  grammar: [
    { t: "can / can't",
      h: `<p><b>can</b> znamená umět nebo moci. Je stejné pro všechny osoby (žádné -s) a sloveso za ním je v základním tvaru bez <i>to</i>.</p>
<p class="ex">I <b>can</b> swim. · She <b>can</b> play the guitar. · We <b>can't</b> come today.</p>
<p>Otázka se tvoří přehozením, bez do: <b>Can you</b> ski? – <b>Yes, I can.</b> / <b>No, I can't.</b></p>`,
      q: ["She ___ swim very well.|can|cans|can to", "I ___ play the guitar. (neumím)|can't|don't can|not can", "___ you ski?|Can|Do|Are", "He can ___ English.|speak|speaks|to speak", "Can you dance? – No, I ___.|can't|don't|am not", "We ___ meet on Saturday.|can|can to|are can"] },
    { t: "like, love, hate + -ing",
      h: `<p>Když říkáš, že nějakou činnost máš (ne)rád, sloveso za <b>like, love, enjoy, hate</b> dostane koncovku <b>-ing</b>.</p>
<p class="ex">I like read<b>ing</b>. · She loves danc<b>ing</b>. · We hate gett<b>ing</b> up early.</p>
<p>Pravopis: končí-li sloveso na -e, to odpadá (dance → dancing). U krátkých sloves se zdvojí poslední souhláska (swim → swi<b>mm</b>ing, run → ru<b>nn</b>ing).</p>`,
      q: ["I like ___ books.|reading|read|reads", "She loves ___.|dancing|dance|danceing", "He hates ___ early.|getting up|get up|gets up", "We enjoy ___ in the sea.|swimming|swiming|swim", "Do you like ___?|cooking|cook|to cooking", "My brother doesn't like ___.|running|runing|run"] },
    { t: "want to a Let's",
      h: `<p>Po <b>want</b> a <b>would like</b> následuje <b>to</b> + sloveso.</p>
<p class="ex">I want <b>to</b> learn English. · She wants <b>to</b> go home. · I'd like <b>to</b> play tennis.</p>
<p>Návrh „pojďme“ uděláš pomocí <b>Let's</b> + sloveso bez to:</p>
<p class="ex"><b>Let's</b> go to the cinema. · <b>Let's</b> play a game.</p>`,
      q: ["I want ___ a film.|to watch|watch|watching", "Let's ___ to the beach.|go|to go|going", "She wants ___ the guitar.|to play|play|plays", "___ play football!|Let's|Let|Lets to", "Do you want ___ with us?|to come|come|coming", "I'd like ___ to the mountains.|to go|go|going"] }
  ],
  sent: ["I can swim very well.|Umím velmi dobře plavat.", "She can't play the guitar.|Neumí hrát na kytaru.", "Can you ski?|Umíš lyžovat?", "I like reading books.|Rád čtu knihy.", "He loves playing football.|Miluje hraní fotbalu.", "Let's go to the cinema.|Pojďme do kina.", "What is your favourite sport?|Jaký je tvůj oblíbený sport?", "I want to learn English.|Chci se naučit anglicky.", "We often go to the mountains.|Často jezdíme na hory.", "This film is very boring.|Tenhle film je velmi nudný.", "I don't like getting up early.|Nerad vstávám brzy.", "Do you want to play with us?|Chceš hrát s námi?"],
  pron: { t: "Koncovka -ing", h: `<p>Na konci slov na <b>-ing</b> se nevyslovuje „g“ ani „k“. Je to nosové „n“, jako v českém slově „banka“. Jazyk zůstává vzadu a zvuk jde nosem.</p><p>Neříkej tedy „singink“.</p>`, w: ["swimming|swimin(g)", "singing|singin(g)", "running|ranin(g)", "playing|plejin(g)", "song|son(g)"] }
},
{
  t: "Právě teď", s: "Počasí a co se zrovna děje",
  groups: [
    ["Počasí", ["weather|počasí|wedr", "sun|slunce|san", "rain|déšť, pršet|rejn", "snow|sníh, sněžit|snou", "wind|vítr|wind", "cloud|mrak|klaud", "sunny|slunečno|sany", "storm|bouřka|stórm"]],
    ["Roční období", ["spring|jaro|spring", "summer|léto|samr", "autumn|podzim|ótm", "winter|zima|wintr", "season|roční období|sízn", "sky|obloha|skaj", "temperature|teplota|temprečr", "degree|stupeň|dygrí"]],
    ["Slovesa s věcmi", ["stand|stát (na nohou)|stend", "carry|nést|keri", "bring|přinést|bring", "put|položit, dát (někam)|put", "send|poslat|send", "show|ukázat|šou", "ask|zeptat se|ásk", "answer|odpovědět, odpověď|ánsr"]],
    ["Mluvení a myšlení", ["think|myslet|think", "talk|povídat si|tók", "tell|říct (někomu)|tel", "say|říct|sej", "understand|rozumět|andrstend", "remember|pamatovat si|rimembr", "forget|zapomenout|forget", "feel|cítit (se)|fíl"]],
    ["Kdy přesně", ["at the moment|v tuto chvíli|et d moument", "right now|právě teď|rajt nau", "still|stále, ještě|stil", "already|už|ólredy", "again|znovu|egen", "soon|brzy (za chvíli)|sún", "then|potom|den", "while|zatímco|wajl"]],
    ["Technika", ["internet|internet|intrnet", "message|zpráva|mesidž", "website|webová stránka|websajt", "password|heslo|páswérd", "screen|obrazovka|skrín", "laptop|notebook|leptop", "charge|nabíjet|čárdž", "download|stáhnout|daunloud"]]
  ],
  grammar: [
    { t: "Přítomný čas průběhový",
      h: `<p>Pro to, co se děje <b>právě teď</b>, má angličtina zvláštní čas: sloveso <b>být + sloveso s -ing</b>.</p>
<p class="ex">I <b>am reading</b>. · She <b>is cooking</b>. · They <b>are playing</b> football.</p>
<p>Čeština tenhle rozdíl nedělá: „čtu“ může být <i>I read</i> (běžně) i <i>I am reading</i> (zrovna teď).</p>
<p>O počasí: <b>It is raining.</b> · <b>It is snowing.</b></p>`,
      q: ["I ___ a book now.|am reading|reading|am read", "She ___ dinner at the moment.|is cooking|cooking|cooks now", "They ___ football right now.|are playing|is playing|playing", "It ___ today.|is raining|raining|rain", "We ___ for the bus.|are waiting|waiting|is waiting", "He ___ to music now.|is listening|listening|are listening"] },
    { t: "Zápor a otázka v průběhovém čase",
      h: `<p>Stejně jako u slovesa být: zápor s <b>not</b>, v otázce se být přesune dopředu. Žádné do/does.</p>
<p class="ex">I'm <b>not</b> working. · She <b>isn't</b> sleeping. · They <b>aren't</b> listening.</p>
<p class="ex"><b>Are you</b> working? · <b>Is it</b> raining? · What <b>are you</b> doing?</p>
<p>Krátká odpověď: <b>Yes, I am.</b> / <b>No, she isn't.</b></p>`,
      q: ["She ___ now.|isn't working|doesn't working|not working", "___ you listening?|Are|Do|Is", "What ___ you doing?|are|do|is", "___ it raining?|Is|Does|Are", "They ___ TV at the moment.|aren't watching|don't watching|not watch", "Is he sleeping? – No, he ___.|isn't|doesn't|not"] },
    { t: "Běžně × právě teď",
      h: `<p>Porovnej oba přítomné časy:</p>
<ul class="ex"><li><b>I work</b> in a bank. – Pracuju v bance (obecně, stále).</li><li><b>I am working</b> now. – Teď zrovna pracuju.</li></ul>
<p>Napoví ti slova ve větě. <b>every day, always, usually, often, never</b> → prostý čas. <b>now, right now, at the moment, today</b> → průběhový čas.</p>
<p>Slovesa <b>like, love, want, need, know, understand</b> se v průběhovém tvaru nepoužívají: <i>I want</i>, ne <i>I am wanting</i>.</p>`,
      q: ["She ___ coffee every morning.|drinks|is drinking|drinking", "Look! It ___.|is snowing|snows|snow", "I usually ___ to work by bus.|go|am going|going", "I ___ what you say.|understand|am understanding|understanding", "He ___ a shower right now.|is having|has|have", "We never ___ TV in the morning.|watch|are watching|watching"] }
  ],
  sent: ["It is raining today.|Dnes prší.", "What are you doing?|Co děláš?", "I am reading a book.|Čtu si knihu.", "She is talking to her mother.|Mluví se svou matkou.", "We are not working today.|Dnes nepracujeme.", "Is he still sleeping?|Ještě spí?", "The sun is shining.|Svítí slunce.", "I don't understand this word.|Tomuhle slovu nerozumím.", "They are waiting for the bus.|Čekají na autobus.", "It is very cold in winter.|V zimě je velká zima.", "I am sending you a message.|Posílám ti zprávu.", "What is the weather like?|Jaké je počasí?"],
  pron: { t: "Přízvuk ve slově", h: `<p>V češtině je přízvuk vždy na první slabice. V angličtině může být kdekoli a nepřízvučné slabiky se „spolknou“. Špatný přízvuk ztěžuje porozumění víc než špatná hláska.</p><ul class="ex"><li><b>WEA</b>ther</li><li>re<b>MEM</b>ber</li><li>under<b>STAND</b></li><li>com<b>PU</b>ter</li><li><b>TEM</b>perature</li></ul>`, w: ["weather|WEdr", "remember|riMEMbr", "understand|andrSTEND", "computer|komPJÚtr", "temperature|TEMprečr"] }
},
{
  t: "Minulost I", s: "Byl jsem, bylo to, pravidelná slovesa",
  groups: [
    ["Kdy to bylo", ["yesterday|včera|jestrdej", "last|minulý, poslední|lást", "ago|před (two days ago = před dvěma dny)|egou", "last night|včera večer|lást najt", "last week|minulý týden|lást wík", "born|narozený|bórn", "once|jednou|wans", "later|později|lejtr"]],
    ["Jak mi bylo", ["angry|naštvaný|engri", "afraid|vystrašený|efrejd", "surprised|překvapený|sprajzd", "excited|nadšený|iksajtyd", "nervous|nervózní|nérvs", "bored|znuděný|bórd", "ill|nemocný|il", "glad|rád, potěšený|gled"]],
    ["Pravidelná slovesa", ["visit|navštívit|vizit", "use|používat|júz", "try|zkusit|traj", "move|stěhovat se, hýbat|múv", "decide|rozhodnout se|dysajd", "invite|pozvat|invajt", "happen|stát se, přihodit se|hepn", "return|vrátit se|ritérn"]],
    ["Škola a život", ["lesson|lekce, vyučovací hodina|lesn", "exam|zkouška|igzem", "university|univerzita|júnyvérsity", "company|firma|kampeny", "life|život|lajf", "story|příběh|stóri", "question|otázka|kwesčn", "idea|nápad|ajdýe"]],
    ["Místa a lidé", ["village|vesnice|vilidž", "town|město (menší)|taun", "neighbour|soused|nejbr", "guest|host|gest", "world|svět|wérld", "language|jazyk|lengwidž", "word|slovo|wérd", "place|místo|plejs"]],
    ["Vyprávění", ["so|takže|sou", "if|jestli, pokud|if", "first|první, nejdřív|férst", "next|další, příští|nekst", "finally|nakonec|fajnli", "everything|všechno|evrithing", "nothing|nic|nathing", "something|něco|samthing"]]
  ],
  grammar: [
    { t: "was / were",
      h: `<p>Minulý čas slovesa být má dva tvary:</p>
<ul class="ex"><li><b>was</b> – I, he, she, it</li><li><b>were</b> – you, we, they</li></ul>
<p class="ex">I <b>was</b> tired yesterday. · She <b>was</b> at home. · We <b>were</b> in London last week.</p>
<p>Datum narození: <b>I was born in 1990.</b></p>`,
      q: ["I ___ at home yesterday.|was|were|am", "They ___ in Prague last week.|were|was|are", "She ___ very tired last night.|was|were|is", "We ___ at school together.|were|was|did", "The weather ___ nice yesterday.|was|were|is", "I ___ born in May.|was|were|am"] },
    { t: "wasn't, weren't a otázky",
      h: `<p>Zápor: <b>wasn't</b> (was not), <b>weren't</b> (were not). V otázce se was/were přesune před podmět.</p>
<p class="ex">I <b>wasn't</b> at work. · They <b>weren't</b> hungry.</p>
<p class="ex"><b>Were you</b> at home? – Yes, I was. / No, I wasn't. · <b>Where was</b> she? · <b>How was</b> your weekend?</p>`,
      q: ["He ___ at work yesterday.|wasn't|weren't|didn't", "___ you at home last night?|Were|Was|Did", "We ___ late.|weren't|wasn't|didn't", "Where ___ she yesterday?|was|were|did", "Was the film good? – No, it ___.|wasn't|weren't|didn't", "How ___ your holiday?|was|were|did"] },
    { t: "Minulý čas: koncovka -ed",
      h: `<p>Pravidelná slovesa tvoří minulý čas koncovkou <b>-ed</b>. Tvar je stejný pro všechny osoby.</p>
<p class="ex">work → work<b>ed</b> · play → play<b>ed</b> · visit → visit<b>ed</b></p>
<p>Končí-li sloveso na -e, přidáš jen -d (live → live<b>d</b>). Souhláska + y se mění na -ied (study → stud<b>ied</b>, try → tr<b>ied</b>). Krátká slovesa zdvojují souhlásku (stop → sto<b>pp</b>ed).</p>
<p class="ex">I watched a film last night. · We visited my parents two days ago.</p>`,
      q: ["I ___ a film last night.|watched|watch|watching", "She ___ in London in 2020.|lived|liveed|lives", "We ___ football yesterday.|played|plaied|play", "He ___ English at school.|studied|studyed|studies", "They ___ us last week.|visited|visit|visitted", "The bus ___ in front of the hotel.|stopped|stoped|stop"] }
  ],
  sent: ["I was at home yesterday.|Včera jsem byl doma.", "We were very tired.|Byli jsme velmi unavení.", "Where were you last night?|Kde jsi byl včera večer?", "She wasn't at work.|Nebyla v práci.", "I watched a film last night.|Včera večer jsem se díval na film.", "They visited us two days ago.|Navštívili nás před dvěma dny.", "I was born in a small village.|Narodil jsem se v malé vesnici.", "The exam was very difficult.|Zkouška byla velmi těžká.", "He lived in England for a year.|Žil rok v Anglii.", "How was your weekend?|Jaký byl tvůj víkend?", "We played tennis yesterday.|Včera jsme hráli tenis.", "Nothing happened.|Nic se nestalo."],
  pron: { t: "Koncovka -ed má tři podoby", h: `<p>Koncovka <b>-ed</b> se skoro nikdy nečte „ed“:</p><ul class="ex"><li>po neznělé hlásce zní <b>t</b>: worked, watched</li><li>po znělé hlásce a samohlásce zní <b>d</b>: lived, played</li><li>jen po t a d zní <b>id</b>: visited, wanted</li></ul>`, w: ["worked|wérkt", "lived|livd", "played|plejd", "visited|vizityd", "wanted|wontyd"] }
},
{
  t: "Minulost II", s: "Nepravidelná slovesa a vyprávění",
  groups: [
    ["Nejčastější minulé tvary", ["went|šel, jel (go)|went", "had|měl (have)|hed", "did|dělal (do)|dyd", "saw|viděl (see)|só", "came|přišel (come)|kejm", "got|dostal (get)|got", "made|udělal, vyrobil (make)|mejd", "said|řekl (say)|sed"]],
    ["Jídlo, nákupy, setkání", ["ate|jedl (eat)|et", "drank|pil (drink)|drenk", "bought|koupil (buy)|bót", "took|vzal (take)|tuk", "gave|dal (give)|gejv", "found|našel (find)|faund", "met|potkal (meet)|met", "knew|věděl, znal (know)|njú"]],
    ["Mluvení a myšlení", ["wrote|napsal (write)|rout", "spoke|mluvil (speak)|spouk", "thought|myslel (think)|thót", "told|řekl někomu (tell)|tould", "slept|spal (sleep)|slept", "felt|cítil (feel)|felt", "sold|prodal (sell)|sould", "paid|zaplatil (pay)|pejd"]],
    ["Nová slovesa", ["see|vidět|sí", "do|dělat|dú", "begin|začít|bigin", "began|začal (begin)|bigen", "break|rozbít|brejk", "broke|rozbil (break)|brouk", "forgot|zapomněl (forget)|forgot", "sent|poslal (send)|sent"]],
    ["Co se stalo", ["accident|nehoda|eksidnt", "news|zprávy, novinka|njúz", "letter|dopis|letr", "present|dárek|preznt", "wedding|svatba|wedyng", "journey|cesta (delší)|džérni", "event|událost|ivent", "memory|vzpomínka, paměť|memori"]],
    ["Pohyb a sport", ["ran|běžel (run)|ren", "swam|plaval (swim)|swem", "sang|zpíval (sing)|seng", "won|vyhrál (win)|wan", "lost|prohrál, ztratil (lose)|lost", "wore|měl na sobě (wear)|wór", "drove|řídil (drive)|drouv", "sat|seděl (sit)|set"]]
  ],
  grammar: [
    { t: "Nepravidelná slovesa",
      h: `<p>Nejčastější slovesa mají v minulém čase vlastní tvar místo -ed. Musíš se je naučit nazpaměť, proto je tento týden máš v kartičkách.</p>
<p class="ex">go → <b>went</b> · have → <b>had</b> · see → <b>saw</b> · eat → <b>ate</b> · buy → <b>bought</b> · take → <b>took</b></p>
<p>Tvar je opět stejný pro všechny osoby: <i>I went, she went, they went.</i></p>
<p class="ex">I went to the cinema yesterday. · She bought a new car last year.</p>`,
      q: ["I ___ to London last year.|went|goed|go", "She ___ a new phone yesterday.|bought|buyed|buy", "We ___ a good film last night.|saw|seed|see", "He ___ breakfast at seven.|had|haved|has", "They ___ pizza for dinner.|ate|eated|eat", "I ___ the bus to work.|took|taked|take"] },
    { t: "Zápor: didn't",
      h: `<p>Zápor v minulém čase je pro všechna slovesa stejný: <b>didn't</b> + sloveso v <b>základním tvaru</b>. Minulost už vyjadřuje didn't, takže sloveso se vrací do základního tvaru.</p>
<p class="ex">I went. → I <b>didn't go</b>. · She worked. → She <b>didn't work</b>. · We saw him. → We <b>didn't see</b> him.</p>
<p>Jen u slovesa být zůstává <i>wasn't / weren't</i>.</p>`,
      q: ["I ___ to work yesterday.|didn't go|didn't went|not went", "She ___ the film.|didn't see|didn't saw|doesn't saw", "We ___ anything.|didn't buy|didn't bought|not bought", "He ___ me last night.|didn't call|didn't called|wasn't call", "They ___ at home.|weren't|didn't be|didn't were", "I ___ breakfast today.|didn't have|didn't had|hadn't not"] },
    { t: "Otázka: Did you…?",
      h: `<p>Otázka začíná <b>Did</b>, sloveso je opět v základním tvaru.</p>
<p class="ex"><b>Did you</b> see the film? · <b>Did she</b> call you? · Where <b>did you</b> go? · What <b>did he</b> say?</p>
<p>Krátká odpověď: <b>Yes, I did.</b> / <b>No, I didn't.</b></p>`,
      q: ["___ you see Tom yesterday?|Did|Do|Were", "Where did you ___ last summer?|go|went|going", "What ___ she say?|did|does|was", "Did you buy bread? – Yes, I ___.|did|bought|was", "When ___ they arrive?|did|were|do", "Did he ___ the exam?|pass|passed|passes"] }
  ],
  sent: ["I went to the cinema yesterday.|Včera jsem šel do kina.", "She bought a new car.|Koupila si nové auto.", "We didn't see the film.|Ten film jsme neviděli.", "Did you sleep well?|Spal jsi dobře?", "I had a coffee and a cake.|Dal jsem si kávu a dort.", "He told me a story.|Vyprávěl mi příběh.", "Where did you go last summer?|Kam jsi jel minulé léto?", "They came home late.|Přišli domů pozdě.", "I forgot my password.|Zapomněl jsem heslo.", "What did you do yesterday?|Co jsi dělal včera?", "I met her at a wedding.|Potkal jsem ji na svatbě.", "We took a taxi to the airport.|Na letiště jsme jeli taxíkem.", ],
  pron: { t: "Dlouhé ó v minulých tvarech", h: `<p>Skupiny písmen <b>ough</b> a <b>aw</b> se v těchto slovech čtou jako dlouhé „ó“. Písmena gh jsou němá.</p><p>Pozor na <i>read</i>: přítomný čas zní „ríd“, minulý se píše stejně, ale čte se „red“.</p>`, w: ["bought|bót", "thought|thót", "saw|só", "wrote|rout", "said|sed"] }
},
{
  t: "Budoucnost a plány", s: "Co budu dělat, povolání, dovolená",
  groups: [
    ["Kdy to bude", ["future|budoucnost|fjúčr", "next week|příští týden|nekst wík", "tonight|dnes večer|tunajt", "next year|příští rok|nekst jír", "the day after tomorrow|pozítří|d dej áftr tumorou", "dream|sen, snít|drím", "hope|doufat|houp", "promise|slíbit, slib|promis"]],
    ["Povolání", ["doctor|lékař|doktr", "nurse|zdravotní sestra|nérs", "driver|řidič|drajvr", "chef|šéfkuchař|šef", "police officer|policista|polís ofisr", "engineer|inženýr|endžinýr", "farmer|farmář|fármr", "manager|manažer|menydžr"]],
    ["Dovolená", ["flight|let|flajt", "suitcase|kufr|sútkejs", "tent|stan|tent", "island|ostrov|ajlend", "abroad|v zahraničí, do zahraničí|ebród", "reservation|rezervace|rezrvejšn", "tourist|turista|túrist", "guide|průvodce|gajd"]],
    ["Slovesa plánování", ["become|stát se (někým)|bikam", "build|stavět|bild", "spend|utratit, strávit (čas)|spend", "save|ušetřit, zachránit|sejv", "pack|balit|pek", "rent|pronajmout si|rent", "cost|stát (o ceně)|kost", "choose|vybrat si|čúz"]],
    ["Jak moc jisté", ["probably|pravděpodobně|probebli", "sure|jistý|šór", "possible|možný|posibl", "important|důležitý|impórtnt", "ready|připravený|redy", "lucky|mající štěstí|laki", "different|jiný, odlišný|dyfrent", "same|stejný|sejm"]],
    ["Svátky a oslavy", ["Christmas|Vánoce|krismes", "Easter|Velikonoce|ístr", "New Year|Nový rok|njú jír", "celebration|oslava|selebrejšn", "gift|dárek|gift", "invitation|pozvánka|invitejšn", "fireworks|ohňostroj|fajrwérks", "tradition|tradice|tredyšn"]]
  ],
  grammar: [
    { t: "Plány: be going to",
      h: `<p>Co máš v plánu nebo ses už rozhodl udělat, vyjádříš vazbou <b>být + going to + sloveso</b>.</p>
<p class="ex">I <b>am going to</b> visit my parents. · She <b>is going to</b> buy a car. · We <b>are going to</b> travel abroad.</p>
<p>Zápor a otázka jako u slovesa být: <i>I'm not going to wait.</i> · <i>Are you going to come?</i></p>`,
      q: ["I ___ visit my grandmother tomorrow.|am going to|going to|am going", "She ___ buy a new flat.|is going to|are going to|going to", "___ you going to come?|Are|Do|Will", "We are going ___ in a tent.|to sleep|sleep|sleeping", "He ___ going to wait.|isn't|doesn't|won't", "What are you going to ___ tonight?|do|doing|did"] },
    { t: "Budoucnost: will",
      h: `<p><b>will</b> + základní tvar slovesa použiješ pro předpověď, slib nebo rozhodnutí v tu chvíli. Je stejné pro všechny osoby. Zkracuje se na <b>'ll</b>, zápor je <b>won't</b>.</p>
<p class="ex">It <b>will</b> rain tomorrow. · I<b>'ll</b> help you. · She <b>won't</b> be late.</p>
<p>Otázka: <b>Will you</b> come? – Yes, I will. / No, I won't.</p>
<p>Často po <b>I think, I hope, probably, maybe</b>: <i>I think it will be fine.</i></p>`,
      q: ["I think it ___ rain tomorrow.|will|is|going", "Don't worry, I ___ help you.|will|am|going to", "She ___ be late. (nebude)|won't|willn't|don't will", "___ you come to my party?|Will|Do|Are", "He will ___ a good doctor.|be|is|to be", "I hope they ___ win.|will|are|going"] },
    { t: "will × going to",
      h: `<p>Oba tvary mluví o budoucnosti, liší se tím, kdy ses rozhodl:</p>
<ul class="ex"><li><b>going to</b> – plán, o kterém už víš: <i>I'm going to study in England next year.</i></li><li><b>will</b> – rozhodnutí právě teď, nabídka, slib: <i>The phone is ringing. – I'll answer it.</i></li></ul>
<p>Když si nejsi jistý, <b>will</b> s <i>I think</i> a <b>going to</b> pro osobní plány ti vystačí skoro vždy.</p>`,
      q: ["We have tickets. We ___ fly to Rome on Friday.|are going to|will to|going", "I'm tired. – OK, I ___ drive.|will|am going|going to", "I promise I ___ call you.|will|am going|going", "She has a plan. She ___ be a nurse.|is going to|will to|going to", "It's cold. – I ___ close the window.|will|am going|going to", "Maybe we ___ see you there.|will|are going|going to"] }
  ],
  sent: ["I am going to visit my parents.|Chystám se navštívit rodiče.", "It will rain tomorrow.|Zítra bude pršet.", "She is going to be a doctor.|Bude lékařkou.", "We won't be late.|Nepřijdeme pozdě.", "What are you going to do tonight?|Co budeš dělat dnes večer?", "I will help you.|Pomůžu ti.", "Are you going to travel abroad?|Chystáš se cestovat do zahraničí?", "I hope you will come.|Doufám, že přijdeš.", "We are going to rent a car.|Půjčíme si auto.", "I think it will be fine.|Myslím, že to bude v pořádku.", "He is not going to wait.|Nebude čekat.", "Next year I will speak English well.|Příští rok budu mluvit dobře anglicky."],
  pron: { t: "Zkrácené tvary", h: `<p>V mluvené angličtině se pomocná slovesa zkracují a slévají se zájmenem. Uč se je poslouchat, protože rodilí mluvčí plné tvary skoro nepoužívají.</p><ul class="ex"><li>I will → <b>I'll</b></li><li>we will → <b>we'll</b></li><li>will not → <b>won't</b></li><li>do not → <b>don't</b></li><li>I am → <b>I'm</b></li></ul>`, w: ["I'll|ajl", "we'll|wíl", "won't|wount", "don't|dount", "I'm|ajm"] }
},
{
  t: "Popisujeme a porovnáváme", s: "Tělo, zdraví, porovnávání a povinnosti",
  groups: [
    ["Tělo", ["head|hlava|hed", "hand|ruka (dlaň)|hend", "arm|paže|árm", "leg|noha|leg", "foot|chodidlo|fut", "eye|oko|aj", "ear|ucho|ír", "mouth|ústa|mauth"]],
    ["Tělo a obličej", ["nose|nos|nouz", "hair|vlasy|hér", "tooth|zub|túth", "back|záda|bek", "stomach|břicho, žaludek|stamek", "heart|srdce|hárt", "face|obličej|fejs", "body|tělo|body"]],
    ["U lékaře", ["pain|bolest|pejn", "headache|bolest hlavy|hedejk", "fever|horečka|fívr", "cough|kašel|kof", "medicine|lék|medsn", "health|zdraví|helth", "healthy|zdravý|helthy", "appointment|objednaný termín|epojntment"]],
    ["Protiklady", ["strong|silný|strong", "weak|slabý|wík", "heavy|těžký (váhou)|hevi", "light|lehký, světlo|lajt", "thin|hubený, tenký|thin", "fat|tlustý|fet", "rich|bohatý|rič", "poor|chudý|pór"]],
    ["Porovnávání", ["better|lepší|betr", "worse|horší|wérs", "best|nejlepší|best", "worst|nejhorší|wérst", "than|než|den", "as|jako, tak|ez", "most|nejvíce|moust", "less|méně|les"]],
    ["Povinnosti a rady", ["must|muset|mast", "have to|muset (kvůli okolnostem)|hev tu", "should|měl by|šud", "rule|pravidlo|rúl", "advice|rada|edvajs", "careful|opatrný|kérfl", "dangerous|nebezpečný|dejndžrs", "safe|bezpečný|sejf"]]
  ],
  grammar: [
    { t: "Druhý stupeň: bigger, more expensive",
      h: `<p>Krátká přídavná jména dostanou koncovku <b>-er</b>, dlouhá (tři a více slabik) slovo <b>more</b> před sebe. „Než“ je <b>than</b>.</p>
<p class="ex">old → old<b>er</b> · big → bi<b>gg</b>er · easy → eas<b>ier</b> · expensive → <b>more</b> expensive</p>
<p class="ex">My brother is taller <b>than</b> me. · This car is more expensive <b>than</b> that one.</p>
<p>Nepravidelné: good → <b>better</b>, bad → <b>worse</b>.</p>`,
      q: ["My brother is ___ than me.|older|more old|oldest", "This film is ___ than that one.|more interesting|interestinger|most interesting", "Today is ___ than yesterday.|colder|more cold|coldest", "Her English is ___ than mine.|better|gooder|more good", "A plane is faster ___ a train.|than|as|then", "This exam was ___ than the last one.|easier|more easy|easyer"] },
    { t: "Třetí stupeň: the biggest, the most",
      h: `<p>Krátká přídavná jména: <b>the</b> + koncovka <b>-est</b>. Dlouhá: <b>the most</b> + přídavné jméno.</p>
<p class="ex">the old<b>est</b> · the bi<b>gg</b>est · the eas<b>iest</b> · <b>the most</b> beautiful</p>
<p class="ex">She is the tallest girl in the class. · It is the most expensive hotel in the city.</p>
<p>Nepravidelné: good → <b>the best</b>, bad → <b>the worst</b>.</p>`,
      q: ["He is ___ boy in the class.|the tallest|the most tall|taller", "This is ___ restaurant in town.|the best|the goodest|the better", "It was ___ day of my life.|the worst|the baddest|the worse", "She is ___ woman in the world.|the most beautiful|the beautifulest|more beautiful", "January is ___ month of the year.|the coldest|the most cold|colder", "What is ___ city in your country?|the biggest|the bigger|the most big"] },
    { t: "must, have to, should",
      h: `<p>Tři způsoby, jak říct, co je potřeba:</p>
<ul class="ex"><li><b>must</b> – musím (sám to tak cítím, silné): I <b>must</b> go now.</li><li><b>have to</b> – musím (někdo to vyžaduje): I <b>have to</b> work on Saturday.</li><li><b>should</b> – měl bych (rada): You <b>should</b> see a doctor.</li></ul>
<p>Pozor na zápory: <b>mustn't</b> = nesmíš. <b>don't have to</b> = nemusíš. <b>shouldn't</b> = neměl bys.</p>`,
      q: ["You ___ see a doctor. (měl bys)|should|must to|have", "I ___ go now. (musím)|must|must to|should to", "She ___ work on Sunday. (musí)|has to|have to|must to", "You ___ smoke here. (nesmíš)|mustn't|don't have to|haven't to", "Tomorrow is Sunday. I ___ get up early. (nemusím)|don't have to|mustn't|shouldn't to", "You ___ eat so much sugar. (neměl bys)|shouldn't|don't should|mustn't to"] }
  ],
  sent: ["My brother is taller than me.|Můj bratr je vyšší než já.", "This is the best restaurant in town.|Tohle je nejlepší restaurace ve městě.", "I have a headache.|Bolí mě hlava.", "You should see a doctor.|Měl bys jít k lékaři.", "I must go now.|Už musím jít.", "She has long black hair.|Má dlouhé černé vlasy.", "English is easier than Czech.|Angličtina je snadnější než čeština.", "You don't have to wait.|Nemusíš čekat.", "It was the worst day of my life.|Byl to nejhorší den mého života.", "My back hurts.|Bolí mě záda.", "This bag is heavier than that one.|Tahle taška je těžší než tamta.", "You must be careful.|Musíš být opatrný."],
  pron: { t: "Rytmus věty", h: `<p>Angličtina zdůrazňuje jen důležitá slova (podstatná jména, slovesa, přídavná jména). Krátká slova jako <i>than, the, to, a</i> se říkají slabě a rychle.</p><p><i>My BROther is TALLer than ME.</i> Slovo <i>than</i> zní skoro jen jako „dn“.</p>`, w: ["better than|betr dn", "the best|d best", "should|šud", "healthy|helthy", "dangerous|dejndžrs"] }
}
);
