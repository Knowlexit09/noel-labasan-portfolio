(function(){'use strict';
const data=window.KNOWLEDGE_LAB_V2;
if(!data||!Array.isArray(data.lessons)||!Array.isArray(data.categories))return;
const additions=[
  {
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "id": "java-first-program",
    "level": "Beginner",
    "stage": "Foundation",
    "order": 1,
    "title": "Your first Java program: class, main, and values",
    "summary": "Understand Java source structure and print an actual product calculation.",
    "definition": "Java is a strongly typed, class-based programming language. The Java runtime executes compiled Java bytecode.",
    "learn": [
      "Understand public class Main and main()",
      "Declare a String, int, and boolean",
      "Print values with System.out.println",
      "Compile a source file with javac and run it with java"
    ],
    "objective": "Read a complete Java program and predict its printed output.",
    "explanation": "A Java program starts with source code. javac compiles the source into bytecode, and the Java runtime executes that bytecode. Unlike JavaScript in the browser, this example is a Java 21 reference program, verified by compilation and execution in CI—not a browser Run button.\n\nThink of main() as the starting point for this simple program. A String stores text, int stores a whole number, and boolean stores true or false. Java checks their types at compile time.\n\nPractice locally with Java 21: save the code as Main.java, then run javac Main.java followed by java Main.",
    "tip": "Java class names are case-sensitive; Main.java must match the public class Main.",
    "hack": "Use System.out.println to inspect a computed value while learning, then add unit tests as the program grows.",
    "mistake": "Do not assume Java and JavaScript use the same syntax or runtime just because their names are similar.",
    "expected": "The program prints Liempo: 375 and Available: true on separate lines.",
    "expectedOutput": "Liempo: 375\nAvailable: true",
    "realUse": "Back-office applications, Android ecosystems, enterprise APIs, and desktop systems use Java.",
    "tags": [
      "java",
      "java 21",
      "main",
      "compile",
      "types"
    ],
    "code": "public class Main {\n  public static void main(String[] args) {\n    String product = \"Liempo\";\n    int quantity = 3;\n    int price = 125;\n    boolean available = true;\n    System.out.println(product + \": \" + (quantity * price));\n    System.out.println(\"Available: \" + available);\n  }\n}",
    "practice": {
      "prompt": "Change quantity from 3 to 4, predict the first output, and compile/run locally using Java 21.",
      "check": "It prints Liempo: 500, followed by Available: true."
    },
    "quiz": [
      {
        "question": "What is the entry point in this example?",
        "options": [
          "public static void main(String[] args)",
          "System.out.println alone",
          "A CSS class",
          "An HTML element"
        ],
        "correctIndex": 0,
        "explanation": "The Java runtime starts the example at main()."
      },
      {
        "question": "What tool compiles Main.java?",
        "options": [
          "java Main.java.html",
          "javac Main.java",
          "node Main.java",
          "git add"
        ],
        "correctIndex": 1,
        "explanation": "javac compiles Java source into class bytecode."
      }
    ]
  },
  {
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "id": "java-if-and-for",
    "level": "Beginner",
    "stage": "Control Flow",
    "order": 10,
    "title": "Java if/else and for loops: handle stock rules",
    "summary": "Make a stock decision, then print numbered pack labels.",
    "definition": "An if/else statement selects a path using a boolean condition. A for loop repeats code while its condition remains true.",
    "learn": [
      "Compare numbers with <= and >",
      "Use if, else if, and else",
      "Understand for initialization, condition, and update",
      "Test an exact stock boundary"
    ],
    "objective": "Enforce a simple stock rule and repeat an action a known number of times.",
    "explanation": "Before fulfilling a request, a system should check whether the requested quantity is valid and available. if/else handles the decision. A for loop is useful when you know the number of repeated actions.\n\nHere, stock is 3 and the request is 4, so the program prints Not enough stock. The loop then prints Pack 1, Pack 2, and Pack 3. These actions are separate, so the loop still runs after the stock message.\n\nPractice locally: change request to 3, then 0. Explain which branch runs each time.",
    "tip": "Test the boundary: request exactly equal to stock, then one above it.",
    "hack": "For repeated numbered output, use a for loop instead of copying System.out.println lines.",
    "mistake": "Don't assume the loop stops when the earlier if statement reports an issue; control flow continues unless you explicitly return or throw.",
    "expected": "Not enough stock, followed by Pack 1, Pack 2, and Pack 3.",
    "expectedOutput": "Not enough stock\nPack 1\nPack 2\nPack 3",
    "realUse": "Stock reservation checks, validation, batch processing, and generating numbered records.",
    "tags": [
      "java",
      "if",
      "else",
      "for",
      "stock"
    ],
    "code": "public class Main {\n  public static void main(String[] args) {\n    int stock = 3;\n    int request = 4;\n    if (request <= 0) {\n      System.out.println(\"Invalid quantity\");\n    } else if (request <= stock) {\n      System.out.println(\"Can order\");\n    } else {\n      System.out.println(\"Not enough stock\");\n    }\n    for (int i = 1; i <= 3; i++) {\n      System.out.println(\"Pack \" + i);\n    }\n  }\n}",
    "practice": {
      "prompt": "Change request to 3 and predict the first line. Next set it to 0, and explain why the loop still prints pack numbers.",
      "check": "3 prints Can order; 0 prints Invalid quantity. Both still print Pack 1–3."
    },
    "quiz": [
      {
        "question": "When stock is 3 and request is 3, what happens?",
        "options": [
          "Not enough stock",
          "Can order",
          "Invalid quantity",
          "Compilation error"
        ],
        "correctIndex": 1,
        "explanation": "The valid positive quantity meets the <= stock condition."
      },
      {
        "question": "Why does Pack 1 still print after Not enough stock?",
        "options": [
          "The for loop follows the condition and runs independently",
          "Java always ignores if",
          "The stock becomes zero",
          "Print statements cannot be conditional"
        ],
        "correctIndex": 0,
        "explanation": "The loop is separate code after the branch, and no return or exception ends main early."
      }
    ]
  },
  {
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "id": "java-methods-and-contracts",
    "level": "Beginner",
    "stage": "Control Flow",
    "order": 20,
    "title": "Methods: parameters, return values, and contracts",
    "summary": "Make one reusable total calculation with an explicit quantity rule.",
    "definition": "A Java method is a named block of code that can accept typed parameters and return a declared type.",
    "learn": [
      "Declare a static method returning int",
      "Pass int arguments",
      "Validate a method precondition",
      "Understand Math.multiplyExact and overflow"
    ],
    "objective": "Reuse a total calculation and recognize why method rules should be explicit.",
    "explanation": "Without a helper method, every place that calculates totals might repeat the multiplication and accidentally use different rules. total(price, quantity) puts this calculation in one place.\n\nThe method rejects negative quantities and uses Math.multiplyExact so overflow throws instead of silently returning a wrapped result. This is still a simplified whole-unit illustration, not a replacement for correctly designed financial calculations.\n\nPractice locally: add a third item with price 50 and quantity 4.",
    "tip": "Give methods short descriptive names and state which inputs they accept.",
    "hack": "Keep validation near the method boundary instead of assuming every caller supplied correct values.",
    "mistake": "A return statement gives a value to the caller; println only writes text to the terminal.",
    "expected": "Liempo: 250 and Chicken: 270.",
    "expectedOutput": "Liempo: 250\nChicken: 270",
    "realUse": "Pricing helper methods, data conversion utilities, order processing, and reusable business rules.",
    "tags": [
      "java",
      "method",
      "return",
      "validation",
      "overflow"
    ],
    "code": "public class Main {\n  static int total(int price, int quantity) {\n    if (quantity < 0) throw new IllegalArgumentException(\"quantity\");\n    return Math.multiplyExact(price, quantity);\n  }\n  public static void main(String[] args) {\n    System.out.println(\"Liempo: \" + total(125, 2));\n    System.out.println(\"Chicken: \" + total(90, 3));\n  }\n}",
    "practice": {
      "prompt": "Print a third line using total(50, 4). Then try a negative quantity and explain the exception.",
      "check": "The new line is 200; a negative quantity throws IllegalArgumentException rather than producing a misleading total."
    },
    "quiz": [
      {
        "question": "Why use return in the method?",
        "options": [
          "To make the result reusable by the caller",
          "To style the output",
          "To create a variable automatically",
          "To compile the file"
        ],
        "correctIndex": 0,
        "explanation": "return sends the computed value to calling code."
      },
      {
        "question": "Why use Math.multiplyExact here?",
        "options": [
          "To format a currency symbol",
          "To detect integer overflow rather than silently wrap",
          "To print lines",
          "To create a new object"
        ],
        "correctIndex": 1,
        "explanation": "multiplyExact throws ArithmeticException if the integer result overflows."
      }
    ]
  },
  {
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "id": "java-arraylist-hashmap",
    "level": "Intermediate",
    "stage": "Collections",
    "order": 10,
    "title": "Collections: ArrayList and HashMap",
    "summary": "Choose a flexible list for ordered items and a map for keyed lookups.",
    "definition": "ArrayList stores an indexed, growable list of elements. HashMap associates keys with values for keyed retrieval.",
    "learn": [
      "Create and add to an ArrayList",
      "Store stock numbers in a HashMap",
      "Read list size and values by key",
      "Handle possibly missing map keys"
    ],
    "objective": "Track an ordered product list and related stock quantities.",
    "explanation": "Imagine a shelf list and a separate stock book. ArrayList holds products in order and grows when you add entries. HashMap lets you ask for the quantity associated with a product name without scanning the whole list manually.\n\nIn this example, get returns an Integer for an existing key. Real code must handle a missing key, which returns null, before unboxing or comparing it.\n\nPractice locally: add Fish Fillet with stock 2 to both collections and print its stock.",
    "tip": "Choose a collection based on access patterns; HashMap does not promise iteration order.",
    "hack": "Use getOrDefault(key, 0) when a missing key should have an explicit default, but only if zero genuinely means no stock.",
    "mistake": "Don't assume stock.get('Missing') returns zero. It returns null unless a mapping exists.",
    "expected": "The program prints Products: 2, Liempo stock: 4, and Available: false.",
    "expectedOutput": "Products: 2\nLiempo stock: 4\nAvailable: false",
    "realUse": "Catalogs, inventory indexes, frequently accessed keyed records, and application caches.",
    "tags": [
      "java",
      "arraylist",
      "hashmap",
      "collections",
      "lookup"
    ],
    "code": "import java.util.ArrayList;\nimport java.util.HashMap;\n\npublic class Main {\n  public static void main(String[] args) {\n    ArrayList<String> products = new ArrayList<>();\n    products.add(\"Liempo\");\n    products.add(\"Chicken\");\n    HashMap<String, Integer> stock = new HashMap<>();\n    stock.put(\"Liempo\", 4);\n    stock.put(\"Chicken\", 0);\n    System.out.println(\"Products: \" + products.size());\n    System.out.println(\"Liempo stock: \" + stock.get(\"Liempo\"));\n    System.out.println(\"Available: \" + (stock.get(\"Chicken\") > 0));\n  }\n}",
    "practice": {
      "prompt": "Add Fish Fillet to the ArrayList and put stock 2 in the HashMap. Print the new size and stock.",
      "check": "The size becomes 3 and stock.get(\"Fish Fillet\") returns 2."
    },
    "quiz": [
      {
        "question": "Which Java collection is ideal for keyed retrieval by product name?",
        "options": [
          "HashMap<String, Integer>",
          "ArrayList<Integer> with no keys",
          "StringBuilder",
          "Thread"
        ],
        "correctIndex": 0,
        "explanation": "HashMap stores entries under keys and retrieves their mapped values."
      },
      {
        "question": "What does HashMap.get return for an absent key by default?",
        "options": [
          "0",
          "null",
          "false",
          "Empty ArrayList"
        ],
        "correctIndex": 1,
        "explanation": "A missing key returns null; using an implicit default needs deliberate handling."
      }
    ]
  }
];
const existing=new Set(data.lessons.map(x=>x.id));
for(const lesson of additions){if(!existing.has(lesson.id)){data.lessons.push(lesson);existing.add(lesson.id);}}
const java=data.categories.find(x=>x.id==='java');
if(java){
  java.learningPath=['Foundation','Control Flow','Collections','OOP Foundations','Problem Solving','Applied Java'];
  java.description='Java 21 learning path with compiled references for fundamentals, typed methods, control flow, collections, OOP, practical validation, exact money, and complexity intuition.';
}
})();
