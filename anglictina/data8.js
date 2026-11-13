// Obsah kurzu, týdny 47–52 (úroveň B1+ až B2).
window.UNITS.push(
{
  t: "Slova, která patří k sobě", s: "Kolokace s make, do, have, take",
  groups: [
    ["S make", ["make a decision|rozhodnout se", "make a mistake|udělat chybu", "make an effort|vynaložit úsilí", "make progress|dělat pokroky", "make money|vydělávat peníze", "make a noise|dělat hluk", "make friends|spřátelit se", "make an appointment|domluvit si schůzku"]],
    ["S do", ["do your best|udělat maximum", "do business|obchodovat", "do a favour|udělat laskavost", "do damage|způsobit škodu", "do research|dělat výzkum", "do the shopping|nakoupit", "do well|vést si dobře", "do without|obejít se bez"]],
    ["S have", ["have a break|dát si přestávku", "have a look|podívat se", "have a chat|popovídat si", "have an argument|pohádat se", "have fun|bavit se", "have a rest|odpočinout si", "have a word|promluvit si", "have trouble|mít potíže"]],
    ["S take", ["take a photo|vyfotit", "take a risk|riskovat", "take notes|dělat si poznámky", "take time|trvat, dát si na čas", "take advantage of|využít", "take care of|postarat se o", "take a seat|posadit se", "take turns|střídat se"]],
    ["S dalšími slovesy", ["keep a secret|udržet tajemství", "keep a promise|dodržet slib", "break a promise|porušit slib", "pay a visit|navštívit", "catch a cold|nachladit se", "save time|ušetřit čas", "spend time|trávit čas", "waste time|ztrácet čas"]],
    ["Přídavné jméno + podstatné", ["heavy rain|silný déšť", "strong coffee|silná káva", "heavy traffic|hustý provoz", "big mistake|velká chyba", "fast food|rychlé občerstvení", "quick shower|rychlá sprcha", "high quality|vysoká kvalita", "deep sleep|hluboký spánek"]]
  ],
  grammar: [
    { t: "make × do",
      h: `<p>Obě slovesa znamenají „dělat“ a volba není vždy logická. Hrubé pravidlo:</p>
<ul class="ex"><li><b>make</b> – něco vytvářím, vzniká výsledek: make a cake, make a plan, make a decision, make a mistake, make a noise, make money</li><li><b>do</b> – činnost, práce, povinnost: do homework, do the shopping, do exercise, do a job, do your best, do business</li></ul>
<p>Obecné otázky jsou s do: <i>What are you <b>doing</b>? What do you <b>do</b>?</i> (Čím jsi?)</p>`,
      q: ["I have to ___ a decision.|make|do|take a", "Did you ___ your homework?|do|make|take", "Everyone ___ mistakes.|makes|does|takes", "Can you ___ me a favour?|do|make|give to", "Don't ___ so much noise.|make|do|have", "She always ___ her best.|does|makes|has"] },
    { t: "have, take, give ve spojeních",
      h: `<p>Místo samotného slovesa angličtina ráda používá <b>have / take / give</b> + podstatné jméno:</p>
<ul class="ex"><li><b>have</b> a look, a rest, a shower, a chat, a break, fun, a good time</li><li><b>take</b> a photo, a seat, notes, a risk, a taxi, an exam, care</li><li><b>give</b> a speech, advice, a hand (pomoct), a call (zavolat), a lift (svézt)</li></ul>
<p>Čeština tu často má jiné sloveso: „dát si sprchu“ = <i>have a shower</i>, „udělat fotku“ = <i>take a photo</i>, „dát zkoušku“ = <i>pass an exam</i>.</p>`,
      q: ["Let's ___ a break.|have|make|do", "Can I ___ a photo of you?|take|make|do", "Could you ___ me a hand?|give|take|make", "I'll ___ you a call tomorrow.|give|make to|take", "Please ___ a seat.|take|do|make", "Did you ___ a good time?|have|make|do"] },
    { t: "Ustálené předložkové výrazy",
      h: `<p>Spojení předložky a podstatného jména se učí jako celek, protože předložka se nedá odvodit:</p>
<ul class="ex"><li><b>by</b> chance, by mistake, by heart, by the way</li><li><b>on</b> purpose, on time, on holiday, on business, on foot, on the phone</li><li><b>in</b> advance, in a hurry, in love, in trouble, in time (s předstihem), in common</li><li><b>at</b> first, at last, at least, at once, at the moment</li><li><b>out of</b> order, out of date, out of control</li></ul>`,
      q: ["I did it ___ mistake.|by|on|in", "She broke it ___ purpose.|on|by|in", "You should book ___ advance.|in|at|by", "The lift is out ___ order.|of|from|off", "We have a lot ___ common.|in|on|at", "He is away ___ business.|on|in|at"] }
  ],
  sent: ["I have to make a decision.|Musím se rozhodnout.", "Can you do me a favour?|Můžeš mi udělat laskavost?", "Let's have a break.|Dejme si přestávku.", "Can I take a photo of you?|Můžu si tě vyfotit?", "I did it by mistake.|Udělal jsem to omylem.", "You are making progress.|Děláš pokroky.", "Could you give me a hand?|Mohl bys mi pomoct?", "She always keeps her promises.|Vždy dodrží své sliby.", "We have a lot in common.|Máme hodně společného.", "The lift is out of order.|Výtah je mimo provoz.", "Take your time.|Nespěchej.", "I caught a cold last week.|Minulý týden jsem se nachladil."],
  pron: { t: "Kolokace jako jeden celek", h: `<p>Ustálená spojení se vyslovují jedním dechem jako jedno dlouhé slovo. Přízvuk je na podstatném jméně, sloveso je slabé.</p><ul class="ex"><li>make a de<b>CI</b>sion · have a <b>LOOK</b> · take a <b>PHO</b>to · do me a <b>FA</b>vour</li></ul><p>Člen <i>a</i> se přilepí k předchozímu slovesu: „mejke“, „heve“, „tejke“.</p>`, w: ["make a decision|mejke dySIžn", "have a look|heve LUK", "take a photo|tejke FOUtou", "by mistake|baj mistEJK", "on purpose|on PÉRpes"] },
  dlg: [
    ["Laskavost", "Could you do me a favour?|Mohl bys mi udělat laskavost?", "Sure. What do you need?|Jasně. Co potřebuješ?", "Can you have a look at my presentation?|Můžeš se mi podívat na prezentaci?", "Of course. Give me a minute, I'm on the phone.|Samozřejmě. Dej mi minutku, telefonuju.", "Take your time. I'm not in a hurry.|Nespěchej. Nemám naspěch.", "OK. You've made a lot of progress, by the way.|Dobře. Mimochodem, udělal jsi velký pokrok."],
    ["Rozhodování", "Have you made a decision yet?|Už ses rozhodl?", "Not yet. I don't want to make a mistake.|Ještě ne. Nechci udělat chybu.", "You should take a risk sometimes.|Někdy bys měl zariskovat.", "I know, but it takes time.|Já vím, ale chce to čas.", "Let's have a chat about it tonight.|Popovídejme si o tom dnes večer.", "Good idea. I'll give you a call at seven.|Dobrý nápad. Zavolám ti v sedm."]
  ]
},
{
  t: "Jak vznikají slova", s: "Předpony a přípony, které rozšíří slovní zásobu",
  groups: [
    ["Záporné předpony", ["unhappy|nešťastný", "unusual|neobvyklý", "impossible|nemožný", "impatient|netrpělivý", "incorrect|nesprávný", "informal|neformální", "dishonest|nečestný", "irregular|nepravidelný"]],
    ["Další předpony", ["rewrite|přepsat", "misunderstand|špatně pochopit", "overcook|převařit", "underestimate|podcenit", "disagree|nesouhlasit", "disappear|zmizet", "preview|ukázka, náhled", "ex-wife|bývalá manželka"]],
    ["Podstatná jména z přídavných", ["happiness|štěstí", "kindness|laskavost", "weakness|slabost", "ability|schopnost", "possibility|možnost", "difference|rozdíl", "importance|důležitost", "freedom|svoboda"]],
    ["Podstatná jména ze sloves", ["decision|rozhodnutí", "information|informace", "development|vývoj", "improvement|zlepšení", "agreement|dohoda", "argument|hádka, argument", "arrival|příjezd", "behaviour|chování"]],
    ["Přídavná jména z podstatných", ["careful|opatrný", "careless|neopatrný", "useful|užitečný", "useless|k ničemu", "hopeful|plný naděje", "hopeless|beznadějný", "painful|bolestivý", "harmless|neškodný"]],
    ["Další přídavná jména", ["comfortable|pohodlný", "reliable|spolehlivý", "enjoyable|příjemný", "dangerous|nebezpečný", "famous|slavný", "creative|tvořivý", "active|aktivní", "national|národní"]]
  ],
  grammar: [
    { t: "Záporné předpony un-, in-, dis-",
      h: `<p>Opak slova často vytvoříš předponou. Nejčastější je <b>un-</b>, ostatní se řídí prvním písmenem:</p>
<ul class="ex"><li><b>un-</b>: unhappy, unusual, unfair, unlock</li><li><b>in-</b>: incorrect, informal, independent</li><li><b>im-</b> před p, m: impossible, impatient, immature</li><li><b>il-</b> před l: illegal · <b>ir-</b> před r: irregular, irresponsible</li><li><b>dis-</b>: dishonest, disagree, dislike, disappear</li></ul>
<p>Další předpony mění význam jinak: <b>re-</b> (znovu), <b>mis-</b> (špatně), <b>over-</b> (příliš), <b>under-</b> (málo).</p>`,
      q: ["The opposite of possible is ___.|impossible|unpossible|inpossible", "The opposite of legal is ___.|illegal|unlegal|dislegal", "The opposite of honest is ___.|dishonest|unhonest|inhonest", "The opposite of regular is ___.|irregular|unregular|inregular", "I ___ what you said. Sorry. (špatně pochopil)|misunderstood|ununderstood|disunderstood", "Please ___ the essay. (přepiš)|rewrite|overwrite again|miswrite"] },
    { t: "Přípony podstatných jmen",
      h: `<p>Ze sloves a přídavných jmen děláš podstatná jména příponami:</p>
<ul class="ex"><li><b>-tion / -sion</b>: decide → decision, inform → information</li><li><b>-ment</b>: develop → development, agree → agreement</li><li><b>-ness</b>: happy → happiness, kind → kindness</li><li><b>-ity</b>: able → ability, possible → possibility</li><li><b>-ance / -ence</b>: important → importance, different → difference</li><li><b>-er / -or / -ist</b> pro osoby: teacher, actor, scientist</li></ul>
<p>Když neznáš slovo, zkus ho rozložit. Poznáš kořen a přípona ti řekne slovní druh.</p>`,
      q: ["We have to make a ___. (decide)|decision|decidement|decidion", "Thank you for your ___. (kind)|kindness|kindment|kindity", "There is a big ___ between them. (different)|difference|differentness|differment", "Her ___ is amazing. (able)|ability|ableness|ablement", "We reached an ___. (agree)|agreement|agreeness|agreetion", "Money can't buy ___. (happy)|happiness|happyness|happity"] },
    { t: "Přípony přídavných jmen",
      h: `<p>Z podstatných jmen a sloves děláš přídavná jména:</p>
<ul class="ex"><li><b>-ful</b> (s něčím) × <b>-less</b> (bez): careful × careless, useful × useless, hopeful × hopeless</li><li><b>-able / -ible</b> (dá se): comfortable, reliable, possible</li><li><b>-ous</b>: dangerous, famous, nervous</li><li><b>-ive</b>: creative, active, expensive</li><li><b>-al</b>: national, musical, natural</li><li><b>-y</b>: rainy, sunny, noisy</li></ul>
<p>Ne každé slovo má obě podoby: existuje <i>homeless</i>, ale ne <i>homeful</i>.</p>`,
      q: ["This tool is very ___. (use)|useful|useable full|usive", "Be ___! The road is icy. (care)|careful|careless|carely", "He is a ___ driver. He often has accidents.|careless|careful|careous", "It is a ___ sport. (danger)|dangerous|dangerful|dangerable", "The chair is very ___. (comfort)|comfortable|comfortful|comfortous", "She is a very ___ person. (create)|creative|creatful|createous"] }
  ],
  sent: ["It is impossible to finish today.|Dnes to není možné dokončit.", "I misunderstood the question.|Špatně jsem pochopil otázku.", "Thank you for your kindness.|Děkuji vám za laskavost.", "There is a big difference between them.|Je mezi nimi velký rozdíl.", "This app is very useful.|Tahle aplikace je velmi užitečná.", "He is a careless driver.|Je to neopatrný řidič.", "We reached an agreement.|Dosáhli jsme dohody.", "The situation is not hopeless.|Situace není beznadějná.", "Is this information reliable?|Jsou tyhle informace spolehlivé?", "I disagree with your decision.|Nesouhlasím s tvým rozhodnutím.", "Don't underestimate him.|Nepodceňuj ho.", "I have seen a big improvement.|Viděl jsem velké zlepšení."],
  pron: { t: "Přípony mění přízvuk", h: `<p>Některé přípony přitáhnou přízvuk těsně před sebe:</p><ul class="ex"><li><b>-tion</b>: in<b>FORM</b> → infor<b>MA</b>tion</li><li><b>-ity</b>: <b>POS</b>sible → possi<b>BI</b>lity, <b>A</b>ble → a<b>BI</b>lity</li><li><b>-ic</b>: <b>E</b>nergy → ener<b>GE</b>tic</li></ul><p>Přípony <b>-ness, -ment, -ful, -less</b> přízvuk nemění.</p>`, w: ["information|infrMEJšn", "possibility|poseBIlety", "ability|eBIlety", "development|dyVElepment", "comfortable|KAMftbl"] },
  dlg: [
    ["Nedorozumění", "I think we misunderstood each other.|Myslím, že jsme si špatně rozuměli.", "It's possible. What was unclear?|Je to možné. Co bylo nejasné?", "The information about the deadline was incorrect.|Informace o termínu byla nesprávná.", "I'm sorry. That was careless of me.|Promiň. To bylo ode mě neopatrné.", "It's not a big problem. We can reach an agreement.|Není to velký problém. Můžeme se dohodnout.", "Thank you for your patience and kindness.|Děkuju za trpělivost a laskavost."],
    ["Nová aplikace", "Have you tried the new app?|Zkoušel jsi tu novou aplikaci?", "Yes, it's very useful.|Ano, je velmi užitečná.", "Is it reliable?|Je spolehlivá?", "Usually, but the last update was a disappointment.|Většinou, ale poslední aktualizace byla zklamání.", "What is the difference?|V čem je rozdíl?", "The new design is uncomfortable and some functions disappeared.|Nový design je nepohodlný a některé funkce zmizely."]
  ]
},
{
  t: "Hovorová angličtina", s: "Idiomy a jak se opravdu mluví",
  groups: [
    ["Idiomy o snadném a těžkém", ["a piece of cake|hračka, snadná věc", "no big deal|nic velkého", "a nightmare|noční můra", "easier said than done|snáz se to řekne, než udělá", "out of the blue|z čistého nebe", "once in a blue moon|jednou za uherský rok", "the last straw|poslední kapka", "a waste of time|ztráta času"]],
    ["Idiomy o lidech", ["under the weather|necítit se dobře", "over the moon|štěstím bez sebe", "fed up with|mít plné zuby", "in a bad mood|ve špatné náladě", "broke|bez peněz, švorc", "a couch potato|pecivál", "an early bird|ranní ptáče", "a pain in the neck|otrava (o člověku, věci)"]],
    ["Slovesné idiomy", ["break the ice|prolomit ledy", "hit the road|vyrazit na cestu", "call it a day|pro dnešek skončit", "keep an eye on|pohlídat, dávat pozor na", "miss the point|nepochopit, o co jde", "pull someone's leg|utahovat si z někoho", "lose track of time|ztratit pojem o čase", "get the message|pochopit narážku"]],
    ["Hovorová slova", ["guy|chlápek, člověk", "kid|dítě", "stuff|věci", "cool|super, v pohodě", "awesome|úžasný", "mate|kámoš", "quid|libra (hovorově)", "yeah|jo"]],
    ["Hovorové reakce", ["no worries|v pohodě, to nic", "you're kidding|děláš si legraci", "what a shame|to je škoda", "I'm starving|umírám hlady", "it's up to you|je to na tobě", "I don't mind|je mi to jedno, nevadí mi to", "I can't be bothered|nechce se mi", "fingers crossed|držím palce"]],
    ["Přání a preference", ["I'd rather|raději bych", "I'd prefer|dal bych přednost", "I feel like|mám chuť na", "I'm keen to|rád bych", "it's time|je načase", "I can't stand|nesnáším", "I can't wait|nemůžu se dočkat", "I couldn't care less|je mi to úplně fuk"]]
  ],
  grammar: [
    { t: "would rather, it's time",
      h: `<p><b>would rather</b> (<b>I'd rather</b>) + základní tvar bez to = raději bych. Zápor: <b>I'd rather not</b>.</p>
<p class="ex">I<b>'d rather stay</b> at home. · I<b>'d rather not</b> talk about it. · Would you rather <b>walk</b> or <b>take</b> a taxi?</p>
<p>Když chceš, aby něco udělal <b>někdo jiný</b>, následuje minulý čas: <i>I'd rather <b>you didn't</b> smoke here.</i></p>
<p><b>It's time</b> + minulý čas = je načase (už se to mělo stát): <i>It's time we <b>went</b> home.</i> · <i>It's time you <b>got</b> a job.</i></p>`,
      q: ["I'd rather ___ at home tonight.|stay|to stay|staying", "I'd rather ___ talk about it.|not|don't|not to", "Would you rather walk ___ take a taxi?|or|than|as", "It's time we ___ home.|went|go|will go", "I'd rather you ___ smoke here.|didn't|don't|not", "It's time you ___ a job.|got|get|will get"] },
    { t: "Jak fungují idiomy",
      h: `<p>Idiom je ustálené spojení, jehož význam <b>není součtem slov</b>. <i>It's a piece of cake</i> nemá nic společného s dortem.</p>
<p>Tři pravidla:</p>
<ul class="ex"><li>Slova v idiomu <b>nejde měnit</b> ani překládat doslova z češtiny.</li><li>Sloveso se <b>časuje normálně</b>: <i>She <b>broke</b> the ice. · I<b>'m</b> fed up.</i></li><li>Používej jich málo. Jeden dobře umístěný idiom zní přirozeně, pět za sebou směšně.</li></ul>
<p>Důležitější je idiomům <b>rozumět</b> než je sám používat.</p>`,
      q: ["The test was a piece of ___.|cake|bread|pie", "I'm fed ___ with this weather.|up|off|out", "She was ___ the moon when she got the job.|over|on|above", "He called me out of the ___.|blue|sky|air", "Can you keep an ___ on my bag?|eye|ear|hand", "Let's call it a ___. We are tired.|day|night|time"] },
    { t: "Zkrácená mluvená angličtina",
      h: `<p>V rychlé řeči a v písních uslyšíš tvary, které se <b>nepíšou</b> ve formálním textu:</p>
<ul class="ex"><li><b>gonna</b> = going to: I'm gonna call him.</li><li><b>wanna</b> = want to: Do you wanna come?</li><li><b>gotta</b> = have got to: I gotta go.</li><li><b>kinda</b> = kind of (tak trochu) · <b>dunno</b> = don't know</li></ul>
<p>Mluvčí také vynechávají začátek věty: <i>(Do you) Want a coffee? · (I'll) See you later. · (It) Sounds good.</i></p>
<p>Stačí jim rozumět. Sám používej plné tvary, dokud si nebudeš jistý.</p>`,
      q: ["“I'm gonna call him” means I'm ___ call him.|going to|want to|got to", "“Do you wanna come?” means Do you ___ come?|want to|going to|have to", "“I gotta go” means I ___ go.|have got to|want to|am going", "“Sounds good” is short for ___ sounds good.|It|I|You", "“Dunno” means ___.|I don't know|I don't mind|I do know", "“It's kinda cold” means it's ___ cold.|a bit|not|very much not"] }
  ],
  sent: ["I'd rather stay at home tonight.|Dnes večer bych raději zůstal doma.", "It's time we went home.|Je načase jít domů.", "The exam was a piece of cake.|Zkouška byla hračka.", "I'm fed up with this weather.|Mám toho počasí plné zuby.", "She was over the moon.|Byla štěstím bez sebe.", "It's up to you.|Je to na tobě.", "I feel a bit under the weather.|Necítím se moc dobře.", "Can you keep an eye on my bag?|Můžeš mi pohlídat tašku?", "You're kidding!|Děláš si legraci!", "Let's call it a day.|Pro dnešek skončíme.", "I can't stand waiting.|Nesnáším čekání.", "I lost track of time.|Ztratil jsem pojem o čase."],
  pron: { t: "Jak znějí gonna a wanna", h: `<p>Tyto tvary vznikly prostě rychlou výslovností. <i>going to</i> se zkrátí na „gene“, <i>want to</i> na „wone“, <i>got to</i> na „gote“.</p><p>Když je znáš, začneš rozumět filmům a písním. Pozor: <i>gonna</i> nejde použít pro pohyb: <i>I'm going to London</i> se nezkracuje.</p>`, w: ["gonna|gene", "wanna|wone", "gotta|gote", "I'd rather|ajd rádr", "kind of|kajnde"] },
  dlg: [
    ["Co dnes večer", "Do you feel like going out tonight?|Máš chuť jít dnes večer ven?", "To be honest, I'd rather stay in.|Upřímně, radši bych zůstal doma.", "Are you OK?|Jsi v pořádku?", "I'm a bit under the weather.|Necítím se moc dobře.", "No worries. Shall I bring you some food?|V pohodě. Mám ti přinést nějaké jídlo?", "That would be awesome. I'm starving.|To by bylo úžasné. Umírám hlady."],
    ["Dobrá zpráva", "You're not gonna believe this.|Tomuhle nebudeš věřit.", "What happened?|Co se stalo?", "I got the job!|Dostal jsem tu práci!", "You're kidding! That's awesome.|Děláš si legraci! To je úžasné.", "I'm over the moon. The interview was a nightmare.|Jsem štěstím bez sebe. Pohovor byl noční můra.", "It's time we celebrated. Fingers crossed for the first day.|Je načase to oslavit. Držím palce na první den."]
  ]
},
{
  t: "Umění vyprávět", s: "Příběhy, zážitky a živý popis",
  groups: [
    ["Stavba příběhu", ["beginning|začátek", "background|pozadí, okolnosti", "climax|vyvrcholení", "twist|zvrat", "narrator|vypravěč", "setting|prostředí děje", "tension|napětí", "outcome|výsledek, rozuzlení"]],
    ["Pohyb", ["rush|spěchat", "creep|plížit se", "stumble|klopýtnout", "wander|bloudit, toulat se", "dash|vyrazit, pádit", "crawl|lézt, plazit se", "leap|skočit", "freeze|ztuhnout, zmrznout"]],
    ["Pohledy a zvuky", ["stare|zírat", "glance|letmo pohlédnout", "spot|zahlédnout", "scream|křičet (pronikavě)", "sigh|vzdychnout", "gasp|zalapat po dechu", "mumble|mumlat", "giggle|chichotat se"]],
    ["Atmosféra", ["silence|ticho", "darkness|tma", "shadow|stín", "fog|mlha", "thunder|hrom", "lightning|blesk", "noise|hluk", "smell|pach, vůně"]],
    ["Popis", ["enormous|obrovský", "tiny|maličký", "ancient|prastarý", "gorgeous|nádherný", "filthy|špinavý", "freezing|mrazivý", "boiling|vařící, horký", "deserted|opuštěný"]],
    ["Jak se to stalo", ["gradually|postupně", "immediately|okamžitě", "accidentally|náhodou", "deliberately|úmyslně", "unexpectedly|nečekaně", "fortunately|naštěstí", "unfortunately|bohužel", "to my surprise|k mému překvapení"]]
  ],
  grammar: [
    { t: "Předminulý čas průběhový",
      h: `<p><b>had been + sloveso s -ing</b> popisuje děj, který <b>nějakou dobu trval</b> před jiným okamžikem v minulosti. Často vysvětluje, proč něco bylo tak, jak bylo.</p>
<p class="ex">I <b>had been waiting</b> for an hour when the bus finally came. · Her eyes were red. She <b>had been crying</b>. · The ground was wet because it <b>had been raining</b>.</p>
<p>Porovnej: <i>had waited</i> zdůrazní výsledek, <i>had been waiting</i> trvání.</p>`,
      q: ["I ___ for an hour when the bus came.|had been waiting|have been waiting|was been waiting", "Her eyes were red. She ___.|had been crying|has been crying|is crying", "The ground was wet. It ___.|had been raining|has rained now|rains", "How long ___ you been driving before the accident?|had|have|did", "He was tired because he ___ all day.|had been working|has worked now|works", "They had ___ arguing for hours.|been|being|be"] },
    { t: "Zkrácené věty s -ing a -ed",
      h: `<p>Ve vyprávění můžeš dvě věty se stejným podmětem spojit příčestím. Text je pak svižnější.</p>
<ul class="ex"><li>She opened the door <b>and saw</b> him. → <b>Opening</b> the door, she saw him.</li><li>Because he <b>felt</b> tired, he went to bed. → <b>Feeling</b> tired, he went to bed.</li><li>After I <b>had finished</b> work, I left. → <b>Having finished</b> work, I left.</li><li>The house, which <b>was built</b> in 1800, is empty. → The house, <b>built</b> in 1800, is empty.</li></ul>
<p>Podmět obou částí musí být stejný.</p>`,
      q: ["___ the door, she saw a stranger.|Opening|Opened|Open", "___ tired, he went straight to bed.|Feeling|Felt|Feel", "___ finished the work, I went home.|Having|Had|Have been", "The castle, ___ in 1300, is deserted.|built|building|was built", "___ along the street, I spotted an old friend.|Walking|Walked|Walk", "A man ___ a black coat entered the room.|wearing|worn|wears"] },
    { t: "Jak oživit vyprávění",
      h: `<p>Dobrý příběh střídá časy a používá přesná slova:</p>
<ul class="ex"><li><b>Pozadí</b> – průběhové časy: It <b>was raining</b> and people <b>were rushing</b> home.</li><li><b>Děj</b> – minulý prostý: Suddenly, the lights <b>went out</b>.</li><li><b>Co bylo předtím</b> – předminulý: I <b>had</b> never <b>seen</b> anything like it.</li></ul>
<p>Místo slabých slov použij silná: very big → <b>enormous</b>, very cold → <b>freezing</b>, look → <b>stare / glance</b>, say → <b>whisper / scream</b>. Se silnými přídavnými jmény se pojí <b>absolutely</b>, ne very.</p>`,
      q: ["It was ___ freezing.|absolutely|very|much", "The house was ___. (very big)|enormous|very enormous|bigly", "Suddenly, the lights ___ out.|went|were going|had been going", "It ___ and people were rushing home.|was raining|rained already|has rained", "She ___ at me for a second and looked away. (letmo)|glanced|stared|gasped", "I had never ___ anything like it.|seen|saw|see"] }
  ],
  sent: ["I had been waiting for an hour.|Čekal jsem už hodinu.", "Opening the door, she saw a stranger.|Když otevřela dveře, uviděla cizího člověka.", "Feeling tired, he went to bed.|Protože se cítil unavený, šel spát.", "It was absolutely freezing.|Byla naprostá zima.", "Suddenly, the lights went out.|Najednou zhasla světla.", "She stared at me in silence.|Mlčky na mě zírala.", "The street was completely deserted.|Ulice byla úplně opuštěná.", "Unfortunately, it was too late.|Bohužel už bylo příliš pozdě.", "To my surprise, nobody noticed.|K mému překvapení si nikdo nevšiml.", "He had been working all day.|Pracoval celý den.", "I froze when I heard the noise.|Ztuhl jsem, když jsem uslyšel ten zvuk.", "Having finished work, I went home.|Když jsem dokončil práci, šel jsem domů."],
  pron: { t: "Pauzy a tempo ve vyprávění", h: `<p>Vypravěč pracuje s hlasem. Před důležitým okamžikem zpomalí a udělá pauzu, slova jako <b>suddenly</b> a <b>unfortunately</b> vysloví s důrazem a po nich se krátce odmlčí.</p><p><i>I opened the door … and SUDdenly … the lights went OUT.</i></p>`, w: ["suddenly|SAdnli", "unfortunately|anFÓRčnetli", "deliberately|dyLIbretli", "enormous|iNÓRmes", "gorgeous|GÓRdžes"] },
  dlg: [
    ["Divná noc", "You look tired. Didn't you sleep?|Vypadáš unaveně. Nespal jsi?", "No. Something strange happened last night.|Ne. Včera v noci se stalo něco zvláštního.", "Go on, tell me.|Pokračuj, povídej.", "I had been reading for an hour when the lights went out.|Četl jsem už hodinu, když zhasla světla.", "And then?|A potom?", "Hearing a noise downstairs, I froze. Fortunately, it was only the cat.|Když jsem dole uslyšel zvuk, ztuhl jsem. Naštěstí to byla jen kočka."],
    ["Nejlepší dovolená", "What was your best holiday ever?|Jaká byla tvoje nejlepší dovolená?", "Iceland. The landscape was absolutely gorgeous.|Island. Krajina byla naprosto nádherná.", "Wasn't it freezing?|Nebyla tam zima?", "It was, but we had been planning it for years.|Byla, ale plánovali jsme to léta.", "Did anything go wrong?|Pokazilo se něco?", "We got lost in the fog once. To my surprise, a local man drove us back.|Jednou jsme se ztratili v mlze. K mému překvapení nás místní muž odvezl zpátky."]
  ]
},
{
  t: "Kdyby a jestli", s: "Všechny podmínky pohromadě",
  groups: [
    ["Abstraktní pojmy", ["concept|pojem, koncept", "principle|zásada", "aspect|hledisko", "factor|faktor", "issue|problém, otázka", "purpose|účel", "consequence|důsledek", "circumstance|okolnost"]],
    ["Rozhodování", ["option|možnost", "choice|volba", "alternative|alternativa", "priority|priorita", "risk|riziko", "judgement|úsudek", "dilemma|dilema", "outcome|výsledek"]],
    ["Podmínkové spojky", ["provided that|za předpokladu, že", "as long as|pokud, dokud", "in case|pro případ, že", "supposing|dejme tomu, že", "otherwise|jinak", "even if|i kdyby", "whether|zda", "only if|pouze pokud"]],
    ["Myšlení", ["imagine|představit si", "suppose|předpokládat", "wonder|být zvědavý, divit se", "guess|hádat", "realise|uvědomit si", "recognise|rozpoznat", "reflect|zamyslet se", "intend|mít v úmyslu"]],
    ["Šance a osud", ["coincidence|shoda okolností", "fate|osud", "fortune|štěstí, jmění", "miracle|zázrak", "accident|nehoda, náhoda", "opportunity|příležitost", "odds|šance, pravděpodobnost", "destiny|osud, úděl"]],
    ["Hodnocení možností", ["realistic|realistický", "hypothetical|hypotetický", "probable|pravděpodobný", "impossible|nemožný", "essential|nezbytný", "optional|volitelný", "worthwhile|stojící za to", "pointless|zbytečný, nesmyslný"]]
  ],
  grammar: [
    { t: "Čtyři podmínky vedle sebe",
      h: `<p>Všechny typy v jedné tabulce:</p>
<ul class="ex"><li><b>Nultá</b> (vždy platí): If you <b>heat</b> ice, it <b>melts</b>.</li><li><b>První</b> (reálná budoucnost): If it <b>rains</b>, I <b>will stay</b> at home.</li><li><b>Druhá</b> (nereálná přítomnost): If I <b>had</b> time, I <b>would help</b> you.</li><li><b>Třetí</b> (nereálná minulost): If I <b>had had</b> time, I <b>would have helped</b> you.</li></ul>
<p>Čím dál od reality, tím dál do minulosti se posouvá čas po if. Po if nikdy není will ani would.</p>`,
      q: ["If you heat ice, it ___.|melts|will melted|would melt", "If it rains tomorrow, I ___ at home.|will stay|would stay|stayed", "If I ___ time now, I would help you.|had|have|had had", "If I had known, I ___ you.|would have told|would tell|will tell", "If she ___ harder, she would have passed.|had studied|studied now|would study", "What would you do if you ___ your job?|lost|lose|had lose"] },
    { t: "Smíšené podmínky",
      h: `<p>Někdy podmínka a důsledek patří do <b>různých časů</b>:</p>
<ul class="ex"><li>Minulá příčina, přítomný důsledek: If I <b>had studied</b> medicine, I <b>would be</b> a doctor now.</li><li>Trvalý stav, minulý důsledek: If I <b>were</b> braver, I <b>would have told</b> him.</li></ul>
<p>Pomůže ti otázka: mluvím v dané části věty o tehdy, nebo o teď? „Teď“ → <b>would + základní tvar</b> / minulý čas. „Tehdy“ → <b>would have + 3. tvar</b> / předminulý čas.</p>`,
      q: ["If I had studied medicine, I ___ a doctor now.|would be|would have been yesterday|will be", "If I ___ braver, I would have told him.|were|am|would be", "If she hadn't missed the flight, she ___ here now.|would be|will be|had been", "If I ___ so lazy, I would have finished it yesterday.|weren't|am not|wouldn't be", "If we had left earlier, we ___ in a traffic jam now.|wouldn't be|won't be|weren't", "If he ___ the map, we wouldn't be lost now.|had taken|takes|would take"] },
    { t: "unless, provided, as long as, in case",
      h: `<p>Podmínku neuvádí jen if:</p>
<ul class="ex"><li><b>unless</b> = if not: I won't go <b>unless</b> you come.</li><li><b>provided (that) / as long as</b> = pouze pokud: You can borrow it <b>as long as</b> you bring it back.</li><li><b>in case</b> = pro případ, že: Take an umbrella <b>in case</b> it rains. (vezmi si ho předem)</li><li><b>even if</b> = i kdyby: I'll go <b>even if</b> it rains.</li><li><b>supposing</b> = dejme tomu: <b>Supposing</b> you won, what would you do?</li></ul>
<p>Po všech platí stejná pravidla pro časy jako po if.</p>`,
      q: ["You can borrow my car as ___ as you bring it back.|long|far|soon", "Take an umbrella in ___ it rains.|case|time|order", "I won't go ___ you come with me.|unless|if not unless|provided not", "I'll go ___ if it rains.|even|as|also", "You can stay ___ that you are quiet.|provided|in case|unless", "___ you won the lottery, what would you do?|Supposing|Unless|In case of"] }
  ],
  sent: ["If I had known, I would have told you.|Kdybych to věděl, řekl bych ti to.", "If I had studied medicine, I would be a doctor now.|Kdybych studoval medicínu, byl bych teď lékařem.", "You can borrow it as long as you bring it back.|Můžeš si to půjčit, pokud to vrátíš.", "Take an umbrella in case it rains.|Vezmi si deštník pro případ, že bude pršet.", "I will go even if it rains.|Půjdu, i kdyby pršelo.", "What would you do if you lost your job?|Co bys dělal, kdybys přišel o práci?", "It was just a coincidence.|Byla to jen shoda okolností.", "We have no other option.|Nemáme jinou možnost.", "I wonder whether he will come.|Jsem zvědavý, jestli přijde.", "It is essential to be on time.|Je nezbytné přijít včas.", "I won't go unless you come with me.|Nepůjdu, pokud nepůjdeš se mnou.", "It is pointless to argue.|Nemá smysl se hádat."],
  pron: { t: "Zkrácené tvary v podmínkách", h: `<p>Ve třetí podmínce se v řeči zkrátí skoro všechno:</p><ul class="ex"><li>If I had known → <i>If I'd known</i> = „ifajd noun“</li><li>I would have told → <i>I'd've told</i> = „ajdev tould“</li></ul><p>Obě <b>'d</b> znějí stejně, ale první je <i>had</i> a druhé <i>would</i>.</p>`, w: ["if I'd known|ifajd noun", "I'd have told|ajdev tould", "coincidence|kouINsidens", "circumstance|SÉRkemstens", "hypothetical|hajpeTHEtykl"] },
  dlg: [
    ["Co kdyby", "Do you ever regret not studying abroad?|Lituješ někdy, že jsi nestudoval v zahraničí?", "Sometimes. If I had gone, my English would be better now.|Někdy. Kdybych jel, měl bych teď lepší angličtinu.", "But you wouldn't have met your wife.|Ale nepotkal bys svoji ženu.", "True. It was a coincidence that we met.|Pravda. Byla to shoda okolností, že jsme se potkali.", "Would you go now if you had the chance?|Jel bys teď, kdybys měl možnost?", "Yes, provided that my family could come with me.|Ano, za předpokladu, že by mohla jet i rodina."],
    ["Půjčka auta", "Can I borrow your car on Saturday?|Můžu si v sobotu půjčit tvoje auto?", "Yes, as long as you bring it back by six.|Ano, pokud ho vrátíš do šesti.", "Of course. What if I'm a bit late?|Samozřejmě. Co když se trochu opozdím?", "Then call me. Take my number in case something happens.|Tak mi zavolej. Vezmi si moje číslo pro případ, že se něco stane.", "I will. I wouldn't ask unless it was important.|Vezmu. Neprosil bych, kdyby to nebylo důležité.", "No worries. If I had needed it, I would have said so.|V pohodě. Kdybych ho potřeboval, řekl bych to."]
  ]
},
{
  t: "Velké finále", s: "Typické české chyby a shrnutí celého roku",
  groups: [
    ["Zrádná slova I", ["actually|ve skutečnosti (ne „aktuálně“)", "eventually|nakonec (ne „eventuálně“)", "sympathetic|soucitný (ne „sympatický“)", "sensible|rozumný (ne „citlivý“)", "sensitive|citlivý", "control|ovládat, řídit (ne „kontrolovat“)", "check|zkontrolovat", "currently|aktuálně, v současnosti"]],
    ["Zrádná slova II", ["gymnasium|tělocvična (ne „gymnázium“)", "grammar school|gymnázium", "chef|šéfkuchař (ne „šéf“)", "boss|šéf", "host|hostitel (ne „host“)", "guest|host", "billion|miliarda", "fabric|látka (ne „fabrika“)"]],
    ["Podobná slova", ["lend|půjčit někomu", "borrow|půjčit si", "remember|pamatovat si", "remind|připomenout", "rise|stoupat (samo)", "raise|zvednout (něco)", "lie|ležet", "lay|položit"]],
    ["Další dvojice", ["affect|ovlivnit (sloveso)", "effect|účinek (podstatné jméno)", "advice|rada (podstatné jméno)", "advise|radit (sloveso)", "lose|ztratit", "loose|volný", "quite|docela", "quiet|tichý"]],
    ["Slova pro pokročilé", ["nevertheless|nicméně", "whereas|kdežto", "furthermore|navíc", "meanwhile|mezitím", "apparently|zjevně, prý", "approximately|přibližně", "particularly|zvláště", "frequently|často"]],
    ["Učení dál", ["fluent|plynulý", "accurate|přesný", "vocabulary|slovní zásoba", "pronunciation|výslovnost", "native speaker|rodilý mluvčí", "subtitle|titulek (u filmu)", "bilingual|dvojjazyčný", "achievement|úspěch, dosažený výsledek"]]
  ],
  grammar: [
    { t: "Nejčastější české chyby",
      h: `<p>Chyby, které Čechům zůstávají nejdéle:</p>
<ul class="ex"><li><s>I am agree.</s> → <b>I agree.</b></li><li><s>I have 30 years.</s> → <b>I am 30.</b></li><li><s>I live here 5 years.</s> → <b>I have lived here for 5 years.</b></li><li><s>If it will rain…</s> → <b>If it rains…</b></li><li><s>She said me.</s> → <b>She told me.</b></li><li><s>I didn't see nobody.</s> → <b>I didn't see anybody.</b></li><li><s>How does it look like?</s> → <b>What does it look like?</b></li><li><s>informations, advices</s> → <b>information, advice</b></li></ul>`,
      q: ["I ___ with you.|agree|am agree|am agreeing", "I ___ here for five years.|have lived|live|am living", "If it ___ tomorrow, we will stay in.|rains|will rain|would rain", "I didn't see ___.|anybody|nobody|none", "___ does it look like?|What|How|Which", "She gave me some useful ___.|information|informations|an information"] },
    { t: "Slovosled, který se nemění",
      h: `<p>Čeština má slovosled volný, angličtina pevný: <b>podmět – sloveso – předmět – způsob – místo – čas</b>.</p>
<p class="ex">I read the book carefully at home yesterday.</p>
<ul class="ex"><li>Předmět se neodděluje od slovesa: <s>I like very much coffee.</s> → I like coffee <b>very much</b>.</li><li>Příslovce četnosti před hlavním slovesem: I <b>often</b> go.</li><li>Místo před časem: I went <b>to Prague last week</b>.</li><li>Věta nesmí být bez podmětu: <b>It</b> is raining. · <b>There</b> is a problem.</li></ul>`,
      q: ["I like ___.|coffee very much|very much coffee|much very coffee", "She ___ late.|is always|always is|is being always", "We went ___.|to Prague last week|last week to Prague we|to last week Prague", "___ is raining.|It|–|There", "___ is a problem with my order.|There|It|–", "He speaks ___.|English very well|very well English|well very English"] },
    { t: "Co všechno už umíš",
      h: `<p>Za rok jsi prošel celou gramatiku úrovně B1 až B2. Závěrečný test ověří to nejdůležitější:</p>
<ul class="ex"><li>časy: přítomné, minulé, předpřítomné, předminulé a budoucí, prosté i průběhové</li><li>trpný rod a vazbu <i>have something done</i></li><li>čtyři typy podmínek a <i>wish</i></li><li>nepřímou řeč, vztažné věty a způsobová slovesa</li></ul>
<p>Co dál: sleduj filmy s anglickými titulky, čti to, co tě baví, a mluv při každé příležitosti. Kartičky ti slovíčka připomenou i po skončení kurzu.</p>`,
      q: ["By next year I ___ English for two years.|will have been learning|am learning|learn", "If I had started earlier, I ___ fluent now.|would be|will be|had been", "The course ___ in a year.|can be completed|can complete|can be complete", "She said she ___ very proud.|was|is being|has", "I wish I ___ more time to practise.|had|have|will have", "I ___ a lot of progress this year.|have made|have done|made have"] }
  ],
  sent: ["I have lived here for five years.|Bydlím tady pět let.", "I agree with you.|Souhlasím s tebou.", "Actually, I have changed my mind.|Ve skutečnosti jsem změnil názor.", "Can you lend me some money?|Můžeš mi půjčit nějaké peníze?", "Please remind me to call her.|Připomeň mi prosím, abych jí zavolal.", "I like coffee very much.|Mám moc rád kávu.", "She gave me some good advice.|Dala mi dobrou radu.", "Prices are rising again.|Ceny opět stoupají.", "I have made a lot of progress.|Udělal jsem velký pokrok.", "My pronunciation is getting better.|Moje výslovnost se zlepšuje.", "I want to be fluent in English.|Chci mluvit plynně anglicky.", "It was worth it.|Stálo to za to."],
  pron: { t: "Na čem záleží nejvíc", h: `<p>Na závěr tři věci, které pro srozumitelnost dělají nejvíc:</p><ul class="ex"><li><b>přízvuk ve slově</b> na správné slabice</li><li><b>délka samohlásek</b>: ship × sheep, full × fool</li><li><b>rytmus věty</b>: důležitá slova silně, gramatická slabě</li></ul><p>Dokonalý přízvuk mít nemusíš. Stačí, aby ti lidé rozuměli bez námahy.</p>`, w: ["pronunciation|prenansiEJšn", "vocabulary|veKEbjuleri", "achievement|eČÍVment", "approximately|ePROksimetli", "fluent|FLÚent"] },
  dlg: [
    ["Po roce", "How long have you been learning English?|Jak dlouho se učíš anglicky?", "For a year. I started from the very beginning.|Rok. Začínal jsem úplně od začátku.", "Really? You sound quite fluent.|Vážně? Mluvíš docela plynně.", "Thank you. I have been practising every day.|Děkuju. Procvičoval jsem každý den.", "What was the most difficult thing?|Co bylo nejtěžší?", "The tenses, actually. But eventually I got used to them.|Vlastně časy. Ale nakonec jsem si na ně zvykl."],
    ["Co dál", "What are you going to do now that the course is over?|Co budeš dělat teď, když kurz skončil?", "I'd like to watch films without subtitles.|Chtěl bych se dívat na filmy bez titulků.", "If I were you, I would also read books.|Být tebou, četl bych i knihy.", "I have already bought one. It was recommended to me.|Jednu jsem si už koupil. Byla mi doporučena.", "Well done. You must be proud of yourself.|Výborně. Musíš být na sebe hrdý.", "I am. It was worth it.|Jsem. Stálo to za to."]
  ]
}
);
