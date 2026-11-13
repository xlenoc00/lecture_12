// Obsah kurzu, týdny 1–7.
// Slovíčko: "anglicky|česky|přibližná výslovnost". Otázka: "věta s ___|správně|špatně|špatně". Věta: "anglicky|česky".
window.UNITS = [
{
  t: "Ahoj!", s: "Pozdravy, představení a sloveso být",
  groups: [
    ["Pozdravy", ["hello|ahoj, dobrý den|helou", "hi|ahoj|haj", "goodbye|na shledanou|gudbaj", "good morning|dobré ráno|gud mórnyng", "good evening|dobrý večer|gud ívnyng", "good night|dobrou noc|gud najt", "please|prosím|plíz", "thank you|děkuji|thenk jú"]],
    ["Zájmena", ["I|já|aj", "you|ty, vy|jú", "he|on|hí", "she|ona|ší", "it|to, ono|it", "we|my|wí", "they|oni|dej", "name|jméno|nejm"]],
    ["Základní slova", ["yes|ano|jes", "no|ne|nou", "and|a|end", "or|nebo|ór", "but|ale|bat", "sorry|promiň, pardon|sori", "OK|dobře, v pořádku|oukej", "not|ne (zápor ve větě)|not"]],
    ["Lidé", ["man|muž|men", "woman|žena|wumen", "boy|chlapec|boj", "girl|dívka|gérl", "friend|kamarád|frend", "child|dítě|čajld", "student|student|stjúdnt", "teacher|učitel|týčr"]],
    ["Země a původ", ["country|země, stát|kantri", "city|velké město|sity", "the Czech Republic|Česká republika|d ček ripablik", "England|Anglie|inglend", "English|angličtina, anglický|ingliš", "Czech|čeština, český|ček", "from|z (odkud)|from", "where|kde|wér"]],
    ["Jak se máš", ["good|dobrý|gud", "bad|špatný|bed", "fine|v pořádku, dobře|fajn", "happy|šťastný|hepi", "sad|smutný|sed", "tired|unavený|tajrd", "hungry|hladový|hangri", "very|velmi|veri"]]
  ],
  grammar: [
    { t: "Sloveso být: am, is, are",
      h: `<p>Anglická věta musí mít vždy podmět (kdo) a sloveso. Česky řekneš „Jsem unavený“, anglicky musíš říct i <b>já</b>.</p>
<ul class="ex"><li><b>I am</b> – já jsem</li><li><b>you are</b> – ty jsi, vy jste</li><li><b>he is, she is, it is</b> – on, ona, ono je</li><li><b>we are</b> – my jsme</li><li><b>they are</b> – oni jsou</li></ul>
<p>V běžné řeči se tvary zkracují: <b>I'm</b>, <b>you're</b>, <b>he's</b>, <b>she's</b>, <b>we're</b>, <b>they're</b>.</p>
<p class="ex">I am Tom. · She is happy. · We are friends.</p>`,
      q: ["I ___ a student.|am|is|are", "She ___ happy.|is|am|are", "They ___ from England.|are|is|am", "We ___ friends.|are|is|am", "He ___ a teacher.|is|are|am", "You ___ very good.|are|is|am"] },
    { t: "Zápor: am not, isn't, aren't",
      h: `<p>Zápor uděláš slovem <b>not</b> hned za slovesem být.</p>
<ul class="ex"><li>I <b>am not</b> (I'm not) – nejsem</li><li>he <b>is not</b> (isn't) – není</li><li>we <b>are not</b> (aren't) – nejsme</li></ul>
<p>Pozor: v angličtině je ve větě jen jeden zápor.</p>
<p class="ex">I'm not tired. · She isn't sad. · They aren't from England.</p>`,
      q: ["I ___ tired.|am not|isn't|aren't", "She ___ a teacher.|isn't|aren't|am not", "We ___ hungry.|aren't|isn't|am not", "He ___ from England.|isn't|aren't|am not", "They ___ sad.|aren't|isn't|am not", "It ___ bad.|isn't|aren't|am not"] },
    { t: "Otázka: Are you…? Is she…?",
      h: `<p>V otázce se sloveso být přesune <b>před</b> podmět.</p>
<ul class="ex"><li>You are tired. → <b>Are you</b> tired?</li><li>She is a student. → <b>Is she</b> a student?</li></ul>
<p>Odpovídá se krátce a zdvořile: <b>Yes, I am.</b> / <b>No, I'm not.</b> · <b>Yes, she is.</b> / <b>No, she isn't.</b></p>
<p class="ex">Where are you from? – I'm from the Czech Republic.</p>`,
      q: ["___ you from England?|Are|Is|Am", "___ she a teacher?|Is|Are|Am", "___ they happy?|Are|Is|Am", "Are you tired? – Yes, I ___.|am|are|is", "Is he a student? – No, he ___.|isn't|aren't|am not", "Where ___ you from?|are|is|am"] }
  ],
  sent: ["Hello, I am Tom.|Ahoj, já jsem Tom.", "I am from the Czech Republic.|Jsem z České republiky.", "She is a teacher.|Ona je učitelka.", "We are students.|Jsme studenti.", "He is not sad.|On není smutný.", "Are you tired?|Jsi unavený?", "They are from England.|Oni jsou z Anglie.", "I am not hungry.|Nemám hlad.", "Where are you from?|Odkud jsi?", "Is she happy?|Je šťastná?", "You are very good.|Jsi velmi dobrý.", "I am fine, thank you.|Mám se dobře, děkuji."],
  pron: { t: "Hláska TH", h: `<p>Čeština tuhle hlásku nemá. Dej špičku jazyka lehce mezi zuby a foukni. V přepisu ji píšeme jako <b>th</b> (neznělá, jako v <i>thank</i>) nebo <b>d</b> (znělá, jako v <i>the</i>).</p><p>Nikdy to není české „s“ ani „f“.</p>`, w: ["thank you|thenk jú", "the|d(e)", "they|dej", "this|dys", "three|thrí"] }
},
{
  t: "Rodina a lidé", s: "Členové rodiny, přivlastňování, mít",
  groups: [
    ["Rodina", ["mother|matka|madr", "father|otec|fádr", "brother|bratr|bradr", "sister|sestra|sistr", "son|syn|san", "daughter|dcera|dótr", "parents|rodiče|pérents", "family|rodina|femili"]],
    ["Širší rodina", ["grandmother|babička|grenmadr", "grandfather|dědeček|grenfádr", "husband|manžel|hazbend", "wife|manželka|wajf", "uncle|strýc|ankl", "aunt|teta|ánt", "baby|miminko|bejbi", "people|lidé|pípl"]],
    ["Čí to je", ["my|můj|maj", "your|tvůj, váš|jór", "his|jeho|hiz", "her|její|hér", "our|náš|aur", "their|jejich|dér", "this|tento, toto|dys", "that|tamten, tamto|det"]],
    ["Zvířata a věci", ["dog|pes|dog", "cat|kočka|ket", "car|auto|kár", "house|dům|haus", "phone|telefon|foun", "book|kniha|buk", "bag|taška|beg", "key|klíč|kí"]],
    ["Jaký je", ["big|velký|big", "small|malý|smól", "old|starý|ould", "young|mladý|jang", "new|nový|njú", "nice|milý, hezký|najs", "beautiful|krásný|bjútyfl", "tall|vysoký (o člověku)|tól"]],
    ["Mít a ptát se", ["have|mít|hev", "has|má|hez", "who|kdo|hú", "what|co|wot", "how|jak|hau", "with|s, se|wid", "job|práce, zaměstnání|džob", "age|věk|ejdž"]]
  ],
  grammar: [
    { t: "Členy a / an a množné číslo",
      h: `<p>Před jednou počitatelnou věcí stojí člen <b>a</b>. Když slovo začíná samohláskou (a, e, i, o, u), použiješ <b>an</b>.</p>
<p class="ex">a dog · a car · <b>an</b> apple · <b>an</b> old house</p>
<p>Množné číslo vytvoříš koncovkou <b>-s</b>. Člen a/an v množném čísle není.</p>
<p class="ex">a book → two books · a friend → friends</p>
<p>Pár výjimek: man → <b>men</b>, woman → <b>women</b>, child → <b>children</b>.</p>`,
      q: ["She is ___ teacher.|a|an|–", "It is ___ old car.|an|a|–", "I have two ___.|brothers|brother|a brother", "They are ___.|friends|a friends|friend", "He is ___ English student.|an|a|–", "One child, two ___.|children|childs|child"] },
    { t: "Přivlastňovací zájmena: my, your, his…",
      h: `<p>Stojí před podstatným jménem a nemění tvar (žádné skloňování jako v češtině).</p>
<ul class="ex"><li>I → <b>my</b> (můj)</li><li>you → <b>your</b> (tvůj, váš)</li><li>he → <b>his</b> (jeho)</li><li>she → <b>her</b> (její)</li><li>we → <b>our</b> (náš)</li><li>they → <b>their</b> (jejich)</li></ul>
<p class="ex">This is my sister. Her name is Eva. · That is our house.</p>`,
      q: ["I have a dog. ___ name is Rex.|His|Her|Their", "This is Anna and this is ___ husband.|her|his|their", "We have a car. ___ car is old.|Our|Their|Your", "They are with ___ children.|their|his|our", "Tom is with ___ wife.|his|her|their", "What is ___ name? – I'm Petr.|your|my|his"] },
    { t: "Mít: have / has",
      h: `<p><b>have</b> používáš s I, you, we, they. U he, she, it je tvar <b>has</b>.</p>
<p class="ex">I have a brother. · She <b>has</b> two cats. · We have a new car.</p>
<p>Věk se anglicky říká slovesem být, ne mít: <b>I am 30.</b> (Je mi 30.)</p>`,
      q: ["I ___ a sister.|have|has|am", "She ___ a new phone.|has|have|is", "They ___ a big house.|have|has|are", "My father ___ an old car.|has|have|is", "We ___ two children.|have|has|are", "My brother ___ 20.|is|has|have"] }
  ],
  sent: ["This is my family.|Tohle je moje rodina.", "I have a brother and a sister.|Mám bratra a sestru.", "My mother is a teacher.|Moje matka je učitelka.", "She has two cats.|Ona má dvě kočky.", "His car is very old.|Jeho auto je velmi staré.", "Who is that man?|Kdo je tamten muž?", "What is your name?|Jak se jmenuješ?", "Our house is not big.|Náš dům není velký.", "Their children are young.|Jejich děti jsou malé.", "Her husband is tall.|Její manžel je vysoký.", "We have a new dog.|Máme nového psa.", "How old are you?|Kolik je ti let?"],
  pron: { t: "W není V", h: `<p>Anglické <b>w</b> se říká se zakulacenými rty, jako krátké „u“: <i>we</i> zní skoro jako „uí“. Naopak <b>v</b> je stejné jako české v (horní zuby na spodním rtu).</p><p>Rozdíl je slyšet: <i>west</i> (západ) × <i>vest</i> (vesta).</p>`, w: ["we|wí", "what|wot", "woman|wumen", "very|veri", "have|hev"] }
},
{
  t: "Čísla a čas", s: "Počítání, dny v týdnu, kolik je hodin",
  groups: [
    ["Čísla 1–8", ["one|jedna|wan", "two|dvě|tú", "three|tři|thrí", "four|čtyři|fór", "five|pět|fajv", "six|šest|siks", "seven|sedm|sevn", "eight|osm|ejt"]],
    ["Další čísla", ["nine|devět|najn", "ten|deset|ten", "eleven|jedenáct|ilevn", "twelve|dvanáct|twelv", "twenty|dvacet|twenty", "thirty|třicet|thérty", "fifty|padesát|fifty", "hundred|sto|handred"]],
    ["Dny v týdnu", ["Monday|pondělí|mandej", "Tuesday|úterý|tjúzdej", "Wednesday|středa|wenzdej", "Thursday|čtvrtek|thérzdej", "Friday|pátek|frajdej", "Saturday|sobota|setrdej", "Sunday|neděle|sandej", "week|týden|wík"]],
    ["Části dne", ["day|den|dej", "today|dnes|tudej", "tomorrow|zítra|tumorou", "morning|ráno, dopoledne|mórnyng", "afternoon|odpoledne|áftrnún", "evening|večer|ívnyng", "night|noc|najt", "now|teď|nau"]],
    ["Hodiny a kalendář", ["time|čas|tajm", "hour|hodina (60 minut)|auer", "minute|minuta|minyt", "o'clock|hodin (celá hodina)|oklok", "half|půl|háf", "year|rok|jír", "month|měsíc|manth", "when|kdy|wen"]],
    ["Tady a tam", ["here|tady|hír", "there|tam|dér", "these|tyto (blízko)|díz", "those|tamty (daleko)|douz", "many|mnoho|meny", "number|číslo|nambr", "birthday|narozeniny|bérthdej", "how old|jak starý|hau ould"]]
  ],
  grammar: [
    { t: "this, that, these, those",
      h: `<p>Ukazuješ na věci blízko, nebo daleko, a je jich jedna, nebo víc.</p>
<ul class="ex"><li><b>this</b> – tento (jedna věc, blízko)</li><li><b>that</b> – tamten (jedna věc, daleko)</li><li><b>these</b> – tyto (víc věcí, blízko)</li><li><b>those</b> – tamty (víc věcí, daleko)</li></ul>
<p class="ex">This is my phone. · That is our house. · These are my keys. · Those are his books.</p>`,
      q: ["___ is my book here.|This|These|Those", "___ are my keys here.|These|This|That", "Who is ___ man there?|that|these|those", "___ cars there are new.|Those|That|This", "___ are my parents.|These|This|That", "Is ___ your bag here?|this|these|those"] },
    { t: "Čísla a věk",
      h: `<p>Čísla 13–19 končí na <b>-teen</b> (thirteen, fourteen…), desítky na <b>-ty</b> (thirty, forty…). Složená čísla se píšou s pomlčkou: <b>twenty-one</b>, <b>thirty-five</b>.</p>
<p>Na věk se ptáš <b>How old are you?</b> a odpovídáš slovesem být:</p>
<p class="ex">I am twenty-five. · My son is six. · She is thirty years old.</p>`,
      q: ["How old ___ you?|are|have|is", "I ___ thirty.|am|have|has", "Ten and ten is ___.|twenty|twelve|two", "Six and five is ___.|eleven|twelve|seven", "My daughter ___ four years old.|is|has|are", "A week has ___ days.|seven|five|ten"] },
    { t: "Čas: at, on, in",
      h: `<p>S časem se pojí tři předložky:</p>
<ul class="ex"><li><b>at</b> + přesný čas: at five o'clock, at night</li><li><b>on</b> + den: on Monday, on my birthday</li><li><b>in</b> + část dne, měsíc, rok: in the morning, in May, in 2025</li></ul>
<p>Kolik je hodin? <b>What time is it?</b> – <b>It's six o'clock.</b> · <b>It's half past six.</b> (půl sedmé, doslova „půl po šesté“)</p>`,
      q: ["I am here ___ Monday.|on|in|at", "The film is ___ eight o'clock.|at|on|in", "I am tired ___ the evening.|in|on|at", "My birthday is ___ May.|in|on|at", "What time ___ it?|is|are|has", "We are at home ___ night.|at|in|on"] }
  ],
  sent: ["What time is it?|Kolik je hodin?", "It is five o'clock.|Je pět hodin.", "Today is Monday.|Dnes je pondělí.", "I am twenty years old.|Je mi dvacet let.", "These are my keys.|Tohle jsou moje klíče.", "That is his house.|Tamto je jeho dům.", "My birthday is in May.|Narozeniny mám v květnu.", "We are here on Friday.|Jsme tady v pátek.", "A year has twelve months.|Rok má dvanáct měsíců.", "When is your birthday?|Kdy máš narozeniny?", "I have three brothers.|Mám tři bratry.", "Those are our friends.|Tamto jsou naši přátelé."],
  pron: { t: "Thirteen × thirty", h: `<p>Čísla na <b>-teen</b> mají přízvuk na konci a dlouhé í: thir<b>TEEN</b>. Desítky na <b>-ty</b> mají přízvuk na začátku a krátký konec: <b>THIR</b>ty.</p><p>V obchodě je to rozdíl mezi 13 a 30 librami, tak si ho hlídej.</p>`, w: ["thirteen|thértýn", "thirty|thérty", "fifteen|fiftýn", "fifty|fifty", "Wednesday|wenzdej"] }
},
{
  t: "Domov", s: "Místnosti, nábytek a kde co je",
  groups: [
    ["Místnosti", ["home|domov|houm", "flat|byt|flet", "room|pokoj|rúm", "kitchen|kuchyně|kičn", "bathroom|koupelna|báthrúm", "bedroom|ložnice|bedrúm", "living room|obývací pokoj|living rúm", "garden|zahrada|gárdn"]],
    ["Nábytek", ["table|stůl|tejbl", "chair|židle|čér", "bed|postel|bed", "door|dveře|dór", "window|okno|windou", "sofa|pohovka|soufa", "lamp|lampa|lemp", "shelf|police|šelf"]],
    ["Kde to je", ["in|v|in", "on|na|on", "under|pod|andr", "next to|vedle|nekst tu", "behind|za|bihajnd", "in front of|před (místně)|in frant ov", "between|mezi|bitwín", "near|blízko|nír"]],
    ["Věci doma", ["TV|televize|tý ví", "computer|počítač|kompjútr", "fridge|lednice|fridž", "cup|hrnek|kap", "glass|sklenice|glás", "plate|talíř|plejt", "clock|hodiny (na zdi)|klok", "picture|obrázek|pikčr"]],
    ["Jaké to tam je", ["clean|čistý|klín", "dirty|špinavý|dérty", "warm|teplý|wórm", "cold|studený|kould", "quiet|tichý|kwajet", "cheap|levný|číp", "expensive|drahý|ikspensiv", "floor|podlaha, patro|flór"]],
    ["Co doma děláme", ["live|bydlet, žít|liv", "open|otevřít|oupn", "close|zavřít|klouz", "sit|sedět|sit", "sleep|spát|slíp", "cook|vařit|kuk", "wall|zeď|wól", "street|ulice|strít"]]
  ],
  grammar: [
    { t: "There is / there are",
      h: `<p>Když říkáš, že někde něco <b>je</b> (existuje), začni <b>There is</b> (jedna věc) nebo <b>There are</b> (víc věcí).</p>
<p class="ex">There is a table in the kitchen. · There are two chairs in my room.</p>
<p>Zápor: <b>There isn't</b> a TV. · <b>There aren't</b> any chairs.<br>Otázka: <b>Is there</b> a garden? · <b>Are there</b> two bedrooms?</p>`,
      q: ["There ___ a bed in the room.|is|are|have", "There ___ four chairs in the kitchen.|are|is|has", "___ there a garden?|Is|Are|Have", "There ___ a TV in my bedroom.|isn't|aren't|not", "___ there two bathrooms?|Are|Is|Has", "There ___ many books on the shelf.|are|is|has"] },
    { t: "Předložky místa",
      h: `<p>Říkají, kde něco je. Stojí před podstatným jménem a to se neskloňuje.</p>
<ul class="ex"><li><b>in</b> the fridge – v lednici</li><li><b>on</b> the table – na stole</li><li><b>under</b> the bed – pod postelí</li><li><b>next to</b> the door – vedle dveří</li><li><b>behind</b> the sofa – za pohovkou</li><li><b>in front of</b> the house – před domem</li><li><b>between</b> the bed and the window – mezi postelí a oknem</li></ul>`,
      q: ["The milk is ___ the fridge.|in|on|under", "The cup is ___ the table.|on|in|between", "The cat is ___ the bed. (pod)|under|on|in", "The lamp is ___ the sofa. (vedle)|next to|between|under", "The car is ___ the house. (před)|in front of|behind|in", "The garden is ___ the house. (za)|behind|under|between"] },
    { t: "Přivlastňovací 's",
      h: `<p>Když něco někomu patří, přidáš ke jménu <b>'s</b>. Pořadí je obráceně než v češtině: nejdřív majitel, pak věc.</p>
<p class="ex">Tom<b>'s</b> car – Tomovo auto · my mother<b>'s</b> house – dům mojí matky · my sister<b>'s</b> room – pokoj mojí sestry</p>
<p>Nepleť si to se zkráceným is: <i>Tom's tired</i> = Tom is tired.</p>`,
      q: ["This is ___ room.|my brother's|my brother|brother my", "That is ___ car.|Eva's|Eva|Evas", "The ___ name is Rex.|dog's|dog|dogs", "Is this your ___ phone?|father's|father|fathers", "___ flat is small.|Tom's|Tom|Toms'", "It is my ___ birthday today.|sister's|sister|sisters"] }
  ],
  sent: ["There is a table in the kitchen.|V kuchyni je stůl.", "There are two bedrooms.|Jsou tam dvě ložnice.", "The cat is under the bed.|Kočka je pod postelí.", "My flat is small but nice.|Můj byt je malý, ale hezký.", "The keys are on the table.|Klíče jsou na stole.", "Is there a garden?|Je tam zahrada?", "This is my sister's room.|Tohle je pokoj mojí sestry.", "The lamp is next to the bed.|Lampa je vedle postele.", "There isn't a TV in the bedroom.|V ložnici není televize.", "The car is in front of the house.|Auto je před domem.", "I live in a small flat.|Bydlím v malém bytě.", "The kitchen is very clean.|Kuchyně je velmi čistá."],
  pron: { t: "Krátké i × dlouhé í", h: `<p>V angličtině délka samohlásky mění význam slova. Krátké <b>i</b> je uvolněné, skoro jako „e“. Dlouhé <b>í</b> je napjaté, s úsměvem.</p><p><i>sit</i> (sedět) × <i>seat</i> (sedadlo) · <i>live</i> (bydlet) × <i>leave</i> (odejít)</p>`, w: ["sit|sit", "sleep|slíp", "kitchen|kičn", "clean|klín", "live|liv"] }
},
{
  t: "Jídlo a pití", s: "Co jíme a pijeme, přítomný čas",
  groups: [
    ["Jídlo", ["food|jídlo|fúd", "bread|chléb|bred", "cheese|sýr|číz", "egg|vejce|eg", "meat|maso|mít", "chicken|kuře|čikn", "fish|ryba|fiš", "rice|rýže|rajs"]],
    ["Pití", ["water|voda|wótr", "coffee|káva|kofi", "tea|čaj|tý", "milk|mléko|milk", "juice|džus|džús", "beer|pivo|bír", "wine|víno|wajn", "drink|pít, nápoj|drink"]],
    ["Ovoce a zelenina", ["apple|jablko|epl", "banana|banán|benána", "orange|pomeranč|orindž", "potato|brambora|potejtou", "tomato|rajče|tomátou", "vegetables|zelenina|vedžtblz", "fruit|ovoce|frút", "salad|salát|seled"]],
    ["Jídla během dne", ["breakfast|snídaně|brekfest", "lunch|oběd|lanč", "dinner|večeře|dynr", "soup|polévka|súp", "sugar|cukr|šugr", "salt|sůl|sólt", "butter|máslo|batr", "cake|dort|kejk"]],
    ["Důležitá slovesa", ["eat|jíst|ít", "like|mít rád|lajk", "want|chtít|wont", "need|potřebovat|níd", "buy|koupit|baj", "make|dělat, vyrobit|mejk", "love|milovat|lav", "know|vědět, znát|nou"]],
    ["V restauraci", ["restaurant|restaurace|restront", "menu|jídelní lístek|menjú", "bill|účet|bil", "waiter|číšník|wejtr", "delicious|výborný (o jídle)|dylišs", "hot|horký|hot", "sweet|sladký|swít", "of course|samozřejmě|ov kórs"]]
  ],
  grammar: [
    { t: "Přítomný čas: I, you, we, they",
      h: `<p>Pro věci, které děláš běžně nebo které platí obecně, stačí základní tvar slovesa. Podmět musí být vždy vyslovený.</p>
<p class="ex">I drink coffee. · You eat meat. · We like fish. · They live in Prague.</p>
<p>Pořadí slov je pevné: <b>kdo – sloveso – co</b>. „Kávu piju já“ se anglicky řekne zase jen <i>I drink coffee</i>.</p>`,
      q: ["I ___ coffee in the morning.|drink|am drink|drinks", "We ___ in a small flat.|live|lives|are live", "They ___ bread and cheese.|eat|eats|are eat", "You ___ my brother.|know|knows|are know", "My parents ___ tea.|like|likes|is like", "I ___ a new phone.|want|wants|am want"] },
    { t: "Zápor: don't",
      h: `<p>Zápor v přítomném čase tvoříš pomocným <b>do not</b>, zkráceně <b>don't</b>. Sloveso za ním zůstává v základním tvaru.</p>
<p class="ex">I <b>don't</b> eat meat. · We <b>don't</b> like beer. · They <b>don't</b> have a car.</p>
<p>Neříkej <i>I not eat</i> ani <i>I eat not</i>. U slovesa být se don't nepoužívá: <i>I'm not hungry</i>.</p>`,
      q: ["I ___ meat.|don't eat|not eat|eat not", "We ___ a car.|don't have|haven't not|not have", "They ___ coffee.|don't drink|aren't drink|drink not", "I ___ hungry.|am not|don't|don't be", "You ___ my sister.|don't know|not know|aren't know", "My friends ___ fish.|don't like|doesn't like|not like"] },
    { t: "Otázka: Do you…?",
      h: `<p>Otázku začneš pomocným <b>Do</b>, potom podmět a sloveso v základním tvaru.</p>
<p class="ex"><b>Do you</b> like tea? · <b>Do they</b> eat meat? · <b>Do we</b> need milk?</p>
<p>Krátká odpověď: <b>Yes, I do.</b> / <b>No, I don't.</b></p>
<p>V restauraci se hodí: <b>I'd like</b> a coffee, please. (Dal bych si kávu.)</p>`,
      q: ["___ you like fish?|Do|Are|Is", "Do you drink wine? – Yes, I ___.|do|am|drink", "___ they live here?|Do|Are|Have", "Do you eat meat? – No, I ___.|don't|am not|not", "___ you hungry?|Are|Do|Have", "What ___ you want?|do|are|is"] }
  ],
  sent: ["I drink coffee in the morning.|Ráno piju kávu.", "We don't eat meat.|Nejíme maso.", "Do you like fish?|Máš rád ryby?", "I want a glass of water.|Chci sklenici vody.", "They have breakfast at seven o'clock.|Snídají v sedm hodin.", "I don't like milk.|Nemám rád mléko.", "The soup is very hot.|Polévka je velmi horká.", "Do you want tea or coffee?|Chceš čaj, nebo kávu?", "We need bread and butter.|Potřebujeme chleba a máslo.", "I love this cake.|Miluju tenhle dort.", "The bill, please.|Účet, prosím.", "I'd like a salad, please.|Dal bych si salát, prosím."],
  pron: { t: "Koncové -er", h: `<p>Koncovka <b>-er</b> se v britské angličtině nevyslovuje jako „er“. Zbyde jen krátká neurčitá hláska, něco mezi „a“ a „e“. Američané k ní přidají měkké „r“.</p><p>Neříkej tedy „vater“, ale spíš „wótr“.</p>`, w: ["water|wótr", "butter|batr", "dinner|dynr", "sugar|šugr", "waiter|wejtr"] }
},
{
  t: "Každý den", s: "Denní režim, práce a jak často",
  groups: [
    ["Ráno", ["get up|vstávat|get ap", "wake up|probudit se|wejk ap", "wash|mýt (se)|woš", "shower|sprcha|šauer", "dress|oblékat se, šaty|dres", "go|jít, jet|gou", "work|pracovat, práce|wérk", "school|škola|skúl"]],
    ["Přes den", ["start|začít|stárt", "finish|skončit|finyš", "study|studovat, učit se|stady", "read|číst|ríd", "write|psát|rajt", "speak|mluvit|spík", "listen|poslouchat|lisn", "learn|učit se|lérn"]],
    ["Večer", ["come|přijít|kam", "watch|dívat se|woč", "play|hrát|plej", "relax|odpočívat|rileks", "go to bed|jít spát|gou tu bed", "help|pomáhat|help", "call|volat|kól", "meet|potkat, sejít se|mít"]],
    ["Jak často", ["always|vždy|ólwejz", "usually|obvykle|júžueli", "often|často|ofn", "sometimes|někdy|samtajmz", "never|nikdy|nevr", "every day|každý den|evri dej", "early|brzy (ráno)|érli", "late|pozdě|lejt"]],
    ["V práci", ["office|kancelář|ofis", "boss|šéf|bos", "colleague|kolega|kolíg", "meeting|schůzka, porada|mítyng", "email|e-mail|ímejl", "money|peníze|many", "busy|zaneprázdněný|bizi", "free|volný, zdarma|frí"]],
    ["Proč a kdy", ["why|proč|waj", "because|protože|bikóz", "which|který|wič", "how often|jak často|hau ofn", "also|také|ólsou", "only|jen, pouze|ounli", "before|před (časově)|bifór", "after|po (časově)|áftr"]]
  ],
  grammar: [
    { t: "He, she, it: koncovka -s",
      h: `<p>Ve třetí osobě jednotného čísla (he, she, it, moje máma, Tom…) dostane sloveso koncovku <b>-s</b>.</p>
<p class="ex">I work → he work<b>s</b> · I live → she live<b>s</b> · I read → Tom read<b>s</b></p>
<p>Po <i>-sh, -ch, -s, -o</i> je to <b>-es</b>: watch<b>es</b>, finish<b>es</b>, go<b>es</b>. Sloveso <i>study</i> → stud<b>ies</b>. Výjimka: have → <b>has</b>.</p>`,
      q: ["She ___ in an office.|works|work|working", "My brother ___ TV every evening.|watches|watch|watchs", "Tom ___ to work at eight.|goes|go|gos", "We ___ at seven o'clock.|get up|gets up|getting up", "My mother ___ English.|speaks|speak|speakes", "He ___ a new job.|has|have|haves"] },
    { t: "Doesn't a otázka Does…?",
      h: `<p>Ve třetí osobě se pomocné do mění na <b>does</b>. Koncovka -s se tím „přestěhuje“ na pomocné sloveso a hlavní sloveso je zase v základním tvaru.</p>
<p class="ex">He work<b>s</b>. → He <b>doesn't</b> work. → <b>Does</b> he work?</p>
<p>Krátká odpověď: <b>Yes, she does.</b> / <b>No, she doesn't.</b></p>`,
      q: ["She ___ coffee.|doesn't drink|don't drink|doesn't drinks", "___ he work on Saturday?|Does|Do|Is", "Tom ___ a car.|doesn't have|doesn't has|don't have", "___ your sister live here?|Does|Do|Is", "Does she speak English? – Yes, she ___.|does|do|speaks", "My parents ___ late.|don't work|doesn't work|not work"] },
    { t: "Jak často: always, often, never",
      h: `<p>Slova <b>always, usually, often, sometimes, never</b> stojí <b>před</b> hlavním slovesem, ale <b>za</b> slovesem být.</p>
<p class="ex">I <b>always</b> get up early. · She <b>never</b> drinks coffee. · He is <b>often</b> late.</p>
<p>S <b>never</b> je sloveso kladné (jen jeden zápor): <i>I never eat meat.</i></p>
<p>Delší výrazy jako <b>every day</b> patří na konec věty.</p>`,
      q: ["I ___ early.|always get up|get always up|get up always", "She ___ late.|is never|never is|doesn't never", "We ___ TV in the evening.|usually watch|watch usually|usually watches", "He ___ meat.|never eats|doesn't never eat|never eat", "I go to work ___.|every day|always day|often day", "They ___ tired after work.|are often|often are|do often"] }
  ],
  sent: ["I get up at six o'clock.|Vstávám v šest hodin.", "She works in an office.|Ona pracuje v kanceláři.", "He doesn't watch TV.|On se nedívá na televizi.", "Does she speak English?|Mluví anglicky?", "I always have breakfast at home.|Vždy snídám doma.", "We usually finish at five.|Obvykle končíme v pět.", "My brother never gets up early.|Můj bratr nikdy nevstává brzy.", "I learn English every day.|Učím se anglicky každý den.", "What time do you start work?|V kolik začínáš pracovat?", "She goes to bed late.|Chodí spát pozdě.", "I am tired because I work late.|Jsem unavený, protože pracuju dlouho.", "He sometimes helps my mother.|Někdy pomáhá mojí mámě."],
  pron: { t: "Koncovka -s má tři podoby", h: `<p>Stejné písmeno, tři různé zvuky:</p><ul class="ex"><li>po neznělé hlásce (p, t, k, f) zní <b>s</b>: works, likes</li><li>po znělé hlásce a samohlásce zní <b>z</b>: plays, reads, goes</li><li>po sykavce (s, sh, ch) zní <b>iz</b>: watches, finishes</li></ul>`, w: ["works|wérks", "plays|plejz", "reads|rídz", "watches|wočiz", "finishes|finyšiz"] }
},
{
  t: "Město a cestování", s: "Orientace ve městě, doprava, otázky",
  groups: [
    ["Místa ve městě", ["shop|obchod|šop", "bank|banka|benk", "hospital|nemocnice|hospitl", "station|nádraží|stejšn", "airport|letiště|érport", "hotel|hotel|houtel", "park|park|párk", "square|náměstí|skwér"]],
    ["Doprava", ["bus|autobus|bas", "train|vlak|trejn", "plane|letadlo|plejn", "tram|tramvaj|trem", "bike|kolo|bajk", "taxi|taxi|teksi", "ticket|jízdenka, lístek|tykit", "underground|metro|andrgraund"]],
    ["Kudy", ["left|vlevo|left", "right|vpravo, správně|rajt", "straight on|rovně|strejt on", "turn|zahnout|térn", "stop|zastavit, zastávka|stop", "far|daleko|fár", "map|mapa|mep", "way|cesta, způsob|wej"]],
    ["Na cestách", ["travel|cestovat|trevl", "holiday|dovolená, prázdniny|holidej", "passport|pas|pásport", "luggage|zavazadla|lagidž", "trip|výlet|trip", "arrive|přijet|erajv", "leave|odjet, odejít|lív", "stay|zůstat, bydlet (v hotelu)|stej"]],
    ["Co ještě ve městě najdeš", ["bridge|most|bridž", "church|kostel|čérč", "museum|muzeum|mjuzíem", "cinema|kino|sinema", "pharmacy|lékárna|fármesi", "post office|pošta|poust ofis", "supermarket|supermarket|súprmárkit", "toilet|záchod|tojlet"]],
    ["Užitečná slovesa", ["excuse me|promiňte (oslovení)|ikskjúz mí", "can|moci, umět|ken", "find|najít|fajnd", "look for|hledat|luk fór", "walk|jít pěšky|wók", "drive|řídit|drajv", "take|vzít, jet (čím)|tejk", "wait|čekat|wejt"]]
  ],
  grammar: [
    { t: "Otázky s tázacím slovem",
      h: `<p>Tázací slovo stojí na začátku, pak pomocné <b>do / does</b> (nebo sloveso být), podmět a sloveso.</p>
<ul class="ex"><li><b>Where</b> do you live? – Kde bydlíš?</li><li><b>What</b> does she do? – Co dělá? (čím je)</li><li><b>When</b> does the train leave? – Kdy odjíždí vlak?</li><li><b>How</b> do you go to work? – Jak jezdíš do práce?</li><li><b>Where</b> is the station? – Kde je nádraží?</li></ul>
<p>Dopravní prostředek: <b>by</b> bus, <b>by</b> train, <b>by</b> car. Pěšky: <b>on foot</b>.</p>`,
      q: ["Where ___ you live?|do|are|does", "When ___ the train leave?|does|do|is", "Where ___ the bank?|is|does|do", "I go to work ___ bus.|by|with|on", "What time ___ the shops open?|do|does|are", "How ___ she go to school?|does|do|is"] },
    { t: "Rozkaz a pokyny",
      h: `<p>Rozkaz je jen základní tvar slovesa, bez podmětu. Zápor začíná <b>Don't</b>.</p>
<p class="ex">Turn left. · Go straight on. · Wait here, please. · <b>Don't</b> stop.</p>
<p>Zeptat se na cestu: <b>Excuse me, where is the station?</b><br>Odpověď: <b>Go straight on and turn right. It's next to the bank.</b></p>`,
      q: ["___ left at the bank.|Turn|Turns|You turning", "___ here, please.|Wait|Waits|Waiting", "___ the tram, take the bus.|Don't take|Not take|Doesn't take", "Go ___ on.|straight|right|far", "___ me, where is the hotel?|Excuse|Sorry|Please", "___ late!|Don't be|Not be|Don't"] },
    { t: "Zájmena v předmětu: me, him, her…",
      h: `<p>Když zájmeno stojí <b>za slovesem</b> nebo za předložkou, má jiný tvar:</p>
<ul class="ex"><li>I → <b>me</b></li><li>you → <b>you</b></li><li>he → <b>him</b></li><li>she → <b>her</b></li><li>it → <b>it</b></li><li>we → <b>us</b></li><li>they → <b>them</b></li></ul>
<p class="ex">I know <b>him</b>. · She helps <b>us</b>. · Wait for <b>me</b>! · Do you like <b>them</b>?</p>`,
      q: ["This is Tom. Do you know ___?|him|he|his", "Wait for ___, please!|me|I|my", "I have two sisters. I often call ___.|them|they|their", "She is nice. I like ___.|her|she|hers", "We are here. Can you help ___?|us|we|our", "Where is my key? I need ___.|it|him|them"] }
  ],
  sent: ["Excuse me, where is the station?|Promiňte, kde je nádraží?", "Go straight on and turn left.|Jděte rovně a zahněte doleva.", "I go to work by bus.|Jezdím do práce autobusem.", "When does the train leave?|Kdy odjíždí vlak?", "The hotel is near the airport.|Hotel je blízko letiště.", "Is it far from here?|Je to odsud daleko?", "I am looking for a pharmacy.|Hledám lékárnu.", "Can you help me, please?|Můžete mi pomoct, prosím?", "Two tickets to London, please.|Dvě jízdenky do Londýna, prosím.", "The bank is next to the post office.|Banka je vedle pošty.", "Don't wait for us.|Nečekejte na nás.", "Where do you want to go?|Kam chceš jet?"],
  pron: { t: "Němá písmena", h: `<p>Angličtina píše písmena, která nevyslovuje. Nejčastější případy:</p><ul class="ex"><li><b>k</b> před n: <i>know</i> = „nou“</li><li><b>w</b> před r: <i>write</i> = „rajt“</li><li><b>l</b> ve <i>walk, talk, half</i></li><li><b>t</b> v <i>listen</i></li><li><b>gh</b> v <i>right, night, eight</i></li></ul>`, w: ["know|nou", "write|rajt", "walk|wók", "listen|lisn", "right|rajt"] }
}
];
