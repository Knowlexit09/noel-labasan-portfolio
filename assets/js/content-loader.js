(function () {
  'use strict';

  const start = () => {
    const f = window.PORTFOLIO_FRAGMENTS || {};
    const main = document.querySelector('main.main');
    const footer = document.querySelector('footer.site-footer');
    if (!main || !footer) return;

    const wrap = document.createElement('div');
    wrap.innerHTML = (f.home || '') + '<div class="content">' + (f.work || '') + (f.skills || '') + (f.future || '') + (f.connect || '') + '</div>';
    while (wrap.firstChild) main.insertBefore(wrap.firstChild, footer);
  };

  Promise.resolve(window.PORTFOLIO_READY).then(start).catch(start);
})();
