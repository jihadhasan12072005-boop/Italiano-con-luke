/* Italiano con Luke — core: utilities, storage, speech, images, icons */
(function () {
'use strict';
var App = window.App = window.App || {};
App.LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1'];
App.LEVEL_NAMES = { A1: 'Beginner', A2: 'Elementary', B1: 'Intermediate', B2: 'Upper Intermediate', C1: 'Advanced' };

/* ---------- utilities ---------- */
var U = App.U = {};
U.esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
/* tiny markup: **bold**, *italic* */
U.md = function (s) { return U.esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\*(.+?)\*/g, '<i>$1</i>'); };
U.attr = U.esc;
/* seeded RNG (mulberry32) */
U.rng = function (seed) { var a = seed >>> 0; return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; };
U.hash = function (str) { var h = 2166136261; str = String(str); for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; };
U.shuffle = function (arr, rnd) { var a = arr.slice(); rnd = rnd || Math.random; for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; };
U.pick = function (arr, rnd) { return arr[Math.floor((rnd || Math.random)() * arr.length)]; };
U.uniq = function (arr) { var s = {}, out = []; arr.forEach(function (x) { var k = typeof x === 'string' ? x : JSON.stringify(x); if (!s[k]) { s[k] = 1; out.push(x); } }); return out; };
U.today = function (d) { d = d || new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); };
U.dayDiff = function (a, b) { var pa = a.split('-'), pb = b.split('-'); return Math.round((Date.UTC(pb[0], pb[1] - 1, pb[2]) - Date.UTC(pa[0], pa[1] - 1, pa[2])) / 864e5); };
U.addDays = function (key, n) { var p = key.split('-'); var d = new Date(+p[0], p[1] - 1, +p[2] + n); return U.today(d); };
U.fmtDate = function (ts) { try { return new Date(ts).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }); } catch (e) { return ''; } };
U.fmtTime = function (ts) { try { return new Date(ts).toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }); } catch (e) { return ''; } };
U.pct = function (a, b) { return b ? Math.round(a / b * 100) : 0; };
U.clamp = function (x, a, b) { return Math.max(a, Math.min(b, x)); };
/* normalise for answer comparison */
U.norm = function (s) {
  return String(s || '').toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”«»"]/g, '').replace(/[.,!?;:¿¡()\[\]—–-]/g, ' ').replace(/\s+/g, ' ').trim();
};
U.deaccent = function (s) { return String(s).normalize('NFD').replace(/[̀-ͯ]/g, ''); };
U.dur = function (ms) { var s = Math.round(ms / 1000), m = Math.floor(s / 60); return m ? m + ' min ' + (s % 60) + ' s' : s + ' s'; };

/* ---------- toast & confetti ---------- */
U.toast = function (msg) {
  var t = document.getElementById('toast'); if (!t) return;
  t.textContent = msg; t.classList.add('show'); clearTimeout(U._tt);
  U._tt = setTimeout(function () { t.classList.remove('show'); }, 2600);
};
U.confetti = function () {
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var box = document.createElement('div'); box.className = 'confetti';
  var cols = ['#14533f', '#c25a3a', '#c99a3d', '#2c5d8a', '#e9c46a', '#f28482'];
  for (var i = 0; i < 70; i++) { var p = document.createElement('i'); p.style.left = Math.random() * 100 + '%'; p.style.background = cols[i % cols.length]; p.style.animationDelay = Math.random() * .6 + 's'; p.style.animationDuration = 1.4 + Math.random() * 1.2 + 's'; box.appendChild(p); }
  document.body.appendChild(box); setTimeout(function () { box.remove(); }, 3200);
};

/* ---------- storage ---------- */
var KEY = 'italiano_luke_v4';
var OLD_KEY = 'italiano_luke_v3';
var OLD_ADV = 'italiano_luke_adventures_v1';
function blank() {
  return {
    v: 4, created: Date.now(), level: 'A1', name: 'Luke',
    lessons: {}, exams: {}, mistakes: {}, mastered: {}, cards: {}, adv: {}, days: {}, xp: 0,
    daily: {}, ach: {}, stats: { answered: 0, correct: 0, skills: {} }, assess: {}, culture: {}, expr: {},
    speak: { tries: 0, good: 0 }, legacy: null, active: null,
    settings: { rate: 0.92, voice: '', examMode: 'exam', theme: 'auto', dailyGoal: 50 }
  };
}
/* Old (build 06) lesson indices → new lesson ids, so earlier work is recognised. */
var LEGACY_MAP = {
  A1: ['a1-01', 'a1-01', 'a1-03', 'a1-06', 'a1-13', 'a1-21', 'a1-08', 'a1-15', 'a1-16', 'a1-21', 'a1-19', null, 'a1-06', 'a1-08', 'a1-09', 'a1-09', 'a1-12', 'a1-11', 'a1-16', 'a1-19', 'a1-18', null, 'a1-12', 'a1-13', 'a1-14', 'a1-14', 'a1-18', 'a1-11', 'a1-15', 'a1-16', 'a1-22', 'a1-22', null, null],
  A2: ['a2-01', 'a2-02', 'a2-04', 'a2-08', 'a2-09', 'a2-12', 'a2-06', 'a2-22', 'a2-10', null, null, null, 'a2-01', 'a2-02', 'a2-04', 'a2-06', 'a2-07', 'a2-12', 'a2-08', 'a2-09', 'a2-16', null, 'a2-04', 'a2-05', 'a2-08', 'a2-09', 'a2-07', 'a2-14', 'a2-12', 'a2-13', 'a2-03', 'a2-10', 'a2-16', null],
  B1: ['b1-19', 'b1-06', 'b1-02', 'b1-16', 'b1-01', null, null, 'b1-15', 'b1-19', null, 'b1-07', null, null, 'b1-02', 'b1-19', 'b1-08', 'b1-12', 'b1-11', 'b1-16', 'b1-20', null, null, 'b1-03', 'b1-05', 'b1-07', 'b1-08', 'b1-11', 'b1-10', 'b1-09', 'b1-12', 'b1-01', 'b1-16', 'b1-20', null],
  B2: ['b2-11', 'b2-04', 'b2-19', 'b2-07', 'b2-19', 'b2-15', 'b2-16', null, null, 'b2-02', 'b2-14', null, 'b2-01', 'b2-02', 'b2-04', null, 'b2-14', 'b2-11', 'b2-16', 'b2-07', 'b2-19', null, 'b2-03', 'b2-04', 'b2-04', 'b2-11', null, 'b2-10', 'b2-08', 'b2-14', 'b2-15', null, null, null]
};
function migrate(s) {
  /* v3 lessons/exams from the previous build — never deleted, copied into s.legacy */
  try {
    var old = JSON.parse(localStorage.getItem(OLD_KEY) || 'null');
    if (old && typeof old === 'object') {
      s.legacy = { completed: old.completed || {}, exams: old.exams || {}, notes: old.notes || {}, reviews: old.reviews || [], importedAt: Date.now() };
      Object.keys(old.completed || {}).forEach(function (k) {
        if (!old.completed[k]) return; var p = k.split('-'), lv = p[0], i = +p[1];
        var id = LEGACY_MAP[lv] && LEGACY_MAP[lv][i];
        if (id && !s.lessons[id]) s.lessons[id] = { done: true, legacy: true, at: Date.now() };
      });
    }
  } catch (e) { }
  try {
    var adv = JSON.parse(localStorage.getItem(OLD_ADV) || 'null');
    if (adv && typeof adv === 'object') Object.keys(adv).forEach(function (k) {
      var a = adv[k] || {}; s.adv[k] = { finished: !!a.finished, best: a.best || a.points || 0, legacy: true, plays: a.finished ? 1 : 0 };
    });
  } catch (e) { }
  return s;
}
function load() {
  var s = null;
  try { s = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { s = null; }
  if (!s || typeof s !== 'object') { s = migrate(blank()); App._fresh = true; }
  var b = blank();
  Object.keys(b).forEach(function (k) { if (s[k] === undefined || s[k] === null && b[k] !== null) s[k] = b[k]; });
  Object.keys(b.settings).forEach(function (k) { if (s.settings[k] === undefined) s.settings[k] = b.settings[k]; });
  if (!s.stats.skills) s.stats.skills = {};
  return s;
}
App.S = load();
App.storageOK = true;
App.save = function () {
  try { localStorage.setItem(KEY, JSON.stringify(App.S)); App.storageOK = true; }
  catch (e) {
    App.storageOK = false;
    /* storage full: trim oldest exam attempt details, then retry once */
    try { Object.keys(App.S.exams).forEach(function (k) { var a = App.S.exams[k].attempts || []; a.forEach(function (x, i) { if (i > 0) delete x.items; }); }); localStorage.setItem(KEY, JSON.stringify(App.S)); App.storageOK = true; } catch (e2) { U.toast('Could not save progress: browser storage is unavailable.'); }
  }
};
if (App._fresh) App.save();
/* save on page hide as a safety net */
window.addEventListener('pagehide', function () { App.save(); });
document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') App.save(); });
/* ask the browser to keep our storage (best effort, mostly Chrome/Android) */
try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { }

/* ---------- activity, xp, streak ---------- */
App.activity = function (xp) {
  var S = App.S, d = U.today();
  S.days[d] = (S.days[d] || 0) + (xp || 0);
  S.xp = (S.xp || 0) + (xp || 0);
  App.save();
};
App.streak = function () {
  var S = App.S, d = U.today(), n = 0;
  if (!S.days[d]) d = U.addDays(d, -1);
  while (S.days[d] !== undefined) { n++; d = U.addDays(d, -1); }
  return n;
};
App.bestStreak = function () {
  var keys = Object.keys(App.S.days).sort(), best = 0, run = 0, prev = null;
  keys.forEach(function (k) { run = prev && U.dayDiff(prev, k) === 1 ? run + 1 : 1; best = Math.max(best, run); prev = k; });
  return best;
};
App.record = function (skill, ok) {
  var st = App.S.stats; st.answered++; if (ok) st.correct++;
  var sk = st.skills[skill] || (st.skills[skill] = [0, 0]); sk[1]++; if (ok) sk[0]++;
};

/* ---------- mistakes ---------- */
App.addMistake = function (item, chosen, src) {
  if (!item || !item.id || item.noMistake) return;
  var S = App.S, m = S.mistakes[item.id];
  var snap = { type: item.type, prompt: item.prompt, sub: item.sub || '', opts: item.opts || null, answer: item.answer, answers: item.answers || null, why: item.why || '', passage: item.passage || '', audio: item.audio || '', words: item.words || null, en: item.en || '', gen: item.gen || null, hint: item.hint || '' };
  if (m) { m.wrong++; m.stage = 0; m.last = Date.now(); m.due = Date.now(); m.chosen = chosen; m.item = snap; }
  else S.mistakes[item.id] = { id: item.id, item: snap, chosen: chosen, level: item.level || '', skill: item.skill || 'grammar', topic: item.topic || '', src: src || '', first: Date.now(), last: Date.now(), wrong: 1, stage: 0, due: Date.now(), reviews: 0 };
  delete S.mastered[item.id];
};

/* ---------- images ---------- */
var IMG = 'https://images.unsplash.com/';
App.PHOTOS = {
  rome: { u: 'photo-1552832230-c0197dd311b5', alt: 'The Colosseum in Rome' },
  venice: { u: 'photo-1514890547357-a9ee288728e0', alt: 'Gondolas on a canal in Venice' },
  florence: { u: 'photo-1541370976299-4d24ebbc9077', alt: 'Florence and its Duomo' },
  tuscany: { u: 'photo-1541370976299-4d24ebbc9077', alt: 'Florence, Tuscany' },
  milan: { u: 'photo-1520440229-6469a149ac59', alt: 'Milan' },
  cinque: { u: 'photo-1516483638261-f4dbaf036963', alt: 'Manarola, Cinque Terre' },
  amalfi: { u: 'photo-1533105079780-92b9be482077', alt: 'The Italian coast' },
  naples: { u: 'photo-1533105079780-92b9be482077', alt: 'The coast of Campania' },
  sicily: { u: '', alt: 'Sicily' }
};
App.photo = function (key, cls, w) {
  var p = App.PHOTOS[key] || App.PHOTOS.rome; w = w || 900;
  var img = p.u ? '<img loading="lazy" decoding="async" alt="' + U.attr(p.alt) + '" src="' + IMG + p.u + '?auto=format&fit=crop&w=' + w + '&q=80" onload="this.classList.add(\'ld\')" onerror="this.remove()">' : '';
  return '<div class="ph ph-' + (App.PHOTOS[key] ? key : 'rome') + ' ' + (cls || '') + '" role="img" aria-label="' + U.attr(p.alt) + '">' + img + '</div>';
};

/* ---------- icons (inline SVG, stroke) ---------- */
var P = {
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  learn: '<path d="M2 6.5C5 5 8.5 5 12 7c3.5-2 7-2 10-.5V19c-3-1.5-6.5-1.5-10 .5-3.5-2-7-2-10-.5z"/><path d="M12 7v12.5"/>',
  practice: '<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/><circle cx="12" cy="12" r="3.2"/>',
  map: '<path d="M9 4 3 6.5v13.5l6-2.5 6 2.5 6-2.5V4l-6 2.5z"/><path d="M9 4v13.5M15 6.5V20"/>',
  exam: '<rect x="4" y="3" width="16" height="18" rx="2.5"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  back: '<path d="M15 5 8 12l7 7"/>',
  next: '<path d="m9 5 7 7-7 7"/>',
  play: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  flame: '<path d="M12 22c4 0 7-2.8 7-7 0-3.5-2.2-6-4-8 0 2.5-1.5 4-3 4 .5-3-1-6-4-9 0 4-5 6.5-5 13 0 4.2 3.5 7 9 7z"/>',
  cards: '<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  ear: '<path d="M6 8.5a6 6 0 1 1 12 0c0 3.5-3 4.5-3.5 7.5-.4 2.5-2 4-4 4s-3-1.5-3-3"/><path d="M9 9a3 3 0 0 1 6 0"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.8-4M4 4v4h4M4 13a8 8 0 0 0 14.8 4M20 20v-4h-4"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
  book: '<path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/><path d="M18 20h2V6"/>',
  pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  heart: '<path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
  upload: '<path d="M12 21V9M7 14l5-5 5 5M4 3h16"/>',
  snail: '<path d="M3 18h13a5 5 0 1 0-5-5c0 1.7 1.3 3 3 3a1.5 1.5 0 0 0 0-3"/><path d="M16 18l4-6M19 9l1-3M17 10l-1-3"/>'
};
App.icon = function (n) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[n] || '') + '</svg>'; };

/* ---------- speech synthesis ---------- */
var Sp = App.Speech = { voices: [], voice: null, ok: 'speechSynthesis' in window };
function rankVoice(v) {
  var n = (v.name + ' ' + v.voiceURI).toLowerCase(), r = 0;
  if (/natural|neural|online|premium|enhanced|siri|wavenet/.test(n)) r += 50;
  if (/google/.test(n)) r += 30;
  if (/alice|federica|paola|luca|elsa|isabella|diego|giorgio|emma|bianca|cosimo|benedetta/.test(n)) r += 15;
  if (/compact|espeak/.test(n)) r -= 40;
  if (/^it[-_]it/i.test(v.lang)) r += 5;
  return r;
}
Sp.load = function () {
  if (!Sp.ok) return;
  var all = speechSynthesis.getVoices() || [];
  Sp.voices = all.filter(function (v) { return /^it([-_]|$)/i.test(v.lang); }).sort(function (a, b) { return rankVoice(b) - rankVoice(a); });
  var want = App.S.settings.voice;
  Sp.voice = Sp.voices.filter(function (v) { return v.voiceURI === want; })[0] || Sp.voices[0] || null;
};
if (Sp.ok) { Sp.load(); try { speechSynthesis.addEventListener('voiceschanged', Sp.load); } catch (e) { speechSynthesis.onvoiceschanged = Sp.load; } setTimeout(Sp.load, 700); setTimeout(Sp.load, 2500); }
Sp.speak = function (text, opts) {
  opts = opts || {};
  if (!Sp.ok) { U.toast('Audio is not available in this browser. Try Safari, Chrome or Edge.'); return; }
  if (!Sp.voices.length) Sp.load();
  try { speechSynthesis.cancel(); } catch (e) { }
  var rate = opts.slow ? 0.68 : (App.S.settings.rate || 0.92);
  /* split long text into sentences (Chrome cuts long utterances) */
  var parts = String(text).replace(/\s+/g, ' ').match(/[^.!?…]+[.!?…]*\s*/g) || [String(text)];
  var chunks = [], cur = '';
  parts.forEach(function (p) { if ((cur + p).length > 180 && cur) { chunks.push(cur); cur = p; } else cur += p; });
  if (cur.trim()) chunks.push(cur);
  var btn = opts.btn; if (btn) btn.classList.add('playing');
  /* small delay after cancel() avoids a known Chrome/Android race */
  setTimeout(function () {
    chunks.forEach(function (c, i) {
      var u = new SpeechSynthesisUtterance(c.trim());
      u.lang = 'it-IT'; u.rate = rate; u.pitch = 1;
      if (Sp.voice) u.voice = Sp.voice;
      if (i === chunks.length - 1) { u.onend = u.onerror = function () { if (btn) btn.classList.remove('playing'); if (opts.onend) opts.onend(); }; }
      speechSynthesis.speak(u);
    });
    /* iOS sometimes pauses the queue; resume nudges it */
    try { speechSynthesis.resume(); } catch (e) { }
  }, 60);
};

/* ---------- speech recognition ---------- */
var Rec = App.Rec = {};
Rec.Cls = window.SpeechRecognition || window.webkitSpeechRecognition || null;
Rec.supported = !!Rec.Cls;
Rec.canRecord = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
/* listen(): tolerant of pauses — keeps listening (restarting if the engine stops on silence)
   until the user presses stop, ~3.5 s pass after the last words, or 25 s total. */
Rec.listen = function (h) {
  if (!Rec.supported) { h.onerror && h.onerror('unsupported'); return null; }
  var r, finalText = '', interim = '', stopped = false, started = Date.now(), lastHeard = 0, timer;
  function make() {
    r = new Rec.Cls(); r.lang = 'it-IT'; r.interimResults = true; r.maxAlternatives = 3;
    try { r.continuous = true; } catch (e) { }
    r.onresult = function (ev) {
      interim = '';
      for (var i = ev.resultIndex; i < ev.results.length; i++) {
        var res = ev.results[i];
        if (res.isFinal) finalText += (finalText ? ' ' : '') + res[0].transcript.trim(); else interim += res[0].transcript;
      }
      lastHeard = Date.now();
      h.onupdate && h.onupdate((finalText + ' ' + interim).trim());
    };
    r.onerror = function (ev) {
      if (ev.error === 'no-speech' || ev.error === 'aborted') return; /* restart handled in onend */
      stopped = true; clearInterval(timer); h.onerror && h.onerror(ev.error);
    };
    r.onend = function () {
      if (stopped) return;
      if (Date.now() - started < 25000 && !(lastHeard && Date.now() - lastHeard > 3500)) { try { make(); r.start(); } catch (e) { finish(); } }
      else finish();
    };
  }
  function finish() { if (finish.done) return; finish.done = true; stopped = true; clearInterval(timer); try { r.stop(); } catch (e) { } h.ondone && h.ondone((finalText + ' ' + interim).trim()); }
  make();
  try { r.start(); } catch (e) { h.onerror && h.onerror('start'); return null; }
  timer = setInterval(function () {
    if (lastHeard && Date.now() - lastHeard > 3500) finish();
    else if (Date.now() - started > 25000) finish();
  }, 400);
  return { stop: finish, abort: function () { stopped = true; clearInterval(timer); try { r.abort(); } catch (e) { } } };
};
/* word-level comparison */
Rec.compare = function (target, heard) {
  function words(s) { return U.deaccent(U.norm(s)).replace(/'/g, ' ').split(' ').filter(Boolean); }
  var t = words(target), hw = words(heard), pool = hw.slice(), hit = 0;
  var marks = t.map(function (w) { var i = pool.indexOf(w); if (i > -1) { pool.splice(i, 1); hit++; return [w, 1]; } return [w, 0]; });
  return { score: t.length ? hit / t.length : 0, marks: marks };
};
/* simple recorder fallback */
Rec.record = function (h) {
  navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
    var chunks = [], mr;
    try { mr = new MediaRecorder(stream); } catch (e) { h.onerror && h.onerror('recorder'); return; }
    mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
    mr.onstop = function () { stream.getTracks().forEach(function (t) { t.stop(); }); var blob = new Blob(chunks, { type: mr.mimeType || 'audio/mp4' }); h.ondone && h.ondone(URL.createObjectURL(blob)); };
    mr.start(); h.onstart && h.onstart(function () { try { mr.stop(); } catch (e) { } });
  }).catch(function (e) { h.onerror && h.onerror(e && e.name === 'NotAllowedError' ? 'not-allowed' : 'mic'); });
};

/* ---------- content registry ---------- */
App.lessons = function (lv) { return (window.IT_LESSONS && IT_LESSONS[lv]) || []; };
App.allLessons = function () { var out = []; App.LEVELS.forEach(function (lv) { App.lessons(lv).forEach(function (l, i) { l.level = lv; l.idx = i; out.push(l); }); }); return out; };
App.lessonById = function (id) { var lv = id.slice(0, 2).toUpperCase(); var a = App.lessons(lv); for (var i = 0; i < a.length; i++) if (a[i].id === id) { a[i].level = lv; a[i].idx = i; return a[i]; } return null; };
App.lessonsDone = function (lv) { var n = 0; App.lessons(lv).forEach(function (l) { if (App.S.lessons[l.id] && App.S.lessons[l.id].done) n++; }); return n; };
})();
