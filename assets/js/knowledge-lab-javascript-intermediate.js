(function(){'use strict';
const data=window.KNOWLEDGE_LAB_V2;
if(!data||!Array.isArray(data.lessons)||!Array.isArray(data.categories))return;
const additions=[
  {
    "id": "js-arrays-foundation",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Beginner",
    "stage": "Arrays",
    "order": 1,
    "title": "Arrays: keep related items in one list",
    "summary": "Build a list of products and understand indexing, length, and adding items.",
    "definition": "An array is an ordered collection of values in JavaScript. Its first element uses index 0.",
    "learn": [
      "Create an array of product names",
      "Read an element with index 0",
      "Use length to count entries",
      "Add an item with push()"
    ],
    "objective": "Store a small list of items and display it without hard-coding every entry.",
    "explanation": "Instead of making separate variables for every product, put related items into an array. Imagine a shelf with numbered positions: JavaScript starts the index at zero, so the first item is products[0].\n\nlength gives the number of elements. push() adds to the end, but it changes the original array.\n\nTry it yourself: replace 'Fish Fillet' with another product, then add a fourth item using push().",
    "tip": "Use plural array names like products and singular loop variables like product.",
    "hack": "For the last entry, use products.at(-1) in modern JavaScript. For older environments, products[products.length - 1] is widely supported.",
    "mistake": "products[1] is the second item, not the first. Array positions start at 0.",
    "expected": "The page lists four product names after push() adds a new item.",
    "realUse": "Products, cart lines, notifications, and ordered records are often represented as arrays.",
    "html": "<main><h1>Products on the shelf</h1><p id=\"count\"></p><ul id=\"items\"></ul></main>",
    "css": "body{font:16px/1.55 system-ui,sans-serif;background:#edf4fc;color:#17354b;padding:26px}main{max-width:600px;margin:auto;background:white;border-radius:15px;padding:22px;border:1px solid #d9e3ee}input,button{font:inherit;padding:9px 11px;border-radius:8px}input{border:1px solid #71879b;max-width:100%}button{border:0;background:#075a9d;color:#fff;cursor:pointer}button:focus-visible,input:focus-visible{outline:3px solid #faaf3a;outline-offset:2px}li{margin:7px 0}output,strong{color:#075a9d}",
    "js": "const products = ['Liempo', 'Chicken', 'Fish Fillet'];\nproducts.push('Beef Tapa');\ndocument.querySelector('#count').textContent = `${products.length} products`; const list = document.querySelector('#items');\nfor (const product of products) { const li = document.createElement('li'); li.textContent = product; list.append(li); }\nconsole.log('First:', products[0], 'Last:', products.at(-1));",
    "practice": {
      "prompt": "Add a fifth item, then change the code to show the second product in Console using its index.",
      "check": "The page count becomes 5. products[1] should print Chicken unless you changed that item."
    },
    "quiz": [
      {
        "question": "Which index selects the first array item?",
        "options": [
          "0",
          "1",
          "-1",
          "length"
        ],
        "correctIndex": 0,
        "explanation": "JavaScript array indexing starts at zero."
      },
      {
        "question": "What does push() do?",
        "options": [
          "Removes all items",
          "Adds an item to the end of the same array",
          "Finds the first match",
          "Creates HTML"
        ],
        "correctIndex": 1,
        "explanation": "push mutates the array by appending an item."
      }
    ]
  },
  {
    "id": "js-objects-properties",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Beginner",
    "stage": "Objects & Data",
    "order": 1,
    "title": "Objects: describe one real-world item",
    "summary": "Model a product with related named properties.",
    "definition": "An object groups information into named properties, usually as key-value pairs.",
    "learn": [
      "Create an object literal",
      "Read properties with dot notation",
      "Update a property",
      "Distinguish an object from an array"
    ],
    "objective": "Describe one product clearly and display its information.",
    "explanation": "A product is more than a name. It may have a price, stock quantity, and active status. An object keeps this related information together, like a product record.\n\nAccess a named property with product.price or product['price']. Arrays are ideal for ordered groups; objects help describe one entity.\n\nTry it yourself: change stock to 0 and make the status message reflect that change.",
    "tip": "Choose consistent property names, such as stock rather than mixing qty, quantity, and stockCount without a reason.",
    "hack": "Object destructuring can shorten repetitive property access once the basic form is familiar: const { name, price } = product.",
    "mistake": "Do not write product['missing'] and assume it exists; absent properties evaluate to undefined.",
    "expected": "Displays Liempo, price 125, and the stock availability message.",
    "realUse": "API responses, inventory records, user profiles, and cart entries are frequently objects.",
    "html": "<main><h1>Product record</h1><p id=\"details\"></p><p id=\"status\"></p></main>",
    "css": "body{font:16px/1.55 system-ui,sans-serif;background:#edf4fc;color:#17354b;padding:26px}main{max-width:600px;margin:auto;background:white;border-radius:15px;padding:22px;border:1px solid #d9e3ee}input,button{font:inherit;padding:9px 11px;border-radius:8px}input{border:1px solid #71879b;max-width:100%}button{border:0;background:#075a9d;color:#fff;cursor:pointer}button:focus-visible,input:focus-visible{outline:3px solid #faaf3a;outline-offset:2px}li{margin:7px 0}output,strong{color:#075a9d}",
    "js": "const product = { name: 'Liempo', price: 125, stock: 4 };\ndocument.querySelector('#details').textContent = `${product.name} — ${product.price} each`;\ndocument.querySelector('#status').textContent = product.stock > 0 ? `Available: ${product.stock}` : 'Out of stock';\nconsole.log('Keys:', Object.keys(product));",
    "practice": {
      "prompt": "Add a category property and display it after the product name. Then set stock to 0.",
      "check": "The category appears on the page; the status should say Out of stock."
    },
    "quiz": [
      {
        "question": "Which expression reads a named property?",
        "options": [
          "product.price",
          "product->price",
          "product(price)",
          "price.product()"
        ],
        "correctIndex": 0,
        "explanation": "Dot notation reads a property on an object."
      },
      {
        "question": "When is an object useful?",
        "options": [
          "To describe one product with several named fields",
          "Only to store CSS",
          "Only to run HTML",
          "To replace the browser"
        ],
        "correctIndex": 0,
        "explanation": "Objects group related properties of a single record."
      }
    ]
  },
  {
    "id": "js-map-reduce",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Arrays",
    "order": 30,
    "title": "map() and reduce(): transform and total data",
    "summary": "Create derived lists and calculate a cart total.",
    "definition": "map() creates a new array of transformed values; reduce() combines array entries into an accumulated result.",
    "learn": [
      "Use map to transform cart records",
      "Use reduce to total quantity times price",
      "Choose an initial accumulator value",
      "Understand why original data can remain unchanged"
    ],
    "objective": "Compute a cart subtotal without a repeated manual calculation.",
    "explanation": "Suppose a shopping cart contains several products. map() can create a readable description for each line. reduce() can then combine all the line totals into one subtotal.\n\nmap returns an array, while reduce returns a single value (or whatever accumulator you design). Adding a clear initial value, such as 0 for a numeric total, makes intent explicit.\n\nTry it yourself: add a third product and check the subtotal before running.",
    "tip": "Use map when every input produces one corresponding output; use reduce when you really need a combined result.",
    "hack": "A named helper like lineTotal(item) makes a complex reduce callback easier to read.",
    "mistake": "Do not use parseInt for money or assume floating-point numbers provide exact financial accounting.",
    "expected": "The list shows two cart lines and the subtotal is 430.",
    "realUse": "Cart subtotals, report summaries, and formatting lists for display.",
    "html": "<main><h1>Cart subtotal</h1><ul id=\"lines\"></ul><p>Subtotal: <strong id=\"total\"></strong></p></main>",
    "css": "body{font:16px/1.55 system-ui,sans-serif;background:#edf4fc;color:#17354b;padding:26px}main{max-width:600px;margin:auto;background:white;border-radius:15px;padding:22px;border:1px solid #d9e3ee}input,button{font:inherit;padding:9px 11px;border-radius:8px}input{border:1px solid #71879b;max-width:100%}button{border:0;background:#075a9d;color:#fff;cursor:pointer}button:focus-visible,input:focus-visible{outline:3px solid #faaf3a;outline-offset:2px}li{margin:7px 0}output,strong{color:#075a9d}",
    "js": "const cart = [{ name: 'Liempo', price: 125, quantity: 2 }, { name: 'Chicken', price: 90, quantity: 2 }];\nconst labels = cart.map(item => `${item.name}: ${item.price * item.quantity}`);\nconst subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);\nconst list = document.querySelector('#lines');\nfor (const label of labels) { const li = document.createElement('li'); li.textContent = label; list.append(li); }\ndocument.querySelector('#total').textContent = String(subtotal);",
    "practice": {
      "prompt": "Add a third cart item with price 50 and quantity 3, then compare the new subtotal with your manual calculation.",
      "check": "The new subtotal is 580 (430 + 150), and the new line should appear without changing the loop."
    },
    "quiz": [
      {
        "question": "What does map() return?",
        "options": [
          "A new array of transformed results",
          "The first matched object",
          "A browser window",
          "The accumulated single total"
        ],
        "correctIndex": 0,
        "explanation": "map creates a new array with one result for each original element."
      },
      {
        "question": "Why pass 0 to reduce() here?",
        "options": [
          "It makes CSS work",
          "It sets the starting numeric accumulator",
          "It deletes the cart",
          "It forces strings"
        ],
        "correctIndex": 1,
        "explanation": "A zero initial value makes a numeric sum explicit, including for an empty array."
      }
    ]
  },
  {
    "id": "js-form-input-validation",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Beginner",
    "stage": "DOM & Forms",
    "order": 10,
    "title": "Forms: read input and validate before using it",
    "summary": "Accept a quantity from a real form, reject bad values, and show feedback.",
    "definition": "Form validation checks whether user input meets the rules needed before an application uses that input.",
    "learn": [
      "Listen to form submit",
      "Use preventDefault() for a local demo",
      "Convert input.value explicitly to a number",
      "Show a useful, accessible status message"
    ],
    "objective": "Prevent an invalid quantity from being accepted.",
    "explanation": "A visitor may leave a quantity blank, enter zero, or ask for more stock than exists. Do not trust input just because it came from a number field.\n\nThe input.value property is a string. This example checks that it is not blank, converts it to a number, requires an integer, and compares it to stock. Browser-side checks help users, but production applications must also validate on the server.\n\nTry it yourself: submit 0, 3, and 9. Compare the messages.",
    "tip": "Give an actionable message like 'Enter a whole number from 1 to 5' rather than only 'Invalid'.",
    "hack": "Use Number.isInteger(quantity) after conversion when the rule requires whole items.",
    "mistake": "Do not treat client-side validation as a security boundary; it can be bypassed.",
    "expected": "Submitting 3 shows an accepted quantity; submitting 0 or 9 shows a validation message.",
    "realUse": "Checkout quantity controls, inventory receiving, reservation forms, and account signups.",
    "html": "<main><h1>Request packs</h1><form id=\"order\"><label for=\"quantity\">Quantity (1–5)</label> <input id=\"quantity\" name=\"quantity\" type=\"number\" inputmode=\"numeric\" step=\"1\" value=\"3\"><button type=\"submit\">Check request</button></form><p id=\"message\" role=\"status\" aria-live=\"polite\"></p></main>",
    "css": "body{font:16px/1.55 system-ui,sans-serif;background:#edf4fc;color:#17354b;padding:26px}main{max-width:600px;margin:auto;background:white;border-radius:15px;padding:22px;border:1px solid #d9e3ee}input,button{font:inherit;padding:9px 11px;border-radius:8px}input{border:1px solid #71879b;max-width:100%}button{border:0;background:#075a9d;color:#fff;cursor:pointer}button:focus-visible,input:focus-visible{outline:3px solid #faaf3a;outline-offset:2px}li{margin:7px 0}output,strong{color:#075a9d}",
    "js": "const form = document.querySelector('#order');\nconst field = document.querySelector('#quantity');\nconst message = document.querySelector('#message');\nconst stock = 5;\nform.addEventListener('submit', event => {\n  event.preventDefault();\n  const raw = field.value.trim();\n  const quantity = Number(raw);\n  message.textContent = raw && Number.isInteger(quantity) && quantity >= 1 && quantity <= stock\n    ? `Accepted: ${quantity} pack(s)`\n    : 'Enter a whole number from 1 to 5.';\n});",
    "practice": {
      "prompt": "Change stock from 5 to 8. Test submitting 8 and 9. Update the error text so it matches the new allowed range.",
      "check": "8 is accepted, 9 is rejected, and the error message accurately says 1 to 8."
    },
    "quiz": [
      {
        "question": "What is the type of input.value?",
        "options": [
          "number",
          "string",
          "boolean",
          "object only"
        ],
        "correctIndex": 1,
        "explanation": "Even a number input exposes its value as a string."
      },
      {
        "question": "Is client-side validation enough to protect a purchase?",
        "options": [
          "Yes, browsers cannot change it",
          "No, production systems need server-side validation too",
          "Only if input is hidden",
          "Yes, when JavaScript runs"
        ],
        "correctIndex": 1,
        "explanation": "Client-side checks improve UX but can be bypassed or altered."
      }
    ]
  },
  {
    "id": "js-event-delegation",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "DOM & Forms",
    "order": 20,
    "title": "Event delegation: one listener for many buttons",
    "summary": "Handle repeated card actions without attaching a handler to every button.",
    "definition": "Event delegation attaches a listener to a common ancestor and handles events from matching descendants as they bubble upward.",
    "learn": [
      "Recognize bubbling",
      "Use closest() to identify the intended button",
      "Read a data-* attribute",
      "Keep one listener on a stable container"
    ],
    "objective": "Handle multiple product actions through one event listener.",
    "explanation": "If a product grid has 100 cards, adding the same type of click handler to every button is unnecessary. A parent container can listen once; clicks bubble up from the button.\n\nUse closest('button[data-product]') to identify the button, then read its dataset. Do not assume every click hits a button.\n\nTry it yourself: add a new button with a data-product value and watch it work without changing JavaScript.",
    "tip": "Keep the listener on the smallest stable container that owns the relevant buttons.",
    "hack": "Event delegation also works for new matching buttons added later to the same container.",
    "mistake": "Don't treat event.target as always being a button; users may click a nested icon or text.",
    "expected": "Clicking Liempo or Chicken updates the chosen product message using one click handler.",
    "realUse": "Product grids, tables, task lists, and dynamic admin interfaces.",
    "html": "<main><h1>Choose a product</h1><div id=\"products\"><button type=\"button\" data-product=\"Liempo\">Liempo</button> <button type=\"button\" data-product=\"Chicken\">Chicken</button></div><p id=\"chosen\" role=\"status\">Nothing selected</p></main>",
    "css": "body{font:16px/1.55 system-ui,sans-serif;background:#edf4fc;color:#17354b;padding:26px}main{max-width:600px;margin:auto;background:white;border-radius:15px;padding:22px;border:1px solid #d9e3ee}input,button{font:inherit;padding:9px 11px;border-radius:8px}input{border:1px solid #71879b;max-width:100%}button{border:0;background:#075a9d;color:#fff;cursor:pointer}button:focus-visible,input:focus-visible{outline:3px solid #faaf3a;outline-offset:2px}li{margin:7px 0}output,strong{color:#075a9d}",
    "js": "const products = document.querySelector('#products');\nconst chosen = document.querySelector('#chosen');\nproducts.addEventListener('click', event => {\n  const target = event.target;\n  if (!(target instanceof Element)) return;\n  const button = target.closest('button[data-product]');\n  if (!button || !products.contains(button)) return;\n  chosen.textContent = `Selected: ${button.dataset.product}`;\n});",
    "practice": {
      "prompt": "Add a button for Fish Fillet inside #products. Click it and confirm no new JavaScript listener was necessary.",
      "check": "The status updates to 'Selected: Fish Fillet'."
    },
    "quiz": [
      {
        "question": "Where is the event listener attached?",
        "options": [
          "To each button",
          "To the shared products container",
          "To the CSS stylesheet",
          "To every HTML element"
        ],
        "correctIndex": 1,
        "explanation": "Delegation handles matching descendant clicks through a parent listener."
      },
      {
        "question": "Why use closest()?",
        "options": [
          "To find the nearest matching ancestor",
          "To calculate page width",
          "To encrypt text",
          "To stop all events"
        ],
        "correctIndex": 0,
        "explanation": "A click target may be nested inside the button, and closest can locate it."
      }
    ]
  },
  {
    "id": "js-promises-async-await",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Asynchronous Thinking",
    "order": 10,
    "title": "Promises and async/await, without a server",
    "summary": "Understand a finished asynchronous task without pretending network access exists.",
    "definition": "A Promise represents an eventual result or failure. An async function can await its settlement before continuing.",
    "learn": [
      "Recognize Promise fulfillment",
      "Use async and await",
      "Handle an awaited rejection with try/catch",
      "Distinguish asynchronous sequencing from actual network requests"
    ],
    "objective": "Show an asynchronous result clearly while respecting the offline browser sandbox.",
    "explanation": "Some tasks finish later. A Promise is a standard JavaScript way to represent that pending result. await allows an async function to continue after the Promise settles.\n\nThis example uses Promise.resolve() so the concept works in the isolated lesson runner. It does NOT contact any real API; external requests are disabled by the runner's security policy.\n\nTry it yourself: change the fulfilled message, then replace Promise.resolve with Promise.reject(new Error('Demo failure')) to see the error branch.",
    "tip": "Use await inside an async function, and give failures a user-readable explanation.",
    "hack": "Try/catch around awaited operations is easier to inspect than multiple detached error handlers in a small flow.",
    "mistake": "Do not mistake an immediately resolved Promise for proof that a network API is available.",
    "expected": "The UI first shows 'Working…', then 'Finished: Ready' after the Promise fulfills.",
    "realUse": "Loading records, uploads, and API calls use asynchronous patterns in environments where those operations are actually allowed.",
    "html": "<main><h1>Async example</h1><p id=\"status\" role=\"status\">Starting…</p></main>",
    "css": "body{font:16px/1.55 system-ui,sans-serif;background:#edf4fc;color:#17354b;padding:26px}main{max-width:600px;margin:auto;background:white;border-radius:15px;padding:22px;border:1px solid #d9e3ee}input,button{font:inherit;padding:9px 11px;border-radius:8px}input{border:1px solid #71879b;max-width:100%}button{border:0;background:#075a9d;color:#fff;cursor:pointer}button:focus-visible,input:focus-visible{outline:3px solid #faaf3a;outline-offset:2px}li{margin:7px 0}output,strong{color:#075a9d}",
    "js": "const status = document.querySelector('#status');\nasync function showResult() {\n  status.textContent = 'Working…';\n  try {\n    const value = await Promise.resolve('Ready');\n    status.textContent = `Finished: ${value}`;\n  } catch (error) {\n    status.textContent = `Could not finish: ${error.message}`;\n  }\n}\nshowResult();",
    "practice": {
      "prompt": "Replace Promise.resolve('Ready') with Promise.reject(new Error('Demo failure')). Press Run again and inspect the status.",
      "check": "The status should show 'Could not finish: Demo failure' without a browser crash."
    },
    "quiz": [
      {
        "question": "What does await do in this example?",
        "options": [
          "Waits for the Promise's result in the async function",
          "Automatically fetches from the internet",
          "Creates an HTML element",
          "Starts a second browser"
        ],
        "correctIndex": 0,
        "explanation": "await pauses the async function until the Promise settles."
      },
      {
        "question": "Does this lesson make a real API request?",
        "options": [
          "Yes",
          "No, it uses Promise.resolve locally",
          "Only if the CSS is loaded",
          "It sends data to Java"
        ],
        "correctIndex": 1,
        "explanation": "The lesson demonstrates Promise sequencing without external network access."
      }
    ]
  },
  {
    "id": "js-debugging-errors",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Projects & Practice",
    "order": 5,
    "title": "Debugging: inspect values and handle errors",
    "summary": "Prevent confusing NaN results and explain invalid input safely.",
    "definition": "Debugging is the process of finding and correcting faulty behavior; error handling lets code respond deliberately when an operation fails.",
    "learn": [
      "Reproduce a bug with a specific input",
      "Use console.log for inspection",
      "Recognize NaN and Number.isFinite",
      "Catch thrown errors and show helpful feedback"
    ],
    "objective": "Handle a broken numeric calculation without displaying NaN.",
    "explanation": "If an app silently turns bad input into NaN, visitors will not know how to fix it. Debugging starts by reproducing the problem with a clear example, checking actual values, and fixing the cause.\n\nThis example converts a string to a number, rejects non-finite results, and catches a deliberate Error. It does not hide unexpected errors with an empty catch.\n\nTry it yourself: change 'not-a-number' to '20', then run again.",
    "tip": "Record the input that caused the bug so you can test the fix later.",
    "hack": "Use a small function with a clear contract; it becomes easier to unit-test.",
    "mistake": "Don't catch every error and then do nothing. Hidden failures are harder to diagnose.",
    "expected": "Invalid input displays a clear validation message instead of NaN; valid input shows 40.",
    "realUse": "Order calculations, report filters, imported records, and user form processing.",
    "html": "<main><h1>Debug a total</h1><p id=\"result\" role=\"status\"></p></main>",
    "css": "body{font:16px/1.55 system-ui,sans-serif;background:#edf4fc;color:#17354b;padding:26px}main{max-width:600px;margin:auto;background:white;border-radius:15px;padding:22px;border:1px solid #d9e3ee}input,button{font:inherit;padding:9px 11px;border-radius:8px}input{border:1px solid #71879b;max-width:100%}button{border:0;background:#075a9d;color:#fff;cursor:pointer}button:focus-visible,input:focus-visible{outline:3px solid #faaf3a;outline-offset:2px}li{margin:7px 0}output,strong{color:#075a9d}",
    "js": "function doubleQuantity(raw) {\n  const value = Number(raw);\n  if (!String(raw).trim() || !Number.isFinite(value)) throw new Error('Quantity must be a valid number');\n  return value * 2;\n}\ntry {\n  const total = doubleQuantity('not-a-number');\n  document.querySelector('#result').textContent = String(total);\n} catch (error) {\n  document.querySelector('#result').textContent = `Check input: ${error.message}`;\n  console.log('Validation failed:', error.message);\n}",
    "practice": {
      "prompt": "Change the input to '20' and confirm the result is 40. Then try an empty string to see why explicit blank checks matter.",
      "check": "A valid input shows 40; an empty input shows a helpful validation message."
    },
    "quiz": [
      {
        "question": "What does Number('hello') produce?",
        "options": [
          "0",
          "NaN",
          "true",
          "A DOM element"
        ],
        "correctIndex": 1,
        "explanation": "Non-numeric strings cannot convert to a valid number, so Number returns NaN."
      },
      {
        "question": "Why is an empty catch block a poor debugging habit?",
        "options": [
          "It prevents HTML parsing",
          "It hides failures that need investigation",
          "It forces output to zero",
          "It is a syntax error"
        ],
        "correctIndex": 1,
        "explanation": "Silent catches make real failures difficult to trace."
      }
    ]
  },
  {
    "id": "js-project-live-product-search",
    "categoryId": "javascript",
    "mode": "code",
    "level": "Intermediate",
    "stage": "Projects & Practice",
    "order": 20,
    "title": "Mini project: build a live product search",
    "summary": "Combine arrays, objects, string matching, DOM events, and safe rendering.",
    "definition": "A live search filters a local collection as the user types and updates the visible results.",
    "learn": [
      "Represent multiple products as objects",
      "Use filter() and includes()",
      "Listen to input events",
      "Safely render matching records with textContent",
      "Handle a zero-results state"
    ],
    "objective": "Build and test an accessible live product search without network calls.",
    "explanation": "A real product picker should react as customers type. Start with a small local dataset, normalize the query, filter the items, and display results. Keep the filtering logic separate from rendering.\n\nThis offline practice uses no external API or hidden database. Creating DOM elements and writing textContent keeps displayed names from being parsed as HTML. An aria-live region announces result counts.\n\nTry it yourself: type 'ch', clear the search, then type a word that has no matches. Add a fourth product to the array.",
    "tip": "Normalize both the search query and product names so uppercase and lowercase behave consistently.",
    "hack": "Use a DocumentFragment if a large number of DOM nodes must be appended in one batch; for this tiny dataset, direct append is clear.",
    "mistake": "Do not concatenate untrusted product names into innerHTML. Use textContent instead.",
    "expected": "Typing 'ch' shows Chicken Breast only; clearing displays all three; 'xyz' shows No products found.",
    "realUse": "Inventory search, POS product selectors, customer lookups, and product catalog filters.",
    "html": "<main><h1>Product finder</h1><label for=\"search\">Search products</label> <input id=\"search\" type=\"search\" placeholder=\"Try: ch\" autocomplete=\"off\"><p id=\"count\" role=\"status\" aria-live=\"polite\"></p><ul id=\"results\"></ul></main>",
    "css": "body{font:16px/1.55 system-ui,sans-serif;background:#edf4fc;color:#17354b;padding:26px}main{max-width:600px;margin:auto;background:white;border-radius:15px;padding:22px;border:1px solid #d9e3ee}input,button{font:inherit;padding:9px 11px;border-radius:8px}input{border:1px solid #71879b;max-width:100%}button{border:0;background:#075a9d;color:#fff;cursor:pointer}button:focus-visible,input:focus-visible{outline:3px solid #faaf3a;outline-offset:2px}li{margin:7px 0}output,strong{color:#075a9d}",
    "js": "const products = [\n  { name: 'Liempo', stock: 4 },\n  { name: 'Chicken Breast', stock: 8 },\n  { name: 'Fish Fillet', stock: 0 }\n];\nconst input = document.querySelector('#search');\nconst results = document.querySelector('#results');\nconst count = document.querySelector('#count');\nfunction render(query = '') {\n  const normalized = query.trim().toLowerCase();\n  const matches = products.filter(item => item.name.toLowerCase().includes(normalized));\n  results.replaceChildren();\n  for (const item of matches) {\n    const li = document.createElement('li');\n    li.textContent = `${item.name} — ${item.stock} in stock`;\n    results.append(li);\n  }\n  if (!matches.length) {\n    const empty = document.createElement('li');\n    empty.textContent = 'No products found';\n    results.append(empty);\n  }\n  count.textContent = `${matches.length} matching products`;\n}\ninput.addEventListener('input', () => render(input.value));\nrender();",
    "practice": {
      "prompt": "Add Beef Tapa with stock 2. Search 'beef', then search 'fish'. Explain why the out-of-stock item still appears in search results.",
      "check": "Beef Tapa appears after the addition; Fish Fillet still matches by name. Filtering by stock would be a separate requirement."
    },
    "quiz": [
      {
        "question": "Why call toLowerCase on both names and search text?",
        "options": [
          "To hide items",
          "To compare without letter-case differences",
          "To make the list larger",
          "To send a request"
        ],
        "correctIndex": 1,
        "explanation": "Normalization allows 'CH' and 'ch' to match the same product name."
      },
      {
        "question": "Why use replaceChildren and textContent here?",
        "options": [
          "To avoid interpreting product names as HTML while refreshing results",
          "To run remote scripts",
          "To save search history",
          "To change the input type"
        ],
        "correctIndex": 0,
        "explanation": "Clearing and recreating safe text nodes avoids injecting markup through product names."
      }
    ]
  }
];
const existing=new Set(data.lessons.map(x=>x.id));
for(const lesson of additions){if(!existing.has(lesson.id)){data.lessons.push(lesson);existing.add(lesson.id);}}
const practicePatches={
  "js-first-steps": {
    "prompt": "Change the success message to a sentence of your choice. Press Run, click the button, and inspect the Console.",
    "check": "The button updates the text to your sentence and the Console logs Button clicked."
  },
  "js-variables-types": {
    "prompt": "Change quantity from 2 to 3. Predict the numeric total before pressing Run, then inspect typeof price.",
    "check": "The total becomes 375, and typeof price should be number."
  },
  "js-conditions": {
    "prompt": "Test requested = 4, requested = 0, and requested = 5. Predict the matching branch for each.",
    "check": "4 is available; 0 asks for at least one item; 5 shows Not enough stock."
  },
  "js-functions": {
    "prompt": "Add a third cart line using calculateTotal(50, 4), without copying the multiplication formula.",
    "check": "A third line displays 200, and the function still handles the arithmetic in one place."
  },
  "js-loops": {
    "prompt": "Add Fish Fillet to the products array without writing another li element manually.",
    "check": "The new product appears automatically; the rendered count logged to Console increases."
  },
  "js-dom-counter": {
    "prompt": "Change count += 1 to count += 2. Click the button three times and explain the visible number.",
    "check": "The count becomes 6 after three clicks. The same render function still updates the DOM."
  },
  "js-filter-vs-find": {
    "prompt": "Change the find() name to a product that is missing. Add a matching new item to the array and test both cases.",
    "check": "A missing product shows No match found; adding the product makes find() return the first matching item."
  }
};
for(const [id,practice] of Object.entries(practicePatches)){
  const lesson=data.lessons.find(x=>x.id===id);
  if(lesson && !lesson.practice)lesson.practice=practice;
}
const javascript=data.categories.find(x=>x.id==='javascript');
if(javascript){
  javascript.status='Runnable lessons · expanding';
  javascript.description='A progressive JavaScript course covering core syntax, arrays, objects, DOM interactions, validation, asynchronous thinking, safe code, and a real offline product-search project.';
  javascript.learningPath=['Foundation','Arrays','Objects & Data','DOM & Forms','Asynchronous Thinking','Projects & Practice'];
}
})();
