/* Italiano con Luke — quiz engine: multiple choice, typing, word order, listening, dictation, speaking */
(function () {
'use strict';
var App = window.App, U = App.U, ic = App.icon;
var Q = App.Quiz = { cur: null };

/* ----- item builders ----- */
Q.fromLessonQ = function (L, q, i) {
  var base = { id: L.id + '-q' + i, level: L.level || L.id.slice(0, 2).toUpperCase(), topic: L.t, skill: q.sk || 'grammar', why: q.w || '' };
  if (q.t === 'mc') return Object.assign(base, { type: 'mc', prompt: q.q, opts: q.o.slice(), answer: q.o[0], passage: q.p || '' });
  if (q.t === 'fill') return Object.assign(base, { type: 'fill', prompt: q.q, answers: q.a.slice(), answer: q.a[0], hint: q.h || '' });
  if (q.t === 'order') return Object.assign(base, { type: 'order', prompt: 'Put the words in the right order', en: q.en, answer: q.a, skill: 'construction', why: q.w || ('Correct sentence: ' + q.a) });
  return null;
};
Q.tokens = function (s) { return String(s).split(/\s+/).filter(Boolean); };
/* extra exercises generated from a lesson's own examples */
Q.lessonExtras = function (L, rnd) {
  var ex = L.ex || [], out = [], lv = L.level || L.id.slice(0, 2).toUpperCase();
  if (ex.length < 4) return out;
  var order = U.shuffle(ex.map(function (_, i) { return i; }), rnd);
  function others(i, col, n) { return U.shuffle(ex.filter(function (_, j) { return j !== i; }).map(function (e) { return e[col]; }), rnd).slice(0, n); }
  var a = order[0], b = order[1], c = order[2], d = order[3];
  out.push({ id: L.id + '-tr' + a, type: 'mc', level: lv, topic: L.t, skill: 'vocabulary', prompt: 'How do you say this in Italian?', sub: '“' + ex[a][1] + '”', opts: [ex[a][0]].concat(others(a, 0, 3)), answer: ex[a][0], why: 'The Italian is “' + ex[a][0] + '”.' });
  out.push({ id: L.id + '-li' + b, type: 'mc', level: lv, topic: L.t, skill: 'listening', audio: ex[b][0], prompt: 'Listen. What does it mean?', opts: [ex[b][1]].concat(others(b, 1, 3)), answer: ex[b][1], why: 'You heard: “' + ex[b][0] + '” = ' + ex[b][1] + '.' });
  var shortest = ex.map(function (e, i) { return [e[0].length, i]; }).sort(function (x, y) { return x[0] - y[0]; })[0][1];
  var dIdx = shortest === b ? c : shortest;
  out.push({ id: L.id + '-di' + dIdx, type: 'dict', level: lv, topic: L.t, skill: 'listening', audio: ex[dIdx][0], prompt: 'Dictation: type what you hear', answer: ex[dIdx][0], answers: [ex[dIdx][0]], en: ex[dIdx][1], why: 'The sentence was: “' + ex[dIdx][0] + '” (' + ex[dIdx][1] + ').' });
  out.push({ id: L.id + '-sp' + d, type: 'speak', level: lv, topic: L.t, skill: 'speaking', prompt: 'Say it aloud', answer: ex[d][0], en: ex[d][1], noMistake: true });
  return out;
};

/* ----- session ----- */
Q.start = function (cfg) {
  var items = cfg.items.filter(Boolean).map(function (it) {
    var c = Object.assign({}, it);
    if (c.type === 'mc' || c.type === 'listen') c.shown = U.shuffle(U.uniq(c.opts));
    if (c.type === 'order') c.bank = U.shuffle(Q.tokens(c.answer).map(function (w, i) { return { w: w, i: i }; }));
    return c;
  });
  Q.cur = { id: cfg.id, kind: cfg.kind || 'practice', title: cfg.title || 'Practice', items: items, pos: 0, resp: [], mode: cfg.mode || 'instant', back: cfg.back || '#/home', level: cfg.level || '', meta: cfg.meta || {}, started: Date.now(), onFinish: cfg.onFinish || null, sel: null, checked: false, built: [] };
  if (cfg.kind === 'exam' || cfg.kind === 'assess') Q.persist();
  location.hash = '#/quiz';
  App.render();
};
Q.persist = function () {
  var s = Q.cur; if (!s || !(s.kind === 'exam' || s.kind === 'assess')) return;
  App.S.active = { id: s.id, kind: s.kind, title: s.title, items: s.items, pos: s.pos, resp: s.resp, mode: s.mode, back: s.back, level: s.level, meta: s.meta, started: s.started };
  App.save();
};
Q.resume = function () {
  var a = App.S.active; if (!a) return false;
  Q.cur = Object.assign({ sel: null, checked: false, built: [], onFinish: null }, a);
  return true;
};
Q.discard = function () { App.S.active = null; App.save(); Q.cur = null; };

function gradeable(it) { return it.type !== 'speak'; }
Q.check = function (it, val) {
  if (it.type === 'mc' || it.type === 'listen') return { ok: val === it.answer };
  if (it.type === 'order') return { ok: U.norm(val) === U.norm(it.answer) };
  var answers = it.answers || [it.answer], v = U.norm(val);
  for (var i = 0; i < answers.length; i++) { if (v === U.norm(answers[i])) return { ok: true }; }
  for (i = 0; i < answers.length; i++) { if (U.deaccent(v) === U.deaccent(U.norm(answers[i]))) return { ok: true, accent: answers[i] }; }
  return { ok: false };
};

/* ----- render ----- */
function kindLabel(it) {
  return ({ mc: it.audio ? 'Listening' : (it.passage ? 'Reading' : (it.skill === 'vocabulary' ? 'Vocabulary' : (it.skill === 'practical' ? 'Real-life Italian' : 'Choose the answer'))), fill: 'Type the answer', order: 'Build the sentence', dict: 'Dictation', speak: 'Speaking' })[it.type] || 'Question';
}
function audioBtns(text) { return '<div class="row" style="margin-top:8px"><button class="sound" data-say="' + U.attr(text) + '">' + ic('play') + ' Play</button><button class="sound slow" data-say-slow="' + U.attr(text) + '">' + ic('snail') + ' Slowly</button></div>'; }
var ACC = ['à', 'è', 'é', 'ì', 'ò', 'ù', "'"];
Q.view = function () {
  var s = Q.cur;
  if (!s) { if (Q.resume()) s = Q.cur; else { location.hash = '#/home'; return ''; } }
  if (s.pos >= s.items.length) return Q.results();
  var it = s.items[s.pos], r = s.resp[s.pos], checked = s.checked, examMode = s.mode === 'exam';
  var n = s.items.length, h = '';
  h += '<div class="topbar"><button class="iconbtn" data-act="quit" aria-label="Leave">' + ic('x') + '</button><div style="flex:1;min-width:0"><div class="small muted" style="font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + U.esc(s.title) + '</div><div class="qhead"><div class="bar"><div style="width:' + (s.pos / n * 100) + '%"></div></div><span class="small muted">' + (s.pos + 1) + '/' + n + '</span></div></div></div>';
  h += '<div class="qcard"><div class="qkind">' + kindLabel(it) + (it.level && s.kind !== 'lesson' ? ' · ' + it.level : '') + '</div>';
  if (it.passage) h += '<div class="passage" lang="it">' + U.esc(it.passage) + '</div>' + '<button class="sound" data-say="' + U.attr(it.passage) + '">' + ic('play') + ' Listen to the text</button>';
  h += '<div class="qprompt">' + U.md(it.prompt) + '</div>';
  if (it.sub) h += '<div class="qsub it">' + U.esc(it.sub) + '</div>';
  if (it.en && it.type === 'order') h += '<div class="qsub">“' + U.esc(it.en) + '”</div>';
  if (it.audio) h += audioBtns(it.audio);
  if (it.type === 'mc' || it.type === 'listen') {
    h += '<div class="opts">' + it.shown.map(function (o, i) {
      var cls = 'opt';
      if (checked && !examMode) { if (o === it.answer) cls += ' ok'; else if (r && o === r.val) cls += ' no'; else cls += ' dim'; }
      else if (s.sel === o) cls += ' sel';
      return '<button class="' + cls + '" data-opt="' + i + '"' + (checked ? ' disabled' : '') + '><span class="k">' + 'ABCDEF'[i] + '</span><span lang="it">' + U.esc(o) + '</span></button>';
    }).join('') + '</div>';
  } else if (it.type === 'fill' || it.type === 'dict') {
    var v = checked && r ? r.val : (s.typed || '');
    h += '<input class="tinput' + (checked && !examMode ? (r.ok ? ' ok' : ' no') : '') + '" id="tin" lang="it" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type in Italian…" value="' + U.attr(v) + '"' + (checked ? ' disabled' : '') + '>';
    if (!checked) h += '<div class="accents">' + ACC.map(function (a) { return '<button data-acc="' + U.attr(a) + '">' + a + '</button>'; }).join('') + '</div>';
    if (it.hint && !checked) h += '<p class="small muted">Hint: ' + U.esc(it.hint) + '</p>';
  } else if (it.type === 'order') {
    var built = s.built || [];
    if (checked && r) built = r.built || built;
    h += '<div class="wline" id="wline">' + built.map(function (b, k) { return '<button class="word" data-unword="' + k + '"' + (checked ? ' disabled' : '') + ' lang="it">' + U.esc(it.bank[b].w) + '</button>'; }).join('') + '</div>';
    h += '<div class="wbank">' + it.bank.map(function (b, k) { return '<button class="word' + (built.indexOf(k) > -1 ? ' used' : '') + '" data-word="' + k + '"' + (checked ? ' disabled' : '') + ' lang="it">' + U.esc(b.w) + '</button>'; }).join('') + '</div>';
  } else if (it.type === 'speak') {
    h += '<div class="it-lg" lang="it" style="margin-top:8px">' + U.esc(it.answer) + '</div><div class="en">' + U.esc(it.en || '') + '</div>' + audioBtns(it.answer) + App.SpeakUI.block(it.answer, 'q');
  }
  /* feedback */
  if (checked && !examMode && r && gradeable(it)) {
    h += '<div class="fb ' + (r.ok ? 'ok' : 'no') + '"><h4>' + ic(r.ok ? 'check' : 'x') + (r.ok ? U.pick(['Corretto!', 'Bravo!', 'Perfetto!', 'Esatto!', 'Ottimo!']) : 'Not quite') + '</h4>';
    if (r.accent) h += '<p>Watch the accent: <b lang="it">' + U.esc(r.accent) + '</b></p>';
    if (!r.ok) {
      if (r.val) h += '<p>You answered: <b lang="it">' + U.esc(r.val) + '</b></p>';
      h += '<p>Correct answer: <b lang="it">' + U.esc(it.answer) + '</b></p>';
    }
    if (it.why) h += '<p>' + U.md(it.why) + '</p>';
    if (!r.ok) h += '<p class="small muted">Saved to My Mistakes for smart review.</p>';
    var st = Q.sayText(it); if (st) h += '<div class="row" style="margin-top:8px"><button class="sound" data-say="' + U.attr(st) + '">' + ic('play') + ' Hear it</button></div>';
    h += '</div>';
  }
  h += '</div>';
  /* footer button */
  var label, act, dis = false;
  if (it.type === 'speak') { label = 'Continue'; act = 'qnext'; }
  else if (!checked) {
    label = examMode ? (s.pos === n - 1 ? 'Finish exam' : 'Next question') : 'Check';
    act = 'qcheck';
    if (it.type === 'mc' && s.sel == null) dis = true;
    if (it.type === 'order' && !(s.built || []).length) dis = true;
  } else { label = s.pos === n - 1 ? 'See results' : 'Continue'; act = 'qnext'; }
  h += '<div class="qfoot"><button class="btn full" data-act="' + act + '"' + (dis ? ' disabled' : '') + ' id="qbtn">' + label + '</button>';
  if (it.type === 'speak') h += '<p class="small muted" style="text-align:center;margin:6px 0 0">Speaking practice is never marked wrong. Continue whenever you are ready.</p>';
  h += '</div>';
  return h;
};

/* Italian text to read aloud after an answer (never English) */
var EN = /\b(the|you|your|is|are|was|were|of|and|with|it's|i'm|don't|they|their|what|how|which|for|by|at|from|this|that|only|not|too)\b/i;
Q.sayText = function (it) {
  if (it.type === 'listen' || it.audio || it.skill === 'reading' || it.type === 'speak') return '';
  var ans = String(it.answer || ''), p = String(it.prompt || '').replace(/\*\*/g, '');
  if (!/[a-zàèéìòù]/i.test(ans) || EN.test(ans)) return '';
  if (/^(What does|Listen|What is|What are|Who |Where |When |Why |According)/i.test(p)) return '';
  var itPrompt = /^(Choose the Italian|How do you say|How do you write|Which expression means|Build the)/i.test(p);
  var marker = /[àèéìòù']|\b(il|lo|la|i|gli|le|un|una|di|da|in|con|su|per|che|non|è|sono|ho|ha|mi|ti|si|ci|del|della|al|alla|e|ne)\b/i.test(ans);
  if (!itPrompt && !marker && ans.trim().split(/\s+/).length === 1 && (it.skill === 'practical' || it.skill === 'vocabulary')) return '';
  if (it.type !== 'order' && p.indexOf('___') > -1) {
    var before = p.split('___')[0];
    if (!/:\s/.test(before) && !EN.test(p.replace(/\(.*?\)/g, ''))) {
      return p.replace(/_{2,}\s?/, ans + (/'$/.test(ans) ? '' : ' ')).replace(/\s*\([^)]*\)/g, '').replace(/\s+([.,!?])/g, '$1').replace(/\s+/g, ' ').trim();
    }
  }
  return ans;
};

/* ----- actions ----- */
Q.select = function (i) { var s = Q.cur; if (!s || s.checked) return; s.sel = s.items[s.pos].shown[i]; App.render(true); };
Q.word = function (k) { var s = Q.cur; if (s.checked) return; s.built = s.built || []; if (s.built.indexOf(k) < 0) s.built.push(k); App.render(true); };
Q.unword = function (k) { var s = Q.cur; if (s.checked) return; s.built.splice(k, 1); App.render(true); };
Q.doCheck = function () {
  var s = Q.cur, it = s.items[s.pos], val;
  if (it.type === 'mc' || it.type === 'listen') { if (s.sel == null) return; val = s.sel; }
  else if (it.type === 'fill' || it.type === 'dict') { var el = document.getElementById('tin'); val = el ? el.value : ''; if (!val.trim()) { U.toast('Type your answer first.'); return; } }
  else if (it.type === 'order') { val = (s.built || []).map(function (k) { return it.bank[k].w; }).join(' '); }
  var res = Q.check(it, val);
  s.resp[s.pos] = { val: val, ok: res.ok, accent: res.accent || null, built: (s.built || []).slice() };
  if (s.mode === 'exam') { Q.advance(); return; }
  s.checked = true;
  App.record(it.skill || 'grammar', res.ok);
  if (res.ok) { App.activity(2); if (s.kind === 'review') App.Review.pass(it); }
  else { if (s.kind === 'review') App.Review.fail(it, val); else App.addMistake(it, val, s.kind); App.activity(0); }
  App.save();
  App.render(true);
  /* move focus to continue for keyboard users */
  setTimeout(function () { var b = document.getElementById('qbtn'); if (b) b.focus({ preventScroll: true }); var fb = document.querySelector('.fb'); if (fb && fb.getBoundingClientRect().bottom > innerHeight) fb.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 30);
};
Q.advance = function () {
  var s = Q.cur; s.pos++; s.sel = null; s.checked = false; s.built = []; s.typed = '';
  App.SpeakUI.stopAll();
  Q.persist();
  if (s.pos >= s.items.length) Q.finish();
  App.render(); window.scrollTo(0, 0);
};
Q.finish = function () {
  var s = Q.cur; if (s.finished) return; s.finished = true;
  var graded = 0, ok = 0, bySkill = {};
  s.items.forEach(function (it, i) {
    if (!gradeable(it)) return; graded++;
    var r = s.resp[i] || { ok: false, val: '' };
    var sk = it.skill || 'grammar'; bySkill[sk] = bySkill[sk] || [0, 0]; bySkill[sk][1]++;
    if (r.ok) { ok++; bySkill[sk][0]++; }
    if (s.mode === 'exam') { App.record(sk, r.ok); if (!r.ok) App.addMistake(it, r.val, s.kind); }
  });
  s.score = ok; s.total = graded; s.bySkill = bySkill; s.dur = Date.now() - s.started;
  App.S.active = null;
  App.activity(s.mode === 'exam' ? ok * 2 + 10 : 10);
  if (s.onFinish) { try { s.onFinish(s); } catch (e) { console.error(e); } }
  else if (App.Finishers[s.kind]) App.Finishers[s.kind](s);
  App.save();
  App.Ach.check();
};
App.Finishers = {};

Q.results = function () {
  var s = Q.cur, pct = U.pct(s.score, s.total), h = '';
  h += '<div class="topbar"><button class="iconbtn" data-go="' + U.attr(s.back) + '" aria-label="Back">' + ic('back') + '</button><h2>Results</h2></div>';
  var msg = pct >= 90 ? 'Eccellente! Outstanding work.' : pct >= 75 ? 'Molto bene! A strong result.' : pct >= 60 ? 'Bene! You passed — review the explanations below.' : 'Keep going! Every mistake is now saved for smart review.';
  h += '<div class="card" style="text-align:center"><div class="eyebrow">' + U.esc(s.title) + '</div><div class="res-big" style="margin:12px 0 4px">' + s.score + '<span style="font-size:28px;color:var(--muted)"> / ' + s.total + '</span></div><div class="pill ' + (pct >= 60 ? '' : 't') + '">' + pct + '%</div><p style="margin-top:12px">' + msg + '</p>' + (s.dur ? '<p class="small muted">Time: ' + U.dur(s.dur) + '</p>' : '') + (s.extraMsg ? '<p>' + s.extraMsg + '</p>' : '') + '</div>';
  h += Q.analysis(s.bySkill);
  h += '<div class="btns">' + (s.retry ? '<button class="btn" data-act="qretry">' + ic('refresh') + ' Try again</button>' : '') + '<button class="btn soft" data-go="' + U.attr(s.back) + '">Continue</button></div>';
  h += Q.reviewList(s.items, s.resp);
  return h;
};
Q.analysis = function (bySkill) {
  var keys = Object.keys(bySkill || {}); if (!keys.length) return '';
  var names = { grammar: 'Grammar', vocabulary: 'Vocabulary', reading: 'Reading', listening: 'Listening', construction: 'Sentence building', practical: 'Real-life Italian', speaking: 'Speaking' };
  var weak = keys.filter(function (k) { return bySkill[k][0] / bySkill[k][1] < 0.6; });
  return '<div class="card"><h3>Performance analysis</h3>' + keys.map(function (k) { var p = U.pct(bySkill[k][0], bySkill[k][1]); return '<div class="skillbar"><span>' + (names[k] || k) + '</span><div class="bar' + (p < 60 ? ' gold' : '') + '"><div style="width:' + p + '%"></div></div><b>' + p + '%</b></div>'; }).join('') + (weak.length ? '<p class="small muted mt">Focus next on: <b>' + weak.map(function (k) { return names[k] || k; }).join(', ') + '</b>. Your wrong answers are waiting in My Mistakes.</p>' : '<p class="small muted mt">Balanced performance across skills. Ottimo!</p>') + '</div>';
};
Q.reviewList = function (items, resp) {
  var h = '<div class="card"><h3>Review every question</h3>';
  items.forEach(function (it, i) {
    if (!gradeable(it)) return;
    var r = resp[i] || { ok: false, val: '' };
    h += '<div class="review-item ' + (r.ok ? 'ok' : 'no') + '"><div class="small muted">' + (i + 1) + '. ' + kindLabel(it) + '</div>' + (it.passage ? '<details class="fold"><summary>Show text</summary><p lang="it">' + U.esc(it.passage) + '</p></details>' : '') + '<div style="font-weight:600">' + U.md(it.prompt) + (it.sub ? ' <span lang="it">' + U.esc(it.sub) + '</span>' : '') + (it.audio ? ' <button class="sound" data-say="' + U.attr(it.audio) + '">' + ic('play') + '</button>' : '') + '</div>' + (r.ok ? '<div>✓ <b lang="it">' + U.esc(it.answer) + '</b></div>' : '<div>Your answer: <span lang="it" style="color:var(--bad)">' + U.esc(r.val || '—') + '</span></div><div>Correct: <b lang="it" style="color:var(--ok)">' + U.esc(it.answer) + '</b></div>' + (it.why ? '<div class="small" style="margin-top:4px">' + U.md(it.why) + '</div>' : '')) + '</div>';
  });
  return h + '</div>';
};
})();
