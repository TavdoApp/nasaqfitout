/**
 * NASAQ FITOUT - Build Case Study for Yas Island Yas North (YN7) - Noya / Noya Viva Villa Fit-Out
 * 
 * Features:
 * - Turnkey villa interior fit-out in Yas North (YN7), Aldar master communities (Noya, Noya Viva, Noya Luma)
 * - Collaboration with an engineer client: strict tolerances, complete MEP/MD submittals, flawless execution
 * - Curved concentric ceiling trays, hand-sculpted rosettes, AC linear diffusers, diagonal staircase boiserie
 * - 5 High-res photos of finished spaces (sunlit living salon, staircase boiserie, master bedroom ceiling, hallway)
 * - Rich JSON-LD Schemas: Article, HomeAndConstructionBusiness, BreadcrumbList, FAQPage
 * - Bilingual parity (EN & AR) with strict trailing-slash canonicals and reciprocal hreflang
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const enDir = path.join(DIST_DIR, 'insights', 'yas-island-noya-villa-fitout-yn7-case-study');
const arDir = path.join(DIST_DIR, 'ar', 'insights', 'yas-island-noya-villa-fitout-yn7-case-study');

[enDir, arDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

const caseStudy = {
  slug: 'yas-island-noya-villa-fitout-yn7-case-study',
  badgeEn: 'Yas Island YN7 · Noya Villa Case Study',
  badgeAr: 'شمال جزيرة ياس YN7 · دراسة حالة فلل نويا',
  readTimeEn: '8 min read',
  readTimeAr: 'قراءة 8 دقائق',
  image: '/assets/yas-noya-project/curved-ceiling-rosettes-ac-slots.jpg',
  date: '2026-11-08',
  
  // SEO Metadata
  titleEn: 'Yas Island Noya Villa Fit-Out Case Study: Engineer-Approved Gypsum, LED Coves & Boiserie in Yas North YN7 | NASAQ',
  descEn: 'Turnkey interior fit-out case study in Yas North YN7 (Noya / Noya Viva), Yas Island, Abu Dhabi. Executed to rigorous engineering standards: curved ceiling trays, linear AC diffusers, staircase boiserie, and Level-5 finish.',
  summaryEn: 'Authoritative case study of a luxury villa fit-out in Yas North sector (YN7), home to Aldar\'s Noya, Noya Viva, and Noya Luma communities on Yas Island. Details how NASAQ executed a client engineer\'s technical drawings, managing complete MD approvals, curved concentric false ceilings with sculpted rosettes, diagonal staircase wall boiserie, and seamless AC linear slot integration.',

  titleAr: 'قصة نجاح تشطيب فيلا نويا شمال جزيرة ياس (YN7): هندسة الجبس، إضاءات LED والبانوهات الجدارية | نسق',
  descAr: 'دراسة حالة واقعية لتشطيب فيلا متكامل في قطاع شمال ياس (YN7) بمجتمعات نويا ونويا فيفا: تنفيذ مخططات العميل المهندس بدقة متناهية، اعتماد ملفات المواد، أسقف منحنية، بانوهات الدرج، وتكامل التكييف.',
  summaryAr: 'دراسة حالة فنية لتشطيب فيلا بمشروع نويا (Noya) في قطاع شمال جزيرة ياس (YN7) بأبوظبي. توثق تنفيذ نسق للتصميم المعتمد من العميل المهندس، شاملاً اعتماد ملفات المواد (MD)، وتفصيل الأسقف المنحنية ذات الصرر الملكية، وبانوهات الدرج المائلة، ودمج فتحات التكييف الخطية وإضاءات الـ LED بأعلى معايير الإتقان.'
};

// 1. Generate English HTML
const enHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${caseStudy.titleEn}</title><meta name="description" content="${caseStudy.descEn}"><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=6"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="Yas Island Yas North YN7, Abu Dhabi"><meta name="geo.position" content="24.4980;54.6150"><meta name="ICBM" content="24.4980, 54.6150"><meta property="og:type" content="article"><meta property="og:site_name" content="NASAQ Fit-Out"><meta property="og:title" content="${caseStudy.titleEn}"><meta property="og:description" content="${caseStudy.descEn}"><meta property="og:url" content="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><meta property="og:image" content="https://nasaqfitout.ae${caseStudy.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${caseStudy.titleEn}"><meta name="twitter:description" content="${caseStudy.descEn}"><meta name="twitter:image" content="https://nasaqfitout.ae${caseStudy.image}"><script type="application/ld+json">
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
        "Yas Island",
        "Yas North",
        "YN7",
        "Noya",
        "Noya Viva",
        "Noya Luma",
        "Yas Acres",
        "Water's Edge",
        "Saadiyat Island",
        "Abu Dhabi"
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
      "headline": "Yas Island Noya Villa Fit-Out Case Study: Engineer-Approved Gypsum, LED Coves & Boiserie in Yas North YN7",
      "description": "${caseStudy.descEn}",
      "inLanguage": "en",
      "mainEntityOfPage": "https://nasaqfitout.ae/insights/${caseStudy.slug}/",
      "datePublished": "2026-11-08T12:00:00+04:00",
      "dateModified": "2026-11-08T12:00:00+04:00",
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
          "name": "Yas Island Noya YN7 Villa Case Study",
          "item": "https://nasaqfitout.ae/insights/${caseStudy.slug}/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://nasaqfitout.ae/insights/${caseStudy.slug}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does NASAQ undertake turnkey villa renovations in Noya, Noya Viva, and Noya Luma on Yas Island?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. NASAQ is an authorized interior fit-out contractor with active projects across Yas North sector (YN7), specifically Aldar communities including Noya, Noya Viva, and Noya Luma. We handle developer NOCs, Aldar community management gate passes, security deposits, and turnkey execution."
          }
        },
        {
          "@type": "Question",
          "name": "How does NASAQ execute designs provided directly by an engineer client?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When clients provide their own CAD drawings or architectural concepts, our engineering department reviews all material submittals (MD files), prepares precise MEP coordination shop drawings, and executes on-site with laser verification to ensure strict engineering tolerance compliance."
          }
        },
        {
          "@type": "Question",
          "name": "How are AC linear slot diffusers integrated without causing ceiling condensation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In modern villas across Yas Island, NASAQ installs insulated plenum boxes lined with acoustic glass-wool and calculates supply air velocity to prevent thermal bridging. This ensures clean, flush black linear slots without ceiling moisture condensation or paint yellowing."
          }
        },
        {
          "@type": "Question",
          "name": "What type of wall mouldings were installed along the staircase in this Noya villa?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NASAQ engineered custom diagonal boiserie panelling that precisely follows the rake and incline of the staircase stringer. The double-frame mouldings are laser-leveled and anchored with elastomeric adhesives to absorb structural vibration caused by foot traffic."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can NASAQ complete a villa fit-out in Noya Yas Island?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For standard 2-bedroom to 4-bedroom townhouses and villas in Noya and Noya Viva, our turnkey decorative scope (false ceilings, LED coves, boiserie, and painting) is typically delivered within 2 to 4 weeks under strict Milestone SLAs."
          }
        }
      ]
    }
  ]
}
</script></head><body><a class="skip" href="#main">Skip to content</a><header><a class="brand" href="/" aria-label="NASAQ home"><img src="/assets/logo.svg" alt="NASAQ approved logo" width="500" height="500"></a><nav aria-label="Main navigation"><a href="/services/">Services</a><a href="/projects/">Concepts</a><a href="/insights/">Insights</a><a href="/about/">About</a><a href="/contact/">Contact</a></nav><a class="lang-switch" href="/ar/insights/${caseStudy.slug}/" aria-label="النسخة العربية">العربية</a><a class="navcta" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project.">Discuss your project</a><button id="menu" aria-label="Open navigation" aria-expanded="false">Menu</button></header><main id="main"><div class="breadcrumbs"><a href="/">Home</a> / <a href="/insights/">Insights</a> / <span>Yas Island Noya YN7 Villa Case Study</span></div><article class="article-container"><div class="article-header"><span class="article-badge">${caseStudy.badgeEn}</span><h1>${caseStudy.titleEn.split('|')[0].trim()}</h1><div class="article-meta-row"><span>By NASAQ Engineering Team</span><span>•</span><span>${caseStudy.readTimeEn}</span><span>•</span><span>Yas North YN7, Yas Island</span><span>•</span><span>Updated Nov 2026</span></div></div><img class="article-featured-img" src="${caseStudy.image}" alt="Curved concentric ceiling trays with sculpted floral rosettes and AC linear slot diffuser in Yas North Noya villa" width="1024" height="1024" loading="eager"><div class="article-content">

      <!-- Executive Project Summary Card -->
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px;border-bottom:1px solid #383a34;padding-bottom:12px;">
          <strong style="color:var(--bronze);font-size:18px;">PROJECT ARCHIVE · YAS NORTH SECTOR (YN7)</strong>
          <span style="background:var(--bronze);color:#181918;font-size:12px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:0.5px;">ENGINEER CLIENT · COMPLETE MD & MEP APPROVALS</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;font-size:14px;color:#d8d9d0;">
          <div><strong style="color:#fff;">Master Development:</strong> Yas North Sector (Designated in Zoning as YN7)</div>
          <div><strong style="color:#fff;">Target Communities:</strong> Noya, Noya Viva, and Noya Luma (Aldar Properties)</div>
          <div><strong style="color:#fff;">Client Profile:</strong> Professional Engineer (Client-Supplied Design Drawings)</div>
          <div><strong style="color:#fff;">Key Technical Scope:</strong> Complete MD & MEP Submittals, Curved Concentric Ceiling Trays, Hand-Sculpted Rosettes, Black AC Linear Slot Diffusers, Diagonal Staircase Boiserie</div>
          <div><strong style="color:#fff;">Lighting Architecture:</strong> Warm Indirect LED Perimeter Coves & Recessed Fixtures</div>
          <div><strong style="color:#fff;">Handover Standard:</strong> Level-5 Dead-Flat Pure White Jotun Finish</div>
        </div>
      </div>

      <p class="article-lead">On northern Yas Island, the <strong>Yas North sector (zoned under Abu Dhabi master planning as YN7)</strong> has evolved into one of the capital's most vibrant residential hubs. Home to Aldar’s master-planned villa and townhouse communities—including <strong>Noya, Noya Viva, and Noya Luma</strong>—this district attracts discerning homeowners and professionals who value contemporary architecture, smart spatial layouts, and rapid handover execution.</p>

      <p>This technical case study documents the turnkey interior fit-out executed by NASAQ for a <strong>professional engineer client</strong> in <strong>Yas North (YN7)</strong>. It demonstrates how NASAQ bridges technical engineering rigour with refined classical artistry: managing complete material documentation (MD files), precision shop drawings, curved geometric gypsum ceilings, flush linear AC diffusers, architectural LED lighting, and diagonal staircase boiserie—all delivered to millimeter tolerances under strict developer compliance.</p>

      <h2>1. The Engineer Client Advantage: Rigorous Technical Standards</h2>
      <p>Working for an engineer client creates a unique set of demanding benchmarks. Unlike typical residential clients who evaluate interiors purely on visual aesthetics, an engineer inspects behind the drywall:</p>
      
      <ul>
        <li><strong>Material Submittal Dossiers (MD Files):</strong> Every single component—from Knauf moisture-resistant gypsum boards to Jotun Fenomastic primers and low-smoke zero-halogen (LSZH) electrical wiring—underwent formal technical submission and compliance verification.</li>
        <li><strong>Structural Framing Deflection Limits:</strong> Ceiling furring channels were engineered to exceed L/360 deflection standards, eliminating surface sag under HVAC vibration.</li>
        <li><strong>Thermal & Airflow Calculations:</strong> Integrating sleek black linear slot diffusers within false ceiling stepped coves without creating condensation cold spots.</li>
      </ul>

      <p>NASAQ’s certified on-site engineering team embraced these rigorous standards, translating the client’s architectural blueprints into reality with zero compromise.</p>

      <h2>2. Master Bedroom Ceiling: Concentric Curved Trays & Floral Rosettes</h2>
      <p>The centerpiece of the private quarters is an extraordinary neoclassical ceiling configuration combining curved geometry with artisanal plaster medallions:</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/yas-noya-project/curved-ceiling-rosettes-ac-slots.jpg" alt="Curved concentric ceiling trays with sculpted floral rosettes and AC linear slot diffuser in Yas North Noya villa" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 1: The master suite ceiling in Yas North YN7. Two concentric curved ceiling stepped bulkheads frame three hand-sculpted floral medallions, paired with an integrated continuous AC linear slot diffuser.</p>
      </div>

      <p>As captured in Photo 1, the ceiling breaks away from conventional rectangular boxes. NASAQ’s master craftsmen hand-bent flexible galvanized framing to establish concentric curved stepped bulkheads. Inside the oval field, three ornate plaster medallions provide visual weight and suspension anchors for decorative fixtures, finished in Level-5 Jotun ultra-smooth white.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/yas-noya-project/bedroom-boiserie-ceiling-rosette.jpg" alt="Upward corner view showing neoclassical wall mouldings framing windows, dentil ceiling cornice, and central floral plaster rosette in Noya villa" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 2: Corner junction in the private suite. Notice the harmonious transition between the stepped ceiling tray, dentil perimeter cornice, central floral rosette, and symmetrical wall boiserie framing the window.</p>
      </div>

      <h2>3. Precision Geometry: Diagonal Staircase Wall Boiserie</h2>
      <p>In multi-floor villas across Noya and Noya Viva, the staircase wall is the most prominent vertical plane in the home. Yet, it is notoriously difficult to panel because the moulding angles must follow the exact mathematical incline (rake) of the staircase stringer.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/yas-noya-project/staircase-diagonal-boiserie-mouldings.jpg" alt="Diagonal stepped double-frame boiserie wall mouldings following the staircase angle with electrical sconce wiring in Noya villa" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 3: The grand staircase wall. NASAQ laser-mapped the staircase incline to install double-frame stepped boiserie mouldings with pre-wired conduits for modern architectural wall sconces.</p>
      </div>

      <p>Under NASAQ’s installation protocol, each diagonal miter was cut with digital compound miter saws to 0.1-degree precision. High-density elastomeric adhesives and mechanical micro-pins secure the frames against masonry, ensuring that the vibrations from daily foot traffic never create hairline cracks along the plaster joints.</p>

      <h2>4. Sunlit Salon: Seamless AC Linear Diffusers & Indirect LED Coves</h2>
      <p>In the main family salon, floor-to-ceiling sliding glass doors open onto the garden terrace, flooding the interior with bright natural daylight. This level of daylight exposure mercilessly exposes any ceiling imperfection or joint tape line.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/yas-noya-project/sunlit-salon-stepped-ceiling-cove.jpg" alt="Sunlit modern salon with floor-to-ceiling glass doors, rectangular stepped ceiling bulkhead, perimeter LED cove, and black linear AC slots in Yas Island" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 4: Main ground-floor salon. Rectangular stepped ceiling bulkhead featuring hidden perimeter LED cove illumination, discreet black AC linear slot diffusers, and pendant light pre-wiring under full natural daylight.</p>
      </div>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/yas-noya-project/hallway-corridor-boiserie-staircase.jpg" alt="Hallway corridor perspective showing protected staircase during handover, high-wall boiserie panelling, and clean modern finishes in Noya Yas North" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 5: Central circulation hallway during handover preparation. Protective staircase wrap, wall-length boiserie panels, and pristine tile floor reflection demonstrate NASAQ's strict site housekeeping.</p>
      </div>

      <h2>5. Fast-Track Handover for Noya, Noya Viva & Noya Luma Homeowners</h2>
      <p>For hundreds of property owners currently receiving handover notices from Aldar in <strong>Noya, Noya Viva, and Noya Luma</strong>, managing interior upgrades without contractor delays or HOA disputes is critical. NASAQ provides a seamless turnkey experience:</p>

      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin:28px 0;padding:24px;">
        <h4 style="color:var(--bronze);font-size:16px;margin-bottom:10px;">The NASAQ Turnkey Standard in Yas North (YN7):</h4>
        <ul style="color:#d8d9d0;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
          <li><strong>Complete Developer Gate Passes:</strong> Full compliance with Aldar Estates regulations, security deposits, and contractor insurance coverage.</li>
          <li><strong>Dust-Free HEPA Handover:</strong> Comprehensive surface protection (stair tread wraps, floor corriboard) and industrial HEPA vacuum de-dusting before key handover.</li>
          <li><strong>Fast-Track Delivery (2 to 4 Weeks):</strong> Milestone-based execution ensuring you move into your newly handed-over home without months of rental overlap.</li>
          <li><strong>12-Month Written Warranty:</strong> Legally binding guarantee covering all gypsum joints, paint finishes, and electrical cove LED installations.</li>
        </ul>
      </div>

      <h2>6. Why Yas Island Villa Owners Choose NASAQ</h2>
      <p>Across Yas North (YN7), Yas Acres, and Water's Edge, NASAQ delivers distinct competitive advantages:</p>

      <ol>
        <li><strong>Engineer-Grade Precision:</strong> We read CAD files, calculate MEP loads, and submit complete material submittals (MD files).</li>
        <li><strong>Direct Implementation Contractor:</strong> Zero design studio broker fees—direct trade-by-trade BOQ transparency.</li>
        <li><strong>Acoustic & AC Harmony:</strong> Seamless integration of linear slot diffusers that cool your home efficiently with zero condensation.</li>
        <li><strong>Artisanal Plaster & Wall Mouldings:</strong> From diagonal staircase boiserie to curved ceiling domes, built to last.</li>
      </ol>

      <!-- Frequently Asked Questions -->
      <section class="section pale" style="margin-top:50px;padding:35px;border-radius:4px;" id="faq">
        <h3 style="font-size:24px;margin-bottom:24px;color:#fff;">Frequently Asked Questions (FAQ)</h3>
        <div style="display:flex;flex-direction:column;gap:20px;">
          
          <article class="faq-card">
            <h4>Does NASAQ undertake turnkey villa renovations in Noya, Noya Viva, and Noya Luma on Yas Island?</h4>
            <p>Yes. NASAQ is an authorized interior fit-out contractor with active projects across Yas North sector (YN7), specifically Aldar communities including Noya, Noya Viva, and Noya Luma. We handle developer NOCs, Aldar community management gate passes, security deposits, and turnkey execution.</p>
          </article>

          <article class="faq-card">
            <h4>How does NASAQ execute designs provided directly by an engineer client?</h4>
            <p>When clients provide their own CAD drawings or architectural concepts, our engineering department reviews all material submittals (MD files), prepares precise MEP coordination shop drawings, and executes on-site with laser verification to ensure strict engineering tolerance compliance.</p>
          </article>

          <article class="faq-card">
            <h4>How are AC linear slot diffusers integrated without causing ceiling condensation?</h4>
            <p>In modern villas across Yas Island, NASAQ installs insulated plenum boxes lined with acoustic glass-wool and calculates supply air velocity to prevent thermal bridging. This ensures clean, flush black linear slots without ceiling moisture condensation or paint yellowing.</p>
          </article>

          <article class="faq-card">
            <h4>What type of wall mouldings were installed along the staircase in this Noya villa?</h4>
            <p>NASAQ engineered custom diagonal boiserie panelling that precisely follows the rake and incline of the staircase stringer. The double-frame mouldings are laser-leveled and anchored with elastomeric adhesives to absorb structural vibration caused by foot traffic.</p>
          </article>

          <article class="faq-card">
            <h4>How fast can NASAQ complete a villa fit-out in Noya Yas Island?</h4>
            <p>For standard 2-bedroom to 4-bedroom townhouses and villas in Noya and Noya Viva, our turnkey decorative scope (false ceilings, LED coves, boiserie, and painting) is typically delivered within 2 to 4 weeks under strict Milestone SLAs.</p>
          </article>

        </div>
      </section>

      <!-- CTA Box -->
      <div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">
        <h4 style="color:var(--bronze);font-size:18px;">Received Handover for Your Villa in Noya or Yas North?</h4>
        <p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">Transform your new home with high-precision gypsum ceilings, LED lighting, and bespoke wall mouldings. Contact our site engineers for a detailed BOQ consultation and free 3D laser survey within 24 to 48 hours.</p>
        <div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">
          <a class="button" href="/contact/">Request an itemized quotation</a>
          <a class="button" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20have%20a%20villa%20in%20Noya%20Yas%20Island%20and%20would%20like%20to%20discuss%20fit-out." style="background:#fff;color:#151613;border-color:#fff;">WhatsApp our site engineers</a>
        </div>
      </div>

      <!-- Related Guides -->
      <div class="related-insights" style="margin-top:60px;border-top:1px solid #e2e3de;padding-top:40px;">
        <h3 style="font-size:24px;margin-bottom:24px;">Related Technical Guides & UAE Case Studies</h3>
        <div class="insights-grid">
          <a class="article-card" href="/insights/saadiyat-island-sde3-luxury-villa-handcrafted-fitout-case-study/">
            <img class="article-card-img" src="/assets/saadiyat-sde3-project/grand-chandelier-rosette-fluted-column.jpg" alt="Saadiyat SDE3 Handcrafted Villa Case Study" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">Saadiyat Island & Artisanal Heritage</span>
              <h4>Saadiyat Island SDE3 Villa Fit-Out Case Study: 100-Year Handcrafted Neoclassical Plaster & Moroccan Mastery</h4>
              <p>How NASAQ built 100% on-site handcrafted fluted Roman columns, Corinthian capitals, and 100-year solid Moroccan plaster on Saadiyat Island.</p>
            </div>
          </a>
          <a class="article-card" href="/insights/khalifa-city-luxury-majlis-al-ameri-case-study/">
            <img class="article-card-img" src="/assets/khalifa-city-majlis/grand-khalifa-city-majlis-completed.jpg" alt="Khalifa City A Sector 12 Luxury Majlis Case Study" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">Photo-to-Reality Majlis Craft</span>
              <h4>Khalifa City A Luxury Majlis Case Study: Photo-to-Reality Execution & Zero 3D Fees for Mr. Abdullah Al Ameri</h4>
              <p>How NASAQ executed an inspiration photo into reality with circular ceiling dome, hand-leafed gold boiserie, and zero forced 3D fees.</p>
            </div>
          </a>
        </div>
      </div>

    </div></article></main><footer><div><span class="wordmark">NASAQ <span lang="ar">نسق</span></span><p>Spaces in harmony.</p><p class="small">NASAQ Interior Design Implementation Works – L.L.C – S.P.C<br>Abu Dhabi, United Arab Emirates</p></div><div><a href="tel:+971505334861">+971 50 533 4861</a><a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a><a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a><a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">Instagram · @nasaq.fitout</a><a href="https://share.google/jD1fYkpZ96pX0pQPN" target="_blank" rel="noopener noreferrer">Google Maps · NASAQ Profile</a></div><div><a href="/services/">Our services</a><a href="/insights/">Insights & Guides</a><a href="/about/">About NASAQ</a><a href="/contact/">Start a conversation</a><p class="small">© 2026 NASAQ</p></div></footer><a class="floating" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project." aria-label="Contact NASAQ on WhatsApp">WhatsApp</a></body></html>`;

// 2. Generate Arabic HTML
const arHtml = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${caseStudy.titleAr}</title><meta name="description" content="${caseStudy.descAr}"><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=6"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="شمال جزيرة ياس YN7، أبوظبي"><meta name="geo.position" content="24.4980;54.6150"><meta name="ICBM" content="24.4980, 54.6150"><meta property="og:type" content="article"><meta property="og:site_name" content="نسق للتصميم الداخلي والمقاولات"><meta property="og:title" content="${caseStudy.titleAr}"><meta property="og:description" content="${caseStudy.descAr}"><meta property="og:url" content="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><meta property="og:image" content="https://nasaqfitout.ae${caseStudy.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${caseStudy.titleAr}"><meta name="twitter:description" content="${caseStudy.descAr}"><meta name="twitter:image" content="https://nasaqfitout.ae${caseStudy.image}"><script type="application/ld+json">
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
        "جزيرة ياس",
        "شمال ياس",
        "قطاع YN7",
        "نويا",
        "نويا فيفا",
        "نويا لوما",
        "ياس ايكرز",
        "ووترز ايدج",
        "جزيرة السعديات",
        "أبوظبي"
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
      "headline": "قصة نجاح تشطيب فيلا نويا شمال جزيرة ياس (YN7): هندسة الجبس، إضاءات LED والبانوهات الجدارية",
      "description": "${caseStudy.descAr}",
      "inLanguage": "ar",
      "mainEntityOfPage": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/",
      "datePublished": "2026-11-08T12:00:00+04:00",
      "dateModified": "2026-11-08T12:00:00+04:00",
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
          "name": "فيلا نويا شمال جزيرة ياس YN7",
          "item": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "هل تنفذ شركة نسق مشاريع تشطيب الفلل في مجمعات نويا ونويا فيفا ونويا لوما بجزيرة ياس؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، شركة نسق مقاول تنفيذ معتمد لديه مشاريع قائمة في قطاع شمال جزيرة ياس (YN7)، وتحديداً في مجمعات شركة الدار: نويا، نويا فيفا، ونويا لوما. نتولى استخراج تصاريح الدخول وإيداع التأمينات وإنجاز التشطيب ع المفتاح."
          }
        },
        {
          "@type": "Question",
          "name": "كيف تتعامل نسق مع التصاميم والمخططات المقدمة من العميل المهندس؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "عندما يقدم العميل مخططاته الهندسية الخاصة (CAD)، يقوم قسمنا الهندسي بإعداد واعتماد ملفات المواد (Material Dossier / MD files)، ورسومات الورشة التنفيذية للأعمال الكهروميكانيكية (MEP)، وتطبيق العمل على الموقع بأدق قياسات الليزر لضمان مطابقة معايير التفاوت المسموح بها هندسياً."
          }
        },
        {
          "@type": "Question",
          "name": "كيف يتم دمج فتحات التكييف الطولية (Linear Slot Diffusers) لمنع تكاثف الرطوبة؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "في فلل جزيرة ياس، تقوم نسق بتركيب صناديق توزيع هواء (Plenums) معزولة بالصوف الزجاجي الصوتي وحساب سرعة تدفق الهواء بدقة لمنع الجسور الحرارية، مما يضمن خروج هواء التكييف من الفتحات الخطية السوداء دون أي تكاثف لقطرات الماء أو اصفرار بالدهان."
          }
        },
        {
          "@type": "Question",
          "name": "ما هي نوعية بانوهات الجدران المركبة على جدار الدرج في فيلا نويا؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "صممت نسق بانوهات جدارية مائلة متدرجة تتبع زاوية ميلان الدرج بدقة ليزرية. تُثبت الإطارات بمواد لاصقة مطاطية ومسامير تثبيت دقيقة تمتص اهتزازات صعود وهبوط الدرج اليومية دون حدوث أي شروخ شعرية."
          }
        },
        {
          "@type": "Question",
          "name": "كم يستغرق تشطيب تاون هاوس أو فيلا في مجمع نويا بجزيرة ياس؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "بالنسبة للفلل والتاون هاوس في نويا ونويا فيفا، يكتمل نطاق التشطيب الديكوري (أسقف الجبس، إضاءات LED المخفية، البانوهات، والدهانات) عادةً خلال 2 إلى 4 أسابيع بجدول زمني صارم (SLA) يضمن سرعة الانتقال والسكن."
          }
        }
      ]
    }
  ]
}
</script></head><body><a class="skip" href="#main">تخطي إلى المحتوى</a><header><a class="brand" href="/ar/" aria-label="الصفحة الرئيسية لنسق"><img src="/assets/logo.svg" alt="شعار نسق المعتمد" width="500" height="500"></a><nav aria-label="الملاحة الرئيسية"><a href="/ar/services/">خدماتنا</a><a href="/ar/projects/">مفاهيم المشاريع</a><a href="/ar/insights/">المقالات والأدلة</a><a href="/ar/about/">عن نسق</a><a href="/ar/contact/">اتصل بنا</a></nav><a class="lang-switch" href="/insights/${caseStudy.slug}/" aria-label="English version">English</a><a class="navcta" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20طلب%20استشارة%20لتشطيب%20فيلا%20في%20جزيرة%20ياس.">تواصل معنا الآن</a><button id="menu" aria-label="فتح القائمة" aria-expanded="false">القائمة</button></header><main id="main"><div class="breadcrumbs"><a href="/ar/">الرئيسية</a> / <a href="/ar/insights/">المقالات وقصص النجاح</a> / <span>فيلا نويا شمال جزيرة ياس YN7</span></div><article class="article-container"><div class="article-header"><span class="article-badge">${caseStudy.badgeAr}</span><h1>${caseStudy.titleAr.split('|')[0].trim()}</h1><div class="article-meta-row"><span>بقلم فريق الهندسة في شركة نسق</span><span>•</span><span>${caseStudy.readTimeAr}</span><span>•</span><span>شمال جزيرة ياس YN7</span><span>•</span><span>تحديث نوفمبر 2026</span></div></div><img class="article-featured-img" src="${caseStudy.image}" alt="أسقف جبس منحنية مع صرر زهرية ومخارج تكييف طولية في فيلا نويا شمال جزيرة ياس" width="1024" height="1024" loading="eager"><div class="article-content">

      <!-- Executive Project Summary Card -->
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px;border-bottom:1px solid #383a34;padding-bottom:12px;">
          <strong style="color:var(--bronze);font-size:18px;">توثيق المشروع · قطاع شمال جزيرة ياس (YN7)</strong>
          <span style="background:var(--bronze);color:#181918;font-size:12px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:0.5px;">عميل مهندس · اعتماد كامل للملفات الهندسية MD</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;font-size:14px;color:#d8d9d0;">
          <div><strong style="color:#fff;">المخطط الرئيسي:</strong> قطاع شمال جزيرة ياس (المصنف في المخططات الحضرية بـ YN7)</div>
          <div><strong style="color:#fff;">المجمعات المستهدفة:</strong> نويا (Noya)، نويا فيفا (Noya Viva)، ونويا لوما (Noya Luma) من الدار العقارية</div>
          <div><strong style="color:#fff;">طبيعة العميل:</strong> مهندس محترف (تنفيذ طبقاً للمخططات والتفاصيل الهندسية المقدمة من العميل)</div>
          <div><strong style="color:#fff;">نطاق العمل:</strong> اعتماد ملفات المواد (MD)، أسقف جبس منحنية بصرر زهرية، فتحات تكييف طولية سوداء، بانوهات مائلة للدرج</div>
          <div><strong style="color:#fff;">هندسة الإضاءة:</strong> إضاءات كوف مخفية LED دافئة وسبوتلايت معمارية</div>
          <div><strong style="color:#fff;">مستوى الدهان:</strong> دهانات جوتن فينوماستيك ناصعة البياض بمستوى Level-5 فائق النعومة</div>
        </div>
      </div>

      <p class="article-lead">في شمال جزيرة ياس بأبوظبي، يُعد <strong>قطاع شمال ياس (المصنف رسمياً في التخطيط العمراني بـ YN7)</strong> واحداً من أكثر المناطق السكنية حيوية واستقطاباً للمواطنين والعائلات. حيث يضم هذا القطاع مشاريع شركة الدار العقارية الكبرى: <strong>مجمعات نويا (Noya)، ونويا فيفا (Noya Viva)، ونويا لوما (Noya Luma)</strong>، والتي تشهد تسليم مئات الفلل والتاون هاوس الحديثة التي يبحث أصحابها عن مقاول تشطيب محترف ينفذ التعديلات والديكورات بسرعة فائقة ودون أخطاء شائعة.</p>

      <p>توثق دراسة الحالة هذه مشروع تشطيب فيلا سكنية راقية في <strong>قطاع شمال ياس (YN7)</strong> لعميل <strong>مهندس متخصص</strong> قدم مخططاته ومتطلباته الفنية الخاصة. وتوضح كيف استجابت شركة نسق لهذه المعايير الهندسية الصارمة من خلال اعتماد ملفات المواد والمواصفات (MD Files)، وتنفيذ أسقف الجبس المنحنية بدقة متناهية، وبانوهات الدرج المائلة، وتكامل فتحات التكييف الخطية، مع إضاءات الـ LED المعمارية بدهان Level-5 الناصع.</p>

      <h2>1. معايير العميل المهندس: الدقة الحسابية واعتماد ملفات المواد (MD)</h2>
      <p>يتميز العمل لصالح عميل مهندس بوجود متطلبات فنية دقيقة لا تكتفي بالمظهر الخارجي، بل تدقق في التفاصيل الإنشائية والكهروميكانيكية خلف الألواح:</p>

      <ul>
        <li><strong>اعتماد ملفات المواد (Material Dossier / MD):</strong> تم تدقيق واعتماد كافة عينات ألواح الجبس المقاومة للرطوبة، ومعاجين الفواصل البوليمرية، وشبكات الفايبر، وأسلاك الإضاءة المعزولة الخالية من الغازات السامة (LSZH).</li>
        <li><strong>معايير تفاوت استقامة الهيكل الحديدي:</strong> تم تركيب شاسيهات الحديد المجلفن بسماكة مدروسة لمنع أي تهدل في الأسقف بفعل اهتزازات التكييف.</li>
        <li><strong>حسابات تدفق الهواء ومخارج التكييف:</strong> تم دمج مخارج التكييف الخطية السوداء (Black Linear Slot Diffusers) داخل الأسقف الساقطة بحسابات تمنع حدوث أي تكاثف للرطوبة أو تكوّن قطرات ماء تؤثر على الدهان.</li>
      </ul>

      <h2>2. سقف غرفة النوم الرئيسية: بحور منحنية متداخلة وصرر زهرية</h2>
      <p>في جناح النوم الرئيسي، تم تطبيق تصميم هندسي فريد يجمع بين نعومة المنحنيات وفخامة الصرر الكلاسيكية:</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/yas-noya-project/curved-ceiling-rosettes-ac-slots.jpg" alt="أسقف جبس منحنية مع صرر زهرية ومخارج تكييف طولية في فيلا نويا شمال جزيرة ياس" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 1: سقف الجناح الرئيسي في قطاع شمال ياس YN7. مستويان دائريان منحنيان يحتضنان ثلاث صرر زهرية نيوكلاسيكية مع مخرج تكييف طولي مدمج بانسيابية هندسية تامة.</p>
      </div>

      <p>وكما توضح الصورة 1، ابتعد التصميم عن الزوايا الحادة التقليدية، حيث قام حرفيو نسق بثني شاسيهات الحديد بدقة لتشكيل مستويين منحنيين متداخلين، تتوسطهما ثلاث صرر سقفية منقوشة تمنح المكان فخامة استثنائية مع دهان أبيض مطفي بمستوى Level-5.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/yas-noya-project/bedroom-boiserie-ceiling-rosette.jpg" alt="تناغم زوايا السقف والكرنيش المسنن والصرة الزهرية مع بانوهات النوافذ في فيلا نويا" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 2: زاوية الغرفة تبرز التناغم المعماري بين كورنيش السقف المسنن، والصرة المركزية، وإطارات البانوهات الجدارية التي تؤطر النوافذ بتناظر بصري هادئ.</p>
      </div>

      <h2>3. الهندسة المائلة: بانوهات جدار الدرج المتدرجة</h2>
      <p>يُعد جدار الدرج في فلل مجمعات نويا ونويا فيفا من أكثر الجدران وضوحاً في الفيلا، وتكمن صعوبته في ضرورة تفصيل إطارات البانوهات بزوايا مائلة تتبع انحدار الدرج بدقة متناهية.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/yas-noya-project/staircase-diagonal-boiserie-mouldings.jpg" alt="بانوهات جدارية مائلة ومزدوجة تتبع زاوية الدرج مع تمديدات إضاءة الجدران في فيلا نويا بجزيرة ياس" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 3: جدار الدرج الرئيسي. تم ضبط ميلان الإطارات المزدوجة بالليزر لتتطابق مع زاوية الدرج، مع تجهيز تمديدات الأسلاك للإضاءات الجدارية المودرن.</p>
      </div>

      <p>تم تثبيت إطارات البانوهات بمواد لاصقة مطاطية ممتصة للصدمات ومسامير غير مرئية، مما يضمن عدم تأثر فواصل الجبس باهتزازات حركة الصعود والنزول اليومية على الدرج.</p>

      <h2>4. صالة المعيشة المشرقة: إضاءات LED المخفية ومخارج التكييف المعمارية</h2>
      <p>تتميز صالات فلل مجمع نويا بواجهات زجاجية واسعة تطل على الحديقة الخاصة، وهو ما يجعل ضوء النهار كاشفاً لأي عيوب في استواء الأسقف.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/yas-noya-project/sunlit-salon-stepped-ceiling-cove.jpg" alt="صالة معيشة مشرقة بواجهات زجاجية وسقف ساقط بإضاءة كوف مخفية ومخارج تكييف سوداء في فيلا جزيرة ياس" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 4: صالة المعيشة الأرضية. سقف ساقط متدرج يضم بيت إضاءة كوف مخفي LED، ومخارج تكييف خطية سوداء أنيقة، ونعومة سطح خالية من أي تموجات تحت ضوء الشمس المباشر.</p>
      </div>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/yas-noya-project/hallway-corridor-boiserie-staircase.jpg" alt="ممر الفيلا الرئيسي أثناء مراحل التسليم توضح تغليف الدرج وبانوهات الجدران الممتدة في فيلا نويا شمال ياس" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 5: الممر الرئيسي للفيلا أثناء مرحلة التسليم. تغليف وقائي كامل لدرجات الدرج لحمايتها من الخدوش، وبانوهات جدارية ممتدة على طول الممر، ونظافة تامة للأرضيات.</p>
      </div>

      <h2>5. تشطيب سريع وتنسيق كامل مع شركة الدار وإدارة مجمع نويا</h2>
      <p>بالنسبة للملاك الذين استلموا مفاتيح منازلهم في <strong>نويا، نويا فيفا، ونويا لوما</strong>، تقدم نسق منظومة عمل متكاملة تلبي اشتراطات إدارة المجمع بدقة:</p>

      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin:28px 0;padding:24px;">
        <h4 style="color:var(--bronze);font-size:16px;margin-bottom:10px;">معايير تسليم نسق في قطاع شمال ياس (YN7):</h4>
        <ul style="color:#d8d9d0;font-size:14px;line-height:1.8;margin:0;padding-right:20px;">
          <li><strong>تصاريح الدخول والتأمينات:</strong> نتحمل كافة الإجراءات الرسمية مع إدارة مجمعات الدار العقارية وإصدار تصاريح بوابات الأمن.</li>
          <li><strong>حماية كاملة للموقع ونظافة HEPA:</strong> تغليف الأرضيات والدرج بمواد حماية ضد الصدمات، وتنظيف نهائي بالشفط الصناعي لمنع انتشار الغبار.</li>
          <li><strong>تسليم سريع خلال 2 إلى 4 أسابيع:</strong> الالتزام بجدول زمني يتيح للمالك الانتقال والسكن في الموعد المحدد.</li>
          <li><strong>ضمان خطي لمدة 12 شهراً:</strong> تغطية شاملة لسلامة فواصل الجبس بورد وثبات الدهانات وإضاءات الـ LED.</li>
        </ul>
      </div>

      <h2>6. لماذا يختار ملاك فلل جزيرة ياس شركة نسق؟</h2>
      <p>في قطاع شمال ياس (YN7) ومجتمعات ياس ايكرز وشاطئ الراحة، توفر نسق كفاءة هندسية لا تضاهى:</p>

      <ol>
        <li><strong>جاهزية للتعامل مع المخططات الهندسية:</strong> ننفذ مخططات العميل المهندس بدقة ونعد ملفات الـ MD بالكامل.</li>
        <li><strong>مقاول تنفيذ مباشر:</strong> أسعار مقاولات واضحة بجدول كميات تفصيلي بدون رسوم وسطاء أو مكاتب تصميم.</li>
        <li><strong>حلول تكييف هندسية متطورة:</strong> مخارج خطية مدمجة تضمن كفاءة التبريد بدون رطوبة أو تكاثف.</li>
        <li><strong>حرفية نيوكلاسيكية معاصرة:</strong> إتقان الأسقف المنحنية، والصرر الزهرية، وبانوهات الدرج المائلة.</li>
      </ol>

      <!-- Frequently Asked Questions -->
      <section class="section pale" style="margin-top:50px;padding:35px;border-radius:4px;" id="faq">
        <h3 style="font-size:24px;margin-bottom:24px;color:#fff;">الأسئلة الشائعة حول تشطيب الفلل في جزيرة ياس (FAQ)</h3>
        <div style="display:flex;flex-direction:column;gap:20px;">
          
          <article class="faq-card">
            <h4>هل تنفذ شركة نسق مشاريع تشطيب الفلل في مجمعات نويا ونويا فيفا ونويا لوما بجزيرة ياس؟</h4>
            <p>نعم، شركة نسق مقاول تنفيذ معتمد لديه مشاريع قائمة في قطاع شمال جزيرة ياس (YN7)، وتحديداً في مجمعات شركة الدار: نويا، نويا فيفا، ونويا لوما. نتولى استخراج تصاريح الدخول وإيداع التأمينات وإنجاز التشطيب ع المفتاح.</p>
          </article>

          <article class="faq-card">
            <h4>كيف تتعامل نسق مع التصاميم والمخططات المقدمة من العميل المهندس؟</h4>
            <p>عندما يقدم العميل مخططاته الهندسية الخاصة (CAD)، يقوم قسمنا الهندسي بإعداد واعتماد ملفات المواد (Material Dossier / MD files)، ورسومات الورشة التنفيذية للأعمال الكهروميكانيكية (MEP)، وتطبيق العمل على الموقع بأدق قياسات الليزر لضمان مطابقة معايير التفاوت المسموح بها هندسياً.</p>
          </article>

          <article class="faq-card">
            <h4>كيف يتم دمج فتحات التكييف الطولية (Linear Slot Diffusers) لمنع تكاثف الرطوبة؟</h4>
            <p>في فلل جزيرة ياس، تقوم نسق بتركيب صناديق توزيع هواء (Plenums) معزولة بالصوف الزجاجي الصوتي وحساب سرعة تدفق الهواء بدقة لمنع الجسور الحرارية، مما يضمن خروج هواء التكييف من الفتحات الخطية السوداء دون أي تكاثف لقطرات الماء أو اصفرار بالدهان.</p>
          </article>

          <article class="faq-card">
            <h4>ما هي نوعية بانوهات الجدران المركبة على جدار الدرج في فيلا نويا؟</h4>
            <p>صممت نسق بانوهات جدارية مائلة متدرجة تتبع زاوية ميلان الدرج بدقة ليزرية. تُثبت الإطارات بمواد لاصقة مطاطية ومسامير تثبيت دقيقة تمتص اهتزازات صعود وهبوط الدرج اليومية دون حدوث أي شروخ شعرية.</p>
          </article>

          <article class="faq-card">
            <h4>كم يستغرق تشطيب تاون هاوس أو فيلا في مجمع نويا بجزيرة ياس؟</h4>
            <p>بالنسبة للفلل والتاون هاوس في نويا ونويا فيفا، يكتمل نطاق التشطيب الديكوري (أسقف الجبس، إضاءات LED المخفية، البانوهات، والدهانات) عادةً خلال 2 إلى 4 أسابيع بجدول زمني صارم (SLA) يضمن سرعة الانتقال والسكن.</p>
          </article>

        </div>
      </section>

      <!-- CTA Box -->
      <div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">
        <h4 style="color:var(--bronze);font-size:18px;">هل استلمت فيلتك أو التاون هاوس في مجمع نويا بجزيرة ياس؟</h4>
        <p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">حول مساحتك إلى منزل أحلامك بأرقى أسقف الجبس وإضاءات LED وبانوهات الجدران العصرية. تواصل مع مهندسينا للحصول على مقايسة أسعار تفصيلية ورفع مساحي مجاني بالليزر خلال 24 إلى 48 ساعة.</p>
        <div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">
          <a class="button" href="/ar/contact/">طلب عرض أسعار مفصل</a>
          <a class="button" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20لدي%20فيلا%20في%20نويا%20جزيرة%20ياس%20وأود%20طلب%20استشارة%20تشطيب." style="background:#fff;color:#151613;border-color:#fff;">تحدث مع مهندسينا عبر واتساب</a>
        </div>
      </div>

      <!-- Related Guides -->
      <div class="related-insights" style="margin-top:60px;border-top:1px solid #e2e3de;padding-top:40px;">
        <h3 style="font-size:24px;margin-bottom:24px;">مقالات هندسية وأدلة ذات صلة بتشطيب الفلل في الإمارات</h3>
        <div class="insights-grid">
          <a class="article-card" href="/ar/insights/saadiyat-island-sde3-luxury-villa-handcrafted-fitout-case-study/">
            <img class="article-card-img" src="/assets/saadiyat-sde3-project/grand-chandelier-rosette-fluted-column.jpg" alt="قصة نجاح تشطيب فيلا جزيرة السعديات SDE3" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">جزيرة السعديات والحرفية التراثية</span>
              <h4>قصة نجاح تشطيب فيلا جزيرة السعديات (SDE3): نحت نيوكلاسيكي يدوي وأصالة الجبس المغربي المصمت لـ 100 عام</h4>
              <p>تشكيل ونحت يدوي 100% في موقع الفيلا، أعمدة رومانية مخددة، تيجان كورنثية، وبانوهات نيوكلاسيكية تدوم لأكثر من 100 عام بأصالة الجبس المغربي.</p>
            </div>
          </a>
          <a class="article-card" href="/ar/insights/al-bateen-luxury-palatial-villa-fitout-2019-case-study/">
            <img class="article-card-img" src="/assets/al-bateen-palace/monumental-circular-dome-arched-windows.jpg" alt="قصة نجاح تشطيب فيلا قصر البطين بأبوظبي" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">تشطيب قصور وفلل البطين · أرشيف 2019</span>
              <h4>قصة نجاح تشطيب فيلا قصر البطين بأبوظبي (إنجاز 2019): جودة ملكية تدوم لسنوات وسعر تنافسي مباشر</h4>
              <p>أسقف قباب دائرية عملاقة، بهو مزدوج الارتفاع، أعمدة كورنثية، وبقاء العمل بحالة ممتازة لأكثر من 7 سنوات بسعر مباشر منافس في البطين.</p>
            </div>
          </a>
        </div>
      </div>

    </div></article></main><footer><div><span class="wordmark">نسق <span lang="en">NASAQ</span></span><p>تناغم في المساحات.</p><p class="small">شركة نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م<br>أبوظبي، دولة الإمارات العربية المتحدة</p></div><div><a href="tel:+971505334861">+971 50 533 4861</a><a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a><a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a><a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">إنستغرام · @nasaq.fitout</a><a href="https://share.google/jD1fYkpZ96pX0pQPN" target="_blank" rel="noopener noreferrer">خرائط Google · ملف نسق</a></div><div><a href="/ar/services/">خدماتنا</a><a href="/ar/insights/">المقالات والأدلة</a><a href="/ar/about/">عن نسق</a><a href="/ar/contact/">ابدأ محادثة</a><p class="small">© 2026 نسق</p></div></footer><a class="floating" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20طلب%20استشارة%20لتشطيب%20فيلا%20في%20جزيرة%20ياس." aria-label="تواصل مع نسق عبر الواتساب">واتساب</a></body></html>`;

// Write HTML files
fs.writeFileSync(path.join(enDir, 'index.html'), enHtml, 'utf8');
fs.writeFileSync(path.join(arDir, 'index.html'), arHtml, 'utf8');
console.log('✅ Generated Yas Island Noya YN7 Villa Case Study (EN & AR)');

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

// 4. Update dist/sitemap.xml with both URLs and Google Image schemas
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
    <priority>0.88</priority>
    <image:image>
      <image:loc>https://nasaqfitout.ae${caseStudy.image}</image:loc>
      <image:title>${caseStudy.titleEn.split('|')[0].trim().replace(/&/g, '&amp;')}</image:title>
    </image:image>
    <image:image>
      <image:loc>https://nasaqfitout.ae/assets/yas-noya-project/staircase-diagonal-boiserie-mouldings.jpg</image:loc>
      <image:title>Diagonal Staircase Wall Boiserie Moulding Yas North Noya</image:title>
    </image:image>
    <image:image>
      <image:loc>https://nasaqfitout.ae/assets/yas-noya-project/sunlit-salon-stepped-ceiling-cove.jpg</image:loc>
      <image:title>Sunlit Salon Ceiling Cove and Linear AC Diffusers Yas Island</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"/>
    <lastmod>${caseStudy.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.88</priority>
    <image:image>
      <image:loc>https://nasaqfitout.ae${caseStudy.image}</image:loc>
      <image:title>${caseStudy.titleAr.split('|')[0].trim().replace(/&/g, '&amp;')}</image:title>
    </image:image>
    <image:image>
      <image:loc>https://nasaqfitout.ae/assets/yas-noya-project/staircase-diagonal-boiserie-mouldings.jpg</image:loc>
      <image:title>بانوهات الدرج المائلة والمتدرجة في فيلا نويا شمال جزيرة ياس</image:title>
    </image:image>
    <image:image>
      <image:loc>https://nasaqfitout.ae/assets/yas-noya-project/sunlit-salon-stepped-ceiling-cove.jpg</image:loc>
      <image:title>سقف صالة المعيشة المشرقة وإضاءات الكوف ومخارج التكييف في جزيرة ياس</image:title>
    </image:image>
  </url>\n`;

  sitemap = sitemap.replace('</urlset>', `${sitemapEntry}</urlset>`);
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ Updated dist/sitemap.xml with 2 new URLs (Total 66 URLs)');
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
      const newCaps = ['YasIslandNoyaFitOut', 'YasNorthYN7Renovations', 'CurvedGypsumCeilings', 'DiagonalStaircaseBoiserie'];
      newCaps.forEach(c => {
        if (!entry.capabilities.includes(c)) entry.capabilities.push(c);
      });
      const newQueries = [
        'تشطيب فلل نويا ونويا فيفا جزيرة ياس',
        'مقاول ديكور في قطاع شمال ياس YN7 نويا لوما',
        'تركيب أسقف جبس وبانوهات الدرج في جزيرة ياس',
        'مخارج تكييف خطية وإضاءة LED مخفية فلل ياس',
        'Yas Island Noya villa fit out contractor',
        'Noya Viva and Noya Luma interior renovations YN7',
        'Yas North sector villa gypsum ceiling contractor',
        'Diagonal staircase wall boiserie moulding Abu Dhabi'
      ];
      newQueries.forEach(q => {
        if (!entry.representativeQueries.includes(q)) entry.representativeQueries.push(q);
      });
      fs.writeFileSync(target, JSON.stringify(catalog, null, 2), 'utf8');
      console.log(`✅ Updated ${path.relative(DIST_DIR, target)}`);
    }
  }
});

console.log('\n🚀 Yas Island Noya YN7 Villa Case Study successfully built and integrated!');

