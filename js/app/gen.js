/* Italiano con Luke — grammar question generators.
   Every generated item is built from explicit conjugation tables and sentence frames,
   so the correct answer is right by construction and distractors are realistic wrong forms. */
(function () {
'use strict';
var App = window.App, U = App.U;
var G = App.Gen = { reg: {} };

/* ================= Verbs ================= */
var P = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
/* irregular data; anything missing is derived regularly */
var IRR = {
  essere: { aux: 'e', pres: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'], imp: ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano'], fs: 'sar', cong: ['sia', 'sia', 'sia', 'siamo', 'siate', 'siano'], ci: ['fossi', 'fossi', 'fosse', 'fossimo', 'foste', 'fossero'], pr: ['fui', 'fosti', 'fu', 'fummo', 'foste', 'furono'], pp: 'stato' },
  avere: { pres: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'], fs: 'avr', cong: ['abbia', 'abbia', 'abbia', 'abbiamo', 'abbiate', 'abbiano'], pr: ['ebbi', 'avesti', 'ebbe', 'avemmo', 'aveste', 'ebbero'] },
  andare: { aux: 'e', pres: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'], fs: 'andr', cong: ['vada', 'vada', 'vada', 'andiamo', 'andiate', 'vadano'] },
  venire: { aux: 'e', pres: ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'], fs: 'verr', cong: ['venga', 'venga', 'venga', 'veniamo', 'veniate', 'vengano'], pr: ['venni', 'venisti', 'venne', 'venimmo', 'veniste', 'vennero'], pp: 'venuto' },
  fare: { pres: ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'], st: 'fac', fs: 'far', cong: ['faccia', 'faccia', 'faccia', 'facciamo', 'facciate', 'facciano'], pr: ['feci', 'facesti', 'fece', 'facemmo', 'faceste', 'fecero'], pp: 'fatto', cls: 'ere' },
  dire: { pres: ['dico', 'dici', 'dice', 'diciamo', 'dite', 'dicono'], st: 'dic', fs: 'dir', cong: ['dica', 'dica', 'dica', 'diciamo', 'diciate', 'dicano'], pr: ['dissi', 'dicesti', 'disse', 'dicemmo', 'diceste', 'dissero'], pp: 'detto', cls: 'ere' },
  stare: { aux: 'e', pres: ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'], fs: 'star', cong: ['stia', 'stia', 'stia', 'stiamo', 'stiate', 'stiano'], ci: ['stessi', 'stessi', 'stesse', 'stessimo', 'steste', 'stessero'], pr: ['stetti', 'stesti', 'stette', 'stemmo', 'steste', 'stettero'] },
  dare: { pres: ['do', 'dai', 'dà', 'diamo', 'date', 'danno'], fs: 'dar', cong: ['dia', 'dia', 'dia', 'diamo', 'diate', 'diano'], ci: ['dessi', 'dessi', 'desse', 'dessimo', 'deste', 'dessero'], pr: ['diedi', 'desti', 'diede', 'demmo', 'deste', 'diedero'] },
  potere: { pres: ['posso', 'puoi', 'può', 'possiamo', 'potete', 'possono'], fs: 'potr', cong: ['possa', 'possa', 'possa', 'possiamo', 'possiate', 'possano'] },
  volere: { pres: ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'], fs: 'vorr', cong: ['voglia', 'voglia', 'voglia', 'vogliamo', 'vogliate', 'vogliano'], pr: ['volli', 'volesti', 'volle', 'volemmo', 'voleste', 'vollero'] },
  dovere: { pres: ['devo', 'devi', 'deve', 'dobbiamo', 'dovete', 'devono'], fs: 'dovr', cong: ['debba', 'debba', 'debba', 'dobbiamo', 'dobbiate', 'debbano'], pr: ['dovetti', 'dovesti', 'dovette', 'dovemmo', 'doveste', 'dovettero'] },
  sapere: { pres: ['so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'], fs: 'sapr', cong: ['sappia', 'sappia', 'sappia', 'sappiamo', 'sappiate', 'sappiano'], pr: ['seppi', 'sapesti', 'seppe', 'sapemmo', 'sapeste', 'seppero'] },
  uscire: { aux: 'e', pres: ['esco', 'esci', 'esce', 'usciamo', 'uscite', 'escono'], cong: ['esca', 'esca', 'esca', 'usciamo', 'usciate', 'escano'] },
  bere: { pres: ['bevo', 'bevi', 'beve', 'beviamo', 'bevete', 'bevono'], st: 'bev', fs: 'berr', cong: ['beva', 'beva', 'beva', 'beviamo', 'beviate', 'bevano'], pr: ['bevvi', 'bevesti', 'bevve', 'bevemmo', 'beveste', 'bevvero'], pp: 'bevuto', cls: 'ere' },
  rimanere: { aux: 'e', pres: ['rimango', 'rimani', 'rimane', 'rimaniamo', 'rimanete', 'rimangono'], fs: 'rimarr', cong: ['rimanga', 'rimanga', 'rimanga', 'rimaniamo', 'rimaniate', 'rimangano'], pr: ['rimasi', 'rimanesti', 'rimase', 'rimanemmo', 'rimaneste', 'rimasero'], pp: 'rimasto' },
  tenere: { pres: ['tengo', 'tieni', 'tiene', 'teniamo', 'tenete', 'tengono'], fs: 'terr', cong: ['tenga', 'tenga', 'tenga', 'teniamo', 'teniate', 'tengano'], pr: ['tenni', 'tenesti', 'tenne', 'tenemmo', 'teneste', 'tennero'] },
  scegliere: { pres: ['scelgo', 'scegli', 'sceglie', 'scegliamo', 'scegliete', 'scelgono'], cong: ['scelga', 'scelga', 'scelga', 'scegliamo', 'scegliate', 'scelgano'], pr: ['scelsi', 'scegliesti', 'scelse', 'scegliemmo', 'sceglieste', 'scelsero'], pp: 'scelto' },
  salire: { aux: 'e', pres: ['salgo', 'sali', 'sale', 'saliamo', 'salite', 'salgono'], cong: ['salga', 'salga', 'salga', 'saliamo', 'saliate', 'salgano'] },
  tradurre: { pres: ['traduco', 'traduci', 'traduce', 'traduciamo', 'traducete', 'traducono'], st: 'traduc', fs: 'tradurr', cong: ['traduca', 'traduca', 'traduca', 'traduciamo', 'traduciate', 'traducano'], pr: ['tradussi', 'traducesti', 'tradusse', 'traducemmo', 'traduceste', 'tradussero'], pp: 'tradotto', cls: 'ere' },
  vedere: { fs: 'vedr', pr: ['vidi', 'vedesti', 'vide', 'vedemmo', 'vedeste', 'videro'], pp: 'visto' },
  vivere: { fs: 'vivr', pr: ['vissi', 'vivesti', 'visse', 'vivemmo', 'viveste', 'vissero'], pp: 'vissuto' },
  prendere: { pr: ['presi', 'prendesti', 'prese', 'prendemmo', 'prendeste', 'presero'], pp: 'preso' },
  mettere: { pr: ['misi', 'mettesti', 'mise', 'mettemmo', 'metteste', 'misero'], pp: 'messo' },
  leggere: { pr: ['lessi', 'leggesti', 'lesse', 'leggemmo', 'leggeste', 'lessero'], pp: 'letto' },
  scrivere: { pr: ['scrissi', 'scrivesti', 'scrisse', 'scrivemmo', 'scriveste', 'scrissero'], pp: 'scritto' },
  chiudere: { pr: ['chiusi', 'chiudesti', 'chiuse', 'chiudemmo', 'chiudeste', 'chiusero'], pp: 'chiuso' },
  decidere: { pr: ['decisi', 'decidesti', 'decise', 'decidemmo', 'decideste', 'decisero'], pp: 'deciso' },
  rispondere: { pr: ['risposi', 'rispondesti', 'rispose', 'rispondemmo', 'rispondeste', 'risposero'], pp: 'risposto' },
  chiedere: { pr: ['chiesi', 'chiedesti', 'chiese', 'chiedemmo', 'chiedeste', 'chiesero'], pp: 'chiesto' },
  perdere: { pr: ['persi', 'perdesti', 'perse', 'perdemmo', 'perdeste', 'persero'], pp: 'perso' },
  conoscere: { pr: ['conobbi', 'conoscesti', 'conobbe', 'conoscemmo', 'conosceste', 'conobbero'], pp: 'conosciuto' },
  vincere: { pr: ['vinsi', 'vincesti', 'vinse', 'vincemmo', 'vinceste', 'vinsero'], pp: 'vinto' },
  spendere: { pr: ['spesi', 'spendesti', 'spese', 'spendemmo', 'spendeste', 'spesero'], pp: 'speso' },
  nascere: { aux: 'e', pr: ['nacqui', 'nascesti', 'nacque', 'nascemmo', 'nasceste', 'nacquero'], pp: 'nato' },
  aprire: { pp: 'aperto' },
  offrire: { pp: 'offerto' },
  scoprire: { pp: 'scoperto' },
  rompere: { pr: ['ruppi', 'rompesti', 'ruppe', 'rompemmo', 'rompeste', 'ruppero'], pp: 'rotto' },
  correre: { pr: ['corsi', 'corresti', 'corse', 'corremmo', 'correste', 'corsero'], pp: 'corso' }
};
var ISC = { capire: 1, finire: 1, preferire: 1, pulire: 1, spedire: 1, costruire: 1, restituire: 1, suggerire: 1, gestire: 1, sostituire: 1 };
var ESSERE_AUX = { arrivare: 1, partire: 1, tornare: 1, entrare: 1, restare: 1, diventare: 1, cadere: 1, nascere: 1, morire: 1, andare: 1, venire: 1, uscire: 1, rimanere: 1, salire: 1, stare: 1, essere: 1 };
G.cls = function (inf) { var i = IRR[inf]; if (i && i.cls) return i.cls; if (ISC[inf]) return 'isc'; return inf.slice(-3); };
G.aux = function (inf) { return ESSERE_AUX[inf] || (IRR[inf] && IRR[inf].aux === 'e') ? 'essere' : 'avere'; };
function stem(inf) { var i = IRR[inf]; return i && i.st ? i.st : inf.slice(0, -3); }
function hard(st) { return /[cg]$/.test(st); }               /* cercare, pagare */
function softI(st) { return /[cg]i$/.test(st); }             /* mangiare, cominciare */
function iStem(st) { return /i$/.test(st); }                 /* studiare, mangiare */
function join(st, end) {
  if (hard(st) && /^[ie]/.test(end)) return st + 'h' + end;
  if (iStem(st) && /^i/.test(end)) return st + end.slice(1);
  return st + end;
}
G.form = function (inf, t, p) {
  var irr = IRR[inf] || {}, c = G.cls(inf), st = stem(inf);
  if (irr[t]) return irr[t][p];
  var E;
  switch (t) {
    case 'pres':
      E = { are: ['o', 'i', 'a', 'iamo', 'ate', 'ano'], ere: ['o', 'i', 'e', 'iamo', 'ete', 'ono'], ire: ['o', 'i', 'e', 'iamo', 'ite', 'ono'], isc: ['isco', 'isci', 'isce', 'iamo', 'ite', 'iscono'] }[c];
      if (c === 'are') return join(st, E[p]);
      return st + E[p];
    case 'imp':
      E = { are: 'av', ere: 'ev', ire: 'iv', isc: 'iv' }[c];
      return st + E + ['o', 'i', 'a', 'amo', 'ate', 'ano'][p];
    case 'fut': case 'cond':
      var fs = irr.fs || (c === 'are' ? (softI(st) ? st.slice(0, -1) : st) + (hard(st) ? 'her' : 'er') : c === 'ere' ? st + 'er' : st + 'ir');
      return fs + (t === 'fut' ? ['ò', 'ai', 'à', 'emo', 'ete', 'anno'] : ['ei', 'esti', 'ebbe', 'emmo', 'este', 'ebbero'])[p];
    case 'cong':
      if (c === 'are') return join(st, ['i', 'i', 'i', 'iamo', 'iate', 'ino'][p]);
      if (c === 'isc') return st + ['isca', 'isca', 'isca', 'iamo', 'iate', 'iscano'][p];
      if (irr.pres && p < 3) return irr.pres[0].replace(/o$/, 'a') + (p === 5 ? 'no' : '');
      return st + ['a', 'a', 'a', 'iamo', 'iate', 'ano'][p];
    case 'ci':
      E = { are: 'a', ere: 'e', ire: 'i', isc: 'i' }[c];
      return st + E + ['ssi', 'ssi', 'sse', 'ssimo', 'ste', 'ssero'][p];
    case 'pr':
      if (c === 'are') return st + ['ai', 'asti', 'ò', 'ammo', 'aste', 'arono'][p];
      if (c === 'ere') return st + ['ei', 'esti', 'é', 'emmo', 'este', 'erono'][p];
      return st + ['ii', 'isti', 'ì', 'immo', 'iste', 'irono'][p];
  }
  return '';
};
G.pp = function (inf) { var i = IRR[inf]; if (i && i.pp) return i.pp; var c = G.cls(inf), st = inf.slice(0, -3); return st + (c === 'are' ? 'ato' : c === 'ere' ? 'uto' : 'ito'); };
G.agree = function (pp, g, pl) { return pp.slice(0, -1) + (pl ? (g === 'f' ? 'e' : 'i') : (g === 'f' ? 'a' : 'o')); };
/* compound tenses: auxTense = tense of the auxiliary */
G.compound = function (inf, auxT, p, g) {
  var aux = G.aux(inf), a = G.form(aux, auxT, p), pp = G.pp(inf);
  if (aux === 'essere') pp = G.agree(pp, g, p >= 3);
  return a + ' ' + pp;
};
var TENSES = {
  pres: { n: 'present tense', f: function (v, p) { return G.form(v, 'pres', p); } },
  imp: { n: 'imperfetto', f: function (v, p) { return G.form(v, 'imp', p); } },
  fut: { n: 'future (futuro semplice)', f: function (v, p) { return G.form(v, 'fut', p); } },
  cond: { n: 'present conditional', f: function (v, p) { return G.form(v, 'cond', p); } },
  cong: { n: 'present subjunctive', f: function (v, p) { return G.form(v, 'cong', p); } },
  ci: { n: 'imperfect subjunctive', f: function (v, p) { return G.form(v, 'ci', p); } },
  pr: { n: 'passato remoto', f: function (v, p) { return G.form(v, 'pr', p); } },
  pp: { n: 'passato prossimo', f: function (v, p, g) { return G.compound(v, 'pres', p, g); } },
  trap: { n: 'trapassato prossimo', f: function (v, p, g) { return G.compound(v, 'imp', p, g); } },
  fa: { n: 'futuro anteriore', f: function (v, p, g) { return G.compound(v, 'fut', p, g); } },
  cp: { n: 'past conditional', f: function (v, p, g) { return G.compound(v, 'cond', p, g); } },
  cpass: { n: 'past subjunctive', f: function (v, p, g) { return G.compound(v, 'cong', p, g); } },
  ctrap: { n: 'pluperfect subjunctive', f: function (v, p, g) { return G.compound(v, 'ci', p, g); } }
};
G.TENSES = TENSES;

/* subjects: person index, gender, label for compound-tense agreement */
var SUBJ = [
  { s: 'Io', p: 0, g: 'm', who: 'io = Luke' }, { s: 'Tu', p: 1, g: 'f', who: 'tu = Sara' }, { s: 'Marco', p: 2, g: 'm' }, { s: 'Giulia', p: 2, g: 'f' },
  { s: 'Noi', p: 3, g: 'm', who: 'noi = Luke e Marco' }, { s: 'Voi', p: 4, g: 'f', who: 'voi = Anna e Sara' }, { s: 'I miei amici', p: 5, g: 'm' }, { s: 'Le ragazze', p: 5, g: 'f' }
];
G.SUBJ = SUBJ;
/* verbs with complements that fit every subject and tense */
var VC = {
  parlare: ['con il direttore', 'italiano al lavoro'], lavorare: ['in centro', 'fino a tardi'], abitare: ['vicino alla stazione', 'in un appartamento piccolo'], studiare: ['in biblioteca', 'per l’esame di storia'],
  mangiare: ['una pizza margherita', 'al ristorante sotto casa'], cercare: ['un albergo economico', 'le chiavi della macchina'], pagare: ['il conto con la carta', 'l’affitto in contanti'], comprare: ['il pane al mercato', 'un regalo per la nonna'],
  ascoltare: ['la radio in macchina', 'un podcast in italiano'], guardare: ['un film italiano', 'la partita alla TV'], aspettare: ['l’autobus alla fermata', 'il treno per Napoli'], arrivare: ['a Roma in treno', 'in ufficio alle nove'],
  cominciare: ['un corso di cucina', 'il lavoro alle otto'], tornare: ['a casa a piedi', 'dalle vacanze'], prenotare: ['un tavolo per quattro', 'una camera con vista'], visitare: ['i Musei Vaticani', 'il centro storico'],
  cucinare: ['la carbonara per gli amici', 'il pesce alla griglia'], giocare: ['a calcio nel parco', 'a carte con i nonni'], imparare: ['le parole nuove', 'a suonare la chitarra'], entrare: ['nel museo', 'in farmacia'],
  restare: ['a casa', 'in albergo'], incontrare: ['i colleghi al bar', 'un vecchio amico in piazza'], telefonare: ['al medico', 'all’agenzia di viaggi'], portare: ['il vino alla festa', 'i documenti in ufficio'],
  prendere: ['il treno delle otto', 'un caffè al bar'], leggere: ['il giornale', 'un romanzo di Calvino'], scrivere: ['una mail al professore', 'una cartolina da Venezia'], vedere: ['un bel film', 'il Colosseo di notte'],
  vivere: ['in campagna', 'vicino al mare'], chiudere: ['la finestra', 'la porta a chiave'], mettere: ['la giacca nell’armadio', 'il latte in frigo'], perdere: ['il portafoglio', 'l’ultimo autobus'],
  chiedere: ['informazioni al vigile', 'il conto al cameriere'], rispondere: ['al telefono', 'alla mail del capo'], credere: ['alle sue parole', 'all’oroscopo'], vendere: ['la vecchia bici', 'la macchina usata'], ripetere: ['la domanda', 'la frase ad alta voce'],
  dormire: ['fino a tardi', 'in un ostello'], partire: ['per Firenze', 'alle sei del mattino'], sentire: ['un rumore strano', 'la musica dei vicini'], aprire: ['la finestra', 'un conto in banca'], offrire: ['un caffè agli amici', 'il pranzo a tutti'],
  capire: ['la lezione', 'il problema'], finire: ['il lavoro alle sei', 'i compiti'], preferire: ['il vino rosso', 'il mare alla montagna'], pulire: ['la cucina', 'la casa il sabato'], spedire: ['un pacco in America', 'le cartoline'],
  fare: ['la spesa al supermercato', 'una passeggiata in centro'], andare: ['al mare in agosto', 'in palestra'], venire: ['alla festa', 'a cena da noi'], uscire: ['con gli amici', 'di casa presto'], stare: ['a casa tutto il giorno', 'in albergo per tre notti'],
  dire: ['la verità', 'buongiorno ai vicini'], bere: ['un bicchiere di vino', 'molta acqua'], dare: ['una mano ai vicini', 'un esame importante'], rimanere: ['a Roma per una settimana', 'in ufficio fino a tardi'], tenere: ['un diario di viaggio', 'le chiavi in tasca'],
  scegliere: ['il menù del giorno', 'un vino toscano'], salire: ['sul treno', 'in cima alla torre'], tradurre: ['un articolo dall’inglese', 'la lettera'], conoscere: ['un ragazzo simpatico', 'molta gente nuova'], decidere: ['di partire', 'di cambiare casa'],
  spendere: ['troppo nei negozi', 'poco per il viaggio'], vincere: ['la partita', 'un premio'], nascere: ['in un piccolo paese', 'in primavera'], potere: ['aiutare i vicini', 'parlare con il medico'], volere: ['imparare il tedesco', 'cambiare lavoro'], dovere: ['lavorare sabato', 'pagare una multa'],
  sapere: ['la verità', 'la notizia'], viaggiare: ['in treno', 'per lavoro'], organizzare: ['una festa', 'un viaggio in Sicilia'], aiutare: ['i vicini', 'un turista'], spiegare: ['la regola', 'il problema al capo'], dimenticare: ['l’ombrello', 'il compleanno di Marco']
};
var TIME = {
  pres: ['Di solito', 'Oggi', 'Ogni sabato', 'Adesso'],
  imp: ['Anni fa, ogni estate,', 'Quando abitavamo a Milano,', 'Una volta, ogni domenica,'],
  pp: ['Ieri', 'La settimana scorsa', 'Sabato scorso', 'Lunedì scorso'],
  fut: ['Domani', 'L’anno prossimo', 'Fra due settimane', 'Dopodomani'],
  cond: ['In un mondo ideale,', 'Se fosse possibile,', 'Al posto di Paolo,'],
  pr: ['Nel 1990', 'Molti anni fa', 'Quell’estate lontana', 'Nel secolo scorso'],
  trap: ['Quando Paolo è arrivato,', 'Prima di quella sera', 'Quando ci siamo visti,'],
  fa: ['Entro domani sera', 'Prima della fine del mese', 'Entro le otto'],
  cp: ['Ieri', 'Lo scorso fine settimana', 'Con un po’ di fortuna,'],
  cong: ['È importante che', 'Bisogna che', 'È meglio che', 'È possibile che', 'Mia madre vuole che', 'Il professore vuole che'],
  ci: ['Era importante che', 'Bisognava che', 'Era meglio che', 'Mia madre sperava che', 'Il professore voleva che'],
  cpass: ['È possibile che', 'Mi sembra strano che', 'Il direttore crede che', 'Tutti sono contenti che'],
  ctrap: ['Nessuno immaginava che', 'Mi sembrava strano che', 'Il direttore credeva che', 'Tutti pensavano che']
};
var CP_TAIL = { cp: ', ma purtroppo non è stato possibile', cond: '' };
var LEVEL_TENSES = { A1: ['pres'], A2: ['pp', 'imp', 'fut', 'cond'], B1: ['cong', 'cpass', 'trap', 'fa', 'cp'], B2: ['ci', 'ctrap', 'pr'], C1: ['pr', 'ctrap', 'ci', 'cpass'] };
var LEVEL_VERBS = {
  A1: ['parlare', 'lavorare', 'abitare', 'studiare', 'mangiare', 'cercare', 'pagare', 'comprare', 'ascoltare', 'guardare', 'aspettare', 'cominciare', 'prenotare', 'cucinare', 'giocare', 'prendere', 'leggere', 'scrivere', 'vedere', 'vivere', 'chiudere', 'dormire', 'partire', 'sentire', 'aprire', 'capire', 'finire', 'preferire', 'pulire', 'spedire', 'fare', 'andare', 'venire', 'uscire', 'stare', 'dire', 'bere', 'potere', 'volere', 'dovere', 'sapere', 'imparare', 'rispondere', 'credere'],
  A2: ['parlare', 'lavorare', 'mangiare', 'cercare', 'comprare', 'guardare', 'arrivare', 'tornare', 'visitare', 'entrare', 'restare', 'incontrare', 'prendere', 'leggere', 'scrivere', 'vedere', 'chiudere', 'mettere', 'perdere', 'chiedere', 'rispondere', 'dormire', 'partire', 'aprire', 'offrire', 'capire', 'finire', 'fare', 'andare', 'venire', 'uscire', 'dire', 'bere', 'rimanere', 'scegliere', 'conoscere', 'decidere', 'spendere', 'viaggiare', 'organizzare', 'dimenticare'],
  B1: ['parlare', 'lavorare', 'arrivare', 'tornare', 'partire', 'capire', 'finire', 'fare', 'andare', 'venire', 'uscire', 'dire', 'bere', 'rimanere', 'scegliere', 'tradurre', 'dare', 'stare', 'sapere', 'potere', 'volere', 'dovere', 'prendere', 'leggere', 'scrivere', 'decidere', 'spiegare', 'aiutare', 'organizzare', 'tenere', 'salire', 'vedere', 'conoscere', 'spendere'],
  B2: ['parlare', 'arrivare', 'partire', 'capire', 'finire', 'fare', 'andare', 'venire', 'uscire', 'dire', 'bere', 'rimanere', 'scegliere', 'tradurre', 'dare', 'stare', 'sapere', 'potere', 'volere', 'dovere', 'prendere', 'leggere', 'scrivere', 'decidere', 'vincere', 'nascere', 'chiedere', 'rispondere', 'conoscere', 'mettere', 'tenere', 'perdere', 'spendere'],
  C1: ['fare', 'dire', 'bere', 'rimanere', 'scegliere', 'tradurre', 'dare', 'stare', 'sapere', 'volere', 'tenere', 'venire', 'prendere', 'leggere', 'scrivere', 'decidere', 'vincere', 'nascere', 'chiedere', 'rispondere', 'conoscere', 'mettere', 'perdere', 'spendere', 'vedere', 'chiudere']
};
var MOD = { potere: 1, dovere: 1, volere: 1, sapere: 1, nascere: 1 };
var BAD_WITH = { pr: { potere: 1, dovere: 1, volere: 1 }, imp: {}, cond: {}, trap: MOD, fa: MOD, cp: MOD, cpass: MOD, ctrap: MOD, cong: { nascere: 1, dovere: 1 }, ci: { nascere: 1, dovere: 1 }, pp: {}, fut: { nascere: 1 }, pres: { nascere: 1 } };

function explain(t, v, p, g, ans) {
  var T = TENSES[t], cls = G.cls(v), irr = IRR[v];
  var person = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'][p];
  var all = [0, 1, 2, 3, 4, 5].map(function (k) { return T.f(v, k, g); });
  var trig = '';
  if (t === 'cong' || t === 'cpass') trig = 'Expressions of necessity, hope, possibility, emotion or will followed by *che* need the subjunctive. ';
  if (t === 'ci' || t === 'ctrap') trig = 'When the main verb is in a past tense (or after *se* in hypotheses), the subjunctive moves into the past: imperfect or pluperfect subjunctive. ';
  if (['pp', 'trap', 'fa', 'cp', 'cpass', 'ctrap'].indexOf(t) > -1) {
    var aux = G.aux(v);
    return trig + '**' + v + '** forms its compound tenses with **' + aux + '**' + (aux === 'essere' ? ', so the participle agrees with the subject (' + G.pp(v) + ' → ' + ans.split(' ').pop() + ')' : ' and the participle **' + G.pp(v) + '** does not change') + '. In the ' + T.n + ' the auxiliary is in the ' + { pp: 'present', trap: 'imperfetto', fa: 'future', cp: 'conditional', cpass: 'present subjunctive', ctrap: 'imperfect subjunctive' }[t] + ': ' + person + ' → **' + ans + '**.';
  }
  var note = irr && irr[t] ? 'It is irregular here' : (cls === 'isc' && (t === 'pres' || t === 'cong') ? 'It is an -isc- verb' : 'It follows the regular -' + (cls === 'isc' ? 'ire' : cls.slice(-3)) + ' pattern');
  return trig + note + ': **' + v + '** in the ' + T.n + ' → ' + all.map(function (f, k) { return (k === p ? '**' : '') + ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'][k] + ' ' + f + (k === p ? '**' : ''); }).join(', ') + '.';
}
function distract(t, v, p, g, ans) {
  var T = TENSES[t], out = [];
  [p === 5 ? 2 : 5, p === 3 ? 4 : 3, p === 1 ? 0 : 1, p === 2 ? 0 : 2, 4, 0].forEach(function (k) { var f = T.f(v, k, g); if (f !== ans) out.push(f); });
  /* cross-tense distractors that are clearly wrong in context */
  var cross = { imp: ['fut', 'cond'], pp: ['fut', 'cond'], fut: ['pp'], cond: ['fut'], cong: ['pres', 'cond'], ci: ['cong', 'cond'], cp: ['cond'], cpass: ['pp'], ctrap: ['cpass'] }[t] || [];
  var x = [];
  cross.forEach(function (ct) { var f = TENSES[ct].f(v, p, g); if (f !== ans) x.push(f); });
  /* wrong auxiliary / agreement for compound tenses */
  if (['pp', 'trap', 'fa', 'cp', 'cpass', 'ctrap'].indexOf(t) > -1) {
    var auxT = { pp: 'pres', trap: 'imp', fa: 'fut', cp: 'cond', cpass: 'cong', ctrap: 'ci' }[t];
    var wrongAux = G.aux(v) === 'essere' ? 'avere' : 'essere', pp = G.pp(v);
    x.unshift(G.form(wrongAux, auxT, p) + ' ' + (wrongAux === 'essere' ? G.agree(pp, g, p >= 3) : pp));
    if (G.aux(v) === 'essere') { var wa = G.agree(pp, g === 'f' ? 'm' : 'f', p >= 3); if (wa !== ans.split(' ').pop()) x.unshift(G.form('essere', auxT, p) + ' ' + wa); }
  }
  var res = U.uniq(x.slice(0, 2).concat(out)).filter(function (f) { return f !== ans; });
  return res.slice(0, 3);
}
function conjItem(lv, t, v, si, fi) {
  var sj = SUBJ[si], comp = VC[v]; if (!comp) return null;
  var time = TIME[t][(fi + si) % TIME[t].length], c = comp[fi % comp.length], p = sj.p, g = sj.g;
  var ans = TENSES[t].f(v, p, g);
  var subj = sj.s, sentence;
  var lowSubj = /^(Marco|Giulia)$/.test(subj) ? subj : subj.charAt(0).toLowerCase() + subj.slice(1);
  if (/che$/.test(time)) sentence = time + ' ' + lowSubj + ' ___ ' + c + '.';
  else if (/,$/.test(time)) sentence = time + ' ' + lowSubj + ' ___ ' + c + (CP_TAIL[t] || '') + '.';
  else sentence = time + ' ' + lowSubj + ' ___ ' + c + (CP_TAIL[t] || '') + '.';
  var compound = ['pp', 'trap', 'fa', 'cp', 'cpass', 'ctrap'].indexOf(t) > -1;
  var opts = [ans].concat(distract(t, v, p, g, ans));
  if (opts.length < 4) return null;
  return { id: 'g:' + t + ':' + v + ':' + si + ':' + fi, gen: [lv, 'conj', t, v, si, fi], type: 'mc', level: lv, skill: 'grammar', topic: TENSES[t].n, prompt: sentence + ' (' + v + ')', sub: compound && sj.who && G.aux(v) === 'essere' ? '(' + sj.who + ')' : '', opts: opts, answer: ans, why: explain(t, v, p, g, ans) };
}

/* ================= Nouns, articles, adjectives ================= */
/* [singular, gender, plural, english] */
var NOUNS = [['libro', 'm', 'libri', 'book'], ['zaino', 'm', 'zaini', 'backpack'], ['studente', 'm', 'studenti', 'student'], ['amico', 'm', 'amici', 'friend'], ['albergo', 'm', 'alberghi', 'hotel'], ['treno', 'm', 'treni', 'train'], ['specchio', 'm', 'specchi', 'mirror'], ['zio', 'm', 'zii', 'uncle'], ['orologio', 'm', 'orologi', 'watch'], ['aereo', 'm', 'aerei', 'plane'], ['psicologo', 'm', 'psicologi', 'psychologist'], ['gnomo', 'm', 'gnomi', 'gnome'], ['ristorante', 'm', 'ristoranti', 'restaurant'], ['ospedale', 'm', 'ospedali', 'hospital'], ['sport', 'm', 'sport', 'sport'], ['bar', 'm', 'bar', 'café'], ['caffè', 'm', 'caffè', 'coffee'], ['problema', 'm', 'problemi', 'problem'], ['uomo', 'm', 'uomini', 'man'], ['ombrello', 'm', 'ombrelli', 'umbrella'], ['scontrino', 'm', 'scontrini', 'receipt'], ['spettacolo', 'm', 'spettacoli', 'show'], ['yogurt', 'm', 'yogurt', 'yogurt'], ['gelato', 'm', 'gelati', 'ice cream'], ['parco', 'm', 'parchi', 'park'], ['medico', 'm', 'medici', 'doctor'], ['programma', 'm', 'programmi', 'programme'], ['film', 'm', 'film', 'film'], ['ufficio', 'm', 'uffici', 'office'], ['stadio', 'm', 'stadi', 'stadium'],
  ['casa', 'f', 'case', 'house'], ['stazione', 'f', 'stazioni', 'station'], ['amica', 'f', 'amiche', 'friend (f)'], ['isola', 'f', 'isole', 'island'], ['città', 'f', 'città', 'city'], ['università', 'f', 'università', 'university'], ['chiave', 'f', 'chiavi', 'key'], ['valigia', 'f', 'valigie', 'suitcase'], ['farmacia', 'f', 'farmacie', 'pharmacy'], ['mano', 'f', 'mani', 'hand'], ['foto', 'f', 'foto', 'photo'], ['banca', 'f', 'banche', 'bank'], ['arancia', 'f', 'arance', 'orange'], ['estate', 'f', 'estati', 'summer'], ['notte', 'f', 'notti', 'night'], ['piazza', 'f', 'piazze', 'square'], ['strada', 'f', 'strade', 'road'], ['spiaggia', 'f', 'spiagge', 'beach'], ['email', 'f', 'email', 'email'], ['camicia', 'f', 'camicie', 'shirt'], ['lezione', 'f', 'lezioni', 'lesson'], ['opera', 'f', 'opere', 'opera / work'], ['idea', 'f', 'idee', 'idea'], ['bicicletta', 'f', 'biciclette', 'bicycle'], ['moto', 'f', 'moto', 'motorbike']];
function defArt(w, g, pl) {
  var v = /^[aeiouàèéìòù]/i.test(w), sp = /^(s[^aeiouàèéìòù]|z|gn|ps|x|y|pn)/i.test(w);
  if (g === 'm') return pl ? (v || sp ? 'gli' : 'i') : (v ? "l'" : sp ? 'lo' : 'il');
  return pl ? 'le' : (v ? "l'" : 'la');
}
function indArt(w, g) { var v = /^[aeiouàèéìòù]/i.test(w), sp = /^(s[^aeiouàèéìòù]|z|gn|ps|x|y|pn)/i.test(w); return g === 'm' ? (sp ? 'uno' : 'un') : (v ? "un'" : 'una'); }
G.defArt = defArt;
function artWhy(w, g, pl, a) {
  var v = /^[aeiouàèéìòù]/i.test(w), sp = /^(s[^aeiouàèéìòù]|z|gn|ps|x|y|pn)/i.test(w);
  var gn = g === 'm' ? 'masculine' : 'feminine';
  var reason = v ? 'it begins with a vowel' : sp ? 'it begins with ' + (/^s/.test(w) ? 's + consonant' : w.slice(0, /^(gn|ps|pn)/.test(w) ? 2 : 1)) : 'it begins with a normal consonant';
  return '**' + w + '** is ' + gn + (pl ? ' plural' : '') + ' and ' + reason + ', so the article is **' + a + '**.' + (g === 'f' && pl ? ' The feminine plural article is always le.' : '');
}
function artItem(i, pl) {
  var n = NOUNS[i], w = pl ? n[2] : n[0], g = n[1], a = defArt(w, g, pl);
  var opts = pl ? ['i', 'gli', 'le', 'la'] : ['il', 'lo', "l'", 'la'];
  if (opts.indexOf(a) < 0) opts[3] = a;
  return { id: 'g:art:' + i + ':' + (pl ? 1 : 0), gen: ['A1', 'art', i, pl ? 1 : 0], type: 'mc', level: 'A1', skill: 'grammar', topic: 'Definite articles', prompt: 'Choose the article: ___ ' + w, sub: '(the ' + n[3] + (pl ? ' — plural' : '') + ')', opts: opts, answer: a, why: artWhy(w, g, pl, a) };
}
function indItem(i) {
  var n = NOUNS[i], w = n[0], g = n[1], a = indArt(w, g);
  return { id: 'g:ind:' + i, gen: ['A1', 'ind', i], type: 'mc', level: 'A1', skill: 'grammar', topic: 'Indefinite articles', prompt: 'Choose “a / an”: ___ ' + w, sub: '(a / an ' + n[3] + ')', opts: ['un', 'uno', 'una', "un'"], answer: a, why: '**' + w + '** is ' + (g === 'm' ? 'masculine' : 'feminine') + '. ' + (g === 'm' ? 'Masculine: uno before s + consonant, z, gn, ps, y; un elsewhere — never with an apostrophe.' : 'Feminine: un’ before a vowel, una before a consonant.') + ' → **' + (a === "un'" ? a + w : a + ' ' + w) + '**.' };
}
function plurItem(i) {
  var n = NOUNS[i], w = n[0], pl = n[2], g = n[1], base = w.slice(0, -1), wrong = [];
  if (pl !== w) wrong.push(w);
  if (/[àèéìòù]$/.test(w) || /[^aeiou]$/.test(w)) wrong.push(w + 's', /[aeiou]$/.test(w) ? base + 'i' : w + 'i', base + 'e');
  else if (/ca$|ga$/.test(w)) wrong.push(base + 'e', base + 'hi');
  else if (/cia$|gia$/.test(w)) wrong.push(w.slice(0, -2) + 'e', base + 'i');
  else if (/a$/.test(w)) wrong.push(g === 'm' ? base + 'e' : base + 'i', w + 's');
  else if (/co$|go$/.test(w)) wrong.push(/h[i]$/.test(pl) ? base + 'i' : base + 'hi', base + 'e');
  else if (/io$/.test(w)) wrong.push(base + 'ii', base + 'e');
  else if (/o$/.test(w)) wrong.push(base + 'e', base + 'a');
  else if (/e$/.test(w)) wrong.push(w + 's', g === 'f' ? w : base + 'a');
  if (w === 'uomo') wrong = ['uomi', 'uome', 'uomo'];
  if (w === 'mano') wrong = ['mane', 'mano', 'manos'];
  wrong = U.uniq(wrong).filter(function (x) { return x !== pl; });
  while (wrong.length < 3) wrong.push(w + ['s', 'i', 'e'][wrong.length]);
  var art = defArt(pl, g, true), sa = defArt(w, g, false);
  var why = pl === w ? '**' + w + '** does not change in the plural (' + (/[àèéìòù]$/.test(w) ? 'stressed final vowel' : /[^aeiou]$/.test(w) ? 'foreign word ending in a consonant' : 'shortened word') + '). Only the article changes: ' + art + ' ' + pl + '.' : w === 'uomo' ? 'Uomo has an irregular plural: gli uomini.' : w === 'mano' ? 'Mano is feminine and irregular: le mani.' : (/a$/.test(w) && g === 'm') ? '**' + w + '** is masculine despite ending in -a, so the plural ends in -i: ' + art + ' ' + pl + '.' : 'Plural of **' + w + '**: **' + art + ' ' + pl + '**' + (/[cg]h[ei]$/.test(pl) ? ' (h keeps the hard sound)' : '') + '.';
  return { id: 'g:plur:' + i, gen: ['A1', 'plur', i], type: 'mc', level: 'A1', skill: 'grammar', topic: 'Plural nouns', prompt: 'What is the plural of “' + (sa === "l'" ? sa + w : sa + ' ' + w) + '”?', opts: [art + ' ' + pl].concat(wrong.slice(0, 3).map(function (x) { return art + ' ' + x; })), answer: art + ' ' + pl, why: why };
}
/* adjectives: [ms, fs, mp, fp, en] */
var ADJ = [['bianco', 'bianca', 'bianchi', 'bianche', 'white'], ['antico', 'antica', 'antichi', 'antiche', 'ancient'], ['simpatico', 'simpatica', 'simpatici', 'simpatiche', 'nice'], ['lungo', 'lunga', 'lunghi', 'lunghe', 'long'], ['vecchio', 'vecchia', 'vecchi', 'vecchie', 'old'], ['grigio', 'grigia', 'grigi', 'grigie', 'grey'], ['rosso', 'rossa', 'rossi', 'rosse', 'red'], ['piccolo', 'piccola', 'piccoli', 'piccole', 'small'], ['grande', 'grande', 'grandi', 'grandi', 'big'], ['verde', 'verde', 'verdi', 'verdi', 'green'], ['interessante', 'interessante', 'interessanti', 'interessanti', 'interesting'], ['gentile', 'gentile', 'gentili', 'gentili', 'kind'], ['blu', 'blu', 'blu', 'blu', 'blue'], ['rosa', 'rosa', 'rosa', 'rosa', 'pink'], ['stanco', 'stanca', 'stanchi', 'stanche', 'tired'], ['fresco', 'fresca', 'freschi', 'fresche', 'fresh'], ['caro', 'cara', 'cari', 'care', 'expensive'], ['pulito', 'pulita', 'puliti', 'pulite', 'clean']];
var ADJ_N = [['la casa', 'f', 0, 'house'], ['le case', 'f', 1, 'houses'], ['il museo', 'm', 0, 'museum'], ['i musei', 'm', 1, 'museums'], ['la giacca', 'f', 0, 'jacket'], ['le scarpe', 'f', 1, 'shoes'], ['il ragazzo', 'm', 0, 'boy'], ['le ragazze', 'f', 1, 'girls'], ['lo zaino', 'm', 0, 'backpack'], ['gli alberghi', 'm', 1, 'hotels'], ['la chiesa', 'f', 0, 'church'], ['i pantaloni', 'm', 1, 'trousers']];
var ADJ_OK = { bianco: [0, 1, 2, 3, 4, 5, 8, 9, 10, 11], antico: [0, 1, 2, 3, 10], simpatico: [6, 7], lungo: [4, 5, 11], vecchio: [0, 1, 2, 3, 4, 5, 8, 9, 10, 11], grigio: [4, 5, 8, 11], rosso: [4, 5, 8, 11, 0, 1], piccolo: [0, 1, 2, 3, 8, 9, 10], grande: [0, 1, 2, 3, 8, 9, 10], verde: [4, 5, 8, 11, 0], interessante: [2, 3], gentile: [6, 7], blu: [4, 5, 8, 11], rosa: [4, 5, 0], stanco: [6, 7], fresco: [], caro: [0, 1, 2, 3, 4, 5, 9], pulito: [0, 1, 9, 5, 11] };
function adjItem(ai, ni) {
  var a = ADJ[ai], n = ADJ_N[ni], idx = (n[2] ? 2 : 0) + (n[1] === 'f' ? 1 : 0), ans = a[idx];
  var opts = U.uniq([ans, a[0], a[1], a[2], a[3]]).filter(function (x) { return x !== ans; });
  if (opts.length < 3) return null;
  var verb = n[2] ? 'sono' : 'è', N = n[0].charAt(0).toUpperCase() + n[0].slice(1);
  var inv = a[0] === a[2] && a[0] === a[1];
  return { id: 'g:adj:' + ai + ':' + ni, gen: ['A1', 'adj', ai, ni], type: 'mc', level: 'A1', skill: 'grammar', topic: 'Adjective agreement', prompt: N + ' ' + verb + ' ___ . (' + a[0] + ')', sub: '(' + a[4] + ')', opts: [ans].concat(opts.slice(0, 3)), answer: ans, why: inv ? '**' + a[0] + '** is invariable: it never changes.' : 'The adjective agrees with **' + n[0] + '** (' + (n[1] === 'm' ? 'masculine' : 'feminine') + ' ' + (n[2] ? 'plural' : 'singular') + '): **' + ans + '**.' + (/[cg]h/.test(ans) ? ' The h keeps the hard sound.' : '') };
}

/* ================= Articulated prepositions ================= */
var PREP = { a: ['al', 'allo', "all'", 'alla', 'ai', 'agli', 'alle'], da: ['dal', 'dallo', "dall'", 'dalla', 'dai', 'dagli', 'dalle'], di: ['del', 'dello', "dell'", 'della', 'dei', 'degli', 'delle'], 'in': ['nel', 'nello', "nell'", 'nella', 'nei', 'negli', 'nelle'], su: ['sul', 'sullo', "sull'", 'sulla', 'sui', 'sugli', 'sulle'] };
var AI = { il: 0, lo: 1, "l'": 2, la: 3, i: 4, gli: 5, le: 6 };
var PREP_FR = [['a', 'Stasera andiamo ___ {n}.', ['cinema', 'm', 0], ['ristorante', 'm', 0], ['stadio', 'm', 0], ['aeroporto', 'm', 0], ['stazione', 'f', 0], ['mare', 'm', 0], ['zoo', 'm', 0], ['concerto', 'm', 0], ['ospedale', 'm', 0]],
  ['a', 'Ho scritto una mail ___ {n}.', ['professore', 'm', 0], ['studenti', 'm', 1], ['zii', 'm', 1], ['amiche', 'f', 1], ['direttrice', 'f', 0], ['amico di Marco', 'm', 0], ['vicini', 'm', 1]],
  ['da', 'Il treno arriva ___ {n}.', ['Svizzera', 'f', 0], ['aeroporto', 'm', 0], ['nord', 'm', 0], ['Stati Uniti', 'm', 1]],
  ['da', 'Domani vado ___ {n}.', ['medico', 'm', 0], ['dentista', 'm', 0], ['parrucchiere', 'm', 0], ['nonni', 'm', 1], ['zia', 'f', 0], ['psicologo', 'm', 0]],
  ['di', 'Il prezzo ___ {n} è alto.', ['biglietti', 'm', 1], ['albergo', 'm', 0], ['camera', 'f', 0], ['scarpe', 'f', 1], ['zaino', 'm', 0], ['affitto', 'm', 0], ['spettacolo', 'm', 0]],
  ['in', 'Le chiavi sono ___ {n}.', ['borsa', 'f', 0], ['cassetto', 'm', 0], ['zaino', 'm', 0], ['armadio', 'm', 0], ['tasche della giacca', 'f', 1], ['scatole', 'f', 1], ['scompartimento', 'm', 0]],
  ['in', 'Ci sono molti turisti ___ {n}.', ['centro storico', 'm', 0], ['musei', 'm', 1], ['isole greche', 'f', 1], ['Stati Uniti', 'm', 1], ['piazza principale', 'f', 0], ['albergo', 'm', 0]],
  ['su', 'Il gatto dorme ___ {n}.', ['divano', 'm', 0], ['letto', 'm', 0], ['sedia', 'f', 0], ['scale', 'f', 1], ['armadio', 'm', 0], ['zaino', 'm', 0], ['cuscini', 'm', 1]]];
function prepItem(fi, ni) {
  var F = PREP_FR[fi], n = F[ni + 2]; if (!n) return null;
  var w = n[0], art = defArt(w, n[1], !!n[2]), ans = PREP[F[0]][AI[art]];
  var forms = PREP[F[0]], wrong = [];
  /* distractors: same preposition with other articles, and the unmerged form */
  [0, 1, 2, 3, 4, 5, 6].forEach(function (k) { if (forms[k] !== ans) wrong.push(forms[k]); });
  var alt = { il: [1, 3], lo: [0, 5], "l'": [3, 0], la: [0, 6], i: [5, 0], gli: [4, 1], le: [3, 5] }[art];
  var opts = [ans, forms[alt[0]], forms[alt[1]], F[0] + ' ' + art];
  var s = F[1].replace('{n}', w);
  if (/'$/.test(ans)) s = s.replace('___ ', '___');
  return { id: 'g:prep:' + fi + ':' + ni, gen: ['A1', 'prep', fi, ni], type: 'mc', level: 'A1', skill: 'grammar', topic: 'Articulated prepositions', prompt: s + ' (' + F[0] + ')', opts: U.uniq(opts), answer: ans, why: '**' + w + '** takes the article **' + art + '**, and ' + F[0] + ' + ' + art + ' must merge into **' + ans + '**.' };
}

/* ================= Possessives ================= */
var POSS = { m: ['mio', 'tuo', 'suo', 'nostro', 'vostro', 'loro'], f: ['mia', 'tua', 'sua', 'nostra', 'vostra', 'loro'], mp: ['miei', 'tuoi', 'suoi', 'nostri', 'vostri', 'loro'], fp: ['mie', 'tue', 'sue', 'nostre', 'vostre', 'loro'] };
var OWN = ['my', 'your (tu)', 'his', 'our', 'your (voi)', 'their'];
var OWN_I = [0, 1, 2, 3, 4, 5];
var PN = [['madre', 'f', 0, 1], ['padre', 'm', 0, 1], ['sorella', 'f', 0, 1], ['fratello', 'm', 0, 1], ['zio', 'm', 0, 1], ['nonna', 'f', 0, 1], ['cugino', 'm', 0, 1], ['figlia', 'f', 0, 1], ['genitori', 'm', 1, 1], ['fratelli', 'm', 1, 1], ['sorelle', 'f', 1, 1], ['nonni', 'm', 1, 1], ['macchina', 'f', 0, 0], ['passaporto', 'm', 0, 0], ['chiavi', 'f', 1, 0], ['amici', 'm', 1, 0], ['casa', 'f', 0, 0], ['valigie', 'f', 1, 0], ['zaino', 'm', 0, 0]];
var POSS_FR = ['Ecco ___ {n}.', 'Dove sono ___ {n}?', 'Ti presento ___ {n}.'];
function possItem(ni, oi) {
  var n = PN[ni], key = n[1] + (n[2] ? 'p' : ''), pos = POSS[key][oi];
  var noArt = n[3] && !n[2] && oi !== 5;
  var art = defArt(pos, n[1], !!n[2]);
  var ans = noArt ? pos : art + ' ' + pos;
  var wrongs = [noArt ? art + ' ' + pos : pos];
  var otherG = { m: 'f', f: 'm', mp: 'fp', fp: 'mp' }[key], og = POSS[otherG][oi];
  wrongs.push(noArt ? og : defArt(og, otherG.charAt(0), !!n[2]) + ' ' + og);
  var otherN = { m: 'mp', f: 'fp', mp: 'm', fp: 'f' }[key], on = POSS[otherN][oi];
  wrongs.push((noArt ? '' : art + ' ') + on);
  if (oi === 2) wrongs.push((noArt ? '' : art + ' ') + 'lui');
  var opts = U.uniq([ans].concat(wrongs)).filter(function (x, k) { return k === 0 || x !== ans; }).slice(0, 4);
  if (opts.length < 3) return null;
  var fr = n[2] ? 'Dove sono ___ {n}?' : (n[3] ? 'Come si chiama ___ {n}?' : 'Ecco ___ {n}.');
  var why = n[3] ? (noArt ? 'With a singular family member and no adjective, the article is dropped: **' + ans + ' ' + n[0] + '**.' : oi === 5 ? '**Loro** always keeps the article, even with family: **' + ans + ' ' + n[0] + '**.' : 'Plural family nouns keep the article: **' + ans + ' ' + n[0] + '**.') : 'With objects, the possessive needs the article and agrees with the noun (' + n[0] + '): **' + ans + '**.';
  return { id: 'g:poss:' + ni + ':' + oi, gen: ['A1', 'poss', ni, oi], type: 'mc', level: 'A1', skill: 'grammar', topic: 'Possessives', prompt: fr.replace('{n}', n[0]) + ' (' + OWN[oi] + ')', opts: opts, answer: ans, why: why + (oi === 2 ? ' Suo agrees with the thing owned, not with the owner — it can mean his or her.' : '') };
}

/* ================= Piacere ================= */
var LIKES = [['il gelato al pistacchio', 0], ['la pizza napoletana', 0], ['i film italiani', 1], ['le canzoni di De André', 1], ['viaggiare in treno', 0], ['gli spaghetti alle vongole', 1], ['il mare d’inverno', 0], ['le città d’arte', 1], ['cucinare per gli amici', 0], ['i musei di Firenze', 1]];
var WHO = [['A Marco', 'gli'], ['A Giulia', 'le'], ['Ai miei genitori', 'gli'], ['A noi', 'ci'], ['A me', 'mi'], ['A te', 'ti']];
function piaceItem(li, wi, mode) {
  var L = LIKES[li], W = WHO[wi], v = L[1] ? 'piacciono' : 'piace';
  if (mode === 0) return { id: 'g:piac:' + li + ':' + wi, gen: ['A1', 'piac', li, wi, 0], type: 'mc', level: 'A1', skill: 'grammar', topic: 'Piacere', prompt: W[0] + ' ___ ' + L[0] + '.', opts: [v, L[1] ? 'piace' : 'piacciono', 'piaccio', 'piacciamo'], answer: v, why: 'With piacere the thing liked is the subject. **' + L[0] + '** is ' + (L[1] ? 'plural' : (/^[a-z]+are$|^[a-z]+ere$|^[a-z]+ire$/.test(L[0].split(' ')[0]) ? 'an infinitive (counts as singular)' : 'singular')) + ', so: **' + v + '**.' };
  var pr = W[1], P2 = pr.charAt(0).toUpperCase() + pr.slice(1);
  var en = { 'A Marco': 'to him', 'A Giulia': 'to her', 'Ai miei genitori': 'to them', 'A noi': 'to us', 'A me': 'to me', 'A te': 'to you' }[W[0]];
  var opts = U.uniq([P2, 'Gli', 'Le', 'Lo', 'La', 'Ci', 'Mi']).filter(function (x) { return x !== P2; });
  return { id: 'g:piac2:' + li + ':' + wi, gen: ['A1', 'piac', li, wi, 1], type: 'mc', level: 'A1', skill: 'grammar', topic: 'Piacere', prompt: '___ ' + v + ' ' + L[0] + '. (' + en + ')', opts: [P2].concat(opts.slice(0, 3)), answer: P2, why: 'Piacere uses indirect object pronouns: mi, ti, gli (to him / to them), le (to her), ci, vi. ' + en + ' = **' + pr + '**. Direct pronouns like lo/la are wrong here.' };
}

/* ================= Numbers & time ================= */
var UN = ['zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove', 'dieci', 'undici', 'dodici', 'tredici', 'quattordici', 'quindici', 'sedici', 'diciassette', 'diciotto', 'diciannove'];
var TENS = ['', '', 'venti', 'trenta', 'quaranta', 'cinquanta', 'sessanta', 'settanta', 'ottanta', 'novanta'];
G.num = function (n) {
  if (n < 20) return UN[n];
  if (n < 100) { var t = TENS[Math.floor(n / 10)], u = n % 10; if (!u) return t; if (u === 1 || u === 8) t = t.slice(0, -1); return t + (u === 3 ? 'tré' : UN[u]); }
  if (n < 1000) { var h = Math.floor(n / 100), r = n % 100; var c = h === 1 ? 'cento' : UN[h] + 'cento'; if ((r >= 80 && r < 90) || r === 8) c = c.slice(0, -1); return c + (r ? G.num(r) : ''); }
  var th = Math.floor(n / 1000), rr = n % 1000; return (th === 1 ? 'mille' : G.num(th) + 'mila') + (rr ? G.num(rr) : '');
};
function numItem(n) {
  var ans = G.num(n), wrong = [];
  var swap = n < 100 && n % 10 > 1 ? +(String(n % 10) + String(Math.floor(n / 10))) : null;
  if (swap && swap !== n && swap > 10) wrong.push(G.num(swap));
  wrong.push(G.num(n + 1 > 99 && n < 100 ? n - 2 : n + 1), G.num(n - 1 > 10 ? n - 1 : n + 2));
  var u = n % 10; if (n > 20 && n < 100 && (u === 1 || u === 8)) wrong.unshift(TENS[Math.floor(n / 10)] + UN[u]);
  if (n > 20 && n < 100 && u === 3) wrong.unshift(TENS[Math.floor(n / 10)] + 'tre');
  if (n >= 2000 && n < 10000) wrong.unshift(G.num(Math.floor(n / 1000)) + 'mille' + (n % 1000 ? G.num(n % 1000) : ''));
  wrong = U.uniq(wrong).filter(function (x) { return x !== ans; }).slice(0, 3);
  return { id: 'g:num:' + n, gen: ['A1', 'num', n], type: 'mc', level: 'A1', skill: 'vocabulary', topic: 'Numbers', prompt: 'How do you write **' + n + '** in Italian?', opts: [ans].concat(wrong), answer: ans, why: (n > 20 && n < 100 && (u === 1 || u === 8) ? 'The tens drop their final vowel before uno and otto. ' : '') + (n > 20 && u === 3 ? 'Compound numbers ending in tre take an accent: -tré. ' : '') + (n >= 2000 ? 'The plural of mille is mila. ' : '') + n + ' = **' + ans + '**.' };
}
function hourWord(h) { return h === 1 ? "l'una" : 'le ' + G.num(h); }
function timeText(h, m) {
  if (h === 12 && m === 0) return 'È mezzogiorno.';
  if (m === 45) { var n = h % 12 + 1; return (n === 1 ? "È l'una" : 'Sono le ' + G.num(n)) + ' meno un quarto.'; }
  var base = h === 1 ? "È l'una" : 'Sono le ' + G.num(h);
  return base + (m === 0 ? '' : m === 15 ? ' e un quarto' : m === 30 ? ' e mezza' : ' e ' + G.num(m)) + '.';
}
function timeItem(h, m) {
  var ans = timeText(h, m), pad = function (x) { return ('0' + x).slice(-2); };
  var w = U.uniq([timeText(h, m === 45 ? 15 : m === 15 ? 45 : (m + 10) % 60), timeText(h % 12 + 1, m), timeText(h === 1 ? 2 : h - 1 || 11, m === 30 ? 0 : 30), (h === 1 ? 'Sono le una' : "È le " + G.num(h)) + (m === 0 ? '' : ' e ' + G.num(m)) + '.']).filter(function (x) { return x !== ans; }).slice(0, 3);
  return { id: 'g:time:' + h + ':' + m, gen: ['A1', 'time', h, m], type: 'mc', level: 'A1', skill: 'vocabulary', topic: 'Telling the time', prompt: 'What time is it? **' + h + ':' + pad(m) + '**', opts: [ans].concat(w), answer: ans, why: 'Hours use “Sono le …” except one o’clock, noon and midnight (“È l’una”). ' + (m === 45 ? 'Quarter to = meno un quarto, counted from the next hour. ' : '') + h + ':' + pad(m) + ' = **' + ans + '**' };
}

/* ================= Object pronouns (A2) ================= */
/* [verb (tu present question), answer verb io-form, past participle, objects [[np, g, pl]]] */
var OBJV = [['Compri', 'compro', 'comprato', [['il pane', 'm', 0], ['la frutta', 'f', 0], ['i biglietti', 'm', 1], ['le arance', 'f', 1]]], ['Leggi', 'leggo', 'letto', [['il giornale', 'm', 0], ['la lettera', 'f', 0], ['i messaggi', 'm', 1], ['le notizie', 'f', 1]]], ['Inviti', 'invito', 'invitato', [['Marco', 'm', 0], ['Giulia', 'f', 0], ['i colleghi', 'm', 1], ['le tue amiche', 'f', 1]]], ['Prendi', 'prendo', 'preso', [['il treno', 'm', 0], ['la metro', 'f', 0], ['gli spaghetti', 'm', 1], ['le chiavi', 'f', 1]]], ['Chiami', 'chiamo', 'chiamato', [['il medico', 'm', 0], ['la nonna', 'f', 0], ['i tuoi genitori', 'm', 1], ['le ragazze', 'f', 1]]], ['Finisci', 'finisco', 'finito', [['il libro', 'm', 0], ['la pizza', 'f', 0], ['i compiti', 'm', 1], ['le lasagne', 'f', 1]]], ['Vedi', 'vedo', 'visto', [['Paolo', 'm', 0], ['la professoressa', 'f', 0], ['i ragazzi', 'm', 1], ['le tue cugine', 'f', 1]]]];
var PDO = { m0: 'lo', f0: 'la', m1: 'li', f1: 'le' };
function dobjItem(vi, oi, past) {
  var V = OBJV[vi], o = V[3][oi], pr = PDO[o[1] + o[2]];
  if (!past) {
    var opts = ['lo', 'la', 'li', 'le', 'gli'].filter(function (x) { return x !== pr; });
    return { id: 'g:dobj:' + vi + ':' + oi, gen: ['A2', 'dobj', vi, oi, 0], type: 'mc', level: 'A2', skill: 'grammar', topic: 'Direct object pronouns', prompt: V[0] + ' ' + o[0] + '? — Sì, ___ ' + V[1] + ' adesso.', opts: [pr].concat(U.shuffle(opts, U.rng(vi * 7 + oi)).slice(0, 3)), answer: pr, why: '**' + o[0] + '** is ' + (o[1] === 'm' ? 'masculine' : 'feminine') + ' ' + (o[2] ? 'plural' : 'singular') + ', so the direct object pronoun is **' + pr + '** (lo, la, li, le). It goes before the conjugated verb.' };
  }
  var ppA = G.agree(V[2], o[1], o[2]), aux = (pr === 'lo' || pr === 'la') ? "l'ho" : pr + ' ho';
  var wrongs = [G.agree(V[2], o[1] === 'm' ? 'f' : 'm', o[2]), G.agree(V[2], o[1], !o[2]), G.agree(V[2], o[1] === 'm' ? 'f' : 'm', !o[2])].filter(function (x) { return x !== ppA; });
  return { id: 'g:dobjp:' + vi + ':' + oi, gen: ['A2', 'dobj', vi, oi, 1], type: 'mc', level: 'A2', skill: 'grammar', topic: 'Pronouns in the past', prompt: 'Hai ' + V[2] + ' ' + o[0] + '? — Sì, ' + aux + ' ___ ieri.', opts: [ppA].concat(wrongs.slice(0, 3)), answer: ppA, why: 'When lo, la, li, le come before avere in the passato prossimo, the participle must agree with the pronoun: ' + pr + ' → **' + ppA + '**.' + (pr === 'lo' || pr === 'la' ? ' Lo/la become l’ before ho.' : '') };
}
var IOV = [['Telefoni', 'telefono', 'stasera'], ['Scrivi', 'scrivo', 'una mail'], ['Rispondi', 'rispondo', 'subito'], ['Regali un libro', 'regalo un libro', 'per Natale'], ['Spieghi la regola', 'spiego la regola', 'domani']];
var IOW = [['a Marco', 'gli', 'to him'], ['a Giulia', 'le', 'to her'], ['ai tuoi genitori', 'gli', 'to them'], ['alla professoressa', 'le', 'to her'], ['al direttore', 'gli', 'to him']];
function iobjItem(vi, wi) {
  var V = IOV[vi], W = IOW[wi], ans = W[1];
  var opts = [ans].concat(['gli', 'le', 'lo', 'la', 'li'].filter(function (x) { return x !== ans; }).slice(0, 3));
  return { id: 'g:iobj:' + vi + ':' + wi, gen: ['A2', 'iobj', vi, wi], type: 'mc', level: 'A2', skill: 'grammar', topic: 'Indirect object pronouns', prompt: V[0] + ' ' + W[0] + '? — Sì, ___ ' + V[1] + (V[2].indexOf('una') === 0 ? ' ' + V[2] : ' ' + V[2]) + '.', opts: opts, answer: ans, why: 'Verbs like telefonare a, scrivere a, rispondere a, regalare a, spiegare a take an indirect object (a + person). ' + W[0] + ' = ' + W[2] + ' → **' + ans + '**. Lo/la would be direct objects.' };
}

/* ================= Combined pronouns (B1) ================= */
var CPV = [['presti', 'presto', [0, 1, 5]], ['porti', 'porto', [0, 2, 3, 7]], ['mandi', 'mando', [4, 6, 7, 2]], ['regali', 'regalo', [0, 5, 2]], ['spieghi', 'spiego', [4]], ['dai', 'do', [0, 2, 3, 7, 4]], ['mostri', 'mostro', [6, 2, 7, 1]]];
var CPO = [['il libro', 'lo'], ['la macchina', 'la'], ['i biglietti', 'li'], ['le chiavi', 'le'], ['la ricetta', 'la'], ['il dizionario', 'lo'], ['le foto', 'le'], ['i documenti', 'li']];
var CPR = [['mi', 'te'], ['ci', 've'], ['a Marco', 'glie'], ['a Giulia', 'glie'], ['ai ragazzi', 'glie']];
function combo(r, o) { return r === 'glie' ? 'glie' + o : r + ' ' + o; }
function comboItem(vi, oi, ri) {
  var V = CPV[vi], O = CPO[oi], R = CPR[ri];
  var q = R[0] === 'mi' || R[0] === 'ci' ? R[0].charAt(0).toUpperCase() + R[0].slice(1) + ' ' + V[0] + ' ' + O[0] + '?' : V[0].charAt(0).toUpperCase() + V[0].slice(1) + ' ' + O[0] + ' ' + R[0] + '?';
  var ans = combo(R[1], O[1]);
  var other = { lo: 'la', la: 'lo', li: 'le', le: 'li' }[O[1]];
  var wrong = U.uniq([combo(R[1], other), R[1] === 'glie' ? 'gli ' + O[1] : 'me ' + O[1], R[1] === 'glie' ? 'le ' + O[1] : 'glie' + O[1], O[1] + ' ' + (R[1] === 'glie' ? 'gli' : R[1].replace('e', 'i'))]).filter(function (x) { return x !== ans; });
  return { id: 'g:combo:' + vi + ':' + oi + ':' + ri, gen: ['B1', 'combo', vi, oi, ri], type: 'mc', level: 'B1', skill: 'grammar', topic: 'Combined pronouns', prompt: q + ' — Sì, ___ ' + V[1] + ' domani.', opts: [ans].concat(wrong.slice(0, 3)), answer: ans, why: 'The indirect pronoun comes first and changes its -i into -e (mi → me, ti → te, ci → ce, vi → ve); gli and le both become **glie-** and join the direct pronoun in one word. ' + O[0] + ' → ' + O[1] + ', ' + (R[0] === 'mi' ? 'to me → (answering) to you' : R[0] === 'ci' ? 'to us → (answering) to you all' : R[0]) + ' → **' + ans + '**.' };
}

/* ================= Hypotheticals ================= */
/* [cond verb, cond complement, result verb, result complement] — logically paired */
var HYP2 = [['avere', 'più tempo libero', 'viaggiare', 'di più'], ['vincere', 'alla lotteria', 'comprare', 'una casa in Toscana'], ['abitare', 'vicino al mare', 'andare', 'in spiaggia ogni giorno'], ['parlare', 'meglio l’italiano', 'trovare', 'lavoro a Milano'], ['sapere', 'cucinare', 'organizzare', 'una cena per tutti'], ['potere', 'scegliere', 'vivere', 'a Firenze'], ['essere', 'in vacanza', 'dormire', 'fino a tardi'], ['avere', 'una macchina', 'andare', 'a trovare i nonni più spesso'], ['studiare', 'di più', 'superare', 'l’esame facilmente'], ['conoscere', 'la verità', 'dire', 'qualcosa']];
var HYP3 = [['studiare', 'di più', 'superare', 'l’esame'], ['partire', 'prima', 'arrivare', 'in orario'], ['prendere', 'l’ombrello', 'restare', 'asciutto'], ['prenotare', 'in anticipo', 'spendere', 'meno'], ['ascoltare', 'il meteo', 'rimanere', 'a casa'], ['sapere', 'dello sciopero', 'prendere', 'un taxi'], ['uscire', 'di casa in tempo', 'vedere', 'l’inizio del film'], ['leggere', 'le istruzioni', 'evitare', 'l’errore']];
var REG_EXTRA = { trovare: 1, organizzare: 1, superare: 1, prenotare: 1, evitare: 1, ascoltare: 1 };
function hypItem(type, hi, si, blank) {
  var H = (type === 2 ? HYP2 : HYP3)[hi], sj = SUBJ[si], p = sj.p, g = sj.g;
  if (type === 3 && H[2] === 'restare') { /* restare asciutto agrees with subject */ }
  var low = /^(Marco|Giulia)$/.test(sj.s) ? sj.s : sj.s.charAt(0).toLowerCase() + sj.s.slice(1);
  var ct = type === 2 ? 'ci' : 'ctrap', rt = type === 2 ? 'cond' : 'cp';
  var c = TENSES[ct].f(H[0], p, g), r = TENSES[rt].f(H[2], p, g);
  var rc = H[3]; if (H[2] === 'restare') rc = G.agree('asciutto', g, p >= 3);
  var ans, opts, prompt, why;
  if (blank === 0) {
    ans = c; prompt = 'Se ' + low + ' ___ ' + H[1] + ', ' + r + ' ' + rc + '. (' + H[0] + ')';
    opts = [ans, TENSES[rt].f(H[0], p, g), type === 2 ? G.form(H[0], 'imp', p) : TENSES.trap.f(H[0], p, g), type === 2 ? G.form(H[0], 'cong', p) : TENSES.cpass.f(H[0], p, g)];
    why = 'In a ' + (type === 2 ? 'hypothetical (unlikely or imaginary) condition, *se* takes the **imperfect subjunctive**' : 'condition about the past that did not happen, *se* takes the **pluperfect subjunctive**') + ': ' + H[0] + ' → **' + ans + '**. Never use the conditional after *se*.';
  } else {
    ans = r; prompt = 'Se ' + low + ' ' + c + ' ' + H[1] + ', ___ ' + rc + '. (' + H[2] + ')';
    opts = [ans, type === 2 ? G.form(H[2], 'fut', p) : TENSES.ctrap.f(H[2], p, g), type === 2 ? G.form(H[2], 'ci', p) : TENSES.cond.f(H[2], p, g), type === 2 ? G.form(H[2], 'imp', p) : TENSES.trap.f(H[2], p, g)];
    why = 'The result of a ' + (type === 2 ? 'hypothetical condition uses the **present conditional**' : 'past unreal condition uses the **past conditional** (avere/essere in the conditional + participle)') + ': ' + H[2] + ' → **' + ans + '**.';
  }
  opts = U.uniq(opts); if (opts.length < 4) return null;
  return { id: 'g:hyp' + type + ':' + hi + ':' + si + ':' + blank, gen: [type === 2 ? 'B1' : 'B2', 'hyp', type, hi, si, blank], type: 'mc', level: type === 2 ? 'B1' : 'B2', skill: 'grammar', topic: type === 2 ? 'Hypothetical sentences' : 'Past hypotheticals', prompt: prompt, sub: type === 3 && sj.who && (G.aux(H[0]) === 'essere' || G.aux(H[2]) === 'essere') ? '(' + sj.who + ')' : '', opts: opts, answer: ans, why: why };
}

/* ================= Passive with venire (B2) ================= */
var PASS = [['Il pane', 'm', 0, 'preparare', 'ogni mattina dal fornaio'], ['La posta', 'f', 0, 'consegnare', 'entro mezzogiorno'], ['I biglietti', 'm', 1, 'controllare', 'all’ingresso'], ['Le camere', 'f', 1, 'pulire', 'ogni giorno'], ['Il museo', 'm', 0, 'visitare', 'da migliaia di turisti'], ['La pasta', 'f', 0, 'cuocere', 'al dente'], ['Gli ospiti', 'm', 1, 'accogliere', 'con un aperitivo'], ['Le decisioni', 'f', 1, 'prendere', 'dal consiglio'], ['Il contratto', 'm', 0, 'firmare', 'dal direttore'], ['La lettera', 'f', 0, 'scrivere', 'in italiano'], ['I risultati', 'm', 1, 'pubblicare', 'sul sito'], ['Le chiese', 'f', 1, 'chiudere', 'alle sette']];
var PP_IRR = { cuocere: 'cotto', accogliere: 'accolto', prendere: 'preso', scrivere: 'scritto', chiudere: 'chiuso' };
function passItem(i) {
  var X = PASS[i], pp = PP_IRR[X[3]] || G.pp(X[3]), ag = G.agree(pp, X[1], X[2]), vv = X[2] ? 'vengono' : 'viene';
  var ans = vv + ' ' + ag;
  var opts = U.uniq([ans, vv + ' ' + G.agree(pp, X[1] === 'm' ? 'f' : 'm', X[2]), (X[2] ? 'viene ' : 'vengono ') + ag, G.form(X[3], 'pres', 2)]);
  if (opts.length < 4) opts.push(X[2] ? 'vengono ' + X[3] : 'viene ' + X[3]);
  return { id: 'g:pass:' + i, gen: ['B2', 'pass', i], type: 'mc', level: 'B2', skill: 'grammar', topic: 'The passive with venire', prompt: X[0] + ' ___ ' + X[4] + '. (' + X[3] + ', passive)', opts: opts.slice(0, 4), answer: ans, why: 'The present passive can be formed with **venire + past participle** (it stresses the action). Venire agrees with the subject (' + vv + ') and so does the participle: ' + X[0].toLowerCase() + ' → **' + ag + '**.' };
}

/* ================= registry ================= */
function conjPool(lv) {
  var out = [];
  LEVEL_TENSES[lv].forEach(function (t) {
    LEVEL_VERBS[lv].forEach(function (v) {
      if (BAD_WITH[t] && BAD_WITH[t][v]) return;
      if ((t === 'cond' || t === 'cp') && ['potere', 'volere', 'dovere', 'sapere'].indexOf(v) > -1 && lv !== 'A2') { }
      for (var si = 0; si < SUBJ.length; si++) for (var fi = 0; fi < 2; fi++) { var it = conjItem(lv, t, v, si, fi); if (it) out.push(it); }
    });
  });
  return out;
}
G.pools = {};
G.pool = function (lv) {
  if (G.pools[lv]) return G.pools[lv];
  var out = [];
  if (lv === 'A1') {
    var i, j;
    for (i = 0; i < NOUNS.length; i++) { out.push(artItem(i, 0)); if (NOUNS[i][2] !== NOUNS[i][0] || i % 2) out.push(artItem(i, 1)); out.push(indItem(i)); out.push(plurItem(i)); }
    for (i = 0; i < ADJ.length; i++) (ADJ_OK[ADJ[i][0]] || []).forEach(function (ni) { var x = adjItem(i, ni); if (x) out.push(x); });
    for (i = 0; i < PREP_FR.length; i++) for (j = 0; j < PREP_FR[i].length - 2; j++) { var pi = prepItem(i, j); if (pi) out.push(pi); }
    for (i = 0; i < PN.length; i++) for (j = 0; j < 6; j++) { var po = possItem(i, j); if (po) out.push(po); }
    for (i = 0; i < LIKES.length; i++) for (j = 0; j < WHO.length; j++) out.push(piaceItem(i, j, (i + j) % 2));
    [11, 14, 17, 21, 23, 28, 31, 33, 38, 41, 43, 47, 51, 58, 61, 63, 68, 71, 74, 78, 81, 83, 88, 91, 93, 98, 101, 150, 280, 365, 1000, 2026, 3500].forEach(function (n) { out.push(numItem(n)); });
    [[1, 0], [3, 15], [5, 30], [7, 45], [12, 0], [9, 10], [10, 45], [2, 20], [8, 30], [11, 15], [4, 45], [6, 0]].forEach(function (t) { out.push(timeItem(t[0], t[1])); });
  }
  if (lv === 'A2') {
    for (var a2 = 0; a2 < OBJV.length; a2++) for (var b2 = 0; b2 < 4; b2++) { out.push(dobjItem(a2, b2, 0)); out.push(dobjItem(a2, b2, 1)); }
    for (a2 = 0; a2 < IOV.length; a2++) for (b2 = 0; b2 < IOW.length; b2++) out.push(iobjItem(a2, b2));
  }
  if (lv === 'B1') {
    for (var x = 0; x < CPV.length; x++) CPV[x][2].forEach(function (y) { for (var z = 0; z < CPR.length; z++) out.push(comboItem(x, y, z)); });
    for (x = 0; x < HYP2.length; x++) for (var y = 0; y < SUBJ.length; y++) { var h = hypItem(2, x, y, (x + y) % 2); if (h) out.push(h); }
  }
  if (lv === 'B2') {
    for (var q = 0; q < HYP3.length; q++) for (var w = 0; w < SUBJ.length; w++) { var h3 = hypItem(3, q, w, (q + w) % 2); if (h3) out.push(h3); }
    for (q = 0; q < PASS.length; q++) out.push(passItem(q));
  }
  if (lv === 'C1') {
    for (var c1 = 0; c1 < HYP3.length; c1++) for (var c2 = 0; c2 < SUBJ.length; c2++) { var hh = hypItem(3, c1, c2, (c1 + c2 + 1) % 2); if (hh) { hh.level = 'C1'; out.push(hh); } }
  }
  out = out.concat(conjPool(lv));
  out.forEach(function (it) { it.level = lv; });
  G.pools[lv] = out;
  return out;
};
/* a fresh variant of the same rule (used by Mistakes step 3) */
G.variant = function (gen, salt, origId) {
  if (!gen) return null;
  var lv = gen[0], kind = gen[1], r = U.rng(U.hash(gen.join('|')) + salt), it = null, tries = 0;
  while (!it && tries++ < 12) {
    if (kind === 'conj') { var vs = LEVEL_VERBS[lv]; it = conjItem(lv, gen[2], tries < 6 ? gen[3] : U.pick(vs, r), Math.floor(r() * SUBJ.length), Math.floor(r() * 2)); }
    else if (kind === 'art') it = artItem(Math.floor(r() * NOUNS.length), gen[3]);
    else if (kind === 'ind') it = indItem(Math.floor(r() * NOUNS.length));
    else if (kind === 'plur') it = plurItem(Math.floor(r() * NOUNS.length));
    else if (kind === 'adj') { var ai = Math.floor(r() * ADJ.length), ok = ADJ_OK[ADJ[ai][0]] || []; if (ok.length) it = adjItem(ai, U.pick(ok, r)); }
    else if (kind === 'prep') { var fi = Math.floor(r() * PREP_FR.length); it = prepItem(fi, Math.floor(r() * (PREP_FR[fi].length - 2))); }
    else if (kind === 'poss') it = possItem(Math.floor(r() * PN.length), Math.floor(r() * 6));
    else if (kind === 'piac') it = piaceItem(Math.floor(r() * LIKES.length), Math.floor(r() * WHO.length), gen[4]);
    else if (kind === 'num') it = numItem(10 + Math.floor(r() * 89));
    else if (kind === 'time') it = timeItem(1 + Math.floor(r() * 11), [0, 15, 30, 45, 10, 20][Math.floor(r() * 6)]);
    else if (kind === 'dobj') it = dobjItem(Math.floor(r() * OBJV.length), Math.floor(r() * 4), gen[4]);
    else if (kind === 'iobj') it = iobjItem(Math.floor(r() * IOV.length), Math.floor(r() * IOW.length));
    else if (kind === 'combo') { var cv = Math.floor(r() * CPV.length); it = comboItem(cv, U.pick(CPV[cv][2], r), Math.floor(r() * CPR.length)); }
    else if (kind === 'hyp') it = hypItem(gen[2], Math.floor(r() * (gen[2] === 2 ? HYP2 : HYP3).length), Math.floor(r() * SUBJ.length), Math.floor(r() * 2));
    else if (kind === 'pass') it = passItem(Math.floor(r() * PASS.length));
    if (it && origId && it.id === origId) it = null;
  }
  if (it) it.level = lv;
  return it;
};
G.forLevel = function (lv, n, seed) { var p = G.pool(lv); return U.shuffle(p, U.rng(seed)).slice(0, n); };

/* ================= Grammar challenges ================= */
G.CHALLENGES = {
  A1: [['pres', 'Present tense sprint', 'Regular, -isc- and irregular verbs'], ['art', 'Articles: il, lo, la…', 'Choose the right definite article'], ['ind', 'Un, uno, una, un’', 'Indefinite articles'], ['plur', 'Plurals', 'Regular and invariable plurals'], ['adj', 'Adjective agreement', 'Make adjectives agree'], ['prep', 'Al, nel, sul…', 'Articulated prepositions'], ['poss', 'Mio, mia, i miei…', 'Possessives and family'], ['piac', 'Mi piace / mi piacciono', 'The verb piacere'], ['num', 'Numbers', 'Write numbers correctly'], ['time', 'What time is it?', 'Telling the time']],
  A2: [['pp', 'Passato prossimo', 'Avere or essere, agreement'], ['imp', 'Imperfetto', 'Habits and descriptions in the past'], ['fut', 'Futuro semplice', 'Regular and irregular stems'], ['cond', 'Condizionale', 'Polite requests and wishes'], ['dobj', 'Lo, la, li, le', 'Direct object pronouns and agreement'], ['iobj', 'Gli, le', 'Indirect object pronouns']],
  B1: [['cong', 'Congiuntivo presente', 'After che with doubt, hope, necessity'], ['cpass', 'Congiuntivo passato', 'Past actions after che'], ['trap', 'Trapassato prossimo', 'The past before the past'], ['fa', 'Futuro anteriore', 'Completed future actions'], ['cp', 'Condizionale passato', 'Would have…'], ['combo', 'Glielo, te la…', 'Combined pronouns'], ['hyp', 'Se avessi…', 'Hypothetical sentences']],
  B2: [['ci', 'Congiuntivo imperfetto', 'Sequence of tenses'], ['ctrap', 'Congiuntivo trapassato', 'Pluperfect subjunctive'], ['pr', 'Passato remoto', 'Narrative past'], ['hyp', 'Se avessi saputo…', 'Past hypotheticals'], ['pass', 'Viene fatto', 'The passive with venire']],
  C1: [['pr', 'Passato remoto: irregulars', 'Literary narration'], ['ctrap', 'Pluperfect subjunctive', 'Unreal past'], ['ci', 'Imperfect subjunctive', 'Concordance'], ['cpass', 'Past subjunctive', 'Opinions about the past'], ['hyp', 'Unreal past conditions', 'Se + trapassato']]
};
G.challenge = function (lv, key, n, seed) {
  var pool = G.pool(lv).filter(function (it) { var g = it.gen; return g && ((g[1] === 'conj' && g[2] === key) || g[1] === key); });
  return U.shuffle(pool, U.rng(seed)).slice(0, n || 12);
};
})();
