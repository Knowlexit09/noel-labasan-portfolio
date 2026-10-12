(function(){'use strict';const data=window.KNOWLEDGE_LAB_V2;if(!data?.lessons)return;const additions=[
  {
    "id": "java-project-dao-crud",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Applied Java",
    "order": 40,
    "title": "Project: DAO CRUD with a validated service",
    "definition": "CRUD means Create, Read, Update and Delete. A DAO provides data operations; a service enforces application rules before calling the DAO.",
    "summary": "Build a real compiling Java 21 mini application using a ProductDao interface, in-memory Map storage, Optional, records and constructor injection.",
    "learn": [
      "Design a ProductDao interface for persistence operations",
      "Implement an in-memory Map DAO without a fake database",
      "Enforce name and stock rules in a service",
      "Create, read, update and delete while inspecting outputs"
    ],
    "objective": "Run and explain the Java 21 project: Project: DAO CRUD with a validated service.",
    "explanation": "A useful DAO lesson should demonstrate working layers, not just a definition. Product is a record containing an ID, name and stock. ProductDao describes database-like operations. MemoryDao implements that contract with a Map, so you can run the entire project without credentials. ProductService validates product data and delegates storage operations. Notice that business rules and data access are different responsibilities.\n\nA real JDBC implementation would need migrations, secure credentials, transaction integrity, failure policies and concurrency tests; the in-memory class is just a learning implementation.\n\nTry it yourself: create a second product, reject a negative stock, and verify that rename doesn't change stock.",
    "tip": "Keep database mechanics inside the DAO, business validation inside the service, and display formatting near the user interface.",
    "hack": "Use Optional for a lookup that may fail and constructor injection to substitute a fake DAO in tests.",
    "mistake": "Map-based storage is temporary and not transactional. It cannot enforce durable multi-user inventory integrity.",
    "expected": "Saved: Chicken\nRenamed: Fish\nDeleted: true\nRemaining: 0",
    "expectedOutput": "Saved: Chicken\nRenamed: Fish\nDeleted: true\nRemaining: 0",
    "realUse": "Build a real compiling Java 21 mini application using a ProductDao interface, in-memory Map storage, Optional, records and constructor injection.",
    "code": "import java.util.*;\npublic class Main {\n  record Product(int id,String name,int stock) {}\n  interface ProductDao {\n    void save(Product item);\n    Optional<Product> find(int id);\n    boolean delete(int id);\n    int count();\n  }\n  static class MemoryDao implements ProductDao {\n    private final Map<Integer,Product> data = new HashMap<>();\n    public void save(Product item){data.put(item.id(),item);}\n    public Optional<Product> find(int id){return Optional.ofNullable(data.get(id));}\n    public boolean delete(int id){return data.remove(id)!=null;}\n    public int count(){return data.size();}\n  }\n  static class ProductService {\n    private final ProductDao dao;\n    ProductService(ProductDao dao){this.dao=dao;}\n    void create(int id,String name,int stock){\n      if(name==null||name.isBlank()||stock<0)throw new IllegalArgumentException(\"invalid product\");\n      dao.save(new Product(id,name,stock));\n    }\n    String rename(int id,String name){\n      if(name==null||name.isBlank())throw new IllegalArgumentException(\"name\");\n      Product old=dao.find(id).orElseThrow(()->new NoSuchElementException(\"product\"));\n      dao.save(new Product(old.id(),name,old.stock()));\n      return dao.find(id).orElseThrow().name();\n    }\n  }\n  public static void main(String[] args){\n    ProductDao dao=new MemoryDao();\n    ProductService service=new ProductService(dao);\n    service.create(1,\"Chicken\",4);\n    System.out.println(\"Saved: \"+dao.find(1).orElseThrow().name());\n    System.out.println(\"Renamed: \"+service.rename(1,\"Fish\"));\n    System.out.println(\"Deleted: \"+dao.delete(1));\n    System.out.println(\"Remaining: \"+dao.count());\n  }\n}",
    "practice": {
      "prompt": "Add a second product (ID=2, name=Liempo, stock=5), call rename on ID=2, and add a test rejecting a negative stock.",
      "check": "Products remain independent, the rename preserves quantity, and invalid stock triggers an exception without inserting the record."
    },
    "quiz": [
      {
        "question": "Which component checks the business rule before saving?",
        "options": [
          "ProductService",
          "The Java compiler",
          "A CSS selector"
        ],
        "correctIndex": 0,
        "explanation": "The service validates inputs and then asks the DAO to store them."
      },
      {
        "question": "Does a Map DAO persist after the Java process exits?",
        "options": [
          "No",
          "Yes",
          "Only if the record is static"
        ],
        "correctIndex": 0,
        "explanation": "An in-memory Map is not durable storage."
      }
    ]
  },
  {
    "id": "java-project-resource-close-order",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Intermediate",
    "stage": "Exceptions & IO",
    "order": 35,
    "title": "Project: try-with-resources closes JDBC-like handles in reverse order",
    "definition": "try-with-resources closes registered AutoCloseable resources in reverse declaration order, including when the protected operation throws.",
    "summary": "Use three fake closeable handles to prove the exact closure order without opening a real JDBC connection.",
    "learn": [
      "Declare multiple AutoCloseable resources in one try header",
      "Predict which handle closes first",
      "Distinguish deterministic resource closure from garbage collection",
      "Explain who owns Connection, Statement and ResultSet"
    ],
    "objective": "Run and explain the Java 21 project: Project: try-with-resources closes JDBC-like handles in reverse order.",
    "explanation": "A common Java exam question asks why a PreparedStatement and a Connection should be closed. This project makes the language behavior visible without requiring a database. Three handles represent connection, statement and result. All implement AutoCloseable. At the end of the block, Java closes them in reverse order: result, statement, connection.\n\nIn real JDBC, owning connections and handling transactions needs additional care: a DAO should not close a connection managed by its caller. If the application uses a pool, close typically returns its logical connection to that pool. Resource cleanup does not mean every query holds a whole-database lock.\n\nTry it yourself: throw an exception inside the block; observe that the handles still close.",
    "tip": "Write down who owns each resource. Try-with-resources handles closure; it doesn't decide the architectural ownership for you.",
    "hack": "Declare the longest-lived resource first and dependent resources afterward, so they are released first in reverse order.",
    "mistake": "Avoid teaching 'PreparedStatement.close guarantees every lock is released'—transaction state matters too.",
    "expected": "Execute query\nClose result\nClose statement\nClose connection",
    "expectedOutput": "Execute query\nClose result\nClose statement\nClose connection",
    "realUse": "Use three fake closeable handles to prove the exact closure order without opening a real JDBC connection.",
    "code": "public class Main {\n  static class Handle implements AutoCloseable {\n    private final String name;\n    Handle(String name){this.name=name;}\n    @Override public void close(){System.out.println(\"Close \"+name);}\n  }\n  public static void main(String[] args){\n    try(Handle connection=new Handle(\"connection\");\n        Handle statement=new Handle(\"statement\");\n        Handle result=new Handle(\"result\")){\n      System.out.println(\"Execute query\");\n    }\n  }\n}",
    "practice": {
      "prompt": "Add a catch block for RuntimeException and throw a RuntimeException from the body. Predict what closes and what the catch displays.",
      "check": "All three Close lines still appear, in reverse order, before catch handling finishes."
    },
    "quiz": [
      {
        "question": "Which handle closes first in this example?",
        "options": [
          "Result handle",
          "Connection handle",
          "Statement handle"
        ],
        "correctIndex": 0,
        "explanation": "Java closes resources in reverse order of declaration."
      },
      {
        "question": "What interface enables automatic closure?",
        "options": [
          "AutoCloseable",
          "Callable",
          "Serializable"
        ],
        "correctIndex": 0,
        "explanation": "try-with-resources invokes AutoCloseable.close()."
      }
    ]
  },
  {
    "id": "java-project-solid-checkout",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Design Principles",
    "order": 110,
    "title": "Project: SOLID and DI checkout with replaceable discounts",
    "definition": "A strategy interface, constructor injection and focused classes allow a checkout workflow to change its discount policy without rewriting the calculator.",
    "summary": "Build one cohesive, compiling example that connects SRP, OCP, DIP, DI and DRY in a familiar checkout.",
    "learn": [
      "Separate discount calculation from receipt formatting",
      "Inject an abstract Discount strategy",
      "Swap policies without editing the calculator",
      "Validate invalid values and guard integer overflow"
    ],
    "objective": "Run and explain the Java 21 project: Project: SOLID and DI checkout with replaceable discounts.",
    "explanation": "SOLID principles are easier to understand when one project uses them together. Discount is a strategy contract. Standard and FlatDiscount implement different policies. Calculator receives a Discount at construction time, demonstrating dependency injection and dependency inversion. Receipt formatting is a separate class, supporting single responsibility. A shared total method prevents duplicated checkout logic.\n\nThis example intentionally uses whole integer prices to keep the focus on architecture. For real money, define exact decimal/cent precision, rounding, taxes and accounting rules before implementing payment operations.\n\nTry it yourself: add a percentage-discount strategy without modifying Calculator.",
    "tip": "State the responsibility of each class and the variation point before introducing interfaces.",
    "hack": "Use Math.multiplyExact to detect integer overflow in this intentionally integer-only teaching example.",
    "mistake": "Do not assume simple integer discounts automatically satisfy financial precision and legal rounding requirements.",
    "expected": "Standard: 250\nPromo: 225",
    "expectedOutput": "Standard: 250\nPromo: 225",
    "realUse": "Build one cohesive, compiling example that connects SRP, OCP, DIP, DI and DRY in a familiar checkout.",
    "code": "public class Main {\n  interface Discount {int reduce(int subtotal);}\n  static class Standard implements Discount {\n    public int reduce(int subtotal){return 0;}\n  }\n  static class FlatDiscount implements Discount {\n    private final int amount;\n    FlatDiscount(int amount){this.amount=amount;}\n    public int reduce(int subtotal){return Math.min(amount,subtotal);}\n  }\n  static class Calculator {\n    private final Discount discount;\n    Calculator(Discount discount){this.discount=discount;}\n    int total(int unitPrice,int qty){\n      if(unitPrice<0||qty<0)throw new IllegalArgumentException(\"negative input\");\n      int subtotal=Math.multiplyExact(unitPrice,qty);\n      return Math.subtractExact(subtotal,discount.reduce(subtotal));\n    }\n  }\n  static class Receipt {\n    String show(String label,int total){return label+\": \"+total;}\n  }\n  public static void main(String[] args){\n    Receipt receipt=new Receipt();\n    System.out.println(receipt.show(\"Standard\",new Calculator(new Standard()).total(125,2)));\n    System.out.println(receipt.show(\"Promo\",new Calculator(new FlatDiscount(25)).total(125,2)));\n  }\n}",
    "practice": {
      "prompt": "Implement PercentDiscount that reduces the subtotal by ten percent for whole integer practice totals; inject it through Calculator.",
      "check": "The new policy works without editing Calculator or Receipt; for subtotal 250 it yields a total of 225."
    },
    "quiz": [
      {
        "question": "Which principle is supported by providing a different Discount implementation?",
        "options": [
          "OCP",
          "A requirement for one method per class",
          "SQL isolation"
        ],
        "correctIndex": 0,
        "explanation": "The calculator accepts new strategies without changing its core logic."
      },
      {
        "question": "What is injected into Calculator?",
        "options": [
          "A Discount implementation",
          "A JDBC password",
          "The output text"
        ],
        "correctIndex": 0,
        "explanation": "Constructor injection supplies the policy abstraction."
      }
    ]
  },
  {
    "id": "java-project-atomic-stock",
    "categoryId": "java",
    "mode": "reference",
    "language": "Java",
    "verified": true,
    "level": "Advanced",
    "stage": "Concurrency & JVM",
    "order": 45,
    "title": "Project: simultaneous stock use with AtomicInteger (Java 21)",
    "definition": "AtomicInteger.compareAndSet performs a conditional atomic update, which can coordinate competing threads over a single JVM-local integer.",
    "summary": "Run two Java 21 virtual threads against one remaining item and verify that only one succeeds, every time.",
    "learn": [
      "Explain a race condition with shared stock",
      "Use an atomic compare-and-set loop",
      "Start work together with CountDownLatch",
      "Understand why a JVM-local atomic is not a durable database transaction"
    ],
    "objective": "Run and explain the Java 21 project: Project: simultaneous stock use with AtomicInteger (Java 21).",
    "explanation": "Suppose only one pack remains and two checkout workers try to take it. A naive read-then-write might let both think stock is available. This project uses AtomicInteger.compareAndSet so only one worker can change stock from 1 to 0. CountDownLatch lets both workers start together. We wait for both outcomes before printing results so the output is reproducible.\n\nThis is not a production POS implementation. AtomicInteger protects just one in-process number, not data across several application servers or durable transactions. Production checkout must enforce stock conditions inside an authoritative database transaction, with idempotency, audit and appropriate concurrency testing.\n\nRequires Java 21 due to the virtual-thread executor. The third-party online compiler must also support Java 21 for this example.",
    "tip": "Use atomic tools for shared in-process state, but never treat them as substitutes for a durable database transaction.",
    "hack": "CountDownLatch makes it easier to reproduce a simultaneous start in concurrency exercises.",
    "mistake": "A concurrent Java demo alone does not validate database-level oversell protection in a deployed POS.",
    "expected": "Successful sales: 1\nStock: 0",
    "expectedOutput": "Successful sales: 1\nStock: 0",
    "realUse": "Run two Java 21 virtual threads against one remaining item and verify that only one succeeds, every time.",
    "code": "import java.util.concurrent.*;\nimport java.util.concurrent.atomic.AtomicInteger;\npublic class Main {\n  static class Inventory {\n    final AtomicInteger available=new AtomicInteger(1);\n    boolean take(){\n      while(true){\n        int current=available.get();\n        if(current<=0)return false;\n        if(available.compareAndSet(current,current-1))return true;\n      }\n    }\n  }\n  public static void main(String[] args) throws Exception {\n    Inventory inventory=new Inventory();\n    AtomicInteger successful=new AtomicInteger();\n    CountDownLatch start=new CountDownLatch(1);\n    try(ExecutorService pool=Executors.newVirtualThreadPerTaskExecutor()){\n      Future<?> first=pool.submit(()->{\n        try{start.await();if(inventory.take())successful.incrementAndGet();}\n        catch(InterruptedException e){Thread.currentThread().interrupt();}\n      });\n      Future<?> second=pool.submit(()->{\n        try{start.await();if(inventory.take())successful.incrementAndGet();}\n        catch(InterruptedException e){Thread.currentThread().interrupt();}\n      });\n      start.countDown();\n      first.get(); second.get();\n    }\n    System.out.println(\"Successful sales: \"+successful.get());\n    System.out.println(\"Stock: \"+inventory.available.get());\n  }\n}",
    "practice": {
      "prompt": "Change starting stock to two and submit three workers. Check that exactly two can succeed and that stock never becomes negative.",
      "check": "Two successful reservations leave zero stock; the third worker returns false."
    },
    "quiz": [
      {
        "question": "Which action avoids the read-then-write race on one AtomicInteger?",
        "options": [
          "compareAndSet",
          "get followed by a separate set",
          "System.out.println"
        ],
        "correctIndex": 0,
        "explanation": "compareAndSet checks and updates atomically."
      },
      {
        "question": "Does AtomicInteger coordinate separate servers through the database?",
        "options": [
          "No",
          "Yes",
          "Only with Java 21"
        ],
        "correctIndex": 0,
        "explanation": "It only protects one JVM-local state variable."
      }
    ]
  }
];const known=new Set(data.lessons.map(x=>x.id));for(const l of additions){if(!known.has(l.id)){data.lessons.push(l);known.add(l.id);}}})();