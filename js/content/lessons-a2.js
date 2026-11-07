/* Italiano con Luke — A2 Elementary course */
window.IT_LESSONS = window.IT_LESSONS || {};
IT_LESSONS.A2 = [
{
id:"a2-01", t:"What Did You Do? Passato Prossimo with Avere", s:"regular and irregular participles", img:"rome",
goal:"Tell detailed stories about completed past events using avere and the most common irregular participles.",
teach:[
["How it is built","The passato prossimo = present of **avere** (or essere) + **past participle**. It describes **completed actions** in the past, whether recent or not: *Ieri ho lavorato fino alle otto. Nel 2019 ho visitato Venezia.* In northern Italy it is also used where the south often prefers the passato remoto."],
["Most verbs use avere","All **transitive** verbs (verbs that can take a direct object: mangiare qualcosa, vedere qualcuno) use avere: *ho comprato, hai letto, abbiamo visto*. Many intransitive verbs also use avere: *ho dormito, ho camminato, ho viaggiato, ho riso, ho pianto, ho lavorato*. With avere the participle does **not** agree with the subject: *Giulia ha mangiato*."],
["Irregular participles you need","Many common -ere verbs are irregular. Learn them in families: **-so**: *preso (prendere), messo (mettere), chiuso (chiudere), deciso (decidere), speso (spendere), perso (perdere)*. **-tto**: *fatto (fare), detto (dire), letto (leggere), scritto (scrivere), rotto (rompere), tradotto (tradurre)*. **-sto**: *visto (vedere), chiesto (chiedere), risposto (rispondere), rimasto (rimanere)*. **-rto**: *aperto (aprire), offerto (offrire), scoperto (scoprire)*. Others: *bevuto (bere), vinto (vincere), conosciuto (conoscere), vissuto (vivere)*."],
["Word order with adverbs","Short adverbs like **già, mai, ancora, appena, sempre, più** go between avere and the participle: *Ho già mangiato. Non ho mai visto Napoli. Non ho ancora finito. Ho appena finito* (I've just finished). *Non ho più fumato* (I haven't smoked since)."]
],
tb:[{cap:"Common irregular past participles",h:["Infinitive","Participle","Example"],r:[["fare","fatto","Ho fatto una foto."],["prendere","preso","Abbiamo preso il treno."],["vedere","visto","Hai visto il film?"],["leggere","letto","Ho letto il giornale."],["scrivere","scritto","Ha scritto una mail."],["dire","detto","Cosa hai detto?"],["aprire","aperto","Chi ha aperto la finestra?"],["chiedere","chiesto","Ho chiesto il conto."],["rispondere","risposto","Non ha risposto."],["bere","bevuto","Abbiamo bevuto un caffè."],["mettere","messo","Dove hai messo le chiavi?"],["spendere","speso","Ho speso troppo."]]}],
ex:[["Ieri sera abbiamo mangiato in una trattoria a Trastevere.","Last night we ate at a trattoria in Trastevere."],["Hai già prenotato l'albergo?","Have you already booked the hotel?"],["Non ho ancora visto il Colosseo di notte.","I haven't seen the Colosseum at night yet."],["Chi ha preso le mie chiavi?","Who took my keys?"],["Ho speso cento euro in scarpe!","I spent a hundred euros on shoes!"],["Il cameriere ci ha offerto un limoncello.","The waiter offered us a limoncello."],["Abbiamo camminato tutto il giorno.","We walked all day."],["Non hai mai letto un libro di Calvino?","Have you never read a book by Calvino?"]],
err:[["Ho prenduto il treno.","Ho preso il treno.","Prendere has an irregular participle: preso."],["Ho visto già il film.","Ho già visto il film.","Già goes between the auxiliary and the participle."],["Giulia ha mangiata la pizza.","Giulia ha mangiato la pizza.","With avere, the participle does not agree with the subject."]],
voc:[["ieri sera","last night"],["l'altro ieri","the day before yesterday"],["già","already"],["non… ancora","not yet"],["appena","just (a moment ago)"],["non… mai","never"],["non… più","no longer"],["finalmente","finally"],["spendere","to spend (money)"],["perdere","to lose; to miss"],["offrire","to offer; to treat"],["scoprire","to discover"],["camminare","to walk"],["la trattoria","family-run restaurant"],["il fine settimana","weekend"],["la gita","trip, outing"]],
dia:[["Giulia","Allora, com'è andato il weekend?","So, how did the weekend go?"],["Luke","Benissimo! Ho visitato i Musei Vaticani e ho visto la Cappella Sistina.","Great! I visited the Vatican Museums and saw the Sistine Chapel."],["Giulia","E hai fatto la fila per ore?","And did you queue for hours?"],["Luke","No, ho prenotato il biglietto online. Poi ho mangiato una carbonara fantastica.","No, I booked the ticket online. Then I ate a fantastic carbonara."],["Giulia","Hai già provato la cacio e pepe?","Have you already tried cacio e pepe?"],["Luke","Non ancora! Stasera?","Not yet! Tonight?"]],
q:[
{t:"mc",q:"Dove hai ___ il passaporto? (mettere)",o:["messo","mettuto","metto","mettato"],w:"Mettere has the irregular participle messo."},
{t:"mc",q:"Choose the correct sentence.",o:["Non ho ancora finito.","Non ho finito ancora mai.","Non ancora ho finito.","Ho non ancora finito."],w:"Non goes before the auxiliary; ancora goes between auxiliary and participle."},
{t:"mc",q:"Ieri Marco ___ un libro di Eco.",o:["ha letto","è letto","ha leggiuto","ha leggito"],w:"Leggere uses avere; participle letto."},
{t:"mc",q:"Who opened the door? — Chi ___ la porta?",o:["ha aperto","ha aprito","è aperto","ha aperta"],w:"Aprire → aperto, with avere."},
{t:"mc",q:"'I've just finished' is:",o:["Ho appena finito.","Ho finito appena ora.","Ho già finire.","Appena ho finito."],w:"Appena between auxiliary and participle means 'just'."},
{t:"fill",q:"Abbiamo ___ troppo al ristorante. (spendere)",a:["speso"],w:"Spendere → speso.",h:"irregular -so"},
{t:"fill",q:"Cosa ___ detto il medico? (avere, lui)",a:["ha"],w:"Il medico = lui → ha detto.",h:"auxiliary"},
{t:"order",a:"Hai già prenotato l'albergo?",en:"Have you already booked the hotel?"}
]},
{
id:"a2-02", t:"Movement & Change: Passato Prossimo with Essere", s:"sono andato, è nata, siamo partiti", img:"venice",
goal:"Choose essere as the auxiliary for movement and change verbs and make the participle agree.",
teach:[
["Which verbs take essere","Use **essere** with: verbs of **movement from A to B** (*andare, venire, arrivare, partire, tornare, entrare, uscire, salire, scendere, cadere*), verbs of **staying** (*restare, rimanere, stare*), verbs of **change of state** (*diventare, nascere, morire, crescere*), **essere** itself, verbs like **piacere, sembrare, succedere, costare, durare**, and all **reflexive** verbs."],
["Agreement is compulsory","With essere the participle behaves like an adjective: **-o / -a / -i / -e**. *Luke è partito. Giulia è partita. Luke e Marco sono partiti. Giulia e Anna sono partite.* For a mixed group, use **-i**. With **Lei** (formal you), agree with the real person: *Signora, è arrivata bene?*"],
["Movement without a destination","Some movement verbs use **avere** because they describe the activity itself, not going from A to B: *ho camminato, ho viaggiato, ho nuotato, ho ballato, ho guidato*. Compare: *Ho camminato per due ore* vs *Sono andato al mare*."],
["Verbs with both auxiliaries","**Cominciare, finire, passare, salire, scendere** use **avere** when they have a direct object and **essere** when they don't: *Ho finito il lavoro* but *Il film è finito*. *Ho salito le scale* but *Sono salito sul treno*. *Abbiamo passato una bella serata* but *Siamo passati da Firenze*."]
],
tb:[{cap:"Andare in the passato prossimo",h:["Person","Masculine","Feminine"],r:[["io","sono andato","sono andata"],["tu","sei andato","sei andata"],["lui / lei","è andato","è andata"],["noi","siamo andati","siamo andate"],["voi","siete andati","siete andate"],["loro","sono andati","sono andate"]]}],
ex:[["Siamo arrivati a Venezia con il treno delle dieci.","We arrived in Venice on the ten o'clock train."],["Giulia è nata a Bologna nel 1995.","Giulia was born in Bologna in 1995."],["I miei genitori sono venuti a trovarmi.","My parents came to visit me."],["Le ragazze sono uscite alle otto.","The girls went out at eight."],["Il concerto è cominciato in ritardo.","The concert started late."],["Quanto è costato il biglietto?","How much did the ticket cost?"],["Sei mai stata in Sicilia, Anna?","Have you ever been to Sicily, Anna?"],["Ti è piaciuta la gita a Burano?","Did you like the trip to Burano?"]],
err:[["Ho andato al mare.","Sono andato al mare.","Andare is a movement verb: essere."],["Anna è tornato.","Anna è tornata.","The participle agrees with Anna (feminine)."],["Il film ha finito alle dieci.","Il film è finito alle dieci.","Without a direct object, finire takes essere."]],
voc:[["partire","to leave"],["arrivare","to arrive"],["tornare","to return"],["salire","to go up; to get on"],["scendere","to go down; to get off"],["cadere","to fall"],["restare","to stay"],["diventare","to become"],["nascere","to be born"],["morire","to die"],["succedere","to happen"],["durare","to last"],["sembrare","to seem"],["il binario","platform"],["in ritardo","late"],["la coincidenza","connection (transport)"]],
dia:[["Marco","Luke! Quando sei tornato da Venezia?","Luke! When did you come back from Venice?"],["Luke","Sono tornato ieri sera. Giulia invece è rimasta lì un altro giorno.","I came back last night. Giulia, on the other hand, stayed there another day."],["Marco","Vi è piaciuta la città?","Did you like the city?"],["Luke","Moltissimo! Siamo andati anche a Murano e a Burano.","Very much! We also went to Murano and Burano."],["Marco","E com'è andato il viaggio in treno?","And how did the train journey go?"],["Luke","Il treno è partito in ritardo, ma siamo arrivati in tempo per cena.","The train left late, but we arrived in time for dinner."]],
q:[
{t:"mc",q:"Le mie amiche ___ a Milano.",o:["sono andate","hanno andato","sono andati","sono andata"],w:"Andare → essere; feminine plural → andate."},
{t:"mc",q:"Ieri ___ per tre ore. (camminare)",o:["ho camminato","sono camminato","sono camminata","ho camminata"],w:"Camminare describes an activity, not going from A to B: avere."},
{t:"mc",q:"Il film ___ alle undici.",o:["è finito","ha finito","è finita","hanno finito"],w:"Without an object, finire takes essere; il film is masculine singular."},
{t:"mc",q:"Signora Rossi, quando ___ ?",o:["è arrivata","ha arrivato","è arrivato","sei arrivata"],w:"Formal Lei with a woman: è arrivata."},
{t:"mc",q:"Ti ___ il museo? (piacere)",o:["è piaciuto","ha piaciuto","è piaciuta","sei piaciuto"],w:"Piacere takes essere and agrees with the thing liked: il museo → piaciuto."},
{t:"fill",q:"Luke e Giulia sono ___ alle sei. (partire)",a:["partiti"],w:"Mixed group → masculine plural: partiti.",h:"agreement"},
{t:"fill",q:"Mia nonna è ___ nel 1940. (nascere)",a:["nata"],w:"Nascere → nato; feminine: nata.",h:"irregular participle"},
{t:"order",a:"Siamo arrivati a Venezia con il treno delle dieci.",en:"We arrived in Venice on the ten o'clock train."}
]},
{
id:"a2-03", t:"Reflexive & Modal Verbs in the Past", s:"mi sono svegliato, ho dovuto, sono dovuto partire", img:"amalfi",
goal:"Talk about your past routine with reflexive verbs and say what you had to, could or wanted to do.",
teach:[
["Reflexive verbs always take essere","In the passato prossimo every reflexive verb uses **essere**, and the participle agrees with the subject: *Mi sono svegliato alle sette* (Luke) / *Mi sono svegliata* (Giulia). *Ci siamo divertiti molto. Le ragazze si sono preparate in fretta.* The pronoun comes first: **mi sono, ti sei, si è, ci siamo, vi siete, si sono**."],
["Reciprocal verbs","*Ci siamo conosciuti a Roma* (We met each other in Rome). *Si sono sposati nel 2020* (They got married). *Vi siete visti ieri?* These follow the same rule: essere + agreement."],
["Modal verbs in the past","**Dovere, potere, volere** take the auxiliary of the **infinitive that follows**: *Ho dovuto lavorare* (lavorare → avere) but *Sono dovuto partire* (partire → essere). In everyday speech many Italians use avere in both cases, so you'll hear *Ho dovuto partire* too; essere is the more careful choice."],
["Passato prossimo or imperfetto with modals?","*Ho dovuto prendere un taxi* = I had to and I did. *Dovevo prendere un taxi* = I was supposed to (we don't know if I did, or I didn't). *Non sono potuto venire* = I couldn't come (and didn't)."]
],
tb:[{cap:"Svegliarsi in the past",h:["Person","Form (m / f)"],r:[["io","mi sono svegliato / svegliata"],["tu","ti sei svegliato / svegliata"],["lui / lei","si è svegliato / svegliata"],["noi","ci siamo svegliati / svegliate"],["voi","vi siete svegliati / svegliate"],["loro","si sono svegliati / svegliate"]]}],
ex:[["Stamattina mi sono svegliato tardi.","This morning I woke up late."],["Ci siamo divertiti moltissimo alla festa.","We had a great time at the party."],["Giulia si è vestita di rosso.","Giulia dressed in red."],["Come vi siete conosciuti?","How did you meet?"],["Non sono potuto venire perché stavo male.","I couldn't come because I was ill."],["Abbiamo dovuto cambiare treno a Bologna.","We had to change trains in Bologna."],["Si sono sposati a Positano.","They got married in Positano."],["Ho voluto vedere il tramonto dalla spiaggia.","I wanted to see the sunset from the beach."]],
err:[["Mi ho svegliato.","Mi sono svegliato.","Reflexive verbs always take essere."],["Giulia si è preparato.","Giulia si è preparata.","Agreement with the subject."],["Sono dovuto lavorare.","Ho dovuto lavorare.","Lavorare takes avere, so the modal does too."]],
voc:[["svegliarsi","to wake up"],["addormentarsi","to fall asleep"],["sposarsi","to get married"],["conoscersi","to meet (for the first time)"],["incontrarsi","to meet up"],["perdersi","to get lost"],["fermarsi","to stop"],["innamorarsi","to fall in love"],["lamentarsi","to complain"],["arrabbiarsi","to get angry"],["annoiarsi","to get bored"],["trasferirsi","to move (house, city)"],["il tramonto","sunset"],["l'alba","dawn"],["di corsa","in a rush"],["stare male","to be unwell"]],
dia:[["Sara","Com'è andata la vacanza in Costiera?","How did the holiday on the Coast go?"],["Luke","Bellissima! Il primo giorno ci siamo persi a Positano.","Wonderful! On the first day we got lost in Positano."],["Sara","Davvero? E vi siete arrabbiati?","Really? And did you get angry?"],["Luke","No, ci siamo fermati in un bar e ci siamo rilassati. Poi abbiamo dovuto prendere un taxi.","No, we stopped at a bar and relaxed. Then we had to take a taxi."]],
q:[
{t:"mc",q:"Le ragazze ___ alle sette.",o:["si sono alzate","si hanno alzato","si sono alzati","hanno alzate"],w:"Reflexive → essere; feminine plural → alzate."},
{t:"mc",q:"Ieri noi ___ molto. (divertirsi)",o:["ci siamo divertiti","ci abbiamo divertito","si siamo divertiti","siamo divertiti"],w:"Noi → ci siamo + agreement."},
{t:"mc",q:"I couldn't come (and didn't).",o:["Non sono potuto venire.","Non potevo venire stato.","Non ho potere venire.","Non sono potere venuto."],w:"Potere in the passato prossimo + infinitive; venire takes essere."},
{t:"mc",q:"Choose the correct sentence (Giulia speaking):",o:["Mi sono addormentata sul divano.","Mi sono addormentato sul divano.","Mi ho addormentata sul divano.","Sono addormentata mi sul divano."],w:"Giulia → feminine: addormentata."},
{t:"mc",q:"'We had to change trains' (and we did):",o:["Abbiamo dovuto cambiare treno.","Dovevamo cambiato treno.","Siamo dovuti cambiare treno.","Abbiamo cambiare dovuto treno."],w:"Cambiare takes avere → abbiamo dovuto cambiare."},
{t:"fill",q:"Come vi siete ___ ? (conoscersi — Luke e Giulia)",a:["conosciuti"],w:"Conoscere → conosciuto; mixed couple → conosciuti.",h:"agreement"},
{t:"fill",q:"Marco ___ è perso a Venezia.",a:["si"],w:"Perdersi: lui → si è perso.",h:"pronoun"},
{t:"order",a:"Ci siamo divertiti moltissimo alla festa.",en:"We had a great time at the party."}
]},
{
id:"a2-04", t:"When I Was Young: The Imperfetto", s:"forms and uses", img:"tuscany",
goal:"Describe how things were and what used to happen in the past.",
teach:[
["Forms: almost always regular","Remove **-re** from the infinitive and add **-vo, -vi, -va, -vamo, -vate, -vano**: *parlare → parlavo*, *leggere → leggevo*, *dormire → dormivo*. Stress: *par-LA-vo, par-la-VA-mo, par-LA-va-no* — never on the very last syllable."],
["Very few irregulars","**Essere**: *ero, eri, era, eravamo, eravate, erano*. Verbs from Latin long forms: **fare → facevo**, **dire → dicevo**, **bere → bevevo**, **tradurre → traducevo**, **porre → ponevo**."],
["Use 1: habits in the past","The imperfetto describes what you **used to do**: *Da bambino andavo al mare ogni estate.* Typical signals: **sempre, di solito, ogni giorno / estate, spesso, da piccolo, una volta (formerly)**."],
["Use 2: descriptions and background","It paints the **scene**: time, weather, age, feelings, physical and mental states: *Era tardi, pioveva e io ero stanco. Avevo dieci anni.* It also describes **ongoing actions** at a moment in the past: *Alle nove dormivo* (At nine I was sleeping)."],
["Use 3: two actions in parallel","Two ongoing actions at the same time, linked by **mentre** (while): *Mentre cucinavo, Giulia apparecchiava la tavola.* Polite requests also use it: *Volevo un'informazione* (I wanted / I'd like some information)."]
],
tb:[{cap:"Imperfetto",h:["Person","parlare","avere","dormire","essere","fare"],r:[["io","parlavo","avevo","dormivo","ero","facevo"],["tu","parlavi","avevi","dormivi","eri","facevi"],["lui/lei","parlava","aveva","dormiva","era","faceva"],["noi","parlavamo","avevamo","dormivamo","eravamo","facevamo"],["voi","parlavate","avevate","dormivate","eravate","facevate"],["loro","parlavano","avevano","dormivano","erano","facevano"]]}],
ex:[["Da bambino passavo le estati dai nonni in Toscana.","As a child I spent my summers at my grandparents' in Tuscany."],["La casa era grande e aveva un giardino pieno di ulivi.","The house was big and had a garden full of olive trees."],["Ogni mattina il nonno faceva il pane.","Every morning grandpa made bread."],["Faceva caldo e il cielo era azzurro.","It was hot and the sky was blue."],["Mentre leggevo, mia sorella guardava la TV.","While I was reading, my sister was watching TV."],["Quando avevo vent'anni, abitavo a Londra.","When I was twenty, I lived in London."],["Buongiorno, volevo sapere gli orari del museo.","Good morning, I wanted to know the museum's opening times."],["Una volta qui c'era un cinema.","There used to be a cinema here."]],
err:[["Quando ero bambino, sono andato al mare ogni estate.","Quando ero bambino, andavo al mare ogni estate.","Repeated habits in the past use the imperfetto."],["Io facco / Io favo","Io facevo","Fare uses the long stem fac-: facevo."],["Ieri è stato bel tempo e il sole ha brillato.","Ieri faceva bel tempo e il sole brillava.","Weather as background description → imperfetto."]],
voc:[["da bambino / da piccolo","as a child"],["una volta","once; formerly"],["ogni estate","every summer"],["mentre","while"],["di solito","usually"],["l'ulivo","olive tree"],["il giardino","garden"],["la campagna","countryside"],["il paese","village; country"],["i nonni","grandparents"],["giocare","to play"],["raccontare","to tell (a story)"],["piovere","to rain"],["nevicare","to snow"],["timido","shy"],["felice","happy"]],
dia:[["Luke","Nonna Pina, com'era la vita qui quando eri giovane?","Grandma Pina, what was life like here when you were young?"],["Nonna Pina","Era semplice. Non c'erano macchine e tutti andavano a piedi.","It was simple. There were no cars and everyone walked."],["Luke","E cosa facevate la sera?","And what did you do in the evenings?"],["Nonna Pina","Ci sedevamo in piazza, i vecchi raccontavano storie e noi bambini giocavamo.","We sat in the square, the old people told stories and we children played."]],
q:[
{t:"mc",q:"Da piccola, Giulia ___ molto timida.",o:["era","è stata","sarà","fu stata"],w:"Description of character in the past → imperfetto: era."},
{t:"mc",q:"Ogni domenica noi ___ dai nonni.",o:["pranzavamo","abbiamo pranzato una volta","pranziamo","pranzeremo"],w:"Repeated habit → imperfetto."},
{t:"mc",q:"Imperfetto of fare, tu form:",o:["facevi","favi","fai","facessi"],w:"Fare → fac- + evi: facevi."},
{t:"mc",q:"Mentre io ___, il telefono ha squillato.",o:["dormivo","ho dormito","dormo","dormirò"],w:"The ongoing background action → imperfetto."},
{t:"mc",q:"Politely: 'I'd like some information.'",o:["Volevo un'informazione.","Ho voluto un'informazione.","Voglio un'informazione subito.","Vorrò un'informazione."],w:"The imperfetto of volere is a polite way of asking."},
{t:"fill",q:"Quando avevo dieci anni, ___ a Chicago. (abitare, io)",a:["abitavo"],w:"Background situation → abitavo.",h:"-avo"},
{t:"fill",q:"Ieri sera ___ freddo. (fare)",a:["faceva"],w:"Weather description → faceva.",h:"fac-"},
{t:"order",a:"Da bambino passavo le estati dai nonni in Toscana.",en:"As a child I spent my summers at my grandparents' in Tuscany."}
]},
{
id:"a2-05", t:"Telling a Story: Imperfetto vs Passato Prossimo", s:"background vs events", img:"florence",
goal:"Combine the two past tenses naturally to tell a story with scenery and events.",
teach:[
["The stage and the actors","Think of a film. The **imperfetto** is the **set**: what was going on, how things were. The **passato prossimo** is the **plot**: single, completed events that move the story forward. *Pioveva (set) quando è arrivato il treno (event).*"],
["Interrupted actions","An ongoing action (imperfetto) is interrupted by a new event (passato prossimo): *Mentre camminavo per Firenze, ho incontrato un vecchio amico. Stavo per uscire quando ha telefonato Marco.*"],
["Defined vs undefined time","A precise duration or number of times means the action is complete: **passato prossimo**: *Ho abitato a Roma per tre anni. Sono andato in Italia cinque volte.* Without limits, as a habit or description: **imperfetto**: *Abitavo a Roma e lavoravo in un bar.*"],
["Verbs that change meaning","Some verbs change meaning: **conoscere** — *conoscevo Marco* (I knew him) vs *ho conosciuto Marco* (I met him). **Sapere** — *sapevo la verità* (I knew) vs *ho saputo la verità* (I found out). **Dovere** — *dovevo partire* (I was supposed to) vs *sono dovuto partire* (I had to and did)."]
],
tb:[{cap:"Which tense?",h:["Imperfetto","Passato prossimo"],r:[["description, background, weather","single completed events"],["habits (sempre, ogni giorno)","specific times (ieri, una volta, tre volte)"],["ongoing action (mentre…)","new action that interrupts"],["age, time, feelings","defined duration (per due anni)"],["conoscevo = I knew","ho conosciuto = I met"]]}],
ex:[["Era una bella giornata e il sole splendeva quando siamo arrivati a Firenze.","It was a beautiful day and the sun was shining when we arrived in Florence."],["Mentre guardavo il Ponte Vecchio, qualcuno mi ha rubato il portafoglio!","While I was looking at the Ponte Vecchio, someone stole my wallet!"],["Ero molto preoccupato, così sono andato dalla polizia.","I was very worried, so I went to the police."],["Il poliziotto era gentile e mi ha aiutato.","The police officer was kind and helped me."],["Ho abitato a Milano per due anni.","I lived in Milan for two years."],["Conoscevo già Giulia, ma ho conosciuto suo fratello solo ieri.","I already knew Giulia, but I met her brother only yesterday."],["Dovevo partire lunedì, ma ho perso il treno.","I was supposed to leave on Monday, but I missed the train."],["Quando ho saputo la notizia, ero in ufficio.","When I heard the news, I was at the office."]],
err:[["Mentre ho cucinato, è arrivato Marco.","Mentre cucinavo, è arrivato Marco.","The ongoing background action uses the imperfetto."],["Abitavo a Roma per tre anni.","Ho abitato a Roma per tre anni.","A defined, finished period uses the passato prossimo."],["Ieri ho conosciuto la risposta.","Ieri ho saputo la risposta.","Knowing / finding out a fact is sapere, not conoscere."]],
voc:[["all'improvviso","suddenly"],["mentre","while"],["quando","when"],["così","so"],["poi","then"],["alla fine","in the end"],["rubare","to steal"],["il portafoglio","wallet"],["la polizia","police"],["la denuncia","police report"],["preoccupato","worried"],["sorpreso","surprised"],["squillare","to ring"],["la notizia","the news"],["succedere","to happen"],["per fortuna","luckily"]],
dia:[["Giulia","Cosa ti è successo? Sei pallido!","What happened to you? You're pale!"],["Luke","Mentre facevo una foto in piazza, un ragazzo ha preso il mio portafoglio!","While I was taking a photo in the square, a guy took my wallet!"],["Giulia","Che brutto! E cosa hai fatto?","How awful! And what did you do?"],["Luke","Ho gridato e un signore che passava l'ha fermato. Per fortuna c'era un vigile vicino.","I shouted and a man who was passing stopped him. Luckily there was a traffic officer nearby."]],
q:[
{t:"mc",q:"Mentre ___ la doccia, è suonato il campanello.",o:["facevo","ho fatto","faccio","farò"],w:"The ongoing action interrupted by an event → imperfetto."},
{t:"mc",q:"Sono stato a Firenze tre volte. Why passato prossimo?",o:["The number of times is specified.","It is a description.","It is a habit without limits.","It describes the weather."],w:"Counted, completed events use the passato prossimo."},
{t:"mc",q:"'I met Marco at a party' =",o:["Ho conosciuto Marco a una festa.","Conoscevo Marco a una festa.","Sapevo Marco a una festa.","Ho saputo Marco a una festa."],w:"Meeting someone for the first time: passato prossimo of conoscere."},
{t:"mc",q:"Quando ___ piccolo, ___ in campagna.",o:["ero / vivevo","sono stato / ho vissuto","ero / ho vissuto una volta","fui / vivevo"],w:"Age and long-term situations in childhood: imperfetto for both."},
{t:"mc",q:"Ieri ___ freddo, così ___ il cappotto.",o:["faceva / ho messo","ha fatto / mettevo","faceva / mettevo","ha fatto / ho messo"],w:"Weather = background (faceva); putting on the coat = event (ho messo)."},
{t:"fill",q:"Ho ___ a Londra per cinque anni. (abitare)",a:["abitato"],w:"A closed period → passato prossimo: ho abitato.",h:"participle"},
{t:"fill",q:"___ le otto quando siamo usciti. (essere)",a:["erano"],w:"Time as background → erano le otto.",h:"imperfetto, plural"},
{t:"order",a:"Mentre guardavo il Ponte Vecchio, qualcuno mi ha rubato il portafoglio!",en:"While I was looking at the Ponte Vecchio, someone stole my wallet!"}
]},
{
id:"a2-06", t:"Lo, La, Li, Le: Direct Object Pronouns", s:"replacing objects", img:"milan",
goal:"Replace direct objects with pronouns, place them correctly and make past participles agree.",
teach:[
["What they replace","Direct object pronouns replace a noun that receives the action directly (no preposition): *Compro il giornale → Lo compro.* The forms: **mi, ti, lo (him/it), la (her/it), La (you, formal), ci, vi, li (them, m.), le (them, f.)**."],
["Position","They go **before the conjugated verb**: *La chiamo domani.* With an infinitive they attach to the end (dropping the final -e): *Voglio chiamarla* = *La voglio chiamare.* They also attach to **ecco**: *Eccolo!* (Here it is!) and to informal imperatives: *Mangialo!*"],
["Agreement in the passato prossimo","When **lo, la, li, le** come before avere, the participle **agrees** with the pronoun: *Hai visto Giulia? Sì, l'ho vista. Hai comprato i biglietti? Sì, li ho comprati. Le chiavi? Le ho prese io.* Lo and la become **l'** before a vowel or h: *l'ho visto*. Li and le never shorten."],
["Lo for whole ideas","**Lo** can replace a whole sentence or idea: *Sai dov'è la stazione? — No, non lo so.* *Lo so!* (I know!) *Te l'avevo detto* (I told you so)."]
],
tb:[{cap:"Direct object pronouns",h:["Pronoun","Meaning","Example"],r:[["mi","me","Mi senti?"],["ti","you","Ti aspetto qui."],["lo","him / it (m)","Il libro? Lo leggo stasera."],["la / La","her / it (f) / you (formal)","La pizza? La ordino io. ArrivederLa!"],["ci","us","Ci accompagni?"],["vi","you (pl)","Vi chiamo dopo."],["li","them (m / mixed)","I biglietti? Li ho io."],["le","them (f)","Le chiavi? Le cerco."]]}],
ex:[["Il caffè lo prendo amaro, grazie.","I take my coffee without sugar, thanks."],["Hai visto Marco? — Sì, l'ho visto stamattina.","Have you seen Marco? — Yes, I saw him this morning."],["Le cartoline le ho spedite ieri.","I sent the postcards yesterday."],["Dove sono i biglietti? Non li trovo!","Where are the tickets? I can't find them!"],["Ti chiamo appena arrivo.","I'll call you as soon as I arrive."],["Non lo so, mi dispiace.","I don't know, I'm sorry."],["Questa giacca è bellissima: posso provarla?","This jacket is beautiful: can I try it on?"],["Ecco il treno! Eccolo, finalmente!","Here's the train! Here it is, finally!"]],
err:[["Ho visto la ieri.","L'ho vista ieri.","The pronoun goes before the auxiliary, and the participle agrees."],["Li ho comprato.","Li ho comprati.","Before avere, li requires agreement: comprati."],["L'ho prese.","Le ho prese.","Le (plural) never becomes l'."]],
voc:[["provare","to try (on)"],["trovare","to find"],["accompagnare","to accompany"],["invitare","to invite"],["salutare","to greet; say goodbye"],["ascoltare","to listen to"],["aspettare","to wait for"],["cercare","to look for"],["la cartolina","postcard"],["il biglietto","ticket"],["amaro","bitter; unsweetened"],["appena","as soon as"],["ecco","here is / here are"],["non lo so","I don't know"],["lo so","I know"],["mi dispiace","I'm sorry"]],
dia:[["Shop assistant","Le piacciono questi stivali?","Do you like these boots?"],["Luke","Sì, molto. Posso provarli?","Yes, very much. Can I try them on?"],["Shop assistant","Certo. Che numero porta?","Of course. What size do you take?"],["Luke","Il quarantatré. … Mi stanno bene! Li prendo.","Forty-three. … They fit me! I'll take them."],["Shop assistant","Perfetto. Glieli incarto?","Perfect. Shall I wrap them for you?"]],
q:[
{t:"mc",q:"Hai comprato il latte? — Sì, ___ ho comprato.",o:["l'","lo ","la ","li "],w:"Lo before ho → l'ho comprato."},
{t:"mc",q:"Le foto? ___ ho stampate ieri.",o:["Le","L'","La","Li"],w:"Le foto (feminine plural) → le, never shortened."},
{t:"mc",q:"Hai visto Giulia? — Sì, l'ho ___.",o:["vista","visto","visti","viste"],w:"L' = la (Giulia): the participle agrees → vista."},
{t:"mc",q:"I want to invite them (girls).",o:["Voglio invitarle.","Voglio le invitare.","Le voglio invitarle.","Voglio invitare le."],w:"Attach to the infinitive (invitarle) or place before the modal (le voglio invitare)."},
{t:"mc",q:"Sai dove abita Paolo? — No, non ___ so.",o:["lo","la","gli","ne"],w:"Lo replaces a whole idea: non lo so."},
{t:"fill",q:"I biglietti? ___ ho presi io. (them)",a:["li"],w:"I biglietti → li; li ho presi.",h:"masculine plural"},
{t:"fill",q:"Le chiavi? Le ho ___ sul tavolo. (lasciare)",a:["lasciate"],w:"Le (feminine plural) before avere → lasciate.",h:"agreement"},
{t:"order",a:"Hai visto Marco? Sì, l'ho visto stamattina.",en:"Have you seen Marco? Yes, I saw him this morning."}
]},
{
id:"a2-07", t:"To Whom? Indirect Object Pronouns", s:"mi, ti, gli, le, ci, vi", img:"rome",
goal:"Use indirect pronouns with verbs of giving, telling and asking, and with piacere in the past.",
teach:[
["What an indirect object is","An indirect object is the person **to whom / for whom** something is done. In Italian it's introduced by **a**: *Scrivo a Giulia → Le scrivo.* Common verbs: **dare, dire, chiedere, rispondere, telefonare, scrivere, mandare, regalare, spiegare, prestare, offrire, consigliare, piacere, sembrare, servire, mancare**."],
["The forms","**mi** (to me), **ti** (to you), **gli** (to him), **le** (to her), **Le** (to you, formal), **ci** (to us), **vi** (to you all), **gli** (to them — in modern Italian; *loro* after the verb is very formal)."],
["No agreement in the past","Unlike lo/la/li/le, indirect pronouns **never** cause agreement: *Le ho scritto* (I wrote to her) — not *scritta*. Compare: *L'ho vista* (I saw her — direct) vs *Le ho parlato* (I spoke to her — indirect)."],
["Piacere and similar verbs in the past","Piacere, mancare, servire, sembrare use **essere**, so the participle agrees with the **thing** that pleases: *Mi è piaciuta la pizza. Ti sono piaciuti i musei? Le è mancata l'Italia.*"]
],
tb:[{cap:"Direct or indirect?",h:["Verb","Construction","Pronoun example"],r:[["vedere","vedere qualcuno (direct)","La vedo."],["telefonare","telefonare a qualcuno","Le telefono."],["aiutare","aiutare qualcuno (direct)","Lo aiuto."],["rispondere","rispondere a qualcuno","Gli rispondo."],["ringraziare","ringraziare qualcuno (direct)","Li ringrazio."],["chiedere","chiedere qualcosa a qualcuno","Gli chiedo il conto."]]}],
ex:[["Gli ho regalato un libro di cucina.","I gave him a cookbook."],["Le telefono stasera per gli auguri.","I'll call her tonight to wish her well."],["Mi puoi prestare la penna?","Can you lend me the pen?"],["Cosa ti ha detto il medico?","What did the doctor tell you?"],["Ci hanno offerto un aperitivo.","They treated us to an aperitivo."],["Signora, Le posso consigliare il risotto?","Madam, may I recommend the risotto?"],["Mi è piaciuta molto la Cappella Sistina.","I really liked the Sistine Chapel."],["Mi manca la mia famiglia.","I miss my family."]],
err:[["La telefono domani.","Le telefono domani.","Telefonare a qualcuno takes an indirect pronoun: le."],["Le ho scritta una mail.","Le ho scritto una mail.","Indirect pronouns don't cause agreement."],["Io manco la mia famiglia.","Mi manca la mia famiglia.","Mancare works like piacere: the thing/person missed is the subject."]],
voc:[["regalare","to give (as a gift)"],["prestare","to lend"],["mandare","to send"],["consigliare","to recommend, advise"],["spiegare","to explain"],["ringraziare","to thank"],["mancare","to be missing; to miss"],["servire","to be needed"],["sembrare","to seem"],["gli auguri","best wishes"],["il compleanno","birthday"],["il regalo","gift"],["un favore","a favour"],["la ricetta","recipe; prescription"],["volentieri","gladly"],["fare un regalo","to give a present"]],
dia:[["Giulia","Domani è il compleanno di Marco. Cosa gli regaliamo?","Tomorrow is Marco's birthday. What shall we give him?"],["Luke","Gli piace cucinare: gli possiamo regalare un libro di ricette.","He likes cooking: we can give him a recipe book."],["Giulia","Ottima idea! E a sua sorella cosa diciamo?","Great idea! And what shall we tell his sister?"],["Luke","Le telefono io stasera e le spiego tutto.","I'll call her tonight and explain everything to her."]],
q:[
{t:"mc",q:"Hai scritto a Giulia? — Sì, ___ ho scritto ieri.",o:["le","la","gli","l'"],w:"Scrivere a qualcuno → indirect: le."},
{t:"mc",q:"Ho chiamato Marco. → ___ ho chiamato.",o:["L'","Gli","Le","Ci"],w:"Chiamare qualcuno is direct: lo → l'."},
{t:"mc",q:"Ti ___ i musei di Firenze?",o:["sono piaciuti","è piaciuto","hanno piaciuto","sono piaciute"],w:"I musei (masculine plural) → sono piaciuti."},
{t:"mc",q:"'I miss Italy' =",o:["Mi manca l'Italia.","Manco l'Italia.","L'Italia mi manco.","Mi mancano l'Italia."],w:"Mancare: the thing missed is the subject (l'Italia, singular)."},
{t:"mc",q:"Ai miei genitori ___ ho mandato una cartolina.",o:["gli","le","li","loro gli"],w:"To them → gli (modern Italian)."},
{t:"fill",q:"Signore, ___ consiglio il pesce del giorno. (to you, formal)",a:["le"],w:"Formal indirect: Le consiglio.",h:"formal"},
{t:"fill",q:"Le ho ___ il conto. (chiedere)",a:["chiesto"],w:"Indirect pronoun le: no agreement → chiesto.",h:"no agreement"},
{t:"order",a:"Gli ho regalato un libro di cucina.",en:"I gave him a cookbook."}
]},
{
id:"a2-08", t:"Plans & Predictions: Futuro Semplice", s:"parlerò, andrò, sarà", img:"cinque",
goal:"Talk about future plans, make predictions and express probability with the future tense.",
teach:[
["Forms","Take the infinitive, drop the final **-e**, change -ar- to **-er-** for -are verbs, and add **-ò, -ai, -à, -emo, -ete, -anno**: *parlare → parlerò*, *prendere → prenderò*, *dormire → dormirò*. Spelling: *cercare → cercherò, pagare → pagherò* (h); *mangiare → mangerò, cominciare → comincerò* (drop i)."],
["Irregular stems","Learn the stems; the endings never change. **essere → sarò**, **avere → avrò**, **fare → farò**, **dare → darò**, **stare → starò**, **andare → andrò**, **potere → potrò**, **dovere → dovrò**, **sapere → saprò**, **vedere → vedrò**, **vivere → vivrò**, **venire → verrò**, **volere → vorrò**, **tenere → terrò**, **rimanere → rimarrò**, **bere → berrò**."],
["When Italians use it","For plans and predictions, especially more distant or less certain ones: *L'anno prossimo andrò in Italia. Domani pioverà.* For near, certain plans, the **present** is very common: *Domani parto alle otto.* After **quando, appena, se** with a future meaning, Italian uses the future in both clauses: *Quando arriverò, ti chiamerò.*"],
["The future of probability","The future also expresses **guesses about the present**: *Dov'è Marco? — Sarà in ufficio* (He's probably at the office). *Che ore sono? — Saranno le tre* (It must be about three)."]
],
tb:[{cap:"Future tense",h:["Person","parlare","essere","andare","venire"],r:[["io","parlerò","sarò","andrò","verrò"],["tu","parlerai","sarai","andrai","verrai"],["lui/lei","parlerà","sarà","andrà","verrà"],["noi","parleremo","saremo","andremo","verremo"],["voi","parlerete","sarete","andrete","verrete"],["loro","parleranno","saranno","andranno","verranno"]]}],
ex:[["L'estate prossima faremo il giro delle Cinque Terre.","Next summer we'll go round the Cinque Terre."],["Domani pioverà su tutta la Liguria.","Tomorrow it will rain all over Liguria."],["Quando sarò in pensione, vivrò al mare.","When I retire, I'll live by the sea."],["Appena arriverete a Manarola, mi manderete una foto?","As soon as you arrive in Manarola, will you send me a photo?"],["Dov'è Giulia? — Sarà ancora al lavoro.","Where's Giulia? — She's probably still at work."],["Quanti anni ha il professore? — Avrà cinquant'anni.","How old is the teacher? — He must be about fifty."],["Te lo prometto: non lo farò più!","I promise you: I won't do it again!"],["Verrai alla festa sabato?","Will you come to the party on Saturday?"]],
err:[["Quando arrivo a Roma, ti chiamerò.","Quando arriverò a Roma, ti chiamerò.","Italian uses the future after quando when the main clause is in the future."],["Io anderò","Io andrò","Andare has the shortened stem andr-."],["Mangierò","Mangerò","-giare verbs drop the i in the future."]],
voc:[["l'anno prossimo","next year"],["la settimana prossima","next week"],["fra / tra un mese","in a month"],["dopodomani","the day after tomorrow"],["fra poco","soon"],["appena","as soon as"],["promettere","to promise"],["il progetto","plan, project"],["andare in pensione","to retire"],["il meteo","weather forecast"],["il sentiero","path, trail"],["il borgo","village"],["forse","maybe"],["sicuramente","certainly"],["probabilmente","probably"],["prevedere","to forecast"]],
dia:[["Sara","Cosa farai quest'estate?","What will you do this summer?"],["Luke","Andrò in Liguria con Giulia. Cammineremo da Monterosso a Riomaggiore.","I'll go to Liguria with Giulia. We'll walk from Monterosso to Riomaggiore."],["Sara","Che bello! Farà caldissimo, però.","How lovely! It'll be very hot, though."],["Luke","Lo so. Partiremo presto la mattina e ci fermeremo a fare il bagno.","I know. We'll leave early in the morning and stop for a swim."]],
q:[
{t:"mc",q:"L'anno prossimo io ___ in Italia. (andare)",o:["andrò","anderò","andarò","vado andato"],w:"Andare → andr-: andrò."},
{t:"mc",q:"Noi ___ la cena alle otto. (cominciare)",o:["cominceremo","cominciaremo","comincieremo","cominciremo"],w:"-ciare drops the i and -ar- becomes -er-: cominceremo."},
{t:"mc",q:"Che ore sono? — Non lo so, ___ le cinque.",o:["saranno","sono state","sarebbero","fossero"],w:"Future of probability for a guess about the present."},
{t:"mc",q:"Quando ___ a casa, ti telefonerò.",o:["arriverò","arrivo stato","arrivai","arriverei"],w:"After quando with a future main clause, use the future."},
{t:"mc",q:"Future of venire, voi:",o:["verrete","venirete","venerete","vorrete"],w:"Venire → verr-: verrete. (Vorrete is from volere.)"},
{t:"fill",q:"Domani ___ bel tempo. (fare)",a:["farà"],w:"Fare → far-: farà.",h:"far-"},
{t:"fill",q:"Io ti ___ con la carta. (pagare)",a:["pagherò"],w:"Pagare adds h: pagherò.",h:"spelling"},
{t:"order",a:"Quando sarò in pensione, vivrò al mare.",en:"When I retire, I'll live by the sea."}
]},
{
id:"a2-09", t:"Would & Could: The Present Conditional", s:"vorrei, potresti, dovresti", img:"venice",
goal:"Make polite requests, express wishes and give advice with the present conditional.",
teach:[
["Forms: future stem + new endings","The conditional uses **the same stem as the future** with the endings **-ei, -esti, -ebbe, -emmo, -este, -ebbero**: *parlerò → parlerei*, *sarò → sarei*, *andrò → andrei*, *vorrò → vorrei*. If you know the future, you already know the conditional stem."],
["Politeness","The conditional softens requests: **Vorrei** un caffè. **Potrebbe** ripetere? **Mi daresti** una mano? **Avrebbe** un tavolo per due? Compare *Voglio* (I want — direct, possibly rude) and *Vorrei* (I would like)."],
["Wishes and advice","Wishes: *Mi piacerebbe vivere a Venezia* (I'd love to live in Venice). *Andrei volentieri al cinema.* Advice with **dovere** and **potere**: *Dovresti riposarti* (You should rest). *Potresti chiedere al vigile* (You could ask the traffic officer). *Al posto tuo, prenderei il treno* (If I were you, I'd take the train)."],
["Watch the -emmo / -emo difference","The **noi** form of the conditional has a double **m**: *parleremmo* (we would speak) vs future *parleremo* (we will speak). The difference is audible: hold the m."]
],
tb:[{cap:"Conditional",h:["Person","parlare","volere","potere","essere"],r:[["io","parlerei","vorrei","potrei","sarei"],["tu","parleresti","vorresti","potresti","saresti"],["lui/lei","parlerebbe","vorrebbe","potrebbe","sarebbe"],["noi","parleremmo","vorremmo","potremmo","saremmo"],["voi","parlereste","vorreste","potreste","sareste"],["loro","parlerebbero","vorrebbero","potrebbero","sarebbero"]]}],
ex:[["Vorrei prenotare una gondola per due persone.","I'd like to book a gondola for two people."],["Potrebbe dirmi dov'è il Ponte di Rialto?","Could you tell me where the Rialto Bridge is?"],["Mi piacerebbe vedere la Biennale.","I'd love to see the Biennale."],["Dovresti assaggiare le sarde in saor.","You should try the sarde in saor."],["Al posto tuo, prenderei il vaporetto.","If I were you, I'd take the vaporetto."],["Ci sarebbe una camera libera per stanotte?","Would there be a free room for tonight?"],["Verresti con me a Murano domani?","Would you come with me to Murano tomorrow?"],["Sarebbe meglio partire presto.","It would be better to leave early."]],
err:[["Vorrebbi un caffè.","Vorrei un caffè.","Io form of the conditional ends in -ei."],["Noi parleremo volentieri (meaning 'would').","Noi parleremmo volentieri.","The conditional noi form has a double m: -emmo."],["Tu dovrebbe riposare.","Tu dovresti riposare.","Tu form: -esti."]],
voc:[["vorrei","I would like"],["potrebbe","could you (formal)"],["mi piacerebbe","I would love"],["dovresti","you should"],["al posto tuo","if I were you"],["volentieri","gladly"],["assaggiare","to taste"],["la gondola","gondola"],["il vaporetto","water bus (Venice)"],["il ponte","bridge"],["la calle","street (Venice)"],["il canale","canal"],["meglio","better"],["consigliare","to advise"],["stanotte","tonight"],["un'informazione","a piece of information"]],
dia:[["Luke","Buonasera. Vorrei un'informazione: ci sarebbe un tavolo libero sul canale?","Good evening. I'd like some information: would there be a free table on the canal?"],["Waiter","Mi dispiace, ora no. Potreste aspettare venti minuti?","I'm sorry, not now. Could you wait twenty minutes?"],["Luke","Certo. Nel frattempo, cosa ci consiglierebbe?","Of course. Meanwhile, what would you recommend?"],["Waiter","Al posto vostro, proverei il risotto al nero di seppia.","If I were you, I'd try the squid-ink risotto."]],
q:[
{t:"mc",q:"Choose the most polite request in a shop:",o:["Potrebbe mostrarmi quella borsa?","Mostrami quella borsa!","Voglio quella borsa.","Lei mostra quella borsa."],w:"Potrebbe (conditional, formal) is polite."},
{t:"mc",q:"'We would like to leave early.'",o:["Vorremmo partire presto.","Vorremo partire presto.","Volevamo partire presto ieri.","Vorrebbero partire presto."],w:"Noi conditional of volere: vorremmo (double m)."},
{t:"mc",q:"You give advice: 'You should sleep more.'",o:["Dovresti dormire di più.","Devi dormito di più.","Dovrai dormire ieri.","Dovevi dormire domani."],w:"Advice: conditional of dovere → dovresti."},
{t:"mc",q:"Conditional of andare, io:",o:["andrei","anderei","andarei","andrò"],w:"Same stem as the future: andr- + ei."},
{t:"mc",q:"'If I were you, I'd take a taxi.'",o:["Al posto tuo, prenderei un taxi.","Al posto tuo, prendo un taxi ieri.","Se sono te, prenderò un taxi.","Al tuo posto, prendevo il taxi domani."],w:"Al posto tuo + conditional is the standard advice formula."},
{t:"fill",q:"Mi ___ vivere a Venezia. (piacere)",a:["piacerebbe"],w:"Vivere (infinitive) is the subject: piacerebbe.",h:"lui form"},
{t:"fill",q:"___ un tavolo per due, per favore? (avere, Lei)",a:["avrebbe"],w:"Avere → avr-: avrebbe.",h:"formal you"},
{t:"order",a:"Potrebbe dirmi dov'è il Ponte di Rialto?",en:"Could you tell me where the Rialto Bridge is?"}
]},
{
id:"a2-10", t:"Do It! The Informal Imperative", s:"tu, noi, voi · negative imperative", img:"naples",
goal:"Give instructions, advice and invitations to friends — and tell them what not to do.",
teach:[
["Tu, noi, voi forms","For **noi** and **voi**, the imperative is the same as the present: *Andiamo! Mangiate!* For **tu**: -are verbs end in **-a** (*Parla! Guarda!*), -ere and -ire verbs end in **-i** (*Prendi! Dormi! Senti!*), -isc- verbs: *Finisci! Pulisci!*"],
["Irregular tu forms","**essere → sii**, **avere → abbi**, **sapere → sappi**. Five short forms (often written with an apostrophe or as a full form): **andare → va' / vai**, **dare → da' / dai**, **fare → fa' / fai**, **stare → sta' / stai**, **dire → di'**. *Sta' zitto!* (Be quiet!) *Fa' attenzione!* (Be careful!)"],
["The negative tu form = non + infinitive","For tu, the negative imperative is **non + infinitive**: *Non parlare! Non toccare! Non preoccuparti!* For noi and voi, just add non: *Non andiamo! Non mangiate troppo!*"],
["Pronouns attach","With affirmative imperatives, pronouns **attach to the end**: *Mangialo! Chiamami! Alzati!* With the short forms, the consonant **doubles** (except gli): *Dimmi!* (Tell me!) *Fammi vedere!* (Let me see!) *Dacci una mano!* *Vattene!* (Go away!). In the negative, attach or place before: *Non preoccuparti / Non ti preoccupare.*"]
],
tb:[{cap:"Informal imperative",h:["","-are (parlare)","-ere (prendere)","-ire (sentire)","-isc (finire)"],r:[["tu","parla","prendi","senti","finisci"],["noi","parliamo","prendiamo","sentiamo","finiamo"],["voi","parlate","prendete","sentite","finite"],["non (tu)","non parlare","non prendere","non sentire","non finire"]]}],
ex:[["Assaggia questa sfogliatella, è ancora calda!","Taste this sfogliatella, it's still warm!"],["Prendi la Circumvesuviana per andare a Pompei.","Take the Circumvesuviana to get to Pompeii."],["Non dimenticare il passaporto!","Don't forget your passport!"],["Dimmi la verità.","Tell me the truth."],["Andiamo a mangiare una pizza da Michele!","Let's go and eat a pizza at Michele's!"],["Ragazzi, fate attenzione al traffico!","Guys, watch out for the traffic!"],["Non ti preoccupare, ci penso io.","Don't worry, I'll take care of it."],["Sii paziente: la pizza arriva subito.","Be patient: the pizza is coming right away."]],
err:[["Non parla! (to a friend)","Non parlare!","The negative tu imperative is non + infinitive."],["Mangia lo!","Mangialo!","Pronouns attach to the affirmative imperative."],["Dime!","Dimmi!","With di', fa', da', va', sta' the pronoun's consonant doubles."]],
voc:[["assaggiare","to taste"],["dimenticare","to forget"],["preoccuparsi","to worry"],["toccare","to touch"],["girare","to turn"],["attraversare","to cross"],["fare attenzione","to be careful"],["stare zitto","to be quiet"],["sbrigarsi","to hurry up"],["la sfogliatella","Neapolitan pastry"],["il lungomare","seafront"],["il vicolo","alley"],["dai!","come on!"],["forza!","go on!"],["aspetta!","wait!"],["guarda!","look!"]],
dia:[["Gennaro","Luke, sbrigati! La pizzeria chiude alle undici.","Luke, hurry up! The pizzeria closes at eleven."],["Luke","Arrivo! Aspettami un attimo.","I'm coming! Wait for me a moment."],["Gennaro","Prendi la giacca e non dimenticare il portafoglio.","Take your jacket and don't forget your wallet."],["Luke","Fammi vedere la mappa… è lontano?","Let me see the map… is it far?"],["Gennaro","No, seguimi! Sono dieci minuti a piedi.","No, follow me! It's ten minutes on foot."]],
q:[
{t:"mc",q:"Tell a friend: 'Don't touch!'",o:["Non toccare!","Non tocca!","Non tocchi!","Toccare non!"],w:"Negative tu imperative = non + infinitive."},
{t:"mc",q:"Tell a friend: 'Take the bus!'",o:["Prendi l'autobus!","Prende l'autobus!","Prendere l'autobus!","Prendete l'autobus tu!"],w:"-ere verbs: tu imperative ends in -i."},
{t:"mc",q:"'Tell me!' (to a friend)",o:["Dimmi!","Dimi!","Di' mi!","Mi di'!"],w:"Di' + mi → dimmi (doubled consonant)."},
{t:"mc",q:"Tell two friends: 'Be careful!'",o:["Fate attenzione!","Fa' attenzione!","Facciate attenzione!","Fare attenzione!"],w:"Voi imperative = present: fate."},
{t:"mc",q:"'Don't worry' (to a friend) can be:",o:["Non preoccuparti!","Non preoccupati!","Non ti preoccupa!","Preoccuparti non!"],w:"Non + infinitive with the pronoun attached (or: Non ti preoccupare)."},
{t:"fill",q:"___ la porta, per favore! (chiudere, tu)",a:["chiudi"],w:"Chiudere → chiudi.",h:"-i"},
{t:"fill",q:"___ il conto, dai! (pagare, noi — Let's pay)",a:["paghiamo"],w:"Noi imperative = present: paghiamo.",h:"noi form"},
{t:"order",a:"Non dimenticare il passaporto!",en:"Don't forget your passport!"}
]},
{
id:"a2-11", t:"Excuse Me, Sir: Formal Imperative & Directions", s:"prenda, giri, vada dritto", img:"rome",
goal:"Ask for and give directions and instructions politely using the Lei imperative.",
teach:[
["Formal imperative = present subjunctive","For **Lei**, the imperative uses the third person of the present subjunctive. Rule of thumb: **-are verbs end in -i**, **-ere/-ire verbs end in -a** — the 'opposite' vowel: *Parli più piano! Prenda la seconda a destra! Senta, scusi…*"],
["Irregular formal forms","They come from the io form of the present: *vado → vada*, *faccio → faccia*, *vengo → venga*, *dico → dica*, *esco → esca*, *salgo → salga*. Others: *essere → sia*, *avere → abbia*, *dare → dia*, *stare → stia*, *sapere → sappia*. Classic phrases: **Dica!** (Go ahead, at a counter), **Senta!** (Excuse me — to attract attention), **Prego, si accomodi** (Please, have a seat)."],
["Pronouns go before","With Lei, pronouns always go **before** the verb: *Si accomodi. Mi dica. Lo prenda pure.* Negative: *Non si preoccupi.*"],
["Directions vocabulary","**vada dritto** (go straight on), **giri a destra / a sinistra** (turn right / left), **prenda la prima / seconda strada** (take the first / second road), **attraversi la piazza** (cross the square), **all'incrocio** (at the crossroads), **al semaforo** (at the traffic lights), **è in fondo alla strada** (it's at the end of the street), **di fronte a** (opposite)."]
],
tb:[{cap:"Formal imperative (Lei)",h:["Infinitive","Lei","Example"],r:[["girare","giri","Giri a sinistra."],["prendere","prenda","Prenda la metro."],["sentire","senta","Senta, scusi…"],["andare","vada","Vada sempre dritto."],["fare","faccia","Faccia attenzione."],["venire","venga","Venga con me."],["dire","dica","Mi dica."],["scusare","scusi","Scusi, dov'è…?"]]}],
ex:[["Scusi, come arrivo a Piazza Navona?","Excuse me, how do I get to Piazza Navona?"],["Vada dritto fino al semaforo, poi giri a destra.","Go straight on to the traffic lights, then turn right."],["Prenda la seconda strada a sinistra.","Take the second road on the left."],["Attraversi la piazza: la fontana è di fronte alla chiesa.","Cross the square: the fountain is opposite the church."],["Prego, si accomodi. Il dottore arriva subito.","Please, have a seat. The doctor is coming right away."],["Mi dica, cosa desidera?","Tell me, what would you like?"],["Non si preoccupi, è a cinque minuti a piedi.","Don't worry, it's five minutes on foot."],["Mi scusi, può ripetere più lentamente?","Excuse me, can you repeat more slowly?"]],
err:[["Prendi la seconda a destra (to a stranger).","Prenda la seconda a destra.","With Lei use the formal form: -ere verbs end in -a."],["Gira a sinistra, signore.","Giri a sinistra, signore.","Formal -are verbs end in -i."],["Accomodisi.","Si accomodi.","With Lei, the pronoun goes before the verb."]],
voc:[["dritto","straight on"],["a destra","on the right"],["a sinistra","on the left"],["il semaforo","traffic lights"],["l'incrocio","crossroads"],["l'angolo","corner"],["in fondo a","at the end of"],["di fronte a","opposite"],["accanto a","next to"],["vicino / lontano","near / far"],["attraversare","to cross"],["girare","to turn"],["la fontana","fountain"],["la fermata","stop"],["l'uscita","exit"],["il vigile","traffic officer"]],
dia:[["Luke","Senta, scusi, sa dov'è la Fontana di Trevi?","Excuse me, do you know where the Trevi Fountain is?"],["Signora","Sì, non è lontano. Vada dritto per via del Corso.","Yes, it's not far. Go straight along Via del Corso."],["Luke","E poi?","And then?"],["Signora","Alla terza traversa giri a destra e segua la gente: ci sono sempre tanti turisti!","At the third side street turn right and follow the people: there are always lots of tourists!"],["Luke","Grazie mille, è stata gentilissima.","Thank you so much, you've been very kind."]],
q:[
{t:"mc",q:"To a stranger: 'Turn left.'",o:["Giri a sinistra.","Gira a sinistra.","Girare a sinistra.","Giriamo a sinistra."],w:"Formal -are: giri."},
{t:"mc",q:"At a counter, the clerk says 'Dica!'. It means:",o:["Go ahead / How can I help?","Say goodbye!","Sit down!","Wait!"],w:"Dica (formal of dire) invites you to speak."},
{t:"mc",q:"Formal imperative of venire:",o:["venga","vieni","viene","venite"],w:"From vengo → venga."},
{t:"mc",q:"'Please, have a seat' (formal):",o:["Prego, si accomodi.","Prego, accomodati.","Prego, si accomoda.","Prego, accomodarsi."],w:"Lei: pronoun before the verb, subjunctive form accomodi."},
{t:"mc",q:"'It's opposite the bank' =",o:["È di fronte alla banca.","È di fronte la banca.","È davanti di banca.","È in fondo banca."],w:"Di fronte a + article: alla banca."},
{t:"fill",q:"___ la metro linea A. (prendere, Lei)",a:["prenda"],w:"Formal -ere: prenda.",h:"-a"},
{t:"fill",q:"___ sempre dritto. (andare, Lei)",a:["vada"],w:"Andare → vada.",h:"irregular"},
{t:"order",a:"Vada dritto fino al semaforo, poi giri a destra.",en:"Go straight on to the traffic lights, then turn right."}
]},
{
id:"a2-12", t:"Better or Worse? Comparatives", s:"più… di, meno… che, tanto… quanto", img:"milan",
goal:"Compare people, places, prices and actions accurately.",
teach:[
["Più and meno","**più** (more) and **meno** (less) + adjective: *Milano è più cara di Napoli. Il treno è meno comodo dell'aereo.* The second term is introduced by **di** (merging with articles: del, della…)."],
["Di or che?","Use **di** when comparing two different **nouns or pronouns** with one quality: *Luke è più alto di Marco.* Use **che** when comparing two **adjectives, verbs, adverbs or prepositional phrases** about the same thing: *Milano è più elegante che antica. Mi piace più leggere che guardare la TV. Fa più caldo a Roma che a Milano.* Also **che** before a noun with no article in quantities: *Bevo più acqua che vino.*"],
["Equality","**(tanto)… quanto** or **(così)… come**: *Roma è (tanto) bella quanto Firenze. Sono alto come te.* The first word is usually omitted."],
["Irregular comparatives","**buono → migliore** (better), **cattivo → peggiore** (worse), **grande → maggiore** (older, greater), **piccolo → minore** (younger, lesser). Adverbs: **bene → meglio**, **male → peggio**. *Questo vino è migliore* (adjective) vs *Canti meglio di me* (adverb). Regular forms *più buono, più grande* are also correct in many contexts."]
],
tb:[{cap:"Di or che?",h:["Comparing…","Use","Example"],r:[["two people / things","di","Anna è più giovane di Sara."],["two adjectives","che","È più bello che utile."],["two verbs","che","Preferisco camminare che correre."],["two places with prepositions","che","Si mangia meglio a Bologna che a Milano."],["two quantities","che","Ho più amici che nemici."]]}],
ex:[["Milano è più cara di Torino.","Milan is more expensive than Turin."],["Il Duomo è più grande di quanto pensavo.","The Duomo is bigger than I thought."],["In Galleria ci sono più turisti che milanesi.","In the Galleria there are more tourists than Milanese."],["Questo risotto è migliore di quello di ieri.","This risotto is better than yesterday's."],["Parli italiano meglio di me!","You speak Italian better than me!"],["Il treno è comodo quanto l'aereo, e meno caro.","The train is as comfortable as the plane, and less expensive."],["Mia sorella maggiore vive a Londra.","My older sister lives in London."],["È più facile capire che parlare.","It's easier to understand than to speak."]],
err:[["Milano è più grande che Torino.","Milano è più grande di Torino.","Comparing two nouns → di."],["Parli più migliore di me.","Parli meglio di me.","Meglio is the adverb (how you speak); never più migliore."],["È più bello di utile.","È più bello che utile.","Two adjectives → che."]],
voc:[["più","more"],["meno","less"],["di / che","than"],["quanto / come","as"],["migliore","better (adj.)"],["meglio","better (adv.)"],["peggiore","worse (adj.)"],["peggio","worse (adv.)"],["maggiore","older; greater"],["minore","younger; lesser"],["caro","expensive"],["economico","cheap"],["comodo","comfortable"],["veloce","fast"],["lento","slow"],["affollato","crowded"]],
dia:[["Luke","Secondo te, dove si vive meglio, a Milano o a Roma?","In your opinion, where is life better, in Milan or Rome?"],["Marco","Milano è più organizzata e i trasporti funzionano meglio.","Milan is more organised and transport works better."],["Luke","Ma Roma è più bella di Milano, no?","But Rome is more beautiful than Milan, isn't it?"],["Marco","Forse. Però a Milano si guadagna di più che a Roma… e si spende anche di più!","Maybe. But in Milan you earn more than in Rome… and you spend more too!"]],
q:[
{t:"mc",q:"Il treno è più veloce ___ autobus.",o:["dell'","che l'","di","quanto"],w:"Two nouns → di + article: dell'autobus."},
{t:"mc",q:"Mi piace più camminare ___ correre.",o:["che","di","del","come"],w:"Two verbs → che."},
{t:"mc",q:"Marco canta ___ di me.",o:["meglio","migliore","più bene","più migliore"],w:"Adverb (how he sings) → meglio."},
{t:"mc",q:"Questa pizza è ___ di quella. (better)",o:["migliore","meglio","più meglio","bene"],w:"Adjective describing the pizza → migliore."},
{t:"mc",q:"'Rome is as beautiful as Florence.'",o:["Roma è bella quanto Firenze.","Roma è bella di Firenze.","Roma è più bella che Firenze.","Roma è tanta bella che Firenze."],w:"Equality: (tanto)… quanto."},
{t:"fill",q:"Ho più libri ___ dischi.",a:["che"],w:"Two quantities without articles → che.",h:"di or che?"},
{t:"fill",q:"Mio fratello ___ ha trent'anni. (older)",a:["maggiore"],w:"Older (sibling) = maggiore.",h:"irregular"},
{t:"order",a:"Milano è più cara di Torino.",en:"Milan is more expensive than Turin."}
]},
{
id:"a2-13", t:"The Best! Superlatives", s:"il più bello, bellissimo, ottimo", img:"amalfi",
goal:"Say something is the best, the most or extremely good — the Italian way.",
teach:[
["Relative superlative","The most / the least of a group: **article + (noun) + più/meno + adjective + di**: *Positano è il paese più famoso della Costiera.* *È la città più bella d'Italia.* Note **di** = in/of the group."],
["Absolute superlative: -issimo","To say *very / extremely*, add **-issimo** to the adjective (minus its final vowel): *bello → bellissimo, buono → buonissimo, caro → carissimo*. It agrees: *bellissima, bellissimi, bellissime*. Adjectives in -co/-go add h: *ricco → ricchissimo, lungo → lunghissimo*. You can also use **molto / davvero / super** + adjective."],
["Irregular forms","**buono → ottimo** (excellent) / il migliore (the best); **cattivo → pessimo** (terrible) / il peggiore; **grande → massimo** / il maggiore; **piccolo → minimo** / il minore. Adverbs: **benissimo**, **malissimo**. *Il servizio è stato pessimo. La cena è stata ottima.*"],
["Superlative + subjunctive (preview)","After a relative superlative, a *che* clause usually takes the subjunctive: *È il posto più bello che io abbia mai visto.* You'll study this at B1–B2; for now, recognise it."]
],
tb:[{cap:"Superlatives",h:["Adjective","Relative (the most…)","Absolute (very…)"],r:[["bello","il più bello","bellissimo"],["caro","il più caro","carissimo"],["lungo","il più lungo","lunghissimo"],["buono","il migliore","ottimo / buonissimo"],["cattivo","il peggiore","pessimo / cattivissimo"],["grande","il più grande / il maggiore","grandissimo / massimo"]]}],
ex:[["Positano è il paese più fotografato della Costiera Amalfitana.","Positano is the most photographed town on the Amalfi Coast."],["Il limoncello di questa zona è ottimo.","The limoncello from this area is excellent."],["La vista da Ravello è bellissima.","The view from Ravello is extremely beautiful."],["È stata la giornata più bella della vacanza.","It was the best day of the holiday."],["Il traffico in agosto è pessimo.","The traffic in August is terrible."],["Questi limoni sono grandissimi!","These lemons are huge!"],["Qual è il ristorante migliore di Amalfi?","Which is the best restaurant in Amalfi?"],["Mi sento benissimo qui.","I feel great here."]],
err:[["È il più bello paese.","È il paese più bello.","The structure is article + noun + più + adjective."],["Molto bellissimo","Bellissimo","-issimo already means 'very': don't add molto."],["Il più migliore","Il migliore","Migliore is already comparative: never add più."]],
voc:[["il limone","lemon"],["la costiera","coastline"],["la vista","view"],["il tramonto","sunset"],["la scogliera","cliff"],["la barca","boat"],["il traghetto","ferry"],["la scalinata","flight of steps"],["ottimo","excellent"],["pessimo","terrible"],["famoso","famous"],["ricco","rich"],["stretto","narrow"],["ripido","steep"],["incredibile","incredible"],["indimenticabile","unforgettable"]],
dia:[["Giulia","Allora, qual è stato il momento più bello del viaggio?","So, what was the best moment of the trip?"],["Luke","Senza dubbio il giro in barca: il mare era limpidissimo!","Without a doubt the boat trip: the sea was crystal clear!"],["Giulia","E il cibo?","And the food?"],["Luke","Ottimo! Gli scialatielli ai frutti di mare sono la cosa migliore che ho mangiato.","Excellent! The scialatielli with seafood are the best thing I ate."]],
q:[
{t:"mc",q:"Amalfi è una delle città ___ della Campania.",o:["più belle","più bellissime","bellissime più","le più belle di"],w:"Relative superlative: noun + più + adjective (agreeing)."},
{t:"mc",q:"'The food was excellent' =",o:["Il cibo era ottimo.","Il cibo era molto ottimo.","Il cibo era il più ottimo.","Il cibo era ottimissimo."],w:"Ottimo is already a superlative."},
{t:"mc",q:"Absolute superlative of lungo:",o:["lunghissimo","lungissimo","molto lunghissimo","più lungo"],w:"-go adds h to keep the hard sound: lunghissimo."},
{t:"mc",q:"Qual è il museo ___ di Roma?",o:["più famoso","famosissimo più","più famoso in","famoso più"],w:"Il museo più famoso di Roma."},
{t:"mc",q:"The opposite of 'ottimo' is:",o:["pessimo","peggio","minimo","malissimo"],w:"Ottimo ↔ pessimo (adjectives)."},
{t:"fill",q:"Questi limoni sono ___ ! (grande, very)",a:["grandissimi"],w:"Grande → grandissimo; masculine plural → grandissimi.",h:"-issimi"},
{t:"fill",q:"È il ristorante ___ della città. (best)",a:["migliore"],w:"The best = il migliore.",h:"irregular"},
{t:"order",a:"La vista da Ravello è bellissima.",en:"The view from Ravello is extremely beautiful."}
]},
{
id:"a2-14", t:"The Little Word Ci", s:"there, about it, ci vuole, ci metto", img:"florence",
goal:"Use ci to replace places and 'about it', and master the everyday expressions ci vuole and metterci.",
teach:[
["Ci = there","**Ci** replaces a place introduced by **a, in, da, su**: *Vai a Firenze? Sì, ci vado domani.* *Sei mai stato in Toscana? No, non ci sono mai stato.* It goes before the conjugated verb or attaches to the infinitive: *Voglio andarci / Ci voglio andare.*"],
["Ci = about it / on it / in it","With verbs followed by **a** (or su, in) + thing: *pensare a* (*Ci penso io* — I'll take care of it), *credere a/in* (*Non ci credo!* — I don't believe it!), *riuscire a* (*Non ci riesco* — I can't manage it), *contare su* (*Ci puoi contare* — You can count on it)."],
["Ci vuole / ci vogliono = it takes","To say how long or how much is **needed**: *Ci vuole un'ora* (it takes an hour), *Ci vogliono due ore* (plural!), *Per la carbonara ci vogliono le uova.* The verb agrees with what is needed."],
["Metterci = to take (someone)","When a **person** takes time to do something: *Quanto ci metti per arrivare al lavoro? — Ci metto venti minuti.* Compare: *Ci vogliono venti minuti* (impersonal) vs *Ci metto venti minuti* (I take twenty minutes)."]
],
tb:[{cap:"Expressions with ci",h:["Expression","Meaning","Example"],r:[["ci vado","I go there","A Siena? Ci vado sabato."],["ci penso io","I'll take care of it","Il conto? Ci penso io."],["non ci credo","I don't believe it","Hai vinto? Non ci credo!"],["non ci riesco","I can't manage","Apro la porta… non ci riesco!"],["ci vuole / ci vogliono","it takes (needed)","Ci vogliono tre ore."],["ci metto","I take (time)","Ci metto poco."],["c'entra","it has to do with it","Cosa c'entra?"]]}],
ex:[["Vai spesso agli Uffizi? — Ci vado ogni volta che posso.","Do you often go to the Uffizi? — I go there whenever I can."],["Quanto ci vuole da Firenze a Siena in autobus?","How long does it take from Florence to Siena by bus?"],["Ci vogliono circa un'ora e un quarto.","It takes about an hour and a quarter."],["Quanto ci metti a preparare la ribollita?","How long do you take to make ribollita?"],["Non preoccuparti, ci penso io.","Don't worry, I'll take care of it."],["Ho vinto il biglietto per il concerto! — Non ci credo!","I won the ticket for the concert! — I don't believe it!"],["Provo ad aprire la bottiglia, ma non ci riesco.","I'm trying to open the bottle, but I can't."],["A Lucca non ci sono mai stato.","I've never been to Lucca."]],
err:[["Ci vuole due ore.","Ci vogliono due ore.","The verb agrees with the plural noun: vogliono."],["Ci vuole venti minuti per me.","Ci metto venti minuti.","For a person taking time, use metterci."],["Vado lì ci domani.","Ci vado domani.","Ci replaces the place; don't repeat lì."]],
voc:[["ci","there; about it"],["pensare a","to think about"],["credere a","to believe"],["riuscire a","to manage to"],["contare su","to count on"],["volerci","to take (time, things needed)"],["metterci","to take (time, a person)"],["circa","about"],["la ribollita","Tuscan bread soup"],["le mura","city walls"],["la torre","tower"],["il campanile","bell tower"],["la collina","hill"],["il vigneto","vineyard"],["mezz'ora","half an hour"],["un quarto d'ora","a quarter of an hour"]],
dia:[["Luke","Sei mai stata a San Gimignano?","Have you ever been to San Gimignano?"],["Giulia","Sì, ci sono andata l'anno scorso. È piena di torri medievali!","Yes, I went there last year. It's full of medieval towers!"],["Luke","Quanto ci vuole da Firenze?","How long does it take from Florence?"],["Giulia","In macchina ci vuole un'ora. In autobus ci metti un po' di più perché devi cambiare a Poggibonsi.","By car it takes an hour. By bus you take a bit longer because you have to change at Poggibonsi."]],
q:[
{t:"mc",q:"Vai a Pisa domani? — Sì, ___ vado con Marco.",o:["ci","ne","lo","li"],w:"Ci replaces a place: ci vado."},
{t:"mc",q:"Per fare il tiramisù ___ il mascarpone.",o:["ci vuole","ci vogliono","ci metto","ne vuole"],w:"Il mascarpone is singular → ci vuole."},
{t:"mc",q:"Quanto ___ a finire il lavoro? (tu)",o:["ci metti","ci vuoi","ci vuole","ne metti"],w:"A person taking time → metterci: ci metti."},
{t:"mc",q:"'I can't manage it' =",o:["Non ci riesco.","Non lo riesco.","Non ne riesco.","Non riesco ci."],w:"Riuscire a → ci riesco."},
{t:"mc",q:"Il conto? Non ti preoccupare, ___ penso io.",o:["ci","lo","ne","gli"],w:"Pensare a → ci penso io (I'll handle it)."},
{t:"fill",q:"Ci ___ tre ore per andare a Roma. (volere)",a:["vogliono"],w:"Tre ore is plural → ci vogliono.",h:"plural"},
{t:"fill",q:"Io ___ metto dieci minuti a piedi.",a:["ci"],w:"Metterci: ci metto.",h:"pronoun"},
{t:"order",a:"Quanto ci vuole da Firenze a Siena in autobus?",en:"How long does it take from Florence to Siena by bus?"}
]},
{
id:"a2-15", t:"Some of It: The Pronoun Ne", s:"quantities and 'of it'", img:"naples",
goal:"Use ne for quantities and to replace 'of / about something', including in the past.",
teach:[
["Ne with quantities","When you mention a **quantity** of something already named, Italian requires **ne** (of it / of them): *Quante pizze vuoi? Ne voglio due.* *Hai figli? Sì, ne ho tre.* *Hai del pane? Sì, ne ho un po'.* English often omits it; Italian never does."],
["Ne for 'none'","*Non ne ho* = I don't have any. *Quanti biglietti hai? Non ne ho nessuno.*"],
["Ne = of / about it","**Ne** also replaces **di + thing**: *Cosa pensi del film? Cosa ne pensi?* (What do you think of it?) *Parliamo del viaggio? Sì, parliamone!* *Ne ho bisogno* (I need it). *Me ne vado* (I'm leaving) is a fixed expression."],
["Agreement in the past","With ne + quantity, the participle **agrees with the quantity**: *Quante foto hai fatto? Ne ho fatte cento.* *Quanti caffè hai bevuto? Ne ho bevuti tre.* *Ne ho mangiata una (pizza).*"]
],
tb:[{cap:"Ne in action",h:["Question","Answer with ne"],r:[["Quanti anni hai?","Ne ho trenta."],["Vuoi delle olive?","Sì, ne prendo qualcuna."],["Hai sigarette?","No, non ne ho."],["Cosa pensi di Napoli?","Ne penso tutto il bene possibile."],["Hai bisogno della macchina?","Sì, ne ho bisogno."],["Quante pizze avete ordinato?","Ne abbiamo ordinate quattro."]]}],
ex:[["Quante sfogliatelle vuole? — Ne prendo sei, grazie.","How many sfogliatelle would you like? — I'll take six, thank you."],["Hai fratelli? — Sì, ne ho due.","Do you have any siblings? — Yes, I have two."],["Hai degli spiccioli? — No, mi dispiace, non ne ho.","Do you have any change? — No, sorry, I don't have any."],["Cosa ne pensi di questo caffè?","What do you think of this coffee?"],["Ho comprato tre souvenir e ne ho regalato uno a Giulia.","I bought three souvenirs and gave one to Giulia."],["Quante foto hai fatto al Vesuvio? — Ne ho fatte troppe!","How many photos did you take of Vesuvius? — I took too many!"],["Basta, me ne vado!","That's it, I'm leaving!"],["Non ne ho idea.","I have no idea."]],
err:[["Ho due.","Ne ho due.","With a quantity, ne is required."],["Ne ho mangiato tre (pizze).","Ne ho mangiate tre.","The participle agrees with the quantity referred to by ne."],["Cosa pensi di questo? Cosa lo pensi?","Cosa ne pensi?","Pensare di = ne."]],
voc:[["ne","of it / of them"],["quanto / quanti","how much / how many"],["qualcuno / qualcuna","some (a few)"],["un po'","a little"],["nessuno","none"],["gli spiccioli","small change"],["il souvenir","souvenir"],["avere bisogno di","to need"],["andarsene","to leave, go away"],["non ne ho idea","I have no idea"],["la pasticceria","pastry shop"],["la dozzina","dozen"],["un etto","100 g"],["il pezzo","piece"],["la fetta","slice"],["basta","that's enough"]],
dia:[["Pasticcere","Buongiorno! Cosa le do?","Good morning! What can I get you?"],["Luke","Vorrei dei babà. Ne prendo quattro.","I'd like some babà. I'll take four."],["Pasticcere","E delle sfogliatelle? Sono appena uscite dal forno.","And some sfogliatelle? They've just come out of the oven."],["Luke","Allora ne prendo due, una riccia e una frolla.","Then I'll take two, one riccia and one frolla."],["Pasticcere","Ottima scelta! Ne vuole assaggiare una qui?","Excellent choice! Would you like to taste one here?"]],
q:[
{t:"mc",q:"Quanti fratelli hai? — ___ ho tre.",o:["Ne","Li","Ci","Lo"],w:"With a quantity → ne."},
{t:"mc",q:"Cosa ___ pensi del nuovo ristorante?",o:["ne","ci","lo","gli"],w:"Pensare di qualcosa → ne."},
{t:"mc",q:"Quante cartoline hai scritto? — Ne ho ___ cinque.",o:["scritte","scritto","scritti","scritta"],w:"Ne refers to cartoline (feminine plural): scritte."},
{t:"mc",q:"Do you have any change? — No, ___",o:["non ne ho.","non lo ho.","non ho.","non ce l'ho niente."],w:"Non ne ho = I don't have any."},
{t:"mc",q:"'I'm leaving!' (fixed expression)",o:["Me ne vado!","Ne vado!","Mi vado!","Ci vado io!"],w:"Andarsene → me ne vado."},
{t:"fill",q:"Hai bisogno della mappa? — Sì, ___ ho bisogno.",a:["ne"],w:"Avere bisogno di → ne ho bisogno.",h:"di + thing"},
{t:"fill",q:"Quanti caffè hai bevuto? — Ne ho ___ quattro. (bere)",a:["bevuti"],w:"Caffè is masculine plural here → bevuti.",h:"agreement"},
{t:"order",a:"Cosa ne pensi di questo caffè?",en:"What do you think of this coffee?"}
]},
{
id:"a2-16", t:"Which & Whom: Relative Pronouns Che and Cui", s:"il ragazzo che…, la città in cui…", img:"venice",
goal:"Join sentences with che and cui to describe people, places and things.",
teach:[
["Che: the all-purpose relative","**Che** (who, whom, which, that) is invariable and works as **subject or direct object**: *Il ragazzo che parla è Marco* (subject). *Il libro che leggo è bello* (object). It is never omitted, unlike English *that*: *The book I'm reading* = *Il libro che leggo*."],
["Cui after prepositions","After a **preposition**, use **cui** (invariable): *la città in cui vivo* (the city I live in), *l'amico con cui viaggio*, *la ragione per cui studio italiano*, *la persona a cui ho scritto*. Italian never puts the preposition at the end like English."],
["Dove for places","For places, **dove** often replaces *in cui*: *Il ristorante dove abbiamo cenato* = *in cui abbiamo cenato*."],
["Il cui = whose","**Il cui / la cui / i cui / le cui** = whose. The article agrees with the thing possessed: *Lo scrittore il cui libro ho letto…* *La signora i cui figli abitano a Venezia…* (More at B1.)"]
],
tb:[{cap:"Relative pronouns",h:["Use","Pronoun","Example"],r:[["subject","che","La donna che canta è mia zia."],["direct object","che","Il film che ho visto era bello."],["after a preposition","cui","Il collega con cui lavoro."],["place","in cui / dove","La casa in cui / dove abito."],["reason","per cui","Il motivo per cui sono qui."],["to whom","a cui","La persona a cui ho scritto."]]}],
ex:[["La ragazza che vende i biglietti è veneziana.","The girl who sells the tickets is Venetian."],["Il palazzo che vedi è il Palazzo Ducale.","The palace you can see is the Doge's Palace."],["Questa è la calle in cui ci siamo persi ieri.","This is the street where we got lost yesterday."],["Il gondoliere con cui abbiamo parlato era simpaticissimo.","The gondolier we spoke to was very nice."],["Non capisco il motivo per cui il vaporetto è in ritardo.","I don't understand why the vaporetto is late."],["Il bacaro dove abbiamo mangiato i cicchetti è vicino a Rialto.","The bacaro where we ate cicchetti is near Rialto."],["L'amica a cui ho mandato le foto vive a Padova.","The friend I sent the photos to lives in Padua."],["Sono le persone di cui ti ho parlato.","They are the people I told you about."]],
err:[["Il libro ho letto è bello.","Il libro che ho letto è bello.","Che can never be omitted."],["La città che vivo è bella.","La città in cui vivo è bella.","Vivere in → in cui."],["La persona che ho parlato con.","La persona con cui ho parlato.","The preposition goes before cui, never at the end."]],
voc:[["il palazzo","palace; building"],["il gondoliere","gondolier"],["il bacaro","Venetian wine bar"],["i cicchetti","Venetian bar snacks"],["l'ombra","small glass of wine (Venice)"],["la laguna","lagoon"],["l'isola","island"],["il motivo","reason"],["la ragione","reason"],["perdersi","to get lost"],["vendere","to sell"],["parlare di","to talk about"],["lavorare con","to work with"],["il vetro","glass"],["il merletto","lace"],["la maschera","mask"]],
dia:[["Luke","Giulia, chi è il signore che ci saluta?","Giulia, who is the man waving at us?"],["Giulia","È il gondoliere con cui abbiamo fatto il giro ieri!","It's the gondolier we took the tour with yesterday!"],["Luke","Ah sì! E il ristorante di cui ci ha parlato, dov'è?","Oh yes! And the restaurant he told us about, where is it?"],["Giulia","È nella calle dove c'è la libreria con la gondola piena di libri.","It's in the street where there's the bookshop with the gondola full of books."]],
q:[
{t:"mc",q:"Il treno ___ prendo parte alle nove.",o:["che","cui","in cui","il cui"],w:"Direct object → che."},
{t:"mc",q:"L'amico con ___ viaggio si chiama Paolo.",o:["cui","che","quale","chi"],w:"After a preposition → cui."},
{t:"mc",q:"Questa è la casa ___ sono nato.",o:["in cui","che","a cui","cui che"],w:"Nascere in → in cui (or dove)."},
{t:"mc",q:"'The reason why I'm here' =",o:["Il motivo per cui sono qui.","Il motivo che sono qui.","Il motivo perché sono qui per.","Il motivo cui sono qui."],w:"Per cui = why / for which."},
{t:"mc",q:"Choose the correct sentence.",o:["Il libro di cui ti ho parlato è questo.","Il libro che ti ho parlato di è questo.","Il libro ti ho parlato è questo.","Il libro di che ti ho parlato è questo."],w:"Parlare di → di cui."},
{t:"fill",q:"La signora ___ abita qui è inglese.",a:["che"],w:"Subject → che.",h:"subject"},
{t:"fill",q:"Il collega a ___ ho scritto non ha risposto.",a:["cui"],w:"Scrivere a → a cui.",h:"after a"},
{t:"order",a:"Questa è la calle in cui ci siamo persi ieri.",en:"This is the street where we got lost yesterday."}
]},
{
id:"a2-17", t:"Right Now & About To: Stare + Gerund", s:"sto mangiando, stavo per uscire", img:"milan",
goal:"Describe actions in progress and actions that are about to happen.",
teach:[
["Forming the gerund","-are → **-ando** (*parlando, mangiando*), -ere and -ire → **-endo** (*prendendo, dormendo, finendo*). Irregulars from long stems: *fare → facendo, dire → dicendo, bere → bevendo, tradurre → traducendo*."],
["Stare + gerund: in progress","Use **stare** + gerund to stress that something is happening **right now**: *Cosa stai facendo? — Sto lavorando.* It's like English *-ing*, but used less often: for general or habitual actions, Italian prefers the simple present: *Lavoro in banca* (I work in a bank)."],
["In the past","Use the **imperfetto of stare** + gerund for an action in progress in the past: *Stavo dormendo quando hai chiamato.* (Not the passato prossimo of stare.)"],
["Stare per + infinitive: about to","**Stare per** + infinitive = to be about to: *Il treno sta per partire!* *Stavo per uscire quando ha cominciato a piovere.* Pronouns go before stare or attach to the gerund: *Lo sto leggendo / Sto leggendolo.*"]
],
tb:[{cap:"Stare + gerundio",h:["Person","present","imperfetto"],r:[["io","sto mangiando","stavo mangiando"],["tu","stai leggendo","stavi leggendo"],["lui/lei","sta dormendo","stava dormendo"],["noi","stiamo facendo","stavamo facendo"],["voi","state bevendo","stavate bevendo"],["loro","stanno dicendo","stavano dicendo"]]}],
ex:[["Pronto? Scusa, sto guidando, ti richiamo.","Hello? Sorry, I'm driving, I'll call you back."],["Cosa stai facendo? — Sto preparando la valigia.","What are you doing? — I'm packing my suitcase."],["Il treno per Torino sta per partire dal binario 12.","The train for Turin is about to leave from platform 12."],["Stavamo cenando quando è andata via la luce.","We were having dinner when the power went off."],["Sta piovendo: prendi l'ombrello!","It's raining: take the umbrella!"],["Stavo per chiamarti!","I was about to call you!"],["I ragazzi stanno studiando per l'esame.","The kids are studying for the exam."],["Che cosa stai dicendo? Non ti sento.","What are you saying? I can't hear you."]],
err:[["Sono mangiando.","Sto mangiando.","Italian uses stare, not essere, with the gerund."],["Ho stato dormendo.","Stavo dormendo.","For past progressive, use the imperfetto of stare."],["Sto lavorando in banca da anni.","Lavoro in banca da anni.","For general or long-term situations, use the simple present."]],
voc:[["il gerundio","gerund"],["stare per","to be about to"],["guidare","to drive"],["richiamare","to call back"],["preparare la valigia","to pack"],["andare via la luce","power cut"],["piovere","to rain"],["nevicare","to snow"],["il binario","platform"],["l'annuncio","announcement"],["il capotreno","train conductor"],["in partenza","departing"],["in arrivo","arriving"],["in ritardo","delayed"],["pronto?","hello? (phone)"],["proprio adesso","right now"]],
dia:[["Giulia","Pronto, Luke? Dove sei?","Hello, Luke? Where are you?"],["Luke","Sto correndo in stazione: il treno sta per partire!","I'm running to the station: the train is about to leave!"],["Giulia","Ma non avevi il treno delle sei?","But didn't you have the six o'clock train?"],["Luke","Sì, sono le cinque e cinquantacinque! Stavo bevendo un caffè e ho perso la cognizione del tempo.","Yes, it's five fifty-five! I was having a coffee and lost track of time."]],
q:[
{t:"mc",q:"Cosa ___ facendo adesso?",o:["stai","sei","hai","fai"],w:"Progressive = stare + gerund."},
{t:"mc",q:"Gerund of fare:",o:["facendo","fando","farendo","faciendo"],w:"Fare uses the long stem fac-: facendo."},
{t:"mc",q:"'I was sleeping when you called.'",o:["Stavo dormendo quando hai chiamato.","Sono stato dormendo quando chiamavi.","Stavo dormito quando hai chiamato.","Dormivo stando quando hai chiamato."],w:"Imperfetto of stare + gerund for an action in progress in the past."},
{t:"mc",q:"'The film is about to start.'",o:["Il film sta per cominciare.","Il film sta cominciando per.","Il film è per cominciare.","Il film sta a cominciare."],w:"Stare per + infinitive = to be about to."},
{t:"mc",q:"Which sentence describes a long-term situation correctly?",o:["Abito a Milano da tre anni.","Sto abitando a Milano da tre anni.","Sono abitando a Milano.","Sto abito a Milano."],w:"Long-term situations use the simple present + da."},
{t:"fill",q:"Sto ___ un libro di Calvino. (leggere)",a:["leggendo"],w:"-ere → -endo: leggendo.",h:"-endo"},
{t:"fill",q:"Silenzio, il bambino sta ___ ! (dormire)",a:["dormendo"],w:"-ire → -endo: dormendo.",h:"-endo"},
{t:"order",a:"Il treno per Torino sta per partire dal binario 12.",en:"The train for Turin is about to leave from platform 12."}
]},
{
id:"a2-18", t:"Shopping Quantities: Partitives & Indefinites", s:"del, qualche, alcuni, un po' di", img:"rome",
goal:"Buy food and talk about quantities naturally at the market and in shops.",
teach:[
["Three ways to say 'some'","1) **Di + article** (partitive): *del pane, della frutta, degli spaghetti, delle mele*. 2) **Alcuni / alcune** + plural noun: *alcuni amici, alcune mele*. 3) **Qualche** + **singular** noun (meaning plural!): *qualche amico* (some friends), *qualche giorno* (a few days). Qualche is invariable and always takes a singular noun and verb."],
["Un po' di","**Un po' di** (a bit of) works with uncountable nouns: *un po' di zucchero, un po' di pazienza*. Before a vowel: *un po' d'acqua*."],
["Measures and containers","*un chilo di pomodori, mezzo chilo, un etto (100 g) di prosciutto, una bottiglia d'olio, un pacco di pasta, una scatola di biscotti, un vasetto di miele, una lattina di Coca-Cola, una fetta di torta, un pezzo di formaggio*. Note: **di** without an article after measures."],
["In questions and negatives","In questions and negatives the partitive is often dropped: *Hai pane? Non compro carne.* *Nessun / nessuna* (no, not any) with singular nouns: *Non c'è nessun problema.*"]
],
tb:[{cap:"Some & any",h:["Form","Noun","Example"],r:[["del / della / dell'","singular (uncountable)","Vorrei del formaggio."],["dei / degli / delle","plural","Ho comprato delle pesche."],["alcuni / alcune","plural","Alcuni negozi sono chiusi."],["qualche","singular (= plural meaning)","Ho qualche domanda."],["un po' di","uncountable","Un po' di latte, grazie."],["nessun / nessuna","singular, negative","Non c'è nessuna fermata qui."]]}],
ex:[["Vorrei due etti di prosciutto crudo e del pecorino.","I'd like two hundred grams of prosciutto and some pecorino."],["Mi dà anche un chilo di pomodori maturi?","Can you also give me a kilo of ripe tomatoes?"],["Ho comprato alcune pesche e qualche albicocca.","I bought some peaches and a few apricots."],["Ci vuole un po' di pazienza.","It takes a little patience."],["Al mercato di Campo de' Fiori ci sono delle bancarelle bellissime.","At the Campo de' Fiori market there are some beautiful stalls."],["Vuole assaggiare un pezzo di formaggio?","Would you like to taste a piece of cheese?"],["Non c'è nessun problema, torni pure domani.","There's no problem at all, do come back tomorrow."],["Prendo una bottiglia d'olio extravergine.","I'll take a bottle of extra virgin olive oil."]],
err:[["Qualche amici","Qualche amico","Qualche is always followed by a singular noun."],["Un chilo delle mele","Un chilo di mele","After measures, di without an article."],["Alcuno pane","Del pane / Un po' di pane","Alcuni/alcune is only plural; use del or un po' di for uncountables."]],
voc:[["il mercato","market"],["la bancarella","stall"],["il fruttivendolo","greengrocer"],["la salumeria","delicatessen"],["il prosciutto crudo","cured ham"],["il pecorino","sheep's cheese"],["maturo","ripe"],["fresco","fresh"],["la pesca","peach"],["l'albicocca","apricot"],["il pomodoro","tomato"],["la scatola","box"],["il vasetto","jar"],["la lattina","can"],["la busta","bag"],["altro?","anything else?"]],
dia:[["Vendor","Buongiorno! Cosa le serve oggi?","Good morning! What do you need today?"],["Luke","Vorrei dei carciofi romani e un po' di rucola.","I'd like some Roman artichokes and a bit of rocket."],["Vendor","Quanti carciofi?","How many artichokes?"],["Luke","Quattro. E mi dà anche qualche limone?","Four. And could you also give me a few lemons?"],["Vendor","Ecco qua. Altro?","Here you are. Anything else?"],["Luke","No, basta così, grazie. Quant'è?","No, that's all, thanks. How much is it?"]],
q:[
{t:"mc",q:"Ho invitato ___ amico a cena.",o:["qualche","alcuni","qualcuni","dei"],w:"Qualche + singular noun."},
{t:"mc",q:"Vorrei un etto ___ prosciutto.",o:["di","del","dello","dal"],w:"After a measure: di without the article."},
{t:"mc",q:"Ci sono ___ studenti in biblioteca.",o:["alcuni","qualche","alcune","del"],w:"Studenti is masculine plural → alcuni."},
{t:"mc",q:"'A little water, please' =",o:["Un po' d'acqua, per favore.","Qualche acqua, per favore.","Alcune acqua, per favore.","Un poco di l'acqua."],w:"Un po' di (d') with uncountable nouns."},
{t:"mc",q:"Non c'è ___ autobus a quest'ora.",o:["nessun","nessuno","nessuna","alcun"],w:"Before a masculine noun beginning with a vowel or consonant: nessun (like un)."},
{t:"fill",q:"Ho comprato ___ mele. (some — di + article)",a:["delle"],w:"Mele is feminine plural: di + le = delle.",h:"di + le"},
{t:"fill",q:"Resto a Roma ___ giorno. (a few)",a:["qualche"],w:"Qualche giorno = a few days.",h:"singular noun"},
{t:"order",a:"Vorrei due etti di prosciutto crudo e del pecorino.",en:"I'd like two hundred grams of prosciutto and some pecorino."}
]},
{
id:"a2-19", t:"Bello, Buono, Quello", s:"forms that behave like articles", img:"tuscany",
goal:"Use bello, buono and quello correctly before nouns — a mark of natural Italian.",
teach:[
["Bello and quello copy the definite article","Before a noun, **bello** and **quello** change exactly like **il / lo / l' / la / i / gli / le**: *il → bel, quel* (*un bel ragazzo, quel libro*); *lo → bello, quello* (*un bello zaino, quello studente*); *l' → bell', quell'* (*un bell'albergo, quell'amica*); *la → bella, quella*; *i → bei, quei* (*bei posti, quei treni*); *gli → begli, quegli* (*begli occhi, quegli zii*); *le → belle, quelle*."],
["After the noun, normal forms","After the noun or after essere, bello is regular: *Il posto è bello. I posti sono belli.* Quello alone as a pronoun: *Quale vuoi? Quello.* (Which one? That one.)"],
["Buono copies the indefinite article","In the singular, **buono** changes like **un / uno / una / un'**: *un buon vino, un buon amico* (like un), *un buono stipendio* (like uno), *una buona pizza, una buon'idea* (like una / un'). Plural is regular: *buoni vini, buone pizze*."],
["Common expressions","*Buon appetito! Buon viaggio! Buona fortuna! Buon compleanno! Buona notte!* *Che bel tempo! Che bella giornata!* *Quel ristorante lì* (that restaurant there)."]
],
tb:[{cap:"Bello and quello before nouns",h:["Article","bello","quello","Example"],r:[["il","bel","quel","quel bel castello"],["lo","bello","quello","quello zaino"],["l'","bell'","quell'","quell'albergo"],["la","bella","quella","quella bella villa"],["i","bei","quei","quei bei vigneti"],["gli","begli","quegli","quegli alberi"],["le","belle","quelle","quelle belle colline"]]}],
ex:[["Che bel paesaggio! Guarda quei cipressi.","What a beautiful landscape! Look at those cypress trees."],["Abbiamo trovato un bell'agriturismo vicino a Montepulciano.","We found a lovely farm stay near Montepulciano."],["Quel vino rosso è un Brunello di Montalcino.","That red wine is a Brunello di Montalcino."],["È un buon vino, ma un po' caro.","It's a good wine, but a bit expensive."],["Quegli studenti vengono dall'Australia.","Those students come from Australia."],["Buon viaggio e buona fortuna!","Have a good trip and good luck!"],["Quale borsa preferisci? — Quella rossa.","Which bag do you prefer? — The red one."],["I colli toscani sono davvero belli.","The Tuscan hills are really beautiful."]],
err:[["Quello ragazzo","Quel ragazzo","Before a normal consonant, quello → quel (like il)."],["I belli posti","I bei posti","Before a noun, bello follows the article: i → bei."],["Un buono vino","Un buon vino","Buono before a masculine noun follows un → buon."]],
voc:[["il paesaggio","landscape"],["il cipresso","cypress"],["la collina / il colle","hill"],["l'agriturismo","farm stay"],["il vigneto","vineyard"],["la cantina","wine cellar"],["la degustazione","tasting"],["il castello","castle"],["la villa","villa"],["l'ulivo","olive tree"],["il borgo","medieval village"],["la strada bianca","gravel road"],["buon appetito","enjoy your meal"],["buon viaggio","have a good trip"],["buona fortuna","good luck"],["che bello!","how lovely!"]],
dia:[["Luke","Che bella vista da questa collina!","What a beautiful view from this hill!"],["Guide","Vede quel borgo laggiù? È Pienza.","Do you see that village down there? It's Pienza."],["Luke","E quegli edifici vicino al vigneto?","And those buildings near the vineyard?"],["Guide","Sono le cantine. Più tardi faremo una degustazione: hanno un ottimo Rosso di Montepulciano.","They're the wine cellars. Later we'll do a tasting: they have an excellent Rosso di Montepulciano."]],
q:[
{t:"mc",q:"Che ___ albergo!",o:["bell'","bello","bel","bella"],w:"Albergo takes l' → bell'."},
{t:"mc",q:"Ti piacciono ___ scarpe?",o:["quelle","quei","quegli","quella"],w:"Scarpe → le → quelle."},
{t:"mc",q:"Abbiamo visto dei ___ posti.",o:["bei","belli","begli","bel"],w:"Posti takes i → bei."},
{t:"mc",q:"È un ___ amico.",o:["buon","buono","buon'","buona"],w:"Buono before a masculine noun follows un → buon (no apostrophe)."},
{t:"mc",q:"___ studenti sono simpatici.",o:["Quegli","Quei","Quelli","Quelle"],w:"Studenti takes gli → quegli."},
{t:"fill",q:"Ho mangiato una ___ pizza. (buono)",a:["buona"],w:"Feminine: buona.",h:"feminine"},
{t:"fill",q:"Ti piace ___ ristorante? (that)",a:["quel"],w:"Ristorante takes il → quel.",h:"like il"},
{t:"order",a:"Che bel paesaggio! Guarda quei cipressi.",en:"What a beautiful landscape! Look at those cypress trees."}
]},
{
id:"a2-20", t:"How Long? Time Expressions", s:"da, fa, per, tra, entro, fino a", img:"venice",
goal:"Say how long something has been happening, how long ago and when something will happen.",
teach:[
["Da + present: since / for (still true)","For something that **started in the past and is still going on**, Italian uses the **present** + **da**: *Studio italiano da sei mesi* (I've been studying Italian for six months). *Abito qui dal 2022.* Question: **Da quanto tempo…?**"],
["Fa: ago","**Fa** follows the time expression: *due anni fa* (two years ago), *poco fa* (a moment ago), *molto tempo fa*. It goes with past tenses: *Sono arrivato in Italia tre mesi fa.*"],
["Per: for (finished duration)","**Per** + duration for a completed or planned period: *Ho vissuto a Milano per tre anni* (and I don't live there now). *Resto a Venezia per una settimana.* Often per can be omitted: *Ho dormito dieci ore.*"],
["Tra / fra, entro, fino a","**Tra / fra** = in (future): *Parto tra due giorni.* **Entro** = by / within: *Mandami la mail entro venerdì.* **Fino a** = until: *Resto fino a domenica. Il museo è aperto fino alle sette.* **Da… a…** = from… to: *dalle nove alle cinque.*"]
],
tb:[{cap:"Time prepositions",h:["Expression","Meaning","Example"],r:[["da + present","for / since (ongoing)","Lavoro qui da un anno."],["… fa","ago","L'ho visto un'ora fa."],["per","for (closed period)","Ho vissuto lì per due anni."],["tra / fra","in (future)","Arriviamo tra un'ora."],["entro","by / within","Entro le otto."],["fino a","until","Fino a lunedì."],["da… a…","from… to…","Dal 3 al 10 maggio."]]}],
ex:[["Da quanto tempo sei a Venezia? — Da tre giorni.","How long have you been in Venice? — For three days."],["Ho conosciuto Giulia due anni fa.","I met Giulia two years ago."],["Resteremo qui fino a domenica.","We'll stay here until Sunday."],["Il vaporetto passa tra cinque minuti.","The vaporetto comes in five minutes."],["Deve lasciare la camera entro le dieci.","You must leave the room by ten."],["Ho aspettato il traghetto per un'ora.","I waited for the ferry for an hour."],["Non vedo i miei genitori da Natale.","I haven't seen my parents since Christmas."],["La mostra è aperta dal 20 aprile al 24 novembre.","The exhibition is open from 20 April to 24 November."]],
err:[["Sono a Venezia per tre giorni (and still here).","Sono a Venezia da tre giorni.","Ongoing situations use present + da."],["Fa due anni ho visitato Roma.","Due anni fa ho visitato Roma.","Fa comes after the time expression."],["Ti chiamo in cinque minuti.","Ti chiamo tra cinque minuti.","Future 'in' with time = tra / fra."]],
voc:[["da quanto tempo","how long"],["fa","ago"],["poco fa","a moment ago"],["tra / fra","in (future)"],["entro","by, within"],["fino a","until"],["la mostra","exhibition"],["la Biennale","Venice art exhibition"],["il traghetto","ferry"],["l'orario","timetable; opening hours"],["la scadenza","deadline"],["il check-out","check-out"],["ormai","by now"],["ancora","still; yet"],["di nuovo","again"],["prima / dopo","before / after"]],
dia:[["Receptionist","Buongiorno. Da quanto tempo siete a Venezia?","Good morning. How long have you been in Venice?"],["Luke","Da due giorni. Siamo arrivati martedì.","For two days. We arrived on Tuesday."],["Receptionist","E fino a quando restate?","And until when are you staying?"],["Luke","Fino a sabato. Partiamo tra quattro giorni, purtroppo.","Until Saturday. We leave in four days, unfortunately."],["Receptionist","Ricordate che il check-out è entro le undici.","Remember that check-out is by eleven."]],
q:[
{t:"mc",q:"Studio l'italiano ___ un anno (and I still do).",o:["da","per","fa","tra"],w:"Ongoing → present + da."},
{t:"mc",q:"Sono arrivato in Italia tre mesi ___.",o:["fa","da","tra","per"],w:"Ago = fa, after the time expression."},
{t:"mc",q:"Il treno parte ___ dieci minuti.",o:["tra","da","fa","entro fa"],w:"Future 'in' = tra / fra."},
{t:"mc",q:"Ho vissuto a Londra ___ cinque anni (I don't anymore).",o:["per","da","fa","fino"],w:"A closed period = per."},
{t:"mc",q:"Devi pagare ___ venerdì.",o:["entro","fa","da","tra fa"],w:"By / no later than = entro."},
{t:"fill",q:"Il museo è aperto ___ alle diciannove. (until)",a:["fino"],w:"Fino a = until: fino alle diciannove.",h:"until"},
{t:"fill",q:"___ quanto tempo abiti qui?",a:["da"],w:"Da quanto tempo… = How long (ongoing)?",h:"da"},
{t:"order",a:"Da quanto tempo sei a Venezia?",en:"How long have you been in Venice?"}
]},
{
id:"a2-21", t:"Someone, No One, Everything", s:"qualcuno, nessuno, niente, ogni, tutto", img:"cinque",
goal:"Talk about people and things in general with indefinite words and double negatives.",
teach:[
["Qualcuno, qualcosa","**Qualcuno** = someone / anyone (in questions): *C'è qualcuno?* **Qualcosa** = something / anything: *Vuoi qualcosa da bere? Hai qualcosa di più economico?* Note **qualcosa di + adjective** and **qualcosa da + infinitive**."],
["Nessuno, niente / nulla","**Nessuno** = no one; **niente / nulla** = nothing. After the verb they need **non**: *Non c'è nessuno. Non ho mangiato niente.* Before the verb, no non: *Nessuno è venuto. Niente è impossibile.*"],
["Ogni, ognuno, tutto","**Ogni** (every) is invariable and takes a singular noun: *ogni giorno, ogni settimana*. **Ognuno** = everyone (each one), with a singular verb: *Ognuno paga per sé.* **Tutto** + article + noun: *tutto il giorno* (all day), *tutti i giorni* (every day), *tutta la città*. **Tutti** alone = everybody: *Tutti parlano di questo.*"],
["Altro, ciascuno, chiunque","*Un altro caffè* (another coffee), *gli altri* (the others), *altro?* (anything else?). **Ciascuno** = each. **Chiunque** = anyone at all: *Chiunque può imparare l'italiano.*"]
],
tb:[{cap:"Indefinites",h:["Word","Meaning","Example"],r:[["qualcuno","someone","Qualcuno ha chiamato."],["qualcosa","something","Mangiamo qualcosa?"],["nessuno","no one","Non c'è nessuno."],["niente / nulla","nothing","Non vedo niente."],["ogni","every (+ singular)","Ogni mattina corro."],["tutto il / tutti i","all the / every","Tutti i treni sono pieni."],["ognuno","everyone (each)","Ognuno ha la sua opinione."],["chiunque","anyone (at all)","Chiunque può farlo."]]}],
ex:[["C'è qualcuno che parla inglese qui?","Is there anyone who speaks English here?"],["Vuoi qualcosa di fresco da bere?","Do you want something cold to drink?"],["Non c'è nessuno sul sentiero a quest'ora.","There's no one on the path at this hour."],["Non ho capito niente!","I didn't understand anything!"],["Ogni estate migliaia di turisti visitano le Cinque Terre.","Every summer thousands of tourists visit the Cinque Terre."],["Abbiamo camminato tutto il giorno.","We walked all day."],["Tutti i treni locali fermano a Vernazza.","All the local trains stop at Vernazza."],["Nessuno mi ha detto che il sentiero era chiuso!","Nobody told me the path was closed!"]],
err:[["Ogni giorni","Ogni giorno","Ogni is followed by a singular noun."],["Ho capito niente.","Non ho capito niente.","Niente after the verb needs non."],["Tutti giorni","Tutti i giorni","Tutto needs the article before the noun."]],
voc:[["qualcuno","someone"],["qualcosa","something"],["nessuno","no one"],["niente / nulla","nothing"],["ogni","every"],["ognuno","everyone (each)"],["tutto","all, everything"],["chiunque","anyone"],["altro","other"],["il sentiero","path"],["la stazione","station"],["il borgo","village"],["il treno regionale","local train"],["la Carta Cinque Terre","Cinque Terre pass"],["affollato","crowded"],["chiuso per frana","closed due to a landslide"]],
dia:[["Luke","Scusi, c'è qualcuno qui che vende la Carta Cinque Terre?","Excuse me, is there someone here who sells the Cinque Terre Card?"],["Clerk","Sì, all'ufficio informazioni. Ma oggi non c'è nessuno, è chiuso.","Yes, at the information office. But today there's no one, it's closed."],["Luke","Allora posso comprarla da qualche altra parte?","Then can I buy it somewhere else?"],["Clerk","In ogni stazione, alla biglietteria automatica. Tutti i giorni dalle sette alle venti.","In every station, at the ticket machine. Every day from seven to eight pm."]],
q:[
{t:"mc",q:"___ è venuto alla festa. (No one)",o:["Nessuno","Non nessuno","Qualcuno non","Niente"],w:"Before the verb, nessuno needs no non."},
{t:"mc",q:"Non ho mangiato ___ .",o:["niente","qualcosa","nessuno","ogni"],w:"Non… niente = nothing."},
{t:"mc",q:"Vado in palestra ___ giorno.",o:["ogni","tutti","ognuno","qualche giorni"],w:"Ogni + singular."},
{t:"mc",q:"Vuoi qualcosa ___ bere?",o:["da","di","a","per il"],w:"Qualcosa da + infinitive."},
{t:"mc",q:"'All the shops are closed.'",o:["Tutti i negozi sono chiusi.","Tutti negozi sono chiusi.","Ogni negozi sono chiusi.","Tutto i negozi sono chiusi."],w:"Tutti + article + noun."},
{t:"fill",q:"Hai qualcosa ___ più economico? (something cheaper)",a:["di"],w:"Qualcosa di + adjective.",h:"di or da?"},
{t:"fill",q:"Non conosco ___ qui. (anybody)",a:["nessuno"],w:"Non… nessuno = nobody / not anybody.",h:"double negative"},
{t:"order",a:"Non c'è nessuno sul sentiero a quest'ora.",en:"There's no one on the path at this hour."}
]},
{
id:"a2-22", t:"At the Doctor's & Pharmacy", s:"mi fa male, ho la febbre", img:"milan",
goal:"Describe symptoms, understand advice and get what you need at a pharmacy.",
teach:[
["Saying what hurts","Use **mi fa male** + singular body part and **mi fanno male** + plural: *Mi fa male la testa. Mi fanno male i piedi.* Or **ho mal di** + body part: *Ho mal di testa / di gola / di pancia / di denti / di schiena*."],
["Common symptoms","**Ho la febbre** (I have a temperature), **ho il raffreddore** (a cold), **ho la tosse** (a cough), **ho la nausea**, **mi gira la testa** (I feel dizzy), **sono allergico a…**, **mi sono fatto male alla caviglia** (I hurt my ankle), **mi sono tagliato** (I cut myself)."],
["At the pharmacy","Italian pharmacies (green cross) give advice for minor problems. Ask: *Avete qualcosa per il mal di gola? Serve la ricetta?* (Do I need a prescription?) Many medicines need a **ricetta medica**. At night, look for the **farmacia di turno** (duty pharmacy)."],
["Understanding advice","Doctors use the formal imperative and dovere: *Prenda una compressa tre volte al giorno. Beva molta acqua. Deve stare a riposo per tre giorni. Non mangi cibi pesanti.* Emergency number in Europe: **112**. The **pronto soccorso** is A&E."]
],
tb:[{cap:"Body and pain",h:["Body part","Plural","Saying it hurts"],r:[["la testa (head)","—","Mi fa male la testa."],["la gola (throat)","—","Ho mal di gola."],["lo stomaco / la pancia","—","Ho mal di pancia."],["il braccio","le braccia","Mi fanno male le braccia."],["il ginocchio","le ginocchia","Mi fa male il ginocchio."],["il dito","le dita","Mi sono tagliato un dito."],["l'orecchio","le orecchie","Ho mal d'orecchie."],["il piede","i piedi","Mi fanno male i piedi."]]}],
ex:[["Buongiorno, ho mal di gola e un po' di febbre.","Good morning, I have a sore throat and a bit of a temperature."],["Da quanto tempo ha questi sintomi?","How long have you had these symptoms?"],["Mi fanno male le gambe dopo la camminata.","My legs hurt after the hike."],["Avete qualcosa per il raffreddore senza ricetta?","Do you have something for a cold without a prescription?"],["Prenda una compressa dopo i pasti, per cinque giorni.","Take one tablet after meals, for five days."],["Sono allergico alla penicillina.","I'm allergic to penicillin."],["Mi sono fatto male alla caviglia giocando a calcio.","I hurt my ankle playing football."],["Dov'è la farmacia di turno più vicina?","Where is the nearest duty pharmacy?"]],
err:[["Mi fa male i piedi.","Mi fanno male i piedi.","Plural body parts → fanno."],["Ho febbre.","Ho la febbre.","Italian uses the article: ho la febbre, ho la tosse."],["I miei bracci","Le mie braccia","Braccio has an irregular feminine plural: le braccia."]],
voc:[["il medico","doctor"],["la farmacia","pharmacy"],["la ricetta","prescription"],["la compressa","tablet"],["lo sciroppo","syrup"],["la pomata","ointment"],["il cerotto","plaster"],["la febbre","fever"],["la tosse","cough"],["il raffreddore","cold"],["l'influenza","flu"],["il pronto soccorso","A&E, ER"],["la guardia medica","out-of-hours doctor"],["i sintomi","symptoms"],["stare a riposo","to rest"],["guarire","to recover"]],
dia:[["Pharmacist","Buonasera, mi dica.","Good evening, how can I help?"],["Luke","Ho una tosse forte e mi fa male la gola da due giorni.","I have a bad cough and my throat has hurt for two days."],["Pharmacist","Ha anche la febbre?","Do you have a temperature too?"],["Luke","No, ma sono molto stanco.","No, but I'm very tired."],["Pharmacist","Le do uno sciroppo e delle pastiglie per la gola. Se tra tre giorni non sta meglio, vada dal medico.","I'll give you a syrup and some throat lozenges. If you're not better in three days, go to the doctor."]],
q:[
{t:"mc",q:"Mi ___ male i denti.",o:["fanno","fa","fano","sono"],w:"I denti is plural → fanno."},
{t:"mc",q:"'I have a temperature' =",o:["Ho la febbre.","Sono febbre.","Ho febbre io.","Mi fa febbre."],w:"Avere la febbre (with article)."},
{t:"mc",q:"The doctor says 'Beva molta acqua.' This means:",o:["Drink a lot of water.","He drank a lot of water.","You drink too much water.","Don't drink water."],w:"Beva is the formal imperative of bere."},
{t:"mc",q:"Plural of 'il ginocchio':",o:["le ginocchia","i ginocchi only","le ginocchie","i ginocchii"],w:"Like braccio and dito, ginocchio has a feminine plural in -a."},
{t:"mc",q:"At night you need medicine. You look for:",o:["la farmacia di turno","il pronto farmaco","la guardia di turno del bar","la ricetta notturna"],w:"The farmacia di turno is the pharmacy open at night or on holidays."},
{t:"fill",q:"Ho mal ___ testa.",a:["di"],w:"Avere mal di + body part.",h:"preposition"},
{t:"fill",q:"Serve la ___ medica per questo farmaco? (prescription)",a:["ricetta"],w:"Prescription = la ricetta (medica).",h:"r…"},
{t:"order",a:"Ho mal di gola e un po' di febbre.",en:"I have a sore throat and a bit of a temperature."}
]}
];
