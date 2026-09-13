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

/*
 * ADMIN VIEW VISIBILITY SAFETY
 * Author CSS sets the login view to display:grid. Browsers' default [hidden]
 * rule can otherwise be overridden by that author rule after a successful
 * login. Enforce the HTML hidden contract for every admin view/component.
 */
(function enforceAdminHiddenState(){
  if (!/\/admin\/?$/i.test(location.pathname)) return;
  const style = document.createElement('style');
  style.textContent = '[hidden]{display:none!important}';
  document.head.appendChild(style);
})();

/*
 * ADMIN-SPECIFIC OWNER BOOTSTRAP
 * The button below only starts Supabase's normal email/password signup flow.
 * No password is stored in this file or repository. Email confirmation remains
 * controlled by Supabase Auth. RLS still limits maintenance writes to ownerEmail.
 */
(function setupOwnerBootstrap(){
  if (!/\/admin\/?$/i.test(location.pathname)) return;

  window.addEventListener('DOMContentLoaded', () => {
    const cfg = window.PORTFOLIO_BACKEND_CONFIG;
    const form = document.getElementById('loginForm');
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');
    const message = document.getElementById('loginMessage');
    if (!form || !email || !password || !message) return;

    const setupButton = document.createElement('button');
    setupButton.type = 'button';
    setupButton.className = 'secondary-action';
    setupButton.style.width = '100%';
    setupButton.style.marginTop = '8px';
    setupButton.textContent = 'First time here? Create owner account';
    form.insertBefore(setupButton, message);

    setupButton.addEventListener('click', async () => {
      const ownerEmail = String(cfg.ownerEmail || '').toLowerCase();
      const enteredEmail = String(email.value || '').trim().toLowerCase();
      const enteredPassword = String(password.value || '');

      message.textContent = '';
      if (enteredEmail !== ownerEmail) {
        message.textContent = 'Owner setup is restricted to the authorized portfolio email.';
        return;
      }
      if (enteredPassword.length < 8) {
        message.textContent = 'Use a password with at least 8 characters.';
        return;
      }

      setupButton.disabled = true;
      setupButton.textContent = 'Creating secure owner account…';
      try {
        const response = await fetch(`${cfg.supabaseUrl}/auth/v1/signup`, {
          method: 'POST',
          headers: {
            apikey: cfg.supabasePublishableKey,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: ownerEmail,
            password: enteredPassword,
            data: { role: 'portfolio_owner' }
          })
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data?.msg || data?.message || data?.error_description || 'Owner account setup failed.');

        if (data?.session?.access_token) {
          message.textContent = 'Owner account created. You can now sign in securely.';
        } else {
          message.textContent = 'Owner account created. Check your email and confirm the account, then return here and sign in.';
        }
      } catch (error) {
        message.textContent = error.message || 'Owner account setup failed.';
      } finally {
        setupButton.disabled = false;
        setupButton.textContent = 'First time here? Create owner account';
      }
    });
  });
})();
