(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons||!data?.categories)return;
const additions=[
  {
    "id": "java-types-casting",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "stage": "Foundation",
    "order": 9,
    "level": "Beginner",
    "title": "Primitive types and explicit casting",
    "summary": "An integer quantity and a decimal weight are different kinds of measurements; mixing them requires an explicit rule.",
    "definition": "Java primitive types store simple values; casting requests a conversion between compatible types.",
    "learn": [
      "Understand primitive types and explicit casting",
      "Java primitive types store simple values; casting requests a conversion between compatible types.",
      "Read and predict the output of the Java 21 example",
      "Make a controlled change and compare the result"
    ],
    "objective": "Use primitive types and explicit casting in a reproducible Java 21 program.",
    "explanation": "An integer quantity and a decimal weight are different kinds of measurements; mixing them requires an explicit rule.\n\nint stores a 32-bit signed whole number and double represents floating-point values. Dividing two integers performs integer division; cast an operand to double when a fractional result is intended.\n\nLocal Java practice: save this source as Main.java, compile with javac Main.java, run with java Main, then Remove the cast and predict the result before compiling.",
    "tip": "Choose numeric types from the actual data domain, not only from how easy they are to type.",
    "hack": "Explicit (double) casting explains why a fractional result is expected.",
    "mistake": "Assigning integer division to a double does not undo the truncated division.",
    "expected": "3.5",
    "expectedOutput": "3.5",
    "realUse": "Unit conversions and reporting averages.",
    "code": "public class Main {\n public static void main(String[] args) {\n   int totalKg = 7;\n   int boxes = 2;\n   double average = (double) totalKg / boxes;\n   System.out.println(average);\n }\n}",
    "practice": {
      "prompt": "Remove the cast and predict the result before compiling.",
      "check": "Integer division yields 3, which becomes 3.0 when assigned to a double."
    },
    "quiz": [
      {
        "question": "What is 7 / 2 with two int values?",
        "options": [
          "3",
          "3.5",
          "4"
        ],
        "correctIndex": 0,
        "explanation": "Integer division drops the fractional portion."
      },
      {
        "question": "Why cast an operand to double?",
        "options": [
          "To obtain floating-point division",
          "To print faster",
          "To create a class"
        ],
        "correctIndex": 0,
        "explanation": "With a floating-point operand the division produces a fractional value."
      }
    ],
    "tags": [
      "java",
      "java 21",
      "foundation"
    ]
  },
  {
    "id": "java-string-immutability",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "stage": "Strings & Arrays",
    "order": 10,
    "level": "Beginner",
    "title": "Strings are immutable: trim, equals, and case",
    "summary": "A typed label can be cleaned or reformatted, but each change produces a new text value.",
    "definition": "A Java String is an immutable sequence of UTF-16 code units.",
    "learn": [
      "Understand strings are immutable: trim, equals, and case",
      "A Java String is an immutable sequence of UTF-16 code units.",
      "Read and predict the output of the Java 21 example",
      "Make a controlled change and compare the result"
    ],
    "objective": "Use strings are immutable: trim, equals, and case in a reproducible Java 21 program.",
    "explanation": "A typed label can be cleaned or reformatted, but each change produces a new text value.\n\nString methods like trim return a new String; the original remains unchanged. Use equals for content comparisons, not == for object identity.\n\nLocal Java practice: save this source as Main.java, compile with javac Main.java, run with java Main, then Change the desired product to 'Beef' and predict the equals result.",
    "tip": "Use equalsIgnoreCase only when case-insensitive matching is genuinely required.",
    "hack": "Trim and compare in named steps when debugging inputs.",
    "mistake": "== compares references, not a guarantee of equal String contents.",
    "expected": "Chicken\ntrue\n9",
    "expectedOutput": "Chicken\ntrue\n9",
    "realUse": "Input cleansing and product search.",
    "code": "public class Main {\n public static void main(String[] args) {\n   String raw = \" Chicken \";\n   String cleaned = raw.trim();\n   System.out.println(cleaned);\n   System.out.println(cleaned.equals(\"Chicken\"));\n   System.out.println(raw.length());\n }\n}",
    "practice": {
      "prompt": "Change the desired product to 'Beef' and predict the equals result.",
      "check": "The comparison is false, while raw remains unchanged."
    },
    "quiz": [
      {
        "question": "Which method checks String contents?",
        "options": [
          "equals",
          "==",
          "compareObject"
        ],
        "correctIndex": 0,
        "explanation": "equals is the normal way to compare String values."
      },
      {
        "question": "Does trim mutate raw?",
        "options": [
          "No",
          "Yes",
          "Only in loops"
        ],
        "correctIndex": 0,
        "explanation": "Strings are immutable; trim returns another value."
      }
    ],
    "tags": [
      "java",
      "java 21",
      "strings & arrays"
    ]
  },
  {
    "id": "java-array-basics",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "stage": "Strings & Arrays",
    "order": 20,
    "level": "Beginner",
    "title": "Arrays: indexing, length, and iteration",
    "summary": "A shelf has numbered slots; in Java arrays, the first slot is index zero.",
    "definition": "A Java array stores a fixed-length indexed sequence of a specific element type.",
    "learn": [
      "Understand arrays: indexing, length, and iteration",
      "A Java array stores a fixed-length indexed sequence of a specific element type.",
      "Read and predict the output of the Java 21 example",
      "Make a controlled change and compare the result"
    ],
    "objective": "Use arrays: indexing, length, and iteration in a reproducible Java 21 program.",
    "explanation": "A shelf has numbered slots; in Java arrays, the first slot is index zero.\n\nArray indices start at 0. The array length is fixed at creation; enhanced for visits each element without manual indexing.\n\nLocal Java practice: save this source as Main.java, compile with javac Main.java, run with java Main, then Add a fourth entry to the initializer and check the new length.",
    "tip": "Use enhanced for when you only need the value and not the index.",
    "hack": "For growable lists, prefer ArrayList over trying to extend a fixed array.",
    "mistake": "products[3] is out of bounds when there are exactly three items.",
    "expected": "Count: 3\nLiempo\nChicken\nFish",
    "expectedOutput": "Count: 3\nLiempo\nChicken\nFish",
    "realUse": "Ordered fixed-size datasets and algorithm exercises.",
    "code": "public class Main {\n public static void main(String[] args) {\n   String[] products = {\"Liempo\", \"Chicken\", \"Fish\"};\n   System.out.println(\"Count: \" + products.length);\n   for (String product : products) System.out.println(product);\n }\n}",
    "practice": {
      "prompt": "Add a fourth entry to the initializer and check the new length.",
      "check": "Count becomes 4 and the additional item prints."
    },
    "quiz": [
      {
        "question": "Which index accesses the first element?",
        "options": [
          "0",
          "1",
          "-1"
        ],
        "correctIndex": 0,
        "explanation": "Java array indexing starts at zero."
      },
      {
        "question": "Can this array grow using add()?",
        "options": [
          "Yes",
          "No",
          "Only in Java 8"
        ],
        "correctIndex": 1,
        "explanation": "Array length is fixed; use a collection for dynamic resizing."
      }
    ],
    "tags": [
      "java",
      "java 21",
      "strings & arrays"
    ]
  },
  {
    "id": "java-switch-expression",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "stage": "Control Flow",
    "order": 14,
    "level": "Beginner",
    "title": "Modern switch expressions",
    "summary": "A delivery method maps to one fee; we want to calculate a value, not repeat many assignments.",
    "definition": "A Java switch expression selects a value from matching case labels.",
    "learn": [
      "Understand modern switch expressions",
      "A Java switch expression selects a value from matching case labels.",
      "Read and predict the output of the Java 21 example",
      "Make a controlled change and compare the result"
    ],
    "objective": "Use modern switch expressions in a reproducible Java 21 program.",
    "explanation": "A delivery method maps to one fee; we want to calculate a value, not repeat many assignments.\n\nModern arrow cases do not fall through. A switch expression must cover all possibilities, which can be handled with default.\n\nLocal Java practice: save this source as Main.java, compile with javac Main.java, run with java Main, then Change mode to pickup, then to regional.",
    "tip": "Use an enum when possible values are centrally defined and shared in code.",
    "hack": "A switch expression can replace a verbose branch that only produces one value.",
    "mistake": "Do not copy colon-case fall-through assumptions into arrow-case switch expressions.",
    "expected": "Fee: 40",
    "expectedOutput": "Fee: 40",
    "realUse": "Order statuses and configurable service fees.",
    "code": "public class Main {\n public static void main(String[] args) {\n   String mode = \"local\";\n   int fee = switch (mode) {\n     case \"pickup\" -> 0;\n     case \"local\" -> 40;\n     default -> 80;\n   };\n   System.out.println(\"Fee: \" + fee);\n }\n}",
    "practice": {
      "prompt": "Change mode to pickup, then to regional.",
      "check": "Pickup prints 0; an unknown regional value prints 80."
    },
    "quiz": [
      {
        "question": "What does arrow syntax prevent here?",
        "options": [
          "Unintended case fall-through",
          "All errors",
          "Object creation"
        ],
        "correctIndex": 0,
        "explanation": "Arrow cases do not execute subsequent cases."
      },
      {
        "question": "Why include default?",
        "options": [
          "To cover otherwise unmatched strings",
          "To import a package",
          "To catch exceptions"
        ],
        "correctIndex": 0,
        "explanation": "default covers remaining mode values."
      }
    ],
    "tags": [
      "java",
      "java 21",
      "control flow"
    ]
  },
  {
    "id": "java-constructors-encapsulation",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "stage": "OOP Foundations",
    "order": 20,
    "level": "Intermediate",
    "title": "Constructors and encapsulation",
    "summary": "A stock record should not be able to acquire a negative quantity without a deliberate rule.",
    "definition": "A constructor initializes a new object; encapsulation keeps an object's state behind controlled methods.",
    "learn": [
      "Understand constructors and encapsulation",
      "A constructor initializes a new object; encapsulation keeps an object's state behind controlled methods.",
      "Read and predict the output of the Java 21 example",
      "Make a controlled change and compare the result"
    ],
    "objective": "Use constructors and encapsulation in a reproducible Java 21 program.",
    "explanation": "A stock record should not be able to acquire a negative quantity without a deliberate rule.\n\nMake fields private and validate incoming values inside the constructor or methods. A constructor has the class name and no return type.\n\nLocal Java practice: save this source as Main.java, compile with javac Main.java, run with java Main, then Try constructing Stock with -1; explain the thrown exception.",
    "tip": "Keep invariants inside the object rather than trusting every caller to remember them.",
    "hack": "Use final fields for values that must not change after construction.",
    "mistake": "A public mutable quantity field makes invalid state easy to introduce.",
    "expected": "Liempo: 4",
    "expectedOutput": "Liempo: 4",
    "realUse": "Domain models for inventory and orders.",
    "code": "public class Main {\n static final class Stock {\n   private final String name;\n   private int quantity;\n   Stock(String name, int quantity) {\n     if (quantity < 0) throw new IllegalArgumentException(\"quantity\");\n     this.name = name;\n     this.quantity = quantity;\n   }\n   String label() { return name + \": \" + quantity; }\n }\n public static void main(String[] args) {\n   Stock stock = new Stock(\"Liempo\", 4);\n   System.out.println(stock.label());\n }\n}",
    "practice": {
      "prompt": "Try constructing Stock with -1; explain the thrown exception.",
      "check": "IllegalArgumentException prevents an invalid object."
    },
    "quiz": [
      {
        "question": "What validates initial quantity?",
        "options": [
          "The constructor",
          "CSS",
          "System.out"
        ],
        "correctIndex": 0,
        "explanation": "Constructor code controls initial object state."
      },
      {
        "question": "Why use private fields?",
        "options": [
          "To protect invariants behind controlled methods",
          "To hide code from a decompiler",
          "To avoid constructors"
        ],
        "correctIndex": 0,
        "explanation": "Encapsulation centralizes valid state transitions."
      }
    ],
    "tags": [
      "java",
      "java 21",
      "oop foundations"
    ]
  },
  {
    "id": "java-inheritance-polymorphism",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "stage": "OOP Advanced",
    "order": 10,
    "level": "Intermediate",
    "title": "Inheritance, overrides, and polymorphism",
    "summary": "Different delivery types may calculate fees differently while exposing the same fee() operation.",
    "definition": "Inheritance allows a subclass to extend behavior; polymorphism lets code call an overridden method through a base-type reference.",
    "learn": [
      "Understand inheritance, overrides, and polymorphism",
      "Inheritance allows a subclass to extend behavior; polymorphism lets code call an overridden method through a base-type reference.",
      "Read and predict the output of the Java 21 example",
      "Make a controlled change and compare the result"
    ],
    "objective": "Use inheritance, overrides, and polymorphism in a reproducible Java 21 program.",
    "explanation": "Different delivery types may calculate fees differently while exposing the same fee() operation.\n\nUse @Override when redefining behavior, and prefer composition when inheritance is not a true is-a relationship. Dynamic dispatch calls the actual object's overridden method.\n\nLocal Java practice: save this source as Main.java, compile with javac Main.java, run with java Main, then Change the constructed object to new Delivery().",
    "tip": "Use inheritance for genuine subtype relationships, not simply for code reuse.",
    "hack": "Write @Override to make compiler checks catch mistaken method signatures.",
    "mistake": "The declared reference type does not force the base implementation when the actual object overrides it.",
    "expected": "80",
    "expectedOutput": "80",
    "realUse": "Pluggable shipping and payment behaviors.",
    "code": "public class Main {\n static class Delivery {\n   int fee() { return 40; }\n }\n static class Express extends Delivery {\n   @Override int fee() { return 80; }\n }\n public static void main(String[] args) {\n   Delivery delivery = new Express();\n   System.out.println(delivery.fee());\n }\n}",
    "practice": {
      "prompt": "Change the constructed object to new Delivery().",
      "check": "The output becomes 40."
    },
    "quiz": [
      {
        "question": "Which fee method runs for new Express()?",
        "options": [
          "Express fee",
          "Delivery fee",
          "Neither"
        ],
        "correctIndex": 0,
        "explanation": "Virtual method dispatch uses the runtime object's override."
      },
      {
        "question": "When is inheritance a poor fit?",
        "options": [
          "When the relationship is not truly is-a",
          "When overrides are used",
          "When classes share behavior"
        ],
        "correctIndex": 0,
        "explanation": "Composition is often clearer for mere reuse."
      }
    ],
    "tags": [
      "java",
      "java 21",
      "oop advanced"
    ]
  },
  {
    "id": "java-interfaces-abstraction",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "stage": "OOP Advanced",
    "order": 20,
    "level": "Intermediate",
    "title": "Interfaces and implementation contracts",
    "summary": "A receipt printer and a screen display can both support print() through different implementations.",
    "definition": "A Java interface declares behavior a class must implement, allowing callers to depend on a contract.",
    "learn": [
      "Understand interfaces and implementation contracts",
      "A Java interface declares behavior a class must implement, allowing callers to depend on a contract.",
      "Read and predict the output of the Java 21 example",
      "Make a controlled change and compare the result"
    ],
    "objective": "Use interfaces and implementation contracts in a reproducible Java 21 program.",
    "explanation": "A receipt printer and a screen display can both support print() through different implementations.\n\nAn interface describes capabilities, not necessarily storage. Different classes may implement the same contract; a variable typed as the interface can hold either.\n\nLocal Java practice: save this source as Main.java, compile with javac Main.java, run with java Main, then Add another class implementing Printer that returns a different message, then instantiate it.",
    "tip": "Name interfaces after meaningful behavior or capability.",
    "hack": "Depend on the interface when multiple implementations are a real requirement.",
    "mistake": "Do not introduce an interface for every tiny class without a clear use case.",
    "expected": "Receipt ready",
    "expectedOutput": "Receipt ready",
    "realUse": "Service boundaries, notifications, and testable adapters.",
    "code": "public class Main {\n interface Printer { String print(); }\n static class Receipt implements Printer {\n   public String print() { return \"Receipt ready\"; }\n }\n public static void main(String[] args) {\n   Printer p = new Receipt();\n   System.out.println(p.print());\n }\n}",
    "practice": {
      "prompt": "Add another class implementing Printer that returns a different message, then instantiate it.",
      "check": "The interface reference prints the new implementation's message."
    },
    "quiz": [
      {
        "question": "What does implements mean?",
        "options": [
          "The class fulfills an interface contract",
          "The class deletes a parent",
          "The code becomes static"
        ],
        "correctIndex": 0,
        "explanation": "Implementing a contract requires its abstract methods."
      },
      {
        "question": "Why type p as Printer?",
        "options": [
          "To depend on shared behavior",
          "To prevent output",
          "To use CSS"
        ],
        "correctIndex": 0,
        "explanation": "Callers need only the interface behavior."
      }
    ],
    "tags": [
      "java",
      "java 21",
      "oop advanced"
    ]
  },
  {
    "id": "java-exceptions-cleanup",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "stage": "Exceptions & IO",
    "order": 10,
    "level": "Intermediate",
    "title": "Exceptions: validate, throw, and catch",
    "summary": "When a user requests invalid quantity, the calculation should stop instead of returning a misleading total.",
    "definition": "An exception signals that an operation could not proceed normally and may be handled by a suitable caller.",
    "learn": [
      "Understand exceptions: validate, throw, and catch",
      "An exception signals that an operation could not proceed normally and may be handled by a suitable caller.",
      "Read and predict the output of the Java 21 example",
      "Make a controlled change and compare the result"
    ],
    "objective": "Use exceptions: validate, throw, and catch in a reproducible Java 21 program.",
    "explanation": "When a user requests invalid quantity, the calculation should stop instead of returning a misleading total.\n\nThrow an exception at the failure point and catch it at a boundary that knows how to respond. Catch specific exceptions rather than silently swallowing all failures.\n\nLocal Java practice: save this source as Main.java, compile with javac Main.java, run with java Main, then Call readQty(3) instead, and explain what prints.",
    "tip": "Give errors actionable messages without exposing secrets or stack traces to end users.",
    "hack": "Validate at important method boundaries and surface the cause in tests.",
    "mistake": "Catching Exception everywhere and ignoring it hides the real problem.",
    "expected": "Invalid: quantity must be positive",
    "expectedOutput": "Invalid: quantity must be positive",
    "realUse": "Input validation and service error handling.",
    "code": "public class Main {\n static int readQty(int value) {\n   if (value <= 0) throw new IllegalArgumentException(\"quantity must be positive\");\n   return value;\n }\n public static void main(String[] args) {\n   try {\n     System.out.println(readQty(0));\n   } catch (IllegalArgumentException error) {\n     System.out.println(\"Invalid: \" + error.getMessage());\n   }\n }\n}",
    "practice": {
      "prompt": "Call readQty(3) instead, and explain what prints.",
      "check": "It prints 3 and does not enter catch."
    },
    "quiz": [
      {
        "question": "What does throw do?",
        "options": [
          "Signals a failure by raising an exception",
          "Always prints output",
          "Creates a loop"
        ],
        "correctIndex": 0,
        "explanation": "throw transfers control toward a matching handler."
      },
      {
        "question": "When should catch handle an error?",
        "options": [
          "When it can respond meaningfully",
          "Always everywhere",
          "Only in main"
        ],
        "correctIndex": 0,
        "explanation": "Handling should occur at a boundary that knows a sensible response."
      }
    ],
    "tags": [
      "java",
      "java 21",
      "exceptions & io"
    ]
  },
  {
    "id": "java-generics-list",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "stage": "Collections",
    "order": 20,
    "level": "Intermediate",
    "title": "Generics with List<String>",
    "summary": "A list intended for product names should not accidentally accept quantities as raw values.",
    "definition": "Generics allow APIs and collections to express element types at compile time.",
    "learn": [
      "Understand generics with list<string>",
      "Generics allow APIs and collections to express element types at compile time.",
      "Read and predict the output of the Java 21 example",
      "Make a controlled change and compare the result"
    ],
    "objective": "Use generics with list<string> in a reproducible Java 21 program.",
    "explanation": "A list intended for product names should not accidentally accept quantities as raw values.\n\nList<String> tells the compiler the collection contains String elements. Program to List where appropriate, while choosing ArrayList as the concrete implementation.\n\nLocal Java practice: save this source as Main.java, compile with javac Main.java, run with java Main, then Try adding an integer using names.add(5) and inspect the compile error.",
    "tip": "Use generic types instead of raw List to catch type errors earlier.",
    "hack": "Declare variables using a useful collection interface rather than requiring every caller to know the implementation.",
    "mistake": "A raw List sacrifices compile-time element-type checks.",
    "expected": "Chicken",
    "expectedOutput": "Chicken",
    "realUse": "Typed service results and collections.",
    "code": "import java.util.ArrayList;\nimport java.util.List;\npublic class Main {\n public static void main(String[] args) {\n   List<String> names = new ArrayList<>();\n   names.add(\"Liempo\");\n   names.add(\"Chicken\");\n   System.out.println(names.get(1));\n }\n}",
    "practice": {
      "prompt": "Try adding an integer using names.add(5) and inspect the compile error.",
      "check": "Java rejects the integer because List<String> accepts String elements."
    },
    "quiz": [
      {
        "question": "What does List<String> enforce?",
        "options": [
          "String elements",
          "Network security",
          "Sorted order"
        ],
        "correctIndex": 0,
        "explanation": "Generics represent the intended element type."
      },
      {
        "question": "Does ArrayList guarantee sorted order?",
        "options": [
          "No",
          "Yes",
          "Only for String"
        ],
        "correctIndex": 0,
        "explanation": "ArrayList preserves insertion order, not automatic sorted order."
      }
    ],
    "tags": [
      "java",
      "java 21",
      "collections"
    ]
  },
  {
    "id": "java-stream-filter-map",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "stage": "Modern Java",
    "order": 10,
    "level": "Intermediate",
    "title": "Stream filter, map, and count",
    "summary": "A product list can be filtered to in-stock entries, transformed into labels, and counted.",
    "definition": "Java Streams process sequences through declarative operations such as filter, map, and terminal reductions.",
    "learn": [
      "Understand stream filter, map, and count",
      "Java Streams process sequences through declarative operations such as filter, map, and terminal reductions.",
      "Read and predict the output of the Java 21 example",
      "Make a controlled change and compare the result"
    ],
    "objective": "Use stream filter, map, and count in a reproducible Java 21 program.",
    "explanation": "A product list can be filtered to in-stock entries, transformed into labels, and counted.\n\nA stream pipeline is evaluated when a terminal operation runs. Collections are not modified by filter alone. Avoid side effects in pipelines, especially in parallel contexts.\n\nLocal Java practice: save this source as Main.java, compile with javac Main.java, run with java Main, then Add stock 6 and predict the new count.",
    "tip": "Simple loops remain a good choice when they are easier to read.",
    "hack": "Use stream operations when the transformation pipeline is clearer than nested imperative code.",
    "mistake": "Stream filter does not mutate the original List.",
    "expected": "Available: 2",
    "expectedOutput": "Available: 2",
    "realUse": "Reports, aggregations, and transforming collections.",
    "code": "import java.util.List;\npublic class Main {\n public static void main(String[] args) {\n   List<Integer> stocks = List.of(4, 0, 2);\n   long available = stocks.stream().filter(qty -> qty > 0).count();\n   System.out.println(\"Available: \" + available);\n }\n}",
    "practice": {
      "prompt": "Add stock 6 and predict the new count.",
      "check": "Available becomes 3."
    },
    "quiz": [
      {
        "question": "What triggers execution of this pipeline?",
        "options": [
          "count()",
          "Creating the List",
          "Import statement"
        ],
        "correctIndex": 0,
        "explanation": "count is a terminal operation that consumes the stream."
      },
      {
        "question": "Does filter change stocks?",
        "options": [
          "No",
          "Yes",
          "Only when empty"
        ],
        "correctIndex": 0,
        "explanation": "Stream operations produce results without mutating the original collection by default."
      }
    ],
    "tags": [
      "java",
      "java 21",
      "modern java"
    ]
  }
];
const ids=new Set(data.lessons.map(x=>x.id));for(const lesson of additions){if(!ids.has(lesson.id)){data.lessons.push(lesson);ids.add(lesson.id);}}
const cat=data.categories.find(c=>c.id==='java');if(cat){cat.learningPath=["Foundation","Control Flow","Strings & Arrays","Collections","OOP Foundations","OOP Advanced","Exceptions & IO","Modern Java","Problem Solving","Applied Java"];cat.status='Curriculum expansion in progress';cat.description='Java 21 CI-compiled reference lessons, progressing from fundamentals through OOP and modern collections. More advanced material and practical projects remain.';}
})();
