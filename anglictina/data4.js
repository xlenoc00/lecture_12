// Obsah kurzu, týdny 21–26 (úroveň A2).
window.UNITS.push(
{
  t: "Na cestách", s: "Letiště, hotel a zdvořilé žádosti",
  groups: [
    ["Na letišti", ["departure|odlet, odjezd|dypárčr", "arrival|přílet, příjezd|erajvl", "gate|brána, východ k letadlu|gejt", "boarding pass|palubní vstupenka|bórdyng pás", "customs|celnice|kastmz", "delay|zpoždění|dylej", "queue|fronta|kjú", "security|bezpečnostní kontrola|sikjúrity"]],
    ["V hotelu", ["reception|recepce|risepšn", "single room|jednolůžkový pokoj|singl rúm", "double room|dvoulůžkový pokoj|dabl rúm", "lift|výtah|lift", "towel|ručník|tauel", "pillow|polštář|pilou", "blanket|deka|blenkit", "view|výhled|vjú"]],
    ["Cestovní slovesa", ["book|rezervovat|buk", "cancel|zrušit|kensl", "check in|ubytovat se, odbavit se|ček in", "check out|odhlásit se z hotelu|ček aut", "land|přistát|lend", "take off|vzlétnout|tejk of", "board|nastoupit (do letadla)|bórd", "get off|vystoupit|get of"]],
    ["Pohyb odněkud někam", ["across|přes (plochu)|ekros", "through|skrz|thrú", "along|podél|elong", "towards|směrem k|tuwórdz", "past|kolem (minout)|pást", "into|do (dovnitř)|intu", "out of|ven z|aut ov", "over|přes, nad|ouvr"]],
    ["Na silnici", ["traffic|doprava, provoz|trefik", "traffic lights|semafor|trefik lajts", "corner|roh|kórnr", "crossroads|křižovatka|krosroudz", "motorway|dálnice|moutrwej", "petrol|benzín|petrl", "car park|parkoviště|kár párk", "roundabout|kruhový objezd|raundebaut"]],
    ["Problémy na cestě", ["miss|zmeškat|mis", "lost|ztracený|lost", "broken|rozbitý|broukn", "complain|stěžovat si|komplejn", "crowded|přeplněný|kraudyd", "noisy|hlučný|nojzi", "available|volný, dostupný|evejlebl", "include|zahrnovat|inklúd"]]
  ],
  grammar: [
    { t: "Zdvořilé žádosti",
      h: `<p>Čím delší žádost, tím zdvořilejší. Od běžné po velmi zdvořilou:</p>
<ul class="ex"><li><b>Can you</b> help me?</li><li><b>Could you</b> help me, please?</li><li><b>Would you mind</b> help<b>ing</b> me? (Vadilo by vám…?)</li></ul>
<p>Po <b>Would you mind</b> je sloveso s -ing. Souhlasná odpověď je <b>No, not at all.</b> (nevadí).</p>
<p>O dovolení: <b>Can I / Could I / May I</b> open the window? · <b>Do you mind if I</b> open the window?</p>`,
      q: ["___ you help me, please?|Could|Would mind|May", "Would you mind ___ the window?|closing|close|to close", "___ I have the bill, please?|Could|Would|Do", "Would you mind waiting? – No, ___.|not at all|I mind|yes, please", "Do you mind if I ___ here?|sit|sitting|to sit", "Could you ___ me the way?|show|showing|to show"] },
    { t: "Nepřímé otázky",
      h: `<p>Otázka uvedená zdvořilým úvodem (<b>Do you know…, Could you tell me…, I'd like to know…</b>) má slovosled jako <b>oznamovací věta</b>: podmět před slovesem a žádné do / does / did.</p>
<p class="ex">Where <b>is the station</b>? → Do you know where <b>the station is</b>?</p>
<p class="ex">What time <b>does the train leave</b>? → Could you tell me what time <b>the train leaves</b>?</p>
<p>U otázek ano/ne přidáš <b>if</b>: <i>Do you know <b>if</b> breakfast is included?</i></p>`,
      q: ["Do you know where ___?|the station is|is the station|does the station be", "Could you tell me what time ___?|the bus leaves|does the bus leave|leaves the bus", "Do you know ___ breakfast is included?|if|what|that", "Can you tell me how much ___?|it costs|does it cost|costs it", "I'd like to know when ___.|the flight arrives|does the flight arrive|arrives the flight", "Do you know where ___?|she lives|does she live|lives she"] },
    { t: "Předložky pohybu",
      h: `<p>Předložky pohybu říkají, <b>kudy a kam</b>:</p>
<ul class="ex"><li><b>into</b> the room – do místnosti · <b>out of</b> the house – ven z domu</li><li><b>across</b> the bridge – přes most · <b>through</b> the park – skrz park</li><li><b>along</b> the river – podél řeky · <b>past</b> the bank – kolem banky</li><li><b>towards</b> the station – směrem k nádraží · <b>over</b> the hill – přes kopec</li></ul>
<p>Dopravní prostředky: <b>get on / off</b> a bus, train, plane · <b>get in / out of</b> a car, taxi.</p>`,
      q: ["Walk ___ the bridge. (přes)|across|through|along", "Go ___ the bank and turn left. (kolem)|past|into|over", "She came ___ the room. (do)|into|across|along", "We walked ___ the river. (podél)|along|into|out of", "He got ___ the taxi.|out of|off|out", "Get ___ the bus at the next stop.|off|out of|out"] }
  ],
  sent: ["Could you help me, please?|Mohl byste mi pomoct, prosím?", "Would you mind opening the window?|Vadilo by vám otevřít okno?", "Do you know where the station is?|Víte, kde je nádraží?", "Our flight was delayed.|Náš let měl zpoždění.", "I'd like to book a double room.|Chtěl bych si rezervovat dvoulůžkový pokoj.", "Is breakfast included?|Je snídaně v ceně?", "Go past the bank and turn right.|Jděte kolem banky a zahněte doprava.", "We walked along the river.|Šli jsme podél řeky.", "The plane takes off at six.|Letadlo vzlétá v šest.", "I missed my train.|Zmeškal jsem vlak.", "Could you tell me how much it costs?|Mohl byste mi říct, kolik to stojí?", "I would like to complain about the room.|Chtěl bych si stěžovat na pokoj."],
  pron: { t: "Písmena qu a ue", h: `<p><b>qu</b> se čte „kw“: <i>quick, quiet, question</i>. Výjimkou je <i>queue</i> (fronta), které se čte jen „kjú“, čtyři samohlásky jsou němé.</p><p>Slovo <i>through</i> se čte „thrú“ a <i>towards</i> „tuwórdz“.</p>`, w: ["queue|kjú", "through|thrú", "towards|tuwórdz", "available|evejlebl", "customs|kastmz"] },
  dlg: [
    ["Na recepci", "Good evening. I have a reservation.|Dobrý večer. Mám rezervaci.", "Could I see your passport, please?|Mohu vidět váš pas, prosím?", "Of course. Is breakfast included?|Samozřejmě. Je snídaně v ceně?", "Yes, it is served from seven to ten.|Ano, podává se od sedmi do deseti.", "Could you tell me where the lift is?|Mohl byste mi říct, kde je výtah?", "It is next to the reception, on the left.|Je vedle recepce, vlevo."],
    ["Na letišti", "Excuse me, do you know where gate twelve is?|Promiňte, nevíte, kde je brána dvanáct?", "Go through security and turn right.|Projděte kontrolou a zahněte doprava.", "Is the flight to Prague delayed?|Má let do Prahy zpoždění?", "Yes, I'm afraid it is delayed by an hour.|Ano, bohužel má hodinu zpoždění.", "Would you mind checking my boarding pass?|Vadilo by vám zkontrolovat moji palubní vstupenku?", "Not at all. Everything is fine.|Vůbec ne. Všechno je v pořádku."]
  ]
},
{
  t: "Technologie", s: "Přístroje, internet a co se stane, když…",
  groups: [
    ["Přístroje", ["device|zařízení|dyvajs", "keyboard|klávesnice|kíbórd", "mouse|myš (k počítači)|maus", "headphones|sluchátka|hedfounz", "charger|nabíječka|čárdžr", "battery|baterie|betri", "camera|fotoaparát|kemra", "speaker|reproduktor|spíkr"]],
    ["Na počítači", ["click|kliknout|klik", "type|psát na klávesnici|tajp", "save|uložit|sejv", "delete|smazat|dylít", "print|tisknout|print", "search|hledat|sérč", "install|nainstalovat|instól", "update|aktualizovat|apdejt"]],
    ["Internet", ["link|odkaz|link", "account|účet|ekaunt", "log in|přihlásit se|log in", "upload|nahrát|aploud", "share|sdílet|šér", "post|příspěvek, zveřejnit|poust", "online|na internetu|onlajn", "wifi|wifi|wajfaj"]],
    ["Když to nefunguje", ["turn on|zapnout|térn on", "turn off|vypnout|térn of", "plug in|zapojit do zásuvky|plag in", "work|fungovat|wérk", "crash|spadnout (o programu)|kreš", "error|chyba|erer", "connect|připojit|konekt", "restart|restartovat|rístárt"]],
    ["Média", ["newspaper|noviny|njúzpejpr", "magazine|časopis|megezín", "article|článek|ártykl", "programme|pořad|prougrem", "series|seriál|síríz", "advert|reklama|edvért", "channel|kanál|čenl", "headline|titulek|hedlajn"]],
    ["Podmínky", ["unless|pokud ne, ledaže|anles", "as soon as|jakmile|ez sún ez", "until|dokud ne, až do|antyl", "otherwise|jinak|adrwajz", "in case|pro případ, že|in kejs", "immediately|okamžitě|imídjetli", "whenever|kdykoli|wenevr", "press|stisknout|pres"]]
  ],
  grammar: [
    { t: "Nultá podmínka: když se stane, tak je",
      h: `<p>Pro věci, které platí <b>vždy</b> (fakta, návody, zvyky), jsou obě části věty v přítomném čase.</p>
<p class="ex"><b>If</b> you <b>press</b> this button, the screen <b>turns</b> off. · <b>If</b> I <b>drink</b> coffee in the evening, I <b>can't</b> sleep.</p>
<p>Místo if můžeš říct <b>when</b>. Pořadí vět se dá obrátit; čárka se píše jen tehdy, když if stojí na začátku.</p>`,
      q: ["If you press this button, the computer ___.|restarts|will restarting|restarted", "If I ___ coffee at night, I can't sleep.|drink|will drink|drank", "When you click here, the file ___.|opens|open|is open", "Water boils if you ___ it to 100 degrees.|heat|will heat|heated", "If the battery ___ empty, the phone turns off.|is|will be|be", "The screen turns off ___ you don't touch it.|if|unless not|otherwise"] },
    { t: "První podmínka: jestli se stane, tak bude",
      h: `<p>Pro <b>reálnou možnost v budoucnu</b>: po <b>if</b> přítomný čas, v hlavní větě <b>will</b>.</p>
<p class="ex"><b>If</b> it <b>rains</b>, we <b>will stay</b> at home. · I<b>'ll call</b> you <b>if</b> I <b>have</b> time.</p>
<p>Největší past pro Čechy: po if <b>nikdy není will</b>, i když česky říkáme „jestli bude pršet“.</p>
<p>V hlavní větě může být i <b>can, might</b> nebo rozkaz: <i>If you see him, tell him.</i></p>`,
      q: ["If it ___, we will stay at home.|rains|will rain|rained", "I ___ you if I have time.|will call|call|called", "If you don't hurry, you ___ the bus.|will miss|miss|missed", "If she ___ me, I will help her.|asks|will ask|asked", "We won't go if the weather ___ bad.|is|will be|would be", "If you see Tom, ___ him to call me.|tell|will tell|told"] },
    { t: "when, as soon as, until, unless",
      h: `<p>Stejné pravidlo jako u if platí pro další časové spojky. Po nich je <b>přítomný čas</b>, i když jde o budoucnost.</p>
<ul class="ex"><li><b>when</b> – až: I'll call you <b>when</b> I <b>arrive</b>.</li><li><b>as soon as</b> – jakmile: Tell me <b>as soon as</b> you <b>know</b>.</li><li><b>until</b> – dokud ne: Wait <b>until</b> I <b>come</b> back.</li><li><b>unless</b> – pokud ne: You won't pass <b>unless</b> you <b>study</b>.</li></ul>
<p><b>unless</b> už v sobě zápor má, sloveso za ním je kladné.</p>`,
      q: ["I'll call you when I ___.|arrive|will arrive|arrived", "Wait here until I ___ back.|come|will come|came", "You won't pass unless you ___.|study|don't study|will study", "Tell me as soon as you ___.|know|will know|knew", "We'll start when everybody ___ here.|is|will be|be", "I won't go ___ you come with me.|unless|if not|until not"] }
  ],
  sent: ["If it rains, we will stay at home.|Jestli bude pršet, zůstaneme doma.", "I will call you when I arrive.|Zavolám ti, až přijedu.", "Don't forget to save the file.|Nezapomeň uložit soubor.", "My phone battery is empty.|Mám vybitou baterii v telefonu.", "If you press this button, it turns off.|Když stiskneš tohle tlačítko, vypne se to.", "Wait until I come back.|Počkej, dokud se nevrátím.", "You won't pass unless you study.|Neuspěješ, pokud se nebudeš učit.", "Can you turn off the computer?|Můžeš vypnout počítač?", "I forgot my password again.|Zase jsem zapomněl heslo.", "Tell me as soon as you know.|Řekni mi, jakmile to budeš vědět.", "The printer doesn't work.|Tiskárna nefunguje.", "I read an interesting article online.|Četl jsem na internetu zajímavý článek."],
  pron: { t: "will ve zkrácené podobě", h: `<p>V podmínkových větách se <b>will</b> skoro vždy zkracuje: <b>I'll, you'll, we'll, it'll</b>. Zní to jako temné „l“ na konci zájmena.</p><p><i>it'll</i> se čte „itl“, dvě slabiky slité do jedné.</p>`, w: ["I'll call|ajl kól", "you'll miss|júl mis", "it'll be|itl bí", "we'll stay|wíl stej", "unless|anles"] },
  dlg: [
    ["Nefunguje to", "My laptop doesn't work.|Nefunguje mi notebook.", "Have you tried to restart it?|Zkoušel jsi ho restartovat?", "Yes, but it crashes whenever I open this file.|Ano, ale spadne, kdykoli otevřu tenhle soubor.", "If you send it to me, I will check it.|Když mi ho pošleš, podívám se na to.", "Thanks. I'll send it as soon as I get home.|Díky. Pošlu ho, jakmile přijdu domů.", "OK. Don't delete anything until I call you.|Dobře. Nic nemaž, dokud ti nezavolám."],
    ["Nový telefon", "Are you going to buy a new phone?|Budeš si kupovat nový telefon?", "If I have enough money, I will.|Jestli budu mít dost peněz, tak ano.", "What will you do with the old one?|Co uděláš s tím starým?", "I'll give it to my mother if she wants it.|Dám ho mámě, jestli ho bude chtít.", "Does it still work?|Ještě funguje?", "Yes, unless you forget to charge it.|Ano, pokud ho nezapomeneš nabít."]
  ]
},
{
  t: "Domácnost", s: "Domácí práce a slovesné vazby",
  groups: [
    ["Domácí práce", ["housework|domácí práce|hauswérk", "do the washing|prát prádlo|dú d wošing", "do the dishes|mýt nádobí|dú d dyšiz", "vacuum|vysávat|vekjúm", "iron|žehlit, žehlička|ajen", "dust|prach, utírat prach|dast", "sweep|zametat|swíp", "rubbish|odpadky|rabiš"]],
    ["Spotřebiče", ["washing machine|pračka|wošing mešín", "dishwasher|myčka|dyšwošr", "microwave|mikrovlnka|majkrowejv", "cooker|sporák|kukr", "kettle|rychlovarná konvice|ketl", "freezer|mrazák|frízr", "heating|topení|hítyng", "tap|kohoutek|tep"]],
    ["V domě", ["roof|střecha|rúf", "stairs|schody|stérz", "ceiling|strop|síling", "cellar|sklep|selr", "garage|garáž|gerádž", "fence|plot|fens", "balcony|balkon|belkony", "corridor|chodba|koridór"]],
    ["Vybavení", ["carpet|koberec|kárpit", "curtain|závěs|kértn", "mirror|zrcadlo|mirer", "wardrobe|šatní skříň|wórdroub", "drawer|zásuvka (šuplík)|drór", "cupboard|skříňka|kabrd", "sink|dřez|sink", "bin|koš|bin"]],
    ["Slovesa s vazbou", ["avoid|vyhnout se|evojd", "finish|dokončit|finyš", "keep|pokračovat, nechat si|kíp", "mind|vadit|majnd", "refuse|odmítnout|rifjúz", "offer|nabídnout|ofr", "expect|očekávat|ikspekt", "manage|zvládnout|menydž"]],
    ["Bydlení", ["landlord|pronajímatel|lendlórd", "tenant|nájemník|tenent", "rent|nájem|rent", "furniture|nábytek|férnyčr", "comfortable|pohodlný|kamftbl", "cosy|útulný|kouzi", "messy|neuklizený|mesi", "spacious|prostorný|spejšs"]]
  ],
  grammar: [
    { t: "Slovesa, po kterých je -ing",
      h: `<p>Po některých slovesech musí další sloveso mít tvar s <b>-ing</b>:</p>
<p class="ex"><b>enjoy, finish, avoid, keep, mind, suggest, stop, give up</b></p>
<p class="ex">I enjoy cook<b>ing</b>. · She finished clean<b>ing</b>. · He keeps talk<b>ing</b>. · I don't mind wait<b>ing</b>.</p>
<p>-ing je také po všech <b>předložkách</b>: <i>I'm good <b>at</b> cook<b>ing</b>. · Thank you <b>for</b> help<b>ing</b>.</i></p>`,
      q: ["I enjoy ___.|cooking|to cook|cook", "She finished ___ the kitchen.|cleaning|to clean|clean", "He keeps ___ the same question.|asking|to ask|ask", "I don't mind ___ the dishes.|doing|to do|do", "Thank you for ___ me.|helping|to help|help", "Try to avoid ___ late.|being|to be|be"] },
    { t: "Slovesa, po kterých je to",
      h: `<p>Po jiných slovesech následuje <b>to</b> + základní tvar:</p>
<p class="ex"><b>want, need, decide, hope, plan, promise, offer, refuse, manage, learn, forget, agree, expect</b></p>
<p class="ex">We decided <b>to move</b>. · He offered <b>to help</b>. · She refused <b>to pay</b>. · I forgot <b>to lock</b> the door.</p>
<p>Po <b>like, love, hate, start, begin</b> může být obojí bez velkého rozdílu.</p>`,
      q: ["We decided ___ a new sofa.|to buy|buying|buy", "He offered ___ me.|to help|helping|help", "She refused ___ the rent.|to pay|paying|pay", "I forgot ___ the door.|to lock|locking|lock", "They managed ___ the washing machine.|to repair|repairing|repair", "I hope ___ you soon.|to see|seeing|see"] },
    { t: "Účel: to, for, so that",
      h: `<p>Na otázku „proč, za jakým účelem“ odpovídáš infinitivem s <b>to</b>. Nikdy ne <i>for to</i>.</p>
<p class="ex">I went to the shop <b>to buy</b> milk. · She called <b>to say</b> thank you.</p>
<p><b>for</b> + podstatné jméno nebo -ing říká, k čemu věc slouží: <i>a knife <b>for cutting</b> bread · I went <b>for a walk</b>.</i></p>
<p><b>so that</b> + věta: <i>I wrote it down <b>so that</b> I wouldn't forget.</i></p>`,
      q: ["I went to the shop ___ bread.|to buy|for buy|for to buy", "This is a machine ___ washing dishes.|for|to|so", "She called ___ thank you.|to say|for say|for saying to", "We went ___ a walk.|for|to|so that", "I got up early ___ I could clean the flat.|so that|for|to", "He saves money ___ a house.|to buy|for buy|so buy"] }
  ],
  sent: ["I enjoy cooking but I hate ironing.|Rád vařím, ale nesnáším žehlení.", "We decided to buy a new sofa.|Rozhodli jsme se koupit novou pohovku.", "Can you take out the rubbish?|Můžeš vynést odpadky?", "I forgot to lock the door.|Zapomněl jsem zamknout dveře.", "I don't mind doing the dishes.|Nevadí mi mýt nádobí.", "She went to the shop to buy milk.|Šla do obchodu koupit mléko.", "The washing machine is broken again.|Pračka je zase rozbitá.", "He offered to help me.|Nabídl se, že mi pomůže.", "Thank you for helping me.|Děkuju, že jsi mi pomohl.", "Our flat is small but cosy.|Náš byt je malý, ale útulný.", "How much rent do you pay?|Jaký platíš nájem?", "He keeps asking the same question.|Pořád se ptá na stejnou věc.", ],
  pron: { t: "Slova, která klamou pravopisem", h: `<p>Některá slova z domácnosti se čtou úplně jinak, než se píšou:</p><ul class="ex"><li><i>cupboard</i> = „kabrd“ (p je němé)</li><li><i>iron</i> = „ajen“ (r je němé)</li><li><i>drawer</i> = „drór“</li><li><i>comfortable</i> = „kamftbl“ (tři slabiky)</li><li><i>furniture</i> = „férnyčr“</li></ul>`, w: ["cupboard|kabrd", "iron|ajen", "drawer|drór", "comfortable|kamftbl", "furniture|férnyčr"] },
  dlg: [
    ["Kdo co udělá", "Would you mind doing the dishes today?|Vadilo by ti dnes umýt nádobí?", "No, I don't mind. But I hate vacuuming.|Ne, nevadí. Ale nesnáším vysávání.", "OK, I'll vacuum. Did you take out the rubbish?|Dobře, já vysaju. Vynesl jsi odpadky?", "Sorry, I forgot to do it.|Promiň, zapomněl jsem.", "You keep forgetting!|Pořád zapomínáš!", "I promise to do it now.|Slibuju, že to udělám hned."],
    ["Prohlídka bytu", "How much is the rent?|Jaký je nájem?", "Eight hundred a month, heating included.|Osm set měsíčně včetně topení.", "Is there a washing machine?|Je tam pračka?", "Yes, and the landlord offered to buy a dishwasher.|Ano, a pronajímatel nabídl, že koupí myčku.", "It looks very cosy.|Vypadá to velmi útulně.", "Yes. I hope to move in next month.|Ano. Doufám, že se nastěhuju příští měsíc."]
  ]
},
{
  t: "Peníze a služby", s: "Banka, opravy a trpný rod",
  groups: [
    ["Peníze", ["coin|mince|kojn", "note|bankovka|nout", "wallet|peněženka|wolit", "bank account|bankovní účet|benk ekaunt", "cash machine|bankomat|keš mešín", "loan|půjčka|loun", "debt|dluh|det", "tax|daň|teks"]],
    ["Co s penězi děláme", ["owe|dlužit|ou", "afford|dovolit si|efórd", "waste|plýtvat|wejst", "invest|investovat|invest", "exchange|vyměnit|iksčejndž", "withdraw|vybrat (peníze)|widdró", "transfer|převést|trensfér", "charge|účtovat|čárdž"]],
    ["Ceny", ["discount|sleva|dyskaunt", "receipt|účtenka|risít", "refund|vrácení peněz|rífand", "bargain|výhodná koupě|bárgin", "worth|v hodnotě, stojí za|wérth", "fee|poplatek|fí", "tip|spropitné|typ", "value|hodnota|veljú"]],
    ["Služby", ["hairdresser|kadeřník|hérdresr", "laundry|prádelna, prádlo|lóndri", "delivery|doručení|dylivri", "service|služba|sérvis", "order|objednat, objednávka|órdr", "parcel|balík|pársl", "insurance|pojištění|inšúrens", "guarantee|záruka|gerentý"]],
    ["Výroba a materiály", ["produce|vyrábět|prodjús", "design|navrhnout|dyzajn", "invent|vynalézt|invent", "wood|dřevo|wud", "metal|kov|metl", "plastic|plast|plestyk", "glass|sklo|glás", "leather|kůže (materiál)|ledr"]],
    ["Úřady", ["form|formulář|fórm", "fill in|vyplnit|fil in", "sign|podepsat|sajn", "signature|podpis|signečr", "document|dokument|dokjument", "copy|kopie|kopi", "stamp|razítko, známka|stemp", "require|vyžadovat|rikwajr"]]
  ],
  grammar: [
    { t: "Trpný rod v přítomnosti",
      h: `<p>Když není důležité, <b>kdo</b> něco dělá, nebo to nevíme, použiješ trpný rod: <b>am / is / are + třetí tvar</b>.</p>
<p class="ex">They make cars here. → Cars <b>are made</b> here. · English <b>is spoken</b> all over the world.</p>
<p>Česky často říkáme „vyrábí se“, „mluví se“. Původce děje můžeš přidat s <b>by</b>: <i>The form is signed <b>by</b> the manager.</i></p>`,
      q: ["Cars ___ in this factory.|are made|is made|are make", "English ___ all over the world.|is spoken|is spoke|are spoken", "The office ___ every day.|is cleaned|is clean|cleans", "These shoes ___ of leather.|are made|is made|made", "Breakfast ___ from seven.|is served|is serve|serves", "The form is signed ___ the manager.|by|from|with"] },
    { t: "Trpný rod v minulosti",
      h: `<p>V minulosti se mění jen sloveso být: <b>was / were + třetí tvar</b>.</p>
<p class="ex">The house <b>was built</b> in 1900. · The parcels <b>were delivered</b> yesterday. · My wallet <b>was stolen</b>.</p>
<p>Zápor a otázka jako u slovesa být: <i>It <b>wasn't</b> paid. · When <b>was</b> it <b>invented</b>?</i></p>`,
      q: ["This house ___ in 1900.|was built|was build|were built", "The parcels ___ yesterday.|were delivered|was delivered|were deliver", "My wallet ___ on the bus.|was stolen|was stole|is stole", "When ___ the telephone invented?|was|did|were", "The bill ___ paid.|wasn't|didn't|weren't", "The letters ___ by my boss.|were written|were wrote|was written"] },
    { t: "Vztažné věty: who, which, that",
      h: `<p>Vztažná věta říká, o které osobě nebo věci mluvíš.</p>
<ul class="ex"><li><b>who</b> – pro lidi: the man <b>who</b> lives next door</li><li><b>which</b> – pro věci: the parcel <b>which</b> arrived today</li><li><b>that</b> – pro obojí, hovorovější: the form <b>that</b> you signed</li><li><b>where</b> – pro místa: the shop <b>where</b> I bought it</li></ul>
<p>České „který“ se nepřekládá jako <i>what</i>.</p>`,
      q: ["The man ___ lives next door is a lawyer.|who|which|what", "This is the parcel ___ arrived today.|which|who|what", "That's the bank ___ I have my account.|where|which|who", "The woman ___ cut my hair was very nice.|who|which|where", "I lost the receipt ___ you gave me.|that|who|what", "Is this the form ___ I have to sign?|that|who|where"] }
  ],
  sent: ["I can't afford a new car.|Nemůžu si dovolit nové auto.", "You owe me ten pounds.|Dlužíš mi deset liber.", "English is spoken all over the world.|Anglicky se mluví po celém světě.", "This house was built in 1900.|Tenhle dům byl postaven v roce 1900.", "My wallet was stolen yesterday.|Včera mi ukradli peněženku.", "Please fill in this form.|Vyplňte prosím tento formulář.", "Can I have a receipt, please?|Můžu dostat účtenku, prosím?", "The man who lives next door is a lawyer.|Muž, který bydlí vedle, je právník.", "Where is the nearest cash machine?|Kde je nejbližší bankomat?", "I would like a refund.|Chtěl bych vrátit peníze.", "These shoes are made of leather.|Tyhle boty jsou z kůže.", "That is the shop where I bought it.|To je obchod, kde jsem to koupil."],
  pron: { t: "Němá písmena b a p", h: `<p>Ve slovech o penězích je hodně němých písmen:</p><ul class="ex"><li><i>debt</i> = „det“ (b je němé)</li><li><i>receipt</i> = „risít“ (p je němé)</li><li><i>guarantee</i> = „gerentý“ (u je němé)</li><li><i>sign</i> = „sajn“, ale <i>signature</i> = „signečr“</li></ul>`, w: ["debt|det", "receipt|risít", "guarantee|gerentý", "sign|sajn", "signature|signečr"] },
  dlg: [
    ["V bance", "I'd like to open a bank account.|Chtěl bych si otevřít bankovní účet.", "Of course. Please fill in this form.|Samozřejmě. Vyplňte prosím tento formulář.", "Is there a monthly fee?|Je tam měsíční poplatek?", "No, the account is free for students.|Ne, účet je pro studenty zdarma.", "When will my card be sent?|Kdy mi bude poslána karta?", "It is usually delivered within a week.|Obvykle je doručena do týdne."],
    ["Reklamace", "I bought these headphones here, but they don't work.|Koupil jsem tady tahle sluchátka, ale nefungují.", "Do you have the receipt?|Máte účtenku?", "Yes, here it is. They were bought last week.|Ano, tady je. Byla koupena minulý týden.", "Would you like a refund or new ones?|Chcete vrátit peníze, nebo nová?", "I'd like a refund, please.|Chtěl bych vrátit peníze, prosím.", "No problem. Please sign here.|Žádný problém. Tady se prosím podepište."]
  ]
},
{
  t: "Vztahy a city", s: "Přátelství, pocity a dovětky",
  groups: [
    ["Vztahy", ["boyfriend|přítel (partner)|bojfrend", "girlfriend|přítelkyně (partnerka)|gérlfrend", "partner|partner|pártnr", "couple|pár|kapl", "relative|příbuzný|reletyv", "cousin|bratranec, sestřenice|kazn", "nephew|synovec|nefjú", "niece|neteř|nís"]],
    ["Pocity", ["lonely|osamělý|lounli", "jealous|žárlivý|dželes", "proud|hrdý|praud", "ashamed|zahanbený|ešejmd", "worried|ustaraný|warid", "relaxed|uvolněný|rilekst", "disappointed|zklamaný|dysepojntyd", "grateful|vděčný|grejtfl"]],
    ["Co mezi sebou děláme", ["hug|obejmout|hag", "kiss|políbit|kis", "apologise|omluvit se|epolodžajz", "forgive|odpustit|forgiv", "support|podporovat|sepórt", "respect|respektovat|rispekt", "ignore|ignorovat|ignór", "blame|obviňovat|blejm"]],
    ["Seznámení a rozchod", ["get on with|vycházet s|get on wid", "go out with|chodit s|gou aut wid", "break up|rozejít se|brejk ap", "get divorced|rozvést se|get dyvórst", "propose|požádat o ruku|propouz", "engaged|zasnoubený|ingejdžd", "date|rande|dejt", "honeymoon|líbánky|hanymún"]],
    ["Zesílení", ["so|tak|sou", "such|takový|sač", "quite|docela|kwajt", "really|opravdu|ríeli", "extremely|nesmírně|ikstrímli", "a bit|trochu|e bit", "absolutely|naprosto|ebselútli", "rather|poněkud, dost|rádr"]],
    ["Oba a žádný", ["both|oba|bouth", "either|jeden nebo druhý, ani|ajdr", "neither|žádný z obou, ani|najdr", "each other|jeden druhého, navzájem|íč adr", "everyone|každý, všichni|evriwan", "no one|nikdo|nou wan", "anyone|kdokoli, někdo|eniwan", "someone|někdo|samwan"]]
  ],
  grammar: [
    { t: "so a such",
      h: `<p>Obojí zesiluje, ale pojí se s jinými slovy:</p>
<ul class="ex"><li><b>so</b> + přídavné jméno / příslovce: She is <b>so</b> kind. · He drives <b>so</b> fast.</li><li><b>such</b> + (a/an) + přídavné jméno + podstatné jméno: She is <b>such a</b> kind person. · They are <b>such</b> nice people.</li></ul>
<p>Často následuje <b>that</b> s důsledkem: <i>I was <b>so</b> tired <b>that</b> I fell asleep.</i></p>`,
      q: ["She is ___ kind.|so|such|such a", "He is ___ nice man.|such a|so|so a", "They are ___ good friends.|such|so|such a", "I was ___ tired that I fell asleep.|so|such|such a", "It was ___ beautiful day.|such a|so|such", "Why are you ___ worried?|so|such|such a"] },
    { t: "both, either, neither",
      h: `<p>Mluvíš-li o <b>dvou</b> věcech nebo lidech:</p>
<ul class="ex"><li><b>both</b> – oba: <b>Both</b> (of) my sisters are married.</li><li><b>either</b> – kterýkoli z obou: You can take <b>either</b> bus.</li><li><b>neither</b> – žádný z obou: <b>Neither</b> answer is correct.</li></ul>
<p>Dvojice: <b>both … and</b> (jak… tak), <b>either … or</b> (buď… nebo), <b>neither … nor</b> (ani… ani).</p>
<p>Po neither je sloveso kladné a v jednotném čísle.</p>`,
      q: ["___ my parents are teachers.|Both|Either|Neither", "___ of them was at home. (ani jeden)|Neither|Both|Either not", "You can come on Monday or Tuesday. ___ day is fine.|Either|Both|Neither", "She speaks both English ___ German.|and|or|nor", "We can either walk ___ take a taxi.|or|and|nor", "He neither called ___ wrote.|nor|or|and"] },
    { t: "Dovětky: …, isn't it?",
      h: `<p>České „že?“ nebo „že jo?“ má v angličtině mnoho podob. Dovětek opakuje <b>pomocné sloveso</b> z věty s opačným znaménkem a přidá zájmeno.</p>
<p class="ex">It's cold, <b>isn't it</b>? · You like coffee, <b>don't you</b>? · She can't swim, <b>can she</b>? · They went home, <b>didn't they</b>?</p>
<p>Kladná věta → záporný dovětek. Záporná věta → kladný dovětek. Po <i>I am</i> je dovětek <b>aren't I</b>.</p>`,
      q: ["It's a nice day, ___?|isn't it|is it|doesn't it", "You like her, ___?|don't you|do you|aren't you", "She can't come, ___?|can she|can't she|does she", "They broke up, ___?|didn't they|did they|weren't they", "He is your cousin, ___?|isn't he|is he|doesn't he", "You haven't met him, ___?|have you|haven't you|did you"] }
  ],
  sent: ["She is such a kind person.|Je to tak laskavý člověk.", "I was so tired that I fell asleep.|Byl jsem tak unavený, že jsem usnul.", "Both my sisters are married.|Obě moje sestry jsou vdané.", "Neither of them was at home.|Ani jeden z nich nebyl doma.", "It's a nice day, isn't it?|Je hezký den, že?", "You like her, don't you?|Líbí se ti, že jo?", "They have known each other for years.|Znají se už léta.", "I get on well with my cousin.|S bratrancem vycházím dobře.", "He apologised and she forgave him.|Omluvil se a ona mu odpustila.", "I am really proud of you.|Jsem na tebe opravdu hrdý.", "They broke up last month.|Minulý měsíc se rozešli.", "We can either walk or take a taxi.|Můžeme jít buď pěšky, nebo si vzít taxi."],
  pron: { t: "Intonace dovětků", h: `<p>U dovětku rozhoduje melodie. Když hlas <b>klesá</b>, jen čekáš souhlas: <i>It's cold, isn't it?</i> ↘. Když hlas <b>stoupá</b>, opravdu se ptáš: <i>You're from Prague, aren't you?</i> ↗.</p><p>Slovo <i>either</i> se čte „ajdr“ (britsky) nebo „ídr“ (americky), obojí je správně.</p>`, w: ["isn't it|iznt it", "don't you|dounčú", "either|ajdr", "neither|najdr", "each other|íč adr"] },
  dlg: [
    ["Drby", "Tom and Jane broke up, didn't they?|Tom a Jana se rozešli, že?", "Yes. It's such a pity.|Ano. Je to taková škoda.", "They were so happy together.|Byli spolu tak šťastní.", "I know. Neither of them wants to talk about it.|Já vím. Ani jeden o tom nechce mluvit.", "Should we call them?|Měli bychom jim zavolat?", "Yes, both of them need support.|Ano, oba potřebují podporu."],
    ["Omluva", "You are still angry with me, aren't you?|Pořád se na mě zlobíš, že?", "A bit. You ignored my messages.|Trochu. Ignoroval jsi moje zprávy.", "I'm really sorry. I was so busy.|Moc mě to mrzí. Měl jsem tolik práce.", "You could either call or write.|Mohl jsi buď zavolat, nebo napsat.", "You are right. Can you forgive me?|Máš pravdu. Můžeš mi odpustit?", "OK. But don't do it again.|Dobře. Ale už to nedělej."]
  ]
},
{
  t: "Vyprávíme příběh", s: "Spojky, pořadí dějů a shrnutí úrovně A2",
  groups: [
    ["Spojky", ["although|ačkoli|óldou", "however|avšak|hauevr", "because of|kvůli|bikóz ov", "so that|aby|sou det", "instead|místo toho|insted", "therefore|proto|dérfór", "even|dokonce|ívn", "except|kromě|iksept"]],
    ["Pořadí dějů", ["at first|zpočátku|et férst", "afterwards|poté|áftrwrdz", "suddenly|najednou|sadnli", "in the end|nakonec|in dý end", "meanwhile|mezitím|mínwajl", "during|během|djúring", "by the time|než, v době kdy|baj d tajm", "eventually|nakonec, časem|ivenčueli"]],
    ["V příběhu", ["hero|hrdina|hírou", "secret|tajemství|síkrit", "adventure|dobrodružství|edvenčr", "danger|nebezpečí|dejndžr", "luck|štěstí (náhoda)|lak", "surprise|překvapení|sprajz", "truth|pravda|trúth", "lie|lež, lhát|laj"]],
    ["Co se dělo", ["shout|křičet|šaut", "whisper|šeptat|wispr", "notice|všimnout si|noutys", "realise|uvědomit si|rielajz", "escape|utéct|iskejp", "steal|ukrást|stíl", "knock|zaklepat|nok", "fall|spadnout|fól"]],
    ["Další minulé tvary", ["fell|spadl (fall)|fel", "heard|slyšel (hear)|hérd", "kept|nechal si, držel (keep)|kept", "stood|stál (stand)|stud", "brought|přinesl (bring)|brót", "caught|chytil (catch)|kót", "threw|hodil (throw)|thrú", "hid|schoval (hide)|hid"]],
    ["Názor na příběh", ["amazing|úžasný|emejzing", "terrible|hrozný|teribl", "strange|zvláštní|strejndž", "scary|strašidelný|skéri", "exciting|vzrušující|iksajtyng", "true|pravdivý|trú", "ending|konec (příběhu)|endyng", "character|postava|kerektr"]]
  ],
  grammar: [
    { t: "although, however, because of",
      h: `<p>Tři spojky, které Češi často pletou:</p>
<ul class="ex"><li><b>although</b> + věta (ačkoli): <b>Although</b> it was raining, we went out.</li><li><b>However,</b> na začátku nové věty (avšak): It was raining. <b>However,</b> we went out.</li><li><b>because of</b> + podstatné jméno (kvůli): We stayed at home <b>because of</b> the rain.</li><li><b>because</b> + věta: We stayed at home <b>because</b> it was raining.</li></ul>`,
      q: ["___ it was late, we continued.|Although|However|Because of", "We stayed at home ___ the rain.|because of|because|although", "It was expensive. ___, I bought it.|However|Although|Because", "I was late ___ I missed the bus.|because|because of|however", "___ he was tired, he helped me.|Although|Because of|However", "The match was cancelled ___ the storm.|because of|because|although"] },
    { t: "before, after, while, during",
      h: `<p><b>before</b> a <b>after</b> mohou stát před větou, podstatným jménem i slovesem s -ing.</p>
<p class="ex"><b>After</b> we ate, we went out. · <b>after</b> dinner · <b>After eating</b>, we went out.</p>
<p>Pozor na dvojici <b>while</b> × <b>during</b>:</p>
<ul class="ex"><li><b>while</b> + věta: <b>while</b> I was sleeping</li><li><b>during</b> + podstatné jméno: <b>during</b> the night, <b>during</b> the film</li></ul>`,
      q: ["I fell asleep ___ the film.|during|while|after that", "___ I was sleeping, somebody knocked.|While|During|By", "Wash your hands before ___.|eating|eat|to eating", "___ dinner we watched a film.|After|While|Afterwards that", "She called me ___ I was driving.|while|during|for", "___ the holidays I read three books.|During|While|When that"] },
    { t: "Vyprávění: tři minulé tvary pohromadě",
      h: `<p>Při vyprávění střídáš tři nástroje:</p>
<ul class="ex"><li><b>minulý prostý</b> pro události za sebou: I <b>opened</b> the door and <b>saw</b> him.</li><li><b>minulý průběhový</b> pro pozadí: It <b>was raining</b> and people <b>were running</b>.</li><li><b>used to</b> pro to, co bývalo: We <b>used to</b> meet there every day.</li></ul>
<p>Děj rozčleníš slovy <b>at first, then, suddenly, afterwards, in the end</b>.</p>`,
      q: ["It ___ when I left the house.|was raining|rained being|is raining", "I opened the door and ___ a stranger.|saw|was seeing|see", "___, somebody shouted.|Suddenly|Sudden|At sudden", "We ___ meet there every day when we were young.|used to|were used|use to", "While she ___, she heard a noise.|was reading|read|reads", "___ the end, everything was fine.|In|At|On"] }
  ],
  sent: ["Although it was raining, we went out.|Ačkoli pršelo, šli jsme ven.", "We stayed at home because of the rain.|Kvůli dešti jsme zůstali doma.", "Suddenly, somebody knocked on the door.|Najednou někdo zaklepal na dveře.", "I fell asleep during the film.|Během filmu jsem usnul.", "At first I didn't notice anything.|Zpočátku jsem si ničeho nevšiml.", "In the end, everything was fine.|Nakonec bylo všechno v pořádku.", "She realised that it was a lie.|Uvědomila si, že je to lež.", "He heard a strange noise.|Uslyšel zvláštní zvuk.", "It was the most amazing day.|Byl to ten nejúžasnější den.", "After eating, we went for a walk.|Po jídle jsme šli na procházku.", "Tell me the truth.|Řekni mi pravdu.", "While I was sleeping, he escaped.|Zatímco jsem spal, utekl."],
  pron: { t: "Minulé tvary s dlouhým ó", h: `<p>Skupina písmen <b>ought</b> a <b>aught</b> se čte „ót“, gh je němé. Platí to pro <i>brought, bought, thought, caught, taught</i>.</p><p><i>heard</i> se čte „hérd“, ne „hírd“. <i>although</i> = „óldou“.</p>`, w: ["brought|brót", "caught|kót", "heard|hérd", "although|óldou", "threw|thrú"] },
  dlg: [
    ["Co se ti stalo", "You won't believe what happened yesterday.|Nebudeš věřit, co se včera stalo.", "Tell me!|Povídej!", "I was walking home when I heard a strange noise.|Šel jsem domů, když jsem uslyšel zvláštní zvuk.", "Were you scared?|Bál ses?", "At first, yes. Then I noticed a small cat.|Zpočátku ano. Potom jsem si všiml malé kočky.", "So what did you do in the end?|A co jsi nakonec udělal?"],
    ["Film", "How was the film?|Jaký byl film?", "Amazing, although the ending was strange.|Úžasný, i když konec byl zvláštní.", "Was it scary?|Byl strašidelný?", "A bit. I closed my eyes during one scene.|Trochu. Při jedné scéně jsem zavřel oči.", "Who was your favourite character?|Kdo byla tvoje oblíbená postava?", "The hero's sister. She was so brave.|Hrdinova sestra. Byla tak statečná."]
  ]
}
);
