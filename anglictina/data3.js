// Obsah kurzu, týdny 15–20 (úroveň A2).
window.UNITS.push(
{
  t: "Lidé a povaha", s: "Jací jsme a co jsme už zažili",
  groups: [
    ["Povaha", ["kind|laskavý|kajnd", "friendly|přátelský|frendli", "funny|vtipný|fany", "serious|vážný|síries", "shy|stydlivý|šaj", "lazy|líný|lejzi", "clever|chytrý|klevr", "polite|zdvořilý|polajt"]],
    ["Další vlastnosti", ["honest|upřímný, čestný|onyst", "rude|hrubý, nezdvořilý|rúd", "patient|trpělivý|pejšnt", "brave|statečný|brejv", "generous|štědrý|dženeres", "selfish|sobecký|selfiš", "calm|klidný|kám", "confident|sebevědomý|konfidnt"]],
    ["Vzhled", ["slim|štíhlý|slim", "pretty|hezká|priti", "handsome|pohledný (o muži)|hensm", "ugly|ošklivý|agli", "curly|kudrnatý|kérli", "straight|rovný|strejt", "blond|blonďatý|blond", "beard|vousy|bírd"]],
    ["Životní etapy", ["adult|dospělý|edalt", "teenager|náctiletý|týnejdžr", "childhood|dětství|čajldhud", "single|svobodný|singl", "married|ženatý, vdaná|merid", "divorced|rozvedený|dyvórst", "relationship|vztah|rilejšnšip", "stranger|cizí člověk|strejndžr"]],
    ["Mezi lidmi", ["look like|vypadat jako|luk lajk", "agree|souhlasit|egrí", "argue|hádat se|árgjú", "laugh|smát se|láf", "cry|plakat|kraj", "smile|usmívat se|smajl", "trust|důvěřovat|trast", "miss|chybět, zmeškat|mis"]],
    ["Třetí tvary sloves", ["been|byl (3. tvar od be)|bín", "done|udělal (3. tvar od do)|dan", "seen|viděl (3. tvar od see)|sín", "gone|odešel (3. tvar od go)|gon", "eaten|snědl (3. tvar od eat)|ítn", "written|napsal (3. tvar od write)|ritn", "ever|někdy (v životě)|evr", "twice|dvakrát|twajs"]]
  ],
  grammar: [
    { t: "Předpřítomný čas: have + 3. tvar",
      h: `<p>Když mluvíš o zkušenosti a <b>neříkáš kdy</b>, použiješ <b>have / has + třetí tvar slovesa</b>. U pravidelných sloves je třetí tvar stejný jako minulý (-ed), u nepravidelných se ho musíš naučit.</p>
<p class="ex">I <b>have visited</b> London. · She <b>has seen</b> this film. · We<b>'ve eaten</b> sushi.</p>
<p>Česky to překládáme minulým časem, ale anglicky to není minulost s datem. Jakmile řekneš kdy (yesterday, in 2020), musí být minulý čas prostý.</p>`,
      q: ["I ___ London twice.|have visited|visited have|am visited", "She ___ this film.|has seen|have seen|has saw", "We ___ sushi many times.|have eaten|have ate|has eaten", "He ___ three books.|has written|has wrote|have written", "They ___ their homework.|have done|have did|has done", "I ___ to Paris last year.|went|have gone|have been"] },
    { t: "Have you ever…? a never",
      h: `<p>Na zkušenosti se ptáš <b>Have you ever</b> + 3. tvar (Už jsi někdy…?). Odpověď: <b>Yes, I have.</b> / <b>No, I haven't.</b></p>
<p class="ex">Have you ever been to England? · Has she ever eaten sushi?</p>
<p><b>never</b> znamená „nikdy“ a sloveso je kladné: <i>I have never seen it.</i></p>
<p>Rozdíl: <b>been to</b> = byl tam a vrátil se, <b>gone to</b> = odešel a ještě tam je.</p>`,
      q: ["___ you ever been to England?|Have|Did|Are", "I have ___ seen a lion.|never|ever|not never", "Has she ever ___ a horse?|ridden|rode|ride", "Have you ever eaten sushi? – No, I ___.|haven't|didn't|don't", "Tom isn't here. He has ___ to the shop.|gone|been|went", "I have ___ to Rome twice. It was great.|been|gone|went"] },
    { t: "Popis lidí: be like × look like",
      h: `<p>Tři podobné otázky, tři různé významy:</p>
<ul class="ex"><li><b>What is he like?</b> – Jaký je? (povaha): He is kind and funny.</li><li><b>What does he look like?</b> – Jak vypadá?: He is tall and has a beard.</li><li><b>What does he like?</b> – Co má rád?: He likes football.</li></ul>
<p>Vlasy a oči popisuješ slovesem <b>have</b>: <i>She has long curly hair.</i> Pořadí je délka – tvar – barva.</p>`,
      q: ["What is your boss ___? – He's very patient.|like|look like|liking", "What does she ___? – She's tall and slim.|look like|like|be like", "She ___ long blond hair.|has|is|looks", "He ___ very shy.|is|has|looks like", "What does he ___? – He likes music.|like|look|look like", "She has ___ hair.|short curly black|black curly short|curly black short"] }
  ],
  sent: ["I have never been to England.|Nikdy jsem nebyl v Anglii.", "Have you ever eaten sushi?|Jedl jsi někdy sushi?", "She has seen this film twice.|Tenhle film viděla dvakrát.", "My boss is very patient.|Můj šéf je velmi trpělivý.", "What does your brother look like?|Jak vypadá tvůj bratr?", "He is tall and has a beard.|Je vysoký a má vousy.", "We have visited many countries.|Navštívili jsme mnoho zemí.", "What is your sister like?|Jaká je tvoje sestra?", "She is kind but a little shy.|Je laskavá, ale trochu stydlivá.", "I don't agree with you.|Nesouhlasím s tebou.", "He has gone to the shop.|Šel do obchodu.", "They often argue about money.|Často se hádají o peníze."],
  pron: { t: "have a has ve zkrácené podobě", h: `<p>V předpřítomném čase se <b>have</b> skoro vždy zkracuje na <b>'ve</b> a <b>has</b> na <b>'s</b>. Zní to jako jedno slovo se zájmenem.</p><p>Pozor: <i>he's</i> může být <i>he is</i> i <i>he has</i>. Poznáš to podle toho, co následuje.</p>`, w: ["I've been|ajv bín", "she's seen|šíz sín", "we've done|wív dan", "haven't|hevnt", "he's gone|híz gon"] },
  dlg: [
    ["Nový kolega", "Have you met the new colleague?|Už jsi potkal nového kolegu?", "No, I haven't. What is he like?|Ne, nepotkal. Jaký je?", "He is friendly and very funny.|Je přátelský a velmi vtipný.", "What does he look like?|Jak vypadá?", "He is tall and has a beard.|Je vysoký a má vousy.", "I think I have seen him.|Myslím, že jsem ho viděl."],
    ["Zkušenosti", "Have you ever been to Italy?|Byl jsi někdy v Itálii?", "Yes, I have been there twice.|Ano, byl jsem tam dvakrát.", "I have never been abroad.|Já jsem nikdy nebyl v zahraničí.", "Really? You should go.|Opravdu? Měl bys jet.", "Have you ever eaten real pizza?|Jedl jsi někdy pravou pizzu?", "Of course. It was delicious.|Samozřejmě. Byla výborná."]
  ]
},
{
  t: "Právě se stalo", s: "Novinky, výsledky a jak dlouho",
  groups: [
    ["Třetí tvary II", ["had|měl (3. tvar od have)|hed", "made|udělal (3. tvar od make)|mejd", "taken|vzal (3. tvar od take)|tejkn", "given|dal (3. tvar od give)|givn", "known|znal (3. tvar od know)|noun", "spoken|mluvil (3. tvar od speak)|spoukn", "broken|rozbitý, rozbil|broukn", "forgotten|zapomněl (3. tvar)|forgotn"]],
    ["Třetí tvary III", ["bought|koupil (3. tvar od buy)|bót", "found|našel (3. tvar od find)|faund", "lost|ztratil (3. tvar od lose)|lost", "left|odešel, nechal (3. tvar)|left", "met|potkal (3. tvar od meet)|met", "read|četl (3. tvar od read)|red", "sent|poslal (3. tvar od send)|sent", "paid|zaplatil (3. tvar od pay)|pejd"]],
    ["Už a ještě ne", ["just|právě, zrovna|džast", "yet|ještě (ne), už (v otázce)|jet", "since|od (určité doby)|sins", "for|po dobu, pro|fór", "recently|nedávno|rísntli", "so far|zatím, doposud|sou fár", "lately|poslední dobou|lejtli", "how long|jak dlouho|hau long"]],
    ["Změny v životě", ["grow up|vyrůst|grou ap", "retire|odejít do důchodu|ritajr", "graduate|dostudovat|gredžuejt", "get married|vzít se|get merid", "fall in love|zamilovat se|fól in lav", "die|zemřít|daj", "be born|narodit se|bí bórn", "succeed|uspět|saksíd"]],
    ["Výsledky", ["result|výsledek|rizalt", "success|úspěch|sakses", "mistake|chyba|mistejk", "experience|zkušenost|ikspíriens", "chance|šance, příležitost|čáns", "reason|důvod|rízn", "goal|cíl, gól|goul", "progress|pokrok|prougres"]],
    ["Domácí povinnosti", ["tidy|uklidit, uklizený|tajdy", "repair|opravit|ripér", "fix|spravit|fiks", "lend|půjčit (někomu)|lend", "borrow|půjčit si|borou", "prepare|připravit|pripér", "check|zkontrolovat|ček", "deliver|doručit|dylivr"]]
  ],
  grammar: [
    { t: "just, already, yet",
      h: `<p>Tato tři slova se pojí s předpřítomným časem:</p>
<ul class="ex"><li><b>just</b> (právě) – mezi have a sloveso: I've <b>just</b> finished.</li><li><b>already</b> (už, dřív než se čekalo) – mezi have a sloveso: She has <b>already</b> left.</li><li><b>yet</b> (ještě ne / už?) – na konci záporu a otázky: I haven't finished <b>yet</b>. Have you eaten <b>yet</b>?</li></ul>`,
      q: ["I have ___ finished. (právě)|just|yet|since", "Have you eaten ___?|yet|just|already yet", "She hasn't called ___.|yet|already|just", "We have ___ seen this film. (už)|already|yet|since", "He has just ___.|left|leave|leaved", "I ___ paid the bill yet.|haven't|didn't|don't"] },
    { t: "for a since",
      h: `<p>Když něco začalo v minulosti a <b>trvá dodnes</b>, použiješ předpřítomný čas. Česky tu máme přítomný čas: „Bydlím tu pět let.“</p>
<ul class="ex"><li><b>for</b> + doba trvání: for five years, for two hours, for a long time</li><li><b>since</b> + počátek: since 2019, since Monday, since I was a child</li></ul>
<p class="ex">I <b>have lived</b> here <b>for</b> five years. · She <b>has known</b> him <b>since</b> 2019. · <b>How long</b> have you worked here?</p>`,
      q: ["I have lived here ___ five years.|for|since|from", "She has worked there ___ 2019.|since|for|from", "How long ___ you known him?|have|do|are", "We have been married ___ a long time.|for|since|during", "He has been ill ___ Monday.|since|for|at", "I ___ here for two years. (a stále tu bydlím)|have lived|live|am living"] },
    { t: "Předpřítomný × minulý čas",
      h: `<p>Rozhoduje, jestli říkáš <b>kdy</b>.</p>
<ul class="ex"><li>Určitý čas v minulosti → minulý prostý: I <b>saw</b> him <b>yesterday</b>. We <b>met</b> <b>in 2015</b>.</li><li>Bez času, zkušenost nebo výsledek teď → předpřítomný: I <b>have seen</b> him. I<b>'ve lost</b> my keys (a teď je nemám).</li></ul>
<p>Rozhovor často začne předpřítomným a pokračuje minulým: <i>Have you been to Rome? – Yes, I <b>went</b> there last year.</i></p>
<p>Otázka <b>When…?</b> je vždy s minulým časem.</p>`,
      q: ["I ___ him yesterday.|saw|have seen|seen", "I ___ my keys. I can't find them.|have lost|lost yesterday|lose", "When ___ you arrive?|did|have|has", "She ___ in Prague in 2010.|lived|has lived|have lived", "___ you ever been to Spain?|Have|Did|Were", "We ___ this film last week.|watched|have watched|has watched"] }
  ],
  sent: ["I have just finished my work.|Právě jsem dokončil práci.", "Have you eaten yet?|Už jsi jedl?", "She hasn't called me yet.|Ještě mi nezavolala.", "We have already bought the tickets.|Už jsme koupili lístky.", "I have lived here for five years.|Bydlím tady pět let.", "He has worked there since 2019.|Pracuje tam od roku 2019.", "How long have you known her?|Jak dlouho ji znáš?", "I have lost my keys.|Ztratil jsem klíče.", "Did you see him yesterday?|Viděl jsi ho včera?", "Can I borrow your pen?|Můžu si půjčit tvoje pero?", "I have made a mistake.|Udělal jsem chybu.", "They got married last year.|Vzali se loni."],
  pron: { t: "Třetí tvary na -en", h: `<p>V koncovce <b>-en</b> se „e“ skoro nevyslovuje. Slovo končí slabičným „n“.</p><p><i>written</i> má krátké i (ritn), i když <i>write</i> má „aj“. Podobně <i>given</i> (givn) a <i>driven</i> (drivn).</p>`, w: ["written|ritn", "taken|tejkn", "given|givn", "broken|broukn", "forgotten|forgotn"] },
  dlg: [
    ["Hotovo?", "Have you finished the report yet?|Už jsi dokončil tu zprávu?", "No, not yet. I have just started.|Ne, ještě ne. Právě jsem začal.", "The boss has already asked about it.|Šéf se na ni už ptal.", "I know. I have been very busy.|Já vím. Měl jsem hodně práce.", "Can I help you?|Můžu ti pomoct?", "Yes, please. Can you check the numbers?|Ano, prosím. Můžeš zkontrolovat čísla?"],
    ["Jak dlouho", "How long have you lived here?|Jak dlouho tady bydlíš?", "I have lived here for ten years.|Bydlím tady deset let.", "And where did you live before?|A kde jsi bydlel předtím?", "I grew up in a small town.|Vyrostl jsem v malém městě.", "Have you ever wanted to move back?|Chtěl ses někdy vrátit?", "No, I have never missed it.|Ne, nikdy mi nechybělo."]
  ]
},
{
  t: "V kuchyni", s: "Vaření, recepty a množství",
  groups: [
    ["Vaření", ["boil|vařit (ve vodě)|bojl", "fry|smažit|fraj", "bake|péct|bejk", "cut|krájet|kat", "mix|míchat|miks", "add|přidat|ed", "pour|nalít|pór", "taste|ochutnat, chuť|tejst"]],
    ["V kuchyni", ["knife|nůž|najf", "fork|vidlička|fórk", "spoon|lžíce|spún", "pan|pánev|pen", "bowl|miska|boul", "oven|trouba|avn", "bottle|láhev|botl", "recipe|recept|resipi"]],
    ["Suroviny", ["flour|mouka|flauer", "oil|olej|ojl", "pepper|pepř, paprika|pepr", "onion|cibule|anjen", "garlic|česnek|gárlik", "mushroom|houba|mašrúm", "pasta|těstoviny|pesta", "sauce|omáčka|sós"]],
    ["Další potraviny", ["beef|hovězí|bíf", "pork|vepřové|pórk", "ham|šunka|hem", "sausage|klobása, párek|sosidž", "bean|fazole|bín", "carrot|mrkev|kerot", "lemon|citron|lemn", "strawberry|jahoda|stróbri"]],
    ["Množství", ["a few|několik, pár|e fjú", "a little|trochu|e litl", "piece|kousek|pís", "slice|plátek|slajs", "half|polovina|háf", "packet|balíček|pekit", "tin|plechovka|tyn", "spoonful|lžíce (čeho)|spúnful"]],
    ["Chuť a stav", ["fresh|čerstvý|freš", "raw|syrový|ró", "spicy|pikantní|spajsi", "salty|slaný|sólty", "sour|kyselý|sauer", "bitter|hořký|bitr", "tasty|chutný|tejsty", "full|plný, sytý|ful"]]
  ],
  grammar: [
    { t: "Počitatelná a nepočitatelná jména",
      h: `<p>Některé věci v angličtině nejdou počítat na kusy: <b>water, milk, bread, rice, money, time, sugar, cheese, information, advice</b>. Nemají množné číslo ani člen a/an a sloveso je v jednotném čísle.</p>
<p class="ex">The milk <b>is</b> cold. · I need <b>some</b> bread. · <b>a piece of</b> advice</p>
<p>Chceš-li je spočítat, přidej nádobu nebo kus: <b>a glass of</b> water, <b>a slice of</b> bread, <b>two bottles of</b> wine.</p>`,
      q: ["I need some ___.|bread|breads|a bread", "The money ___ on the table.|is|are|be", "Can I have a ___ of water?|glass|piece|slice", "She gave me some good ___.|advice|advices|an advice", "Two ___ of bread, please.|slices|glasses|bottles", "There ___ some milk in the fridge.|is|are|have"] },
    { t: "much, many, a few, a little",
      h: `<p>Volba slova závisí na tom, jestli jde věc počítat:</p>
<ul class="ex"><li>počitatelné: <b>many</b> eggs, <b>a few</b> eggs (pár), <b>few</b> eggs (málo)</li><li>nepočitatelné: <b>much</b> milk, <b>a little</b> milk (trochu), <b>little</b> milk (málo)</li><li>obojí: <b>a lot of</b> eggs / milk</li></ul>
<p><b>much</b> a <b>many</b> se používají hlavně v otázkách a záporech. V kladné větě zní přirozeněji <b>a lot of</b>.</p>`,
      q: ["We don't have ___ time.|much|many|a few", "Add ___ salt. (trochu)|a little|a few|many", "I have ___ friends in London. (pár)|a few|a little|much", "How ___ eggs do we need?|many|much|little", "She eats ___ fruit.|a lot of|many|a few of", "There isn't ___ flour.|much|many|few"] },
    { t: "too much, too many, enough",
      h: `<p><b>too much / too many</b> = příliš mnoho (víc, než je dobře). <b>enough</b> = dost.</p>
<p class="ex">There is <b>too much</b> salt in it. · You eat <b>too many</b> sweets. · We don't have <b>enough</b> eggs.</p>
<p>Pozor na pořadí u <b>enough</b>: stojí <b>před</b> podstatným jménem, ale <b>za</b> přídavným jménem.</p>
<p class="ex">enough <b>money</b> · <b>warm</b> enough · The soup isn't hot enough.</p>`,
      q: ["There is too ___ sugar in my tea.|much|many|enough", "You have bought too ___ tomatoes.|many|much|a lot", "We don't have ___ for six people.|enough food|food enough|too food", "The water isn't ___.|hot enough|enough hot|too hot enough", "This soup is ___ salty.|too|too much|enough", "Is there ___ for everybody?|enough bread|bread enough|too bread"] }
  ],
  sent: ["Cut the onion and fry it.|Nakrájej cibuli a osmaž ji.", "Add a little salt and pepper.|Přidej trochu soli a pepře.", "We don't have enough eggs.|Nemáme dost vajec.", "There is too much sugar in it.|Je v tom příliš mnoho cukru.", "How much flour do I need?|Kolik mouky potřebuju?", "I only have a few potatoes.|Mám jen pár brambor.", "Can you pass me the knife?|Můžeš mi podat nůž?", "This sauce tastes delicious.|Tahle omáčka chutná výborně.", "Bake it in the oven for an hour.|Peč to v troubě hodinu.", "The soup isn't hot enough.|Polévka není dost horká.", "I would like a slice of ham.|Chtěl bych plátek šunky.", "I am full, thank you.|Jsem plný, děkuji."],
  pron: { t: "Dvojhláska ou a au", h: `<p>Slova, která se píšou podobně, se čtou různě. <b>ow</b> a <b>ou</b> může být „ou“ i „au“.</p><ul class="ex"><li>bowl = „boul“, ale flour = „flauer“</li><li>pour = „pór“, sour = „sauer“</li></ul><p>Tady pomůže jen poslech a opakování.</p>`, w: ["bowl|boul", "flour|flauer", "pour|pór", "sour|sauer", "oven|avn"] },
  dlg: [
    ["Vaříme spolu", "What are we cooking tonight?|Co dnes večer vaříme?", "Pasta with mushroom sauce.|Těstoviny s houbovou omáčkou.", "Do we have enough mushrooms?|Máme dost hub?", "Yes, but we only have a little oil.|Ano, ale máme jen trochu oleje.", "Should I cut the onion?|Mám nakrájet cibuli?", "Yes, please. And add a little garlic.|Ano, prosím. A přidej trochu česneku."],
    ["Recept", "How do you make this cake?|Jak děláš tenhle dort?", "You need flour, eggs and butter.|Potřebuješ mouku, vejce a máslo.", "How many eggs?|Kolik vajec?", "Only a few. Three is enough.|Jen pár. Tři stačí.", "And how long do I bake it?|A jak dlouho ho mám péct?", "For forty minutes. Not too long.|Čtyřicet minut. Ne příliš dlouho."]
  ]
},
{
  t: "Práce a kariéra", s: "Zaměstnání, schopnosti a možnosti",
  groups: [
    ["Zaměstnání", ["employee|zaměstnanec|implojí", "employer|zaměstnavatel|implojr", "salary|plat|seleri", "contract|smlouva|kontrekt", "career|kariéra|keríe", "full-time|na plný úvazek|ful tajm", "part-time|na částečný úvazek|párt tajm", "unemployed|nezaměstnaný|animplojd"]],
    ["Hledání práce", ["apply|požádat, přihlásit se|eplaj", "interview|pohovor|intrvjú", "skill|dovednost|skil", "CV|životopis|sí ví", "hire|najmout|hajr", "quit|dát výpověď|kwit", "earn|vydělávat|érn", "experience|praxe, zkušenost|ikspíriens"]],
    ["V kanceláři", ["desk|pracovní stůl|desk", "printer|tiskárna|printr", "file|soubor, složka|fajl", "report|zpráva, hlášení|ripórt", "deadline|termín|dedlajn", "task|úkol|tásk", "project|projekt|prodžekt", "department|oddělení|dypártment"]],
    ["Další povolání", ["lawyer|právník|lójr", "accountant|účetní|ekauntnt", "dentist|zubař|dentyst", "mechanic|mechanik|mikenyk", "electrician|elektrikář|ilektrišn", "plumber|instalatér|plamr", "journalist|novinář|džérnelist", "scientist|vědec|sajentyst"]],
    ["Co v práci děláme", ["manage|řídit, zvládnout|menydž", "organise|organizovat|órgenajz", "attend|zúčastnit se|etend", "discuss|probírat|dyskas", "solve|vyřešit|solv", "explain|vysvětlit|iksplejn", "suggest|navrhnout|sedžest", "improve|zlepšit|imprúv"]],
    ["Možnost a jistota", ["might|možná (sloveso)|majt", "may|smět, možná|mej", "could|mohl, uměl|kud", "able|schopný|ejbl", "perhaps|možná, snad|prheps", "certainly|určitě|sértnli", "definitely|rozhodně|definetli", "unlikely|nepravděpodobný|anlajkli"]]
  ],
  grammar: [
    { t: "could a was able to",
      h: `<p><b>could</b> je minulý čas od can: co jsi dřív uměl nebo mohl. Zápor <b>couldn't</b>.</p>
<p class="ex">I <b>could</b> swim when I was five. · She <b>couldn't</b> come yesterday.</p>
<p>Když se ti něco jednorázově <b>podařilo</b>, řekni <b>was / were able to</b> (nebo <b>managed to</b>): <i>The traffic was bad, but I <b>was able to</b> arrive on time.</i></p>
<p><b>be able to</b> nahrazuje can i v dalších časech: <i>I will <b>be able to</b> help you tomorrow.</i></p>`,
      q: ["I ___ read when I was four.|could|can|am able", "She ___ come to the meeting yesterday.|couldn't|can't|could not to", "I will ___ help you tomorrow.|be able to|can|could to", "He ___ to solve the problem in the end.|was able|could|can", "___ you speak English when you were a child?|Could|Can|Were", "We weren't ___ to find the office.|able|could|can"] },
    { t: "had to a didn't have to",
      h: `<p><b>must</b> nemá minulý čas. V minulosti ho nahrazuje <b>had to</b> (musel jsem). Zápor <b>didn't have to</b> = nemusel jsem. Budoucnost: <b>will have to</b>.</p>
<p class="ex">I <b>had to</b> work late yesterday. · She <b>didn't have to</b> pay. · We <b>will have to</b> wait.</p>
<p>Otázka: <b>Did you have to</b> wear a uniform?</p>`,
      q: ["I ___ get up early yesterday.|had to|must|have to", "She ___ pay. It was free.|didn't have to|hadn't to|mustn't", "___ you have to work last Saturday?|Did|Had|Must", "We will ___ wait.|have to|must|had to", "He ___ quit his job last year.|had to|must|has to", "They didn't ___ to attend the meeting.|have|had|must"] },
    { t: "may a might",
      h: `<p>Když si nejsi jistý, jestli se něco stane, použij <b>might</b> nebo <b>may</b> + základní tvar. Obojí znamená „možná“, <i>might</i> je o něco méně jisté.</p>
<p class="ex">It <b>might</b> rain tomorrow. · I <b>may</b> be late. · She <b>might not</b> come.</p>
<p>Je to přirozenější než <i>Maybe it will rain</i>. Nikdy neříkej <i>might to</i> ani <i>mights</i>.</p>
<p><b>May I…?</b> je také velmi zdvořilá žádost: <i>May I come in?</i></p>`,
      q: ["It ___ rain tomorrow. Take an umbrella.|might|might to|mights", "She ___ come. She is very busy.|might not|doesn't might|not might", "I may ___ late tonight.|be|to be|am", "___ I come in?|May|Might to|Am", "He might ___ the job.|get|gets|to get", "We ___ go to Spain, but we aren't sure.|might|must|have to"] }
  ],
  sent: ["I applied for a new job.|Požádal jsem o novou práci.", "She has an interview tomorrow.|Zítra má pohovor.", "I could swim when I was five.|V pěti letech jsem uměl plavat.", "He had to work late yesterday.|Včera musel pracovat dlouho.", "You didn't have to wait for me.|Nemusel jsi na mě čekat.", "It might rain this afternoon.|Dnes odpoledne možná bude pršet.", "I may be late for the meeting.|Možná přijdu na poradu pozdě.", "How much do you earn?|Kolik vyděláváš?", "We have to finish before the deadline.|Musíme skončit před termínem.", "Can you explain it again, please?|Můžeš to vysvětlit znovu, prosím?", "She works part-time in a bank.|Pracuje na částečný úvazek v bance.", "I will be able to help you tomorrow.|Zítra ti budu moct pomoct."],
  pron: { t: "Němé l ve could, would, should", h: `<p>Ve slovech <b>could, would, should</b> se písmeno l nevyslovuje. Samohláska je krátké „u“.</p><p>Záporné tvary končí slabičným „nt“: <i>couldn't</i> = „kudnt“.</p>`, w: ["could|kud", "would|wud", "should|šud", "couldn't|kudnt", "might|majt"] },
  dlg: [
    ["Pohovor", "Why did you apply for this job?|Proč jste se přihlásil na tuto práci?", "I would like to improve my skills.|Chtěl bych si zlepšit dovednosti.", "Do you have any experience?|Máte nějakou praxi?", "Yes, I have worked in an office for three years.|Ano, pracoval jsem tři roky v kanceláři.", "When could you start?|Kdy byste mohl nastoupit?", "I might be able to start next month.|Možná bych mohl nastoupit příští měsíc."],
    ["Včera v práci", "You look tired. What happened?|Vypadáš unaveně. Co se stalo?", "I had to work until ten last night.|Včera jsem musel pracovat do deseti.", "Why? Was there a deadline?|Proč? Byl nějaký termín?", "Yes, and the printer was broken.|Ano, a tiskárna byla rozbitá.", "Were you able to finish the report?|Podařilo se ti dokončit zprávu?", "Yes, but I couldn't sleep after that.|Ano, ale potom jsem nemohl spát."]
  ]
},
{
  t: "Sport a pohyb", s: "Jak co děláme a porovnávání činností",
  groups: [
    ["Sporty", ["basketball|basketbal|báskitból", "volleyball|volejbal|voliból", "hockey|hokej|hoki", "golf|golf|golf", "cycling|cyklistika|sajkling", "hiking|pěší turistika|hajking", "boxing|box|boksing", "athletics|atletika|ethletiks"]],
    ["Na hřišti", ["player|hráč|plejr", "coach|trenér|kouč", "referee|rozhodčí|referí", "match|zápas|meč", "score|skóre, skórovat|skór", "pitch|hřiště|pič", "race|závod|rejs", "champion|šampion|čempjen"]],
    ["Pohyb", ["throw|hodit|throu", "catch|chytit|keč", "kick|kopnout|kik", "hit|udeřit, trefit|hit", "push|tlačit|puš", "pull|táhnout|pul", "lift|zvednout|lift", "stretch|protáhnout se|streč"]],
    ["Kondice", ["exercise|cvičení, cvičit|eksrsajz", "gym|posilovna|džim", "train|trénovat|trejn", "fit|v kondici|fit", "muscle|sval|masl", "weight|váha|wejt", "energy|energie|enrdži", "injury|zranění|indžri"]],
    ["Jak to děláme", ["quickly|rychle|kwikli", "slowly|pomalu|slouli", "carefully|opatrně|kérfli", "badly|špatně|bedli", "easily|snadno|ízili", "hard|tvrdě, těžký|hárd", "loudly|hlasitě|laudli", "quietly|potichu|kwajetli"]],
    ["Výsledky", ["beat|porazit|bít", "draw|remíza, remizovat|dró", "prize|cena (výhra)|prajz", "medal|medaile|medl", "record|rekord|rekórd", "fan|fanoušek|fen", "competition|soutěž|kompetyšn", "defeat|porážka|dyfít"]]
  ],
  grammar: [
    { t: "Příslovce: jak něco děláme",
      h: `<p>Přídavné jméno popisuje věc (<i>a slow car</i>), příslovce popisuje děj (<i>he drives slowly</i>). Příslovce většinou vytvoříš koncovkou <b>-ly</b>.</p>
<p class="ex">quick → quick<b>ly</b> · careful → careful<b>ly</b> · easy → eas<b>ily</b></p>
<p>Výjimky: good → <b>well</b>, fast → <b>fast</b>, hard → <b>hard</b>, late → <b>late</b>. Pozor: <i>hardly</i> znamená „sotva“.</p>
<p>Příslovce stojí za slovesem nebo za předmětem: <i>She speaks English <b>well</b>.</i></p>`,
      q: ["He drives very ___.|carefully|careful|carefuly", "She speaks English ___.|well|good|goodly", "They work ___.|hard|hardly|hardy", "He is a ___ driver.|careful|carefully|care", "I can run ___.|fast|fastly|faster than", "She won the match ___.|easily|easy|easyly"] },
    { t: "Stupňování příslovcí a as … as",
      h: `<p>Příslovce na -ly se stupňují pomocí <b>more</b>: <b>more slowly</b>, <b>more carefully</b>. Krátká jako přídavná jména: <b>faster</b>, <b>harder</b>. Nepravidelně: well → <b>better</b>, badly → <b>worse</b>.</p>
<p class="ex">Can you speak <b>more slowly</b>? · He runs <b>faster than</b> me.</p>
<p>Stejnou míru vyjádříš <b>as … as</b>: <i>She is <b>as tall as</b> her mother.</i> Zápor: <i>I'm <b>not as fast as</b> you.</i></p>`,
      q: ["Can you speak ___, please?|more slowly|slowlier|more slow", "He plays ___ than me.|better|weller|more good", "She is as tall ___ her father.|as|than|like", "I am not ___ you.|as fit as|so fit than|as fit than", "You should train ___.|harder|more hard|hardlier", "Today I played ___ than yesterday.|worse|badlier|more badly"] },
    { t: "Sport: play, go, do",
      h: `<p>Každý typ sportu má své sloveso:</p>
<ul class="ex"><li><b>play</b> + míčové hry: play football, play tennis, play hockey</li><li><b>go</b> + činnosti na -ing: go swimming, go cycling, go skiing</li><li><b>do</b> + ostatní: do yoga, do exercise, do athletics</li></ul>
<p>Před názvem sportu není člen: <i>I play <s>the</s> football.</i> U hudebních nástrojů naopak je: <i>play <b>the</b> guitar</i>.</p>`,
      q: ["I ___ tennis every Sunday.|play|go|do", "We ___ skiing in winter.|go|play|do", "She ___ yoga in the morning.|does|plays|goes", "Do you play ___?|basketball|the basketball|a basketball", "He plays ___ guitar.|the|–|a", "Let's ___ cycling on Saturday.|go|play|do"] }
  ],
  sent: ["She speaks English very well.|Mluví velmi dobře anglicky.", "Can you speak more slowly, please?|Můžete mluvit pomaleji, prosím?", "He runs faster than me.|Běhá rychleji než já.", "I am not as fit as you.|Nejsem v takové kondici jako ty.", "We go swimming every week.|Každý týden chodíme plavat.", "Our team won the match easily.|Náš tým snadno vyhrál zápas.", "You should drive more carefully.|Měl bys řídit opatrněji.", "They train hard every day.|Každý den tvrdě trénují.", "Who won the race?|Kdo vyhrál závod?", "I do exercise three times a week.|Cvičím třikrát týdně.", "He has a knee injury.|Má zranění kolena.", "She is as tall as her mother.|Je stejně vysoká jako její matka."],
  pron: { t: "Koncovka -ly", h: `<p>Koncovka <b>-ly</b> je vždy nepřízvučná a krátká. Přízvuk zůstává tam, kde byl u přídavného jména.</p><p>U slov na -ful se -fully čte jen „fli“: <i>carefully</i> = „kérfli“.</p>`, w: ["quickly|kwikli", "carefully|kérfli", "easily|ízili", "quietly|kwajetli", "slowly|slouli"] },
  dlg: [
    ["V posilovně", "How often do you go to the gym?|Jak často chodíš do posilovny?", "Three times a week. And you?|Třikrát týdně. A ty?", "I have just started.|Já jsem právě začal.", "You should start slowly.|Měl bys začít pomalu.", "I am not as fit as you.|Nejsem v takové kondici jako ty.", "Don't worry. You will improve quickly.|Neboj. Rychle se zlepšíš."],
    ["Po zápase", "Did you watch the match last night?|Díval ses včera na zápas?", "Yes. Our team played really badly.|Ano. Náš tým hrál opravdu špatně.", "What was the score?|Jaké bylo skóre?", "We lost three one.|Prohráli jsme tři jedna.", "The other team was faster.|Ten druhý tým byl rychlejší.", "Yes, they played better than us.|Ano, hráli lépe než my."]
  ]
},
{
  t: "Příroda a zvířata", s: "Co se dělo, když… a jak to bývalo",
  groups: [
    ["Zvířata na farmě", ["horse|kůň|hórs", "cow|kráva|kau", "pig|prase|pig", "sheep|ovce|šíp", "goat|koza|gout", "duck|kachna|dak", "rabbit|králík|rebit", "mouse|myš|maus"]],
    ["Divoká zvířata", ["bear|medvěd|bér", "wolf|vlk|wulf", "fox|liška|foks", "lion|lev|lajen", "elephant|slon|elifnt", "monkey|opice|manki", "snake|had|snejk", "deer|jelen, srna|dýr"]],
    ["Ptáci a hmyz", ["bird|pták|bérd", "eagle|orel|ígl", "owl|sova|aul", "bee|včela|bí", "fly|moucha|flaj", "spider|pavouk|spajdr", "butterfly|motýl|batrflaj", "insect|hmyz|insekt"]],
    ["Krajina", ["river|řeka|rivr", "hill|kopec|hil", "valley|údolí|veli", "field|pole|fíld", "path|pěšina|páth", "rock|skála, kámen|rok", "coast|pobřeží|koust", "desert|poušť|dezrt"]],
    ["Rostliny", ["tree|strom|trí", "flower|květina|flauer", "grass|tráva|grás", "leaf|list|líf", "plant|rostlina, sázet|plánt", "seed|semínko|síd", "branch|větev|bránč", "root|kořen|rút"]],
    ["Co se děje venku", ["grow|růst, pěstovat|grou", "feed|krmit|fíd", "hunt|lovit|hant", "bite|kousnout|bajt", "hide|schovat (se)|hajd", "follow|následovat|folou", "appear|objevit se|epír", "disappear|zmizet|dysepír"]]
  ],
  grammar: [
    { t: "Minulý čas průběhový",
      h: `<p>Děj, který v určitém okamžiku minulosti <b>právě probíhal</b>, vyjádříš <b>was / were + sloveso s -ing</b>.</p>
<p class="ex">At eight o'clock I <b>was having</b> dinner. · They <b>were sleeping</b>. · What <b>were you doing</b>?</p>
<p>Zápor: <b>wasn't / weren't</b> + -ing. Odpovídá českému nedokonavému vidu: „dělal jsem“ (ne „udělal jsem“).</p>`,
      q: ["At seven I ___ breakfast.|was having|had been|were having", "They ___ in the garden.|were working|was working|working", "What ___ you doing at ten?|were|was|did", "She ___ when I called.|wasn't sleeping|didn't sleeping|weren't sleeping", "It ___ all night.|was raining|were raining|rained being", "___ he driving fast?|Was|Were|Did"] },
    { t: "when a while: dva děje v minulosti",
      h: `<p>Delší děj (průběhový čas) je přerušen krátkou událostí (prostý čas).</p>
<p class="ex">I <b>was walking</b> in the forest <b>when</b> I <b>saw</b> a deer. · <b>While</b> we <b>were having</b> dinner, the phone <b>rang</b>.</p>
<p><b>when</b> obvykle uvádí krátkou událost, <b>while</b> děj, který trval. Dvě krátké události po sobě jsou obě v prostém čase: <i>When I saw the bear, I ran away.</i></p>`,
      q: ["I was walking home when I ___ a fox.|saw|was seeing|see", "While we ___, it started to rain.|were hiking|hiked|hike", "She ___ when the phone rang.|was cooking|cooked|cooks", "When I saw the snake, I ___.|ran away|was running away|run away", "What were you doing ___ I called?|when|while that|during", "He fell while he ___ the tree.|was climbing|climbed|climbs"] },
    { t: "used to: dříve bývalo",
      h: `<p><b>used to</b> + základní tvar popisuje zvyky a stavy, které platily v minulosti a <b>už neplatí</b>. Česky „dříve jsem…“, „bývával jsem…“.</p>
<p class="ex">I <b>used to</b> live in a village. · She <b>used to</b> have a horse. · We <b>used to</b> play here.</p>
<p>Zápor a otázka jsou s did a bez -d: <b>I didn't use to</b> like it. · <b>Did you use to</b> have a dog?</p>`,
      q: ["I ___ live in a village.|used to|use to|was used", "She used to ___ a horse.|have|had|having", "We didn't ___ to like vegetables.|use|used|using", "___ you use to play here?|Did|Were|Have", "He ___ smoke, but he stopped.|used to|uses to|was use to", "There used to ___ a forest here.|be|was|being"] }
  ],
  sent: ["I was walking in the forest.|Šel jsem lesem.", "What were you doing at eight?|Co jsi dělal v osm?", "I saw a deer when I was driving home.|Když jsem jel domů, viděl jsem srnu.", "While we were eating, it started to rain.|Zatímco jsme jedli, začalo pršet.", "I used to live in a village.|Dříve jsem bydlel na vesnici.", "Did you use to have a dog?|Míval jsi psa?", "The bird was sitting on a branch.|Pták seděl na větvi.", "Don't feed the animals.|Nekrmte zvířata.", "We followed the path along the river.|Šli jsme po pěšině podél řeky.", "The fox disappeared into the forest.|Liška zmizela v lese.", "She was not listening to me.|Neposlouchala mě.", "There used to be a field here.|Dříve tady bývalo pole."],
  pron: { t: "Slabé was a were", h: `<p>Ve větě jsou <b>was</b> a <b>were</b> většinou nepřízvučná a zní velmi krátce: „wz“ a „wr“. Důraz je na slovese s -ing.</p><p><i>I was WALking.</i> · <i>They were SLEEping.</i> Plně se vysloví jen v krátké odpovědi: <i>Yes, I WAS.</i></p>`, w: ["I was walking|aj wz wókin(g)", "they were sleeping|dej wr slípin(g)", "used to|júst tu", "was it|woz it", "weren't|wérnt"] },
  dlg: [
    ["V lese", "What happened to you?|Co se ti stalo?", "I was walking in the forest when I saw a bear.|Šel jsem lesem, když jsem uviděl medvěda.", "Really? What was it doing?|Opravdu? Co dělal?", "It was eating something.|Něco jedl.", "What did you do?|Co jsi udělal?", "I walked away slowly and quietly.|Pomalu a potichu jsem odešel."],
    ["Dětství na vesnici", "Did you use to live in the country?|Bydlel jsi dříve na venkově?", "Yes, we used to have a small farm.|Ano, mívali jsme malou farmu.", "Did you have any animals?|Měli jste nějaká zvířata?", "We had cows, pigs and a horse.|Měli jsme krávy, prasata a koně.", "Do you miss it?|Chybí ti to?", "Sometimes. I used to love feeding the rabbits.|Někdy. Hrozně rád jsem krmil králíky."]
  ]
}
);
