(function(){'use strict';window.KNOWLEDGE_LAB_APPLY_JAVA_TL({
  "java-design-association": {
    "t": "Association, aggregation, composition, is-a at has-a",
    "s": "Ihambing ang mga ugnayan ng objects sa Java design.",
    "l": [
      "Kilalanin ang is-a subtype relation",
      "Unawain ang has-a association",
      "Ihambing ang aggregation at composition"
    ],
    "o": "Makapili ng relationship na akma sa lifecycle at ownership.",
    "e": "Ang is-a ay karaniwang inheritance o subtyping: halimbawa, ExpressDelivery ay isang uri ng Delivery. Ang has-a ay relasyon kung saan gumagamit o may hawak na ibang object, gaya ng Order na may OrderItems.\n\nAng aggregation at composition ay mga design concepts na may pagkakaiba sa ownership at lifecycle. Hindi awtomatikong ipinapatupad ng Java syntax lang ang lahat ng ownership rules.",
    "tip": "Magsimula sa totoong relationship sa domain bago magpasya sa extends o field.",
    "h": "Mag-drawing ng simpleng object diagram para makita kung sino ang may responsibilidad sa lifecycle.",
    "m": "Huwag ituring na composition agad ang bawat field; mahalaga ang ownership semantics.",
    "x": "Ang sample ay nagpapakita ng class/object relationships.",
    "r": "Domain models, order line items, at application architecture.",
    "p": "Ilarawan kung is-a o has-a ang Order at OrderItem, saka ipaliwanag ang lifecycle.",
    "c": "Makatarungan ang napiling relationship ayon sa tunay na role ng objects.",
    "q": [
      [
        "Aling relasyon ang karaniwang kumakatawan sa is-a?",
        [
          "Inheritance o subtyping",
          "Object field lang",
          "Database connection"
        ],
        "Is-a ang subtype relationship sa domain."
      ],
      [
        "Kayang bang ipatupad ng Java syntax lang ang buong composition ownership?",
        [
          "Hindi",
          "Oo",
          "Palagi"
        ],
        "Kailangan ng tamang design at lifecycle policy, hindi syntax lang."
      ]
    ]
  },
  "java-design-dependency-injection": {
    "t": "Dependency Injection: constructor, setter, field, at method",
    "s": "Ipasa ang dependencies mula sa labas sa halip na gumawa ng lahat sa loob ng class.",
    "l": [
      "Kilalanin ang collaborator",
      "Gamitin ang constructor injection",
      "Unawain ang iba pang injection patterns"
    ],
    "o": "Makapag-design ng service na madaling i-test gamit ang substitute collaborator.",
    "e": "Sa Dependency Injection, natatanggap ng class ang kailangan nitong collaborator mula sa caller o composition root. Sa constructor injection, required dependency ang ibinibigay sa paggawa pa lang ng object.\n\nMay iba pang forms gaya ng setter at method injection, pero hindi ibig sabihin na kailangan lagi ng malaking DI framework. Ang plain Java constructor ay sapat sa maraming kaso.",
    "tip": "Para sa kinakailangang dependencies, piliin muna ang constructor injection kapag angkop.",
    "h": "Gumawa ng test implementation ng interface at ipasa sa service constructor.",
    "m": "Hindi kapareho ng subclassing ang Dependency Injection.",
    "x": "Ang sample ay gumagamit ng ibinigay na collaborator para gumawa ng result.",
    "r": "Service architecture, test doubles at replaceable providers.",
    "p": "Palitan ang injected implementation nang hindi binabago ang service.",
    "c": "Gumagana ang bagong collaborator sa parehong public API.",
    "q": [
      [
        "Aling technique ang nagbibigay ng dependency habang gumagawa ng object?",
        [
          "Constructor injection",
          "CSS injection",
          "Method overriding"
        ],
        "Tinatanggap ng constructor ang required collaborator."
      ],
      [
        "Pareho ba ang DI sa subclassing?",
        [
          "Hindi",
          "Oo",
          "Palagi"
        ],
        "Dependency supply ang DI; hindi nito kailangang gumamit ng inheritance."
      ]
    ]
  },
  "java-design-instanceof": {
    "t": "instanceof at modern pattern matching",
    "s": "I-check ang runtime type nang mas malinaw at kaunti ang casts.",
    "l": [
      "Unawain ang instanceof type test",
      "Gumamit ng pattern variable",
      "Iwasan ang unnecessary manual casting"
    ],
    "o": "Makapag-access ng type-specific method matapos ang successful match.",
    "e": "Ang instanceof ay pang-check kung compatible ang object sa isang partikular na type sa runtime. Sa Java 21 pattern matching, puwedeng gumawa agad ng typed variable tulad ng if (value instanceof String name).\n\nAvailable lang ang pattern variable kapag lohikal na tiyak ang successful match. Hindi ito database permission check at hindi nito pinapalitan ang secure authorization.",
    "tip": "Gumamit ng instanceof kung may totoong dahilan para mag-branch batay sa runtime type.",
    "h": "Piliin ang pattern variable para iwas duplicate cast pagkatapos ng successful check.",
    "m": "Huwag gawing napakaraming instanceof checks kung dapat polymorphism ang disenyo.",
    "x": "Ang sample ay nagpapakita ng result mula sa matched type.",
    "r": "Validation, mixed-type data, at safe object branching.",
    "p": "Subukan ang String at non-String values sa parehong check.",
    "c": "Tatakbo lang ang String-specific logic kapag nag-match.",
    "q": [
      [
        "Ano ang sinusuri ng instanceof?",
        [
          "Runtime type compatibility",
          "Database permissions",
          "HTML tag name"
        ],
        "Chine-check nito kung compatible ang object sa target type."
      ],
      [
        "Ano ang papel ng String name pagkatapos ng successful instanceof?",
        [
          "Gumagawa ng typed pattern variable",
          "Gumagawa ng database",
          "Nagde-declare ng enum"
        ],
        "Available ang typed name variable sa matagumpay na branch."
      ]
    ]
  },
  "java-jdbc-safe-sql": {
    "t": "SQL injection prevention: bind values at allowlist identifiers",
    "s": "Ihiwalay ang data values sa SQL syntax para sa mas ligtas na queries.",
    "l": [
      "Kilalanin ang SQL injection risk",
      "Gumamit ng PreparedStatement parameters",
      "I-allowlist ang dynamic identifiers"
    ],
    "o": "Makagawa ng query template na hindi direktang nagdurugtong ng untrusted values.",
    "e": "Nangyayari ang SQL injection kapag ang untrusted input ay nakakabago sa structure ng query. Ang PreparedStatement placeholders gaya ng ? ay para sa data values; hindi ito malayang pamalit sa table names o SQL keywords.\n\nKung kailangan talagang dynamic ang column name, gumamit ng mahigpit na listahan ng pinapayagang identifiers. Ang sample ay pattern demonstration lamang at hindi patunay ng production database security.",
    "tip": "I-bind ang data; huwag direktang i-concatenate ang user-entered values sa SQL text.",
    "h": "Ihiwalay sa code ang approved identifier mappings para madaling i-review.",
    "m": "Hindi puwedeng gamitin ang ? placeholder para sa arbitrary SQL syntax o table name.",
    "x": "Ipinapakita ang safe query construction logic sa source, hindi live database result.",
    "r": "JDBC queries, search forms, at defensive data access.",
    "p": "Magdagdag ng invalid identifier at tiyaking tatanggihan ito bago query execution.",
    "c": "Values ay bind parameters; hindi pinapapasok ang hindi pinayagang SQL identifiers.",
    "q": [
      [
        "Puwede bang ipalit ang ? sa table name?",
        [
          "Hindi, karaniwang data value lang ang ibi-bind",
          "Oo, kahit anong SQL syntax",
          "Kung int lang"
        ],
        "Bind parameter ang ? para sa values, hindi arbitrary identifiers."
      ],
      [
        "Sino ang responsible sa pag-close ng returned statement sa sample?",
        [
          "Ang caller",
          "Ang JVM agad",
          "Ang SQL compiler"
        ],
        "Ayon sa return contract, ipinapasa ang resource ownership sa caller."
      ]
    ]
  },
  "java-jdbc-transaction": {
    "t": "JDBC transactions: commit, rollback at stock safety",
    "s": "Gawing consistent ang magkakaugnay na database updates.",
    "l": [
      "Unawain ang transaction boundary",
      "Gamitin ang commit at rollback",
      "Kilalanin ang concurrency at isolation needs"
    ],
    "o": "Maipaliwanag kung kailan kailangan ng database transaction sa stock updates.",
    "e": "Kapag magkakaugnay ang database operations, mahalaga na magtagumpay silang magkakasama o ma-rollback ang hindi pa committed na changes. Sa JDBC, kailangang malinaw kung sino ang may ownership ng Connection at transaction lifecycle.\n\nHindi sapat na nagko-compile ang query template para sabihing safe na ang sabayang checkout. Kailangan ng tamang database isolation, row constraints, retries kung angkop, at real concurrency tests.",
    "tip": "Ilagay ang buong business operation sa tamang transaction scope, hindi hiwa-hiwalay na commits.",
    "h": "Gumamit ng try/finally para ibalik ang tamang connection state kung ikaw ang may ownership nito.",
    "m": "Hindi lahat ng stock race ay maaayos ng commit() lang nang walang tamang isolation.",
    "x": "Ang sample ay architectural template; hindi ito nagpapatakbo ng live database transaction.",
    "r": "Order posting, stock deduction, at multi-table consistency.",
    "p": "Ipaliwanag kung anong operations ang dapat i-rollback kapag pumalya ang stock update.",
    "c": "Walang kalahating committed operation sa ipinapanukalang transaction design.",
    "q": [
      [
        "Ano ang layunin ng rollback?",
        [
          "I-undo ang uncommitted transaction changes",
          "Awtomatikong ibalik ang lahat ng tapos nang receipts",
          "Isara ang Java classes"
        ],
        "Ibinabalik ng rollback ang uncommitted changes ayon sa database transaction."
      ],
      [
        "Patunay ba ng production concurrency safety ang pag-compile ng JDBC template?",
        [
          "Hindi",
          "Oo",
          "Sa Java 21 lang"
        ],
        "Kailangan pa rin ng real isolation at concurrency tests."
      ]
    ]
  },
  "java-project-dao-crud": {
    "t": "Project: DAO CRUD na may validated service",
    "s": "Bumuo ng working in-memory DAO at hiwalay na business service.",
    "l": [
      "Gumawa ng ProductDao interface",
      "Gumamit ng Map sa MemoryDao",
      "I-validate ang create, read, update at delete"
    ],
    "o": "Maipaliwanag ang separation ng data access at business rules sa maliit na app.",
    "e": "Sa project na ito, ang Product record ang nagdadala ng ID, name at stock. Ang ProductDao ay contract para sa data operations, samantalang ang MemoryDao ay gumagamit ng Map para walang kailanganing database credentials.\n\nAng ProductService ang may validation at business rules, at ipinapasa ang storage work sa DAO. Learning implementation ito—hindi durable, distributed o transactional database.",
    "tip": "Ihiwalay ang business validation sa persistence implementation para madaling i-test.",
    "h": "Gumamit ng Optional sa lookup na maaaring walang record at constructor injection sa DAO dependency.",
    "m": "Hindi tumatagal ang data sa in-memory Map kapag tumigil ang process.",
    "x": "Saved: Chicken; Renamed: Fish; Deleted: true; Remaining: 0.",
    "r": "Layered CRUD applications, DAO testing at basic Java services.",
    "p": "Gumawa ng Product ID=2, pangalan Liempo, stock=5; i-rename at subukan ang negative stock.",
    "c": "Independent ang records, preserved ang stock pagkatapos mag-rename, at rejected ang invalid value.",
    "q": [
      [
        "Aling bahagi ang nagche-check ng business rules bago mag-save?",
        [
          "ProductService",
          "Java compiler",
          "CSS selector"
        ],
        "Service layer ang nagva-validate bago tumawag sa DAO."
      ],
      [
        "Nananatili ba ang Map DAO data pagkatapos magsara ang Java process?",
        [
          "Hindi",
          "Oo",
          "Kung static ang record"
        ],
        "Memory-only ang Map; hindi durable storage."
      ]
    ]
  },
  "java-project-resource-close-order": {
    "t": "Project: reverse-order cleanup gamit ang try-with-resources",
    "s": "Patunayang naisara ang JDBC-like handles kahit may failure.",
    "l": [
      "Magdeklara ng maraming AutoCloseable resources",
      "Kilalanin ang reverse close order",
      "Ihiwalay ang cleanup sa transaction ownership"
    ],
    "o": "Mahulaan at ma-verify ang pagkakasunod ng resource closure.",
    "e": "May tatlong fake handles ang project: Connection, Statement at Result. Hindi nito kailangan ng live JDBC connection. Sa try-with-resources, isinasara ng Java ang resources sa reverse declaration order: result, statement, saka connection.\n\nSa totoong JDBC, dapat malinaw kung sino ang may ownership ng Connection at sino ang nagco-commit o nagro-rollback. Ang close() ay hindi guarantee na nailabas na ang lahat ng database locks sa lahat ng sitwasyon.",
    "tip": "Ilista muna kung sino ang owner ng bawat resource bago magdesisyong isara ito.",
    "h": "Ideklara muna ang parent resource, kasunod ang dependents, para unang magsara ang dependents.",
    "m": "Huwag ipagpalagay na PreparedStatement.close() ay automatic na nagre-release ng lahat ng DB locks.",
    "x": "Execute query; Close result; Close statement; Close connection.",
    "r": "JDBC cleanup, file streams at resource-lifecycle testing.",
    "p": "Mag-throw ng RuntimeException sa body at obserbahan ang close lines.",
    "c": "Reverse-order close ang mangyayari bago matapos ang catch handling.",
    "q": [
      [
        "Aling handle ang unang magsasara?",
        [
          "Result handle",
          "Connection handle",
          "Statement handle"
        ],
        "Reverse declaration order ang sinusunod ng try-with-resources."
      ],
      [
        "Anong interface ang kailangan para sa automatic close?",
        [
          "AutoCloseable",
          "Callable",
          "Serializable"
        ],
        "AutoCloseable.close() ang tinatawag pagkatapos ng protected scope."
      ]
    ]
  },
  "java-project-solid-checkout": {
    "t": "Project: SOLID at DI checkout na may replaceable discount",
    "s": "Ikonekta ang SRP, OCP, DIP, DI at DRY sa iisang checkout example.",
    "l": [
      "Ihiwalay ang receipt formatting",
      "Gumawa ng Discount strategy",
      "I-inject ang policy sa Calculator"
    ],
    "o": "Makagawa ng checkout logic na tumatanggap ng bagong discount rule nang hindi inuulit ang core code.",
    "e": "May Discount interface na kontrata ng pricing policy. Ang Standard at FlatDiscount ay magkahiwalay na implementations. Tinatanggap ito ng Calculator sa constructor, kaya nakikita ang Dependency Injection at DIP. Nasa ibang class ang receipt formatting para sa focused SRP responsibility.\n\nSimplified whole-integer amounts ang exercise para sa architecture. Sa real money processing, kailangan ng exact decimal rules, taxes, rounding at proper accounting controls.",
    "tip": "Tukuyin kung sino ang may responsibilidad sa bawat class bago gumawa ng interfaces.",
    "h": "Subukang magdagdag ng PercentDiscount implementation sa parehong Discount contract.",
    "m": "Hindi ibig sabihin ng simpleng integer arithmetic na production-safe na ang money calculations.",
    "x": "Standard: 250; Promo: 225.",
    "r": "Checkout policies, pluggable discounts, at maintainable services.",
    "p": "Gumawa ng PercentDiscount na 10% sa demo subtotal 250.",
    "c": "225 ang bagong total nang hindi binabago ang Calculator o Receipt.",
    "q": [
      [
        "Anong principle ang natutulungan ng bagong Discount implementation?",
        [
          "OCP",
          "One method per class rule",
          "SQL isolation"
        ],
        "Napapalawak ang policy behavior nang hindi nire-rewrite ang Calculator."
      ],
      [
        "Ano ang ini-inject sa Calculator?",
        [
          "Discount implementation",
          "JDBC password",
          "Output text"
        ],
        "Sa constructor injection, ibinibigay ang abstraction implementation."
      ]
    ]
  },
  "java-project-atomic-stock": {
    "t": "Project: sabayang stock use gamit ang AtomicInteger",
    "s": "Tingnan kung paano isa lang ang matagumpay na makakakuha ng natitirang stock.",
    "l": [
      "Kilalanin ang read-then-write race",
      "Gamitin ang compareAndSet loop",
      "Sabayin ang workers sa CountDownLatch"
    ],
    "o": "Makapagpaliwanag ng atomic update at mga limitasyon nito sa totoong POS.",
    "e": "Isipin na iisang pack na lang ang natitira pero dalawang checkout workers ang sabay na nagtatangka. Kapag hiwalay ang basa at sulat, puwedeng pareho nilang maisip na available ang stock. Sa AtomicInteger.compareAndSet(), isa lang ang makakapagpalit sa stock mula 1 patungong 0.\n\nJava 21 virtual threads at CountDownLatch ang gamit para sa sabayang demo. JVM-local lang ang proteksyon nito: hindi nito pinapalitan ang authoritative database transactions, idempotency at audit para sa multi-server checkout.",
    "tip": "Gumamit ng atomic operations para sa shared in-process state, hindi bilang database replacement.",
    "h": "Gamitin ang CountDownLatch para mapalapit ang worker start timing sa concurrency tests.",
    "m": "Hindi patunay ng production oversell safety ang isang JVM-only concurrency sample.",
    "x": "Successful sales: 1; Stock: 0.",
    "r": "Concurrency fundamentals, stock controls at atomic state updates.",
    "p": "Gawing 2 ang stock at magpatakbo ng 3 workers.",
    "c": "Dalawa lang ang successful requests at hindi bumababa sa zero ang stock.",
    "q": [
      [
        "Anong operation ang tumutulong iwasan ang read-then-write race?",
        [
          "compareAndSet",
          "get na hiwalay sa set",
          "System.out.println"
        ],
        "Atomic na nagche-check at nag-u-update ang compareAndSet."
      ],
      [
        "Kinokontrol ba ng AtomicInteger ang stock sa magkakaibang servers sa database?",
        [
          "Hindi",
          "Oo",
          "Kung Java 21 lang"
        ],
        "JVM-local variable lang ang pinoprotektahan nito."
      ]
    ]
  }
});})();
