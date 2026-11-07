/* Browser tests (needs Playwright + Chromium): node tests/e2e-features.js */
const {chromium,devices}=require('playwright');
const http=require('http'),fs=require('fs'),path=require('path');
const ROOT=path.join(__dirname,'..');
const srv=http.createServer((q,r)=>{let u=decodeURIComponent(q.url.split('?')[0]);if(u.endsWith('/'))u+='index.html';const f=path.join(ROOT,u);fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end('nf');return;}const ext=path.extname(f);r.writeHead(200,{'Content-Type':{'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png'}[ext]||'application/octet-stream'});r.end(d);});}).listen(8770);
const B='http://localhost:8770/index.html';
function assert(c,m){ if(!c){ console.log('❌ FAIL:',m); process.exitCode=1;} else console.log('✅',m); }
async function answerAll(p,mode){ let g=0; while(g++<40){ const done=await p.evaluate(()=>!App.Quiz.cur||App.Quiz.cur.pos>=App.Quiz.cur.items.length); if(done)return;
   const it=await p.evaluate(()=>{const s=App.Quiz.cur;return s.items[s.pos]});
   if(it.type==='mc'){ const idx=await p.evaluate(()=>{const s=App.Quiz.cur,it=s.items[s.pos];return it.shown.indexOf(it.answer)}); await p.click(`[data-opt="${idx}"]`);} else if(it.type==='order'){ const words=it.answer.split(/\s+/); const bank=await p.evaluate(()=>App.Quiz.cur.items[App.Quiz.cur.pos].bank.map(b=>b.w)); const used=[]; for(const w of words){ const k=bank.findIndex((x,i)=>x===w&&!used.includes(i)); used.push(k); await p.click(`[data-word="${k}"]`);} } else if(it.type!=='speak'){ await p.fill('#tin',it.answers?it.answers[0]:it.answer); }
   await p.click('#qbtn'); await p.waitForTimeout(20); if(it.type!=='speak'&&mode!=='exam'){ await p.click('#qbtn'); await p.waitForTimeout(20);} } }
(async()=>{
 const b=await chromium.launch(); const ctx=await b.newContext({...devices['Pixel 5']}); const p=await ctx.newPage();
 const errs=[]; p.on('pageerror',e=>errs.push(e.message));
 await p.route(/fonts\.g|unsplash/,r=>r.abort());
 await p.goto(B+'#/adventures'); await p.waitForTimeout(300);
 const n=await p.evaluate(()=>IT_ADVENTURES.length); let ok=0;
 for(let i=0;i<n;i++){
   await p.goto(B+'#/adventure/'+i); await p.waitForTimeout(80); await p.click(`[data-advstart="${i}"]`); await p.waitForTimeout(60);
   let g=0; while(g++<15){ const t=await p.textContent('#app'); if(/Mission accomplished|Mission not completed/.test(t)) break;
     const nd=await p.evaluate(()=>{const c=App.Adv.cur,a=IT_ADVENTURES[c.id];return a.nodes[c.node]});
     if(nd.type==='type'){ await p.fill('#advin',nd.answers[0]); await p.click('[data-act="advtype"]'); } else { const k=nd.ch.findIndex(c=>c.q===2); await p.click(`[data-advpick="${k}"]`); }
     await p.waitForTimeout(20); await p.click('[data-act="advnext"]'); await p.waitForTimeout(30); }
   const st=await p.evaluate(i=>App.S.adv[i],i); if(st&&st.finished&&st.best===3) ok++; else console.log('adv not perfect',i,JSON.stringify(st));
 }
 assert(ok===n,'all '+n+' adventures completable with 3 stars');
 // fail path
 await p.goto(B+'#/adventure/2'); await p.click('[data-advstart="2"]'); await p.waitForTimeout(60);
 let g=0; while(g++<15){ const t=await p.textContent('#app'); if(/Mission not completed|Mission accomplished/.test(t)) break;
   const nd=await p.evaluate(()=>{const c=App.Adv.cur,a=IT_ADVENTURES[c.id];return a.nodes[c.node]});
   if(nd.type==='type'){ await p.fill('#advin','sbagliato'); await p.click('[data-act="advtype"]'); } else { const k=nd.ch.findIndex(c=>c.q===0); await p.click(`[data-advpick="${k}"]`); }
   await p.waitForTimeout(20); await p.click('[data-act="advnext"]'); await p.waitForTimeout(30); }
 assert(/Mission not completed/.test(await p.textContent('#app')),'losing all hearts shows the fail ending');
 const advM=await p.evaluate(()=>Object.keys(App.S.mistakes).filter(k=>k.indexOf('adv:2')===0).length);
 assert(advM===3,'adventure mistakes recorded ('+advM+')');
 // resume mid-adventure after reload
 await p.goto(B+'#/adventure/5'); await p.click('[data-advstart="5"]'); await p.waitForTimeout(60);
 await p.click('[data-advpick="0"]'); await p.click('[data-act="advnext"]'); await p.waitForTimeout(60);
 await p.reload(); await p.waitForTimeout(300);
 const node=await p.evaluate(()=>App.Adv.cur&&App.Adv.cur.node);
 assert(node===1,'adventure resumes at saved scene after reload (node '+node+')');
 // culture quiz, expressions quiz, challenge, listening, assessment
 await p.goto(B+'#/culture/3'); await p.click('[data-culturequiz="3"]'); await answerAll(p); assert(/Results/.test(await p.textContent('#app')),'culture quiz runs');
 await p.goto(B+'#/expressions/Food'); await p.click('[data-exprquiz="Food"]'); await answerAll(p); assert(/Results/.test(await p.textContent('#app')),'expressions quiz runs');
 for(const lv of ['A1','A2','B1','B2','C1']){ const keys=await p.evaluate(lv=>App.Gen.CHALLENGES[lv].map(c=>c[0]),lv);
   for(const k of keys){ const n=await p.evaluate(([lv,k])=>App.Gen.challenge(lv,k,12,1).length,[lv,k]); if(n<12) console.log('challenge short',lv,k,n); } }
 await p.goto(B+'#/challenge/B1'); await p.click('[data-chal="B1|combo"]'); await answerAll(p); assert(/100%/.test(await p.textContent('#app')),'grammar challenge scores 100% with right answers');
 await p.goto(B+'#/listen/A2'); await p.click('[data-listenstart="A2"]'); await answerAll(p); assert(/Results/.test(await p.textContent('#app')),'listening session runs');
 await p.goto(B+'#/learn/C1'); await p.click('[data-assess="C1"]'); await p.waitForTimeout(100);
 const an=await p.evaluate(()=>App.Quiz.cur.items.length); await answerAll(p,'exam');
 const as=await p.evaluate(()=>App.S.assess.C1); assert(an===30 && as && as.passed,'C1 assessment (30 Qs) passes and awards certificate');
 // speaking studio renders mic or fallback, click doesn't crash
 await p.goto(B+'#/speak/A1'); await p.waitForTimeout(150);
 const mic=await p.$('[data-mic],[data-recmic],[data-selfrate]'); assert(!!mic,'speaking studio shows mic or fallback');
 // settings: theme toggle & export
 await p.goto(B+'#/settings'); await p.click('[data-theme="dark"]'); assert(await p.evaluate(()=>document.documentElement.dataset.theme==='dark'),'dark theme toggle');
 const [dl]=await Promise.all([p.waitForEvent('download'),p.click('[data-act="export"]')]); assert(/italiano-con-luke-backup/.test(dl.suggestedFilename()),'backup download works');
 assert(errs.length===0,'no page errors'+(errs.length?': '+errs.slice(0,4).join(' | '):''));
 await b.close(); srv.close();
})();
