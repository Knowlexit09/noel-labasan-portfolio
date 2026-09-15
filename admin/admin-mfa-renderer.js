/*
 * ADMIN MFA QR RENDERER + AAL GUIDE
 * Scope: PAGE-SPECIFIC /admin Security > Authenticator MFA.
 * Loaded by: assets/js/backend-config.js after admin-mfa.js.
 * Uses: #mfaQrImage created by admin-mfa.js and the Security MFA card.
 *
 * Why this exists:
 * Supabase Auth returns the TOTP QR code as raw SVG text. Browsers are not
 * equally reliable when a large raw SVG is assigned as an encoded data URL.
 * This module normalizes that trusted Supabase SVG into an in-memory Blob URL.
 * The authenticator secret is never persisted or sent anywhere by this module.
 */
(function(){
  'use strict';

  const $=selector=>document.querySelector(selector);
  let qrBlobUrl='';
  let qrObserver=null;

  function releaseBlob(){
    if(!qrBlobUrl)return;
    try{URL.revokeObjectURL(qrBlobUrl)}catch{}
    qrBlobUrl='';
  }

  function decodeSvgDataUrl(value){
    const comma=value.indexOf(',');
    if(comma<0)return'';
    const meta=value.slice(0,comma);
    const payload=value.slice(comma+1);
    try{
      return /;base64/i.test(meta)?atob(payload):decodeURIComponent(payload);
    }catch{return''}
  }

  function normalizeSvg(svg){
    let out=String(svg||'').trim();
    if(!out)return'';
    const svgIndex=out.indexOf('<svg');
    if(svgIndex>0)out=out.slice(svgIndex);
    if(!out.startsWith('<svg'))return'';
    if(!/\sxmlns=/.test(out))out=out.replace('<svg','<svg xmlns="http://www.w3.org/2000/svg"');
    return out;
  }

  function clearFallback(shell){
    shell?.querySelector('.mfa-qr-fallback')?.remove();
  }

  function showFallback(){
    const img=$('#mfaQrImage');
    const shell=img?.closest('.mfa-qr-shell');
    if(!img||!shell)return;
    img.hidden=true;
    clearFallback(shell);
    const note=document.createElement('div');
    note.className='mfa-qr-fallback';
    note.innerHTML='<b>QR preview unavailable</b><span>Use the manual secret below in your authenticator app.</span>';
    shell.appendChild(note);
  }

  function renderCurrentSource(){
    const img=$('#mfaQrImage');
    const shell=img?.closest('.mfa-qr-shell');
    if(!img||!shell)return;
    const raw=String(img.getAttribute('src')||'').trim();
    if(!raw||raw.startsWith('blob:'))return;

    let svg='';
    if(raw.startsWith('<svg')||raw.startsWith('<?xml'))svg=normalizeSvg(raw);
    else if(/^data:image\/svg\+xml/i.test(raw))svg=normalizeSvg(decodeSvgDataUrl(raw));

    if(!svg){
      if(/^data:image\//i.test(raw)||/^https?:\/\//i.test(raw)){
        img.hidden=false;
        clearFallback(shell);
      }
      return;
    }

    releaseBlob();
    const blob=new Blob([svg],{type:'image/svg+xml;charset=utf-8'});
    qrBlobUrl=URL.createObjectURL(blob);
    clearFallback(shell);
    img.hidden=false;
    img.src=qrBlobUrl;
  }

  function injectAalGuide(){
    const detail=$('#securityMfaDetail');
    const card=detail?.closest('.security-card');
    if(!card||card.querySelector('[data-aal-guide]'))return;
    const guide=document.createElement('div');
    guide.dataset.aalGuide='true';
    guide.className='mfa-aal-guide';
    guide.innerHTML='<span><b>AAL1</b><small>Password verified</small></span><i>→</i><span><b>AAL2</b><small>Password + authenticator verified</small></span>';
    card.appendChild(guide);
  }

  function attach(){
    injectAalGuide();
    const img=$('#mfaQrImage');
    if(!img){setTimeout(attach,120);return}
    if(img.dataset.qrRendererAttached==='true')return;
    img.dataset.qrRendererAttached='true';
    img.addEventListener('error',()=>{
      if(String(img.getAttribute('src')||'').startsWith('blob:'))showFallback();
      else{
        renderCurrentSource();
        setTimeout(()=>{if(!img.complete||img.naturalWidth===0)showFallback()},120);
      }
    });
    qrObserver=new MutationObserver(records=>{
      if(records.some(record=>record.attributeName==='src'))renderCurrentSource();
    });
    qrObserver.observe(img,{attributes:true,attributeFilter:['src']});
    renderCurrentSource();
  }

  window.addEventListener('beforeunload',()=>{qrObserver?.disconnect();releaseBlob()});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',attach);else attach();
})();
