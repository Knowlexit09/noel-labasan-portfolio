(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons||!data.categories)return;
const additions=[
  {
    "id": "java-static-final",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Foundation",
    "order": 25,
    "title": "static, final, and named constants",
    "summary": "A delivery fee shared by every order should be described in one clear constant, not copied across methods.",
    "definition": "static fields belong to a class; final prevents reassignment after initialization.",
    "learn": [
      "Distinguish instance and static fields",
      "Define named constants",
      "Understand final versus deep immutability"
    ],
    "objective": "Understand static, final, and named constants and reproduce its Java 21 output.",
    "explanation": "A delivery fee shared by every order should be described in one clear constant, not copied across methods.\n\nstatic final constants represent values that should not be reassigned. Use uppercase names by convention; final on an object reference does not make the referenced object deeply immutable.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Change DELIVERY_FEE to 60 and predict the total.",
    "tip": "Prefer named business rules to unexplained numeric literals.",
    "hack": "Use static final for shared compile-time constants with clear names.",
    "mistake": "final stops reference reassignment, not every internal mutation of an object.",
    "expected": "290",
    "expectedOutput": "290",
    "realUse": "Tax settings, defaults, and application constants.",
    "code": "public class Main {\n static final int DELIVERY_FEE = 40;\n public static void main(String[] args) {\n  int subtotal=250;\n  System.out.println(subtotal + DELIVERY_FEE);\n }\n}",
    "practice": {
      "prompt": "Change DELIVERY_FEE to 60 and predict the total.",
      "check": "The output becomes 310."
    },
    "quiz": [
      {
        "question": "What does static mean for this constant?",
        "options": [
          "It belongs to the class",
          "It is only local",
          "It is a CSS selector"
        ],
        "correctIndex": 0,
        "explanation": "A static field belongs to its class, not an individual instance."
      },
      {
        "question": "Does final deeply freeze an object?",
        "options": [
          "No",
          "Yes",
          "Only for strings"
        ],
        "correctIndex": 0,
        "explanation": "final prevents reassignment of the reference."
      }
    ]
  },
  {
    "id": "java-string-formatting",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Strings & Arrays",
    "order": 50,
    "title": "String.format and readable output",
    "summary": "A report needs consistent columns without repeated manual string concatenation.",
    "definition": "String.format creates text from a format string and typed arguments.",
    "learn": [
      "Recognize common format specifiers",
      "Format text and integers",
      "Keep formatting separate from calculations"
    ],
    "objective": "Understand string.format and readable output and reproduce its Java 21 output.",
    "explanation": "A report needs consistent columns without repeated manual string concatenation.\n\nFormat specifiers such as %s for text and %d for integers identify the expected argument shape. Formatting is a presentation concern, not a calculation rule.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Change the quantity to five.",
    "tip": "Validate data before formatting it for display.",
    "hack": "Use String.format when a reusable format is clearer than many + operators.",
    "mistake": "%d expects an integral numeric argument, not an arbitrary String.",
    "expected": "Chicken: 3 packs",
    "expectedOutput": "Chicken: 3 packs",
    "realUse": "Receipts and reports.",
    "code": "public class Main {\n public static void main(String[] args) {\n  System.out.println(String.format(\"%s: %d packs\", \"Chicken\", 3));\n }\n}",
    "practice": {
      "prompt": "Change the quantity to five.",
      "check": "It prints Chicken: 5 packs."
    },
    "quiz": [
      {
        "question": "Which specifier formats text?",
        "options": [
          "%s",
          "%d",
          "%f"
        ],
        "correctIndex": 0,
        "explanation": "%s formats values as strings."
      },
      {
        "question": "What does %d format?",
        "options": [
          "Integral numbers",
          "Dates automatically",
          "HTML"
        ],
        "correctIndex": 0,
        "explanation": "%d formats integral decimal values."
      }
    ]
  },
  {
    "id": "java-multidimensional-arrays",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Strings & Arrays",
    "order": 60,
    "title": "Two-dimensional arrays and nested loops",
    "summary": "A small grid of quantities can represent stock in two rows of storage.",
    "definition": "A two-dimensional Java array is an array whose entries are themselves arrays.",
    "learn": [
      "Read row/column indexing",
      "Iterate nested arrays",
      "Explain jagged arrays"
    ],
    "objective": "Understand two-dimensional arrays and nested loops and reproduce its Java 21 output.",
    "explanation": "A small grid of quantities can represent stock in two rows of storage.\n\nIndexing uses row and column positions. Java arrays can be jagged, so not every row must have equal length.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Replace 4 with 10.",
    "tip": "Use a named record or matrix helper when raw array positions become confusing.",
    "hack": "Enhanced for loops work for nested arrays when indices are unnecessary.",
    "mistake": "Do not assume every row of a Java 2D array has the same length.",
    "expected": "10",
    "expectedOutput": "10",
    "realUse": "Tables, grids, and algorithm practice.",
    "code": "public class Main {\n public static void main(String[] args) {\n  int[][] stock={{1,2},{3,4}};\n  int sum=0;\n  for(int[] row:stock) for(int quantity:row) sum+=quantity;\n  System.out.println(sum);\n }\n}",
    "practice": {
      "prompt": "Replace 4 with 10.",
      "check": "The sum becomes 16."
    },
    "quiz": [
      {
        "question": "What is stock[0][1]?",
        "options": [
          "2",
          "3",
          "1"
        ],
        "correctIndex": 0,
        "explanation": "First row index zero, second column index one."
      },
      {
        "question": "Are all Java array rows always equal in size?",
        "options": [
          "No",
          "Yes",
          "Only for int"
        ],
        "correctIndex": 0,
        "explanation": "A 2D array can contain jagged rows."
      }
    ]
  },
  {
    "id": "java-equals-hashcode",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Collections",
    "order": 40,
    "title": "equals() and hashCode() contracts",
    "summary": "Two product keys with the same identity fields should compare equal for lookup.",
    "definition": "equals defines logical equality; hashCode provides hash values used by hash-based collections.",
    "learn": [
      "Distinguish reference identity from logical equality",
      "Learn equals/hashCode requirements",
      "Use records as value keys"
    ],
    "objective": "Understand equals() and hashcode() contracts and reproduce its Java 21 output.",
    "explanation": "Two product keys with the same identity fields should compare equal for lookup.\n\nIf objects compare equal, their hash codes must match. Java records generate value-style equals and hashCode from their components, which is useful for small immutable keys.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Change b to P-2 and predict both lines.",
    "tip": "Choose stable identity fields that won't unexpectedly change while used as map keys.",
    "hack": "Records generate the equality contract for component values automatically.",
    "mistake": "Override equals without a consistent hashCode in ordinary classes.",
    "expected": "true\ntrue",
    "expectedOutput": "true\ntrue",
    "realUse": "HashMap keys, Sets, and deduplication.",
    "code": "public class Main {\n record Key(String productId) {}\n public static void main(String[] args) {\n  Key a=new Key(\"P-1\");\n  Key b=new Key(\"P-1\");\n  System.out.println(a.equals(b));\n  System.out.println(a.hashCode()==b.hashCode());\n }\n}",
    "practice": {
      "prompt": "Change b to P-2 and predict both lines.",
      "check": "equals becomes false; hash codes may or may not differ, so do not rely on a guaranteed mismatch."
    },
    "quiz": [
      {
        "question": "What must equal objects have?",
        "options": [
          "Equal hash codes",
          "Different hash codes",
          "Matching memory addresses"
        ],
        "correctIndex": 0,
        "explanation": "The equals/hashCode contract requires same hash for equal values."
      },
      {
        "question": "Do equal hash codes prove objects are equal?",
        "options": [
          "No",
          "Yes",
          "Always in Java 21"
        ],
        "correctIndex": 0,
        "explanation": "Hash collisions are possible."
      }
    ]
  },
  {
    "id": "java-set-deduplication",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Collections",
    "order": 50,
    "title": "Set for unique values",
    "summary": "A category picker should not show beef twice after importing duplicate labels.",
    "definition": "A Set holds no duplicate elements according to equality rules.",
    "learn": [
      "Use Set for unique entries",
      "Distinguish HashSet from LinkedHashSet order",
      "Understand equality-based deduplication"
    ],
    "objective": "Understand set for unique values and reproduce its Java 21 output.",
    "explanation": "A category picker should not show beef twice after importing duplicate labels.\n\nLinkedHashSet preserves insertion iteration order while preventing duplicates. HashSet does not promise that order.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Add uppercase Chicken.",
    "tip": "Normalize case first when values should be case-insensitive.",
    "hack": "Construct a LinkedHashSet from a list to keep only unique values in insertion order.",
    "mistake": "Set does not treat 'Chicken' and 'chicken' as the same String.",
    "expected": "[beef, chicken]",
    "expectedOutput": "[beef, chicken]",
    "realUse": "Category filters and import cleanup.",
    "code": "import java.util.LinkedHashSet;\nimport java.util.Set;\npublic class Main {\n public static void main(String[] args) {\n  Set<String> categories=new LinkedHashSet<>();\n  categories.add(\"beef\"); categories.add(\"chicken\"); categories.add(\"beef\");\n  System.out.println(categories);\n }\n}",
    "practice": {
      "prompt": "Add uppercase Chicken.",
      "check": "The Set now includes an additional case-distinct entry."
    },
    "quiz": [
      {
        "question": "What does Set enforce?",
        "options": [
          "No duplicate equal entries",
          "Sorted prices automatically",
          "Database uniqueness"
        ],
        "correctIndex": 0,
        "explanation": "Sets keep unique elements according to equality."
      },
      {
        "question": "Why LinkedHashSet here?",
        "options": [
          "Preserve insertion iteration order",
          "Always sort alphabetically",
          "Remove null automatically"
        ],
        "correctIndex": 0,
        "explanation": "LinkedHashSet remembers insertion order."
      }
    ]
  },
  {
    "id": "java-files-utf8",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Exceptions & IO",
    "order": 30,
    "title": "Read and write UTF-8 files safely",
    "summary": "A small export program should round-trip a product name and clean up its temporary test data.",
    "definition": "java.nio.file.Files offers APIs for writing and reading text with explicit character encodings.",
    "learn": [
      "Use Path and Files APIs",
      "Write/read UTF-8",
      "Clean up temporary files in finally"
    ],
    "objective": "Understand read and write utf-8 files safely and reproduce its Java 21 output.",
    "explanation": "A small export program should round-trip a product name and clean up its temporary test data.\n\nFiles.createTempFile gives a unique temporary location. Use try/finally to remove temporary files and UTF-8 explicitly for portable text. Production file paths and permissions need strict validation.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Change the file text to Chicken.",
    "tip": "Never assume user-supplied paths are safe; define permitted directories in real applications.",
    "hack": "try-with-resources is best for open streams; a finally block helps clean up a temporary path.",
    "mistake": "Avoid hard-coded platform-dependent paths and unspecified character encodings.",
    "expected": "Fish Fillet",
    "expectedOutput": "Fish Fillet",
    "realUse": "Import/export tools, logs, and business file processing.",
    "code": "import java.nio.file.*;\nimport java.nio.charset.StandardCharsets;\npublic class Main {\n public static void main(String[] args) throws Exception {\n  Path file=Files.createTempFile(\"kl-java-\", \".txt\");\n  try {\n   Files.writeString(file,\"Fish Fillet\",StandardCharsets.UTF_8);\n   System.out.println(Files.readString(file,StandardCharsets.UTF_8));\n  } finally { Files.deleteIfExists(file); }\n }\n}",
    "practice": {
      "prompt": "Change the file text to Chicken.",
      "check": "The read-back output becomes Chicken and the temporary file is still removed."
    },
    "quiz": [
      {
        "question": "Why explicitly use UTF-8?",
        "options": [
          "Predictable text encoding",
          "Faster Java compilation",
          "Mandatory database access"
        ],
        "correctIndex": 0,
        "explanation": "Explicit encoding avoids environment-dependent assumptions."
      },
      {
        "question": "What cleans up the test file?",
        "options": [
          "finally with deleteIfExists",
          "System.out.println",
          "The Java package"
        ],
        "correctIndex": 0,
        "explanation": "The finally block runs after the operation to delete the temporary file."
      }
    ]
  },
  {
    "id": "java-path-normalization",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Exceptions & IO",
    "order": 40,
    "title": "Path normalization and safe path handling",
    "summary": "Relative file names should be cleaned before displaying them, but normalization alone does not guarantee safe access.",
    "definition": "Path.normalize removes redundant path components such as . and resolvable .. without automatically enforcing a security boundary.",
    "learn": [
      "Create a Path",
      "Normalize redundant segments",
      "Understand that path traversal needs stronger protections"
    ],
    "objective": "Understand path normalization and safe path handling and reproduce its Java 21 output.",
    "explanation": "Relative file names should be cleaned before displaying them, but normalization alone does not guarantee safe access.\n\nPath normalization is lexical; production code must also resolve against an approved base directory, check boundaries, and consider symlinks for security-sensitive file operations.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Change products.txt to stock.csv.",
    "tip": "Never use untrusted relative paths without checking against a trusted root.",
    "hack": "Use Path.resolve/normalize and verify containment; symlink-sensitive paths may need additional checks.",
    "mistake": "normalize alone does not prevent malicious filesystem access.",
    "expected": "products.txt",
    "expectedOutput": "products.txt",
    "realUse": "File importers and export paths.",
    "code": "import java.nio.file.Path;\npublic class Main {\n public static void main(String[] args) {\n  Path path=Path.of(\"data\",\"reports\",\"..\",\"products.txt\").normalize();\n  System.out.println(path.getFileName());\n }\n}",
    "practice": {
      "prompt": "Change products.txt to stock.csv.",
      "check": "The filename becomes stock.csv."
    },
    "quiz": [
      {
        "question": "Does normalize enforce filesystem security alone?",
        "options": [
          "No",
          "Yes",
          "Only Linux"
        ],
        "correctIndex": 0,
        "explanation": "Lexical normalization is not a full boundary check."
      },
      {
        "question": "What does getFileName return?",
        "options": [
          "The last name component",
          "The entire file content",
          "The root directory"
        ],
        "correctIndex": 0,
        "explanation": "It yields the final path segment."
      }
    ]
  },
  {
    "id": "java-lambda-predicate",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Modern Java",
    "order": 50,
    "title": "Lambdas and Predicate functional interfaces",
    "summary": "Instead of repeating a small stock condition everywhere, represent it as a typed rule.",
    "definition": "A Java lambda is a concise implementation of a functional interface's single abstract method.",
    "learn": [
      "Recognize functional interfaces",
      "Write a lambda predicate",
      "Call test() and predict outcomes"
    ],
    "objective": "Understand lambdas and predicate functional interfaces and reproduce its Java 21 output.",
    "explanation": "Instead of repeating a small stock condition everywhere, represent it as a typed rule.\n\nPredicate<Integer> accepts an Integer and returns a boolean. Lambda expressions capture variables under Java's effectively final rules.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Change the predicate to quantity >= 2.",
    "tip": "Prefer named methods when a rule grows complex.",
    "hack": "Combine predicates with and(), or(), and negate() for readable filters.",
    "mistake": "A lambda implementing a functional interface must match its single abstract method type.",
    "expected": "true\nfalse",
    "expectedOutput": "true\nfalse",
    "realUse": "Input validation and Stream filtering.",
    "code": "import java.util.function.Predicate;\npublic class Main {\n public static void main(String[] args) {\n  Predicate<Integer> inStock=quantity -> quantity>0;\n  System.out.println(inStock.test(3));\n  System.out.println(inStock.test(0));\n }\n}",
    "practice": {
      "prompt": "Change the predicate to quantity >= 2.",
      "check": "test(3) stays true; test(0) stays false. Test quantity 1 to see the changed boundary."
    },
    "quiz": [
      {
        "question": "What does Predicate.test produce?",
        "options": [
          "boolean",
          "String",
          "Path"
        ],
        "correctIndex": 0,
        "explanation": "Predicate represents a true/false check."
      },
      {
        "question": "What Java rule affects captured local variables?",
        "options": [
          "They must be final or effectively final",
          "They must be public",
          "They must be static"
        ],
        "correctIndex": 0,
        "explanation": "Captured local variables cannot be reassigned."
      }
    ]
  },
  {
    "id": "java-method-references",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Modern Java",
    "order": 60,
    "title": "Method references with ::",
    "summary": "Sometimes an existing method says what a callback should do more clearly than writing a new lambda.",
    "definition": "A method reference uses :: to refer to an existing method as functional behavior.",
    "learn": [
      "Read :: method-reference syntax",
      "Recognize compatibility with functional interfaces",
      "Choose clarity between lambdas and references"
    ],
    "objective": "Understand method references with :: and reproduce its Java 21 output.",
    "explanation": "Sometimes an existing method says what a callback should do more clearly than writing a new lambda.\n\nSystem.out::println can serve as a Consumer for each string in a list. Use method references only when they improve readability, not as a code-golf contest.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Add Fish as a third list value.",
    "tip": "Use a lambda instead if you need extra validation or transformation.",
    "hack": "System.out::println is a compact equivalent of item -> System.out.println(item).",
    "mistake": "Method references are not always shorter or clearer for overloaded methods.",
    "expected": "Liempo\nChicken",
    "expectedOutput": "Liempo\nChicken",
    "realUse": "Stream pipelines and callbacks.",
    "code": "import java.util.List;\npublic class Main {\n public static void main(String[] args) {\n  List.of(\"Liempo\",\"Chicken\").forEach(System.out::println);\n }\n}",
    "practice": {
      "prompt": "Add Fish as a third list value.",
      "check": "A third line Fish is printed."
    },
    "quiz": [
      {
        "question": "What does :: denote?",
        "options": [
          "A method reference",
          "Inheritance",
          "Package import"
        ],
        "correctIndex": 0,
        "explanation": "It refers to existing method behavior."
      },
      {
        "question": "When is a lambda better?",
        "options": [
          "When extra logic makes the reference unclear",
          "Never",
          "Only in CSS"
        ],
        "correctIndex": 0,
        "explanation": "Readable behavior matters more than fewer characters."
      }
    ]
  },
  {
    "id": "java-collectors-joining",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Modern Java",
    "order": 70,
    "title": "Streams collectors: join results into text",
    "summary": "A report might need a neat comma-separated list of product names.",
    "definition": "Collectors.joining combines a stream of character sequences into one string.",
    "learn": [
      "Use map for transformation",
      "Use a collector as terminal operation",
      "Avoid mutating sources during stream processing"
    ],
    "objective": "Understand streams collectors: join results into text and reproduce its Java 21 output.",
    "explanation": "A report might need a neat comma-separated list of product names.\n\nMap transforms each entry, while collect is a terminal operation that gathers the output. Avoid side effects when transforming streams.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Add chicken to the list.",
    "tip": "If a normal loop is clearer, use it; Streams are not mandatory.",
    "hack": "Collectors.joining(\", \") keeps a small formatting pipeline readable.",
    "mistake": "A Stream pipeline is lazy until a terminal operation is invoked.",
    "expected": "BEEF, FISH",
    "expectedOutput": "BEEF, FISH",
    "realUse": "Reporting and display formatting.",
    "code": "import java.util.List;\nimport java.util.stream.Collectors;\npublic class Main {\n public static void main(String[] args) {\n  String labels=List.of(\"beef\",\"fish\").stream()\n   .map(String::toUpperCase).collect(Collectors.joining(\", \"));\n  System.out.println(labels);\n }\n}",
    "practice": {
      "prompt": "Add chicken to the list.",
      "check": "The result includes CHICKEN in uppercase."
    },
    "quiz": [
      {
        "question": "Which is the terminal operation?",
        "options": [
          "collect",
          "map",
          "stream"
        ],
        "correctIndex": 0,
        "explanation": "collect triggers stream processing and gathers the result."
      },
      {
        "question": "Does map modify the original strings?",
        "options": [
          "No",
          "Yes",
          "Only with uppercase"
        ],
        "correctIndex": 0,
        "explanation": "String transformation yields new values."
      }
    ]
  },
  {
    "id": "java-thread-join",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Concurrency & JVM",
    "order": 10,
    "title": "Threads and join(): wait for completion",
    "summary": "A program should not print the final result before a background task finishes its update.",
    "definition": "A Thread runs a task in a separate execution thread; join waits for that thread to finish.",
    "learn": [
      "Start a Thread",
      "Wait using join",
      "Avoid unsafe shared-state assumptions"
    ],
    "objective": "Understand threads and join(): wait for completion and reproduce its Java 21 output.",
    "explanation": "A program should not print the final result before a background task finishes its update.\n\nThis small deterministic lesson uses an AtomicInteger for safe shared state. Real concurrency is harder: scheduling order is nondeterministic, and blocking should be controlled.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Start a second thread and join both.",
    "tip": "Use higher-level executors for production task management instead of manually creating many Threads.",
    "hack": "join is a simple way to make a demonstration's final read deterministic.",
    "mistake": "Without waiting, code might read a shared result before a worker finishes.",
    "expected": "Count: 1",
    "expectedOutput": "Count: 1",
    "realUse": "Background task coordination.",
    "code": "import java.util.concurrent.atomic.AtomicInteger;\npublic class Main {\n public static void main(String[] args) throws Exception {\n  AtomicInteger count=new AtomicInteger();\n  Thread worker=new Thread(() -> count.incrementAndGet());\n  worker.start(); worker.join();\n  System.out.println(\"Count: \"+count.get());\n }\n}",
    "practice": {
      "prompt": "Start a second thread and join both.",
      "check": "Count becomes 2 when both workers increment the atomic value."
    },
    "quiz": [
      {
        "question": "What does join() do?",
        "options": [
          "Waits for the thread to finish",
          "Starts a new process",
          "Cancels Java"
        ],
        "correctIndex": 0,
        "explanation": "join blocks until the thread completes."
      },
      {
        "question": "Why AtomicInteger here?",
        "options": [
          "Safe concurrent updates",
          "Better CSS",
          "String formatting"
        ],
        "correctIndex": 0,
        "explanation": "AtomicInteger supports atomic increment operations."
      }
    ]
  },
  {
    "id": "java-completablefuture",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Concurrency & JVM",
    "order": 20,
    "title": "CompletableFuture for composable async tasks",
    "summary": "A quantity lookup could be transformed into a computed total after the first task finishes.",
    "definition": "CompletableFuture represents a result that may become available later, with composition methods such as thenApply.",
    "learn": [
      "Recognize CompletableFuture",
      "Use thenApply transformation",
      "Understand join error behavior"
    ],
    "objective": "Understand completablefuture for composable async tasks and reproduce its Java 21 output.",
    "explanation": "A quantity lookup could be transformed into a computed total after the first task finishes.\n\ncompletedFuture makes a deterministic example without remote I/O. In production, manage executors explicitly and handle exceptional completion instead of assuming every task succeeds.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Change the initial value to 4.",
    "tip": "Don't block unnecessarily with join in performance-sensitive async pipelines.",
    "hack": "Use exceptionally or handle to recover deliberately from failures.",
    "mistake": "CompletableFuture does not make CPU-heavy work automatically free.",
    "expected": "6",
    "expectedOutput": "6",
    "realUse": "Composed service calls and concurrent workflows.",
    "code": "import java.util.concurrent.CompletableFuture;\npublic class Main {\n public static void main(String[] args) {\n  int result=CompletableFuture.completedFuture(3)\n   .thenApply(value -> value * 2).join();\n  System.out.println(result);\n }\n}",
    "practice": {
      "prompt": "Change the initial value to 4.",
      "check": "The output becomes 8."
    },
    "quiz": [
      {
        "question": "What does thenApply do?",
        "options": [
          "Transforms a completed value",
          "Saves a file",
          "Starts CSS"
        ],
        "correctIndex": 0,
        "explanation": "thenApply maps a successful completion into another value."
      },
      {
        "question": "Can join fail?",
        "options": [
          "Yes, when the future completes exceptionally",
          "No",
          "Only with String"
        ],
        "correctIndex": 0,
        "explanation": "Exceptional completion can be surfaced as a CompletionException."
      }
    ]
  },
  {
    "id": "java-virtual-thread-executor",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Concurrency & JVM",
    "order": 30,
    "title": "Java 21 virtual threads through an ExecutorService",
    "summary": "An application may need many short I/O-related tasks without dedicating one OS thread per task.",
    "definition": "Virtual threads are lightweight Java threads designed to scale many mostly blocking concurrent tasks.",
    "learn": [
      "Create a Java 21 virtual-thread executor",
      "Submit a Callable task",
      "Wait for and close the executor safely"
    ],
    "objective": "Understand java 21 virtual threads through an executorservice and reproduce its Java 21 output.",
    "explanation": "An application may need many short I/O-related tasks without dedicating one OS thread per task.\n\nExecutors.newVirtualThreadPerTaskExecutor is available in Java 21. Virtual threads do not make CPU work faster; they help with large numbers of blocking tasks. This example waits for one deterministic result.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Return \"Done\" from the Callable instead of \"Finished\".",
    "tip": "Control the amount of work and underlying dependencies; virtual threads are not unlimited resources.",
    "hack": "try-with-resources closes ExecutorService after tasks finish in Java 21.",
    "mistake": "Do not assume virtual threads fix shared mutable state or database connection limits.",
    "expected": "Finished",
    "expectedOutput": "Finished",
    "realUse": "Concurrent blocking service tasks.",
    "code": "import java.util.concurrent.*;\npublic class Main {\n public static void main(String[] args) throws Exception {\n  try(ExecutorService executor=Executors.newVirtualThreadPerTaskExecutor()) {\n   Future<String> result=executor.submit(() -> \"Finished\");\n   System.out.println(result.get());\n  }\n }\n}",
    "practice": {
      "prompt": "Return \"Done\" from the Callable instead of \"Finished\".",
      "check": "The output becomes Done."
    },
    "quiz": [
      {
        "question": "Which Java version introduced finalized virtual threads?",
        "options": [
          "Java 21",
          "Java 8",
          "Java 11"
        ],
        "correctIndex": 0,
        "explanation": "Virtual threads became a standard feature in Java 21."
      },
      {
        "question": "Do virtual threads speed up CPU-bound math automatically?",
        "options": [
          "No",
          "Yes",
          "Always 100x"
        ],
        "correctIndex": 0,
        "explanation": "They primarily improve scalability of blocking tasks."
      }
    ]
  },
  {
    "id": "java-assertion-tests",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Testing & Delivery",
    "order": 10,
    "title": "Test edge cases with explicit assertions",
    "summary": "A quantity validator should reject zero and accept a positive number, not merely pass one happy-path example.",
    "definition": "An assertion in a test verifies that an observed result meets a specific expected condition.",
    "learn": [
      "Write explicit expected conditions",
      "Test a boundary and an invalid value",
      "Distinguish manual self-checks from JUnit"
    ],
    "objective": "Understand test edge cases with explicit assertions and reproduce its Java 21 output.",
    "explanation": "A quantity validator should reject zero and accept a positive number, not merely pass one happy-path example.\n\nThis is a standalone self-check using AssertionError and does not pretend to be JUnit 5. A complete JUnit/Maven track requires a real test dependency and CI test runner.\n\nLocal practice: save the example as Main.java and run javac Main.java then java Main. Add a check for valid(-1) being false.",
    "tip": "Write tests before fixing a bug so the old failure can be reproduced.",
    "hack": "Test one below, exactly on, and one above a boundary.",
    "mistake": "A single successful test does not establish comprehensive correctness.",
    "expected": "2 checks passed",
    "expectedOutput": "2 checks passed",
    "realUse": "Regression testing and coding interviews.",
    "code": "public class Main {\n static boolean valid(int q){return q>0;}\n static void check(boolean result,String name){\n  if(!result)throw new AssertionError(name);\n }\n public static void main(String[] args){\n  check(valid(3),\"positive quantity\");\n  check(!valid(0),\"zero quantity\");\n  System.out.println(\"2 checks passed\");\n }\n}",
    "practice": {
      "prompt": "Add a check for valid(-1) being false.",
      "check": "All three checks pass if the validator is correct."
    },
    "quiz": [
      {
        "question": "What does this program demonstrate?",
        "options": [
          "Manual self-check assertions",
          "A full JUnit 5 test suite",
          "A browser IDE"
        ],
        "correctIndex": 0,
        "explanation": "It uses ordinary Java methods and AssertionError, not JUnit."
      },
      {
        "question": "Why test zero quantity?",
        "options": [
          "It is an important boundary case",
          "It always means true",
          "It only affects CSS"
        ],
        "correctIndex": 0,
        "explanation": "Boundary cases frequently expose validation errors."
      }
    ]
  }
];
const seen=new Set(data.lessons.map(x=>x.id));for(const lesson of additions){if(!seen.has(lesson.id)){data.lessons.push(lesson);seen.add(lesson.id);}}
const category=data.categories.find(c=>c.id==='java');if(category){category.learningPath=["Foundation","Control Flow","Strings & Arrays","Collections","OOP Foundations","OOP Advanced","Exceptions & IO","Modern Java","Problem Solving","Applied Java","Concurrency & JVM","Testing & Delivery"];category.status='Curriculum expansion in progress';}
})();
