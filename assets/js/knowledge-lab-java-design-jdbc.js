(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons||!data?.categories)return;
const additions=[
  {
    "id": "java-pattern-dao",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Database & JDBC",
    "order": 10,
    "title": "DAO: Data Access Object with an interface",
    "summary": "A product service should ask for data through a narrow contract instead of constructing SQL inside every calculation.",
    "definition": "Data Access Object (DAO) is a design pattern that isolates data access operations from application business rules.",
    "learn": [
      "Define dao: data access object with an interface",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply dao: data access object with an interface without conflating architecture with implementation details.",
    "explanation": "A product service should ask for data through a narrow contract instead of constructing SQL inside every calculation.\n\nDAOs often use interfaces so an in-memory implementation can support practice and a JDBC implementation can handle production data. An interface is common but not mandatory for every DAO implementation. This example is deliberately in-memory: no database or driver is pretended.\n\nCompile with javac Main.java and run with java Main. Change the ID argument to 2 and explain the result.",
    "tip": "Keep SQL and persistence mechanics out of domain/business calculations.",
    "hack": "Inject a fake DAO during tests without needing a live database.",
    "mistake": "DAO is a pattern, not a requirement that every DAO must extend an interface.",
    "expected": "Liempo",
    "expectedOutput": "Liempo",
    "realUse": "A product service should ask for data through a narrow contract instead of constructing SQL inside every calculation.",
    "code": "public class Main {\n  interface ProductDao { String findName(int id); }\n  static class MemoryProductDao implements ProductDao {\n    public String findName(int id) { return id == 1 ? \"Liempo\" : \"Not found\"; }\n  }\n  static class ProductService {\n    private final ProductDao dao;\n    ProductService(ProductDao dao) { this.dao = dao; }\n    String display(int id) { return dao.findName(id); }\n  }\n  public static void main(String[] args) {\n    System.out.println(new ProductService(new MemoryProductDao()).display(1));\n  }\n}",
    "practice": {
      "prompt": "Change the ID argument to 2 and explain the result.",
      "check": "The in-memory DAO displays Not found."
    },
    "quiz": [
      {
        "question": "What responsibility belongs to a DAO?",
        "options": [
          "Data access",
          "CSS styling",
          "GUI animations only"
        ],
        "correctIndex": 0,
        "explanation": "A DAO isolates the data access concern."
      },
      {
        "question": "Is a Java interface strictly mandatory for every DAO?",
        "options": [
          "No",
          "Yes",
          "Only for SQL"
        ],
        "correctIndex": 0,
        "explanation": "An interface is commonly used, but the pattern is about separation of concerns."
      }
    ]
  },
  {
    "id": "java-pattern-dto-pojo",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Design Principles",
    "order": 10,
    "title": "DTO vs POJO: purpose and class shape",
    "summary": "A checkout API response may transfer only the product name and stock count, not the entire mutable database entity.",
    "definition": "A DTO (Data Transfer Object) carries information across boundaries; a POJO is an ordinary Java object not tied to a special framework superclass.",
    "learn": [
      "Define dto vs pojo: purpose and class shape",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply dto vs pojo: purpose and class shape without conflating architecture with implementation details.",
    "explanation": "A checkout API response may transfer only the product name and stock count, not the entire mutable database entity.\n\nDTO describes a role in architecture. POJO describes a simple Java object style: a POJO need not always have private fields and getters/setters. Java records can make DTOs concise. Don't automatically expose passwords or internal fields in DTOs.\n\nCompile with javac Main.java and run with java Main. Add a price component and print it.",
    "tip": "Choose explicit, minimal fields for each API or service boundary.",
    "hack": "Java records are a concise choice for immutable DTO-shaped values.",
    "mistake": "DTO and POJO aren't synonyms: one is a purpose, one is a general class concept.",
    "expected": "Chicken: 3",
    "expectedOutput": "Chicken: 3",
    "realUse": "A checkout API response may transfer only the product name and stock count, not the entire mutable database entity.",
    "code": "public class Main {\n  record ProductDto(String name, int stock) {}\n  public static void main(String[] args) {\n    ProductDto dto = new ProductDto(\"Chicken\", 3);\n    System.out.println(dto.name() + \": \" + dto.stock());\n  }\n}",
    "practice": {
      "prompt": "Add a price component and print it.",
      "check": "The new record includes your selected price while remaining a data carrier."
    },
    "quiz": [
      {
        "question": "What describes a DTO?",
        "options": [
          "A data-transfer responsibility",
          "Mandatory private fields only",
          "A SQL query"
        ],
        "correctIndex": 0,
        "explanation": "DTO refers to transferring structured data."
      },
      {
        "question": "Can a Java record act as a DTO?",
        "options": [
          "Yes",
          "No",
          "Only before Java 8"
        ],
        "correctIndex": 0,
        "explanation": "A record is often well suited to immutable data transfer."
      }
    ]
  },
  {
    "id": "java-principle-srp",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Design Principles",
    "order": 20,
    "title": "SRP: Single Responsibility Principle",
    "summary": "Receipt formatting and stock calculation change for different reasons, so one giant class would be harder to maintain.",
    "definition": "Single Responsibility Principle means a module or class should have one reason to change: one focused responsibility associated with an actor or business concern.",
    "learn": [
      "Define srp: single responsibility principle",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply srp: single responsibility principle without conflating architecture with implementation details.",
    "explanation": "Receipt formatting and stock calculation change for different reasons, so one giant class would be harder to maintain.\n\nSRP is not literally 'exactly one method per class' and does not mean artificially creating hundreds of one-line classes. Separate responsibilities when changes have different motivations.\n\nCompile with javac Main.java and run with java Main. Change the receipt prefix without editing PriceCalculator.",
    "tip": "Ask what business change would force the class to change.",
    "hack": "One class can have several methods if they all serve the same focused concern.",
    "mistake": "SRP is not a rule that each class may contain only one operation.",
    "expected": "Total: 250",
    "expectedOutput": "Total: 250",
    "realUse": "Receipt formatting and stock calculation change for different reasons, so one giant class would be harder to maintain.",
    "code": "public class Main {\n  static class PriceCalculator { int total(int price, int qty) { return price * qty; } }\n  static class ReceiptFormatter { String format(int amount) { return \"Total: \" + amount; } }\n  public static void main(String[] args) {\n    int total = new PriceCalculator().total(125, 2);\n    System.out.println(new ReceiptFormatter().format(total));\n  }\n}",
    "practice": {
      "prompt": "Change the receipt prefix without editing PriceCalculator.",
      "check": "Calculation stays 250 and only presentation changes."
    },
    "quiz": [
      {
        "question": "How many reasons to change should a focused class ideally have?",
        "options": [
          "One cohesive reason",
          "One per method",
          "As many as possible"
        ],
        "correctIndex": 0,
        "explanation": "SRP groups work around a coherent reason to change."
      },
      {
        "question": "Does SRP demand only one method?",
        "options": [
          "No",
          "Yes",
          "Only for abstract classes"
        ],
        "correctIndex": 0,
        "explanation": "One responsibility may require multiple related methods."
      }
    ]
  },
  {
    "id": "java-principle-dry",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Design Principles",
    "order": 30,
    "title": "DRY: Don't Repeat Yourself",
    "summary": "If every checkout handler copies the same multiplication and validation, price logic will drift.",
    "definition": "DRY means avoiding duplicated knowledge or business rules so one change doesn't require inconsistent edits throughout the codebase.",
    "learn": [
      "Define dry: don't repeat yourself",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply dry: don't repeat yourself without conflating architecture with implementation details.",
    "explanation": "If every checkout handler copies the same multiplication and validation, price logic will drift.\n\nPut a shared, meaningful rule in a single tested method. DRY is not about eliminating every repeated line regardless of context; unrelated logic should not be tied together just because it looks alike.\n\nCompile with javac Main.java and run with java Main. Add a third call for 50 pesos and 4 units.",
    "tip": "Deduplicate business decisions and knowledge, not merely coincidentally similar syntax.",
    "hack": "A well-named method often removes both repetition and inconsistency risk.",
    "mistake": "Premature abstraction can couple unrelated features and violate clarity.",
    "expected": "250\n270",
    "expectedOutput": "250\n270",
    "realUse": "If every checkout handler copies the same multiplication and validation, price logic will drift.",
    "code": "public class Main {\n  static int lineTotal(int price, int quantity) {\n    if (quantity < 0) throw new IllegalArgumentException(\"quantity\");\n    return Math.multiplyExact(price, quantity);\n  }\n  public static void main(String[] args) {\n    System.out.println(lineTotal(125, 2));\n    System.out.println(lineTotal(90, 3));\n  }\n}",
    "practice": {
      "prompt": "Add a third call for 50 pesos and 4 units.",
      "check": "The third total is 200 without copying the formula."
    },
    "quiz": [
      {
        "question": "What does DRY mainly discourage?",
        "options": [
          "Duplicate knowledge or business rules",
          "Every repeated punctuation mark",
          "Using multiple classes"
        ],
        "correctIndex": 0,
        "explanation": "DRY prevents divergence of the same rule."
      },
      {
        "question": "Should unrelated code always be merged if it looks similar?",
        "options": [
          "No",
          "Yes",
          "Always"
        ],
        "correctIndex": 0,
        "explanation": "Premature coupling can make maintenance worse."
      }
    ]
  },
  {
    "id": "java-principle-ocp",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Design Principles",
    "order": 40,
    "title": "OCP: Open/Closed Principle",
    "summary": "Adding a new discount rule should not require editing every checkout's branch structure.",
    "definition": "Open/Closed Principle encourages components that can gain new behavior through extensions without repeatedly modifying stable existing clients.",
    "learn": [
      "Define ocp: open/closed principle",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply ocp: open/closed principle without conflating architecture with implementation details.",
    "explanation": "Adding a new discount rule should not require editing every checkout's branch structure.\n\nA strategy interface lets new policies be implemented separately. 'Closed for modification' is guidance toward stable contracts, not a literal ban on changing any source code.\n\nCompile with javac Main.java and run with java Main. Pass new NoDiscount() to checkout.",
    "tip": "Introduce extension points where variation is real and likely.",
    "hack": "Small interfaces make policy substitutions explicit.",
    "mistake": "OCP doesn't mean modifying a bug is forbidden.",
    "expected": "90",
    "expectedOutput": "90",
    "realUse": "Adding a new discount rule should not require editing every checkout's branch structure.",
    "code": "public class Main {\n  interface Discount { int apply(int subtotal); }\n  static class FixedDiscount implements Discount {\n    public int apply(int subtotal) { return subtotal - 10; }\n  }\n  static class NoDiscount implements Discount {\n    public int apply(int subtotal) { return subtotal; }\n  }\n  static int checkout(int subtotal, Discount rule) { return rule.apply(subtotal); }\n  public static void main(String[] args) {\n    System.out.println(checkout(100, new FixedDiscount()));\n  }\n}",
    "practice": {
      "prompt": "Pass new NoDiscount() to checkout.",
      "check": "The output becomes 100."
    },
    "quiz": [
      {
        "question": "How can a new discount behavior be added?",
        "options": [
          "A new strategy implementation",
          "Copying all callers",
          "Disabling compilation"
        ],
        "correctIndex": 0,
        "explanation": "A new implementation extends behavior through a stable contract."
      },
      {
        "question": "Does OCP ban bug fixes?",
        "options": [
          "No",
          "Yes",
          "Only with inheritance"
        ],
        "correctIndex": 0,
        "explanation": "It guides extensibility, not immutability of all code."
      }
    ]
  },
  {
    "id": "java-principle-lsp",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Design Principles",
    "order": 50,
    "title": "LSP: Substitutability without surprising clients",
    "summary": "A subclass that unexpectedly refuses a valid operation can break callers despite compiling correctly.",
    "definition": "Liskov Substitution Principle means a subtype should satisfy the behavioral expectations of code using its base type.",
    "learn": [
      "Define lsp: substitutability without surprising clients",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply lsp: substitutability without surprising clients without conflating architecture with implementation details.",
    "explanation": "A subclass that unexpectedly refuses a valid operation can break callers despite compiling correctly.\n\nBehavioral contracts matter, including valid inputs, expected outcomes and exceptions. A Penguin shouldn't be forced into a fly() contract simply because it is a Bird; create interfaces around real capabilities.\n\nCompile with javac Main.java and run with java Main. Add a Fish implementing Movement that returns Swim.",
    "tip": "Write contract tests that every implementation must satisfy.",
    "hack": "Prefer capability interfaces rather than inheritance assumptions that don't apply to all subtypes.",
    "mistake": "LSP isn't just 'child class replaces parent' at compile time; behavior must remain valid.",
    "expected": "Fly\nSwim",
    "expectedOutput": "Fly\nSwim",
    "realUse": "A subclass that unexpectedly refuses a valid operation can break callers despite compiling correctly.",
    "code": "public class Main {\n  interface Movement { String move(); }\n  static class Eagle implements Movement { public String move() { return \"Fly\"; } }\n  static class Penguin implements Movement { public String move() { return \"Swim\"; } }\n  static String describe(Movement subject) { return subject.move(); }\n  public static void main(String[] args) {\n    System.out.println(describe(new Eagle()));\n    System.out.println(describe(new Penguin()));\n  }\n}",
    "practice": {
      "prompt": "Add a Fish implementing Movement that returns Swim.",
      "check": "describe accepts Fish without changing its signature."
    },
    "quiz": [
      {
        "question": "What is LSP about?",
        "options": [
          "Behavioral substitutability",
          "Short class names",
          "Always sharing every method"
        ],
        "correctIndex": 0,
        "explanation": "A subtype must meet its contract's behavioral expectations."
      },
      {
        "question": "Should a Penguin be forced to implement fly()?",
        "options": [
          "No",
          "Yes",
          "Only when abstract"
        ],
        "correctIndex": 0,
        "explanation": "The contract should reflect genuine capabilities."
      }
    ]
  },
  {
    "id": "java-principle-isp",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Design Principles",
    "order": 60,
    "title": "ISP: Interface Segregation Principle",
    "summary": "A simple receipt printer should not implement scan() when it cannot scan documents.",
    "definition": "Interface Segregation Principle recommends specific client-focused interfaces over forcing clients to depend on unnecessary methods.",
    "learn": [
      "Define isp: interface segregation principle",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply isp: interface segregation principle without conflating architecture with implementation details.",
    "explanation": "A simple receipt printer should not implement scan() when it cannot scan documents.\n\nSplit capabilities based on actual client needs. One giant interface with lots of unsupported operations often leads to fake exceptions and fragile implementations.\n\nCompile with javac Main.java and run with java Main. Add a Scanner class implementing Scannable.",
    "tip": "Ask which methods a specific client genuinely needs.",
    "hack": "An implementation can still implement multiple small interfaces when useful.",
    "mistake": "Avoid unsupported operation stubs caused by excessively broad interfaces.",
    "expected": "Printed",
    "expectedOutput": "Printed",
    "realUse": "A simple receipt printer should not implement scan() when it cannot scan documents.",
    "code": "public class Main {\n  interface Printable { String print(); }\n  interface Scannable { String scan(); }\n  static class ReceiptPrinter implements Printable {\n    public String print() { return \"Printed\"; }\n  }\n  public static void main(String[] args) {\n    Printable printer = new ReceiptPrinter();\n    System.out.println(printer.print());\n  }\n}",
    "practice": {
      "prompt": "Add a Scanner class implementing Scannable.",
      "check": "You can use Scanner through Scannable without changing ReceiptPrinter."
    },
    "quiz": [
      {
        "question": "What does ISP promote?",
        "options": [
          "Focused small client interfaces",
          "One giant interface",
          "No interfaces"
        ],
        "correctIndex": 0,
        "explanation": "Client-facing interfaces should avoid unrelated methods."
      },
      {
        "question": "Can a device implement both interfaces?",
        "options": [
          "Yes",
          "No",
          "Only through class inheritance"
        ],
        "correctIndex": 0,
        "explanation": "Implementations can combine distinct capabilities."
      }
    ]
  },
  {
    "id": "java-principle-dip",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Design Principles",
    "order": 70,
    "title": "DIP: Depend on abstractions",
    "summary": "An order service can send messages without hardcoding a single EmailSender inside its constructor.",
    "definition": "Dependency Inversion Principle says high-level policy code should depend on abstractions rather than directly coupling to low-level implementation details.",
    "learn": [
      "Define dip: depend on abstractions",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply dip: depend on abstractions without conflating architecture with implementation details.",
    "explanation": "An order service can send messages without hardcoding a single EmailSender inside its constructor.\n\nDIP is about dependency direction, while Dependency Injection is a technique for supplying dependencies. They are related, not interchangeable.\n\nCompile with javac Main.java and run with java Main. Add a ConsoleSender that returns Console: Order ready.",
    "tip": "Keep high-level business code free of unnecessary transport/API details.",
    "hack": "Constructor injection is a simple way to apply an abstract dependency.",
    "mistake": "Using an interface automatically doesn't guarantee good design; ensure the abstraction is meaningful.",
    "expected": "Email: Order ready",
    "expectedOutput": "Email: Order ready",
    "realUse": "An order service can send messages without hardcoding a single EmailSender inside its constructor.",
    "code": "public class Main {\n  interface Sender { String send(String msg); }\n  static class EmailSender implements Sender {\n    public String send(String msg) { return \"Email: \" + msg; }\n  }\n  static class OrderService {\n    private final Sender sender;\n    OrderService(Sender sender) { this.sender = sender; }\n    String confirm() { return sender.send(\"Order ready\"); }\n  }\n  public static void main(String[] args) {\n    System.out.println(new OrderService(new EmailSender()).confirm());\n  }\n}",
    "practice": {
      "prompt": "Add a ConsoleSender that returns Console: Order ready.",
      "check": "OrderService can accept it without changing its code."
    },
    "quiz": [
      {
        "question": "What should a high-level service depend on?",
        "options": [
          "A meaningful abstraction",
          "Only one concrete network class",
          "CSS rules"
        ],
        "correctIndex": 0,
        "explanation": "DIP directs dependencies toward contracts."
      },
      {
        "question": "Is DI identical to DIP?",
        "options": [
          "No",
          "Yes",
          "Always"
        ],
        "correctIndex": 0,
        "explanation": "DI is a technique, DIP is a design principle."
      }
    ]
  },
  {
    "id": "java-design-cohesion-coupling",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Design Principles",
    "order": 80,
    "title": "Coupling vs cohesion: focused modules",
    "summary": "A focused PriceCalculator should not need to know the email system, database settings, and screen colors.",
    "definition": "Coupling measures interdependence between modules; cohesion measures how closely related a module's responsibilities are.",
    "learn": [
      "Define coupling vs cohesion: focused modules",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply coupling vs cohesion: focused modules without conflating architecture with implementation details.",
    "explanation": "A focused PriceCalculator should not need to know the email system, database settings, and screen colors.\n\nLower unnecessary coupling and higher useful cohesion generally make software easier to test and change. Zero coupling is neither realistic nor required; stable contracts between modules are normal.\n\nCompile with javac Main.java and run with java Main. Change only the formatting prefix to Subtotal.",
    "tip": "Name responsibilities and inspect which classes must change for a specific feature.",
    "hack": "Unit tests become easier when a component's inputs and outputs are narrow.",
    "mistake": "Low coupling doesn't require a separate interface for every single line of code.",
    "expected": "Total: 300",
    "expectedOutput": "Total: 300",
    "realUse": "A focused PriceCalculator should not need to know the email system, database settings, and screen colors.",
    "code": "public class Main {\n  static class Totals {\n    int price(int unit, int qty) { return unit * qty; }\n  }\n  static class Presenter {\n    String label(int total) { return \"Total: \" + total; }\n  }\n  public static void main(String[] args) {\n    System.out.println(new Presenter().label(new Totals().price(100, 3)));\n  }\n}",
    "practice": {
      "prompt": "Change only the formatting prefix to Subtotal.",
      "check": "The numeric calculation stays 300."
    },
    "quiz": [
      {
        "question": "What is cohesion?",
        "options": [
          "Relatedness of module responsibilities",
          "Number of open sockets",
          "Java memory type"
        ],
        "correctIndex": 0,
        "explanation": "Cohesion concerns focused internal responsibilities."
      },
      {
        "question": "What is coupling?",
        "options": [
          "Dependency between modules",
          "A method return type",
          "JVM bytecode"
        ],
        "correctIndex": 0,
        "explanation": "Coupling measures how modules rely on one another."
      }
    ]
  },
  {
    "id": "java-design-association",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Design Principles",
    "order": 90,
    "title": "Association, aggregation, composition, is-a and has-a",
    "summary": "An Order refers to a Customer; an OrderLine belongs strongly to that order. These relationships need not all use inheritance.",
    "definition": "Association describes a relationship between objects; aggregation and composition are conceptual has-a relationships differing in ownership/lifecycle strength.",
    "learn": [
      "Define association, aggregation, composition, is-a and has-a",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply association, aggregation, composition, is-a and has-a without conflating architecture with implementation details.",
    "explanation": "An Order refers to a Customer; an OrderLine belongs strongly to that order. These relationships need not all use inheritance.\n\n'is-a' is class/interface subtype behavior (extends/implements). 'has-a' uses object fields. Association is a broad link; aggregation implies looser independent parts, composition implies strong conceptual ownership. Java syntax alone does not enforce lifecycle ownership—the design/model does.\n\nCompile with javac Main.java and run with java Main. Change the OrderLine quantity to 3.",
    "tip": "Explain ownership and lifecycle semantics in words, not only by drawing arrows.",
    "hack": "Composition is often safer than inheritance for reusing behavior.",
    "mistake": "Java fields don't automatically guarantee aggregation versus composition; their meaning comes from lifecycle rules.",
    "expected": "Juan: 2",
    "expectedOutput": "Juan: 2",
    "realUse": "An Order refers to a Customer; an OrderLine belongs strongly to that order. These relationships need not all use inheritance.",
    "code": "public class Main {\n  record Customer(String name) {}\n  record OrderLine(String name, int qty) {}\n  static class Order {\n    final Customer customer;\n    final OrderLine line;\n    Order(Customer customer) {\n      this.customer = customer;\n      this.line = new OrderLine(\"Liempo\", 2);\n    }\n  }\n  public static void main(String[] args) {\n    Order order = new Order(new Customer(\"Juan\"));\n    System.out.println(order.customer.name() + \": \" + order.line.qty());\n  }\n}",
    "practice": {
      "prompt": "Change the OrderLine quantity to 3.",
      "check": "The output becomes Juan: 3."
    },
    "quiz": [
      {
        "question": "Which relation generally models is-a?",
        "options": [
          "Inheritance/subtyping",
          "Object field only",
          "Database connection"
        ],
        "correctIndex": 0,
        "explanation": "is-a describes subtype relationships."
      },
      {
        "question": "Can Java syntax alone enforce composition ownership?",
        "options": [
          "No",
          "Yes",
          "Always"
        ],
        "correctIndex": 0,
        "explanation": "Strong lifecycle ownership is a design concern."
      }
    ]
  },
  {
    "id": "java-design-dependency-injection",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Design Principles",
    "order": 100,
    "title": "Dependency Injection: constructor, setter, field and method",
    "summary": "A test should substitute a fake price provider without connecting to a live production database.",
    "definition": "Dependency injection supplies collaborators from outside an object instead of forcing the object to construct every dependency itself.",
    "learn": [
      "Define dependency injection: constructor, setter, field and method",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply dependency injection: constructor, setter, field and method without conflating architecture with implementation details.",
    "explanation": "A test should substitute a fake price provider without connecting to a live production database.\n\nConstructor injection exposes required collaborators clearly; setter injection is useful for truly optional/reconfigurable collaborators; method-parameter injection supplies per-call dependencies. Direct field injection exists in frameworks but can obscure requirements and complicate testing. Choose deliberately.\n\nCompile with javac Main.java and run with java Main. Supply a test provider with a price of 90.",
    "tip": "Prefer constructor injection for mandatory dependencies to avoid half-configured objects.",
    "hack": "For a per-operation dependency, a method parameter may be simpler than storing another field.",
    "mistake": "Field injection isn't inherently forbidden, but may hide required dependencies and make unit testing harder.",
    "expected": "250",
    "expectedOutput": "250",
    "realUse": "A test should substitute a fake price provider without connecting to a live production database.",
    "code": "public class Main {\n  interface PriceProvider { int get(); }\n  static class FixedPrice implements PriceProvider { public int get() { return 125; } }\n  static class Cart {\n    private final PriceProvider provider;\n    Cart(PriceProvider provider) { this.provider = provider; }\n    int total(int qty) { return provider.get() * qty; }\n  }\n  public static void main(String[] args) {\n    System.out.println(new Cart(new FixedPrice()).total(2));\n  }\n}",
    "practice": {
      "prompt": "Supply a test provider with a price of 90.",
      "check": "The cart total becomes 180."
    },
    "quiz": [
      {
        "question": "Which technique supplies a required collaborator when constructing an object?",
        "options": [
          "Constructor injection",
          "CSS injection",
          "Method overriding"
        ],
        "correctIndex": 0,
        "explanation": "The constructor receives the collaborator."
      },
      {
        "question": "Is DI the same as subclassing?",
        "options": [
          "No",
          "Yes",
          "Always"
        ],
        "correctIndex": 0,
        "explanation": "DI supplies dependencies and need not use inheritance."
      }
    ]
  },
  {
    "id": "java-design-instanceof",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "OOP Advanced",
    "order": 45,
    "title": "instanceof and pattern matching safely",
    "summary": "An object from a broad API may require inspection before using subtype-specific methods.",
    "definition": "instanceof tests whether an object is compatible with a given type; Java 21 supports type patterns that bind a matching value.",
    "learn": [
      "Define instanceof and pattern matching safely",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply instanceof and pattern matching safely without conflating architecture with implementation details.",
    "explanation": "An object from a broad API may require inspection before using subtype-specific methods.\n\nPattern matching instanceof combines a type test and a typed variable. It is useful at suitable boundaries, but excessive instanceof chains can indicate a missing polymorphic design.\n\nCompile with javac Main.java and run with java Main. Change product to Integer.valueOf(3) and check the branch.",
    "tip": "Prefer common interface methods when the caller shouldn't need to know concrete types.",
    "hack": "Pattern matching removes manual casts after a safe match.",
    "mistake": "instanceof false doesn't prove a value is null; it may simply have another type.",
    "expected": "CHICKEN",
    "expectedOutput": "CHICKEN",
    "realUse": "An object from a broad API may require inspection before using subtype-specific methods.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    Object product = \"Chicken\";\n    if (product instanceof String name) {\n      System.out.println(name.toUpperCase());\n    }\n  }\n}",
    "practice": {
      "prompt": "Change product to Integer.valueOf(3) and check the branch.",
      "check": "The String branch is skipped."
    },
    "quiz": [
      {
        "question": "What does instanceof test?",
        "options": [
          "Runtime type compatibility",
          "Database permissions",
          "HTML tag name"
        ],
        "correctIndex": 0,
        "explanation": "It checks whether the object is an instance of the target type."
      },
      {
        "question": "What does String name do after instanceof?",
        "options": [
          "Binds a typed variable after a successful match",
          "Creates a database",
          "Declares an enum"
        ],
        "correctIndex": 0,
        "explanation": "The pattern variable becomes available when the test succeeds."
      }
    ]
  },
  {
    "id": "java-jdbc-preparedstatement",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Database & JDBC",
    "order": 20,
    "title": "JDBC PreparedStatement: parameterized SQL",
    "summary": "A product lookup should use typed parameters instead of concatenating visitor input into executable SQL text.",
    "definition": "PreparedStatement is a JDBC interface representing a parameterized SQL statement; it extends Statement, which extends AutoCloseable.",
    "learn": [
      "Define jdbc preparedstatement: parameterized sql",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply jdbc preparedstatement: parameterized sql without conflating architecture with implementation details.",
    "explanation": "A product lookup should use typed parameters instead of concatenating visitor input into executable SQL text.\n\nThe following code contains a genuine JDBC prepared lookup method requiring a caller-supplied database Connection. We deliberately do not open a database or invent query results in this lesson; the main method checks that PreparedStatement implements AutoCloseable. The real lookup can be used only with a configured JDBC driver and accessible database. SQL placeholders cover data values, not arbitrary table/column identifiers.\n\nCompile with javac Main.java and run with java Main. Add a method with WHERE name = ? and use setString(1, name), without printing or using real credentials.",
    "tip": "Use typed setters like setInt and setString for parameterized values; validate identifiers separately.",
    "hack": "try (PreparedStatement stmt=...; ResultSet results=...) makes statement/result-set lifetimes explicit.",
    "mistake": "PreparedStatement does not mean every SQL statement is immune to every flaw. Dynamically interpolated identifiers and unsafe SQL construction are still risks.",
    "expected": "PreparedStatement AutoCloseable: true",
    "expectedOutput": "PreparedStatement AutoCloseable: true",
    "realUse": "A product lookup should use typed parameters instead of concatenating visitor input into executable SQL text.",
    "code": "import java.sql.*;\npublic class Main {\n  static int findProductId(Connection conn, int id) throws SQLException {\n    String sql = \"SELECT id FROM products WHERE id = ?\";\n    try (PreparedStatement statement = conn.prepareStatement(sql)) {\n      statement.setInt(1, id);\n      try (ResultSet rows = statement.executeQuery()) {\n        return rows.next() ? rows.getInt(\"id\") : -1;\n      }\n    }\n  }\n  public static void main(String[] args) {\n    System.out.println(\"PreparedStatement AutoCloseable: \" +\n      AutoCloseable.class.isAssignableFrom(PreparedStatement.class));\n  }\n}",
    "practice": {
      "prompt": "Add a method with WHERE name = ? and use setString(1, name), without printing or using real credentials.",
      "check": "It compiles using java.sql types and does not concatenate the customer-supplied name into SQL."
    },
    "quiz": [
      {
        "question": "What does ? represent in a PreparedStatement?",
        "options": [
          "A bound data parameter",
          "A safe arbitrary table name",
          "A Java class"
        ],
        "correctIndex": 0,
        "explanation": "Parameters are for data values."
      },
      {
        "question": "Is PreparedStatement AutoCloseable?",
        "options": [
          "Yes, through Statement",
          "No",
          "Only when using Spring"
        ],
        "correctIndex": 0,
        "explanation": "Statement extends AutoCloseable."
      }
    ]
  },
  {
    "id": "java-jdbc-resource-lifecycle",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Database & JDBC",
    "order": 30,
    "title": "Close ResultSet, PreparedStatement, and Connection",
    "summary": "A query can allocate statements, result-set cursors and connections that must be released after use.",
    "definition": "JDBC ResultSet, Statement/PreparedStatement and Connection expose closeable resources whose lifetimes should be managed explicitly.",
    "learn": [
      "Define close resultset, preparedstatement, and connection",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply close resultset, preparedstatement, and connection without conflating architecture with implementation details.",
    "explanation": "A query can allocate statements, result-set cursors and connections that must be released after use.\n\ntry-with-resources closes resources in reverse declaration order, including on exceptions. If using a connection pool, Connection.close() typically returns the logical handle to its pool rather than always closing a physical socket. Open cursors/connections may exhaust pool slots or maintain locks depending on transaction state and database behavior; they do not universally block all other users or imply a Java heap memory leak.\n\nCompile with javac Main.java and run with java Main. Explain which scope owns the connection, statement and ResultSet; identify what would happen on SQLException.",
    "tip": "Decide who owns the Connection; close it at that scope. A DAO receiving a caller-managed transaction should not silently close the shared Connection.",
    "hack": "For one-off operations, try(Connection conn=...) plus nested statement/result scopes is clear; for pooled apps, close the logical handle promptly.",
    "mistake": "Closing a PreparedStatement is not a magical universal lock release if an enclosing transaction is still open.",
    "expected": "Connection closeable: true\nResultSet closeable: true",
    "expectedOutput": "Connection closeable: true\nResultSet closeable: true",
    "realUse": "A query can allocate statements, result-set cursors and connections that must be released after use.",
    "code": "import java.sql.*;\npublic class Main {\n  static int countProducts(Connection conn) throws SQLException {\n    try (PreparedStatement stmt = conn.prepareStatement(\"SELECT COUNT(*) AS total FROM products\");\n         ResultSet rows = stmt.executeQuery()) {\n      return rows.next() ? rows.getInt(\"total\") : 0;\n    }\n  }\n  public static void main(String[] args) {\n    System.out.println(\"Connection closeable: \" +\n      AutoCloseable.class.isAssignableFrom(Connection.class));\n    System.out.println(\"ResultSet closeable: \" +\n      AutoCloseable.class.isAssignableFrom(ResultSet.class));\n  }\n}",
    "practice": {
      "prompt": "Explain which scope owns the connection, statement and ResultSet; identify what would happen on SQLException.",
      "check": "All opened resources owned by try-with-resources close on normal/exceptional exit, in reverse order."
    },
    "quiz": [
      {
        "question": "Does every open statement prevent everyone else using a database?",
        "options": [
          "No",
          "Yes always",
          "Only with SQL Server"
        ],
        "correctIndex": 0,
        "explanation": "Lock behavior depends on database and transaction state."
      },
      {
        "question": "In a connection pool, what may Connection.close() mean?",
        "options": [
          "Return logical connection to pool",
          "Delete the database",
          "Always force JVM exit"
        ],
        "correctIndex": 0,
        "explanation": "Pools typically recycle logical connections."
      }
    ]
  },
  {
    "id": "java-jdbc-safe-sql",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Database & JDBC",
    "order": 40,
    "title": "Avoid SQL injection: bind values, whitelist identifiers",
    "summary": "A customer name must remain a parameter value rather than being interpreted as part of the WHERE clause.",
    "definition": "SQL injection can occur when untrusted input changes a query's SQL syntax; JDBC placeholders separate data values from query structure.",
    "learn": [
      "Define avoid sql injection: bind values, whitelist identifiers",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply avoid sql injection: bind values, whitelist identifiers without conflating architecture with implementation details.",
    "explanation": "A customer name must remain a parameter value rather than being interpreted as part of the WHERE clause.\n\nUse PreparedStatement with ? placeholders and matching setters for values; table and column identifiers cannot be protected by parameter placeholders and must come from a validated allowlist. Database access should use least-privilege accounts and appropriate query/time limits.\n\nCompile with javac Main.java and run with java Main. Rewrite the method to execute within try-with-resources and return the ID rather than the open statement.",
    "tip": "Prefer a resource-lifetime design where a query method closes its own statement, rather than returning a live statement to an unaware caller.",
    "hack": "Use allowlists for identifiers and JDBC setters for data values.",
    "mistake": "Do not build SQL as \"... WHERE name='\" + input + \"'\".",
    "expected": "true",
    "expectedOutput": "true",
    "realUse": "A customer name must remain a parameter value rather than being interpreted as part of the WHERE clause.",
    "code": "import java.sql.*;\npublic class Main {\n  static PreparedStatement lookup(Connection conn, String name) throws SQLException {\n    PreparedStatement statement =\n      conn.prepareStatement(\"SELECT id FROM products WHERE name = ?\");\n    statement.setString(1, name);\n    return statement; // caller OWNS and must close returned statement\n  }\n  public static void main(String[] args) {\n    String query = \"SELECT id FROM products WHERE name = ?\";\n    System.out.println(query.contains(\"?\"));\n  }\n}",
    "practice": {
      "prompt": "Rewrite the method to execute within try-with-resources and return the ID rather than the open statement.",
      "check": "The method owns and closes its statement/result resources; SQL still uses a bound name value."
    },
    "quiz": [
      {
        "question": "Can ? substitute a table name in SQL?",
        "options": [
          "No, normally it binds a value",
          "Yes, any SQL syntax",
          "Only with int"
        ],
        "correctIndex": 0,
        "explanation": "SQL parameters bind values, not arbitrary identifiers."
      },
      {
        "question": "Who closes the returned statement in this example?",
        "options": [
          "The caller",
          "The JVM immediately",
          "The SQL compiler"
        ],
        "correctIndex": 0,
        "explanation": "Ownership is transferred to the caller by the return contract."
      }
    ]
  },
  {
    "id": "java-jdbc-transaction",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Database & JDBC",
    "order": 50,
    "title": "JDBC transactions: commit, rollback and stock safety",
    "summary": "A stock deduction must not be left partially committed if a related operation fails.",
    "definition": "A JDBC transaction groups database operations so they can commit together or roll back as a unit under the database's transaction guarantees.",
    "learn": [
      "Define jdbc transactions: commit, rollback and stock safety",
      "Recognize its responsibility or contract",
      "Predict the reference Java 21 output",
      "Complete the practice and explain a real-world tradeoff"
    ],
    "objective": "Apply jdbc transactions: commit, rollback and stock safety without conflating architecture with implementation details.",
    "explanation": "A stock deduction must not be left partially committed if a related operation fails.\n\nThis Java code compiles a real transaction template but intentionally does not connect to a database. It demonstrates conditional stock deduction and rollback. Production systems must define isolation/locking semantics, maintain audit records, and manage connection pooling and transaction boundaries carefully; this is not a ready-made POS.\n\nCompile with javac Main.java and run with java Main. Explain why the SQL includes qty >= ? and checks executeUpdate()==1.",
    "tip": "A transaction boundary should be owned by the appropriate service layer; ensure rollback failures are surfaced.",
    "hack": "Conditional UPDATE with an affected-row check can help prevent oversell when backed by suitable transaction isolation.",
    "mistake": "A compiled transaction template doesn't prove concurrency correctness against an untested real database.",
    "expected": "JDBC transaction example compiled",
    "expectedOutput": "JDBC transaction example compiled",
    "realUse": "A stock deduction must not be left partially committed if a related operation fails.",
    "code": "import java.sql.*;\npublic class Main {\n  static void reserve(Connection conn, int productId, int qty) throws SQLException {\n    if (qty <= 0) throw new IllegalArgumentException(\"quantity\");\n    boolean oldAutoCommit = conn.getAutoCommit();\n    conn.setAutoCommit(false);\n    try (PreparedStatement statement = conn.prepareStatement(\n      \"UPDATE inventory SET qty = qty - ? WHERE product_id = ? AND qty >= ?\")) {\n      statement.setInt(1, qty);\n      statement.setInt(2, productId);\n      statement.setInt(3, qty);\n      if (statement.executeUpdate() != 1) throw new SQLException(\"Insufficient stock\");\n      conn.commit();\n    } catch (SQLException error) {\n      try { conn.rollback(); } catch (SQLException rollbackError) {\n        error.addSuppressed(rollbackError);\n      }\n      throw error;\n    } finally {\n      conn.setAutoCommit(oldAutoCommit);\n    }\n  }\n  public static void main(String[] args) {\n    System.out.println(\"JDBC transaction example compiled\");\n  }\n}",
    "practice": {
      "prompt": "Explain why the SQL includes qty >= ? and checks executeUpdate()==1.",
      "check": "Only a row with sufficient stock can be updated, and no matching row triggers rollback."
    },
    "quiz": [
      {
        "question": "What is the purpose of rollback?",
        "options": [
          "Undo uncommitted changes",
          "Undo already completed receipts automatically",
          "Close Java classes"
        ],
        "correctIndex": 0,
        "explanation": "Rollback reverts uncommitted transaction changes."
      },
      {
        "question": "Does compiling a JDBC template prove production concurrency safety?",
        "options": [
          "No",
          "Yes",
          "Only for Java 21"
        ],
        "correctIndex": 0,
        "explanation": "Real database isolation and concurrency tests are still required."
      }
    ]
  }
];
const exists=new Set(data.lessons.map(l=>l.id));for(const l of additions){if(!exists.has(l.id)){data.lessons.push(l);exists.add(l.id);}}
const practicePatches={
  "java-validate-numeric-input": {
    "prompt": "Subukan ang valid number na '20', blank string, at mixed text na '20x'. Ipaliwanag kung bakit hindi sapat ang parseInt lamang.",
    "check": "Valid numeric text becomes a number; empty and malformed values follow the existing validation/null behavior."
  },
  "java-bigdecimal-money": {
    "prompt": "Palitan ang presyo at quantity gamit ang decimal strings at i-predict ang BigDecimal total. Subukang gumamit ng new BigDecimal(\"0.1\") sa hiwalay na experiment.",
    "check": "The price total remains decimal-exact under the intended scale; float/double constructor pitfalls are understood."
  },
  "java-ternary-cleaner-conditions": {
    "prompt": "Change the stock value from positive to zero, then rewrite the ternary using an if/else branch.",
    "check": "The result changes between Available and Out of stock and both implementations agree."
  },
  "java-oop-class-object": {
    "prompt": "Create a third car object with a different brand and color. Explain why it does not alter the other two objects.",
    "check": "Three independent objects print the right per-instance values."
  },
  "java-big-o-made-simple": {
    "prompt": "Increase the list to 100 or more entries; compare the linear scan with a HashMap lookup and use the Big O simulator.",
    "check": "Linear search may inspect many entries in worst cases, while map lookup is generally expected O(1) average, not guaranteed constant cost."
  }
};
for(const [id,practice] of Object.entries(practicePatches)) {
  const lesson=data.lessons.find(x=>x.id===id);
  if(lesson && !lesson.practice) lesson.practice=practice;
}
const java=data.categories.find(c=>c.id==='java');if(java){java.learningPath=["Foundation","Control Flow","Strings & Arrays","Collections","OOP Foundations","OOP Advanced","Design Principles","Exceptions & IO","Database & JDBC","Modern Java","Problem Solving","Applied Java","Concurrency & JVM","Testing & Delivery"];java.status='Curriculum expansion in progress';java.description='Java 21 foundations, OOP, SOLID, DAO, JDBC and professional practice, with verified reference outputs and optional real online Java IDE.';}
})();
