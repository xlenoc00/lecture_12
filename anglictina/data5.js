// Obsah kurzu, týdny 27–32 (úroveň B1). Od této úrovně už slovíčka nemají český přepis výslovnosti.
window.UNITS.push(
{
  t: "Vzdělání", s: "Škola, studium a jak dlouho už něco děláš",
  groups: [
    ["Škola", ["primary school|základní škola (1. stupeň)", "secondary school|střední škola", "pupil|žák", "headteacher|ředitel školy", "subject|předmět", "timetable|rozvrh", "break|přestávka", "homework|domácí úkol"]],
    ["Předměty", ["maths|matematika", "history|dějepis", "geography|zeměpis", "science|přírodní vědy", "chemistry|chemie", "physics|fyzika", "biology|biologie", "art|výtvarná výchova, umění"]],
    ["Studium", ["degree|vysokoškolský titul", "course|kurz", "lecture|přednáška", "essay|esej", "research|výzkum", "term|pololetí, semestr", "scholarship|stipendium", "certificate|osvědčení"]],
    ["Zkoušky", ["pass|udělat (zkoušku)", "fail|neudělat (zkoušku)", "mark|známka", "revise|opakovat si (učivo)", "cheat|podvádět", "take an exam|skládat zkoušku", "test|test", "result|výsledek"]],
    ["Učení", ["memorise|naučit se nazpaměť", "practise|procvičovat", "translate|překládat", "pronounce|vyslovit", "spell|hláskovat", "mean|znamenat", "knowledge|znalosti", "concentrate|soustředit se"]],
    ["Vlastnosti studenta", ["hard-working|pracovitý", "talented|nadaný", "curious|zvědavý", "ambitious|ambiciózní", "creative|tvořivý", "independent|samostatný", "responsible|zodpovědný", "motivated|motivovaný"]]
  ],
  grammar: [
    { t: "Předpřítomný čas průběhový",
      h: `<p>Když činnost začala v minulosti a <b>stále probíhá</b> (nebo právě skončila a je vidět výsledek), použiješ <b>have / has been + sloveso s -ing</b>.</p>
<p class="ex">I <b>have been learning</b> English for six months. · She <b>has been working</b> all day. · It <b>has been raining</b> since morning.</p>
<p>Česky je tu přítomný čas: „Učím se anglicky šest měsíců.“ Věta <i>I learn English for six months</i> je chyba.</p>`,
      q: ["I ___ English for six months.|have been learning|am learning|learn", "She ___ all day. She is tired.|has been working|is working|works", "It ___ since morning.|has been raining|is raining|rains", "How long ___ you been waiting?|have|are|do", "They have ___ playing for two hours.|been|being|be", "He ___ here since 2020. (a stále pracuje)|has been working|worked|is working"] },
    { t: "Prostý × průběhový předpřítomný čas",
      h: `<p><b>Průběhový</b> zdůrazňuje činnost a její trvání. <b>Prostý</b> zdůrazňuje výsledek nebo počet.</p>
<ul class="ex"><li>I <b>have been reading</b> this book all week. (ještě čtu)</li><li>I <b>have read</b> this book. (dočetl jsem)</li><li>I <b>have written</b> three essays. (kolik → prostý)</li></ul>
<p>Stavová slovesa (<b>know, be, have, like, want, understand</b>) průběhový tvar nemají: <i>I <b>have known</b> her for years.</i></p>`,
      q: ["I ___ her for ten years.|have known|have been knowing|know", "She ___ three essays this week.|has written|has been writing|writes", "My hands are dirty. I ___ the car.|have been repairing|have repaired three|repair", "How many pages ___ you read?|have|have been|are", "We ___ friends since school.|have been|have been being|are", "I ___ all morning and I'm exhausted.|have been revising|have revised|revise"] },
    { t: "Otázky na trvání a školní vazby",
      h: `<p>Na trvání se ptáš <b>How long have you been + -ing?</b> nebo <b>Since when…?</b></p>
<p class="ex">How long have you been studying here? – For two years. / Since September.</p>
<p>Časté vazby se školou:</p>
<ul class="ex"><li><b>good at / bad at</b> maths – dobrý / špatný v matematice</li><li><b>interested in</b> history – zajímat se o dějepis</li><li><b>take / pass / fail</b> an exam – skládat / udělat / neudělat zkoušku</li><li><b>do</b> homework, <b>make</b> a mistake</li></ul>`,
      q: ["How long have you been ___ here?|studying|study|studied", "I am good ___ maths.|at|in|on", "She is interested ___ history.|in|at|about", "Have you ___ your homework?|done|made|taken", "He ___ the exam. He is very happy.|passed|took|made", "Everyone ___ mistakes.|makes|does|takes"] }
  ],
  sent: ["I have been learning English for six months.|Učím se anglicky šest měsíců.", "How long have you been waiting?|Jak dlouho čekáš?", "She has been working all day.|Pracuje celý den.", "I have known her for ten years.|Znám ji deset let.", "He failed the exam twice.|Dvakrát tu zkoušku neudělal.", "What does this word mean?|Co znamená tohle slovo?", "I am not very good at maths.|V matematice nejsem moc dobrý.", "How do you spell your name?|Jak se hláskuje vaše jméno?", "She has written three essays this week.|Tento týden napsala tři eseje.", "I can't concentrate when it is noisy.|Když je hluk, nemůžu se soustředit.", "My favourite subject was history.|Můj oblíbený předmět byl dějepis.", "It has been raining since morning.|Od rána prší."],
  pron: { t: "Slabé been", h: `<p>V předpřítomném průběhovém čase je <b>been</b> nepřízvučné a krátké, zní jako „bin“. Důraz nese hlavní sloveso.</p><p><i>I've been LEARning.</i> · <i>How long have you been WAIting?</i></p>`, w: ["I've been learning|ajv bin lérnin(g)", "she's been working|šíz bin wérkin(g)", "how long|hau long", "knowledge|nolidž", "science|sajens"] },
  dlg: [
    ["Jazykový kurz", "How long have you been learning English?|Jak dlouho se učíš anglicky?", "For about six months.|Asi šest měsíců.", "Your pronunciation is very good.|Máš velmi dobrou výslovnost.", "Thank you. I have been practising every day.|Děkuju. Procvičuju každý den.", "Have you taken any exams yet?|Už jsi skládal nějaké zkoušky?", "Not yet, but I'd like to get a certificate.|Ještě ne, ale chtěl bych získat certifikát."],
    ["Před zkouškou", "You look exhausted.|Vypadáš vyčerpaně.", "I have been revising all night.|Celou noc jsem se učil.", "What subject is the exam in?|Z jakého předmětu je zkouška?", "Chemistry. I'm not very good at it.|Z chemie. Moc mi nejde.", "Don't worry. You have never failed anything.|Neboj. Nikdy jsi z ničeho nepropadl.", "I hope I'll pass this time too.|Doufám, že to udělám i tentokrát."]
  ]
},
{
  t: "Životní prostředí", s: "Planeta, klima a co by bylo, kdyby",
  groups: [
    ["Planeta", ["environment|životní prostředí", "climate|klima", "pollution|znečištění", "global warming|globální oteplování", "nature|příroda", "planet|planeta", "ocean|oceán", "atmosphere|atmosféra"]],
    ["Odpad a zdroje", ["waste|odpad", "recycle|recyklovat", "reduce|snížit", "reuse|znovu použít", "throw away|vyhodit", "packaging|obal", "resource|zdroj", "litter|odpadky (pohozené)"]],
    ["Energie", ["electricity|elektřina", "power station|elektrárna", "solar|solární", "fuel|palivo", "coal|uhlí", "gas|plyn", "renewable|obnovitelný", "consumption|spotřeba"]],
    ["Počasí a katastrofy", ["flood|povodeň", "drought|sucho", "earthquake|zemětřesení", "fire|požár, oheň", "hurricane|hurikán", "heatwave|vlna veder", "disaster|katastrofa", "damage|škoda, poškodit"]],
    ["Ochrana přírody", ["protect|chránit", "destroy|zničit", "save|zachránit, šetřit", "survive|přežít", "threaten|ohrožovat", "species|druh (zvířat)", "extinct|vyhynulý", "endangered|ohrožený"]],
    ["Řešení", ["solution|řešení", "cause|příčina, způsobit", "effect|účinek, následek", "prevent|zabránit", "ban|zakázat", "increase|zvýšit (se)", "decrease|snížit (se)", "sustainable|udržitelný"]]
  ],
  grammar: [
    { t: "Druhá podmínka: kdyby… tak by",
      h: `<p>Pro <b>nereálnou nebo nepravděpodobnou</b> situaci v přítomnosti či budoucnosti: po <b>if</b> minulý čas, v hlavní větě <b>would</b> + základní tvar.</p>
<p class="ex"><b>If</b> I <b>had</b> more money, I <b>would buy</b> an electric car. · <b>If</b> people <b>used</b> less plastic, the oceans <b>would be</b> cleaner.</p>
<p>Minulý čas tu neznamená minulost, jen nereálnost. U slovesa být se používá <b>were</b> pro všechny osoby: <i>If I <b>were</b> you, I would…</i></p>
<p>Po if nikdy není would.</p>`,
      q: ["If I ___ more money, I would buy a new car.|had|have|would have", "If people used less plastic, the sea ___ cleaner.|would be|will be|was", "If I ___ you, I would recycle more.|were|am|would be", "What ___ you do if you won a million?|would|will|did", "She would travel more if she ___ time.|had|has|would have", "If we ___ by train, we would save energy.|went|go|would go"] },
    { t: "wish + minulý čas",
      h: `<p>Když si přeješ, aby něco <b>teď bylo jinak</b>, než je, použij <b>I wish</b> + minulý čas. Česky „kéž by“, „škoda, že ne…“.</p>
<p class="ex">I <b>wish</b> I <b>had</b> a garden. (ale nemám) · I <b>wish</b> it <b>wasn't</b> so hot. · She <b>wishes</b> she <b>could</b> help.</p>
<p>Stejně funguje <b>If only</b>: <i>If only I knew the answer!</i></p>`,
      q: ["I wish I ___ a garden.|had|have|would have", "I wish it ___ so hot today.|wasn't|isn't|won't be", "She wishes she ___ speak French.|could|can|will", "If only I ___ the answer!|knew|know|would know", "He wishes he ___ in the country.|lived|lives|would live", "I wish I ___ more time.|had|have|will have"] },
    { t: "První × druhá podmínka",
      h: `<p>Rozhoduje, jak reálná ti situace připadá.</p>
<ul class="ex"><li><b>První</b> (reálná možnost): If it <b>rains</b> tomorrow, I <b>will stay</b> at home.</li><li><b>Druhá</b> (představa, nepravděpodobné): If it <b>rained</b> for a month, there <b>would be</b> floods.</li></ul>
<p>Stejnou událost může optimista říct první podmínkou a pesimista druhou: <i>If I win…</i> × <i>If I won…</i></p>
<p>Místo would může být <b>could</b> (mohl bych) nebo <b>might</b> (možná bych).</p>`,
      q: ["If it rains tomorrow, we ___ the trip.|will cancel|would cancel|cancelled", "If I were the president, I ___ plastic bags.|would ban|will ban|ban", "If you ___ now, you will catch the bus.|leave|left|would leave", "If we had a car, we ___ go to the coast.|could|can|will", "I will help you if I ___ time.|have|had|would have", "If animals could talk, what ___ they say?|would|will|do"] }
  ],
  sent: ["If I had more money, I would buy an electric car.|Kdybych měl víc peněz, koupil bych si elektromobil.", "I wish I had a garden.|Kéž bych měl zahradu.", "If I were you, I would recycle more.|Být tebou, víc bych recykloval.", "What would you do if you won a million?|Co bys dělal, kdybys vyhrál milion?", "We should reduce our energy consumption.|Měli bychom snížit spotřebu energie.", "Pollution is a serious problem.|Znečištění je vážný problém.", "Many species are endangered.|Mnoho druhů je ohrožených.", "The flood destroyed hundreds of houses.|Povodeň zničila stovky domů.", "I wish it wasn't so hot.|Kéž by nebylo takové horko.", "Don't throw away plastic bottles.|Nevyhazuj plastové láhve.", "We must protect the environment.|Musíme chránit životní prostředí.", "If we used less plastic, the sea would be cleaner.|Kdybychom používali méně plastu, moře by bylo čistší."],
  pron: { t: "would ve zkrácené podobě", h: `<p><b>would</b> se v řeči zkracuje na <b>'d</b>: <i>I'd, you'd, we'd, they'd</i>. Je to jen krátké „d“ přilepené k zájmenu a snadno se přeslechne.</p><p>Pozor: <i>I'd</i> může být také <i>I had</i>. Po <i>would</i> následuje základní tvar, po <i>had</i> třetí tvar.</p>`, w: ["I'd buy|ajd baj", "we'd be|wíd bí", "they'd go|dejd gou", "environment|invajrnment", "drought|draut"] },
  dlg: [
    ["Kdybych mohl", "Do you go to work by car?|Jezdíš do práce autem?", "Yes, but I wish I didn't have to.|Ano, ale přál bych si, abych nemusel.", "Why don't you take the train?|Proč nejezdíš vlakem?", "If there was a station near my house, I would.|Kdyby u mého domu bylo nádraží, jezdil bych.", "What would you change if you were the mayor?|Co bys změnil, kdybys byl starosta?", "I would ban cars in the city centre.|Zakázal bych auta v centru města."],
    ["Třídění odpadu", "Do you recycle?|Třídíš odpad?", "Yes, we recycle paper, glass and plastic.|Ano, třídíme papír, sklo a plasty.", "I wish more people did it.|Kéž by to dělalo víc lidí.", "If shops used less packaging, it would be easier.|Kdyby obchody používaly méně obalů, bylo by to snazší.", "That's true. We throw away so much.|To je pravda. Vyhazujeme toho tolik.", "If we don't change, the problem will get worse.|Jestli se nezměníme, problém se zhorší."]
  ]
},
{
  t: "Média a zprávy", s: "Co kdo řekl: nepřímá řeč",
  groups: [
    ["Zprávy", ["report|reportáž, hlásit", "reporter|reportér", "broadcast|vysílat, vysílání", "interview|rozhovor", "source|zdroj", "event|událost", "issue|problém, téma", "statement|prohlášení"]],
    ["Noviny", ["front page|titulní strana", "editor|redaktor", "column|sloupek", "review|recenze", "publish|vydat, zveřejnit", "press|tisk", "local|místní", "daily|deník, denní"]],
    ["Televize a rádio", ["presenter|moderátor", "viewer|divák", "audience|publikum", "episode|díl", "documentary|dokument", "live|živě", "screen|obrazovka", "remote control|dálkový ovladač"]],
    ["Slovesa mluvení", ["announce|oznámit", "claim|tvrdit", "admit|přiznat", "deny|popřít", "mention|zmínit", "reply|odpovědět", "warn|varovat", "confirm|potvrdit"]],
    ["Na sítích", ["social media|sociální sítě", "follower|sledující", "comment|komentář", "fake news|falešné zprávy", "privacy|soukromí", "influence|vliv, ovlivnit", "opinion|názor", "rumour|fáma"]],
    ["Hodnocení zpráv", ["reliable|spolehlivý", "accurate|přesný", "biased|zaujatý", "shocking|šokující", "current|současný", "official|oficiální", "public|veřejný, veřejnost", "according to|podle"]]
  ],
  grammar: [
    { t: "Nepřímá řeč: posun časů",
      h: `<p>Když předáváš, co někdo řekl, a uvozovací sloveso je v minulosti (<b>said, told</b>), čas ve větě se posune o krok do minulosti.</p>
<ul class="ex"><li>“I <b>am</b> tired.” → She said (that) she <b>was</b> tired.</li><li>“I <b>work</b> here.” → He said he <b>worked</b> there.</li><li>“I <b>have seen</b> it.” → She said she <b>had seen</b> it.</li><li>“I <b>will</b> call.” → He said he <b>would</b> call.</li><li>“I <b>can</b> help.” → She said she <b>could</b> help.</li></ul>
<p>Mění se také zájmena a někdy místo a čas: <i>here → there, today → that day, tomorrow → the next day</i>.</p>`,
      q: ["“I am tired.” She said she ___ tired.|was|is|has been", "“I will call you.” He said he ___ call me.|would|will|did", "“I can help.” She said she ___ help.|could|can|will", "“I work in a bank.” He said he ___ in a bank.|worked|works|has worked", "“I have seen it.” She said she ___ it.|had seen|has seen|saw have", "“We are leaving.” They said they ___ leaving.|were|are|have been"] },
    { t: "say × tell",
      h: `<p>Obě slovesa znamenají „říct“, ale liší se stavbou věty:</p>
<ul class="ex"><li><b>say</b> (something): He <b>said</b> (that) he was busy. · He <b>said to me</b> that…</li><li><b>tell</b> + komu (bez to): He <b>told me</b> (that) he was busy.</li></ul>
<p>Chyba je <i>He said me</i> i <i>He told that</i>.</p>
<p>Ustálená spojení: <b>tell</b> the truth, a lie, a story, a joke · <b>say</b> hello, sorry, yes, no.</p>`,
      q: ["She ___ me that she was busy.|told|said|told to", "He ___ that he was sorry.|said|told|said me", "Can you ___ me the truth?|tell|say|tell to", "She didn't ___ goodbye.|say|tell|say me", "They ___ us a funny story.|told|said|said to", "What did he ___ to you?|say|tell|told"] },
    { t: "Nepřímé otázky a příkazy",
      h: `<p>Nepřímá otázka má slovosled <b>oznamovací věty</b> a posunutý čas. Otázky ano/ne uvádí <b>if</b> (nebo whether).</p>
<p class="ex">“Where <b>do you live</b>?” → He asked me where <b>I lived</b>. · “<b>Are you</b> married?” → She asked <b>if I was</b> married.</p>
<p>Příkazy a žádosti: <b>tell / ask</b> + osoba + <b>to</b> + sloveso. Zápor: <b>not to</b>.</p>
<p class="ex">“Sit down.” → He <b>told me to sit</b> down. · “Don't be late.” → She <b>told me not to be</b> late.</p>`,
      q: ["He asked me where I ___.|lived|did live|do live", "She asked ___ I was married.|if|that|what", "The teacher told us ___ quiet.|to be|be|that be", "He asked me what time ___.|it was|was it|is it", "She told me ___ late.|not to be|to not be|don't be", "They asked ___ we wanted.|what|if what|that"] }
  ],
  sent: ["She said she was tired.|Řekla, že je unavená.", "He told me he would call.|Řekl mi, že zavolá.", "They asked me where I lived.|Zeptali se mě, kde bydlím.", "She asked if I was married.|Zeptala se, jestli jsem ženatý.", "The reporter interviewed the minister.|Reportér dělal rozhovor s ministrem.", "He told me not to worry.|Řekl mi, ať si nedělám starosti.", "According to the report, prices are rising.|Podle zprávy ceny rostou.", "Don't believe every rumour.|Nevěř každé fámě.", "She denied everything.|Všechno popřela.", "Is this source reliable?|Je tento zdroj spolehlivý?", "He admitted that he had made a mistake.|Přiznal, že udělal chybu.", "In my opinion, the article is biased.|Podle mého názoru je ten článek zaujatý."],
  pron: { t: "Důraz v nepřímé řeči", h: `<p>Slovo <b>that</b> po <i>said</i> a <i>told</i> je slabé, zní jen jako „dt“, a často se úplně vynechá. Uvozovací slovesa jsou také nepřízvučná; důraz je na obsahu sdělení.</p><p><i>She said (that) she was TIRED.</i></p>`, w: ["she said that|ší sed dt", "he told me|hí tould mí", "according to|ekórding tu", "reliable|rilajebl", "audience|ódiens"] },
  dlg: [
    ["Co říkal šéf", "Did you talk to the boss?|Mluvil jsi se šéfem?", "Yes. He said he was very busy.|Ano. Řekl, že má hodně práce.", "Did he say anything about the project?|Řekl něco o tom projektu?", "He told me he would decide next week.|Řekl mi, že se rozhodne příští týden.", "Did you ask him about the budget?|Zeptal ses ho na rozpočet?", "I asked if we could have more money. He didn't reply.|Zeptal jsem se, jestli můžeme dostat víc peněz. Neodpověděl."],
    ["Zprávy", "Have you seen the news today?|Viděl jsi dnes zprávy?", "No. What happened?|Ne. Co se stalo?", "They announced that petrol prices would rise.|Oznámili, že ceny benzínu porostou.", "Is the source reliable?|Je ten zdroj spolehlivý?", "It was on the official website.|Bylo to na oficiálním webu.", "My neighbour told me the opposite yesterday.|Soused mi včera říkal opak."]
  ]
},
{
  t: "Město a společnost", s: "Veřejný život a trpný rod ve všech časech",
  groups: [
    ["Úřady a instituce", ["government|vláda", "council|městská rada", "mayor|starosta", "town hall|radnice", "court|soud", "embassy|velvyslanectví", "authority|úřad, autorita", "citizen|občan"]],
    ["Ve městě", ["suburb|předměstí", "district|čtvrť", "pavement|chodník", "pedestrian|chodec", "cycle path|cyklostezka", "public transport|veřejná doprava", "rush hour|dopravní špička", "traffic jam|dopravní zácpa"]],
    ["Stavby", ["building|budova", "skyscraper|mrakodrap", "block of flats|panelák, bytový dům", "factory|továrna", "warehouse|sklad", "tower|věž", "monument|památník", "construction|stavba, výstavba"]],
    ["Společnost", ["population|počet obyvatel", "community|komunita", "poverty|chudoba", "homeless|bez domova", "unemployment|nezaměstnanost", "crime|zločin, kriminalita", "education|vzdělávání", "healthcare|zdravotní péče"]],
    ["Změny ve městě", ["develop|rozvíjet", "replace|nahradit", "remove|odstranit", "rebuild|znovu postavit", "expand|rozšířit", "demolish|zbourat", "restore|zrestaurovat", "complete|dokončit"]],
    ["Hodnocení místa", ["modern|moderní", "ancient|starověký", "industrial|průmyslový", "rural|venkovský", "urban|městský", "polluted|znečištěný", "lively|rušný, živý", "peaceful|klidný"]]
  ],
  grammar: [
    { t: "Trpný rod: has been done, will be done",
      h: `<p>Trpný rod jde vytvořit v každém čase. Mění se jen tvar slovesa <b>být</b>, třetí tvar zůstává.</p>
<ul class="ex"><li>přítomný: The road <b>is repaired</b> every year.</li><li>průběhový: The road <b>is being repaired</b> now.</li><li>minulý: The road <b>was repaired</b> last year.</li><li>předpřítomný: The road <b>has been repaired</b>.</li><li>budoucí: The road <b>will be repaired</b> next month.</li></ul>`,
      q: ["A new bridge ___ next year.|will be built|will built|will be build", "The old factory ___ already.|has been demolished|has demolished|was been demolished", "The road ___ at the moment.|is being repaired|is repairing|is been repaired", "Three schools ___ since 2020.|have been opened|has been opened|have opened been", "The results ___ tomorrow.|will be announced|will announced|will be announce", "The town hall ___ in 1850.|was built|has been built|is built"] },
    { t: "Trpný rod se způsobovými slovesy",
      h: `<p>Po <b>can, must, should, may, might, have to</b> následuje <b>be + třetí tvar</b>.</p>
<p class="ex">Cars <b>must be parked</b> here. · The centre <b>should be closed</b> to traffic. · Tickets <b>can be bought</b> online. · It <b>has to be done</b> today.</p>
<p>Často se tak píšou pravidla a oficiální oznámení.</p>`,
      q: ["Tickets can ___ online.|be bought|bought|been bought", "The form must ___ in black ink.|be completed|completed|to be completed", "This problem should ___ immediately.|be solved|solve|been solved", "Dogs ___ be kept on a lead.|must|must to|have", "The work has to ___ by Friday.|be finished|finished|been finished", "The building might ___ next year.|be demolished|demolished|be demolish"] },
    { t: "Kdy použít trpný rod",
      h: `<p>Angličtina používá trpný rod častěji než čeština. Hodí se, když:</p>
<ul class="ex"><li>původce není známý nebo důležitý: <i>My bike <b>was stolen</b>.</i></li><li>je zřejmý: <i>He <b>was arrested</b>.</i> (policií)</li><li>chceš znít formálně a neosobně: <i>Smoking <b>is not allowed</b>.</i></li></ul>
<p>Původce přidáš s <b>by</b>, nástroj s <b>with</b>: <i>The window was broken <b>by</b> a boy <b>with</b> a ball.</i></p>
<p>Obecné mínění: <b>It is said that…</b> · <b>He is believed to be…</b></p>`,
      q: ["The bridge was designed ___ a famous architect.|by|with|from", "The window was broken ___ a stone.|with|by the|of", "Smoking ___ here.|is not allowed|not allows|does not allowed", "It ___ that the mayor will resign.|is said|says|is saying", "My car ___ last night.|was stolen|stole|has stole", "He ___ by the police yesterday.|was arrested|arrested|has arrested"] }
  ],
  sent: ["A new bridge will be built next year.|Příští rok se postaví nový most.", "The road is being repaired.|Silnice se právě opravuje.", "The old factory has been demolished.|Stará továrna byla zbourána.", "Tickets can be bought online.|Lístky se dají koupit na internetu.", "The city centre should be closed to cars.|Centrum města by mělo být uzavřeno pro auta.", "I was stuck in a traffic jam.|Uvízl jsem v dopravní zácpě.", "The population of the city is growing.|Počet obyvatel města roste.", "Smoking is not allowed here.|Kouření zde není povoleno.", "The bridge was designed by a famous architect.|Most navrhl slavný architekt.", "I prefer public transport.|Dávám přednost veřejné dopravě.", "It is said that the mayor will resign.|Říká se, že starosta odstoupí.", "They live in a peaceful suburb.|Bydlí na klidném předměstí."],
  pron: { t: "Přízvuk v dlouhých slovech na -tion", h: `<p>Slova končící na <b>-tion</b> a <b>-sion</b> mají přízvuk vždy na slabice <b>před</b> touto koncovkou. Koncovka sama zní „šn“.</p><ul class="ex"><li>popu<b>LA</b>tion · edu<b>CA</b>tion · con<b>STRUC</b>tion · pol<b>LU</b>tion</li></ul>`, w: ["population|popjuLEJšn", "education|edžuKEJšn", "construction|knSTRAKšn", "government|GAvrnment", "pedestrian|peDEStrien"] },
  dlg: [
    ["Změny ve městě", "What is being built next to the station?|Co se staví vedle nádraží?", "A new shopping centre. It will be opened in May.|Nové nákupní centrum. Otevře se v květnu.", "And the old cinema?|A to staré kino?", "It has already been demolished.|To už bylo zbouráno.", "That's a pity. It should have been restored.|To je škoda. Mělo být zrestaurováno.", "I agree. Too many old buildings have been removed.|Souhlasím. Příliš mnoho starých budov bylo odstraněno."],
    ["Doprava", "Why are you so late?|Proč jdeš tak pozdě?", "The main road has been closed.|Hlavní silnice byla uzavřena.", "Again? It was repaired last year.|Zase? Opravovala se loni.", "I know. Something must be done about it.|Já vím. Něco se s tím musí udělat.", "Can it be discussed at the council meeting?|Dá se to probrat na zasedání rady?", "Yes, questions can be sent online.|Ano, otázky se dají poslat přes internet."]
  ]
},
{
  t: "Kultura a umění", s: "Knihy, divadlo a co se stalo ještě předtím",
  groups: [
    ["Umění", ["painting|obraz, malba", "sculpture|socha", "exhibition|výstava", "gallery|galerie", "artist|umělec", "masterpiece|mistrovské dílo", "style|styl", "design|návrh, design"]],
    ["Divadlo a film", ["play|divadelní hra", "stage|jeviště", "actor|herec", "director|režisér", "performance|představení", "scene|scéna", "plot|děj, zápletka", "role|role"]],
    ["Knihy", ["novel|román", "author|autor", "poem|báseň", "chapter|kapitola", "fiction|beletrie", "biography|životopis", "title|název", "cover|obálka"]],
    ["Hudba", ["band|kapela", "orchestra|orchestr", "composer|skladatel", "tune|melodie", "lyrics|text písně", "instrument|nástroj", "choir|sbor", "album|album"]],
    ["Co s kulturou děláme", ["perform|vystupovat", "record|nahrát", "create|vytvořit", "inspire|inspirovat", "recommend|doporučit", "rehearse|zkoušet (hru)", "applaud|tleskat", "release|vydat (film, album)"]],
    ["Hodnocení", ["brilliant|skvělý", "awful|příšerný", "moving|dojemný", "disappointing|zklamávající", "original|originální", "famous|slavný", "popular|oblíbený", "impressive|působivý"]]
  ],
  grammar: [
    { t: "Předminulý čas: had + 3. tvar",
      h: `<p>Když vyprávíš o minulosti a potřebuješ říct, že se něco stalo <b>ještě předtím</b>, použiješ <b>had + třetí tvar</b>. Tvar je stejný pro všechny osoby, zkracuje se na <b>'d</b>.</p>
<p class="ex">When we arrived, the film <b>had</b> already <b>started</b>. · I didn't go, because I <b>had seen</b> the play before.</p>
<p>Čeština tento čas nemá, pořadí dějů pozná z kontextu.</p>`,
      q: ["When we arrived, the film ___ already started.|had|has|was", "I didn't go because I ___ the play before.|had seen|have seen|saw had", "She was sad because she ___ her ticket.|had lost|has lost|was lost", "By 2010 he ___ three novels.|had written|has written|wrote had", "They ___ never been to a concert before that night.|had|have|were", "After I ___ the book, I watched the film.|had read|have read|had readed"] },
    { t: "Předminulý × minulý čas",
      h: `<p>Porovnej, jak se změní smysl:</p>
<ul class="ex"><li>When I arrived, the concert <b>started</b>. (přišel jsem a pak to začalo)</li><li>When I arrived, the concert <b>had started</b>. (začalo dřív, přišel jsem pozdě)</li></ul>
<p>Když jdou děje popořadě a je to jasné (se slovy <b>then, after that</b>), stačí minulý čas prostý. Předminulý používej, jen když se vracíš zpět.</p>`,
      q: ["When I got to the theatre, the play ___. I missed the beginning.|had started|started then|starts", "I opened the book and ___ to read.|began|had begun|begun", "He told me he ___ the film twice.|had seen|sees|has saw", "First we had dinner, then we ___ to the cinema.|went|had gone|gone", "I recognised her because we ___ before.|had met|met after|meet", "The band ___ before we found our seats.|had already begun|already begins|has already begun"] },
    { t: "by the time, already, just v minulosti",
      h: `<p>S předminulým časem se pojí:</p>
<ul class="ex"><li><b>by the time</b> (než, v době kdy): <b>By the time</b> we arrived, everybody <b>had left</b>.</li><li><b>already</b> / <b>just</b>: The show <b>had just finished</b>.</li><li><b>never … before</b>: I <b>had never seen</b> such a painting <b>before</b>.</li><li><b>as soon as</b> / <b>after</b>: <b>After</b> she <b>had finished</b>, everyone applauded.</li></ul>`,
      q: ["By the time we arrived, everybody ___.|had left|has left|left had", "The show had ___ finished when I came.|just|yet|since", "I had never ___ such a painting before.|seen|saw|see", "___ the time he was 20, he had recorded two albums.|By|At|In", "After she ___ singing, everyone applauded.|had finished|has finished|finishes", "They had ___ sold all the tickets.|already|yet|ever"] }
  ],
  sent: ["When we arrived, the film had already started.|Když jsme přišli, film už začal.", "I had never seen such a painting before.|Nikdy předtím jsem takový obraz neviděl.", "By the time we came, everybody had left.|Než jsme přišli, všichni odešli.", "The exhibition was really impressive.|Výstava byla opravdu působivá.", "Who is the author of this novel?|Kdo je autorem tohoto románu?", "Can you recommend a good book?|Můžeš mi doporučit dobrou knihu?", "The performance was brilliant.|Představení bylo skvělé.", "She said she had read the book twice.|Řekla, že tu knihu četla dvakrát.", "I didn't like the plot.|Nelíbil se mi děj.", "The band released a new album.|Kapela vydala nové album.", "After she had finished, everyone applauded.|Když skončila, všichni tleskali.", "The ending was very moving.|Konec byl velmi dojemný."],
  pron: { t: "had ve zkrácené podobě", h: `<p>V předminulém čase se <b>had</b> zkracuje na <b>'d</b>, stejně jako would. Rozlišíš je podle toho, co následuje: po had je třetí tvar (<i>I'd seen</i>), po would základní tvar (<i>I'd see</i>).</p><p>Slovo <i>choir</i> se čte „kwajr“ a <i>orchestra</i> má přízvuk na první slabice.</p>`, w: ["I'd seen|ajd sín", "they'd left|dejd left", "choir|kwajr", "orchestra|ÓRkistra", "exhibition|eksiBIšn"] },
  dlg: [
    ["Pozdě do kina", "Did you enjoy the film?|Líbil se ti film?", "Not really. When I arrived, it had already started.|Moc ne. Když jsem přišel, už začal.", "Why were you late?|Proč jsi šel pozdě?", "I had left my ticket at home.|Nechal jsem doma lístek.", "Had you seen the first part before?|Viděl jsi předtím první díl?", "No, so I didn't understand the plot.|Ne, takže jsem nerozuměl ději."],
    ["Výstava", "Have you been to the new exhibition?|Byl jsi na té nové výstavě?", "Yes, I went last week. It was brilliant.|Ano, byl jsem minulý týden. Byla skvělá.", "Had you heard of the artist before?|Slyšel jsi o tom umělci předtím?", "No, I had never seen his paintings.|Ne, jeho obrazy jsem nikdy neviděl.", "Would you recommend it?|Doporučil bys ji?", "Definitely. I have already bought a book about him.|Rozhodně. Už jsem si o něm koupil knihu."]
  ]
},
{
  t: "Zdraví a životní styl", s: "Rady, povinnosti a domněnky",
  groups: [
    ["Nemoci", ["illness|nemoc", "disease|choroba", "flu|chřipka", "infection|infekce", "allergy|alergie", "sore throat|bolest v krku", "stomachache|bolest břicha", "temperature|teplota (horečka)"]],
    ["U lékaře", ["patient|pacient", "prescription|recept (na léky)", "pill|pilulka", "injection|injekce", "operation|operace", "treatment|léčba", "surgery|ordinace, chirurgie", "check-up|preventivní prohlídka"]],
    ["Úrazy", ["hurt|bolet, zranit", "injure|zranit", "bleed|krvácet", "burn|spálit, popálenina", "bruise|modřina", "wound|rána", "bandage|obvaz", "ambulance|sanitka"]],
    ["Životní styl", ["diet|strava, dieta", "habit|zvyk", "stress|stres", "rest|odpočinek, odpočívat", "sleep|spánek", "lifestyle|životní styl", "balance|rovnováha", "routine|denní režim"]],
    ["Zdravé a nezdravé", ["junk food|nezdravé jídlo", "vitamin|vitamin", "fat|tuk", "protein|bílkovina", "smoke|kouřit", "alcohol|alkohol", "addicted|závislý", "overweight|s nadváhou"]],
    ["Uzdravování", ["recover|uzdravit se", "cure|vyléčit, lék", "heal|hojit se", "relieve|ulevit", "suffer|trpět", "faint|omdlít", "sneeze|kýchnout", "breathe|dýchat"]]
  ],
  grammar: [
    { t: "ought to, had better, needn't",
      h: `<p>Další způsoby, jak dát radu nebo vyjádřit nutnost:</p>
<ul class="ex"><li><b>ought to</b> = should: You <b>ought to</b> see a doctor.</li><li><b>had better</b> (<b>'d better</b>) + základní tvar = raději bys měl, jinak bude problém: You<b>'d better</b> hurry. Zápor: You<b>'d better not</b> be late.</li><li><b>needn't</b> = don't have to: You <b>needn't</b> come.</li></ul>
<p>Po had better není to a nejde o minulost.</p>`,
      q: ["You ___ to see a doctor.|ought|should|had better", "You'd better ___ now.|go|to go|going", "You ___ come if you don't want to.|needn't|mustn't|oughtn't better", "We'd better ___ late.|not be|don't be|not to be", "She ought ___ more.|to rest|rest|resting", "You'd ___ take an umbrella.|better|rather to|ought"] },
    { t: "Domněnky: must be, can't be, might be",
      h: `<p>Způsobová slovesa vyjadřují i to, jak moc jsi si něčím jistý:</p>
<ul class="ex"><li><b>must</b> – určitě ano: She <b>must be</b> ill. She looks terrible.</li><li><b>can't</b> – určitě ne: He <b>can't be</b> hungry. He has just eaten.</li><li><b>might / may / could</b> – možná: It <b>might be</b> an allergy.</li></ul>
<p>Opakem jistého <i>must be</i> je <b>can't be</b>, ne <i>mustn't be</i>.</p>`,
      q: ["She looks terrible. She ___ be ill.|must|can't|needn't", "He has just eaten. He ___ be hungry.|can't|must|mustn't", "I'm not sure. It ___ be an allergy.|might|must|can't", "They live in a huge house. They ___ be rich.|must|can't|ought", "That ___ be true! I don't believe it.|can't|mustn't|might", "Take a jacket. It ___ be cold later.|could|must to|can't"] },
    { t: "Jak dát radu",
      h: `<p>Rada může znít různě silně:</p>
<ul class="ex"><li><b>Why don't you</b> go to bed earlier? – Proč nezkusíš…</li><li><b>If I were you, I would</b> see a doctor. – Být tebou…</li><li><b>You should / ought to</b> eat less sugar.</li><li><b>How about</b> go<b>ing</b> for a walk? – Co takhle…</li><li><b>It's a good idea to</b> drink more water.</li></ul>
<p>Podstatné jméno <b>advice</b> je nepočitatelné: <i>some advice, a piece of advice</i>.</p>`,
      q: ["Why ___ you go to bed earlier?|don't|not|aren't", "If I ___ you, I would see a doctor.|were|am|would be", "How about ___ for a walk?|going|go|to go", "Can you give me some ___?|advice|advices|an advice", "It's a good idea ___ more water.|to drink|drinking to|drink", "If I were you, I ___ smoke.|wouldn't|won't|don't"] }
  ],
  sent: ["You ought to see a doctor.|Měl bys jít k lékaři.", "You'd better take an umbrella.|Raději si vezmi deštník.", "She must be ill.|Určitě je nemocná.", "That can't be true.|To nemůže být pravda.", "It might be an allergy.|Možná je to alergie.", "Why don't you go to bed earlier?|Proč nejdeš spát dřív?", "If I were you, I would rest.|Být tebou, odpočíval bych.", "I have a sore throat.|Bolí mě v krku.", "You needn't worry.|Nemusíš si dělat starosti.", "He is recovering from an operation.|Zotavuje se po operaci.", "I am trying to give up smoking.|Snažím se přestat kouřit.", "Can you give me some advice?|Můžeš mi poradit?"],
  pron: { t: "Zdravotní slova s nečekanou výslovností", h: `<p>Ve zdravotní slovní zásobě je hodně pastí:</p><ul class="ex"><li><i>stomach</i> = „stamek“, <i>ache</i> = „ejk“</li><li><i>cough</i> = „kof“, ale <i>ought</i> = „ót“</li><li><i>wound</i> (rána) = „wúnd“</li><li><i>breathe</i> (dýchat) = „brídh“, <i>breath</i> (dech) = „breth“</li></ul>`, w: ["stomachache|stamekejk", "ought to|ót tu", "wound|wúnd", "breathe|brídh", "bruise|brúz"] },
  dlg: [
    ["U lékaře", "What seems to be the problem?|Co vás trápí?", "I have had a sore throat for three days.|Tři dny mě bolí v krku.", "It might be an infection. Do you have a temperature?|Může to být infekce. Máte teplotu?", "Yes, and I keep sneezing.|Ano, a pořád kýchám.", "You'd better stay at home this week.|Raději tento týden zůstaňte doma.", "Do I need a prescription?|Potřebuju recept?"],
    ["Dobrá rada", "I can't sleep at night.|V noci nemůžu spát.", "You must be under a lot of stress.|Musíš být hodně ve stresu.", "Yes, work is terrible at the moment.|Ano, v práci je to teď hrozné.", "Why don't you do some exercise in the evening?|Proč si večer nezacvičíš?", "I am too tired after work.|Po práci jsem příliš unavený.", "If I were you, I would talk to a doctor.|Být tebou, promluvil bych si s lékařem."]
  ]
}
);
