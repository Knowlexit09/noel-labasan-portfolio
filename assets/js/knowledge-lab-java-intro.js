(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons)return;const additions=[
  {
    "id": "java-what-is-java",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "Foundation",
    "order": -10,
    "title": "What is Java? Start here",
    "summary": "Begin with what Java actually is, where it is used, and how its program is executed.",
    "definition": "Java is a statically typed, class-based programming language. Java source is typically compiled to bytecode that runs on a Java Virtual Machine (JVM).",
    "learn": [
      "Understand that Java is not JavaScript",
      "Recognize source code, compilation, bytecode, and the JVM",
      "Read a basic public class Main program",
      "Explain why a Java program is not directly runnable in the Knowledge Lab browser IDE"
    ],
    "objective": "Know what Java is and explain the purpose of the Java compiler and runtime before studying syntax.",
    "explanation": "Imagine writing instructions in a language a machine cannot execute directly. A compiler translates those Java instructions into a portable bytecode format. The JVM then executes that bytecode on a supported platform.\n\nJava is used in enterprise services, desktop applications, and many other systems. Despite the similar name, Java and JavaScript are different languages with different programming environments.\n\nThis Java 21 code is shown as a real CI-compilation reference, not a fake browser Run button. To practice locally, install a JDK, save this as Main.java, run javac Main.java, then java Main.",
    "tip": "Understand the difference between a language, a compiler, and a runtime before memorizing API methods.",
    "hack": "Check java -version and javac -version in a terminal to see which runtime and compiler are installed.",
    "mistake": "Do not paste Java into a JavaScript browser editor and expect it to execute.",
    "expected": "Hello from Java",
    "expectedOutput": "Hello from Java",
    "realUse": "Java enterprise applications, business systems, server APIs, and desktop tools.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello from Java\");\n  }\n}",
    "practice": {
      "prompt": "Change the printed message to 'My first Java program', save as Main.java, compile and run locally.",
      "check": "After a successful javac compile, java Main prints the new message."
    },
    "quiz": [
      {
        "question": "What runs compiled Java bytecode?",
        "options": [
          "The JVM",
          "A CSS selector",
          "The HTML DOM"
        ],
        "correctIndex": 0,
        "explanation": "The Java Virtual Machine executes Java bytecode."
      },
      {
        "question": "Is Java the same language as JavaScript?",
        "options": [
          "No",
          "Yes",
          "Only on Windows"
        ],
        "correctIndex": 0,
        "explanation": "Java and JavaScript are different languages with different runtimes and ecosystems."
      }
    ]
  },
  {
    "id": "java-jdk-jvm-jre",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Beginner",
    "stage": "Foundation",
    "order": -5,
    "title": "JDK vs JRE vs JVM and setting up Java 21",
    "summary": "Understand which Java component compiles source, which runs bytecode, and how to verify a local environment.",
    "definition": "The JVM executes Java bytecode; the Java runtime provides the JVM and core runtime libraries; the JDK adds development tools such as javac.",
    "learn": [
      "Distinguish JVM, runtime, and JDK",
      "Run java -version and javac -version",
      "Understand why compiling requires a JDK",
      "Read a runtime-version check without hardcoding an exact patch version"
    ],
    "objective": "Recognize and verify a real Java 21+ development environment.",
    "explanation": "The JVM is the engine that runs Java bytecode. The runtime includes that engine and standard libraries needed to execute applications. A JDK contains the development tools—including javac—that you need to compile your own program.\n\nModern JDK distributions include the runtime. Download a trusted JDK distribution and check both java -version and javac -version in your terminal. The example below prints whether the current runtime supports Java 21 features; our CI tests it using JDK 21.\n\nTry it locally with javac Main.java and java Main. This platform deliberately does not offer an unverified remote Java Run button.",
    "tip": "Keep java and javac versions aligned; mixed installations can cause confusing compatibility failures.",
    "hack": "If terminal commands are not found, inspect PATH and JAVA_HOME rather than downloading random executables.",
    "mistake": "Installing only a runtime does not necessarily provide javac for compilation.",
    "expected": "Java 21+ runtime",
    "expectedOutput": "Java 21+ runtime",
    "realUse": "Preparing a workstation for Java, Maven, JUnit, and CI development.",
    "code": "public class Main {\n  public static void main(String[] args) {\n    int feature = Runtime.version().feature();\n    System.out.println(feature >= 21 ? \"Java 21+ runtime\" : \"Older Java runtime\");\n  }\n}",
    "practice": {
      "prompt": "Open a terminal with a trusted JDK 21 or newer installed. Compare java -version and javac -version, then compile this example.",
      "check": "Both commands report expected versions, javac succeeds, and java Main prints Java 21+ runtime."
    },
    "quiz": [
      {
        "question": "Which tool compiles Java source?",
        "options": [
          "javac",
          "java -version",
          "A browser stylesheet"
        ],
        "correctIndex": 0,
        "explanation": "javac is the Java compiler provided by a JDK."
      },
      {
        "question": "What does the JVM do?",
        "options": [
          "Executes Java bytecode",
          "Replaces source control",
          "Formats HTML"
        ],
        "correctIndex": 0,
        "explanation": "The JVM executes bytecode and provides a managed runtime."
      }
    ]
  }
];const seen=new Set(data.lessons.map(x=>x.id));for(const x of additions){if(!seen.has(x.id)){data.lessons.push(x);seen.add(x.id);}}})();