/*
 * CONTACT INBOX MANAGER
 * Scope: PAGE-SPECIFIC /admin.
 * Depends on: backend-config.js, existing admin sessionStorage auth session,
 * public.portfolio_contact_messages with owner-only RLS.
 */
(function(){
  'use strict';
  const backend=window.PORTFOLIO_BACKEND_CONFIG||{};
  const base=String(backend.supabaseUrl||'').replace(/\/$/,'');
  const key=String(backend.supabasePublishableKey||'').trim();
  const sessionKey='nl-portfolio-admin-session';
  const PAGE_SIZE=10;
  const $=s=>document.querySelector(s);
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const session=()=>{try{return JSON.parse(sessionStorage.getItem(sessionKey)||'null')}catch{return null}};
  const headers=(extra={})=>({apikey:key,Authorization:`Bearer ${session()?.access_token||key}`,...extra});
  const state={page:1,status:'all',q:'',total:0,rows:[],loading:false};

  function inject(){
    const nav=$('#adminNav');
    if(nav&&!nav.querySelector('[data-page-target="inbox"]')){
      const b=document.createElement('button');b.dataset.pageTarget='inbox';b.innerHTML='<span>✉</span><b>Inbox</b><i id="inboxBadge" class="inbox-badge" hidden>0</i>';
      const testimonials=nav.querySelector('[data-page-target="testimonials"]');
      nav.insertBefore(b,testimonials||nav.querySelector('[data-page-target="system"]')||null);
    }
    const body=$('.admin-body');
    if(body&&!$('[data-page="inbox"]')){
      const s=document.createElement('section');s.className='admin-page';s.dataset.page='inbox';s.innerHTML=`
        <div class="page-intro"><div><p class="eyebrow">CONTACT INBOX</p><h2>Portfolio messages</h2><p>Direct messages from the public Get in Touch form. Only your authenticated admin account can read or manage these records.</p></div></div>
        <article class="glass-panel">
          <div class="inbox-toolbar">
            <label>Search<input id="inboxSearch" type="search" placeholder="Name, email, subject or message…"></label>
            <label>Status<select id="inboxStatus"><option value="all">All messages</option><option value="new">New</option><option value="read">Read</option><option value="replied">Replied</option><option value="archived">Archived</option></select></label>
            <button id="inboxRefresh" class="secondary-action" type="button">↻ Refresh</button>
          </div>
          <div class="inbox-summary"><span class="inbox-chip">Total <b id="inboxTotal">0</b></span><span class="inbox-chip">Page <b id="inboxPageLabel">1</b></span></div>
          <div id="inboxList" class="inbox-list"><div class="inbox-empty">Open Inbox to load messages.</div></div>
          <div class="inbox-pagination"><span id="inboxRange">0 messages</span><div><button id="inboxPrev" class="secondary-action" type="button">← Previous</button><button id="inboxNext" class="secondary-action" type="button">Next →</button></div></div>
        </article>
        <dialog id="inboxDialog" class="inbox-dialog"><div class="inbox-dialog-inner"><button id="inboxDialogClose" class="inbox-dialog-close" type="button" aria-label="Close">×</button><div id="inboxDetail" class="inbox-detail"></div></div></dialog>`;
      const system=$('[data-page="system"]');body.insertBefore(s,system||null);
    }
  }

  async function api(path,options={}){
    const r=await fetch(`${base}${path}`,options);const text=await r.text();let data=null;try{data=text?JSON.parse(text):null}catch{data=text}
    if(!r.ok)throw new Error(data?.message||data?.error||`Request failed (${r.status})`);
    return {data,response:r};
  }
  function queryFilter(){
    const parts=[];
    if(state.status!=='all')parts.push(`status=eq.${encodeURIComponent(state.status)}`);
    const q=state.q.trim();
    if(q){const safe=q.replace(/[(),]/g,' ').trim();if(safe)parts.push(`or=(name.ilike.*${encodeURIComponent(safe)}*,email.ilike.*${encodeURIComponent(safe)}*,subject.ilike.*${encodeURIComponent(safe)}*,message.ilike.*${encodeURIComponent(safe)}*)`)}
    return parts.length?'&'+parts.join('&'):'';
  }
  async function load(){
    if(state.loading||!session()?.access_token)return;state.loading=true;renderLoading();
    try{
      const from=(state.page-1)*PAGE_SIZE,to=from+PAGE_SIZE-1;
      const path=`/rest/v1/portfolio_contact_messages?select=id,name,email,subject,message,status,read_at,replied_at,created_at,updated_at&order=created_at.desc${queryFilter()}`;
      const {data,response}=await api(path,{headers:{...headers(),Range:`${from}-${to}`,Prefer:'count=exact'}});
      const range=response.headers.get('content-range')||'';const total=Number(range.split('/')[1])||0;
      state.rows=Array.isArray(data)?data:[];state.total=total;
      if(state.page>1&&!state.rows.length&&total){state.page=Math.max(1,Math.ceil(total/PAGE_SIZE));return load()}
      render();await refreshBadge();
    }catch(err){$('#inboxList').innerHTML=`<div class="inbox-empty">${esc(err.message)}</div>`}finally{state.loading=false}
  }
  async function refreshBadge(){
    if(!session()?.access_token)return;
    try{const {response}=await api('/rest/v1/portfolio_contact_messages?select=id&status=eq.new',{headers:{...headers(),Range:'0-0',Prefer:'count=exact'}});const count=Number((response.headers.get('content-range')||'').split('/')[1])||0;const badge=$('#inboxBadge');if(badge){badge.textContent=count>99?'99+':String(count);badge.hidden=count===0}}catch{}
  }
  function renderLoading(){if($('#inboxList'))$('#inboxList').innerHTML='<div class="inbox-empty">Loading messages…</div>'}
  function fmt(value){try{return new Date(value).toLocaleString([],{dateStyle:'medium',timeStyle:'short'})}catch{return value||''}}
  function excerpt(value,n=88){const s=String(value||'').replace(/\s+/g,' ').trim();return s.length>n?s.slice(0,n-1)+'…':s}
  function render(){
    const host=$('#inboxList');if(!host)return;
    host.innerHTML=state.rows.length?state.rows.map(row=>`<article class="inbox-row ${row.status==='new'?'is-new':''}" data-inbox-id="${esc(row.id)}"><i class="inbox-dot"></i><div class="inbox-person"><b>${esc(row.name)}</b><small>${esc(row.email)}</small></div><div class="inbox-subject"><b>${esc(row.subject)}</b><small>${esc(excerpt(row.message))}</small></div><span class="inbox-date">${esc(fmt(row.created_at))}</span><span class="inbox-status ${esc(row.status)}">${esc(row.status)}</span></article>`).join(''):'<div class="inbox-empty">No messages match this view.</div>';
    $('#inboxTotal').textContent=state.total;$('#inboxPageLabel').textContent=state.page;
    const from=state.total?((state.page-1)*PAGE_SIZE)+1:0;const to=Math.min(state.page*PAGE_SIZE,state.total);$('#inboxRange').textContent=state.total?`${from}–${to} of ${state.total}`:'0 messages';
    $('#inboxPrev').disabled=state.page<=1;$('#inboxNext').disabled=state.page*PAGE_SIZE>=state.total;
  }
  async function patch(id,values){await api(`/rest/v1/portfolio_contact_messages?id=eq.${encodeURIComponent(id)}`,{method:'PATCH',headers:{...headers({'Content-Type':'application/json'}),Prefer:'return=representation'},body:JSON.stringify(values)});await load()}
  async function remove(id){await api(`/rest/v1/portfolio_contact_messages?id=eq.${encodeURIComponent(id)}`,{method:'DELETE',headers:headers()});$('#inboxDialog')?.close();await load()}
  async function openMessage(id){
    let row=state.rows.find(x=>x.id===id);if(!row)return;
    if(row.status==='new'){try{await patch(id,{status:'read'});row=state.rows.find(x=>x.id===id)||{...row,status:'read'}}catch{}}
    const detail=$('#inboxDetail');detail.innerHTML=`<div class="inbox-detail-head"><div><p class="eyebrow">${esc(row.status.toUpperCase())}</p><h3>${esc(row.subject)}</h3></div><span class="inbox-status ${esc(row.status)}">${esc(row.status)}</span></div><div class="inbox-detail-meta"><span>${esc(row.name)}</span><a href="mailto:${encodeURIComponent(row.email)}">${esc(row.email)}</a><span>${esc(fmt(row.created_at))}</span></div><div class="inbox-message">${esc(row.message)}</div><div class="inbox-actions"><a class="primary-action compact" href="mailto:${encodeURIComponent(row.email)}?subject=${encodeURIComponent('Re: '+row.subject)}">✉ Reply by email</a><button class="secondary-action" data-msg-status="replied" type="button">✓ Mark replied</button><button class="secondary-action" data-msg-status="archived" type="button">Archive</button><button class="secondary-action danger-hover" data-msg-delete type="button">Delete</button></div>`;
    detail.querySelectorAll('[data-msg-status]').forEach(b=>b.addEventListener('click',async()=>{await patch(id,{status:b.dataset.msgStatus});$('#inboxDialog')?.close()}));
    detail.querySelector('[data-msg-delete]')?.addEventListener('click',async()=>{if(confirm('Delete this message permanently?'))await remove(id)});
    $('#inboxDialog')?.showModal();
  }
  function bind(){
    $('#adminNav')?.addEventListener('click',e=>{const b=e.target.closest('[data-page-target="inbox"]');if(!b)return;setTimeout(load,0)});
    let timer;$('#inboxSearch')?.addEventListener('input',e=>{clearTimeout(timer);timer=setTimeout(()=>{state.q=e.target.value;state.page=1;load()},300)});
    $('#inboxStatus')?.addEventListener('change',e=>{state.status=e.target.value;state.page=1;load()});$('#inboxRefresh')?.addEventListener('click',load);
    $('#inboxPrev')?.addEventListener('click',()=>{if(state.page>1){state.page--;load()}});$('#inboxNext')?.addEventListener('click',()=>{if(state.page*PAGE_SIZE<state.total){state.page++;load()}});
    $('#inboxList')?.addEventListener('click',e=>{const row=e.target.closest('[data-inbox-id]');if(row)openMessage(row.dataset.inboxId)});
    $('#inboxDialogClose')?.addEventListener('click',()=>$('#inboxDialog')?.close());
    setTimeout(refreshBadge,900);
  }
  function boot(){inject();bind()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
