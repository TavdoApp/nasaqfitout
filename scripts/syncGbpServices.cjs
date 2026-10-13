const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

// ==========================================
// 1. UPDATE dist/services/index.html
// ==========================================
const enServicesPath = path.join(distDir, 'services', 'index.html');
let enServicesHtml = fs.readFileSync(enServicesPath, 'utf8');

// Schema for English Services Hub
const enOfferCatalog = {
  "@type": "OfferCatalog",
  "@id": "https://nasaqfitout.ae/services/#catalog",
  "name": "NASAQ Specialist Sectors & Trade Scope",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Office Space Design & Commercial Fit-Out",
        "alternateName": ["Office Space Design", "Office Fit-Out", "Corporate Interior Fit-Out", "Commercial Projects"],
        "description": "Ergonomic workplace design, executive boardroom fit-out, acoustic partitioning, and MEP coordination for commercial offices across Abu Dhabi.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "Abu Dhabi" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Hospitality Fit-Out & Dining Room Design",
        "alternateName": ["Dining Room Design", "Restaurant Fit-Out", "Cafe Interior Fit-Out", "Hospitality Interiors"],
        "description": "Full-service hospitality fit-out for restaurants, cafes, and dining spaces featuring acoustic ceiling baffles, custom joinery, and durable designer flooring.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "Abu Dhabi" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Medical Clinic & Healthcare Fit-Out",
        "alternateName": ["Medical Clinics", "Healthcare Fit-Out", "Sterile Partitions", "Clinic Interior Design Implementation"],
        "description": "Healthcare and clinic fit-out built with sterile gypsum partition systems, antimicrobial Level-5 paint finishes, and authority-compliant MEP integration.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "Abu Dhabi" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Salon, Spa & Wellness Fit-Out",
        "alternateName": ["Salons & Spas", "Wellness Space Fit-Out", "Beauty Salon Interior Implementation"],
        "description": "Luxury salon and spa interiors engineered with moisture-resistant gypsum ceilings, non-slip tile installation, and illuminated mirror joinery.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "Abu Dhabi" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Bathroom Design, Remodelling & Master Suite Architecture",
        "alternateName": ["Bathroom Design", "Bathroom Remodelling", "Bedroom Design", "Home Decor Selection", "Interior Decorating"],
        "description": "Bespoke master suite interiors, turnkey luxury bathroom design and remodelling, bedroom design, and high-end home decor material selection.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "Abu Dhabi" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Drywall Installation, Ceilings, Tile Work & Interior Painting",
        "alternateName": ["Drywall Installation", "Tile Work Installation", "Floor Fitting", "Plumbing Fixture Installation", "Interior Painting", "False Ceiling Installation", "Gypsum Ceiling Works"],
        "description": "Master trade execution including ASTM C1396 drywall installation, architectural false ceilings, floor fitting, porcelain tile installation, sanitary plumbing fixtures, and Level-5 interior painting.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "Abu Dhabi" }
      }
    }
  ]
};

const enBusinessEntity = {
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://nasaqfitout.ae/#business",
  "name": "NASAQ Interior Design Implementation Works – L.L.C – S.P.C",
  "alternateName": ["NASAQ", "نسق", "نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م", "NASAQ Fit Out Abu Dhabi", "شركة نسق للديكور والتشطيبات"],
  "url": "https://nasaqfitout.ae/",
  "logo": "https://nasaqfitout.ae/assets/logo.svg",
  "image": "https://nasaqfitout.ae/assets/villa.webp",
  "telephone": "+971505334861",
  "email": "info@nasaqfitout.ae",
  "hasMap": "https://share.google/jD1fYkpZ96pX0pQPN",
  "hasOfferCatalog": { "@id": "https://nasaqfitout.ae/services/#catalog" }
};

const enFaqData = {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does NASAQ specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NASAQ specializes in interior fit-out, villa fit-out, office fit-out, commercial fit-out, gypsum board works, false ceilings, interior partitions, interior finishing, and interior renovation."
      }
    },
    {
      "@type": "Question",
      "name": "Does NASAQ execute specialist sectors like medical clinics, restaurants, and bathroom remodelling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. In addition to turnkey villa and office fit-outs, NASAQ delivers specialist interior implementation for medical clinics, healthcare facilities, restaurants, cafes, salons, spas, and luxury residential rooms including bathroom remodelling, master bedrooms, and dining spaces, backed by dedicated drywall, ceiling, tiling, and Level-5 finishing teams across Abu Dhabi."
      }
    },
    {
      "@type": "Question",
      "name": "How does NASAQ ensure project quality and material compliance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All works utilize ASTM C1396 compliant gypsum, moisture-resistant boards for wet areas, and heavy-gauge galvanized framing. Our on-site supervisors enforce strict Level-5 finishing protocols."
      }
    },
    {
      "@type": "Question",
      "name": "What is NASAQ's typical execution timeline?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timelines depend on project scale and approvals. Room and ceiling upgrades typically take 1 to 2 weeks, while full villa or office fit-outs take 4 to 8 weeks with structured milestones."
      }
    }
  ]
};

const enBreadcrumb = {
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nasaqfitout.ae/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://nasaqfitout.ae/services/" }
  ]
};

const enNewSchemaTag = `<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [enBusinessEntity, enOfferCatalog, enBreadcrumb, enFaqData]
})}</script>`;

// Replace old schema
enServicesHtml = enServicesHtml.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, enNewSchemaTag);

// English Specialist Sectors HTML block
const enSectorsHtml = `
      <section class="section sectors-section">
        <div class="sectionhead">
          <div>
            <p class="eyebrow">Specialist Sectors & Trade Scope</p>
            <h2>Bespoke environments.<br>Disciplined craftsmanship.</h2>
          </div>
          <p>Tailored interior architecture and trade execution across commercial, medical, hospitality, and luxury residential sectors in Abu Dhabi.</p>
        </div>
        <div class="sectors-grid">
          <div class="sector-card">
            <div class="sector-tag">Corporate & Commercial</div>
            <h3>Office Space Design & Commercial Fit-Out</h3>
            <p>High-performance workplaces, executive boardrooms, and commercial interiors engineered for brand prestige and acoustic privacy across Abu Dhabi’s premier commercial districts.</p>
            <div class="sector-pills">
              <span class="sector-pill">Office Space Design</span>
              <span class="sector-pill">Commercial Projects</span>
              <span class="sector-pill">Acoustic Partitions</span>
              <span class="sector-pill">Executive Fit-Out</span>
            </div>
          </div>
          <div class="sector-card">
            <div class="sector-tag">Hospitality & Dining</div>
            <h3>Hospitality Fit-Out & Dining Room Design</h3>
            <p>Atmospheric fine-dining rooms, cafe interiors, and boutique restaurants featuring architectural ceiling baffles, bespoke joinery, and durable designer floor fitting.</p>
            <div class="sector-pills">
              <span class="sector-pill">Dining Room Design</span>
              <span class="sector-pill">Restaurant Fit-Out</span>
              <span class="sector-pill">Cafe Interiors</span>
              <span class="sector-pill">Architectural Ceilings</span>
            </div>
          </div>
          <div class="sector-card">
            <div class="sector-tag">Healthcare & Medical</div>
            <h3>Medical Clinic & Healthcare Fit-Out</h3>
            <p>Clinical suites, dental centers, and healthcare facilities constructed with sterile drywall partitions, antimicrobial Level-5 paint finishes, and compliant MEP integration.</p>
            <div class="sector-pills">
              <span class="sector-pill">Medical Clinics</span>
              <span class="sector-pill">Sterile Partitions</span>
              <span class="sector-pill">Level-5 Finishes</span>
              <span class="sector-pill">Healthcare Interiors</span>
            </div>
          </div>
          <div class="sector-card">
            <div class="sector-tag">Wellness & Beauty</div>
            <h3>Salon, Spa & Wellness Fit-Out</h3>
            <p>Serene beauty salons, luxury spas, and wellness centers built with moisture-resistant gypsum systems, non-slip tile work installation, and bespoke illuminated mirror joinery.</p>
            <div class="sector-pills">
              <span class="sector-pill">Salons & Spas</span>
              <span class="sector-pill">Moisture-Resistant Ceilings</span>
              <span class="sector-pill">Tile Work Installation</span>
              <span class="sector-pill">Wellness Spaces</span>
            </div>
          </div>
          <div class="sector-card">
            <div class="sector-tag">Luxury Residential Living</div>
            <h3>Bathroom Design, Remodelling & Master Suites</h3>
            <p>Private villa sanctuaries featuring turnkey bathroom remodelling, master bedroom design, custom majlis interiors, curated home decor selection, and interior decorating.</p>
            <div class="sector-pills">
              <span class="sector-pill">Bathroom Design</span>
              <span class="sector-pill">Bathroom Remodelling</span>
              <span class="sector-pill">Bedroom Design</span>
              <span class="sector-pill">Home Decor Selection</span>
            </div>
          </div>
          <div class="sector-card">
            <div class="sector-tag">Master Architectural Trades</div>
            <h3>Drywall Installation, Ceilings & Tile Work</h3>
            <p>Precision trade execution covering ASTM C1396 drywall installation, false ceiling installation, floor fitting, plumbing fixture installation, and Level-5 interior painting.</p>
            <div class="sector-pills">
              <span class="sector-pill">Drywall Installation</span>
              <span class="sector-pill">False Ceiling Works</span>
              <span class="sector-pill">Floor Fitting</span>
              <span class="sector-pill">Interior Painting</span>
            </div>
          </div>
        </div>
      </section>
`;

// Insert enSectorsHtml before features-section
if (!enServicesHtml.includes('sectors-section')) {
  enServicesHtml = enServicesHtml.replace(
    '<section class="section pale features-section">',
    enSectorsHtml + '      <section class="section pale features-section">'
  );
}

// Add the 4th FAQ card if not present
if (!enServicesHtml.includes('Does NASAQ execute specialist commercial sectors')) {
  const fourthFaqCard = `
            <article class="faq-card">
              <h3>Does NASAQ execute specialist commercial sectors and room remodelling?</h3>
              <p>Yes. In addition to turnkey villa and office fit-outs, NASAQ delivers specialist interior implementation for medical clinics, healthcare facilities, restaurants, cafes, salons, spas, and luxury residential rooms including bathroom remodelling, master bedrooms, and dining spaces, backed by dedicated drywall, ceiling, tiling, and Level-5 finishing trades across Abu Dhabi.</p>
            </article>
`;
  enServicesHtml = enServicesHtml.replace(
    '<article class="faq-card">\n              <h3>How does NASAQ ensure project quality',
    fourthFaqCard + '            <article class="faq-card">\n              <h3>How does NASAQ ensure project quality'
  );
}

fs.writeFileSync(enServicesPath, enServicesHtml, 'utf8');
console.log('✅ Updated dist/services/index.html with Specialist Sectors & hasOfferCatalog Schema.');


// ==========================================
// 2. UPDATE dist/ar/services/index.html
// ==========================================
const arServicesPath = path.join(distDir, 'ar', 'services', 'index.html');
let arServicesHtml = fs.readFileSync(arServicesPath, 'utf8');

const arOfferCatalog = {
  "@type": "OfferCatalog",
  "@id": "https://nasaqfitout.ae/ar/services/#catalog",
  "name": "نطاق القطاعات التخصصية والأعمال الإنشائية والحرفية لدى نسق",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "تجهيز المكاتب وتصميم مساحات العمل",
        "alternateName": ["Office space design", "Office fit-out", "فيت آوت المكاتب", "تجهيز مقرات الشركات", "قواطع جدارية عازلة للمكاتب"],
        "description": "تصميم وتنفيذ مقرات الشركات والمكاتب التنفيذية وقاعات الاجتماعات وحلول العزل الصوتي والتنسيق الكهروميكانيكي المتكامل في أبوظبي.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "أبوظبي" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "تجهيز المطاعم والمقاهي وتصميم غرف الطعام",
        "alternateName": ["Dining room design", "Hospitality fit-out", "تجهيز المطاعم", "تجهيز المقاهي", "ديكورات الضيافة"],
        "description": "تنفيذ متكامل للمطاعم الراقية والكافيهات وصالات الطعام يشمل الأسقف الصوتية والأرضيات عالية التحمل والتفاصيل الخشبية الديكورية.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "أبوظبي" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "تجهيز العيادات الطبية والمراكز الصحية",
        "alternateName": ["Medical clinics fit-out", "Healthcare fit-out", "قواطع العيادات الطبية", "تشطيبات طبية Level-5"],
        "description": "تجهيز المراكز الطبية وعيادات الأسنان بألواح جبسية مطابقة للمعايير الصحية ودهانات معتمدة وتشطيب فائق النعومة متوافق مع اشتراطات الجهات المختصة.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "أبوظبي" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "تجهيز الصالونات والسبا ومراكز العافية",
        "alternateName": ["Salon fit-out", "Spa fit-out", "ديكور الصالونات", "تجهيز السبا ومراكز التجميل"],
        "description": "تنفيذ صالونات التجميل والسبا الفاخرة بأسقف مقاومة للرطوبة وأرضيات مانعة للانزلاق وإضاءات ومرايا ديكورية مخصصة.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "أبوظبي" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "تصميم وتجديد الحمامات الفاخرة وغرف النوم والمجالس",
        "alternateName": ["Bathroom design", "Bathroom remodelling", "Bedroom design", "Home decor selection", "تشطيب حمامات", "تصميم مجالس"],
        "description": "تشطيب معماري راقٍ لأجنحة الفلل يشمل تجديد وتصميم الحمامات الفاخرة وغرف النوم والمجالس واختيار الديكورات والأثاث المتناسق.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "أبوظبي" }
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "تركيب قواطع الجبس بورد والأسقف المستعارة والأرضيات والدهانات",
        "alternateName": ["Drywall installation", "Tile work installation", "Floor fitting", "Plumbing fixture installation", "Interior painting", "False ceilings", "أعمال الجبس بورد"],
        "description": "تنفيذ الحرف الإنشائية بدقة متناهية يشمل قواطع الجبس بورد ASTM C1396 والأسقف المعلقة وتركيب الأرضيات والبورسلان والأطقم الصحية والدهانات الداخلية Level-5.",
        "provider": { "@id": "https://nasaqfitout.ae/#business" },
        "areaServed": { "@type": "AdministrativeArea", "name": "أبوظبي" }
      }
    }
  ]
};

// Update Arabic Schema
try {
  const schemaRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
  const match = arServicesHtml.match(schemaRegex);
  if (match) {
    const parsed = JSON.parse(match[1]);
    if (parsed['@graph']) {
      // Find HomeAndConstructionBusiness and add hasOfferCatalog
      const biz = parsed['@graph'].find(item => item['@type'] === 'HomeAndConstructionBusiness');
      if (biz) {
        biz.hasOfferCatalog = { "@id": "https://nasaqfitout.ae/ar/services/#catalog" };
        if (!biz.knowsAbout.includes('تجهيز العيادات الطبية')) {
          biz.knowsAbout.push(
            'تجهيز المكاتب',
            'تجهيز المطاعم والمقاهي',
            'تجهيز العيادات الطبية',
            'تجهيز الصالونات والسبا',
            'تصميم حمامات فاخرة وتجديدها',
            'Bathroom design',
            'Drywall installation',
            'Office space design'
          );
        }
      }
      // Check if catalog already exists
      const catIdx = parsed['@graph'].findIndex(item => item['@type'] === 'OfferCatalog');
      if (catIdx >= 0) {
        parsed['@graph'][catIdx] = arOfferCatalog;
      } else {
        parsed['@graph'].push(arOfferCatalog);
      }
      
      // Update FAQPage in Arabic
      const faqItem = parsed['@graph'].find(item => item['@type'] === 'FAQPage');
      if (faqItem && faqItem.mainEntity) {
        if (!faqItem.mainEntity.some(q => q.name.includes('العيادات'))) {
          faqItem.mainEntity.splice(1, 0, {
            "@type": "Question",
            "name": "هل تنفذ شركة نسق قطاعات تجارية متخصصة كالمطاعم والعيادات وتجديد الحمامات الفاخرة؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، إلى جانب مشاريع الفلل والمكاتب المتكاملة، تتولى نسق تجهيز العيادات الطبية، المطاعم والمقاهي، الصالونات والسبا، وأعمال تجديد وتصميم الحمامات الفاخرة، غرف النوم، والمجالس، بالإضافة إلى الحرف الإنشائية التخصصية كقواطع الجبس بورد العازلة، والأسقف المستعارة، وتركيب الأرضيات والبورسلان في أبوظبي والإمارات."
            }
          });
        }
      }

      arServicesHtml = arServicesHtml.replace(schemaRegex, `<script type="application/ld+json">${JSON.stringify(parsed)}</script>`);
    }
  }
} catch (e) {
  console.error('Error updating Arabic schema:', e);
}

// Arabic Specialist Sectors HTML block
const arSectorsHtml = `
      <section class="section pale sectors-section">
        <div class="sectionhead">
          <div>
            <p class="eyebrow">القطاعات التخصصية ونطاق التنفيذ الميداني</p>
            <h2>بيئات معمارية متكاملة.<br>حرفية تنفيذية لا تساوم.</h2>
          </div>
          <p>حلول تخصصية تشمل تجهيز المقرات الإدارية، العيادات الطبية، المطاعم والمقاهي، وأجنحة الفلل الفاخرة بأعلى معايير الإتقان في أبوظبي والإمارات.</p>
        </div>
        <div class="sectors-grid">
          <div class="sector-card">
            <div class="sector-tag">المساحات المؤسسية والتجارية</div>
            <h3>تجهيز المكاتب وتصميم بيئات العمل</h3>
            <p>تنفيذ مقرات الشركات والمكاتب التنفيذية وقاعات الاجتماعات وفق أحدث معايير بيئات العمل العصرية مع عزل صوتي متطور وتنسيق دقيق للتمديدات الكهروميكانيكية.</p>
            <div class="sector-pills">
              <span class="sector-pill">تجهيز المكاتب</span>
              <span class="sector-pill">تصميم مساحات العمل</span>
              <span class="sector-pill">قواطع جدارية عازلة</span>
              <span class="sector-pill">فيت آوت تجاري</span>
            </div>
          </div>
          <div class="sector-card">
            <div class="sector-tag">الضيافة والمطاعم</div>
            <h3>تجهيز المطاعم والمقاهي وتصميم غرف الطعام</h3>
            <p>أجواء ضيافة استثنائية للمطاعم الراقية والكافيهات وصالات الطعام، تشمل أسقفاً ديكورية لامتصاص الصوت، أرضيات عالية التحمل، وأعمال خشبية وديكورات مخصصة.</p>
            <div class="sector-pills">
              <span class="sector-pill">تجهيز المطاعم والمقاهي</span>
              <span class="sector-pill">تصميم غرف الطعام</span>
              <span class="sector-pill">أسقف معمارية</span>
              <span class="sector-pill">ديكورات الضيافة</span>
            </div>
          </div>
          <div class="sector-card">
            <div class="sector-tag">الرعاية الصحية والعيادات</div>
            <h3>تجهيز العيادات الطبية والمراكز الصحية</h3>
            <p>تنفيذ العيادات التخصصية ومراكز طب الأسنان بألواح جبسية مطابقة للمعايير الصحية، دهانات مضادة للبكتيريا بمستوى تشطيب Level-5، وتجهيز غرف الكشف والاستقبال.</p>
            <div class="sector-pills">
              <span class="sector-pill">تجهيز العيادات الطبية</span>
              <span class="sector-pill">قواطع صحية عازلة</span>
              <span class="sector-pill">تشطيب Level-5</span>
              <span class="sector-pill">مواصفات طبية معتمدة</span>
            </div>
          </div>
          <div class="sector-card">
            <div class="sector-tag">العناية والاستجمام</div>
            <h3>تجهيز الصالونات والسبا ومراكز العافية</h3>
            <p>تصميم وتنفيذ صالونات التجميل والسبا الفاخرة بأنظمة أسقف مقاومة للرطوبة، تركيب أرضيات وبورسلان مانع للانزلاق، وإضاءات متناسقة مع المرايا الديكورية المضيئة.</p>
            <div class="sector-pills">
              <span class="sector-pill">تجهيز الصالونات والسبا</span>
              <span class="sector-pill">أسقف مقاومة للرطوبة</span>
              <span class="sector-pill">تركيب البورسلان</span>
              <span class="sector-pill">مساحات الاستجمام</span>
            </div>
          </div>
          <div class="sector-card">
            <div class="sector-tag">الأجنحة السكنية الفاخرة</div>
            <h3>تصميم الحمامات الفاخرة وترميم غرف النوم والمجالس</h3>
            <p>حلول معمارية راقية للفلل تشمل تصميم وتجديد الحمامات الفاخرة، غرف النوم الرئيسية، مجالس الضيوف، واختيار أثاث وديكورات متناغمة تعكس أصالة المكان وفخامته.</p>
            <div class="sector-pills">
              <span class="sector-pill">تصميم وتجديد الحمامات</span>
              <span class="sector-pill">تصميم غرف النوم</span>
              <span class="sector-pill">ديكور المجالس</span>
              <span class="sector-pill">اختيار الديكور والمواد</span>
            </div>
          </div>
          <div class="sector-card">
            <div class="sector-tag">الأعمال الحرفية والإنشائية</div>
            <h3>تركيب الجبس بورد، الأسقف المستعارة والأرضيات</h3>
            <p>تنفيذ دقيق للمهن الإنشائية يشمل تركيب قواطع الجبس بورد ASTM C1396، الأسقف المستعارة والجبسية، تركيب الأرضيات والبورسلان، والدهانات الداخلية فائقة النعومة.</p>
            <div class="sector-pills">
              <span class="sector-pill">تركيب قواطع الجبس بورد</span>
              <span class="sector-pill">الأسقف المستعارة المعلقة</span>
              <span class="sector-pill">تركيب الأرضيات</span>
              <span class="sector-pill">الدهانات الداخلية</span>
            </div>
          </div>
        </div>
      </section>
`;

// Insert arSectorsHtml before features-section
if (!arServicesHtml.includes('sectors-section')) {
  arServicesHtml = arServicesHtml.replace(
    '<section class="section pale features-section">',
    arSectorsHtml + '      <section class="section features-section">'
  );
}

// Add the 4th Arabic FAQ card if not present
if (!arServicesHtml.includes('هل تنفذ شركة نسق قطاعات تجارية متخصصة')) {
  const arFourthFaq = `
          <article class="faq-card">
            <h3>هل تنفذ شركة نسق قطاعات تجارية متخصصة كالمطاعم والعيادات وتجديد الحمامات الفاخرة؟</h3>
            <p>نعم، إلى جانب مشاريع الفلل والمكاتب المتكاملة، تتولى نسق تجهيز العيادات الطبية، المطاعم والمقاهي، الصالونات والسبا، وأعمال تجديد وتصميم الحمامات الفاخرة، غرف النوم، والمجالس، بالإضافة إلى الحرف الإنشائية التخصصية كقواطع الجبس بورد العازلة، والأسقف المستعارة، وتركيب الأرضيات والبورسلان في أبوظبي والإمارات.</p>
          </article>
`;
  arServicesHtml = arServicesHtml.replace(
    '<article class="faq-card">\n            <h3>كيف تضمن شركة نسق جودة المواد ومطابقتها للمواصفات؟</h3>',
    arFourthFaq + '          <article class="faq-card">\n            <h3>كيف تضمن شركة نسق جودة المواد ومطابقتها للمواصفات؟</h3>'
  );
}

fs.writeFileSync(arServicesPath, arServicesHtml, 'utf8');
console.log('✅ Updated dist/ar/services/index.html with Arabic Specialist Sectors & hasOfferCatalog Schema.');


// ==========================================
// 3. UPDATE dist/index.html & dist/ar/index.html
// ==========================================
const enHomePath = path.join(distDir, 'index.html');
let enHomeHtml = fs.readFileSync(enHomePath, 'utf8');

const arHomePath = path.join(distDir, 'ar', 'index.html');
let arHomeHtml = fs.readFileSync(arHomePath, 'utf8');

const gbpKeywordsEn = [
  "Bathroom design",
  "Bathroom remodelling",
  "Bedroom design",
  "Dining room design",
  "Home decor selection",
  "Interior architectural design",
  "Interior decorating",
  "Interior painting",
  "Office space design",
  "Drywall installation",
  "Floor fitting",
  "Plumbing fixture installation",
  "Tile work installation",
  "Clinic fit-out",
  "Restaurant & cafe fit-out",
  "Salon & spa fit-out"
];

const gbpKeywordsAr = [
  "تجهيز المكاتب",
  "تجهيز المطاعم والمقاهي",
  "تجهيز العيادات الطبية",
  "تجهيز الصالونات والسبا",
  "تصميم حمامات فاخرة وتجديدها",
  "تصميم غرف نوم ومجالس",
  "تركيب قواطع الجبس بورد",
  "تركيب الأرضيات والبورسلان",
  "تركيب الأسقف المستعارة"
];

try {
  const enSchemaMatch = enHomeHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (enSchemaMatch) {
    const enParsed = JSON.parse(enSchemaMatch[1]);
    const enBiz = enParsed['@graph'].find(item => item['@type'] === 'HomeAndConstructionBusiness');
    if (enBiz && Array.isArray(enBiz.knowsAbout)) {
      for (const kw of gbpKeywordsEn) {
        if (!enBiz.knowsAbout.includes(kw)) enBiz.knowsAbout.push(kw);
      }
      for (const kw of gbpKeywordsAr) {
        if (!enBiz.knowsAbout.includes(kw)) enBiz.knowsAbout.push(kw);
      }
      enBiz.hasOfferCatalog = { "@id": "https://nasaqfitout.ae/services/#catalog" };
      enHomeHtml = enHomeHtml.replace(enSchemaMatch[0], `<script type="application/ld+json">${JSON.stringify(enParsed)}</script>`);
      fs.writeFileSync(enHomePath, enHomeHtml, 'utf8');
      console.log('✅ Updated dist/index.html schema knowsAbout & hasOfferCatalog.');
    }
  }
} catch (e) {
  console.error('Error updating dist/index.html:', e);
}

try {
  const arSchemaMatch = arHomeHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (arSchemaMatch) {
    const arParsed = JSON.parse(arSchemaMatch[1]);
    const arBiz = arParsed['@graph'].find(item => item['@type'] === 'HomeAndConstructionBusiness');
    if (arBiz && Array.isArray(arBiz.knowsAbout)) {
      for (const kw of gbpKeywordsEn) {
        if (!arBiz.knowsAbout.includes(kw)) arBiz.knowsAbout.push(kw);
      }
      for (const kw of gbpKeywordsAr) {
        if (!arBiz.knowsAbout.includes(kw)) arBiz.knowsAbout.push(kw);
      }
      arBiz.hasOfferCatalog = { "@id": "https://nasaqfitout.ae/ar/services/#catalog" };
      arHomeHtml = arHomeHtml.replace(arSchemaMatch[0], `<script type="application/ld+json">${JSON.stringify(arParsed)}</script>`);
      fs.writeFileSync(arHomePath, arHomeHtml, 'utf8');
      console.log('✅ Updated dist/ar/index.html schema knowsAbout & hasOfferCatalog.');
    }
  }
} catch (e) {
  console.error('Error updating dist/ar/index.html:', e);
}

// ==========================================
// 4. UPDATE dist/llms.txt
// ==========================================
const llmsPath = path.join(distDir, 'llms.txt');
if (fs.existsSync(llmsPath)) {
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  if (!llmsContent.includes('Specialist Sectors & Trade Scope')) {
    const enAddition = `
### Specialist Sectors & Detailed Trade Scope
- **Corporate Offices & Commercial Workspaces**: Ergonomic office space design, executive boardroom fit-out, acoustic partitions, and commercial turnkey implementation.
- **Hospitality, Restaurants & Cafes**: Dining room design, acoustic ceiling baffles, custom commercial joinery, and heavy-duty decorative floor fitting.
- **Medical Clinics & Healthcare Facilities**: Clinical partition walls, antimicrobial Level-5 paint finishes, medical gas/MEP coordination, and sterile interior execution.
- **Salons, Spas & Wellness Retreats**: Moisture-resistant gypsum ceilings, non-slip tile work installation, illuminated mirror joinery, and ambient spatial illumination.
- **Luxury Residential Living & Private Suites**: Turnkey bathroom remodelling, master bedroom design, majlis interiors, dining room architecture, and curated home decor selection.
- **Master Architectural Trades**: ASTM C1396 drywall installation, false ceiling installation, floor fitting, porcelain tile installation, sanitary plumbing fixtures, and Level-5 interior painting.
`;
    llmsContent = llmsContent.replace('## Summary & Core Competency', enAddition + '\n## Summary & Core Competency');
    
    const arAddition = `
### القطاعات التخصصية ونطاق الأعمال الإنشائية والحرفية
- **المكاتب والشركات**: تجهيز المكاتب وتصميم مساحات العمل، عوازل الصوت، والقواطع الجدارية للمقرات المؤسسية.
- **الضيافة والمطاعم**: تجهيز المطاعم والمقاهي، تصميم غرف الطعام، الأسقف المعمارية الممتصة للصوت، والديكورات المخصصة.
- **العيادات والمراكز الطبية**: تجهيز العيادات الطبية، قواطع صحية عازلة، دهانات Level-5 مضادة للبكتيريا، وتمديدات متوافقة طبياً.
- **الصالونات والسبا**: تجهيز الصالونات والسبا، أسقف مقاومة للرطوبة، تركيب الأرضيات والبورسلان، والإضاءات الديكورية.
- **الأجنحة السكنية الفاخرة**: تصميم وتجديد الحمامات الفاخرة، تصميم غرف النوم، ديكور المجالس، واختيار الديكور والمواد.
- **الأعمال الحرفية والإنشائية**: تركيب قواطع الجبس بورد، الأسقف المستعارة المعلقة، تركيب الأرضيات، التجهيزات الصحية، والدهانات الداخلية.
`;
    llmsContent = llmsContent.replace('## ملخص القدرات التنفيذية وجوهر العمل', arAddition + '\n## ملخص القدرات التنفيذية وجوهر العمل');
    
    fs.writeFileSync(llmsPath, llmsContent, 'utf8');
    console.log('✅ Updated dist/llms.txt with Specialist Sectors & Detailed Trade Scope.');
  }
}
