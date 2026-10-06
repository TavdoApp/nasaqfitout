const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

// Common business entity definition with advanced UAE Local SEO, GEO & AEO attributes
const businessEntity = {
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://nasaqfitout.ae/#business",
  "name": "NASAQ Interior Design Implementation Works – L.L.C – S.P.C",
  "alternateName": [
    "NASAQ",
    "نسق",
    "نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م",
    "NASAQ Fit Out Abu Dhabi",
    "نسق فيت آوت أبوظبي",
    "شركة نسق للديكور والتشطيبات"
  ],
  "url": "https://nasaqfitout.ae/",
  "logo": "https://nasaqfitout.ae/assets/logo.svg",
  "image": "https://nasaqfitout.ae/assets/villa.webp",
  "description": "NASAQ is an Abu Dhabi-based interior fit-out and design implementation company delivering villa, office, and commercial interiors, gypsum works, false ceilings, interior partitions, and interior renovations across the UAE.",
  "telephone": "+971505334861",
  "email": "info@nasaqfitout.ae",
  "priceRange": "$$",
  "currenciesAccepted": "AED",
  "paymentAccepted": "Cash, Bank Transfer, Cheque",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Abu Dhabi",
    "addressRegion": "Abu Dhabi",
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
      "contactType": "General Enquiries & Quotations",
      "email": "info@nasaqfitout.ae",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+971505334861",
      "contactType": "Commercial & Executive Management",
      "email": "ossama@nasaqfitout.ae",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"]
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Abu Dhabi" },
    { "@type": "AdministrativeArea", "name": "Yas Island" },
    { "@type": "AdministrativeArea", "name": "Saadiyat Island" },
    { "@type": "AdministrativeArea", "name": "Al Reem Island" },
    { "@type": "AdministrativeArea", "name": "Khalifa City" },
    { "@type": "AdministrativeArea", "name": "Mohammed Bin Zayed City" },
    { "@type": "AdministrativeArea", "name": "Shakhbout City" },
    { "@type": "AdministrativeArea", "name": "Al Shamkhah" },
    { "@type": "AdministrativeArea", "name": "Al Falah" },
    { "@type": "AdministrativeArea", "name": "Al Raha" },
    { "@type": "AdministrativeArea", "name": "Al Reef" },
    { "@type": "AdministrativeArea", "name": "Al Bateen" },
    { "@type": "AdministrativeArea", "name": "Al Mushrif" },
    { "@type": "AdministrativeArea", "name": "Al Maryah Island" },
    { "@type": "AdministrativeArea", "name": "Mussafah" },
    { "@type": "City", "name": "Al Ain" },
    { "@type": "City", "name": "Dubai" }
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
    "Interior Fit-Out",
    "Interior Design Implementation",
    "Gypsum Board Works",
    "Gypsum Ceiling Works",
    "False Ceiling Installation",
    "Interior Partition Works",
    "Interior Finishing Works",
    "Interior Renovation",
    "Residential Fit-Out",
    "Commercial Fit-Out",
    "Villa Fit-Out",
    "Office Fit-Out",
    "11+ years UAE interior fit-out team execution",
    "1000s of completed projects across UAE",
    "Decor & interior fit-out specialists UAE",
    "All 7 Emirates interior execution",
    "Architectural gypsum & false ceilings",
    "Acoustic drywall partitions UAE",
    "Level-5 interior finishing UAE",
    "Turnkey fit out contractor Abu Dhabi & Dubai",
    "أعمال فيت آوت أبوظبي ودبي",
    "تنفيذ التصميم الداخلي والديكور في الإمارات",
    "أعمال جبس بورد وأسقف معلقة",
    "قواطع جدارية وجبسية",
    "تشطيب وترميم فلل ومكاتب عبر الإمارات السبع"
  ]
};

const websiteEntity = {
  "@type": "WebSite",
  "@id": "https://nasaqfitout.ae/#website",
  "url": "https://nasaqfitout.ae/",
  "name": "NASAQ | نسق",
  "publisher": { "@id": "https://nasaqfitout.ae/#business" },
  "inLanguage": ["en", "ar"]
};

// Page configurations
const pagesConfig = {
  "index.html": {
    path: "index.html",
    canonical: "https://nasaqfitout.ae/",
    title: "Interior Fit-Out & Gypsum Works in Abu Dhabi | NASAQ",
    description: "NASAQ delivers villa, office and commercial interior fit-out, gypsum works, false ceilings and interior renovation in Abu Dhabi.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    isHome: true,
    breadcrumbs: [],
    faqs: [
      {
        q: "What interior fit-out services does NASAQ provide in Abu Dhabi?",
        a: "NASAQ provides end-to-end interior design implementation works in Abu Dhabi, including villa fit-out, office fit-out, commercial fit-out, gypsum board works, false ceilings, interior partitions, and interior renovation."
      },
      {
        q: "Which areas in Abu Dhabi and the UAE does NASAQ cover?",
        a: "NASAQ is based in Abu Dhabi and serves key communities including Yas Island, Saadiyat Island, Al Reem Island, Khalifa City, Mohammed Bin Zayed City, Shakhbout City, Al Shamkhah, Al Falah, Al Raha, Al Reef, Al Bateen, Al Mushrif, and Mussafah. Projects in Al Ain and Dubai can also be discussed."
      },
      {
        q: "How can I request a fit-out quotation from NASAQ?",
        a: "You can request a quotation by sharing your project drawings, BOQ, or scope details directly via WhatsApp at +971 50 533 4861 or emailing info@nasaqfitout.ae (or ossama@nasaqfitout.ae for commercial projects). Our team reviews your requirements and provides a structured quotation within 24 to 48 hours."
      },
      {
        q: "Does NASAQ execute gypsum ceiling and partition works for existing properties?",
        a: "Yes. NASAQ specializes in gypsum board works, architectural false ceilings, drywall partitions, and interior renovation for both new residential/commercial spaces and existing property refurbishments."
      }
    ]
  },
  "about/index.html": {
    path: "about/index.html",
    canonical: "https://nasaqfitout.ae/about/",
    title: "About NASAQ | 11+ Yrs UAE Fit-Out & Decor Team",
    description: "Specialized UAE interior fit-out and decor team with 11+ years of experience and 1,000s of completed projects delivered across all 7 Emirates.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "About", url: "https://nasaqfitout.ae/about/" }
    ],
    faqs: [
      {
        q: "Who is NASAQ and what is the team’s background?",
        a: "NASAQ is an interior design implementation and fit-out company in the UAE. Our core execution team has worked continuously across the Emirates for over 11 years, delivering thousands of residential and commercial decor and fit-out projects."
      },
      {
        q: "How many projects has NASAQ completed across the UAE?",
        a: "Over 11+ continuous years of UAE site operations, our team has successfully executed thousands (1,000s) of completed fit-out, gypsum, false ceiling, partition, and interior renovation projects across all seven Emirates."
      },
      {
        q: "What services does NASAQ specialize in?",
        a: "NASAQ specializes in decor, interior design implementation, and fit-out works: including villa fit-out, office fit-out, commercial fit-out, gypsum board works, false ceilings, interior partitions, and interior renovations."
      },
      {
        q: "What does the name NASAQ (نسق) mean?",
        a: "In Arabic, NASAQ (نسق) signifies harmony, orderly arrangement, and disciplined method. It reflects our core philosophy: executing approved architectural drawings with uncompromising fidelity, strict dimensional tolerances, and balanced aesthetics."
      },
      {
        q: "Which Emirates and areas does NASAQ cover?",
        a: "NASAQ serves clients across all seven Emirates: Abu Dhabi (headquarters), Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah. Regularly served communities include Saadiyat Island, Yas Island, Al Reem Island, Khalifa City, MBZ City, Al Shamkhah, Al Raha, and Downtown Dubai."
      },
      {
        q: "What is NASAQ's licensed activity in Abu Dhabi?",
        a: "NASAQ is legally registered in Abu Dhabi as NASAQ Interior Design Implementation Works – L.L.C – S.P.C, with the official licensed activity of Interior Design Implementation Works (Decor)."
      },
      {
        q: "How can I request a fit-out quotation from NASAQ?",
        a: "You can send your approved architectural drawings, layout concepts, or Bill of Quantities (BOQ) directly via WhatsApp at +971 50 533 4861 or email info@nasaqfitout.ae / ossama@nasaqfitout.ae. Our team reviews your scope and provides a structured quotation within 24 to 48 hours."
      }
    ]
  },
  "contact/index.html": {
    path: "contact/index.html",
    canonical: "https://nasaqfitout.ae/contact/",
    title: "Contact NASAQ | Fit-Out Quotation Abu Dhabi | NASAQ",
    description: "Contact NASAQ on +971 50 533 4861 or info@nasaqfitout.ae / ossama@nasaqfitout.ae for interior fit-out, gypsum and ceiling quotations in Abu Dhabi.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Contact", url: "https://nasaqfitout.ae/contact/" }
    ],
    faqs: [
      {
        q: "How do I contact NASAQ for a site visit or consultation?",
        a: "You can reach NASAQ directly via phone or WhatsApp at +971 50 533 4861, secondary line +971 52 860 0115, or email info@nasaqfitout.ae / ossama@nasaqfitout.ae to schedule a site consultation."
      },
      {
        q: "What should I send to get an accurate fit-out quotation?",
        a: "Please share your approved architectural drawings, BOQ (Bill of Quantities), project location, and preferred timeline so our team can provide an accurate quotation."
      }
    ]
  },
  "projects/index.html": {
    path: "projects/index.html",
    canonical: "https://nasaqfitout.ae/projects/",
    title: "Interior Concepts for Villas & Offices | NASAQ",
    description: "Explore architectural 3D concepts for villa living spaces, office receptions, and commercial interiors in Abu Dhabi by NASAQ.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Concepts", url: "https://nasaqfitout.ae/projects/" }
    ],
    faqs: [
      {
        q: "What are the visuals displayed in the NASAQ concepts gallery?",
        a: "The visuals featured in the concepts gallery are architectural 3D concepts created to illustrate design possibilities, material combinations, and lighting integration for villas and offices."
      }
    ]
  },
  "services/index.html": {
    path: "services/index.html",
    canonical: "https://nasaqfitout.ae/services/",
    title: "Interior Fit-Out Services in Abu Dhabi | NASAQ",
    description: "Comprehensive interior fit-out services in Abu Dhabi: villa fit-out, office fit-out, commercial fit-out, gypsum works, false ceilings, and interior renovation.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Services", url: "https://nasaqfitout.ae/services/" }
    ],
    faqs: [
      {
        q: "What services does NASAQ specialize in?",
        a: "NASAQ specializes in interior fit-out, villa fit-out, office fit-out, commercial fit-out, gypsum board works, false ceilings, interior partitions, interior finishing, and interior renovation."
      }
    ]
  },
  "services/interior-fit-out/index.html": {
    path: "services/interior-fit-out/index.html",
    canonical: "https://nasaqfitout.ae/services/interior-fit-out/",
    title: "Interior fit-out in Abu Dhabi | NASAQ",
    description: "Interior fit-out and design implementation in Abu Dhabi. From approved drawings to finished interiors across residential and commercial spaces.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Services", url: "https://nasaqfitout.ae/services/" },
      { name: "Interior Fit-Out", url: "https://nasaqfitout.ae/services/interior-fit-out/" }
    ],
    service: {
      name: "Interior Fit-Out in Abu Dhabi",
      serviceType: "Interior Design Implementation & Fit-Out",
      description: "End-to-end interior fit-out execution from approved drawings to handover, including site coordination, material alignment, and finishing works."
    },
    faqs: [
      {
        q: "What is included in NASAQ's interior fit-out service?",
        a: "NASAQ's interior fit-out service covers the complete physical execution of approved interior plans: material coordination, site execution, wall and ceiling works, and precision finishing."
      }
    ]
  },
  "services/villa-fit-out/index.html": {
    path: "services/villa-fit-out/index.html",
    canonical: "https://nasaqfitout.ae/services/villa-fit-out/",
    title: "Villa fit-out in Abu Dhabi | NASAQ",
    description: "Villa fit-out and interior implementation in Abu Dhabi. Living rooms, majlis, bedrooms, and whole-villa interiors executed to high standards.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Services", url: "https://nasaqfitout.ae/services/" },
      { name: "Villa Fit-Out", url: "https://nasaqfitout.ae/services/villa-fit-out/" }
    ],
    service: {
      name: "Villa Fit-Out in Abu Dhabi",
      serviceType: "Villa Interior Fit-Out & Finishing",
      description: "Considered interior implementation for private villas across Abu Dhabi, including living rooms, majlis areas, bedrooms, gypsum ceilings, and custom partition works."
    },
    faqs: [
      {
        q: "Which villa communities in Abu Dhabi does NASAQ serve?",
        a: "NASAQ serves private villa owners across Abu Dhabi, including Khalifa City, Yas Island, Saadiyat Island, Al Reem Island, Mohammed Bin Zayed City, Shakhbout City, Al Shamkhah, Al Falah, and Al Raha."
      },
      {
        q: "Can NASAQ work from our interior designer's drawings and BOQ?",
        a: "Yes. NASAQ is an interior design implementation company that executes approved drawings and BOQs prepared by your architect or designer with strict attention to finishes and specifications."
      }
    ]
  },
  "services/office-fit-out/index.html": {
    path: "services/office-fit-out/index.html",
    canonical: "https://nasaqfitout.ae/services/office-fit-out/",
    title: "Office fit-out in Abu Dhabi | NASAQ",
    description: "Office fit-out and commercial workplace implementation in Abu Dhabi. Receptions, meeting rooms, executive offices, and functional work areas.",
    image: "https://nasaqfitout.ae/assets/office.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Services", url: "https://nasaqfitout.ae/services/" },
      { name: "Office Fit-Out", url: "https://nasaqfitout.ae/services/office-fit-out/" }
    ],
    service: {
      name: "Office Fit-Out in Abu Dhabi",
      serviceType: "Corporate & Commercial Office Fit-Out",
      description: "Professional workplace fit-out execution in Abu Dhabi balancing practical function with a strong corporate first impression."
    },
    faqs: [
      {
        q: "What types of office fit-out works does NASAQ handle?",
        a: "NASAQ handles office receptions, meeting rooms, executive suites, open-plan workspaces, ceiling systems, acoustic gypsum partitions, and overall interior finishing."
      }
    ]
  },
  "services/commercial-fit-out/index.html": {
    path: "services/commercial-fit-out/index.html",
    canonical: "https://nasaqfitout.ae/services/commercial-fit-out/",
    title: "Commercial fit-out in Abu Dhabi | NASAQ",
    description: "Commercial fit-out in Abu Dhabi for retail spaces, showrooms, offices, and commercial properties. Quality interior execution on schedule.",
    image: "https://nasaqfitout.ae/assets/office.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Services", url: "https://nasaqfitout.ae/services/" },
      { name: "Commercial Fit-Out", url: "https://nasaqfitout.ae/services/commercial-fit-out/" }
    ],
    service: {
      name: "Commercial Fit-Out in Abu Dhabi",
      serviceType: "Commercial & Retail Interior Fit-Out",
      description: "Interior design implementation for commercial properties, showrooms, and retail venues across Abu Dhabi."
    },
    faqs: [
      {
        q: "Does NASAQ deliver commercial interior implementation in Abu Dhabi?",
        a: "Yes. NASAQ delivers commercial fit-out works adhering strictly to client drawings, BOQ parameters, and agreed completion milestones."
      }
    ]
  },
  "services/gypsum-board-works/index.html": {
    path: "services/gypsum-board-works/index.html",
    canonical: "https://nasaqfitout.ae/services/gypsum-board-works/",
    title: "Gypsum board works in Abu Dhabi | NASAQ",
    description: "Precision gypsum board works in Abu Dhabi: wall lining, decorative ceiling bulkheads, cove lighting details, and smooth seamless plaster finishes.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Services", url: "https://nasaqfitout.ae/services/" },
      { name: "Gypsum Board Works", url: "https://nasaqfitout.ae/services/gypsum-board-works/" }
    ],
    service: {
      name: "Gypsum Board Works in Abu Dhabi",
      serviceType: "Gypsum Drywall, Ceilings & Bulkheads",
      description: "High-precision gypsum drywall, false ceiling installation, recessed cove lighting recesses, and flush joint finishing for residential and commercial spaces."
    },
    faqs: [
      {
        q: "What gypsum board works are offered by NASAQ?",
        a: "NASAQ offers flat ceiling boards, multi-level gypsum designs, cove lighting bulkheads, wall claddings, curtain pelmets, and seamless joint taping and finishing."
      }
    ]
  },
  "services/false-ceilings/index.html": {
    path: "services/false-ceilings/index.html",
    canonical: "https://nasaqfitout.ae/services/false-ceilings/",
    title: "False ceilings in Abu Dhabi | NASAQ",
    description: "Architectural false ceiling installation in Abu Dhabi. Suspended gypsum ceilings, recessed perimeter lighting, and clean contemporary ceiling designs.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Services", url: "https://nasaqfitout.ae/services/" },
      { name: "False Ceilings", url: "https://nasaqfitout.ae/services/false-ceilings/" }
    ],
    service: {
      name: "False Ceilings in Abu Dhabi",
      serviceType: "False & Suspended Ceiling Installation",
      description: "Installation of suspended architectural false ceilings, cove light profiles, and integrated service access details across Abu Dhabi villas and offices."
    },
    faqs: [
      {
        q: "What types of false ceilings does NASAQ install?",
        a: "NASAQ installs architectural suspended gypsum ceilings, flat false ceilings, shadow gap ceiling details, and multi-tier lighting troughs."
      }
    ]
  },
  "services/interior-partitions/index.html": {
    path: "services/interior-partitions/index.html",
    canonical: "https://nasaqfitout.ae/services/interior-partitions/",
    title: "Interior partitions in Abu Dhabi | NASAQ",
    description: "Drywall and interior partition works in Abu Dhabi. Space division for villas, apartments, executive offices, and commercial layouts.",
    image: "https://nasaqfitout.ae/assets/office.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Services", url: "https://nasaqfitout.ae/services/" },
      { name: "Interior Partitions", url: "https://nasaqfitout.ae/services/interior-partitions/" }
    ],
    service: {
      name: "Interior Partitions in Abu Dhabi",
      serviceType: "Interior Drywall & Partition Works",
      description: "Drywall partition systems and interior wall dividers engineered to optimize space, improve privacy, and create functional layouts."
    },
    faqs: [
      {
        q: "Can NASAQ install gypsum partitions without disturbing existing flooring?",
        a: "Yes. Our team uses appropriate floor track installation techniques to preserve existing finishes wherever possible during partition installation."
      }
    ]
  },
  "services/interior-renovation/index.html": {
    path: "services/interior-renovation/index.html",
    canonical: "https://nasaqfitout.ae/services/interior-renovation/",
    title: "Interior renovation in Abu Dhabi | NASAQ",
    description: "Interior renovation and refurbishment in Abu Dhabi. Villa remodelling, office modernisations, ceiling upgrades, and fresh interior finishes.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Services", url: "https://nasaqfitout.ae/services/" },
      { name: "Interior Renovation", url: "https://nasaqfitout.ae/services/interior-renovation/" }
    ],
    service: {
      name: "Interior Renovation in Abu Dhabi",
      serviceType: "Interior Renovation & Remodelling",
      description: "Thoughtful renovation and refurbishment of existing residential and commercial interiors in Abu Dhabi, refreshing layouts, ceilings, and decorative finishes."
    },
    faqs: [
      {
        q: "Does NASAQ take on partial renovation projects like ceiling or partition upgrades?",
        a: "Yes. NASAQ undertakes both room-specific upgrades (such as living rooms, majlis, or reception refreshes) and comprehensive interior renovations."
      }
    ]
  },
  "services/residential-fit-out/index.html": {
    path: "services/residential-fit-out/index.html",
    canonical: "https://nasaqfitout.ae/services/residential-fit-out/",
    title: "Residential fit-out in Abu Dhabi | NASAQ",
    description: "Residential fit-out for apartments, penthouses, and townhouses in Abu Dhabi. Quality interior implementation built around contemporary living.",
    image: "https://nasaqfitout.ae/assets/villa.webp",
    breadcrumbs: [
      { name: "Home", url: "https://nasaqfitout.ae/" },
      { name: "Services", url: "https://nasaqfitout.ae/services/" },
      { name: "Residential Fit-Out", url: "https://nasaqfitout.ae/services/residential-fit-out/" }
    ],
    service: {
      name: "Residential Fit-Out in Abu Dhabi",
      serviceType: "Residential Fit-Out & Finishing",
      description: "Residential fit-out for Abu Dhabi apartments, penthouses, and townhouses, delivering precision gypsum works, wall finishes, and coordinated interiors."
    },
    faqs: [
      {
        q: "What residential properties does NASAQ work on in Abu Dhabi?",
        a: "NASAQ works on private villas, penthouses, apartments, and townhouses across prime Abu Dhabi areas including Saadiyat, Yas, Al Reem, and Khalifa City."
      }
    ]
  }
};

function buildSchemaGraph(cfg) {
  const graph = [];

  // 1. Business entity
  if (cfg.isHome) {
    graph.push(businessEntity);
    graph.push(websiteEntity);
  }

  // 2. BreadcrumbList entity
  if (cfg.breadcrumbs && cfg.breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "itemListElement": cfg.breadcrumbs.map((b, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": b.name,
        "item": b.url
      }))
    });
  }

  // 3. Service entity
  if (cfg.service) {
    graph.push({
      "@type": "Service",
      "name": cfg.service.name,
      "serviceType": cfg.service.serviceType,
      "description": cfg.service.description,
      "url": cfg.canonical,
      "provider": { "@id": "https://nasaqfitout.ae/#business" },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Abu Dhabi, United Arab Emirates"
      }
    });
  }

  // 4. FAQPage entity
  if (cfg.faqs && cfg.faqs.length > 0) {
    graph.push({
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
    "@graph": graph
  };
}

function processHtmlFile(cfg) {
  const filePath = path.join(distDir, cfg.path);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }

  let html = fs.readFileSync(filePath, 'utf8');

  // Extract <head> ... </head>
  const headStart = html.indexOf('<head>');
  const headEnd = html.indexOf('</head>');
  if (headStart === -1 || headEnd === -1) {
    console.error(`No head tag found in ${cfg.path}`);
    return;
  }

  // Build enhanced meta tags
  const metaTags = [];
  metaTags.push(`<meta charset="utf-8">`);
  metaTags.push(`<meta name="viewport" content="width=device-width,initial-scale=1">`);
  metaTags.push(`<title>${cfg.title}</title>`);
  metaTags.push(`<meta name="description" content="${cfg.description}">`);
  metaTags.push(`<meta name="theme-color" content="#181918">`);
  metaTags.push(`<link rel="canonical" href="${cfg.canonical}">`);
  metaTags.push(`<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">`);
  metaTags.push(`<link rel="alternate icon" href="/assets/favicon.png">`);
  metaTags.push(`<link rel="stylesheet" href="/style.css?v=2">`);

  // UAE Geo Meta Tags
  metaTags.push(`<meta name="geo.region" content="AE-AZ">`);
  metaTags.push(`<meta name="geo.placename" content="Abu Dhabi">`);
  metaTags.push(`<meta name="geo.position" content="24.4539;54.3773">`);
  metaTags.push(`<meta name="ICBM" content="24.4539, 54.3773">`);

  // OpenGraph Tags
  metaTags.push(`<meta property="og:site_name" content="NASAQ | نسق">`);
  metaTags.push(`<meta property="og:type" content="website">`);
  metaTags.push(`<meta property="og:locale" content="en_AE">`);
  metaTags.push(`<meta property="og:locale:alternate" content="ar_AE">`);
  metaTags.push(`<meta property="og:title" content="${cfg.title}">`);
  metaTags.push(`<meta property="og:description" content="${cfg.description}">`);
  metaTags.push(`<meta property="og:url" content="${cfg.canonical}">`);
  metaTags.push(`<meta property="og:image" content="${cfg.image}">`);

  // Twitter Cards
  metaTags.push(`<meta name="twitter:card" content="summary_large_image">`);
  metaTags.push(`<meta name="twitter:title" content="${cfg.title}">`);
  metaTags.push(`<meta name="twitter:description" content="${cfg.description}">`);
  metaTags.push(`<meta name="twitter:image" content="${cfg.image}">`);

  // Google Site Verification (on home)
  if (cfg.isHome) {
    metaTags.push(`<meta name="google-site-verification" content="FkEPg0XVtPhF28C5kpirnJgfVLv58Uw2vcSAupmkycg">`);
  }

  // Schema graph
  const schema = buildSchemaGraph(cfg);
  metaTags.push(`<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
  metaTags.push(`<script src="/app.js" defer></script>`);

  const newHeadContent = `<head>${metaTags.join('')}</head>`;
  html = html.substring(0, headStart) + newHeadContent + html.substring(headEnd + 7);

  // Synchronize footer email links across all pages
  const oldFooterEmailsRegex = /<a href="mailto:[^"]*">[^<]*<\/a>(?:<a href="mailto:[^"]*">[^<]*<\/a>)?/;
  const newFooterEmails = `<a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a><a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a>`;
  if (oldFooterEmailsRegex.test(html)) {
    html = html.replace(oldFooterEmailsRegex, newFooterEmails);
  }

  // Special enhancement for about page (11+ years UAE team presence, 1,000s of projects, 7 Emirates)
  if (cfg.path === "about/index.html") {
    const mainRegex = /<main id="main">[\s\S]*?<\/main>/;
    const newMainContent = `<main id="main">` +
      `<section class="intro">` +
        `<p class="eyebrow">About NASAQ · Abu Dhabi & Across the UAE</p>` +
        `<h1>11+ years of craft.<br>Spaces in harmony.</h1>` +
        `<p>We are a specialized interior fit-out and decor team with over 11 years of continuous site execution in the UAE, delivering thousands of completed projects across all seven Emirates.</p>` +
      `</section>` +
      `<div class="ribbon">` +
        `<span>11+ Years UAE Experience</span>` +
        `<span>1,000s of Projects Delivered</span>` +
        `<span>Decor & Fit-Out Specialists</span>` +
        `<span>Across All 7 Emirates</span>` +
      `</div>` +
      `<section class="section split">` +
        `<div>` +
          `<p class="eyebrow">Our Team & Craft</p>` +
          `<h2>From the plan<br>to the last detail.</h2>` +
          `<p class="small" style="color:#9b7145;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;margin-top:24px;">Licensed Specialization</p>` +
          `<p style="font-size:14px;color:#62635d;margin-top:4px;">Interior Design Implementation Works (Decor) · Abu Dhabi, UAE</p>` +
        `</div>` +
        `<div>` +
          `<p class="lead">NASAQ brings an implementation-first mindset to interior fit-out, decor, and architectural finishing across the United Arab Emirates.</p>` +
          `<p>We are a dedicated team who have worked in the UAE for over 11 years, successfully delivering thousands of projects across Abu Dhabi, Dubai, and all seven Emirates. As specialists in decor, interior design implementation, and fit-out, we transform approved drawings and BOQs into physical reality with uncompromising site discipline.</p>` +
          `<p>With more than a decade of active presence on UAE project sites, we bridge the gap between design concepts and handover: managing materials, coordinating site works, and executing architectural details to exacting standards.</p>` +
          `<p>Our licensed activity in Abu Dhabi is <em>Interior Design Implementation Works (Decor)</em>. Our scope covers comprehensive villa fit-out, corporate office interiors, commercial spaces, architectural false ceilings, high-precision gypsum board works, interior drywall partitions, and thoughtful interior renovations.</p>` +
          `<div class="principles">` +
            `<h3>11+ Years of UAE Site Knowledge</h3>` +
            `<p>Having operated continuously for 11+ years across the UAE, our team understands local site conditions, material behavior, and programme coordination inside out.</p>` +
            `<h3>1,000s of Projects Across All 7 Emirates</h3>` +
            `<p>From private luxury villas in Abu Dhabi to prime commercial workplaces in Dubai and residential developments across the Northern Emirates, our crews have executed thousands of spaces to high standards.</p>` +
            `<h3>Decor & Fit-Out Specialists</h3>` +
            `<p>We specialize in the physical execution of interiors: multi-tier gypsum ceilings, concealed lighting troughs, drywall partitions, acoustic zoning, and high-precision Level-5 surface finishing.</p>` +
            `<h3>Clarity, Care & Communication</h3>` +
            `<p>From initial drawing and BOQ review to final snagging inspection and handover, we maintain transparent communication and disciplined execution.</p>` +
          `</div>` +
        `</div>` +
      `</section>` +
      `<section class="section pale">` +
        `<div class="sectionhead">` +
          `<div>` +
            `<p class="eyebrow">Pan-Emirates Footprint</p>` +
            `<h2>Delivering across all seven Emirates.</h2>` +
          `</div>` +
          `<p>Our teams and logistics are fully mobilized to execute interior fit-out and decor projects anywhere in the UAE.</p>` +
        `</div>` +
        `<div class="services">` +
          `<a>` +
            `<span class="number">01</span>` +
            `<h3>Abu Dhabi</h3>` +
            `<p>Headquarters and primary operations serving Saadiyat Island, Yas Island, Al Reem Island, Khalifa City, MBZ City, Al Shamkhah, Al Raha, and the wider capital.</p>` +
          `</a>` +
          `<a>` +
            `<span class="number">02</span>` +
            `<h3>Dubai</h3>` +
            `<p>Executing luxury residential villas, penthouses, and commercial office interiors across Downtown, Business Bay, Dubai Hills, and Marina.</p>` +
          `</a>` +
          `<a>` +
            `<span class="number">03</span>` +
            `<h3>Northern Emirates</h3>` +
            `<p>Active project execution across Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah with trusted supply lines and direct site supervision.</p>` +
          `</a>` +
        `</div>` +
      `</section>` +
      `<section class="cta">` +
        `<p class="eyebrow">Your next space starts here</p>` +
        `<h2>Let’s bring your<br>interior to life.</h2>` +
        `<p style="margin:0 auto 30px;max-width:560px;color:#454640;">Share your drawings or BOQ with our team. We review specifications thoroughly and return a transparent, itemized quotation within 24 to 48 hours.</p>` +
        `<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">` +
          `<a class="button" href="/contact/">Request a quotation</a>` +
          `<a class="button" href="https://wa.me/971505334861?text=Hello%20NASAQ%20team%2C%20I%20would%20like%20to%20discuss%20an%20interior%20fit-out%20project." style="background:#222321;color:#fff;border-color:#222321;">WhatsApp our team</a>` +
        `</div>` +
        `<a class="plain" href="tel:+971505334861">Direct line: +971 50 533 4861</a>` +
      `</section>` +
    `</main>`;
    html = html.replace(mainRegex, newMainContent);
  }

  // Special enhancement for contact page
  if (cfg.path === "contact/index.html") {
    const contactSectionRegex = /<section class="section contact">[\s\S]*?<\/section>/;
    const newContactSection = `<section class="section contact">` +
      `<div>` +
        `<p class="eyebrow">Direct to our team</p>` +
        `<h2>Let’s talk.</h2>` +
        `<a class="contactlink" href="tel:+971505334861">+971 50 533 4861</a>` +
        `<p style="margin-bottom:4px;font-size:13px;color:#9b7145;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;">General Inquiries & Quotations</p>` +
        `<a href="mailto:info@nasaqfitout.ae" style="margin-bottom:18px;">info@nasaqfitout.ae</a>` +
        `<p style="margin-bottom:4px;font-size:13px;color:#9b7145;text-transform:uppercase;letter-spacing:0.12em;font-weight:600;">Business & Commercial</p>` +
        `<a href="mailto:ossama@nasaqfitout.ae" style="margin-bottom:22px;">ossama@nasaqfitout.ae</a>` +
        `<p style="margin-bottom:6px;">Abu Dhabi, United Arab Emirates</p>` +
        `<p style="margin-bottom:18px;">Secondary phone: <a href="tel:+971528600115" style="display:inline;margin-bottom:0;">+971 52 860 0115</a></p>` +
        `<p>Have architectural drawings or a BOQ? Send them directly via WhatsApp or email for immediate review.</p>` +
      `</div>` +
      `<form id="enquiry">` +
        `<label>Your name<input name="name" autocomplete="name" required placeholder="Full name"></label>` +
        `<label>Phone / WhatsApp<input type="tel" name="phone" required placeholder="+971 50 123 4567"></label>` +
        `<label>Email address<input type="email" name="email" required placeholder="name@domain.com"></label>` +
        `<label>Project type<select name="type">` +
          `<option value="Villa fit-out">Villa fit-out</option>` +
          `<option value="Office fit-out">Office fit-out</option>` +
          `<option value="Commercial fit-out">Commercial fit-out</option>` +
          `<option value="Gypsum board works">Gypsum board works</option>` +
          `<option value="False ceilings">False ceilings</option>` +
          `<option value="Interior partitions">Interior partitions</option>` +
          `<option value="Interior renovation">Interior renovation</option>` +
          `<option value="Residential fit-out">Residential fit-out</option>` +
        `</select></label>` +
        `<label>Project location<input name="location" required placeholder="Area or community (e.g. Yas Island, Khalifa City)"></label>` +
        `<label>Tell us about the project<textarea name="details" rows="4" required placeholder="Scope, approximate area (sqm/sqft), and preferred start timeline"></textarea></label>` +
        `<div class="form-actions" style="display:flex;gap:14px;flex-wrap:wrap;margin-top:10px;">` +
          `<button class="button" type="submit" data-action="whatsapp">Send via WhatsApp</button>` +
          `<button class="button" type="submit" data-action="email" style="background:#222321;color:#fff;border-color:#222321;">Send via Email</button>` +
        `</div>` +
        `<p class="small" style="margin-top:15px;">Submitting via WhatsApp connects directly with our estimators at +971 50 533 4861. Submitting via Email prepares a detailed brief to info@nasaqfitout.ae and ossama@nasaqfitout.ae.</p>` +
      `</form>` +
    `</section>`;
    html = html.replace(contactSectionRegex, newContactSection);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated SEO/GEO/AEO, About & Contact for: ${cfg.path}`);
}

console.log("Applying enhanced Local SEO, GEO & AEO metadata, founder story, and track record...");
Object.values(pagesConfig).forEach(cfg => processHtmlFile(cfg));
console.log("All 14 pages successfully updated!");
