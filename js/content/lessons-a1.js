/* Italiano con Luke — A1 Beginner course.
   Lesson schema: id, t (title), s (subtitle), img, goal, teach [[heading, text]], tb [{cap,h,r}],
   ex [[it,en]], err [[wrong,right,why]], voc [[it,en]], dia [[speaker,it,en]],
   q: exercises — mc {q,o (first option is correct),w}, fill {q,a[],w,h}, order {a,en}. */
window.IT_LESSONS = window.IT_LESSONS || {};
IT_LESSONS.A1 = [
{
id:"a1-01", t:"Ciao! Greetings & Introductions", s:"Hello, goodbye, tu and Lei", img:"rome",
goal:"Greet people at any time of day, introduce yourself, and choose between informal tu and formal Lei.",
teach:[
["Greetings change with the time and the relationship","Italian has two layers of greetings. **Ciao** is informal: use it with friends, family, children and people your age in relaxed settings. It means both *hello* and *goodbye*. With shop staff, older people, officials or anyone you don't know, use **buongiorno** (good morning / good day, until mid-afternoon) and **buonasera** (good evening, from roughly 4–5 pm). **Salve** is a safe neutral hello when you are unsure."],
["Tu or Lei? The most important choice","Italian has two ways of saying *you* to one person. **Tu** is informal. **Lei** (with a capital L in writing) is formal and takes the same verb form as *she/he*. So *How are you?* is **Come stai?** to a friend but **Come sta?** to a hotel receptionist. When in doubt, start with Lei: Italians will invite you to switch by saying *Diamoci del tu!* (Let's use tu)."],
["Introducing yourself","**Mi chiamo Luke** literally means *I call myself Luke*. You can also say **Sono Luke** (I'm Luke). To ask someone's name: **Come ti chiami?** (informal) or **Come si chiama?** (formal). When you meet someone, say **Piacere!** (Pleased to meet you) — the answer is often *Piacere mio!* (The pleasure is mine)."],
["Saying goodbye","**Arrivederci** is the standard goodbye; **ArrivederLa** is very formal. **A presto** = see you soon, **A domani** = see you tomorrow, **Buona giornata** = have a nice day, **Buona serata** = have a nice evening. **Buonanotte** is only for going to bed or the very end of the night."]
],
tb:[{cap:"Informal vs formal",h:["Situation","Informal (tu)","Formal (Lei)"],r:[["Hello","Ciao!","Buongiorno! / Buonasera!"],["How are you?","Come stai?","Come sta?"],["What's your name?","Come ti chiami?","Come si chiama?"],["Where are you from?","Di dove sei?","Di dov'è?"],["Goodbye","Ciao! / A presto!","Arrivederci! / ArrivederLa!"]]}],
ex:[["Buongiorno, signora! Come sta?","Good morning, madam! How are you?"],["Bene, grazie. E Lei?","Well, thank you. And you? (formal)"],["Ciao, Giulia! Come stai?","Hi, Giulia! How are you?"],["Mi chiamo Luke. Piacere!","My name is Luke. Nice to meet you!"],["Come si chiama, scusi?","What is your name, excuse me? (formal)"],["Sono americano, di Chicago.","I'm American, from Chicago."],["Buonasera a tutti!","Good evening, everyone!"],["Arrivederci e buona giornata!","Goodbye and have a nice day!"]],
err:[["Buonanotte! (arriving at a restaurant at 9 pm)","Buonasera!","Buonanotte is only used when leaving for the night or going to bed. On arrival in the evening, say buonasera."],["Come stai? (to a police officer)","Come sta?","Use the formal Lei form with officials and strangers: the verb takes the 'he/she' form, sta."],["Ciao! (to an elderly shopkeeper you've never met)","Buongiorno!","Ciao is informal. Buongiorno is the polite default in shops."]],
voc:[["ciao","hi / bye (informal)"],["buongiorno","good morning / good day"],["buonasera","good evening"],["buonanotte","good night"],["salve","hello (neutral)"],["arrivederci","goodbye"],["piacere","nice to meet you"],["grazie","thank you"],["prego","you're welcome"],["scusi","excuse me (formal)"],["scusa","excuse me / sorry (informal)"],["a presto","see you soon"],["bene","well / fine"],["male","badly"],["così così","so-so"],["signore / signora","sir / madam"]],
dia:[["Receptionist","Buonasera! Benvenuto all'Hotel Roma.","Good evening! Welcome to Hotel Roma."],["Luke","Buonasera! Mi chiamo Luke Bennett. Ho una prenotazione.","Good evening! My name is Luke Bennett. I have a reservation."],["Receptionist","Piacere, signor Bennett. Come sta?","Nice to meet you, Mr Bennett. How are you?"],["Luke","Bene, grazie, un po' stanco. E Lei?","Fine, thanks, a bit tired. And you?"],["Receptionist","Benissimo, grazie! Ecco la chiave.","Very well, thank you! Here is the key."]],
q:[
{t:"mc",q:"It is 8 pm and you walk into a restaurant. What do you say to the waiter?",o:["Buonasera!","Buonanotte!","Buongiorno!","Arrivederci!"],w:"In the evening, buonasera is the greeting on arrival. Buonanotte is only for leaving at night or bedtime."},
{t:"mc",q:"How do you ask a hotel manager 'How are you?'",o:["Come sta?","Come stai?","Come stanno?","Come state?"],w:"Formal Lei uses the third-person form: Come sta? Come stai is for friends."},
{t:"mc",q:"Someone says 'Piacere!' when meeting you. A natural reply is:",o:["Piacere mio!","Prego!","A domani!","Buonanotte!"],w:"Piacere mio means 'the pleasure is mine'. Prego answers grazie, not piacere."},
{t:"mc",q:"Which greeting can mean BOTH hello and goodbye?",o:["Ciao","Buonasera","Salve","Arrivederci"],w:"Ciao works for both arriving and leaving, but only in informal situations."},
{t:"fill",q:"Complete: Mi ___ Luke. (My name is Luke.)",a:["chiamo"],w:"Mi chiamo = I call myself. The verb is chiamarsi, io form: (mi) chiamo.",h:"chiam…"},
{t:"fill",q:"Formal: Come si ___? (What is your name?)",a:["chiama"],w:"With Lei, use the third-person form: Come si chiama?",h:"Lei form of chiamarsi"},
{t:"order",a:"Buongiorno, come sta?",en:"Good morning, how are you? (formal)"},
{t:"order",a:"Piacere, mi chiamo Luke.",en:"Nice to meet you, my name is Luke."}
]},
{
id:"a1-02", t:"Sounds of Italian", s:"Alphabet, c/g, gn, gli, double consonants", img:"florence",
goal:"Read any Italian word aloud correctly, using the regular spelling-to-sound rules.",
teach:[
["Italian is read as it is written","Good news: Italian spelling is very regular. Every vowel is pronounced, clearly and fully: **a** as in *father*, **e** as in *bet* (or *they* without the glide), **i** as in *machine*, **o** as in *more*, **u** as in *rule*. There are no silent vowels at the end of words: *pane* is PA-neh, not 'pain'."],
["C and G: hard or soft?","**C** and **G** are hard (k, g) before **a, o, u** and soft (ch, j) before **e, i**. So *casa* (KA-za), *cosa*, *cucina*; but *cena* (CHEH-na), *ciao* (CHAO). To keep a hard sound before e/i, Italian adds **h**: *che* (keh), *chi* (kee), *spaghetti* (spa-GET-tee). To get a soft sound before a/o/u, Italian adds a silent **i**: *ciao*, *giorno* (JOR-no), *giugno*."],
["Special combinations","**gn** sounds like *ny* in *canyon*: *gnocchi*, *bagno*, *signora*. **gli** is like *lli* in *million*, but tighter: *figlio*, *famiglia*, *biglietto*. **sc** before e/i is *sh*: *pesce* (PEH-sheh), *scienza*; but **sch** is *sk*: *schiena*, *Ischia*. **h** is always silent: *ho*, *hanno*."],
["Double consonants matter","Double consonants are held longer, and they change meaning: **pala** (shovel) vs **palla** (ball), **caro** (dear) vs **carro** (cart), **nono** (ninth) vs **nonno** (grandfather), **pena** vs **penna** (pen). Pause slightly on the double letter: *bel-lo*, *pas-ta*, *at-to*."],
["Stress and accents","Most words are stressed on the second-to-last syllable: *ra-GAZ-zo*, *ita-LIA-no*. A written accent marks a stressed final vowel: *città*, *caffè*, *perché*, *università*. The accent also distinguishes words: **è** (is) vs **e** (and)."]
],
tb:[{cap:"C and G at a glance",h:["Spelling","Sound","Examples"],r:[["ca, co, cu","k","casa, cosa, cuore"],["che, chi","k","anche, chiave"],["ce, ci","ch (church)","cena, cinema"],["cia, cio, ciu","ch + a/o/u","ciao, cioccolato"],["ga, go, gu","g (go)","gatto, gonna, gusto"],["ghe, ghi","g (go)","spaghetti, laghi"],["ge, gi","j (jam)","gelato, giro"],["gia, gio, giu","j + a/o/u","giallo, giorno, giugno"]]}],
ex:[["Ciao, ci vediamo al cinema.","Hi, see you at the cinema."],["Gli spaghetti sono buonissimi.","The spaghetti is delicious."],["Mia figlia ama gli gnocchi.","My daughter loves gnocchi."],["Il pesce è fresco.","The fish is fresh."],["Ho un biglietto per Chianti.","I have a ticket for Chianti."],["Il nonno ha nove anni? No, novanta!","Grandpa is nine? No, ninety!"],["La città è bellissima.","The city is very beautiful."],["Un caffè e un cornetto, per favore.","A coffee and a croissant, please."]],
err:[["Reading 'chiesa' as CHEE-eh-za","KYEH-za","Ch is always a hard k sound in Italian, never the English 'ch'."],["Reading 'pane' as one syllable 'pain'","PA-neh","Final vowels are always pronounced."],["Writing 'e' when you mean 'is'","è","È (with accent) = is; e (no accent) = and. Luke è americano e simpatico."]],
voc:[["la casa","the house"],["la cena","dinner"],["il cinema","the cinema"],["la chiave","the key"],["il gelato","ice cream"],["il giorno","day"],["la famiglia","family"],["il figlio","son"],["il bagno","bathroom"],["il pesce","fish"],["il biglietto","ticket"],["la città","city"],["il caffè","coffee"],["il nonno","grandfather"],["la penna","pen"],["la palla","ball"]],
dia:[["Luke","Scusi, come si pronuncia questa parola?","Excuse me, how do you pronounce this word?"],["Teacher","Si dice 'gnocchi'. Ripeti: gno-cchi.","It's said 'gnocchi'. Repeat: gno-cchi."],["Luke","Gnocchi. È giusto?","Gnocchi. Is that right?"],["Teacher","Perfetto! Ora prova 'famiglia'.","Perfect! Now try 'famiglia'."]],
q:[
{t:"mc",q:"How is 'ch' pronounced in 'chiave'?",o:["Like k in 'key'","Like ch in 'cheese'","Like sh in 'shoe'","It is silent"],w:"In Italian, ch is always hard (k). Chiave = KYAH-veh."},
{t:"mc",q:"Which word contains the 'ny' sound of 'canyon'?",o:["bagno","bango","banco","bagaglio"],w:"The combination gn sounds like 'ny': ba-nyo."},
{t:"mc",q:"Which pair differs ONLY by a double consonant?",o:["nono / nonno","cane / pane","casa / cosa","vino / vento"],w:"Nono (ninth) and nonno (grandfather): the double n is held longer and changes the meaning."},
{t:"mc",q:"How is 'sc' pronounced in 'pesce'?",o:["sh","sk","s + ch","ss"],w:"Sc before e or i sounds like English sh: PEH-sheh."},
{t:"mc",q:"In which word is G pronounced like the j in 'jam'?",o:["gelato","gatto","spaghetti","gusto"],w:"G is soft before e and i: ge-la-to. Gh in spaghetti keeps it hard."},
{t:"mc",q:"'Luke ___ americano.' Which word means 'is'?",o:["è","e","é","ha"],w:"È with a grave accent is the verb 'is'. E without an accent means 'and'."},
{t:"order",a:"La città è bellissima.",en:"The city is very beautiful."},
{t:"order",a:"Un caffè e un cornetto, per favore.",en:"A coffee and a croissant, please."}
]},
{
id:"a1-03", t:"Who Are You? Subject Pronouns & Essere", s:"io sono, tu sei…", img:"rome",
goal:"Use the verb essere (to be) with all persons to describe nationality, profession and personality.",
teach:[
["Subject pronouns","The subject pronouns are **io** (I), **tu** (you, informal), **lui** (he), **lei** (she), **Lei** (you, formal), **noi** (we), **voi** (you all), **loro** (they). Italians usually **drop the pronoun** because the verb ending already shows who is speaking: *Sono stanco* = I am tired. Use the pronoun only for emphasis or contrast: *Io sono americano, lui è inglese.*"],
["Essere is irregular — learn it by heart","**Essere** (to be) is the most important verb in Italian. Its forms are: *io sono, tu sei, lui/lei/Lei è, noi siamo, voi siete, loro sono*. Notice that **sono** means both *I am* and *they are* — context tells you which."],
["What essere expresses","Use essere for identity (*Sono Luke*), nationality (*È italiana*), origin with **di** + city (*Sono di Boston*), profession (*Sono ingegnere* — no article!), personality and appearance (*Siete simpatici*), and location (*Il Colosseo è a Roma*)."],
["Adjectives agree with the person","Descriptive adjectives change ending: masculine **-o**, feminine **-a**, plural **-i / -e**: *Luke è americano, Giulia è italiana, Luke e Mark sono americani, Giulia e Sara sono italiane.* Adjectives ending in **-e** have one singular form: *È inglese* (he or she), plural *inglesi*."]
],
tb:[{cap:"Essere — present tense",h:["Person","Essere","Example"],r:[["io","sono","Sono americano."],["tu","sei","Sei stanco?"],["lui / lei / Lei","è","Lei è molto gentile."],["noi","siamo","Siamo a Roma."],["voi","siete","Siete italiani?"],["loro","sono","Sono studenti."]]}],
ex:[["Sono Luke, sono americano.","I'm Luke, I'm American."],["Giulia è di Firenze.","Giulia is from Florence."],["Siamo in vacanza a Roma.","We are on holiday in Rome."],["Siete inglesi o irlandesi?","Are you (all) English or Irish?"],["Marco è medico.","Marco is a doctor."],["I miei amici sono molto simpatici.","My friends are very nice."],["Lei è la signora Rossi?","Are you Mrs Rossi? (formal)"],["Tu sei stanco? No, sono felice!","Are you tired? No, I'm happy!"]],
err:[["Io sono un ingegnere.","Sono ingegnere.","With essere + profession, Italian normally drops the article. The pronoun io is also unnecessary."],["Giulia è americano.","Giulia è americana.","The adjective must agree with a feminine subject: -a."],["Io sono di l'America.","Sono americano. / Vengo dagli Stati Uniti.","Di + city expresses hometown (Sono di Chicago). For countries, use the nationality adjective."]],
voc:[["essere","to be"],["americano / americana","American"],["inglese","English"],["italiano / italiana","Italian"],["stanco / stanca","tired"],["felice","happy"],["simpatico / simpatica","nice, friendly"],["gentile","kind"],["alto / alta","tall"],["giovane","young"],["lo studente / la studentessa","student"],["il medico","doctor"],["l'ingegnere","engineer"],["l'insegnante","teacher"],["in vacanza","on holiday"],["anche","also, too"]],
dia:[["Giulia","Ciao! Sei americano?","Hi! Are you American?"],["Luke","Sì, sono di Chicago. E tu?","Yes, I'm from Chicago. And you?"],["Giulia","Io sono di Firenze, ma adesso sono a Roma per lavoro.","I'm from Florence, but now I'm in Rome for work."],["Luke","Che lavoro fai?","What do you do?"],["Giulia","Sono architetto. E tu sei in vacanza?","I'm an architect. And you're on holiday?"],["Luke","Sì, sono qui per imparare l'italiano!","Yes, I'm here to learn Italian!"]],
q:[
{t:"mc",q:"Noi ___ a Venezia per tre giorni.",o:["siamo","sono","siete","sei"],w:"Noi takes siamo: Noi siamo = we are."},
{t:"mc",q:"Voi ___ studenti?",o:["siete","siamo","sono","sei"],w:"Voi (you plural) takes siete."},
{t:"mc",q:"Choose the correct sentence.",o:["Sara è inglese.","Sara è inglesa.","Sara sono inglese.","Sara è inglesi."],w:"Inglese ends in -e, so the singular form is the same for men and women. Sara (lei) takes è."},
{t:"mc",q:"'Sono' can mean:",o:["I am OR they are","I am OR you are","he is OR she is","we are OR they are"],w:"Sono is the form for both io and loro. Context makes it clear."},
{t:"mc",q:"How do you say 'Marco is a waiter'?",o:["Marco è cameriere.","Marco è un cameriere sono.","Marco ha cameriere.","Marco sono cameriere."],w:"With essere + profession, the article is usually omitted: Marco è cameriere."},
{t:"fill",q:"Tu ___ di Milano? (Are you from Milan?)",a:["sei"],w:"Tu takes sei.",h:"essere, tu form"},
{t:"fill",q:"Le ragazze sono ___ . (simpatico)",a:["simpatiche"],w:"Feminine plural of simpatico is simpatiche (h keeps the hard k sound).",h:"feminine plural"},
{t:"order",a:"Siamo in vacanza a Roma.",en:"We are on holiday in Rome."}
]},
{
id:"a1-04", t:"Avere & Everyday Expressions", s:"ho, hai, ha… ho fame, ho 30 anni", img:"naples",
goal:"Conjugate avere (to have) and use the many Italian expressions built with it, like age, hunger and fear.",
teach:[
["Avere: to have","**Avere** is the second essential irregular verb: *io ho, tu hai, lui/lei/Lei ha, noi abbiamo, voi avete, loro hanno*. The **h** is silent — *ho* sounds exactly like *o*. It is written to distinguish *ho* (I have) from *o* (or), *ha* (has) from *a* (to), *hanno* from *anno* (year)."],
["Age uses avere, not essere","Italians *have* years: **Ho trent'anni** = I am thirty (literally 'I have thirty years'). Ask: **Quanti anni hai?** (informal) / **Quanti anni ha?** (formal). Saying *Sono trenta* is a typical English-speaker mistake."],
["Physical states with avere","Where English uses *to be + adjective*, Italian often uses **avere + noun**: **avere fame** (to be hungry), **avere sete** (thirsty), **avere sonno** (sleepy), **avere caldo / freddo** (hot / cold), **avere paura** (afraid), **avere fretta** (in a hurry), **avere ragione / torto** (to be right / wrong), **avere bisogno di** (to need)."],
["Possession and availability","Avere is also used for what you own or what is available: *Ho una macchina rossa*, *Hai tempo stasera?* (Do you have time tonight?), *Avete una camera libera?* (Do you have a free room?) — a key sentence for hotels and restaurants."]
],
tb:[{cap:"Avere — present tense",h:["Person","Avere","Example"],r:[["io","ho","Ho fame."],["tu","hai","Hai una penna?"],["lui / lei / Lei","ha","Ha ragione."],["noi","abbiamo","Abbiamo fretta."],["voi","avete","Avete una camera libera?"],["loro","hanno","Hanno due figli."]]}],
ex:[["Ho trentadue anni.","I'm thirty-two."],["Quanti anni ha Sua figlia?","How old is your daughter? (formal)"],["Abbiamo fame: andiamo a mangiare!","We're hungry: let's go and eat!"],["Hai freddo? Chiudo la finestra.","Are you cold? I'll close the window."],["Scusi, ho fretta.","Excuse me, I'm in a hurry."],["Hai ragione, è tardi.","You're right, it's late."],["Ho bisogno di un taxi.","I need a taxi."],["I bambini hanno sonno.","The children are sleepy."]],
err:[["Sono trenta anni.","Ho trent'anni.","Age is expressed with avere: I have thirty years."],["Sono fame.","Ho fame.","Hunger, thirst, cold, heat and fear use avere + noun."],["O una domanda.","Ho una domanda.","Without the h, o means 'or'. The verb is ho."]],
voc:[["avere","to have"],["la fame","hunger"],["la sete","thirst"],["il sonno","sleepiness"],["il caldo","heat"],["il freddo","cold"],["la paura","fear"],["la fretta","hurry"],["la ragione","reason; avere ragione = to be right"],["il torto","wrong; avere torto = to be wrong"],["avere bisogno di","to need"],["l'anno","year"],["il tempo","time; weather"],["la macchina","car"],["la camera","room (hotel)"],["libero / libera","free, available"]],
dia:[["Luke","Ho tanta fame! Hai tempo per un panino?","I'm so hungry! Do you have time for a sandwich?"],["Marco","Sì, ma ho un po' di fretta. Ho una riunione alle due.","Yes, but I'm in a bit of a hurry. I have a meeting at two."],["Luke","Va bene. E hai sete? Io ho bisogno di un'acqua.","OK. And are you thirsty? I need a water."],["Marco","Hai ragione, fa caldo oggi!","You're right, it's hot today!"]],
q:[
{t:"mc",q:"How do you say 'I'm 25 years old'?",o:["Ho venticinque anni.","Sono venticinque anni.","Ho venticinque.","Sono venticinque."],w:"Italian uses avere + anni for age."},
{t:"mc",q:"Loro ___ due figli.",o:["hanno","anno","ha","avete"],w:"Loro takes hanno. Anno (without h) means year."},
{t:"mc",q:"You want to tell a friend you are cold.",o:["Ho freddo.","Sono freddo.","È freddo.","Ho fredda."],w:"Physical feeling of cold = avere freddo. 'Sono freddo' would describe your personality (cold, distant)."},
{t:"mc",q:"Choose the correct form: Voi ___ una camera libera?",o:["avete","abbiamo","hanno","hai"],w:"Voi takes avete."},
{t:"mc",q:"Your friend is right. You say:",o:["Hai ragione.","Sei ragione.","Hai torto.","Ha ragione io."],w:"To be right = avere ragione. Avere torto = to be wrong."},
{t:"fill",q:"Noi ___ bisogno di aiuto.",a:["abbiamo"],w:"Noi takes abbiamo. Avere bisogno di = to need.",h:"avere, noi"},
{t:"fill",q:"Lei ___ paura dei cani. (She is afraid of dogs.)",a:["ha"],w:"Lei takes ha. Avere paura di = to be afraid of.",h:"avere, lei"},
{t:"order",a:"Quanti anni hai?",en:"How old are you? (informal)"}
]},
{
id:"a1-05", t:"Nouns: Gender & Plural", s:"-o, -a, -e and their plurals", img:"florence",
goal:"Recognise whether a noun is masculine or feminine and form its plural correctly.",
teach:[
["Every noun has a gender","In Italian every noun is **masculine** or **feminine**, even objects. Endings are a strong guide: nouns in **-o** are usually masculine (*il libro, il tavolo*), nouns in **-a** are usually feminine (*la casa, la pizza*). Nouns in **-e** can be either: *il pane* (m), *la notte* (f) — learn them with their article."],
["Regular plurals","The plural changes the final vowel: **-o → -i** (*libro → libri*), **-a → -e** (*casa → case*), **-e → -i** (*pane → pani; notte → notti*). Note that -e becomes -i for both genders."],
["Nouns that don't change","Some nouns are **invariable**: nouns with a stressed final vowel (*la città → le città, il caffè → i caffè*), nouns ending in a consonant, usually foreign (*il bar → i bar, lo sport → gli sport*), and short forms (*la foto → le foto, la moto, il cinema → i cinema*)."],
["Common exceptions to watch","Some -a nouns are masculine: **il problema, il programma, il sistema, il clima, il papà**. **La mano** (hand) is feminine and its plural is **le mani**. Nouns in -ca/-ga add h in the plural: *amica → amiche, banca → banche*. Masculine -co/-go vary: *tedesco → tedeschi, but amico → amici, medico → medici*. **L'uomo → gli uomini** is irregular."]
],
tb:[{cap:"Plural patterns",h:["Singular","Plural","Rule"],r:[["il ragazzo","i ragazzi","-o → -i"],["la ragazza","le ragazze","-a → -e"],["il ristorante","i ristoranti","-e → -i (m)"],["la stazione","le stazioni","-e → -i (f)"],["la città","le città","stressed final vowel: no change"],["il bar","i bar","consonant ending: no change"],["il problema","i problemi","masculine -a → -i"],["l'amica","le amiche","-ca → -che"]]}],
ex:[["Ho due biglietti per il treno.","I have two tickets for the train."],["Le città italiane sono bellissime.","Italian cities are beautiful."],["Vorrei due caffè, per favore.","I'd like two coffees, please."],["Ci sono tre ristoranti in questa strada.","There are three restaurants on this street."],["Non c'è problema!","No problem!"],["Ho le mani fredde.","My hands are cold."],["Le mie amiche sono di Napoli.","My friends (female) are from Naples."],["Gli uomini e le donne parlano.","The men and the women are talking."]],
err:[["Due caffès","Due caffè","Nouns with a stressed final vowel never change in the plural."],["La problema","Il problema","Problema is masculine despite ending in -a (it comes from Greek)."],["Le amice","Le amiche","Feminine -ca adds h in the plural to keep the hard k sound."]],
voc:[["il libro","book"],["il tavolo","table"],["la casa","house"],["il pane","bread"],["la notte","night"],["la stazione","station"],["il ristorante","restaurant"],["la città","city"],["il bar","bar / café"],["la foto","photo"],["il problema","problem"],["la mano","hand"],["l'uomo","man"],["la donna","woman"],["l'amico / l'amica","friend"],["la chiave","key"]],
dia:[["Waiter","Buongiorno! Cosa prendete?","Good morning! What will you have?"],["Luke","Due cappuccini e due cornetti, per favore.","Two cappuccinos and two croissants, please."],["Waiter","Benissimo. Altro?","Very good. Anything else?"],["Luke","Sì, anche due bicchieri d'acqua.","Yes, also two glasses of water."]],
q:[
{t:"mc",q:"What is the plural of 'la stazione'?",o:["le stazioni","le stazione","le stazioe","i stazioni"],w:"Nouns in -e (masculine or feminine) form the plural in -i: stazioni. The feminine plural article is le."},
{t:"mc",q:"What is the plural of 'il caffè'?",o:["i caffè","i caffè's","i caffi","le caffè"],w:"Nouns ending in a stressed vowel are invariable."},
{t:"mc",q:"Which noun is masculine?",o:["problema","casa","pizza","chiave"],w:"Problema is masculine (il problema) although it ends in -a."},
{t:"mc",q:"Plural of 'l'amica':",o:["le amiche","le amice","gli amici","le amicas"],w:"-ca → -che keeps the hard sound."},
{t:"mc",q:"Plural of 'la mano':",o:["le mani","le mane","i mani","le mano"],w:"Mano is feminine and irregular: le mani."},
{t:"fill",q:"Plural: il bar → i ___",a:["bar"],w:"Nouns ending in a consonant don't change.",h:"invariable"},
{t:"fill",q:"Plural: il ragazzo → i ___",a:["ragazzi"],w:"-o becomes -i.",h:"-o → -i"},
{t:"order",a:"Le città italiane sono bellissime.",en:"Italian cities are beautiful."}
]},
{
id:"a1-06", t:"The Definite Article", s:"il, lo, la, l', i, gli, le", img:"venice",
goal:"Choose the right word for 'the' based on gender, number and the first letter of the next word.",
teach:[
["Seven forms of 'the'","English has one *the*; Italian has seven. The choice depends on **gender**, **number** and **the sound that follows**. Learn each noun with its article from day one."],
["Masculine: il, lo, l'","Use **il** before most consonants: *il libro, il treno*. Use **lo** before **s + consonant** (*lo studente, lo zaino* also before z, gn, ps, x, y): *lo zio, lo gnocco, lo psicologo, lo yogurt*. Use **l'** before a vowel: *l'amico, l'albergo*."],
["Masculine plural: i, gli","**il → i**: *i libri, i treni*. **lo / l' → gli**: *gli studenti, gli zaini, gli amici, gli alberghi*. Think of gli as the 'special' plural for the 'special' singulars."],
["Feminine: la, l', le","Use **la** before consonants: *la casa, la stazione*. Use **l'** before vowels: *l'amica, l'università*. The plural is always **le**: *le case, le amiche* — never apostrophised in modern Italian."],
["Italian uses the article more than English","Italian uses the definite article with general nouns (*Il caffè italiano è forte* — Italian coffee is strong), with likes (*Amo la pizza*), with languages (*Studio l'italiano*), and with titles when talking about someone (*Il signor Rossi è qui*)."]
],
tb:[{cap:"Choosing the definite article",h:["","Singular","Plural","Used before"],r:[["Masculine","il","i","most consonants: il treno → i treni"],["Masculine","lo","gli","s+consonant, z, gn, ps, x, y: lo zaino → gli zaini"],["Masculine","l'","gli","vowels: l'amico → gli amici"],["Feminine","la","le","consonants: la casa → le case"],["Feminine","l'","le","vowels: l'amica → le amiche"]]}],
ex:[["Il treno per Venezia parte alle nove.","The train for Venice leaves at nine."],["Lo studente americano parla bene.","The American student speaks well."],["L'albergo è vicino alla stazione.","The hotel is near the station."],["Gli zaini sono pesanti.","The backpacks are heavy."],["La pizza napoletana è famosa.","Neapolitan pizza is famous."],["Le chiavi sono sul tavolo.","The keys are on the table."],["Amo l'italiano e la cucina italiana.","I love Italian and Italian cooking."],["Gli amici di Luke sono simpatici.","Luke's friends are nice."]],
err:[["Il studente","Lo studente","Masculine nouns beginning with s + consonant take lo."],["I amici","Gli amici","Masculine nouns beginning with a vowel take gli in the plural."],["L'amiche","Le amiche","The feminine plural article le is not shortened before vowels."]],
voc:[["il treno","train"],["lo zaino","backpack"],["lo zio","uncle"],["lo specchio","mirror"],["l'albergo","hotel"],["l'aereo","plane"],["la valigia","suitcase"],["l'isola","island"],["l'università","university"],["lo sport","sport"],["lo yogurt","yogurt"],["l'orologio","watch, clock"],["la strada","street, road"],["il ponte","bridge"],["la piazza","square"],["l'ospedale","hospital"]],
dia:[["Luke","Scusi, dov'è la stazione?","Excuse me, where is the station?"],["Passer-by","La stazione? È dopo il ponte, vicino all'ospedale.","The station? It's after the bridge, near the hospital."],["Luke","E gli autobus per l'aeroporto?","And the buses for the airport?"],["Passer-by","Partono dalla piazza davanti alla stazione.","They leave from the square in front of the station."]],
q:[
{t:"mc",q:"___ zaino è nuovo.",o:["Lo","Il","L'","La"],w:"Masculine nouns beginning with z take lo."},
{t:"mc",q:"___ amici di Marco sono qui.",o:["Gli","I","Le","L'"],w:"Masculine plural before a vowel: gli amici."},
{t:"mc",q:"___ università è grande.",o:["L'","La","Lo","Il"],w:"Università is feminine and starts with a vowel: l'università."},
{t:"mc",q:"___ studenti sono in classe.",o:["Gli","I","Lo","Le"],w:"Lo studente → gli studenti."},
{t:"mc",q:"___ isole italiane sono belle.",o:["Le","Gli","L'","La"],w:"Feminine plural always takes le, even before a vowel."},
{t:"fill",q:"___ treno è in ritardo. (article)",a:["il"],w:"Treno is masculine and starts with a normal consonant: il.",h:"masculine, consonant"},
{t:"fill",q:"___ specchi sono nuovi. (article)",a:["gli"],w:"Lo specchio (s + consonant) → gli specchi.",h:"plural of lo"},
{t:"order",a:"L'albergo è vicino alla stazione.",en:"The hotel is near the station."}
]},
{
id:"a1-07", t:"A, An & There Is", s:"un, uno, una, un' · c'è, ci sono", img:"amalfi",
goal:"Use indefinite articles and describe what there is in a place with c'è and ci sono.",
teach:[
["Indefinite articles follow the same logic","For masculine nouns: **un** before vowels and most consonants (*un libro, un amico*), **uno** before s + consonant, z, gn, ps (*uno studente, uno zaino*). For feminine: **una** before consonants (*una casa*), **un'** before vowels (*un'amica, un'isola*)."],
["The apostrophe trap","Only the feminine form takes an apostrophe: **un'amica** (f) but **un amico** (m). This shows gender in writing: *un artista* (male artist), *un'artista* (female artist)."],
["There is / there are: c'è, ci sono","**C'è** (ci + è) = there is, with singular nouns: *C'è un bar qui vicino.* **Ci sono** = there are, with plurals: *Ci sono molti turisti.* Questions use the same words with rising intonation: *C'è un bancomat?* (Is there an ATM?)"],
["Negative and 'some'","Negative: *Non c'è latte* (There's no milk), *Non ci sono taxi* (There are no taxis). With plurals, Italian often uses no article where English says *some*: *Ci sono negozi e ristoranti.*"]
],
tb:[{cap:"Indefinite articles",h:["Gender","Form","Before","Example"],r:[["Masculine","un","vowels and most consonants","un libro, un albergo"],["Masculine","uno","s+consonant, z, gn, ps, y","uno zaino, uno studente"],["Feminine","una","consonants","una pizza, una stazione"],["Feminine","un'","vowels","un'amica, un'arancia"]]}],
ex:[["C'è una farmacia qui vicino?","Is there a pharmacy near here?"],["Ci sono due letti nella camera.","There are two beds in the room."],["Vorrei un'acqua frizzante.","I'd like a sparkling water."],["Ho uno zaino e una valigia.","I have a backpack and a suitcase."],["Non c'è posto sul treno.","There's no room on the train."],["A Positano ci sono spiagge bellissime.","In Positano there are beautiful beaches."],["Cerco un albergo economico.","I'm looking for a cheap hotel."],["Marco ha un'idea.","Marco has an idea."]],
err:[["Un'amico","Un amico","Masculine un never takes an apostrophe."],["Un studente","Uno studente","Masculine nouns beginning with s + consonant take uno."],["C'è molti turisti.","Ci sono molti turisti.","Plural nouns need ci sono."]],
voc:[["c'è","there is"],["ci sono","there are"],["la farmacia","pharmacy"],["il bancomat","ATM"],["il letto","bed"],["la spiaggia","beach"],["il negozio","shop"],["il supermercato","supermarket"],["il museo","museum"],["la chiesa","church"],["il posto","seat, place"],["l'idea","idea"],["l'arancia","orange"],["qui vicino","near here"],["molto / molti","much / many"],["economico","cheap"]],
dia:[["Luke","Scusi, c'è un bancomat qui vicino?","Excuse me, is there an ATM near here?"],["Shopkeeper","Sì, c'è una banca in piazza.","Yes, there's a bank in the square."],["Luke","E ci sono ristoranti aperti a quest'ora?","And are there restaurants open at this time?"],["Shopkeeper","Ci sono due trattorie in via Roma. Una è ottima!","There are two trattorias on Via Roma. One is excellent!"]],
q:[
{t:"mc",q:"Vorrei ___ aranciata.",o:["un'","una","un","uno"],w:"Aranciata is feminine and begins with a vowel: un'aranciata."},
{t:"mc",q:"Ho ___ amico a Napoli.",o:["un","un'","uno","una"],w:"Amico is masculine: un amico, without an apostrophe."},
{t:"mc",q:"C'è ___ zoo in città?",o:["uno","un","una","un'"],w:"Masculine nouns beginning with z take uno."},
{t:"mc",q:"___ molti turisti in agosto.",o:["Ci sono","C'è","Ce","Sono ci"],w:"Turisti is plural: ci sono."},
{t:"mc",q:"Choose the correct question for 'Is there a pharmacy?'",o:["C'è una farmacia?","Ci sono una farmacia?","È una farmacia?","Ha una farmacia?"],w:"There is = c'è. 'È una farmacia?' would mean 'Is it a pharmacy?'"},
{t:"fill",q:"Ho ___ studente americano in classe. (indefinite article)",a:["uno"],w:"Studente begins with s + consonant: uno studente.",h:"s + consonant"},
{t:"fill",q:"Non ___ latte nel frigo. (there is)",a:["c'è","c’è"],w:"Latte is singular: non c'è.",h:"ci + è"},
{t:"order",a:"C'è una farmacia qui vicino?",en:"Is there a pharmacy near here?"}
]},
{
id:"a1-08", t:"Present Tense: -ARE Verbs", s:"parlare, mangiare, cercare", img:"rome",
goal:"Conjugate regular -are verbs in the present tense and talk about everyday actions.",
teach:[
["Stem + ending","Italian verbs have three groups by infinitive ending: **-are, -ere, -ire**. The -are group is the largest. Remove **-are** to get the stem (*parl-are → parl-*) and add the endings: **-o, -i, -a, -iamo, -ate, -ano**."],
["One present = three English tenses","*Parlo* means *I speak*, *I am speaking* and, with a time expression, *I will speak*: *Domani parlo con il capo* (Tomorrow I'll speak to the boss). Italian uses the simple present far more than English."],
["Stress in the loro form","In *parlano, abitano, lavorano* the stress falls on the stem, not the ending: **PAR-la-no**, **A-bi-ta-no**, **la-VO-ra-no**. Saying *par-LA-no* is a common learner error."],
["Spelling changes","Verbs in **-care / -gare** add **h** before i to keep the hard sound: *cercare → tu cerchi, noi cerchiamo*; *pagare → paghi, paghiamo*. Verbs in **-ciare / -giare** don't double the i: *mangiare → tu mangi, noi mangiamo*; *cominciare → cominci*."]
],
tb:[{cap:"Parlare (to speak) and cercare (to look for)",h:["Person","Parlare","Cercare","Mangiare"],r:[["io","parlo","cerco","mangio"],["tu","parli","cerchi","mangi"],["lui / lei / Lei","parla","cerca","mangia"],["noi","parliamo","cerchiamo","mangiamo"],["voi","parlate","cercate","mangiate"],["loro","parlano","cercano","mangiano"]]}],
ex:[["Parlo un po' di italiano.","I speak a little Italian."],["Dove abiti?","Where do you live?"],["Lavoriamo in centro.","We work in the city centre."],["Cerchi un albergo?","Are you looking for a hotel?"],["Paghiamo con la carta.","We'll pay by card."],["I ragazzi mangiano la pizza.","The kids are eating pizza."],["Il film comincia alle nove.","The film starts at nine."],["Ascoltate la musica italiana?","Do you (all) listen to Italian music?"]],
err:[["Tu cerci","Tu cerchi","-care verbs add h before i to keep the k sound."],["Noi mangiiamo","Noi mangiamo","-giare verbs never have a double i."],["Io sono parlando","Parlo / Sto parlando","Italian doesn't use essere + -ing. The simple present covers 'I am speaking'."]],
voc:[["parlare","to speak"],["abitare","to live (reside)"],["lavorare","to work"],["studiare","to study"],["mangiare","to eat"],["cercare","to look for"],["pagare","to pay"],["comprare","to buy"],["ascoltare","to listen to"],["guardare","to watch, look at"],["aspettare","to wait for"],["arrivare","to arrive"],["cominciare","to begin"],["tornare","to return"],["prenotare","to book"],["visitare","to visit (a place)"]],
dia:[["Sara","Luke, dove abiti a Roma?","Luke, where do you live in Rome?"],["Luke","Abito vicino a Trastevere. E tu?","I live near Trastevere. And you?"],["Sara","Io abito in centro, ma lavoro a Ostia.","I live in the centre, but I work in Ostia."],["Luke","Studi anche l'inglese?","Do you also study English?"],["Sara","Sì, e ascolto podcast ogni giorno!","Yes, and I listen to podcasts every day!"]],
q:[
{t:"mc",q:"Noi ___ in un ristorante stasera.",o:["mangiamo","mangiiamo","mangiate","mangiano"],w:"Mangi- + -iamo = mangiamo (no double i)."},
{t:"mc",q:"Tu ___ le chiavi?",o:["cerchi","cerci","cerca","cercate"],w:"Cercare adds h before i: cerchi."},
{t:"mc",q:"Luke e Giulia ___ a Roma.",o:["abitano","abitate","abita","abitiamo"],w:"Two people = loro: abitano."},
{t:"mc",q:"Voi ___ il treno o l'autobus? (aspettare)",o:["aspettate","aspettiamo","aspettano","aspetta"],w:"Voi takes -ate: aspettate."},
{t:"mc",q:"'Domani parlo con il direttore' means:",o:["Tomorrow I'll speak with the director.","Yesterday I spoke with the director.","I always speak with the director.","Speak with the director tomorrow!"],w:"The Italian present with a future time expression often expresses plans."},
{t:"fill",q:"Io ___ in un ufficio. (lavorare)",a:["lavoro"],w:"Io → -o: lavoro.",h:"-o"},
{t:"fill",q:"Noi ___ con la carta. (pagare)",a:["paghiamo"],w:"Pagare adds h before i: paghiamo.",h:"pag + h + iamo"},
{t:"order",a:"Parlo un po' di italiano.",en:"I speak a little Italian."}
]},
{
id:"a1-09", t:"Present Tense: -ERE & -IRE Verbs", s:"prendere, dormire, capire", img:"tuscany",
goal:"Conjugate regular -ere and -ire verbs, including the -isc- verbs like capire and finire.",
teach:[
["-ERE verbs","Remove **-ere** and add **-o, -i, -e, -iamo, -ete, -ono**: *prendere → prendo, prendi, prende, prendiamo, prendete, prendono*. Compare with -are: the third person ends in **-e** (not -a) and loro ends in **-ono** (not -ano)."],
["-IRE verbs (type 1)","Remove **-ire** and add **-o, -i, -e, -iamo, -ite, -ono**: *dormire → dormo, dormi, dorme, dormiamo, dormite, dormono*. Only the voi form differs from -ere (dormite vs prendete). Other type-1 verbs: *aprire, partire, sentire, offrire, seguire*."],
["-IRE verbs with -isc- (type 2)","Many -ire verbs insert **-isc-** between the stem and the ending in all forms **except noi and voi**: *capire → capisco, capisci, capisce, capiamo, capite, capiscono*. Pronunciation: *capisco* (ka-PEE-sko) but *capisci* (ka-PEE-shee). Common -isc- verbs: **capire, finire, preferire, pulire, spedire, costruire**. There's no rule to predict them: memorise."],
["Useful patterns","*Prendo un caffè* (I'll have a coffee) — **prendere** is the verb for ordering food and taking transport: *prendo il treno*. **Partire** = to leave (on a journey); **sentire** = to hear/feel; **preferire** + infinitive = to prefer to do something: *Preferisco restare a casa*."]
],
tb:[{cap:"Three model verbs",h:["Person","Prendere","Dormire","Capire (-isc-)"],r:[["io","prendo","dormo","capisco"],["tu","prendi","dormi","capisci"],["lui / lei / Lei","prende","dorme","capisce"],["noi","prendiamo","dormiamo","capiamo"],["voi","prendete","dormite","capite"],["loro","prendono","dormono","capiscono"]]}],
ex:[["Prendo un cappuccino e una brioche.","I'll have a cappuccino and a brioche."],["Il treno parte dal binario tre.","The train leaves from platform three."],["Scusi, non capisco. Può ripetere?","Sorry, I don't understand. Can you repeat?"],["A che ora finisci di lavorare?","What time do you finish work?"],["Preferiamo il vino rosso.","We prefer red wine."],["I bambini dormono ancora.","The children are still sleeping."],["Leggete il giornale ogni mattina?","Do you (all) read the newspaper every morning?"],["Apro la finestra, fa caldo.","I'll open the window, it's hot."]],
err:[["Io capo","Io capisco","Capire is an -isc- verb: capisco."],["Noi capisciamo","Noi capiamo","Noi and voi forms never take -isc-."],["Loro prendano","Loro prendono","-ere verbs end in -ono in the loro form (-ano is for -are verbs)."]],
voc:[["prendere","to take; to have (food)"],["leggere","to read"],["scrivere","to write"],["vedere","to see"],["vivere","to live"],["chiudere","to close"],["dormire","to sleep"],["partire","to leave, depart"],["aprire","to open"],["sentire","to hear, feel"],["capire","to understand"],["finire","to finish"],["preferire","to prefer"],["pulire","to clean"],["spedire","to send (post)"],["il binario","platform (train)"]],
dia:[["Barista","Cosa prende?","What will you have?"],["Luke","Prendo un cornetto. Lei capisce l'inglese?","I'll have a croissant. Do you understand English?"],["Barista","Capisco un po', ma preferisco parlare italiano con i clienti!","I understand a little, but I prefer speaking Italian with customers!"],["Luke","Perfetto, così imparo!","Perfect, that way I learn!"]],
q:[
{t:"mc",q:"Loro ___ alle otto.",o:["partono","partano","partiscono","partite"],w:"Partire is a regular -ire verb: loro partono."},
{t:"mc",q:"Tu ___ l'italiano?",o:["capisci","capi","capisce","capite"],w:"Capire takes -isc-: tu capisci."},
{t:"mc",q:"Noi ___ il treno delle 9.",o:["prendiamo","prendamo","prendiemo","prendono"],w:"All three groups share the noi ending -iamo."},
{t:"mc",q:"Voi ___ la porta?",o:["aprite","aprete","aprono","apriamo"],w:"-ire verbs take -ite in the voi form."},
{t:"mc",q:"Which verb does NOT take -isc-?",o:["dormire","finire","pulire","preferire"],w:"Dormire is regular: dormo, dormi…"},
{t:"fill",q:"Io ___ il tè al caffè. (preferire)",a:["preferisco"],w:"Preferire is an -isc- verb: preferisco.",h:"-isc-"},
{t:"fill",q:"Marco ___ un libro. (leggere)",a:["legge"],w:"-ere verbs take -e in the third person: legge.",h:"lui form"},
{t:"order",a:"Scusi, non capisco. Può ripetere?",en:"Sorry, I don't understand. Can you repeat?"}
]},
{
id:"a1-10", t:"Essential Irregular Verbs", s:"fare, andare, venire, stare, uscire, dire, bere", img:"milan",
goal:"Use the most frequent irregular verbs to talk about plans, movement and everyday activities.",
teach:[
["Why these verbs matter","The most common verbs are irregular in every language. These seven appear in almost every conversation. Learn them as whole forms rather than stem + ending."],
["Fare — to do / make","*faccio, fai, fa, facciamo, fate, fanno*. Used in many idioms: **fare colazione** (have breakfast), **fare la spesa** (do the grocery shopping), **fare una foto**, **fare una passeggiata**, and the weather: **fa caldo / fa freddo / fa bel tempo**. *Che lavoro fai?* = What do you do (for a living)?"],
["Andare, venire, uscire","**Andare** (to go): *vado, vai, va, andiamo, andate, vanno*. Use **a** + city/infinitive and **in** + country/many places: *Vado a Roma, Vado in Italia, Vado in banca, Vado a mangiare.* **Venire** (to come): *vengo, vieni, viene, veniamo, venite, vengono*. *Vieni con noi?* = Are you coming with us? **Uscire** (to go out): *esco, esci, esce, usciamo, uscite, escono*."],
["Stare, dire, bere","**Stare** (to stay / be, for health and location): *sto, stai, sta, stiamo, state, stanno* — *Come stai? Sto bene.* **Dire** (to say): *dico, dici, dice, diciamo, dite, dicono*. **Bere** (to drink): *bevo, bevi, beve, beviamo, bevete, bevono* — it behaves like a regular verb from the old stem *bev-*."]
],
tb:[{cap:"Present tense of key irregular verbs",h:["Person","fare","andare","venire","uscire","stare"],r:[["io","faccio","vado","vengo","esco","sto"],["tu","fai","vai","vieni","esci","stai"],["lui/lei","fa","va","viene","esce","sta"],["noi","facciamo","andiamo","veniamo","usciamo","stiamo"],["voi","fate","andate","venite","uscite","state"],["loro","fanno","vanno","vengono","escono","stanno"]]}],
ex:[["Faccio colazione al bar.","I have breakfast at the café."],["Stasera andiamo a teatro.","Tonight we're going to the theatre."],["Vieni anche tu alla festa?","Are you coming to the party too?"],["Oggi fa molto caldo.","It's very hot today."],["Esco con gli amici il sabato.","I go out with friends on Saturdays."],["Cosa dici? Non sento.","What are you saying? I can't hear."],["Beviamo un bicchiere di vino?","Shall we drink a glass of wine?"],["Come stanno i tuoi genitori?","How are your parents?"]],
err:[["Io fo / Io fao","Io faccio","The io form of fare is faccio."],["Vado in Roma","Vado a Roma","Use a with cities, in with countries and regions."],["È caldo oggi","Fa caldo oggi","Weather expressions use fare."]],
voc:[["fare","to do, make"],["andare","to go"],["venire","to come"],["uscire","to go out"],["stare","to stay, be"],["dire","to say"],["bere","to drink"],["fare colazione","to have breakfast"],["fare la spesa","to do the grocery shopping"],["fare una passeggiata","to go for a walk"],["la festa","party"],["il teatro","theatre"],["stasera","this evening"],["il fine settimana","the weekend"],["insieme","together"],["fa bel tempo","the weather is nice"]],
dia:[["Marco","Che fai sabato?","What are you doing on Saturday?"],["Luke","Vado a Firenze con Giulia. Vieni con noi?","I'm going to Florence with Giulia. Are you coming with us?"],["Marco","Volentieri! Come andate, in treno?","Gladly! How are you going, by train?"],["Luke","Sì, usciamo di casa alle sette.","Yes, we leave the house at seven."]],
q:[
{t:"mc",q:"Io ___ la spesa il sabato.",o:["faccio","fo","fado","facco"],w:"The io form of fare is faccio."},
{t:"mc",q:"Loro ___ al mare in agosto.",o:["vanno","andano","vano","vadono"],w:"Andare: loro vanno."},
{t:"mc",q:"Tu ___ alla festa stasera?",o:["vieni","veni","vengi","viene"],w:"Venire: tu vieni."},
{t:"mc",q:"Which sentence is correct?",o:["Oggi fa freddo.","Oggi è freddo il tempo fa.","Oggi ha freddo.","Oggi sta freddo."],w:"Weather uses fare: fa freddo, fa caldo."},
{t:"mc",q:"Noi ___ sempre acqua frizzante.",o:["beviamo","beriamo","bebiamo","bevemo"],w:"Bere uses the stem bev-: beviamo."},
{t:"fill",q:"Come ___ ? — Sto bene, grazie. (stare, tu)",a:["stai"],w:"Stare: tu stai.",h:"tu form"},
{t:"fill",q:"Io ___ di casa alle otto. (uscire)",a:["esco"],w:"Uscire: io esco.",h:"irregular io form"},
{t:"order",a:"Stasera andiamo a teatro.",en:"Tonight we're going to the theatre."}
]},
{
id:"a1-11", t:"Describing Things: Adjectives", s:"agreement, position, colours", img:"cinque",
goal:"Describe people, places and objects with adjectives that agree in gender and number.",
teach:[
["Two types of adjectives","**Type 1** has four forms: *rosso, rossa, rossi, rosse*. **Type 2** ends in -e and has two forms: *grande* (m/f singular), *grandi* (m/f plural). The adjective matches the noun, not the speaker: *una casa grande, due case grandi*."],
["Position: usually after the noun","Most adjectives follow the noun: *un vino rosso, una ragazza simpatica, una città italiana*. Colours, nationalities and long or specific adjectives always go after. A few common short adjectives often go before: **bello, buono, brutto, grande, piccolo, nuovo, vecchio, giovane**: *una bella giornata, un piccolo problema*."],
["Mixed groups","When an adjective describes a mix of masculine and feminine nouns, use the **masculine plural**: *Luke e Giulia sono stanchi. Il pane e la pasta sono freschi.*"],
["Invariable colours","Some colours never change: **blu, rosa, viola, beige** and adjectives from nouns like *arancione* (orange, type 2): *le scarpe blu, una maglietta rosa, due giacche viola*."],
["Molto: adverb or adjective?","Before an adjective, **molto** means *very* and never changes: *Le pizze sono molto buone.* Before a noun it means *a lot of / many* and agrees: *molte pizze, molti turisti*."]
],
tb:[{cap:"Adjective endings",h:["","Masculine sg.","Feminine sg.","Masculine pl.","Feminine pl."],r:[["Type 1 (-o)","nuovo","nuova","nuovi","nuove"],["Type 2 (-e)","grande","grande","grandi","grandi"],["-co (stress before)","simpatico","simpatica","simpatici","simpatiche"],["Invariable","blu","blu","blu","blu"]]}],
ex:[["Vorrei una camera grande con vista sul mare.","I'd like a big room with a sea view."],["Le case di Manarola sono colorate.","The houses of Manarola are colourful."],["Ho una giacca blu e due borse rosse.","I have a blue jacket and two red bags."],["È un ristorante piccolo ma molto buono.","It's a small but very good restaurant."],["I ragazzi sono molto stanchi.","The boys are very tired."],["Che bella giornata!","What a beautiful day!"],["Il gelato e la granita sono freschi.","The ice cream and the granita are fresh."],["Ci sono molte chiese antiche a Roma.","There are many ancient churches in Rome."]],
err:[["Le scarpe blue","Le scarpe blu","Blu is invariable."],["Le pizze sono molte buone","Le pizze sono molto buone","Molto before an adjective is an adverb and never changes."],["Un rosso vino","Un vino rosso","Colours always follow the noun."]],
voc:[["grande","big"],["piccolo","small"],["nuovo","new"],["vecchio","old (things, people)"],["antico","ancient"],["bello","beautiful"],["brutto","ugly"],["caro","expensive; dear"],["economico","cheap"],["rosso","red"],["giallo","yellow"],["verde","green"],["blu","blue"],["bianco","white"],["nero","black"],["colorato","colourful"]],
dia:[["Shop assistant","Buongiorno! Posso aiutarLa?","Good morning! Can I help you?"],["Luke","Cerco una giacca leggera, blu o grigia.","I'm looking for a light jacket, blue or grey."],["Shop assistant","Ecco una giacca blu, molto elegante. È nuova collezione.","Here's a blue jacket, very elegant. It's the new collection."],["Luke","È bella, ma un po' cara.","It's nice, but a bit expensive."]],
q:[
{t:"mc",q:"Due borse ___ .",o:["nere","neri","nera","nero"],w:"Borsa is feminine; plural feminine of nero is nere."},
{t:"mc",q:"Una macchina ___ .",o:["verde","verda","verdi","verdo"],w:"Verde is type 2: one singular form for both genders."},
{t:"mc",q:"Marco e Anna sono ___ .",o:["simpatici","simpatiche","simpatica","simpatichi"],w:"Mixed gender → masculine plural: simpatici."},
{t:"mc",q:"Choose the correct phrase:",o:["i pantaloni blu","i pantaloni blui","i pantaloni blue","i blu pantaloni"],w:"Blu is invariable and colours go after the noun."},
{t:"mc",q:"'Molte persone sono molto gentili' — why does molto change only once?",o:["Molte describes a noun; molto modifies an adjective.","Both should be molte.","Both should be molto.","Molto is always feminine."],w:"Molto before a noun agrees (molte persone); before an adjective it's an invariable adverb (molto gentili)."},
{t:"fill",q:"Le chiese sono ___ . (antico)",a:["antiche"],w:"Feminine plural of antico: antiche.",h:"-che"},
{t:"fill",q:"I musei sono ___ . (grande)",a:["grandi"],w:"Type 2 plural: grandi.",h:"-e → -i"},
{t:"order",a:"È un ristorante piccolo ma molto buono.",en:"It's a small but very good restaurant."}
]},
{
id:"a1-12", t:"Questions & Negation", s:"non, chi, cosa, dove, quando, perché", img:"rome",
goal:"Ask and answer real questions, and make any sentence negative.",
teach:[
["Negation: put non before the verb","To make a sentence negative, put **non** directly before the verb: *Parlo tedesco → Non parlo tedesco.* If there are object pronouns, non goes before them: *Non lo so* (I don't know)."],
["Yes/no questions","A statement becomes a question just through intonation (and a question mark): *Parli inglese.* → *Parli inglese?* No word order change, no 'do/does'. The subject, if expressed, can go at the end: *È aperto il museo?*"],
["Question words","**Chi?** who · **Che cosa? / Cosa? / Che?** what · **Dove?** where · **Quando?** when · **Come?** how · **Perché?** why (also *because*) · **Quanto/a/i/e?** how much / how many · **Quale/Quali?** which · **Di dove?** where from. Before è, *dove* and *come* are shortened: **Dov'è? Com'è?**"],
["Quanto agrees","Quanto changes with the noun: *Quanto costa?* (how much does it cost), *Quanta pasta?*, *Quanti anni hai?*, *Quante persone?*"],
["Double negatives are correct","Italian requires double negatives: **Non** ... **niente** (nothing), **non** ... **mai** (never), **non** ... **nessuno** (nobody): *Non mangio mai carne.* *Non vedo nessuno.*"]
],
tb:[{cap:"Question words",h:["Italian","English","Example"],r:[["Chi","Who","Chi è quel ragazzo?"],["Cosa / Che cosa","What","Cosa fai stasera?"],["Dove","Where","Dov'è il bagno?"],["Quando","When","Quando parte il treno?"],["Come","How","Come si dice 'key'?"],["Perché","Why / because","Perché studi l'italiano?"],["Quanto","How much / many","Quanto costa il biglietto?"],["Quale / Quali","Which","Quale preferisci?"]]}],
ex:[["Scusi, dov'è il bagno?","Excuse me, where's the bathroom?"],["Quanto costa un biglietto per Napoli?","How much is a ticket to Naples?"],["Perché studi l'italiano? Perché amo l'Italia!","Why do you study Italian? Because I love Italy!"],["Non parlo bene, ma capisco.","I don't speak well, but I understand."],["Quando apre il museo?","When does the museum open?"],["Non mangio mai carne.","I never eat meat."],["Chi viene stasera?","Who's coming tonight?"],["Quale treno prendiamo?","Which train shall we take?"]],
err:[["Io parlo non italiano.","Non parlo italiano.","Non always comes directly before the verb."],["Mangio mai carne.","Non mangio mai carne.","Mai, niente, nessuno after the verb need non before it."],["Dove è il bagno?","Dov'è il bagno?","Dove + è is normally shortened to dov'è."]],
voc:[["chi","who"],["cosa","what"],["dove","where"],["quando","when"],["come","how"],["perché","why; because"],["quanto","how much"],["quale","which"],["non","not"],["mai","never"],["niente","nothing"],["nessuno","nobody"],["costare","to cost"],["aperto","open"],["chiuso","closed"],["il bagno","bathroom"]],
dia:[["Luke","Scusi, quando apre la Galleria degli Uffizi?","Excuse me, when do the Uffizi open?"],["Guard","Apre alle otto e un quarto, ma il lunedì è chiusa.","It opens at quarter past eight, but it's closed on Mondays."],["Luke","Quanto costa il biglietto?","How much is the ticket?"],["Guard","Venticinque euro. Non c'è la riduzione per adulti.","Twenty-five euros. There's no discount for adults."]],
q:[
{t:"mc",q:"Make negative: 'Capisco.'",o:["Non capisco.","Capisco non.","No capisco.","Non capisco no."],w:"Non goes directly before the verb."},
{t:"mc",q:"___ costa questo libro?",o:["Quanto","Quale","Chi","Come"],w:"Asking a price: Quanto costa?"},
{t:"mc",q:"___ anni ha tua sorella?",o:["Quanti","Quanto","Quante","Quale"],w:"Anni is masculine plural: quanti."},
{t:"mc",q:"Correct translation of 'I never drink coffee':",o:["Non bevo mai caffè.","Bevo mai caffè.","Mai non bevo caffè.","Non bevo caffè mai non."],w:"Non + verb + mai (double negative)."},
{t:"mc",q:"Someone asks 'Perché sei qui?' A logical answer is:",o:["Perché sono in vacanza.","Sono qui alle cinque.","Sì, sono qui.","Con il treno."],w:"Perché means both why and because."},
{t:"fill",q:"___ è il museo? — È in piazza Duomo. (Where)",a:["dov'","dove","dov’"],w:"Dove + è → dov'è.",h:"where"},
{t:"fill",q:"Non vedo ___ . (nobody)",a:["nessuno"],w:"Non… nessuno = nobody.",h:"nobody"},
{t:"order",a:"Quanto costa un biglietto per Napoli?",en:"How much is a ticket to Naples?"}
]},
{
id:"a1-13", t:"Numbers, Prices & Age", s:"0–1000, euros, how much", img:"milan",
goal:"Understand and say numbers, prices, phone numbers and quantities.",
teach:[
["0–20","**zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci, undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove, venti**. Note that 11–16 end in *-dici*, while 17–19 begin with *dici-*."],
["Tens and compound numbers","**venti, trenta, quaranta, cinquanta, sessanta, settanta, ottanta, novanta, cento**. Combine as one word: *ventidue, trentacinque*. Two rules: drop the final vowel before **uno** and **otto** (*ventuno, trentotto*), and put an accent on a final **tre** (*ventitré, quarantatré*)."],
["Hundreds and thousands","**cento** (100), *duecento*, *trecento*… **mille** (1,000), plural **mila**: *duemila, tremila*. Numbers are written as one word: *milleduecentocinquanta* (1,250) — but in speech, nobody minds a pause!"],
["Prices and decimals","Italy uses the euro (**l'euro**, invariable: *un euro, due euro*) and cents (**i centesimi**). Italians write a **comma for decimals**: €3,50 = *tre euro e cinquanta* or *tre e cinquanta*. The full stop separates thousands: 1.200 = milleduecento."],
["Asking about quantity and price","*Quanto costa?* (singular) / *Quanto costano?* (plural). *Quant'è?* (How much is it, in total). *Sono dodici euro.* (It's twelve euros — prices use sono, plural)."]
],
tb:[{cap:"Tricky numbers",h:["Number","Italian","Why"],r:[["21","ventuno","drop the vowel before uno"],["28","ventotto","drop the vowel before otto"],["23","ventitré","accent on final tre"],["101","centouno","cento keeps its o"],["180","centottanta","cento + ottanta"],["2.000","duemila","mille → mila"],["€ 4,50","quattro euro e cinquanta","comma = decimal"]]}],
ex:[["Quant'è? — Sono sette euro e venti.","How much is it? — It's seven euros twenty."],["Il mio numero è tre quattro sette, due due uno…","My number is three four seven, two two one…"],["Un biglietto costa trentotto euro.","A ticket costs thirty-eight euros."],["La camera è al terzo piano, numero centoundici.","The room is on the third floor, number one hundred and eleven."],["Ho ventitré anni.","I'm twenty-three."],["Il Colosseo ha quasi duemila anni.","The Colosseum is almost two thousand years old."],["Quanto costano queste pesche?","How much do these peaches cost?"],["Due euro al chilo.","Two euros per kilo."]],
err:[["ventiotto","ventotto","Drop the final vowel of the tens before otto."],["duemille","duemila","The plural of mille is mila."],["due euros","due euro","Euro is invariable in Italian."]],
voc:[["l'euro","euro"],["il centesimo","cent"],["il prezzo","price"],["costare","to cost"],["il conto","the bill"],["lo scontrino","receipt"],["il resto","change (money)"],["lo sconto","discount"],["la carta di credito","credit card"],["in contanti","in cash"],["il chilo","kilo"],["l'etto","100 grams"],["mezzo","half"],["il numero di telefono","phone number"],["il piano","floor (storey)"],["quasi","almost"]],
dia:[["Luke","Buongiorno, quanto costano le fragole?","Good morning, how much are the strawberries?"],["Vendor","Tre euro e cinquanta al chilo.","Three euros fifty per kilo."],["Luke","Allora, mezzo chilo, per favore. E due etti di prosciutto.","Then half a kilo, please. And two hundred grams of prosciutto."],["Vendor","Ecco qua. In tutto sono sei euro e ottanta.","Here you go. That's six euros eighty in total."],["Luke","Pago con la carta, va bene?","I'll pay by card, OK?"]],
q:[
{t:"mc",q:"How do you write 28 in Italian?",o:["ventotto","ventiotto","venteotto","vent'otto"],w:"Venti drops its i before otto."},
{t:"mc",q:"How do you say €12,50?",o:["dodici euro e cinquanta","dodici euros e cinquanta","dodici punto cinquanta euro","dodici e cinque"],w:"Euro is invariable; the comma is a decimal: dodici euro e cinquanta."},
{t:"mc",q:"Which is 3,000?",o:["tremila","tremille","tre mille","tremilla"],w:"Mille becomes mila in the plural."},
{t:"mc",q:"'Due etti di prosciutto' is:",o:["200 grams of ham","2 kilos of ham","2 slices of ham","20 grams of ham"],w:"Un etto = 100 grams, so due etti = 200 g."},
{t:"mc",q:"Which number is 'quarantatré'?",o:["43","34","73","33"],w:"Quaranta = 40, tré = 3 (with an accent at the end of compounds)."},
{t:"fill",q:"Write in words: 21",a:["ventuno"],w:"Venti + uno → ventuno.",h:"drop a vowel"},
{t:"fill",q:"Quanto ___ queste scarpe? (costare)",a:["costano"],w:"Plural subject (scarpe) → costano.",h:"loro form"},
{t:"order",a:"Quanto costano queste pesche?",en:"How much do these peaches cost?"}
]},
{
id:"a1-14", t:"Time, Days & Dates", s:"che ore sono? · alle otto · il 5 maggio", img:"venice",
goal:"Tell the time, talk about schedules and say dates and days of the week.",
teach:[
["What time is it?","Ask **Che ore sono?** or **Che ora è?** Answer with **Sono le** + number (plural, because hours are plural): *Sono le tre.* Exceptions take the singular **È**: **È l'una** (1:00), **È mezzogiorno** (noon), **È mezzanotte** (midnight)."],
["Minutes","Add minutes with **e**: *Sono le due e dieci* (2:10). **E un quarto** = quarter past, **e mezza / e mezzo** = half past, **meno un quarto** = quarter to: *Sono le otto meno un quarto* (7:45). In timetables and offices Italians use the 24-hour clock: *Il treno parte alle diciotto e quaranta* (18:40)."],
["At what time?","**A che ora?** → **alle** + hour: *alle nove, alle sei e mezza*; but **all'una**, **a mezzogiorno**, **a mezzanotte**. From… to: **dalle nove alle diciassette**."],
["Days and months","Days (lowercase, all masculine except *domenica*): **lunedì, martedì, mercoledì, giovedì, venerdì, sabato, domenica**. **Il lunedì** = on Mondays (habit), **lunedì** = this Monday. Months (lowercase): *gennaio, febbraio, marzo, aprile, maggio, giugno, luglio, agosto, settembre, ottobre, novembre, dicembre*. **A / in** + month: *a maggio, in agosto*."],
["Dates","Dates use **il + cardinal number**: *il cinque maggio, il ventun aprile* — except the first: **il primo** (*il primo gennaio*). *Oggi è il 7 novembre.* Year: *nel 2026* (nel duemilaventisei)."]
],
tb:[{cap:"Telling the time",h:["Time","Italian"],r:[["1:00","È l'una."],["3:00","Sono le tre."],["3:15","Sono le tre e un quarto."],["3:30","Sono le tre e mezza."],["3:45","Sono le quattro meno un quarto."],["12:00 (noon)","È mezzogiorno."],["20:40","Sono le venti e quaranta."]]}],
ex:[["Che ore sono? — Sono le dieci e venti.","What time is it? — It's twenty past ten."],["A che ora parte il treno? — Alle sette e mezza.","What time does the train leave? — At half past seven."],["Il museo è aperto dalle nove alle diciannove.","The museum is open from nine to seven pm."],["Il martedì vado in palestra.","On Tuesdays I go to the gym."],["Il mio compleanno è il tre luglio.","My birthday is on the third of July."],["Ci vediamo sabato all'una.","See you on Saturday at one."],["Il primo maggio è festa in Italia.","The first of May is a holiday in Italy."],["Ad agosto molti negozi sono chiusi.","In August many shops are closed."]],
err:[["Sono l'una.","È l'una.","One o'clock, noon and midnight are singular."],["Il uno maggio","Il primo maggio","The first day of the month is ordinal: il primo."],["Lunedì (with capital L)","lunedì","Days and months are not capitalised in Italian."]],
voc:[["l'ora","hour"],["il minuto","minute"],["il quarto","quarter"],["mezzo / mezza","half"],["mezzogiorno","noon"],["mezzanotte","midnight"],["la mattina","morning"],["il pomeriggio","afternoon"],["la sera","evening"],["oggi","today"],["domani","tomorrow"],["ieri","yesterday"],["la settimana","week"],["il mese","month"],["il compleanno","birthday"],["in ritardo / in anticipo","late / early"]],
dia:[["Luke","Scusi, a che ora parte il prossimo vaporetto per Murano?","Excuse me, what time does the next waterbus to Murano leave?"],["Officer","Alle undici meno dieci.","At ten to eleven."],["Luke","E l'ultimo per tornare?","And the last one to come back?"],["Officer","Alle venti e trenta. Ma la domenica c'è un orario diverso.","At 20:30. But on Sundays there's a different timetable."]],
q:[
{t:"mc",q:"How do you say 1:00?",o:["È l'una.","Sono le una.","È la uno.","Sono l'una."],w:"One o'clock is singular: è l'una."},
{t:"mc",q:"'Sono le cinque meno un quarto' is:",o:["4:45","5:15","5:45","4:15"],w:"Meno un quarto = a quarter to: 4:45."},
{t:"mc",q:"A che ora inizia il film? — ___ nove.",o:["Alle","Le","A","Sono le"],w:"At + hour: alle (a + le)."},
{t:"mc",q:"'Il sabato faccio la spesa' means:",o:["On Saturdays I do the shopping.","This Saturday I'm doing the shopping.","Last Saturday I did the shopping.","Saturday is shopping day for everyone."],w:"Il + day expresses a habitual action."},
{t:"mc",q:"How do you say 'the 1st of June'?",o:["il primo giugno","il uno giugno","l'uno giugno","il primo di Giugno"],w:"Use the ordinal primo, and months are lowercase."},
{t:"fill",q:"Che ore sono? — ___ le sei e mezza.",a:["sono"],w:"Hours other than one, noon and midnight take sono.",h:"plural verb"},
{t:"fill",q:"Il negozio è aperto ___ nove alle venti. (from)",a:["dalle"],w:"From … to … with hours: dalle … alle …",h:"da + le"},
{t:"order",a:"A che ora parte il treno?",en:"What time does the train leave?"}
]},
{
id:"a1-15", t:"Family & Possessives", s:"mio, tuo, suo… mia madre vs la mia casa", img:"tuscany",
goal:"Talk about your family and belongings using possessive adjectives correctly — including the special family rule.",
teach:[
["Possessives agree with the object, not the owner","*La mia casa* — casa is feminine, so mia, even if the owner is a man. *Il suo libro* means *his book* or *her book*: suo agrees with libro (m). Context tells you whose."],
["Possessives usually need the article","Unlike English, Italian puts the article before the possessive: **il mio telefono**, **la tua borsa**, **i nostri amici**, **le loro valigie**. *Mio libro* without the article is wrong."],
["The family exception","With **singular, unmodified family members**, drop the article: **mia madre, tuo padre, sua sorella, nostro zio**. But keep it when: the noun is **plural** (*i miei fratelli*), **modified** by an adjective or suffix (*la mia sorella maggiore, il mio fratellino*), with affectionate forms (*la mia mamma, il mio papà*), and always with **loro** (*il loro figlio*)."],
["Formal 'your'","The formal possessive uses **Suo** with a capital in writing: *Signora, questo è il Suo passaporto?* (Madam, is this your passport?)"]
],
tb:[{cap:"Possessive adjectives",h:["Owner","m. sg.","f. sg.","m. pl.","f. pl."],r:[["io","il mio","la mia","i miei","le mie"],["tu","il tuo","la tua","i tuoi","le tue"],["lui / lei / Lei","il suo","la sua","i suoi","le sue"],["noi","il nostro","la nostra","i nostri","le nostre"],["voi","il vostro","la vostra","i vostri","le vostre"],["loro","il loro","la loro","i loro","le loro"]]}],
ex:[["Mia madre è di Boston e mio padre è irlandese.","My mother is from Boston and my father is Irish."],["I miei nonni abitano in Toscana.","My grandparents live in Tuscany."],["Come si chiama tua sorella?","What's your sister's name?"],["Il loro figlio studia a Bologna.","Their son studies in Bologna."],["Questa è la mia sorella maggiore, Anna.","This is my older sister, Anna."],["Marco presenta sua moglie a Luke.","Marco introduces his wife to Luke."],["Signore, ecco il Suo resto.","Sir, here's your change."],["La nostra famiglia è piccola.","Our family is small."]],
err:[["La mia madre","Mia madre","Singular, unmodified family nouns don't take the article."],["Il mio fratelli","I miei fratelli","Plural family nouns need the article, and the possessive agrees: i miei."],["Sua figlio (his son)","Suo figlio","The possessive agrees with figlio (masculine), not with the owner."]],
voc:[["la madre / la mamma","mother / mum"],["il padre / il papà","father / dad"],["i genitori","parents"],["il fratello","brother"],["la sorella","sister"],["il figlio / la figlia","son / daughter"],["il marito","husband"],["la moglie","wife"],["il nonno / la nonna","grandfather / grandmother"],["lo zio / la zia","uncle / aunt"],["il cugino / la cugina","cousin"],["il nipote","nephew; grandson"],["la nipote","niece; granddaughter"],["il suocero / la suocera","father-/mother-in-law"],["maggiore","older"],["minore","younger"]],
dia:[["Giulia","Hai fratelli, Luke?","Do you have brothers or sisters, Luke?"],["Luke","Sì, ho una sorella. Si chiama Emma. I miei genitori vivono a Chicago.","Yes, I have a sister. Her name is Emma. My parents live in Chicago."],["Giulia","Io invece ho due fratelli. Mio fratello maggiore lavora a Milano.","I, on the other hand, have two brothers. My older brother works in Milan."],["Luke","E tua nonna è ancora in Sicilia?","And is your grandmother still in Sicily?"],["Giulia","Sì! Fa la migliore caponata del mondo.","Yes! She makes the best caponata in the world."]],
q:[
{t:"mc",q:"___ padre è medico.",o:["Mio","Il mio","La mia","Miei"],w:"Singular unmodified family member: no article."},
{t:"mc",q:"___ genitori sono simpatici.",o:["I tuoi","Tuoi","I tui","Le tue"],w:"Plural family nouns take the article: i tuoi genitori."},
{t:"mc",q:"Luke's sister: 'Luke e ___ sorella'.",o:["sua","suo","la sua","il suo"],w:"Sorella is feminine singular and unmodified: sua sorella."},
{t:"mc",q:"Their son = ",o:["il loro figlio","loro figlio","il suo figlio","i loro figli"],w:"Loro always keeps the article, even with family."},
{t:"mc",q:"Anna's car = ",o:["la sua macchina","il suo macchina","la lei macchina","sua macchina"],w:"Macchina is feminine and not a family member: la sua."},
{t:"fill",q:"___ cugini sono a Napoli. (my)",a:["i miei"],w:"Plural family noun: i miei cugini.",h:"article + possessive"},
{t:"fill",q:"Signora, è ___ borsa? (your, formal)",a:["la sua","la Sua"],w:"Formal your: la Sua borsa.",h:"formal"},
{t:"order",a:"I miei nonni abitano in Toscana.",en:"My grandparents live in Tuscany."}
]},
{
id:"a1-16", t:"Simple Prepositions & Places", s:"di, a, da, in, con, su, per, tra", img:"rome",
goal:"Choose the right preposition for cities, countries, transport and common phrases.",
teach:[
["The nine simple prepositions","**di** (of, from), **a** (to, at, in), **da** (from, at someone's place, since), **in** (in, to), **con** (with), **su** (on), **per** (for, through), **tra / fra** (between, in [time]). Prepositions rarely translate one-to-one: learn them in phrases."],
["Going and being: a vs in","Use **a** with **cities** and towns (*Vado a Roma, Abito a Milano*) and with **casa, scuola, letto, teatro**. Use **in** with **countries, regions, and large islands** (*in Italia, in Toscana, in Sicilia*) and with many places ending in **-ia** or certain fixed places: **in banca, in farmacia, in ufficio, in centro, in montagna, in vacanza, in biblioteca**."],
["Da: someone's place and 'since'","**Da** + person = at/to someone's place: *Vado da Marco* (I'm going to Marco's), *dal medico* (to the doctor's). **Da** + time with the present = since/for: *Studio italiano da un anno* (I've been studying Italian for a year). **Da** also means *from* for movement: *Il treno da Roma*."],
["Transport and other uses","Transport uses **in**: *in treno, in macchina, in aereo, in bici* — but **a piedi** (on foot). **Di** expresses possession and origin: *la macchina di Marco, Sono di Roma*. **Per** = for/through: *un regalo per te, passare per Firenze*. **Tra / fra** + time = in (future): *Arrivo tra dieci minuti*."]
],
tb:[{cap:"Where and how",h:["Use","Preposition","Example"],r:[["city","a","Vivo a Firenze."],["country / region","in","Vado in Spagna, in Puglia."],["someone's place","da","Ceniamo da Giulia."],["transport","in","Viaggio in treno."],["on foot","a","Vado a piedi."],["possession","di","Il cane di Anna."],["in (future time)","tra / fra","Parto tra due giorni."],["since / for (ongoing)","da","Abito qui da tre mesi."]]}],
ex:[["Abito a Chicago, ma lavoro in Italia.","I live in Chicago, but I work in Italy."],["Stasera ceniamo da mia zia.","Tonight we're having dinner at my aunt's."],["Vado in ufficio in bici.","I go to the office by bike."],["Studio italiano da sei mesi.","I've been studying Italian for six months."],["Il treno arriva tra cinque minuti.","The train arrives in five minutes."],["Questo regalo è per te.","This present is for you."],["Andiamo al mare a piedi?","Shall we walk to the beach?"],["È il passaporto di Luke.","It's Luke's passport."]],
err:[["Vado in Roma.","Vado a Roma.","Cities take a."],["Studio italiano per sei mesi (still studying)","Studio italiano da sei mesi.","For an action that started in the past and continues, use present + da."],["Vado con il piede.","Vado a piedi.","On foot = a piedi."]],
voc:[["di","of, from"],["a","to, at"],["da","from; at someone's place; since"],["in","in, to"],["con","with"],["su","on"],["per","for"],["tra / fra","between; in (time)"],["a piedi","on foot"],["in treno","by train"],["in macchina","by car"],["in ufficio","at/to the office"],["in centro","in/to the centre"],["dal medico","at/to the doctor's"],["il regalo","gift"],["la bici","bike"]],
dia:[["Marco","Da quanto tempo abiti in Italia?","How long have you lived in Italy?"],["Luke","Da tre mesi. Prima abitavo a Chicago.","For three months. Before, I lived in Chicago."],["Marco","E come vai al lavoro?","And how do you get to work?"],["Luke","Di solito in metro, ma oggi vado a piedi.","Usually by metro, but today I'm walking."]],
q:[
{t:"mc",q:"Vado ___ Spagna in estate.",o:["in","a","da","per"],w:"Countries take in."},
{t:"mc",q:"Luke abita ___ Venezia.",o:["a","in","da","di"],w:"Cities take a."},
{t:"mc",q:"Stasera mangiamo ___ Giulia.",o:["da","a","in","di"],w:"At someone's place: da + person."},
{t:"mc",q:"I've been living here for two years: 'Abito qui ___ due anni.'",o:["da","per","tra","fa"],w:"Ongoing situation started in the past: present + da."},
{t:"mc",q:"How do you go to the airport? '___ taxi.'",o:["In","A","Con il piede","Da"],w:"Means of transport take in: in taxi, in treno."},
{t:"fill",q:"Il film comincia ___ dieci minuti. (in ten minutes)",a:["tra","fra"],w:"Tra / fra + time = in (future).",h:"future time"},
{t:"fill",q:"Lavoro ___ banca. (in a bank)",a:["in"],w:"Fixed expression: in banca.",h:"fixed place"},
{t:"order",a:"Abito a Chicago, ma lavoro in Italia.",en:"I live in Chicago, but I work in Italy."}
]},
{
id:"a1-17", t:"Articulated Prepositions", s:"al, nel, dal, sul, del…", img:"venice",
goal:"Combine prepositions with articles (a + il = al) for locations, times and directions.",
teach:[
["Preposition + article = one word","When **a, da, di, in, su** are followed by a definite article, they merge: *a + il = al, in + la = nella, su + i = sui, di + lo = dello*. This is mandatory: *Vado al cinema*, never *a il cinema*."],
["How the merge works","The article keeps its usual form (il, lo, l', la, i, gli, le). **In** becomes **ne-** and **di** becomes **de-**: *nel, nello, nella, nei, negli, nelle; del, dello, della, dei, degli, delle*. Forms with **lo, la, le, l'** double the l: *alla, dallo, sulle, nell'*."],
["Con and per","**Con** and **per** normally stay separate: *con il treno, per la stazione*. (Col / coi exist but are optional.)"],
["When there is NO article","Cities and many fixed phrases take no article, so no merge: *a Roma, in Italia, in macchina, a casa*. But with modified places or specific buildings, the article appears: *nell'Italia del Nord, al bar, alla stazione, nel centro storico*."]
],
tb:[{cap:"Articulated prepositions",h:["","il","lo","l'","la","i","gli","le"],r:[["a","al","allo","all'","alla","ai","agli","alle"],["da","dal","dallo","dall'","dalla","dai","dagli","dalle"],["di","del","dello","dell'","della","dei","degli","delle"],["in","nel","nello","nell'","nella","nei","negli","nelle"],["su","sul","sullo","sull'","sulla","sui","sugli","sulle"]]}],
ex:[["Andiamo al ristorante o al bar?","Shall we go to the restaurant or the bar?"],["Le chiavi sono sul tavolo.","The keys are on the table."],["Il treno arriva dalla Svizzera.","The train arrives from Switzerland."],["Il passaporto è nella borsa.","The passport is in the bag."],["La cattedrale è nel centro storico.","The cathedral is in the historic centre."],["Vado dal dentista alle tre.","I'm going to the dentist's at three."],["Telefono agli amici di Marco.","I'm calling Marco's friends."],["Il prezzo dei biglietti è alto.","The price of the tickets is high."]],
err:[["Vado a il cinema.","Vado al cinema.","A + il must merge into al."],["Nel Roma","A Roma","Cities take a without an article."],["Sulla tavolo","Sul tavolo","Tavolo is masculine: su + il = sul."]],
voc:[["al bar","to/at the bar"],["alla stazione","to/at the station"],["all'aeroporto","to/at the airport"],["nel centro","in the centre"],["sul tavolo","on the table"],["dal dentista","to/at the dentist's"],["il cassetto","drawer"],["la borsa","bag"],["l'armadio","wardrobe"],["il frigorifero","fridge"],["sopra","above, on top"],["sotto","under"],["davanti a","in front of"],["dietro","behind"],["accanto a","next to"],["di fronte a","opposite"]],
dia:[["Luke","Giulia, dove sono le chiavi?","Giulia, where are the keys?"],["Giulia","Sono nella borsa, sul letto.","They're in the bag, on the bed."],["Luke","Non ci sono! Forse sono nel cassetto della cucina.","They're not there! Maybe they're in the kitchen drawer."],["Giulia","Guarda accanto al frigorifero!","Look next to the fridge!"]],
q:[
{t:"mc",q:"Vado ___ stazione.",o:["alla","al","a la","nella"],w:"A + la = alla."},
{t:"mc",q:"Il libro è ___ zaino.",o:["nello","nel","nell'","negli"],w:"Zaino takes lo, so in + lo = nello."},
{t:"mc",q:"Il gatto è ___ letto.",o:["sul","sullo","sulla","sui"],w:"Letto takes il, so su + il = sul."},
{t:"mc",q:"Arrivo ___ aeroporto alle sei.",o:["all'","al","alla","agli"],w:"Aeroporto starts with a vowel: a + l' = all'."},
{t:"mc",q:"Il colore ___ case è giallo.",o:["delle","dei","della","degli"],w:"Case is feminine plural: di + le = delle."},
{t:"fill",q:"Vado ___ medico. (da + il)",a:["dal"],w:"Da + il = dal.",h:"da + il"},
{t:"fill",q:"Gli studenti sono ___ aula. (in + l')",a:["nell'","nell’"],w:"In + l' = nell'.",h:"in + l'"},
{t:"order",a:"Le chiavi sono sul tavolo.",en:"The keys are on the table."}
]},
{
id:"a1-18", t:"Can, Want, Must, Know", s:"potere, volere, dovere, sapere", img:"milan",
goal:"Express ability, desire, obligation and knowledge with modal verbs plus an infinitive.",
teach:[
["Modal + infinitive","**Potere** (can, may), **volere** (to want), **dovere** (must, have to) are followed directly by an **infinitive**, with no preposition: *Posso entrare? Voglio mangiare. Devo partire.*"],
["Forms","**potere**: posso, puoi, può, possiamo, potete, possono · **volere**: voglio, vuoi, vuole, vogliamo, volete, vogliono · **dovere**: devo, devi, deve, dobbiamo, dovete, devono."],
["Polite requests","To ask permission or favours: **Posso…?** (*Posso pagare con la carta?*), **Può…?** to a stranger (*Può ripetere, per favore?*). *Voglio* can sound demanding in shops; prefer **vorrei** (I would like) — you'll study it fully at A2, but use it now: *Vorrei un caffè.*"],
["Sapere vs potere vs conoscere","**Sapere** (*so, sai, sa, sappiamo, sapete, sanno*) = to know a fact, or to know HOW to do something: *Sai nuotare?* (Can you swim?), *Non so dov'è.* **Potere** = to be able/allowed in a situation: *Oggi non posso nuotare, fa freddo.* **Conoscere** = to know a person or place: *Conosci Marco? Conosco bene Roma.*"]
],
tb:[{cap:"Modal verbs",h:["Person","potere","volere","dovere","sapere"],r:[["io","posso","voglio","devo","so"],["tu","puoi","vuoi","devi","sai"],["lui/lei","può","vuole","deve","sa"],["noi","possiamo","vogliamo","dobbiamo","sappiamo"],["voi","potete","volete","dovete","sapete"],["loro","possono","vogliono","devono","sanno"]]}],
ex:[["Posso pagare con la carta?","Can I pay by card?"],["Scusi, può parlare più lentamente?","Excuse me, can you speak more slowly?"],["Domani devo alzarmi presto.","Tomorrow I have to get up early."],["Vuoi venire al cinema?","Do you want to come to the cinema?"],["Non so dov'è la fermata.","I don't know where the stop is."],["Sai cucinare la carbonara?","Do you know how to cook carbonara?"],["Conosco un ristorante fantastico.","I know a fantastic restaurant."],["Dobbiamo prenotare il tavolo?","Do we have to book the table?"]],
err:[["Devo a partire.","Devo partire.","Modal verbs are followed directly by the infinitive."],["Conosco nuotare.","So nuotare.","Know how to do something = sapere."],["So Marco.","Conosco Marco.","Knowing a person = conoscere."]],
voc:[["potere","can, may"],["volere","to want"],["dovere","must, to have to"],["sapere","to know (facts, how to)"],["conoscere","to know (people, places)"],["vorrei","I would like"],["entrare","to enter"],["nuotare","to swim"],["cucinare","to cook"],["guidare","to drive"],["aiutare","to help"],["ripetere","to repeat"],["lentamente","slowly"],["presto","early; soon"],["la fermata","stop (bus/tram)"],["il permesso","permission"]],
dia:[["Luke","Scusi, posso fare una foto qui?","Excuse me, can I take a photo here?"],["Guard","Sì, ma non può usare il flash.","Yes, but you can't use the flash."],["Luke","Va bene. Sa dov'è l'uscita?","OK. Do you know where the exit is?"],["Guard","Deve andare sempre dritto e poi a destra.","You have to go straight on and then right."]],
q:[
{t:"mc",q:"Noi ___ partire alle sei.",o:["dobbiamo","doviamo","devono","dobbiate"],w:"Dovere: noi dobbiamo."},
{t:"mc",q:"Tu ___ venire con noi?",o:["vuoi","voli","vuole","voglio"],w:"Volere: tu vuoi."},
{t:"mc",q:"'Can you swim?' (ability)",o:["Sai nuotare?","Puoi nuotare?","Conosci nuotare?","Devi nuotare?"],w:"Knowing how to do something = sapere."},
{t:"mc",q:"'Do you know Rome well?'",o:["Conosci bene Roma?","Sai bene Roma?","Puoi bene Roma?","Vuoi bene Roma?"],w:"Knowing a place = conoscere."},
{t:"mc",q:"Choose the most polite way to order in a café.",o:["Vorrei un caffè, per favore.","Voglio un caffè.","Devo un caffè.","So un caffè."],w:"Vorrei is the polite form of volere."},
{t:"fill",q:"Lei ___ ripetere, per favore? (potere)",a:["può"],w:"Potere: Lei può.",h:"formal you"},
{t:"fill",q:"Loro non ___ guidare. (sapere)",a:["sanno"],w:"Sapere: loro sanno.",h:"loro form"},
{t:"order",a:"Posso pagare con la carta?",en:"Can I pay by card?"}
]},
{
id:"a1-19", t:"My Day: Reflexive Verbs", s:"mi sveglio, mi alzo, mi lavo", img:"amalfi",
goal:"Describe your daily routine with reflexive verbs and frequency expressions.",
teach:[
["What makes a verb reflexive","A reflexive verb describes an action the subject does to itself. The infinitive ends in **-si**: *lavarsi* (to wash oneself), *alzarsi* (to get up), *chiamarsi*. Conjugate the verb normally and put a **reflexive pronoun** before it: **mi, ti, si, ci, vi, si**."],
["Model: alzarsi","*mi alzo, ti alzi, si alza, ci alziamo, vi alzate, si alzano*. With modals, the pronoun can go before the modal or attach to the infinitive: *Mi devo alzare presto* = *Devo alzarmi presto*."],
["Many reflexives aren't reflexive in English","*svegliarsi* (to wake up), *addormentarsi* (to fall asleep), *vestirsi* (to get dressed), *divertirsi* (to have fun), *riposarsi* (to rest), *sentirsi* (to feel), *trovarsi* (to be located; to get on), *fermarsi* (to stop), *ricordarsi* (to remember)."],
["Frequency words","**sempre** (always), **di solito** (usually), **spesso** (often), **qualche volta / a volte** (sometimes), **raramente** (rarely), **non… mai** (never), **ogni giorno** (every day). Position: usually after the verb: *Mi alzo sempre alle sette*; *di solito* often starts the sentence."]
],
tb:[{cap:"Reflexive pronouns",h:["Person","Pronoun","svegliarsi","vestirsi"],r:[["io","mi","mi sveglio","mi vesto"],["tu","ti","ti svegli","ti vesti"],["lui / lei / Lei","si","si sveglia","si veste"],["noi","ci","ci svegliamo","ci vestiamo"],["voi","vi","vi svegliate","vi vestite"],["loro","si","si svegliano","si vestono"]]}],
ex:[["Di solito mi sveglio alle sette.","I usually wake up at seven."],["Mi faccio la doccia e poi faccio colazione.","I have a shower and then have breakfast."],["Marco si veste sempre in modo elegante.","Marco always dresses elegantly."],["Ci divertiamo molto a Napoli!","We're having a lot of fun in Naples!"],["A che ora vi alzate la domenica?","What time do you (all) get up on Sundays?"],["I bambini si addormentano presto.","The children fall asleep early."],["Non mi ricordo il suo nome.","I don't remember his/her name."],["Devo riposarmi un po'.","I need to rest a bit."]],
err:[["Io alzo alle sette.","Mi alzo alle sette.","Alzarsi needs the reflexive pronoun. 'Alzo' alone means 'I lift (something)'."],["Mi lavo i mie mani.","Mi lavo le mani.","With body parts, the reflexive pronoun replaces the possessive."],["Devo mi riposare.","Devo riposarmi / Mi devo riposare.","The pronoun goes before the modal or attaches to the infinitive, not between."]],
voc:[["svegliarsi","to wake up"],["alzarsi","to get up"],["lavarsi","to wash (oneself)"],["farsi la doccia","to have a shower"],["vestirsi","to get dressed"],["pettinarsi","to comb one's hair"],["prepararsi","to get ready"],["riposarsi","to rest"],["divertirsi","to have fun"],["addormentarsi","to fall asleep"],["ricordarsi","to remember"],["sentirsi","to feel"],["sempre","always"],["di solito","usually"],["spesso","often"],["qualche volta","sometimes"]],
dia:[["Giulia","Luke, a che ora ti alzi di solito?","Luke, what time do you usually get up?"],["Luke","Mi sveglio alle sei e mezza, ma mi alzo alle sette!","I wake up at six-thirty, but I get up at seven!"],["Giulia","Io invece mi alzo tardi, ma mi preparo in dieci minuti.","I, on the other hand, get up late, but I get ready in ten minutes."],["Luke","Dieci minuti? Io mi faccio solo la doccia in dieci minuti!","Ten minutes? Just my shower takes ten minutes!"]],
q:[
{t:"mc",q:"Noi ___ alle otto.",o:["ci alziamo","si alziamo","ci alzano","alziamo"],w:"Noi → ci + alziamo."},
{t:"mc",q:"Loro ___ molto alle feste.",o:["si divertono","ci divertono","si divertiamo","divertono"],w:"Loro → si + divertono."},
{t:"mc",q:"Tu ___ sempre tardi?",o:["ti svegli","si svegli","ti sveglia","mi svegli"],w:"Tu → ti + svegli."},
{t:"mc",q:"Which is correct?",o:["Mi lavo i denti.","Lavo i miei denti me.","Mi lavo i miei denti mie.","Io lavo mi i denti."],w:"With body parts: reflexive pronoun + article (i denti), no possessive."},
{t:"mc",q:"'Devo alzarmi presto' can also be said:",o:["Mi devo alzare presto.","Devo mi alzare presto.","Devo alzare presto mi.","Mi devo alzarmi presto."],w:"The pronoun can precede the modal or attach to the infinitive — not both."},
{t:"fill",q:"Lei ___ ___ in fretta. (vestirsi)",a:["si veste"],w:"Lei → si veste.",h:"pronoun + verb"},
{t:"fill",q:"Io non ___ ricordo. (I don't remember)",a:["mi"],w:"Ricordarsi: io → mi ricordo.",h:"reflexive pronoun"},
{t:"order",a:"Di solito mi sveglio alle sette.",en:"I usually wake up at seven."}
]},
{
id:"a1-20", t:"I Like It: Piacere", s:"mi piace, mi piacciono, ti piace?", img:"naples",
goal:"Say what you like and don't like, and ask others about their tastes.",
teach:[
["The thing you like is the subject","**Piacere** works backwards compared with English. *Mi piace la pizza* literally means *Pizza is pleasing to me*. The thing liked is the **subject**, so the verb agrees with it: **piace** for one thing or an infinitive, **piacciono** for plural things."],
["The person who likes","The person is an **indirect object**: **mi** (to me), **ti** (to you), **gli** (to him), **le** (to her), **Le** (to you, formal), **ci** (to us), **vi** (to you all), **gli** (to them). *Gli piace il calcio* = He likes football / They like football."],
["With names and nouns","With a name or noun, use **a**: *A Luke piace il gelato. Ai miei genitori piacciono i film italiani.* For emphasis or contrast, use stressed pronouns: *A me piace, a te no.* — **Anche a me!** (Me too!) / **A me no** (Not me)."],
["Not liking","Put **non** before the pronoun: *Non mi piace il caffè americano.* Italian has no common verb for *dislike*; *Non mi piace per niente* = I don't like it at all. To ask politely: *Le piace l'Italia?*"]
],
tb:[{cap:"Piacere at a glance",h:["Who likes","+ one thing / verb","+ plural things"],r:[["(a me) mi","mi piace il mare","mi piacciono i musei"],["(a te) ti","ti piace ballare?","ti piacciono i cani?"],["(a lui) gli","gli piace il calcio","gli piacciono le moto"],["(a lei) le / (a Lei) Le","le piace la musica","Le piacciono le olive?"],["(a noi) ci","ci piace viaggiare","ci piacciono le città"],["(a voi) vi","vi piace Roma?","vi piacciono gli spaghetti?"],["(a loro) gli","gli piace il teatro","gli piacciono i fumetti"]]}],
ex:[["Mi piace molto la cucina italiana.","I really like Italian food."],["Ti piacciono gli spaghetti alle vongole?","Do you like spaghetti with clams?"],["A Luke piace camminare per Roma.","Luke likes walking around Rome."],["Non ci piacciono i posti affollati.","We don't like crowded places."],["Signora, Le piace l'opera?","Madam, do you like opera?"],["A Giulia non piace il caffè.","Giulia doesn't like coffee."],["Mi piace il gelato. — Anche a me!","I like ice cream. — Me too!"],["Ai bambini piacciono le favole.","Children like fairy tales."]],
err:[["Io piaccio la pizza.","Mi piace la pizza.","The thing liked is the subject. 'Io piaccio' means 'I am pleasing (to others)'."],["Mi piace i musei.","Mi piacciono i musei.","Plural subjects need piacciono."],["Luke piace il gelato.","A Luke piace il gelato.","With a name, use a + person."]],
voc:[["piacere","to be pleasing / to like"],["anche a me","me too"],["neanche a me","me neither"],["per niente","not at all"],["preferire","to prefer"],["odiare","to hate"],["amare","to love"],["il calcio","football (soccer)"],["la musica","music"],["ballare","to dance"],["viaggiare","to travel"],["camminare","to walk"],["il mare","the sea"],["la montagna","the mountains"],["affollato","crowded"],["il fumetto","comic"]],
dia:[["Giulia","Ti piace Napoli?","Do you like Naples?"],["Luke","Sì, moltissimo! Mi piacciono le strade, la gente e soprattutto la pizza.","Yes, very much! I like the streets, the people and above all the pizza."],["Giulia","E il caffè napoletano? È forte!","And Neapolitan coffee? It's strong!"],["Luke","Mi piace, ma il traffico non mi piace per niente!","I like it, but I don't like the traffic at all!"],["Giulia","Neanche a me!","Me neither!"]],
q:[
{t:"mc",q:"Mi ___ le lasagne.",o:["piacciono","piace","piaccio","piacciamo"],w:"Lasagne is plural: piacciono."},
{t:"mc",q:"A Marco ___ giocare a calcio.",o:["piace","piacciono","piacce","piaci"],w:"With an infinitive, use the singular piace."},
{t:"mc",q:"'She likes dancing' = ",o:["Le piace ballare.","Gli piace ballare.","Lei piace ballare.","Si piace ballare."],w:"To her = le."},
{t:"mc",q:"'Mi piace il mare.' — 'Me too!'",o:["Anche a me!","Anche io!","Anche mi!","Neanche a me!"],w:"With piacere, agree using a + stressed pronoun: anche a me."},
{t:"mc",q:"'We don't like crowds.'",o:["Non ci piace la folla.","Non piacciamo la folla.","Ci non piace la folla.","Non ci piacciamo la folla."],w:"Non + ci + piace; la folla is singular."},
{t:"fill",q:"Ai miei genitori ___ i film italiani. (piacere)",a:["piacciono"],w:"I film (plural) is the subject: piacciono.",h:"plural"},
{t:"fill",q:"Signore, ___ piace il vino? (to you, formal)",a:["le"],w:"Formal you: Le piace…",h:"formal pronoun"},
{t:"order",a:"Mi piace molto la cucina italiana.",en:"I really like Italian food."}
]},
{
id:"a1-21", t:"At the Café & Restaurant", s:"ordering, vorrei, the partitive", img:"rome",
goal:"Order food and drinks naturally, ask for the bill and understand Italian café culture.",
teach:[
["How an Italian bar works","An Italian **bar** is a café. In many bars you first **pay at the cash desk** (*la cassa*), get a receipt (*lo scontrino*), then order at the counter (*il banco*). Drinking at the counter (*al banco*) is cheaper than sitting at a table (*al tavolo*). Cappuccino is a breakfast drink; after a meal, Italians order **un caffè** (an espresso)."],
["Ordering politely","Use **Vorrei** (I'd like), **Prendo** (I'll have), or **Per me…** (For me…). Add **per favore** or **per cortesia**. Ask: **Avete…?** (Do you have…?), **Cosa mi consiglia?** (What do you recommend?). Waiters say **Prego?** (Yes? / Go ahead) or **Ditemi** (Tell me)."],
["The partitive: some","To say *some*, use **di + article**: *del pane, della frutta, dell'acqua, dei biscotti, delle olive*. In questions and negatives it's often dropped: *Avete pane senza glutine? Non prendo vino.* **Un po' di** (a bit of) is a simple alternative: *un po' d'acqua*."],
["The meal structure and the bill","A full meal: **antipasto** (starter), **primo** (pasta/rice/soup), **secondo** (meat/fish) with a **contorno** (side), then **dolce** (dessert) and **caffè**. Ask for the bill with **Il conto, per favore**. A **coperto** (cover charge) is normal in many restaurants; tipping is optional."]
],
tb:[{cap:"Useful restaurant phrases",h:["Italian","English"],r:[["Un tavolo per due, per favore.","A table for two, please."],["Possiamo vedere il menù?","Can we see the menu?"],["Per me, gli spaghetti alla carbonara.","For me, spaghetti carbonara."],["Cosa mi consiglia?","What do you recommend?"],["Sono allergico alle noci.","I'm allergic to nuts."],["Un'acqua naturale / frizzante.","A still / sparkling water."],["Il conto, per favore.","The bill, please."],["Era tutto buonissimo!","Everything was delicious!"]]}],
ex:[["Buongiorno, un cappuccino e un cornetto, per favore.","Good morning, a cappuccino and a croissant, please."],["Avete un tavolo libero per quattro?","Do you have a free table for four?"],["Per primo prendo le tagliatelle al ragù.","For the first course I'll have tagliatelle with ragù."],["Vorrei dell'acqua frizzante.","I'd like some sparkling water."],["Cosa ci consiglia come secondo?","What do you recommend as a main course?"],["Sono vegetariano: avete piatti senza carne?","I'm vegetarian: do you have dishes without meat?"],["Possiamo avere il conto, per favore?","Can we have the bill, please?"],["Posso pagare alla cassa?","Can I pay at the till?"]],
err:[["Un cappuccino, per favore (at 9 pm after dinner)","Un caffè, per favore.","Not a grammar error, but a cultural one: cappuccino is a morning drink in Italy."],["Voglio il conto!","Il conto, per favore. / Possiamo avere il conto?","Voglio sounds rude in service situations."],["Della acqua","Dell'acqua","Di + l' = dell' before a vowel."]],
voc:[["il menù","menu"],["il cameriere / la cameriera","waiter / waitress"],["il tavolo","table"],["l'antipasto","starter"],["il primo","first course"],["il secondo","main course"],["il contorno","side dish"],["il dolce","dessert"],["il bicchiere","glass"],["la bottiglia","bottle"],["la forchetta","fork"],["il coltello","knife"],["il cucchiaio","spoon"],["il coperto","cover charge"],["la mancia","tip"],["allergico a","allergic to"]],
dia:[["Waiter","Buonasera! Siete pronti per ordinare?","Good evening! Are you ready to order?"],["Luke","Sì. Per antipasto, una bruschetta. Poi per primo gli spaghetti alle vongole.","Yes. For a starter, a bruschetta. Then for the first course, spaghetti with clams."],["Waiter","Benissimo. E da bere?","Very good. And to drink?"],["Luke","Mezzo litro di vino bianco della casa e una bottiglia d'acqua naturale.","Half a litre of white house wine and a bottle of still water."],["Waiter","Perfetto. Arrivo subito!","Perfect. Right away!"]],
q:[
{t:"mc",q:"After dinner, what would most Italians order?",o:["Un caffè","Un cappuccino","Un latte","Una spremuta"],w:"Espresso (un caffè) is the after-meal drink; cappuccino is for the morning."},
{t:"mc",q:"Vorrei ___ olive.",o:["delle","dei","della","degli"],w:"Olive is feminine plural: di + le = delle."},
{t:"mc",q:"How do you ask for the bill politely?",o:["Il conto, per favore.","Voglio pagare adesso!","Dammi il conto.","Il conto è per favore?"],w:"Il conto, per favore — short and polite."},
{t:"mc",q:"'Il primo' on an Italian menu is:",o:["pasta, rice or soup","the starter","the meat or fish course","the dessert"],w:"Primo = first course, usually pasta, risotto or soup."},
{t:"mc",q:"You're allergic to nuts. You say:",o:["Sono allergico alle noci.","Ho allergico le noci.","Sono allergia di noci.","Mi piace le noci."],w:"Essere allergico a + article: alle noci."},
{t:"fill",q:"Vorrei ___ pane, per favore. (some)",a:["del"],w:"Pane is masculine with il: di + il = del.",h:"di + il"},
{t:"fill",q:"Cosa mi ___ ? (What do you recommend? — consigliare, Lei)",a:["consiglia"],w:"Lei form of consigliare: consiglia.",h:"formal form"},
{t:"order",a:"Avete un tavolo libero per quattro?",en:"Do you have a free table for four?"}
]},
{
id:"a1-22", t:"First Steps in the Past", s:"passato prossimo with avere and essere", img:"florence",
goal:"Say what you did yesterday using the passato prossimo with the most common verbs.",
teach:[
["The passato prossimo","To talk about completed actions in the past (*I ate, I have eaten*), Italian uses the **passato prossimo**: present of **avere** or **essere** + **past participle**. *Ho mangiato* = I ate / I have eaten. *Sono andato* = I went."],
["Regular past participles","**-are → -ato** (*parlato, mangiato*), **-ere → -uto** (*venduto, creduto*), **-ire → -ito** (*dormito, finito, capito*). Very common irregulars: *fare → fatto, prendere → preso, vedere → visto, leggere → letto, scrivere → scritto, bere → bevuto, essere → stato, venire → venuto*."],
["Avere or essere?","Most verbs use **avere**, especially verbs that take a direct object: *Ho visitato il museo*. Verbs of **movement or change of state** usually take **essere**: *andare, venire, arrivare, partire, uscire, entrare, tornare, restare, nascere, morire, diventare*, and **essere** itself (*sono stato*). All reflexive verbs use essere too (you'll practise them at A2)."],
["Agreement with essere","With **essere**, the participle agrees with the subject like an adjective: *Luke è andato, Giulia è andata, Luke e Giulia sono andati, Giulia e Sara sono andate*. With avere, it normally stays -o: *Giulia ha mangiato*."]
],
tb:[{cap:"Passato prossimo",h:["Person","mangiare (avere)","andare (essere)"],r:[["io","ho mangiato","sono andato/a"],["tu","hai mangiato","sei andato/a"],["lui / lei","ha mangiato","è andato / andata"],["noi","abbiamo mangiato","siamo andati/e"],["voi","avete mangiato","siete andati/e"],["loro","hanno mangiato","sono andati/e"]]}],
ex:[["Ieri ho visitato gli Uffizi.","Yesterday I visited the Uffizi."],["Sabato siamo andati al mare.","On Saturday we went to the seaside."],["Giulia è arrivata a Firenze ieri sera.","Giulia arrived in Florence last night."],["Hai mangiato la bistecca alla fiorentina?","Did you eat the Florentine steak?"],["Ho fatto molte foto del Duomo.","I took lots of photos of the Duomo."],["I miei amici sono partiti stamattina.","My friends left this morning."],["Abbiamo preso il treno delle otto.","We took the eight o'clock train."],["Sei mai stato in Italia? — Sì, due volte.","Have you ever been to Italy? — Yes, twice."]],
err:[["Ho andato a Roma.","Sono andato a Roma.","Andare is a verb of movement: it uses essere."],["Giulia è andato.","Giulia è andata.","With essere, the participle agrees with the subject."],["Ho prenduto un taxi.","Ho preso un taxi.","Prendere has the irregular participle preso."]],
voc:[["ieri","yesterday"],["ieri sera","last night"],["stamattina","this morning"],["la settimana scorsa","last week"],["l'anno scorso","last year"],["fa","ago (due giorni fa)"],["mai","ever / never"],["già","already"],["fatto","done, made"],["preso","taken"],["visto","seen"],["letto","read (past)"],["scritto","written"],["stato","been"],["nato","born"],["la volta","time (occasion)"]],
dia:[["Marco","Allora, cosa hai fatto nel fine settimana?","So, what did you do at the weekend?"],["Luke","Sono andato a Firenze con Giulia. Abbiamo visitato il Duomo e Palazzo Pitti.","I went to Florence with Giulia. We visited the Duomo and Palazzo Pitti."],["Marco","Bello! E avete mangiato bene?","Nice! And did you eat well?"],["Luke","Benissimo! Ho provato la ribollita. Siamo tornati domenica sera.","Very well! I tried ribollita. We came back on Sunday evening."]],
q:[
{t:"mc",q:"Ieri ___ andata al cinema. (Giulia)",o:["è","ha","sono","hai"],w:"Andare takes essere: Giulia è andata."},
{t:"mc",q:"Noi ___ mangiato una pizza.",o:["abbiamo","siamo","avete","hanno"],w:"Mangiare takes avere: abbiamo mangiato."},
{t:"mc",q:"Past participle of 'fare':",o:["fatto","fato","faciuto","fatto stato"],w:"Fare → fatto (irregular)."},
{t:"mc",q:"Luke e Mark ___ arrivati tardi.",o:["sono","hanno","siamo","è"],w:"Arrivare takes essere; plural subject: sono arrivati."},
{t:"mc",q:"Which is correct for Anna?",o:["Anna è partita alle sei.","Anna ha partita alle sei.","Anna è partito alle sei.","Anna ha partito alle sei."],w:"Partire takes essere and agrees: partita."},
{t:"fill",q:"Ieri io ___ un bel film. (vedere — use 'ho' + participle)",a:["ho visto"],w:"Vedere takes avere; participle visto.",h:"avere + irregular participle"},
{t:"fill",q:"Le ragazze sono ___ a casa. (tornare)",a:["tornate"],w:"Essere verb, feminine plural subject: tornate.",h:"agreement"},
{t:"order",a:"Ieri ho visitato gli Uffizi.",en:"Yesterday I visited the Uffizi."}
]}
];
