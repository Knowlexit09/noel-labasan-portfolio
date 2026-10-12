(function(){'use strict';const t=window.KNOWLEDGE_LAB_I18N?.lessons?.tl;if(!t)return;
t['java-exam-reviewer-master-quiz']={
  "title": "JAVA Exam Reviewer — 33 Tanong na may Paliwanag",
  "summary": "Komprehensibong review sa Java fundamentals, OOP, SOLID, exceptions, DAO, JDBC, at resource cleanup.",
  "definition": "Ang exam reviewer ay serye ng mga tanong na sumusukat kung naiintindihan mo ang Java concepts at kung kailan sila dapat gamitin.",
  "learn": [
    "Maipaliwanag ang class, object, constructors, wrappers at casting",
    "Makilala ang OOP, interfaces, SOLID, cohesion at coupling",
    "Maikumpara ang checked at unchecked exceptions at AutoCloseable",
    "Maunawaan ang DAO, PreparedStatement, JDBC resource ownership at transactions",
    "Mabasa ang paliwanag ng bawat sagot at matukoy ang dapat pang balikan"
  ],
  "objective": "Sagutan ang lahat ng 33 tanong, targetin ang hindi bababa sa 70%, at maintindihan ang dahilan sa likod ng mga sagot.",
  "explanation": "Ito ang cumulative Java reviewer para sa mga topics na pinag-aralan mo. Hindi lang memorization ang goal—dapat kaya mong ipaliwanag ang *bakit* at *kailan* ginagamit ang isang Java concept.\n\nIsa-isang sasagutin ang 33 tanong. Pagkatapos ng bawat sagot, basahin ang explanation. Kapag may mali, balikan ang kaugnay na Java lesson at subukan ang runnable Java example.\n\nHiwalay ang quiz sa Java Practice IDE: hindi kailangan ng external compiler para sagutan ang mga tanong. Ang Java sample sa ibaba ay nagpapakita ng exception hierarchy.",
  "tip": "Gumawa ng 'mistake journal': isulat ang maling sagot, tamang konsepto, at isang halimbawa.",
  "hack": "Balikan ang related lesson sa bawat maling item bago ulitin ang buong exam.",
  "mistake": "Huwag basta kabisaduhin ang 'interface = declaration lang' o 'widening = walang precision loss'—may mahalagang exceptions ang dalawang shortcut na iyon.",
  "expected": "Ang reference program ay nagpapakita ng Throwable hierarchy; ang hiwalay na 33-item exam ang nagbibigay ng score at paliwanag.",
  "realUse": "Java classroom exams, interview preparation, code review at professional application development.",
  "practice": {
    "prompt": "Sagutan ang 33 tanong. Ilista ang mga maling sagot, balikan ang lessons ng mga iyon, at ipaliwanag sa sariling salita ang Throwable, DAO at AutoCloseable.",
    "check": "Target ang 70% o mas mataas, pero tunay na mastery kapag kaya mong ipaliwanag ang bawat sagot at maulit ang Java examples."
  },
  "quiz": [
    {
      "question": "Ano ang class sa Java?",
      "options": [
        "Aktuwal na object sa memory",
        "Blueprint ng mga object",
        "Primitive na data type"
      ],
      "correctIndex": 1,
      "explanation": "Ang class ang naglalarawan ng fields at methods. Ang object ang instance na ginawa mula rito."
    },
    {
      "question": "Alin ang halimbawa ng instantiation?",
      "options": [
        "new Product(\"Fish\")",
        "public class Product {} lamang",
        "import java.util.*"
      ],
      "correctIndex": 0,
      "explanation": "Ang new ay tumatawag ng constructor para makabuo ng bagong object."
    },
    {
      "question": "Alin ang primitive data type?",
      "options": [
        "String",
        "Integer",
        "int"
      ],
      "correctIndex": 2,
      "explanation": "Primitive ang int. Reference types naman ang String at Integer wrapper."
    },
    {
      "question": "Ano ang mangyayari kapag nag-unbox ng null na Integer?",
      "options": [
        "Magiging 0",
        "Magkakaroon ng NullPointerException",
        "Hindi papayagang i-compile kahit kailan"
      ],
      "correctIndex": 1,
      "explanation": "Walang primitive value na makukuha mula sa null wrapper."
    },
    {
      "question": "Lagi bang exact ang widening mula long papuntang double?",
      "options": [
        "Hindi, posibleng mawala ang precision",
        "Oo, walang kahit anong precision loss",
        "Oo, basta positive ang value"
      ],
      "correctIndex": 0,
      "explanation": "May malalaking long integers na hindi eksaktong mare-represent ng double."
    },
    {
      "question": "Kailan automatic na nagbibigay ang Java ng default constructor?",
      "options": [
        "Sa lahat ng class kahit may constructor na",
        "Kapag may static field lang",
        "Kapag walang dineklarang constructor"
      ],
      "correctIndex": 2,
      "explanation": "Kung nagdeklara ka na ng constructor, hindi na automatic na gagawa ng default constructor ang compiler."
    },
    {
      "question": "Ano ang parameter?",
      "options": [
        "Aktuwal na value na ipinasa sa tawag",
        "Variable na idineklara sa method signature",
        "Keyword para mag-return"
      ],
      "correctIndex": 1,
      "explanation": "Ang parameter ay placeholder sa definition; argument ang aktuwal na value sa pagtawag."
    },
    {
      "question": "Anong keyword ang tumutukoy sa current object?",
      "options": [
        "this",
        "super",
        "final"
      ],
      "correctIndex": 0,
      "explanation": "this ang kasalukuyang instance; super ang superclass behavior."
    },
    {
      "question": "Puwede bang mag-extend ang isang Java class ng dalawang magkaibang classes?",
      "options": [
        "Oo, basta abstract pareho",
        "Oo, kung parehong public",
        "Hindi; iisang superclass lang"
      ],
      "correctIndex": 2,
      "explanation": "Single class inheritance ang Java. Puwedeng mag-implement ng maraming interfaces."
    },
    {
      "question": "May default at static methods bang may implementation ang modern Java interface?",
      "options": [
        "Hindi, declarations lang",
        "Oo",
        "Sa abstract class lang"
      ],
      "correctIndex": 1,
      "explanation": "Puwedeng may default, static at private method bodies ang interfaces sa modern Java."
    },
    {
      "question": "Ano ang common superclass ng Exception at Error?",
      "options": [
        "Throwable",
        "RuntimeException",
        "SQLException"
      ],
      "correctIndex": 0,
      "explanation": "Magkahiwalay na sangay ng Throwable ang Exception at Error."
    },
    {
      "question": "Alin ang checked exception?",
      "options": [
        "IllegalArgumentException",
        "NullPointerException",
        "IOException"
      ],
      "correctIndex": 2,
      "explanation": "Kailangang i-catch o i-declare ang IOException kapag puwede itong lumabas sa method."
    },
    {
      "question": "Ibig bang sabihin ng 'checked exception' ay sa compile time nangyayari ang failure?",
      "options": [
        "Oo, sa compilation lang",
        "Hindi; sa runtime nangyayari ang failure pero compile time chine-check ang handling",
        "Hindi puwedeng ma-throw ang checked exception"
      ],
      "correctIndex": 1,
      "explanation": "Ang catch-or-declare rule ang chine-check ng compiler; sa actual execution pa nagaganap ang I/O failure."
    },
    {
      "question": "Alin ang unchecked exception family?",
      "options": [
        "RuntimeException",
        "IOException",
        "SQLException"
      ],
      "correctIndex": 0,
      "explanation": "Unchecked ang RuntimeException at Error families; hindi mandatory ang catch-or-declare."
    },
    {
      "question": "Bakit automatic na natawag ang close() sa try-with-resources?",
      "options": [
        "Dahil static ang variable",
        "Dahil naka-import ang DAO",
        "Dahil may AutoCloseable contract ang resource"
      ],
      "correctIndex": 2,
      "explanation": "AutoCloseable.close() ang tinatawag ng Java sa paglabas ng try-with-resources scope."
    },
    {
      "question": "Kung parehong nag-throw ang try body at close(), ano ang mangyayari sa close failure?",
      "options": [
        "Automatic na mawawala ang parehong exception",
        "Karaniwang magiging suppressed exception ito ng original failure",
        "Palagi nitong papalitan ang unang exception"
      ],
      "correctIndex": 1,
      "explanation": "Nananatiling primary ang body exception; puwedeng makita ang close failure gamit ang getSuppressed()."
    },
    {
      "question": "Ano ang pangunahing role ng DAO?",
      "options": [
        "Paghiwalayin ang data access at business logic",
        "Pag-style ng user interface",
        "Gawing isang class lahat ng SQL at business logic"
      ],
      "correctIndex": 0,
      "explanation": "DAO ang may pananagutan sa persistence operations, hindi sa lahat ng business rules."
    },
    {
      "question": "Ano ang tamang pagkakaiba ng DTO at POJO?",
      "options": [
        "Pareho lang sila palagi",
        "Bawat DTO ay dapat mag-extend ng framework class",
        "DTO ay role sa data transfer; POJO ay ordinary Java object"
      ],
      "correctIndex": 2,
      "explanation": "Purpose ang DTO, samantalang general class style ang POJO."
    },
    {
      "question": "Ano ang ibig sabihin ng SRP?",
      "options": [
        "Isa lang dapat ang method ng class",
        "Isang cohesive reason to change",
        "Isang .java file lang sa buong system"
      ],
      "correctIndex": 1,
      "explanation": "SRP ay tungkol sa isang malinaw na responsibility, hindi method count."
    },
    {
      "question": "Ano ang iniiwasan ng DRY?",
      "options": [
        "Pagdodoble ng business rules o knowledge",
        "Lahat ng magkakatulad na punctuation",
        "Paggamit ng interfaces"
      ],
      "correctIndex": 0,
      "explanation": "Mas madaling mag-maintain kung nasa isang malinaw na lugar ang bawat shared business rule."
    },
    {
      "question": "Aling principle ang nakatuon sa extensibility ng stable components?",
      "options": [
        "ISP",
        "SRP lamang",
        "OCP"
      ],
      "correctIndex": 2,
      "explanation": "Open/Closed Principle: magdagdag ng behavior sa pamamagitan ng extension kung angkop, nang hindi laging binabago ang stable client code."
    },
    {
      "question": "Ano ang mahalaga sa LSP?",
      "options": [
        "Magkapareho ang pangalan ng dalawang class",
        "Kayang palitan ng subtype ang base type nang hindi sinisira ang inaasahang behavior",
        "Lahat ng fields ay protected"
      ],
      "correctIndex": 1,
      "explanation": "Behavioral contract ang mahalaga sa substitutability, hindi syntax lamang."
    },
    {
      "question": "Ano ang magandang halimbawa ng ISP?",
      "options": [
        "Maliit at client-focused interfaces",
        "Isang interface na may daan-daang unrelated methods",
        "Walang interfaces kailanman"
      ],
      "correctIndex": 0,
      "explanation": "Huwag piliting umasa ang client sa methods na hindi niya kailangan."
    },
    {
      "question": "Ano ang pagkakaiba ng DIP at dependency injection?",
      "options": [
        "Pareho silang eksaktong iisang bagay",
        "DI ay Java keyword; DIP ay exception",
        "DIP ay design principle; DI ay technique sa pagbibigay ng dependencies"
      ],
      "correctIndex": 2,
      "explanation": "Ang DIP ay pagdepende sa abstractions; DI naman ay isang paraan ng pagsupply ng collaborators."
    },
    {
      "question": "Ano ang coupling?",
      "options": [
        "Bilang ng methods",
        "Antas ng dependency ng mga module sa isa't isa",
        "Bilang ng primitive variables"
      ],
      "correctIndex": 1,
      "explanation": "Coupling ang sukat ng interdependence sa mga component."
    },
    {
      "question": "Ano ang cohesion?",
      "options": [
        "Kung gaano magkakaugnay ang responsibilidad sa loob ng module",
        "Bilang ng interfaces",
        "Bilang ng open threads"
      ],
      "correctIndex": 0,
      "explanation": "Mas cohesive ang class kung nakatuon ang methods nito sa magkakaugnay na tungkulin."
    },
    {
      "question": "Ano ang gamit ng instanceof?",
      "options": [
        "Mag-commit ng SQL transaction",
        "Mag-close ng JDBC resource",
        "Mag-check ng runtime type compatibility"
      ],
      "correctIndex": 2,
      "explanation": "instanceof ang ginagamit para malaman kung tugma ang object sa type."
    },
    {
      "question": "Ano ang puwedeng i-bind sa PreparedStatement na ? placeholder?",
      "options": [
        "Kahit anong SQL table name",
        "Data value",
        "Buong SQL query structure"
      ],
      "correctIndex": 1,
      "explanation": "Values ang binabind sa parameters, hindi arbitrary table o column identifiers."
    },
    {
      "question": "Alin ang puwedeng isama sa try-with-resources?",
      "options": [
        "PreparedStatement",
        "int primitive",
        "Kahit anong object kahit walang close()"
      ],
      "correctIndex": 0,
      "explanation": "May AutoCloseable contract ang PreparedStatement sa pamamagitan ng Statement."
    },
    {
      "question": "Garantisado bang released na lahat ng database locks kapag isinara ang PreparedStatement?",
      "options": [
        "Oo, lahat ng users ay agad makakagamit ng lahat ng rows",
        "Oo, sa Java 21 lang",
        "Hindi; nakadepende pa sa transaction at database state"
      ],
      "correctIndex": 2,
      "explanation": "Resource cleanup at lock release ay hindi laging pareho; mahalaga ang transaction boundaries."
    },
    {
      "question": "Kapag pooled ang JDBC Connection, ano ang karaniwang ibig sabihin ng close()?",
      "options": [
        "Palaging dine-delete ang pool",
        "Ibinabalik ang logical connection sa pool",
        "Awtomatikong nagko-commit ng lahat ng SQL"
      ],
      "correctIndex": 1,
      "explanation": "Connection pools ay karaniwang nagre-reuse ng underlying physical connections."
    },
    {
      "question": "Para saan ang transaction rollback?",
      "options": [
        "Ibalik ang uncommitted changes",
        "I-recover ang deleted Java class",
        "Ayusin ang SQL syntax errors"
      ],
      "correctIndex": 0,
      "explanation": "Rollback ang nagre-revert ng uncommitted transactional changes."
    },
    {
      "question": "Ano ang tawag sa strong has-a ownership relationship?",
      "options": [
        "Method overloading",
        "Package-private access",
        "Composition"
      ],
      "correctIndex": 2,
      "explanation": "Composition ang nagpapahiwatig ng mas malakas na lifecycle ownership; kailangan pa ring idefine iyon sa architecture."
    }
  ]
};
})();
