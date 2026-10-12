(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons)return;
const additions=[
  {
    "id": "java-review-class-instance",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "Foundation",
    "order": 3,
    "title": "Class, object, and instantiation",
    "summary": "A product blueprint is a class; an actual Liempo record created with new is an instance.",
    "definition": "A class defines the fields and behavior objects can have; an object is an instance created from that class.",
    "learn": [
      "Define class, object, and instantiation",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply class, object, and instantiation with safe Java 21 examples.",
    "explanation": "A product blueprint is a class; an actual Liempo record created with new is an instance.\n\nInstantiating calls a constructor and produces a new object reference. The class can be used to create many independent objects.\n\nTry it Yourself: Create another Product named Chicken and print its name.",
    "tip": "Choose class names describing a domain concept instead of vague labels like Data1.",
    "hack": "Use new Product(...) to identify exactly where an instance is constructed.",
    "mistake": "A class declaration is not itself an instantiated Product.",
    "expected": "Liempo",
    "expectedOutput": "Liempo",
    "realUse": "Practice use: A product blueprint is a class; an actual Liempo record created with new is an instance.",
    "code": "public class Main {\n  static class Product {\n    String name;\n    Product(String name) { this.name = name; }\n  }\n  public static void main(String[] args) {\n    Product item = new Product(\"Liempo\");\n    System.out.println(item.name);\n  }\n}",
    "practice": {
      "prompt": "Create another Product named Chicken and print its name.",
      "check": "The second object prints Chicken, independently of the first."
    },
    "quiz": [
      {
        "question": "Which expression creates an instance?",
        "options": [
          "new Product(\"Liempo\")",
          "class Product alone",
          "Product.class only"
        ],
        "correctIndex": 0,
        "explanation": "new invokes the constructor and creates an instance."
      },
      {
        "question": "What is an object?",
        "options": [
          "An instance of a class",
          "A package declaration",
          "A primitive keyword"
        ],
        "correctIndex": 0,
        "explanation": "An object is a constructed instance."
      }
    ]
  },
  {
    "id": "java-review-primitives-wrappers",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "Foundation",
    "order": 13,
    "title": "Primitive types, wrappers, and autoboxing",
    "summary": "An int quantity works for arithmetic, while Integer can appear in generic collections.",
    "definition": "Primitive types hold fundamental values; wrapper types such as Integer are reference types that represent primitive values as objects.",
    "learn": [
      "Define primitive types, wrappers, and autoboxing",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply primitive types, wrappers, and autoboxing with safe Java 21 examples.",
    "explanation": "An int quantity works for arithmetic, while Integer can appear in generic collections.\n\nAutoboxing converts int to Integer automatically when needed, and unboxing goes the other way. Unboxing a null Integer throws NullPointerException. Not all wrappers are interchangeable with primitive arithmetic.\n\nTry it Yourself: Replace boxed with null and predict what happens when unboxing.",
    "tip": "Prefer primitives for ordinary required numeric data; choose wrappers when absence or generic APIs require them.",
    "hack": "The compiler often boxes and unboxes automatically, but read the nullable values carefully.",
    "mistake": "Integer value = null; int x = value; throws an exception during unboxing.",
    "expected": "true\n4",
    "expectedOutput": "true\n4",
    "realUse": "Practice use: An int quantity works for arithmetic, while Integer can appear in generic collections.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    int quantity = 3;\n    Integer boxed = quantity;\n    int again = boxed;\n    System.out.println(boxed.equals(3));\n    System.out.println(again + 1);\n  }\n}",
    "practice": {
      "prompt": "Replace boxed with null and predict what happens when unboxing.",
      "check": "A NullPointerException occurs at the unboxing assignment."
    },
    "quiz": [
      {
        "question": "Which is a wrapper?",
        "options": [
          "Integer",
          "int",
          "boolean"
        ],
        "correctIndex": 0,
        "explanation": "Integer is the reference wrapper for int."
      },
      {
        "question": "What happens when unboxing null Integer?",
        "options": [
          "NullPointerException",
          "0",
          "false"
        ],
        "correctIndex": 0,
        "explanation": "There is no numeric primitive inside null."
      }
    ]
  },
  {
    "id": "java-review-references-null",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "Foundation",
    "order": 17,
    "title": "Reference types and null safety",
    "summary": "A missing customer assignment should be represented explicitly instead of pretending an empty name is a real customer.",
    "definition": "A reference variable may refer to an object; null means it currently refers to no object.",
    "learn": [
      "Define reference types and null safety",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply reference types and null safety with safe Java 21 examples.",
    "explanation": "A missing customer assignment should be represented explicitly instead of pretending an empty name is a real customer.\n\nDereferencing null by calling instance members normally throws NullPointerException. Java references are not raw addresses you manipulate like C pointers. Check absence or design APIs that avoid nullable values.\n\nTry it Yourself: Assign customer = \"Juan\" and run again.",
    "tip": "Use a clear absent-state policy; consider Optional for suitable method return values.",
    "hack": "Make null checks close to code that truly handles absence.",
    "mistake": "Calling customer.toUpperCase() when customer is null throws NullPointerException.",
    "expected": "Unassigned",
    "expectedOutput": "Unassigned",
    "realUse": "Practice use: A missing customer assignment should be represented explicitly instead of pretending an empty name is a real customer.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    String customer = null;\n    System.out.println(customer == null ? \"Unassigned\" : customer.toUpperCase());\n  }\n}",
    "practice": {
      "prompt": "Assign customer = \"Juan\" and run again.",
      "check": "The output becomes JUAN."
    },
    "quiz": [
      {
        "question": "What does null mean?",
        "options": [
          "No object reference",
          "Zero integer",
          "An empty object already created"
        ],
        "correctIndex": 0,
        "explanation": "null is the absence of an object reference."
      },
      {
        "question": "What can dereferencing null cause?",
        "options": [
          "NullPointerException",
          "IOException always",
          "Valid empty text"
        ],
        "correctIndex": 0,
        "explanation": "Accessing members through null is invalid."
      }
    ]
  },
  {
    "id": "java-review-widening-narrowing",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "Foundation",
    "order": 19,
    "title": "Widening and narrowing: precision can change",
    "summary": "A numeric type conversion must not silently change an important inventory count or identifier.",
    "definition": "Widening primitive conversion usually happens implicitly; narrowing typically requires a cast and can discard or change information.",
    "learn": [
      "Define widening and narrowing: precision can change",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply widening and narrowing: precision can change with safe Java 21 examples.",
    "explanation": "A numeric type conversion must not silently change an important inventory count or identifier.\n\nWidening is NOT universally lossless: long to double may lose integer precision beyond 2^53. Narrowing double to int truncates toward zero (within representable bounds). Choose conversion rules deliberately.\n\nTry it Yourself: Change kg from 3.9 to 5.7 and observe narrowing.",
    "tip": "Avoid lossy numeric conversion in money, identifiers, and physical stock totals.",
    "hack": "Explicit conversion plus range checks make precision expectations reviewable.",
    "mistake": "Not every automatic widening conversion preserves all possible values exactly.",
    "expected": "false\n3",
    "expectedOutput": "false\n3",
    "realUse": "Practice use: A numeric type conversion must not silently change an important inventory count or identifier.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    long original = 9007199254740993L;\n    double widened = original;\n    double kg = 3.9;\n    int boxes = (int) kg;\n    System.out.println((long) widened == original);\n    System.out.println(boxes);\n  }\n}",
    "practice": {
      "prompt": "Change kg from 3.9 to 5.7 and observe narrowing.",
      "check": "The cast result is 5, not 6."
    },
    "quiz": [
      {
        "question": "Can widening long to double lose precision?",
        "options": [
          "Yes",
          "Never",
          "Only for negative numbers"
        ],
        "correctIndex": 0,
        "explanation": "A double cannot exactly represent all long values."
      },
      {
        "question": "What does (int) 3.9 produce?",
        "options": [
          "3",
          "4",
          "Compile error"
        ],
        "correctIndex": 0,
        "explanation": "The fractional portion is discarded."
      }
    ]
  },
  {
    "id": "java-review-naming",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "Foundation",
    "order": 26,
    "title": "Java naming conventions: readable code",
    "summary": "A professional codebase should be easy to navigate without guessing what each name means.",
    "definition": "Java conventions commonly use UpperCamelCase for types, lowerCamelCase for fields/methods, and UPPER_SNAKE_CASE for constants.",
    "learn": [
      "Define java naming conventions: readable code",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply java naming conventions: readable code with safe Java 21 examples.",
    "explanation": "A professional codebase should be easy to navigate without guessing what each name means.\n\nClass and interface names commonly begin uppercase. Method and variable names begin lowercase. Package names are conventionally all lowercase, often using dot-separated domains; snake_case is not the normal class naming style. These conventions are guidelines, not language parsing restrictions.\n\nTry it Yourself: Rename currentStock() consistently to availableStock().",
    "tip": "A consistent convention reduces review time more than arbitrary abbreviation.",
    "hack": "Rename variables by purpose, not by changing only their capitalization.",
    "mistake": "snake_case is not Java's usual method or class style.",
    "expected": "10",
    "expectedOutput": "10",
    "realUse": "Practice use: A professional codebase should be easy to navigate without guessing what each name means.",
    "code": "public class Main {\n  static final int MAX_STOCK = 10;\n  static class ProductRecord {\n    int currentStock() { return MAX_STOCK; }\n  }\n  public static void main(String[] args) {\n    ProductRecord product = new ProductRecord();\n    System.out.println(product.currentStock());\n  }\n}",
    "practice": {
      "prompt": "Rename currentStock() consistently to availableStock().",
      "check": "Update both declaration and call; the output remains 10."
    },
    "quiz": [
      {
        "question": "Which is the conventional Java class style?",
        "options": [
          "ProductRecord",
          "productRecord",
          "PRODUCT_RECORD"
        ],
        "correctIndex": 0,
        "explanation": "Class names conventionally use UpperCamelCase."
      },
      {
        "question": "Which is a typical constant?",
        "options": [
          "MAX_STOCK",
          "maxStock",
          "MaxStock"
        ],
        "correctIndex": 0,
        "explanation": "Constants commonly use uppercase words with underscores."
      }
    ]
  },
  {
    "id": "java-review-constructors",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "OOP Foundations",
    "order": 4,
    "title": "Constructors: implicit default vs explicit no-arg",
    "summary": "A product may need a valid initial label rather than allowing an uninitialized state.",
    "definition": "A constructor initializes a new object. If a class declares no constructors, the compiler supplies a default constructor; a programmer-written zero-parameter constructor is a no-arg constructor.",
    "learn": [
      "Define constructors: implicit default vs explicit no-arg",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply constructors: implicit default vs explicit no-arg with safe Java 21 examples.",
    "explanation": "A product may need a valid initial label rather than allowing an uninitialized state.\n\nConstructors match the class name and have no return type. A parameterized constructor takes initial values. A default constructor is automatically generated only when no constructor is declared; default and user-defined no-arg are not identical concepts.\n\nTry it Yourself: Change Unknown to Unnamed Product and re-run.",
    "tip": "Keep validation inside constructors where creating an invalid object should be impossible.",
    "hack": "Delegate from a no-arg constructor using this(...) to avoid duplicate initialization.",
    "mistake": "Once you declare a parameterized constructor, Java does not automatically add a no-arg constructor.",
    "expected": "Unknown\nFish",
    "expectedOutput": "Unknown\nFish",
    "realUse": "Practice use: A product may need a valid initial label rather than allowing an uninitialized state.",
    "code": "public class Main {\n  static class Item {\n    final String name;\n    Item() { this(\"Unknown\"); }\n    Item(String name) { this.name = name; }\n  }\n  public static void main(String[] args) {\n    System.out.println(new Item().name);\n    System.out.println(new Item(\"Fish\").name);\n  }\n}",
    "practice": {
      "prompt": "Change Unknown to Unnamed Product and re-run.",
      "check": "The first line changes; the second stays Fish."
    },
    "quiz": [
      {
        "question": "When is a compiler-generated default constructor added?",
        "options": [
          "When no constructor is declared",
          "Always",
          "Only for records"
        ],
        "correctIndex": 0,
        "explanation": "The compiler supplies one if the class declares none."
      },
      {
        "question": "What is Item() here?",
        "options": [
          "An explicitly written no-arg constructor",
          "A compiler default constructor",
          "A method returning void"
        ],
        "correctIndex": 0,
        "explanation": "It was written by the programmer."
      }
    ]
  },
  {
    "id": "java-review-method-signatures",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "Foundation",
    "order": 37,
    "title": "Methods: parameters, arguments, return types and void",
    "summary": "A pricing method should return a number; a logging method may instead return void.",
    "definition": "A method has a name and parameter list; parameters are variables declared in the method, while arguments are actual values supplied by the caller.",
    "learn": [
      "Define methods: parameters, arguments, return types and void",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply methods: parameters, arguments, return types and void with safe Java 21 examples.",
    "explanation": "A pricing method should return a number; a logging method may instead return void.\n\nThe return type states the type returned by a method; void means no value is returned. Java methods belong to classes or interfaces, unlike languages that commonly allow standalone top-level functions.\n\nTry it Yourself: Change qty argument to 3 and predict the new total.",
    "tip": "Use explicit method names and define accepted argument rules.",
    "hack": "Separate computation (return value) from printing/display.",
    "mistake": "Printing a value does not make a void method return it.",
    "expected": "Chicken\n180",
    "expectedOutput": "Chicken\n180",
    "realUse": "Practice use: A pricing method should return a number; a logging method may instead return void.",
    "code": "public class Main {\n  static int total(int price, int qty) { return price * qty; }\n  static void printLabel(String name) { System.out.println(name); }\n  public static void main(String[] args) {\n    printLabel(\"Chicken\");\n    System.out.println(total(90, 2));\n  }\n}",
    "practice": {
      "prompt": "Change qty argument to 3 and predict the new total.",
      "check": "The second line becomes 270."
    },
    "quiz": [
      {
        "question": "In total(int price,int qty), what is qty?",
        "options": [
          "Parameter",
          "Argument in the call",
          "Object name only"
        ],
        "correctIndex": 0,
        "explanation": "It is a placeholder declared by the method."
      },
      {
        "question": "In total(90,2), what is 2?",
        "options": [
          "Argument",
          "Return type",
          "Class"
        ],
        "correctIndex": 0,
        "explanation": "It is the actual supplied value."
      }
    ]
  },
  {
    "id": "java-review-this-super",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "OOP Foundations",
    "order": 35,
    "title": "this and super: current object vs parent",
    "summary": "A child product type can initialize common fields through a parent constructor, while its own method uses this.",
    "definition": "this refers to the current instance; super accesses accessible superclass behavior or calls a superclass constructor.",
    "learn": [
      "Define this and super: current object vs parent",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply this and super: current object vs parent with safe Java 21 examples.",
    "explanation": "A child product type can initialize common fields through a parent constructor, while its own method uses this.\n\nthis.name disambiguates an instance field from a same-named parameter. super(...) must be the first statement in a traditional subclass constructor. Java does not support extending several concrete classes.\n\nTry it Yourself: Change the Premium prefix to Select.",
    "tip": "Use super only where inheritance genuinely expresses an is-a relationship.",
    "hack": "@Override helps catch accidental signature mistakes.",
    "mistake": "Trying to read this before superclass initialization in a subclass constructor is invalid.",
    "expected": "Premium Beef",
    "expectedOutput": "Premium Beef",
    "realUse": "Practice use: A child product type can initialize common fields through a parent constructor, while its own method uses this.",
    "code": "public class Main {\n  static class Product {\n    final String name;\n    Product(String name) { this.name = name; }\n    String label() { return name; }\n  }\n  static class Premium extends Product {\n    Premium(String name) { super(name); }\n    @Override String label() { return \"Premium \" + super.label(); }\n  }\n  public static void main(String[] args) {\n    System.out.println(new Premium(\"Beef\").label());\n  }\n}",
    "practice": {
      "prompt": "Change the Premium prefix to Select.",
      "check": "The output becomes Select Beef."
    },
    "quiz": [
      {
        "question": "What does this.name access?",
        "options": [
          "Current object's field",
          "Parent class only",
          "Static method"
        ],
        "correctIndex": 0,
        "explanation": "this refers to the current instance."
      },
      {
        "question": "What does super.label() access?",
        "options": [
          "Superclass implementation",
          "Database view",
          "Unrelated class"
        ],
        "correctIndex": 0,
        "explanation": "super refers to inherited superclass behavior."
      }
    ]
  },
  {
    "id": "java-review-modifiers",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "OOP Foundations",
    "order": 40,
    "title": "Access modifiers: public, private, package-private, protected",
    "summary": "An inventory class should prevent other code from writing directly to sensitive stock state.",
    "definition": "Java member access can be public, private, package-private (no modifier), or protected, each with different visibility rules.",
    "learn": [
      "Define access modifiers: public, private, package-private, protected",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply access modifiers: public, private, package-private, protected with safe Java 21 examples.",
    "explanation": "An inventory class should prevent other code from writing directly to sensitive stock state.\n\npublic: broadly accessible subject to enclosing/module visibility. private: within the declaring top-level nest. package-private: same package. protected: same package plus permitted subclass access across packages, with extra receiver constraints. These details matter when designing reusable APIs.\n\nTry it Yourself: Add a public boolean available() method that returns stock > 0.",
    "tip": "Use the least visibility needed by an API, especially for mutable business state.",
    "hack": "Expose behaviors and read-only views instead of public mutable fields.",
    "mistake": "protected is not equivalent to unrestricted access by every class in a subclass's package.",
    "expected": "4",
    "expectedOutput": "4",
    "realUse": "Practice use: An inventory class should prevent other code from writing directly to sensitive stock state.",
    "code": "public class Main {\n  static class Product {\n    private int stock = 4;\n    public int stock() { return stock; }\n  }\n  public static void main(String[] args) {\n    Product product = new Product();\n    System.out.println(product.stock());\n  }\n}",
    "practice": {
      "prompt": "Add a public boolean available() method that returns stock > 0.",
      "check": "The method returns true without exposing direct mutation."
    },
    "quiz": [
      {
        "question": "What access modifier is the narrowest for ordinary members?",
        "options": [
          "private",
          "public",
          "protected"
        ],
        "correctIndex": 0,
        "explanation": "private minimizes external access."
      },
      {
        "question": "What is package-private?",
        "options": [
          "No explicit access modifier",
          "public",
          "final"
        ],
        "correctIndex": 0,
        "explanation": "Default member visibility applies within the package."
      }
    ]
  },
  {
    "id": "java-review-inheritance-types",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "OOP Advanced",
    "order": 5,
    "title": "Java inheritance types and interface limitations",
    "summary": "A class hierarchy should clarify behavior and avoid fragile multiple-class inheritance assumptions.",
    "definition": "A Java class can extend one superclass but implement multiple interfaces; inheritance shapes include single, multilevel, hierarchical, and interface-based combinations.",
    "learn": [
      "Define java inheritance types and interface limitations",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply java inheritance types and interface limitations with safe Java 21 examples.",
    "explanation": "A class hierarchy should clarify behavior and avoid fragile multiple-class inheritance assumptions.\n\nSingle: A→B, multilevel: A→B→C, hierarchical: A→B and A→D. Java forbids extending two classes simultaneously. Implementing multiple interfaces supplies multiple contracts, but it is not multiple concrete class inheritance; hybrid arrangements combine the supported structures.\n\nTry it Yourself: Add a third small interface with one method and implement it in Premium.",
    "tip": "Favor small interface contracts and composition over deep, fragile inheritance trees.",
    "hack": "Model capabilities using interfaces rather than forcing unrelated types into a class hierarchy.",
    "mistake": "Java classes cannot extend two separate classes.",
    "expected": "Label / Stock",
    "expectedOutput": "Label / Stock",
    "realUse": "Practice use: A class hierarchy should clarify behavior and avoid fragile multiple-class inheritance assumptions.",
    "code": "public class Main {\n  interface Printable { String print(); }\n  interface Trackable { String track(); }\n  static class Product {}\n  static class Premium extends Product implements Printable, Trackable {\n    public String print() { return \"Label\"; }\n    public String track() { return \"Stock\"; }\n  }\n  public static void main(String[] args) {\n    Premium item = new Premium();\n    System.out.println(item.print() + \" / \" + item.track());\n  }\n}",
    "practice": {
      "prompt": "Add a third small interface with one method and implement it in Premium.",
      "check": "The code compiles without extending another class."
    },
    "quiz": [
      {
        "question": "Can a Java class extend two concrete classes?",
        "options": [
          "No",
          "Yes",
          "Only in Java 21"
        ],
        "correctIndex": 0,
        "explanation": "Java has single class inheritance."
      },
      {
        "question": "Can a class implement multiple interfaces?",
        "options": [
          "Yes",
          "No",
          "Only one"
        ],
        "correctIndex": 0,
        "explanation": "Multiple interfaces are supported."
      }
    ]
  },
  {
    "id": "java-review-modern-interface",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "OOP Advanced",
    "order": 15,
    "title": "Interfaces in modern Java: abstract, default, static, private",
    "summary": "A notification capability can define required behavior while sharing small safe formatting methods.",
    "definition": "An interface specifies a type contract and can contain abstract methods, default methods, static methods, private helper methods, constants and nested types.",
    "learn": [
      "Define interfaces in modern java: abstract, default, static, private",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply interfaces in modern java: abstract, default, static, private with safe Java 21 examples.",
    "explanation": "A notification capability can define required behavior while sharing small safe formatting methods.\n\nThe statement 'interface = method declaration only' describes a limited historical view. Modern Java interfaces can have method bodies for default, static and private methods. Classes may implement many interfaces; interfaces may extend multiple interfaces.\n\nTry it Yourself: Change the default label prefix to Alert.",
    "tip": "Keep an interface focused on a meaningful contract rather than putting every unrelated helper into it.",
    "hack": "Default methods can evolve some interfaces without changing every implementation.",
    "mistake": "Not all interface methods are abstract; private/default/static methods may contain implementations.",
    "expected": "Message: Ready\nJava",
    "expectedOutput": "Message: Ready\nJava",
    "realUse": "Practice use: A notification capability can define required behavior while sharing small safe formatting methods.",
    "code": "public class Main {\n  interface Message {\n    String content();\n    default String label() { return wrap(content()); }\n    private String wrap(String text) { return \"Message: \" + text; }\n    static String kind() { return \"Java\"; }\n  }\n  static class Alert implements Message {\n    public String content() { return \"Ready\"; }\n  }\n  public static void main(String[] args) {\n    System.out.println(new Alert().label());\n    System.out.println(Message.kind());\n  }\n}",
    "practice": {
      "prompt": "Change the default label prefix to Alert.",
      "check": "The first line becomes Alert: Ready."
    },
    "quiz": [
      {
        "question": "Can modern Java interfaces define a default method body?",
        "options": [
          "Yes",
          "No",
          "Only abstract classes can"
        ],
        "correctIndex": 0,
        "explanation": "Java supports default method implementations in interfaces."
      },
      {
        "question": "Can one class implement more than one interface?",
        "options": [
          "Yes",
          "No",
          "Only via multiple superclass extends"
        ],
        "correctIndex": 0,
        "explanation": "Java permits multiple interface implementations."
      }
    ]
  },
  {
    "id": "java-review-exception-tree",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Exceptions & IO",
    "order": 2,
    "title": "Throwable hierarchy: Exception vs Error",
    "summary": "A reviewer must know which failures are expected application exceptions and which indicate serious runtime problems.",
    "definition": "java.lang.Throwable is the parent of Exception and Error; RuntimeException is a subclass of Exception.",
    "learn": [
      "Define throwable hierarchy: exception vs error",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply throwable hierarchy: exception vs error with safe Java 21 examples.",
    "explanation": "A reviewer must know which failures are expected application exceptions and which indicate serious runtime problems.\n\nHierarchy: Object → Throwable → Exception → RuntimeException; separately Throwable → Error. Error is not a child of Exception. Checked exceptions are subclasses of Exception excluding RuntimeException and its subclasses; both RuntimeException and Error families are unchecked.\n\nTry it Yourself: Test RuntimeException.class.getSuperclass().getSimpleName().",
    "tip": "Catch errors at boundaries where recovery is meaningful; don't swallow broad Throwable.",
    "hack": "Draw the class hierarchy before answering checked/unchecked questions.",
    "mistake": "Exception is not the superclass of Error; Throwable is their common root.",
    "expected": "true\ntrue\nfalse",
    "expectedOutput": "true\ntrue\nfalse",
    "realUse": "Practice use: A reviewer must know which failures are expected application exceptions and which indicate serious runtime problems.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(Throwable.class.isAssignableFrom(Exception.class));\n    System.out.println(Throwable.class.isAssignableFrom(Error.class));\n    System.out.println(Exception.class.isAssignableFrom(Error.class));\n  }\n}",
    "practice": {
      "prompt": "Test RuntimeException.class.getSuperclass().getSimpleName().",
      "check": "The direct superclass is Exception."
    },
    "quiz": [
      {
        "question": "Which is the shared root for Exception and Error?",
        "options": [
          "Throwable",
          "Exception",
          "RuntimeException"
        ],
        "correctIndex": 0,
        "explanation": "Throwable has both branches."
      },
      {
        "question": "Is Error a subclass of Exception?",
        "options": [
          "No",
          "Yes",
          "Only during compilation"
        ],
        "correctIndex": 0,
        "explanation": "Error and Exception are separate branches of Throwable."
      }
    ]
  },
  {
    "id": "java-review-checked",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Exceptions & IO",
    "order": 5,
    "title": "Checked exceptions: catch or declare",
    "summary": "File and database operations can fail for reasons outside the application logic, such as missing files or unavailable connections.",
    "definition": "A checked exception must be handled with catch or declared using throws if it can escape a method.",
    "learn": [
      "Define checked exceptions: catch or declare",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply checked exceptions: catch or declare with safe Java 21 examples.",
    "explanation": "File and database operations can fail for reasons outside the application logic, such as missing files or unavailable connections.\n\nIOException and SQLException are common checked exceptions. 'Compile-time exception' means the compiler enforces catch-or-declare, NOT that the exception necessarily occurs during compilation. The actual exception is thrown during execution.\n\nTry it Yourself: Pass false to read and observe the normal path.",
    "tip": "Handle failures at a layer that knows what to do next; otherwise declare the checked exception.",
    "hack": "Use specific checked exception types to communicate an API's possible failures.",
    "mistake": "Checked exceptions do not necessarily happen at compile time; their handling requirements are verified then.",
    "expected": "Handled: File unavailable",
    "expectedOutput": "Handled: File unavailable",
    "realUse": "Practice use: File and database operations can fail for reasons outside the application logic, such as missing files or unavailable connections.",
    "code": "import java.io.IOException;\npublic class Main {\n  static void read(boolean missing) throws IOException {\n    if (missing) throw new IOException(\"File unavailable\");\n  }\n  public static void main(String[] args) {\n    try {\n      read(true);\n    } catch (IOException error) {\n      System.out.println(\"Handled: \" + error.getMessage());\n    }\n  }\n}",
    "practice": {
      "prompt": "Pass false to read and observe the normal path.",
      "check": "No exception is thrown or printed."
    },
    "quiz": [
      {
        "question": "When is IOException typically thrown?",
        "options": [
          "Runtime",
          "During compilation only",
          "Never"
        ],
        "correctIndex": 0,
        "explanation": "The compiler enforces handling, but errors occur while the program runs."
      },
      {
        "question": "What does throws IOException mean?",
        "options": [
          "The method may propagate the exception",
          "It catches every exception automatically",
          "It prints a message"
        ],
        "correctIndex": 0,
        "explanation": "throws declares the possible checked exception to callers."
      }
    ]
  },
  {
    "id": "java-review-unchecked",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Exceptions & IO",
    "order": 7,
    "title": "Unchecked exceptions: RuntimeException and Error",
    "summary": "An invalid quantity should produce a clear programming-level signal rather than silently corrupting stock.",
    "definition": "Unchecked throwables include RuntimeException and its subclasses, plus Error and its subclasses; they do not require catch-or-declare.",
    "learn": [
      "Define unchecked exceptions: runtimeexception and error",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply unchecked exceptions: runtimeexception and error with safe Java 21 examples.",
    "explanation": "An invalid quantity should produce a clear programming-level signal rather than silently corrupting stock.\n\nIllegalArgumentException and NullPointerException are unchecked RuntimeExceptions. An Error such as OutOfMemoryError is also unchecked and often represents a serious problem from which ordinary code cannot safely recover. Handling is possible in Java but not always advisable.\n\nTry it Yourself: Pass positive(3) and observe the success path.",
    "tip": "Fix programming bugs at the source instead of catching and ignoring them.",
    "hack": "Use an unchecked validation exception for programmer misuse of a method's contract when appropriate.",
    "mistake": "An unchecked exception is still a runtime failure—not a guaranteed harmless warning.",
    "expected": "Invalid: quantity",
    "expectedOutput": "Invalid: quantity",
    "realUse": "Practice use: An invalid quantity should produce a clear programming-level signal rather than silently corrupting stock.",
    "code": "public class Main {\n  static int positive(int value) {\n    if (value <= 0) throw new IllegalArgumentException(\"quantity\");\n    return value;\n  }\n  public static void main(String[] args) {\n    try { System.out.println(positive(0)); }\n    catch (IllegalArgumentException error) {\n      System.out.println(\"Invalid: \" + error.getMessage());\n    }\n  }\n}",
    "practice": {
      "prompt": "Pass positive(3) and observe the success path.",
      "check": "The code prints 3."
    },
    "quiz": [
      {
        "question": "Is RuntimeException checked?",
        "options": [
          "No",
          "Yes",
          "Only when thrown by SQL"
        ],
        "correctIndex": 0,
        "explanation": "RuntimeException is an unchecked family."
      },
      {
        "question": "Is Error generally handled like ordinary input validation?",
        "options": [
          "No",
          "Yes",
          "Always"
        ],
        "correctIndex": 0,
        "explanation": "Errors often indicate severe conditions and ordinary application recovery may be unsafe."
      }
    ]
  },
  {
    "id": "java-review-try-catch-finally",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Exceptions & IO",
    "order": 12,
    "title": "try, catch, finally and specific handlers",
    "summary": "An order calculation may reject bad input but should still perform essential non-resource cleanup.",
    "definition": "try contains code that may fail, catch handles compatible exceptions, and finally normally runs for cleanup whether a matching exception occurs or not.",
    "learn": [
      "Define try, catch, finally and specific handlers",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply try, catch, finally and specific handlers with safe Java 21 examples.",
    "explanation": "An order calculation may reject bad input but should still perform essential non-resource cleanup.\n\nCatch more specific exceptions before general ones. finally normally runs on normal or exceptional exit, but not in every catastrophic situation (for example process termination). Prefer try-with-resources to close AutoCloseable resources.\n\nTry it Yourself: Remove the throw statement and print Valid in try.",
    "tip": "Catch at an appropriate layer and preserve the original cause for debugging.",
    "hack": "Use try-with-resources for closeable handles instead of lengthy manual finally-close code.",
    "mistake": "Catching Exception before a more specific subclass handler makes that later catch unreachable.",
    "expected": "Handled: invalid quantity\nFinished block",
    "expectedOutput": "Handled: invalid quantity\nFinished block",
    "realUse": "Practice use: An order calculation may reject bad input but should still perform essential non-resource cleanup.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    try {\n      throw new IllegalArgumentException(\"invalid quantity\");\n    } catch (IllegalArgumentException error) {\n      System.out.println(\"Handled: \" + error.getMessage());\n    } finally {\n      System.out.println(\"Finished block\");\n    }\n  }\n}",
    "practice": {
      "prompt": "Remove the throw statement and print Valid in try.",
      "check": "Valid appears, followed by Finished block."
    },
    "quiz": [
      {
        "question": "Which catch must come first?",
        "options": [
          "More specific exception type",
          "Exception before subclasses",
          "Order never matters"
        ],
        "correctIndex": 0,
        "explanation": "The most specific handler should come before broader ones."
      },
      {
        "question": "Does finally always run even after JVM process termination?",
        "options": [
          "No",
          "Yes",
          "Only for checked exceptions"
        ],
        "correctIndex": 0,
        "explanation": "Normal control flow ensures finally, but process termination can prevent it."
      }
    ]
  },
  {
    "id": "java-review-autocloseable",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Exceptions & IO",
    "order": 22,
    "title": "AutoCloseable and deterministic try-with-resources",
    "summary": "Open database statements, readers, and other handles should release resources reliably after use.",
    "definition": "AutoCloseable defines close(); a try-with-resources statement invokes it when leaving the resource scope.",
    "learn": [
      "Define autocloseable and deterministic try-with-resources",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply autocloseable and deterministic try-with-resources with safe Java 21 examples.",
    "explanation": "Open database statements, readers, and other handles should release resources reliably after use.\n\nResources in a try(...) header are closed in reverse declaration order on normal and exceptional exit. AutoCloseable manages cleanup deterministically, helping prevent exhausted handles/connections. It does not guarantee that every resource is a memory leak or locked for every other user.\n\nTry it Yourself: Make work() throw RuntimeException and observe whether close() runs.",
    "tip": "Use try-with-resources on each successfully opened resource that you own and must close.",
    "hack": "A custom resource can implement AutoCloseable to join Java's standard cleanup pattern.",
    "mistake": "AutoCloseable is not a garbage collector; close() releases the resource by its implementation.",
    "expected": "Using resource\nClosed resource\nAfter block",
    "expectedOutput": "Using resource\nClosed resource\nAfter block",
    "realUse": "Practice use: Open database statements, readers, and other handles should release resources reliably after use.",
    "code": "public class Main {\n  static class Handle implements AutoCloseable {\n    void work() { System.out.println(\"Using resource\"); }\n    @Override public void close() { System.out.println(\"Closed resource\"); }\n  }\n  public static void main(String[] args) {\n    try (Handle handle = new Handle()) { handle.work(); }\n    System.out.println(\"After block\");\n  }\n}",
    "practice": {
      "prompt": "Make work() throw RuntimeException and observe whether close() runs.",
      "check": "Closed resource still prints before exception propagation."
    },
    "quiz": [
      {
        "question": "Which interface enables try-with-resources?",
        "options": [
          "AutoCloseable",
          "Runnable",
          "Serializable only"
        ],
        "correctIndex": 0,
        "explanation": "The resource must implement AutoCloseable."
      },
      {
        "question": "When does close run?",
        "options": [
          "On exiting the try-with-resources scope",
          "Only at garbage collection",
          "Only when you explicitly call it"
        ],
        "correctIndex": 0,
        "explanation": "Java invokes close during structured cleanup."
      }
    ]
  },
  {
    "id": "java-review-suppressed",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Exceptions & IO",
    "order": 25,
    "title": "Suppressed exceptions during resource close",
    "summary": "A database error can occur during execution and another error during statement cleanup; preserving both helps diagnose the incident.",
    "definition": "When both the try body and resource close throw, Java preserves the body exception and attaches close failures as suppressed exceptions.",
    "learn": [
      "Define suppressed exceptions during resource close",
      "Explain where the concept applies",
      "Read Java 21 code and predict verified output",
      "Modify the code according to the practice challenge"
    ],
    "objective": "Explain and apply suppressed exceptions during resource close with safe Java 21 examples.",
    "explanation": "A database error can occur during execution and another error during statement cleanup; preserving both helps diagnose the incident.\n\ngetSuppressed() retrieves cleanup exceptions attached to the primary exception. This differs from older finally-close patterns that can accidentally mask an original failure.\n\nTry it Yourself: Change close failure message and verify it remains suppressed.",
    "tip": "Inspect suppressed exceptions when diagnosing cleanup failures.",
    "hack": "try-with-resources keeps the original body failure primary.",
    "mistake": "A close failure does not always replace the original exception in try-with-resources.",
    "expected": "work failure\nclose failure",
    "expectedOutput": "work failure\nclose failure",
    "realUse": "Practice use: A database error can occur during execution and another error during statement cleanup; preserving both helps diagnose the incident.",
    "code": "public class Main {\n  static class Resource implements AutoCloseable {\n    @Override public void close() { throw new IllegalStateException(\"close failure\"); }\n  }\n  public static void main(String[] args) {\n    try (Resource r = new Resource()) {\n      throw new IllegalArgumentException(\"work failure\");\n    } catch (IllegalArgumentException error) {\n      System.out.println(error.getMessage());\n      System.out.println(error.getSuppressed()[0].getMessage());\n    }\n  }\n}",
    "practice": {
      "prompt": "Change close failure message and verify it remains suppressed.",
      "check": "The primary work failure stays first; the new close message is second."
    },
    "quiz": [
      {
        "question": "What is the primary exception in this example?",
        "options": [
          "work failure",
          "close failure",
          "No exception"
        ],
        "correctIndex": 0,
        "explanation": "The try body fails first, and cleanup becomes suppressed."
      },
      {
        "question": "Which method reads suppressed exceptions?",
        "options": [
          "getSuppressed()",
          "getMessageOnly()",
          "close()"
        ],
        "correctIndex": 0,
        "explanation": "Throwable.getSuppressed returns attached failures."
      }
    ]
  }
];
const seen=new Set(data.lessons.map(l=>l.id));for(const l of additions){if(!seen.has(l.id)){data.lessons.push(l);seen.add(l.id);}}
})();
