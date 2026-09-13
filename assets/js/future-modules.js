(function () {
  'use strict';

  const cfg = window.PORTFOLIO_CONFIG || {};
  const content = cfg.content || {};

  const esc = value => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const published = key => (Array.isArray(content[key]) ? content[key] : [])
    .filter(item => item && item.published !== false);

  const safeUrl = value => {
    const url = String(value || '').trim();
    if (!url) return '';
    return /^(https?:\/\/|mailto:|tel:)/i.test(url) ? url : '';
  };

  const showEmpty = (selector, isEmpty) => {
    const el = document.querySelector(selector);
    if (el) el.hidden = !isEmpty;
  };

  // SERVICES
  const services = published('services');
  const servicesHost = document.querySelector('[data-services-list]');
  if (servicesHost) {
    servicesHost.innerHTML = services.map(item => `
      <article class="future-card panel" data-searchable="${esc([item.title,item.description,...(item.tags||[])].join(' '))}">
        <div class="future-card-icon">${esc(item.icon || '◇')}</div>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description)}</p>
        <div class="chips">${(item.tags || []).map(tag => `<span class="chip">${esc(tag)}</span>`).join('')}</div>
      </article>`).join('');
    showEmpty('[data-services-empty]', services.length === 0);
  }

  // TESTIMONIALS
  const testimonials = published('testimonials');
  const testimonialHost = document.querySelector('[data-testimonials-list]');
  if (testimonialHost) {
    testimonialHost.innerHTML = testimonials.map(item => {
      const initials = String(item.name || '?').split(/\s+/).filter(Boolean).slice(0,2).map(x => x[0]).join('').toUpperCase();
      const sourceUrl = safeUrl(item.sourceUrl);
      const org = [item.role, item.organization].filter(Boolean).join(' · ');
      return `
        <article class="testimonial-card panel" data-searchable="${esc([item.name,item.role,item.organization,item.quote,item.relationship].join(' '))}">
          <div class="quote-mark">“</div>
          <p class="testimonial-quote">${esc(item.quote)}</p>
          <div class="testimonial-person">
            <div class="testimonial-avatar">${esc(initials)}</div>
            <div>
              <strong>${esc(item.name)}</strong>
              <span>${esc(org)}</span>
              ${item.relationship ? `<small>${esc(item.relationship)}</small>` : ''}
            </div>
          </div>
          <div class="testimonial-meta">
            ${item.verified ? '<span class="trust-badge">✓ Permission confirmed</span>' : ''}
            ${sourceUrl ? `<a class="text-link" href="${esc(sourceUrl)}" target="_blank" rel="noopener noreferrer">View source ↗</a>` : ''}
          </div>
        </article>`;
    }).join('');
    showEmpty('[data-testimonials-empty]', testimonials.length === 0);
    const controls = document.querySelector('[data-testimonial-controls]');
    if (controls) controls.hidden = testimonials.length <= 1;
  }

  // BLOG / NOTES
  const posts = published('blog');
  const blogHost = document.querySelector('[data-blog-list]');
  if (blogHost) {
    blogHost.innerHTML = posts.map(item => {
      const url = safeUrl(item.url);
      return `
        <article class="article-card panel" data-searchable="${esc([item.title,item.excerpt,item.date,...(item.tags||[])].join(' '))}">
          <div class="article-meta">${esc(item.date || '')}${item.readTime ? ` · ${esc(item.readTime)}` : ''}</div>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.excerpt)}</p>
          <div class="chips">${(item.tags || []).map(tag => `<span class="chip">${esc(tag)}</span>`).join('')}</div>
          ${url ? `<a class="project-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">Read note →</a>` : ''}
        </article>`;
    }).join('');
    showEmpty('[data-blog-empty]', posts.length === 0);
  }

  // TECH LAB
  const labs = published('techLab');
  const labHost = document.querySelector('[data-techlab-list]');
  if (labHost) {
    labHost.innerHTML = labs.map(item => `
      <article class="lab-card panel" data-searchable="${esc([item.title,item.description,item.status,...(item.tags||[])].join(' '))}">
        <div class="lab-card-top">
          <span class="lab-icon">${esc(item.icon || '⌘')}</span>
          <span class="status-pill status-portfolio">${esc(item.status || 'Lab')}</span>
        </div>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description)}</p>
        <div class="chips">${(item.tags || []).map(tag => `<span class="chip">${esc(tag)}</span>`).join('')}</div>
      </article>`).join('');
    showEmpty('[data-techlab-empty]', labs.length === 0);
  }

  // ACTIVITY
  const activity = published('activity');
  const activityHost = document.querySelector('[data-activity-list]');
  if (activityHost) {
    activityHost.innerHTML = activity.map(item => `
      <div class="activity-item" data-searchable="${esc([item.date,item.title,item.description,item.type].join(' '))}">
        <div class="activity-dot"></div>
        <div class="activity-date">${esc(item.date || '')}</div>
        <div class="activity-copy">
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.description)}</p>
          ${item.type ? `<span class="activity-type">${esc(item.type)}</span>` : ''}
        </div>
      </div>`).join('');
    showEmpty('[data-activity-empty]', activity.length === 0);
  }

  // TESTIMONIAL CAROUSEL CONTROLS
  const track = document.querySelector('[data-testimonials-list]');
  const prev = document.querySelector('[data-testimonial-prev]');
  const next = document.querySelector('[data-testimonial-next]');
  const scrollTrack = direction => {
    if (!track) return;
    const card = track.querySelector('.testimonial-card');
    const step = card ? card.getBoundingClientRect().width + 14 : track.clientWidth * .85;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  };
  prev?.addEventListener('click', () => scrollTrack(-1));
  next?.addEventListener('click', () => scrollTrack(1));
})();
