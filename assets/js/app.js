(function () {
  'use strict';

  const start = () => {
    const cfg = window.PORTFOLIO_CONFIG || { modules: {}, ui: {} };
    const root = document.documentElement;
    const body = document.body;

    const params = new URLSearchParams(location.search);
    if (params.has('preview')) {
      params.delete('preview');
      const clean = location.pathname + (params.toString() ? `?${params}` : '') + location.hash;
      history.replaceState(null, '', clean);
    }

    const savedTheme = localStorage.getItem('nl-theme') || cfg.ui?.defaultTheme || 'dark';
    setTheme(savedTheme);
    function setTheme(theme) {
      root.setAttribute('data-theme', theme);
      localStorage.setItem('nl-theme', theme);
      document.querySelectorAll('[data-theme-choice]').forEach(btn => btn.classList.toggle('active', btn.dataset.themeChoice === theme));
    }
    document.querySelectorAll('[data-theme-choice]').forEach(btn => btn.addEventListener('click', () => setTheme(btn.dataset.themeChoice)));

    /*
     * SIDEBAR TOGGLE
     * The collapse control itself must never inherit .hide-collapsed, otherwise
     * the only way to expand the sidebar is a page refresh. Keep the control
     * visible and update its icon/accessible label for both states.
     */
    const sidebarToggleButtons = [...document.querySelectorAll('[data-sidebar-toggle]')];
    const sidebarBrand = document.querySelector('.sidebar-top .brand-mark');

    function syncSidebarToggle() {
      const collapsed = body.classList.contains('sidebar-collapsed');
      sidebarToggleButtons.forEach(btn => {
        btn.classList.remove('hide-collapsed');
        btn.textContent = collapsed ? '›' : '‹';
        btn.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
        btn.title = collapsed ? 'Expand sidebar' : 'Collapse sidebar';
      });
      if (sidebarBrand) sidebarBrand.style.display = collapsed ? 'none' : '';
      const sidebarTop = document.querySelector('.sidebar-top');
      if (sidebarTop) sidebarTop.style.justifyContent = collapsed ? 'center' : '';
    }

    sidebarToggleButtons.forEach(btn => {
      btn.classList.remove('hide-collapsed');
      btn.addEventListener('click', () => {
        body.classList.toggle('sidebar-collapsed');
        syncSidebarToggle();
      });
    });
    syncSidebarToggle();

    document.querySelectorAll('[data-mobile-menu]').forEach(btn => btn.addEventListener('click', () => body.classList.toggle('mobile-nav-open')));
    document.querySelectorAll('.sidebar-nav a').forEach(a => a.addEventListener('click', () => body.classList.remove('mobile-nav-open')));

    document.querySelectorAll('[data-owner-link]').forEach(el => {
      const key = el.dataset.ownerLink;
      const value = cfg.owner?.[key];
      if (!value) {
        el.hidden = true;
        el.classList.add('module-hidden');
        return;
      }
      el.href = value;
    });

    const enabled = key => cfg.modules?.[key] !== false;

    function setVisible(el, isOn) {
      el.hidden = !isOn;
      el.classList.toggle('module-hidden', !isOn);
      el.setAttribute('aria-hidden', isOn ? 'false' : 'true');
      if (el.matches('a,button,input,textarea,select')) {
        if (isOn) el.removeAttribute('tabindex');
        else el.setAttribute('tabindex', '-1');
      }
    }

    document.querySelectorAll('[data-module]').forEach(el => setVisible(el, enabled(el.dataset.module)));
    document.querySelectorAll('[data-module-link]').forEach(el => {
      const isOn = enabled(el.dataset.moduleLink);
      setVisible(el, isOn);
      if (!isOn) el.classList.remove('active');
    });

    const search = document.querySelector('[data-site-search]');
    if (search) {
      const wrap = search.closest('.search-wrap');
      const clear = wrap?.querySelector('.search-clear');
      const searchable = [...document.querySelectorAll('[data-searchable]')];
      const empty = document.querySelector('[data-search-empty]');
      const run = () => {
        const q = search.value.trim().toLowerCase();
        wrap?.classList.toggle('has-query', !!q);
        if (!q) {
          searchable.forEach(el => el.classList.remove('search-hidden'));
          empty?.classList.remove('show');
          return;
        }
        let matches = 0;
        searchable.forEach(el => {
          const hit = (el.dataset.searchable + ' ' + el.textContent).toLowerCase().includes(q);
          el.classList.toggle('search-hidden', !hit);
          if (hit) matches++;
        });
        empty?.classList.toggle('show', matches === 0);
      };
      search.addEventListener('input', run);
      clear?.addEventListener('click', () => {
        search.value = '';
        run();
        search.focus();
      });
    }

    const sectionLinks = [...document.querySelectorAll('.sidebar-nav a[href^="#"]')];
    const sections = sectionLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    if (sections.length && 'IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        const visible = entries
          .filter(x => x.isIntersecting && !x.target.classList.contains('module-hidden'))
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        sectionLinks.forEach(a => {
          const visibleLink = !a.classList.contains('module-hidden');
          a.classList.toggle('active', visibleLink && a.getAttribute('href') === '#' + visible.target.id);
        });
      }, { rootMargin: '-18% 0px -68% 0px', threshold: [0,.1,.3] });
      sections.forEach(s => obs.observe(s));
    }

    /*
     * CONTACT FORM
     * Scope: PUBLIC CONTACT MODULE.
     * Sends directly to a Supabase Edge Function. The function owns validation,
     * spam checks, rate limiting and database insertion; the browser never gets
     * database write permissions or a service-role key.
     */
    const form = document.querySelector('[data-contact-form]');
    if (form) {
      const backend = window.PORTFOLIO_BACKEND_CONFIG || {};
      const apiBase = String(backend.supabaseUrl || '').replace(/\/$/, '');
      const apiKey = String(backend.supabasePublishableKey || '').trim();
      const submit = form.querySelector('button[type="submit"]');
      const hint = form.querySelector('p');
      const startedAt = Date.now();

      if (submit) submit.textContent = '✉ Send Message';
      if (hint) hint.textContent = 'Your message is sent securely to the private portfolio inbox. Your details are used only to respond to your inquiry.';

      const honeypot = document.createElement('input');
      honeypot.type = 'text';
      honeypot.name = 'website';
      honeypot.tabIndex = -1;
      honeypot.autocomplete = 'off';
      honeypot.setAttribute('aria-hidden', 'true');
      honeypot.style.cssText = 'position:absolute;left:-9999px;opacity:0;pointer-events:none';
      form.appendChild(honeypot);

      const status = document.createElement('p');
      status.className = 'form-message';
      status.setAttribute('role', 'status');
      status.style.marginTop = '10px';
      form.appendChild(status);

      form.addEventListener('submit', async e => {
        e.preventDefault();
        const fd = new FormData(form);
        const payload = {
          name: String(fd.get('name') || '').trim(),
          email: String(fd.get('email') || '').trim(),
          subject: String(fd.get('subject') || '').trim(),
          message: String(fd.get('message') || '').trim(),
          website: String(fd.get('website') || ''),
          startedAt
        };

        status.textContent = '';
        if (!payload.name || !payload.email || !payload.subject || payload.message.length < 10) {
          status.textContent = 'Please complete all fields and enter a message of at least 10 characters.';
          return;
        }
        if (!apiBase || !apiKey) {
          status.textContent = 'Message service is temporarily unavailable. Please use the email link instead.';
          return;
        }

        const original = submit?.textContent || 'Send Message';
        if (submit) { submit.disabled = true; submit.textContent = 'Sending…'; }
        try {
          const response = await fetch(`${apiBase}/functions/v1/portfolio-contact-submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', apikey: apiKey },
            body: JSON.stringify(payload)
          });
          const data = await response.json().catch(() => ({}));
          if (!response.ok) throw new Error(data?.message || 'Message could not be sent.');
          form.reset();
          status.textContent = data?.message || 'Thanks — your message was sent.';
        } catch (error) {
          status.textContent = error.message || 'Message could not be sent. Please try again.';
        } finally {
          if (submit) { submit.disabled = false; submit.textContent = original; }
        }
      });
    }

    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  };

  Promise.resolve(window.PORTFOLIO_READY).then(start).catch(start);
})();
