(function(){'use strict';window.KNOWLEDGE_LAB_V2={
  "version": "2026-10-12-v3",
  "categories": [
    {
      "id": "html",
      "label": "HTML",
      "group": "Code & Development",
      "icon": "<>",
      "status": "Live runner",
      "description": "Semantic structure, forms, accessibility, and practical page patterns."
    },
    {
      "id": "css",
      "label": "CSS",
      "group": "Code & Development",
      "icon": "#",
      "status": "Live runner",
      "description": "Responsive layout, Grid, Flexbox, spacing, and reusable UI patterns."
    },
    {
      "id": "javascript",
      "label": "JavaScript",
      "group": "Code & Development",
      "icon": "JS",
      "status": "Live runner",
      "description": "DOM behavior, events, arrays, state, debugging, and browser patterns."
    },
    {
      "id": "java",
      "label": "Java",
      "group": "Code & Development",
      "icon": "J",
      "status": "Learning path + CI tested",
      "description": "From fundamentals to OOP, clean code, Big O, collections, and practical Java—explained simply and verified in CI.",
      "learningPath": [
        "Foundation",
        "OOP Foundations",
        "Problem Solving",
        "Applied Java"
      ]
    },
    {
      "id": "git",
      "label": "Git & GitHub",
      "group": "Code & Development",
      "icon": "G",
      "status": "Next",
      "description": "Safe commits, branches, diffs, pull requests, and recovery workflows."
    },
    {
      "id": "apps-script",
      "label": "Google Apps Script",
      "group": "Code & Development",
      "icon": "AS",
      "status": "Next",
      "description": "Sheets automation, batch reads/writes, web apps, and performance patterns."
    },
    {
      "id": "photoshop",
      "label": "Photoshop",
      "group": "Creative & Multimedia",
      "icon": "Ps",
      "status": "Proof backed",
      "description": "Non-destructive editing, product refinement, masks, and campaign layout workflow."
    },
    {
      "id": "canva",
      "label": "Canva",
      "group": "Creative & Multimedia",
      "icon": "C",
      "status": "Proof + video",
      "description": "Brand systems, presentation structure, reusable layouts, and content consistency."
    },
    {
      "id": "capcut",
      "label": "CapCut",
      "group": "Creative & Multimedia",
      "icon": "CC",
      "status": "Proof + video",
      "description": "Vertical ad pacing, overlays, sequencing, CTA timing, and export review."
    },
    {
      "id": "blender",
      "label": "Blender",
      "group": "Creative & Multimedia",
      "icon": "3D",
      "status": "Proof required",
      "description": "3D workflow notes publish only when a real project artifact or walkthrough is attached."
    },
    {
      "id": "roblox-studio",
      "label": "Roblox Studio",
      "group": "Creative & Multimedia",
      "icon": "R",
      "status": "Proof required",
      "description": "Game-world and implementation tutorials publish only with real project evidence."
    }
  ],
  "lessons": [
    {
      "id": "html-clean-document",
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "title": "Build a clean semantic page section",
      "summary": "Use semantic HTML for a small content card, then verify the button behavior in the live browser runner.",
      "objective": "Practice meaningful elements and a simple interaction without relying on generic div-only markup.",
      "explanation": "Semantic elements describe what content means, not just how it looks. A clear heading, supporting copy, and an explicit button make the structure easier to understand and maintain.\n\nThe browser runner renders the actual HTML, CSS, and JavaScript shown in the editors.",
      "tip": "Use semantic elements when the content has a recognizable purpose. Keep class names for styling, not for replacing document meaning.",
      "hack": "Use Ctrl/⌘ + Enter to rerun the lesson after editing the code.",
      "mistake": "Do not put visible content inside <head>. Visible page content belongs inside <body>.",
      "expected": "The card appears and the button text changes to “It works ✓” when clicked.",
      "realUse": "The same pattern is useful for portfolio cards, callouts, documentation panels, and small dashboard modules.",
      "tags": [
        "html",
        "semantic",
        "button",
        "structure",
        "browser"
      ],
      "html": "<main class=\"intro-card\">\n  <p class=\"eyebrow\">KNOWLEDGE LAB</p>\n  <h1>Semantic HTML that still looks good.</h1>\n  <p>Structure first. Styling second. Behavior last.</p>\n  <button type=\"button\">Test interaction</button>\n</main>",
      "css": "body {\n  margin: 0;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: system-ui, sans-serif;\n  background: #eef6fb;\n}\n.intro-card {\n  width: min(440px, 88vw);\n  padding: 28px;\n  border-radius: 20px;\n  background: white;\n  box-shadow: 0 18px 45px #16324a22;\n}\n.eyebrow { color: #0879b7; font-weight: 800; font-size: 12px; letter-spacing: .08em; }\nbutton { padding: 10px 14px; border: 0; border-radius: 10px; background: #0c8bc7; color: white; font-weight: 800; }",
      "js": "const button = document.querySelector(\"button\");\nbutton.addEventListener(\"click\", () => {\n  button.textContent = \"It works ✓\";\n});",
      "stage": "Foundation",
      "order": 10,
      "quiz": [
        {
          "question": "Where should visible page content normally go?",
          "options": [
            "Inside <head>",
            "Inside <body>",
            "Inside <title>",
            "Inside <meta>"
          ],
          "correctIndex": 1,
          "explanation": "Visible document content belongs in <body>. <head> is for metadata and linked resources."
        },
        {
          "question": "Why use semantic elements?",
          "options": [
            "They always make pages faster",
            "They describe the purpose of content",
            "They replace CSS",
            "They remove the need for JavaScript"
          ],
          "correctIndex": 1,
          "explanation": "Semantic elements communicate meaning and structure, which helps maintainability and accessibility."
        }
      ]
    },
    {
      "id": "html-accessible-form",
      "categoryId": "html",
      "mode": "code",
      "level": "Beginner",
      "title": "Make a usable form",
      "summary": "Build a labeled input and handle submission without sending data anywhere.",
      "objective": "Practice label/input pairing, button types, and safe client-side form handling.",
      "explanation": "A usable form needs more than an input box. A label tells users and assistive technology what the field is for. A submit button gives the form one clear action.\n\nThis demo prevents the default submission and writes the entered name into the page, so no request leaves the sandbox.",
      "tip": "Connect <label for=\"name\"> to <input id=\"name\">. Clicking the label focuses the input too.",
      "hack": "Use FormData when a form has several fields so you do not manually read each field one by one.",
      "mistake": "Do not use placeholder text as the only label. Placeholders disappear while typing and are weaker for accessibility.",
      "expected": "Type a name, choose Submit, and the greeting updates below the form without a page reload.",
      "realUse": "The same pattern appears in search forms, contact forms, sign-in screens, and admin tools.",
      "tags": [
        "html",
        "form",
        "accessibility",
        "label",
        "submit"
      ],
      "html": "<form id=\"helloForm\">\n  <label for=\"name\">Your name</label>\n  <input id=\"name\" name=\"name\" autocomplete=\"name\" required>\n  <button type=\"submit\">Submit</button>\n</form>\n<p id=\"message\" role=\"status\">Waiting for a name…</p>",
      "css": "body { font-family: system-ui, sans-serif; padding: 32px; background: #f6f8fb; color: #142235; }\nform { display: grid; gap: 10px; max-width: 360px; }\nlabel { font-weight: 700; }\ninput { padding: 11px 12px; border: 1px solid #b9c7d4; border-radius: 9px; }\nbutton { width: max-content; padding: 9px 13px; border: 0; border-radius: 9px; background: #0879b7; color: white; font-weight: 700; }\n#message { margin-top: 18px; color: #31526b; }",
      "js": "const form = document.querySelector(\"#helloForm\");\nconst message = document.querySelector(\"#message\");\n\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  const data = new FormData(form);\n  const name = String(data.get(\"name\") || \"\").trim();\n  message.textContent = name ? `Hello, ${name}!` : \"Please enter a name.\";\n});",
      "stage": "Foundation",
      "order": 20,
      "quiz": [
        {
          "question": "What connects a label to an input?",
          "options": [
            "Matching class names",
            "The label's for value and the input's id",
            "The placeholder",
            "The input's name only"
          ],
          "correctIndex": 1,
          "explanation": "A label's for attribute should match the input's id."
        },
        {
          "question": "Why call event.preventDefault() in this demo?",
          "options": [
            "To remove the button",
            "To stop the normal page submission/reload",
            "To validate CSS",
            "To clear the input"
          ],
          "correctIndex": 1,
          "explanation": "The lesson handles the form in JavaScript, so the default submission is prevented."
        },
        {
          "question": "Is placeholder text a good replacement for a label?",
          "options": [
            "Yes, always",
            "Only on desktop",
            "No—use a real label",
            "Only for required fields"
          ],
          "correctIndex": 2,
          "explanation": "A real label stays available while the user types and is better for accessibility."
        }
      ]
    },
    {
      "id": "css-responsive-grid",
      "categoryId": "css",
      "mode": "code",
      "level": "Intermediate",
      "title": "Responsive cards without breakpoint overload",
      "summary": "Use CSS Grid with auto-fit and minmax so cards wrap naturally as available space changes.",
      "objective": "Create a responsive card layout with one grid rule instead of hard-coding several column counts.",
      "explanation": "repeat(auto-fit, minmax(...)) asks the browser to fit as many columns as possible while respecting a minimum card width. When space becomes narrow, cards wrap automatically.\n\nThis pattern is useful when the component should respond to its available container width rather than a list of device names.",
      "tip": "Choose the minimum width from the real content, not from a random device breakpoint.",
      "hack": "Use min(100%, 220px) inside minmax to keep tracks safe inside very narrow containers.",
      "mistake": "A minimum that is too large can create horizontal overflow on small screens.",
      "expected": "The cards automatically move from several columns to fewer columns when the result area becomes narrow.",
      "realUse": "Useful for portfolio cards, product lists, admin panels, search results, and category dashboards.",
      "tags": [
        "css",
        "grid",
        "responsive",
        "auto-fit",
        "minmax"
      ],
      "html": "<section class=\"card-grid\">\n  <article class=\"card\"><strong>HTML</strong><span>Structure</span></article>\n  <article class=\"card\"><strong>CSS</strong><span>Presentation</span></article>\n  <article class=\"card\"><strong>JavaScript</strong><span>Behavior</span></article>\n  <article class=\"card\"><strong>Java</strong><span>Application logic</span></article>\n</section>",
      "css": "body { margin: 0; padding: 24px; font-family: system-ui, sans-serif; background: #f3f6f9; }\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));\n  gap: 16px;\n}\n.card {\n  display: grid;\n  gap: 6px;\n  padding: 22px;\n  border: 1px solid #d7e0e8;\n  border-radius: 16px;\n  background: white;\n}\n.card strong { color: #0879b7; }\n.card span { color: #607086; }",
      "js": "console.log(`Rendered ${document.querySelectorAll(\".card\").length} responsive cards.`);",
      "stage": "Responsive Layout",
      "order": 10,
      "quiz": [
        {
          "question": "What does auto-fit help Grid do?",
          "options": [
            "Fit as many tracks as available space allows",
            "Force exactly four columns",
            "Disable wrapping",
            "Replace minmax()"
          ],
          "correctIndex": 0,
          "explanation": "auto-fit lets the grid adapt the number of columns to available space."
        },
        {
          "question": "Why use min(100%, 220px) inside minmax()?",
          "options": [
            "To create animation",
            "To reduce overflow risk in narrow containers",
            "To force 220px on every device",
            "To center text"
          ],
          "correctIndex": 1,
          "explanation": "It keeps the minimum track from exceeding the container width."
        }
      ]
    },
    {
      "id": "js-dom-counter",
      "categoryId": "javascript",
      "mode": "code",
      "level": "Beginner",
      "title": "Use the event → state → render loop",
      "summary": "Connect a click event to state, then render that state back into the DOM.",
      "objective": "Practice the small interaction loop that appears in carts, counters, filters, tabs, and admin controls.",
      "explanation": "The count lives in a normal variable. Each click changes the state, then render() writes the current value into the page.\n\nSeparating the state change from the DOM update keeps the logic easier to inspect and extend.",
      "tip": "Use textContent when you only need to write text. It avoids parsing the value as HTML.",
      "hack": "Keep repeated DOM lookups outside the click handler when the same nodes are reused.",
      "mistake": "Do not write count = count++ and expect a simple increment. Use count += 1 or ++count.",
      "expected": "Each click on +1 increases the visible number and logs the value to Console.",
      "realUse": "Useful for quantity controls, cart counts, filters, pagination state, tabs, and dashboard actions.",
      "tags": [
        "javascript",
        "dom",
        "event",
        "state",
        "render"
      ],
      "html": "<main class=\"counter-card\">\n  <p>Current count</p>\n  <strong id=\"count\">0</strong>\n  <button id=\"add\" type=\"button\">+1</button>\n</main>",
      "css": "body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: system-ui, sans-serif; background: #091a29; }\n.counter-card { min-width: 230px; padding: 28px; text-align: center; border-radius: 20px; background: white; }\n.counter-card p { margin: 0 0 8px; color: #607086; }\n#count { display: block; margin-bottom: 18px; font-size: 56px; line-height: 1; color: #0879b7; }\nbutton { border: 0; border-radius: 10px; padding: 10px 18px; background: #14a673; color: white; font-weight: 800; }",
      "js": "const countNode = document.querySelector(\"#count\");\nconst addButton = document.querySelector(\"#add\");\nlet count = 0;\n\nfunction render() {\n  countNode.textContent = String(count);\n}\n\naddButton.addEventListener(\"click\", () => {\n  count += 1;\n  render();\n  console.log(\"Count:\", count);\n});",
      "stage": "Foundation",
      "order": 10,
      "quiz": [
        {
          "question": "Which sequence best describes this counter?",
          "options": [
            "Render → event → state",
            "Event → state change → render",
            "CSS → HTML → database",
            "State → network → reload"
          ],
          "correctIndex": 1,
          "explanation": "The click event changes state, then render() updates the DOM."
        },
        {
          "question": "Why is textContent a good fit for the count?",
          "options": [
            "It executes HTML",
            "It writes plain text safely",
            "It creates a new element",
            "It stores data in localStorage"
          ],
          "correctIndex": 1,
          "explanation": "The counter only needs plain text, so textContent is clear and appropriate."
        }
      ]
    },
    {
      "id": "js-filter-vs-find",
      "categoryId": "javascript",
      "mode": "code",
      "level": "Intermediate",
      "title": "Choose filter() or find() correctly",
      "summary": "Use filter() for a list of matches and find() when you only need the first matching item.",
      "objective": "Pick the array method that matches the result shape you actually need.",
      "explanation": "filter() always returns a new array, even if only one item matches. find() returns the first matching item or undefined.\n\nChoosing the correct method makes the code clearer and avoids filtering an entire list just to read one item.",
      "tip": "Ask one question first: “Do I need one item or a list?” That usually tells you whether to start with find() or filter().",
      "hack": "Use console.table() for arrays of objects while debugging. It is easier to scan than repeated console.log() lines.",
      "mistake": "Do not assume find() returns an array. Check for undefined when a match may not exist.",
      "expected": "The result lists in-stock products and shows Beef Tapa as the first requested match.",
      "realUse": "Useful for inventory filtering, product search, active records, user lookup, and selection logic.",
      "tags": [
        "javascript",
        "array",
        "filter",
        "find",
        "console.table"
      ],
      "html": "<main>\n  <h2>Available products</h2>\n  <ul id=\"available\"></ul>\n  <p id=\"firstMatch\"></p>\n</main>",
      "css": "body { font-family: system-ui, sans-serif; padding: 28px; color: #142235; background: #f6f8fb; }\nmain { max-width: 520px; margin: auto; }\nli { margin: 8px 0; padding: 10px 12px; border-radius: 9px; background: white; border: 1px solid #d9e2ec; }\n#firstMatch { color: #0879b7; font-weight: 700; }",
      "js": "const products = [\n  { name: \"Liempo\", stock: 5 },\n  { name: \"Chicken Breast\", stock: 0 },\n  { name: \"Beef Tapa\", stock: 3 }\n];\n\nconst available = products.filter((product) => product.stock > 0);\nconst firstMatch = products.find((product) => product.name === \"Beef Tapa\");\n\ndocument.querySelector(\"#available\").innerHTML = available\n  .map((product) => `<li>${product.name}: ${product.stock}</li>`)\n  .join(\"\");\n\ndocument.querySelector(\"#firstMatch\").textContent = firstMatch\n  ? `First match: ${firstMatch.name}`\n  : \"No match found\";\n\nconsole.table(available);\nconsole.log(\"First match:\", firstMatch);",
      "stage": "Arrays",
      "order": 20,
      "quiz": [
        {
          "question": "You need every product with stock > 0. Which method fits best?",
          "options": [
            "find()",
            "filter()",
            "map()",
            "join()"
          ],
          "correctIndex": 1,
          "explanation": "filter() returns a new array containing every matching item."
        },
        {
          "question": "You only need the first product with id === 25. Which method fits best?",
          "options": [
            "filter()",
            "find()",
            "sort()",
            "forEach()"
          ],
          "correctIndex": 1,
          "explanation": "find() stops when it finds the first match and returns that item."
        }
      ]
    },
    {
      "id": "java-validate-numeric-input",
      "categoryId": "java",
      "mode": "reference",
      "language": "Java",
      "verified": true,
      "level": "Beginner",
      "title": "Validate numeric input without crashing the flow",
      "summary": "Treat user-entered text as untrusted input and return an explicit invalid result instead of throwing through the UI.",
      "objective": "Use trim, parseInt, range checks, and NumberFormatException deliberately.",
      "explanation": "Integer.parseInt() throws when the input is not a valid integer. A UI should not let that exception become the user experience.\n\nThis example returns null for blank, negative, or malformed input so the caller can show a clear validation message.",
      "tip": "Keep parsing and validation close together so invalid input cannot accidentally continue deeper into business logic.",
      "hack": "Return a richer validation result when the UI needs different messages for blank, malformed, and out-of-range values.",
      "mistake": "Do not silently replace invalid user input with zero unless zero is genuinely the correct business meaning.",
      "expected": "The compile-tested output is 12, null, null.",
      "expectedOutput": "12\nnull\nnull",
      "realUse": "Useful for quantities, stock counts, package counts, and other numeric form inputs.",
      "tags": [
        "java",
        "validation",
        "numberformat",
        "defensive programming"
      ],
      "code": "public class Main {\n    static Integer parseQuantity(String raw) {\n        if (raw == null || raw.isBlank()) return null;\n        try {\n            int value = Integer.parseInt(raw.trim());\n            return value >= 0 ? value : null;\n        } catch (NumberFormatException ex) {\n            return null;\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(parseQuantity(\"12\"));\n        System.out.println(parseQuantity(\"-1\"));\n        System.out.println(parseQuantity(\"abc\"));\n    }\n}",
      "stage": "Foundation",
      "order": 40,
      "quiz": [
        {
          "question": "What can Integer.parseInt(\"abc\") do?",
          "options": [
            "Return 0 automatically",
            "Throw NumberFormatException",
            "Return null",
            "Convert it to ASCII"
          ],
          "correctIndex": 1,
          "explanation": "Malformed integer text causes NumberFormatException."
        },
        {
          "question": "Why return an invalid result instead of silently using 0?",
          "options": [
            "0 may have a real business meaning",
            "Java forbids 0",
            "It is faster",
            "It removes validation"
          ],
          "correctIndex": 0,
          "explanation": "Silently turning invalid input into 0 can corrupt business meaning."
        }
      ]
    },
    {
      "id": "java-bigdecimal-money",
      "categoryId": "java",
      "mode": "reference",
      "language": "Java",
      "verified": true,
      "level": "Intermediate",
      "title": "Use BigDecimal for money calculations",
      "summary": "Avoid binary floating-point surprises when exact decimal money values matter.",
      "objective": "Create decimal values from strings, multiply them, and format the final scale explicitly.",
      "explanation": "double is binary floating point and cannot represent every decimal fraction exactly. For money, BigDecimal gives explicit decimal arithmetic and rounding behavior.\n\nCreate values from strings when decimal text is the source of truth.",
      "tip": "Prefer new BigDecimal(\"145.50\") or BigDecimal.valueOf(...) over new BigDecimal(145.50).",
      "hack": "Choose the rounding rule at the business boundary, not randomly inside intermediate calculations.",
      "mistake": "Do not mix implicit double conversions into a BigDecimal workflow and assume exactness is preserved.",
      "expected": "The compile-tested total is 436.50.",
      "expectedOutput": "436.50",
      "realUse": "Useful for retail prices, invoice totals, discounts, taxes, and financial summaries.",
      "tags": [
        "java",
        "bigdecimal",
        "money",
        "rounding"
      ],
      "code": "import java.math.BigDecimal;\nimport java.math.RoundingMode;\n\npublic class Main {\n    public static void main(String[] args) {\n        BigDecimal price = new BigDecimal(\"145.50\");\n        BigDecimal quantity = new BigDecimal(\"3\");\n        BigDecimal total = price.multiply(quantity).setScale(2, RoundingMode.HALF_UP);\n        System.out.println(total.toPlainString());\n    }\n}",
      "stage": "Applied Java",
      "order": 10,
      "quiz": [
        {
          "question": "Why is BigDecimal preferred for exact money calculations?",
          "options": [
            "It uses fewer lines",
            "It provides explicit decimal arithmetic",
            "It automatically connects to a database",
            "double cannot store any numbers"
          ],
          "correctIndex": 1,
          "explanation": "BigDecimal is designed for controlled decimal arithmetic and rounding."
        },
        {
          "question": "Which construction is safer for exact decimal text?",
          "options": [
            "new BigDecimal(\"145.50\")",
            "new BigDecimal(145.50)",
            "(BigDecimal)145.50",
            "BigDecimal.random()"
          ],
          "correctIndex": 0,
          "explanation": "Constructing from the decimal string avoids first converting through a binary floating-point value."
        }
      ]
    },
    {
      "id": "photoshop-smart-object-workflow",
      "categoryId": "photoshop",
      "mode": "proof",
      "level": "Working workflow",
      "title": "Keep repeated product transforms non-destructive",
      "summary": "Use Smart Objects and reversible adjustments when product artwork will be resized or repositioned repeatedly.",
      "objective": "Protect the source layer while testing several campaign compositions.",
      "explanation": "Repeated transforms are common in ad layouts. Converting a product layer to a Smart Object preserves a cleaner editing path when the same source needs to be resized, repositioned, or revised later.\n\nThe attached proof is an actual Gatchalian Meatshop campaign deliverable where Photoshop was part of the image-refinement workflow. It proves the finished result, not a screen recording of every editing step.",
      "tip": "Duplicate a Smart Object only when you want independent contents. Otherwise keep one source and reuse it consistently.",
      "hack": "Pair Smart Objects with masks instead of permanently erasing pixels while you are still testing layout options.",
      "mistake": "Do not repeatedly rasterize and resize the only copy of a product image if you still expect revisions.",
      "expected": "A campaign layout remains easy to revise because the source imagery is not destructively flattened during exploration.",
      "realUse": "Useful for product promos, price cards, social ads, campaign variants, and resized platform versions.",
      "tags": [
        "photoshop",
        "smart object",
        "non-destructive",
        "campaign",
        "product"
      ],
      "proof": {
        "kind": "image",
        "label": "Actual campaign result",
        "src": "https://isoiolgajmpldkrvqbkp.supabase.co/storage/v1/object/public/portfolio-media/multimedia/gatchalian-meatshop-social-media-campaign/1791005767827-cover.png",
        "alt": "Gatchalian Meatshop social media campaign board used as result proof for a Photoshop workflow lesson",
        "note": "Real portfolio deliverable. Photoshop is listed in the documented tool workflow for this campaign.",
        "caseUrl": "../multimedia/gatchalian-meatshop.html",
        "caseLabel": "Open Gatchalian campaign case study",
        "steps": [
          "Convert reusable product artwork to a Smart Object before repeated transforms.",
          "Use masks or reversible adjustments while testing composition.",
          "Check price hierarchy and product readability at the target social-media size.",
          "Keep the original source available for later campaign variants."
        ]
      }
    },
    {
      "id": "canva-brand-system-qyntro",
      "categoryId": "canva",
      "mode": "proof",
      "level": "Working workflow",
      "title": "Build a brand system, not isolated pages",
      "summary": "Create a repeatable visual language first, then extend it across packaging, social posts, and presentation pages.",
      "objective": "Use consistent typography, palette, spacing, and reusable layout logic across a multi-page brand presentation.",
      "explanation": "A portfolio brand project becomes stronger when every page feels like part of the same system. Qyntro Daily was developed as a 10-page brand guide covering logo use, visual identity, packaging variants, social media concepts, applications, and presentation.\n\nThe proof video below is the actual portfolio presentation output.",
      "tip": "Lock a small set of type sizes, colors, and spacing rules before creating many pages.",
      "hack": "Duplicate a proven layout and replace only the content that needs to change; this reduces accidental style drift.",
      "mistake": "Do not solve every page as a completely unrelated composition if the goal is one coherent brand.",
      "expected": "The final deck feels consistent even when the content changes from identity to packaging to social media.",
      "realUse": "Useful for brand guides, pitch decks, campaign systems, product catalogs, and social templates.",
      "tags": [
        "canva",
        "brand system",
        "qyntro",
        "packaging",
        "presentation"
      ],
      "proof": {
        "kind": "video",
        "label": "Actual 51.7s portfolio video",
        "src": "https://isoiolgajmpldkrvqbkp.supabase.co/storage/v1/object/public/portfolio-media/multimedia/qyntro-daily-brand-identity-packaging/1791179203173-video.mp4",
        "poster": "../assets/images/qyntro-daily-brand-cover.svg",
        "alt": "Qyntro Daily brand identity and packaging portfolio presentation video",
        "note": "Real personal-project presentation. Canva is the documented primary tool for this brand guide.",
        "caseUrl": "../multimedia/qyntro-daily.html",
        "caseLabel": "Open Qyntro Daily case study",
        "steps": [
          "Define the core name, descriptor, palette, and typography roles.",
          "Create repeatable page and packaging rules before multiplying variants.",
          "Extend the same visual language to social and lifestyle applications.",
          "Review the complete deck for spacing, copy, and consistency before export."
        ]
      }
    },
    {
      "id": "capcut-vertical-ad-structure",
      "categoryId": "capcut",
      "mode": "proof",
      "level": "Working workflow",
      "title": "Structure a vertical ad around one clear story",
      "summary": "Organize a short-form ad into hook, problem, solution, proof/system, and CTA instead of stacking unrelated clips.",
      "objective": "Make timing and text overlays support one message from first frame to CTA.",
      "explanation": "Short vertical ads have very little time to establish context. The Exponify PH campaign video uses a business-development story rather than a random montage: attention first, the lead-handling problem next, the proposed system after that, then a clear action.\n\nThe video below is the actual 36.48-second portfolio asset.",
      "tip": "Keep one primary message per beat. If every line competes for attention, none of them wins.",
      "hack": "Review the edit once with sound off. If the story is no longer understandable, strengthen the visual/text hierarchy.",
      "mistake": "Do not add transitions simply because they exist. Use motion only when it helps pacing, continuity, or emphasis.",
      "expected": "The viewer can follow the offer from problem to CTA without needing extra explanation outside the video.",
      "realUse": "Useful for Meta Ads, reels, service promotions, product launches, and campaign explainers.",
      "tags": [
        "capcut",
        "vertical video",
        "meta ads",
        "storyboard",
        "cta"
      ],
      "proof": {
        "kind": "video",
        "label": "Actual 36.48s campaign video",
        "src": "https://isoiolgajmpldkrvqbkp.supabase.co/storage/v1/object/public/portfolio-media/multimedia/exponify-business-operations-campaign/1791057046598-video.mp4",
        "poster": "../assets/images/exponify-ph-client-acquisition-cover.png",
        "alt": "Exponify PH client acquisition campaign vertical Meta Ads video",
        "note": "Real partner-collaboration portfolio asset. CapCut is documented in the production toolset.",
        "caseUrl": "../multimedia/exponify.html",
        "caseLabel": "Open Exponify PH case study",
        "steps": [
          "Start with the audience problem or a clear attention hook.",
          "Move quickly into the proposed system or benefit.",
          "Keep text overlays readable inside vertical safe areas.",
          "End with one CTA and review the full export at mobile size."
        ]
      }
    },
    {
      "id": "java-ternary-cleaner-conditions",
      "categoryId": "java",
      "mode": "reference",
      "language": "Java",
      "verified": true,
      "stage": "Foundation",
      "order": 30,
      "level": "Beginner",
      "title": "Shorter code: when a ternary is actually clearer",
      "summary": "Compare a simple if/else with the ternary operator, then learn when the shorter form helps—and when it hurts readability.",
      "objective": "Recognize a safe shorthand for simple two-way value selection without treating shorter code as automatically better.",
      "explanation": "A ternary expression is a short way to choose one of two values. Think of it as a compact question: condition ? valueIfTrue : valueIfFalse.\n\nUse it when the choice is small and obvious. If the condition or results become complicated, a normal if/else is usually easier to read.",
      "tip": "Read it aloud: “If stock is greater than zero, use Available; otherwise use Out of stock.” If that sentence becomes hard to follow, keep the if/else.",
      "hack": "Use a ternary mainly for assigning or returning a simple value—not for squeezing several actions into one line.",
      "mistake": "Do not nest multiple ternaries just to reduce line count. Shorter code can be worse code when it hides the logic.",
      "expected": "Both versions produce Available when stock is 3 and Out of stock when stock is 0.",
      "expectedOutput": "Available\nOut of stock",
      "realUse": "Useful for simple status labels, display values, and concise return expressions.",
      "tags": [
        "java",
        "ternary",
        "shorthand",
        "clean code",
        "conditions"
      ],
      "shortcut": {
        "label": "⚡ SHORTER WAY — Ternary operator",
        "longLabel": "Long form",
        "longCode": "String status;\nif (stock > 0) {\n    status = \"Available\";\n} else {\n    status = \"Out of stock\";\n}",
        "shortLabel": "Short form",
        "shortCode": "String status = stock > 0 ? \"Available\" : \"Out of stock\";",
        "note": "Same two-way decision for this simple case, with less repetition.",
        "caution": "Prefer the long form when the condition or branches are complex."
      },
      "code": "public class Main {\n    static String statusFor(int stock) {\n        return stock > 0 ? \"Available\" : \"Out of stock\";\n    }\n\n    public static void main(String[] args) {\n        System.out.println(statusFor(3));\n        System.out.println(statusFor(0));\n    }\n}",
      "quiz": [
        {
          "question": "When is a ternary usually a good choice?",
          "options": [
            "A simple two-way value choice",
            "A 20-line branch",
            "Several nested conditions",
            "Any code that can be shortened"
          ],
          "correctIndex": 0,
          "explanation": "Ternaries are clearest when the condition and two resulting values are simple."
        },
        {
          "question": "What is the main rule?",
          "options": [
            "Shortest code always wins",
            "Readable code wins over clever short code",
            "Never use ternaries",
            "Put all logic on one line"
          ],
          "correctIndex": 1,
          "explanation": "Maintainability and clarity matter more than minimizing line count."
        }
      ]
    },
    {
      "id": "java-oop-class-object",
      "categoryId": "java",
      "mode": "reference",
      "language": "Java",
      "verified": true,
      "stage": "OOP Foundations",
      "order": 10,
      "level": "Beginner",
      "title": "OOP made simple: Class vs Object",
      "summary": "Think of a class as the blueprint and an object as a real thing created from that blueprint.",
      "objective": "Understand class, object, fields, and methods before moving into encapsulation, inheritance, and polymorphism.",
      "explanation": "Imagine a car blueprint. The blueprint says every Car can have a brand, color, and speed, plus actions such as start() and stop(). That blueprint is the class.\n\nmyCar and yourCar are actual objects created from the Car class. They share the same structure but can hold different data.",
      "tip": "When OOP feels abstract, ask two questions: “What is the blueprint?” and “What actual objects are created from it?”",
      "hack": "Start modeling with nouns (possible classes/objects) and actions (possible methods), then simplify before coding.",
      "mistake": "A class is not the same thing as one object. One class can create many objects with different field values.",
      "expected": "The program creates two Car objects and prints Toyota / Red and Honda / Blue.",
      "expectedOutput": "Toyota / Red\nHonda / Blue",
      "realUse": "The same idea is used for Product, Customer, Order, Account, Player, Pet, and many other application models.",
      "tags": [
        "java",
        "oop",
        "class",
        "object",
        "fields",
        "methods"
      ],
      "code": "class Car {\n    String brand;\n    String color;\n    int speed;\n\n    Car(String brand, String color) {\n        this.brand = brand;\n        this.color = color;\n        this.speed = 0;\n    }\n\n    void start() {\n        speed = 10;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Car myCar = new Car(\"Toyota\", \"Red\");\n        Car yourCar = new Car(\"Honda\", \"Blue\");\n\n        System.out.println(myCar.brand + \" / \" + myCar.color);\n        System.out.println(yourCar.brand + \" / \" + yourCar.color);\n    }\n}",
      "quiz": [
        {
          "question": "In the car analogy, what is the class?",
          "options": [
            "One specific Toyota",
            "The blueprint for Car objects",
            "Only the brand field",
            "The console output"
          ],
          "correctIndex": 1,
          "explanation": "The class defines the structure and behavior that objects can have."
        },
        {
          "question": "What is myCar?",
          "options": [
            "A method",
            "A package",
            "An object/instance of Car",
            "A compiler"
          ],
          "correctIndex": 2,
          "explanation": "myCar is one actual object created from the Car class."
        },
        {
          "question": "Can two objects from the same class hold different data?",
          "options": [
            "No",
            "Yes",
            "Only in JavaScript",
            "Only if they use inheritance"
          ],
          "correctIndex": 1,
          "explanation": "Objects share the class definition but can store different field values."
        }
      ]
    },
    {
      "id": "java-big-o-made-simple",
      "categoryId": "java",
      "mode": "reference",
      "language": "Java",
      "verified": true,
      "stage": "Problem Solving",
      "order": 10,
      "level": "Foundation",
      "title": "Big O without the scary math",
      "summary": "Use the “find Juan in a student list” story to understand how work grows when data gets bigger.",
      "objective": "Distinguish O(1), O(log n), O(n), and O(n²) by growth behavior instead of memorizing symbols.",
      "explanation": "Imagine you have a list of students and need to find Juan.\n\nO(1): you already have a direct key such as STU-1025, so the lookup does not grow by scanning the whole list.\n\nO(n): you have an unsorted list, so you may need to check names one by one. More students can mean more checks.\n\nO(n²): every student is compared with every other student. If the input grows 10×, this kind of work can grow roughly 100×.\n\nBig O is not an exact stopwatch. It describes how the amount of work grows as the input grows.",
      "tip": "Do not memorize “O(1) fast, O(n) slow.” Ask: what happens to the amount of work when n becomes much larger?",
      "hack": "When you see a loop inside another loop over the same growing data, check whether the work is approaching O(n²).",
      "mistake": "Big O does not tell you the exact runtime in milliseconds. Constants, hardware, data shape, and implementation details still matter.",
      "expected": "The example performs four linear checks to find Juan and also demonstrates an average O(1) HashMap lookup by ID.",
      "expectedOutput": "Linear checks: 4\nMap lookup: Juan",
      "realUse": "Big O helps you reason about search, pagination, lookup tables, sorting, caching, and whether a design will still behave well with much larger data.",
      "tags": [
        "java",
        "big o",
        "algorithms",
        "performance",
        "scaling",
        "hashmap",
        "linear search"
      ],
      "interactive": {
        "type": "big-o-simulator",
        "presets": [
          10,
          100,
          1000,
          1000000
        ]
      },
      "code": "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Main {\n    public static void main(String[] args) {\n        String[] students = {\"Maria\", \"Pedro\", \"Ana\", \"Juan\"};\n        int checks = 0;\n\n        for (String student : students) {\n            checks++;\n            if (student.equals(\"Juan\")) break;\n        }\n\n        Map<String, String> byId = new HashMap<>();\n        byId.put(\"STU-1025\", \"Juan\");\n\n        System.out.println(\"Linear checks: \" + checks);\n        System.out.println(\"Map lookup: \" + byId.get(\"STU-1025\"));\n    }\n}",
      "quiz": [
        {
          "question": "You scan an unsorted list one item at a time. What is the usual worst-case growth?",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
          ],
          "correctIndex": 2,
          "explanation": "In the worst case, a linear search may inspect every item."
        },
        {
          "question": "You compare every student with every other student using two full nested loops. What growth should you suspect?",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
          ],
          "correctIndex": 3,
          "explanation": "Two full nested loops over n items produce roughly n × n work."
        },
        {
          "question": "What does Big O mainly describe?",
          "options": [
            "Exact milliseconds",
            "How work grows as input grows",
            "How many lines of code exist",
            "The Java version"
          ],
          "correctIndex": 1,
          "explanation": "Big O describes growth/scaling behavior, not exact wall-clock time."
        },
        {
          "question": "Does O(n) automatically mean a program is slow?",
          "options": [
            "Yes",
            "No"
          ],
          "correctIndex": 1,
          "explanation": "For small inputs O(n) can be very fast. Big O is about how the work scales as input grows."
        }
      ]
    }
  ]
};})();
