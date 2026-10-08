(function () {
  'use strict';

  const lines = (...rows) => rows.join('\n');

  window.KNOWLEDGE_LAB_V1 = {
    version: '2026-10-09-v1',
    lessons: [
      {
        id: 'html-document-structure',
        category: 'HTML',
        level: 'Beginner',
        title: 'Build a clean HTML document',
        summary: 'Start with a valid page structure, semantic content, and a button you can immediately see in the live result.',
        objective: 'Understand the minimum structure of a real HTML document and where visible page content belongs.',
        explanation: 'HTML gives a page its structure and meaning. The browser reads elements such as headings, paragraphs, sections, links, and buttons, then builds the document tree.\n\nFor learning examples, keep the structure small enough that you can explain every element you add.',
        tip: 'Use one clear <h1> for the page topic, then organize supporting content with semantic elements such as <main>, <section>, and <article>.',
        hack: 'In the IDE, change the heading text and press Ctrl/⌘ + Enter. The result refreshes without leaving the lesson.',
        mistake: 'Do not put visible page content inside <head>. The <head> is for metadata, the title, stylesheets, and similar document information.',
        expected: 'A small introduction card with a heading, paragraph, and working button appears in the Result panel.',
        realUse: 'This same structure is the foundation of portfolio pages, landing pages, admin screens, and documentation sites.',
        tags: ['html', 'document', 'semantic', 'beginner', 'structure'],
        html: lines(
          '<main class="intro-card">',
          '  <p class="eyebrow">KNOWLEDGE LAB</p>',
          '  <h1>Hello, browser.</h1>',
          '  <p>This content is real HTML rendered inside the sandbox.</p>',
          '  <button type="button">Working button</button>',
          '</main>'
        ),
        css: lines(
          'body {',
          '  margin: 0;',
          '  min-height: 100vh;',
          '  display: grid;',
          '  place-items: center;',
          '  font-family: system-ui, sans-serif;',
          '  background: #eef6fb;',
          '}',
          '.intro-card {',
          '  width: min(420px, 86vw);',
          '  padding: 28px;',
          '  border-radius: 20px;',
          '  background: white;',
          '  box-shadow: 0 18px 45px #16324a22;',
          '}',
          '.eyebrow { color: #0879b7; font-weight: 800; font-size: 12px; }',
          'button { padding: 10px 14px; border: 0; border-radius: 10px; background: #0c8bc7; color: white; }'
        ),
        js: lines(
          'const button = document.querySelector("button");',
          'button.addEventListener("click", () => {',
          '  button.textContent = "It works ✓";',
          '});'
        )
      },
      {
        id: 'html-accessible-form',
        category: 'HTML',
        level: 'Beginner',
        title: 'Make a usable form',
        summary: 'Build a labeled input and handle submission without sending data anywhere.',
        objective: 'Practice label/input pairing, button types, and safe client-side form handling.',
        explanation: 'A usable form needs more than an input box. A label tells users and assistive technology what the field is for. A submit button gives the form one clear action.\n\nThis demo prevents the default submission and writes the entered name into the page, so no request leaves the sandbox.',
        tip: 'Connect <label for="name"> to <input id="name">. Clicking the label will focus the input too.',
        hack: 'Use FormData when a form has several fields. It avoids manually reading each input one by one.',
        mistake: 'Do not use placeholder text as the only label. Placeholders disappear while typing and are weaker for accessibility.',
        expected: 'Type a name, choose Submit, and the greeting updates below the form without a page reload.',
        realUse: 'The same pattern appears in search forms, contact forms, sign-in screens, and admin tools.',
        tags: ['html', 'form', 'accessibility', 'label', 'submit'],
        html: lines(
          '<form id="helloForm">',
          '  <label for="name">Your name</label>',
          '  <input id="name" name="name" autocomplete="name" required>',
          '  <button type="submit">Submit</button>',
          '</form>',
          '<p id="message" role="status">Waiting for a name…</p>'
        ),
        css: lines(
          'body { font-family: system-ui, sans-serif; padding: 32px; background: #f6f8fb; color: #142235; }',
          'form { display: grid; gap: 10px; max-width: 360px; }',
          'label { font-weight: 700; }',
          'input { padding: 11px 12px; border: 1px solid #b9c7d4; border-radius: 9px; }',
          'button { width: max-content; padding: 9px 13px; border: 0; border-radius: 9px; background: #0879b7; color: white; font-weight: 700; }',
          '#message { margin-top: 18px; color: #31526b; }'
        ),
        js: lines(
          'const form = document.querySelector("#helloForm");',
          'const message = document.querySelector("#message");',
          '',
          'form.addEventListener("submit", (event) => {',
          '  event.preventDefault();',
          '  const data = new FormData(form);',
          '  const name = String(data.get("name") || "").trim();',
          '  message.textContent = name ? `Hello, ${name}!` : "Please enter a name.";',
          '});'
        )
      },
      {
        id: 'css-flex-center',
        category: 'CSS',
        level: 'Beginner',
        title: 'Center content with Flexbox',
        summary: 'Use a small, dependable flex pattern to center content horizontally and vertically.',
        objective: 'Understand the difference between the main axis and cross axis in a flex container.',
        explanation: 'Flexbox is ideal when a layout is mainly one-dimensional: a row or a column. With justify-content and align-items, you can position children along the two axes without manual margins.\n\nThe parent needs available space before vertical centering is visible, which is why the demo uses min-height: 100vh.',
        tip: 'Remember the parent controls flex layout. Put display: flex on the container, not the item you are trying to center.',
        hack: 'For a single item, display: grid plus place-items: center is even shorter. Use Flexbox when you also need row/column behavior.',
        mistake: 'align-items: center will not vertically center a child if the flex container has no extra height to distribute.',
        expected: 'The blue card stays centered in the result viewport even when the viewport size changes.',
        realUse: 'Useful for empty states, login panels, loading states, hero content, and centered modal content.',
        tags: ['css', 'flexbox', 'center', 'layout'],
        html: lines(
          '<div class="stage">',
          '  <div class="card">Centered with Flexbox</div>',
          '</div>'
        ),
        css: lines(
          'body { margin: 0; font-family: system-ui, sans-serif; }',
          '.stage {',
          '  min-height: 100vh;',
          '  display: flex;',
          '  justify-content: center;',
          '  align-items: center;',
          '  background: #edf6fb;',
          '}',
          '.card {',
          '  padding: 24px 30px;',
          '  border-radius: 16px;',
          '  background: #0879b7;',
          '  color: white;',
          '  font-weight: 800;',
          '  box-shadow: 0 16px 35px #0a496c2b;',
          '}'
        ),
        js: lines(
          'console.log("Flexbox demo loaded.");'
        )
      },
      {
        id: 'css-responsive-grid',
        category: 'CSS',
        level: 'Intermediate',
        title: 'Responsive cards without many media queries',
        summary: 'Use CSS Grid with auto-fit and minmax so cards wrap naturally as space changes.',
        objective: 'Create a responsive card layout that adapts to the available width with one grid rule.',
        explanation: 'repeat(auto-fit, minmax(...)) asks the browser to fit as many columns as possible while respecting a minimum card width. When the container becomes narrow, cards automatically wrap.\n\nThis is often simpler than hard-coding desktop, tablet, and mobile column counts.',
        tip: 'Choose the minmax minimum from the real content width, not from a random device breakpoint.',
        hack: 'Use min(100%, 240px) inside minmax when you need the track to remain safe even inside very narrow containers.',
        mistake: 'A minimum that is too large can cause horizontal overflow on small screens.',
        expected: 'Resize the Result area or use a narrow screen: the cards move from multiple columns to fewer columns automatically.',
        realUse: 'Useful for portfolio cards, product lists, dashboard panels, search results, and Knowledge Lab topics.',
        tags: ['css', 'grid', 'responsive', 'auto-fit', 'minmax'],
        html: lines(
          '<section class="card-grid">',
          '  <article class="card"><strong>HTML</strong><span>Structure</span></article>',
          '  <article class="card"><strong>CSS</strong><span>Presentation</span></article>',
          '  <article class="card"><strong>JavaScript</strong><span>Behavior</span></article>',
          '  <article class="card"><strong>Git</strong><span>History</span></article>',
          '</section>'
        ),
        css: lines(
          'body { margin: 0; padding: 24px; font-family: system-ui, sans-serif; background: #f3f6f9; }',
          '.card-grid {',
          '  display: grid;',
          '  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));',
          '  gap: 16px;',
          '}',
          '.card {',
          '  display: grid;',
          '  gap: 6px;',
          '  padding: 22px;',
          '  border: 1px solid #d7e0e8;',
          '  border-radius: 16px;',
          '  background: white;',
          '}',
          '.card strong { color: #0879b7; }',
          '.card span { color: #607086; }'
        ),
        js: lines(
          'console.log(`Rendered ${document.querySelectorAll(".card").length} responsive cards.`);'
        )
      },
      {
        id: 'js-dom-counter',
        category: 'JavaScript',
        level: 'Beginner',
        title: 'Update the DOM with a counter',
        summary: 'Connect a button click to visible page state using querySelector, addEventListener, and textContent.',
        objective: 'Practice the basic event → state change → DOM update loop used by interactive interfaces.',
        explanation: 'JavaScript can listen for browser events and update the page in response. In this example, the count lives in a normal variable. Each click changes that value, then render() writes the current value into the page.\n\nSeparating the state change from render() keeps even a tiny demo easier to reason about.',
        tip: 'Use textContent when you only need to write text. It avoids parsing the value as HTML.',
        hack: 'Keep the DOM lookup outside the click handler when the same element is reused. There is no need to query it again on every click.',
        mistake: 'Do not write count = count++ and expect a simple increment. Use count += 1 or ++count.',
        expected: 'Each click on +1 increases the visible number and writes the new value to the Console.',
        realUse: 'The same event/state/render loop powers carts, quantity selectors, filters, tabs, and many admin controls.',
        tags: ['javascript', 'dom', 'event', 'counter', 'state'],
        html: lines(
          '<main class="counter-card">',
          '  <p>Current count</p>',
          '  <strong id="count">0</strong>',
          '  <button id="add" type="button">+1</button>',
          '</main>'
        ),
        css: lines(
          'body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: system-ui, sans-serif; background: #091a29; }',
          '.counter-card { min-width: 230px; padding: 28px; text-align: center; border-radius: 20px; background: white; }',
          '.counter-card p { margin: 0 0 8px; color: #607086; }',
          '#count { display: block; margin-bottom: 18px; font-size: 56px; line-height: 1; color: #0879b7; }',
          'button { border: 0; border-radius: 10px; padding: 10px 18px; background: #14a673; color: white; font-weight: 800; }'
        ),
        js: lines(
          'const countNode = document.querySelector("#count");',
          'const addButton = document.querySelector("#add");',
          'let count = 0;',
          '',
          'function render() {',
          '  countNode.textContent = String(count);',
          '}',
          '',
          'addButton.addEventListener("click", () => {',
          '  count += 1;',
          '  render();',
          '  console.log("Count:", count);',
          '});'
        )
      },
      {
        id: 'js-filter-vs-find',
        category: 'JavaScript',
        level: 'Intermediate',
        title: 'Choose filter() or find() correctly',
        summary: 'Use filter() for a list of matches and find() when you only need the first matching item.',
        objective: 'Pick the array method that matches the result shape you actually need.',
        explanation: 'filter() always returns a new array, even if there is only one match. find() returns the first matching item or undefined.\n\nChoosing the right method makes the intent clearer and prevents extra work such as filtering a whole list just to read the first element.',
        tip: 'Ask one question first: “Do I need one item or a list of items?” That usually tells you whether to start with find() or filter().',
        hack: 'Use console.table() for arrays of objects while debugging. The browser console is often easier to scan than repeated console.log() output.',
        mistake: 'Do not assume find() returns an array. Check for undefined before using properties from a result that might not exist.',
        expected: 'The Result panel lists products with stock, while the Console shows both the filtered array and the first matching product.',
        realUse: 'Useful for product search, inventory filtering, active records, user lookup, and UI selection logic.',
        tags: ['javascript', 'array', 'filter', 'find', 'console.table'],
        html: lines(
          '<main>',
          '  <h2>Available products</h2>',
          '  <ul id="available"></ul>',
          '  <p id="firstMatch"></p>',
          '</main>'
        ),
        css: lines(
          'body { font-family: system-ui, sans-serif; padding: 28px; color: #142235; background: #f6f8fb; }',
          'main { max-width: 520px; margin: auto; }',
          'li { margin: 8px 0; padding: 10px 12px; border-radius: 9px; background: white; border: 1px solid #d9e2ec; }',
          '#firstMatch { color: #0879b7; font-weight: 700; }'
        ),
        js: lines(
          'const products = [',
          '  { name: "Liempo", stock: 5 },',
          '  { name: "Chicken Breast", stock: 0 },',
          '  { name: "Beef Tapa", stock: 3 }',
          '];',
          '',
          'const available = products.filter((product) => product.stock > 0);',
          'const firstMatch = products.find((product) => product.name === "Beef Tapa");',
          '',
          'document.querySelector("#available").innerHTML = available',
          '  .map((product) => `<li>${product.name}: ${product.stock}</li>`)',
          '  .join("");',
          '',
          'document.querySelector("#firstMatch").textContent = firstMatch',
          '  ? `First match: ${firstMatch.name}`',
          '  : "No match found";',
          '',
          'console.table(available);',
          'console.log("First match:", firstMatch);'
        )
      }
    ]
  };
})();
