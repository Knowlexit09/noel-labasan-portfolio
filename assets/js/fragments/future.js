window.PORTFOLIO_FRAGMENTS=window.PORTFOLIO_FRAGMENTS||{};
window.PORTFOLIO_FRAGMENTS["future"]=`
<section class="section" data-module="services" id="services">
  <div class="section-heading">
    <div>
      <div class="section-kicker">How I can help</div>
      <h2 class="section-title">Services & Capabilities</h2>
      <p class="section-subtitle">Practical development and support work aligned with my project and professional experience.</p>
    </div>
  </div>
  <div class="future-card-grid" data-services-list></div>
  <div class="empty-state panel" data-services-empty hidden>No services are published yet.</div>
</section>

<section class="section" data-module="testimonials" id="testimonials">
  <div class="section-heading">
    <div>
      <div class="section-kicker">References</div>
      <h2 class="section-title">Testimonials</h2>
      <p class="section-subtitle">Only real testimonials that have permission to be shown are published here.</p>
    </div>
    <div class="carousel-controls" data-testimonial-controls hidden>
      <button class="icon-btn future-icon-btn" type="button" data-testimonial-prev aria-label="Previous testimonial">‹</button>
      <button class="icon-btn future-icon-btn" type="button" data-testimonial-next aria-label="Next testimonial">›</button>
    </div>
  </div>
  <div class="testimonial-track" data-testimonials-list></div>
  <div class="empty-state panel" data-testimonials-empty hidden>Testimonials will appear here once a real reference is approved for publishing.</div>
</section>

<section class="section" data-module="blog" id="blog">
  <div class="section-heading">
    <div>
      <div class="section-kicker">Writing</div>
      <h2 class="section-title">Technical Notes</h2>
      <p class="section-subtitle">Short write-ups on lessons learned from Java, SQL, Apps Script, application support, and business-system development.</p>
    </div>
  </div>
  <div class="article-grid" data-blog-list></div>
  <div class="empty-state panel" data-blog-empty hidden>No technical notes are published yet.</div>
</section>

<section class="section" data-module="techLab" id="tech-lab">
  <div class="section-heading">
    <div>
      <div class="section-kicker">Experiments</div>
      <h2 class="section-title">Tech Lab</h2>
      <p class="section-subtitle">Focused experiments and implementation patterns that sit behind the larger projects.</p>
    </div>
  </div>
  <div class="lab-grid" data-techlab-list></div>
  <div class="empty-state panel" data-techlab-empty hidden>No lab entries are published yet.</div>
</section>

<section class="section" data-module="activity" id="activity">
  <div class="section-heading">
    <div>
      <div class="section-kicker">Progress</div>
      <h2 class="section-title">Build Activity</h2>
      <p class="section-subtitle">Meaningful learning and project milestones rather than a vanity commit counter.</p>
    </div>
  </div>
  <article class="panel activity-panel">
    <div class="activity-timeline" data-activity-list></div>
    <div class="empty-state" data-activity-empty hidden>No activity entries are published yet.</div>
  </article>
</section>`;
