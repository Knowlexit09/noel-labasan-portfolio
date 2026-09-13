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

    document.querySelectorAll('[data-sidebar-toggle]').forEach(btn => btn.addEventListener('click', () => body.classList.toggle('sidebar-collapsed')));
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

    const form = document.querySelector('[data-contact-form]');
    if (form) form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      const subject = encodeURIComponent(fd.get('subject') || 'Portfolio inquiry');
      const message = encodeURIComponent(`Name: ${fd.get('name') || ''}\nEmail: ${fd.get('email') || ''}\n\n${fd.get('message') || ''}`);
      location.href = `mailto:${cfg.owner?.email || 'noel.ochoa.labasan@gmail.com'}?subject=${subject}&body=${message}`;
    });

    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  };

  Promise.resolve(window.PORTFOLIO_READY).then(start).catch(start);
})();
