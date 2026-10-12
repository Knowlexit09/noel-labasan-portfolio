(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons)return;
const additions=[
  {
    "id": "js-dom-selectors",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Beginner",
    "stage": "DOM & Forms",
    "order": 5,
    "title": "Select one or many DOM elements",
    "summary": "Find and count products already on a page instead of guessing what exists.",
    "definition": "querySelector selects the first matching element; querySelectorAll returns a static NodeList of every match at the time of the query.",
    "learn": [
      "Select elements with CSS selectors",
      "Distinguish one element from a NodeList",
      "Use textContent to display a count"
    ],
    "objective": "Practice select one or many dom elements with a real browser interaction.",
    "explanation": "Think of a product shelf: querySelector finds one matching label, while querySelectorAll gathers all matching labels.\n\nA NodeList is not automatically an Array. You can use Array.from() to access array methods when necessary. Try adding another data-product item to the HTML.\n\nTry it yourself: Add Fish as a third list item with data-product set to Fish.",
    "tip": "Use querySelector when you expect one element and querySelectorAll when you expect many.",
    "hack": "Use Array.from(items) for array transformations without mutating DOM elements.",
    "mistake": "querySelectorAll produces a static NodeList, not an automatically updating live list.",
    "expected": "2 products: Liempo, Chicken",
    "realUse": "Catalog filters and element statistics.",
    "html": "<main><h1>Products</h1><ul><li data-product=\"Liempo\">Liempo</li><li data-product=\"Chicken\">Chicken</li></ul><p id=\"result\"></p></main>",
    "css": "body{font:16px/1.55 system-ui;background:#eff4fa;color:#16344a;padding:24px}main{max-width:640px;margin:auto;padding:24px;background:#fff;border-radius:14px;border:1px solid #dae4ed}button,input{font:inherit;padding:10px;border-radius:8px}button{border:0;background:#07629c;color:white;cursor:pointer}input{border:1px solid #718497;max-width:100%}button:focus-visible,input:focus-visible{outline:3px solid #efab35;outline-offset:2px}.is-favorite{background:#8d2855}p{line-height:1.5}",
    "js": "const items=document.querySelectorAll('[data-product]');\nconst names=Array.from(items,item=>item.dataset.product);\ndocument.querySelector('#result').textContent=`${items.length} products: ${names.join(', ')}`;",
    "practice": {
      "prompt": "Add Fish as a third list item with data-product set to Fish.",
      "check": "The output reads 3 products and includes Fish."
    },
    "quiz": [
      {
        "question": "Which returns multiple matching elements?",
        "options": [
          "querySelectorAll",
          "querySelector",
          "getComputedStyle"
        ],
        "correctIndex": 0,
        "explanation": "querySelectorAll returns a NodeList of matches."
      },
      {
        "question": "Does a static NodeList automatically include later nodes?",
        "options": [
          "No",
          "Yes",
          "Only in Java"
        ],
        "correctIndex": 0,
        "explanation": "You must query again to include later changes."
      }
    ]
  },
  {
    "id": "js-classlist-pressed",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Beginner",
    "stage": "DOM & Forms",
    "order": 25,
    "title": "Toggle CSS classes and aria-pressed",
    "summary": "Make a real favorite button that updates appearance and accessible state together.",
    "definition": "classList toggles element classes, while aria-pressed communicates the pressed state of a toggle button.",
    "learn": [
      "Toggle a CSS class",
      "Update aria-pressed",
      "Keep visual state and DOM state consistent"
    ],
    "objective": "Practice toggle css classes and aria-pressed with a real browser interaction.",
    "explanation": "A favorite button is not just an icon changing color. It has a state that keyboard and screen-reader users also need to know.\n\nUse classList.toggle to change its class and update aria-pressed with the same boolean. Try clicking the button twice.\n\nTry it yourself: Change the selected label to My favorite product and test both click states.",
    "tip": "Use a real button for interactive actions rather than a clickable div.",
    "hack": "The boolean returned by classList.toggle tells you the new state.",
    "mistake": "Changing color without communicating the pressed state makes feedback inaccessible.",
    "expected": "Clicking Favorite changes aria-pressed to true and shows Saved as favorite; clicking again resets both.",
    "realUse": "Favorite buttons, dark-mode toggles and saved filters.",
    "html": "<main><h1>Favorite product</h1><button type=\"button\" id=\"favorite\" aria-pressed=\"false\">♡ Favorite</button><p id=\"status\" role=\"status\">Not selected</p></main>",
    "css": "body{font:16px/1.55 system-ui;background:#eff4fa;color:#16344a;padding:24px}main{max-width:640px;margin:auto;padding:24px;background:#fff;border-radius:14px;border:1px solid #dae4ed}button,input{font:inherit;padding:10px;border-radius:8px}button{border:0;background:#07629c;color:white;cursor:pointer}input{border:1px solid #718497;max-width:100%}button:focus-visible,input:focus-visible{outline:3px solid #efab35;outline-offset:2px}.is-favorite{background:#8d2855}p{line-height:1.5}",
    "js": "const button=document.querySelector('#favorite');\nconst status=document.querySelector('#status');\nbutton.addEventListener('click',()=>{\n const pressed=button.classList.toggle('is-favorite');\n button.setAttribute('aria-pressed',String(pressed));\n status.textContent=pressed?'Saved as favorite':'Not selected';\n});",
    "practice": {
      "prompt": "Change the selected label to My favorite product and test both click states.",
      "check": "aria-pressed and the displayed label agree after every click."
    },
    "quiz": [
      {
        "question": "Which attribute represents toggle state?",
        "options": [
          "aria-pressed",
          "src",
          "autocomplete"
        ],
        "correctIndex": 0,
        "explanation": "aria-pressed communicates the state of a toggle button."
      },
      {
        "question": "What does classList.toggle return?",
        "options": [
          "Whether the class is present afterward",
          "A DOM NodeList",
          "An HTTP result"
        ],
        "correctIndex": 0,
        "explanation": "toggle returns the new class-presence state."
      }
    ]
  },
  {
    "id": "js-createelement-list",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Beginner",
    "stage": "DOM & Forms",
    "order": 30,
    "title": "Create safe DOM elements dynamically",
    "summary": "Add a product row without inserting untrusted text as HTML.",
    "definition": "document.createElement creates an element node, and append adds it to the document tree.",
    "learn": [
      "Create a li element",
      "Write textContent safely",
      "Append the node into a list"
    ],
    "objective": "Practice create safe dom elements dynamically with a real browser interaction.",
    "explanation": "When a product is added, the app should create a new list item rather than rebuild strings of HTML that might contain untrusted input.\n\ncreateElement creates a real element, textContent sets plain text, and append attaches it. Try adding more products with the button.\n\nTry it yourself: Change Fish Fillet to Beef Tapa and click once.",
    "tip": "Create elements once and attach them intentionally.",
    "hack": "For plain names, textContent avoids parsing HTML.",
    "mistake": "Do not interpolate untrusted product labels into innerHTML.",
    "expected": "Each click adds Fish Fillet and updates the item count.",
    "realUse": "Inventory lists, task rows and dynamically loaded records.",
    "html": "<main><h1>Product list</h1><ul id=\"list\"><li>Liempo</li><li>Chicken</li></ul><button type=\"button\" id=\"add\">Add Fish</button><p id=\"count\" role=\"status\">2 items</p></main>",
    "css": "body{font:16px/1.55 system-ui;background:#eff4fa;color:#16344a;padding:24px}main{max-width:640px;margin:auto;padding:24px;background:#fff;border-radius:14px;border:1px solid #dae4ed}button,input{font:inherit;padding:10px;border-radius:8px}button{border:0;background:#07629c;color:white;cursor:pointer}input{border:1px solid #718497;max-width:100%}button:focus-visible,input:focus-visible{outline:3px solid #efab35;outline-offset:2px}.is-favorite{background:#8d2855}p{line-height:1.5}",
    "js": "const list=document.querySelector('#list');\nconst count=document.querySelector('#count');\ndocument.querySelector('#add').addEventListener('click',()=>{\n const item=document.createElement('li');\n item.textContent='Fish Fillet';\n list.append(item);\n count.textContent=`${list.children.length} items`;\n});",
    "practice": {
      "prompt": "Change Fish Fillet to Beef Tapa and click once.",
      "check": "A third item appears and count becomes 3 items."
    },
    "quiz": [
      {
        "question": "What creates a new DOM element?",
        "options": [
          "document.createElement",
          "JSON.parse",
          "parseFloat"
        ],
        "correctIndex": 0,
        "explanation": "createElement constructs an element node."
      },
      {
        "question": "Why set textContent for a product name?",
        "options": [
          "It treats the value as text",
          "It executes markup",
          "It sends an API request"
        ],
        "correctIndex": 0,
        "explanation": "Plain text isn't parsed as HTML."
      }
    ]
  },
  {
    "id": "js-event-bubbling",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "DOM & Forms",
    "order": 35,
    "title": "Understand event bubbling",
    "summary": "See why clicking one button can activate handlers on the button and its parent.",
    "definition": "Bubbling allows an event triggered on a descendant to travel through its ancestor elements.",
    "learn": [
      "Attach listeners to child and parent",
      "Observe listener order on a click",
      "Understand why delegation works"
    ],
    "objective": "Practice understand event bubbling with a real browser interaction.",
    "explanation": "When you click a button inside a product card, both the button and the card can react because the event bubbles upward.\n\nThis is useful for event delegation, but can surprise you if you attach duplicate actions. Use stopPropagation only when the event contract genuinely requires it.\n\nTry it yourself: Click the button, then click the empty area of the parent card.",
    "tip": "Understand the event path before reaching for stopPropagation.",
    "hack": "Use a single parent listener when many child controls share behavior.",
    "mistake": "Stopping propagation without a good reason can break parent controls.",
    "expected": "Clicking the button displays button → parent.",
    "realUse": "Nested cards and delegated table actions.",
    "html": "<main><h1>Event path</h1><div id=\"card\"><button type=\"button\" id=\"select\">Select product</button></div><p id=\"status\" role=\"status\">Click the button</p></main>",
    "css": "body{font:16px/1.55 system-ui;background:#eff4fa;color:#16344a;padding:24px}main{max-width:640px;margin:auto;padding:24px;background:#fff;border-radius:14px;border:1px solid #dae4ed}button,input{font:inherit;padding:10px;border-radius:8px}button{border:0;background:#07629c;color:white;cursor:pointer}input{border:1px solid #718497;max-width:100%}button:focus-visible,input:focus-visible{outline:3px solid #efab35;outline-offset:2px}.is-favorite{background:#8d2855}p{line-height:1.5}",
    "js": "const path=[];\nconst status=document.querySelector('#status');\ndocument.querySelector('#select').addEventListener('click',()=>{path.length=0;path.push('button');status.textContent=path.join(' → ');});\ndocument.querySelector('#card').addEventListener('click',()=>{path.push('parent');status.textContent=path.join(' → ');});",
    "practice": {
      "prompt": "Click the button, then click the empty area of the parent card.",
      "check": "The button path contains both labels; clicking the card itself only shows parent behavior."
    },
    "quiz": [
      {
        "question": "Where does a bubbling event go?",
        "options": [
          "Through ancestor elements",
          "Only to CSS",
          "Directly to a server"
        ],
        "correctIndex": 0,
        "explanation": "Bubbling propagates events through ancestors."
      },
      {
        "question": "Why is delegation possible?",
        "options": [
          "The parent receives descendant events",
          "Every child needs polling",
          "The browser recompiles Java"
        ],
        "correctIndex": 0,
        "explanation": "A parent listener can handle child events because they bubble."
      }
    ]
  },
  {
    "id": "js-remove-event-listener",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "DOM & Forms",
    "order": 40,
    "title": "Clean up with removeEventListener",
    "summary": "Create a one-time action without leaving an unnecessary active handler.",
    "definition": "removeEventListener unregisters a listener with the matching event type, callback reference and capture setting.",
    "learn": [
      "Register a named callback",
      "Remove the exact same callback reference",
      "Test that later clicks no longer invoke it"
    ],
    "objective": "Practice clean up with removeeventlistener with a real browser interaction.",
    "explanation": "A one-time activation handler should not keep firing on every click. removeEventListener receives the same function reference that was originally registered.\n\nAnonymous functions written again are different references. Test by clicking three times; only the first click should change the counter.\n\nTry it yourself: Replace manual removal with the {once:true} option.",
    "tip": "Keep a stable handler reference when you need to unsubscribe.",
    "hack": "For one-time listeners, addEventListener('click',handler,{once:true}) can be simpler.",
    "mistake": "Passing a newly created arrow function to removeEventListener doesn't remove a previously registered function.",
    "expected": "The first click displays Handled: 1; subsequent clicks don't increment.",
    "realUse": "Component cleanup and one-time onboarding actions.",
    "html": "<main><h1>One-time action</h1><button type=\"button\" id=\"once\">Activate</button><p id=\"result\" role=\"status\">Handled: 0</p></main>",
    "css": "body{font:16px/1.55 system-ui;background:#eff4fa;color:#16344a;padding:24px}main{max-width:640px;margin:auto;padding:24px;background:#fff;border-radius:14px;border:1px solid #dae4ed}button,input{font:inherit;padding:10px;border-radius:8px}button{border:0;background:#07629c;color:white;cursor:pointer}input{border:1px solid #718497;max-width:100%}button:focus-visible,input:focus-visible{outline:3px solid #efab35;outline-offset:2px}.is-favorite{background:#8d2855}p{line-height:1.5}",
    "js": "let handled=0;\nconst button=document.querySelector('#once');\nfunction activate(){handled+=1;document.querySelector('#result').textContent=`Handled: ${handled}`;button.removeEventListener('click',activate);}\nbutton.addEventListener('click',activate);",
    "practice": {
      "prompt": "Replace manual removal with the {once:true} option.",
      "check": "The handler still runs only once."
    },
    "quiz": [
      {
        "question": "What must match when removing a listener?",
        "options": [
          "The original callback reference",
          "Only its function name as text",
          "The button color"
        ],
        "correctIndex": 0,
        "explanation": "Listener removal uses the same callback object."
      },
      {
        "question": "What does once:true do?",
        "options": [
          "Removes the listener after it fires once",
          "Repeats the event",
          "Disables all clicks"
        ],
        "correctIndex": 0,
        "explanation": "The browser removes a one-time listener automatically."
      }
    ]
  },
  {
    "id": "js-formdata-submit",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "DOM & Forms",
    "order": 45,
    "title": "Read real form values with FormData",
    "summary": "Handle a real browser form without manually reading every field by ID.",
    "definition": "FormData extracts successful controls and their values from a form element.",
    "learn": [
      "Listen to submit",
      "Call preventDefault for this local exercise",
      "Read a named field with FormData.get"
    ],
    "objective": "Practice read real form values with formdata with a real browser interaction.",
    "explanation": "An order form may contain a name and quantity. FormData collects values from input controls with name attributes.\n\nFor a local in-browser demo we prevent navigation and read the entered text, then display it through textContent. Production apps still need server-side validation.\n\nTry it yourself: Enter Chicken and submit again.",
    "tip": "Every field that you want FormData to include needs the right name attribute.",
    "hack": "FormData handles multiple named controls without hardcoding each input selector.",
    "mistake": "FormData values are strings or Files; validate their types and business rules before processing.",
    "expected": "Submitting the default form displays Product: Liempo.",
    "realUse": "Order forms and profile editors.",
    "html": "<main><h1>Order note</h1><form id=\"order\"><label for=\"product\">Product</label><input id=\"product\" name=\"product\" value=\"Liempo\" required><button type=\"submit\">Read input</button></form><p id=\"result\" role=\"status\">Submit to test.</p></main>",
    "css": "body{font:16px/1.55 system-ui;background:#eff4fa;color:#16344a;padding:24px}main{max-width:640px;margin:auto;padding:24px;background:#fff;border-radius:14px;border:1px solid #dae4ed}button,input{font:inherit;padding:10px;border-radius:8px}button{border:0;background:#07629c;color:white;cursor:pointer}input{border:1px solid #718497;max-width:100%}button:focus-visible,input:focus-visible{outline:3px solid #efab35;outline-offset:2px}.is-favorite{background:#8d2855}p{line-height:1.5}",
    "js": "const form=document.querySelector('#order');\nform.addEventListener('submit',event=>{\n event.preventDefault();\n const formData=new FormData(form);\n document.querySelector('#result').textContent='Product: '+String(formData.get('product')??'');\n});",
    "practice": {
      "prompt": "Enter Chicken and submit again.",
      "check": "The output shows Product: Chicken."
    },
    "quiz": [
      {
        "question": "Which attribute is critical for FormData field lookup?",
        "options": [
          "name",
          "className",
          "tabindex"
        ],
        "correctIndex": 0,
        "explanation": "FormData uses named controls."
      },
      {
        "question": "Does this form example submit to a server?",
        "options": [
          "No, preventDefault keeps it local",
          "Yes always",
          "Only if Java is installed"
        ],
        "correctIndex": 0,
        "explanation": "The handler prevents form navigation and reads local values."
      }
    ]
  },
  {
    "id": "js-escape-search-key",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "DOM & Forms",
    "order": 50,
    "title": "Keyboard events: Escape clears a search",
    "summary": "Add a practical keyboard shortcut that does not interfere with ordinary typing.",
    "definition": "The keydown event exposes the key a user pressed; event.key describes it with names such as Escape.",
    "learn": [
      "Listen for a keyboard event",
      "Check event.key for Escape",
      "Update input and accessible feedback"
    ],
    "objective": "Practice keyboard events: escape clears a search with a real browser interaction.",
    "explanation": "Visitors expect Escape to dismiss or clear certain UI states. For a small search field, pressing Escape can clear a temporary query.\n\nThis interaction works for keyboard users and does not rely on a mouse. Do not intercept common shortcuts without a clear and documented reason.\n\nTry it yourself: Change the confirmation text to Ready for a new search.",
    "tip": "Choose key commands that agree with familiar browser and platform behavior.",
    "hack": "Use event.key rather than relying on numeric key codes.",
    "mistake": "Don't block Tab key navigation or other critical keyboard behavior.",
    "expected": "Typing and pressing Escape clears the search and announces Search cleared.",
    "realUse": "Search dropdowns and dismissible temporary filters.",
    "html": "<main><h1>Search products</h1><label for=\"search\">Search</label><input id=\"search\" placeholder=\"Try typing a name\"><p id=\"status\" role=\"status\">Press Escape to clear.</p></main>",
    "css": "body{font:16px/1.55 system-ui;background:#eff4fa;color:#16344a;padding:24px}main{max-width:640px;margin:auto;padding:24px;background:#fff;border-radius:14px;border:1px solid #dae4ed}button,input{font:inherit;padding:10px;border-radius:8px}button{border:0;background:#07629c;color:white;cursor:pointer}input{border:1px solid #718497;max-width:100%}button:focus-visible,input:focus-visible{outline:3px solid #efab35;outline-offset:2px}.is-favorite{background:#8d2855}p{line-height:1.5}",
    "js": "const input=document.querySelector('#search');\nconst status=document.querySelector('#status');\ninput.addEventListener('keydown',event=>{\n if(event.key!=='Escape')return;\n input.value='';\n status.textContent='Search cleared';\n});",
    "practice": {
      "prompt": "Change the confirmation text to Ready for a new search.",
      "check": "Escape clears input and shows your new message."
    },
    "quiz": [
      {
        "question": "How do you identify the Escape key?",
        "options": [
          "event.key==='Escape'",
          "event.key===27",
          "event.code==='css'"
        ],
        "correctIndex": 0,
        "explanation": "event.key gives a descriptive key value."
      },
      {
        "question": "Why preserve Tab behavior?",
        "options": [
          "Keyboard users need focus navigation",
          "It prevents network calls",
          "It runs Java"
        ],
        "correctIndex": 0,
        "explanation": "Tab is essential for accessible keyboard navigation."
      }
    ]
  },
  {
    "id": "js-focus-management",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "DOM & Forms",
    "order": 55,
    "title": "Move focus deliberately to an input",
    "summary": "Use focus for an explicit editing action and verify where keyboard input will go.",
    "definition": "The focus() method moves browser keyboard focus to a focusable element.",
    "learn": [
      "Call focus on an input",
      "Inspect document.activeElement",
      "Explain when to move focus"
    ],
    "objective": "Practice move focus deliberately to an input with a real browser interaction.",
    "explanation": "When someone clicks Edit details, moving focus into the relevant input helps them start typing immediately.\n\nDo not move focus unexpectedly during passive page updates; only do so when an interaction makes the target clear.\n\nTry it yourself: Change the text input's current value and click Edit name.",
    "tip": "Use focus moves for a meaningful user-initiated action, not as decoration.",
    "hack": "document.activeElement is useful for debugging focus behavior.",
    "mistake": "Moving focus unexpectedly during rendering may disorient keyboard or screen-reader users.",
    "expected": "Clicking Edit name focuses the product name input and displays Name field focused.",
    "realUse": "Edit forms, dialogs and error recovery.",
    "html": "<main><h1>Edit product</h1><button id=\"edit\" type=\"button\">Edit name</button><label for=\"name\">Product name</label><input id=\"name\" value=\"Chicken\"><p id=\"result\" role=\"status\">Choose Edit name.</p></main>",
    "css": "body{font:16px/1.55 system-ui;background:#eff4fa;color:#16344a;padding:24px}main{max-width:640px;margin:auto;padding:24px;background:#fff;border-radius:14px;border:1px solid #dae4ed}button,input{font:inherit;padding:10px;border-radius:8px}button{border:0;background:#07629c;color:white;cursor:pointer}input{border:1px solid #718497;max-width:100%}button:focus-visible,input:focus-visible{outline:3px solid #efab35;outline-offset:2px}.is-favorite{background:#8d2855}p{line-height:1.5}",
    "js": "const input=document.querySelector('#name');\ndocument.querySelector('#edit').addEventListener('click',()=>{\n input.focus();\n document.querySelector('#result').textContent=document.activeElement===input?'Name field focused':'Focus unavailable';\n});",
    "practice": {
      "prompt": "Change the text input's current value and click Edit name.",
      "check": "The input receives focus without clearing the typed value."
    },
    "quiz": [
      {
        "question": "Which method moves focus?",
        "options": [
          "element.focus()",
          "element.reset()",
          "element.commit()"
        ],
        "correctIndex": 0,
        "explanation": "focus requests keyboard focus on the element."
      },
      {
        "question": "Should focus move on every background state update?",
        "options": [
          "No",
          "Yes",
          "Only in dark mode"
        ],
        "correctIndex": 0,
        "explanation": "Unexpected focus changes harm usability."
      }
    ]
  }
];
const ids=new Set(data.lessons.map(l=>l.id));for(const l of additions){if(!ids.has(l.id)){data.lessons.push(l);ids.add(l.id);}}
})();
