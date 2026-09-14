(function () {
  'use strict';

  const fallback = window.PORTFOLIO_CONFIG || {};
  const backend = window.PORTFOLIO_BACKEND_CONFIG || {};
  const previewKey = 'nl-portfolio-draft-preview';

  const mergeConfig = (base, remote) => ({
    ...base,
    ...remote,
    owner: { ...(base.owner || {}), ...(remote.owner || {}) },
    modules: { ...(base.modules || {}), ...(remote.modules || {}) },
    content: { ...(base.content || {}), ...(remote.content || {}) },
    ui: { ...(base.ui || {}), ...(remote.ui || {}) }
  });

  function tryLocalDraftPreview() {
    const params = new URLSearchParams(location.search);
    const nonce = params.get('draftPreview');
    if (!nonce) return null;
    try {
      const payload = JSON.parse(localStorage.getItem(previewKey) || 'null');
      if (!payload || payload.nonce !== nonce || !payload.state || Date.now() > Number(payload.expires || 0)) {
        localStorage.removeItem(previewKey);
        return null;
      }
      window.PORTFOLIO_PREVIEW_MODE = true;
      window.PORTFOLIO_PREVIEW_LABEL = payload.label || 'Working Draft';
      return payload.state;
    } catch {
      return null;
    }
  }

  function installPreviewBanner() {
    if (!window.PORTFOLIO_PREVIEW_MODE) return;
    const run = () => {
      if (document.querySelector('.draft-preview-banner')) return;
      const style = document.createElement('style');
      style.textContent = '.draft-preview-banner{position:fixed;left:50%;top:12px;transform:translateX(-50%);z-index:99999;background:#f0ad2c;color:#1b1203;border:1px solid #ffd978;border-radius:999px;padding:7px 13px;font:800 11px/1.2 Inter,ui-sans-serif,system-ui,sans-serif;box-shadow:0 12px 30px #0005}.draft-preview-banner b{margin-right:6px}.draft-preview-banner button{border:0;background:#1b1203;color:#fff;border-radius:999px;margin-left:9px;padding:3px 8px;font-size:9px;cursor:pointer}@media(max-width:620px){.draft-preview-banner{top:8px;width:calc(100% - 20px);text-align:center;border-radius:12px}}';
      document.head.appendChild(style);
      const bar = document.createElement('div');
      bar.className = 'draft-preview-banner';
      bar.innerHTML = `<b>DRAFT PREVIEW</b>${String(window.PORTFOLIO_PREVIEW_LABEL || 'Working Draft')}<button type="button">Exit preview</button>`;
      bar.querySelector('button').addEventListener('click', () => {
        localStorage.removeItem(previewKey);
        location.href = location.pathname;
      });
      document.body.appendChild(bar);
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run, { once:true });
    else run();
  }

  window.PORTFOLIO_READY = (async () => {
    const previewState = tryLocalDraftPreview();
    if (previewState) {
      window.PORTFOLIO_CONFIG = mergeConfig(fallback, previewState);
      installPreviewBanner();
      return window.PORTFOLIO_CONFIG;
    }

    const url = String(backend.supabaseUrl || '').replace(/\/$/, '');
    const key = String(backend.supabasePublishableKey || '').trim();
    const table = backend.stateTable || 'portfolio_states';
    const liveScope = backend.liveScope || 'live';

    if (!url || !key) return fallback;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), Number(backend.publicReadTimeoutMs) || 1800);

    try {
      const endpoint = `${url}/rest/v1/${encodeURIComponent(table)}?scope=eq.${encodeURIComponent(liveScope)}&select=state&limit=1`;
      const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          Accept: 'application/json'
        },
        signal: controller.signal,
        cache: 'no-store'
      });

      if (!response.ok) return fallback;
      const rows = await response.json();
      const remote = rows?.[0]?.state;
      if (!remote || typeof remote !== 'object') return fallback;

      window.PORTFOLIO_CONFIG = mergeConfig(fallback, remote);
      return window.PORTFOLIO_CONFIG;
    } catch (error) {
      console.info('[Portfolio] Remote configuration unavailable; using static fallback.');
      return fallback;
    } finally {
      clearTimeout(timeout);
    }
  })();
})();
