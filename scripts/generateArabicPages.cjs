const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const arDir = path.join(distDir, 'ar');

// Ensure Arabic directories exist
const pagesList = [
  '',
  'about/',
  'contact/',
  'projects/',
  'services/',
  'services/interior-fit-out/',
  'services/villa-fit-out/',
  'services/office-fit-out/',
  'services/commercial-fit-out/',
  'services/gypsum-board-works/',
  'services/false-ceilings/',
  'services/interior-partitions/',
  'services/interior-renovation/',
  'services/residential-fit-out/'
];

pagesList.forEach(p => {
  const targetSubDir = path.join(arDir, p);
  if (!fs.existsSync(targetSubDir)) {
    fs.mkdirSync(targetSubDir, { recursive: true });
  }
});

// Arabic Business Entity
const businessEntityAr = {
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://nasaqfitout.ae/#business",
  "name": "شركة نسق لأعمال تنفيذ التصميم الداخلي ذ.م.م",
  "alternateName": [
    "نسق",
    "NASAQ",
    "نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م",
    "نسق فيت آوت أبوظبي",
    "شركة نسق للديكور والتشطيبات الإمارات"
  ],
  "url": "https://nasaqfitout.ae/ar/",
  "logo": "https://nasaqfitout.ae/assets/logo.svg",
  "image": "https://nasaqfitout.ae/assets/villa.webp",
  "description": "شركة نسق متخصصة في أعمال تنفيذ التصميم الداخلي والفيت آوت والديكور في أبوظبي والإمارات. نقدم حلولاً متكاملة لتشطيب الفلل والمكاتب والمساحات التجارية وأعمال الجبس بورد والأسقف المعلقة والقواطع الجدارية.",
  "telephone": "+971505334861",
  "email": "info@nasaqfitout.ae",
  "priceRange": "$$",
  "currenciesAccepted": "AED",
  "paymentAccepted": "Cash, Bank Transfer, Cheque",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "أبوظبي",
    "addressRegion": "أبوظبي",
    "addressCountry": "AE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 24.4539,
    "longitude": 54.3773
  },
  "hasMap": "https://maps.google.com/?q=Abu+Dhabi,+United+Arab+Emirates",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+971505334861",
      "contactType": "الاستفسارات العامة وعروض الأسعار",
      "email": "info@nasaqfitout.ae",
      "areaServed": "AE",
      "availableLanguage": ["Arabic", "English"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+971505334861",
      "contactType": "إدارة المشاريع والتعاقدات التجارية",
      "email": "ossama@nasaqfitout.ae",
      "areaServed": "AE",
      "availableLanguage": ["Arabic", "English"]
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "أبوظبي" },
    { "@type": "AdministrativeArea", "name": "جزيرة ياس" },
    { "@type": "AdministrativeArea", "name": "جزيرة السعديات" },
    { "@type": "AdministrativeArea", "name": "جزيرة الريم" },
    { "@type": "AdministrativeArea", "name": "مدينة خليفة" },
    { "@type": "AdministrativeArea", "name": "مدينة محمد بن زايد" },
    { "@type": "AdministrativeArea", "name": "مدينة شخبوط" },
    { "@type": "AdministrativeArea", "name": "الشامخة" },
    { "@type": "AdministrativeArea", "name": "الفلاح" },
    { "@type": "AdministrativeArea", "name": "شاطئ الراحة" },
    { "@type": "AdministrativeArea", "name": "الريف" },
    { "@type": "AdministrativeArea", "name": "البطين" },
    { "@type": "AdministrativeArea", "name": "المشرف" },
    { "@type": "AdministrativeArea", "name": "مصفح" },
    { "@type": "City", "name": "العين" },
    { "@type": "City", "name": "دبي" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/nasaq.fitout/"
  ],
  "knowsAbout": [
    "أعمال الفيت آوت الداخلي",
    "تنفيذ التصميم الداخلي",
    "أعمال جبس بورد وأسقف معلقة",
    "قواطع جدارية وجبسية عازلة",
    "تشطيب فلل ومجالس فاخرة",
    "فيت آوت مكاتب وشركات",
    "تشطيب محلات تجارية",
    "تجديد وترميم العقارات",
    "فريق عمل بخبرة تفوق 11 عاماً في الإمارات",
    "آلاف المشاريع المنفذة عبر الإمارات السبع"
  ]
};

// Arabic Pages Configurations
const arabicPages = {
  "": {
    enPath: "",
    title: "أعمال فيت آوت وتنفيذ التصميم الداخلي في أبوظبي | نسق",
    description: "تقدم شركة نسق خدمات الفيت آوت، الجبس بورد، الأسقف المعلقة، والقواطع الجدارية للفلل والمكاتب في أبوظبي والإمارات بخبرة تزيد عن 11 عاماً.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [{ name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" }],
    isHome: true,
    faqs: [
      {
        q: "ما هي خدمات الفيت آوت التي تقدمها شركة نسق في أبوظبي؟",
        a: "تقدم نسق خدمات متكاملة لتنفيذ التصميم الداخلي والفيت آوت، تشمل تشطيب الفلل والمجالس، فيت آوت المكاتب والشركات، المساحات التجارية، أعمال ألواح الجبس بورد، الأسقف المستعارة المعلقة، القواطع الجدارية، والتجديد الداخلي الشامل."
      },
      {
        q: "ما هي المناطق التي تغطيها نسق في أبوظبي والإمارات؟",
        a: "يقع مقر نسق في أبوظبي وتغطي كافة المناطق الرئيسية مثل جزيرة السعديات، جزيرة ياس، جزيرة الريم، مدينة خليفة، مدينة محمد بن زايد، الشامخة، شاطئ الراحة، ومصفح، بالإضافة إلى تنفيذ مشاريع متخصصة في دبي وسائر إمارات الدولة."
      },
      {
        q: "كيف يمكنني طلب عرض أسعار لمشروع فيت آوت وديكور؟",
        a: "يمكنك إرسال المخططات المعمارية أو جدول الكميات (BOQ) مباشرة عبر الواتساب على الرقم 0505334861 971+ أو عبر البريد الإلكتروني info@nasaqfitout.ae. يقوم فريق التسعير بدراسة المتطلبات وتقديم عرض أسعار مفصل خلال 24 إلى 48 ساعة."
      },
      {
        q: "هل تنفذ شركة نسق أعمال الجبس والأسقف المستعارة للعقارات القائمة؟",
        a: "نعم، تتخصص نسق في تركيب الأسقف المعلقة الحديثة، إضاءات الليد المخفية (Cove Lighting)، القواطع الجبسية العازلة للصوت، وأعمال الترميم وتجديد المساحات القائمة."
      }
    ],
    mainHtml: `
      <section class="hero">
        <img class="heroimage" src="/assets/villa.webp" alt="تصميم معماري ثلاثي الأبعاد لفيلا سكنية فاخرة في الإمارات" width="1536" height="1024" fetchpriority="high">
        <div class="hero-copy">
          <p class="eyebrow">أبوظبي · تنفيذ التصميم الداخلي والفيت آوت</p>
          <h1>مساحات مدروسة.<br><em>تنفيذ دقيق.</em></h1>
          <p>من المخططات المعتمدة إلى أدق التفاصيل الواقعية. أعمال فيت آوت وتشطيب متكامل للفلل والمكاتب والمساحات التجارية عبر كافة مناطق أبوظبي والإمارات.</p>
          <div class="actions">
            <a class="button" href="/ar/contact/">طلب عرض أسعار</a>
            <a class="outline" href="/ar/services/">استكشف خدماتنا</a>
          </div>
        </div>
        <div class="hero-bottom">
          <span>تناغم في المساحات</span>
          <span>تصور معماري ثلاثي الأبعاد · 01</span>
        </div>
      </section>

      <div class="ribbon">
        <span>فيت آوت سكني وفلل</span>
        <span>تشطيب مكاتب وشركات</span>
        <span>جبس بورد وأسقف معلقة</span>
        <span>تجديد وترميم شامل</span>
      </div>

      <section class="section split">
        <p class="eyebrow">نهج شركة نسق</p>
        <div>
          <h2>رؤيتكم المعمارية.<br>واقع ملموس.</h2>
          <p class="lead">التشطيب الراقي يتجلى في دقة تنفيذ التفاصيل.</p>
          <p>نسق (NASAQ) هي شركة متخصصة في أعمال تنفيذ التصميم الداخلي والديكور مقرها أبوظبي. نقوم بتحويل المخططات المعمارية المعتمدة وجداول الكميات (BOQ) إلى مساحات حقيقية متقنة عبر الإشراف الميداني المباشر، وتنسيق المواد، والتشطيب عالي الدقة.</p>
          <p>يتميز فريقنا بخبرة تتجاوز 11 عاماً في مواقع العمل الميدانية بالإمارات، مع إنجاز آلاف المشاريع الناجحة عبر كافة الإمارات السبع، مما يمنحنا دراية عميقة بمعايير البناء وجودة المواد وضمان تسليم المشاريع في مواعيدها المحددة.</p>
          <a class="textlink" href="/ar/about/">تعرف على نسق وفريق العمل</a>
        </div>
      </section>

      <section class="section pale">
        <div class="sectionhead">
          <div>
            <p class="eyebrow">نطاق خدماتنا</p>
            <h2>كل مساحة.<br>كل تفصيل.</h2>
          </div>
          <p>أعمال فيت آوت متكاملة وتشطيبات تخصصية مصممة بدقة لتلبي أعلى المعايير المعمارية لمشروعكم.</p>
        </div>
        <div class="services">
          <a href="/ar/services/interior-fit-out/">
            <span class="number">01</span>
            <h3>أعمال الفيت آوت الداخلي</h3>
            <p>تنفيذ متكامل من المخططات المعتمدة إلى التسليم النهائي. إدارة شاملة للموقع، وتنسيق المواد، والتشطيب عالي الدقة.</p>
            <span class="textlink">استكشف الخدمة</span>
          </a>
          <a href="/ar/services/villa-fit-out/">
            <span class="number">02</span>
            <h3>فيت آوت الفلل والمجالس</h3>
            <p>تشطيبات متقنة للفلل الخاصة والمجالس العائلية، مع عناية خاصة بالأسقف الجبسية، القواطع الجدارية، والتفاصيل الديكورية.</p>
            <span class="textlink">استكشف الخدمة</span>
          </a>
          <a href="/ar/services/office-fit-out/">
            <span class="number">03</span>
            <h3>فيت آوت المكاتب والشركات</h3>
            <p>بيئات عمل عصرية توازن بين الكفاءة الوظيفية اليومية والانطباع المؤسسي الراقي للاستقبال وغرف الاجتماعات.</p>
            <span class="textlink">استكشف الخدمة</span>
          </a>
          <a href="/ar/services/commercial-fit-out/">
            <span class="number">04</span>
            <h3>فيت آوت المساحات التجارية</h3>
            <p>تنفيذ المساحات التجارية، المعارض، وصالات العرض بمواصفات دقيقة تبرز هوية علامتكم التجارية.</p>
            <span class="textlink">استكشف الخدمة</span>
          </a>
          <a href="/ar/services/gypsum-board-works/">
            <span class="number">05</span>
            <h3>أعمال ألواح الجبس بورد</h3>
            <p>خطوط معمارية مستقيمة، أسطح متجانسة، ودقة استثنائية في تفاصيل الجدران والأسقف وفتحات التكييف.</p>
            <span class="textlink">استكشف الخدمة</span>
          </a>
          <a href="/ar/services/false-ceilings/">
            <span class="number">06</span>
            <h3>الأسقف المستعارة والمعلقة</h3>
            <p>أسقف معمارية تمنح المساحة عمقاً وبعداً جمالياً مع توزيع متناسق للإضاءة المخفية وأنظمة التهوية.</p>
            <span class="textlink">استكشف الخدمة</span>
          </a>
          <a href="/ar/services/interior-partitions/">
            <span class="number">07</span>
            <h3>القواطع الجدارية والجبسية</h3>
            <p>تقسيم ذكي للمساحات، توفير الخصوصية والعزل الصوتي، والاستغلال الأمثل لمخطط الطابق الداخلي.</p>
            <span class="textlink">استكشف الخدمة</span>
          </a>
          <a href="/ar/services/interior-renovation/">
            <span class="number">08</span>
            <h3>تجديد وترميم المساحات</h3>
            <p>تحديث مدروس وشامل للمساحات القائمة، بدءاً من تعديل المخططات وحتى التشطيبات والدهانات النهائية.</p>
            <span class="textlink">استكشف الخدمة</span>
          </a>
          <a href="/ar/services/residential-fit-out/">
            <span class="number">09</span>
            <h3>التشطيب السكني للشقق</h3>
            <p>مساحات سكنية مصممة لتناسب أسلوب حياتكم في الشقق الفاخرة، البنتهاوس، ومنازل التاون هاوس.</p>
            <span class="textlink">استكشف الخدمة</span>
          </a>
        </div>
      </section>

      <section class="section">
        <div class="sectionhead">
          <div>
            <p class="eyebrow">استكشف الأفكار المعمارية</p>
            <h2>المساحة والمواد<br>وهوية المكان.</h2>
          </div>
          <p>مفاهيم وتصاميم معمارية ثلاثية الأبعاد لإلهام مشروعكم الداخلي القادم وتوضيح آفاق التصميم والمواد.</p>
        </div>
        <div class="concepts">
          <article>
            <img src="/assets/villa.webp" alt="تصميم ثلاثي الأبعاد لغرفة معيشة بفيلا باستخدام الترافرتين وخشب الجوز" width="1536" height="1024" loading="lazy">
            <div>
              <span class="eyebrow">مفهوم ثلاثي الأبعاد / سكني</span>
              <h3>فخامة هادئة وتناغم طبيعي.</h3>
              <p>مواد طبيعية دافئة، إضاءة متدرجة مدروسة، وتفاصيل أسقف جبسية منفذة بدقة متناهية.</p>
            </div>
          </article>
          <article>
            <img src="/assets/office.webp" alt="تصميم ثلاثي الأبعاد لمنطقة استقبال مكتبية مع ألواح خشبية وتفاصيل برونزية" width="1536" height="1024" loading="lazy">
            <div>
              <span class="eyebrow">مفهوم ثلاثي الأبعاد / تجاري ومكتبي</span>
              <h3>انطباع أولي واثق ومميز.</h3>
              <p>مناطق استقبال تنفيذية مصممة بحضور معماري راقٍ يعبر عن هوية العمل.</p>
            </div>
          </article>
        </div>
      </section>

      <section class="section">
        <p class="eyebrow">من الفكرة إلى التسليم</p>
        <h2>مسار عمل واضح ومنضبط لمشروعكم.</h2>
        <div class="process">
          <article>
            <span class="number">01</span>
            <h3>الفهم والاستيعاب</h3>
            <p>مناقشة متطلبات المساحة، مراجعة المخططات الهندسية، وتحديد أولويات المشروع وجدوله الزمني.</p>
          </article>
          <article>
            <span class="number">02</span>
            <h3>التخطيط والتسعير</h3>
            <p>مراجعة جدول الكميات (BOQ)، مطابقة مواصفات المواد، واعتماد نطاق العمل والبرنامج التنفيذي.</p>
          </article>
          <article>
            <span class="number">03</span>
            <h3>التنفيذ الميداني</h3>
            <p>إدارة موقع العمل والإشراف على تثبيت الجبس والأسقف والقواطع وكافة التشطيبات المعتمدة.</p>
          </article>
          <article>
            <span class="number">04</span>
            <h3>الفحص والتسليم</h3>
            <p>معاينة الجودة والتشطيبات النهائية بدقة، معالجة أي ملاحظات تسليم (Snagging)، وتسليم المشروع جاهزاً.</p>
          </article>
        </div>
      </section>

      <section class="section areas">
        <p class="eyebrow">مقرنا في أبوظبي</p>
        <h2>معرفة محلية عميقة.<br>وامتداد لكافة الإمارات.</h2>
        <p>جزيرة ياس · جزيرة السعديات · جزيرة الريم · مدينة خليفة · مدينة محمد بن زايد · مدينة شخبوط · الشامخة · الفلاح · شاطئ الراحة · الريف · البطين · المشرف · مصفح</p>
        <p>كما يتولى فريقنا تنفيذ المشاريع التخصصية في العين ودبي ومختلف إمارات الدولة.</p>
      </section>

      <section class="cta">
        <p class="eyebrow">مشروعكم القادم يبدأ هنا</p>
        <h2>لنحول مساحتكم<br>إلى واقع متناغم.</h2>
        <a class="button" href="/ar/contact/">طلب عرض أسعار</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  },

  "about/": {
    enPath: "about/",
    title: "من نحن | فريق فيت آوت وديكور بخبرة 11+ عاماً في الإمارات | نسق",
    description: "فريق عمل متخصص في الفيت آوت والديكور بخبرة تتجاوز 11 عاماً في الإمارات، وسجل حافل بآلاف المشاريع المنفذة عبر كافة الإمارات السبع.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "من نحن", url: "https://nasaqfitout.ae/ar/about/" }
    ],
    faqs: [
      {
        q: "من هي شركة نسق وما هي خلفية فريق العمل؟",
        a: "نسق هي شركة متخصصة في أعمال تنفيذ التصميم الداخلي والفيت آوت والديكور في دولة الإمارات العربية المتحدة. يمتلك فريقنا التنفيذي خبرة ميدانية متواصلة تفوق 11 عاماً في مواقع العمل بمختلف الإمارات، مع إنجاز آلاف المشاريع السكنية والتجارية."
      },
      {
        q: "كم عدد المشاريع التي نفذتها شركة نسق في الإمارات؟",
        a: "على مدار أكثر من 11 عاماً من العمل المتواصل، نفذ فريقنا بنجاح آلاف المشاريع في أبوظبي، دبي، والشارقة، وكافة الإمارات السبع، شملت تشطيب فلل، مكاتب، معارض تجارية، وأعمال جبس وأسقف معلقة وقواطع جدارية."
      },
      {
        q: "ما هي الخدمات التخصصية التي تقدمها نسق؟",
        a: "تتخصص نسق في أعمال الفيت آوت الداخلي، فيت آوت الفلل والمجالس، فيت آوت المكاتب والشركات، المساحات التجارية، ألواح الجبس بورد، الأسقف المستعارة المعلقة، القواطع الجدارية، والترميم والتجديد الداخلي."
      },
      {
        q: "ماذا يعني اسم 'نسق' وما هي فلسفة عملكم؟",
        a: "اسم 'نسق' في اللغة العربية يعبر عن الترتيب المنظم، والتناغم، والانسجام المنضبط. وهو يعكس جوهر منهجيتنا: تحويل المخططات المعمارية المعتمدة إلى واقع مبني بدقة تامة وتناغم متكامل بين المواد والإضاءة والمساحات."
      },
      {
        q: "ما هي الإمارات والمناطق التي تخدمها نسق؟",
        a: "تخدم نسق عملاءها في كافة الإمارات السبع: أبوظبي (المقر الرئيسي)، دبي، الشارقة، عجمان، أم القيوين، رأس الخيمة، والفجيرة. وفي أبوظبي نخدم بانتظام السعديات، ياس، الريم، مدينة خليفة، ومحمد بن زايد."
      },
      {
        q: "ما هو النشاط المرخص لشركة نسق في أبوظبي؟",
        a: "نسق مسجلة رسمياً في أبوظبي تحت اسم 'شركة نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م' بنشاط مرخص هو 'أعمال تنفيذ التصميم الداخلي (ديكور)'."
      },
      {
        q: "كيف يمكنني طلب عرض أسعار لمشروع من شركة نسق؟",
        a: "يمكنكم مشاركة المخططات المعمارية المعتمدة أو جدول الكميات (BOQ) عبر الواتساب على 0505334861 971+ أو عبر البريد info@nasaqfitout.ae / ossama@nasaqfitout.ae للحصول على عرض أسعار مفصل خلال 24 إلى 48 ساعة."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">عن نسق · أبوظبي والإمارات العربية المتحدة</p>
        <h1>11+ عاماً من الإتقان.<br>مساحات في تناغم تام.</h1>
        <p>نحن فريق متخصص في أعمال الفيت آوت وتنفيذ التصميم الداخلي والديكور، نعمل في مواقع البناء بالإمارات منذ أكثر من 11 عاماً، ونفذنا آلاف المشاريع في كافة الإمارات السبع.</p>
      </section>

      <div class="ribbon">
        <span>خبرة 11+ عاماً في الإمارات</span>
        <span>آلاف المشاريع المنفذة</span>
        <span>متخصصون في الفيت آوت والديكور</span>
        <span>تغطية لكافة الإمارات السبع</span>
      </div>

      <section class="section split">
        <div>
          <p class="eyebrow">فريقنا وحرفيتنا</p>
          <h2>من المخطط المعماري<br>إلى اللمسة الأخيرة.</h2>
          <p class="small" style="color:#9b7145;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;margin-top:24px;">النشاط المرخص</p>
          <p style="font-size:14px;color:#62635d;margin-top:4px;">أعمال تنفيذ التصميم الداخلي (ديكور) · أبوظبي، الإمارات</p>
        </div>
        <div>
          <p class="lead">تتبنى شركة نسق منهجية تنفيذية صارمة في أعمال الفيت آوت والديكور والتشطيب المعماري في الإمارات.</p>
          <p>لأكثر من 11 عاماً متواصلة، ظل فريقنا الداخلي يعمل في مواقع المشاريع السكنية والتجارية والمكتبية في مختلف أنحاء الإمارات. نحن نتخصص في ترجمة المخططات المعمارية وتصاميم الديكور وجداول الكميات (BOQ) إلى مساحات حقيقية منفذة بأعلى درجات الانضباط الميداني.</p>
          <p>ومن واقع إنجاز آلاف المساحات عبر أبوظبي ودبي وسائر إمارات الدولة، ندرك تماماً أن التشطيب الراقي ليس مجرد تركيب للمواد، بل هو الدقة في كيفية تحويل الخطوط والتفاصيل إلى واقع عملي يدوم طويلاً. نحن نسد الفجوة بين التصميم النظري والتسليم الميداني: تنسيق توريد المواد، الإشراف على أدق تفاصيل العمل، وتحقيق معايير الجودة العالية.</p>
          <p>نشاطنا المرخص في أبوظبي هو <em>أعمال تنفيذ التصميم الداخلي (ديكور)</em>. ويغطي نطاق عملنا: فيت آوت الفلل الخاصة، مقرات المكاتب والشركات، المحلات والمعارض التجارية، الأسقف الجبسية المستعارة والمعلقة، القواطع الجدارية العازلة للصوت، والتجديد الداخلي الشامل.</p>
          
          <div class="principles">
            <h3>خبرة ميدانية تفوق 11 عاماً بالإمارات</h3>
            <p>مع أكثر من عقد من العمل المستمر في مختلف إمارات الدولة، يتمتع فريقنا بفهم عميق لمتطلبات المواقع، وسلوك المواد في المناخ المحلي، وإجراءات التنسيق الفني المعتمدة.</p>
            
            <h3>آلاف المشاريع المنفذة عبر الإمارات السبع</h3>
            <p>من الفلل الفاخرة والمجالس الكبرى في أبوظبي، إلى المكاتب المرموقة في دبي والمشاريع السكنية في الإمارات الشمالية، يتمتع طاقمنا بسجل حافل بالتسليم السلس الخالي من الملاحظات.</p>
            
            <h3>تخصص دقيق في الديكور والفيت آوت</h3>
            <p>نحن نتقن تفاصيل التشطيب: الأسقف الجبسية متعددة المستويات، تجاويف الإضاءة المخفية، القواطع الجدارية الجبسية، العزل الصوتي، ومعالجة الأسطح والدهانات بأعلى المعايير العالمية (Level-5).</p>
            
            <h3>الالتزام بالمخططات وجداول الكميات</h3>
            <p>نلتزم تماماً بالمخططات والمواصفات المعتمدة دون أي استبدال للمواد أو زيادات غير معلنة، مع الحفاظ على شفافية تامة من المراجعة الأولية وحتى التسليم النهائي.</p>
          </div>
        </div>
      </section>

      <section class="section pale">
        <div class="sectionhead">
          <div>
            <p class="eyebrow">حضورنا عبر الدولة</p>
            <h2>ننفذ المشاريع في كافة الإمارات السبع.</h2>
          </div>
          <p>فرق عملنا وشبكة التوريد جاهزة بالكامل للتحرك وتنفيذ مشاريع الفيت آوت والديكور في أي مكان داخل الإمارات.</p>
        </div>
        <div class="services">
          <a>
            <span class="number">01</span>
            <h3>أبوظبي</h3>
            <p>المقر الرئيسي والعمليات المستمرة في جزيرة السعديات، جزيرة ياس، جزيرة الريم، مدينة خليفة، مدينة محمد بن زايد، الشامخة، شاطئ الراحة، والعاصمة بأكملها.</p>
          </a>
          <a>
            <span class="number">02</span>
            <h3>دبي</h3>
            <p>تنفيذ الفلل السكنية الفاخرة، البنتهاوس، ومكاتب الشركات في وسط مدينة دبي (Downtown)، الخليج التجاري، دبي هيلز، ودبي مارينا.</p>
          </a>
          <a>
            <span class="number">03</span>
            <h3>الإمارات الشمالية</h3>
            <p>تنفيذ المشاريع في الشارقة، عجمان، أم القيوين، رأس الخيمة، والفجيرة بإشراف هندسي مباشر وسلاسل توريد معتمدة.</p>
          </a>
        </div>
      </section>

      <section class="cta">
        <p class="eyebrow">مشروعكم القادم يبدأ هنا</p>
        <h2>لنحول مساحتكم<br>إلى واقع متناغم.</h2>
        <p style="margin:0 auto 30px;max-width:560px;color:#454640;">شاركوا مخططاتكم أو جدول الكميات مع فريق التسعير. نقوم بدراسة المواصفات بدقة ونوافيكم بعرض أسعار شفاف خلال 24 إلى 48 ساعة.</p>
        <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">
          <a class="button" href="/ar/contact/">طلب عرض أسعار</a>
          <a class="button" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20مناقشة%20مشروع%20فيت%20آوت%20وديكور." style="background:#222321;color:#fff;border-color:#222321;">واتساب فريقنا مباشرة</a>
        </div>
        <a class="plain" href="tel:+971505334861">الاتصال المباشر: 0505334861 971+</a>
      </section>
    `
  },

  "contact/": {
    enPath: "contact/",
    title: "اتصل بنا | طلب عرض أسعار فيت آوت في أبوظبي | نسق",
    description: "تواصل مع شركة نسق عبر الهاتف +971505334861 أو info@nasaqfitout.ae لطلب عرض أسعار لأعمال الفيت آوت والديكور والجبس بورد في أبوظبي والإمارات.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "اتصل بنا", url: "https://nasaqfitout.ae/ar/contact/" }
    ],
    faqs: [
      {
        q: "كيف يمكنني التواصل مع شركة نسق لترتيب معاينة أو استشارة؟",
        a: "يمكنك الاتصال مباشرة أو المراسلة عبر الواتساب على 0505334861 971+، أو الهاتف الثانوي 0528600115 971+، أو مراسلتنا عبر info@nasaqfitout.ae لتحديد موعد معاينة ميدانية."
      },
      {
        q: "ما هي المتطلبات اللازمة لتقديم عرض أسعار دقيق للمشروع؟",
        a: "نرجو مشاركة المخططات المعمارية المعتمدة، جدول الكميات (BOQ)، موقع المشروع، والجدول الزمني المفضل ليتمكن فريق التقدير من تزويدكم بعرض أسعار متكامل."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">تواصل مع شركة نسق</p>
        <h1>تحدث مع فريقنا.<br>وابدأ مشروعك اليوم.</h1>
        <p>نحن جاهزون لمراجعة مخططاتك، مناقشة تفاصيل التشطيب، وتقديم عروض أسعار واضحة ومفصلة لكافة أعمال الفيت آوت والديكور في أبوظبي والإمارات.</p>
      </section>

      <section class="section contact">
        <div>
          <p class="eyebrow">تواصل مباشر مع فريقنا</p>
          <h2>لنبدأ الحوار.</h2>
          <a class="contactlink" href="tel:+971505334861">+971 50 533 4861</a>
          <p style="margin-bottom:4px;font-size:13px;color:#9b7145;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;">الاستفسارات العامة وعروض الأسعار</p>
          <a href="mailto:info@nasaqfitout.ae" style="margin-bottom:18px;">info@nasaqfitout.ae</a>
          <p style="margin-bottom:4px;font-size:13px;color:#9b7145;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;">المشاريع والتعاقدات التجارية</p>
          <a href="mailto:ossama@nasaqfitout.ae" style="margin-bottom:22px;">ossama@nasaqfitout.ae</a>
          <p style="margin-bottom:6px;">أبوظبي، دولة الإمارات العربية المتحدة</p>
          <p style="margin-bottom:18px;">رقم الاتصال الإضافي: <a href="tel:+971528600115" style="display:inline;margin-bottom:0;">+971 52 860 0115</a></p>
          <p>هل لديك مخططات معمارية أو جدول كميات (BOQ)؟ أرسلها مباشرة عبر الواتساب أو البريد الإلكتروني للمراجعة الفورية.</p>
        </div>
        <form id="enquiry">
          <label>الاسم الكامل<input name="name" autocomplete="name" required placeholder="الاسم الكريم"></label>
          <label>رقم الهاتف / الواتساب<input type="tel" name="phone" required placeholder="+971 50 123 4567"></label>
          <label>البريد الإلكتروني<input type="email" name="email" required placeholder="name@domain.com"></label>
          <label>نوع المشروع<select name="type">
            <option value="فيت آوت فلل ومجالس">فيت آوت فلل ومجالس</option>
            <option value="فيت آوت مكاتب وشركات">فيت آوت مكاتب وشركات</option>
            <option value="فيت آوت محلات ومعارض تجارية">فيت آوت محلات ومعارض تجارية</option>
            <option value="أعمال ألواح الجبس بورد">أعمال ألواح الجبس بورد</option>
            <option value="أسقف مستعارة ومعلقة">أسقف مستعارة ومعلقة</option>
            <option value="قواطع جدارية وجبسية">قواطع جدارية وجبسية</option>
            <option value="تجديد وترميم مساحات">تجديد وترميم مساحات</option>
            <option value="تشطيب شقق سكنية">تشطيب شقق سكنية</option>
          </select></label>
          <label>موقع المشروع<input name="location" required placeholder="المنطقة (مثال: جزيرة ياس، مدينة خليفة، دبي هيلز)"></label>
          <label>أخبرنا عن تفاصيل المشروع<textarea name="details" rows="4" required placeholder="نطاق العمل، المساحة التقريبية (متر مربع أو قدم مربع)، والموعد المفضل للبدء"></textarea></label>
          <div class="form-actions" style="display:flex;gap:14px;flex-wrap:wrap;margin-top:10px;">
            <button class="button" type="submit" data-action="whatsapp">إرسال عبر الواتساب</button>
            <button class="button" type="submit" data-action="email" style="background:#222321;color:#fff;border-color:#222321;">إرسال عبر البريد الإلكتروني</button>
          </div>
          <p class="small" style="margin-top:15px;">الإرسال عبر الواتساب يوصلكم مباشرة بفريق التقدير على 0505334861 971+. والإرسال عبر البريد يعد رسالة رسمية إلى info@nasaqfitout.ae و ossama@nasaqfitout.ae.</p>
        </form>
      </section>
    `
  },

  "projects/": {
    enPath: "projects/",
    title: "تصاميم ومفاهيم داخلية للفلل والمكاتب | نسق",
    description: "استكشف مفاهيم وتصاميم معمارية ثلاثية الأبعاد لمجالس وفلل سكنية ومكاتب عمل في أبوظبي والإمارات من شركة نسق.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "التصاميم", url: "https://nasaqfitout.ae/ar/projects/" }
    ],
    faqs: [
      {
        q: "ما هي الصور المعروضة في معرض المفاهيم لشركة نسق؟",
        a: "الصور المعروضة في المعرض هي تصاميم ومفاهيم معمارية ثلاثية الأبعاد تم إنشاؤها لتوضيح الإمكانيات الجمالية، تناسق المواد، وتوزيع الإضاءة للفلل والمكاتب."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">أفكار ومفاهيم معمارية ثلاثية الأبعاد</p>
        <h1>مفاهيم التصميم.<br>تناغم المواد والضوء.</h1>
        <p>استكشف آفاق الديكور والتنفيذ الداخلي لمساحات الفلل السكنية الفاخرة وبيئات العمل المكتبية الحديثة في أبوظبي والإمارات.</p>
      </section>

      <section class="section">
        <div class="concepts">
          <article>
            <img src="/assets/villa.webp" alt="تصور معماري ثلاثي الأبعاد لغرفة معيشة في فيلا فاخرة" width="1536" height="1024" loading="lazy">
            <div>
              <span class="eyebrow">مفهوم سكني ثلاثي الأبعاد · فيلا خاصة</span>
              <h3>الهدوء المعماري وتناغم الخامات.</h3>
              <p>تكامل بين حجر الترافرتين الطبيعي وأخشاب الجوز الدافئة والأسقف الجبسية المعلقة مع إضاءة مخفية تمنح المجلس أو غرفة المعيشة شعوراً بالرحابة والوقار.</p>
            </div>
          </article>
          <article>
            <img src="/assets/office.webp" alt="تصور معماري ثلاثي الأبعاد لمنطقة استقبال مكتبية حديثة" width="1536" height="1024" loading="lazy">
            <div>
              <span class="eyebrow">مفهوم تجاري ومكتبي ثلاثي الأبعاد · مقر شركة</span>
              <h3>حضور مؤسسي يعكس الاحترافية.</h3>
              <p>منطقة استقبال بمواصفات معمارية دقيقة تمزج بين تكسيات الجدران الخشبية والقواطع الذكية لمنح الزوار انطباعاً أولياً راقياً وموثوقاً.</p>
            </div>
          </article>
        </div>
      </section>

      <section class="cta">
        <p class="eyebrow">هل لديك مخططات جاهزة للتنفيذ؟</p>
        <h2>دعنا نحول فكرتك إلى واقع.</h2>
        <a class="button" href="/ar/contact/">طلب عرض أسعار</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  },

  "services/": {
    enPath: "services/",
    title: "خدمات الفيت آوت والديكور في أبوظبي | نسق",
    description: "خدمات فيت آوت متكاملة في أبوظبي: تشطيب فلل، مكاتب، مساحات تجارية، أعمال جبس بورد، أسقف مستعارة، وقواطع جدارية.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "الخدمات", url: "https://nasaqfitout.ae/ar/services/" }
    ],
    faqs: [
      {
        q: "ما هي التخصصات الأساسية لشركة نسق في أعمال الفيت آوت؟",
        a: "تتخصص نسق في التنفيذ المادي للتصاميم الداخلية: تشطيب الفلل والمكاتب، الجبس بورد، الأسقف المستعارة، القواطع الجدارية، والترميم الداخلي."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">خدمات نسق التخصصية · أبوظبي والإمارات</p>
        <h1>التنفيذ الداخلي المتكامل.<br>من المخطط إلى التسليم.</h1>
        <p>نقدم حلول فيت آوت وديكور تخصصية في أبوظبي وكافة إمارات الدولة، مع التركيز على دقة التنفيذ والانضباط في تسليم المشاريع.</p>
      </section>

      <section class="section pale">
        <div class="services">
          <a href="/ar/services/interior-fit-out/">
            <span class="number">01</span>
            <h3>أعمال الفيت آوت الداخلي</h3>
            <p>تنفيذ متكامل من المخططات المعتمدة إلى التسليم النهائي للفلل والمكاتب والمساحات التجارية.</p>
            <span class="textlink">تفاصيل الخدمة</span>
          </a>
          <a href="/ar/services/villa-fit-out/">
            <span class="number">02</span>
            <h3>فيت آوت الفلل والمجالس</h3>
            <p>تشطيبات متقنة للفلل الخاصة والمجالس، مع تنفيذ الأسقف الجبسية والتشطيبات الفاخرة.</p>
            <span class="textlink">تفاصيل الخدمة</span>
          </a>
          <a href="/ar/services/office-fit-out/">
            <span class="number">03</span>
            <h3>فيت آوت المكاتب والشركات</h3>
            <p>بيئات عمل تجمع بين متطلبات الإنتاجية اليومية والمظهر المؤسسي اللائق.</p>
            <span class="textlink">تفاصيل الخدمة</span>
          </a>
          <a href="/ar/services/commercial-fit-out/">
            <span class="number">04</span>
            <h3>فيت آوت المساحات التجارية</h3>
            <p>تنفيذ المتاجر والمعارض التجارية وصالات العرض بمواصفات تلبي متطلبات إدارة المولات والتطوير.</p>
            <span class="textlink">تفاصيل الخدمة</span>
          </a>
          <a href="/ar/services/gypsum-board-works/">
            <span class="number">05</span>
            <h3>أعمال ألواح الجبس بورد</h3>
            <p>تثبيت دقيق للجبس بورد، معالجة الفواصل، وتجهيز الأسطح بأعلى درجات الاستواء.</p>
            <span class="textlink">تفاصيل الخدمة</span>
          </a>
          <a href="/ar/services/false-ceilings/">
            <span class="number">06</span>
            <h3>الأسقف المستعارة والمعلقة</h3>
            <p>تصميم وتنفيذ الأسقف المعمارية مع دمج فتحات التكييف والإضاءات الخطية المخفية.</p>
            <span class="textlink">تفاصيل الخدمة</span>
          </a>
          <a href="/ar/services/interior-partitions/">
            <span class="number">07</span>
            <h3>القواطع الجدارية والجبسية</h3>
            <p>قواطع جدارية عازلة للصوت لتحديد الغرف وتقسيم المساحات المكتبية والسكنية.</p>
            <span class="textlink">تفاصيل الخدمة</span>
          </a>
          <a href="/ar/services/interior-renovation/">
            <span class="number">08</span>
            <h3>تجديد وترميم المساحات</h3>
            <p>تحديث شامل للعقارات السكنية والتجارية وتجديد الأسقف والجدران والتشطيبات.</p>
            <span class="textlink">تفاصيل الخدمة</span>
          </a>
          <a href="/ar/services/residential-fit-out/">
            <span class="number">09</span>
            <h3>التشطيب السكني للشقق</h3>
            <p>تنفيذ تشطيبات الشقق والبنتهاوس وفقاً لمتطلبات الساكنين ومعايير المطورين.</p>
            <span class="textlink">تفاصيل الخدمة</span>
          </a>
        </div>
      </section>

      <section class="cta">
        <p class="eyebrow">جاهزون لبدء مشروعكم</p>
        <h2>احصل على استشارة وعرض أسعار.</h2>
        <a class="button" href="/ar/contact/">تواصل معنا الآن</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  },

  "services/interior-fit-out/": {
    enPath: "services/interior-fit-out/",
    title: "أعمال الفيت آوت الداخلي في أبوظبي | نسق",
    description: "تنفيذ متكامل لأعمال الفيت آوت الداخلي في أبوظبي من المخططات المعتمدة إلى التسليم النهائي للمشاريع السكنية والتجارية.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "الخدمات", url: "https://nasaqfitout.ae/ar/services/" },
      { name: "الفيت آوت الداخلي", url: "https://nasaqfitout.ae/ar/services/interior-fit-out/" }
    ],
    faqs: [
      {
        q: "ما الذي تشمله خدمة الفيت آوت الداخلي من شركة نسق؟",
        a: "تشمل الخدمة التنفيذ المادي الكامل للمخططات: مطابقة وتوريد المواد، أعمال الجدران والأسقف الجبسية، القواطع، التشطيبات والدهانات، والتسليم النهائي الخالي من الملاحظات."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">خدمات الفيت آوت · أبوظبي والإمارات</p>
        <h1>أعمال الفيت آوت الداخلي.<br>تنفيذ منضبط للمخططات.</h1>
        <p>تحويل المخططات الهندسية وتصاميم الديكور المعتمدة إلى واقع معماري ملموس بأعلى درجات الدقة والمهارة الحرفية.</p>
      </section>
      <section class="section split">
        <div>
          <h2>تنفيذ متكامل<br>بإشراف ميداني مستمر.</h2>
          <p class="small" style="color:#9b7145;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;margin-top:24px;">نطاق العمل</p>
          <p style="font-size:14px;color:#62635d;margin-top:4px;">تشطيبات الفلل والمكاتب والمحلات التجارية · أبوظبي والإمارات</p>
        </div>
        <div>
          <p class="lead">يتطلب الفيت آوت الناجح التزاماً مطلقاً بأبعاد المخطط وجودة المواد المعتمدة.</p>
          <p>يعمل فريق نسق كشريك تنفيذي موثوق للملاك والمعماريين في أبوظبي ودبي وسائر إمارات الدولة. نقوم بدراسة جدول الكميات والمخططات المعمارية المعتمدة بعناية، وتنسيق كافة مراحل العمل بالموقع: من تركيب الهياكل المعدنية والجبس بورد والأسقف المعلقة، وحتى أعمال الدهانات الدقيقة وتركيب القواطع والتسليم النهائي.</p>
          <div class="principles">
            <h3>مطابقة تامة للمواصفات</h3>
            <p>نلتزم الصرامة في عدم استبدال أي مادة بمواد أقل جودة، ونحرص على التوافق الكامل مع المخططات المعتمدة من الاستشاري.</p>
            <h3>تسليم في الوقت المحدد</h3>
            <p>نضع جدولاً زمنياً واقعياً ونلتزم بمراحله بدقة مع الحفاظ على نظافة الموقع وإجراءات السلامة طوال فترة التنفيذ.</p>
          </div>
        </div>
      </section>
      <section class="cta">
        <p class="eyebrow">لديك مخططات معتمدة؟</p>
        <h2>اطلب عرض أسعار لأعمال الفيت آوت.</h2>
        <a class="button" href="/ar/contact/">طلب عرض أسعار</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  },

  "services/villa-fit-out/": {
    enPath: "services/villa-fit-out/",
    title: "فيت آوت وتشطيب الفلل في أبوظبي | نسق",
    description: "تشطيب وفيت آوت الفلل الخاصة والمجالس في أبوظبي: السعديات، ياس، مدينة خليفة، ومحمد بن زايد. تشطيب راقٍ للأسقف والجدران.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "الخدمات", url: "https://nasaqfitout.ae/ar/services/" },
      { name: "فيت آوت الفلل", url: "https://nasaqfitout.ae/ar/services/villa-fit-out/" }
    ],
    faqs: [
      {
        q: "ما هي مجمعات الفلل التي تخدمها نسق في أبوظبي؟",
        a: "نخدم بانتظام ملاك الفلل في جزيرة السعديات، جزيرة ياس، مدينة خليفة، مدينة محمد بن زايد، مدينة شخبوط، الشامخة، الفلاح، وشاطئ الراحة."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">فيت آوت سكني فاخر · أبوظبي</p>
        <h1>فيت آوت وتشطيب الفلل.<br>خصوصية ووقار معماري.</h1>
        <p>تشطيبات متقنة للفلل السكنية والمجالس الفاخرة في أبوظبي والإمارات، مع إتقان كامل للأسقف الجبسية والقواطع واللمسات الديكورية الراقية.</p>
      </section>
      <section class="section split">
        <div>
          <h2>مساحات سكنية<br>تليق بأسلوب حياتكم.</h2>
          <p class="small" style="color:#9b7145;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;margin-top:24px;">المجالس وغرف المعيشة</p>
          <p style="font-size:14px;color:#62635d;margin-top:4px;">تنفيذ مدروس للفلل الخاصة والمجالس العائلية الكبرى</p>
        </div>
        <div>
          <p class="lead">الفيلا ليست مجرد مساحة سكنية، بل هي ملاذ عائلي يحتاج إلى تناغم في الإضاءة وهدوء في التشطيبات.</p>
          <p>سواء كنتم تبنون فيلا جديدة في مدينة خليفة أو جزيرة السعديات أو تقومون بتجديد مجلس عائلي في الشامخة، يتولى فريق نسق تنفيذ كافة أعمال الجبس بورد الفاخرة، الإضاءات المخفية، القواطع الجدارية المعزولة، والتشطيبات السطحية الراقية التي تمنح منزلكم طابعاً من الفخامة الهادئة.</p>
          <div class="principles">
            <h3>تنفيذ المجالس الفاخرة</h3>
            <p>العناية الفائقة بتفاصيل الأسقف العالية، التجاويف الديكورية، والإضاءة المتدرجة التي تليق بالمجالس الإماراتية الأصيلة.</p>
            <h3>عزل الصوت والراحة العائلية</h3>
            <p>تركيب قواطع جدارية جبسية مدعومة بعوازل صوتية لضمان الخصوصية والراحة التامة في غرف النوم والمجالس.</p>
          </div>
        </div>
      </section>
      <section class="cta">
        <p class="eyebrow">استشر فريق نسق في مشروع فيلتك</p>
        <h2>ابدأ تشطيب فيلتك بأعلى معايير الجودة.</h2>
        <a class="button" href="/ar/contact/">طلب عرض أسعار للفيلا</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  },

  "services/office-fit-out/": {
    enPath: "services/office-fit-out/",
    title: "فيت آوت المكاتب والشركات في أبوظبي | نسق",
    description: "فيت آوت المكاتب ومقرات الشركات في أبوظبي. تصميم وتنفيذ مناطق الاستقبال، غرف الاجتماعات، والقواطع المكتبية العازلة للصوت.",
    image: "https://nasaqfitout.ae/assets/office.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "الخدمات", url: "https://nasaqfitout.ae/ar/services/" },
      { name: "فيت آوت المكاتب", url: "https://nasaqfitout.ae/ar/services/office-fit-out/" }
    ],
    faqs: [
      {
        q: "ما هي الأعمال المكتبية التي تنفذها شركة نسق؟",
        a: "تشمل أعمالنا: مناطق الاستقبال، غرف الاجتماعات ومجالس الإدارة، المكاتب التنفيذية، مساحات العمل المفتوحة، الأسقف المعلقة، والقواطع الجدارية العازلة للصوت."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">فيت آوت تجاري ومكتبي · أبوظبي</p>
        <h1>فيت آوت المكاتب والشركات.<br>بيئات عمل تعزز الإنتاجية.</h1>
        <p>تنفيذ مقرات العمل والمكاتب التنفيذية في أبوظبي ودبي بأعلى مستويات الاحترافية وحسن استغلال المساحة والانطباع المؤسسي الراقي.</p>
      </section>
      <section class="section split">
        <div>
          <h2>مساحات عمل توازن<br>بين الوظيفة والمظهر.</h2>
        </div>
        <div>
          <p class="lead">المكتب يعكس هوية شركتكم أمام العملاء ويوفر في الوقت ذاته الراحة والتركيز لفريق العمل.</p>
          <p>تتولى نسق تنفيذ بيئات العمل المكتبية وفق المخططات المعتمدة، مع العناية بمناطق الاستقبال، وتوزيع القواطع العازلة للصوت، وتركيب الأسقف المستعارة التي تسهل تمديد شبكات التكييف والإنارة والاتصالات دون المساس بالمظهر الجمالي العام.</p>
        </div>
      </section>
      <section class="cta">
        <p class="eyebrow">هل تستعد لتأسيس أو تجديد مكتبك؟</p>
        <h2>اطلب استشارة تسعير لمكتبك اليوم.</h2>
        <a class="button" href="/ar/contact/">طلب عرض أسعار للمكتب</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  },

  "services/commercial-fit-out/": {
    enPath: "services/commercial-fit-out/",
    title: "فيت آوت المساحات التجارية والمحلات في أبوظبي | نسق",
    description: "تشطيب وفيت آوت المحلات وصالات العرض والمساحات التجارية في أبوظبي وفق متطلبات إدارة المولات والمعايير المعتمدة.",
    image: "https://nasaqfitout.ae/assets/office.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "الخدمات", url: "https://nasaqfitout.ae/ar/services/" },
      { name: "فيت آوت تجاري", url: "https://nasaqfitout.ae/ar/services/commercial-fit-out/" }
    ],
    faqs: [
      {
        q: "هل تنفذ نسق تشطيب المحلات التجارية في المولات والمراكز؟",
        a: "نعم، ننفذ أعمال التشطيب والديكور والأسقف والقواطع للمحلات والمعارض التجارية مع الالتزام التام بإرشادات العمل والسلامة للمراكز التجارية."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">فيت آوت المحلات والمعارض · أبوظبي</p>
        <h1>فيت آوت المساحات التجارية.<br>جاذبية بصرية وسرعة إنجاز.</h1>
        <p>تنفيذ ديكور وتشطيب المحلات التجارية وصالات العرض في أبوظبي والإمارات ضمن الجداول الزمنية المحددة لافتتاح مشروعكم.</p>
      </section>
      <section class="section split">
        <div><h2>مساحات تجارية تجذب الزوار.</h2></div>
        <div>
          <p class="lead">في المشاريع التجارية، يعتبر الالتزام بالموعد النهائي لافتتاح النشاط أولوية قصوى لتجنب الخسائر التشغيلية.</p>
          <p>يعمل فريق نسق بكفاءة عالية على تنفيذ الأسقف، الجدران، القواطع، والتشطيبات التخصصية للمحلات التجارية وصالات العرض في أبوظبي، بما يتطابق مع المخططات المعتمدة وتطلعات العميل التجارية.</p>
        </div>
      </section>
      <section class="cta">
        <p class="eyebrow">مشروعك التجاري على وشك الانطلاق؟</p>
        <h2>تواصل معنا لبدء الفيت آوت التجاري.</h2>
        <a class="button" href="/ar/contact/">طلب عرض أسعار</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  },

  "services/gypsum-board-works/": {
    enPath: "services/gypsum-board-works/",
    title: "أعمال الجبس بورد في أبوظبي | نسق",
    description: "تركيب ألواح الجبس بورد في أبوظبي: أسقف، قواطع جدارية، تجاويف إنارة مخفية، وتفاصيل معمارية دقيقة خالية من الشروخ والعيوب.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "الخدمات", url: "https://nasaqfitout.ae/ar/services/" },
      { name: "أعمال الجبس بورد", url: "https://nasaqfitout.ae/ar/services/gypsum-board-works/" }
    ],
    faqs: [
      {
        q: "ما هي أنواع ألواح الجبس بورد المستخدمة في مشاريع نسق؟",
        a: "نستخدم ألواح الجبس المعتمدة المقاومة للرطوبة (خضراء) للمناطق الرطبة، المقاومة للحريق (وردية) للأماكن ذات المتطلبات الخاصة، والألواح القياسية المتميزة بجودة التثبيت والاستواء."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">أعمال الجبس التخصصية · أبوظبي والإمارات</p>
        <h1>أعمال ألواح الجبس بورد.<br>استواء تام وخطوط مستقيمة.</h1>
        <p>تركيب احترافي لألواح الجبس بورد مع معالجة فواصل محكمة وتشطيبات أسطح تمنح المكان مظهراً معمارياً متكاملاً.</p>
      </section>
      <section class="section split">
        <div><h2>حرفية استثنائية في الجبس.</h2></div>
        <div>
          <p class="lead">الجبس بورد هو العنصر الأساسي الذي يحدد استواء الجدران ونقاء خطوط الأسقف في أي مشروع داخلي راقٍ.</p>
          <p>تتمتع فرق نسق بخبرة 11+ عاماً في تثبيت الهياكل المعدنية المتينة، محاذاة الألواح بدقة ليزرية، ومعالجة الزوايا والفواصل بأجود أنواع المعجون والشرائط العازلة لتفادي أي شروخ مستقبلية نهائياً.</p>
        </div>
      </section>
      <section class="cta">
        <p class="eyebrow">هل تبحث عن مقاول جبس بورد معتمد؟</p>
        <h2>اطلب تسعير أعمال الجبس بورد.</h2>
        <a class="button" href="/ar/contact/">طلب عرض أسعار</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  },

  "services/false-ceilings/": {
    enPath: "services/false-ceilings/",
    title: "الأسقف المستعارة والمعلقة في أبوظبي | نسق",
    description: "تركيب الأسقف المستعارة والمعلقة في أبوظبي. أسقف جبسية، إضاءة مخفية، وتكامل هندسي مع التكييف والإنارة للمنازل والمكاتب.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "الخدمات", url: "https://nasaqfitout.ae/ar/services/" },
      { name: "الأسقف المستعارة", url: "https://nasaqfitout.ae/ar/services/false-ceilings/" }
    ],
    faqs: [
      {
        q: "ما هي مزايا الأسقف المستعارة الجبسية في مشاريع نسق؟",
        a: "تخفي الأسقف المستعارة التمديدات ومجاري التكييف بكفاءة، وتتيح توزيعاً متناسقاً للإضاءات الخطية والمخفية، مع توفير عزل حراري وصوتي إضافي."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">أنظمة الأسقف المعمارية · أبوظبي</p>
        <h1>الأسقف المستعارة والمعلقة.<br>أبعاد وجمالية جديدة للمساحة.</h1>
        <p>تصميم وتنفيذ الأسقف المستعارة المعلقة المعاصرة مع دمج متكامل للإضاءة الخطية وتجاويف التكييف والستائر المخفية.</p>
      </section>
      <section class="section split">
        <div><h2>أسقف تعيد تشكيل الفضاء الداخلي.</h2></div>
        <div>
          <p class="lead">السقف هو الجدار الخامس في الغرفة؛ وتصميمه المتقن يغير تماماً الإحساس برحابة ودفء المكان.</p>
          <p>تنفذ نسق الأسقف متعددة المستويات، الأسقف المستوية البسيطة، تفاصيل الظلال المحيطية (Shadow Gap)، وتجاويف الإضاءة (Cove Lighting) للفلل والمكاتب في كافة أنحاء أبوظبي والإمارات.</p>
        </div>
      </section>
      <section class="cta">
        <p class="eyebrow">تريد سقفاً بتصميم معماري استثنائي؟</p>
        <h2>اطلب تسعير الأسقف المستعارة.</h2>
        <a class="button" href="/ar/contact/">طلب عرض أسعار</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  },

  "services/interior-partitions/": {
    enPath: "services/interior-partitions/",
    title: "القواطع الجدارية والجبسية في أبوظبي | نسق",
    description: "تركيب القواطع الجدارية الجبسية في أبوظبي. تقسيم ذكي للمساحات، عزل صوتي فعال، وجدران داخلية خفيفة وقوية للمكاتب والفلل.",
    image: "https://nasaqfitout.ae/assets/office.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "الخدمات", url: "https://nasaqfitout.ae/ar/services/" },
      { name: "القواطع الجدارية", url: "https://nasaqfitout.ae/ar/services/interior-partitions/" }
    ],
    faqs: [
      {
        q: "هل توفر القواطع الجبسية عزلاً صوتياً كافياً للمكاتب والغرف؟",
        a: "نعم، عند تدعيم القواطع الجبسية بطبقات الصوف الصخري العازل (Rockwool) والألواح المزدوجة، توفر عزلاً صوتياً ممتازاً يمنح الخصوصية التامة."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">تقسيم المساحات الذكي · أبوظبي</p>
        <h1>القواطع الجدارية والجبسية.<br>مرونة مكانية وعزل متقدم.</h1>
        <p>إنشاء القواطع الجدارية الجبسية المتينة لتوزيع الغرف وتوفير الخصوصية في المقرات الإدارية والفلل السكنية.</p>
      </section>
      <section class="section split">
        <div><h2>تقسيم هندسي يعزز الخصوصية.</h2></div>
        <div>
          <p class="lead">القواطع الجدارية المصممة جيداً تمنحكم أقصى استفادة من مخطط الطابق دون إثقال المبنى أو إهدار الوقت.</p>
          <p>تثبت نسق أنظمة القواطع الجبسية الخفيفة المقاومة للحرائق والرطوبة والمزودة بعوازل صوتية لضمان راحة المكاتب وغرف النوم والممرات.</p>
        </div>
      </section>
      <section class="cta">
        <p class="eyebrow">تحتاج إلى تقسيم مساحتك بدقة؟</p>
        <h2>اطلب تسعير القواطع الجدارية الآن.</h2>
        <a class="button" href="/ar/contact/">طلب عرض أسعار</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  },

  "services/interior-renovation/": {
    enPath: "services/interior-renovation/",
    title: "تجديد وترميم المساحات في أبوظبي | نسق",
    description: "تجديد وترميم الفلل والمكاتب والمساحات القائمة في أبوظبي. تحديث الأسقف، إعادة توزيع الجدران، وتحديث التشطيبات الداخلية بالكامل.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "الخدمات", url: "https://nasaqfitout.ae/ar/services/" },
      { name: "تجديد وترميم", url: "https://nasaqfitout.ae/ar/services/interior-renovation/" }
    ],
    faqs: [
      {
        q: "ما هي خطوات تجديد المساحات السكنية أو التجارية مع نسق؟",
        a: "تبدأ العملية بمعاينة العقار، دراسة التعديلات المطلوبة في المخطط والأسقف، تقديم عرض أسعار تفصيلي، ثم تنفيذ أعمال الإزالة والتركيب والتشطيب النهائي."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">إعادة إحياء المساحات القائمة · أبوظبي</p>
        <h1>تجديد وترميم المساحات.<br>حياة جديدة لعقارك.</h1>
        <p>تحديث مدروس ومتكامل للفلل والمكاتب القائمة في أبوظبي، من تعديل المخططات وتجديد الأسقف والجدران إلى التشطيبات والدهانات النهائية.</p>
      </section>
      <section class="section split">
        <div><h2>تحويل المساحة القديمة إلى بيئة عصرية.</h2></div>
        <div>
          <p class="lead">أحياناً لا تحتاج إلى الانتقال إلى عقار جديد، بل فقط إلى إعادة تجديد مدروسة تبرز إمكانيات المكان الحقيقية.</p>
          <p>يتولى فريق نسق أعمال الترميم والتجديد الداخلي بكل سلاسة مع الحفاظ على سلامة المبنى، وتحديث الأسقف المستعارة، وتعديل القواطع، واستبدال التشطيبات القديمة بحلول عصرية راقية.</p>
        </div>
      </section>
      <section class="cta">
        <p class="eyebrow">هل تخطط لتجديد مساحتك السكنية أو التجارية؟</p>
        <h2>تواصل معنا لبدء خطة التجديد.</h2>
        <a class="button" href="/ar/contact/">طلب عرض أسعار للتجديد</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  },

  "services/residential-fit-out/": {
    enPath: "services/residential-fit-out/",
    title: "التشطيب السكني للشقق والفلل في أبوظبي | نسق",
    description: "تشطيب سكني راقٍ للشقق والبنتهاوس والفلل في أبوظبي. تنفيذ متقن للأسقف الجبسية، الدهانات، والديكورات الداخلية المتناغمة.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "الرئيسية", url: "https://nasaqfitout.ae/ar/" },
      { name: "الخدمات", url: "https://nasaqfitout.ae/ar/services/" },
      { name: "التشطيب السكني", url: "https://nasaqfitout.ae/ar/services/residential-fit-out/" }
    ],
    faqs: [
      {
        q: "هل تنفذ شركة نسق تشطيبات الشقق والبنتهاوس السكنية؟",
        a: "نعم، ننفذ أعمال التشطيب الداخلي للشقق الفاخرة والبنتهاوس والتاون هاوس في جزيرة الريم، شاطئ الراحة، وغيرها من مجمعات أبوظبي."
      }
    ],
    mainHtml: `
      <section class="intro">
        <p class="eyebrow">تشطيب سكني متكامل · أبوظبي</p>
        <h1>التشطيب السكني للشقق.<br>تناغم الراحة والجمال.</h1>
        <p>تنفيذ تشطيبات الشقق الفاخرة والبنتهاوس والتاون هاوس في أبوظبي والإمارات بتناغم تام بين الإضاءة والأسقف والخامات الراقية.</p>
      </section>
      <section class="section split">
        <div><h2>مساحات سكنية مصممة للراحة.</h2></div>
        <div>
          <p class="lead">البيت هو المكان الذي تبدأ فيه الراحة، والتنفيذ المتقن يمنحه الدفء والسكينة اليومية.</p>
          <p>تنفذ نسق تشطيبات الشقق والمنازل السكنية بأعلى مستويات النظافة والانضباط، متوافقة تماماً مع إرشادات إدارة المباني السكنية ومعايير المطورين في أبوظبي ودبي.</p>
        </div>
      </section>
      <section class="cta">
        <p class="eyebrow">هل تستلم شقة جديدة أو تريد تشطيبها؟</p>
        <h2>اطلب عرض أسعار للتشطيب السكني.</h2>
        <a class="button" href="/ar/contact/">طلب عرض أسعار</a>
        <a class="plain" href="tel:+971505334861">اتصل بنا: 0505334861 971+</a>
      </section>
    `
  }
};

// Build Schema.org Graph for Arabic Page
function buildArabicSchema(cfg) {
  const schemaList = [businessEntityAr];

  // Breadcrumbs
  if (cfg.breadcrumbs && cfg.breadcrumbs.length > 0) {
    schemaList.push({
      "@type": "BreadcrumbList",
      "itemListElement": cfg.breadcrumbs.map((b, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": b.name,
        "item": b.url
      }))
    });
  }

  // FAQs
  if (cfg.faqs && cfg.faqs.length > 0) {
    schemaList.push({
      "@type": "FAQPage",
      "mainEntity": cfg.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": schemaList
  };
}

// Generate Full Arabic HTML
function generateArabicHtml(subPath, cfg) {
  const arCanonical = `https://nasaqfitout.ae/ar/${subPath}`;
  const enCanonical = `https://nasaqfitout.ae/${cfg.enPath}`;
  const enSwitchHref = `/${cfg.enPath}`;

  const schema = buildArabicSchema(cfg);

  return `<!doctype html><html lang="ar" dir="rtl"><head>` +
    `<meta charset="utf-8">` +
    `<meta name="viewport" content="width=device-width,initial-scale=1">` +
    `<title>${cfg.title}</title>` +
    `<meta name="description" content="${cfg.description}">` +
    `<meta name="theme-color" content="#181918">` +
    `<link rel="canonical" href="${arCanonical}">` +
    `<link rel="alternate" hreflang="ar" href="${arCanonical}">` +
    `<link rel="alternate" hreflang="en" href="${enCanonical}">` +
    `<link rel="alternate" hreflang="x-default" href="${enCanonical}">` +
    `<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">` +
    `<link rel="alternate icon" href="/assets/favicon.png">` +
    `<link rel="stylesheet" href="/style.css?v=2">` +
    `<meta name="geo.region" content="AE-AZ">` +
    `<meta name="geo.placename" content="أبوظبي">` +
    `<meta name="geo.position" content="24.4539;54.3773">` +
    `<meta name="ICBM" content="24.4539, 54.3773">` +
    `<meta property="og:site_name" content="نسق | NASAQ">` +
    `<meta property="og:type" content="website">` +
    `<meta property="og:locale" content="ar_AE">` +
    `<meta property="og:locale:alternate" content="en_AE">` +
    `<meta property="og:title" content="${cfg.title}">` +
    `<meta property="og:description" content="${cfg.description}">` +
    `<meta property="og:url" content="${arCanonical}">` +
    `<meta property="og:image" content="${cfg.image}">` +
    `<meta name="twitter:card" content="summary_large_image">` +
    `<meta name="twitter:title" content="${cfg.title}">` +
    `<meta name="twitter:description" content="${cfg.description}">` +
    `<meta name="twitter:image" content="${cfg.image}">` +
    `<script type="application/ld+json">${JSON.stringify(schema)}</script>` +
    `<script src="/app.js" defer></script>` +
  `</head><body>` +
    `<a class="skip" href="#main">تخطي إلى المحتوى</a>` +
    `<header>` +
      `<a class="brand" href="/ar/" aria-label="الرئيسية نسق"><img src="/assets/logo.svg" alt="شعار شركة نسق لتنفيذ التصميم الداخلي والديكور" width="500" height="500"></a>` +
      `<nav aria-label="التنقل الرئيسي">` +
        `<a href="/ar/services/">الخدمات</a>` +
        `<a href="/ar/projects/">التصاميم</a>` +
        `<a href="/ar/about/">من نحن</a>` +
        `<a href="/ar/contact/">اتصل بنا</a>` +
      `</nav>` +
      `<a class="lang-switch" href="${enSwitchHref}" aria-label="English Version">English</a>` +
      `<a class="navcta" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20مناقشة%20مشروع%20فيت%20آوت%20وديكور.">طلب استشارة</a>` +
      `<button id="menu" aria-label="افتح القائمة" aria-expanded="false">القائمة</button>` +
    `</header>` +
    `<main id="main">` +
      cfg.mainHtml +
    `</main>` +
    `<footer>` +
      `<div>` +
        `<span class="wordmark">نسق <span lang="en">NASAQ</span></span>` +
        `<p>تناغم في المساحات.</p>` +
        `<p class="small">شركة نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م<br>أبوظبي، دولة الإمارات العربية المتحدة</p>` +
      `</div>` +
      `<div>` +
        `<a href="tel:+971505334861">+971 50 533 4861</a>` +
        `<a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a>` +
        `<a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a>` +
        `<a href="https://www.instagram.com/nasaq.fitout/">إنستغرام · @nasaq.fitout</a>` +
      `</div>` +
      `<div>` +
        `<a href="/ar/services/">خدماتنا</a>` +
        `<a href="/ar/about/">عن نسق</a>` +
        `<a href="/ar/contact/">ابدأ محادثة</a>` +
        `<p class="small">© 2026 نسق</p>` +
      `</div>` +
    `</footer>` +
    `<a class="floating" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20مناقشة%20مشروع%20فيت%20آوت%20وديكور." aria-label="تواصل مع نسق عبر الواتساب">واتساب</a>` +
  `</body></html>`;
}

// 1. Generate All 14 Arabic Pages
console.log("Generating 14 Arabic pages under dist/ar/ ...");
for (const [subPath, cfg] of Object.entries(arabicPages)) {
  const filePath = path.join(arDir, subPath, 'index.html');
  const html = generateArabicHtml(subPath, cfg);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Created Arabic page: dist/ar/${subPath}index.html`);
}

// 2. Enhance English Pages with Hreflang and Language Switcher
console.log("Updating English pages with reciprocal hreflang and Arabic language switcher...");
for (const [subPath, cfg] of Object.entries(arabicPages)) {
  const enFilePath = path.join(distDir, cfg.enPath, 'index.html');
  if (!fs.existsSync(enFilePath)) continue;

  let html = fs.readFileSync(enFilePath, 'utf8');

  // Insert or update Hreflang tags
  const arCanonical = `https://nasaqfitout.ae/ar/${subPath}`;
  const enCanonical = `https://nasaqfitout.ae/${cfg.enPath}`;

  const hreflangTags = `<link rel="alternate" hreflang="en" href="${enCanonical}">` +
    `<link rel="alternate" hreflang="ar" href="${arCanonical}">` +
    `<link rel="alternate" hreflang="x-default" href="${enCanonical}">`;

  // Remove existing alternate hreflangs if any to prevent duplication
  html = html.replace(/<link rel="alternate" hreflang="[^"]*" href="[^"]*">/g, '');

  // Add hreflang right before </head>
  html = html.replace('</head>', `${hreflangTags}</head>`);

  // Insert or update lang-switch button before <a class="navcta"
  const arSwitchHref = `/ar/${subPath}`;
  const langSwitchBtn = `<a class="lang-switch" href="${arSwitchHref}" aria-label="النسخة العربية">العربية</a>`;

  // Remove existing .lang-switch if present
  html = html.replace(/<a class="lang-switch"[^>]*>[\s\S]*?<\/a>/g, '');

  if (html.includes('<a class="navcta"')) {
    html = html.replace('<a class="navcta"', `${langSwitchBtn}<a class="navcta"`);
  } else if (html.includes('</nav>')) {
    html = html.replace('</nav>', `</nav>${langSwitchBtn}`);
  }

  fs.writeFileSync(enFilePath, html, 'utf8');
  console.log(`Enhanced English page: dist/${cfg.enPath}index.html`);
}

// 3. Generate Complete Sitemap with 28 URLs and xhtml:link alternates
console.log("Generating bilingual XML Sitemap with reciprocal xhtml:link hreflang tags...");
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
  `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

for (const [subPath, cfg] of Object.entries(arabicPages)) {
  const enUrl = `https://nasaqfitout.ae/${cfg.enPath}`;
  const arUrl = `https://nasaqfitout.ae/ar/${subPath}`;

  const priority = cfg.enPath === '' ? '1.0' : (cfg.enPath === 'services/' || cfg.enPath === 'about/' || cfg.enPath === 'contact/' ? '0.9' : '0.8');

  // English URL entry
  sitemapXml += `  <url>\n` +
    `    <loc>${enUrl}</loc>\n` +
    `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>\n` +
    `    <changefreq>weekly</changefreq>\n` +
    `    <priority>${priority}</priority>\n` +
    `  </url>\n`;

  // Arabic URL entry
  sitemapXml += `  <url>\n` +
    `    <loc>${arUrl}</loc>\n` +
    `    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>\n` +
    `    <changefreq>weekly</changefreq>\n` +
    `    <priority>${priority}</priority>\n` +
    `  </url>\n`;
}

sitemapXml += `</urlset>\n`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log("Bilingual XML Sitemap generated at dist/sitemap.xml (28 URLs)");

// 4. Update llms.txt with Arabic Knowledge Section
console.log("Appending Arabic knowledge section to llms.txt...");
const llmsPath = path.join(distDir, 'llms.txt');
let llmsContent = fs.readFileSync(llmsPath, 'utf8');

const arSectionHeader = "## الملف التعريفي والخدمات باللغة العربية (Arabic Knowledge Section)";
if (!llmsContent.includes(arSectionHeader)) {
  const arLlmsSection = `\n\n---\n\n` +
    `# نسق | NASAQ - دليل الذكاء الاصطناعي ومحركات البحث (باللغة العربية)\n\n` +
    `> ملف المعرفة الرسمي لمحركات الإجابة الذكية (ChatGPT, Perplexity, Claude, Google Gemini)\n\n` +
    `${arSectionHeader}\n` +
    `- **الاسم التجاري**: نسق | NASAQ\n` +
    `- **الاسم القانوني**: نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م\n` +
    `- **المقر**: أبوظبي، الإمارات العربية المتحدة\n` +
    `- **النشاط المرخص**: أعمال تنفيذ التصميم الداخلي (ديكور)\n` +
    `- **الخبرة وسجل الأعمال**: فريق عمل متخصص بخبرة تفوق 11 عاماً في مواقع العمل بالإمارات، وآلاف المشاريع المنفذة عبر كافة الإمارات السبع.\n` +
    `- **التغطية الجغرافية**: أبوظبي، دبي، الشارقة، عجمان، أم القيوين، رأس الخيمة، الفجيرة.\n` +
    `- **الموقع الرسمي بالعربية**: https://nasaqfitout.ae/ar/\n` +
    `- **الهاتف والواتساب**: +971 50 533 4861\n` +
    `- **الهاتف الثانوي**: +971 52 860 0115\n` +
    `- **البريد الإلكتروني للاستفسارات العامة**: info@nasaqfitout.ae\n` +
    `- **البريد الإلكتروني التجاري**: ossama@nasaqfitout.ae\n` +
    `- **إنستغرام**: https://www.instagram.com/nasaq.fitout/ (@nasaq.fitout)\n\n` +
    `### نبذة عن الشركة والقدرات الأساسية\n` +
    `شركة نسق هي شركة متخصصة في أعمال تنفيذ التصميم الداخلي والفيت آوت والديكور مقرها أبوظبي. نقوم بتحويل المخططات المعمارية المعتمدة وتصاميم الديكور وجداول الكميات (BOQ) إلى واقع مبني بأعلى درجات الانضباط الميداني وجودة التشطيب.\n\n` +
    `### نطاق الخدمات المعتمدة\n` +
    `1. **أعمال الفيت آوت الداخلي**: تنفيذ متكامل للمساحات السكنية والتجارية والمكتبية.\n` +
    `2. **فيت آوت الفلل والمجالس**: تشطيب متقن للفلل الخاصة والمجالس مع عناية فائقة بالأسقف والقواطع والتشطيبات الفاخرة.\n` +
    `3. **فيت آوت المكاتب والشركات**: بيئات عمل عصرية تحقق الكفاءة الوظيفية والمظهر المؤسسي اللائق.\n` +
    `4. **فيت آوت المساحات التجارية**: تشطيب المتاجر وصالات العرض وفق اشتراطات إدارة المراكز التجارية.\n` +
    `5. **أعمال ألواح الجبس بورد**: استواء هندسي فائق، معالجة فواصل دقيقة، وتجاويف إضاءة مخفية.\n` +
    `6. **الأسقف المستعارة والمعلقة**: أسقف معمارية تدمج فتحات التكييف والإنارة الخطية.\n` +
    `7. **القواطع الجدارية والجبسية**: حلول عزل صوتي وتقسيم ذكي للغرف والمساحات.\n` +
    `8. **تجديد وترميم المساحات**: تحديث وتطوير العقارات القائمة والتشطيبات السطحية.\n` +
    `9. **التشطيب السكني للشقق**: تنفيذ مساحات الشقق والبنتهاوس السكنية وفق معايير المطورين.\n\n` +
    `### مناطق الخدمة في أبوظبي والإمارات\n` +
    `- **أبوظبي**: جزيرة السعديات، جزيرة ياس، جزيرة الريم، مدينة خليفة، مدينة محمد بن زايد، مدينة شخبوط، الشامخة، الفلاح، شاطئ الراحة، الريف، البطين، المشرف، ومصفح.\n` +
    `- **كافة الإمارات**: العين، دبي، الشارقة، عجمان، أم القيوين، رأس الخيمة، والفجيرة.\n\n` +
    `### آلية العمل وطلب التسعير\n` +
    `1. **المشاركة**: يرسل العميل المخططات الهندسية أو جدول الكميات (BOQ) عبر الواتساب (+971 50 533 4861) أو البريد (info@nasaqfitout.ae / ossama@nasaqfitout.ae).\n` +
    `2. **الدراسة والتسعير**: يقوم فريق التسعير بدراسة المواصفات وتحديد نطاق العمل وتقديم عرض أسعار مفصل خلال 24-48 ساعة.\n` +
    `3. **التنفيذ**: إشراف ميداني مباشر وضبط يومي لمعايير الجودة والسلامة بالموقع.\n` +
    `4. **التسليم**: فحص Snagging دقيق وتسليم المساحة جاهزة بالكامل.\n`;

  fs.writeFileSync(llmsPath, llmsContent + arLlmsSection, 'utf8');
  console.log("Appended Arabic Knowledge section to dist/llms.txt");
}

console.log("All bilingual Arabic & English pages, sitemap, and LLMs index generated successfully!");
