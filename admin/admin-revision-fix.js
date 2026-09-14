(function(){
  'use strict';

  /**
   * ADMIN REVISION PUBLISH GUARD
   * Scope: PAGE-SPECIFIC /admin maintenance workflow.
   * Loaded by assets/js/backend-config.js after the existing admin enhancement files.
   * Purpose: make revision history represent the PREVIOUS live version, not the
   * newly published version. This file intentionally intercepts Publish Live in
   * the capture phase so the older post-publish snapshot listener never runs.
   * Dependencies: Supabase REST API, #publishButton, #saveDraftButton,
   * #saveState, sessionStorage key used by admin.js.
   * Safety rule: if saving the historical snapshot fails, Live is NOT replaced.
   */

  const backend = window.PORTFOLIO_BACKEND_CONFIG || {};
  const baseUrl = String(backend.supabaseUrl || '').replace(/\/$/, '');
  const apiKey = String(backend.supabasePublishableKey || '').trim();
  const stateTable = backend.stateTable || 'portfolio_states';
  const liveScope = backend.liveScope || 'live';
  const draftScope = backend.draftScope || 'draft';
  const sessionKey = 'nl-portfolio-admin-session';

  const $ = selector => document.querySelector(selector);
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  /** PAGE-SPECIFIC: read the already-authenticated admin session. */
  function readSession(){
    try { return JSON.parse(sessionStorage.getItem(sessionKey) || 'null'); }
    catch { return null; }
  }

  /** SHARED-IN-FILE: authenticated headers for Supabase Data API requests. */
  function headers(json=true){
    const session = readSession();
    const out = {
      apikey: apiKey,
      Authorization: `Bearer ${session?.access_token || apiKey}`
    };
    if (json) out['Content-Type'] = 'application/json';
    return out;
  }

  /** SHARED-IN-FILE: small REST wrapper with readable error messages. */
  async function request(path, options={}){
    const response = await fetch(`${baseUrl}${path}`, options);
    const text = await response.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; }
    catch { data = text; }
    if (!response.ok) {
      throw new Error(data?.message || data?.error || data?.msg || `Request failed (${response.status})`);
    }
    return data;
  }

  /** PAGE-SPECIFIC: user-visible status message reusing the admin toast region. */
  function toast(message, type='success'){
    const host = $('#toastRegion') || document.body;
    const item = document.createElement('div');
    item.className = `toast ${type}`;
    item.textContent = message;
    host.appendChild(item);
    setTimeout(() => item.remove(), 3800);
  }

  /** DATA: fetch exactly one portfolio state row. */
  async function fetchState(scope){
    const rows = await request(
      `/rest/v1/${encodeURIComponent(stateTable)}?scope=eq.${encodeURIComponent(scope)}&select=scope,state,updated_at&limit=1`,
      { headers: headers(false), cache:'no-store' }
    );
    return rows?.[0] || null;
  }

  /** DATA: replace/upsert one state row and return the server timestamp. */
  async function saveState(scope, state){
    const rows = await request(`/rest/v1/${encodeURIComponent(stateTable)}?on_conflict=scope`, {
      method:'POST',
      headers:{...headers(true), Prefer:'resolution=merge-duplicates,return=representation'},
      body:JSON.stringify([{scope, state}])
    });
    return rows?.[0] || null;
  }

  /**
   * DATA / AUDIT SAFETY: save the current Live state before it is replaced.
   * The note intentionally says "Previous Live" so the history is unambiguous.
   */
  async function archivePreviousLive(liveRow){
    if (!liveRow?.state) return;
    const when = liveRow.updated_at ? new Date(liveRow.updated_at).toLocaleString() : 'unknown time';
    await request('/rest/v1/portfolio_revisions', {
      method:'POST',
      headers:{...headers(true), Prefer:'return=minimal'},
      body:JSON.stringify([{
        state:liveRow.state,
        note:`Previous Live before publish · ${when}`
      }])
    });
  }

  /**
   * PAGE-SPECIFIC: when the working editor is dirty, ask the existing admin.js
   * Save Draft workflow to persist it first. We wait for its dirty indicator to
   * clear before reading the authoritative Draft row back from Supabase.
   */
  async function ensureDraftSaved(){
    const saveStateBadge = $('#saveState');
    const wasDirty = Boolean(saveStateBadge?.classList.contains('dirty'));
    if (!wasDirty) return fetchState(draftScope);

    $('#saveDraftButton')?.click();
    const started = Date.now();
    while (Date.now() - started < 10000) {
      if (!saveStateBadge?.classList.contains('dirty')) {
        await sleep(180);
        return fetchState(draftScope);
      }
      await sleep(120);
    }
    throw new Error('Draft save did not finish in time. Live was not changed.');
  }

  /** SHARED-IN-FILE: stable enough comparison for the JSON states produced here. */
  function sameState(a, b){
    try { return JSON.stringify(a ?? null) === JSON.stringify(b ?? null); }
    catch { return false; }
  }

  /**
   * PAGE-SPECIFIC / CRITICAL TRANSACTION:
   * 1) Save current working draft.
   * 2) Read current Live BEFORE modification.
   * 3) Archive that old Live if the Draft is different.
   * 4) Promote Draft to Live.
   * If step 3 fails, step 4 is never attempted.
   */
  async function publishWithCorrectRevision(button){
    if (!baseUrl || !apiKey || !readSession()?.access_token) {
      toast('Secure session is required before publishing.', 'error');
      return;
    }

    if (document.querySelector('[data-json-path][data-valid="false"]')) {
      toast('Fix invalid JSON before publishing.', 'error');
      return;
    }

    if (!confirm('Publish this draft to the public portfolio? The current Live version will be saved to Revision History first.')) return;

    const original = button.innerHTML;
    button.disabled = true;
    button.textContent = 'Publishing…';

    try {
      const draftRow = await ensureDraftSaved();
      if (!draftRow?.state) throw new Error('No saved Draft is available. Live was not changed.');

      const liveRow = await fetchState(liveScope);
      if (liveRow?.state && sameState(liveRow.state, draftRow.state)) {
        toast('Draft and Live are already identical. Nothing to publish.');
        return;
      }

      if (liveRow?.state) await archivePreviousLive(liveRow);
      await saveState(liveScope, draftRow.state);

      toast('Published successfully. The previous Live version was saved to Revision History.');
      await sleep(650);
      location.reload();
    } catch (error) {
      toast(error.message || 'Publish failed. Live was not changed.', 'error');
    } finally {
      button.disabled = false;
      button.innerHTML = original;
    }
  }

  /**
   * EVENT OWNERSHIP: capture-phase handler runs before the older target/bubble
   * Publish listeners. stopImmediatePropagation prevents the obsolete
   * post-publish revision snapshot from creating the wrong history entry.
   */
  function interceptPublish(event){
    const button = event.target.closest?.('#publishButton');
    if (!button) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    publishWithCorrectRevision(button);
  }

  document.addEventListener('click', interceptPublish, true);
})();
