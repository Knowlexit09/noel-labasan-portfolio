(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons)return;
const lesson={
  "id": "java-exam-reviewer-master-quiz",
  "categoryId": "java",
  "mode": "reference",
  "language": "Java",
  "verified": true,
  "level": "Advanced",
  "stage": "Testing & Delivery",
  "order": 100,
  "title": "JAVA EXAM REVIEWER — 33 questions with explanations",
  "summary": "Test the full set of foundational, OOP, SOLID, exceptions, DAO, PreparedStatement and JDBC concepts covered in this curriculum.",
  "definition": "An exam reviewer is a structured knowledge check: it tests whether you can distinguish related Java concepts, not only repeat their names.",
  "learn": [
    "Review class/object, parameters, wrappers, casting and naming",
    "Distinguish modern interfaces and OOP/SOLID principles",
    "Identify checked vs unchecked exceptions and resource lifecycle rules",
    "Reason about DAO, JDBC PreparedStatement and transaction ownership",
    "Explain each answer before seeing the rationale"
  ],
  "objective": "Score at least 70% on 33 concept questions, then revisit any topic you miss.",
  "explanation": "This reviewer is for mastery checks after studying the individual Java lessons. It combines definition questions, misconception checks, and practical architecture decisions.\n\nFor each item, choose an answer and read the explanation, including after an incorrect answer. The score alone is not the goal: you should be able to explain *why* each option is correct or wrong.\n\nThe original code reference below demonstrates the exception hierarchy. You can run it in the Java Practice IDE; the 33-question exam runs inside Knowledge Lab and does not require a Java compiler.",
  "tip": "After finishing, redo the individual lessons behind wrong answers before retaking the quiz.",
  "hack": "A mistake journal—question, correct reasoning, and a runnable counterexample—is often more useful than re-reading a definition.",
  "mistake": "Don't memorize shortcuts such as 'interface has no code' or 'all widening conversions never lose data'; Java semantics have important exceptions.",
  "expected": "Reference program prints the parent relationships; the separate 33-question reviewer scores each answer and explains the result.",
  "expectedOutput": "Throwable: true\nError extends Exception: false",
  "realUse": "Technical interviews, Java classroom exams, practical code reviews and architectural discussions.",
  "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Throwable: \" + Throwable.class.isAssignableFrom(Exception.class));\n    System.out.println(\"Error extends Exception: \" + Exception.class.isAssignableFrom(Error.class));\n  }\n}",
  "practice": {
    "prompt": "Complete all 33 questions, list every missed topic, then run the Java code sample and explain the Throwable hierarchy in your own words.",
    "check": "A pass is at least 70%, but conceptual mastery means being able to explain the corrections and reproduce the Java output."
  },
  "quiz": [
    {
      "question": "What is a class?",
      "options": [
        "A blueprint for objects",
        "An individual object instance",
        "A primitive data type"
      ],
      "correctIndex": 0,
      "explanation": "A class defines fields and behavior for instances."
    },
    {
      "question": "Which expression instantiates an object?",
      "options": [
        "new Product(\"Fish\")",
        "class Product {} alone",
        "public interface Product {}"
      ],
      "correctIndex": 0,
      "explanation": "new calls an appropriate constructor to create an object."
    },
    {
      "question": "Which is a primitive type?",
      "options": [
        "int",
        "Integer",
        "String"
      ],
      "correctIndex": 0,
      "explanation": "int is primitive; Integer and String are reference types."
    },
    {
      "question": "What can happen when unboxing a null Integer?",
      "options": [
        "NullPointerException",
        "It automatically becomes 0",
        "Compiler inserts a default value"
      ],
      "correctIndex": 0,
      "explanation": "Unboxing null has no primitive value to extract."
    },
    {
      "question": "Is widening from long to double always exact?",
      "options": [
        "No, it can lose integer precision",
        "Yes, always exact",
        "Only when negative"
      ],
      "correctIndex": 0,
      "explanation": "double cannot exactly represent every long value."
    },
    {
      "question": "When is a compiler-provided default constructor generated?",
      "options": [
        "When no constructor is declared",
        "Every time, regardless of other constructors",
        "Only when fields are static"
      ],
      "correctIndex": 0,
      "explanation": "Declaring any constructor prevents the compiler from adding the implicit default one."
    },
    {
      "question": "What is a parameter?",
      "options": [
        "A variable declared in a method signature",
        "The literal value provided by the caller",
        "A method's return type"
      ],
      "correctIndex": 0,
      "explanation": "Parameters are placeholders; arguments are actual supplied values."
    },
    {
      "question": "Which keyword refers to the current object?",
      "options": [
        "this",
        "super",
        "static"
      ],
      "correctIndex": 0,
      "explanation": "this refers to the current instance."
    },
    {
      "question": "Can a Java class extend two different classes?",
      "options": [
        "No",
        "Yes",
        "Only if one is abstract"
      ],
      "correctIndex": 0,
      "explanation": "Java class inheritance is single, though multiple interfaces can be implemented."
    },
    {
      "question": "Can an interface have default and static methods with bodies?",
      "options": [
        "Yes",
        "No, signatures only",
        "Only via a superclass"
      ],
      "correctIndex": 0,
      "explanation": "Modern interfaces can contain default, static and private implementations."
    },
    {
      "question": "Which is the common superclass of Exception and Error?",
      "options": [
        "Throwable",
        "RuntimeException",
        "IOException"
      ],
      "correctIndex": 0,
      "explanation": "Throwable is the root for both branches."
    },
    {
      "question": "Which is a checked exception?",
      "options": [
        "IOException",
        "IllegalArgumentException",
        "NullPointerException"
      ],
      "correctIndex": 0,
      "explanation": "IOException requires catch-or-declare in relevant methods."
    },
    {
      "question": "Does 'checked exception' mean the error occurs at compile time?",
      "options": [
        "No; the handling requirement is checked then",
        "Yes; it can never be thrown at runtime",
        "Yes; only the compiler throws it"
      ],
      "correctIndex": 0,
      "explanation": "The actual exception arises at runtime; the compiler checks the handling contract."
    },
    {
      "question": "Which family is unchecked?",
      "options": [
        "RuntimeException",
        "IOException",
        "SQLException"
      ],
      "correctIndex": 0,
      "explanation": "RuntimeException and Error families are unchecked."
    },
    {
      "question": "What makes try-with-resources close a resource automatically?",
      "options": [
        "The resource implements AutoCloseable",
        "The variable is static",
        "The class uses an interface named DAO"
      ],
      "correctIndex": 0,
      "explanation": "The language invokes AutoCloseable.close() when exiting the scope."
    },
    {
      "question": "If the try body and close both throw, what happens to the close exception?",
      "options": [
        "It is usually suppressed onto the primary exception",
        "It always replaces the body exception",
        "The compiler deletes it"
      ],
      "correctIndex": 0,
      "explanation": "try-with-resources preserves the primary body exception and suppresses close failures."
    },
    {
      "question": "What is the main role of a DAO?",
      "options": [
        "Separate data access from business rules",
        "Format CSS",
        "Represent every view as a database table"
      ],
      "correctIndex": 0,
      "explanation": "DAO encapsulates persistence operations behind a clear boundary."
    },
    {
      "question": "Which statement about DTO and POJO is accurate?",
      "options": [
        "DTO describes data-transfer purpose, POJO describes an ordinary Java object",
        "DTO and POJO are identical terms",
        "Every DTO must extend a framework class"
      ],
      "correctIndex": 0,
      "explanation": "DTO is a role; POJO is a general object style."
    },
    {
      "question": "What does SRP mean?",
      "options": [
        "One cohesive reason to change",
        "One method per class",
        "One Java file for the entire project"
      ],
      "correctIndex": 0,
      "explanation": "SRP encourages a focused responsibility or reason to change."
    },
    {
      "question": "What does DRY primarily avoid?",
      "options": [
        "Duplicated business knowledge and rules",
        "Any repeated character",
        "All inheritance"
      ],
      "correctIndex": 0,
      "explanation": "A shared rule should not drift across copied implementations."
    },
    {
      "question": "Which principle encourages extension without rewriting stable clients?",
      "options": [
        "OCP",
        "ISP",
        "DRY only"
      ],
      "correctIndex": 0,
      "explanation": "Open/Closed encourages stable abstractions that accept extensions."
    },
    {
      "question": "What is LSP about?",
      "options": [
        "Subtypes honoring base behavioral expectations",
        "Overloading every method",
        "Making all fields protected"
      ],
      "correctIndex": 0,
      "explanation": "Substitution must preserve the contract, not just satisfy syntax."
    },
    {
      "question": "Which is an example of ISP?",
      "options": [
        "Small client-focused interfaces",
        "One interface with hundreds of unrelated methods",
        "No interfaces under any circumstances"
      ],
      "correctIndex": 0,
      "explanation": "Clients should not depend on methods they do not use."
    },
    {
      "question": "What is the difference between DIP and dependency injection?",
      "options": [
        "DIP is a principle; DI is one technique for supplying dependencies",
        "They are identical",
        "DI requires inheritance"
      ],
      "correctIndex": 0,
      "explanation": "DIP directs dependencies toward abstractions, while DI supplies collaborators."
    },
    {
      "question": "What is coupling?",
      "options": [
        "The degree of dependency between modules",
        "Number of fields in an object",
        "A JVM garbage-collector setting"
      ],
      "correctIndex": 0,
      "explanation": "Coupling measures interdependence across modules."
    },
    {
      "question": "What is cohesion?",
      "options": [
        "How well a module's responsibilities fit together",
        "The number of interfaces implemented",
        "The number of threads opened"
      ],
      "correctIndex": 0,
      "explanation": "High useful cohesion means related responsibilities belong together."
    },
    {
      "question": "Which expression checks an object's runtime type?",
      "options": [
        "instanceof",
        "throws",
        "final"
      ],
      "correctIndex": 0,
      "explanation": "instanceof checks type compatibility."
    },
    {
      "question": "What does a PreparedStatement '?' normally bind?",
      "options": [
        "A data value",
        "An arbitrary table name",
        "Any SQL syntax keyword"
      ],
      "correctIndex": 0,
      "explanation": "SQL placeholders bind values; identifiers need allowlist validation."
    },
    {
      "question": "Which resource can be in try-with-resources?",
      "options": [
        "PreparedStatement",
        "An int primitive",
        "A bare method parameter with no close behavior"
      ],
      "correctIndex": 0,
      "explanation": "PreparedStatement inherits AutoCloseable from Statement."
    },
    {
      "question": "Does closing a PreparedStatement guarantee every database lock is released?",
      "options": [
        "No; transaction/database state matters",
        "Yes, all users can immediately use all rows",
        "Only with static methods"
      ],
      "correctIndex": 0,
      "explanation": "Transaction state and database isolation control lock behavior."
    },
    {
      "question": "What does Connection.close() usually do for a pooled logical connection?",
      "options": [
        "Return it to the pool",
        "Always physically destroy the entire database connection pool",
        "Commit every pending transaction safely"
      ],
      "correctIndex": 0,
      "explanation": "Pooling often reuses physical connections; transaction cleanup must still be correct."
    },
    {
      "question": "What is the purpose of rollback?",
      "options": [
        "Revert uncommitted transaction changes",
        "Restore a deleted Java class",
        "Make bad SQL compile"
      ],
      "correctIndex": 0,
      "explanation": "A rollback reverts changes not yet committed within that transaction."
    },
    {
      "question": "What is a strong ownership relationship typically called?",
      "options": [
        "Composition",
        "Class overloading",
        "Package-private access"
      ],
      "correctIndex": 0,
      "explanation": "Composition models stronger lifecycle ownership; Java syntax alone does not enforce it."
    }
  ]
};
if(!data.lessons.some(l=>l.id===lesson.id))data.lessons.push(lesson);
})();
