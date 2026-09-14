(function(){
  'use strict';
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const safeUrl=value=>{const v=String(value||'').trim();if(!v)return'';if(/^(https?:\/\/)/i.test(v))return v;if(!/^\s*(javascript:|data:)/i.test(v))return v;return''};
  function downloadUrl(pdf,name){if(!pdf)return'';const filename=String(name||'Noel-Ochoa-Labasan-Resume.pdf').replace(/[\r\n]/g,'').trim()||'Noel-Ochoa-Labasan-Resume.pdf';const join=pdf.includes('?')?'&':'?';return `${pdf}${join}download=${encodeURIComponent(filename)}`;}
  function render(){
    const cfg=window.PORTFOLIO_CONFIG||{};const resume=cfg.content?.resume||{};
    const pdf=safeUrl(resume.pdfUrl);const view=safeUrl(pdf||resume.url)||'resume.html';const dl=downloadUrl(pdf,resume.pdfFileName);
    const showView=resume.showViewButton!==false;const showDownload=resume.showDownloadButton!==false&&Boolean(pdf);
    const card=document.querySelector('#resume .resume-card');
    if(card){
      const title=card.querySelector('.section-title');if(title)title.textContent=resume.title||'View My Resume';
      const desc=card.querySelector('p');if(desc)desc.textContent=resume.description||'';
      const actions=card.querySelector('.resume-actions');if(actions){actions.innerHTML='';
        if(showView){const a=document.createElement('a');a.className='btn btn-primary btn-glow';a.href=view;a.target='_blank';a.rel='noopener';a.innerHTML=`▤ ${esc(resume.viewLabel||'View Resume')}`;actions.appendChild(a)}
        if(showDownload){const a=document.createElement('a');a.className='btn btn-ghost';a.href=dl;a.innerHTML=`↓ ${esc(resume.downloadLabel||'Download Resume')}`;actions.appendChild(a)}
      }
    }
    const sidebar=document.querySelector('.sidebar-actions[data-module-link="resume"]');
    if(sidebar){const primary=sidebar.querySelector('a.btn-primary');if(primary){
      if(showView){primary.hidden=false;primary.href=view;primary.target='_blank';primary.rel='noopener';primary.textContent=`▤ ${resume.viewLabel||'View Resume'}`}
      else if(showDownload){primary.hidden=false;primary.href=dl;primary.removeAttribute('target');primary.removeAttribute('rel');primary.textContent=`↓ ${resume.downloadLabel||'Download Resume'}`}
      else primary.hidden=true;
    }}
  }
  const start=()=>Promise.resolve(window.PORTFOLIO_READY).then(()=>{if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render,{once:true});else setTimeout(render,0)}).catch(()=>{});
  start();
})();
