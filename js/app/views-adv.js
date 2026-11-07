/* Italiano con Luke — Adventures, culture, expressions, grammar challenges */
(function () {
'use strict';
var App = window.App, U = App.U, ic = App.icon, V = App.V, S = function () { return App.S; };

/* ================= Adventures ================= */
var AD = App.Adv = { cur: null };
function advs() { return window.IT_ADVENTURES || []; }
function order() { return advs().map(function (a, i) { return i; }).sort(function (x, y) { var a = advs()[x], b = advs()[y]; return App.LEVELS.indexOf(a.level) - App.LEVELS.indexOf(b.level) || (a.ord || x) - (b.ord || y); }); }
AD.unlocked = function (i) {
  var o = order(), k = o.indexOf(i); if (k <= 0) return true;
  var prev = S().adv[o[k - 1]]; if (prev && prev.finished) return true;
  return App.LEVELS.indexOf(advs()[i].level) <= App.LEVELS.indexOf(S().level) && !!(S().adv[i]);
};
function stars(n) { n = Math.max(0, Math.min(3, n || 0)); return '<span style="color:var(--gold);letter-spacing:2px">' + '★★★'.slice(0, n) + '<span style="color:var(--line2)">' + '★★★'.slice(0, 3 - n) + '</span></span>'; }
V.adventures = function () {
  var list = advs(), o = order(), fin = list.filter(function (_, i) { return S().adv[i] && S().adv[i].finished; }).length;
  var h = V.top('Adventures', '#/home');
  h += '<div class="card tint"><span class="eyebrow">Live it in Italian</span><h3 style="margin-top:4px">' + fin + ' of ' + list.length + ' adventures completed</h3><p class="small">Each adventure is a real situation in Italy. Listen, choose what Luke says, type answers and make decisions — your choices change what happens. You have 3 hearts: a wrong move costs one. Adventures get harder as you go.</p><div class="bar"><div style="width:' + U.pct(fin, list.length) + '%"></div></div></div>';
  var lastLv = '';
  o.forEach(function (i, k) {
    var a = list[i], st = S().adv[i] || {}, un = AD.unlocked(i);
    if (a.level !== lastLv) { h += (lastLv ? '</div>' : '') + '<h3 style="margin:22px 0 10px">' + a.level + ' · ' + App.LEVEL_NAMES[a.level] + '</h3><div class="grid g2">'; lastLv = a.level; }
    var status = st.node != null ? '<span class="pill y">In progress</span>' : st.finished ? stars(st.best) : un ? '<span class="pill">New</span>' : '<span class="pill n">' + ic('lock') + ' Locked</span>';
    h += '<button class="tile" data-go="#/adventure/' + i + '" style="' + (un ? '' : 'opacity:.78') + '"><div style="position:relative">' + App.photo(a.img) + '<span class="pill" style="position:absolute;left:12px;top:12px;background:rgba(255,255,255,.92);color:#14533f">' + U.esc(a.city) + '</span></div><div class="tb"><div class="row between"><span class="eyebrow">' + a.level + ' · ' + a.nodes.length + ' scenes</span>' + status + '</div><h3>' + U.esc(a.title) + '</h3><span class="meta">' + U.esc(a.intro) + '</span></div></button>';
  });
  return h + (lastLv ? '</div>' : '');
};
V.adventure = function (id) {
  id = +id; var a = advs()[id]; if (!a) return V.adventures();
  var c = AD.cur;
  if (!c || c.id !== id) {
    var st = S().adv[id] || {};
    var live = st.node != null && st.node !== false;
    c = AD.cur = { id: id, node: live ? st.node : null, hearts: live ? (st.hearts || 3) : 3, pts: live ? (st.pts || 0) : 0, errs: live ? (st.errs || 0) : 0, pick: null, done: false, typed: '' };
  }
  var h = V.top(a.city + ' · ' + a.title, '#/adventures');
  if (c.node == null) {
    var st2 = S().adv[id] || {}, un = AD.unlocked(id);
    h += '<div class="scene" style="min-height:260px">' + App.photo(a.img, '', 1200) + '<div class="cap"><span class="eyebrow" style="color:#f1cf8a">' + a.level + ' · ' + U.esc(a.city) + '</span><h2 style="color:#fff;margin-top:4px">' + U.esc(a.title) + '</h2><p>' + U.esc(a.intro) + '</p></div></div>';
    h += '<div class="card"><h3>Your mission</h3><p>' + U.md(a.goal) + '</p>' + (a.words && a.words.length ? '<p class="small muted mt">Useful words for this adventure — tap to listen:</p><div class="vgrid">' + a.words.map(function (w) { return '<button class="vitem" data-say="' + U.attr(w[0]) + '"><div><b lang="it">' + U.esc(w[0]) + '</b><span>' + U.esc(w[1]) + '</span></div>' + ic('play') + '</button>'; }).join('') + '</div>' : '') + (st2.finished ? '<p class="mt">Best result: ' + stars(st2.best) + '</p>' : '') + (!un ? '<div class="notice">' + ic('lock') + ' This adventure is recommended after the previous one in the path. You can still try it now.</div>' : '') + '<div class="btns"><button class="btn" data-advstart="' + id + '">' + ic('map') + (st2.finished ? ' Play again' : ' Begin the adventure') + '</button></div></div>';
    return h;
  }
  if (c.done) return h + endView(a, c);
  var n = a.nodes[c.node];
  var totalN = a.nodes.length;
  h += '<div class="row between"><div class="hearts" aria-label="' + c.hearts + ' hearts">' + [0, 1, 2].map(function (k) { return '<span style="color:' + (k < c.hearts ? 'var(--terra)' : 'var(--line2)') + '">♥</span>'; }).join('') + '</div><span class="small muted">Scene ' + (c.node + 1) + ' / ' + totalN + '</span></div><div class="bar" style="margin:8px 0 4px"><div style="width:' + (c.node / totalN * 100) + '%"></div></div>';
  h += '<div class="scene">' + App.photo(n.img || a.img) + '<div class="cap"><p>' + U.esc(n.scene) + '</p></div></div>';
  var hideText = n.type === 'listen' && c.pick == null;
  if (n.it) h += '<div class="bub" style="max-width:100%"><div class="who">' + U.esc(n.sp || '') + '</div>' + (hideText ? '<p class="small muted" style="margin:4px 0">Listen carefully — the text appears after you answer.</p>' : '<div lang="it" class="it">' + U.esc(n.it) + '</div><div class="en">' + U.esc(n.en || '') + '</div>') + '<div class="row" style="margin-top:6px">' + V.say(n.it, 'Listen') + V.saySlow(n.it) + '</div></div>';
  h += '<h3 style="margin:16px 0 4px">' + U.esc(n.ask || 'What does Luke say?') + '</h3>';
  if (n.type === 'type') {
    var tv = c.pick != null ? c.pick : '';
    h += (n.hint ? '<p class="small muted">' + U.md(n.hint) + '</p>' : '') + '<input class="tinput' + (c.pick != null ? (c.ok ? ' ok' : ' no') : '') + '" id="advin" lang="it" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type in Italian…" value="' + U.attr(tv) + '"' + (c.pick != null ? ' disabled' : '') + '>';
    if (c.pick == null) h += '<div class="accents">' + ['à', 'è', 'é', 'ì', 'ò', 'ù', "'"].map(function (x) { return '<button data-acc="' + U.attr(x) + '" data-target="advin">' + x + '</button>'; }).join('') + '</div><div class="btns"><button class="btn" data-act="advtype">Check</button></div>';
    else h += feedback({ q: c.ok ? 2 : 0, fb: n.fb || '' }, n, true);
  } else {
    h += '<div class="opts">' + n.ch.map(function (ch, i) {
      var cls = 'opt';
      if (c.pick != null) { if (i === c.pick) cls += ch.q === 2 ? ' ok' : ch.q === 1 ? ' sel' : ' no'; else if (ch.q === 2) cls += ' ok dim'; else cls += ' dim'; }
      return '<button class="' + cls + '" data-advpick="' + i + '"' + (c.pick != null ? ' disabled' : '') + '><span class="k">' + 'ABCD'[i] + '</span><span><span lang="it" style="font-family:var(--serif);font-size:17px">' + U.esc(ch.it) + '</span>' + (ch.en && (c.pick != null || n.type !== 'listen') && S().settings.advEn !== false ? '<br><span class="small muted">' + U.esc(ch.en) + '</span>' : '') + '</span></button>';
    }).join('') + '</div>';
    if (c.pick != null) h += feedback(n.ch[c.pick], n);
  }
  if (c.pick != null) h += '<div class="qfoot"><button class="btn full" data-act="advnext">' + (c.hearts <= 0 ? 'See what happened' : 'Continue the story') + ' ' + ic('next') + '</button></div>';
  return h;
};
function feedback(ch, n, typed) {
  var best = (n.ch || []).filter(function (x) { return x.q === 2; })[0];
  var head = ch.q === 2 ? U.pick(['Perfetto!', 'Bravissimo!', 'Ottima scelta!', 'Esatto!']) : ch.q === 1 ? 'That works — but there’s a better way' : 'Not the best move';
  var model = typed ? (n.answers || [])[0] : best ? best.it : '';
  return '<div class="fb ' + (ch.q === 2 ? 'ok' : 'no') + '"><h4>' + ic(ch.q === 2 ? 'check' : ch.q === 1 ? 'bulb' : 'x') + head + (ch.q === 0 ? ' <span style="color:var(--terra)">−♥</span>' : '') + '</h4>' + (ch.fb ? '<p>' + U.md(ch.fb) + '</p>' : '') + (ch.q !== 2 && model ? '<p>Natural choice: <b lang="it">' + U.esc(model) + '</b></p>' : '') + (n.tip ? '<p class="small"><b>Tip:</b> ' + U.md(n.tip) + '</p>' : '') + (model ? '<div class="row">' + V.say(model, 'Hear it') + '</div>' : '') + '</div>';
}
function endView(a, c) {
  var failed = c.hearts <= 0, st = c.errs === 0 ? 3 : c.errs <= 2 ? 2 : 1;
  var end = failed ? a.fail : (st === 3 ? a.end.best : a.end.ok || a.end.best);
  var h = '<div class="scene" style="min-height:240px">' + App.photo(a.img, '', 1200) + '<div class="cap"><span class="eyebrow" style="color:#f1cf8a">' + (failed ? 'Mission not completed' : 'Mission accomplished') + '</span><h2 style="color:#fff;margin-top:4px">' + U.esc(end.t) + '</h2></div></div>';
  h += '<div class="card" style="text-align:center">' + (failed ? '<div class="big" style="font-size:44px">💔</div>' : '<div style="font-size:40px">' + stars(st) + '</div>') + '<p>' + U.md(end.p) + '</p>' + (!failed ? '<p class="small muted">' + (c.errs === 0 ? 'Flawless — no mistakes!' : c.errs + ' imperfect choice' + (c.errs > 1 ? 's' : '') + '. Replay for three stars.') + '</p>' : '<p class="small muted">You ran out of hearts. Your mistakes have been saved — try again, you will remember them now.</p>') + '</div>';
  if (a.recap && a.recap.length) h += '<div class="card"><h3>Phrases to remember</h3>' + a.recap.map(function (r) { return '<div class="exrow"><div class="tx"><div class="it" lang="it">' + U.esc(r[0]) + '</div><div class="en">' + U.esc(r[1]) + '</div></div><div class="acts">' + V.say(r[0]) + '</div></div>'; }).join('') + '</div>';
  var o = order(), nx = o[o.indexOf(c.id) + 1];
  h += '<div class="btns"><button class="btn line" data-advstart="' + c.id + '">' + ic('refresh') + ' Play again</button>' + (nx != null && !failed ? '<button class="btn" data-go="#/adventure/' + nx + '">Next adventure ' + ic('next') + '</button>' : '<button class="btn" data-go="#/adventures">All adventures</button>') + '</div>';
  return h;
}
AD.start = function (id) { AD.cur = { id: id, node: 0, hearts: 3, pts: 0, errs: 0, pick: null, done: false }; var st = S().adv[id] || (S().adv[id] = {}); st.node = 0; st.hearts = 3; st.pts = 0; st.errs = 0; App.save(); App.render(); window.scrollTo(0, 0); };
AD.pick = function (i) {
  var c = AD.cur, a = advs()[c.id], n = a.nodes[c.node]; if (c.pick != null) return;
  c.pick = i; var ch = n.ch[i];
  if (ch.q === 2) { c.pts += 2; App.activity(3); App.record('practical', true); }
  else if (ch.q === 1) { c.pts += 1; c.errs++; App.activity(1); }
  else { c.hearts--; c.errs++; App.record('practical', false); var best = n.ch.filter(function (x) { return x.q === 2; })[0]; App.addMistake({ id: 'adv:' + c.id + ':' + c.node, type: 'mc', level: a.level, skill: 'practical', topic: 'Adventure · ' + a.title, prompt: (n.it ? (n.sp ? n.sp + ': ' : '') + '“' + n.it + '” — ' : '') + (n.ask || 'What does Luke say?'), opts: [best.it].concat(n.ch.filter(function (x) { return x.q === 0; }).map(function (x) { return x.it; })), answer: best.it, why: (ch.fb ? ch.fb + ' ' : '') + (n.tip || '') }, ch.it, 'adventure'); }
  App.save(); App.render(true);
};
AD.typed = function () {
  var c = AD.cur, a = advs()[c.id], n = a.nodes[c.node], el = document.getElementById('advin'), v = el ? el.value : '';
  if (!v.trim()) { U.toast('Type your answer first.'); return; }
  var r = App.Quiz.check({ type: 'fill', answers: n.answers, answer: n.answers[0] }, v);
  c.pick = v; c.ok = r.ok;
  if (r.ok) { c.pts += 2; App.activity(3); App.record('practical', true); if (r.accent) U.toast('Correct — watch the accent: ' + r.accent); }
  else { c.hearts--; c.errs++; App.record('practical', false); App.addMistake({ id: 'adv:' + c.id + ':' + c.node, type: 'fill', level: a.level, skill: 'practical', topic: 'Adventure · ' + a.title, prompt: n.ask + (n.hint ? ' (' + n.hint.replace(/\*/g, '') + ')' : ''), answers: n.answers, answer: n.answers[0], why: n.fb || n.tip || '' }, v, 'adventure'); }
  App.save(); App.render(true);
};
AD.next = function () {
  var c = AD.cur, a = advs()[c.id], n = a.nodes[c.node], st = S().adv[c.id] || (S().adv[c.id] = {});
  var ch = n.ch && c.pick != null && typeof c.pick === 'number' ? n.ch[c.pick] : null;
  var to = ch && ch.to != null ? ch.to : n.to != null ? n.to : c.node + 1;
  c.pick = null; c.ok = null;
  if (c.hearts <= 0 || to >= a.nodes.length || to === 'end') {
    c.done = true;
    if (c.hearts > 0) { var sc = c.errs === 0 ? 3 : c.errs <= 2 ? 2 : 1; st.finished = true; st.best = Math.max(st.best || 0, sc); st.plays = (st.plays || 0) + 1; st.at = Date.now(); App.activity(25); U.confetti(); }
    st.node = null; delete st.hearts; delete st.pts; delete st.errs;
    App.save(); App.Ach.check(); App.render(); window.scrollTo(0, 0); return;
  }
  c.node = to; st.node = to; st.hearts = c.hearts; st.pts = c.pts; st.errs = c.errs;
  App.save(); App.render(); window.scrollTo(0, 0);
};

/* ================= Culture ================= */
V.culture = function (id) {
  var list = window.IT_CULTURE || [];
  if (id != null && list[+id]) {
    var c = list[+id], h = V.top('Italian culture', '#/culture');
    if (!S().culture[id]) { S().culture[id] = Date.now(); App.activity(10); App.Ach.check(); }
    h += '<div class="tile" style="cursor:default">' + App.photo(c.img, '', 1200) + '<div class="tb"><span class="eyebrow">' + U.esc(c.tag) + '</span><h2>' + U.esc(c.t) + '</h2></div></div>';
    h += '<div class="card teach">' + c.p.map(function (p) { return '<p>' + U.md(p) + '</p>'; }).join('') + '</div>';
    if (c.ph && c.ph.length) h += '<div class="card"><span class="eyebrow">Key phrases</span>' + c.ph.map(function (p) { return '<div class="exrow"><div class="tx"><div class="it" lang="it">' + U.esc(p[0]) + '</div><div class="en">' + U.esc(p[1]) + '</div></div><div class="acts">' + V.say(p[0]) + V.saySlow(p[0]) + '</div></div>'; }).join('') + '</div>';
    if (c.q && c.q.length) h += '<div class="card tint"><h3>Quick check</h3><p class="small">' + c.q.length + ' questions about what you just read.</p><button class="btn" data-culturequiz="' + id + '">Start</button></div>';
    var nx = list[+id + 1];
    if (nx) h += '<div class="btns"><button class="btn line" data-go="#/culture/' + (+id + 1) + '">Next: ' + U.esc(nx.t) + ' ' + ic('next') + '</button></div>';
    return h;
  }
  var h2 = V.top('Italian culture', '#/practice');
  h2 += '<p class="muted">Language lives inside a culture. Short reads, each with key phrases and a quick check. ' + Object.keys(S().culture).length + ' of ' + list.length + ' read.</p><div class="grid g2">';
  list.forEach(function (c, i) { h2 += '<button class="tile" data-go="#/culture/' + i + '">' + App.photo(c.img) + '<div class="tb"><div class="row between"><span class="eyebrow">' + U.esc(c.tag) + '</span>' + (S().culture[i] ? '<span class="pill">✓ Read</span>' : '') + '</div><h3>' + U.esc(c.t) + '</h3><span class="meta">' + U.esc(c.sum) + '</span></div></button>'; });
  return h2 + '</div>';
};
App.cultureQuiz = function (id) {
  var c = window.IT_CULTURE[+id];
  App.Quiz.start({ id: 'culture-' + id, kind: 'culture', title: c.t, items: c.q.map(function (q, i) { return { id: 'cu:' + id + ':' + i, type: 'mc', level: '', skill: 'reading', topic: 'Culture · ' + c.t, prompt: q.q, opts: q.o, answer: q.o[0], why: q.w }; }), back: '#/culture/' + id });
};
App.Finishers.culture = function (s) { s.retry = true; };

/* ================= Expressions ================= */
V.expressions = function (cat) {
  var list = window.IT_EXPRESSIONS || [], cats = U.uniq(list.map(function (e) { return e.c; }));
  cat = cats.indexOf(cat) > -1 ? cat : cats[0];
  var h = V.top('Everyday expressions', '#/practice');
  h += '<p class="muted">Phrases Italians really use, with notes on when to use them.</p><div class="seg" style="margin-bottom:12px">' + cats.map(function (c) { return '<button data-go="#/expressions/' + encodeURIComponent(c) + '" class="' + (c === cat ? 'on' : '') + '">' + U.esc(c) + '</button>'; }).join('') + '</div>';
  var items = list.filter(function (e) { return e.c === cat; });
  h += '<div class="card">' + items.map(function (e) { return '<div class="exrow"><div class="tx"><div class="it" lang="it">' + U.esc(e.it) + '</div><div class="en">' + U.esc(e.en) + '</div>' + (e.note ? '<div class="small" style="margin-top:4px">' + U.md(e.note) + '</div>' : '') + '</div><div class="acts">' + V.say(e.it) + V.saySlow(e.it) + '</div></div>'; }).join('') + '</div>';
  h += '<button class="btn full" data-exprquiz="' + U.attr(cat) + '">' + ic('bolt') + ' Quiz me on these expressions</button>';
  return h;
};
App.exprQuiz = function (cat) {
  var list = (window.IT_EXPRESSIONS || []), items = list.filter(function (e) { return e.c === cat; }), rnd = U.rng(Date.now());
  var qs = U.shuffle(items, rnd).slice(0, 8).map(function (e, i) {
    var others = U.shuffle(list.filter(function (x) { return x.it !== e.it && x.en !== e.en; }), rnd);
    var same = others.filter(function (x) { return x.c === e.c; }).slice(0, 3); if (same.length < 3) same = same.concat(others.filter(function (x) { return same.indexOf(x) < 0; }).slice(0, 3 - same.length));
    return i % 2 ? { id: 'ex:' + e.it, type: 'mc', skill: 'vocabulary', topic: 'Expressions · ' + cat, prompt: 'What does this expression mean?', sub: e.it, opts: [e.en].concat(same.map(function (x) { return x.en; })), answer: e.en, why: (e.note || '') }
      : { id: 'ex2:' + e.it, type: 'mc', skill: 'vocabulary', topic: 'Expressions · ' + cat, prompt: 'Which expression means “' + e.en + '”?', opts: [e.it].concat(same.map(function (x) { return x.it; })), answer: e.it, why: (e.note || '') };
  });
  App.Quiz.start({ id: 'expr', kind: 'expr', title: 'Expressions · ' + cat, items: qs, back: '#/expressions/' + encodeURIComponent(cat) });
};
App.Finishers.expr = function (s) { s.retry = true; };

/* ================= Grammar challenges ================= */
V.challenge = function (lv) {
  lv = App.LEVELS.indexOf(lv) > -1 ? lv : S().level;
  var h = V.top('Grammar challenges', '#/practice') + V.levels(lv, 'challv');
  h += '<p class="muted">12 rapid questions on a single rule, freshly generated each time — new sentences, new subjects, realistic traps. Every answer comes with an explanation.</p><div class="grid g2">';
  (App.Gen.CHALLENGES[lv] || []).forEach(function (c) { var best = (S().stats.chal || {})[lv + ':' + c[0]]; h += '<button class="tile mini" data-chal="' + lv + '|' + c[0] + '"><span class="ic b">' + ic('bolt') + '</span><div style="flex:1"><b>' + U.esc(c[1]) + '</b><span>' + U.esc(c[2]) + (best != null ? ' · best ' + best + '%' : '') + '</span></div></button>'; });
  return h + '</div>';
};
App.startChallenge = function (lv, key) {
  var c = (App.Gen.CHALLENGES[lv] || []).filter(function (x) { return x[0] === key; })[0];
  var items = App.Gen.challenge(lv, key, 12, Date.now());
  if (!items.length) { U.toast('No questions available for this challenge.'); return; }
  App.Quiz.start({ id: 'chal-' + lv + '-' + key, kind: 'chal', title: c ? c[1] : 'Grammar challenge', items: items, back: '#/challenge/' + lv, meta: { k: lv + ':' + key } });
};
App.Finishers.chal = function (s) { var st = S().stats; st.chal = st.chal || {}; st.chal[s.meta.k] = Math.max(st.chal[s.meta.k] || 0, U.pct(s.score, s.total)); s.retry = true; };
})();
