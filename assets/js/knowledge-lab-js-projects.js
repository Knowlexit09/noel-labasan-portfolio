(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons)return;const additions=[
  {
    "id": "js-project-stock-cart",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Advanced",
    "stage": "Projects & Practice",
    "order": 45,
    "title": "Project: stock-aware shopping cart",
    "summary": "Combine arrays, objects, validation, events, state, rendering, and accessible feedback into a real small application.",
    "definition": "A stock-aware cart maintains quantities in application state, validates every change against available inventory, then re-renders the visible cart.",
    "learn": [
      "Design a single state source for cart quantity",
      "Validate stock boundaries before accepting clicks",
      "Render quantities and totals from state instead of directly manipulating totals",
      "Give accessible status feedback and use plain-text output"
    ],
    "objective": "Build a reproducible cart component that refuses overselling and always keeps the displayed total consistent.",
    "explanation": "Imagine a checkout screen with only three Liempo packs left. A customer can add or remove packs, but clicking Add should never let quantity exceed the available stock. The safest small design is event → validate and update state → render.\n\nThis demonstration runs entirely in the isolated browser. It does not modify inventory in a server or reserve stock across customers. A production POS must validate and commit sales atomically on the backend.\n\nTry It Yourself: click Add four times and observe the limit; then remove one pack and add again. Read both the quantity and total after every action.",
    "tip": "Make render() derive the entire visible state from quantity so total and stock messaging cannot drift apart.",
    "hack": "Keep price in whole peso units for this simple integer-price demo; real payment software needs formally agreed rounding/precision rules.",
    "mistake": "A disabled-looking Add button alone does not enforce backend stock rules. Client checks improve usability, not transaction security.",
    "expected": "Cart starts at 0; Add increases quantity to a maximum of 3; Remove decreases to 0; displayed total always equals quantity × 125.",
    "realUse": "Product carts, POS quantity pickers, inventory forms, and reservation widgets.",
    "html": "<main class=\"cart\"><h1>Liempo cart</h1><p>Available stock: <strong id=\"stock\">3</strong> packs</p><div class=\"controls\"><button type=\"button\" id=\"remove\">− Remove</button><output id=\"quantity\" aria-label=\"Selected quantity\">0</output><button type=\"button\" id=\"add\">+ Add</button></div><p>Subtotal: ₱<strong id=\"total\">0</strong></p><p role=\"status\" aria-live=\"polite\" id=\"message\">Choose your quantity.</p></main>",
    "css": "body{margin:0;padding:24px;font:16px/1.5 system-ui;background:#eef5fa;color:#17344b}.cart{max-width:430px;margin:auto;background:white;padding:24px;border-radius:16px;box-shadow:0 8px 24px #102a4217}.controls{display:flex;gap:12px;align-items:center;flex-wrap:wrap}button{border:0;background:#075a9d;color:#fff;border-radius:9px;padding:10px 12px;font:inherit;cursor:pointer}button:focus-visible{outline:3px solid orange;outline-offset:2px}output{font-size:24px;font-weight:700;min-width:30px;text-align:center}#message{color:#126b53}",
    "js": "const product = { name: 'Liempo', price: 125, stock: 3 };\nlet quantity = 0;\nconst qty = document.querySelector('#quantity');\nconst total = document.querySelector('#total');\nconst message = document.querySelector('#message');\nfunction render() {\n  qty.textContent = String(quantity);\n  total.textContent = String(quantity * product.price);\n}\ndocument.querySelector('#add').addEventListener('click', () => {\n  if (quantity >= product.stock) {\n    message.textContent = 'Maximum stock reached';\n    return;\n  }\n  quantity += 1;\n  message.textContent = 'Added one pack';\n  render();\n});\ndocument.querySelector('#remove').addEventListener('click', () => {\n  if (quantity <= 0) {\n    message.textContent = 'Nothing to remove';\n    return;\n  }\n  quantity -= 1;\n  message.textContent = 'Removed one pack';\n  render();\n});\nrender();",
    "practice": {
      "prompt": "Change stock to 5 and price to 130. Add six times, then remove twice. Predict the final quantity and total.",
      "check": "Five packs is the maximum; after removing twice quantity becomes 3 and total is 390. The sixth Add is refused."
    },
    "quiz": [
      {
        "question": "Why is quantity updated before calling render()?",
        "options": [
          "The UI should be derived from the new state",
          "CSS needs more time",
          "It makes server inventory safe"
        ],
        "correctIndex": 0,
        "explanation": "State changes first and render reads that state to update every dependent display."
      },
      {
        "question": "Does this browser-only project prevent simultaneous customers from overselling?",
        "options": [
          "Yes, always",
          "No, the server must atomically validate committed stock",
          "Only when localStorage is enabled"
        ],
        "correctIndex": 1,
        "explanation": "Browser state cannot reserve shared inventory; server-side atomic validation is essential."
      }
    ]
  },
  {
    "id": "js-project-accessible-tabs",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Advanced",
    "stage": "Projects & Practice",
    "order": 55,
    "title": "Project: keyboard-accessible tabs",
    "summary": "Build an ARIA tab interface with click and arrow-key navigation, predictable focus, and synchronized panels.",
    "definition": "An accessible tab interface uses the tabs ARIA pattern: a tablist, tabs with aria-selected, and associated tab panels.",
    "learn": [
      "Use tablist/tab/tabpanel roles and relationships",
      "Update selected state and panel visibility together",
      "Implement ArrowLeft and ArrowRight navigation with focus management",
      "Preserve keyboard accessibility instead of relying on clicks only"
    ],
    "objective": "Create an interactive tabs UI usable with a mouse and keyboard.",
    "explanation": "A settings page might have Overview and Details sections. Clicking a tab should reveal the correct panel, but keyboard users must also be able to move between tabs. This example uses the common automatic-activation tabs pattern.\n\nEvery change updates aria-selected, tabIndex, panel hidden state, and focus when navigating with arrow keys. The exact ARIA pattern should follow tested accessibility guidance; native controls should be used when they already solve the task without a custom widget.\n\nTry It Yourself: click Details, then focus a tab and press ArrowLeft or ArrowRight. Check that the correct panel is shown.",
    "tip": "Do not add ARIA roles without implementing the corresponding keyboard behavior.",
    "hack": "Store tabs as an array and use one selectTab(index) function for mouse and keyboard; it keeps state changes consistent.",
    "mistake": "Changing only the visible panel without updating aria-selected and focus order creates an inconsistent experience for assistive technology.",
    "expected": "Overview is selected initially; clicking Details or using arrow keys changes the selected tab, visible panel, and focus appropriately.",
    "realUse": "Settings pages, dashboards, support panels, and product details.",
    "html": "<main><h1>Product details</h1><div role=\"tablist\" aria-label=\"Product information\"><button type=\"button\" role=\"tab\" id=\"tab-overview\" aria-controls=\"panel-overview\" aria-selected=\"true\" tabindex=\"0\">Overview</button><button type=\"button\" role=\"tab\" id=\"tab-details\" aria-controls=\"panel-details\" aria-selected=\"false\" tabindex=\"-1\">Details</button></div><section role=\"tabpanel\" id=\"panel-overview\" aria-labelledby=\"tab-overview\" tabindex=\"0\"><p>Available Liempo products.</p></section><section role=\"tabpanel\" id=\"panel-details\" aria-labelledby=\"tab-details\" tabindex=\"0\" hidden><p>Stock changes must be validated.</p></section></main>",
    "css": "body{font:16px/1.5 system-ui;background:#eff4fa;color:#17344b;padding:20px}main{background:white;padding:24px;border-radius:15px;max-width:520px;margin:auto}[role=tablist]{display:flex;gap:6px;border-bottom:2px solid #dce5ef}[role=tab]{font:inherit;border:0;border-radius:8px 8px 0 0;padding:12px 18px;background:#e8eef5;cursor:pointer}[role=tab][aria-selected=true]{background:#095c98;color:white}[role=tab]:focus-visible{outline:3px solid orange;outline-offset:2px}[role=tabpanel]{padding:14px 2px}",
    "js": "const tabs = Array.from(document.querySelectorAll('[role=\"tab\"]'));\nconst panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));\nfunction selectTab(index, moveFocus = false) {\n  tabs.forEach((tab, position) => {\n    const active = position === index;\n    tab.setAttribute('aria-selected', String(active));\n    tab.tabIndex = active ? 0 : -1;\n    panels[position].hidden = !active;\n  });\n  if (moveFocus) tabs[index].focus();\n}\ntabs.forEach((tab, index) => {\n  tab.addEventListener('click', () => selectTab(index));\n  tab.addEventListener('keydown', event => {\n    let next = index;\n    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;\n    else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;\n    else if (event.key === 'Home') next = 0;\n    else if (event.key === 'End') next = tabs.length - 1;\n    else return;\n    event.preventDefault();\n    selectTab(next, true);\n  });\n});\nselectTab(0);",
    "practice": {
      "prompt": "Add a third tab called Reviews with its own associated panel. Verify that the arrows wrap from the last tab to the first and each tab has the right aria-controls ID.",
      "check": "Click and arrow navigation switch all three panels, and only one tab has aria-selected=true at a time."
    },
    "quiz": [
      {
        "question": "Which attribute communicates the active tab?",
        "options": [
          "aria-selected",
          "autocomplete",
          "hidden on the button"
        ],
        "correctIndex": 0,
        "explanation": "aria-selected represents selection on each element with role=tab."
      },
      {
        "question": "Why call focus() after arrow-key navigation?",
        "options": [
          "To move keyboard focus with the selected tab",
          "To reload the page",
          "To make the tab permanently disabled"
        ],
        "correctIndex": 0,
        "explanation": "The tabs keyboard pattern moves focus between tabs when arrow keys are used."
      }
    ]
  }
];const ids=new Set(data.lessons.map(x=>x.id));for(const l of additions){if(!ids.has(l.id)){data.lessons.push(l);ids.add(l.id);}}})();