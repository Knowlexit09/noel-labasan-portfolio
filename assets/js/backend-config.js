/**
 * PUBLIC BACKEND CONFIGURATION
 *
 * Safe values only: Supabase project URL + publishable/anon key.
 * NEVER put a service_role key, GitHub token, password, or other secret here.
 * The publishable key is designed to be used in browser apps; authorization is
 * enforced by Row Level Security in Supabase.
 */
window.PORTFOLIO_BACKEND_CONFIG = Object.freeze({
  supabaseUrl: '',
  supabasePublishableKey: '',
  stateTable: 'portfolio_states',
  liveScope: 'live',
  draftScope: 'draft',
  publicReadTimeoutMs: 1800
});
