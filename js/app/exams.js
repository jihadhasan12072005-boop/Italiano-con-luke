/* Italiano con Luke — Examination Center: 50 papers per level + 50 mixed papers, level assessments, history */
(function () {
'use strict';
var App = window.App, U = App.U, ic = App.icon, V = App.V, S = function () { return App.S; };
var E = App.Exams = { N: 50 };
/* blueprint per paper */
var BP = { grammar: 8, vocabulary: 5, reading: 3, practical: 2, construction: 2 };

/* ---------- pools ---------- */
var cache = {};
function lessonGrammar(lv) {
  var out = [];
  App.lessons(lv).forEach(function (L) {
    L.level = lv;
    L.q.forEach(function (q, i) { if (q.t === 'mc' || q.t === 'fill') { var it = App.Quiz.fromLessonQ(L, q, i); it.id = 'x:' + it.id; out.push(it); } });
  });
  return out;
}
function vocabPool(lv) {
  var deck = App.SRS.deck(lv), out = [], rnd = U.rng(U.hash('voc' + lv));
  /* group by source so distractors come from the same theme */
  var by = {}; deck.forEach(function (d) { (by[d.src] = by[d.src] || []).push(d); });
  deck.forEach(function (d, i) {
    var same = (by[d.src] || []).filter(function (x) { return x.it !== d.it && x.en !== d.en; });
    if (same.length < 3) same = same.concat(U.shuffle(deck, rnd).filter(function (x) { return x.it !== d.it && x.en !== d.en; }).slice(0, 6));
    var ds = U.shuffle(same, rnd).slice(0, 3);
    if (i % 2) out.push({ id: 'v:en:' + d.it, type: 'mc', level: lv, skill: 'vocabulary', topic: 'Vocabulary · ' + d.src, prompt: 'What does “' + d.it + '” mean?', opts: [d.en].concat(ds.map(function (x) { return x.en; })), answer: d.en, why: '**' + d.it + '** = ' + d.en + '. (Topic: ' + d.src + ')' });
    else out.push({ id: 'v:it:' + d.it, type: 'mc', level: lv, skill: 'vocabulary', topic: 'Vocabulary · ' + d.src, prompt: 'Choose the Italian for “' + d.en + '”.', opts: [d.it].concat(ds.map(function (x) { return x.it; })), answer: d.it, why: '“' + d.en + '” = **' + d.it + '**. (Topic: ' + d.src + ')' });
  });
  return out.filter(function (it) { return U.uniq(it.opts).length >= 3; });
}
function constructionPool(lv) {
  var out = [];
  App.lessons(lv).forEach(function (L) {
    (L.ex || []).forEach(function (e, i) {
      var n = e[0].split(/\s+/).length;
      if (n >= 4 && n <= 11) out.push({ id: 'c:' + L.id + ':' + i, type: 'order', level: lv, skill: 'construction', topic: L.t, prompt: 'Build the sentence', en: e[1], answer: e[0], why: 'Correct sentence: “' + e[0] + '” — ' + e[1] });
    });
    (L.dia || []).forEach(function (d, i) {
      var n = d[1].split(/\s+/).length;
      if (n >= 5 && n <= 12) out.push({ id: 'c:' + L.id + ':d' + i, type: 'order', level: lv, skill: 'construction', topic: L.t, prompt: 'Build the sentence', en: d[2], answer: d[1], why: 'Correct sentence: “' + d[1] + '” — ' + d[2] });
    });
  });
  return out;
}
function practicalPool(lv) {
  return ((window.IT_PRACTICAL || {})[lv] || []).map(function (p, i) { return { id: 'p:' + lv + ':' + i, type: 'mc', level: lv, skill: 'practical', topic: 'Real-life Italian', prompt: p.q, opts: p.o.slice(), answer: p.o[0], why: p.w }; });
}
function readingSets(lv) {
  return ((window.IT_READING || {})[lv] || []).map(function (r, ri) {
    return r.q.map(function (q, qi) { return { id: 'r:' + lv + ':' + ri + ':' + qi, type: 'mc', level: lv, skill: 'reading', topic: 'Reading · ' + r.t, passage: r.text, prompt: q.q, opts: q.o.slice(), answer: q.o[0], why: q.w }; });
  });
}
E.pools = function (lv) {
  if (cache[lv]) return cache[lv];
  var seed = U.hash('exam-' + lv);
  var gen = App.Gen.pool(lv), les = lessonGrammar(lv);
  /* interleave generated items by kind so each paper covers several rules */
  var byKind = {}; gen.forEach(function (it) { var k = it.gen[1] === 'conj' ? it.gen[2] : it.gen[1]; (byKind[k] = byKind[k] || []).push(it); });
  var kinds = Object.keys(byKind).sort(); kinds.forEach(function (k, i) { byKind[k] = U.shuffle(byKind[k], U.rng(seed + i)); });
  var mixed = [], idx = 0, more = true;
  while (more) { more = false; kinds.forEach(function (k) { if (byKind[k][idx]) { mixed.push(byKind[k][idx]); more = true; } }); idx++; }
  var lesQ = U.shuffle(les, U.rng(seed + 99));
  /* grammar stream: 3 hand-written lesson items for every 5 generated */
  var grammar = [], gi = 0, li = 0;
  while (gi < mixed.length || li < lesQ.length) { for (var a = 0; a < 5 && gi < mixed.length; a++) grammar.push(mixed[gi++]); for (var b = 0; b < 3 && li < lesQ.length; b++) grammar.push(lesQ[li++]); if (grammar.length > 1400) break; }
  cache[lv] = {
    grammar: grammar,
    vocabulary: U.shuffle(vocabPool(lv), U.rng(seed + 1)),
    construction: U.shuffle(constructionPool(lv), U.rng(seed + 2)),
    practical: U.shuffle(practicalPool(lv), U.rng(seed + 3)),
    reading: readingSets(lv)
  };
  return cache[lv];
};
function take(pool, start, n) { var out = []; if (!pool.length) return out; for (var i = 0; i < n; i++) out.push(pool[((start + i) % pool.length + pool.length) % pool.length]); return out; }
function readingFor(sets, k, n) {
  if (!sets.length) return [];
  var set = sets[k % sets.length], round = Math.floor(k / sets.length);
  var qs = set.slice(), off = (round * n) % qs.length;
  return take(qs, off, Math.min(n, qs.length));
}
/* assemble paper k (0-based) for a level */
E.paper = function (lv, k) {
  if (lv === 'MIX') return E.mixed(k);
  var P = E.pools(lv), items = [];
  items = items.concat(take(P.grammar, k * BP.grammar, BP.grammar));
  items = items.concat(take(P.vocabulary, k * BP.vocabulary, BP.vocabulary));
  items = items.concat(take(P.practical, k * BP.practical, BP.practical));
  items = items.concat(take(P.construction, k * BP.construction, BP.construction));
  var rd = readingFor(P.reading, k, BP.reading);
  /* order: grammar, vocabulary, construction, practical, reading (passage last) */
  var g = items.filter(function (x) { return x.skill === 'grammar'; }), v = items.filter(function (x) { return x.skill === 'vocabulary'; }), c = items.filter(function (x) { return x.skill === 'construction'; }), p = items.filter(function (x) { return x.skill === 'practical'; });
  return U.uniq(g.concat(v, c, p, rd).map(function (x) { return x.id; })).map(function (id) { return g.concat(v, c, p, rd).filter(function (x) { return x.id === id; })[0]; });
};
/* mixed papers: 25 questions, 5 per level, progressively harder; drawn from the far end of each pool */
E.mixed = function (k) {
  var out = [];
  App.LEVELS.forEach(function (lv, li) {
    var P = E.pools(lv), gl = P.grammar.length, vl = P.vocabulary.length, pl = P.practical.length;
    out = out.concat(take(P.grammar, gl - 1 - (k * 3 + 2), 3));
    out.push(P.vocabulary[((vl - 1 - k * 2) % vl + vl) % vl]);
    if (pl && (k + li) % 2 === 0) out.push(P.practical[(pl - 1 - k + pl * 5) % pl]);
    else { var rs = P.reading; if (rs.length) { var set = rs[(rs.length - 1 - k % rs.length)]; out.push(set[(k + li) % set.length]); } else out.push(P.vocabulary[(k * 7) % vl]); }
  });
  return out.filter(Boolean);
};
/* level assessment: 30 questions from a reserved region of the pools */
E.assessment = function (lv) {
  var P = E.pools(lv), seed = Date.now(), r = U.rng(seed), out = [];
  out = out.concat(U.shuffle(P.grammar, r).slice(0, 14), U.shuffle(P.vocabulary, r).slice(0, 6), U.shuffle(P.practical, r).slice(0, 4), U.shuffle(P.construction, r).slice(0, 2));
  var rs = P.reading; if (rs.length) out = out.concat(U.shuffle(rs, r)[0].slice(0, 4));
  return out;
};
E.title = function (key) { var p = key.split('-'); if (p[0] === 'MIX') return 'Mixed exam ' + p[1]; if (p[0] === 'ASSESS') return p[1] + ' level assessment'; return p[0] + ' · Exam ' + p[1]; };
E.minutes = function (lv) { return lv === 'MIX' ? 30 : { A1: 20, A2: 22, B1: 25, B2: 28, C1: 30 }[lv]; };

/* ---------- start / finish ---------- */
E.start = function (lv, n) {
  var key = lv + '-' + n, items = E.paper(lv, n - 1);
  App.Quiz.start({ id: key, kind: 'exam', title: E.title(key), items: items, mode: S().settings.examMode === 'instant' ? 'instant' : 'exam', back: '#/exams/' + lv, level: lv, meta: { key: key } });
};
function snapshot(items) { return items.map(function (it) { return { type: it.type, prompt: it.prompt, sub: it.sub || '', answer: it.answer, why: it.why || '', passage: it.passage || '', audio: it.audio || '', skill: it.skill, level: it.level }; }); }
App.Finishers.exam = function (s) {
  var key = s.meta.key, rec = S().exams[key] || (S().exams[key] = { best: 0, attempts: [] });
  var pct = U.pct(s.score, s.total);
  rec.best = Math.max(rec.best || 0, pct);
  rec.attempts.unshift({ at: Date.now(), score: s.score, total: s.total, pct: pct, dur: s.dur, mode: s.mode, bySkill: s.bySkill, items: snapshot(s.items), resp: s.resp.map(function (r) { return r ? { v: r.val, ok: r.ok } : null; }) });
  rec.attempts = rec.attempts.slice(0, 5);
  /* keep storage light: only the most recent 60 attempts keep full detail */
  var all = []; Object.keys(S().exams).forEach(function (k) { (S().exams[k].attempts || []).forEach(function (a) { if (a.items) all.push(a); }); });
  all.sort(function (a, b) { return b.at - a.at; }).slice(60).forEach(function (a) { delete a.items; delete a.resp; });
  s.retry = true;
  var parts = key.split('-'), lv = parts[0], n = +parts[1];
  s.extraMsg = (pct >= 60 ? 'Passed. ' : 'Not passed yet (60% needed). ') + (n < E.N ? '<a href="#/exam/' + lv + '/' + (n + 1) + '">Next paper: ' + E.title(lv + '-' + (n + 1)) + ' →</a>' : '');
};
App.Finishers.assess = function (s) {
  var lv = s.meta.level, pct = U.pct(s.score, s.total), a = S().assess[lv] || {};
  a.best = Math.max(a.best || 0, pct); a.tries = (a.tries || 0) + 1;
  if (pct >= 70 && !a.passed) { a.passed = true; a.at = Date.now(); U.confetti(); App.activity(50); }
  S().assess[lv] = a; s.retry = true;
  var li = App.LEVELS.indexOf(lv);
  s.extraMsg = pct >= 70 ? '🏅 <b>' + lv + ' certificate earned!</b> ' + (li < 4 ? 'You are ready for ' + App.LEVELS[li + 1] + '. <a href="#/learn/' + App.LEVELS[li + 1] + '">Open ' + App.LEVELS[li + 1] + ' →</a>' : 'You have completed the whole course. Complimenti!') : 'You need 70% to earn the certificate. Review the explanations and the lessons in your weakest skill, then try again — every attempt draws new questions.';
};
App.startAssessment = function (lv) {
  App.Quiz.start({ id: 'ASSESS-' + lv, kind: 'assess', title: lv + ' level assessment', items: E.assessment(lv), mode: 'exam', back: '#/learn/' + lv, level: lv, meta: { level: lv } });
};

/* ---------- views ---------- */
var EX = { lv: null };
V.exams = function (lv) {
  var s = S(); lv = lv || EX.lv || s.level; EX.lv = lv;
  var h = V.top('Examination Center', '#/home');
  if (s.active && s.active.kind === 'exam') h += '<div class="card terra"><b>Unfinished exam:</b> ' + U.esc(s.active.title) + ' — question ' + (s.active.pos + 1) + ' of ' + s.active.items.length + '.<div class="btns"><button class="btn" data-act="resume">Resume</button><button class="btn line" data-act="discard">Discard</button></div></div>';
  h += '<p class="muted">300 exam papers: 50 for each level from A1 to C1 and 50 mixed papers. Each paper has its own questions on grammar, vocabulary, reading, sentence building and practical Italian, with explanations for every answer.</p>';
  h += V.levels(lv, 'examlv', 'MIX');
  var done = 0, sum = 0, passed = 0;
  for (var i = 1; i <= E.N; i++) { var r = s.exams[lv + '-' + i]; if (r && r.attempts.length) { done++; sum += r.best; if (r.best >= 60) passed++; } }
  h += '<div class="card"><div class="row between"><div><span class="eyebrow">' + (lv === 'MIX' ? 'Mixed levels · A1 → C1' : lv + ' · ' + App.LEVEL_NAMES[lv]) + '</span><h3 style="margin-top:4px">' + done + ' of ' + E.N + ' papers taken</h3><span class="small muted">' + (done ? 'Average best score ' + Math.round(sum / done) + '% · ' + passed + ' passed' : 'Pass mark: 60%') + ' · ' + (lv === 'MIX' ? '25' : '20') + ' questions · about ' + E.minutes(lv) + ' min</span></div><div class="ring" style="--p:' + U.pct(done, E.N) + '"><span>' + U.pct(done, E.N) + '%</span></div></div>';
  h += '<p class="small mt"><b>Exam mode:</b></p><div class="seg"><button data-exammode="exam" class="' + (s.settings.examMode !== 'instant' ? 'on' : '') + '">Real exam (results at the end)</button><button data-exammode="instant" class="' + (s.settings.examMode === 'instant' ? 'on' : '') + '">Practice (feedback after each)</button></div></div>';
  h += '<div class="grid g3">';
  for (i = 1; i <= E.N; i++) {
    var rec = s.exams[lv + '-' + i], st = rec && rec.attempts.length ? (rec.best >= 60 ? '<span class="pill">✓ ' + rec.best + '%</span>' : '<span class="pill t">' + rec.best + '%</span>') : '<span class="pill n">New</span>';
    h += '<button class="tile mini" data-go="#/exam/' + lv + '/' + i + '"><span class="ic ' + (rec && rec.best >= 60 ? 'g' : 'y') + '" style="font-weight:800;font-size:16px">' + i + '</span><div style="flex:1"><b>' + (lv === 'MIX' ? 'Mixed exam ' : 'Exam ') + i + '</b><span>' + (rec && rec.attempts.length ? rec.attempts.length + ' attempt' + (rec.attempts.length > 1 ? 's' : '') : (lv === 'MIX' ? '25 questions' : '20 questions')) + '</span></div>' + st + '</button>';
  }
  return h + '</div>';
};
V.exam = function (lv, n) {
  n = +n; var key = lv + '-' + n, s = S(), rec = s.exams[key], items = E.paper(lv, n - 1);
  var cnt = {}; items.forEach(function (it) { cnt[it.skill] = (cnt[it.skill] || 0) + 1; });
  var names = { grammar: 'Grammar', vocabulary: 'Vocabulary', reading: 'Reading comprehension', practical: 'Practical Italian', construction: 'Sentence construction' };
  var lvs = U.uniq(items.map(function (x) { return x.level; }));
  var h = V.top(E.title(key), '#/exams/' + lv);
  h += '<div class="tile" style="cursor:default">' + App.photo(['rome', 'venice', 'florence', 'milan', 'amalfi', 'cinque'][n % 6], '', 1200) + '<div class="tb"><span class="eyebrow">' + (lv === 'MIX' ? 'Mixed levels ' + lvs.join(' → ') : lv + ' · ' + App.LEVEL_NAMES[lv]) + '</span><h2>' + E.title(key) + '</h2><p class="small muted">' + items.length + ' questions · about ' + E.minutes(lv) + ' minutes · pass mark 60%</p>';
  h += '<div class="row" style="margin-top:6px">' + Object.keys(cnt).map(function (k) { return '<span class="pill n">' + names[k] + ' ×' + cnt[k] + '</span>'; }).join('') + '</div>';
  h += '<p class="small" style="margin-top:10px">Mode: <b>' + (s.settings.examMode === 'instant' ? 'Practice — feedback after each answer' : 'Real exam — results and explanations at the end') + '</b>. Your answers are saved as you go, so you can resume if you close the page. Wrong answers are added to My Mistakes.</p>';
  h += '<div class="btns"><button class="btn" data-startexam="' + lv + '|' + n + '">' + ic('exam') + (rec && rec.attempts.length ? ' Take it again' : ' Start exam') + '</button></div></div></div>';
  if (rec && rec.attempts.length) h += '<div class="card"><h3>Previous attempts</h3>' + rec.attempts.map(function (a, i) { return '<button class="lrow" data-go="#/attempt/' + key + '/' + i + '"><span class="n">' + a.pct + '%</span><span class="tx"><b>' + a.score + ' / ' + a.total + (a.pct >= 60 ? ' · passed' : '') + '</b><small>' + U.fmtTime(a.at) + (a.dur ? ' · ' + U.dur(a.dur) : '') + (a.items ? ' · tap to review' : '') + '</small></span><span class="chev">' + ic('next') + '</span></button>'; }).join('') + '</div>';
  h += '<div class="btns">' + (n > 1 ? '<button class="btn line" data-go="#/exam/' + lv + '/' + (n - 1) + '">' + ic('back') + ' Exam ' + (n - 1) + '</button>' : '') + (n < E.N ? '<button class="btn line" data-go="#/exam/' + lv + '/' + (n + 1) + '">Exam ' + (n + 1) + ' ' + ic('next') + '</button>' : '') + '</div>';
  return h;
};
V.attempt = function (key, i) {
  var rec = S().exams[key], a = rec && rec.attempts[+i], lv = key.split('-')[0];
  var h = V.top('Review: ' + E.title(key), '#/exam/' + key.replace('-', '/'));
  if (!a) return h + '<div class="card">Attempt not found.</div>';
  h += '<div class="card" style="text-align:center"><div class="eyebrow">' + U.fmtTime(a.at) + '</div><div class="res-big" style="margin:10px 0">' + a.score + '<span style="font-size:26px;color:var(--muted)"> / ' + a.total + '</span></div><span class="pill ' + (a.pct >= 60 ? '' : 't') + '">' + a.pct + '%</span>' + (a.dur ? '<p class="small muted">Time: ' + U.dur(a.dur) + '</p>' : '') + '</div>';
  h += App.Quiz.analysis(a.bySkill);
  if (!a.items) return h + '<div class="card flat"><p class="muted">Detailed answers are kept for your 60 most recent attempts. This older attempt only has its score.</p></div>';
  h += App.Quiz.reviewList(a.items, a.resp.map(function (r) { return r ? { val: r.v, ok: r.ok } : null; }));
  return h + '<div class="btns"><button class="btn" data-startexam="' + lv + '|' + key.split('-')[1] + '">Retake this exam</button></div>';
};
})();
