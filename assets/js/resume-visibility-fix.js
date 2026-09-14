(function(){
  'use strict';

  /*
   * PUBLIC RESUME VISIBILITY GUARD
   * Scope: SHARED / public portfolio + draft preview.
   * Runs after the core/app runtimes so resume button visibility always reflects
   * the resolved live/draft configuration, including explicit false values.
   */
  const safeUrl=value=>{
    const v=String(value||'').trim();
    if(!v)return'';
    if(/^(https?:\/\/)/i.test(v))return v;
    if(!/^\s*(javascript:|data:)/i.test(v))return v;
    return'';
  };

  function setVisible(el,visible){
    if(!el)return;
    el.hidden=!visible;
    if(visible) el.style.removeProperty('display');
    else el.style.setProperty('display','none','important');
    el.setAttribute('aria-hidden',String(!visible));
  }

  function downloadUrl(pdf,name){
    if(!pdf)return'';
    const filename=String(name||'Noel-Ochoa-Labasan-Resume.pdf').replace(/[\r\n]/g,'').trim()||'Noel-Ochoa-Labasan-Resume.pdf';
    return `${pdf}${pdf.includes('?')?'&':'?'}download=${encodeURIComponent(filename)}`;
  }

  function apply(){
    const cfg=window.PORTFOLIO_CONFIG||{};
    const resume=cfg.content?.resume||{};
    const pdf=safeUrl(resume.pdfUrl);
    const fallback=safeUrl(resume.url)||'resume.html';
    const viewUrl=pdf||fallback;
    const download=downloadUrl(pdf,resume.pdfFileName);
    const showView=resume.showViewButton!==false;
    const showDownload=resume.showDownloadButton!==false&&Boolean(pdf);

    const actions=document.querySelector('#resume .resume-actions');
    if(actions){
      const links=[...actions.querySelectorAll('a')];
      const view=links[0]||null;
      const dl=links[1]||null;
      if(view){
        setVisible(view,showView);
        if(showView){view.href=viewUrl;view.target='_blank';view.rel='noopener';view.textContent=`▤ ${resume.viewLabel||'View Resume'}`;}
      }
      if(dl){
        setVisible(dl,showDownload);
        if(showDownload){dl.href=download;dl.removeAttribute('target');dl.removeAttribute('rel');dl.textContent=`↓ ${resume.downloadLabel||'Download Resume'}`;}
      }
    }

    const sidebar=document.querySelector('.sidebar-actions[data-module-link="resume"] .btn-primary');
    if(sidebar){
      const showSidebar=showView||showDownload;
      setVisible(sidebar,showSidebar);
      if(showSidebar){
        const useView=showView;
        sidebar.href=useView?viewUrl:download;
        sidebar.textContent=useView?`▤ ${resume.viewLabel||'View Resume'}`:`↓ ${resume.downloadLabel||'Download Resume'}`;
        if(useView){sidebar.target='_blank';sidebar.rel='noopener';}
        else{sidebar.removeAttribute('target');sidebar.removeAttribute('rel');}
      }
    }
  }

  function start(){
    Promise.resolve(window.PORTFOLIO_READY).finally(()=>{
      const run=()=>setTimeout(apply,0);
      if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});
      else run();
    });
  }

  start();
})();
