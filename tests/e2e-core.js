/* Browser tests (needs Playwright + Chromium): node tests/e2e-core.js */
const {chromium,devices}=require('playwright');
const http=require('http'),fs=require('fs'),path=require('path');
const ROOT=path.join(__dirname,'..');
const srv=http.createServer((q,r)=>{let u=decodeURIComponent(q.url.split('?')[0]);if(u.endsWith('/'))u+='index.html';const f=path.join(ROOT,u);fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end('nf');return;}const ext=path.extname(f);r.writeHead(200,{'Content-Type':{'.html':'text/html','.js':'application/javascript','.css':'text/css','.svg':'image/svg+xml','.png':'image/png','.webmanifest':'application/manifest+json'}[ext]||'application/octet-stream'});r.end(d);});}).listen(8767);
const B='http://localhost:8767/index.html';
const log=(...a)=>console.log(...a);
function assert(c,m){ if(!c){ log('❌ FAIL:',m); process.exitCode=1;} else log('✅',m); }
(async()=>{
 const b=await chromium.launch(); const ctx=await b.newContext({...devices['iPhone SE']}); const p=await ctx.newPage();
 const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>{if(m.type()==='error'&&!/ERR_FAILED|net::/.test(m.text()))errs.push(m.text())});
 await p.route(/fonts\.g|unsplash/,r=>r.abort());
 // 1. migration from old data
 await p.goto(B); await p.evaluate(()=>{App.save=function(){};localStorage.clear(); localStorage.setItem('italiano_luke_v3',JSON.stringify({completed:{'A1-0':true,'A1-2':true,'A2-0':true},exams:{'A1-1':12},notes:{},reviews:[]})); localStorage.setItem('italiano_luke_adventures_v1',JSON.stringify({0:{finished:true,step:4,best:4},3:{step:2,points:1,finished:false}}));});
 await p.goto('about:blank'); await p.goto(B+'?r=1#/home'); await p.waitForTimeout(500);
 let S=await p.evaluate(()=>JSON.parse(localStorage.getItem('italiano_luke_v4')));
 assert(S && S.lessons['a1-01'] && S.lessons['a1-01'].done && S.lessons['a1-03'] && S.lessons['a2-01'],'v3 lessons migrated to new ids');
 assert(S.adv['0'] && S.adv['0'].finished,'old adventure completion migrated');
 assert(S.legacy && S.legacy.exams['A1-1']===12,'old exam result preserved in legacy');
 assert(await p.evaluate(()=>!!localStorage.getItem('italiano_luke_v3')),'old v3 key kept untouched');
 // 2. lesson flow
 await p.goto(B+'#/lesson/a1-04'); await p.waitForTimeout(300);
 await p.click('[data-lessonquiz="a1-04"]'); await p.waitForTimeout(200);
 let guard=0, wrongDone=false;
 while(guard++<40){
   const url=await p.evaluate(()=>location.hash); const txt=await p.textContent('#app');
   if(/Results/.test(txt)) break;
   const it=await p.evaluate(()=>{const s=App.Quiz.cur;return s.items[s.pos]});
   // verify no option is marked correct before answering
   const pre=await p.$$eval('.opt.ok',x=>x.length); if(pre) { assert(false,'option marked correct before answering'); }
   if(it.type==='mc'){ const idx=await p.evaluate(()=>{const s=App.Quiz.cur,it=s.items[s.pos];return it.shown.indexOf(it.answer)});
     let pick=idx; if(!wrongDone){ pick=(idx+1)%(await p.$$eval('[data-opt]',x=>x.length)); wrongDone=true; }
     await p.click(`[data-opt="${pick}"]`); await p.click('#qbtn'); }
   else if(it.type==='fill'||it.type==='dict'){ await p.fill('#tin',it.answers?it.answers[0]:it.answer); await p.click('#qbtn'); }
   else if(it.type==='order'){ const words=it.answer.split(/\s+/); const bank=await p.evaluate(()=>App.Quiz.cur.items[App.Quiz.cur.pos].bank.map(b=>b.w)); const used=[]; for(const w of words){ const k=bank.findIndex((x,i)=>x===w&&!used.includes(i)); used.push(k); await p.click(`[data-word="${k}"]`);} await p.click('#qbtn'); }
   else if(it.type==='speak'){ /* skip */ }
   await p.waitForTimeout(60);
   await p.click('#qbtn'); await p.waitForTimeout(60);
 }
 const res=await p.textContent('#app');
 assert(/Lesson complete/.test(res),'lesson completed with >60%');
 S=await p.evaluate(()=>JSON.parse(localStorage.getItem('italiano_luke_v4')));
 assert(S.lessons['a1-04'] && S.lessons['a1-04'].done && S.lessons['a1-04'].best>=60,'lesson completion saved');
 assert(Object.keys(S.mistakes).length>=1,'wrong answer saved to mistakes ('+Object.keys(S.mistakes).length+')');
 // 3. exam with resume after reload
 await p.goto(B+'#/exam/A1/7'); await p.waitForTimeout(200);
 await p.click('[data-startexam="A1|7"]'); await p.waitForTimeout(200);
 for(let i=0;i<5;i++){ const it=await p.evaluate(()=>{const s=App.Quiz.cur;return s.items[s.pos]});
   if(it.type==='mc'){ await p.click('[data-opt="0"]'); } else if(it.type==='order'){ await p.click('[data-word="0"]'); } else { await p.fill('#tin','xyz'); }
   await p.click('#qbtn'); await p.waitForTimeout(40); }
 await p.reload(); await p.waitForTimeout(400);
 const pos=await p.evaluate(()=>App.Quiz.cur&&App.Quiz.cur.pos);
 assert(pos===5,'exam resumed after reload at question 6 (pos '+pos+')');
 guard=0; while(guard++<30){ const done=await p.evaluate(()=>App.Quiz.cur.pos>=App.Quiz.cur.items.length); if(done)break;
   const it=await p.evaluate(()=>{const s=App.Quiz.cur;return s.items[s.pos]});
   if(it.type==='mc'){ const idx=await p.evaluate(()=>{const s=App.Quiz.cur,it=s.items[s.pos];return it.shown.indexOf(it.answer)}); await p.click(`[data-opt="${idx}"]`);} else if(it.type==='order'){ const words=it.answer.split(/\s+/); const bank=await p.evaluate(()=>App.Quiz.cur.items[App.Quiz.cur.pos].bank.map(b=>b.w)); const used=[]; for(const w of words){ const k=bank.findIndex((x,i)=>x===w&&!used.includes(i)); used.push(k); await p.click(`[data-word="${k}"]`);} } else { await p.fill('#tin',it.answer); }
   await p.click('#qbtn'); await p.waitForTimeout(30); }
 const rt=await p.textContent('#app');
 assert(/Performance analysis/.test(rt)&&/Review every question/.test(rt),'exam results with analysis and review');
 S=await p.evaluate(()=>JSON.parse(localStorage.getItem('italiano_luke_v4')));
 assert(S.exams['A1-7']&&S.exams['A1-7'].attempts.length===1&&S.exams['A1-7'].attempts[0].total===20,'exam attempt stored ('+(S.exams['A1-7']&&S.exams['A1-7'].attempts[0].score)+'/20)');
 assert(!S.active,'active exam cleared after finishing');
 await p.goto(B+'#/attempt/A1-7/0'); await p.waitForTimeout(200);
 assert(/Review every question/.test(await p.textContent('#app')),'previous attempt can be reviewed');
 // 4. mistakes review
 const mBefore=Object.keys(S.mistakes).length;
 await p.goto(B+'#/mistakes'); await p.waitForTimeout(200);
 await p.click('[data-act="review"]'); await p.waitForTimeout(200);
 guard=0; while(guard++<20){ const done=await p.evaluate(()=>!App.Quiz.cur||App.Quiz.cur.pos>=App.Quiz.cur.items.length); if(done)break;
   const it=await p.evaluate(()=>{const s=App.Quiz.cur;return s.items[s.pos]});
   if(it.type==='mc'){ const idx=await p.evaluate(()=>{const s=App.Quiz.cur,it=s.items[s.pos];return it.shown.indexOf(it.answer)}); await p.click(`[data-opt="${idx}"]`);} else if(it.type==='order'){ const words=it.answer.split(/\s+/); const bank=await p.evaluate(()=>App.Quiz.cur.items[App.Quiz.cur.pos].bank.map(b=>b.w)); const used=[]; for(const w of words){ const k=bank.findIndex((x,i)=>x===w&&!used.includes(i)); used.push(k); await p.click(`[data-word="${k}"]`);} } else { await p.fill('#tin',it.answers?it.answers[0]:it.answer); }
   await p.click('#qbtn'); await p.waitForTimeout(30); await p.click('#qbtn'); await p.waitForTimeout(30); }
 S=await p.evaluate(()=>JSON.parse(localStorage.getItem('italiano_luke_v4')));
 const stages=Object.values(S.mistakes).map(m=>m.stage);
 assert(stages.every(s=>s>=1),'correct reviews advance mistakes to the next stage ('+stages.join(',')+')');
 assert(Object.values(S.mistakes).every(m=>m.due>Date.now()),'reviewed mistakes are scheduled for later');
 // force stage 2 then master
 await p.evaluate(()=>{Object.values(App.S.mistakes).forEach(m=>{m.stage=2;m.due=0}); App.save();});
 await p.goto(B+'#/mistakes'); await p.waitForTimeout(200); await p.click('[data-act="review"]'); await p.waitForTimeout(200);
 const st2=await p.evaluate(()=>App.Quiz.cur.items.map(i=>i.type+':'+(i.gen?'gen':'')));
 log('   stage-3 item types:',st2.join(' '));
 guard=0; while(guard++<20){ const done=await p.evaluate(()=>App.Quiz.cur.pos>=App.Quiz.cur.items.length); if(done)break;
   const it=await p.evaluate(()=>{const s=App.Quiz.cur;return s.items[s.pos]});
   if(it.type==='mc'){ const idx=await p.evaluate(()=>{const s=App.Quiz.cur,it=s.items[s.pos];return it.shown.indexOf(it.answer)}); await p.click(`[data-opt="${idx}"]`);} else if(it.type==='order'){ const words=it.answer.split(/\s+/); const bank=await p.evaluate(()=>App.Quiz.cur.items[App.Quiz.cur.pos].bank.map(b=>b.w)); const used=[]; for(const w of words){ const k=bank.findIndex((x,i)=>x===w&&!used.includes(i)); used.push(k); await p.click(`[data-word="${k}"]`);} } else { await p.fill('#tin',it.answers?it.answers[0]:it.answer); }
   await p.click('#qbtn'); await p.waitForTimeout(30); await p.click('#qbtn'); await p.waitForTimeout(30); }
 S=await p.evaluate(()=>JSON.parse(localStorage.getItem('italiano_luke_v4')));
 assert(Object.keys(S.mistakes).length===0 && Object.keys(S.mastered).length>=mBefore,'mistakes mastered after the final stage ('+Object.keys(S.mastered).length+' mastered)');
 // 5. flashcards
 await p.goto(B+'#/flash/A2'); await p.waitForTimeout(200);
 await p.click('button.btn.full[data-act="flflip"]'); await p.click('[data-rate-card="2"]'); await p.waitForTimeout(80);
 await p.click('button.btn.full[data-act="flflip"]'); await p.click('[data-rate-card="0"]'); await p.waitForTimeout(80);
 S=await p.evaluate(()=>JSON.parse(localStorage.getItem('italiano_luke_v4')));
 const cards=Object.keys(S.cards).filter(k=>k!=='_new');
 assert(cards.length===2 && cards.some(k=>S.cards[k].b===1),'flashcard ratings saved with spacing');
 // 6. adventure play
 await p.goto(B+'#/adventure/1'); await p.waitForTimeout(200);
 await p.click('[data-advstart="1"]'); await p.waitForTimeout(150);
 guard=0; while(guard++<15){ const t=await p.textContent('#app'); if(/Mission accomplished|Mission not completed/.test(t)) break;
   const n=await p.evaluate(()=>{const c=App.Adv.cur,a=IT_ADVENTURES[c.id];return a.nodes[c.node]});
   if(n.type==='type'){ await p.fill('#advin',n.answers[0]); await p.click('[data-act="advtype"]'); }
   else { const k=n.ch.findIndex(c=>c.q===2); await p.click(`[data-advpick="${k}"]`); }
   await p.waitForTimeout(40); await p.click('[data-act="advnext"]'); await p.waitForTimeout(60); }
 S=await p.evaluate(()=>JSON.parse(localStorage.getItem('italiano_luke_v4')));
 assert(S.adv['1']&&S.adv['1'].finished&&S.adv['1'].best===3,'adventure finished with 3 stars');
 // 7. daily challenge + streak
 await p.goto(B+'#/daily'); await p.waitForTimeout(150); await p.click('[data-act="dailystart"]'); await p.waitForTimeout(150);
 const n=await p.evaluate(()=>App.Quiz.cur.items.length); assert(n===10,'daily challenge has 10 questions');
 guard=0; while(guard++<25){ const done=await p.evaluate(()=>App.Quiz.cur.pos>=App.Quiz.cur.items.length); if(done)break;
   const it=await p.evaluate(()=>{const s=App.Quiz.cur;return s.items[s.pos]});
   if(it.type==='mc'){ await p.click('[data-opt="0"]'); } else if(it.type==='order'){ await p.click('[data-word="0"]'); } else if(it.type!=='speak'){ await p.fill('#tin','test'); }
   await p.click('#qbtn'); await p.waitForTimeout(30); if(it.type!=='speak'){ await p.click('#qbtn'); await p.waitForTimeout(30);} }
 S=await p.evaluate(()=>JSON.parse(localStorage.getItem('italiano_luke_v4')));
 assert(Object.keys(S.daily).length===1,'daily challenge recorded'); assert(await p.evaluate(()=>App.streak())>=1,'streak counted');
 assert(Object.keys(S.ach).length>=3,'achievements unlocked: '+Object.keys(S.ach).join(','));
 // 8. persistence across a new browser context with same storage
 const state=await ctx.storageState(); const ctx2=await b.newContext({...devices['iPhone SE'],storageState:state}); const p2=await ctx2.newPage(); await p2.route(/fonts\.g|unsplash/,r=>r.abort());
 await p2.goto(B+'#/progress'); await p2.waitForTimeout(300);
 const pt=await p2.textContent('#app'); assert(/exam papers taken/.test(pt) && /A1 · Exam 7/.test(pt),'progress survives closing the browser');
 // 9. all routes on small phone: no horizontal overflow, no errors
 const routes=['/home','/learn/C1','/lesson/c1-13','/lesson/b2-03','/practice','/mistakes','/flash/C1','/speak/B1','/listen/B2','/daily','/challenge/B1','/exams/MIX','/exam/MIX/50','/exams/C1','/progress','/achievements','/settings','/adventures','/adventure/16','/culture','/culture/5','/expressions/Idioms'];
 for(const r of routes){ await p.goto(B+'#'+r); await p.waitForTimeout(150); const ov=await p.evaluate(()=>document.documentElement.scrollWidth-innerWidth); if(ov>1) assert(false,'horizontal overflow on '+r+' ('+ov+'px)'); }
 log('✅ checked',routes.length,'routes for overflow');
 assert(errs.length===0,'no page errors'+(errs.length?': '+errs.slice(0,5).join(' | '):''));
 await b.close(); srv.close();
})();
