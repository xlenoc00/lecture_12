// Obsah kurzu, týdny 33–39 (úroveň B1).
window.UNITS.push(
{
  t: "Práce a firma", s: "Schůzky, plány a podoby budoucnosti",
  groups: [
    ["Firma", ["headquarters|ústředí", "branch|pobočka", "staff|zaměstnanci, personál", "client|klient", "supplier|dodavatel", "competitor|konkurent", "profit|zisk", "loss|ztráta"]],
    ["Schůzky", ["agenda|program jednání", "schedule|harmonogram", "appointment|schůzka (domluvená)", "conference|konference", "presentation|prezentace", "negotiate|vyjednávat", "postpone|odložit", "arrange|domluvit, zařídit"]],
    ["Pracovní život", ["promotion|povýšení", "pay rise|zvýšení platu", "overtime|přesčas", "shift|směna", "day off|den volna", "maternity leave|mateřská dovolená", "pension|důchod (peníze)", "resign|rezignovat, dát výpověď"]],
    ["Komunikace", ["attach|přiložit", "forward|přeposlat", "reply|odpovědět", "confirm|potvrdit", "inform|informovat", "request|žádost, požádat", "remind|připomenout", "contact|kontaktovat"]],
    ["Vlastnosti v práci", ["efficient|výkonný, efektivní", "reliable|spolehlivý", "flexible|flexibilní", "punctual|dochvilný", "experienced|zkušený", "qualified|kvalifikovaný", "demanding|náročný", "stressful|stresující"]],
    ["Úspěch a neúspěch", ["achieve|dosáhnout", "challenge|výzva", "opportunity|příležitost", "responsibility|zodpovědnost", "target|cíl", "failure|neúspěch", "effort|úsilí", "reward|odměna"]]
  ],
  grammar: [
    { t: "Přítomné časy pro budoucnost",
      h: `<p>O budoucnosti můžeš mluvit i přítomným časem:</p>
<ul class="ex"><li><b>Přítomný průběhový</b> pro domluvené schůzky a pevné plány (víš kdy a s kým): I <b>am meeting</b> a client tomorrow at ten.</li><li><b>Přítomný prostý</b> pro jízdní řády a programy: The conference <b>starts</b> on Monday. · The train <b>leaves</b> at 6.15.</li></ul>
<p>Otázka <i>What are you doing tonight?</i> se ptá na plány, ne na to, co děláš teď.</p>`,
      q: ["I ___ a client tomorrow at ten.|am meeting|meet|will to meet", "The conference ___ on Monday.|starts|is start|will starting", "What ___ you doing this evening?|are|do|will", "Our flight ___ at 6.15.|leaves|is leave|will leaving", "We ___ lunch with the boss on Friday.|are having|have had|having", "She ___ to Berlin next week. It's arranged.|is flying|flies yesterday|flew"] },
    { t: "Budoucí čas průběhový",
      h: `<p><b>will be + sloveso s -ing</b> říká, co bude v určitém okamžiku budoucnosti <b>právě probíhat</b>.</p>
<p class="ex">This time tomorrow I <b>will be flying</b> to London. · At ten I<b>'ll be giving</b> a presentation. · Don't call at eight, we<b>'ll be having</b> dinner.</p>
<p>Hodí se i pro zdvořilý dotaz na plány: <i><b>Will you be using</b> the car tonight?</i></p>`,
      q: ["This time tomorrow I ___ to London.|will be flying|will flying|am fly", "At ten o'clock she ___ a presentation.|will be giving|will be give|gives being", "Don't call at eight. We ___ dinner.|will be having|will having|have", "___ you be using the car tonight?|Will|Are|Do", "In June I ___ for the company for ten years. (zrovna tam budu pracovat)|will be working|work|am work", "They will ___ waiting for us at the airport.|be|being|been"] },
    { t: "Kterou budoucnost zvolit",
      h: `<p>Shrnutí všech způsobů:</p>
<ul class="ex"><li><b>will</b> – předpověď, slib, okamžité rozhodnutí: I think it <b>will</b> work. I<b>'ll</b> send it now.</li><li><b>going to</b> – záměr; předpověď podle toho, co vidíš: I<b>'m going to</b> apply. Look, it<b>'s going to</b> rain.</li><li><b>přítomný průběhový</b> – domluvená věc: I<b>'m seeing</b> the manager at two.</li><li><b>přítomný prostý</b> – program, jízdní řád: The meeting <b>starts</b> at nine.</li><li><b>will be doing</b> – děj probíhající v daný okamžik.</li></ul>`,
      q: ["Look at those clouds. It ___ rain.|is going to|is raining|rains", "The phone is ringing. – I ___ it.|will get|am getting|get", "I ___ the dentist at three. I have an appointment.|am seeing|will see maybe|see being", "The meeting ___ at nine every Monday.|starts|is going to start|will be starting", "I have decided. I ___ resign.|am going to|will be|resign will", "I promise I ___ you tomorrow.|will remind|am reminding|remind"] }
  ],
  sent: ["I am meeting a client tomorrow at ten.|Zítra v deset mám schůzku s klientem.", "The conference starts on Monday.|Konference začíná v pondělí.", "This time tomorrow I will be flying to London.|Zítra touhle dobou poletím do Londýna.", "The meeting has been postponed.|Schůzka byla odložena.", "Could you forward me the email?|Mohl bys mi přeposlat ten e-mail?", "She got a promotion last month.|Minulý měsíc byla povýšena.", "I am going to ask for a pay rise.|Chystám se požádat o zvýšení platu.", "Please confirm the appointment.|Potvrďte prosím schůzku.", "He is reliable and punctual.|Je spolehlivý a dochvilný.", "It is a great opportunity for me.|Je to pro mě skvělá příležitost.", "What are you doing this evening?|Co děláš dnes večer?", "We will be having dinner at eight.|V osm budeme večeřet."],
  pron: { t: "Přízvuk: podstatné jméno × sloveso", h: `<p>Některá slova se píšou stejně, ale podstatné jméno má přízvuk na první slabice a sloveso na druhé:</p><ul class="ex"><li>a <b>RE</b>cord × to re<b>CORD</b></li><li>a <b>PRE</b>sent × to pre<b>SENT</b></li><li>an <b>IN</b>crease × to in<b>CREASE</b></li><li>a <b>CON</b>tract × to con<b>TRACT</b></li></ul>`, w: ["a record|e REkórd", "to record|tu riKÓRD", "a present|e PREznt", "to present|tu priZENT", "schedule|ŠEdjúl"] },
  dlg: [
    ["Domlouvání schůzky", "Are you free on Thursday morning?|Máš ve čtvrtek dopoledne čas?", "No, I'm meeting a supplier at nine.|Ne, v devět mám schůzku s dodavatelem.", "What about the afternoon?|A co odpoledne?", "I'll be giving a presentation until three.|Do tří budu mít prezentaci.", "Shall we say half past three?|Řekněme v půl čtvrté?", "Perfect. I'll send you a confirmation.|Výborně. Pošlu ti potvrzení."],
    ["Výpověď", "Is it true that you are leaving?|Je pravda, že odcházíš?", "Yes, I'm starting a new job in May.|Ano, v květnu nastupuju do nové práce.", "Why did you decide to resign?|Proč ses rozhodl dát výpověď?", "The job was too stressful and there was no promotion.|Ta práce byla příliš stresující a bez povýšení.", "What will you be doing there?|Co tam budeš dělat?", "I'm going to manage a small team.|Budu vést malý tým."]
  ]
},
{
  t: "Svět kolem nás", s: "Země, zeměpis a členy",
  groups: [
    ["Zeměpis", ["continent|kontinent", "border|hranice", "capital|hlavní město", "region|region", "area|oblast, rozloha", "north|sever", "south|jih", "east|východ"]],
    ["Krajina světa", ["west|západ", "mountain range|pohoří", "waterfall|vodopád", "volcano|sopka", "jungle|džungle", "cave|jeskyně", "glacier|ledovec", "bay|záliv"]],
    ["Národy a jazyky", ["nationality|národnost", "foreigner|cizinec", "native|rodilý, původní", "accent|přízvuk", "custom|zvyk", "culture|kultura", "religion|náboženství", "flag|vlajka"]],
    ["Cestovatelská slovesa", ["explore|prozkoumat", "discover|objevit", "cross|přejít, překročit", "reach|dosáhnout, dorazit", "wander|toulat se", "sail|plout", "set off|vyrazit", "get lost|ztratit se"]],
    ["Ubytování a výlety", ["hostel|hostel", "campsite|kemp", "sightseeing|prohlížení památek", "excursion|výlet (organizovaný)", "cruise|plavba", "backpack|batoh", "destination|cíl cesty", "route|trasa"]],
    ["Množství lidí a věcí", ["each|každý (jednotlivě)", "every|každý (všichni)", "several|několik", "none|žádný (z více)", "whole|celý", "plenty of|spousta", "majority|většina", "per|na (osobu, den)"]]
  ],
  grammar: [
    { t: "Členy: a, the, nebo nic",
      h: `<p>Základní logika:</p>
<ul class="ex"><li><b>a / an</b> – jeden z mnoha, zmiňuješ poprvé: I saw <b>a</b> film.</li><li><b>the</b> – konkrétní, oba víte který: <b>The</b> film was great. · <b>the</b> sun, <b>the</b> best</li><li><b>bez členu</b> – obecně o věcech v množném čísle a o nepočitatelných: <b>Dogs</b> are friendly. · I like <b>music</b>.</li></ul>
<p>Bez členu také: jídla (have <b>breakfast</b>), jazyky, sporty, <i>at home, at work, at school, in bed, by car</i>.</p>`,
      q: ["I saw ___ film yesterday. ___ film was great.|a / The|the / A|a / A", "___ dogs are friendly animals. (obecně)|–|The|A", "She is ___ best student in the class.|the|a|–", "We had ___ breakfast at seven.|–|a|the", "Can you close ___ door, please?|the|a|–", "He is ___ engineer.|an|the|–"] },
    { t: "the se zeměpisnými názvy",
      h: `<p><b>Bez členu:</b> kontinenty, většina zemí, města, jednotlivé hory a jezera: <i>Europe, France, Prague, Mount Everest, Lake Geneva</i>.</p>
<p><b>S the:</b></p>
<ul class="ex"><li>řeky, moře, oceány: <b>the</b> Thames, <b>the</b> Atlantic</li><li>pohoří a souostroví: <b>the</b> Alps, <b>the</b> Canary Islands</li><li>země s <i>Republic, Kingdom, States</i> nebo v množném čísle: <b>the</b> Czech Republic, <b>the</b> UK, <b>the</b> USA, <b>the</b> Netherlands</li><li>světové strany: in <b>the</b> north</li></ul>`,
      q: ["I am from ___ Czech Republic.|the|–|a", "___ Prague is a beautiful city.|–|The|A", "We went skiing in ___ Alps.|the|–|an", "___ Thames flows through London.|The|–|A", "She lives in ___ France.|–|the|a", "They sailed across ___ Atlantic.|the|–|an"] },
    { t: "all, most, some, none, each, every",
      h: `<p>Obecně bez of, o konkrétní skupině s <b>of the</b>:</p>
<p class="ex"><b>Most people</b> like travelling. · <b>Most of the people</b> in my group were Czech. · <b>None of</b> them spoke English.</p>
<p><b>every</b> a <b>each</b> se pojí s <b>jednotným</b> číslem: <i><b>Every</b> country <b>has</b> a flag.</i> <b>all</b> s množným: <i><b>All</b> countries <b>have</b> a flag.</i></p>
<p><b>the whole</b> + jednotné číslo = celý: <i>the whole day</i>. <b>all day</b> je bez členu.</p>`,
      q: ["___ people like travelling.|Most|Most of|The most of", "Most ___ the tourists were from Germany.|of|from|–", "Every country ___ a flag.|has|have|are having", "___ of my friends speaks Chinese.|None|No|Not", "We spent the ___ day on the beach.|whole|all|every", "___ student has to buy a ticket.|Each|All|Most of"] }
  ],
  sent: ["I am from the Czech Republic.|Jsem z České republiky.", "The capital of France is Paris.|Hlavním městem Francie je Paříž.", "We went skiing in the Alps.|Jeli jsme lyžovat do Alp.", "Most people like travelling.|Většina lidí ráda cestuje.", "None of my friends speaks Chinese.|Nikdo z mých přátel nemluví čínsky.", "Every country has a flag.|Každá země má vlajku.", "We spent the whole day sightseeing.|Celý den jsme strávili prohlížením památek.", "They set off early in the morning.|Vyrazili brzy ráno.", "She speaks English with a French accent.|Mluví anglicky s francouzským přízvukem.", "We got lost in the old town.|Ztratili jsme se ve starém městě.", "The village is in the north of the country.|Ta vesnice je na severu země.", "It costs twenty pounds per person.|Stojí to dvacet liber na osobu."],
  pron: { t: "Dvojí výslovnost the", h: `<p>Člen <b>the</b> má dvě podoby. Před souhláskou zní „d(e)“: <i>the capital</i>. Před samohláskou zní „dý“: <i>the Alps, the east</i>.</p><p>Rozhoduje výslovnost, ne pravopis: <i>the UK</i> = „d(e) jú kej“, protože začíná hláskou „j“.</p>`, w: ["the capital|d kepitl", "the Alps|dý elps", "the east|dý íst", "the UK|d jú kej", "the Atlantic|dý etlentyk"] },
  dlg: [
    ["Odkud jsi", "Where exactly are you from?|Odkud přesně jsi?", "I'm from the south of the Czech Republic.|Jsem z jihu České republiky.", "Is that near the mountains?|Je to blízko hor?", "Yes, the border with Austria is very close.|Ano, hranice s Rakouskem je velmi blízko.", "Do most people there speak German?|Mluví tam většina lidí německy?", "Some of them do, but not all.|Někteří ano, ale ne všichni."],
    ["Plánování cesty", "Which route shall we take?|Kterou trasou pojedeme?", "Let's cross the Alps and go to the coast.|Přejeďme Alpy a jeďme na pobřeží.", "How long will the whole trip take?|Jak dlouho bude celá cesta trvat?", "Several days, if we stop for sightseeing.|Několik dní, když se zastavíme na památky.", "Have you booked a campsite?|Zarezervoval jsi kemp?", "Not yet. There are plenty of them.|Ještě ne. Je jich tam spousta."]
  ]
},
{
  t: "Reklama a zákazníci", s: "Nákupy online a vztažné věty podrobně",
  groups: [
    ["Reklama", ["advertisement|reklama, inzerát", "brand|značka", "slogan|slogan", "logo|logo", "campaign|kampaň", "target group|cílová skupina", "sample|vzorek", "launch|uvést na trh"]],
    ["Nákup online", ["basket|košík", "checkout|pokladna", "delivery charge|poštovné", "in stock|skladem", "sold out|vyprodáno", "track|sledovat (zásilku)", "return|vrátit", "voucher|poukaz"]],
    ["Zboží", ["product|výrobek", "item|položka", "goods|zboží", "quality|kvalita", "label|štítek, etiketa", "range|sortiment, řada", "feature|vlastnost, funkce", "warranty|záruka"]],
    ["Zákazník", ["consumer|spotřebitel", "complaint|stížnost", "satisfied|spokojený", "loyal|věrný", "demand|poptávka, požadovat", "review|recenze", "recommendation|doporučení", "feedback|zpětná vazba"]],
    ["Popis zboží", ["second-hand|z druhé ruky", "brand-new|zbrusu nový", "faulty|vadný", "damaged|poškozený", "genuine|pravý, originální", "fake|falešný", "reasonable|rozumný (o ceně)", "overpriced|předražený"]],
    ["Obchodní slovesa", ["advertise|inzerovat, dělat reklamu", "attract|přilákat", "persuade|přesvědčit", "compare|porovnat", "promote|propagovat", "purchase|zakoupit, nákup", "supply|dodávat", "replace|vyměnit"]]
  ],
  grammar: [
    { t: "Vztažné věty: kdy vynechat who / that",
      h: `<p>Vztažné zájmeno můžeš vynechat, když je <b>předmětem</b> vztažné věty, tedy když za ním následuje další podmět.</p>
<p class="ex">The shoes <b>(that) I bought</b> are too small. · The woman <b>(who) we met</b> was the manager.</p>
<p>Vynechat nejde, když je zájmeno <b>podmětem</b>: <i>The woman <b>who works</b> here is nice.</i></p>
<p>Předložka se v běžné řeči přesouvá na konec: <i>the shop (that) I told you <b>about</b></i>.</p>`,
      q: ["The shoes ___ are too small.|I bought|who I bought|what I bought", "The woman ___ works here is very nice.|who|–|which", "This is the shop I told you ___.|about|about it|–", "The phone ___ was faulty.|she ordered|what she ordered|who she ordered", "The man ___ sold me the car was lying.|who|–|whom he", "Is this the brand ___?|you recommended|what you recommended|you recommended it"] },
    { t: "Vztažné věty s čárkami",
      h: `<p>Když vztažná věta jen <b>přidává informaci navíc</b> (věta by dávala smysl i bez ní), odděluje se čárkami. Tady nejde použít <b>that</b> a zájmeno nejde vynechat.</p>
<p class="ex">My brother, <b>who</b> lives in Brno, works in advertising. · The new phone, <b>which</b> costs 900 pounds, is sold out.</p>
<p><b>which</b> se může vztahovat i k celé předchozí větě: <i>The parcel arrived late, <b>which</b> made me angry.</i> (což)</p>`,
      q: ["My brother, ___ lives in Brno, is a designer.|who|that|–", "The new model, ___ costs 900 pounds, is sold out.|which|that|what", "The parcel arrived late, ___ made me angry.|which|what|that", "Mr Novak, ___ you met yesterday, is our best client.|who|that|which", "Our shop, ___ opened in 2010, has moved.|which|what|who", "She gave me a refund, ___ was very kind of her.|which|what|who"] },
    { t: "whose, where, when",
      h: `<p>Další vztažná slova:</p>
<ul class="ex"><li><b>whose</b> – jehož, jejíž (přivlastňuje): the customer <b>whose</b> order was lost</li><li><b>where</b> – kde: the website <b>where</b> I bought it</li><li><b>when</b> – kdy: the day <b>when</b> the sale starts</li><li><b>why</b> – proč: the reason <b>why</b> I complained</li></ul>
<p>Nepleť <b>whose</b> (čí, jehož) a <b>who's</b> (= who is / who has).</p>`,
      q: ["The customer ___ order was lost complained.|whose|who's|which", "That's the website ___ I bought it.|where|which|whose", "I remember the day ___ the shop opened.|when|where|which", "That's the reason ___ I returned it.|why|which|whose", "A company ___ products are cheap is not always bad.|whose|who|that its", "___ the man in the advertisement?|Who's|Whose|Which"] }
  ],
  sent: ["The shoes I bought are too small.|Boty, které jsem koupil, jsou příliš malé.", "My brother, who lives in Brno, works in advertising.|Můj bratr, který bydlí v Brně, pracuje v reklamě.", "This is the shop I told you about.|Tohle je ten obchod, o kterém jsem ti říkal.", "The item is out of stock.|Ta položka není skladem.", "I would like to make a complaint.|Chtěl bych podat stížnost.", "The customer whose order was lost complained.|Zákazník, jehož objednávka se ztratila, si stěžoval.", "It was faulty, so I returned it.|Bylo to vadné, tak jsem to vrátil.", "The price is quite reasonable.|Cena je docela rozumná.", "I always read the reviews first.|Vždycky si nejdřív přečtu recenze.", "The parcel arrived late, which made me angry.|Balík přišel pozdě, což mě naštvalo.", "They persuaded me to buy it.|Přesvědčili mě, abych to koupil.", "Is this bag genuine or fake?|Je tahle taška pravá, nebo falešná?"],
  pron: { t: "Pauza místo čárky", h: `<p>Čárky u vztažné věty jsou slyšet: před vloženou větou a po ní uděláš krátkou pauzu a hlas mírně klesne.</p><p><i>My brother | who lives in Brno | works in advertising.</i> Bez pauz by to znamenalo, že máš víc bratrů a mluvíš o tom z Brna.</p>`, w: ["advertisement|edVÉRtysment", "advertise|EDvrtajz", "purchase|PÉRčes", "genuine|DŽEnjuin", "whose|húz"] },
  dlg: [
    ["Reklamace po telefonu", "Hello, I'm calling about an order I made last week.|Dobrý den, volám kvůli objednávce z minulého týdne.", "Could you give me the order number?|Můžete mi dát číslo objednávky?", "Yes. The phone that arrived is damaged.|Ano. Telefon, který přišel, je poškozený.", "I'm sorry about that. Would you like a refund?|To mě mrzí. Chcete vrátit peníze?", "No, I'd like you to replace it.|Ne, chtěl bych, abyste ho vyměnili.", "Of course. The new one, which is in stock, will be sent today.|Samozřejmě. Nový, který je skladem, odešleme dnes."],
    ["Co koupit", "Which laptop did you choose in the end?|Který notebook sis nakonec vybral?", "The one you recommended.|Ten, který jsi mi doporučil.", "Where did you buy it?|Kde jsi ho koupil?", "On the website where you found the discount.|Na tom webu, kde jsi našel slevu.", "Was the price reasonable?|Byla cena rozumná?", "Yes, although the delivery charge was quite high.|Ano, i když poštovné bylo docela vysoké."]
  ]
},
{
  t: "Věda a technika", s: "Objevy, vynálezy a frázová slovesa",
  groups: [
    ["Věda", ["experiment|pokus", "laboratory|laboratoř", "theory|teorie", "evidence|důkazy", "discovery|objev", "invention|vynález", "method|metoda", "data|data"]],
    ["Vědecká slovesa", ["prove|dokázat", "measure|měřit", "observe|pozorovat", "predict|předpovědět", "analyse|analyzovat", "develop|vyvinout", "examine|zkoumat", "conclude|vyvodit závěr"]],
    ["Frázová slovesa I", ["find out|zjistit", "look up|vyhledat (ve slovníku)", "work out|vyřešit, přijít na", "carry out|provést", "set up|založit, nastavit", "break down|porouchat se", "run out of|dojít (zásoby)", "give up|vzdát se, přestat"]],
    ["Frázová slovesa II", ["put on|obléct si, zapnout", "take off|sundat si", "pick up|zvednout, vyzvednout", "put down|položit", "switch on|zapnout", "switch off|vypnout", "throw away|vyhodit", "fill in|vyplnit"]],
    ["Technika", ["engine|motor", "machine|stroj", "tool|nástroj", "equipment|vybavení", "wire|drát", "button|tlačítko", "robot|robot", "satellite|satelit"]],
    ["Slovesa s předložkou", ["depend on|záviset na", "belong to|patřit (komu)", "consist of|skládat se z", "deal with|zabývat se, řešit", "rely on|spoléhat na", "lead to|vést k", "result in|mít za následek", "refer to|odkazovat na"]]
  ],
  grammar: [
    { t: "Co je frázové sloveso",
      h: `<p>Frázové sloveso je sloveso s částicí (<b>up, out, off, on, down…</b>), které dohromady mají nový význam. Ten se často nedá odvodit.</p>
<p class="ex"><b>give</b> = dát, ale <b>give up</b> = vzdát se · <b>find</b> = najít, ale <b>find out</b> = zjistit · <b>break down</b> = porouchat se</p>
<p>V běžné řeči jsou mnohem častější než jejich „učená“ synonyma (<i>find out</i> × <i>discover</i>). Čas se tvoří na slovese: <i>gave up, has given up, is giving up</i>.</p>`,
      q: ["I want to ___ what happened.|find out|find up|find off", "Don't ___! You can do it.|give up|give out|give off", "The car ___ on the motorway.|broke down|broke up the|broke off it", "We have run ___ petrol.|out of|off of|up of", "I'll ___ the word in a dictionary.|look up|look out|look on", "They ___ the experiment last year.|carried out|carried up|carried off"] },
    { t: "Kam patří předmět",
      h: `<p>U většiny frázových sloves může podstatné jméno stát za částicí i mezi slovesem a částicí:</p>
<p class="ex"><b>Switch off</b> the light. = <b>Switch</b> the light <b>off</b>.</p>
<p><b>Zájmeno</b> ale musí být vždy uprostřed:</p>
<p class="ex">Switch <b>it</b> off. · Pick <b>them</b> up. · Throw <b>it</b> away.</p>
<p>Některá slovesa rozdělit nejdou (<b>look after, run out of, get on with</b>): <i>I ran out of <b>it</b>.</i></p>`,
      q: ["The light is on. Can you ___?|switch it off|switch off it|off switch it", "Your coat is on the floor. ___.|Pick it up|Pick up it|Up pick it", "These are old. I'll ___.|throw them away|throw away them|away throw them", "Please ___ this form.|fill in|fill it in the|in fill", "It's cold. ___ your coat ___.|Put / on|Put on / it|On / put", "We have run ___.|out of it|it out of|out it of"] },
    { t: "Slovesa s pevnou předložkou",
      h: `<p>Mnoho sloves vyžaduje určitou předložku, která se liší od češtiny. Nauč se je jako celek:</p>
<ul class="ex"><li><b>depend on</b> – záviset na · <b>rely on</b> – spoléhat na</li><li><b>listen to</b> – poslouchat · <b>wait for</b> – čekat na</li><li><b>belong to</b> – patřit · <b>consist of</b> – skládat se z</li><li><b>look at</b> – dívat se na · <b>look for</b> – hledat · <b>look after</b> – starat se o</li><li><b>think about</b>, <b>talk about</b>, <b>pay for</b>, <b>ask for</b></li></ul>
<p>V otázce jde předložka na konec: <i>What does it depend <b>on</b>?</i></p>`,
      q: ["It depends ___ the weather.|on|of|from", "Who does this laptop belong ___?|to|for|at", "Water consists ___ hydrogen and oxygen.|of|from|with", "What are you waiting ___?|for|on|to", "I am looking ___ my keys. I can't find them.|for|at|after", "You can rely ___ me.|on|at|in"] }
  ],
  sent: ["I want to find out what happened.|Chci zjistit, co se stalo.", "The car broke down on the motorway.|Auto se porouchalo na dálnici.", "We have run out of milk.|Došlo nám mléko.", "Can you switch it off, please?|Můžeš to vypnout, prosím?", "It depends on the weather.|Záleží na počasí.", "Don't give up.|Nevzdávej to.", "Who does this bag belong to?|Komu patří tahle taška?", "They carried out an experiment.|Provedli pokus.", "There is no evidence for this theory.|Pro tuhle teorii nejsou žádné důkazy.", "I will look it up in a dictionary.|Vyhledám si to ve slovníku.", "Please pick me up at the station.|Vyzvedni mě prosím na nádraží.", "What are you looking for?|Co hledáš?"],
  pron: { t: "Přízvuk ve frázových slovesech", h: `<p>U frázového slovesa je přízvuk na <b>částici</b>, ne na slovese: <i>give <b>UP</b>, find <b>OUT</b>, switch <b>OFF</b></i>. U slovesa s běžnou předložkou je naopak přízvuk na slovese: <i><b>LIS</b>ten to, <b>WAIT</b> for</i>.</p><p>Slova se navíc spojují: <i>pick it up</i> zní jako „pikitap“.</p>`, w: ["give up|giv AP", "find out|fajnd AUT", "pick it up|pikitAP", "switch it off|swičitOF", "depend on|dyPEND on"] },
  dlg: [
    ["Porucha", "Why are you late?|Proč jdeš pozdě?", "My car broke down on the motorway.|Na dálnici se mi porouchalo auto.", "Did you find out what was wrong?|Zjistil jsi, co bylo špatně?", "I had run out of petrol.|Došel mi benzín.", "Seriously? Who picked you up?|Vážně? Kdo tě vyzvedl?", "My brother. I can always rely on him.|Bratr. Na něj se můžu vždycky spolehnout."],
    ["V laboratoři", "Have you carried out the experiment?|Provedli jste ten pokus?", "Yes, but the results depend on the temperature.|Ano, ale výsledky závisí na teplotě.", "Did you write them down?|Zapsali jste si je?", "Of course. We are analysing the data now.|Samozřejmě. Teď analyzujeme data.", "Don't switch off the machine yet.|Ještě ten stroj nevypínejte.", "Don't worry, I'll switch it off when we finish.|Neboj, vypnu ho, až skončíme."]
  ]
},
{
  t: "Emoce a reakce", s: "Jak se cítím, proč a souhlas",
  groups: [
    ["Přídavná jména na -ed", ["amazed|ohromený", "annoyed|otrávený, naštvaný", "confused|zmatený", "embarrassed|v rozpacích", "exhausted|vyčerpaný", "frightened|vyděšený", "pleased|potěšený", "shocked|šokovaný"]],
    ["Přídavná jména na -ing", ["annoying|otravný", "confusing|matoucí", "embarrassing|trapný", "exhausting|vyčerpávající", "frightening|děsivý", "tiring|únavný", "relaxing|uklidňující", "depressing|depresivní"]],
    ["Silné pocity", ["delighted|nadšený", "furious|rozzuřený", "terrified|vyděšený k smrti", "miserable|nešťastný, ubohý", "thrilled|nadšený, u vytržení", "anxious|úzkostný", "upset|rozrušený", "cheerful|veselý"]],
    ["Nálada a povaha", ["mood|nálada", "temper|povaha, vztek", "feeling|pocit", "emotion|emoce", "attitude|postoj", "behaviour|chování", "sense of humour|smysl pro humor", "patience|trpělivost"]],
    ["Reakce", ["complain|stěžovat si", "panic|panikařit", "calm down|uklidnit se", "cheer up|rozveselit (se)", "burst out laughing|vyprsknout smíchy", "lose your temper|rozčílit se", "get over|překonat, dostat se z", "look forward to|těšit se na"]],
    ["Vazby s předložkou", ["keen on|nadšený pro", "fond of|mající rád", "afraid of|bát se čeho", "tired of|unavený čím, mít dost", "angry with|naštvaný na", "worried about|bát se o", "sorry for|litovat koho, omlouvat se za", "surprised at|překvapený čím"]]
  ],
  grammar: [
    { t: "bored × boring",
      h: `<p>Koncovka <b>-ed</b> říká, jak se <b>někdo cítí</b>. Koncovka <b>-ing</b> popisuje věc nebo člověka, který ten pocit <b>vyvolává</b>.</p>
<p class="ex">The film was <b>boring</b>, so I was <b>bored</b>. · The news is <b>shocking</b>. Everyone is <b>shocked</b>.</p>
<p>Pozor: <i>I am boring</i> znamená „jsem nudný člověk“, ne „nudím se“.</p>`,
      q: ["The film was ___. I fell asleep.|boring|bored|bore", "I am ___ in history.|interested|interesting|interest", "It was an ___ day. I'm going to bed.|exhausting|exhausted|exhaust", "She was ___ when she forgot his name.|embarrassed|embarrassing|embarrass", "The instructions are very ___.|confusing|confused|confuse", "We were ___ by the news.|shocked|shocking|shock"] },
    { t: "Přídavné jméno + předložka",
      h: `<p>Přídavná jména pocitů mají pevné předložky. Po předložce je podstatné jméno nebo sloveso s <b>-ing</b>.</p>
<ul class="ex"><li><b>afraid of</b> spiders · <b>proud of</b> you · <b>tired of</b> waiting · <b>fond of</b> cooking</li><li><b>interested in</b> art · <b>keen on</b> sport</li><li><b>good / bad at</b> maths · <b>surprised at</b> the result</li><li><b>angry with</b> somebody <b>about</b> something · <b>worried about</b> the exam</li><li><b>sorry for</b> being late · <b>famous for</b> its beer</li></ul>`,
      q: ["She is afraid ___ spiders.|of|from|at", "I am tired ___ waiting.|of|from|with", "Are you angry ___ me?|with|on|at me for", "He is keen ___ football.|on|of|in", "I am worried ___ my exam.|about|of|from", "Sorry ___ being late.|for|of|about to"] },
    { t: "So do I, Neither do I",
      h: `<p>Krátký souhlas „já taky“ a „já taky ne“ se tvoří pomocným slovesem, které odpovídá původní větě:</p>
<ul class="ex"><li>I <b>am</b> tired. – <b>So am I.</b></li><li>I <b>like</b> jazz. – <b>So do I.</b></li><li>I <b>went</b> home. – <b>So did I.</b></li><li>I <b>can't</b> swim. – <b>Neither can I.</b></li><li>I <b>don't</b> like it. – <b>Neither do I.</b></li></ul>
<p>Hovorově stačí <b>Me too</b> a <b>Me neither</b>. Nesouhlas: <i>I like it. – I don't.</i></p>`,
      q: ["I love chocolate. – So ___ I.|do|am|have", "I am exhausted. – So ___ I.|am|do|have", "I can't swim. – Neither ___ I.|can|do|am", "I didn't like the film. – ___ did I.|Neither|So|Too", "I have been to Paris. – So ___ I.|have|did|am", "I don't smoke. – ___.|Me neither|Me too|So do I"] }
  ],
  sent: ["The film was boring, so I was bored.|Film byl nudný, tak jsem se nudil.", "She is afraid of spiders.|Bojí se pavouků.", "I am tired of waiting.|Už mě nebaví čekat.", "I love chocolate. – So do I.|Miluju čokoládu. – Já taky.", "I can't swim. – Neither can I.|Neumím plavat. – Já taky ne.", "I am looking forward to the weekend.|Těším se na víkend.", "Calm down, everything is fine.|Uklidni se, všechno je v pořádku.", "He lost his temper.|Rozčílil se.", "It was so embarrassing.|Bylo to tak trapné.", "Are you angry with me?|Zlobíš se na mě?", "She is in a good mood today.|Dnes má dobrou náladu.", "I was amazed by the view.|Byl jsem ohromený tím výhledem."],
  pron: { t: "Kolik slabik má -ed", h: `<p>U přídavných jmen na <b>-ed</b> platí stejné pravidlo jako u sloves: samostatná slabika „id“ je jen po t a d.</p><ul class="ex"><li>bored = „bórd“, shocked = „šokt“, annoyed = „enojd“ (jedna slabika navíc není)</li><li>excited = „iksajtyd“, interested = „intrestyd“, exhausted = „igzóstyd“</li></ul>`, w: ["embarrassed|imBErest", "exhausted|igZÓstyd", "frightened|FRAJtnd", "annoyed|eNOJD", "interested|INtrestyd"] },
  dlg: [
    ["Jaký byl den", "You look exhausted.|Vypadáš vyčerpaně.", "I am. The meeting was so boring.|Taky jsem. Ta porada byla tak nudná.", "I was bored too. And a bit annoyed.|Já se taky nudil. A byl jsem trochu otrávený.", "So was I. I'm tired of these long meetings.|Já taky. Už mě ty dlouhé porady nebaví.", "Never mind. I'm looking forward to the weekend.|Nevadí. Těším se na víkend.", "So am I!|Já taky!"],
    ["Strach", "Are you afraid of flying?|Bojíš se létání?", "A bit. I get anxious before take-off.|Trochu. Před vzletem bývám nervózní.", "So do I. But I don't panic.|Já taky. Ale nepanikařím.", "I can't sleep on planes.|V letadle nemůžu spát.", "Neither can I. I usually read.|Já taky ne. Obvykle čtu.", "Good idea. That's quite relaxing.|Dobrý nápad. To je docela uklidňující."]
  ]
},
{
  t: "Zákon a zločin", s: "Co by bývalo, kdyby… a výčitky",
  groups: [
    ["Zločiny", ["theft|krádež", "robbery|loupež", "burglary|vloupání", "murder|vražda", "fraud|podvod", "vandalism|vandalismus", "kidnapping|únos", "shoplifting|krádež v obchodě"]],
    ["Lidé", ["thief|zloděj", "burglar|lupič (bytový)", "criminal|zločinec", "victim|oběť", "witness|svědek", "suspect|podezřelý", "judge|soudce", "prisoner|vězeň"]],
    ["U soudu", ["trial|soudní proces", "guilty|vinný", "innocent|nevinný", "sentence|rozsudek, odsoudit", "fine|pokuta", "prison|vězení", "punishment|trest", "law|zákon, právo"]],
    ["Policejní slovesa", ["arrest|zatknout", "investigate|vyšetřovat", "accuse|obvinit", "commit|spáchat", "rob|vyloupit", "break into|vloupat se do", "get away|uniknout", "release|propustit"]],
    ["Bezpečnost", ["alarm|alarm", "lock|zámek, zamknout", "CCTV|kamerový systém", "fingerprint|otisk prstu", "proof|důkaz", "clue|stopa, vodítko", "weapon|zbraň", "emergency|nouzová situace"]],
    ["Hodnocení činu", ["illegal|nezákonný", "legal|legální", "violent|násilný", "suspicious|podezřelý", "fair|spravedlivý", "unfair|nespravedlivý", "serious|závažný", "regret|litovat"]]
  ],
  grammar: [
    { t: "Třetí podmínka: kdyby tehdy…",
      h: `<p>Pro <b>minulost, kterou už nejde změnit</b>: po <b>if</b> předminulý čas (<b>had + 3. tvar</b>), v hlavní větě <b>would have + 3. tvar</b>.</p>
<p class="ex"><b>If</b> I <b>had locked</b> the door, the thief <b>wouldn't have got</b> in. · <b>If</b> she <b>had seen</b> him, she <b>would have called</b> the police.</p>
<p>Ve skutečnosti jsem nezamkl a zloděj se dovnitř dostal. V řeči se zkracuje: <i>If I'd locked… he wouldn't've got in.</i></p>`,
      q: ["If I had locked the door, the thief ___ in.|wouldn't have got|wouldn't get|didn't get", "If she ___ him, she would have called the police.|had seen|saw|would have seen", "They would have caught him if they ___ faster.|had been|were being|would be", "If you had told me, I ___ you.|would have helped|will help|helped", "What would you have done if you ___ the robbery?|had witnessed|witnessed have|would witness", "If he hadn't run away, he ___ arrested.|would have been|would be being|was"] },
    { t: "should have: výčitka a lítost",
      h: `<p><b>should have + 3. tvar</b> = měl jsem to udělat (ale neudělal). <b>shouldn't have</b> = neměl jsem (ale udělal).</p>
<p class="ex">I <b>should have locked</b> the door. · You <b>shouldn't have left</b> your bag there. · He <b>should have called</b> the police.</p>
<p>Podobně <b>could have</b> = mohl jsem (a neudělal): <i>You <b>could have told</b> me!</i></p>`,
      q: ["I ___ the door. Now my bike is gone.|should have locked|should lock|must locked", "You ___ your bag there.|shouldn't have left|shouldn't leave yesterday|didn't should leave", "He should have ___ the police.|called|call|calling", "You ___ me! I would have helped.|could have told|could tell before|can have told", "We ___ so much money.|shouldn't have spent|shouldn't spent|not should have spent", "She should ___ more careful.|have been|has been|be been"] },
    { t: "wish + předminulý čas",
      h: `<p>Lítost nad minulostí: <b>I wish</b> + <b>had + 3. tvar</b>. Česky „kéž bych byl…“, „škoda, že jsem ne…“.</p>
<p class="ex">I <b>wish</b> I <b>had locked</b> the door. · She <b>wishes</b> she <b>hadn't told</b> him. · <b>If only</b> I <b>had listened</b>!</p>
<p>Porovnej: <i>I wish I <b>had</b> a car</i> (teď nemám) × <i>I wish I <b>had bought</b> that car</i> (tehdy jsem nekoupil).</p>
<p>Podstatné jméno a sloveso <b>regret</b>: <i>I regret telling him.</i></p>`,
      q: ["I wish I ___ the door yesterday.|had locked|locked today|would lock", "She wishes she ___ him the truth. (lituje, že řekla)|hadn't told|didn't tell|wouldn't tell", "If only I ___ to you!|had listened|listen|would have listen", "I wish I ___ a bigger flat. (teď)|had|had had yesterday|have", "He wishes he ___ harder at school.|had studied|studies|would study", "I regret ___ him my password.|giving|to gave|give"] }
  ],
  sent: ["If I had locked the door, the thief wouldn't have got in.|Kdybych zamkl dveře, zloděj by se nedostal dovnitř.", "I should have called the police.|Měl jsem zavolat policii.", "You shouldn't have left your bag there.|Neměl jsi tam nechávat tašku.", "I wish I had listened to you.|Kéž bych tě byl poslechl.", "The police arrested two suspects.|Policie zatkla dva podezřelé.", "Somebody broke into our house.|Někdo se nám vloupal do domu.", "He was found guilty.|Byl shledán vinným.", "There were no witnesses.|Nebyli žádní svědci.", "She had to pay a fine.|Musela zaplatit pokutu.", "It is illegal to drive without a licence.|Je nezákonné řídit bez řidičského průkazu.", "The thief got away.|Zloděj unikl.", "If you had told me, I would have helped you.|Kdybys mi to řekl, pomohl bych ti."],
  pron: { t: "would have, should have v řeči", h: `<p>V rychlé řeči se <b>have</b> po would, should a could zkracuje na pouhé „ev“ nebo „e“. Proto to rodilí mluvčí někdy chybně píšou jako <i>would of</i>.</p><ul class="ex"><li>would have = „wudev“</li><li>should have = „šudev“</li><li>wouldn't have = „wudntev“</li></ul>`, w: ["would have|wudev", "should have|šudev", "could have|kudev", "wouldn't have|wudntev", "guilty|gilty"] },
  dlg: [
    ["Po vloupání", "What happened to your flat?|Co se stalo s tvým bytem?", "Somebody broke in while we were on holiday.|Někdo se k nám vloupal, když jsme byli na dovolené.", "Did they take much?|Vzali toho hodně?", "My laptop and some cash. I should have locked the window.|Notebook a nějakou hotovost. Měl jsem zamknout okno.", "Have the police found any clues?|Našla policie nějaké stopy?", "Only fingerprints. If we had had an alarm, it wouldn't have happened.|Jen otisky prstů. Kdybychom měli alarm, nestalo by se to."],
    ["Pokuta", "Why are you so upset?|Proč jsi tak rozrušený?", "I got a fine for parking.|Dostal jsem pokutu za parkování.", "You shouldn't have parked there.|Neměl jsi tam parkovat.", "I know. I wish I had read the sign.|Já vím. Kéž bych si přečetl tu značku.", "How much is it?|Kolik to je?", "Fifty pounds. I could have taken the bus!|Padesát liber. Mohl jsem jet autobusem!"]
  ]
},
{
  t: "Mluvíme přirozeně", s: "Běžné fráze, otázky a shrnutí úrovně B1",
  groups: [
    ["Reakce v rozhovoru", ["never mind|nevadí", "no wonder|není divu", "what a pity|to je škoda", "well done|výborně", "good luck|hodně štěstí", "bless you|na zdraví (při kýchnutí)", "cheers|na zdraví, díky", "congratulations|gratuluji"]],
    ["Vyplňovací slova", ["actually|vlastně, ve skutečnosti", "anyway|každopádně", "by the way|mimochodem", "basically|v podstatě", "obviously|samozřejmě, očividně", "apparently|prý, zřejmě", "honestly|upřímně", "luckily|naštěstí"]],
    ["Souhlas a nesouhlas", ["exactly|přesně tak", "I suppose so|asi ano", "I doubt it|pochybuji", "it depends|to záleží", "fair enough|dobrá, uznávám", "no way|ani náhodou", "absolutely|rozhodně", "not really|ani ne"]],
    ["Zdvořilostní obraty", ["I'm afraid|bohužel", "would you mind|vadilo by vám", "you're welcome|není zač", "after you|až po vás", "help yourself|poslužte si", "go ahead|jen do toho", "take care|opatruj se", "make yourself at home|chovej se jako doma"]],
    ["Ustálená spojení", ["on purpose|schválně", "by accident|náhodou, omylem", "in advance|předem", "at least|alespoň", "at last|konečně", "on time|včas (přesně)", "in a hurry|ve spěchu", "for ages|celou věčnost"]],
    ["Co znamená co", ["make sense|dávat smysl", "take place|konat se", "make sure|ujistit se", "have a look|podívat se", "take part|zúčastnit se", "keep in touch|zůstat v kontaktu", "change your mind|rozmyslet si to", "pay attention|dávat pozor"]]
  ],
  grammar: [
    { t: "Otázky na podmět",
      h: `<p>Když se <b>who</b> nebo <b>what</b> ptá na <b>podmět</b> (kdo to udělal), otázka nemá do / does / did a sloveso je jako v oznamovací větě.</p>
<ul class="ex"><li><b>Who called</b> you? – Tom called me. (ptám se na podmět)</li><li><b>Who did you call</b>? – I called Tom. (ptám se na předmět)</li><li><b>What happened?</b> · <b>Who lives</b> here? · <b>Which team won?</b></li></ul>`,
      q: ["Who ___ you yesterday? – Tom did.|called|did call|did called", "Who ___ you call? – I called Tom.|did|–|was", "What ___ last night?|happened|did happen|did happened", "Who ___ in that house?|lives|does live|do live", "Which team ___ the match?|won|did win|did won", "What ___ you say?|did|–|was"] },
    { t: "Předložka na konci otázky",
      h: `<p>V češtině začíná otázka předložkou („O čem mluvíš?“), v běžné angličtině jde předložka <b>na konec</b>.</p>
<p class="ex">What are you talking <b>about</b>? · Who did you go <b>with</b>? · Where are you <b>from</b>? · What are you looking <b>at</b>? · Who is this present <b>for</b>?</p>
<p>Krátké otázky: <b>What for?</b> (Na co?) · <b>Who with?</b> (S kým?)</p>
<p>Podobně <b>What … like?</b>: <i>What was the weather <b>like</b>?</i></p>`,
      q: ["What are you talking ___?|about|of|–", "Who did you go ___?|with|by|–", "What are you looking ___?|at|on|to", "Who is this present ___?|for|to her|at", "What was the film ___?|like|as|how", "Which hotel did you stay ___?|at|on|to"] },
    { t: "Přehled časů",
      h: `<p>Po třech čtvrtinách roku máš všechny hlavní časy. Rychlý přehled podle otázky, na kterou odpovídají:</p>
<ul class="ex"><li>Běžně? → I <b>work</b>. · Teď? → I <b>am working</b>.</li><li>Kdy v minulosti? → I <b>worked</b>. · Co probíhalo? → I <b>was working</b>.</li><li>Zkušenost, výsledek? → I <b>have worked</b>. · Jak dlouho už? → I <b>have been working</b>.</li><li>Ještě předtím? → I <b>had worked</b>.</li><li>Plán? → I <b>am going to work</b>. · Předpověď, slib? → I <b>will work</b>.</li></ul>`,
      q: ["I ___ here since 2015.|have worked|work|am working", "She ___ when I called.|was sleeping|sleeps|has slept", "Look! It ___.|is snowing|snows|snowed", "When I arrived, they ___.|had already left|have already left|already leave", "He usually ___ at seven.|gets up|is getting up|has got up", "We ___ to Spain two years ago.|went|have gone|had been going"] }
  ],
  sent: ["Who called you yesterday?|Kdo ti včera volal?", "What are you talking about?|O čem to mluvíš?", "By the way, have you seen Tom?|Mimochodem, viděl jsi Toma?", "Actually, I have changed my mind.|Vlastně jsem si to rozmyslel.", "It doesn't make sense.|Nedává to smysl.", "I did it by accident.|Udělal jsem to omylem.", "Make sure you lock the door.|Ujisti se, že jsi zamkl.", "I haven't seen you for ages.|Neviděl jsem tě celou věčnost.", "Help yourself to some cake.|Vezmi si dort.", "I'm afraid I can't come.|Bohužel nemůžu přijít.", "Let's keep in touch.|Zůstaňme v kontaktu.", "What was the weather like?|Jaké bylo počasí?"],
  pron: { t: "Spojování slov", h: `<p>V plynulé řeči se konec jednoho slova spojuje se začátkem dalšího, hlavně když první končí souhláskou a druhé začíná samohláskou.</p><ul class="ex"><li><i>not at all</i> zní jako „notetól“</li><li><i>first of all</i> jako „férstevól“</li><li><i>what about</i> jako „wotebaut“</li></ul><p>Proto se ti může zdát, že rodilí mluvčí „polykají“ slova.</p>`, w: ["not at all|notetól", "first of all|férstevól", "what about|wotebaut", "by the way|baj d wej", "actually|ekčueli"] },
  dlg: [
    ["Po dlouhé době", "Hi! I haven't seen you for ages.|Ahoj! Neviděl jsem tě celou věčnost.", "I know! What have you been doing?|Já vím! Co jsi celou dobu dělal?", "Actually, I have just changed jobs.|Vlastně jsem právě změnil práci.", "Congratulations! Who do you work for now?|Gratuluju! Pro koho teď pracuješ?", "A small company. By the way, are you still in touch with Jana?|Pro malou firmu. Mimochodem, jsi ještě v kontaktu s Janou?", "Not really. Apparently she moved abroad.|Ani ne. Prý se odstěhovala do zahraničí."],
    ["Na návštěvě", "Come in and make yourself at home.|Pojď dál a chovej se jako doma.", "Thank you. What a lovely flat!|Děkuju. To je krásný byt!", "Help yourself to some cake.|Vezmi si dort.", "Cheers. Who made it?|Díky. Kdo ho pekl?", "I did, but it didn't take long.|Já, ale netrvalo to dlouho.", "Well done. It's delicious.|Výborně. Je vynikající."]
  ]
}
);
