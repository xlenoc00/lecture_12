// Obsah kurzu, týdny 40–46 (úroveň B1+ až B2).
window.UNITS.push(
{
  t: "Byznys a finance", s: "Ekonomika a nechat si něco udělat",
  groups: [
    ["Ekonomika", ["economy|ekonomika", "inflation|inflace", "recession|recese", "growth|růst", "market|trh", "trade|obchod", "industry|průmysl, odvětví", "currency|měna"]],
    ["Firemní finance", ["budget|rozpočet", "income|příjem", "expenses|výdaje", "invoice|faktura", "revenue|tržby", "turnover|obrat", "shares|akcie", "interest rate|úroková míra"]],
    ["Podnikání", ["entrepreneur|podnikatel", "start-up|začínající firma", "investor|investor", "partnership|partnerství", "merger|fúze", "bankrupt|v úpadku", "franchise|franšíza", "owner|majitel"]],
    ["Obchodní slovesa", ["found|založit", "run|vést (firmu)", "expand|expandovat", "import|dovážet", "export|vyvážet", "employ|zaměstnávat", "fire|propustit", "launch|spustit"]],
    ["Smlouvy", ["deal|obchod, dohoda", "agreement|dohoda", "terms|podmínky", "offer|nabídka", "proposal|návrh", "deadline|termín", "penalty|pokuta, sankce", "clause|doložka"]],
    ["Svolení a povinnost", ["allow|dovolit", "let|nechat, dovolit", "permit|povolit", "force|donutit", "forbid|zakázat", "be supposed to|mít (něco udělat)", "obliged|povinen", "compulsory|povinný"]]
  ],
  grammar: [
    { t: "have something done",
      h: `<p>Když něco <b>neděláš sám</b>, ale necháš si to udělat od někoho jiného, použiješ <b>have + věc + třetí tvar</b>.</p>
<p class="ex">I <b>had my car repaired</b>. (nechal jsem si opravit auto) · She <b>is having her hair cut</b>. · We<b>'ll have the office painted</b>.</p>
<p>Porovnej: <i>I repaired my car</i> = opravil jsem ho sám.</p>
<p>Hovorově se místo have říká <b>get</b>: <i>I need to <b>get my phone fixed</b>.</i></p>`,
      q: ["I ___ my car repaired last week.|had|have done|was", "She is having her hair ___.|cut|cutting|to cut", "We need to get the printer ___.|fixed|fix|fixing", "He ___ his house painted every five years.|has|does|makes", "Where did you have your website ___?|designed|design|designing", "I must have my eyes ___.|tested|test|to test"] },
    { t: "make, let, allow",
      h: `<p>Tři slovesa, tři různé vazby:</p>
<ul class="ex"><li><b>make</b> + osoba + sloveso <b>bez to</b> = donutit: My boss <b>made me work</b> late.</li><li><b>let</b> + osoba + sloveso <b>bez to</b> = dovolit: She <b>let me leave</b> early.</li><li><b>allow</b> + osoba + <b>to</b> + sloveso = dovolit: They <b>allowed us to use</b> the car.</li></ul>
<p>V trpném rodě: <i>I <b>was made to</b> wait.</i> · <i>We <b>are not allowed to</b> smoke here.</i> (let trpný rod nemá)</p>`,
      q: ["My boss made me ___ late.|work|to work|working", "She let me ___ early.|leave|to leave|leaving", "They allowed us ___ the car.|to use|use|using", "We are not allowed ___ here.|to park|park|parking to", "The film made me ___.|cry|to cry|crying", "Will your parents ___ you go?|let|allow|permit to"] },
    { t: "be supposed to, be allowed to",
      h: `<p><b>be supposed to</b> = má se, očekává se (ale často se to neděje):</p>
<p class="ex">You <b>are supposed to</b> wear a tie. · He <b>was supposed to</b> call me. (měl zavolat, ale nezavolal)</p>
<p><b>be allowed to</b> = smět. Nahrazuje can / may v ostatních časech:</p>
<p class="ex">We <b>weren't allowed to</b> leave. · Will I <b>be allowed to</b> work from home?</p>
<p><b>be obliged to</b> = být povinen (formální).</p>`,
      q: ["You are ___ to wear a tie here.|supposed|suppose|supposing", "He ___ supposed to call me, but he didn't.|was|did|has", "We weren't ___ to leave early.|allowed|let|allow", "Will I be ___ to work from home?|allowed|let|allow", "What am I supposed ___?|to do|do|doing", "You ___ supposed to be here at nine!|were|did|have"] }
  ],
  sent: ["I had my car repaired last week.|Minulý týden jsem si nechal opravit auto.", "She is having her hair cut.|Nechává se ostříhat.", "My boss made me work late.|Šéf mě donutil pracovat dlouho.", "They don't let us use our phones.|Nedovolují nám používat telefony.", "We are not allowed to park here.|Nesmíme tady parkovat.", "You are supposed to wear a tie.|Máš mít kravatu.", "The company went bankrupt.|Firma zkrachovala.", "Inflation is rising again.|Inflace opět roste.", "He runs his own business.|Vede vlastní firmu.", "We have to cut our expenses.|Musíme snížit výdaje.", "They made us a good offer.|Udělali nám dobrou nabídku.", "He was supposed to call me.|Měl mi zavolat."],
  pron: { t: "supposed to a used to", h: `<p>Ve spojeních <b>supposed to</b> a <b>used to</b> se koncové -d slije s následujícím t a nevyslovuje se.</p><ul class="ex"><li>supposed to = „sepoustu“</li><li>used to = „jústu“</li><li>allowed to = „elaudtu“</li></ul>`, w: ["supposed to|sepoustu", "allowed to|elaudtu", "economy|iKOnemi", "entrepreneur|ontreprenÉR", "invoice|INvojs"] },
  dlg: [
    ["V kanceláři", "Your office looks different.|Tvoje kancelář vypadá jinak.", "Yes, we had it painted last week.|Ano, minulý týden jsme si ji nechali vymalovat.", "Did your boss let you choose the colour?|Nechal tě šéf vybrat barvu?", "No, we weren't allowed to decide anything.|Ne, nesměli jsme o ničem rozhodovat.", "And the new furniture?|A ten nový nábytek?", "It was supposed to arrive on Monday, but it's late.|Měl dorazit v pondělí, ale má zpoždění."],
    ["Nová firma", "I heard you founded your own company.|Slyšel jsem, že sis založil vlastní firmu.", "Yes, a small start-up. We launched it in March.|Ano, malý start-up. Spustili jsme ho v březnu.", "Do you have an investor?|Máte investora?", "Not yet. The bank made us write a long proposal.|Zatím ne. Banka nás donutila napsat dlouhý návrh.", "How many people do you employ?|Kolik lidí zaměstnáváte?", "Only three. We have our accounts done by another firm.|Jen tři. Účetnictví si necháváme dělat jinou firmou."]
  ]
},
{
  t: "Politika a společnost", s: "Volby, práva a domněnky o minulosti",
  groups: [
    ["Politika", ["election|volby", "vote|hlasovat, hlas", "party|strana", "parliament|parlament", "president|prezident", "prime minister|premiér", "minister|ministr", "candidate|kandidát"]],
    ["Stát", ["democracy|demokracie", "state|stát", "nation|národ", "policy|politika (opatření)", "politics|politika (obor)", "reform|reforma", "constitution|ústava", "independence|nezávislost"]],
    ["Práva a svobody", ["right|právo", "freedom|svoboda", "equality|rovnost", "justice|spravedlnost", "duty|povinnost", "protest|protest", "strike|stávka", "demonstration|demonstrace"]],
    ["Společenské problémy", ["immigration|imigrace", "refugee|uprchlík", "discrimination|diskriminace", "corruption|korupce", "violence|násilí", "inequality|nerovnost", "racism|rasismus", "crisis|krize"]],
    ["Politická slovesa", ["elect|zvolit", "govern|vládnout", "represent|zastupovat", "support|podporovat", "oppose|být proti", "criticise|kritizovat", "promise|slíbit", "resign|odstoupit"]],
    ["Konflikt a mír", ["war|válka", "peace|mír", "army|armáda", "soldier|voják", "enemy|nepřítel", "ally|spojenec", "threat|hrozba", "treaty|smlouva (mezi státy)"]]
  ],
  grammar: [
    { t: "must have, can't have, might have",
      h: `<p>Domněnky o <b>minulosti</b> tvoříš způsobovým slovesem + <b>have + třetí tvar</b>:</p>
<ul class="ex"><li><b>must have</b> – určitě se to stalo: He <b>must have forgotten</b>.</li><li><b>can't have</b> – určitě se to nestalo: She <b>can't have said</b> that.</li><li><b>might / may / could have</b> – možná se to stalo: They <b>might have missed</b> the train.</li></ul>
<p>Česky: „určitě zapomněl“, „to nemohla říct“, „možná jim ujel vlak“.</p>`,
      q: ["He isn't here. He ___ forgotten.|must have|must|can't have", "She ___ said that. She is always polite.|can't have|must have|might", "They are late. They ___ missed the bus.|might have|might|can't", "The minister must have ___ about it.|known|knew|know", "It ___ been easy to resign.|can't have|mustn't have|can't", "I'm not sure. She may ___ voted already.|have|has|had"] },
    { t: "needn't have × didn't need to",
      h: `<p>Oba tvary znamenají „nebylo nutné“, ale liší se tím, jestli jsi to udělal:</p>
<ul class="ex"><li><b>needn't have + 3. tvar</b> – udělal jsem to zbytečně: I <b>needn't have hurried</b>. The meeting was cancelled.</li><li><b>didn't need to</b> + sloveso – nebylo to nutné (a obvykle jsem to neudělal): I <b>didn't need to hurry</b>, so I walked.</li></ul>
<p>Podobně: <b>shouldn't have</b> (udělal jsem chybu) × <b>needn't have</b> (bylo to jen zbytečné).</p>`,
      q: ["I ___ hurried. The meeting was cancelled. (spěchal jsem zbytečně)|needn't have|didn't need to|mustn't have", "We ___ to queue, so we went straight in.|didn't need|needn't have|needn't", "You needn't have ___ flowers, but thank you!|brought|bring|bringing", "She ___ to vote by post, because she was at home.|didn't need|needn't have|hadn't", "I needn't ___ worried. Everything went well.|have|had|to have", "You ___ have shouted. That was rude.|shouldn't|needn't to|didn't need"] },
    { t: "It is said that… He is said to…",
      h: `<p>Ve zprávách se názory a neověřené informace podávají trpným rodem se slovesy <b>say, believe, think, expect, report, know</b>.</p>
<ul class="ex"><li><b>It is said that</b> the minister will resign.</li><li>The minister <b>is said to be</b> ill. (o přítomnosti)</li><li>He <b>is believed to have left</b> the country. (o minulosti)</li><li>The party <b>is expected to win</b>.</li></ul>
<p>Česky „říká se“, „prý“, „očekává se“.</p>`,
      q: ["It ___ that the president will resign.|is said|says|is saying", "The minister is said ___ ill.|to be|being|be", "He is believed ___ the country last week.|to have left|to leave tomorrow|leaving", "The party is ___ to win the election.|expected|expecting|expect", "It is ___ that prices will rise.|thought|think|thinking", "She is known ___ the reform.|to support|support|supported"] }
  ],
  sent: ["He must have forgotten.|Určitě zapomněl.", "She can't have said that.|To nemohla říct.", "They might have missed the train.|Možná jim ujel vlak.", "I needn't have hurried.|Nemusel jsem spěchat.", "It is said that the minister will resign.|Říká se, že ministr odstoupí.", "The party is expected to win.|Očekává se, že ta strana vyhraje.", "Who did you vote for?|Koho jsi volil?", "The election takes place next month.|Volby se konají příští měsíc.", "Everyone has the right to protest.|Každý má právo protestovat.", "The workers went on strike.|Dělníci vstoupili do stávky.", "The government promised a reform.|Vláda slíbila reformu.", "He is believed to have left the country.|Předpokládá se, že opustil zemi."],
  pron: { t: "Přízvuk se stěhuje: politics, political, politician", h: `<p>V příbuzných slovech se přízvuk posouvá a mění se i samohlásky:</p><ul class="ex"><li><b>PO</b>litics · po<b>LI</b>tical · poli<b>TI</b>cian</li><li>de<b>MO</b>cracy · demo<b>CRA</b>tic</li><li><b>E</b>conomy · eco<b>NO</b>mic</li></ul>`, w: ["politics|POletyks", "political|peLItykl", "politician|poleTIšn", "democracy|dyMOkresi", "democratic|demeKREtyk"] },
  dlg: [
    ["Kde je", "Where is Martin? He was supposed to be here at nine.|Kde je Martin? Měl tu být v devět.", "He must have overslept.|Určitě zaspal.", "He can't have. He never does.|To není možné. Nikdy nezaspí.", "Then he might have got stuck in the demonstration.|Tak možná uvízl v demonstraci.", "Of course. The centre is closed today.|No jasně. Centrum je dnes zavřené.", "We needn't have come so early then.|To jsme sem nemuseli chodit tak brzy."],
    ["Po volbách", "Did you vote yesterday?|Volil jsi včera?", "Yes. The result must have surprised everyone.|Ano. Výsledek musel všechny překvapit.", "The prime minister is said to be thinking about resigning.|Premiér prý uvažuje o rezignaci.", "He can't have expected such a defeat.|Takovou porážku nemohl čekat.", "Do you think the new government will keep its promises?|Myslíš, že nová vláda dodrží sliby?", "They are expected to start with a tax reform.|Očekává se, že začnou daňovou reformou."]
  ]
},
{
  t: "Názory a debata", s: "Jak argumentovat a propojovat myšlenky",
  groups: [
    ["Názor", ["in my view|podle mého názoru", "as far as I know|pokud vím", "to be honest|upřímně řečeno", "personally|osobně", "I'm convinced|jsem přesvědčen", "I tend to think|spíš si myslím", "frankly|otevřeně řečeno", "it seems to me|zdá se mi"]],
    ["Argumentace", ["argument|argument", "point|bod, myšlenka", "advantage|výhoda", "disadvantage|nevýhoda", "benefit|přínos", "drawback|nedostatek", "evidence|důkaz", "example|příklad"]],
    ["Kontrast", ["despite|navzdory", "in spite of|navzdory", "whereas|kdežto", "on the other hand|na druhou stranu", "nevertheless|přesto", "even though|i když", "unlike|na rozdíl od", "in contrast|naopak"]],
    ["Přidání a důsledek", ["moreover|navíc", "in addition|kromě toho", "besides|kromě toho, ostatně", "as a result|v důsledku toho", "consequently|následně, tudíž", "thus|tedy, tak", "in order to|aby (účel)", "due to|kvůli, vzhledem k"]],
    ["Debatní slovesa", ["argue|tvrdit, argumentovat", "assume|předpokládat", "doubt|pochybovat", "insist|trvat na", "convince|přesvědčit", "disagree|nesouhlasit", "consider|zvažovat", "conclude|uzavřít"]],
    ["Hodnocení argumentu", ["valid|platný", "convincing|přesvědčivý", "controversial|kontroverzní", "relevant|relevantní", "obvious|zřejmý", "complex|složitý", "crucial|zásadní", "minor|drobný, vedlejší"]]
  ],
  grammar: [
    { t: "despite, in spite of, although",
      h: `<p>Všechny tři znamenají „přestože“, ale liší se tím, co po nich následuje:</p>
<ul class="ex"><li><b>although / even though</b> + věta: <b>Although</b> it was expensive, we bought it.</li><li><b>despite / in spite of</b> + podstatné jméno nebo -ing: <b>Despite</b> the price, we bought it. · <b>In spite of</b> be<b>ing</b> tired, she continued.</li></ul>
<p>Po despite <b>není of</b>. Chceš-li po despite větu, vlož <b>the fact that</b>.</p>
<p><b>whereas</b> porovnává dvě fakta: <i>I like tea, <b>whereas</b> my wife prefers coffee.</i></p>`,
      q: ["___ the rain, we went out.|Despite|Although|Despite of", "___ it was raining, we went out.|Although|Despite|In spite of", "In spite of ___ tired, she continued.|being|she was|be", "I like tea, ___ my wife prefers coffee.|whereas|despite|in spite", "Despite ___ that he was ill, he came.|the fact|of|although", "___ of the drawbacks, it is a good plan.|In spite|Despite|Although"] },
    { t: "Účel a důsledek",
      h: `<p><b>Účel</b> (aby):</p>
<ul class="ex"><li><b>to / in order to</b> + sloveso: We met <b>in order to</b> discuss it. Zápor: <b>in order not to</b>.</li><li><b>so that</b> + věta (často s can / could / would): I spoke slowly <b>so that</b> everyone <b>could</b> understand.</li></ul>
<p><b>Důsledek</b> (takže):</p>
<ul class="ex"><li><b>so</b> + věta: It was late, <b>so</b> we left.</li><li><b>so … that / such … that</b>: It was <b>so</b> complex <b>that</b> nobody understood.</li><li><b>as a result, therefore, consequently</b> na začátku nové věty.</li></ul>`,
      q: ["We met in order ___ the problem.|to discuss|discussing|discuss", "I spoke slowly so ___ everyone could understand.|that|as|to", "I left early in order ___ miss the train.|not to|to not|don't", "It was ___ complex that nobody understood.|so|such|as", "Prices rose. ___, demand fell.|As a result|So that|In order", "It was ___ a controversial idea that he resigned.|such|so|as"] },
    { t: "Zdůraznění: What I like is…",
      h: `<p>Když chceš na něco upozornit, můžeš větu „rozštěpit“:</p>
<ul class="ex"><li><b>What</b> I like <b>is</b> his honesty. (To, co se mi líbí, je…)</li><li><b>What</b> we need <b>is</b> more time.</li><li><b>It was</b> Tom <b>who</b> told me. (Byl to Tom, kdo…)</li><li><b>The thing that</b> worries me <b>is</b> the cost.</li></ul>
<p>Sloveso zdůrazníš pomocným <b>do / does / did</b>: <i>I <b>do</b> agree with you.</i> · <i>She <b>did</b> call.</i> (opravdu)</p>`,
      q: ["___ I like is his honesty.|What|That|Which", "What we need ___ more time.|is|are|it is", "It was Tom ___ told me.|who|what|which", "I ___ agree with you. (opravdu)|do|am|very", "The thing ___ worries me is the cost.|that|what|who", "She ___ call, but you were out. (opravdu volala)|did|was|has"] }
  ],
  sent: ["Despite the rain, we went out.|Navzdory dešti jsme šli ven.", "In spite of being tired, she continued.|Přestože byla unavená, pokračovala.", "I spoke slowly so that everyone could understand.|Mluvil jsem pomalu, aby všichni rozuměli.", "What I like is his honesty.|Co se mi líbí, je jeho upřímnost.", "On the other hand, it is very expensive.|Na druhou stranu je to velmi drahé.", "To be honest, I disagree.|Upřímně řečeno, nesouhlasím.", "It has both advantages and disadvantages.|Má to výhody i nevýhody.", "As far as I know, it is true.|Pokud vím, je to pravda.", "That is a valid point.|To je platná připomínka.", "I do agree with you.|Opravdu s tebou souhlasím.", "It was Tom who told me.|Byl to Tom, kdo mi to řekl.", "We met in order to discuss the problem.|Sešli jsme se, abychom probrali ten problém."],
  pron: { t: "Důraz mění význam", h: `<p>V debatě zdůrazňuješ slovo, které nese nový nebo opačný názor. Stejná věta pak znamená něco jiného:</p><ul class="ex"><li><i><b>I</b> think it's good.</i> (já ano, ostatní ne)</li><li><i>I <b>think</b> it's good.</i> (ale nejsem si jistý)</li><li><i>I think it's <b>good</b>.</i> (ne špatné)</li></ul>`, w: ["nevertheless|nevrdeLES", "whereas|wérEZ", "controversial|kontreVÉRšl", "consequently|KONsikwentli", "despite|dySPAJT"] },
  dlg: [
    ["Práce z domu", "What do you think about working from home?|Co si myslíš o práci z domu?", "Personally, I think it has more advantages.|Osobně si myslím, že má víc výhod.", "Despite the lack of contact with colleagues?|Navzdory nedostatku kontaktu s kolegy?", "That's a valid point. What I miss is the coffee breaks.|To je platná připomínka. Co mi chybí, jsou přestávky na kávu.", "On the other hand, you save time.|Na druhou stranu ušetříš čas.", "Exactly. As a result, I get more done.|Přesně. Díky tomu toho stihnu víc."],
    ["Nesouhlas", "I'm convinced that cars should be banned in the centre.|Jsem přesvědčen, že by auta měla být v centru zakázána.", "I'm afraid I disagree.|Bohužel nesouhlasím.", "Why? It would reduce pollution.|Proč? Snížilo by to znečištění.", "True, whereas shops would lose customers.|Pravda, kdežto obchody by přišly o zákazníky.", "Not if public transport was better.|Ne, kdyby byla lepší veřejná doprava.", "Fair enough. I do agree with that.|Dobrá. S tím opravdu souhlasím."]
  ]
},
{
  t: "Vesmír a budoucnost", s: "Co bude hotové a co se mělo stát",
  groups: [
    ["Vesmír", ["space|vesmír", "universe|vesmír (celý)", "galaxy|galaxie", "star|hvězda", "moon|měsíc", "orbit|oběžná dráha", "gravity|gravitace", "astronaut|astronaut"]],
    ["Výzkum vesmíru", ["rocket|raketa", "spacecraft|kosmická loď", "mission|mise", "launch|start, vypustit", "telescope|dalekohled", "alien|mimozemšťan", "solar system|sluneční soustava", "space station|vesmírná stanice"]],
    ["Budoucí technologie", ["artificial intelligence|umělá inteligence", "virtual reality|virtuální realita", "driverless car|auto bez řidiče", "drone|dron", "gadget|technická vychytávka", "software|software", "network|síť", "automation|automatizace"]],
    ["Časové výrazy", ["by then|do té doby", "in ten years' time|za deset let", "sooner or later|dříve či později", "in the long run|z dlouhodobého hlediska", "decade|desetiletí", "century|století", "era|éra", "generation|generace"]],
    ["Pravděpodobnost", ["likely|pravděpodobný", "bound to|určitě (se stane)", "due to|má (podle plánu)", "about to|chystat se, právě se má", "on the point of|na pokraji, těsně před", "inevitable|nevyhnutelný", "possibly|možná", "doubtful|pochybný"]],
    ["Změny", ["transform|přeměnit", "advance|pokrok, postoupit", "evolve|vyvíjet se", "emerge|objevit se", "adapt|přizpůsobit se", "vanish|zmizet", "exceed|překročit", "enable|umožnit"]]
  ],
  grammar: [
    { t: "Předbudoucí čas: will have done",
      h: `<p><b>will have + třetí tvar</b> říká, co bude k určitému okamžiku v budoucnu <b>už hotové</b>. Typicky s <b>by</b> (do): <i>by 2050, by Friday, by then, by the time…</i></p>
<p class="ex"><b>By 2050</b> people <b>will have landed</b> on Mars. · I<b>'ll have finished</b> the report <b>by</b> Friday. · <b>By the time</b> you arrive, we <b>will have eaten</b>.</p>
<p>Průběhová podoba zdůrazňuje trvání: <i>In June I <b>will have been working</b> here for ten years.</i></p>`,
      q: ["By 2050 people ___ on Mars.|will have landed|will land already yesterday|have landed", "I will have ___ the report by Friday.|finished|finish|finishing", "By the time you arrive, we ___.|will have eaten|will eat before|ate", "___ the end of the year she will have saved enough.|By|Until|In", "In June I ___ here for ten years.|will have been working|am working|will work", "Will you ___ done it by tomorrow?|have|had|be"] },
    { t: "Budoucnost v minulosti: was going to",
      h: `<p>Když mluvíš o tom, co se <b>mělo stát</b> nebo co jsi <b>měl v plánu</b> (a často se to nestalo), posuneš budoucí tvary do minulosti:</p>
<ul class="ex"><li>am going to → I <b>was going to</b> call you, but I forgot.</li><li>will → I knew it <b>would</b> happen.</li><li>is starting → The mission <b>was starting</b> the next day.</li><li>is about to → I <b>was about to</b> leave when you called.</li></ul>`,
      q: ["I ___ call you, but I forgot.|was going to|am going to|will", "I knew it ___ rain.|would|will|is going", "I was ___ to leave when the phone rang.|about|going about|just", "They were going ___ a rocket, but the weather was bad.|to launch|launching|launch", "She said she ___ be late.|would|will|is", "We ___ meet at six, but he didn't come.|were supposed to|are supposed to|supposed"] },
    { t: "be about to, be likely to, be due to",
      h: `<p>Další způsoby, jak mluvit o budoucnosti přesněji:</p>
<ul class="ex"><li><b>be about to</b> – každou chvíli: The rocket <b>is about to</b> take off.</li><li><b>be due to</b> – podle plánu, harmonogramu: The mission <b>is due to</b> start in May.</li><li><b>be likely / unlikely to</b> – pravděpodobně (ne): Robots <b>are likely to</b> replace many jobs.</li><li><b>be bound to</b> – určitě, nevyhnutelně: It <b>is bound to</b> happen sooner or later.</li></ul>`,
      q: ["Hurry up! The film is ___ to start.|about|due|likely", "The train is ___ to arrive at 6.15.|due|about|bound", "Robots are ___ to replace many jobs.|likely|due|about", "It is bound ___ sooner or later.|to happen|happening|happen", "She is ___ to agree. She hates the idea.|unlikely|about|due", "The spacecraft is due ___ on Monday.|to land|landing|land"] }
  ],
  sent: ["By 2050 people will have landed on Mars.|Do roku 2050 lidé přistanou na Marsu.", "I will have finished the report by Friday.|Do pátku budu mít tu zprávu hotovou.", "I was going to call you, but I forgot.|Chtěl jsem ti zavolat, ale zapomněl jsem.", "The film is about to start.|Film každou chvíli začne.", "Robots are likely to replace many jobs.|Roboti pravděpodobně nahradí mnoho pracovních míst.", "The train is due to arrive at six.|Vlak má přijet v šest.", "It is bound to happen sooner or later.|Dříve či později se to určitě stane.", "I knew it would happen.|Věděl jsem, že se to stane.", "The rocket was launched last night.|Raketa byla vypuštěna včera v noci.", "Technology is advancing quickly.|Technologie postupuje rychle.", "We will have to adapt.|Budeme se muset přizpůsobit.", "I was about to leave when you called.|Právě jsem se chystal odejít, když jsi zavolal."],
  pron: { t: "will have v řeči", h: `<p>Ve tvaru <b>will have</b> se obě pomocná slovesa oslabí. Zní to jako „wilev“ nebo se zájmenem „ajlev“.</p><p><i>I'll have FINished by FRIday.</i> Důraz nese jen hlavní sloveso a časový údaj.</p>`, w: ["I'll have finished|ajlev finyšt", "will have landed|wilev lendyd", "universe|JÚnyvérs", "century|SENčri", "inevitable|iNEvitebl"] },
  dlg: [
    ["Termín", "Will you have finished the report by Friday?|Budeš mít tu zprávu do pátku hotovou?", "I'm afraid it's unlikely.|Bohužel je to nepravděpodobné.", "But the client is due to arrive on Monday.|Ale klient má přijet v pondělí.", "I know. I was going to start last week, but I was ill.|Já vím. Chtěl jsem začít minulý týden, ale byl jsem nemocný.", "Can you do it by Sunday evening?|Zvládneš to do nedělního večera?", "Yes, by then I'll have written everything.|Ano, do té doby budu mít všechno napsané."],
    ["Budoucnost", "Do you think people will live on Mars one day?|Myslíš, že lidé budou jednou žít na Marsu?", "It's bound to happen sooner or later.|Dříve či později se to určitě stane.", "By the end of this century?|Do konce tohoto století?", "By then we will probably have built a base there.|Do té doby tam pravděpodobně postavíme základnu.", "And artificial intelligence?|A umělá inteligence?", "It is likely to transform everything.|Pravděpodobně všechno promění."]
  ]
},
{
  t: "Zvyky a kultury", s: "Co bývalo, na co jsem zvyklý a na co si zvykám",
  groups: [
    ["Zvyky", ["tradition|tradice", "custom|zvyk, obyčej", "ceremony|obřad", "festival|festival, slavnost", "celebrate|slavit", "ritual|rituál", "manners|způsoby, chování", "etiquette|etiketa"]],
    ["Jídlo ve světě", ["cuisine|kuchyně (národní)", "dish|jídlo, pokrm", "ingredient|přísada", "portion|porce", "starter|předkrm", "main course|hlavní chod", "dessert|dezert", "vegetarian|vegetarián"]],
    ["Stolování", ["chopsticks|hůlky", "napkin|ubrousek", "tablecloth|ubrus", "serve|podávat", "order|objednat", "tip|dát spropitné", "host|hostitel", "toast|přípitek"]],
    ["Život v cizině", ["abroad|v cizině", "homesick|tesknící po domově", "culture shock|kulturní šok", "expat|člověk žijící v cizině", "settle|usadit se", "fit in|zapadnout", "get by|vystačit si, domluvit se", "stereotype|stereotyp"]],
    ["Chování", ["rude|nezdvořilý", "offensive|urážlivý", "acceptable|přijatelný", "appropriate|vhodný", "formal|formální", "casual|neformální", "hospitable|pohostinný", "reserved|zdrženlivý"]],
    ["Zvykání", ["used to|zvyklý na", "get used to|zvyknout si na", "familiar|známý, povědomý", "unusual|neobvyklý", "typical|typický", "ordinary|obyčejný", "weird|divný", "common|běžný"]]
  ],
  grammar: [
    { t: "used to × would",
      h: `<p>O minulých zvycích můžeš mluvit dvěma způsoby:</p>
<ul class="ex"><li><b>used to</b> – opakované činnosti i <b>stavy</b>: We <b>used to</b> eat together. · I <b>used to</b> have long hair.</li><li><b>would</b> – jen opakované <b>činnosti</b> (ne stavy), typické pro vzpomínání: Every Sunday my grandmother <b>would</b> bake a cake.</li></ul>
<p>Nejde říct <i>I would have long hair</i> ve smyslu „míval jsem“. Vyprávění obvykle začne used to a pokračuje would.</p>`,
      q: ["I ___ have long hair when I was young.|used to|would|use to", "Every Sunday my grandmother ___ bake a cake.|would|use to|was used", "We ___ live in a small village.|used to|would|were used", "When I was a child, we ___ go fishing every summer.|would|were used|use", "She ___ be very shy.|used to|would|was use to", "Did you ___ believe in ghosts?|use to|used to|would to"] },
    { t: "be used to + -ing",
      h: `<p><b>be used to</b> + podstatné jméno nebo <b>-ing</b> = být zvyklý. S minulostí to nesouvisí; <i>to</i> je tu předložka.</p>
<p class="ex">I <b>am used to getting</b> up early. (jsem zvyklý vstávat) · She <b>isn't used to</b> spicy food. · Are you <b>used to driving</b> on the left?</p>
<p>Porovnej:</p>
<ul class="ex"><li>I <b>used to get</b> up early. – Dříve jsem vstával brzy (už ne).</li><li>I <b>am used to getting</b> up early. – Jsem zvyklý vstávat brzy.</li></ul>`,
      q: ["I am used to ___ up early.|getting|get|got", "She isn't used ___ spicy food.|to|with|for", "Are you used to ___ on the left?|driving|drive|drove", "I ___ get up early, but now I sleep until nine.|used to|am used to|was used to", "He ___ used to the noise. He has lived here for years.|is|does|has", "We are not used to ___ so late.|eating|eat|ate"] },
    { t: "get used to",
      h: `<p><b>get used to</b> + podstatné jméno nebo <b>-ing</b> = zvykat si, zvyknout si (proces).</p>
<p class="ex">I <b>am getting used to</b> the weather. (zvykám si) · You<b>'ll get used to</b> it. (zvykneš si) · I <b>can't get used to</b> eating with chopsticks. · She <b>has got used to</b> living abroad.</p>
<p>Shrnutí tří podobných tvarů:</p>
<ul class="ex"><li><b>used to do</b> – dříve jsem dělal</li><li><b>be used to doing</b> – jsem zvyklý</li><li><b>get used to doing</b> – zvykám si</li></ul>`,
      q: ["Don't worry, you will ___ used to it.|get|be getting to|use", "I am ___ used to the weather. (zvykám si)|getting|get|got to", "I can't get used to ___ with chopsticks.|eating|eat|ate", "She has ___ used to living abroad.|got|get|getting", "It took me a year to get used ___ the food.|to|with|at", "He ___ smoke, but he gave up.|used to|is used to|gets used to"] }
  ],
  sent: ["We used to eat together every Sunday.|Každou neděli jsme jídávali společně.", "My grandmother would bake a cake.|Babička pekávala dort.", "I am used to getting up early.|Jsem zvyklý vstávat brzy.", "You will get used to it.|Zvykneš si na to.", "I can't get used to the weather.|Nemůžu si zvyknout na počasí.", "She isn't used to spicy food.|Není zvyklá na pikantní jídlo.", "What is a typical Czech dish?|Jaké je typické české jídlo?", "It is rude to arrive late.|Je nezdvořilé přijít pozdě.", "I felt homesick at first.|Zpočátku se mi stýskalo po domově.", "Do you tip in restaurants here?|Dává se tady v restauracích spropitné?", "I can get by in German.|Německy se domluvím.", "It took me a year to fit in.|Trvalo mi rok, než jsem zapadl."],
  pron: { t: "used: „júst“ × „júzd“", h: `<p>Slovo <b>used</b> má dvě výslovnosti. Ve vazbách <i>used to</i> a <i>be used to</i> zní <b>„júst“</b>. Jako minulý čas slovesa <i>use</i> (použil) zní <b>„júzd“</b>.</p><ul class="ex"><li>I used to smoke. = „aj jústu smouk“</li><li>I used a knife. = „aj júzd e najf“</li></ul>`, w: ["I used to|aj jústu", "I'm used to|ajm jústu", "I used a knife|aj júzd e najf", "cuisine|kwiZÍN", "etiquette|Etyket"] },
  dlg: [
    ["Život v Anglii", "How long have you lived in England?|Jak dlouho žiješ v Anglii?", "For two years. I'm used to it now.|Dva roky. Už jsem si zvykl.", "Was it difficult at first?|Bylo to zpočátku těžké?", "Yes, I couldn't get used to driving on the left.|Ano, nemohl jsem si zvyknout na řízení vlevo.", "Do you miss Czech food?|Chybí ti české jídlo?", "Sometimes. My mother used to make wonderful soup.|Někdy. Maminka dělávala úžasnou polévku."],
    ["Vzpomínky na dětství", "What did you use to do in summer?|Co jste dělávali v létě?", "We would go to our cottage every weekend.|Každý víkend jsme jezdívali na chalupu.", "Did you use to have any traditions?|Mívali jste nějaké tradice?", "My father would make a fire and we would sing.|Otec rozdělával oheň a zpívali jsme.", "It sounds lovely.|To zní krásně.", "It was. I'm still not used to summers in the city.|Bylo. Pořád si nemůžu zvyknout na léto ve městě."]
  ]
},
{
  t: "Formální angličtina", s: "E-maily, žádosti a jak co kdo navrhl",
  groups: [
    ["V dopise", ["dear|vážený, milý", "regards|pozdravy", "sincerely|s úctou", "attachment|příloha", "enclosed|přiložený", "subject|předmět (e-mailu)", "recipient|příjemce", "sender|odesílatel"]],
    ["Formální slovesa", ["require|požadovat", "request|žádat", "inform|informovat", "apologise|omluvit se", "appreciate|ocenit, vážit si", "regret|litovat", "assist|pomoci", "obtain|získat"]],
    ["Formální × běžné", ["purchase|koupit (formálně)", "commence|začít (formálně)", "enquire|zeptat se (formálně)", "provide|poskytnout", "receive|obdržet", "contact|kontaktovat", "further|další, dodatečný", "sufficient|dostatečný"]],
    ["Žádosti a stížnosti", ["application|žádost", "enquiry|dotaz", "response|odpověď", "inconvenience|nepříjemnost", "delay|zpoždění", "compensation|odškodnění", "solution|řešení", "matter|záležitost"]],
    ["Uvozovací slovesa", ["advise|poradit", "recommend|doporučit", "remind|připomenout", "encourage|povzbudit", "threaten|vyhrožovat", "invite|pozvat", "order|nařídit", "beg|prosit"]],
    ["Spojovací výrazy v textu", ["regarding|ohledně", "with reference to|s odkazem na", "in response to|v reakci na", "furthermore|dále, navíc", "as mentioned|jak bylo zmíněno", "in conclusion|závěrem", "to sum up|abych to shrnul", "on behalf of|jménem (koho)"]]
  ],
  grammar: [
    { t: "Formální × neformální styl",
      h: `<p>Formální text nepoužívá zkrácené tvary, frázová slovesa ani hovorová slova.</p>
<ul class="ex"><li>I'm writing → <b>I am writing</b></li><li>Thanks for → <b>Thank you for</b></li><li>get → <b>receive / obtain</b>; ask for → <b>request</b>; tell → <b>inform</b></li><li>Sorry for → <b>I apologise for</b></li><li>Can you → <b>Could you / I would be grateful if you could</b></li></ul>
<p>Oslovení a závěr: <b>Dear Mr Smith</b> … <b>Yours sincerely</b> · <b>Dear Sir or Madam</b> … <b>Yours faithfully</b> · běžně <b>Kind regards</b>.</p>`,
      q: ["I ___ writing to enquire about the course. (formálně)|am|'m|be", "I would be grateful if you ___ send me the details.|could|can|will", "I ___ for the delay. (formálně)|apologise|am sorry about that|say sorry", "Please find the document ___.|attached|attach|attaching", "I look forward to ___ from you.|hearing|hear|heard", "Dear Mr Smith, … Yours ___,|sincerely|faithfully yours|hello"] },
    { t: "Uvozovací slovesa a jejich vazby",
      h: `<p>Místo <i>said</i> a <i>told</i> můžeš použít přesnější sloveso. Každé má svou vazbu:</p>
<ul class="ex"><li>sloveso + <b>to</b> + sloveso: <b>offer, promise, refuse, agree, threaten</b> – He <b>offered to help</b>.</li><li>sloveso + osoba + <b>to</b> + sloveso: <b>advise, ask, invite, remind, warn, encourage</b> – She <b>advised me to wait</b>.</li><li>sloveso + <b>-ing</b>: <b>suggest, recommend, admit, deny</b> – He <b>suggested meeting</b> on Monday.</li><li>sloveso + předložka + <b>-ing</b>: <b>apologise for, insist on, accuse sb of</b> – She <b>apologised for being</b> late.</li></ul>`,
      q: ["He offered ___ me.|to help|helping|help", "She advised me ___.|to wait|waiting|wait", "He suggested ___ on Monday.|meeting|to meet|meet", "She apologised ___ being late.|for|of|about to", "They reminded me ___ the form.|to sign|signing|sign", "He denied ___ the money.|taking|to take|take"] },
    { t: "Zdvořilé formální obraty",
      h: `<p>Ustálené věty, které se hodí do každého formálního e-mailu:</p>
<ul class="ex"><li><b>I am writing to</b> enquire about / complain about / apply for…</li><li><b>I would be grateful if you could</b> send me…</li><li><b>I would appreciate it if you could</b> reply by Friday.</li><li><b>Could you please let me know whether</b>…</li><li><b>Please do not hesitate to contact me</b> if you require further information.</li><li><b>I look forward to hearing</b> from you.</li></ul>
<p>Po <b>look forward to</b> je vždy -ing.</p>`,
      q: ["I am writing ___ about a job.|to enquire|for enquire|enquiring to", "I would appreciate ___ if you could reply soon.|it|–|that", "Please do not ___ to contact me.|hesitate|doubt|afraid", "Could you please let me know ___ the room is available?|whether|that|what", "If you ___ further information, please contact us.|require|will require|required", "I would be ___ if you could confirm the date.|grateful|thankful to|pleased with"] }
  ],
  sent: ["I am writing to enquire about the course.|Píši, abych se informoval o kurzu.", "I would be grateful if you could send me the details.|Byl bych vděčný, kdybyste mi mohli poslat podrobnosti.", "I look forward to hearing from you.|Těším se na vaši odpověď.", "Please find the document attached.|Dokument najdete v příloze.", "I apologise for the delay.|Omlouvám se za zpoždění.", "He offered to help me.|Nabídl mi pomoc.", "She advised me to wait.|Poradila mi, abych počkal.", "He suggested meeting on Monday.|Navrhl, abychom se sešli v pondělí.", "Please do not hesitate to contact me.|Neváhejte mě kontaktovat.", "Thank you for your quick response.|Děkuji za vaši rychlou odpověď.", "We regret to inform you that the flight is cancelled.|S lítostí vám oznamujeme, že let je zrušen.", "She apologised for being late.|Omluvila se, že přišla pozdě."],
  pron: { t: "Formální slova a přízvuk", h: `<p>Formální slova jsou často delší a mají přízvuk jinde, než bys čekal:</p><ul class="ex"><li>a<b>PO</b>logise · ap<b>PRE</b>ciate · <b>RE</b>commend má přízvuk až na konci: recom<b>MEND</b></li><li>in<b>QUI</b>ry / en<b>QUI</b>ry · com<b>PEN</b>sate, ale compen<b>SA</b>tion</li></ul>`, w: ["apologise|ePOledžajz", "appreciate|ePRÍšiejt", "recommend|rekeMEND", "sincerely|sinSÍRli", "inconvenience|inknVÍnyens"] },
  dlg: [
    ["Telefonát do firmy", "Good morning. How can I assist you?|Dobré ráno. Jak vám mohu pomoci?", "I am calling regarding my application.|Volám ohledně své žádosti.", "Could you give me your reference number, please?|Můžete mi prosím dát své referenční číslo?", "Certainly. I would appreciate it if you could check the status.|Jistě. Ocenil bych, kdybyste mohli zkontrolovat stav.", "I apologise for the delay. You will receive a response this week.|Omlouvám se za zpoždění. Odpověď obdržíte tento týden.", "Thank you. I look forward to hearing from you.|Děkuji. Těším se na vaši odpověď."],
    ["Co kdo řekl", "What did the manager say about your idea?|Co řekl manažer na tvůj nápad?", "He suggested discussing it next week.|Navrhl, abychom to probrali příští týden.", "Did he promise anything?|Slíbil něco?", "He offered to read my proposal.|Nabídl, že si přečte můj návrh.", "And your colleagues?|A kolegové?", "They encouraged me to continue.|Povzbudili mě, abych pokračoval."]
  ]
},
{
  t: "Frázová slovesa naplno", s: "get, take, put, turn a ta trojdílná",
  groups: [
    ["S get", ["get up|vstát", "get on|nastoupit, vycházet", "get off|vystoupit", "get over|překonat", "get back|vrátit se", "get away|uniknout, odjet", "get through|dovolat se, zvládnout", "get together|sejít se"]],
    ["S take", ["take up|začít se věnovat", "take over|převzít", "take after|být po kom", "take back|vzít zpět", "take out|vyndat, vzít ven", "take off|vzlétnout, sundat", "take in|pochopit, vstřebat", "take on|přijmout (práci, lidi)"]],
    ["S put a turn", ["put off|odložit", "put up with|snášet", "put out|uhasit", "put away|uklidit (na místo)", "turn up|objevit se, zesílit", "turn down|odmítnout, ztlumit", "turn into|proměnit se v", "turn out|ukázat se"]],
    ["S look a come", ["look after|starat se o", "look forward to|těšit se na", "look into|prošetřit", "look up to|vzhlížet k", "come across|narazit na", "come up with|přijít s (nápadem)", "come back|vrátit se", "come round|zastavit se na návštěvu"]],
    ["S go a bring", ["go on|pokračovat", "go off|zazvonit (budík), zkazit se", "go through|projít (čím), prožít", "go out|jít ven, zhasnout", "bring up|vychovat, nadhodit téma", "bring back|přinést zpět, připomenout", "bring about|způsobit", "go without|obejít se bez"]],
    ["Další užitečná", ["keep up with|držet krok s", "catch up with|dohnat", "cut down on|omezit", "run into|náhodou potkat", "make up|vymyslet si, usmířit se", "let down|zklamat", "sort out|vyřešit, utřídit", "hold on|počkat, vydržet"]]
  ],
  grammar: [
    { t: "Trojdílná frázová slovesa",
      h: `<p>Některá frázová slovesa mají dvě částice. Ta se <b>nikdy nerozdělují</b> a předmět stojí vždy na konci:</p>
<ul class="ex"><li><b>look forward to</b> – těšit se na</li><li><b>put up with</b> – snášet</li><li><b>come up with</b> – přijít s nápadem</li><li><b>run out of</b> – dojít</li><li><b>get on with</b> – vycházet s</li><li><b>keep up with</b> – držet krok s</li><li><b>cut down on</b> – omezit</li></ul>
<p class="ex">I can't <b>put up with it</b>. · She <b>came up with</b> a great idea.</p>`,
      q: ["I can't put up ___ this noise.|with|on|to", "She came up ___ a great idea.|with|to|on", "I'm looking forward ___ seeing you.|to|for|at", "You should cut down ___ sugar.|on|of|with", "I can't keep up ___ you. Slow down!|with|to|on", "Do you get on ___ your boss?|with|to|by"] },
    { t: "Jeden tvar, víc významů",
      h: `<p>Mnoho frázových sloves má několik významů a správný poznáš z kontextu:</p>
<ul class="ex"><li><b>take off</b>: The plane <b>took off</b>. (vzlétlo) · <b>Take off</b> your shoes. (sundej si)</li><li><b>turn down</b>: <b>Turn down</b> the music. (ztlum) · She <b>turned down</b> the job. (odmítla)</li><li><b>go off</b>: The alarm <b>went off</b>. (zazvonil) · The milk <b>has gone off</b>. (zkazilo se)</li><li><b>make up</b>: He <b>made up</b> the story. (vymyslel) · They <b>made up</b>. (usmířili se)</li></ul>`,
      q: ["She ___ the job offer. (odmítla)|turned down|turned up|turned out", "The alarm ___ at six.|went off|went out|went on", "He ___ the whole story. (vymyslel)|made up|made out|made off", "The plane ___ on time.|took off|took up|took over", "This milk has ___.|gone off|gone out|gone on", "Can you ___ the music? It's too loud.|turn down|turn off the sound up|turn into"] },
    { t: "Frázová slovesa × formální synonyma",
      h: `<p>Skoro každé frázové sloveso má formálnější jednoslovný protějšek. V řeči používej frázová slovesa, v úředním textu synonyma.</p>
<ul class="ex"><li><b>put off</b> = postpone · <b>call off</b> = cancel</li><li><b>find out</b> = discover · <b>look into</b> = investigate</li><li><b>turn down</b> = refuse · <b>give up</b> = quit</li><li><b>go on</b> = continue · <b>put up with</b> = tolerate</li><li><b>come up with</b> = suggest, invent · <b>sort out</b> = solve</li></ul>`,
      q: ["The meeting was put off. = The meeting was ___.|postponed|cancelled|refused", "We'll look into it. = We'll ___ it.|investigate|tolerate|continue", "Please go on. = Please ___.|continue|quit|suggest", "I can't put up with it. = I can't ___ it.|tolerate|postpone|discover", "They called off the match. = They ___ the match.|cancelled|postponed|solved", "He turned down the offer. = He ___ the offer.|refused|invented|continued"] }
  ],
  sent: ["I can't put up with this noise.|Nemůžu ten hluk snášet.", "She came up with a great idea.|Přišla se skvělým nápadem.", "The meeting has been put off.|Schůzka byla odložena.", "He takes after his father.|Je po otci.", "I ran into an old friend yesterday.|Včera jsem náhodou potkal starého přítele.", "She turned down the job offer.|Odmítla tu pracovní nabídku.", "My alarm didn't go off.|Nezazvonil mi budík.", "You should cut down on sugar.|Měl bys omezit cukr.", "Who is looking after the children?|Kdo se stará o děti?", "It turned out to be true.|Ukázalo se, že je to pravda.", "Hold on, I'll check.|Počkej, zkontroluju to.", "I have taken up yoga.|Začal jsem se věnovat józe."],
  pron: { t: "Kde je přízvuk u trojdílných sloves", h: `<p>U trojdílných frázových sloves je hlavní přízvuk na <b>první částici</b>, předložka na konci je slabá:</p><ul class="ex"><li>put <b>UP</b> with · come <b>UP</b> with · look <b>FOR</b>ward to · run <b>OUT</b> of · cut <b>DOWN</b> on</li></ul>`, w: ["put up with|putAPwid", "come up with|kamAPwid", "run out of|ranAUTev", "look forward to|lukFÓRwrdtu", "cut down on|katDAUNon"] },
  dlg: [
    ["Ráno", "Why are you so late?|Proč jdeš tak pozdě?", "My alarm didn't go off.|Nezazvonil mi budík.", "Again? You should sort it out.|Zase? Měl bys to vyřešit.", "I know. Then I ran into my neighbour.|Já vím. Potom jsem potkal souseda.", "The boss has put off the meeting anyway.|Šéf stejně schůzku odložil.", "Great. I need time to catch up with my emails.|Skvělé. Potřebuju čas, abych dohnal e-maily."],
    ["Nový koníček", "I've taken up running.|Začal jsem běhat.", "Really? I gave up after a week.|Vážně? Já to po týdnu vzdal.", "I couldn't keep up with my friends at first.|Zpočátku jsem nemohl držet krok s přáteli.", "And now?|A teď?", "It turned out to be easier than I thought.|Ukázalo se, že je to snazší, než jsem myslel.", "Maybe I'll come round and try it with you.|Možná se zastavím a zkusím to s tebou."]
  ]
}
);
