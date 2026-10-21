/* QR Attendance System — public demo uses browser storage; Apps Script uses secured Sheets API. */
(function(){
"use strict";
const KEY="qr-attendance-portfolio-demo-v1", PROD=!!(window.google&&google.script&&google.script.run);
const $=id=>document.getElementById(id);
const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const pad=n=>String(n).padStart(2,"0"), dateKey=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const clockStr=d=>dateKey(d)+"T"+pad(d.getHours())+":"+pad(d.getMinutes());
const timeStr=d=>pad(d.getHours())+":"+pad(d.getMinutes());
const idGen=()=>window.crypto&&crypto.randomUUID?crypto.randomUUID():String(Date.now())+"-"+Math.random().toString(36).slice(2);
const now=new Date(), starterClock=new Date(now.getFullYear(),now.getMonth(),now.getDate(),10,35,0);
function initialDemo(){
 const day=dateKey(starterClock);
 const people=[
 ["E-1001","Alex Rivera","Operations","08:55",""],
 ["E-1002","Jamie Cruz","Sales","09:16",""],
 ["E-1003","Taylor Santos","Support","",""],
 ["E-1004","Sam Reyes","Logistics","",""],
 ["E-1005","Morgan Lee","Finance","09:03",""]
 ];
 return {employees:people.map((p,i)=>({id:p[0],name:p[1],department:p[2],shiftStart:"09:00",shiftEnd:"18:00",grace:10,active:true,token:"demo-"+(i+1)+"-"+idGen()})),
 attendance:people.filter(p=>p[3]).map(p=>({id:idGen(),employeeId:p[0],day:day,inAt:day+"T"+p[3]+":00",outAt:"",lateMinutes:p[3]>"09:10"?16:0})),
 leaves:[{id:idGen(),employeeId:"E-1003",from:day,to:day,reason:"Approved personal leave"}],clock:clockStr(starterClock)};
}
let serverOffset=0;let state={employees:[],attendance:[],leaves:[],clock:clockStr(now)}, section="dashboard", scanner=null, working=false, selectedQr="", filter="";
function store(){if(!PROD)localStorage.setItem(KEY,JSON.stringify(state))}
function currentTime(){return PROD?new Date(Date.now()+serverOffset):new Date(state.clock+":00")}
function backend(method,...args){return new Promise((resolve,reject)=>google.script.run.withSuccessHandler(resolve).withFailureHandler(e=>reject(new Error(e&&e.message||String(e))))[method](...args))}
function toast(message,error){$("toast").textContent=message;$("toast").className="alert"+(error?" error":"");$("toast").classList.remove("hidden");clearTimeout(toast.timer);toast.timer=setTimeout(()=>$("toast").classList.add("hidden"),4500)}
function dateStatus(e,day,at){
 if(!e.active)return {label:"Inactive",kind:"waiting"};
 const leave=state.leaves.some(l=>l.employeeId===e.id&&day>=l.from&&day<=l.to);
 if(leave)return {label:"On Leave",kind:"leave"};
 const record=state.attendance.find(a=>a.employeeId===e.id&&a.day===day);
 if(record&&record.inAt){
  if(record.outAt)return {label:(Number(record.lateMinutes)||0)>0?"Late · Out":"Timed Out",kind:(Number(record.lateMinutes)||0)>0?"late":"out",record};
  const late=Number(record.lateMinutes)||0;
  return {label:late>0?"Late":"Present",kind:late>0?"late":"present",record};
 }
 if(day<dateKey(at))return {label:"Absent",kind:"absent"};
 if(day>dateKey(at))return {label:"Scheduled",kind:"waiting"};
 const cutoff=new Date(day+"T"+e.shiftStart+":00");cutoff.setMinutes(cutoff.getMinutes()+Math.max(30,Number(e.grace)||0));
 return at>=cutoff?{label:"Absent",kind:"absent"}:{label:"Not Yet In",kind:"waiting"};
}
function clockMinutes(hm){const parts=String(hm||"09:00").split(":").map(Number);return parts[0]*60+parts[1]}
function calcLate(employee,date){const minutes=date.getHours()*60+date.getMinutes();return minutes>clockMinutes(employee.shiftStart)+Number(employee.grace||0)?Math.max(0,minutes-clockMinutes(employee.shiftStart)):0}
function fmtStamp(value){if(!value)return"—";const d=new Date(value);return isNaN(d.getTime())?"—":d.toLocaleTimeString("en-PH",{hour:"2-digit",minute:"2-digit",hour12:true})}
function nowTitle(){const d=currentTime();$("clockDisplay").textContent=d.toLocaleTimeString("en-PH",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true});$("clockDate").textContent=d.toLocaleDateString("en-PH",{weekday:"long",month:"short",day:"numeric",year:"numeric"})}
function tableEmpty(n=6){return '<tr><td colspan="'+n+'" class="empty">No records found.</td></tr>'}
function render(){
 const at=currentTime(), day=$("viewDate").value||dateKey(at);
 nowTitle();if($("reportDate"))$("reportDate").value=day;$("clockEdit").value=state.clock;$("clockEdit").disabled=PROD;
 $("modeText").textContent=PROD?"GOOGLE SHEETS CONNECTED":"DEMO · BROWSER DATA";
 $("modeInfo").textContent=PROD?"Protected manager web app · official server timestamps":"Safe sample data · demo clock editable · records stay in this browser";
 $("clockHelp").textContent=PROD?"Production time is set by the Google server.":"Change the date and time below, then press Apply Test Clock.";
 $("testControls").classList.toggle("hidden",PROD);
 const people=state.employees.filter(e=>e.active), list=people.map(e=>({e,status:dateStatus(e,day,at)}));
 for(const kind of ["present","late","absent","leave"]){$("count-"+kind).textContent=list.filter(x=>x.status.kind===kind||(kind==="present"&&x.status.kind==="out")).length}
 $("headcount").textContent=people.length;
 const rows=list.filter(x=>(x.e.name+" "+x.e.id+" "+x.e.department).toLowerCase().includes(filter.toLowerCase()));
 $("dailyTable").innerHTML=rows.length?rows.map(({e,status:s})=>{const a=s.record||{};return '<tr><td class="person">'+esc(e.name)+'<small>'+esc(e.id)+'</small></td><td>'+esc(e.department)+'</td><td>'+esc(e.shiftStart)+'</td><td>'+fmtStamp(a.inAt)+'</td><td>'+fmtStamp(a.outAt)+'</td><td><span class="status '+s.kind+'">'+esc(s.label)+'</span></td></tr>'}).join(""):tableEmpty();
 $("employeeTable").innerHTML=state.employees.filter(e=>(e.name+" "+e.id+" "+e.department).toLowerCase().includes(($("employeeSearch").value||"").toLowerCase())).map(e=>'<tr><td class="person">'+esc(e.name)+'<small>'+esc(e.id)+'</small></td><td>'+esc(e.department)+'</td><td>'+esc(e.shiftStart)+'–'+esc(e.shiftEnd)+'</td><td><span class="status '+(e.active?"present":"waiting")+'">'+(e.active?"Active":"Inactive")+'</span></td><td><div class="controls"><button class="action" data-action="qr" data-id="'+esc(e.id)+'">QR</button><button class="action" data-action="edit" data-id="'+esc(e.id)+'">Edit</button><button class="action" data-action="try" data-id="'+esc(e.id)+'">Test Scan</button></div></td></tr>').join("")||tableEmpty(5);
 $("leaveTable").innerHTML=state.leaves.map(l=>{const e=state.employees.find(p=>p.id===l.employeeId);return '<tr><td>'+esc(e&&e.name||l.employeeId)+'</td><td>'+esc(l.from)+'</td><td>'+esc(l.to)+'</td><td>'+esc(l.reason)+'</td><td><button class="action" data-action="delete-leave" data-id="'+esc(l.id)+'">Revoke</button></td></tr>'}).join("")||tableEmpty(5);
 const reportRows=state.attendance.filter(a=>a.day===day).sort((a,b)=>a.employeeId.localeCompare(b.employeeId));
 $("reportTable").innerHTML=reportRows.map(a=>{const e=state.employees.find(p=>p.id===a.employeeId);return '<tr><td>'+esc(a.day)+'</td><td>'+esc(e&&e.name||a.employeeId)+'</td><td>'+fmtStamp(a.inAt)+'</td><td>'+fmtStamp(a.outAt)+'</td><td>'+Number(a.lateMinutes||0)+' min</td></tr>'}).join("")||tableEmpty(5);
 $("recentList").innerHTML=state.attendance.filter(a=>a.day===day).slice(-5).reverse().map(a=>{const e=state.employees.find(p=>p.id===a.employeeId);return '<div class="mini-item"><div><b>'+esc(e&&e.name||a.employeeId)+'</b><small>'+esc(a.outAt?"Timed out":"Time in")+'</small></div><span class="muted small">'+fmtStamp(a.outAt||a.inAt)+'</span></div>'}).join("")||'<p class="muted small">No punches yet.</p>';
 const options=people.map(e=>'<option value="'+esc(e.id)+'">'+esc(e.id+" — "+e.name)+'</option>').join("");
 const lv=$("leaveEmployee").value;$("leaveEmployee").innerHTML='<option value="">Select employee</option>'+options;$("leaveEmployee").value=lv;
}
function navigate(next){section=next;document.querySelectorAll(".section").forEach(el=>el.classList.toggle("active",el.id==="section-"+next));document.querySelectorAll(".nav button").forEach(el=>el.classList.toggle("active",el.dataset.page===next));$("pageTitle").textContent=({dashboard:"Attendance Overview",scanner:"QR Time Clock",employees:"Employee Directory",leaves:"Leave Management",reports:"Attendance Reports"})[next];if(next!=="scanner")stopScan();render()}
async function mutate(api,localFn,args){
 if(working)return;working=true;
 try{if(PROD){const result=await backend(api,...args);if(result&&result.ok===false)throw Error(result.message);await refresh()}else{localFn();store();render()}toast("Saved successfully.");return true}
 catch(e){toast(e.message||"Operation failed.",true);return false}finally{working=false}
}
async function refresh(){if(PROD){const r=await backend("apiBootstrap");state.employees=r.employees||[];state.attendance=r.attendance||[];state.leaves=r.leaves||[];serverOffset=new Date(r.serverNow).getTime()-Date.now();state.clock=clockStr(new Date(r.serverNow));}render()}
function validateEmployee(form){
 const id=String(form.id||"").trim().toUpperCase(),name=String(form.name||"").trim(),dep=String(form.department||"").trim();
 if(!/^[A-Z0-9_-]{2,24}$/.test(id))throw Error("Employee ID: 2–24 letters, numbers, - or _.");
 if(name.length<2||name.length>80||dep.length<2||dep.length>50)throw Error("Enter valid employee name and department.");
 if(!/^\d{2}:\d{2}$/.test(form.shiftStart)||!/^\d{2}:\d{2}$/.test(form.shiftEnd))throw Error("Invalid shift time.");
 if(clockMinutes(form.shiftEnd)<=clockMinutes(form.shiftStart))throw Error("This MVP supports same-day shifts only.");
 if(!Number.isFinite(+form.grace)||+form.grace<0||+form.grace>120)throw Error("Grace period must be 0–120 minutes.");
 return {id,name,department:dep,shiftStart:form.shiftStart,shiftEnd:form.shiftEnd,grace:Number(form.grace),active:!!form.active};
}
async function saveEmployee(ev){
 ev.preventDefault();
 let p;try{p=validateEmployee({id:$("empId").value,name:$("empName").value,department:$("empDept").value,shiftStart:$("empStart").value,shiftEnd:$("empEnd").value,grace:$("empGrace").value,active:$("empActive").checked})}catch(e){toast(e.message,true);return}
 const exists=state.employees.some(e=>e.id===p.id);
 if(exists&&!$("empId").readOnly){toast("Employee ID already exists.",true);return}
 const ok=await mutate("apiSaveEmployee",()=>{if(exists){Object.assign(state.employees.find(e=>e.id===p.id),p)}else{state.employees.push({...p,token:idGen()})}},[p]);
 if(ok){resetEmployeeForm();$("employeePanel").classList.remove("open")}
}
function resetEmployeeForm(){$("employeeForm").reset();$("empId").readOnly=false;$("empStart").value="09:00";$("empEnd").value="18:00";$("empGrace").value="10";$("empActive").checked=true;$("employeeFormTitle").textContent="Create Employee"}
function openEmployee(id){
 resetEmployeeForm();if(id){const e=state.employees.find(e=>e.id===id);if(!e)return;
 $("empId").value=e.id;$("empId").readOnly=true;$("empName").value=e.name;$("empDept").value=e.department;$("empStart").value=e.shiftStart;$("empEnd").value=e.shiftEnd;$("empGrace").value=e.grace;$("empActive").checked=!!e.active;$("employeeFormTitle").textContent="Edit Employee"}
 $("employeePanel").classList.add("open");$("employeePanel").scrollIntoView({behavior:"smooth",block:"nearest"})
}
function showQr(id){
 const e=state.employees.find(e=>e.id===id);if(!e)return;selectedQr="QA1|"+e.id+"|"+e.token;
 $("qrName").textContent=e.name+" ("+e.id+")";$("qrText").textContent=selectedQr;$("qrView").innerHTML="";
 try{if(typeof QRCode==="undefined")throw Error("QR library unavailable");new QRCode($("qrView"),{text:selectedQr,width:160,height:160,colorDark:"#071b2b",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.M})}
 catch(err){$("qrView").textContent="QR image unavailable; use Copy QR Value."}
 $("qrPanel").classList.remove("hidden");navigate("employees");$("qrPanel").scrollIntoView({block:"nearest",behavior:"smooth"})
}
function demoRecord(credential,kind){
 const parts=credential.trim().split("|");if(parts.length!==3||parts[0]!=="QA1")throw Error("Invalid employee QR credential.");
 const employee=state.employees.find(e=>e.id===parts[1]&&e.token===parts[2]&&e.active);
 if(!employee)throw Error("Invalid or inactive employee.");
 const at=currentTime(),day=dateKey(at);const leave=state.leaves.some(l=>l.employeeId===employee.id&&day>=l.from&&day<=l.to);
 if(leave)throw Error("Employee has approved leave on this date.");
 let a=state.attendance.find(v=>v.employeeId===employee.id&&v.day===day);
 if(kind==="IN"){if(a&&a.inAt)throw Error("Already timed in on this date.");const inAt=clockStr(at)+":00";if(a){a.inAt=inAt;a.lateMinutes=calcLate(employee,at)}else state.attendance.push({id:idGen(),employeeId:employee.id,day,inAt,outAt:"",lateMinutes:calcLate(employee,at)})}
 else{if(!a||!a.inAt)throw Error("Time In required before Time Out.");if(a.outAt)throw Error("Already timed out.");if(at<=new Date(a.inAt))throw Error("Time Out must be later than Time In.");a.outAt=clockStr(at)+":00"}
 return employee.name+" · "+(kind==="IN"?"Time In":"Time Out")+" · "+fmtStamp(clockStr(at)+":00");
}
async function recordPunch(kind){
 const credential=$("credential").value.trim();if(!credential){toast("Scan or paste an employee QR first.",true);return}
 if(working)return;working=true;
 try{let msg;
 if(PROD){const r=await backend("apiRecordPunch",credential,kind);msg=r.message;await refresh()}
 else{msg=demoRecord(credential,kind);store();render()}
 $("scanResult").textContent=msg;$("scanResult").className="alert";toast(msg)}
 catch(e){$("scanResult").textContent=e.message;$("scanResult").className="alert error";toast(e.message,true)}
 finally{working=false}
}
async function saveLeave(ev){
 ev.preventDefault();const p={employeeId:$("leaveEmployee").value,from:$("leaveFrom").value,to:$("leaveTo").value,reason:$("leaveReason").value.trim()};
 if(!p.employeeId||!p.from||!p.to||p.to<p.from||!p.reason){toast("Complete the employee, valid date range, and reason.",true);return}
 const ok=await mutate("apiSaveLeave",()=>state.leaves.push({...p,id:idGen()}),[p]);if(ok){$("leaveForm").reset();toast("Approved leave recorded.")}
}
async function revokeLeave(id){
 if(!confirm("Revoke this approved leave?"))return;
 await mutate("apiRevokeLeave",()=>{state.leaves=state.leaves.filter(l=>l.id!==id)},[id])
}
function csv(){const day=$("viewDate").value||dateKey(currentTime());const records=state.attendance.filter(a=>a.day===day);
 const lines=[["Date","Employee ID","Name","Department","Time In","Time Out","Late Minutes"],...records.map(a=>{const e=state.employees.find(v=>v.id===a.employeeId)||{};return[a.day,a.employeeId,e.name||"",e.department||"",a.inAt||"",a.outAt||"",a.lateMinutes||0]})];
 const content=lines.map(row=>row.map(v=>'"'+String(v).replace(/^[=+\-@]/,"'").replace(/"/g,'""')+'"').join(",")).join("\r\n");
 const url=URL.createObjectURL(new Blob([content],{type:"text/csv;charset=utf-8;"}));const link=document.createElement("a");link.href=url;link.download="attendance-"+day+".csv";link.click();setTimeout(()=>URL.revokeObjectURL(url),500)}
async function startScan(){
 if(scanner){await stopScan();return}
 if(typeof Html5Qrcode==="undefined"){toast("Camera scanner library unavailable. Paste or test an employee QR instead.",true);return}
 try{scanner=new Html5Qrcode("reader");$("reader").classList.remove("hidden");$("startCamera").textContent="Stop Camera";
 await scanner.start({facingMode:"environment"},{fps:8,qrbox:{width:215,height:215}},text=>{$("credential").value=text;$("scanResult").textContent="QR detected. Choose Time In or Time Out.";stopScan()},()=>{})}
 catch(e){toast("Camera unavailable or permission denied. Manual QR entry still works.",true);await stopScan()}
}
async function stopScan(){if(scanner){const s=scanner;scanner=null;try{if(s.isScanning)await s.stop();await s.clear()}catch(e){}}$("reader").classList.add("hidden");$("startCamera").textContent="Start Camera Scan"}
function bind(){
 document.querySelectorAll(".nav button").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.page)));
 $("viewDate").addEventListener("change",render);$("reportDate").addEventListener("change",()=>{$("viewDate").value=$("reportDate").value;render()});$("refreshData").addEventListener("click",()=>{refresh().catch(e=>toast(e.message,true))});$("employeeSearch").addEventListener("input",render);$("dailySearch").addEventListener("input",()=>{filter=$("dailySearch").value;render()});
 $("addEmployee").addEventListener("click",()=>openEmployee());$("cancelEmployee").addEventListener("click",()=>{$("employeePanel").classList.remove("open");resetEmployeeForm()});
 $("employeeForm").addEventListener("submit",saveEmployee);$("leaveForm").addEventListener("submit",saveLeave);
 $("clockApply").addEventListener("click",()=>{if(PROD)return;const value=$("clockEdit").value;if(!value||isNaN(new Date(value).getTime())){toast("Select a valid test date and time.",true);return}state.clock=value;$("viewDate").value=value.slice(0,10);store();render();toast("Demo clock updated — attendance recalculated.")});
 $("clockReset").addEventListener("click",()=>{if(PROD)return;state.clock=clockStr(new Date());$("viewDate").value=state.clock.slice(0,10);store();render()});
 $("resetDemo").addEventListener("click",()=>{if(PROD)return;if(confirm("Erase this browser's demo attendance and restore sample data?")){state=initialDemo();$("viewDate").value=state.clock.slice(0,10);store();render();toast("Demo data reset.")}});
 document.addEventListener("click",ev=>{const b=ev.target.closest("[data-action]");if(!b)return;const id=b.dataset.id;switch(b.dataset.action){case"edit":openEmployee(id);break;case"qr":showQr(id);break;case"try":{const e=state.employees.find(x=>x.id===id);if(!e)return;$("credential").value="QA1|"+e.id+"|"+e.token;navigate("scanner");$("scanResult").className="notice";$("scanResult").textContent="Test credential loaded. Choose Time In or Time Out.";break}case"delete-leave":revokeLeave(id);break}});
 $("scanIn").addEventListener("click",()=>recordPunch("IN"));$("scanOut").addEventListener("click",()=>recordPunch("OUT"));
 $("startCamera").addEventListener("click",startScan);$("clearScan").addEventListener("click",()=>{$("credential").value="";$("scanResult").textContent="Scan an ID card to begin."});
 $("qrCopy").addEventListener("click",()=>{navigator.clipboard&&navigator.clipboard.writeText(selectedQr).then(()=>toast("QR value copied.")).catch(()=>toast("Copy unavailable.",true))});
 $("qrDownload").addEventListener("click",()=>{const canvas=$("qrView").querySelector("canvas");const img=$("qrView").querySelector("img");const src=canvas?canvas.toDataURL("image/png"):img&&img.src;if(!src){toast("QR image not ready.",true);return}const a=document.createElement("a");a.download="employee-qr.png";a.href=src;a.click()});
 $("exportCsv").addEventListener("click",csv);
 $("goScanner").addEventListener("click",()=>navigate("scanner"))}
async function init(){
 bind();
 if(PROD){try{await refresh()}catch(e){toast("Backend access denied or unavailable: "+e.message,true);$("modeInfo").textContent="Secure Google Sheets backend connection failed.";}}
 else{try{const raw=localStorage.getItem(KEY);state=raw?Object.assign(initialDemo(),JSON.parse(raw)):initialDemo()}catch(e){state=initialDemo()}store()}
 $("viewDate").value=(state.clock||clockStr(now)).slice(0,10);
 $("leaveFrom").value=$("viewDate").value;$("leaveTo").value=$("viewDate").value;
 render();setInterval(()=>{nowTitle();if(PROD&&section==="dashboard")render()},30000);
}
document.addEventListener("DOMContentLoaded",init);
})();