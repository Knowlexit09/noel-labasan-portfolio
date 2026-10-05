/*
 * QYNTRO DAILY — ACTUAL COVER SYNC
 * Scope: PAGE-SPECIFIC /multimedia/qyntro-daily.html.
 *
 * Purpose:
 * - Shows the owner's actual Canva Page 1 cover before the Qyntro MP4 starts.
 * - Keeps native video controls and no-autoplay behavior after the user presses play.
 * - Does not mutate Draft, Live, Storage, or Canva.
 */
(function qyntroCoverSync(){
  'use strict';

  const COVER_EMBED_URL = 'https://www.canva.com/design/DAHXKSqMpDs/view?embed';

  function injectStyles(){
    if (document.querySelector('#qyntroCoverSyncStyles')) return;
    const style = document.createElement('style');
    style.id = 'qyntroCoverSyncStyles';
    style.textContent = `
      .qyntro-video-wrap{position:relative}
      .qyntro-preplay-cover{
        position:absolute;
        inset:0;
        z-index:6;
        overflow:hidden;
        border-radius:inherit;
        background:#120f0d;
      }
      .qyntro-preplay-cover.is-hidden{display:none!important}
      .qyntro-preplay-cover iframe{
        position:absolute;
        inset:0;
        width:100%;
        height:100%;
        border:0;
        background:#120f0d;
        pointer-events:none;
      }
      .qyntro-preplay-cover::after{
        content:"";
        position:absolute;
        inset:0;
        background:linear-gradient(to top,rgba(8,6,5,.54),rgba(8,6,5,0) 48%);
        pointer-events:none;
      }
      .qyntro-preplay-play{
        position:absolute;
        z-index:7;
        left:50%;
        bottom:18px;
        transform:translateX(-50%);
        min-height:42px;
        padding:0 17px;
        border:1px solid rgba(255,255,255,.28);
        border-radius:999px;
        background:rgba(12,9,7,.82);
        color:#fff8ef;
        font:inherit;
        font-size:.82rem;
        font-weight:800;
        letter-spacing:.01em;
        cursor:pointer;
        backdrop-filter:blur(8px);
        box-shadow:0 10px 26px rgba(0,0,0,.28);
      }
      .qyntro-preplay-play:hover,
      .qyntro-preplay-play:focus-visible{
        border-color:#e78a4d;
        background:rgba(29,18,13,.94);
        outline:none;
      }
      @media (max-width:640px){
        .qyntro-preplay-play{bottom:12px;min-height:38px;font-size:.75rem;padding:0 14px}
      }
    `;
    document.head.appendChild(style);
  }

  function install(){
    const wrap = document.querySelector('.qyntro-video-wrap');
    const video = wrap?.querySelector('[data-qy-video]');
    if (!wrap || !video || wrap.querySelector('.qyntro-preplay-cover')) return;

    video.removeAttribute('poster');

    const cover = document.createElement('div');
    cover.className = 'qyntro-preplay-cover';
    cover.setAttribute('aria-label','Qyntro Daily actual project cover');
    cover.innerHTML = `
      <iframe src="${COVER_EMBED_URL}" title="Qyntro Daily actual Canva cover" tabindex="-1" aria-hidden="true" loading="eager" allow="fullscreen"></iframe>
      <button type="button" class="qyntro-preplay-play" aria-label="Play Qyntro Daily presentation video">▶ Play presentation</button>
    `;
    wrap.appendChild(cover);

    const button = cover.querySelector('.qyntro-preplay-play');
    const showCover = () => cover.classList.remove('is-hidden');
    const hideCover = () => cover.classList.add('is-hidden');

    button?.addEventListener('click', async () => {
      video.removeAttribute('poster');
      video.hidden = false;
      hideCover();
      try {
        await video.play();
      } catch (_) {
        showCover();
      }
    });

    video.addEventListener('play', hideCover);
    video.addEventListener('error', showCover);
  }

  function boot(){
    injectStyles();
    install();
    setTimeout(install,250);
    setTimeout(install,1000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
