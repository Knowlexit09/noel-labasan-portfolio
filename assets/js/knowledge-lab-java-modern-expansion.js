(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons)return;const additions=[
  {
    "id": "java-method-overloading",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "Strings & Arrays",
    "order": 30,
    "title": "Method overloading and clear signatures",
    "summary": "A label printer may accept a product name alone or a product name plus quantity.",
    "definition": "Overloading declares methods with the same name but different parameter lists; the compiler resolves which signature matches.",
    "learn": [
      "Understand method overloading and clear signatures",
      "Overloading declares methods with the same name but different parameter lists; the compiler resolves which signature matches.",
      "Read Java 21 source and predict verified output",
      "Make the practice change and compile again"
    ],
    "objective": "Explain the tradeoffs of method overloading and clear signatures and use it correctly.",
    "explanation": "A label printer may accept a product name alone or a product name plus quantity.\n\nOverloading is chosen at compile time from argument types and arity. Return type alone cannot distinguish overloads.\n\nLocal practice: save as Main.java, compile with javac Main.java, run with java Main, then Add an overload taking int only and call it to print 'Quantity: 5'.",
    "tip": "Overload when the operations are genuinely the same concept with different useful inputs.",
    "hack": "Delegate simpler overloads to one core method to avoid duplicated logic.",
    "mistake": "Changing only the return type does not create a valid overload.",
    "expected": "Liempo\nChicken: 2",
    "expectedOutput": "Liempo\nChicken: 2",
    "realUse": "Flexible utility methods and constructors.",
    "code": "public class Main {\n static String label(String name){return name;}\n static String label(String name,int qty){return name+\": \"+qty;}\n public static void main(String[] args){\n  System.out.println(label(\"Liempo\"));\n  System.out.println(label(\"Chicken\",2));\n }\n}",
    "practice": {
      "prompt": "Add an overload taking int only and call it to print 'Quantity: 5'.",
      "check": "The new overload is selected based on argument type."
    },
    "quiz": [
      {
        "question": "What distinguishes overloads?",
        "options": [
          "Parameter lists",
          "Return type alone",
          "Comments"
        ],
        "correctIndex": 0,
        "explanation": "Java overload resolution uses parameter count and types."
      },
      {
        "question": "When is overloading confusing?",
        "options": [
          "When variants perform unrelated actions",
          "When parameter lists differ",
          "When methods have the same name"
        ],
        "correctIndex": 0,
        "explanation": "Semantic consistency keeps API usage predictable."
      }
    ]
  },
  {
    "id": "java-recursion-base-case",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "Problem Solving",
    "order": 20,
    "title": "Recursion needs a base case",
    "summary": "A countdown can repeat by asking the same method to handle the next smaller number.",
    "definition": "Recursion occurs when a method calls itself; a base case stops further recursive calls.",
    "learn": [
      "Understand recursion needs a base case",
      "Recursion occurs when a method calls itself; a base case stops further recursive calls.",
      "Read Java 21 source and predict verified output",
      "Make the practice change and compile again"
    ],
    "objective": "Explain the tradeoffs of recursion needs a base case and use it correctly.",
    "explanation": "A countdown can repeat by asking the same method to handle the next smaller number.\n\nEach recursive call uses stack space. Always define a reachable base case; deep recursion risks StackOverflowError, so loops may be safer for simple repetitions.\n\nLocal practice: save as Main.java, compile with javac Main.java, run with java Main, then Try sumTo(5) and trace 5+4+3+2+1.",
    "tip": "Draw a small call stack before using recursion for the first time.",
    "hack": "Prefer iterative code for straightforward counting when it is simpler and uses less stack.",
    "mistake": "Missing or unreachable base conditions can cause unbounded recursive calls.",
    "expected": "10",
    "expectedOutput": "10",
    "realUse": "Tree traversals and divide-and-conquer algorithms.",
    "code": "public class Main {\n static int sumTo(int n){\n  if(n<=0)return 0;\n  return n+sumTo(n-1);\n }\n public static void main(String[] args){\n  System.out.println(sumTo(4));\n }\n}",
    "practice": {
      "prompt": "Try sumTo(5) and trace 5+4+3+2+1.",
      "check": "The result is 15."
    },
    "quiz": [
      {
        "question": "What stops this recursive method?",
        "options": [
          "n <= 0",
          "Method name",
          "The compiler"
        ],
        "correctIndex": 0,
        "explanation": "The base case returns without further recursion."
      },
      {
        "question": "Why avoid extremely deep recursion?",
        "options": [
          "Stack exhaustion",
          "Loss of CSS",
          "Automatic JSON failure"
        ],
        "correctIndex": 0,
        "explanation": "Each call consumes stack frames."
      }
    ]
  },
  {
    "id": "java-stringbuilder",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "Strings & Arrays",
    "order": 40,
    "title": "StringBuilder for repeated text construction",
    "summary": "Building a receipt line-by-line is clearer than repeatedly creating temporary String results.",
    "definition": "StringBuilder is a mutable sequence of characters for efficient repeated string modifications.",
    "learn": [
      "Understand stringbuilder for repeated text construction",
      "StringBuilder is a mutable sequence of characters for efficient repeated string modifications.",
      "Read Java 21 source and predict verified output",
      "Make the practice change and compile again"
    ],
    "objective": "Explain the tradeoffs of stringbuilder for repeated text construction and use it correctly.",
    "explanation": "Building a receipt line-by-line is clearer than repeatedly creating temporary String results.\n\nJava String is immutable. In a loop with many appended pieces, StringBuilder expresses an intentional mutable buffer. Use normal + concatenation for small simple statements.\n\nLocal practice: save as Main.java, compile with javac Main.java, run with java Main, then Append ' packs' and predict the updated receipt line.",
    "tip": "Use the simplest readable approach; StringBuilder is not needed for every concatenation.",
    "hack": "Chain append calls when it stays readable.",
    "mistake": "Do not assume StringBuilder is thread-safe; StringBuffer exists for synchronized operations but other design choices may be better.",
    "expected": "Liempo: 2",
    "expectedOutput": "Liempo: 2",
    "realUse": "Generated receipt messages and report formatting.",
    "code": "public class Main {\n public static void main(String[] args){\n  StringBuilder sb=new StringBuilder();\n  sb.append(\"Liempo\").append(\": \").append(2);\n  System.out.println(sb.toString());\n }\n}",
    "practice": {
      "prompt": "Append ' packs' and predict the updated receipt line.",
      "check": "It prints Liempo: 2 packs."
    },
    "quiz": [
      {
        "question": "Is StringBuilder mutable?",
        "options": [
          "Yes",
          "No",
          "Only after toString"
        ],
        "correctIndex": 0,
        "explanation": "Its internal character sequence can be changed."
      },
      {
        "question": "Should every simple String use StringBuilder?",
        "options": [
          "No",
          "Yes",
          "Only in Java 21"
        ],
        "correctIndex": 0,
        "explanation": "Use it where repeated construction justifies it."
      }
    ]
  },
  {
    "id": "java-enum-states",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "OOP Advanced",
    "order": 30,
    "title": "Enums for valid business states",
    "summary": "Order statuses should be one of NEW, PAID, or CANCELLED—not arbitrary misspelled strings.",
    "definition": "An enum declares a fixed, named set of values with type safety.",
    "learn": [
      "Understand enums for valid business states",
      "An enum declares a fixed, named set of values with type safety.",
      "Read Java 21 source and predict verified output",
      "Make the practice change and compile again"
    ],
    "objective": "Explain the tradeoffs of enums for valid business states and use it correctly.",
    "explanation": "Order statuses should be one of NEW, PAID, or CANCELLED—not arbitrary misspelled strings.\n\nEnums centralize valid values and enable exhaustive switch expressions. Their names can be renamed by code review rather than unrestricted runtime input.\n\nLocal practice: save as Main.java, compile with javac Main.java, run with java Main, then Change status to NEW and confirm the first label is selected.",
    "tip": "Use an enum when a finite set of states is domain-defined.",
    "hack": "A switch expression over a complete enum can expose missing cases at compile time.",
    "mistake": "Avoid storing arbitrary user text directly as an enum without mapping and validation.",
    "expected": "Paid",
    "expectedOutput": "Paid",
    "realUse": "Order and workflow state transitions.",
    "code": "public class Main {\n enum Status{NEW,PAID,CANCELLED}\n public static void main(String[] args){\n  Status status=Status.PAID;\n  String label=switch(status){\n   case NEW->\"Awaiting payment\";\n   case PAID->\"Paid\";\n   case CANCELLED->\"Cancelled\";\n  };\n  System.out.println(label);\n }\n}",
    "practice": {
      "prompt": "Change status to NEW and confirm the first label is selected.",
      "check": "It prints Awaiting payment."
    },
    "quiz": [
      {
        "question": "Why use enum?",
        "options": [
          "Restrict values to defined states",
          "Automatically save a database",
          "Run HTML"
        ],
        "correctIndex": 0,
        "explanation": "Enum offers type-safe named values."
      },
      {
        "question": "What is one advantage of enum switch?",
        "options": [
          "Compiler can help check exhaustiveness",
          "Always faster networks",
          "Ignores new states"
        ],
        "correctIndex": 0,
        "explanation": "The compiler can require a covering switch expression."
      }
    ]
  },
  {
    "id": "java-comparator-sort",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Collections",
    "order": 30,
    "title": "Comparator and safe sorting",
    "summary": "A report might need prices sorted low to high without changing the source list.",
    "definition": "A Comparator defines an ordering between values; List.sort mutates the given list.",
    "learn": [
      "Understand comparator and safe sorting",
      "A Comparator defines an ordering between values; List.sort mutates the given list.",
      "Read Java 21 source and predict verified output",
      "Make the practice change and compile again"
    ],
    "objective": "Explain the tradeoffs of comparator and safe sorting and use it correctly.",
    "explanation": "A report might need prices sorted low to high without changing the source list.\n\nCopy the source before sorting if other views depend on its order. Use Integer.compare or Comparator.naturalOrder to avoid overflow-prone subtraction comparators.\n\nLocal practice: save as Main.java, compile with javac Main.java, run with java Main, then Reverse the comparator with (a,b) -> Integer.compare(b,a).",
    "tip": "Use a named comparator when sorting by multiple fields.",
    "hack": "Comparator.comparing is useful for typed object properties.",
    "mistake": "Integer subtraction inside comparison can overflow for extreme values.",
    "expected": "[9, 25, 100]\n[100, 9, 25]",
    "expectedOutput": "[9, 25, 100]\n[100, 9, 25]",
    "realUse": "Product sorting and report ordering.",
    "code": "import java.util.ArrayList;\nimport java.util.List;\npublic class Main {\n public static void main(String[] args){\n  List<Integer> prices=List.of(100,9,25);\n  List<Integer> sorted=new ArrayList<>(prices);\n  sorted.sort(Integer::compare);\n  System.out.println(sorted);\n  System.out.println(prices);\n }\n}",
    "practice": {
      "prompt": "Reverse the comparator with (a,b) -> Integer.compare(b,a).",
      "check": "Sorted result becomes [100, 25, 9], original remains unchanged."
    },
    "quiz": [
      {
        "question": "Which list is changed by sort?",
        "options": [
          "sorted copy",
          "immutable prices",
          "Both"
        ],
        "correctIndex": 0,
        "explanation": "The copied ArrayList is mutated while List.of remains unchanged."
      },
      {
        "question": "Why use Integer.compare?",
        "options": [
          "Avoid subtraction overflow",
          "Force concurrency",
          "Write files"
        ],
        "correctIndex": 0,
        "explanation": "Integer.compare handles integer ordering without overflow from subtracting."
      }
    ]
  },
  {
    "id": "java-record-introduction",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Modern Java",
    "order": 20,
    "title": "Records for small immutable data carriers",
    "summary": "A read-only product summary needs an ID and name without repetitive boilerplate.",
    "definition": "A Java record declares a concise class for immutable component fields, generated accessors, and value-based equality.",
    "learn": [
      "Understand records for small immutable data carriers",
      "A Java record declares a concise class for immutable component fields, generated accessors, and value-based equality.",
      "Read Java 21 source and predict verified output",
      "Make the practice change and compile again"
    ],
    "objective": "Explain the tradeoffs of records for small immutable data carriers and use it correctly.",
    "explanation": "A read-only product summary needs an ID and name without repetitive boilerplate.\n\nRecords provide private final component fields and generated accessors; they are shallowly immutable, so mutable component objects still require care.\n\nLocal practice: save as Main.java, compile with javac Main.java, run with java Main, then Construct a second Product with stock 0 and print it.",
    "tip": "Use records for descriptive data carriers, not as a universal replacement for domain objects with complex mutable behavior.",
    "hack": "Records automatically supply equals, hashCode, toString, and component accessors.",
    "mistake": "A record does not deeply freeze mutable component objects.",
    "expected": "Fish Fillet: 2",
    "expectedOutput": "Fish Fillet: 2",
    "realUse": "DTOs, data transfer, and read-only value objects.",
    "code": "public class Main {\n record Product(String name,int stock){}\n public static void main(String[] args){\n  Product item=new Product(\"Fish Fillet\",2);\n  System.out.println(item.name()+\": \"+item.stock());\n }\n}",
    "practice": {
      "prompt": "Construct a second Product with stock 0 and print it.",
      "check": "The new record prints the supplied name and 0."
    },
    "quiz": [
      {
        "question": "How do you read a record component?",
        "options": [
          "item.name()",
          "item.getName() required",
          "item->name"
        ],
        "correctIndex": 0,
        "explanation": "Record components have generated accessors named after the component."
      },
      {
        "question": "Are records deeply immutable by default?",
        "options": [
          "No",
          "Yes",
          "Only with String"
        ],
        "correctIndex": 0,
        "explanation": "References to mutable component objects may still change internally."
      }
    ]
  },
  {
    "id": "java-optional-values",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Modern Java",
    "order": 30,
    "title": "Optional: missing values without fake placeholders",
    "summary": "A product lookup might legitimately find no product, so returning a fake name is misleading.",
    "definition": "Optional<T> represents either a present non-null value or absence.",
    "learn": [
      "Understand optional: missing values without fake placeholders",
      "Optional<T> represents either a present non-null value or absence.",
      "Read Java 21 source and predict verified output",
      "Make the practice change and compile again"
    ],
    "objective": "Explain the tradeoffs of optional: missing values without fake placeholders and use it correctly.",
    "explanation": "A product lookup might legitimately find no product, so returning a fake name is misleading.\n\nUse Optional at suitable method return boundaries, not indiscriminately for every field or argument. orElse supplies a fallback value when absent.\n\nLocal practice: save as Main.java, compile with javac Main.java, run with java Main, then Change find(2) to find(3) on the first line.",
    "tip": "Use Optional to make legitimate absence part of the method contract.",
    "hack": "orElseGet is helpful when computing the fallback is expensive.",
    "mistake": "Calling get() without checking presence can throw NoSuchElementException.",
    "expected": "Not found\nChicken",
    "expectedOutput": "Not found\nChicken",
    "realUse": "Search results and optional configuration.",
    "code": "import java.util.Optional;\npublic class Main {\n static Optional<String> find(int id){\n  return id==3?Optional.of(\"Chicken\"):Optional.empty();\n }\n public static void main(String[] args){\n  System.out.println(find(2).orElse(\"Not found\"));\n  System.out.println(find(3).orElse(\"Not found\"));\n }\n}",
    "practice": {
      "prompt": "Change find(2) to find(3) on the first line.",
      "check": "Both lines print Chicken."
    },
    "quiz": [
      {
        "question": "What does Optional.empty mean?",
        "options": [
          "No value present",
          "Zero numeric value",
          "Compile error"
        ],
        "correctIndex": 0,
        "explanation": "Optional distinguishes absence from a non-null present value."
      },
      {
        "question": "Why avoid get() without checks?",
        "options": [
          "It can throw if absent",
          "It always returns zero",
          "It changes String"
        ],
        "correctIndex": 0,
        "explanation": "get on an empty Optional fails."
      }
    ]
  },
  {
    "id": "java-bigdecimal-rounding",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Applied Java",
    "order": 20,
    "title": "BigDecimal scale and explicit rounding",
    "summary": "An exact accounting calculation should not silently accept floating-point surprises.",
    "definition": "BigDecimal represents decimal numbers with arbitrary precision, subject to deliberate scale and rounding rules.",
    "learn": [
      "Understand bigdecimal scale and explicit rounding",
      "BigDecimal represents decimal numbers with arbitrary precision, subject to deliberate scale and rounding rules.",
      "Read Java 21 source and predict verified output",
      "Make the practice change and compile again"
    ],
    "objective": "Explain the tradeoffs of bigdecimal scale and explicit rounding and use it correctly.",
    "explanation": "An exact accounting calculation should not silently accept floating-point surprises.\n\nUse a String constructor for decimal literals. RoundingMode must match your actual business/accounting policy; this lesson uses HALF_UP only as an explicit example, not as a universal rule.\n\nLocal practice: save as Main.java, compile with javac Main.java, run with java Main, then Replace HALF_UP with DOWN and predict the two-decimal output.",
    "tip": "Decide currency scale, rounding boundaries, and audit requirements before implementing finance logic.",
    "hack": "Use compareTo for numeric BigDecimal equality ignoring scale where appropriate.",
    "mistake": "new BigDecimal(0.1) embeds the binary approximation; prefer decimal strings.",
    "expected": "10.01",
    "expectedOutput": "10.01",
    "realUse": "Financial reports and currency calculations.",
    "code": "import java.math.BigDecimal;\nimport java.math.RoundingMode;\npublic class Main {\n public static void main(String[] args){\n  BigDecimal amount=new BigDecimal(\"10.005\");\n  System.out.println(amount.setScale(2,RoundingMode.HALF_UP));\n }\n}",
    "practice": {
      "prompt": "Replace HALF_UP with DOWN and predict the two-decimal output.",
      "check": "RoundingMode.DOWN produces 10.00."
    },
    "quiz": [
      {
        "question": "Why construct BigDecimal from a string?",
        "options": [
          "Avoid importing floating-point approximation",
          "To force a browser",
          "To skip validation"
        ],
        "correctIndex": 0,
        "explanation": "A decimal text constructor preserves the intended decimal value."
      },
      {
        "question": "Is HALF_UP always the correct business rule?",
        "options": [
          "No",
          "Yes",
          "Only for Java 21"
        ],
        "correctIndex": 0,
        "explanation": "Rounding requirements differ by business and jurisdiction."
      }
    ]
  },
  {
    "id": "java-time-localdate",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Modern Java",
    "order": 40,
    "title": "java.time LocalDate and calendar arithmetic",
    "summary": "A product inspection due date is a calendar day, not an instant in a particular timezone.",
    "definition": "LocalDate represents a date without time-of-day or timezone information.",
    "learn": [
      "Understand java.time localdate and calendar arithmetic",
      "LocalDate represents a date without time-of-day or timezone information.",
      "Read Java 21 source and predict verified output",
      "Make the practice change and compile again"
    ],
    "objective": "Explain the tradeoffs of java.time localdate and calendar arithmetic and use it correctly.",
    "explanation": "A product inspection due date is a calendar day, not an instant in a particular timezone.\n\nLocalDate is immutable; plusDays returns a new date. Use ZonedDateTime or Instant when actual timestamps and timezones matter.\n\nLocal practice: save as Main.java, compile with javac Main.java, run with java Main, then Add 10 days instead of 3 and predict the date.",
    "tip": "Use LocalDate for date-only business data and Instant for absolute events.",
    "hack": "Prefer java.time over older mutable Date/Calendar APIs in new code.",
    "mistake": "LocalDate does not encode a timezone or exact timestamp.",
    "expected": "2026-10-15",
    "expectedOutput": "2026-10-15",
    "realUse": "Due dates, schedules, and expiry reminders.",
    "code": "import java.time.LocalDate;\npublic class Main {\n public static void main(String[] args){\n  LocalDate date=LocalDate.of(2026,10,12);\n  System.out.println(date.plusDays(3));\n }\n}",
    "practice": {
      "prompt": "Add 10 days instead of 3 and predict the date.",
      "check": "The output is 2026-10-22."
    },
    "quiz": [
      {
        "question": "Does LocalDate store a timezone?",
        "options": [
          "No",
          "Yes",
          "Only Manila"
        ],
        "correctIndex": 0,
        "explanation": "LocalDate is a date-only value."
      },
      {
        "question": "Does plusDays mutate the original date?",
        "options": [
          "No",
          "Yes",
          "Only inside main"
        ],
        "correctIndex": 0,
        "explanation": "java.time date types are immutable."
      }
    ]
  },
  {
    "id": "java-try-with-resources",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Exceptions & IO",
    "order": 20,
    "title": "try-with-resources and automatic cleanup",
    "summary": "Reading input should close the resource even when something fails during processing.",
    "definition": "try-with-resources automatically closes resources implementing AutoCloseable after the block.",
    "learn": [
      "Understand try-with-resources and automatic cleanup",
      "try-with-resources automatically closes resources implementing AutoCloseable after the block.",
      "Read Java 21 source and predict verified output",
      "Make the practice change and compile again"
    ],
    "objective": "Explain the tradeoffs of try-with-resources and automatic cleanup and use it correctly.",
    "explanation": "Reading input should close the resource even when something fails during processing.\n\nThe example uses an in-memory StringReader to keep CI deterministic. Real Files.newBufferedReader and other I/O resources also benefit from try-with-resources.\n\nLocal practice: save as Main.java, compile with javac Main.java, run with java Main, then Replace the input with 'Fish\\nBeef' and predict both lines.",
    "tip": "Always choose a charset such as UTF-8 explicitly for real text files.",
    "hack": "try-with-resources avoids manual close() logic in finally blocks.",
    "mistake": "Do not leave file handles open while assuming garbage collection closes them immediately.",
    "expected": "Liempo\nChicken",
    "expectedOutput": "Liempo\nChicken",
    "realUse": "Safe file processing and stream handling.",
    "code": "import java.io.BufferedReader;\nimport java.io.StringReader;\nimport java.io.IOException;\npublic class Main {\n public static void main(String[] args) throws IOException {\n  try(BufferedReader reader=new BufferedReader(new StringReader(\"Liempo\\nChicken\"))){\n   System.out.println(reader.readLine());\n   System.out.println(reader.readLine());\n  }\n }\n}",
    "practice": {
      "prompt": "Replace the input with 'Fish\\nBeef' and predict both lines.",
      "check": "The reader prints Fish and Beef, and closes after the block."
    },
    "quiz": [
      {
        "question": "What does try-with-resources guarantee for AutoCloseable?",
        "options": [
          "Closing after the block",
          "A database backup",
          "Automatic retries"
        ],
        "correctIndex": 0,
        "explanation": "The resource is closed when the block completes."
      },
      {
        "question": "Does this lesson access a real file?",
        "options": [
          "No, it uses StringReader",
          "Yes, it downloads data",
          "Yes, it deletes files"
        ],
        "correctIndex": 0,
        "explanation": "An in-memory reader gives deterministic CI output."
      }
    ]
  }
];const existing=new Set(data.lessons.map(x=>x.id));for(const l of additions){if(!existing.has(l.id)){data.lessons.push(l);existing.add(l.id);}}})();