/* Italiano con Luke — events and boot */
(function () {
'use strict';
var App = window.App, U = App.U, S = function () { return App.S; };

function insertAtCursor(el, txt) {
  if (!el) return;
  var s = el.selectionStart != null ? el.selectionStart : el.value.length, e = el.selectionEnd != null ? el.selectionEnd : el.value.length;
  el.value = el.value.slice(0, s) + txt + el.value.slice(e);
  el.focus(); try { el.setSelectionRange(s + txt.length, s + txt.length); } catch (x) { }
}
function retry() {
  var s = App.Quiz.cur; if (!s) return;
  if (s.kind === 'lesson') App.startLessonQuiz(s.meta.lesson);
  else if (s.kind === 'exam') { var p = s.meta.key.split('-'); App.Exams.start(p[0], +p[1]); }
  else if (s.kind === 'assess') App.startAssessment(s.meta.level);
  else if (s.kind === 'chal') { var k = s.meta.k.split(':'); App.startChallenge(k[0], k[1]); }
  else if (s.kind === 'culture') App.cultureQuiz(s.id.split('-')[1]);
  else if (s.kind === 'expr') App.exprQuiz(s.title.replace('Expressions · ', ''));
  else location.hash = s.back;
}
var ACTS = {
  quit: function () {
    var s = App.Quiz.cur;
    if (s && (s.kind === 'exam' || s.kind === 'assess') && s.pos < s.items.length) { if (!confirm('Leave the exam? Your answers so far are saved and you can resume it from the Examination Center.')) return; }
    else if (s && s.pos > 0 && s.pos < s.items.length && !confirm('Leave this session? Progress in this session will not be counted.')) return;
    App.SpeakUI.stopAll(); var back = s ? s.back : '#/home'; if (s && s.kind !== 'exam' && s.kind !== 'assess') App.Quiz.cur = null; else App.Quiz.cur = null;
    location.hash = back;
  },
  qcheck: function () { App.Quiz.doCheck(); },
  qnext: function () { App.Quiz.advance(); },
  qretry: retry,
  toggleen: function () { document.querySelectorAll('.exen').forEach(function (e) { e.style.display = e.style.display === 'none' ? '' : 'none'; }); },
  review: function () { App.Review.start(false); },
  reviewall: function () { App.Review.start(true); },
  flflip: function () { App.flashFlip(); },
  flrev: function () { App.flashRev(); },
  spkprev: function () { App.speakNav(-1); },
  spknext: function () { App.speakNav(1); },
  dailystart: function () { var seed = U.hash(U.today()) + (S().daily[U.today()] ? Date.now() : 0); App.Quiz.start({ id: 'daily', kind: 'daily', title: 'Daily challenge · ' + U.fmtDate(Date.now()), items: App.dailyItems(S().level, seed), back: '#/daily' }); },
  resume: function () { if (App.Quiz.resume()) { location.hash = '#/quiz'; App.render(); } },
  discard: function () { if (confirm('Discard the unfinished exam?')) { App.Quiz.discard(); App.render(); } },
  advnext: function () { App.Adv.next(); },
  advtype: function () { App.Adv.typed(); },
  savename: function () { var v = (document.getElementById('nm').value || '').trim().slice(0, 30); S().name = v || 'Luke'; App.save(); U.toast('Saved. Ciao, ' + S().name + '!'); },
  export: function () { App.exportData(); }
};
document.addEventListener('click', function (ev) {
  var b = ev.target.closest('[data-go],[data-act],[data-say],[data-say-slow],[data-opt],[data-word],[data-unword],[data-acc],[data-mic],[data-recmic],[data-selfrate],[data-learnlv],[data-setlevel],[data-lessonquiz],[data-drill],[data-assess],[data-flashlv],[data-rate-card],[data-speaklv],[data-listenlv],[data-listenstart],[data-examlv],[data-exammode],[data-startexam],[data-advstart],[data-advpick],[data-culturequiz],[data-exprquiz],[data-chal],[data-challv],[data-rate],[data-theme],[data-goal]');
  if (!b || b.disabled) return;
  var d = b.dataset;
  if (d.go != null) { if (b.tagName === 'A') return; ev.preventDefault(); if (location.hash === d.go) App.render(); else location.hash = d.go; return; }
  if (d.act) { if (ACTS[d.act]) { ev.preventDefault(); ACTS[d.act](b); } return; }
  if (d.say != null) { App.Speech.speak(d.say, { btn: b }); return; }
  if (d.saySlow != null) { App.Speech.speak(d.saySlow, { slow: true, btn: b }); return; }
  if (d.opt != null) { App.Quiz.select(+d.opt); return; }
  if (d.word != null) { App.Quiz.word(+d.word); return; }
  if (d.unword != null) { App.Quiz.unword(+d.unword); return; }
  if (d.acc != null) { ev.preventDefault(); insertAtCursor(document.getElementById(d.target || 'tin'), d.acc); return; }
  if (d.mic != null) { App.SpeakUI.mic(d.mic, b); return; }
  if (d.recmic != null) { App.SpeakUI.recmic(d.recmic, b); return; }
  if (d.selfrate != null) { var p = d.selfrate.split('|'); S().speak.tries++; if (p[1] === '1') S().speak.good++; App.activity(1); var el = document.getElementById('spres-' + p[0]); if (el) el.innerHTML = '<div class="fb ' + (p[1] === '1' ? 'ok' : 'no') + '"><h4>' + (p[1] === '1' ? 'Great — keep it up!' : 'Listen again and repeat slowly.') + '</h4></div>'; return; }
  if (d.learnlv) { location.hash = '#/learn/' + d.learnlv; return; }
  if (d.setlevel) { S().level = d.setlevel; App.save(); U.toast('Current level: ' + d.setlevel); App.render(true); return; }
  if (d.lessonquiz) { App.startLessonQuiz(d.lessonquiz); return; }
  if (d.drill) { App.drill(d.drill); return; }
  if (d.assess) { App.startAssessment(d.assess); return; }
  if (d.flashlv) { App.flashLevel(d.flashlv); return; }
  if (d.rateCard != null) { App.flashRate(+d.rateCard); return; }
  if (d.speaklv) { location.hash = '#/speak/' + d.speaklv; return; }
  if (d.listenlv) { location.hash = '#/listen/' + d.listenlv; return; }
  if (d.listenstart) { App.Quiz.start({ id: 'listen', kind: 'listen', title: 'Listening · ' + d.listenstart, items: App.listenSession(d.listenstart, 10), back: '#/listen/' + d.listenstart }); return; }
  if (d.examlv) { location.hash = '#/exams/' + d.examlv; return; }
  if (d.exammode) { S().settings.examMode = d.exammode; App.save(); App.render(true); return; }
  if (d.startexam) { var q = d.startexam.split('|'); if (S().active && S().active.kind === 'exam' && S().active.id !== q[0] + '-' + q[1] && !confirm('You have another unfinished exam (' + S().active.title + '). Starting this one will discard it. Continue?')) return; App.Exams.start(q[0], +q[1]); return; }
  if (d.advstart != null) { App.Adv.start(+d.advstart); return; }
  if (d.advpick != null) { App.Adv.pick(+d.advpick); return; }
  if (d.culturequiz != null) { App.cultureQuiz(d.culturequiz); return; }
  if (d.exprquiz != null) { App.exprQuiz(d.exprquiz); return; }
  if (d.chal) { var c = d.chal.split('|'); App.startChallenge(c[0], c[1]); return; }
  if (d.challv) { location.hash = '#/challenge/' + d.challv; return; }
  if (d.rate) { S().settings.rate = +d.rate; App.save(); App.render(true); App.Speech.speak('Perfetto, questa è la nuova velocità.'); return; }
  if (d.theme) { S().settings.theme = d.theme; App.save(); App.applyTheme(); App.render(true); return; }
  if (d.goal) { S().settings.dailyGoal = +d.goal; App.save(); App.render(true); return; }
});
document.addEventListener('change', function (ev) {
  var t = ev.target;
  if (t.id === 'voicesel') { S().settings.voice = t.value; App.save(); App.Speech.load(); App.Speech.speak('Ciao Luke, questa è la mia voce.'); }
  if (t.id === 'importfile' && t.files && t.files[0]) App.importData(t.files[0]);
});
document.addEventListener('input', function (ev) { if (ev.target.id === 'tin' && App.Quiz.cur) App.Quiz.cur.typed = ev.target.value; });
document.addEventListener('keydown', function (ev) {
  if (ev.key === 'Enter') {
    if (ev.target.id === 'tin') { ev.preventDefault(); var b = document.getElementById('qbtn'); if (b && !b.disabled) b.click(); }
    else if (ev.target.id === 'advin') { ev.preventDefault(); App.Adv.typed(); }
    else if (ev.target.classList && ev.target.classList.contains('flash')) App.flashFlip();
  }
  if (ev.key === ' ' && ev.target.classList && ev.target.classList.contains('flash')) { ev.preventDefault(); App.flashFlip(); }
  /* number keys pick options in quizzes */
  if (App.route()[0] === 'quiz' && /^[1-4]$/.test(ev.key) && !/INPUT|TEXTAREA/.test(ev.target.tagName)) { var o = document.querySelector('[data-opt="' + (+ev.key - 1) + '"]'); if (o && !o.disabled) o.click(); }
});
window.addEventListener('hashchange', function () {
  var r = App.route();
  if (r[0] !== 'quiz') App.SpeakUI.stopAll();
  if (r[0] !== 'adventure' && App.Adv) App.Adv.cur = null;
  App.render(); window.scrollTo(0, 0);
});
/* boot */
App.V.quiz = function () { return App.Quiz.view(); };
App.applyTheme();
App.Ach.check();
App.render();
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () { }); });
}
})();
