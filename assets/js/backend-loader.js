(function () {
  'use strict';

  const fallback = window.PORTFOLIO_CONFIG || {};
  const backend = window.PORTFOLIO_BACKEND_CONFIG || {};

  const mergeConfig = (base, remote) => ({
    ...base,
    ...remote,
    owner: { ...(base.owner || {}), ...(remote.owner || {}) },
    modules: { ...(base.modules || {}), ...(remote.modules || {}) },
    content: { ...(base.content || {}), ...(remote.content || {}) },
    ui: { ...(base.ui || {}), ...(remote.ui || {}) }
  });

  window.PORTFOLIO_READY = (async () => {
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
