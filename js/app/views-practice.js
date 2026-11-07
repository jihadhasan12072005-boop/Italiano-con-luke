/* Italiano con Luke — practice: speaking, mistakes review, flashcards (SRS), listening, daily, achievements */
(function () {
'use strict';
var App = window.App, U = App.U, ic = App.icon, V = App.V, S = function () { return App.S; };

/* ================= Speaking widget ================= */
var SP = App.SpeakUI = { t: {}, live: null, rec: null };
SP.block = function (target, key) {
  SP.t[key] = target;
  var h = '<div class="spk" data-spk="' + key + '">';
  if (App.Rec.supported) {
    h += '<button class="mic" data-mic="' + key + '" aria-label="Start speaking">' + ic('mic') + '</button><p class="small muted" style="text-align:center;margin:-6px 0 8px" id="sphint-' + key + '">Tap the microphone and say the sentence. Take your time — pauses are fine.</p><div class="heard" id="heard-' + key + '" aria-live="polite"></div><div id="spres-' + key + '"></div>';
  } else if (App.Rec.canRecord) {
    h += '<div class="notice">Speech recognition isn’t available in this browser, so record yourself and compare with the model.</div><button class="mic" data-recmic="' + key + '" aria-label="Record">' + ic('mic') + '</button><p class="small muted" style="text-align:center" id="sphint-' + key + '">Tap to record, tap again to stop.</p><div id="spres-' + key + '"></div>';
  } else {
    h += '<div class="notice">Your browser can’t use the microphone here. Listen, repeat aloud three times, then rate yourself honestly.</div><div class="btns"><button class="btn soft sm" data-selfrate="' + key + '|1">I said it well</button><button class="btn line sm" data-selfrate="' + key + '|0">Needs more practice</button></div><div id="spres-' + key + '"></div>';
  }
  return h + '</div>';
};
SP.stopAll = function () { if (SP.live) { try { SP.live.abort(); } catch (e) { } SP.live = null; } if (SP.rec) { try { SP.rec(); } catch (e) { } SP.rec = null; } };
SP.mic = function (key, btn) {
  if (SP.live) { SP.live.stop(); return; }
  var target = SP.t[key], heard = document.getElementById('heard-' + key), res = document.getElementById('spres-' + key), hint = document.getElementById('sphint-' + key);
  try { speechSynthesis.cancel(); } catch (e) { }
  btn.classList.add('on'); heard.textContent = '…'; res.innerHTML = ''; if (hint) hint.textContent = 'Listening… tap again when you have finished.';
  SP.live = App.Rec.listen({
    onupdate: function (t) { heard.textContent = t; },
    ondone: function (t) {
      SP.live = null; btn.classList.remove('on'); if (hint) hint.textContent = 'Tap the microphone to try again.';
      if (!t) { heard.textContent = ''; res.innerHTML = '<div class="fb no"><h4>I didn’t catch anything</h4><p>Check that the microphone is allowed, speak a little closer, and try again.</p></div>'; return; }
      var c = App.Rec.compare(target, t), p = Math.round(c.score * 100);
      S().speak.tries++; if (p >= 80) S().speak.good++; App.activity(p >= 80 ? 3 : 1); App.Ach.check();
      heard.innerHTML = c.marks.map(function (m) { return '<span class="' + (m[1] ? 'wm' : 'wx') + '">' + U.esc(m[0]) + '</span>'; }).join(' ');
      res.innerHTML = '<div class="fb ' + (p >= 80 ? 'ok' : 'no') + '"><h4>' + (p >= 95 ? 'Perfetto! ' : p >= 80 ? 'Molto bene! ' : p >= 50 ? 'Quasi! ' : 'Let’s try again. ') + p + '% of the words recognised</h4><p class="small">I heard: “<span lang="it">' + U.esc(t) + '</span>”. ' + (p < 100 ? 'Words underlined in red were not recognised — listen to the model and focus on them.' : '') + '</p><p class="small muted">Recognition depends on your device and microphone; treat it as a guide, not a judge.</p></div>';
    },
    onerror: function (e) {
      SP.live = null; btn.classList.remove('on'); heard.textContent = '';
      var msg = e === 'not-allowed' || e === 'service-not-allowed' ? 'Microphone access was blocked. Allow the microphone for this site in your browser settings (on iPhone: Settings → Safari → Microphone), then try again.' : e === 'network' ? 'Speech recognition needs an internet connection in this browser.' : e === 'audio-capture' ? 'No microphone was found.' : 'Speech recognition stopped unexpectedly (' + e + ').';
      res.innerHTML = '<div class="fb no"><h4>Microphone unavailable</h4><p>' + msg + '</p><p class="small">Fallback: listen to the model, repeat it aloud three times, and continue.</p></div>';
    }
  });
};
SP.recmic = function (key, btn) {
  if (SP.rec) { SP.rec(); SP.rec = null; btn.classList.remove('on'); return; }
  var res = document.getElementById('spres-' + key), target = SP.t[key];
  App.Rec.record({
    onstart: function (stop) { SP.rec = stop; btn.classList.add('on'); setTimeout(function () { if (SP.rec === stop) { stop(); SP.rec = null; btn.classList.remove('on'); } }, 15000); },
    ondone: function (url) { btn.classList.remove('on'); S().speak.tries++; App.activity(1); res.innerHTML = '<div class="fb ok"><h4>Compare yourself with the model</h4><audio controls src="' + url + '" style="width:100%;margin-top:6px"></audio><div class="row" style="margin-top:8px">' + V.say(target, 'Model') + V.saySlow(target) + '</div></div>'; },
    onerror: function (e) { btn.classList.remove('on'); res.innerHTML = '<div class="fb no"><h4>Recording unavailable</h4><p>' + (e === 'not-allowed' ? 'Microphone permission was denied.' : 'This device could not start recording.') + ' Listen and repeat aloud instead.</p></div>'; }
  });
};

/* ================= Mistakes review ================= */
var R = App.Review = {};
var STAGE_GAP = [10 * 60e3, 12 * 3600e3, 2 * 86400e3];
R.list = function () { return Object.keys(S().mistakes).map(function (k) { return S().mistakes[k]; }); };
R.dueCount = function () { var n = Date.now(); return R.list().filter(function (m) { return m.due <= n; }).length; };
R.build = function (m) {
  var it = m.item, base = { id: m.id, mid: m.id, level: m.level, topic: m.topic, skill: m.skill, why: it.why, passage: it.passage, audio: it.audio, en: it.en };
  var origNote = m.chosen ? 'Last time you answered “' + m.chosen + '”. ' : '';
  base.why = origNote + (it.why || '');
  var ans = it.answer, words = String(ans || '').split(/\s+/).length;
  if (m.stage >= 2 && it.gen && App.Gen && App.Gen.variant) {
    var v = App.Gen.variant(it.gen, m.reviews + 7, m.id);
    if (v) { v.id = m.id; v.mid = m.id; v.why = (v.why || '') + ' (A new example of the same rule you got wrong before.)'; return v; }
  }
  if (m.stage >= 1 && (it.type === 'mc') && !it.audio && !it.passage && it.prompt.indexOf('___') > -1 && words <= 3 && /^[^…]+$/.test(ans)) {
    return Object.assign(base, { type: 'fill', prompt: it.prompt, answers: [ans], answer: ans, hint: m.stage === 1 ? 'starts with “' + ans.slice(0, 2) + '…”' : '' });
  }
  if (m.stage >= 1 && it.type === 'mc' && !it.passage && !it.audio && words >= 3 && words <= 10 && /[a-zàèéìòù]/i.test(ans) && /^(How do you say|Choose the Italian|Translate)/i.test(it.prompt)) {
    return Object.assign(base, { type: 'order', prompt: 'Build the Italian sentence', en: it.sub ? it.sub.replace(/[“”]/g, '') : '', answer: ans });
  }
  if (it.type === 'fill' || it.type === 'dict') return Object.assign(base, { type: it.type, prompt: it.prompt, answers: it.answers || [ans], answer: ans, hint: m.stage === 0 ? it.hint : '' });
  if (it.type === 'order') return Object.assign(base, { type: 'order', prompt: it.prompt, en: it.en, answer: ans });
  return Object.assign(base, { type: 'mc', prompt: it.prompt, sub: it.sub, opts: it.opts, answer: ans });
};
R.pass = function (it) {
  var m = S().mistakes[it.mid || it.id]; if (!m) return;
  m.reviews++; m.stage++; m.last = Date.now();
  if (m.stage >= 3) { S().mastered[m.id] = { at: Date.now(), topic: m.topic, prompt: m.item.prompt, answer: m.item.answer }; delete S().mistakes[m.id]; App.activity(5); U.toast('Mastered! One mistake fewer.'); }
  else m.due = Date.now() + STAGE_GAP[m.stage];
};
R.fail = function (it, val) {
  var m = S().mistakes[it.mid || it.id]; if (!m) return;
  m.wrong++; m.reviews++; m.stage = 0; m.chosen = val; m.last = Date.now(); m.due = Date.now() + STAGE_GAP[0];
};
R.start = function (all) {
  var now = Date.now(), list = R.list().filter(function (m) { return all || m.due <= now; }).sort(function (a, b) { return a.due - b.due || b.wrong - a.wrong; });
  /* avoid many near-identical items: max 2 per topic per session */
  var per = {}, pick = [];
  list.forEach(function (m) { var k = m.topic || m.id; per[k] = (per[k] || 0) + 1; if (per[k] <= 2 && pick.length < 12) pick.push(m); });
  if (pick.length < 12) list.forEach(function (m) { if (pick.indexOf(m) < 0 && pick.length < 12) pick.push(m); });
  if (!pick.length) { U.toast('Nothing to review right now.'); return; }
  App.Quiz.start({ id: 'review', kind: 'review', title: 'Smart review', items: pick.map(R.build), back: '#/mistakes' });
};
App.Finishers.review = function (s) { s.extraMsg = 'Mistakes move up a level each time you get them right (choose → type → apply to a new example). After three successful reviews spread over several days, they are marked as mastered.'; };
V.mistakes = function () {
  var list = R.list().sort(function (a, b) { return b.last - a.last; }), due = R.dueCount(), h = V.top('My mistakes', '#/practice');
  var mast = Object.keys(S().mastered).length;
  h += '<div class="card tint"><div class="row between"><div><span class="eyebrow">Smart practice</span><h3 style="margin-top:4px">' + list.length + ' to fix · ' + mast + ' mastered</h3></div><div class="ring" style="--p:' + U.pct(mast, mast + list.length) + '"><span>' + U.pct(mast, mast + list.length) + '%</span></div></div><p class="small">Only questions you actually answered wrong are saved here. Each mistake is reviewed in three steps that get harder: <b>recognise</b> the answer, <b>produce</b> it yourself, then <b>apply</b> the rule in a new sentence. Reviews are spaced out so the rule sticks.</p>';
  h += '<div class="btns"><button class="btn" data-act="review"' + (due ? '' : ' disabled') + '>' + ic('target') + ' Review ' + (due ? due + ' due now' : '(nothing due)') + '</button>' + (list.length && !due ? '<button class="btn soft" data-act="reviewall">Practise anyway</button>' : '') + '</div></div>';
  if (!list.length) return h + '<div class="card empty"><div class="big">🎯</div><h3>No mistakes saved</h3><p class="muted">When you answer something wrong in a lesson, exam or challenge, it will appear here with an explanation.</p></div>';
  var stageName = ['Step 1 · recognise', 'Step 2 · produce', 'Step 3 · apply'];
  list.forEach(function (m) {
    var it = m.item;
    h += '<div class="card flat" style="padding:16px"><div class="row between"><span class="pill ' + (m.due <= Date.now() ? 't' : 'n') + '">' + (m.due <= Date.now() ? 'Due now' : 'Next: ' + U.fmtTime(m.due)) + '</span><span class="small muted">' + U.esc(m.level || '') + ' · ' + stageName[Math.min(2, m.stage)] + ' · wrong ×' + m.wrong + '</span></div><div style="font-weight:600;margin-top:8px">' + U.md(it.prompt) + (it.sub ? ' <span lang="it">' + U.esc(it.sub) + '</span>' : '') + '</div>' + (m.chosen ? '<div class="small">You answered: <span style="color:var(--bad)" lang="it">' + U.esc(m.chosen) + '</span></div>' : '') + '<details class="fold"><summary>Show answer & explanation</summary><p>Correct: <b lang="it">' + U.esc(it.answer) + '</b></p><p class="small">' + U.md(it.why || '') + '</p></details></div>';
  });
  return h;
};
V.review = function () { R.start(false); return ''; };

/* ================= Flashcards (spaced repetition) ================= */
var SRS = App.SRS = { INT: [0, 1, 2, 4, 8, 16, 35, 75] };
SRS.deck = function (lv) {
  var out = [], seen = {};
  App.lessons(lv).forEach(function (l) { (l.voc || []).forEach(function (v) { var id = 'v:' + v[0]; if (!seen[id]) { seen[id] = 1; out.push({ id: id, it: v[0], en: v[1], src: l.t }); } }); });
  ((window.IT_VOCAB || {})[lv] || []).forEach(function (g) { g.w.forEach(function (v) { var id = 'v:' + v[0]; if (!seen[id]) { seen[id] = 1; out.push({ id: id, it: v[0], en: v[1], src: g.t }); } }); });
  return out;
};
SRS.dueCount = function (lv) { var n = Date.now(), c = 0; SRS.deck(lv).forEach(function (d) { var st = S().cards[d.id]; if (st && st.due <= n) c++; }); return c; };
SRS.session = function (lv) {
  var n = Date.now(), deck = SRS.deck(lv), due = [], fresh = [];
  deck.forEach(function (d) { var st = S().cards[d.id]; if (st) { if (st.due <= n) due.push(d); } else fresh.push(d); });
  due.sort(function (a, b) { return S().cards[a.id].due - S().cards[b.id].due; });
  var newToday = S().cards._new && S().cards._new.d === U.today() ? S().cards._new.n : 0;
  var room = Math.max(0, 12 - newToday);
  return due.slice(0, 30).concat(fresh.slice(0, Math.min(room, Math.max(4, 20 - due.length))));
};
SRS.rate = function (card, r) {
  var c = S().cards, st = c[card.id];
  if (!st) { st = c[card.id] = { b: 0, due: 0, n: 0, l: 0 }; var nw = c._new && c._new.d === U.today() ? c._new : (c._new = { d: U.today(), n: 0 }); nw.n++; }
  st.n++;
  if (r === 0) { st.b = 0; st.l++; st.due = Date.now() + 60e3; }
  else { st.b = r === 1 ? Math.max(1, st.b) : Math.min(SRS.INT.length - 1, st.b + (r === 3 ? 2 : 1)); var days = SRS.INT[st.b] * (r === 1 ? .6 : 1); st.due = Date.now() + Math.max(.5, days) * 864e5 - 3600e3; }
  App.activity(r ? 2 : 0); App.save();
};
var FL = { lv: null, q: [], i: 0, flip: false, rev: false, done: 0 };
V.flash = function (lv) {
  lv = App.LEVELS.indexOf(lv) > -1 ? lv : S().level;
  if (FL.lv !== lv || !FL.q.length) { FL.lv = lv; FL.q = SRS.session(lv); FL.i = 0; FL.flip = false; FL.done = 0; }
  var deck = SRS.deck(lv), known = deck.filter(function (d) { return S().cards[d.id] && S().cards[d.id].b >= 3; }).length, h = V.top('Flashcards · ' + lv, '#/practice');
  h += V.levels(lv, 'flashlv');
  h += '<div class="row between"><span class="small muted">' + deck.length + ' words · ' + known + ' well known · ' + SRS.dueCount(lv) + ' due</span><div class="seg"><button data-act="flrev" class="' + (FL.rev ? '' : 'on') + '">Italian → English</button><button data-act="flrev" class="' + (FL.rev ? 'on' : '') + '">English → Italian</button></div></div>';
  if (FL.i >= FL.q.length) {
    FL.q = [];
    return h + '<div class="card empty"><div class="big">🎉</div><h3>' + (FL.done ? 'Session complete — ' + FL.done + ' cards reviewed' : 'All caught up!') + '</h3><p class="muted">Cards come back just before you would forget them. New cards are limited to 12 per day to keep reviews manageable.</p><div class="btns"><button class="btn" data-go="#/practice">Back to practice</button></div></div>';
  }
  var c = FL.q[FL.i], st = S().cards[c.id], front = FL.rev ? c.en : c.it, back = FL.rev ? c.it : c.en;
  h += '<div class="steps">' + FL.q.slice(0, 30).map(function (_, k) { return '<i class="' + (k < FL.i ? 'on' : '') + '"></i>'; }).join('') + '</div>';
  h += '<div class="flash' + (FL.flip ? ' flip' : '') + '" data-act="flflip" role="button" tabindex="0" aria-label="Flip card"><div class="in"><div class="face"><span class="pill ' + (st ? 'n' : 'y') + '">' + (st ? 'Review' : 'New word') + '</span><div class="word-it"' + (FL.rev ? '' : ' lang="it"') + '>' + U.esc(front) + '</div><span class="small muted">' + U.esc(c.src) + '</span><span class="small muted">Tap to reveal</span></div><div class="face back"><div class="word-it"' + (FL.rev ? ' lang="it"' : '') + '>' + U.esc(back) + '</div><div class="muted">' + U.esc(front) + '</div></div></div></div>';
  h += '<div class="row" style="justify-content:center;margin-bottom:14px">' + V.say(c.it, 'Listen') + V.saySlow(c.it) + '</div>';
  if (FL.flip) h += '<div class="rate"><button class="r0" data-rate-card="0">Again<small>&lt; 1 min</small></button><button class="r1" data-rate-card="1">Hard<small>soon</small></button><button class="r2" data-rate-card="2">Good<small>' + SRS.INT[Math.min(7, (st ? st.b : 0) + 1)] + ' d</small></button><button class="r3" data-rate-card="3">Easy<small>' + SRS.INT[Math.min(7, (st ? st.b : 0) + 2)] + ' d</small></button></div>';
  else h += '<button class="btn full" data-act="flflip">Show answer</button>';
  return h;
};
App.flashRate = function (r) {
  var c = FL.q[FL.i]; SRS.rate(c, r); FL.done++;
  if (r === 0) FL.q.push(c);
  FL.i++; FL.flip = false; App.Ach.check(); App.render(true);
};
App.flashFlip = function () { FL.flip = !FL.flip; if (FL.flip && !FL.rev) { } App.render(true); };
App.flashRev = function () { FL.rev = !FL.rev; FL.flip = false; App.render(true); };
App.flashLevel = function (lv) { FL.lv = null; location.hash = '#/flash/' + lv; };

/* ================= Practice hub ================= */
V.practice = function () {
  var s = S(), h = V.top('Practice', '#/home');
  h += '<p class="muted">Short, focused sessions. Everything you do here counts towards your streak and daily goal.</p><div class="grid g2">';
  h += V.tileMini('#/daily', 'bolt', 'y', 'Daily challenge', s.daily[U.today()] ? 'Done today ✓ ' + s.daily[U.today()].score + '/' + s.daily[U.today()].total : '10 mixed questions, new every day');
  h += V.tileMini('#/mistakes', 'target', 't', 'My mistakes', R.list().length + ' saved · ' + R.dueCount() + ' due');
  h += V.tileMini('#/flash/' + s.level, 'cards', 'g', 'Vocabulary flashcards', 'Spaced repetition · ' + SRS.dueCount(s.level) + ' due');
  h += V.tileMini('#/challenge', 'trophy', 'b', 'Grammar challenges', 'Rapid drills on one rule at a time');
  h += V.tileMini('#/speak', 'mic', 't', 'Speaking studio', App.Rec.supported ? 'Speech recognition in Italian' : 'Record and compare');
  h += V.tileMini('#/listen', 'ear', 'b', 'Listening lab', 'Understand and transcribe spoken Italian');
  h += V.tileMini('#/expressions', 'chat', 'y', 'Everyday expressions', 'Phrases Italians really use');
  h += V.tileMini('#/culture', 'globe', 'g', 'Italian culture', 'Short reads with key phrases');
  return h + '</div>';
};

/* ================= Speaking studio ================= */
var SPK = { lv: null, set: [], i: 0 };
var TWISTERS = [['Trentatré trentini entrarono a Trento, tutti e trentatré trotterellando.', 'Thirty-three people from Trento entered Trento, all thirty-three trotting.'], ['Sopra la panca la capra campa, sotto la panca la capra crepa.', 'On the bench the goat lives, under the bench the goat dies.'], ['Apelle figlio di Apollo fece una palla di pelle di pollo.', 'Apelles, son of Apollo, made a ball of chicken skin.'], ['Tigre contro tigre.', 'Tiger against tiger. (Try it fast!)'], ['Chi ama il caffè ama anche la tazzina.', 'Whoever loves coffee also loves the little cup.']];
V.speak = function (lv) {
  lv = App.LEVELS.indexOf(lv) > -1 ? lv : S().level;
  if (SPK.lv !== lv) { var pool = []; App.lessons(lv).forEach(function (l) { l.ex.forEach(function (e) { pool.push(e); }); }); SPK.set = U.shuffle(pool).slice(0, 10); SPK.lv = lv; SPK.i = 0; }
  var h = V.top('Speaking studio', '#/practice') + V.levels(lv, 'speaklv');
  if (!App.Rec.supported) h += '<div class="notice">Speech recognition isn’t supported in this browser. ' + (App.Rec.canRecord ? 'You can record yourself and compare with the model voice.' : 'Use listen-and-repeat practice.') + ' For automatic feedback, try Chrome (Android/desktop) or Safari on iPhone with Siri enabled.</div>';
  var e = SPK.set[SPK.i];
  if (e) h += '<div class="qcard"><div class="qkind">Sentence ' + (SPK.i + 1) + ' of ' + SPK.set.length + '</div><div class="it-lg" lang="it" style="margin-top:8px">' + U.esc(e[0]) + '</div><div class="en">' + U.esc(e[1]) + '</div><div class="row" style="margin-top:10px">' + V.say(e[0], 'Model') + V.saySlow(e[0]) + '</div>' + SP.block(e[0], 'studio') + '<div class="btns"><button class="btn line" data-act="spkprev"' + (SPK.i ? '' : ' disabled') + '>' + ic('back') + ' Previous</button><button class="btn" data-act="spknext">' + (SPK.i < SPK.set.length - 1 ? 'Next sentence' : 'New set') + ' ' + ic('next') + '</button></div></div>';
  h += '<div class="card"><h3>Pronunciation tips</h3><ul class="small" style="padding-left:18px;line-height:1.8"><li><b>Pure vowels:</b> no gliding — <i>sono</i> is SO-no, not SOH-noh.</li><li><b>Double consonants:</b> hold them — <i>pa<b>ss</b>ata, no<b>nn</b>o, ca<b>ff</b>è</i>.</li><li><b>R:</b> a light tap of the tongue (like the tt in American “butter”); roll it in <i>rr</i>.</li><li><b>Gli / gn:</b> <i>famiglia</i> (fa-MEE-lya), <i>bagno</i> (BA-nyo).</li><li><b>Stress:</b> usually on the second-to-last syllable unless there is an accent: <i>città, perché</i>.</li></ul></div>';
  h += '<div class="card gold"><span class="eyebrow">Scioglilingua · tongue twisters</span>' + TWISTERS.map(function (t) { return '<div class="exrow"><div class="tx"><div class="it" lang="it">' + U.esc(t[0]) + '</div><div class="en">' + U.esc(t[1]) + '</div></div><div class="acts">' + V.say(t[0]) + V.saySlow(t[0]) + '</div></div>'; }).join('') + '</div>';
  return h;
};
App.speakNav = function (d) { SP.stopAll(); if (d > 0 && SPK.i >= SPK.set.length - 1) { SPK.lv = null; } else SPK.i = U.clamp(SPK.i + d, 0, SPK.set.length - 1); App.render(); };
App.drill = function (id) {
  var L = App.lessonById(id);
  var items = L.ex.map(function (e, i) { return { id: id + '-drill' + i, type: 'speak', prompt: 'Say it aloud', answer: e[0], en: e[1], noMistake: true, skill: 'speaking' }; });
  App.Quiz.start({ id: 'drill-' + id, kind: 'drill', title: 'Pronunciation · ' + L.t, items: items, back: '#/lesson/' + id });
};
App.Finishers.drill = function (s) { s.extraMsg = 'Pronunciation drill complete. Repeat it tomorrow — speaking improves with spaced repetition too.'; };

/* ================= Listening lab ================= */
V.listen = function (lv) {
  lv = App.LEVELS.indexOf(lv) > -1 ? lv : S().level;
  var h = V.top('Listening lab', '#/practice') + V.levels(lv, 'listenlv');
  h += '<div class="card"><h3>' + lv + ' listening session</h3><p class="small">10 items: hear a sentence and choose its meaning, or write exactly what you hear (dictation). Use “Slowly” as often as you like. Distractors come from the same topic, so listen carefully.</p><button class="btn full" data-listenstart="' + lv + '">' + ic('ear') + ' Start listening</button></div>';
  h += '<div class="card"><h3>Dialogues to listen to</h3><p class="small muted">Play a whole conversation first without reading, then open the transcript.</p>';
  App.lessons(lv).filter(function (l) { return l.dia && l.dia.length; }).slice(0, 12).forEach(function (l) {
    var all = l.dia.map(function (d) { return d[1]; }).join(' ');
    h += '<div class="exrow"><div class="tx"><b>' + U.esc(l.t) + '</b><details class="fold"><summary>Transcript</summary>' + l.dia.map(function (d) { return '<p class="small"><b>' + U.esc(d[0]) + ':</b> <span lang="it">' + U.esc(d[1]) + '</span><br><span class="muted">' + U.esc(d[2]) + '</span></p>'; }).join('') + '</details></div><div class="acts">' + V.say(all) + V.saySlow(all) + '</div></div>';
  });
  return h + '</div>';
};
App.listenSession = function (lv, n, seed) {
  var rnd = U.rng(seed || Date.now()), ls = App.lessons(lv), items = [];
  var picks = U.shuffle(ls, rnd).slice(0, n || 10);
  picks.forEach(function (L, k) {
    var ex = L.ex; if (!ex || ex.length < 4) return;
    var i = Math.floor(rnd() * ex.length), e = ex[i];
    var others = U.shuffle(ex.filter(function (_, j) { return j !== i; }), rnd).slice(0, 3).map(function (x) { return x[1]; });
    if (k % 3 === 2 && e[0].split(' ').length <= 9) items.push({ id: L.id + '-di' + i, type: 'dict', level: lv, topic: L.t, skill: 'listening', audio: e[0], prompt: 'Dictation: type what you hear', answer: e[0], answers: [e[0]], en: e[1], why: 'The sentence was: “' + e[0] + '” — ' + e[1] + '.' });
    else items.push({ id: L.id + '-li' + i, type: 'mc', level: lv, topic: L.t, skill: 'listening', audio: e[0], prompt: 'Listen. What does it mean?', opts: [e[1]].concat(others), answer: e[1], why: 'You heard: “' + e[0] + '”.' });
  });
  return items;
};

/* ================= Daily challenge ================= */
V.daily = function () {
  var s = S(), d = s.daily[U.today()], h = V.top('Daily challenge', '#/practice');
  h += '<div class="tile" style="cursor:default">' + App.photo(['rome', 'venice', 'florence', 'milan', 'amalfi', 'cinque'][U.hash(U.today()) % 6], '', 1200) + '<div class="tb"><span class="eyebrow">' + U.fmtDate(Date.now()) + '</span><h2>La sfida di oggi</h2><p class="small muted">10 questions at your level (' + s.level + '), mixing grammar, vocabulary, listening and sentence building. A new set every day.</p>' + (d ? '<p><b>Completed today: ' + d.score + '/' + d.total + '</b> 🎉 Come back tomorrow to keep your streak.</p>' : '') + '<div class="btns"><button class="btn" data-act="dailystart">' + ic('bolt') + (d ? ' Play again (practice)' : ' Start today’s challenge') + '</button></div></div></div>';
  var last = Object.keys(s.daily).sort().reverse().slice(0, 7);
  if (last.length) h += '<div class="card"><h3>Recent challenges</h3>' + last.map(function (k) { return '<div class="row between" style="padding:6px 0;border-bottom:1px solid var(--line)"><span>' + k + '</span><b>' + s.daily[k].score + '/' + s.daily[k].total + '</b></div>'; }).join('') + '</div>';
  return h;
};
App.dailyItems = function (lv, seed) {
  var rnd = U.rng(seed), items = [];
  if (App.Gen && App.Gen.forLevel) items = items.concat(App.Gen.forLevel(lv, 4, seed));
  var ls = App.lessons(lv), isDone = function (l) { return S().lessons[l.id] && S().lessons[l.id].done; }, done = ls.filter(isDone), pool = done.concat(ls.filter(function (l) { return !isDone(l); }).slice(0, Math.max(0, 6 - done.length)));
  var picks = U.shuffle(pool, rnd).slice(0, 4);
  picks.forEach(function (L) { var q = L.q.filter(function (x) { return x.t === 'mc' || x.t === 'fill'; }); var qi = Math.floor(rnd() * q.length); items.push(App.Quiz.fromLessonQ(L, q[qi], L.q.indexOf(q[qi]))); });
  var L2 = U.pick(pool, rnd), ord = L2.q.filter(function (x) { return x.t === 'order'; })[0]; if (ord) items.push(App.Quiz.fromLessonQ(L2, ord, L2.q.indexOf(ord)));
  items = items.concat(App.listenSession(lv, 1, seed + 3).slice(0, 1));
  items = items.filter(Boolean);
  if (items.length < 10 && App.Gen) items = items.concat(App.Gen.forLevel(lv, 10 - items.length, seed + 11));
  return U.shuffle(items, rnd).slice(0, 10);
};
App.Finishers.daily = function (s) {
  var k = U.today(), first = !S().daily[k];
  if (first) { S().daily[k] = { score: s.score, total: s.total }; App.activity(20); U.confetti(); s.extraMsg = '+20 bonus XP for today’s challenge. Your streak is safe!'; }
  else s.extraMsg = 'Extra practice round — your official score for today is ' + S().daily[k].score + '/' + S().daily[k].total + '.';
};

/* ================= Achievements ================= */
var A = App.Ach = {};
function cnt(o, f) { return Object.keys(o).filter(function (k) { return f ? f(o[k]) : true; }).length; }
function lessonsDone() { return cnt(S().lessons, function (x) { return x.done; }); }
function examCount() { var n = 0; Object.keys(S().exams).forEach(function (k) { n += (S().exams[k].attempts || []).length ? 1 : 0; }); return n; }
function examHigh(p) { return Object.keys(S().exams).some(function (k) { return S().exams[k].best >= p; }); }
A.list = [
  { id: 'first', e: '🌱', t: 'Primo passo', d: 'Complete your first lesson', f: function () { return lessonsDone() >= 1; } },
  { id: 'l5', e: '📗', t: 'Studente', d: 'Complete 5 lessons', f: function () { return lessonsDone() >= 5; } },
  { id: 'l20', e: '📚', t: 'Studioso', d: 'Complete 20 lessons', f: function () { return lessonsDone() >= 20; } },
  { id: 'l50', e: '🎓', t: 'Accademico', d: 'Complete 50 lessons', f: function () { return lessonsDone() >= 50; } },
  { id: 'a1', e: '🇮🇹', t: 'A1 completo', d: 'Finish every A1 lesson', f: function () { return App.lessons('A1').length && App.lessonsDone('A1') === App.lessons('A1').length; } },
  { id: 'a2', e: '🍝', t: 'A2 completo', d: 'Finish every A2 lesson', f: function () { return App.lessons('A2').length && App.lessonsDone('A2') === App.lessons('A2').length; } },
  { id: 'b1', e: '🛵', t: 'B1 completo', d: 'Finish every B1 lesson', f: function () { return App.lessons('B1').length && App.lessonsDone('B1') === App.lessons('B1').length; } },
  { id: 'b2', e: '🏛️', t: 'B2 completo', d: 'Finish every B2 lesson', f: function () { return App.lessons('B2').length && App.lessonsDone('B2') === App.lessons('B2').length; } },
  { id: 'c1', e: '👑', t: 'C1 completo', d: 'Finish every C1 lesson', f: function () { return App.lessons('C1').length && App.lessonsDone('C1') === App.lessons('C1').length; } },
  { id: 's3', e: '🔥', t: 'Tre giorni', d: 'Reach a 3-day streak', f: function () { return App.bestStreak() >= 3; } },
  { id: 's7', e: '🔥', t: 'Una settimana', d: 'Reach a 7-day streak', f: function () { return App.bestStreak() >= 7; } },
  { id: 's30', e: '🌟', t: 'Un mese', d: 'Reach a 30-day streak', f: function () { return App.bestStreak() >= 30; } },
  { id: 'e1', e: '📝', t: 'Primo esame', d: 'Complete an exam paper', f: function () { return examCount() >= 1; } },
  { id: 'e10', e: '🗂️', t: 'Esaminando', d: 'Complete 10 different exam papers', f: function () { return examCount() >= 10; } },
  { id: 'e100', e: '💯', t: 'Perfezione', d: 'Score 100% on an exam paper', f: function () { return examHigh(100); } },
  { id: 'e90', e: '🥇', t: 'Eccellenza', d: 'Score 90% or more on an exam', f: function () { return examHigh(90); } },
  { id: 'm1', e: '🎯', t: 'Imparo dagli errori', d: 'Master your first mistake', f: function () { return cnt(S().mastered) >= 1; } },
  { id: 'm25', e: '🧠', t: 'Mente d’acciaio', d: 'Master 25 mistakes', f: function () { return cnt(S().mastered) >= 25; } },
  { id: 'v50', e: '🃏', t: 'Vocabolario', d: 'Review 50 flashcards', f: function () { return cnt(S().cards, function (c) { return c.n; }) >= 50; } },
  { id: 'v200', e: '📖', t: 'Dizionario vivente', d: 'Know 200 words well', f: function () { return cnt(S().cards, function (c) { return c.b >= 3; }) >= 200; } },
  { id: 'adv1', e: '🧳', t: 'Viaggiatore', d: 'Finish an adventure', f: function () { return cnt(S().adv, function (a) { return a.finished; }) >= 1; } },
  { id: 'adv5', e: '🗺️', t: 'Giramondo', d: 'Finish 5 adventures', f: function () { return cnt(S().adv, function (a) { return a.finished; }) >= 5; } },
  { id: 'advall', e: '🏆', t: 'Tutta l’Italia', d: 'Finish every adventure', f: function () { return window.IT_ADVENTURES && cnt(S().adv, function (a) { return a.finished; }) >= IT_ADVENTURES.length; } },
  { id: 'sp10', e: '🎙️', t: 'Parlo italiano', d: 'Make 10 speaking attempts', f: function () { return S().speak.tries >= 10; } },
  { id: 'd7', e: '⚡', t: 'Sfida accettata', d: 'Complete 7 daily challenges', f: function () { return cnt(S().daily) >= 7; } },
  { id: 'cult5', e: '🍷', t: 'Cultura', d: 'Read 5 culture lessons', f: function () { return cnt(S().culture) >= 5; } },
  { id: 'cert', e: '🏅', t: 'Certificato', d: 'Pass a level assessment', f: function () { return cnt(S().assess, function (a) { return a.passed; }) >= 1; } },
  { id: 'xp1000', e: '💎', t: 'Mille punti', d: 'Earn 1,000 XP', f: function () { return S().xp >= 1000; } }
];
A.check = function () {
  var s = S(), got = [];
  A.list.forEach(function (a) { if (!s.ach[a.id]) { try { if (a.f()) { s.ach[a.id] = Date.now(); got.push(a); } } catch (e) { } } });
  if (got.length) { App.save(); U.toast(got[0].e + ' Achievement unlocked: ' + got[0].t); }
};
})();
