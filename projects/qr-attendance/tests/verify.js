/* Run: node projects/qr-attendance/tests/verify.js (no external dependencies). */
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const html=read('index.html'), productionHtml=read('apps-script/Index.html');
const src=read('attendance.js'), server=read('apps-script/Code.gs');
new vm.Script(src,{filename:'attendance.js'});new vm.Script(server,{filename:'Code.gs'});
assert.match(html,/QR ATTENDANCE/);assert.match(productionHtml,/google|QR ATTENDANCE/);
assert.match(productionHtml,/cdn\.jsdelivr\.net\/gh\//);
assert.match(server,/function apiRecordPunch/);assert.match(server,/LockService\.getScriptLock/);
assert.match(server,/Session\.getActiveUser\(\)\.getEmail\(\)/);
assert.match(server,/SpreadsheetApp\.create/);
assert.doesNotMatch(src,/ATTENDANCE_SHEET_ID|ATTENDANCE_ADMIN_EMAILS/);
const ids=new Set([...html.matchAll(/id="([^"]+)"/g)].map(v=>v[1]));
const clientIds=new Set([...src.matchAll(/\$\("([^"]+)"\)/g)].map(v=>v[1]));
assert.deepEqual([...clientIds].filter(id=>!ids.has(id)),[],'Every client UI ID must exist.');
const ev={}, els=new Map(), cl={add(){},remove(){},toggle(){}};
function element(id){if(!els.has(id))els.set(id,{value:'',checked:false,readOnly:false,disabled:false,innerHTML:'',textContent:'',className:'',classList:cl,addEventListener:(event,cb)=>ev[id+':'+event]=cb,scrollIntoView(){},reset(){}});return els.get(id);}
ids.forEach(element);
const document={getElementById:element,querySelectorAll:()=>[],addEventListener:(name,fn)=>ev['document:'+name]=fn};
const storage={values:{},getItem(k){return this.values[k]||null;},setItem(k,v){this.values[k]=v;}};
vm.runInNewContext(src,{document,localStorage:storage,window:{},setInterval(){},setTimeout(){return 0;},clearTimeout(){},confirm(){return true;},navigator:{clipboard:{writeText:()=>Promise.resolve()}},Date,Math,console,Promise},{filename:'attendance.js'});
function click(id){return ev[id+':click']();}
function persisted(){return JSON.parse(storage.values['qr-attendance-portfolio-demo-v1']);}
(async()=>{
 await ev['document:DOMContentLoaded']();
 assert.equal(element('headcount').textContent,5);
 assert.equal(element('count-present').textContent,2);
 assert.equal(element('count-late').textContent,1);
 assert.equal(element('count-absent').textContent,1);
 assert.equal(element('count-leave').textContent,1);
 const day=element('viewDate').value;
 element('empId').value='E-2026';element('empName').value='Quality Tester';element('empDept').value='QA';element('empStart').value='09:00';element('empEnd').value='18:00';element('empGrace').value='10';element('empActive').checked=true;
 await ev['employeeForm:submit']({preventDefault(){}});
 assert.equal(persisted().employees.length,6);
 ev['document:click']({target:{closest:()=>({dataset:{action:'try',id:'E-2026'}})}});
 assert.match(element('credential').value,/^QA1\|E-2026\|/);
 element('clockEdit').value=day+'T08:55';click('clockApply');
 await click('scanIn');assert.equal(persisted().attendance.filter(a=>a.employeeId==='E-2026').length,1);
 await click('scanIn');assert.match(element('scanResult').textContent,/Already timed in/);
 element('clockEdit').value=day+'T18:20';click('clockApply');await click('scanOut');
 assert.match(persisted().attendance.find(a=>a.employeeId==='E-2026').outAt,/18:20/);
 ev['document:click']({target:{closest:()=>({dataset:{action:'try',id:'E-1002'}})}});
 await click('scanOut');assert.match(element('dailyTable').innerHTML,/Late · Out/);
 element('leaveEmployee').value='E-1004';element('leaveFrom').value=day;element('leaveTo').value=day;element('leaveReason').value='Approved test leave';
 await ev['leaveForm:submit']({preventDefault(){}});
 assert.ok(persisted().leaves.some(l=>l.employeeId==='E-1004'));
 element('reportDate').value=day;ev['reportDate:change']();assert.equal(element('viewDate').value,day);
 console.log('PASS: source parse; 53 DOM refs; mock status counts; create; QR load; IN; duplicate reject; OUT; late after OUT; leave; report date');
})().catch(error=>{console.error(error);process.exitCode=1;});