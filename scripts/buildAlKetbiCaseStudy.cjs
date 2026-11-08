/**
 * NASAQ FITOUT - Build Case Study for Mr. Ali Al Ketbi Ghdair Villa in MBZ City Zone 24
 * 
 * Features:
 * - Real 2020 case study with 7-year long-term proof (re-inspected, 0 cracks, like new)
 * - True story of contractor & consultant collusion, hiding structural cracks, NASAQ whistleblowing & defending client
 * - Uncompromising craftsmanship: heavy unistrut slab mounting for chandeliers, bespoke handcrafted floral boiserie
 * - 3 High-res photos + 2 Playable HTML5 walkthrough videos
 * - Rich JSON-LD Schemas: Article, HomeAndConstructionBusiness, BreadcrumbList, FAQPage, VideoObject
 * - Bilingual parity (EN & AR) with strict trailing-slash canonicals and reciprocal hreflang
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const enDir = path.join(DIST_DIR, 'insights', 'villa-fitout-al-ketbi-mbz-integrity-case-study');
const arDir = path.join(DIST_DIR, 'ar', 'insights', 'villa-fitout-al-ketbi-mbz-integrity-case-study');

[enDir, arDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

const caseStudy = {
  slug: 'villa-fitout-al-ketbi-mbz-integrity-case-study',
  badgeEn: 'Client Case Study & Engineering Integrity',
  badgeAr: 'دراسة حالة واقعية ونزاهة هندسية',
  readTimeEn: '9 min read',
  readTimeAr: 'قراءة 9 دقائق',
  image: '/assets/alketbi-project/ceiling-chandeliers-rosette.jpg',
  date: '2026-11-08',
  
  // SEO Metadata
  titleEn: 'MBZ City Luxury Villa Fit-Out Case Study: Integrity, Defect Whistleblowing & 7-Year Crack-Free Handover for Mr. Ali Al Ketbi | NASAQ',
  descEn: 'Authentic 2020 case study in Zone 24, Mohammed Bin Zayed City, Abu Dhabi: How NASAQ stopped contractor-consultant collusion hiding structural cracks, protected Mr. Ali Al Ketbi, and delivered flawless neoclassical fit-out that remains 100% crack-free 7 years later.',
  summaryEn: 'True case study of Mr. Ali Al Ketbi Ghdair\'s luxury villa in MBZ City Zone 24, Abu Dhabi. Details how NASAQ uncovered contractor collusion attempting to conceal severe structural cracks with gypsum board, defended the client through fierce site negotiations, engineered slab-anchored unistrut chandelier mountings and handcrafted floral mouldings, and proved long-term durability with zero cracks 7 years after handover.',

  titleAr: 'قصة نجاح تشطيب فيلا السيد علي الكتبي في مدينة محمد بن زايد (حوض 24): النزاهة الهندسية وكشف عيوب المقاول والاستشاري | نسق',
  descAr: 'دراسة حالة واقعية من عام 2020 في حوض 24 بمدينة محمد بن زايد بأبوظبي: كيف كشفت نسق تواطؤ المقاول والاستشاري لإخفاء شروخ الجدران بالجبس بورد، وحمت العميل علي الكتبي غدير، وسلمت تشطيباً ملكياً لا يزال بلا شروخ بعد 7 سنوات.',
  summaryAr: 'دراسة حالة واقعية لفيلا السيد علي الكتبي غدير في مدينة محمد بن زايد (حوض 24) بأبوظبي. تروي كيف رفضت نسق التستر على شروخ الجدران والأسقف بالجبس بورد، وخاضت معركة هندسية لحماية العميل من غش المقاول والاستشاري، وركبت ثريات ضخمة مثبتة في الخرسانة وزخارف ورد يدوية، مع إثبات جودة العمل بعد 7 سنوات دون أي تشقق يذكر.'
};

// 1. Generate English HTML
const enHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${caseStudy.titleEn}</title><meta name="description" content="${caseStudy.descEn}"><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=6"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="Mohammed Bin Zayed City, Abu Dhabi"><meta name="geo.position" content="24.3385;54.5260"><meta name="ICBM" content="24.3385, 54.5260"><meta property="og:type" content="article"><meta property="og:site_name" content="NASAQ Fit-Out"><meta property="og:title" content="${caseStudy.titleEn}"><meta property="og:description" content="${caseStudy.descEn}"><meta property="og:url" content="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><meta property="og:image" content="https://nasaqfitout.ae${caseStudy.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${caseStudy.titleEn}"><meta name="twitter:description" content="${caseStudy.descEn}"><meta name="twitter:image" content="https://nasaqfitout.ae${caseStudy.image}"><script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://nasaqfitout.ae/#business",
      "name": "NASAQ Interior Design Implementation Works – L.L.C – S.P.C",
      "url": "https://nasaqfitout.ae/",
      "logo": "https://nasaqfitout.ae/assets/logo.svg",
      "image": "https://nasaqfitout.ae/assets/logo.svg",
      "telephone": "+971505334861",
      "email": "info@nasaqfitout.ae",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Abu Dhabi",
        "addressRegion": "Abu Dhabi",
        "addressCountry": "AE"
      },
      "areaServed": [
        "Mohammed Bin Zayed City",
        "MBZ Zone 24",
        "Abu Dhabi",
        "Khalifa City",
        "Saadiyat Island",
        "Yas Island",
        "Dubai"
      ]
    },
    {
      "@type": "Article",
      "@id": "https://nasaqfitout.ae/insights/${caseStudy.slug}/#article",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://nasaqfitout.ae/#website",
        "name": "NASAQ Fit-Out",
        "url": "https://nasaqfitout.ae/"
      },
      "headline": "MBZ City Luxury Villa Fit-Out Case Study: Integrity, Defect Whistleblowing & 7-Year Crack-Free Handover for Mr. Ali Al Ketbi",
      "description": "${caseStudy.descEn}",
      "inLanguage": "en",
      "mainEntityOfPage": "https://nasaqfitout.ae/insights/${caseStudy.slug}/",
      "datePublished": "2026-11-08T08:00:00+04:00",
      "dateModified": "2026-11-08T08:00:00+04:00",
      "image": "https://nasaqfitout.ae${caseStudy.image}",
      "author": {
        "@type": "Organization",
        "name": "NASAQ Engineering Team",
        "url": "https://nasaqfitout.ae/about/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "NASAQ Interior Design Implementation Works – L.L.C – S.P.C",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nasaqfitout.ae/assets/logo.svg"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://nasaqfitout.ae/insights/${caseStudy.slug}/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://nasaqfitout.ae/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Insights & Case Studies",
          "item": "https://nasaqfitout.ae/insights/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Ali Al Ketbi Villa MBZ Zone 24 Case Study",
          "item": "https://nasaqfitout.ae/insights/${caseStudy.slug}/"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Mr. Ali Al Ketbi Villa MBZ City Zone 24: Ceiling & Chandelier 7-Year Walkthrough",
      "description": "Video walkthrough showing neoclassical ceilings, dual grand crystal chandeliers, and handcrafted rosettes remaining 100% crack-free 7 years after completion in Mohammed Bin Zayed City, Abu Dhabi.",
      "thumbnailUrl": "https://nasaqfitout.ae/assets/alketbi-project/ceiling-chandeliers-rosette.jpg",
      "uploadDate": "2026-11-08T08:00:00+04:00",
      "contentUrl": "https://nasaqfitout.ae/assets/alketbi-project/alketbi-villa-walkthrough-1.mp4"
    },
    {
      "@type": "VideoObject",
      "name": "MBZ City Villa Walkthrough 2: Neoclassical Boiserie and Flawless Gypsum Finish",
      "description": "Inspection video showing the crisp corners, stepped bulkheads, and hand-sculpted rose wall mouldings 7 years post-handover in MBZ City, Abu Dhabi.",
      "thumbnailUrl": "https://nasaqfitout.ae/assets/alketbi-project/curved-tiered-ceiling-room.jpg",
      "uploadDate": "2026-11-08T08:00:00+04:00",
      "contentUrl": "https://nasaqfitout.ae/assets/alketbi-project/alketbi-villa-walkthrough-2.mp4"
    },
    {
      "@type": "FAQPage",
      "@id": "https://nasaqfitout.ae/insights/${caseStudy.slug}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why should an Emirati villa owner hire an independent interior contractor instead of the main civil contractor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Civil main contractors focus on structural shell speed and often subcontract decorative fit-outs to the lowest-bidding labor crews. Furthermore, when consultants and civil contractors develop close working relationships, they may compromise on minor structural settlement cracks. An independent, specialized interior implementation contractor like NASAQ works exclusively for the owner, independently inspecting substrates, blowing the whistle on hidden defects, and ensuring certified structural anchoring before any decorative finishes are applied."
          }
        },
        {
          "@type": "Question",
          "name": "Can gypsum board ceilings hide structural cracks safely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Concealing active structural cracks under false gypsum ceilings without structural epoxy injection and structural remediation is dangerous and deceptive. Active substrate movement transfers directly to the gypsum suspension system within months, causing joint hairline cracking, tape delamination, and severe sag under thermal expansion."
          }
        },
        {
          "@type": "Question",
          "name": "How does NASAQ safely mount heavy crystal chandeliers in high-ceiling villas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under NASAQ Ironclad Guarantee 01, we never attach heavy chandeliers to gypsum furring or hollow blocks. Our engineering team installs heavy-duty unistrut structural steel channels anchored directly into the solid reinforced concrete ceiling slab using high-tensile threaded steel rods and expansion anchors tested to hold 10 times the chandelier static load."
          }
        },
        {
          "@type": "Question",
          "name": "Where is this project located in Abu Dhabi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This villa is located in Mohammed Bin Zayed City (MBZ City), Zone 24 (حوض 24), Abu Dhabi, directly adjacent to the new Lulu Hypermarket. NASAQ executed the project in 2020, and re-inspected it in 2026 with zero cracks and pristine finishes."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty does NASAQ provide on turnkey villa fit-outs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every NASAQ fit-out comes with a 12-Month Written Anti-Crack & Workmanship Warranty, backed by our 6 Ironclad Guarantees. As demonstrated in Mr. Ali Al Ketbi's MBZ villa, our reality-engineered standards guarantee decades of crack-free durability."
          }
        }
      ]
    }
  ]
}
</script></head><body><a class="skip" href="#main">Skip to content</a><header><a class="brand" href="/" aria-label="NASAQ home"><img src="/assets/logo.svg" alt="NASAQ approved logo" width="500" height="500"></a><nav aria-label="Main navigation"><a href="/services/">Services</a><a href="/projects/">Concepts</a><a href="/insights/">Insights</a><a href="/about/">About</a><a href="/contact/">Contact</a></nav><a class="lang-switch" href="/ar/insights/${caseStudy.slug}/" aria-label="النسخة العربية">العربية</a><a class="navcta" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project.">Discuss your project</a><button id="menu" aria-label="Open navigation" aria-expanded="false">Menu</button></header><main id="main"><div class="breadcrumbs"><a href="/">Home</a> / <a href="/insights/">Insights</a> / <span>Ali Al Ketbi Villa MBZ Zone 24 Case Study</span></div><article class="article-container"><div class="article-header"><span class="article-badge">${caseStudy.badgeEn}</span><h1>${caseStudy.titleEn.split('|')[0].trim()}</h1><div class="article-meta-row"><span>By NASAQ Engineering Team</span><span>•</span><span>${caseStudy.readTimeEn}</span><span>•</span><span>MBZ City Zone 24, Abu Dhabi</span><span>•</span><span>Updated Nov 2026</span></div></div><img class="article-featured-img" src="${caseStudy.image}" alt="Dual grand crystal chandeliers mounted into concrete slab with neoclassical ceiling rosettes at Mr. Ali Al Ketbi villa in MBZ City Zone 24 Abu Dhabi" width="1024" height="1365" loading="eager"><div class="article-content">

      <!-- Executive Project Summary Card -->
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px;border-bottom:1px solid #383a34;padding-bottom:12px;">
          <strong style="color:var(--bronze);font-size:18px;">PROJECT ARCHIVE & TECHNICAL VERIFICATION</strong>
          <span style="background:var(--bronze);color:#181918;font-size:12px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:0.5px;">7-YEAR DURABILITY AUDIT</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;font-size:14px;color:#d8d9d0;">
          <div><strong style="color:#fff;">Client:</strong> Mr. Ali Al Ketbi Ghdair (علي الكتبي غدير)</div>
          <div><strong style="color:#fff;">Location:</strong> MBZ City (Mohammed Bin Zayed City), Zone 24 (حوض 24), Abu Dhabi (Beside New Lulu Hypermarket)</div>
          <div><strong style="color:#fff;">Execution Year:</strong> 2020</div>
          <div><strong style="color:#fff;">Recent Audit:</strong> 2026 (7 Years Running · 0 Cracks · Flawless)</div>
          <div><strong style="color:#fff;">Key Scope:</strong> Neoclassical Ceilings, Dual Grand Chandelier Slab Anchors, Hand-Carved Floral Rose Boiserie, Level-5 Paint, AC Linear Integration</div>
          <div><strong style="color:#fff;">Contracting Role:</strong> Independent Client Implementation Advocate</div>
        </div>
      </div>

      <p class="article-lead">In the luxury residential landscape of the United Arab Emirates, building a family villa is one of the most substantial emotional and financial investments an Emirati homeowner undertakes. Yet, behind the impressive facades of Abu Dhabi's prestigious master developments, an invisible risk frequently threatens the final quality of high-end homes: <strong>the unspoken alignment between main civil contractors and supervising consultants</strong>, who may cut corners or conceal structural settlement defects to expedite handover and minimize remedial expenses.</p>

      <p>This authoritative technical case study documents the 2020 execution of <strong>Mr. Ali Al Ketbi Ghdair's luxury villa</strong> in <strong>Mohammed Bin Zayed City (MBZ City), Zone 24 (حوض 24), Abu Dhabi</strong> (adjacent to the new Lulu Hypermarket). It chronicles how NASAQ was appointed independently via a trusted personal recommendation, uncovered severe hidden structural cracks across the walls and concrete slabs, refused intense pressure from the contractor and consultant to "hide everything under gypsum board," fought a fierce site battle on behalf of the owner, and engineered a neoclassical interior fit-out that remains <strong>100% crack-free, unblemished, and pristine 7 years later</strong>.</p>

      <h2>1. The Background: Why Independence in Fit-Out Contracting Matters</h2>
      <p>In 2020, Mr. Ali Al Ketbi was nearing the completion of his private family villa in MBZ City Zone 24. Like the vast majority of Emirati homeowners, he had appointed a civil contracting firm to handle structural concrete and blockwork, overseen by an engineering consultancy. When the project reached the interior finishing and decorative fit-out stage, the civil contractor proposed supplying their own internal plasterers and gypsum teams.</p>
      
      <p>Knowing that complex neoclassical detailing, multi-tiered false ceilings, and heavy chandelier mountings demand specialized artistic joinery and high-precision engineering, a trusted personal friend strongly advised Mr. Ali Al Ketbi to engage <strong>NASAQ Fit-Out & Interior Design</strong> independently. By appointing NASAQ directly—completely separate from the civil contractor and consultant—Mr. Ali Al Ketbi gained an independent technical advocate whose sole contractual obligation was the perfection and longevity of his home.</p>

      <h2>2. The Site Discovery: The Pressure to Cover Structural Defects</h2>
      <p>When NASAQ's site engineering director and master craftsmen conducted the initial 3D laser survey and substrate assessment of the villa in MBZ Zone 24, they immediately halted preparatory work. Across several primary masonry partitions and along the reinforced concrete ceiling slabs, the team documented <strong>severe continuous diagonal and settlement shear cracks</strong>.</p>

      <p>The civil contractor had rushed the blockwork laying, used substandard mortar mixes, and failed to allow adequate curing time before applying base plaster. When the structural settlement occurred, the cracks propagated through the masonry.</p>

      <div class="callout" style="border-left:4px solid #e05656;background:#1d1717;color:#fff;margin:28px 0;">
        <h4 style="color:#ff8b8b;margin-bottom:8px;font-size:16px;">The Collusion Request: "Hide It with Gypsum Board"</h4>
        <p style="color:#ebd4d4;font-size:14px;line-height:1.7;">Upon discovering the structural cracks, NASAQ immediately called an on-site coordination meeting. To our team's shock, both the civil contractor and the supervising consultant pressured NASAQ to remain silent. Their joint request was explicit: <em>"Just cover the walls with gypsum cladding and install false gypsum board ceilings over the cracked concrete slabs. The owner will never see the cracks, our completion certificates will be stamped, and you will get paid for extra gypsum supply."</em></p>
      </div>

      <h2>3. The Whistleblower Decision: Standing with the Client</h2>
      <p>At NASAQ, our founding charter is built on <strong>Six Ironclad Engineering Guarantees</strong>. Guarantee 02 dictates <em>100% Reality-Engineered Execution with Zero Deception</em>, and Guarantee 04 dictates <em>Material Authenticity and Substrate Integrity Sign-Off</em>. Covering active structural movement cracks with cosmetic gypsum board violates every code of civil engineering ethics:</p>

      <ul>
        <li><strong>Thermal Expansion Transfer:</strong> In the harsh UAE climate with seasonal temperature variations (20°C in winter to 48°C in summer), unaddressed structural cracks continue to expand and contract. This micro-movement immediately fractures standard gypsum joints, producing unsightly spider cracks within 6 to 12 months.</li>
        <li><strong>Load-Bearing Compromise:</strong> Anchoring false ceilings and heavy crystal chandeliers into cracked or structurally degraded concrete slabs risks anchor pull-out and catastrophic overhead failure.</li>
        <li><strong>Moral Fraud:</strong> Concealing defects deprives the Emirati homeowner of holding the civil contractor legally accountable during their contractual Defects Liability Period (DLP).</li>
      </ul>

      <p>NASAQ flatly and unequivocally <strong>REFUSED</strong> to participate in the cover-up. Our team immediately scheduled an urgent private consultation with Mr. Ali Al Ketbi. We presented high-definition photographic logs, crack width measurements, and a comprehensive engineering breakdown of the structural defects.</p>

      <p>What followed was a <strong>fierce professional site battle ("big war")</strong> between NASAQ and the colluding contractor and consultant. Armed with NASAQ's undeniable technical evidence, Mr. Ali Al Ketbi withheld handover sign-offs and payments until the civil contractor conducted proper structural remediation: pressurized epoxy injection into structural concrete, installation of heavy carbon-fiber/galvanized steel structural ties across fractured blockwork joints, and full curing verification under independent inspection.</p>

      <h2>4. Engineering Guarantee 01: Unistrut Steel Slab Anchors for Dual Grand Chandeliers</h2>
      <p>Once the villa's structural integrity was certified, NASAQ took command of the complete decorative and architectural fit-out scope. The central living salon and grand reception demanded a majestic neoclassical aesthetic featuring <strong>two magnificent multi-tiered crystal chandeliers</strong>, suspended within deeply recessed stepped bulkheads, central sculpted medallions (rosettes), and perimeter architectural cove lighting.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/alketbi-project/ceiling-chandeliers-rosette.jpg" alt="Neoclassical high ceiling with dual crystal chandeliers, sculpted plaster rosettes, and linear AC integration at Mr. Ali Al Ketbi villa in MBZ City Zone 24" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 1: The finished high-ceiling grand salon in MBZ City Zone 24. Notice the perfect alignment of dual crystal chandeliers, hand-sculpted floral medallions, multi-tiered bulkheads, and discreet linear AC slot diffusers.</p>
      </div>

      <p>Standard fit-out contractors in the market frequently hang heavy decorative fixtures directly from lightweight galvanized gypsum ceiling furring (0.45mm gauge) or using plastic butterfly toggles. Over time, vibration, air conditioning air currents, and static fatigue cause ceiling sagging, visible joint telegraphing, and in extreme cases, ceiling collapse.</p>

      <p>Under <strong>NASAQ Engineering Guarantee 01 (Structural Heavy-Load Backing)</strong>, our engineers applied our commercial-grade suspension standard:</p>
      <ol>
        <li><strong>Solid Slab Anchoring:</strong> NASAQ core-drilled directly into the reinforced solid concrete ceiling slab above the false ceiling void.</li>
        <li><strong>High-Tensile Unistrut Channels:</strong> Heavy-gauge galvanized Unistrut structural steel channels were secured using Grade 8.8 high-tensile threaded steel drop rods and mechanical expansion steel anchors.</li>
        <li><strong>10x Safety Factor:</strong> The entire chandelier load is carried 100% by the structural concrete framework, completely independent of the gypsum ceiling boards, calibrated to withstand 10 times the chandelier's static weight plus dynamic seismic dampening.</li>
        <li><strong>Acoustic & Thermal Dampening:</strong> High-density neoprene isolators were installed to eliminate vibration transmission from upper-floor mechanical plant or rooftop AC chillers.</li>
      </ol>

      <h2>5. Artisanal Mastery: Handcrafted Floral Rose Corner Boiserie</h2>
      <p>Neoclassical French wall mouldings (Boiserie) represent one of NASAQ's hallmark specialties. For Mr. Ali Al Ketbi's private suites, off-the-shelf plastic polyurethane mouldings were rejected in favor of bespoke, hand-sculpted architectural plaster elements.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/alketbi-project/handcrafted-floral-moulding.jpg" alt="Close-up of bespoke three-dimensional hand-carved floral rose corner boiserie moulding at Mr. Ali Al Ketbi villa" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 2: High-relief sculpted floral rose corner boiserie detailing. Every petal, branch, and leaf is meticulously hand-formed by NASAQ master plaster sculptors and finished in Level-5 Jotun ultra-smooth emulsion.</p>
      </div>

      <p>As captured in Photo 2, our sculptors hand-carved three-dimensional climbing rose vines, delicate blossoms, and naturalistic foliage radiating from the frame corners. These ornamental corners blend seamlessly with linear extruded wall beadings, anchored using acoustic elastomeric adhesives and mechanical micro-pins to prevent hairline joint cracking caused by building vibrations.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/alketbi-project/curved-tiered-ceiling-room.jpg" alt="Curved stepped bulkhead false ceiling with central rosette and twin windows overlooking MBZ City Zone 24" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1820" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 3: Curved stepped bulkhead ceiling with central floral medallion and wall framing overlooking Mohammed Bin Zayed City Zone 24.</p>
      </div>

      <h2>6. Video Walkthroughs: Visual Evidence 7 Years Post-Handover</h2>
      <p>In fit-out contracting, the true test of quality is not how a room looks on the day of the photoshoot; it is how it performs <strong>seven years after completion</strong>. Below are two playable, unedited video walkthroughs recorded during a recent site visit to Mr. Ali Al Ketbi's residence in MBZ City Zone 24:</p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:24px;margin:30px 0;">
        <div style="background:#1d1e1c;border:1px solid #383a34;border-radius:4px;padding:16px;">
          <h4 style="color:var(--bronze);margin-bottom:12px;font-size:16px;">Walkthrough 1: Grand Salon Ceiling & Chandeliers</h4>
          <video controls playsinline preload="metadata" style="width:100%;border-radius:3px;background:#000;">
            <source src="/assets/alketbi-project/alketbi-villa-walkthrough-1.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <p style="font-size:13px;color:#c5c7be;margin-top:10px;line-height:1.6;">Walkthrough video showcasing the 7-year condition of the dual crystal chandeliers, hand-cast plaster rosettes, and multi-tier cove lighting with zero hairline fractures or ceiling sagging.</p>
        </div>

        <div style="background:#1d1e1c;border:1px solid #383a34;border-radius:4px;padding:16px;">
          <h4 style="color:var(--bronze);margin-bottom:12px;font-size:16px;">Walkthrough 2: Neoclassical Boiserie & Bulkhead</h4>
          <video controls playsinline preload="metadata" style="width:100%;border-radius:3px;background:#000;">
            <source src="/assets/alketbi-project/alketbi-villa-walkthrough-2.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <p style="font-size:13px;color:#c5c7be;margin-top:10px;line-height:1.6;">Inspection video highlighting the curved stepped bulkhead, sculpted floral medallion, and wall frames—still displaying razor-sharp 90° corners and flawless paint adhesion.</p>
        </div>
      </div>

      <h2>7. The Long-Term Proof: From Fierce Site Defense to Lifelong Friendship</h2>
      <p>When the project was completed and handed over in 2020, Mr. Ali Al Ketbi experienced firsthand the peace of mind that comes from working with a contractor who places engineering integrity above short-term convenience. Having witnessed NASAQ fight for the safety and structural integrity of his villa against the colluding parties, Mr. Ali Al Ketbi invited NASAQ's founder and executive engineering family to a formal celebratory dinner at his newly finished villa.</p>

      <p>That successful handover established a deep, lifelong friendship rooted in mutual respect and trust. Recently, 7 years after the initial handover, Mr. Ali Al Ketbi welcomed our team once again for an informal visit. As demonstrated in the photographic and video documentation above, the villa's ceilings, walls, and architectural details remain in <strong>100% pristine condition</strong>:</p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;margin:24px 0;">
        <div style="background:#222321;padding:16px;border-radius:2px;border-left:3px solid var(--bronze);">
          <strong style="color:var(--bronze);font-size:20px;display:block;">0.0 mm</strong>
          <span style="color:#fff;font-size:13px;font-weight:600;">Ceiling Deflection</span>
          <p style="color:#b2b4a8;font-size:12px;margin-top:4px;">Zero sag around heavy crystal chandeliers under continuous 7-year dead load.</p>
        </div>
        <div style="background:#222321;padding:16px;border-radius:2px;border-left:3px solid var(--bronze);">
          <strong style="color:var(--bronze);font-size:20px;display:block;">Zero</strong>
          <span style="color:#fff;font-size:13px;font-weight:600;">Hairline Cracks</span>
          <p style="color:#b2b4a8;font-size:12px;margin-top:4px;">No joint telegraphing or movement cracks across gypsum bulkheads or boiserie corners.</p>
        </div>
        <div style="background:#222321;padding:16px;border-radius:2px;border-left:3px solid var(--bronze);">
          <strong style="color:var(--bronze);font-size:20px;display:block;">100%</strong>
          <span style="color:#fff;font-size:13px;font-weight:600;">Paint Adhesion</span>
          <p style="color:#b2b4a8;font-size:12px;margin-top:4px;">Zero paint peeling, flaking, or discoloration around AC linear diffusers or coves.</p>
        </div>
      </div>

      <h2>8. Key Advice for Emirati Homeowners Building Villas in Abu Dhabi</h2>
      <p>For villa owners in Mohammed Bin Zayed City, Khalifa City, Al Bateen, Al Mushrif, and across Abu Dhabi, the story of Mr. Ali Al Ketbi provides invaluable strategic lessons:</p>

      <ol>
        <li><strong>Separate Civil Shell from Interior Finishing:</strong> Never allow the main civil contractor to bundle decorative fit-out, joinery, and gypsum works into a single package without an independent specialist implementation contractor. An independent contractor acts as your eyes and ears on site.</li>
        <li><strong>Demand Unistrut Concrete Slab Anchors for Chandeliers:</strong> If your villa features grand chandeliers weighing 25kg to over 150kg, explicitly mandate that anchors connect directly to the structural reinforced concrete slab, backed by calculation sheets.</li>
        <li><strong>Never Accept Cosmetic Gypsum over Active Cracks:</strong> If settlement cracks appear during construction, demand structural epoxy injection and engineering sign-off before decorative finishes are applied.</li>
        <li><strong>Select Turnkey Contractors Offering Written Warranties:</strong> Ensure your interior contractor provides a comprehensive 12-Month Written Warranty and possesses an ADDED-registered commercial fit-out license in Abu Dhabi.</li>
      </ol>

      <!-- Frequently Asked Questions -->
      <section class="section pale" style="margin-top:50px;padding:35px;border-radius:4px;" id="faq">
        <h3 style="font-size:24px;margin-bottom:24px;color:#fff;">Frequently Asked Questions (FAQ)</h3>
        <div style="display:flex;flex-direction:column;gap:20px;">
          
          <article class="faq-card">
            <h4>Why should an Emirati villa owner hire an independent interior contractor instead of the main civil contractor?</h4>
            <p>Civil main contractors focus on structural shell speed and often subcontract decorative fit-outs to the lowest-bidding labor crews. Furthermore, when consultants and civil contractors develop close working relationships, they may compromise on minor structural settlement cracks. An independent, specialized interior implementation contractor like NASAQ works exclusively for the owner, independently inspecting substrates, blowing the whistle on hidden defects, and ensuring certified structural anchoring before any decorative finishes are applied.</p>
          </article>

          <article class="faq-card">
            <h4>Can gypsum board ceilings hide structural cracks safely?</h4>
            <p>No. Concealing active structural cracks under false gypsum ceilings without structural epoxy injection and structural remediation is dangerous and deceptive. Active substrate movement transfers directly to the gypsum suspension system within months, causing joint hairline cracking, tape delamination, and severe sag under thermal expansion.</p>
          </article>

          <article class="faq-card">
            <h4>How does NASAQ safely mount heavy crystal chandeliers in high-ceiling villas?</h4>
            <p>Under NASAQ Ironclad Guarantee 01, we never attach heavy chandeliers to gypsum furring or hollow blocks. Our engineering team installs heavy-duty unistrut structural steel channels anchored directly into the solid reinforced concrete ceiling slab using high-tensile threaded steel rods and expansion anchors tested to hold 10 times the chandelier static load.</p>
          </article>

          <article class="faq-card">
            <h4>Where is this project located in Abu Dhabi?</h4>
            <p>This villa is located in Mohammed Bin Zayed City (MBZ City), Zone 24 (حوض 24), Abu Dhabi, directly adjacent to the new Lulu Hypermarket. NASAQ executed the project in 2020, and re-inspected it in 2026 with zero cracks and pristine finishes.</p>
          </article>

          <article class="faq-card">
            <h4>What warranty does NASAQ provide on turnkey villa fit-outs?</h4>
            <p>Every NASAQ fit-out comes with a 12-Month Written Anti-Crack & Workmanship Warranty, backed by our 6 Ironclad Guarantees. As demonstrated in Mr. Ali Al Ketbi's MBZ villa, our reality-engineered standards guarantee decades of crack-free durability.</p>
          </article>

        </div>
      </section>

      <!-- CTA Box -->
      <div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">
        <h4 style="color:var(--bronze);font-size:18px;">Planning a Luxury Villa Fit-Out in Abu Dhabi?</h4>
        <p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">Work with an independent engineering contractor who protects your investment with absolute transparency. Bring your Pinterest ideas, 3D renders, or architectural blueprints for an itemized BOQ and free 3D laser site survey within 24 to 48 hours.</p>
        <div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">
          <a class="button" href="/contact/">Request an itemized quotation</a>
          <a class="button" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20read%20the%20Ali%20Al%20Ketbi%20case%20study%20and%20would%20like%20to%20discuss%20my%20villa%20fit-out." style="background:#fff;color:#151613;border-color:#fff;">WhatsApp our site engineers</a>
        </div>
      </div>

      <!-- Related Guides -->
      <div class="related-insights" style="margin-top:60px;border-top:1px solid #e2e3de;padding-top:40px;">
        <h3 style="font-size:24px;margin-bottom:24px;">Related Technical Guides & UAE Case Studies</h3>
        <div class="insights-grid">
          <a class="article-card" href="/insights/abu-dhabi-luxury-villa-majlis-fitout-guide/">
            <img class="article-card-img" src="/assets/villa.webp" alt="Luxury Villa and Modern Majlis Fit-Out Guide Abu Dhabi" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">Emirati Villa & Majlis Craft</span>
              <h4>Luxury Villa & Modern Majlis Fit-Out Guide Abu Dhabi: Al Bateen, Khalifa City & Mushrif</h4>
              <p>The definitive guide to luxury villa fit-outs, neoclassical majlises, grand double-height entrance panelling, and executing 3D designs without contractor delays in Abu Dhabi.</p>
            </div>
          </a>
          <a class="article-card" href="/insights/saadiyat-island-72-hour-fit-out-case-study/">
            <img class="article-card-img" src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="Saadiyat Island Soho Residence 72-Hour Fit-Out Case Study" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">Real Execution & Case Study</span>
              <h4>Saadiyat Island Soho Residence: 72-Hour Turnkey Wall Mouldings & Gypsum Fit-Out Case Study</h4>
              <p>Case study of a 72-hour luxury apartment transformation in Soho Block A, Saadiyat Island, Abu Dhabi with zero forced design fees and verified Google review.</p>
            </div>
          </a>
        </div>
      </div>

    </div></article></main><footer><div><span class="wordmark">NASAQ <span lang="ar">نسق</span></span><p>Spaces in harmony.</p><p class="small">NASAQ Interior Design Implementation Works – L.L.C – S.P.C<br>Abu Dhabi, United Arab Emirates</p></div><div><a href="tel:+971505334861">+971 50 533 4861</a><a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a><a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a><a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">Instagram · @nasaq.fitout</a><a href="https://share.google/jD1fYkpZ96pX0pQPN" target="_blank" rel="noopener noreferrer">Google Maps · NASAQ Profile</a></div><div><a href="/services/">Our services</a><a href="/insights/">Insights & Guides</a><a href="/about/">About NASAQ</a><a href="/contact/">Start a conversation</a><p class="small">© 2026 NASAQ</p></div></footer><a class="floating" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project." aria-label="Contact NASAQ on WhatsApp">WhatsApp</a></body></html>`;

// 2. Generate Arabic HTML
const arHtml = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${caseStudy.titleAr}</title><meta name="description" content="${caseStudy.descAr}"><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=6"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="مدينة محمد بن زايد، أبوظبي"><meta name="geo.position" content="24.3385;54.5260"><meta name="ICBM" content="24.3385, 54.5260"><meta property="og:type" content="article"><meta property="og:site_name" content="نسق للتصميم الداخلي والمقاولات"><meta property="og:title" content="${caseStudy.titleAr}"><meta property="og:description" content="${caseStudy.descAr}"><meta property="og:url" content="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><meta property="og:image" content="https://nasaqfitout.ae${caseStudy.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${caseStudy.titleAr}"><meta name="twitter:description" content="${caseStudy.descAr}"><meta name="twitter:image" content="https://nasaqfitout.ae${caseStudy.image}"><script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://nasaqfitout.ae/#business",
      "name": "شركة نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م",
      "url": "https://nasaqfitout.ae/ar/",
      "logo": "https://nasaqfitout.ae/assets/logo.svg",
      "image": "https://nasaqfitout.ae/assets/logo.svg",
      "telephone": "+971505334861",
      "email": "info@nasaqfitout.ae",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "أبوظبي",
        "addressRegion": "أبوظبي",
        "addressCountry": "AE"
      },
      "areaServed": [
        "مدينة محمد بن زايد",
        "حوض 24",
        "أبوظبي",
        "مدينة خليفة",
        "جزيرة السعديات",
        "جزيرة ياس",
        "دبي"
      ]
    },
    {
      "@type": "Article",
      "@id": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/#article",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://nasaqfitout.ae/#website",
        "name": "نسق للتصميم الداخلي والمقاولات",
        "url": "https://nasaqfitout.ae/ar/"
      },
      "headline": "قصة نجاح تشطيب فيلا السيد علي الكتبي في مدينة محمد بن زايد (حوض 24): النزاهة الهندسية وكشف عيوب المقاول والاستشاري",
      "description": "${caseStudy.descAr}",
      "inLanguage": "ar",
      "mainEntityOfPage": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/",
      "datePublished": "2026-11-08T08:00:00+04:00",
      "dateModified": "2026-11-08T08:00:00+04:00",
      "image": "https://nasaqfitout.ae${caseStudy.image}",
      "author": {
        "@type": "Organization",
        "name": "فريق الهندسة في شركة نسق",
        "url": "https://nasaqfitout.ae/ar/about/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "شركة نسق لأعمال تنفيذ التصميم الداخلي ذ.م.م",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nasaqfitout.ae/assets/logo.svg"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": "https://nasaqfitout.ae/ar/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "المقالات وقصص النجاح",
          "item": "https://nasaqfitout.ae/ar/insights/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "فيلا علي الكتبي حوض 24 مدينة محمد بن زايد",
          "item": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "فيلا السيد علي الكتبي حوض 24 مدينة محمد بن زايد: جولة الأسقف والثريات بعد 7 سنوات",
      "description": "فيديو توثيقي يوضح أسقف الجبس النيوكلاسيكية والثريات الكريستالية الضخمة لا تزال بحالة الوكالة وبلا أي شروخ بعد مرور 7 سنوات على تنفيذها في مدينة محمد بن زايد بأبوظبي.",
      "thumbnailUrl": "https://nasaqfitout.ae/assets/alketbi-project/ceiling-chandeliers-rosette.jpg",
      "uploadDate": "2026-11-08T08:00:00+04:00",
      "contentUrl": "https://nasaqfitout.ae/assets/alketbi-project/alketbi-villa-walkthrough-1.mp4"
    },
    {
      "@type": "VideoObject",
      "name": "جولة تشطيب الجدران والبانوهات اليدوية في فيلا مدينة محمد بن زايد",
      "description": "فيديو يوضح دقة زوايا البانوهات المنحوتة يدوياً وتدرجات الأسقف الدائرية بحالة ممتازة وبدون أي تشققات بعد 7 سنوات من التسليم.",
      "thumbnailUrl": "https://nasaqfitout.ae/assets/alketbi-project/curved-tiered-ceiling-room.jpg",
      "uploadDate": "2026-11-08T08:00:00+04:00",
      "contentUrl": "https://nasaqfitout.ae/assets/alketbi-project/alketbi-villa-walkthrough-2.mp4"
    },
    {
      "@type": "FAQPage",
      "@id": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "لماذا يجب على مالك الفيلا الاستعانة بشركة ديكور مستقلة بدلاً من الاعتماد على مقاول البناء الرئيسي؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "مقاول البناء الرئيسي يركز على سرعة صب الخرسانة وبناء الهيكل العظمي، وغالباً ما يعتمد في الديكور على عمالة باليومية بأقل التكاليف. كما أن العلاقة بين المقاول والاستشاري قد تؤدي أحياناً إلى التغاضي عن عيوب الترييح والشروخ لتسريع استلام المشروع. الاستعانة بشركة ديكور متخصصة ومستقلة مثل نسق يضمن لك مهندسين يمثلون مصلحتك حصراً، ويفحصون الجدران بالليزر، ويكشفون أي غش أو عيوب خفية قبل تطبيق الديكور النهائي."
          }
        },
        {
          "@type": "Question",
          "name": "هل يمكن إخفاء شروخ الجدران والأسقف بألواح الجبس بورد بأمان؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "قطعاً لا. تغطية شروخ الهيكل الإنشائي أو جدران الطابوق بالجبس بورد دون معالجتها بحقن الإيبوكسي وتدعيمها هندسياً يُعد خطأً جسيماً وتضليلاً للمالك. فالحركة الإنشائية ستنتقل خلال أشهر قليلة إلى ألواح الجبس، مما يؤدي إلى تشقق الفواصل وتقشر الدهانات واحتمال هبوط الأسقف."
          }
        },
        {
          "@type": "Question",
          "name": "كيف تضمن شركة نسق تثبيت الثريات الكريستالية الثقيلة في الأسقف العالية؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "وفقاً لضمان نسق الهندسي رقم 01، يُمنع منعاً باتاً تعليق الثريات على صاج الجبس أو الطابوق المفرغ. نقوم بزرع هياكل حديد Unistrut مجلفنة مباشرة في الصبة الخرسانية المسلحة للخرسانة بواسطة براغي صلب 8.8 وتيودورات محسوبة لتحمل 10 أضعاف وزن الثريا مع عزل كامل ضد الاهتزازات."
          }
        },
        {
          "@type": "Question",
          "name": "أين يقع هذا المشروع في أبوظبي؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "تقع هذه الفيلا في مدينة محمد بن زايد (MBZ)، حوض 24، في أبوظبي، بجوار لولو ماركت (هايبرماركت) الجديد. تم تنفيذ المشروع عام 2020، وتمت إعادة فحصه في عام 2026 ليتبين أنه لا يزال بلا أي شروخ كالجديد تماماً."
          }
        },
        {
          "@type": "Question",
          "name": "ما هي الضمانات التي تقدمها نسق على تشطيب الفلل؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "تقدم نسق ضماناً خطياً لمدة 12 شهراً ضد عيوب المصنعية والشروخ مدعوماً بضماناتنا الست الصارمة. وكما أثبتت تجربة فيلا السيد علي الكتبي في مدينة محمد بن زايد، فإن معاييرنا الهندسية تحافظ على جمال الديكور وصلابته لسنوات طويلة."
          }
        }
      ]
    }
  ]
}
</script></head><body><a class="skip" href="#main">تخطي إلى المحتوى</a><header><a class="brand" href="/ar/" aria-label="الصفحة الرئيسية لنسق"><img src="/assets/logo.svg" alt="شعار نسق المعتمد" width="500" height="500"></a><nav aria-label="الملاحة الرئيسية"><a href="/ar/services/">خدماتنا</a><a href="/ar/projects/">مفاهيم المشاريع</a><a href="/ar/insights/">المقالات والأدلة</a><a href="/ar/about/">عن نسق</a><a href="/ar/contact/">اتصل بنا</a></nav><a class="lang-switch" href="/insights/${caseStudy.slug}/" aria-label="English version">English</a><a class="navcta" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20طلب%20استشارة%20لتشطيب%20فيلا%20أو%20مجلس.">تواصل معنا الآن</a><button id="menu" aria-label="فتح القائمة" aria-expanded="false">القائمة</button></header><main id="main"><div class="breadcrumbs"><a href="/ar/">الرئيسية</a> / <a href="/ar/insights/">المقالات وقصص النجاح</a> / <span>فيلا علي الكتبي حوض 24 مدينة محمد بن زايد</span></div><article class="article-container"><div class="article-header"><span class="article-badge">${caseStudy.badgeAr}</span><h1>${caseStudy.titleAr.split('|')[0].trim()}</h1><div class="article-meta-row"><span>بقلم فريق الهندسة في شركة نسق</span><span>•</span><span>${caseStudy.readTimeAr}</span><span>•</span><span>مدينة محمد بن زايد، حوض 24، أبوظبي</span><span>•</span><span>تحديث نوفمبر 2026</span></div></div><img class="article-featured-img" src="${caseStudy.image}" alt="ثريات كريستال ضخمة مثبتة في الخرسانة المسلحة وزخارف جبسية نيوكلاسيكية في فيلا علي الكتبي بحوض 24 مدينة محمد بن زايد أبوظبي" width="1024" height="1365" loading="eager"><div class="article-content">

      <!-- Executive Project Summary Card -->
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px;border-bottom:1px solid #383a34;padding-bottom:12px;">
          <strong style="color:var(--bronze);font-size:18px;">توثيق المشروع والتحقق الهندسي الميداني</strong>
          <span style="background:var(--bronze);color:#181918;font-size:12px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:0.5px;">فحص الجودة بعد 7 سنوات</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;font-size:14px;color:#d8d9d0;">
          <div><strong style="color:#fff;">العميل:</strong> السيد علي الكتبي غدير المحترم</div>
          <div><strong style="color:#fff;">الموقع:</strong> مدينة محمد بن زايد (MBZ)، حوض 24، أبوظبي (بجوار لولو ماركت الجديد)</div>
          <div><strong style="color:#fff;">سنة التنفيذ:</strong> 2020</div>
          <div><strong style="color:#fff;">إعادة الفحص الميداني:</strong> 2026 (7 سنوات كاملة · صفر شروخ · بحالة الوكالة)</div>
          <div><strong style="color:#fff;">نطاق العمل:</strong> أسقف ديكورية نيوكلاسيكية، تثبيت ثريات ضخمة في الخرسانة، بانوهات وزخارف ورد يدوية، دهانات Level-5، فتحات تكييف مخفية</div>
          <div><strong style="color:#fff;">دور نسق:</strong> مقاول تنفيذ ديكور مستقل ومدافع عن مصلحة المالك</div>
        </div>
      </div>

      <p class="article-lead">يمثل بناء المسكن الخاص بالنسبة للمواطن الإماراتي والعائلات الكريمة في أبوظبي تتويجاً لجهد سنوات واستثماراً عائلياً وعاطفياً بالغ الأهمية. ومع ذلك، وخلف الواجهات الفخمة لكثير من الفلل قيد الإنشاء في العاصمة، يتربص خطر خفي لا ينتبه إليه أغلب الملاك: <strong>التواطؤ أو التنسيق غير المعلن بين المقاول الإنشائي الرئيسي والاستشاري المشرف</strong>، حيث يسعى الطرفان أحياناً إلى تقليص المصاريف، وتغطية عيوب الترييح الإنشائي، واستعجال تسليم المشروع وصرف الدفعات على حساب جودة وسلامة المبنى على المدى الطويل.</p>

      <p>توثق هذه المقالة التخصصية دراسة حالة واقعية حدثت عام <strong>2020</strong> أثناء تنفيذ فيلا <strong>السيد علي الكتبي غدير</strong> في <strong>مدينة محمد بن زايد (MBZ)، حوض 24، في أبوظبي</strong> (بجوار لولو ماركت / الهايبرماركت الجديد). وتروي كيف دخلت شركة نسق إلى المشروع عبر تزكية شخصية وثيقة من صديق المالك، وكشفت شروخاً خطيرة في الجدران والأسقف الخرسانية، ورفضت ضغوط المقاول والاستشاري لإخفاء هذه الشروخ بالجبس بورد، وخاضت معركة هندسية حامية لحماية حقوق المالك، لتقدم في النهاية تشطيباً نيوكلاسيكياً ملكياً لا يزال <strong>بلا أي تشقق أو هبوط بعد مرور 7 سنوات كاملة</strong>.</p>

      <h2>1. البداية: لماذا يُعد تعيين مقاول ديكور مستقل صمام أمان لمالك الفيلا؟</h2>
      <p>في عام 2020، كان السيد علي الكتبي يشرف على مراحل بناء فيلته الخاصة في حوض 24 بمدينة محمد بن زايد. وكعادة مشاريع الفلل، كان هناك مقاول رئيسي مسؤول عن أعمال العظم والبناء، واستشاري هندسي معتمد للإشراف. وعندما اقترب موعد تنفيذ الديكورات الداخلية والأسقف المستعارة، عرض المقاول الرئيسي إسناد الأعمال لعمالة تابعة له لإنهاء المشروع سريعاً.</p>

      <p>ولكن إدراكاً من أحد الأصدقاء المقربين للسيد علي الكتبي بأن الأسقف المعلقة الفخمة، والزخارف النيوكلاسيكية، وتثبيت الثريات الكريستالية العملاقة تتطلب دقة هندسية ومهارة حرفية تفوق قدرات عمالة المقاولات العامة، نصحه بشدة بالتعاقد المباشر والمستقل مع <strong>شركة نسق للتصميم الداخلي والديكور</strong>. وبهذا القرار، أصبح للسيد علي الكتبي فريق هندسي مستقل لا يدين بالولاء إلا لمصلحة المالك ولضمان أعلى معايير الجودة في فيلته.</p>

      <h2>2. الصدمة في الموقع: ضغوط المقاول والاستشاري لإخفاء الشروخ الإنشائية</h2>
      <p>عندما باشر مهندسو نسق وكوادرها الفنية أعمال الرفع المساحي بالليزر وفحص أسطح الجدران والأسقف في فيلا حوض 24، توقفت أعمال التجهيز على الفور. حيث رصد الفريق <strong>شروخاً مائلة وترييحات واضحة تمتد عبر جدران الطابوق وأجزاء من الصبة الخرسانية للأسقف</strong>.</p>

      <p>كان سبب هذه الشروخ واضحاً هندسياً: تسرع المقاول الرئيسي في صب وبناء الجدران، وعدم الالتزام بفترات المعالجة بالرش المائي الكافية (Curing)، واستخدام خلطات طابوق غير مدعمة بشبك تسليح فواصل التمدد.</p>

      <div class="callout" style="border-right:4px solid #e05656;background:#1d1717;color:#fff;margin:28px 0;">
        <h4 style="color:#ff8b8b;margin-bottom:8px;font-size:16px;">المؤامرة الميدانية: "غطوا الشروخ بالجبس بورد ولا تخبروا المالك!"</h4>
        <p style="color:#ebd4d4;font-size:14px;line-height:1.7;">عقدت نسق اجتماعاً تنسيقياً فورياً في الموقع بحضور ممثلي المقاول والاستشاري لعرض تقرير الشروخ ومطالبتهم بمعالجتها إنشائياً قبل تركيب الديكور. وكانت المفاجأة الصادمة أن المقاول والاستشاري طلبا من مدير موقع نسق وبصريح العبارة: <em>"أنتم شركة ديكور، قوموا بتغطية هذه الشروخ بجدران الجبس والأسقف المستعارة! بمجرد تركيب الألواح والدهان لن يرى المالك أي شيء، وسنستلم المشروع ونعتمد شهادات الإنجاز، وستربحون أنتم من توريد كميات إضافية من الجبس!"</em></p>
      </div>

      <h2>3. مبدأ النزاهة الذي لا يقبل المساومة: الوقوف في صف العميل وخوض المعركة</h2>
      <p>في شركة نسق، تنص <strong>ضماناتنا الهندسية الست الصارمة</strong> على النزاهة التامة ورفض أي غش أو تلاعب في المواصفات. فالسكوت وتغطية الشروخ الحية بألواح الجبس يُعد تضليلاً خطيراً للمالك وتخريباً لمستقبل الفيلا لعدة أسباب هندسية قاطعة:</p>

      <ul>
        <li><strong>انتقال حركة الترييح إلى الجبس:</strong> في مناخ الإمارات الذي يشهد فروق درجات حرارة بين الصيف والشتاء، تتمدد الشروخ الحية وتتقلص باستمرار. تغطيتها بالجبس بورد دون معالجة سينقل حركة المبنى إلى فواصل الجبس خلال أقل من 6 إلى 12 شهراً، لتظهر شروخ شنيعة في السقف والدهانات.</li>
        <li><strong>خطر سقوط الأوزان الثقيلة:</strong> تثبيت أسقف الجبس والثريات في خرسانة متصدعة أو ضعيفة يهدد بخلخلة التيودورات وسقوط الديكورات مستقبلاً.</li>
        <li><strong>إهدار حق المالك القانوني:</strong> التستر على المقاول يمنعه من إصلاح العيوب على حسابه ضمن فترة الضمان الإنشائي والصيانة (DLP).</li>
      </ul>

      <p>رفضت نسق هذا الطلب المشبوه رفضاً قاطعاً ومطلقاً. وتوجهنا مباشرة إلى السيد علي الكتبي، وعقدنا معه جلسة مصارحة شفافة في الموقع، وعرضنا عليه الصور الموثقة، وقياسات عمق الشروخ بالليزر، والتحليل الإنشائي الواضح للمخاطر.</p>

      <p>وعلى إثر ذلك، <strong>اشتعلت معركة هندسية حامية ("حرب كبيرة") في الموقع</strong> بين نسق من جهة (حاميةً مصلحة المالك وحقه في بناء سليم) والمقاول والاستشاري من جهة أخرى. وبفضل التوثيق الهندسي القاطع الذي قدمته نسق، أوقف السيد علي الكتبي مستحقات المقاول الإنشائي واشترط خضوعه للإصلاحات الإنشائية الإلزامية: حقن الشروخ بالإيبوكسي الإنشائي عالي المقاومة، وتركيب زوايا وتدعيمات حديدية صلبة، وإعادة المعالجة بالكامل تحت إشراف هندسي صارم قبل بدء أي عمل ديكوري.</p>

      <h2>4. ضمان نسق رقم 01: تثبيت ثريات الكريستال الضخمة في الصبة الخرسانية مباشرة</h2>
      <p>بعد الانتهاء من العلاج الإنشائي للجدران والأسقف والتأكد من سلامة الهيكل 100%، باشرت نسق تنفيذ التصاميم الداخلية النيوكلاسيكية الفاخرة لمجالس وصالات الاستقبال بالفيلا. وكان من أبرز عناصر التصميم <strong>تركيب ثريتين كريستاليتين عملاقتين</strong> في صالة الاستقبال الكبرى، تتوسطان بحور أسقف ساقطة متعددة المستويات ومزينة بصرر جبسية محفورة يدوياً وإضاءات مخفية.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/alketbi-project/ceiling-chandeliers-rosette.jpg" alt="ثريات كريستال ضخمة مثبتة في الخرسانة مع صرر جبسية نيوكلاسيكية في فيلا علي الكتبي بحوض 24 مدينة محمد بن زايد أبوظبي" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 1: صالة الاستقبال الرئيسية في فيلا السيد علي الكتبي بحوض 24. ثريات الكريستال المزدوجة معلقة على صلب مثبت في الخرسانة، وتحيط بها صرر جبسية وزوايا إضاءة ومخارج تكييف طولية بدون أي ملمتر هبوط.</p>
      </div>

      <p>في السوق التجاري، تقوم الكثير من الشركات بتعليق الثريات الثقيلة على صاج الجبس بورد الرقيق (0.45 مم) أو باستخدام مسامير الفراشة البلاستيكية في الطابوق المفرغ. ومع الوقت واهتزازات التكييف والوزن، تتهدل الأسقف وتتشقق، وقد تسقط الثريا بشكل كارثي.</p>

      <p>ولكن وفقاً لـ <strong>ضمان نسق الهندسي رقم 01 (تدعيم الأوزان الثقيلة في الهيكل الخرساني)</strong>، تم تطبيق أعلى معايير الأمان المتبعة في المشاريع التجارية الفاخرة:</p>
      <ol>
        <li><strong>التثبيت المباشر في الخرسانة:</strong> تم عمل كور وثقب مباشر في الصبة الخرسانية المسلحة للسقف قبل تركيب الجبس.</li>
        <li><strong>هياكل Unistrut المجلفنة:</strong> تم زرع قضبان وتيودورات صلب مقوى (Grade 8.8) وجسور Unistrut فولاذية مجلفنة مخصصة للأحمال الثقيلة داخل تجويف السقف.</li>
        <li><strong>معامل أمان 10 أضعاف:</strong> تم اختبار نظام التعليق ليتحمل 10 أضعاف الوزن الصافي للثريا مع امتصاص كامل لأي اهتزازات ناتجة عن التكييف أو الحركة في الطابق العلوي.</li>
        <li><strong>تكامل مخارج التكييف:</strong> تم دمج مخارج التكييف الطولية (Linear Slot Diffusers) بدقة هندسية تمنع أي تكاثف للرطوبة أو تيار هواء مباشر يؤثر على نقاء الكريستال أو ألوان الجبس.</li>
      </ol>

      <h2>5. الإتقان الحرفي: بانوهات وزخارف ورد نيوكلاسيكية منحوتة يدوياً</h2>
      <p>تتميز شركة نسق بفريق من النحاتين والحرفيين القادرين على تحويل أي فكرة أو نقش إلى واقع ملموس بدلاً من الاعتماد على قوالب الفوم أو البلاستيك الجاهزة الرخيصة. وفي أجنحة وصالات فيلا السيد علي الكتبي، تم نحت زوايا البانوهات الجدارية يدوياً بأسلوب الورود وأغصان الشجر المتسلقة ثلاثية الأبعاد.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/alketbi-project/handcrafted-floral-moulding.jpg" alt="لقطة قريبة لبانوه جداري بزخرفة ورود منحوتة يدوياً ثلاثية الأبعاد في فيلا السيد علي الكتبي" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 2: تفاصيل زاوية البانوه المنحوتة يدوياً بدقة متناهية. كل ورقة وبتلة تم تشكيلها بحرفية عالية وطُبقت عليها دهانات جوتن فينوماستيك فائقة النعومة بمستوى Level-5.</p>
      </div>

      <p>وكما توضح الصورة 2، تم نحت باقة الورد وأغصانها الناعمة لتمتزج مع إطارات الجدران الكلاسيكية، وتثبيتها بمواد لاصقة مرنة ومسامير ميكروبن غير مرئية تمنع تشقق الفواصل الجدارية نهائياً.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/alketbi-project/curved-tiered-ceiling-room.jpg" alt="سقف ساقط متدرج بانحناءات ناعمة مع صرة ورد مركزية ونوافذ تطل على حوض 24 بمدينة محمد بن زايد" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1820" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 3: سقف دائري نيوكلاسيكي متدرج مع صرة مركزية مخصصة للثريا وإطارات بانوهات جدارية تطل على فلل حوض 24 بمدينة محمد بن زايد.</p>
      </div>

      <h2>6. جولة بالفيديو: توثيق حي بالصوت والصورة بعد مرور 7 سنوات</h2>
      <p>المقياس الحقيقي لجودة مقاول الديكور ليس الصور التي تلتقطها كاميرا احترافية في يوم التسليم الأول، بل هو حالة المكان <strong>بعد مرور سنوات من السكن والاستخدام اليومي والتغيرات المناخية</strong>. فيما يلي مقطعا فيديو توثيقيان تم تصويرهما مؤخراً خلال زيارتنا لفيلا السيد علي الكتبي في حوض 24 بمدينة محمد بن زايد:</p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:24px;margin:30px 0;">
        <div style="background:#1d1e1c;border:1px solid #383a34;border-radius:4px;padding:16px;">
          <h4 style="color:var(--bronze);margin-bottom:12px;font-size:16px;">فيديو 1: جولة في صالة الاستقبال والثريات الكريستالية</h4>
          <video controls playsinline preload="metadata" style="width:100%;border-radius:3px;background:#000;">
            <source src="/assets/alketbi-project/alketbi-villa-walkthrough-1.mp4" type="video/mp4">
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
          <p style="font-size:13px;color:#c5c7be;margin-top:10px;line-height:1.6;">فيديو يوضح حالة الثريات الكريستالية والصرر الجبسية وإضاءات الكوف بعد 7 سنوات من التنفيذ، دون أي تشقق في الفواصل أو هبوط في الأسقف.</p>
        </div>

        <div style="background:#1d1e1c;border:1px solid #383a34;border-radius:4px;padding:16px;">
          <h4 style="color:var(--bronze);margin-bottom:12px;font-size:16px;">فيديو 2: جولة البانوهات والأسقف الدائرية المتدرجة</h4>
          <video controls playsinline preload="metadata" style="width:100%;border-radius:3px;background:#000;">
            <source src="/assets/alketbi-project/alketbi-villa-walkthrough-2.mp4" type="video/mp4">
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
          <p style="font-size:13px;color:#c5c7be;margin-top:10px;line-height:1.6;">فيديو يبرز صلابة واستقامة زوايا الجدران والبانوهات الجدارية والأسقف المنحنية، مع الحفاظ الكامل على رونق الدهان الأبيض الناصع.</p>
        </div>
      </div>

      <h2>7. النتيجة الحقيقية: من معركة هندسية حامية إلى دعوة عشاء وصداقة عمر</h2>
      <p>عندما تم تسليم الفيلا بنجاح عام 2020، أدرك السيد علي الكتبي الفرق الجوهري بين مقاول يسعى للربح السريع على حسابه، وبين شركة هندسية أمينة اعتبرت فيلته بمثابة بيتها الخاص، وحاربت المقاول والاستشاري دفاعاً عن سلامة أمواله واستثمار أسرته. وتقديراً لهذا الموقف النبيل والنزاهة المهنية الفائقة، أقام السيد علي الكتبي مأدبة عشاء خاصة في فيلته الجديدة تكريماً لمؤسس شركة نسق وأسرته الكريمة، لتبدأ من تلك اللحظة صداقة عائلية وأخوية وثيقة ممتدة حتى اليوم.</p>

      <p>وقبل أيام قليلة، وبعد مرور 7 سنوات على التسليم، تشرفنا بزيارة أخينا وصديقنا العزيز السيد علي الكتبي مجدداً في فيلته العامرة بحوض 24. وكما تؤكد الصور ومقاطع الفيديو الحية، فإن الفيلا لا تزال بحالة "الوكالة" التامة:</p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;margin:24px 0;">
        <div style="background:#222321;padding:16px;border-radius:2px;border-right:3px solid var(--bronze);">
          <strong style="color:var(--bronze);font-size:20px;display:block;">0.0 ملم</strong>
          <span style="color:#fff;font-size:13px;font-weight:600;">نسبة الهبوط في السقف</span>
          <p style="color:#b2b4a8;font-size:12px;margin-top:4px;">ثبات مطلق لنظام تعليق الثريات الكريستالية الثقيلة على مدار 7 سنوات من الحمل المستمر.</p>
        </div>
        <div style="background:#222321;padding:16px;border-radius:2px;border-right:3px solid var(--bronze);">
          <strong style="color:var(--bronze);font-size:20px;display:block;">صفر</strong>
          <span style="color:#fff;font-size:13px;font-weight:600;">شروخ شعرية</span>
          <p style="color:#b2b4a8;font-size:12px;margin-top:4px;">لا توجد أي شروخ ترييح في فواصل ألواح الجبس أو زوايا البانوهات الجدارية بفضل معالجة الأساسات.</p>
        </div>
        <div style="background:#222321;padding:16px;border-radius:2px;border-right:3px solid var(--bronze);">
          <strong style="color:var(--bronze);font-size:20px;display:block;">100%</strong>
          <span style="color:#fff;font-size:13px;font-weight:600;">ثبات وتماسك الدهانات</span>
          <p style="color:#b2b4a8;font-size:12px;margin-top:4px;">دهانات Level-5 محتفظة بنعومتها ولمعانها الأصلي دون أي تقشر أو اصفرار بجوار فتحات التكييف.</p>
        </div>
      </div>

      <h2>8. نصائح ذهبية لكل مواطن يقبل على تشطيب فيلته في أبوظبي</h2>
      <p>يقدم درس فيلا السيد علي الكتبي في مدينة محمد بن زايد دليلاً عملياً لا يقدر بثمن لكل مواطن ومقبل على بناء وتشطيب فيلا في أبوظبي (سواء في مدينة محمد بن زايد، مدينة خليفة، المشرف، البطين، أو شاطئ الراحة):</p>

      <ol>
        <li><strong>افصل عقد الديكور الداخلي عن المقاول الإنشائي:</strong> لا تجعل المقاول الرئيسي يتحكم في كل شيء. وجود مقاول ديكور داخلي مستقل ومعتمد يجعله عينك الساهرة في الموقع لكشف أي تقصير إنشائي قبل تغطيته.</li>
        <li><strong>اشترط التثبيت في الصبة الخرسانية للثريات الكبيرة:</strong> لا تقبل أبداً بتثبيت الثريات التي تزن أكثر من 15 كجم في صاج الجبس بورد. اطلب فحص تثبيت التيودورات في الصبة الخرسانية بالليزر قبل إغلاق الأسقف.</li>
        <li><strong>ارفض إخفاء أي شرخ إنشائي بالجبس:</strong> إذا لاحظت شروخاً في الطابوق أو الأسقف، أوقف العمل فوراً واطلب حقنها بالإيبوكسي الإنشائي واعتماد الاستشاري لإصلاح العظم أولاً.</li>
        <li><strong>اختر شركة ديكور مرخصة تقدم ضماناً خطياً حقيقياً:</strong> تأكد من ترخيص الشركة لدى دائرة التنمية الاقتصادية في أبوظبي (ADDED) وحصولك على ضمان خطي 12 شهراً ضد الشروخ وعيوب المصنعية.</li>
      </ol>

      <!-- Frequently Asked Questions -->
      <section class="section pale" style="margin-top:50px;padding:35px;border-radius:4px;" id="faq">
        <h3 style="font-size:24px;margin-bottom:24px;color:#fff;">الأسئلة الشائعة حول تشطيب الفلل في أبوظبي (FAQ)</h3>
        <div style="display:flex;flex-direction:column;gap:20px;">
          
          <article class="faq-card">
            <h4>لماذا يجب على مالك الفيلا الاستعانة بشركة ديكور مستقلة بدلاً من الاعتماد على مقاول البناء الرئيسي؟</h4>
            <p>مقاول البناء الرئيسي يركز على سرعة صب الخرسانة وبناء الهيكل العظمي، وغالباً ما يعتمد في الديكور على عمالة باليومية بأقل التكاليف. كما أن العلاقة بين المقاول والاستشاري قد تؤدي أحياناً إلى التغاضي عن عيوب الترييح والشروخ لتسريع استلام المشروع. الاستعانة بشركة ديكور متخصصة ومستقلة مثل نسق يضمن لك مهندسين يمثلون مصلحتك حصراً، ويفحصون الجدران بالليزر، ويكشفون أي غش أو عيوب خفية قبل تطبيق الديكور النهائي.</p>
          </article>

          <article class="faq-card">
            <h4>هل يمكن إخفاء شروخ الجدران والأسقف بألواح الجبس بورد بأمان؟</h4>
            <p>قطعاً لا. تغطية شروخ الهيكل الإنشائي أو جدران الطابوق بالجبس بورد دون معالجتها بحقن الإيبوكسي وتدعيمها هندسياً يُعد خطأً جسيماً وتضليلاً للمالك. فالحركة الإنشائية ستنتقل خلال أشهر قليلة إلى ألواح الجبس، مما يؤدي إلى تشقق الفواصل وتقشر الدهانات واحتمال هبوط الأسقف.</p>
          </article>

          <article class="faq-card">
            <h4>كيف تضمن شركة نسق تثبيت الثريات الكريستالية الثقيلة في الأسقف العالية؟</h4>
            <p>وفقاً لضمان نسق الهندسي رقم 01، يُمنع منعاً باتاً تعليق الثريات على صاج الجبس أو الطابوق المفرغ. نقوم بزرع هياكل حديد Unistrut مجلفنة مباشرة في الصبة الخرسانية المسلحة للخرسانة بواسطة براغي صلب 8.8 وتيودورات محسوبة لتحمل 10 أضعاف وزن الثريا مع عزل كامل ضد الاهتزازات.</p>
          </article>

          <article class="faq-card">
            <h4>أين يقع هذا المشروع في أبوظبي؟</h4>
            <p>تقع هذه الفيلا في مدينة محمد بن زايد (MBZ)، حوض 24، في أبوظبي، بجوار لولو ماركت (هايبرماركت) الجديد. تم تنفيذ المشروع عام 2020، وتمت إعادة فحصه في عام 2026 ليتبين أنه لا يزال بلا أي شروخ كالجديد تماماً.</p>
          </article>

          <article class="faq-card">
            <h4>ما هي الضمانات التي تقدمها نسق على تشطيب الفلل؟</h4>
            <p>تقدم نسق ضماناً خطياً لمدة 12 شهراً ضد عيوب المصنعية والشروخ مدعوماً بضماناتنا الست الصارمة. وكما أثبتت تجربة فيلا السيد علي الكتبي في مدينة محمد بن زايد، فإن معاييرنا الهندسية تحافظ على جمال الديكور وصلابته لسنوات طويلة.</p>
          </article>

        </div>
      </section>

      <!-- CTA Box -->
      <div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">
        <h4 style="color:var(--bronze);font-size:18px;">هل تخطط لتشطيب فيلا أو مجلس فاخر في أبوظبي؟</h4>
        <p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">اختر شركة مقاولات ديكور تحمي استثمارك بأمانة هندسية مطلقة وتطبيق حرفي دقيق. شاركنا أفكارك، صورك من بنترست، أو مخططاتك ثلاثية الأبعاد (3D) لمراجعتها وتقديم مقايسة أسعار تفصيلية وجدول زمني دقيق مع رفع مساحي مجاني بالليزر خلال 24 إلى 48 ساعة.</p>
        <div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">
          <a class="button" href="/ar/contact/">طلب عرض أسعار مفصل</a>
          <a class="button" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20قرأت%20قصة%20فيلا%20علي%20الكتبي%20وأود%20استشارة%20لتشطيب%20فيلتي." style="background:#fff;color:#151613;border-color:#fff;">تحدث مع مهندسينا عبر واتساب</a>
        </div>
      </div>

      <!-- Related Guides -->
      <div class="related-insights" style="margin-top:60px;border-top:1px solid #e2e3de;padding-top:40px;">
        <h3 style="font-size:24px;margin-bottom:24px;">مقالات هندسية وأدلة ذات صلة بتشطيب الفلل في الإمارات</h3>
        <div class="insights-grid">
          <a class="article-card" href="/ar/insights/abu-dhabi-luxury-villa-majlis-fitout-guide/">
            <img class="article-card-img" src="/assets/villa.webp" alt="دليل تشطيب الفلل الفاخرة والمجالس الحديثة في أبوظبي" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">تشطيب الفلل والمجالس الفاخرة</span>
              <h4>دليل تشطيب الفلل الفاخرة والمجالس الحديثة في أبوظبي: البطين، مدينة خليفة، والمشرف</h4>
              <p>الدليل الشامل لتشطيب الفلل الفاخرة، مجالس الرجال والصالات الكبيرة، تكسيات الجدران، وتطبيق التصاميم ثلاثية الأبعاد (3D) بدقة متناهية دون مماطلة في أبوظبي.</p>
            </div>
          </a>
          <a class="article-card" href="/ar/insights/saadiyat-island-72-hour-fit-out-case-study/">
            <img class="article-card-img" src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="دراسة حالة تشطيب شقة سوهو ريزيدنس جزيرة السعديات" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">تنفيذ واقعي ودراسة حالة</span>
              <h4>سوهو ريزيدنس جزيرة السعديات: دراسة حالة تشطيب بانوهات جدارية وجبس بورد خلال 72 ساعة</h4>
              <p>توثيق عملي لتحويل شقة فاخرة في بلوك A بسوهو ريزيدنس جزيرة السعديات في 72 ساعة مع تقييم موثق من العميلة على Google.</p>
            </div>
          </a>
        </div>
      </div>

    </div></article></main><footer><div><span class="wordmark">نسق <span lang="en">NASAQ</span></span><p>تناغم في المساحات.</p><p class="small">شركة نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م<br>أبوظبي، دولة الإمارات العربية المتحدة</p></div><div><a href="tel:+971505334861">+971 50 533 4861</a><a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a><a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a><a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">إنستغرام · @nasaq.fitout</a><a href="https://share.google/jD1fYkpZ96pX0pQPN" target="_blank" rel="noopener noreferrer">خرائط Google · ملف نسق</a></div><div><a href="/ar/services/">خدماتنا</a><a href="/ar/insights/">المقالات والأدلة</a><a href="/ar/about/">عن نسق</a><a href="/ar/contact/">ابدأ محادثة</a><p class="small">© 2026 نسق</p></div></footer><a class="floating" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20طلب%20استشارة%20لتشطيب%20فيلا%20أو%20مجلس." aria-label="تواصل مع نسق عبر الواتساب">واتساب</a></body></html>`;

// Write HTML files
fs.writeFileSync(path.join(enDir, 'index.html'), enHtml, 'utf8');
fs.writeFileSync(path.join(arDir, 'index.html'), arHtml, 'utf8');
console.log('✅ Generated Ali Al Ketbi MBZ Zone 24 Case Study (EN & AR)');

// 3. Update Insights Hubs (dist/insights/index.html & dist/ar/insights/index.html)
const enHubPath = path.join(DIST_DIR, 'insights', 'index.html');
let enHub = fs.readFileSync(enHubPath, 'utf8');
const enLink = `/insights/${caseStudy.slug}/`;
if (!enHub.includes(enLink)) {
  const enCard = `
          <a class="article-card" href="${enLink}">
            <img class="article-card-img" src="${caseStudy.image}" alt="${caseStudy.titleEn.split('|')[0].trim()}" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">${caseStudy.badgeEn}</span>
              <h3>${caseStudy.titleEn.split('|')[0].trim()}</h3>
              <p>${caseStudy.summaryEn}</p>
              <div class="article-card-meta">
                <span>${caseStudy.readTimeEn}</span> • <span>Read Case Study →</span>
              </div>
            </div>
          </a>
`;
  enHub = enHub.replace('<div class="insights-grid">', `<div class="insights-grid">${enCard}`);
  fs.writeFileSync(enHubPath, enHub, 'utf8');
  console.log('✅ Added case study card to dist/insights/index.html');
}

const arHubPath = path.join(DIST_DIR, 'ar', 'insights', 'index.html');
let arHub = fs.readFileSync(arHubPath, 'utf8');
const arLink = `/ar/insights/${caseStudy.slug}/`;
if (!arHub.includes(arLink)) {
  const arCard = `
          <a class="article-card" href="${arLink}">
            <img class="article-card-img" src="${caseStudy.image}" alt="${caseStudy.titleAr.split('|')[0].trim()}" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">${caseStudy.badgeAr}</span>
              <h3>${caseStudy.titleAr.split('|')[0].trim()}</h3>
              <p>${caseStudy.summaryAr}</p>
              <div class="article-card-meta">
                <span>${caseStudy.readTimeAr}</span> • <span>اقرأ قصة النجاح ←</span>
              </div>
            </div>
          </a>
`;
  arHub = arHub.replace('<div class="insights-grid">', `<div class="insights-grid">${arCard}`);
  fs.writeFileSync(arHubPath, arHub, 'utf8');
  console.log('✅ Added case study card to dist/ar/insights/index.html');
}

// 4. Update dist/sitemap.xml with both URLs, Google Image schemas and Google Video schemas
const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

if (!sitemap.includes(caseStudy.slug)) {
  const sitemapEntry = `  <url>
    <loc>https://nasaqfitout.ae/insights/${caseStudy.slug}/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"/>
    <xhtml:link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"/>
    <lastmod>${caseStudy.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://nasaqfitout.ae${caseStudy.image}</image:loc>
      <image:title>${caseStudy.titleEn.split('|')[0].trim().replace(/&/g, '&amp;')}</image:title>
    </image:image>
    <video:video>
      <video:thumbnail_loc>https://nasaqfitout.ae/assets/alketbi-project/ceiling-chandeliers-rosette.jpg</video:thumbnail_loc>
      <video:title>Mr. Ali Al Ketbi Villa MBZ City Zone 24 7-Year Ceiling &amp; Chandelier Walkthrough</video:title>
      <video:description>Inspection walkthrough showing neoclassical ceilings, dual grand crystal chandeliers, and handcrafted rosettes remaining 100% crack-free 7 years after completion in Mohammed Bin Zayed City, Abu Dhabi.</video:description>
      <video:content_loc>https://nasaqfitout.ae/assets/alketbi-project/alketbi-villa-walkthrough-1.mp4</video:content_loc>
      <video:publication_date>${caseStudy.date}T08:00:00+04:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>
  <url>
    <loc>https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"/>
    <lastmod>${caseStudy.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://nasaqfitout.ae${caseStudy.image}</image:loc>
      <image:title>${caseStudy.titleAr.split('|')[0].trim().replace(/&/g, '&amp;')}</image:title>
    </image:image>
    <video:video>
      <video:thumbnail_loc>https://nasaqfitout.ae/assets/alketbi-project/ceiling-chandeliers-rosette.jpg</video:thumbnail_loc>
      <video:title>توثيق تشطيب فيلا السيد علي الكتبي في مدينة محمد بن زايد حوض 24</video:title>
      <video:description>فيديو توثيقي يوضح أسقف الجبس النيوكلاسيكية والثريات الكريستالية الضخمة لا تزال بحالة الوكالة وبلا أي شروخ بعد مرور 7 سنوات على تنفيذها في مدينة محمد بن زايد بأبوظبي.</video:description>
      <video:content_loc>https://nasaqfitout.ae/assets/alketbi-project/alketbi-villa-walkthrough-1.mp4</video:content_loc>
      <video:publication_date>${caseStudy.date}T08:00:00+04:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>\n`;

  sitemap = sitemap.replace('</urlset>', `${sitemapEntry}</urlset>`);
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ Updated dist/sitemap.xml with 2 new URLs (Total 56 URLs)');
}

// 5. Update dist/llms.txt
const llmsPath = path.join(DIST_DIR, 'llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');
if (!llms.includes(caseStudy.slug)) {
  const enEntry = `\n- [${caseStudy.titleEn.split('|')[0].trim()}](https://nasaqfitout.ae/insights/${caseStudy.slug}/): ${caseStudy.summaryEn}`;
  llms = llms.replace('## Summary & Core Competency', `${enEntry}\n\n## Summary & Core Competency`);

  const arEntry = `\n- [${caseStudy.titleAr.split('|')[0].trim()}](https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/): ${caseStudy.summaryAr}`;
  llms = llms.replace('## الخلاصة والكفاءة الجوهرية لشركة نسق', `${arEntry}\n\n## الخلاصة والكفاءة الجوهرية لشركة نسق`);

  fs.writeFileSync(llmsPath, llms, 'utf8');
  console.log('✅ Updated dist/llms.txt with bilingual case study');
}

// 6. Update dist/ai-catalog.json & dist/.well-known/ai-catalog.json
const aiCatalogPath = path.join(DIST_DIR, 'ai-catalog.json');
const wellKnownCatalogPath = path.join(DIST_DIR, '.well-known', 'ai-catalog.json');

[aiCatalogPath, wellKnownCatalogPath].forEach(target => {
  if (fs.existsSync(target)) {
    const catalog = JSON.parse(fs.readFileSync(target, 'utf8'));
    const entry = catalog.entries.find(e => e.identifier === 'urn:air:nasaqfitout.ae:knowledge:llms-txt');
    if (entry) {
      const newCaps = ['MBZCityVillaFitOut', 'HeavyChandelierSlabMounting', 'StructuralDefectWhistleblowing'];
      newCaps.forEach(c => {
        if (!entry.capabilities.includes(c)) entry.capabilities.push(c);
      });
      const newQueries = [
        'تشطيب فيلا علي الكتبي غدير في مدينة محمد بن زايد',
        'كشف عيوب المقاول والاستشاري في تشطيب الفلل أبوظبي',
        'تركيب وتثبيت ثريات كريستال ثقيلة في السقف الخرساني أبوظبي',
        'قصة نجاح تشطيب فيلا في حوض 24 مدينة محمد بن زايد نسق',
        'Ali Al Ketbi villa fitout MBZ City Zone 24 Abu Dhabi',
        'How contractors hide structural cracks with gypsum board in UAE villas',
        'Heavy chandelier structural unistrut slab mounting Abu Dhabi',
        'Independent interior fit-out implementation contractor MBZ City'
      ];
      newQueries.forEach(q => {
        if (!entry.representativeQueries.includes(q)) entry.representativeQueries.push(q);
      });
      fs.writeFileSync(target, JSON.stringify(catalog, null, 2), 'utf8');
      console.log(`✅ Updated ${path.relative(DIST_DIR, target)}`);
    }
  }
});

console.log('\n🚀 Ali Al Ketbi MBZ Zone 24 Case Study successfully built and integrated!');
