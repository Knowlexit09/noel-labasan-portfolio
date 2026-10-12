(function(){'use strict';const i18n=window.KNOWLEDGE_LAB_I18N;if(!i18n?.lessons?.tl)return;
const versions={
  "java-review-class-instance": {
    "title": "Java Class at Object: Blueprint at Aktuwal na Instance",
    "summary": "Unawain kung paano nagiging totoong object ang blueprint na class.",
    "definition": "Ang class ay blueprint ng data at behavior. Ang object ay aktuwal na instance na ginawa mula sa class, karaniwan gamit ang new.",
    "learn": [
      "Ano ang pinagkaiba ng class at object",
      "Ano ang ibig sabihin ng instantiation",
      "Paano tumatakbo ang constructor"
    ],
    "objective": "Makagawa ng object at maipaliwanag kung saan nanggaling ang mga field nito.",
    "explanation": "Isipin ang Product bilang standard na disenyo ng product record. Hindi pa ito isang aktuwal na Liempo item hangga't walang ginagawang instance. Kapag gumamit ka ng new Product(\"Liempo\"), tatawagin ang constructor at gagawa ng bagong object.\n\nSubukan mong gumawa ng dalawang Product object para makita na puwede silang magkaroon ng magkakaibang pangalan.",
    "tip": "Pangalanan ang class ayon sa konsepto, gaya ng Product o Order, hindi basta Class1.",
    "hack": "Hanapin ang new keyword para makita ang mismong pag-create ng instance.",
    "mistake": "Hindi pareho ang class declaration at object instantiation.",
    "expected": "Liempo ang ipinapakita ng original sample.",
    "realUse": "Ito ang simula ng pagmomodelo ng customer, product, at order records.",
    "practice": {
      "prompt": "Gumawa ng isa pang Product na Chicken at i-print ang name nito.",
      "check": "Lalabas ang Chicken nang hindi binabago ang unang object."
    },
    "quiz": [
      {
        "question": "Ano ang object?",
        "options": [
          "Aktuwal na instance ng class",
          "Package declaration",
          "Primitive type lamang"
        ],
        "correctIndex": 0,
        "explanation": "Ang object ay instance na nilikha gamit ang class."
      },
      {
        "question": "Ano ang gamit ng new?",
        "options": [
          "Gumawa ng object at tumawag ng constructor",
          "Mag-save sa database",
          "Gumawa ng CSS"
        ],
        "correctIndex": 0,
        "explanation": "new ang nagsisimula ng constructor-based instantiation."
      }
    ]
  },
  "java-review-modern-interface": {
    "title": "Java Interface: Contract, Default, Static at Private Methods",
    "summary": "Hindi na method declaration lang ang interface sa modern Java.",
    "definition": "Ang interface ay kontratang naglalarawan ng behavior na maaaring i-implement ng class. Maaari rin itong maglaman ng default, static, at private methods na may implementation.",
    "learn": [
      "Abstract method declaration at method body",
      "Default at static methods",
      "Private helper methods sa interface",
      "Multiple interface implementation"
    ],
    "objective": "Makilala ang iba't ibang method na puwedeng laman ng modern Java interface.",
    "explanation": "Parang kasunduan ang interface: kapag sinabi ng class na implements Message, kailangan nitong sundin ang contract. Pero hindi ito nangangahulugang lahat ng methods ay declaration lang.\n\nMay default method na nagbibigay ng ready-made behavior, static helper na tatawagin gamit ang interface name, at private helper para hindi maulit ang internal code. Sa example, ginagamit ng label() ang private wrap() para buuin ang output.\n\nSubukan mong baguhin ang prefix na binubuo ng wrap().",
    "tip": "Dapat malinaw ang layunin ng interface; huwag pagsamahin ang hindi magkakaugnay na methods.",
    "hack": "Gumamit ng default method kung may shared behavior na makakatulong sa mga implementer.",
    "mistake": "Hindi tama ang 'interface = method declarations only' sa modern Java.",
    "expected": "Message: Ready at Java ang dalawang output.",
    "realUse": "DAO contracts, notification services, at iba pang application interfaces.",
    "practice": {
      "prompt": "Palitan ang prefix na Message: ng Alert: sa private helper.",
      "check": "Magiging Alert: Ready ang unang output."
    },
    "quiz": [
      {
        "question": "Puwede bang may body ang default method sa interface?",
        "options": [
          "Oo",
          "Hindi",
          "Sa abstract class lang"
        ],
        "correctIndex": 0,
        "explanation": "Puwede ang default method implementation sa interface."
      },
      {
        "question": "Puwede bang mag-implement ng maraming interfaces ang isang class?",
        "options": [
          "Oo",
          "Hindi",
          "Isa lang lagi"
        ],
        "correctIndex": 0,
        "explanation": "Maraming interface contracts ang maaaring sundin ng isang Java class."
      }
    ]
  },
  "java-review-exception-tree": {
    "title": "Exception Hierarchy: Throwable, Exception at Error",
    "summary": "Kilalanin ang tunay na parent classes bago mag-aral ng checked at unchecked exceptions.",
    "definition": "Ang Throwable ang common superclass ng Exception at Error. Ang RuntimeException naman ay subclass ng Exception.",
    "learn": [
      "Alin ang root ng hierarchy",
      "Saan kabilang ang Error",
      "Saan kabilang ang RuntimeException",
      "Paano ginagamit ang isAssignableFrom"
    ],
    "objective": "Mai-drawing at maipaliwanag ang hierarchy nang hindi napagpapalit ang Exception at Error.",
    "explanation": "Isipin ang family tree sa Java: nasa itaas ang Throwable. May dalawang mahalagang sangay ito—Exception at Error. Sa ilalim ng Exception, may RuntimeException na pinagmumulan ng maraming unchecked exceptions.\n\nKaya mali kung sasabihin na parent ng Error ang Exception. Magkahiwalay silang branch ng Throwable.\n\nSa example, sinusuri mismo ng Java ang class relationships. Tingnan kung bakit false ang huling output.",
    "tip": "Iguhit muna ang hierarchy: Throwable → Exception → RuntimeException at Throwable → Error.",
    "hack": "Gamitin ang isAssignableFrom para mag-experiment sa type relationships.",
    "mistake": "Hindi subclass ng Exception ang Error.",
    "expected": "true, true, false sa tatlong linya.",
    "realUse": "Tamang pag-handle ng application errors at pag-intindi sa checked/unchecked exceptions.",
    "practice": {
      "prompt": "I-print ang RuntimeException.class.getSuperclass().getSimpleName().",
      "check": "Exception ang lumalabas bilang direct superclass."
    },
    "quiz": [
      {
        "question": "Sino ang common parent ng Exception at Error?",
        "options": [
          "Throwable",
          "RuntimeException",
          "SQLException"
        ],
        "correctIndex": 0,
        "explanation": "Parehong nagmumula sa Throwable ang dalawang pangunahing sangay."
      },
      {
        "question": "Subclass ba ng Exception ang Error?",
        "options": [
          "Hindi",
          "Oo",
          "Depende sa JDK"
        ],
        "correctIndex": 0,
        "explanation": "Magkahiwalay na branch ang Exception at Error."
      }
    ]
  },
  "java-review-checked": {
    "title": "Checked Exception: Catch o Declare",
    "summary": "Bakit kailangang i-handle ng compiler ang ilang exception bago patakbuhin ang program.",
    "definition": "Ang checked exception ay exception na kailangang i-catch o ideklara gamit ang throws kung maaari itong lumabas mula sa method.",
    "learn": [
      "Ano ang checked exception",
      "Ano ang catch-or-declare",
      "Pagkakaiba ng compile-time checking at runtime failure"
    ],
    "objective": "Makagamit ng try/catch sa isang IOException scenario.",
    "explanation": "Kapag magbabasa ng file ang program, posibleng wala ang file o hindi ito ma-access. Kaya hinihingi ng Java compiler na malinaw kung paano mo hahawakan ang IOException.\n\nPero tandaan: hindi ibig sabihin ng 'compile-time exception' na sa compilation naganap ang file error. Sa runtime nangyayari ang failure; sa compilation lang chine-check kung may catch o throws.\n\nSa example, sinadyang mag-throw ng IOException para makita ang catch block.",
    "tip": "I-handle ang exception sa layer na kayang magbigay ng maayos na recovery o error message.",
    "hack": "Gamitin ang specific exception class para alam ng caller kung anong failure ang puwedeng mangyari.",
    "mistake": "Hindi sa compile time kailangang mangyari ang checked exception.",
    "expected": "Handled: File unavailable ang output.",
    "realUse": "File operations, JDBC database operations, at external integrations.",
    "practice": {
      "prompt": "Palitan ang read(true) ng read(false).",
      "check": "Walang exception o error message na ipi-print."
    },
    "quiz": [
      {
        "question": "Kailan nangyayari ang IOException failure?",
        "options": [
          "Habang tumatakbo ang program",
          "Sa compilation lang",
          "Hindi kailanman"
        ],
        "correctIndex": 0,
        "explanation": "Sa runtime nangyayari ang actual file operation failure."
      },
      {
        "question": "Ano ang kailangan kung checked exception ang puwedeng lumabas?",
        "options": [
          "Catch o throws",
          "CSS selector",
          "Palaging System.exit"
        ],
        "correctIndex": 0,
        "explanation": "Ipinapatupad ng compiler ang catch-or-declare rule."
      }
    ]
  },
  "java-review-unchecked": {
    "title": "Unchecked Exception: RuntimeException at Error",
    "summary": "Unawain kung alin ang hindi kailangang i-catch o ideklara ng compiler.",
    "definition": "Unchecked ang RuntimeException family at Error family; hindi sila sakop ng mandatory catch-or-declare rule.",
    "learn": [
      "Ano ang unchecked exception",
      "Mga halimbawa ng RuntimeException",
      "Bakit iba ang Error sa ordinary validation failure"
    ],
    "objective": "Makapili kung kailan magva-validate at kailan magha-handle ng runtime exception.",
    "explanation": "Halimbawa, ang quantity na zero ay hindi valid para sa ilang operations. Puwedeng mag-throw ng IllegalArgumentException at i-handle ito sa angkop na layer.\n\nHindi nire-require ng compiler ang catches para sa RuntimeException, pero hindi ibig sabihin na harmless ito. Ang mga Error tulad ng OutOfMemoryError ay kadalasang seryosong problema na hindi dapat basta balewalain.\n\nSubukan mong bigyan ng valid quantity ang method.",
    "tip": "Ayusin ang ugat ng bugs; huwag takpan lahat gamit ang empty catch.",
    "hack": "Gumamit ng validation method na malinaw ang accepted inputs.",
    "mistake": "Ang unchecked ay puwedeng magpabagsak ng execution kahit hindi required ang catch.",
    "expected": "Invalid: quantity ang unang output.",
    "realUse": "Input contracts, defensive application services, at diagnostics.",
    "practice": {
      "prompt": "Gamitin ang positive(3) sa halip na positive(0).",
      "check": "3 ang ipi-print sa successful path."
    },
    "quiz": [
      {
        "question": "Kailangan bang palaging i-declare ang RuntimeException gamit ang throws?",
        "options": [
          "Hindi",
          "Oo",
          "Kapag may SQL lang"
        ],
        "correctIndex": 0,
        "explanation": "Unchecked ang RuntimeException family."
      },
      {
        "question": "Dapat bang ituring na ordinary form validation ang OutOfMemoryError?",
        "options": [
          "Hindi",
          "Oo",
          "Pareho lang sa NumberFormatException"
        ],
        "correctIndex": 0,
        "explanation": "Kadalasang seryosong runtime problem ang ganitong Error."
      }
    ]
  },
  "java-pattern-dao": {
    "title": "DAO — Data Access Object: Hiwalay ang Data at Business Logic",
    "summary": "Alamin kung bakit mas magandang ihiwalay ang pagkuha ng data sa pagproseso ng business rules.",
    "definition": "Ang DAO ay design pattern na naglalagay ng data-access operations sa hiwalay na layer. Madalas itong gumagamit ng interface para maiba ang storage implementation.",
    "learn": [
      "Ano ang DAO pattern",
      "Ano ang tungkulin ng ProductDao interface",
      "Bakit useful ang memory DAO sa testing",
      "Ano ang pagkakaiba ng DAO at business service"
    ],
    "objective": "Makabuo ng service na gumagamit ng DAO contract nang walang direktang SQL dependency.",
    "explanation": "Halimbawa, may POS application kang kailangang kumuha ng product name. Kung nasa loob ng bawat pricing method ang SQL, magiging mahirap baguhin o i-test ang system.\n\nSa DAO pattern, ProductDao ang kontrata sa pagkuha ng data. Puwedeng MemoryProductDao muna habang nag-aaral at JDBC DAO naman kapag may totoong database. Ang ProductService ay hindi kailangang malaman ang detalye ng data storage.\n\nHindi kailangan ng live database para mapag-aralan ang separation of responsibilities; in-memory ang example at hindi pekeng SQL connection.",
    "tip": "Ilagay ang data-access concerns sa DAO at ang business decisions sa service.",
    "hack": "Madaling gumawa ng test DAO para mabilis ma-verify ang business logic nang walang database.",
    "mistake": "Hindi mandatory ang interface sa bawat DAO, bagaman karaniwan at kapaki-pakinabang ito.",
    "expected": "Liempo ang output mula sa in-memory DAO.",
    "realUse": "Product lookup, customer repositories, at back-office applications.",
    "practice": {
      "prompt": "Palitan ang hinahanap na product ID mula 1 hanggang 2.",
      "check": "Not found ang ibabalik ng sample DAO."
    },
    "quiz": [
      {
        "question": "Para saan ang DAO?",
        "options": [
          "Ihiwalay ang data access sa business logic",
          "Mag-style ng HTML",
          "Magpalit ng Java version"
        ],
        "correctIndex": 0,
        "explanation": "Mas malinaw ang responsibilidad ng data-access layer."
      },
      {
        "question": "Totoong database ba ang MemoryProductDao?",
        "options": [
          "Hindi",
          "Oo",
          "Awtomatikong MySQL"
        ],
        "correctIndex": 0,
        "explanation": "In-memory implementation ito para sa demonstrasyon at tests."
      }
    ]
  },
  "java-principle-srp": {
    "title": "SRP — Single Responsibility Principle",
    "summary": "Isang malinaw na dahilan para magbago ang isang class.",
    "definition": "Ayon sa SRP, dapat may isang pangunahing reason to change ang class o module—isang malinaw na responsibility o concern.",
    "learn": [
      "Ano ang reason to change",
      "Bakit hiwalay ang price calculation at receipt formatting",
      "Ano ang maling interpretasyon sa SRP"
    ],
    "objective": "Makilala kung alin sa dalawang responsibilities ang dapat ihiwalay.",
    "explanation": "Isipin mong ang iisang class ang nagko-compute ng presyo, nagpi-print ng resibo, at kumokonekta sa database. Kapag may pagbabago sa format ng receipt, baka maapektuhan ang pricing kahit hindi naman dapat.\n\nSa example, PriceCalculator ang may pananagutan sa arithmetic; ReceiptFormatter naman sa presentation. Hindi ibig sabihin ng SRP na isang method lang ang puwede sa bawat class. Ang mahalaga, magkaugnay ang tungkulin ng mga methods.",
    "tip": "Itanong: anong klase ng pagbabago ang dapat makaapekto sa class na ito?",
    "hack": "Kung magkahiwalay ang dahilan ng pagbabago, pag-isipan ang paghahati ng class.",
    "mistake": "SRP ay hindi 'one method per class'.",
    "expected": "Total: 250 ang output.",
    "realUse": "Mas maintainable na services, reporting modules, at order processing.",
    "practice": {
      "prompt": "Baguhin ang receipt text mula Total: patungong Subtotal: nang hindi ginagalaw ang PriceCalculator.",
      "check": "250 pa rin ang computation; formatting lang ang nabago."
    },
    "quiz": [
      {
        "question": "Ano ang pangunahing SRP guideline?",
        "options": [
          "Isang cohesive reason to change",
          "Isa lang dapat ang method",
          "Bawal gumamit ng constructor"
        ],
        "correctIndex": 0,
        "explanation": "Ang SRP ay tungkol sa iisang responsibility o reason to change."
      },
      {
        "question": "Bakit hiwalay ang formatting sa pricing?",
        "options": [
          "Magkaiba ang dahilan ng pagbabago nila",
          "Para dumami lang ang files",
          "Dahil bawal ang return"
        ],
        "correctIndex": 0,
        "explanation": "Magkaibang concern ang presentation at calculation."
      }
    ]
  },
  "java-principle-dry": {
    "title": "DRY — Don't Repeat Yourself",
    "summary": "Iwasan ang pagdoble ng iisang business rule sa maraming lugar.",
    "definition": "Ang DRY ay prinsipyo ng pag-iwas sa duplicated knowledge o business logic para isang lugar lang kailangang ayusin ang isang rule.",
    "learn": [
      "Ano ang duplicated knowledge",
      "Paano gamitin ang reusable method",
      "Bakit puwede ring makasama ang sobrang abstraction"
    ],
    "objective": "Gumamit ng iisang calculation helper sa maraming order lines.",
    "explanation": "Kapag naka-copy-paste ang price × quantity calculation sa iba-ibang modules, puwedeng may isang ma-update at may isa pang maiwan. Kaya mas magandang gumawa ng iisang malinaw na method, gaya ng lineTotal().\n\nPero huwag din basta pagsamahin ang lahat ng code na magkamukha kung magkaiba naman ang business rules. Ang DRY ay para sa tunay na shared knowledge, hindi code golf.",
    "tip": "Ulit-ulit bang iisang business rule ang binabago mo? Posibleng candidate iyon para sa reusable method.",
    "hack": "Bigyan ng malinaw na pangalan ang helper para hindi kailangang alamin ang buong implementation kada gamit.",
    "mistake": "Hindi lahat ng kaparehong syntax ay kailangang gawing iisang abstraction.",
    "expected": "250 at 270 ang dalawang output.",
    "realUse": "Pricing helpers, inventory validations, at business policies.",
    "practice": {
      "prompt": "Magdagdag ng lineTotal(50,4) nang hindi kinokopya ang formula.",
      "check": "200 ang magiging ikatlong output."
    },
    "quiz": [
      {
        "question": "Ano ang gustong iwasan ng DRY?",
        "options": [
          "Duplicated business rules o knowledge",
          "Lahat ng magkatulad na punctuation",
          "Lahat ng method parameters"
        ],
        "correctIndex": 0,
        "explanation": "Pinapababa ng DRY ang risk ng inconsistent changes."
      },
      {
        "question": "Maganda bang laging pag-isahin ang dalawang unrelated logic?",
        "options": [
          "Hindi",
          "Oo",
          "Kailangan para mag-compile"
        ],
        "correctIndex": 0,
        "explanation": "Puwedeng lumala ang coupling kapag sobrang abstract."
      }
    ]
  },
  "java-jdbc-preparedstatement": {
    "title": "JDBC PreparedStatement: Parameters at SQL Safety",
    "summary": "Matutunan ang prepared SQL at kung bakit kailangan ang typed binding at resource cleanup.",
    "definition": "Ang PreparedStatement ay JDBC interface para sa precompiled/parameterized SQL operations. Extends ito sa Statement na may AutoCloseable contract.",
    "learn": [
      "Bakit may ? placeholder sa SQL",
      "Paano gumagana ang setInt at setString",
      "Paano i-close ang statement at ResultSet",
      "Bakit iba ang compilation sample sa totoong database query"
    ],
    "objective": "Makabasa ng ligtas na parameterized product lookup at maipaliwanag ang resource lifetime.",
    "explanation": "Halimbawa, maghahanap ka ng product base sa ID na ibinigay ng user. Delikadong basta idikit ang raw input sa SQL string. Sa PreparedStatement, ilalagay ang ? placeholder at pagkatapos ay ibibigay ang value gamit ang setInt() o setString().\n\nAng PreparedStatement ay resource na dapat i-close pagkatapos gamitin. Nasa totoong try-with-resources block ang sample lookup method, kasama ang ResultSet. Pero walang kinokonektahang database ang Main method; pini-verify lang nito na AutoCloseable ang PreparedStatement interface. Kailangan ng JDBC driver at database setup para patakbuhin ang actual query.",
    "tip": "Gumamit ng parameter binding para sa values at allowlist para sa dynamic identifiers.",
    "hack": "Ilagay sa try-with-resources ang statement at ResultSet para malinaw ang cleanup.",
    "mistake": "Hindi puwedeng gamitin ang ? bilang arbitrary table o column name. Hindi rin sapat ang prepared statement para sa lahat ng security risks.",
    "expected": "PreparedStatement AutoCloseable: true ang output ng stand-alone reference.",
    "realUse": "Product search, database reports, at safe CRUD operations.",
    "practice": {
      "prompt": "Gumawa ng hiwalay na lookup method gamit ang WHERE name = ? at setString(1,name).",
      "check": "Naka-bind ang name bilang value; hindi kinokonekta ang user input sa SQL syntax."
    },
    "quiz": [
      {
        "question": "Ano ang gamit ng ? sa prepared SQL?",
        "options": [
          "Bound value parameter",
          "Arbitrary SQL table name",
          "Class name"
        ],
        "correctIndex": 0,
        "explanation": "Value ang dini-define ng placeholder, hindi SQL structure."
      },
      {
        "question": "AutoCloseable ba ang PreparedStatement?",
        "options": [
          "Oo",
          "Hindi",
          "Sa Spring lang"
        ],
        "correctIndex": 0,
        "explanation": "Minamana nito ang resource-close contract mula sa Statement."
      }
    ]
  },
  "java-review-autocloseable": {
    "title": "AutoCloseable at Try-with-Resources: Automatic Cleanup",
    "summary": "Bakit dapat isara ang mga resources pagkatapos gamitin.",
    "definition": "Ang AutoCloseable ay interface na may close() method. Kapag nasa try-with-resources ang object, ang Java mismo ang tumatawag ng close() sa pagtatapos ng scope.",
    "learn": [
      "Kailan tumatakbo ang close()",
      "Anong resources ang puwedeng isara",
      "Ano ang kaibahan ng resource leak at memory leak",
      "Bakit hindi automatic na may exclusive database lock ang statement"
    ],
    "objective": "Makapagpakita ng deterministic cleanup sa normal at exceptional execution.",
    "explanation": "Isipin mong nagbukas ka ng file o JDBC statement. Kapag hindi ito naisara, posibleng maubos ang available connections, cursors o operating-system handles. Sa try (Resource r = ...), automatic na tatawagin ang close() pagkatapos ng block kahit may exception.\n\nMahalagang maging precise: hindi lahat ng open statement ay laging nagla-lock ng buong database, at hindi lahat ng unclosed resource ay awtomatikong Java heap memory leak. Depende ito sa driver, connection, transaction at database. Ang pangunahing goal ay reliable, predictable resource release.",
    "tip": "Isara agad ang resource sa scope na nagmamay-ari nito.",
    "hack": "Implement AutoCloseable sa sariling class kung kailangan nito ng predictable cleanup.",
    "mistake": "Hindi garbage collector ang try-with-resources; close() ang tinatawag ng Java.",
    "expected": "Using resource, Closed resource, After block sa magkakahiwalay na linya.",
    "realUse": "JDBC statements, ResultSet, file handles at network connections.",
    "practice": {
      "prompt": "Mag-throw ng RuntimeException sa loob ng work() at tingnan kung tumatakbo pa rin ang close().",
      "check": "Napi-print pa rin ang Closed resource bago lumabas ang exception."
    },
    "quiz": [
      {
        "question": "Ano ang interface na ginagamit ng try-with-resources?",
        "options": [
          "AutoCloseable",
          "Serializable lang",
          "Runnable"
        ],
        "correctIndex": 0,
        "explanation": "Closeable resources ay may AutoCloseable contract."
      },
      {
        "question": "Ano ang pangunahing layunin nito?",
        "options": [
          "Siguradong resource cleanup pagkatapos gamitin",
          "Automatic database backup",
          "Palakihin ang heap memory"
        ],
        "correctIndex": 0,
        "explanation": "Predictable resource release ang mahalaga."
      }
    ]
  },
  "java-jdbc-resource-lifecycle": {
    "title": "JDBC Resource Lifecycle: ResultSet, Statement at Connection",
    "summary": "Matuto kung ano ang dapat i-close at kung sino ang may responsibilidad sa connection.",
    "definition": "Ang ResultSet, PreparedStatement, at Connection ay JDBC resources na may close() behavior at dapat magkaroon ng malinaw na ownership.",
    "learn": [
      "Ano ang ResultSet cursor",
      "Ano ang PreparedStatement",
      "Ano ang Connection sa pool",
      "Kailan automatic ang cleanup sa try-with-resources"
    ],
    "objective": "Maipaliwanag ang tamang lifetime ng JDBC resources.",
    "explanation": "May tatlong magkakaugnay na bahagi ang maraming JDBC queries: Connection para sa pakikipag-usap sa database, PreparedStatement para sa SQL operation, at ResultSet para sa records na nabasa.\n\nKapag ikaw ang nagbukas ng resource, responsibilidad mong masigurong maisasara ito. Sa connection pooling, ang close() sa logical Connection ay karaniwang nagbabalik nito sa pool. Maaari ring may transaction na kontrolado ng ibang service; sa ganitong kaso, hindi dapat basta isara ng DAO ang connection na hindi naman nito pag-aari.\n\nAng bukas na resources ay maaaring magdulot ng exhaustion o lock contention depende sa DB at transaction; hindi ito palaging exclusive lock para sa lahat.",
    "tip": "Linawin kung ang DAO o service layer ang nagmamay-ari ng transaction at connection.",
    "hack": "Gumamit ng try-with-resources para sa owned statement at ResultSet.",
    "mistake": "Hindi ibig sabihin ng statement.close() na agad matatapos ang lahat ng transaction locks kung may bukas pang transaction.",
    "expected": "True sa pagkakaroon ng AutoCloseable interface ang Connection at ResultSet.",
    "realUse": "Mga server application na may JDBC at connection pool.",
    "practice": {
      "prompt": "Iguhit ang ownership ng Connection → PreparedStatement → ResultSet at ilahad kung alin ang iko-close ng DAO.",
      "check": "Lahat ng locally owned statements/results ay may cleanup; hindi basta kino-close ang caller-owned transaction connection."
    },
    "quiz": [
      {
        "question": "Ano ang karaniwang ginagawa ng close() sa pooled connection?",
        "options": [
          "Ibinabalik ang logical handle sa pool",
          "Binubura ang database",
          "Laging sini-shutdown ang JVM"
        ],
        "correctIndex": 0,
        "explanation": "Connection pools ay karaniwang nagre-reuse ng physical connections."
      },
      {
        "question": "Palagi bang naka-lock ang database para sa lahat kapag may PreparedStatement?",
        "options": [
          "Hindi",
          "Oo",
          "Kapag Java 21 lamang"
        ],
        "correctIndex": 0,
        "explanation": "Depende sa database operation at transaction state ang mga locks."
      }
    ]
  }
};
for(const [id,version] of Object.entries(versions)) i18n.lessons.tl[id]=version;
if(i18n.ui?.en)Object.assign(i18n.ui.en,{
  javaIdeTitle:'Java Practice IDE',javaIdeEnable:'Enable Java IDE',javaIdeRun:'Run Java ▶',
  javaIdeSync:'Sync editor',javaIdeClose:'Close IDE'
});
if(i18n.ui?.tl)Object.assign(i18n.ui.tl,{
  javaIdeTitle:'Java Practice IDE',javaIdeEnable:'Buksan ang Java IDE',javaIdeRun:'Patakbuhin ang Java ▶',
  javaIdeSync:'I-sync ang code',javaIdeClose:'Isara ang IDE'
});
if(i18n.stages?.tl){
  i18n.stages.tl.java = {
    ...(i18n.stages.tl.java || {}),
    'Foundation':'Mga Pundasyon',
    'Control Flow':'Mga Kondisyon at Loop',
    'Strings & Arrays':'Strings at Arrays',
    'OOP Foundations':'OOP Pundasyon',
    'OOP Advanced':'Mas Malalim na OOP',
    'Design Principles':'Mga Prinsipyo ng Disenyo',
    'Exceptions & IO':'Exceptions at Input/Output',
    'Database & JDBC':'Database at JDBC',
    'Modern Java':'Modern Java',
    'Concurrency & JVM':'Concurrency at JVM',
    'Testing & Delivery':'Testing at Deployment'
  };
}

})();
