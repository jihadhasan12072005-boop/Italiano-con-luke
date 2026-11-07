/* Italiano con Luke — router and main views */
(function () {
'use strict';
var App = window.App, U = App.U, ic = App.icon, S = function () { return App.S; };
var V = App.V = {};

/* ---------- shell ---------- */
var NAV = [['home', 'home', 'Home'], ['learn', 'learn', 'Learn'], ['practice', 'practice', 'Practice'], ['adventures', 'map', 'Adventures'], ['exams', 'exam', 'Exams']];
var SIDE_EXTRA = [['progress', 'chart', 'My progress'], ['mistakes', 'target', 'My mistakes'], ['culture', 'globe', 'Culture'], ['settings', 'gear', 'Settings']];
function navHTML(cur) {
  var sec = section(cur);
  document.getElementById('nav').innerHTML = NAV.map(function (n) { return '<button data-go="#/' + n[0] + '" class="' + (sec === n[0] ? 'on' : '') + '" aria-label="' + n[2] + '">' + ic(n[1]) + '<span>' + n[2] + '</span></button>'; }).join('');
  document.getElementById('side').innerHTML = '<div class="brand">Italiano con Luke<small>Your Italian journey</small></div>' + NAV.concat(SIDE_EXTRA).map(function (n) { return '<button data-go="#/' + n[0] + '" class="' + (sec === n[0] ? 'on' : '') + '">' + ic(n[1]) + n[2] + '</button>'; }).join('') + '<div class="spacer"></div><div class="small muted" style="padding:0 12px">Progress is saved automatically in this browser.</div>';
}
function section(r) {
  var p = r[0];
  if (p === 'lesson' || p === 'learn' || p === 'assess') return 'learn';
  if (['practice', 'flash', 'review', 'speak', 'listen', 'daily', 'challenge', 'expressions'].indexOf(p) > -1) return 'practice';
  if (p === 'mistakes') return 'mistakes';
  if (p === 'adventure' || p === 'adventures') return 'adventures';
  if (p === 'exam' || p === 'exams' || p === 'attempt') return 'exams';
  if (p === 'culture') return 'culture';
  if (p === 'progress' || p === 'achievements') return 'progress';
  if (p === 'settings') return 'settings';
  if (p === 'quiz') return App.Quiz.cur ? ({ exam: 'exams', assess: 'learn', lesson: 'learn' }[App.Quiz.cur.kind] || 'practice') : 'home';
  return 'home';
}
App.route = function () { var h = (location.hash || '#/home').replace(/^#\/?/, ''); return h.split('/').map(decodeURIComponent); };
App.render = function (keep) {
  var r = App.route(), y = window.scrollY, html;
  try {
    var fn = V[r[0]] || V.home;
    html = fn.apply(null, r.slice(1));
  } catch (err) {
    console.error(err);
    html = '<div class="card" style="margin-top:24px"><h2>Something went wrong</h2><p class="muted">This page could not be displayed. Your progress is safe.</p><p class="small muted">' + U.esc(err && err.message) + '</p><button class="btn" data-go="#/home">Return home</button></div>';
  }
  var app = document.getElementById('app');
  app.innerHTML = '<div class="view' + (keep ? '' : '') + '">' + html + '</div>';
  if (keep) { app.firstChild.style.animation = 'none'; window.scrollTo(0, y); }
  navHTML(r);
  if (V._after) { var f = V._after; V._after = null; try { f(); } catch (e) { console.error(e); } }
};
V.top = function (title, back) { return '<div class="topbar"><button class="iconbtn" data-go="' + U.attr(back || '#/home') + '" aria-label="Back">' + ic('back') + '</button><h2>' + U.esc(title) + '</h2></div>'; };
V.levels = function (cur, act, extra) {
  var lv = App.LEVELS.slice(); if (extra) lv.push(extra);
  return '<div class="levels' + (extra ? ' six' : '') + '">' + lv.map(function (l) { return '<button data-' + act + '="' + l + '" class="' + (l === cur ? 'on' : '') + '">' + l + '<small>' + (App.LEVEL_NAMES[l] || 'Mixed').split(' ')[0] + '</small></button>'; }).join('') + '</div>';
};
V.say = function (t, label) { return '<button class="sound" data-say="' + U.attr(t) + '" aria-label="Listen">' + ic('play') + (label ? ' ' + label : '') + '</button>'; };
V.saySlow = function (t) { return '<button class="sound slow" data-say-slow="' + U.attr(t) + '" aria-label="Listen slowly">' + ic('snail') + '</button>'; };

/* ---------- next lesson helper ---------- */
App.nextLesson = function (lv) {
  lv = lv || S().level;
  var ls = App.lessons(lv);
  for (var i = 0; i < ls.length; i++) if (!(S().lessons[ls[i].id] && S().lessons[ls[i].id].done)) return ls[i];
  var li = App.LEVELS.indexOf(lv);
  if (li < App.LEVELS.length - 1) return App.nextLesson(App.LEVELS[li + 1]);
  return ls[0];
};

/* ---------- home ---------- */
V.home = function () {
  var s = S(), hr = new Date().getHours(), greet = hr < 13 ? 'Buongiorno' : hr < 18 ? 'Buon pomeriggio' : 'Buonasera';
  var next = App.nextLesson(), streak = App.streak(), todayXP = s.days[U.today()] || 0, goal = s.settings.dailyGoal || 50;
  var due = App.Review.dueCount(), cards = App.SRS.dueCount(s.level), dailyDone = !!s.daily[U.today()];
  var h = '<section class="hero">' + App.photo('rome', 'bgimg', 1400) + '<span class="eyebrow">' + s.level + ' · ' + App.LEVEL_NAMES[s.level] + '</span><h1>' + greet + ', ' + U.esc(s.name || 'Luke') + '!</h1><p>' + (streak ? '🔥 ' + streak + '-day streak — keep it alive today.' : 'Ready for today’s Italian? A few minutes a day adds up fast.') + '</p>';
  if (next) h += '<div class="btns" style="max-width:520px"><button class="btn gold" data-go="#/lesson/' + next.id + '">' + ic('learn') + ' Continue: ' + U.esc(next.t.split(':')[0]) + '</button></div>';
  h += '</section>';
  /* today */
  h += '<div class="card"><div class="row between"><div><span class="eyebrow">Today</span><h3 style="margin-top:4px">' + todayXP + ' / ' + goal + ' XP</h3></div><div class="ring" style="--p:' + Math.min(100, U.pct(todayXP, goal)) + '"><span>' + Math.min(100, U.pct(todayXP, goal)) + '%</span></div></div><div class="grid g2 mt">';
  h += tileMini('#/daily', 'bolt', 'y', dailyDone ? 'Daily challenge ✓' : 'Daily challenge', dailyDone ? 'Completed — come back tomorrow' : '10 questions · earn a streak day');
  h += tileMini('#/mistakes', 'target', 't', 'My mistakes', due ? due + ' ready for review' : 'Nothing due — well done');
  h += tileMini('#/flash/' + s.level, 'cards', 'g', 'Flashcards', cards ? cards + ' cards to review' : 'Learn new words');
  h += tileMini('#/speak', 'mic', 'b', 'Speaking studio', 'Pronunciation with feedback');
  h += '</div></div>';
  /* course progress */
  h += '<div class="card"><div class="row between"><h3>Your course</h3><button class="btn ghost sm" data-go="#/learn/' + s.level + '">Open ' + ic('next') + '</button></div><div class="grid g4 mt">';
  App.LEVELS.forEach(function (lv) { var tot = App.lessons(lv).length, d = App.lessonsDone(lv), p = U.pct(d, tot); h += '<button class="tile" data-go="#/learn/' + lv + '" style="padding:14px;align-items:center;text-align:center;gap:6px"><div class="ring" style="--p:' + p + '"><span>' + lv + '</span></div><b style="font-size:14px">' + App.LEVEL_NAMES[lv] + '</b><span class="small muted">' + d + ' / ' + tot + ' lessons</span></button>'; });
  h += '</div></div>';
  /* phrase of the day */
  var ex = window.IT_EXPRESSIONS || [];
  if (ex.length) { var pd = ex[U.hash(U.today()) % ex.length]; h += '<div class="card gold"><span class="eyebrow">Espressione del giorno</span><div class="row between" style="margin-top:6px;align-items:flex-start"><div style="flex:1;min-width:0"><div class="it-lg" lang="it">' + U.esc(pd.it) + '</div><div class="muted">' + U.esc(pd.en) + '</div></div>' + V.say(pd.it) + '</div>' + (pd.note ? '<p class="small" style="margin-top:8px">' + U.md(pd.note) + '</p>' : '') + '</div>'; }
  /* explore */
  h += '<h3 class="mt" style="margin:22px 0 10px">Explore</h3><div class="grid g2">';
  h += bigTile('#/adventures', 'venice', 'Adventures', 'Live real situations across Italy — choices, conversations and consequences.');
  h += bigTile('#/exams', 'florence', 'Examination Center', '300 exam papers from A1 to C1, with full explanations and analysis.');
  h += bigTile('#/culture', 'cinque', 'Italian culture', 'Coffee rules, regions, food, gestures, history and everyday life.');
  h += bigTile('#/progress', 'milan', 'My progress', 'Streaks, achievements, skills and exam history.');
  h += '</div>';
  return h;
};
function tileMini(go, icon, col, t, sub) { return '<button class="tile mini" data-go="' + go + '"><span class="ic ' + col + '">' + ic(icon) + '</span><div><b>' + U.esc(t) + '</b><span>' + U.esc(sub) + '</span></div></button>'; }
function bigTile(go, img, t, sub) { return '<button class="tile" data-go="' + go + '">' + App.photo(img) + '<div class="tb"><h3>' + U.esc(t) + '</h3><span class="meta">' + U.esc(sub) + '</span></div></button>'; }
V.tileMini = tileMini; V.bigTile = bigTile;

/* ---------- learn ---------- */
var LEVEL_DESC = {
  A1: 'Greetings, essential verbs, articles, numbers, time, family, food and your first past tense.',
  A2: 'Past tenses, pronouns, future, conditional, imperative, comparisons and practical travel Italian.',
  B1: 'The subjunctive, hypotheticals, combined pronouns, passive, reported speech and argument.',
  B2: 'Advanced subjunctive, sequence of tenses, passato remoto, causatives, register and persuasion.',
  C1: 'Nuance, implicit clauses, idioms, journalistic and formal style, and native-like discourse.'
};
var LEVEL_IMG = { A1: 'rome', A2: 'florence', B1: 'venice', B2: 'milan', C1: 'amalfi' };
V.learn = function (lv) {
  var s = S(); lv = App.LEVELS.indexOf(lv) > -1 ? lv : s.level;
  var ls = App.lessons(lv), d = App.lessonsDone(lv), h = V.top('Italian course', '#/home');
  h += V.levels(lv, 'learnlv');
  h += '<div class="tile" style="cursor:default">' + App.photo(LEVEL_IMG[lv], '', 1200) + '<div class="tb"><span class="eyebrow">' + lv + ' · ' + App.LEVEL_NAMES[lv] + '</span><h3>' + d + ' of ' + ls.length + ' lessons complete</h3><p class="muted small" style="margin:2px 0 8px">' + LEVEL_DESC[lv] + '</p><div class="bar"><div style="width:' + U.pct(d, ls.length) + '%"></div></div>' + (lv !== s.level ? '<div class="btns"><button class="btn soft sm" data-setlevel="' + lv + '">Make ' + lv + ' my current level</button></div>' : '<p class="small muted" style="margin-top:8px">This is your current level.</p>') + '</div></div>';
  if (!ls.length) return h + '<div class="card empty"><p>This level is being prepared.</p></div>';
  ls.forEach(function (l, i) {
    var st = s.lessons[l.id] || {};
    h += '<button class="lrow' + (st.done ? ' done' : '') + '" data-go="#/lesson/' + l.id + '"><span class="n">' + (st.done ? ic('check') : i + 1) + '</span><span class="tx"><b>' + U.esc(l.t) + '</b><small>' + U.esc(l.s) + (st.best != null ? ' · best ' + st.best + '%' : '') + '</small></span><span class="chev">' + ic('next') + '</span></button>';
  });
  var as = s.assess[lv];
  h += '<div class="card gold mt"><span class="eyebrow">Level completion assessment</span><h3>' + lv + ' final assessment</h3><p class="small">30 questions covering the whole level: grammar, vocabulary, reading and real-life Italian. Score 70% to earn the ' + lv + ' certificate badge.</p>' + (as ? '<p><b>Best: ' + as.best + '%</b> ' + (as.passed ? '· 🏅 Passed on ' + U.fmtDate(as.at) : '· not passed yet') + '</p>' : '') + '<button class="btn" data-assess="' + lv + '">' + ic('trophy') + ' Take the ' + lv + ' assessment</button></div>';
  return h;
};

/* ---------- lesson ---------- */
V.lesson = function (id) {
  var L = App.lessonById(id); if (!L) return V.top('Lesson not found', '#/learn') + '<div class="card">This lesson does not exist.</div>';
  var s = S(), st = s.lessons[L.id] || {}, ls = App.lessons(L.level), h = '';
  h += V.top(L.level + ' · Lesson ' + (L.idx + 1), '#/learn/' + L.level);
  h += '<div class="tile" style="cursor:default">' + App.photo(L.img || 'rome', '', 1200) + '<div class="tb"><span class="eyebrow">' + U.esc(L.s) + '</span><h2>' + U.esc(L.t) + '</h2>' + (st.done ? '<span class="pill">' + ic('check') + ' Completed' + (st.best != null ? ' · best ' + st.best + '%' : '') + '</span>' : '<span class="pill n">About 15–20 minutes</span>') + '</div></div>';
  h += '<div class="goal">' + ic('target') + '<div><b>Goal.</b> ' + U.md(L.goal) + '</div></div>';
  /* 1 explanation */
  h += '<div class="card teach"><span class="eyebrow">1 · Teacher’s explanation</span>' + L.teach.map(function (b) { return '<div class="blk"><h3>' + U.esc(b[0]) + '</h3><p>' + U.md(b[1]) + '</p></div>'; }).join('');
  (L.tb || []).forEach(function (t) { h += '<div class="tablewrap"><table class="t"><caption>' + U.esc(t.cap || '') + '</caption><thead><tr>' + t.h.map(function (c) { return '<th>' + U.esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' + t.r.map(function (r) { return '<tr>' + r.map(function (c, i) { return '<td' + (i ? ' lang="it"' : '') + '>' + U.md(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>'; });
  h += '</div>';
  /* 2 examples */
  h += '<div class="card"><div class="row between"><span class="eyebrow">2 · Examples in context</span><button class="btn ghost sm" data-act="toggleen">Hide / show English</button></div><div id="exlist">' + L.ex.map(function (e) { return '<div class="exrow"><div class="tx"><div class="it" lang="it">' + U.esc(e[0]) + '</div><div class="en exen">' + U.esc(e[1]) + '</div></div><div class="acts">' + V.say(e[0]) + V.saySlow(e[0]) + '</div></div>'; }).join('') + '</div><div class="btns"><button class="btn soft" data-drill="' + L.id + '">' + ic('mic') + ' Pronunciation drill</button></div></div>';
  /* 3 mistakes */
  if (L.err && L.err.length) h += '<div class="card"><span class="eyebrow">3 · Common mistakes</span>' + L.err.map(function (m) { return '<div class="mistake"><div><span class="w" lang="it">' + U.esc(m[0]) + '</span> → <span class="r" lang="it">' + U.esc(m[1]) + '</span></div><div class="small" style="margin-top:4px">' + U.md(m[2]) + '</div></div>'; }).join('') + '</div>';
  /* 4 dialogue */
  if (L.dia && L.dia.length) {
    var all = L.dia.map(function (d) { return d[1]; }).join(' ');
    h += '<div class="card"><div class="row between"><span class="eyebrow">4 · Real conversation</span>' + V.say(all, 'Play all') + '</div><div class="dia mt">' + L.dia.map(function (d) { return '<div class="bub' + (d[0] === 'Luke' ? ' me' : '') + '"><div class="who">' + U.esc(d[0]) + '</div><div class="row between" style="align-items:flex-start;flex-wrap:nowrap"><div lang="it" style="font-family:var(--serif);font-size:17px">' + U.esc(d[1]) + '</div>' + V.say(d[1]) + '</div><div class="en small exen">' + U.esc(d[2]) + '</div></div>'; }).join('') + '</div></div>';
  }
  /* 5 vocabulary */
  if (L.voc && L.voc.length) h += '<div class="card"><span class="eyebrow">5 · Key vocabulary</span><p class="small muted">Tap a word to hear it. These words are added to your ' + L.level + ' flashcards automatically.</p><div class="vgrid">' + L.voc.map(function (v) { return '<button class="vitem" data-say="' + U.attr(v[0]) + '"><div><b lang="it">' + U.esc(v[0]) + '</b><span>' + U.esc(v[1]) + '</span></div>' + ic('play') + '</button>'; }).join('') + '</div></div>';
  /* 6 practice */
  h += '<div class="card tint"><span class="eyebrow">6 · Practice</span><h3>Lesson challenge</h3><p class="small">' + (L.q.length + 4) + ' exercises: grammar, typing, sentence building, listening, dictation and speaking. Score 60% or more to complete the lesson. Mistakes are saved for review.</p><button class="btn full" data-lessonquiz="' + L.id + '">' + ic('bolt') + ' Start the challenge</button></div>';
  var nx = ls[L.idx + 1], pv = ls[L.idx - 1];
  h += '<div class="btns">' + (pv ? '<button class="btn line" data-go="#/lesson/' + pv.id + '">' + ic('back') + ' Previous</button>' : '') + (nx ? '<button class="btn line" data-go="#/lesson/' + nx.id + '">Next lesson ' + ic('next') + '</button>' : '') + '</div>';
  return h;
};
App.startLessonQuiz = function (id) {
  var L = App.lessonById(id), rnd = U.rng(Date.now());
  var items = L.q.map(function (q, i) { return App.Quiz.fromLessonQ(L, q, i); }).filter(Boolean);
  var extras = App.Quiz.lessonExtras(L, rnd);
  /* keep hand-written order (they build up), slot extras in */
  var mixed = items.slice(0, 3).concat(extras.slice(0, 2), items.slice(3, 6), extras.slice(2, 3), items.slice(6), extras.slice(3));
  App.Quiz.start({ id: 'lesson-' + id, kind: 'lesson', title: L.t, items: mixed, back: '#/lesson/' + id, level: L.level, meta: { lesson: id } });
};
App.Finishers.lesson = function (s) {
  var id = s.meta.lesson, L = App.lessonById(id), p = U.pct(s.score, s.total), st = S().lessons[id] || {};
  var first = !st.done;
  st.best = Math.max(st.best || 0, p); st.tries = (st.tries || 0) + 1; st.last = Date.now();
  if (p >= 60) { st.done = true; st.at = st.at || Date.now(); delete st.legacy; }
  S().lessons[id] = st;
  if (p >= 60 && first) { App.activity(40); U.confetti(); }
  s.retry = true;
  var ls = App.lessons(L.level), nx = ls[L.idx + 1];
  s.extraMsg = p >= 60 ? '<b>Lesson complete!</b> ' + (nx ? 'Next up: <a href="#/lesson/' + nx.id + '">' + U.esc(nx.t) + '</a>' : 'You finished every ' + L.level + ' lesson — try the level assessment!') : 'Score 60% to complete this lesson. Re-read the explanation and try again.';
};

/* ---------- progress ---------- */
V.progress = function () {
  var s = S(), h = V.top('My progress', '#/home');
  var totalL = 0, doneL = 0; App.LEVELS.forEach(function (lv) { totalL += App.lessons(lv).length; doneL += App.lessonsDone(lv); });
  var examsTaken = 0, examSum = 0; Object.keys(s.exams).forEach(function (k) { var e = s.exams[k]; if (e.attempts && e.attempts.length) { examsTaken++; examSum += e.best; } });
  var learned = Object.keys(s.cards).filter(function (k) { return s.cards[k].b >= 3; }).length;
  h += '<div class="grid g4">' + [[App.streak(), 'day streak 🔥'], [s.xp || 0, 'total XP'], [doneL + '/' + totalL, 'lessons'], [examsTaken, 'exam papers taken'], [examsTaken ? Math.round(examSum / examsTaken) + '%' : '—', 'average exam best'], [Object.keys(s.mastered).length, 'mistakes mastered'], [learned, 'words well known'], [U.pct(s.stats.correct, s.stats.answered) + '%', 'overall accuracy']].map(function (x) { return '<div class="card stat"><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('') + '</div>';
  /* calendar */
  var cells = '', d = U.addDays(U.today(), -34), goal = s.settings.dailyGoal || 50;
  for (var i = 0; i < 35; i++) { var k = U.addDays(d, i), x = s.days[k]; cells += '<i title="' + k + ': ' + (x || 0) + ' XP" class="' + (x === undefined ? '' : x >= goal ? 'l3' : x >= goal / 2 ? 'l2' : 'l1') + (k === U.today() ? ' today' : '') + '"></i>'; }
  h += '<div class="card"><div class="row between"><h3>Last 5 weeks</h3><span class="pill y">Best streak: ' + App.bestStreak() + ' days</span></div><div class="cal mt">' + cells + '</div><p class="small muted mt">Any practice counts as an active day. Darker squares mean you reached your daily goal of ' + goal + ' XP.</p></div>';
  /* levels */
  h += '<div class="card"><h3>Course by level</h3>' + App.LEVELS.map(function (lv) { var t = App.lessons(lv).length, dn = App.lessonsDone(lv), as = s.assess[lv]; return '<div class="skillbar" style="grid-template-columns:52px 1fr 92px"><b>' + lv + '</b><div class="bar"><div style="width:' + U.pct(dn, t) + '%"></div></div><span class="small">' + dn + '/' + t + (as && as.passed ? ' 🏅' : '') + '</span></div>'; }).join('') + '</div>';
  /* skills */
  var sk = s.stats.skills, names = { grammar: 'Grammar', vocabulary: 'Vocabulary', reading: 'Reading', listening: 'Listening', construction: 'Sentences', practical: 'Real-life' };
  var skk = Object.keys(names).filter(function (k) { return sk[k] && sk[k][1]; });
  h += '<div class="card"><h3>Accuracy by skill</h3>' + (skk.length ? skk.map(function (k) { var p = U.pct(sk[k][0], sk[k][1]); return '<div class="skillbar"><span>' + names[k] + '</span><div class="bar' + (p < 60 ? ' gold' : '') + '"><div style="width:' + p + '%"></div></div><b>' + p + '%</b></div>'; }).join('') : '<p class="muted">Answer some questions to see your skill profile.</p>') + '<p class="small muted">Speaking: ' + s.speak.tries + ' attempts, ' + s.speak.good + ' recognised well.</p></div>';
  /* exam history */
  var hist = [];
  Object.keys(s.exams).forEach(function (k) { (s.exams[k].attempts || []).forEach(function (a, i) { hist.push({ k: k, i: i, a: a }); }); });
  hist.sort(function (a, b) { return b.a.at - a.a.at; });
  h += '<div class="card"><h3>Recent exam attempts</h3>' + (hist.length ? hist.slice(0, 8).map(function (x) { return '<button class="lrow" data-go="#/attempt/' + x.k + '/' + x.i + '"><span class="n">' + x.a.pct + '%</span><span class="tx"><b>' + U.esc(App.Exams.title(x.k)) + '</b><small>' + U.fmtTime(x.a.at) + ' · ' + x.a.score + '/' + x.a.total + '</small></span><span class="chev">' + ic('next') + '</span></button>'; }).join('') : '<p class="muted">No exams taken yet. Visit the Examination Center when you are ready.</p>') + '</div>';
  if (s.legacy && Object.keys(s.legacy.completed || {}).length) h += '<div class="card flat"><h3>Earlier progress</h3><p class="small">' + Object.keys(s.legacy.completed).filter(function (k) { return s.legacy.completed[k]; }).length + ' lessons and ' + Object.keys(s.legacy.exams || {}).length + ' practice forms were completed in the previous version of the app. Matching topics in the new course are marked as completed, and the original record is kept safely.</p></div>';
  h += '<div class="grid g2">' + tileMini('#/achievements', 'trophy', 'y', 'Achievements', Object.keys(s.ach).length + ' of ' + App.Ach.list.length + ' unlocked') + tileMini('#/settings', 'gear', 'g', 'Settings & backup', 'Voice, speed, theme, export your progress') + '</div>';
  return h;
};

/* ---------- achievements ---------- */
V.achievements = function () {
  var s = S(), h = V.top('Achievements', '#/progress');
  h += '<p class="muted">' + Object.keys(s.ach).length + ' of ' + App.Ach.list.length + ' unlocked.</p><div class="grid g4">';
  App.Ach.list.forEach(function (a) { var got = s.ach[a.id]; h += '<div class="badge' + (got ? '' : ' lock') + '"><div class="em">' + a.e + '</div><b>' + U.esc(a.t) + '</b><span>' + U.esc(a.d) + '</span>' + (got ? '<span class="pill">' + U.fmtDate(got) + '</span>' : '') + '</div>'; });
  return h + '</div>';
};

/* ---------- settings ---------- */
V.settings = function () {
  var s = S(), st = s.settings, h = V.top('Settings', '#/progress');
  h += '<div class="card"><h3>Your name</h3><input class="tinput" id="nm" value="' + U.attr(s.name || 'Luke') + '" maxlength="30" style="margin-top:8px"><div class="btns"><button class="btn soft sm" data-act="savename">Save name</button></div></div>';
  var vs = App.Speech.voices;
  h += '<div class="card"><h3>Italian voice</h3>' + (App.Speech.ok ? (vs.length ? '<p class="small muted">' + vs.length + ' Italian voice' + (vs.length > 1 ? 's' : '') + ' found on this device. Voices marked Natural, Enhanced or Premium usually sound best.</p><select class="sel" id="voicesel">' + vs.map(function (v) { return '<option value="' + U.attr(v.voiceURI) + '"' + (App.Speech.voice && App.Speech.voice.voiceURI === v.voiceURI ? ' selected' : '') + '>' + U.esc(v.name + ' (' + v.lang + ')') + '</option>'; }).join('') + '</select>' : '<div class="notice">No Italian voice was found yet. Your device will try to read Italian anyway. For a better voice: on iPhone/iPad go to Settings → Accessibility → Spoken Content → Voices → Italian and download one (e.g. “Alice – Enhanced”). On Android, install Italian in Google Text-to-speech settings. On Windows, add Italian under Time & Language → Speech.</div>') : '<div class="notice">This browser does not support speech synthesis. Try Safari, Chrome or Edge.</div>');
  h += '<p class="mt"><b>Speed</b></p><div class="seg">' + [[0.75, 'Slower'], [0.92, 'Natural'], [1.05, 'Fast']].map(function (r) { return '<button data-rate="' + r[0] + '" class="' + (Math.abs(st.rate - r[0]) < .01 ? 'on' : '') + '">' + r[1] + '</button>'; }).join('') + '</div><div class="btns"><button class="btn soft" data-say="Ciao Luke! Benvenuto in Italia. Oggi impariamo qualcosa di nuovo.">' + ic('play') + ' Test voice</button></div></div>';
  h += '<div class="card"><h3>Microphone & speech recognition</h3><p class="small">' + (App.Rec.supported ? '✓ Speech recognition is available in this browser (Italian, it-IT).' : '✗ Speech recognition is not available in this browser. You can still record yourself and compare' + (App.Rec.canRecord ? '' : ' (recording is also unavailable here — use listen-and-repeat)') + '. Chrome on Android/desktop and Safari on iPhone (with Siri enabled) support recognition.') + '</p></div>';
  h += '<div class="card"><h3>Appearance</h3><div class="seg">' + [['auto', 'Automatic'], ['light', 'Light'], ['dark', 'Dark']].map(function (t) { return '<button data-theme="' + t[0] + '" class="' + (st.theme === t[0] ? 'on' : '') + '">' + t[1] + '</button>'; }).join('') + '</div><p class="mt"><b>Daily goal</b></p><div class="seg">' + [[30, 'Relaxed · 30'], [50, 'Regular · 50'], [100, 'Serious · 100'], [150, 'Intense · 150']].map(function (g) { return '<button data-goal="' + g[0] + '" class="' + (st.dailyGoal === g[0] ? 'on' : '') + '">' + g[1] + ' XP</button>'; }).join('') + '</div></div>';
  h += '<div class="card"><h3>Backup</h3><p class="small">Your progress is saved automatically in this browser on this device, and survives refreshing and closing the browser. It does <b>not</b> sync to other devices. To move to another device, or before clearing browser data, download a backup and import it there.</p><div class="btns"><button class="btn soft" data-act="export">' + ic('download') + ' Download backup</button><label class="btn line" style="cursor:pointer">' + ic('upload') + ' Import backup<input type="file" accept="application/json,.json" id="importfile" class="sr"></label></div>' + (App.storageOK ? '' : '<div class="notice">⚠️ This browser is currently refusing to save data (private browsing or storage disabled). Progress will be lost when you close the page.</div>') + '</div>';
  return h;
};
App.exportData = function () {
  var blob = new Blob([JSON.stringify({ app: 'Italiano con Luke', version: 4, exported: new Date().toISOString(), data: App.S }, null, 1)], { type: 'application/json' });
  var url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = 'italiano-con-luke-backup-' + U.today() + '.json'; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
};
App.importData = function (file) {
  var fr = new FileReader();
  fr.onload = function () {
    try {
      var o = JSON.parse(fr.result), d = o && o.data;
      if (!o || o.app !== 'Italiano con Luke' || !d || typeof d.lessons !== 'object') {
        /* accept a backup from the previous version (progress object) */
        if (o && o.completed) { localStorage.setItem('italiano_luke_v3', JSON.stringify(o)); localStorage.removeItem('italiano_luke_v4'); location.reload(); return; }
        throw new Error('This file is not an Italiano con Luke backup.');
      }
      if (!confirm('Replace the progress on this device with the backup from ' + (o.exported ? U.fmtDate(o.exported) : 'the file') + '?')) return;
      localStorage.setItem('italiano_luke_v4', JSON.stringify(d)); location.reload();
    } catch (e) { alert('Import failed: ' + e.message); }
  };
  fr.readAsText(file);
};
App.applyTheme = function () { var t = S().settings.theme; if (t === 'auto') document.documentElement.removeAttribute('data-theme'); else document.documentElement.setAttribute('data-theme', t); };
})();
