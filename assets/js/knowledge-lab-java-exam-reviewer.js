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
        "public interface Product {}",
        "new Product(\"Fish\")",
        "class Product {} alone"
      ],
      "correctIndex": 1,
      "explanation": "new calls an appropriate constructor to create an object."
    },
    {
      "question": "Which is a primitive type?",
      "options": [
        "Integer",
        "String",
        "int"
      ],
      "correctIndex": 2,
      "explanation": "int is primitive; Integer and String are reference types."
    },
    {
      "question": "What can happen when unboxing a null Integer?",
      "options": [
        "Compiler inserts a default value",
        "It automatically becomes 0",
        "NullPointerException"
      ],
      "correctIndex": 2,
      "explanation": "Unboxing null has no primitive value to extract."
    },
    {
      "question": "Is widening from long to double always exact?",
      "options": [
        "Yes, always exact",
        "No, it can lose integer precision",
        "Only when negative"
      ],
      "correctIndex": 1,
      "explanation": "double cannot exactly represent every long value."
    },
    {
      "question": "When is a compiler-provided default constructor generated?",
      "options": [
        "When no constructor is declared",
        "Only when fields are static",
        "Every time, regardless of other constructors"
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
        "static",
        "this",
        "super"
      ],
      "correctIndex": 1,
      "explanation": "this refers to the current instance."
    },
    {
      "question": "Can a Java class extend two different classes?",
      "options": [
        "Yes",
        "Only if one is abstract",
        "No"
      ],
      "correctIndex": 2,
      "explanation": "Java class inheritance is single, though multiple interfaces can be implemented."
    },
    {
      "question": "Can an interface have default and static methods with bodies?",
      "options": [
        "Only via a superclass",
        "No, signatures only",
        "Yes"
      ],
      "correctIndex": 2,
      "explanation": "Modern interfaces can contain default, static and private implementations."
    },
    {
      "question": "Which is the common superclass of Exception and Error?",
      "options": [
        "RuntimeException",
        "Throwable",
        "IOException"
      ],
      "correctIndex": 1,
      "explanation": "Throwable is the root for both branches."
    },
    {
      "question": "Which is a checked exception?",
      "options": [
        "IOException",
        "NullPointerException",
        "IllegalArgumentException"
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
        "SQLException",
        "RuntimeException",
        "IOException"
      ],
      "correctIndex": 1,
      "explanation": "RuntimeException and Error families are unchecked."
    },
    {
      "question": "What makes try-with-resources close a resource automatically?",
      "options": [
        "The variable is static",
        "The class uses an interface named DAO",
        "The resource implements AutoCloseable"
      ],
      "correctIndex": 2,
      "explanation": "The language invokes AutoCloseable.close() when exiting the scope."
    },
    {
      "question": "If the try body and close both throw, what happens to the close exception?",
      "options": [
        "The compiler deletes it",
        "It always replaces the body exception",
        "It is usually suppressed onto the primary exception"
      ],
      "correctIndex": 2,
      "explanation": "try-with-resources preserves the primary body exception and suppresses close failures."
    },
    {
      "question": "What is the main role of a DAO?",
      "options": [
        "Format CSS",
        "Separate data access from business rules",
        "Represent every view as a database table"
      ],
      "correctIndex": 1,
      "explanation": "DAO encapsulates persistence operations behind a clear boundary."
    },
    {
      "question": "Which statement about DTO and POJO is accurate?",
      "options": [
        "DTO describes data-transfer purpose, POJO describes an ordinary Java object",
        "Every DTO must extend a framework class",
        "DTO and POJO are identical terms"
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
        "All inheritance",
        "Duplicated business knowledge and rules",
        "Any repeated character"
      ],
      "correctIndex": 1,
      "explanation": "A shared rule should not drift across copied implementations."
    },
    {
      "question": "Which principle encourages extension without rewriting stable clients?",
      "options": [
        "ISP",
        "DRY only",
        "OCP"
      ],
      "correctIndex": 2,
      "explanation": "Open/Closed encourages stable abstractions that accept extensions."
    },
    {
      "question": "What is LSP about?",
      "options": [
        "Making all fields protected",
        "Overloading every method",
        "Subtypes honoring base behavioral expectations"
      ],
      "correctIndex": 2,
      "explanation": "Substitution must preserve the contract, not just satisfy syntax."
    },
    {
      "question": "Which is an example of ISP?",
      "options": [
        "One interface with hundreds of unrelated methods",
        "Small client-focused interfaces",
        "No interfaces under any circumstances"
      ],
      "correctIndex": 1,
      "explanation": "Clients should not depend on methods they do not use."
    },
    {
      "question": "What is the difference between DIP and dependency injection?",
      "options": [
        "DIP is a principle; DI is one technique for supplying dependencies",
        "DI requires inheritance",
        "They are identical"
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
        "The number of threads opened",
        "How well a module's responsibilities fit together",
        "The number of interfaces implemented"
      ],
      "correctIndex": 1,
      "explanation": "High useful cohesion means related responsibilities belong together."
    },
    {
      "question": "Which expression checks an object's runtime type?",
      "options": [
        "throws",
        "final",
        "instanceof"
      ],
      "correctIndex": 2,
      "explanation": "instanceof checks type compatibility."
    },
    {
      "question": "What does a PreparedStatement '?' normally bind?",
      "options": [
        "Any SQL syntax keyword",
        "An arbitrary table name",
        "A data value"
      ],
      "correctIndex": 2,
      "explanation": "SQL placeholders bind values; identifiers need allowlist validation."
    },
    {
      "question": "Which resource can be in try-with-resources?",
      "options": [
        "An int primitive",
        "PreparedStatement",
        "A bare method parameter with no close behavior"
      ],
      "correctIndex": 1,
      "explanation": "PreparedStatement inherits AutoCloseable from Statement."
    },
    {
      "question": "Does closing a PreparedStatement guarantee every database lock is released?",
      "options": [
        "No; transaction/database state matters",
        "Only with static methods",
        "Yes, all users can immediately use all rows"
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
        "Make bad SQL compile",
        "Revert uncommitted transaction changes",
        "Restore a deleted Java class"
      ],
      "correctIndex": 1,
      "explanation": "A rollback reverts changes not yet committed within that transaction."
    },
    {
      "question": "What is a strong ownership relationship typically called?",
      "options": [
        "Class overloading",
        "Package-private access",
        "Composition"
      ],
      "correctIndex": 2,
      "explanation": "Composition models stronger lifecycle ownership; Java syntax alone does not enforce it."
    }
  ]
};
if(!data.lessons.some(x=>x.id===lesson.id))data.lessons.push(lesson);
})();
