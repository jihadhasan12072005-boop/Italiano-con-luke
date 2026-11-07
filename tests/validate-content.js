/* node tests/validate-content.js — checks lessons, generators, exams, adventures and banks (no dependencies). */
const load = require('./harness');
const ctx = load(['js/content/lessons-a1.js', 'js/content/lessons-a2.js', 'js/content/lessons-b1.js', 'js/content/lessons-b2.js', 'js/content/lessons-c1.js', 'js/content/vocab.js', 'js/content/reading.js', 'js/content/practical.js', 'js/content/adventures.js', 'js/content/culture.js', 'js/app/core.js', 'js/app/gen.js', 'js/app/quiz.js', 'js/app/views-main.js', 'js/app/views-practice.js', 'js/app/exams.js']);
let bad = 0; const fail = (...m) => { bad++; console.log('✗', ...m); };
// lessons
for (const lv of ['A1', 'A2', 'B1', 'B2', 'C1']) {
  const L = ctx.IT_LESSONS[lv]; const ids = new Set();
  L.forEach(l => {
    if (ids.has(l.id)) fail('duplicate lesson id', l.id); ids.add(l.id);
    ['id', 't', 's', 'goal', 'teach', 'ex', 'q'].forEach(k => { if (!l[k]) fail('lesson missing', k, l.id); });
    l.q.forEach((q, i) => { if (q.t === 'mc' && (new Set(q.o).size !== q.o.length || q.o.length < 3)) fail('bad options', l.id, i); if (q.t === 'fill' && !(q.a && q.a.length)) fail('fill without answers', l.id, i); });
    (l.tb || []).forEach(t => t.r.forEach(r => { if (r.length !== t.h.length) fail('table columns', l.id); }));
  });
  console.log(lv, L.length, 'lessons');
}
// generators
for (const lv of ['A1', 'A2', 'B1', 'B2', 'C1']) {
  const p = ctx.App.Gen.pool(lv), ids = new Set();
  p.forEach(it => { if (ids.has(it.id)) fail('dup generated id', it.id); ids.add(it.id); if (!it.opts.includes(it.answer)) fail('answer not in options', it.id); if (new Set(it.opts).size !== it.opts.length || it.opts.length < 3) fail('options', it.id, it.opts); });
  console.log(lv, p.length, 'generated grammar items');
}
// exams
for (const lv of ['A1', 'A2', 'B1', 'B2', 'C1', 'MIX']) {
  const papers = [], sigs = new Set();
  for (let k = 0; k < 50; k++) { const p = ctx.App.Exams.paper(lv, k); papers.push(p); const sig = p.map(x => x.id).sort().join('|'); if (sigs.has(sig)) fail('identical exam', lv, k + 1); sigs.add(sig); if (p.length < 20) fail('short exam', lv, k + 1, p.length); }
  let maxShare = 0; for (let a = 0; a < 50; a++) for (let b = a + 1; b < 50; b++) { const A = new Set(papers[a].map(x => x.id)); maxShare = Math.max(maxShare, papers[b].filter(x => A.has(x.id)).length); }
  console.log(lv, '50 exams; max questions shared by any two exams:', maxShare);
}
// adventures
ctx.IT_ADVENTURES.forEach((a, i) => a.nodes.forEach((n, j) => { if (n.type === 'type') { if (!n.answers || !n.answers.length) fail('adventure type node without answers', i, j); } else if (n.ch.filter(c => c.q === 2).length !== 1) fail('adventure node needs exactly one best choice', i, j); }));
console.log(ctx.IT_ADVENTURES.length, 'adventures,', ctx.IT_CULTURE.length, 'culture lessons,', ctx.IT_EXPRESSIONS.length, 'expressions');
console.log(bad ? '\n' + bad + ' problem(s) found' : '\nAll content checks passed.');
process.exitCode = bad ? 1 : 0;
