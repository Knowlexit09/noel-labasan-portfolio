/**
 * PUBLIC BACKEND CONFIGURATION
 *
 * Safe values only: Supabase project URL + publishable key.
 * NEVER put a service_role key, GitHub token, password, or other secret here.
 * Authorization is enforced by Supabase Auth + Row Level Security.
 */
window.PORTFOLIO_BACKEND_CONFIG = Object.freeze({
  supabaseUrl: 'https://isoiolgajmpldkrvqbkp.supabase.co',
  supabasePublishableKey: 'sb_publishable_NNFanaHbH5m7ccXbok6mOA_XHLqf2bZ',
  stateTable: 'portfolio_states',
  liveScope: 'live',
  draftScope: 'draft',
  publicReadTimeoutMs: 1800,
  ownerEmail: 'noel.ochoa.labasan@gmail.com'
});
