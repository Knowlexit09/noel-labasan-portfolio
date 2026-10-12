(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons||!data.categories)return;const additions=[
  {
    "id": "java-composition",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "OOP Foundations",
    "order": 30,
    "title": "Composition: build objects from useful collaborators",
    "summary": "A receipt service should rely on a formatter to produce text rather than becoming a giant subclass.",
    "definition": "Composition means an object owns or uses another object to perform responsibilities instead of inheriting every behavior.",
    "learn": [
      "Describe composition as a has-a relationship",
      "Use constructor injection",
      "Separate small responsibilities"
    ],
    "objective": "Use composition: build objects from useful collaborators with Java 21 and verify output.",
    "explanation": "A receipt service should rely on a formatter to produce text rather than becoming a giant subclass.\n\nComposition helps separate responsibilities. A dependency may be supplied in the constructor so the service can use different implementations. This example is standalone and CI-compiled.\n\nSave as Main.java; compile with javac Main.java and run with java Main. Try it yourself: Change the formatter prefix from Receipt to Invoice.",
    "tip": "Prefer composition when the relationship is not a genuine subtype.",
    "hack": "Supply a dependency through a constructor to make testing and replacement easier.",
    "mistake": "Creating inheritance for every shared helper leads to rigid and confusing class trees.",
    "expected": "Receipt: Liempo",
    "expectedOutput": "Receipt: Liempo",
    "realUse": "Application services and reusable domain helpers.",
    "code": "public class Main {\n static class Formatter {String format(String item){return \"Receipt: \"+item;}}\n static class ReceiptService {\n  private final Formatter formatter;\n  ReceiptService(Formatter formatter){this.formatter=formatter;}\n  String create(String item){return formatter.format(item);}\n }\n public static void main(String[] args){\n  System.out.println(new ReceiptService(new Formatter()).create(\"Liempo\"));\n }\n}",
    "practice": {
      "prompt": "Change the formatter prefix from Receipt to Invoice.",
      "check": "The output becomes Invoice: Liempo."
    },
    "quiz": [
      {
        "question": "Which relationship suits composition?",
        "options": [
          "Has-a collaboration",
          "Always is-a inheritance",
          "Only primitive data"
        ],
        "correctIndex": 0,
        "explanation": "Composition models an object using another object."
      },
      {
        "question": "Why inject Formatter?",
        "options": [
          "To separate and replace a dependency",
          "To stop Java compilation",
          "To create network requests"
        ],
        "correctIndex": 0,
        "explanation": "Constructor injection keeps responsibilities independent."
      }
    ]
  },
  {
    "id": "java-abstract-methods",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "OOP Advanced",
    "order": 40,
    "title": "Abstract classes and abstract methods",
    "summary": "Different discount policies can expose a shared calculation contract with different results.",
    "definition": "An abstract class cannot be instantiated directly and may declare abstract methods that concrete subclasses must implement.",
    "learn": [
      "Declare an abstract class",
      "Override an abstract method",
      "Compare abstract classes with interfaces"
    ],
    "objective": "Use abstract classes and abstract methods with Java 21 and verify output.",
    "explanation": "Different discount policies can expose a shared calculation contract with different results.\n\nAn abstract base class is useful when implementations share meaningful state or behavior. An interface is often better for a pure capability contract.\n\nSave as Main.java; compile with javac Main.java and run with java Main. Try it yourself: Change the discount to subtract 20.",
    "tip": "Use abstract classes only when subclasses genuinely share a useful base.",
    "hack": "@Override lets the compiler check that you implemented the intended method.",
    "mistake": "You cannot instantiate an abstract class directly with new.",
    "expected": "90",
    "expectedOutput": "90",
    "realUse": "Template-like workflows and policy abstractions.",
    "code": "public class Main {\n abstract static class Discount {abstract int apply(int price);}\n static class TenOff extends Discount {\n  @Override int apply(int price){return price-10;}\n }\n public static void main(String[] args){\n  Discount discount=new TenOff();\n  System.out.println(discount.apply(100));\n }\n}",
    "practice": {
      "prompt": "Change the discount to subtract 20.",
      "check": "The output becomes 80."
    },
    "quiz": [
      {
        "question": "Can you write new Discount() here?",
        "options": [
          "No",
          "Yes",
          "Only with JavaFX"
        ],
        "correctIndex": 0,
        "explanation": "Abstract classes are not directly instantiable."
      },
      {
        "question": "What must TenOff implement?",
        "options": [
          "apply(int)",
          "CSS styles",
          "A main method in every class"
        ],
        "correctIndex": 0,
        "explanation": "Concrete subclasses must implement inherited abstract methods."
      }
    ]
  },
  {
    "id": "java-generic-method",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Collections",
    "order": 60,
    "title": "Generic methods: reuse typed logic",
    "summary": "The same first-item helper can work for product names or IDs without using raw Object casts.",
    "definition": "A generic method declares type parameters so one implementation can work with multiple related types while preserving compile-time checks.",
    "learn": [
      "Recognize method type parameters",
      "Preserve return types",
      "Handle an empty collection"
    ],
    "objective": "Use generic methods: reuse typed logic with Java 21 and verify output.",
    "explanation": "The same first-item helper can work for product names or IDs without using raw Object casts.\n\n<T> declares a type parameter for the method, and List<T> keeps argument and result types aligned. Handle empty lists explicitly.\n\nSave as Main.java; compile with javac Main.java and run with java Main. Try it yourself: Call first(List.of()) and inspect the exception.",
    "tip": "Avoid raw List types; they remove useful compiler checks.",
    "hack": "Prefer a descriptive method rather than abstracting one line prematurely.",
    "mistake": "Generic type parameters do not automatically validate business content.",
    "expected": "Fish\n3",
    "expectedOutput": "Fish\n3",
    "realUse": "Typed collection utilities and service helpers.",
    "code": "import java.util.List;\npublic class Main {\n static <T> T first(List<T> items){\n  if(items.isEmpty())throw new IllegalArgumentException(\"empty list\");\n  return items.get(0);\n }\n public static void main(String[] args){\n  System.out.println(first(List.of(\"Fish\",\"Beef\")));\n  System.out.println(first(List.of(3,4)));\n }\n}",
    "practice": {
      "prompt": "Call first(List.of()) and inspect the exception.",
      "check": "The explicit empty-list guard throws IllegalArgumentException."
    },
    "quiz": [
      {
        "question": "What does <T> represent?",
        "options": [
          "A type parameter",
          "An HTML tag",
          "A timezone"
        ],
        "correctIndex": 0,
        "explanation": "It allows the method to work with a caller-selected element type."
      },
      {
        "question": "What happens with an empty list?",
        "options": [
          "A deliberate exception",
          "Always null",
          "Automatically a zero"
        ],
        "correctIndex": 0,
        "explanation": "The method checks emptiness before indexing."
      }
    ]
  },
  {
    "id": "java-immutable-collections",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Collections",
    "order": 70,
    "title": "List.of and immutable collections",
    "summary": "A report snapshot should not be accidentally changed by code rendering a different view.",
    "definition": "List.of creates an unmodifiable list; List.copyOf creates an unmodifiable copy from a collection.",
    "learn": [
      "Create an unmodifiable list",
      "Read values without mutating them",
      "Distinguish shallow immutability"
    ],
    "objective": "Use list.of and immutable collections with Java 21 and verify output.",
    "explanation": "A report snapshot should not be accidentally changed by code rendering a different view.\n\nAn unmodifiable collection refuses add/remove operations. This doesn't deeply freeze mutable element objects; immutable record objects pair well with immutable collections.\n\nSave as Main.java; compile with javac Main.java and run with java Main. Try it yourself: Try labels.add(\"Beef\") and explain why it fails.",
    "tip": "Choose immutable snapshots when consumers should not modify the source.",
    "hack": "Use List.copyOf(existing) to create an unmodifiable list snapshot.",
    "mistake": "List.of supports reading but throws UnsupportedOperationException for add().",
    "expected": "2\nLiempo",
    "expectedOutput": "2\nLiempo",
    "realUse": "Read models, shared configurations and report snapshots.",
    "code": "import java.util.List;\npublic class Main {\n public static void main(String[] args){\n  List<String> labels=List.of(\"Liempo\",\"Chicken\");\n  System.out.println(labels.size());\n  System.out.println(labels.get(0));\n }\n}",
    "practice": {
      "prompt": "Try labels.add(\"Beef\") and explain why it fails.",
      "check": "Java throws UnsupportedOperationException instead of changing the list."
    },
    "quiz": [
      {
        "question": "Does List.of support add()?",
        "options": [
          "No",
          "Yes",
          "Only for String"
        ],
        "correctIndex": 0,
        "explanation": "List.of returns an unmodifiable list."
      },
      {
        "question": "Does it deeply freeze mutable elements?",
        "options": [
          "No",
          "Yes",
          "Only with records"
        ],
        "correctIndex": 0,
        "explanation": "Collection immutability is not the same as deep object immutability."
      }
    ]
  },
  {
    "id": "java-pattern-sku",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Strings & Arrays",
    "order": 70,
    "title": "Pattern and Matcher for structured codes",
    "summary": "A SKU format might require two capital letters followed by three digits.",
    "definition": "java.util.regex.Pattern compiles a regular expression; Matcher applies it to text.",
    "learn": [
      "Compile a simple regex pattern",
      "Use Matcher.matches",
      "Distinguish format checks from database checks"
    ],
    "objective": "Use pattern and matcher for structured codes with Java 21 and verify output.",
    "explanation": "A SKU format might require two capital letters followed by three digits.\n\nA pattern can validate syntax but cannot verify stock records actually exist. For whole-text checks, Matcher.matches applies the entire pattern.\n\nSave as Main.java; compile with javac Main.java and run with java Main. Try it yourself: Try AB999 and ab123.",
    "tip": "Write a test case for valid and invalid codes.",
    "hack": "Store and reuse compiled Pattern when the same rule is checked repeatedly.",
    "mistake": "A format match doesn't prove a product identifier is authentic.",
    "expected": "true\nfalse",
    "expectedOutput": "true\nfalse",
    "realUse": "SKU and reference-code validation.",
    "code": "import java.util.regex.Pattern;\npublic class Main {\n public static void main(String[] args){\n  Pattern pattern=Pattern.compile(\"[A-Z]{2}[0-9]{3}\");\n  System.out.println(pattern.matcher(\"AB123\").matches());\n  System.out.println(pattern.matcher(\"AB12\").matches());\n }\n}",
    "practice": {
      "prompt": "Try AB999 and ab123.",
      "check": "AB999 matches; ab123 does not."
    },
    "quiz": [
      {
        "question": "What does matches() check?",
        "options": [
          "Whole input against the pattern",
          "Only the first character",
          "Database existence"
        ],
        "correctIndex": 0,
        "explanation": "Matcher.matches attempts to match the entire text."
      },
      {
        "question": "Does this prove an item is in stock?",
        "options": [
          "No",
          "Yes",
          "Only for uppercase letters"
        ],
        "correctIndex": 0,
        "explanation": "A regex only checks formatting."
      }
    ]
  },
  {
    "id": "java-grouping-report",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Modern Java",
    "order": 80,
    "title": "Collectors.groupingBy: aggregate product categories",
    "summary": "A business report can count records by category instead of writing repeated manual counters.",
    "definition": "Collectors.groupingBy groups stream elements under classifier keys and supports downstream aggregation.",
    "learn": [
      "Group values by a classifier",
      "Count entries with a downstream collector",
      "Use TreeMap for predictable ordering"
    ],
    "objective": "Use collectors.groupingby: aggregate product categories with Java 21 and verify output.",
    "explanation": "A business report can count records by category instead of writing repeated manual counters.\n\nA TreeMap supplier makes output order predictable. This local demo groups labels only; production reports should validate incoming records and define date and accounting semantics.\n\nSave as Main.java; compile with javac Main.java and run with java Main. Try it yourself: Add one fish entry and predict new totals.",
    "tip": "Use a clear reporting data model before choosing clever Stream operations.",
    "hack": "groupingBy(...,TreeMap::new,counting()) gives ordered keys and grouped counts.",
    "mistake": "HashMap key iteration order is not guaranteed; don't rely on it for formatted output.",
    "expected": "{beef=2, fish=1}",
    "expectedOutput": "{beef=2, fish=1}",
    "realUse": "Inventory and transaction summary reports.",
    "code": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n public static void main(String[] args){\n  Map<String,Long> totals=List.of(\"beef\",\"fish\",\"beef\").stream()\n   .collect(Collectors.groupingBy(x->x,TreeMap::new,Collectors.counting()));\n  System.out.println(totals);\n }\n}",
    "practice": {
      "prompt": "Add one fish entry and predict new totals.",
      "check": "The result becomes {beef=2, fish=2}."
    },
    "quiz": [
      {
        "question": "What does counting() produce?",
        "options": [
          "Long counts per group",
          "A price format",
          "A source file"
        ],
        "correctIndex": 0,
        "explanation": "It aggregates the number of entries in each group."
      },
      {
        "question": "Why use TreeMap here?",
        "options": [
          "Deterministic sorted keys",
          "Higher security automatically",
          "To store CSS"
        ],
        "correctIndex": 0,
        "explanation": "TreeMap orders keys."
      }
    ]
  },
  {
    "id": "java-timezone-conversion",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Modern Java",
    "order": 90,
    "title": "Instant vs ZonedDateTime: real timezone conversion",
    "summary": "A transaction logged at midnight UTC appears at 8 AM in Manila.",
    "definition": "Instant denotes a unique point on the UTC timeline; ZonedDateTime represents that instant in a timezone with calendar rules.",
    "learn": [
      "Differentiate an instant and a local calendar presentation",
      "Use ZoneId for Manila",
      "Format a timezone-aware timestamp"
    ],
    "objective": "Use instant vs zoneddatetime: real timezone conversion with Java 21 and verify output.",
    "explanation": "A transaction logged at midnight UTC appears at 8 AM in Manila.\n\nStore an Instant for an event and format it with an explicit ZoneId for local display. Do not assume every location is always UTC+8; some zones observe daylight saving.\n\nSave as Main.java; compile with javac Main.java and run with java Main. Try it yourself: Change the input timestamp to 2026-10-12T01:00:00Z.",
    "tip": "Store real timestamps with explicit timezone semantics, not ambiguous local strings.",
    "hack": "Use IANA timezone IDs such as Asia/Manila instead of hand-applied offsets.",
    "mistake": "LocalDateTime alone does not identify a unique instant in every timezone.",
    "expected": "2026-10-12 08:00",
    "expectedOutput": "2026-10-12 08:00",
    "realUse": "POS audit trails, reports and event scheduling.",
    "code": "import java.time.*;\nimport java.time.format.*;\npublic class Main {\n public static void main(String[] args){\n  Instant event=Instant.parse(\"2026-10-12T00:00:00Z\");\n  ZonedDateTime local=event.atZone(ZoneId.of(\"Asia/Manila\"));\n  System.out.println(local.format(DateTimeFormatter.ofPattern(\"yyyy-MM-dd HH:mm\")));\n }\n}",
    "practice": {
      "prompt": "Change the input timestamp to 2026-10-12T01:00:00Z.",
      "check": "It displays 2026-10-12 09:00 in Manila."
    },
    "quiz": [
      {
        "question": "Which type represents a universal instant?",
        "options": [
          "Instant",
          "LocalDate",
          "StringBuilder"
        ],
        "correctIndex": 0,
        "explanation": "Instant is a timeline point."
      },
      {
        "question": "Why use ZoneId?",
        "options": [
          "Timezone calendar rules",
          "Compiling Maven",
          "Styling a page"
        ],
        "correctIndex": 0,
        "explanation": "ZoneId tells Java how to display an instant in a region."
      }
    ]
  },
  {
    "id": "java-project-inventory-cli",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Applied Java",
    "order": 30,
    "title": "Mini project: guarded in-memory inventory ledger",
    "summary": "A useful Java project should do more than print Hello World: it should handle a real business rule and reject an invalid operation.",
    "definition": "A small inventory model can enforce stock invariants by validating receive/use operations before changing its state.",
    "learn": [
      "Encapsulate inventory state",
      "Reject invalid operations before mutation",
      "Use Math.addExact to guard integer overflow",
      "Test a valid sale and an invalid oversell"
    ],
    "objective": "Use mini project: guarded in-memory inventory ledger with Java 21 and verify output.",
    "explanation": "A useful Java project should do more than print Hello World: it should handle a real business rule and reject an invalid operation.\n\nThis self-contained Java 21 exercise tracks one product with an encapsulated quantity. Stock cannot become negative through use(), and invalid receive quantities are rejected. This is only an in-memory learning model, not a production POS or durable accounting ledger.\n\nSave as Main.java; compile with javac Main.java and run with java Main. Try it yourself: Change receive(5) to receive(8), then call use(3). Predict the stock and keep the oversized request rejected.",
    "tip": "Write explicit transaction rules and ensure invalid operations never change inventory state.",
    "hack": "Keep state private and expose narrow operations like receive/use instead of allowing direct quantity writes.",
    "mistake": "This lesson does not handle concurrent customers or persistent database transactions; production requires atomic server-side safeguards.",
    "expected": "Stock: 3\nRejected: insufficient stock",
    "expectedOutput": "Stock: 3\nRejected: insufficient stock",
    "realUse": "Learning domain modeling for POS and inventory systems.",
    "code": "public class Main {\n static class Inventory {\n  private int quantity;\n  void receive(int amount){if(amount<=0)throw new IllegalArgumentException(\"receive\");quantity=Math.addExact(quantity,amount);}\n  void use(int amount){if(amount<=0||amount>quantity)throw new IllegalArgumentException(\"insufficient stock\");quantity-=amount;}\n  int stock(){return quantity;}\n }\n public static void main(String[] args){\n  Inventory inventory=new Inventory();\n  inventory.receive(5);\n  inventory.use(2);\n  System.out.println(\"Stock: \"+inventory.stock());\n  try{inventory.use(10);}catch(IllegalArgumentException error){System.out.println(\"Rejected: \"+error.getMessage());}\n }\n}",
    "practice": {
      "prompt": "Change receive(5) to receive(8), then call use(3). Predict the stock and keep the oversized request rejected.",
      "check": "The first stock output becomes 5 and the oversized request is still rejected."
    },
    "quiz": [
      {
        "question": "What stops an oversell?",
        "options": [
          "A use() validation before state changes",
          "The console output",
          "A CSS class"
        ],
        "correctIndex": 0,
        "explanation": "The method refuses requests larger than current stock."
      },
      {
        "question": "Does this example implement a production POS transaction?",
        "options": [
          "No",
          "Yes",
          "Only if it runs inside an iframe"
        ],
        "correctIndex": 0,
        "explanation": "It lacks concurrency, persistence, authorization and audit controls."
      }
    ]
  }
];const ids=new Set(data.lessons.map(x=>x.id));for(const x of additions){if(!ids.has(x.id)){data.lessons.push(x);ids.add(x.id);}}const cat=data.categories.find(x=>x.id==='java');if(cat){cat.learningPath=["Foundation","Control Flow","Strings & Arrays","Collections","OOP Foundations","OOP Advanced","Exceptions & IO","Modern Java","Problem Solving","Applied Java","Concurrency & JVM","Testing & Delivery"];cat.status='Curriculum expansion in progress';}})();