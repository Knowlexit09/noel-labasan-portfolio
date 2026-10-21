/**
 * Clockwise QR Attendance — Google Apps Script / Google Sheets backend.
 * Run setupAttendance() as the OWNER in the Apps Script editor BEFORE deploying.
 * Deployment: Execute as USER ACCESSING; access Only myself or Workspace domain.
 * Never deploy as "Anyone" / "Anyone anonymous" for personnel data.
 *
 * This is a manager-operated kiosk MVP, NOT employee self-service. Static QR
 * credentials may be copied; use an attended kiosk for company use.
 */
const ATT = Object.freeze({
  ZONE: 'Asia/Manila',
  HEADERS: {
    Employees: ['EmployeeID','FullName','Department','ShiftStart','ShiftEnd','GraceMinutes','Active','QRToken','CreatedAt','UpdatedAt'],
    Attendance: ['RecordID','EmployeeID','WorkDate','TimeIn','TimeOut','LateMinutes','CreatedAt','UpdatedAt'],
    Leaves: ['LeaveID','EmployeeID','DateFrom','DateTo','Reason','ApprovedBy','CreatedAt'],
    Audit: ['EventID','When','Actor','Action','Reference','Details']
  }
});

function setupAttendance(){
  const email=String(Session.getActiveUser().getEmail()||'').trim().toLowerCase();
  if (!email) throw new Error('Run setupAttendance() while logged in as the Google account that owns the sheet.');
  const props=PropertiesService.getScriptProperties();
  let id=props.getProperty('ATTENDANCE_SHEET_ID');
  let ss=id?SpreadsheetApp.openById(id):SpreadsheetApp.create('Clockwise QR Attendance - Company Database');
  if (!id) props.setProperty('ATTENDANCE_SHEET_ID',ss.getId());
  if (!props.getProperty('ATTENDANCE_ADMIN_EMAILS')) props.setProperty('ATTENDANCE_ADMIN_EMAILS',email);
  Object.keys(ATT.HEADERS).forEach(name=>{
    const sheet=ss.getSheetByName(name)||ss.insertSheet(name);
    const headers=ATT.HEADERS[name];
    if (sheet.getLastRow()===0) {sheet.getRange(1,1,1,headers.length).setValues([headers]);sheet.setFrozenRows(1)}
    else{
      const first=sheet.getRange(1,1,1,headers.length).getValues()[0].map(String);
      if (first.join('|')!==headers.join('|')) throw new Error('Unexpected headers in '+name+'; refusing to overwrite existing records.');
    }
  });
  Logger.log('Attendance spreadsheet: '+ss.getUrl());
  Logger.log('Allowed admin email(s): '+props.getProperty('ATTENDANCE_ADMIN_EMAILS'));
  return ss.getUrl();
}

function _identity(){
 const email=String(Session.getActiveUser().getEmail()||'').trim().toLowerCase();
 const admins=String(PropertiesService.getScriptProperties().getProperty('ATTENDANCE_ADMIN_EMAILS')||'').split(',').map(x=>x.trim().toLowerCase()).filter(Boolean);
 if(!email||admins.indexOf(email)<0)throw new Error('Access denied. Sign in using an authorized attendance manager account.');
 return email;
}
function _db(){
 const id=PropertiesService.getScriptProperties().getProperty('ATTENDANCE_SHEET_ID');
 if(!id)throw new Error('Database not configured. Ask the owner to run setupAttendance().');
 return SpreadsheetApp.openById(id);
}
function doGet(){
 _identity();
 return HtmlService.createHtmlOutputFromFile('Index').setTitle('Clockwise | QR Attendance')
   .addMetaTag('viewport','width=device-width,initial-scale=1');
}
function _rows(ss,name){
 const s=ss.getSheetByName(name),data=s.getDataRange().getValues();
 if(data.length<=1)return [];
 const h=ATT.HEADERS[name];
 return data.slice(1).map((r,i)=>{
    const obj={_sheetRow:i+2};h.forEach((key,k)=>obj[key]=r[k]);return obj;
 }).filter(obj=>String(obj[h[0]])!=='');
}
function _text(value,max){
 const x=String(value===undefined||value===null?'':value).trim();
 if(x.length>max)throw new Error('Text is too long (max '+max+' characters).');
 return /^[=+\-@\t\r\n]/.test(x)?"'"+x:x;
}
function _now(){return new Date()}
function _day(d){return Utilities.formatDate(d,ATT.ZONE,'yyyy-MM-dd')}
function _stamp(d){return Utilities.formatDate(d,ATT.ZONE,"yyyy-MM-dd'T'HH:mm:ss'+08:00'")}
function _clockMinutes(value){
 if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(String(value)))throw new Error('Invalid shift time.');
 const p=String(value).split(':');return Number(p[0])*60+Number(p[1]);
}
function _ymd(s){if(!/^\d{4}-\d{2}-\d{2}$/.test(String(s)))throw new Error('Invalid ISO date.');const v=new Date(s+'T12:00:00+08:00');if(isNaN(v.getTime())||_day(v)!==s)throw new Error('Invalid date.');return s}
function _id(){return Utilities.getUuid()}
function _audit(ss,who,action,reference,details){
 ss.getSheetByName('Audit').appendRow([_id(),_stamp(_now()),who,action,reference,_text(details,300)]);
}
function _publicEmployee(e){
 return {id:String(e.EmployeeID),name:String(e.FullName),department:String(e.Department),shiftStart:String(e.ShiftStart),
  shiftEnd:String(e.ShiftEnd),grace:Number(e.GraceMinutes)||0,active:e.Active===true||String(e.Active).toLowerCase()==='true',token:String(e.QRToken)};
}
function apiBootstrap(){
 _identity();
 const ss=_db();
 const employees=_rows(ss,'Employees').map(_publicEmployee);
 const attendance=_rows(ss,'Attendance').map(r=>({id:String(r.RecordID),employeeId:String(r.EmployeeID),day:String(r.WorkDate),inAt:String(r.TimeIn||''),outAt:String(r.TimeOut||''),lateMinutes:Number(r.LateMinutes)||0}));
 const leaves=_rows(ss,'Leaves').map(r=>({id:String(r.LeaveID),employeeId:String(r.EmployeeID),from:String(r.DateFrom),to:String(r.DateTo),reason:String(r.Reason)}));
 return {employees,attendance,leaves,serverNow:_stamp(_now()),timeZone:ATT.ZONE};
}
function apiSaveEmployee(value){
 const who=_identity();const p=value||{};
 const id=String(p.id||'').trim().toUpperCase(),name=_text(p.name,80),department=_text(p.department,50);
 if(!/^[A-Z0-9_-]{2,24}$/.test(id)||name.length<2||department.length<2)throw new Error('Invalid employee ID, name or department.');
 const start=String(p.shiftStart),end=String(p.shiftEnd),grace=Number(p.grace);
 if(_clockMinutes(end)<=_clockMinutes(start))throw new Error('Same-day shifts only in this version.');
 if(!Number.isInteger(grace)||grace<0||grace>120)throw new Error('Grace must be 0–120 minutes.');
 const lock=LockService.getScriptLock();lock.waitLock(15000);
 try{
  const ss=_db(),sheet=ss.getSheetByName('Employees'),found=_rows(ss,'Employees').find(r=>String(r.EmployeeID)===id);
  const time=_stamp(_now());
  if(found){
    // EmployeeID and QRToken are immutable. Never regenerate a badge on edit.
    sheet.getRange(found._sheetRow,2,1,6).setValues([[name,department,start,end,grace,Boolean(p.active)]]);
    sheet.getRange(found._sheetRow,10).setValue(time);
    _audit(ss,who,'EMPLOYEE_UPDATED',id,'employee metadata updated');
  }else{
    const token=Utilities.getUuid().replace(/-/g,'')+Utilities.getUuid().replace(/-/g,'');
    sheet.appendRow([id,name,department,start,end,grace,Boolean(p.active),token,time,time]);
    _audit(ss,who,'EMPLOYEE_CREATED',id,'employee registered');
  }
  SpreadsheetApp.flush();return {ok:true,id};
 }finally{lock.releaseLock()}
}
function apiRecordPunch(credential,kind){
 const who=_identity(),punch=String(kind||'').toUpperCase(),parts=String(credential||'').trim().split('|');
 if(punch!=='IN'&&punch!=='OUT')throw new Error('Invalid punch action.');
 if(parts.length!==3||parts[0]!=='QA1'||!/^[A-Z0-9_-]{2,24}$/.test(parts[1])||parts[2].length<30)throw new Error('Invalid QR value.');
 const lock=LockService.getScriptLock();lock.waitLock(15000);
 try{
  const ss=_db(),e=_rows(ss,'Employees').find(r=>String(r.EmployeeID)===parts[1]);
  if(!e||String(e.QRToken)!==parts[2]||!(e.Active===true||String(e.Active).toLowerCase()==='true'))throw new Error('QR credential is invalid or employee is inactive.');
  const now=_now(),day=_day(now),clock=_stamp(now);
  const leave=_rows(ss,'Leaves').some(l=>String(l.EmployeeID)===parts[1]&&day>=String(l.DateFrom)&&day<=String(l.DateTo));
  if(leave)throw new Error('Employee is on approved leave today.');
  const row=_rows(ss,'Attendance').find(r=>String(r.EmployeeID)===parts[1]&&String(r.WorkDate)===day);
  const sheet=ss.getSheetByName('Attendance');let label;
  if(punch==='IN'){
    if(row&&row.TimeIn)throw new Error('Already timed in today.');
    const localMinutes=Number(Utilities.formatDate(now,ATT.ZONE,'H'))*60+Number(Utilities.formatDate(now,ATT.ZONE,'m'));
    const shift=_clockMinutes(String(e.ShiftStart)),grace=Number(e.GraceMinutes)||0;
    const late=localMinutes>shift+grace?localMinutes-shift:0;
    if(row){sheet.getRange(row._sheetRow,4).setValue(clock);sheet.getRange(row._sheetRow,6).setValue(late);sheet.getRange(row._sheetRow,8).setValue(clock)}
    else sheet.appendRow([_id(),parts[1],day,clock,'',late,clock,clock]);
    label='Time In';
  }else{
    if(!row||!row.TimeIn)throw new Error('Time In is required first.');
    if(row.TimeOut)throw new Error('Already timed out today.');
    if(new Date(String(row.TimeIn)).getTime()>=now.getTime())throw new Error('Time Out must be later than Time In.');
    sheet.getRange(row._sheetRow,5).setValue(clock);sheet.getRange(row._sheetRow,8).setValue(clock);
    label='Time Out';
  }
  _audit(ss,who,'PUNCH_'+punch,parts[1],day);
  SpreadsheetApp.flush();
  return {ok:true,message:String(e.FullName)+' · '+label+' · '+Utilities.formatDate(now,ATT.ZONE,'h:mm a'),day};
 }finally{lock.releaseLock()}
}
function apiSaveLeave(p){
 const who=_identity();p=p||{};const employeeId=String(p.employeeId||''),from=_ymd(p.from),to=_ymd(p.to),reason=_text(p.reason,120);
 if(to<from||reason.length<3)throw new Error('Leave date range or reason invalid.');
 const lock=LockService.getScriptLock();lock.waitLock(15000);
 try{
  const ss=_db(),e=_rows(ss,'Employees').find(r=>String(r.EmployeeID)===employeeId);
  if(!e||!(e.Active===true||String(e.Active).toLowerCase()==='true'))throw new Error('Employee is inactive or missing.');
  if(_rows(ss,'Leaves').some(l=>String(l.EmployeeID)===employeeId&&String(l.DateFrom)<=to&&String(l.DateTo)>=from))throw new Error('Overlapping approved leave exists.');
  if(_rows(ss,'Attendance').some(r=>String(r.EmployeeID)===employeeId&&String(r.WorkDate)>=from&&String(r.WorkDate)<=to&&r.TimeIn))throw new Error('Employee has attendance recorded within the requested leave period.');
  ss.getSheetByName('Leaves').appendRow([_id(),employeeId,from,to,reason,who,_stamp(_now())]);
  _audit(ss,who,'LEAVE_APPROVED',employeeId,from+' to '+to);
  SpreadsheetApp.flush();return {ok:true};
 }finally{lock.releaseLock()}
}
function apiRevokeLeave(id){
 const who=_identity();const key=String(id||'');
 const lock=LockService.getScriptLock();lock.waitLock(15000);
 try{
  const ss=_db(),r=_rows(ss,'Leaves').find(l=>String(l.LeaveID)===key);
  if(!r)throw new Error('Leave record not found.');
  ss.getSheetByName('Leaves').deleteRow(r._sheetRow);
  _audit(ss,who,'LEAVE_REVOKED',String(r.EmployeeID),String(r.DateFrom)+' to '+String(r.DateTo));
  SpreadsheetApp.flush();return {ok:true};
 }finally{lock.releaseLock()}
}