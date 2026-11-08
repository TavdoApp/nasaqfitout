/**
 * NASAQ FITOUT - Build Case Study for Mr. Abdullah Al Ameri Majlis in Khalifa City A (Sector 12)
 * 
 * Features:
 * - "Bring Your Own Photo" direct execution: client brought a photo, NASAQ refined designs and saved 3D fees
 * - Grand traditional & neoclassical Emirati Majlis: circular stepped ceiling dome, hand-sculpted rosette, crystal chandelier
 * - Hand-leafed antique gold boiserie mouldings, acanthus corner cartouches, Corinthian pilasters
 * - 5 High-res photos (including master craftsman on-site selfie and watermarked phone 0505334861 verification)
 * - Rich JSON-LD Schemas: Article, HomeAndConstructionBusiness, BreadcrumbList, FAQPage
 * - Bilingual parity (EN & AR) with strict trailing-slash canonicals and reciprocal hreflang
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const enDir = path.join(DIST_DIR, 'insights', 'khalifa-city-luxury-majlis-al-ameri-case-study');
const arDir = path.join(DIST_DIR, 'ar', 'insights', 'khalifa-city-luxury-majlis-al-ameri-case-study');

[enDir, arDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

const caseStudy = {
  slug: 'khalifa-city-luxury-majlis-al-ameri-case-study',
  badgeEn: 'Photo-to-Reality Majlis Craft',
  badgeAr: 'تنفيذ صورة إلى واقع وتفصيل المجالس',
  readTimeEn: '8 min read',
  readTimeAr: 'قراءة 8 دقائق',
  image: '/assets/khalifa-city-majlis/grand-khalifa-city-majlis-completed.jpg',
  date: '2026-11-08',
  
  // SEO Metadata
  titleEn: 'Khalifa City A Luxury Majlis Case Study: Photo-to-Reality Execution & Zero 3D Fees for Mr. Abdullah Al Ameri | NASAQ',
  descEn: 'Case study of a royal Emirati majlis in Sector 12, Khalifa City A, Abu Dhabi for Mr. Abdullah Al Ameri. NASAQ turned an inspirational photo into reality, saved 100% of 3D design fees, and delivered hand-leafed gold boiserie.',
  summaryEn: 'Authoritative case study of Mr. Abdullah Al Ameri\'s luxury majlis in Sector 12, Khalifa City A, Abu Dhabi. Demonstrates how NASAQ executed a photo-to-reality transformation, saved the client tens of thousands in 3D design studio fees, and delivered a circular stepped ceiling dome with massive chandelier, acanthus friezes, and hand-leafed antique gold boiserie mouldings.',

  titleAr: 'قصة نجاح تشطيب مجلس السيد عبد الله العامري في مدينة خليفة أ (حوض 12): تنفيذ صورة إلى واقع وتوفير تكاليف الـ 3D | نسق',
  descAr: 'دراسة حالة واقعية لتشطيب مجلس رجال إماراتي فخم في قطاع 12 بمدينة خليفة أ بأبوظبي للسيد عبد الله العامري: تطبيق صورة واقعية بإضافات هندسية راقية، توفير كامل رسوم التصميم 3D، وبانوهات مذهبة يدوياً.',
  summaryAr: 'دراسة حالة حية لمجلس السيد عبد الله العامري في حوض 12 بمدينة خليفة أ بأبوظبي. تروي كيف أحضر العميل صورة فوتوغرافية، فقامت نسق بتقديم اقتراحات وتعديلات هندسية مبتكرة وفرت على المالك رسوم مكاتب التصميم ثلاثي الأبعاد (3D)، ونفذت قبة سقف دائرية متدرجة وثريا كريستال ملكية وبانوهات جدارية مذهبة يدوياً بأعلى معايير الإتقان.'
};

// 1. Generate English HTML
const enHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${caseStudy.titleEn}</title><meta name="description" content="${caseStudy.descEn}"><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=6"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="Khalifa City A Sector 12, Abu Dhabi"><meta name="geo.position" content="24.4260;54.5810"><meta name="ICBM" content="24.4260, 54.5810"><meta property="og:type" content="article"><meta property="og:site_name" content="NASAQ Fit-Out"><meta property="og:title" content="${caseStudy.titleEn}"><meta property="og:description" content="${caseStudy.descEn}"><meta property="og:url" content="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><meta property="og:image" content="https://nasaqfitout.ae${caseStudy.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${caseStudy.titleEn}"><meta name="twitter:description" content="${caseStudy.descEn}"><meta name="twitter:image" content="https://nasaqfitout.ae${caseStudy.image}"><script type="application/ld+json">
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
        "Khalifa City",
        "Khalifa City A Sector 12",
        "Shakhbout City",
        "Mohammed Bin Zayed City",
        "Al Raha Beach",
        "Abu Dhabi",
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
      "headline": "Khalifa City A Luxury Majlis Case Study: Photo-to-Reality Execution & Zero 3D Fees for Mr. Abdullah Al Ameri",
      "description": "${caseStudy.descEn}",
      "inLanguage": "en",
      "mainEntityOfPage": "https://nasaqfitout.ae/insights/${caseStudy.slug}/",
      "datePublished": "2026-11-08T09:30:00+04:00",
      "dateModified": "2026-11-08T09:30:00+04:00",
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
          "name": "Abdullah Al Ameri Majlis Khalifa City Sector 12 Case Study",
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
          "name": "How does NASAQ execute a luxury majlis directly from an inspiration photo without 3D fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike boutique design studios that charge AED 15,000 to AED 35,000 just to redraw photos into 3D renders, NASAQ is an authorized Implementation Contractor. Our site engineers conduct free 3D laser scans of your room, translate your photo into millimeter-accurate shop drawings, suggest architectural refinements, and build directly on site with zero forced design fees."
          }
        },
        {
          "@type": "Question",
          "name": "What gold leaf detailing was applied to the wall mouldings in this Khalifa City majlis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The wall mouldings feature French and Baroque relief corners accented with hand-applied 24K antique gold leaf foil (ورق ذهب معتق) sealed with UV-resistant polyurethane clear coats. This gives a rich royal luster that never tarnishes or turns greenish under UAE climate conditions."
          }
        },
        {
          "@type": "Question",
          "name": "How is a heavy crystal chandelier anchored in a circular ceiling dome?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under NASAQ Ironclad Guarantee 01, we never hang heavy chandeliers from gypsum boards. In Mr. Al Ameri's majlis, our team installed heavy-gauge galvanized Unistrut structural steel channels anchored directly into the solid reinforced concrete ceiling slab, tested to carry over 10 times the chandelier static dead load."
          }
        },
        {
          "@type": "Question",
          "name": "Where is this project located in Abu Dhabi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This luxury majlis is located in Khalifa City A (مدينة خليفة أ), Sector 12 (حوض 12), Abu Dhabi, executed for Mr. Abdullah Al Ameri (السيد عبد الله العامري)."
          }
        },
        {
          "@type": "Question",
          "name": "Can NASAQ customize majlis designs to incorporate existing furniture or air conditioning?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. NASAQ custom-calibrates all boiserie panels, wall sconce conduits, and AC linear grilles to ensure perfect symmetry around your majlis seating layout, floor-to-ceiling windows, and entryways."
          }
        }
      ]
    }
  ]
}
</script></head><body><a class="skip" href="#main">Skip to content</a><header><a class="brand" href="/" aria-label="NASAQ home"><img src="/assets/logo.svg" alt="NASAQ approved logo" width="500" height="500"></a><nav aria-label="Main navigation"><a href="/services/">Services</a><a href="/projects/">Concepts</a><a href="/insights/">Insights</a><a href="/about/">About</a><a href="/contact/">Contact</a></nav><a class="lang-switch" href="/ar/insights/${caseStudy.slug}/" aria-label="النسخة العربية">العربية</a><a class="navcta" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project.">Discuss your project</a><button id="menu" aria-label="Open navigation" aria-expanded="false">Menu</button></header><main id="main"><div class="breadcrumbs"><a href="/">Home</a> / <a href="/insights/">Insights</a> / <span>Abdullah Al Ameri Majlis Khalifa City Sector 12 Case Study</span></div><article class="article-container"><div class="article-header"><span class="article-badge">${caseStudy.badgeEn}</span><h1>${caseStudy.titleEn.split('|')[0].trim()}</h1><div class="article-meta-row"><span>By NASAQ Engineering Team</span><span>•</span><span>${caseStudy.readTimeEn}</span><span>•</span><span>Khalifa City A Sector 12, Abu Dhabi</span><span>•</span><span>Updated Nov 2026</span></div></div><img class="article-featured-img" src="${caseStudy.image}" alt="Grand completed luxury Emirati majlis with circular ceiling dome, massive crystal chandelier, and hand-leafed gold wall boiserie in Khalifa City A Sector 12" width="1024" height="1024" loading="eager"><div class="article-content">

      <!-- Executive Project Summary Card -->
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px;border-bottom:1px solid #383a34;padding-bottom:12px;">
          <strong style="color:var(--bronze);font-size:18px;">PROJECT ARCHIVE · KHALIFA CITY LUXURY MAJLIS</strong>
          <span style="background:var(--bronze);color:#181918;font-size:12px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:0.5px;">PHOTO-TO-REALITY · ZERO 3D REDRAW FEES</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;font-size:14px;color:#d8d9d0;">
          <div><strong style="color:#fff;">Client:</strong> Mr. Abdullah Al Ameri (السيد عبد الله العامري المحترم)</div>
          <div><strong style="color:#fff;">Location:</strong> Khalifa City A (مدينة خليفة أ), Sector 12 (حوض 12), Abu Dhabi</div>
          <div><strong style="color:#fff;">Project Scope:</strong> Grand Formal Men's Majlis (مجلس رجال رسمي فخم)</div>
          <div><strong style="color:#fff;">Design Model:</strong> Bring Your Own Photo / Concept (Zero Forced 3D Fees)</div>
          <div><strong style="color:#fff;">Core Elements:</strong> Stepped Circular Dome, Floral Medallion, Slab Chandelier Anchor, Hand-Leafed Gold Boiserie, Acanthus Friezes, Corinthian Pilasters</div>
          <div><strong style="color:#fff;">Verified Direct Contact:</strong> +971 50 533 4861 (@decor_happines archive)</div>
        </div>
      </div>

      <p class="article-lead">In Emirati culture, the formal <strong>Majlis (المجلس)</strong> is far more than a living room; it is the physical heart of family hospitality, social status, and generational gathering. Across prestigious residential communities like <strong>Khalifa City A (مدينة خليفة أ)</strong>, homeowners frequently discover inspiring photos on Instagram, Pinterest, or from a friend’s palace and wish to bring that exact atmosphere into their own home. Yet, they are routinely confronted by boutique design studios demanding <strong>AED 15,000 to AED 35,000 upfront just to redraw the photo in 3D Max</strong> before a single nail is hammered.</p>

      <p>This authentic technical case study documents the execution of a royal formal majlis for <strong>Mr. Abdullah Al Ameri</strong> in <strong>Khalifa City A, Sector 12 (حوض 12), Abu Dhabi</strong>. It highlights NASAQ's hallmark <strong>"Bring Your Own Photo / AI" direct execution model</strong>: how our site engineers took Mr. Al Ameri's inspiration photo, contributed bespoke architectural refinements, saved the client 100% of design studio redrawing fees, and built a magnificent French/Baroque neoclassical majlis featuring a <strong>circular stepped ceiling dome, acanthus friezes, and hand-leafed antique gold boiserie</strong>.</p>

      <h2>1. The Dilemma: Forced 3D Design Fees vs. Direct Master Execution</h2>
      <p>When Mr. Abdullah Al Ameri began planning the fit-out of his formal majlis in Sector 12, Khalifa City A, he possessed a clear aesthetic vision. He had saved an exquisite photograph of a neoclassical majlis featuring delicate gold accents, grand circular ceiling recesses, and balanced wall frames.</p>
      
      <p>When he approached local interior design offices in Abu Dhabi, each presented the same barrier: <em>"We cannot start work until we produce a full 3D rendering package, which will cost AED 20,000 to AED 30,000 and take 4 to 6 weeks."</em> For an experienced homeowner who already knew what he wanted, paying tens of thousands of dirhams simply to duplicate an existing photo was a frustrating waste of capital and time.</p>

      <p>When Mr. Al Ameri consulted <strong>NASAQ Fit-Out & Interior Design</strong>, the approach was fundamentally different:</p>
      <ul>
        <li><strong>Zero Forced 3D Fees:</strong> As an authorized Interior Implementation Contractor, NASAQ does not sell theoretical paper sketches. We build reality.</li>
        <li><strong>On-Site 3D Laser Measurement:</strong> Within 24 hours, our site engineers surveyed the majlis in Sector 12 with precision laser scanners, mapping the exact wall dimensions, ceiling clearance, and electrical rough-ins.</li>
        <li><strong>Proactive Architectural Enhancements:</strong> At Mr. Al Ameri's request, NASAQ suggested elevated touches: converting a standard flat ceiling into a grand circular tiered dome, adding acanthus cartouches to the corners, and highlighting boiserie frames with hand-leafed 24K antique gold foil.</li>
      </ul>

      <h2>2. Hand-Leafed Antique Gold Boiserie: Artisanal Precision</h2>
      <p>The defining visual feature of Mr. Al Ameri's majlis is the exquisite wall panelling (boiserie). Rather than flat, plain moldings, the design incorporates a multi-layer neoclassical frame system with hand-applied gold leafing.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/khalifa-city-majlis/vertical-gold-leaf-boiserie-detail.jpg" alt="Close-up of vertical wall frame boiserie panel with hand-leafed gold corners, delicate scrollwork, and ornate acanthus relief borders in Khalifa City A Sector 12" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 1: Macro detail of the vertical boiserie panel. Ornate rococo corner cartouches and inner filigree border accented with hand-applied 24K antique gold leaf over dead-flat Level-5 Jotun enamel.</p>
      </div>

      <p>As captured in Photo 1, the corner pieces feature sculptural floral arabesques and high-relief rosettes. NASAQ's master painters applied genuine metallic leafing using specialized gilding size (ميشيون التذهيب), followed by an antiquing glaze that settles into the carvings' recesses, providing depth and historical nobility.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/khalifa-city-majlis/horizontal-wall-panel-gold-corners.jpg" alt="Horizontal feature wall panel with recessed textured inner field, gold leaf rococo corner carvings, and electrical wall conduit prep in Khalifa City A" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 2: Horizontal feature wall panel framing the wall sconce position. Notice the millimeter-accurate reveal lines and seamless corner miters.</p>
      </div>

      <h2>3. Authentic Team Verification: Master Craftsman On-Site</h2>
      <p>In an online market inundated with AI-generated fantasy renders and stolen Pinterest images, authentic proof of execution is paramount. Below is an unedited photograph taken on-site inside Mr. Abdullah Al Ameri's majlis in Sector 12, Khalifa City A:</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/khalifa-city-majlis/artisan-onsite-gold-boiserie.jpg" alt="NASAQ master artisan on-site inside Mr. Abdullah Al Ameri majlis in Khalifa City A Sector 12 in front of the finished gold-leaf boiserie wall" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 3: Real team presence on site. NASAQ master artisan standing inside the finished majlis in Khalifa City A Sector 12, conducting final quality inspection of the gold-leafed pilasters and boiserie panelling.</p>
      </div>

      <h2>4. The Ceiling Masterpiece: Circular Stepped Dome & Chandelier Anchor</h2>
      <p>To create a truly majestic atmosphere, NASAQ designed a monumental circular stepped dome ceiling centered over the majlis gathering floor.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/khalifa-city-majlis/ceiling-cove-acanthus-cartouche-detail.jpg" alt="Ceiling corner detail showing multi-tier stepped coves, intricate classical acanthus corner cartouches, ornate frieze bands with AC grille integration, watermarked 0505334861" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 4: High-detail ceiling perspective. Acanthus floral corner cartouches, multi-tier stepped bulkheads, and discreet linear AC air return integration (watermarked with our verified hotline: 050 533 4861).</p>
      </div>

      <p>Under <strong>NASAQ Ironclad Guarantee 01 (Structural Heavy-Load Backing)</strong>, the massive multi-tiered crystal chandelier suspended in the center was anchored directly to the solid reinforced concrete slab using high-tensile Unistrut steel channels. The false ceiling features:</p>
      <ul>
        <li><strong>Concentric Stepped Bulkheads:</strong> Hand-crafted curves framing warm 2700K indirect LED cove lighting that illuminates the dome without glare.</li>
        <li><strong>Central Sculpted Plaster Rosette:</strong> A massive acanthus palmette medallion distributing the chandelier suspension visually across the ceiling plane.</li>
        <li><strong>Ornate Perimeter Frieze:</strong> Continuous classical egg-and-dart and floral relief running along the entire upper perimeter, with seamlessly integrated AC slot diffusers.</li>
      </ul>

      <h2>5. The Completed Majlis: Warm Emirati Hospitality at Its Finest</h2>
      <p>The final handover delivered an atmosphere of royal warmth, grandeur, and harmony:</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/khalifa-city-majlis/grand-khalifa-city-majlis-completed.jpg" alt="Wide panoramic view of the completed luxury majlis in Khalifa City A Sector 12: circular tiered stepped ceiling dome with massive crystal chandelier, hand-leafed gold boiserie, and majlis seating" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 5: The completed grand majlis in Khalifa City A Sector 12. Symmetrical wall boiserie with warm wall sconces, circular chandelier dome, and tailored perimeter seating welcoming guests with royal Emirati prestige.</p>
      </div>

      <p>Mr. Abdullah Al Ameri expressed his profound delight with NASAQ's execution: he obtained a majlis superior in detailing to his initial photo, avoided spending tens of thousands of dirhams on unnecessary 3D redesign fees, and experienced seamless, on-time project handover backed by a written 12-Month Guarantee.</p>

      <h2>6. Why Khalifa City Villa Owners Choose NASAQ</h2>
      <p>For villa and majlis owners across <strong>Khalifa City A, Sector 12, Shakhbout City, and Al Raha</strong>, NASAQ provides unique advantages:</p>

      <ol>
        <li><strong>Bring Any Photo or Concept:</strong> Share a photo from Pinterest, Instagram, or a friend's home; our engineers will measure, refine, and execute it directly.</li>
        <li><strong>Zero Forced 3D Fees:</strong> Save AED 15,000–35,000 in design studio fees and invest your budget directly into high-grade materials and master craftsmanship.</li>
        <li><strong>Hand-Leafed Gold & Artisanal Plaster:</strong> Genuine artisanal finishes that elevate interiors beyond flat commercial paint.</li>
        <li><strong>12-Month Written Anti-Crack Warranty:</strong> Comprehensive legal warranty backed by our 6 Ironclad Guarantees.</li>
      </ol>

      <!-- Frequently Asked Questions -->
      <section class="section pale" style="margin-top:50px;padding:35px;border-radius:4px;" id="faq">
        <h3 style="font-size:24px;margin-bottom:24px;color:#fff;">Frequently Asked Questions (FAQ)</h3>
        <div style="display:flex;flex-direction:column;gap:20px;">
          
          <article class="faq-card">
            <h4>How does NASAQ execute a luxury majlis directly from an inspiration photo without 3D fees?</h4>
            <p>Unlike boutique design studios that charge AED 15,000 to AED 35,000 just to redraw photos into 3D renders, NASAQ is an authorized Implementation Contractor. Our site engineers conduct free 3D laser scans of your room, translate your photo into millimeter-accurate shop drawings, suggest architectural refinements, and build directly on site with zero forced design fees.</p>
          </article>

          <article class="faq-card">
            <h4>What gold leaf detailing was applied to the wall mouldings in this Khalifa City majlis?</h4>
            <p>The wall mouldings feature French and Baroque relief corners accented with hand-applied 24K antique gold leaf foil (ورق ذهب معتق) sealed with UV-resistant polyurethane clear coats. This gives a rich royal luster that never tarnishes or turns greenish under UAE climate conditions.</p>
          </article>

          <article class="faq-card">
            <h4>How is a heavy crystal chandelier anchored in a circular ceiling dome?</h4>
            <p>Under NASAQ Ironclad Guarantee 01, we never hang heavy chandeliers from gypsum boards. In Mr. Al Ameri's majlis, our team installed heavy-gauge galvanized Unistrut structural steel channels anchored directly into the solid reinforced concrete ceiling slab, tested to carry over 10 times the chandelier static dead load.</p>
          </article>

          <article class="faq-card">
            <h4>Where is this project located in Abu Dhabi?</h4>
            <p>This luxury majlis is located in Khalifa City A (مدينة خليفة أ), Sector 12 (حوض 12), Abu Dhabi, executed for Mr. Abdullah Al Ameri (السيد عبد الله العامري).</p>
          </article>

          <article class="faq-card">
            <h4>Can NASAQ customize majlis designs to incorporate existing furniture or air conditioning?</h4>
            <p>Yes. NASAQ custom-calibrates all boiserie panels, wall sconce conduits, and AC linear grilles to ensure perfect symmetry around your majlis seating layout, floor-to-ceiling windows, and entryways.</p>
          </article>

        </div>
      </section>

      <!-- CTA Box -->
      <div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">
        <h4 style="color:var(--bronze);font-size:18px;">Have an Inspiration Photo for Your Majlis in Khalifa City?</h4>
        <p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">Don't spend tens of thousands of dirhams on 3D redrawings. Share your photo with our site engineers on WhatsApp for a complimentary 3D laser site survey and an itemized BOQ within 24 to 48 hours.</p>
        <div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">
          <a class="button" href="/contact/">Request an itemized quotation</a>
          <a class="button" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20saw%20the%20Khalifa%20City%20majlis%20case%20study%20and%20have%20a%20photo%20I%20want%20to%20execute." style="background:#fff;color:#151613;border-color:#fff;">WhatsApp our site engineers</a>
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
          <a class="article-card" href="/insights/saadiyat-island-sde3-luxury-villa-handcrafted-fitout-case-study/">
            <img class="article-card-img" src="/assets/saadiyat-sde3-project/grand-chandelier-rosette-fluted-column.jpg" alt="Saadiyat SDE3 Handcrafted Villa Case Study" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">Saadiyat Island & Artisanal Heritage</span>
              <h4>Saadiyat Island SDE3 Villa Fit-Out Case Study: 100-Year Handcrafted Neoclassical Plaster & Moroccan Mastery</h4>
              <p>How NASAQ built 100% on-site handcrafted fluted Roman columns, Corinthian capitals, and 100-year solid Moroccan plaster on Saadiyat Island.</p>
            </div>
          </a>
        </div>
      </div>

    </div></article></main><footer><div><span class="wordmark">NASAQ <span lang="ar">نسق</span></span><p>Spaces in harmony.</p><p class="small">NASAQ Interior Design Implementation Works – L.L.C – S.P.C<br>Abu Dhabi, United Arab Emirates</p></div><div><a href="tel:+971505334861">+971 50 533 4861</a><a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a><a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a><a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">Instagram · @nasaq.fitout</a><a href="https://share.google/jD1fYkpZ96pX0pQPN" target="_blank" rel="noopener noreferrer">Google Maps · NASAQ Profile</a></div><div><a href="/services/">Our services</a><a href="/insights/">Insights & Guides</a><a href="/about/">About NASAQ</a><a href="/contact/">Start a conversation</a><p class="small">© 2026 NASAQ</p></div></footer><a class="floating" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project." aria-label="Contact NASAQ on WhatsApp">WhatsApp</a></body></html>`;

// 2. Generate Arabic HTML
const arHtml = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${caseStudy.titleAr}</title><meta name="description" content="${caseStudy.descAr}"><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=6"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="مدينة خليفة أ قطاع 12، أبوظبي"><meta name="geo.position" content="24.4260;54.5810"><meta name="ICBM" content="24.4260, 54.5810"><meta property="og:type" content="article"><meta property="og:site_name" content="نسق للتصميم الداخلي والمقاولات"><meta property="og:title" content="${caseStudy.titleAr}"><meta property="og:description" content="${caseStudy.descAr}"><meta property="og:url" content="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><meta property="og:image" content="https://nasaqfitout.ae${caseStudy.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${caseStudy.titleAr}"><meta name="twitter:description" content="${caseStudy.descAr}"><meta name="twitter:image" content="https://nasaqfitout.ae${caseStudy.image}"><script type="application/ld+json">
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
        "مدينة خليفة",
        "مدينة خليفة أ قطاع 12",
        "مدينة شخبوط",
        "مدينة محمد بن زايد",
        "شاطئ الراحة",
        "أبوظبي",
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
      "headline": "قصة نجاح تشطيب مجلس السيد عبد الله العامري في مدينة خليفة أ (حوض 12): تنفيذ صورة إلى واقع وتوفير تكاليف الـ 3D",
      "description": "${caseStudy.descAr}",
      "inLanguage": "ar",
      "mainEntityOfPage": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/",
      "datePublished": "2026-11-08T09:30:00+04:00",
      "dateModified": "2026-11-08T09:30:00+04:00",
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
          "name": "مجلس عبد الله العامري مدينة خليفة أ حوض 12",
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
          "name": "كيف تنفذ شركة نسق مجلساً فاخراً من مجرد صورة فوتوغرافية دون فرض رسوم تصميم 3D؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "بخلاف مكاتب التصميم التي تلزم العميل بدفع من 15,000 إلى 35,000 درهم فقط لإعادة رسم الصور ببرامج 3D Max، فإن نسق هي مقاول تنفيذ معتمد. يقوم مهندسونا بإجراء رفع مساحي ثلاثي الأبعاد بالليزر لمجلسك مجاناً، وتحويل صورتك إلى مخططات تنفيذية مطابقة للأبعاد الواقعية، وتقديم اقتراحات هندسية ترفع من فخامة المكان دون أي رسوم تصميم إضافية."
          }
        },
        {
          "@type": "Question",
          "name": "ما هي تقنية التذهيب اليدوي المستخدمة في بانوهات مجلس مدينة خليفة؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "تم تطبيق رقائق الذهب المعتق (24K Antique Gold Leaf) يدوياً على زوايا البانوهات الباروكية والكرانيش بواسطة مادة ميسيون التذهيب التخصصية، ثم عزلها بطبقة حماية بوليمرية شفافة تمنع بهتان الذهب أو تحوله للون الأخضر بفعل رطوبة الجو."
          }
        },
        {
          "@type": "Question",
          "name": "كيف يتم تثبيت ثريا كريستال عملاقة في قبة سقف دائرية؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "وفقاً لضمان نسق الهندسي رقم 01، يُمنع تعليق الثريات على صاج الجبس. نقوم بتركيب جسور صلب مجلفنة (Unistrut) وتيودورات مقواة مربوطة مباشرة بالصبة الخرسانية المسلحة للسقف، مختبرة لتحمل أكثر من 10 أضعاف وزن الثريا الصافي مع امتصاص الاهتزازات."
          }
        },
        {
          "@type": "Question",
          "name": "أين يقع هذا المشروع في أبوظبي؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "يقع هذا المجلس الفاخر في مدينة خليفة أ، قطاع 12 (حوض 12)، أبوظبي، ونُفذ لصالح السيد عبد الله العامري المحترم."
          }
        },
        {
          "@type": "Question",
          "name": "هل يمكن تفصيل البانوهات والكرانيش لتتناسب مع أثاث المجلس ومكيفات الهواء القائمة؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم بالتأكيد. يقوم مهندسو نسق بتصميم وتوزيع إطارات البانوهات ومواقع إضاءات الجدران وفتحات التكييف الطولية (Linear Slot Diffusers) بدقة متناهية تتناغم مع مسارات الجلسة الأرضية أو الكنب ومواقع النوافذ."
          }
        }
      ]
    }
  ]
}
</script></head><body><a class="skip" href="#main">تخطي إلى المحتوى</a><header><a class="brand" href="/ar/" aria-label="الصفحة الرئيسية لنسق"><img src="/assets/logo.svg" alt="شعار نسق المعتمد" width="500" height="500"></a><nav aria-label="الملاحة الرئيسية"><a href="/ar/services/">خدماتنا</a><a href="/ar/projects/">مفاهيم المشاريع</a><a href="/ar/insights/">المقالات والأدلة</a><a href="/ar/about/">عن نسق</a><a href="/ar/contact/">اتصل بنا</a></nav><a class="lang-switch" href="/insights/${caseStudy.slug}/" aria-label="English version">English</a><a class="navcta" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20طلب%20استشارة%20لتشطيب%20مجلس%20في%20مدينة%20خليفة.">تواصل معنا الآن</a><button id="menu" aria-label="فتح القائمة" aria-expanded="false">القائمة</button></header><main id="main"><div class="breadcrumbs"><a href="/ar/">الرئيسية</a> / <a href="/ar/insights/">المقالات وقصص النجاح</a> / <span>مجلس عبد الله العامري مدينة خليفة أ حوض 12</span></div><article class="article-container"><div class="article-header"><span class="article-badge">${caseStudy.badgeAr}</span><h1>${caseStudy.titleAr.split('|')[0].trim()}</h1><div class="article-meta-row"><span>بقلم فريق الهندسة في شركة نسق</span><span>•</span><span>${caseStudy.readTimeAr}</span><span>•</span><span>مدينة خليفة أ قطاع 12، أبوظبي</span><span>•</span><span>تحديث نوفمبر 2026</span></div></div><img class="article-featured-img" src="${caseStudy.image}" alt="المجلس الإماراتي الفخم المكتمل في مدينة خليفة أ قطاع 12 قبة سقف دائرية وثريا كريستال ملكية وبانوهات جدارية مذهبة" width="1024" height="1024" loading="eager"><div class="article-content">

      <!-- Executive Project Summary Card -->
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px;border-bottom:1px solid #383a34;padding-bottom:12px;">
          <strong style="color:var(--bronze);font-size:18px;">توثيق المشروع · مجالس مدينة خليفة الفاخرة</strong>
          <span style="background:var(--bronze);color:#181918;font-size:12px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:0.5px;">تحويل صورة إلى واقع · توفير 100% من رسوم الـ 3D</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;font-size:14px;color:#d8d9d0;">
          <div><strong style="color:#fff;">العميل:</strong> السيد عبد الله العامري المحترم</div>
          <div><strong style="color:#fff;">الموقع:</strong> مدينة خليفة أ، قطاع 12 (حوض 12)، أبوظبي</div>
          <div><strong style="color:#fff;">نطاق العمل:</strong> مجلس رجال رسمي فخم (Majlis Fit-Out)</div>
          <div><strong style="color:#fff;">طريقة التنفيذ:</strong> إحضار صورة خاصة وتطبيقها مع إضافات هندسية تخصصية بدون رسوم 3D إجبارية</div>
          <div><strong style="color:#fff;">العناصر المنفذة:</strong> قبة سقف دائرية متدرجة، صرة أزهار باروكية، تثبيت ثريا في الخرسانة، بانوهات مذهبة بورق الذهب يدوياً، كرانيش مسننة، أعمدة جدارية كورنثية</div>
          <div><strong style="color:#fff;">التوثيق الميداني المعتمد:</strong> هاتف نسق المعتمد 0505334861 (@decor_happines)</div>
        </div>
      </div>

      <p class="article-lead">يمثل <strong>مجلس الرجال الرسمي</strong> في الثقافة الإماراتية الأصيلة عنوان الكرم، وواجهة البيت العائلي، وصرح اللقاءات الاجتماعية التي تعكس هيبة ومكانة صاحب المسكن. وفي أحياء العاصمة المرموقة مثل <strong>مدينة خليفة أ (قطاع 12)</strong>، غالباً ما يمتلك المالك فكرة أو صورة فوتوغرافية احتفظ بها من قصر أو مجلس نال إعجابه، ويرغب في رؤيتها مجسدة بالدقة نفسها في بيته. ولكن الملاك يصطدمون عادة بمكاتب التصميم التي تطالبهم بدفع <strong>15,000 إلى 35,000 درهم فقط لإعداد مخططات ورسومات 3D</strong> تستغرق أسابيع طويلة دون أي عمل فعلي في الموقع.</p>

      <p>توثق هذه المقالة الفنية قصة نجاح تشطيب مجلس الرجال الفخم لـ <strong>السيد عبد الله العامري</strong> في <strong>مدينة خليفة أ، قطاع 12 (حوض 12)، في أبوظبي</strong>. وتبرز كيف نجحت نسق عبر ميزتها الحصرية <strong>"أحضر صورتك معك ونحن نحولها إلى واقع"</strong> في أخذ صورة العميل، واقتراح إضافات معمارية راقية، وتوفير كافة تكاليف إعادة التصميم الباهظة، لتسلم في النهاية مجلساً إمبراطورياً بقبة دائرية ساقطة، وصرة جبس ملكية، وبانوهات جدارية مطعمة بورق الذهب المعتق يدوياً.</p>

      <h2>1. تجنب فخ رسوم الـ 3D: كيف وفرت نسق ميزانية العميل؟</h2>
      <p>عندما بدأ السيد عبد الله العامري التجهيز لمجلسه في قطاع 12 بمدينة خليفة، أحضر معه صورة واضحة لديكور مجلس فاخر أعجبته تفاصيله ونسبه. وعندما استشار عدة مكاتب ديكور، فوجئ باشتراطهم دفع مبالغ كبيرة مقدماً تحت بند "رسوم التصميم ثلاثي الأبعاد 3D"، والانتظار لأسابيع لمجرد نقل فكرة الصورة إلى شاشة الكمبيوتر.</p>

      <p>وعندما تواصل السيد العامري مع <strong>شركة نسق لأعمال تنفيذ الديكور</strong>، اختلف المنهج تماماً:</p>
      <ul>
        <li><strong>إلغاء رسوم التصميم الإجبارية:</strong> نسق مقاول تنفيذ معتمد؛ هدفنا بناء الواقع وليس بيع رسومات ورقية.</li>
        <li><strong>رفع مساحي بالليزر في 24 ساعة:</strong> نزل مهندسونا إلى موقع الفيلا في حوض 12، وتم رفع مقاسات الجدران، وارتفاعات الأسقف، ومواقع النوافذ والتكييف بأدق أجهزة الليزر الرقمية.</li>
        <li><strong>اقتراحات إبداعية أضافت فخامة ملكية:</strong> طلب منا العميل تقديم لمساتنا الخاصة؛ فاقترحنا تحويل السقف المستوي العادي إلى قبة دائرية متدرجة المستويات مع إضاءات كوف دافئة، وإضافة تيجان باروكية ونقوش نباتية مورقة بزوايا البانوهات، وتذهيبها بورق الذهب المعتق لإعطاء فخامة تليق بمجالس مدينة خليفة.</li>
      </ul>

      <h2>2. التذهيب اليدوي لزوايا البانوهات الجدارية (ورق الذهب المعتق)</h2>
      <p>عنصر الجذب الأبرز في مجلس السيد عبد الله العامري هو إطارات الجدران (البانوهات) المنفذة بطابع فرنسي نيوكلاسيكي مع لمسات باروكية أنيقة، حيث تم تذهيب زوايا الإطارات يدوياً بدقة متناهية.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/khalifa-city-majlis/vertical-gold-leaf-boiserie-detail.jpg" alt="تفاصيل زاوية البانوه الجداري المذهبة يدوياً بورق الذهب المعتق بزخارف الأكانثوس في مجلس مدينة خليفة أ حوض 12" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 1: لقطة مقربة لإطار البانوه الرأسي. زوايا منقوشة بزخارف روكوكو بارزة ومذهبة يدوياً بورق الذهب عيار 24 المعتق فوق دهان جوتن فينوماستيك ناصع البياض بمستوى Level-5.</p>
      </div>

      <p>وكما تبرز الصورة 1، فإن التذهيب لم يكن مجرد دهان بخاخ عادي سريع الزوال، بل تم تطبيق رقائق الذهب الإيطالي المعتق (Antique Gold Leaf) يدوياً بواسطة فنان التذهيب، مع تعتيق الفجوات الغائرة لتعطي عراقة القصور، ثم عزلها بطبقة حماية بوليمرية تحميها من الرطوبة والتنظيف.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/khalifa-city-majlis/horizontal-wall-panel-gold-corners.jpg" alt="إطار جداري أفقي عريض مذهب الزوايا مع تجويف مخصص لإضاءات الجدران الكريستالية في مجلس مدينة خليفة" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 2: إطار جداري عريض يؤطر موقع الإضاءة الجدارية (الأبليك) بتطابق ليزري وفواصل زوايا ناعمة خالية من أي شروخ.</p>
      </div>

      <h2>3. التوثيق الميداني الصادق: كادر نسق الحرفي في قلب الموقع</h2>
      <p>في عصر امتلأت فيه وسائل التواصل بصور التصاميم الوهمية المنقولة من الإنترنت، تحرص نسق على توثيق حضور كوادرها الفنية والهندسية الحقيقية داخل مواقع العمل. توضح الصورة أدناه أحد كوادرنا الفنية داخل مجلس السيد عبد الله العامري في قطاع 12 بمدينة خليفة أ:</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/khalifa-city-majlis/artisan-onsite-gold-boiserie.jpg" alt="حرفي نسق داخل مجلس السيد عبد الله العامري في مدينة خليفة أ حوض 12 أثناء مراجعة جودة تذهيب البانوهات" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 3: مصداقية التنفيذ على أرض الواقع. حرفي نسق المتخصص في الموقع يفحص استقامة الأعمدة الجدارية الكورنثية ونقاء التذهيب اليدوي في مجلس قطاع 12 بمدينة خليفة أ.</p>
      </div>

      <h2>4. هندسة السقف الملكي: قبة دائرية متدرجة وتثبيت الثريا في الخرسانة</h2>
      <p>تحول السقف في مجلس السيد عبد الله العامري إلى تحفة معمارية تعتمد على قبة دائرية ساقطة (Circular Dome) مستوحاة من أسقف القصور الملكية الكلاسيكية.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/khalifa-city-majlis/ceiling-cove-acanthus-cartouche-detail.jpg" alt="زاوية سقف المجلس توضح تدرجات الكوف ونقوش أوراق الأكانثوس ومخارج التكييف الطولية برقم هاتف نسق 0505334861" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 4: دقة تشطيب زوايا السقف والكرانيش المسننة المنقوشة بزخارف الأكانثوس، مع دمج فتحات التكييف (Linear Slots) بدون تشويه الزخرفة (موثقة بهاتف نسق المعتمد: 050 533 4861).</p>
      </div>

      <p>وطبقاً لـ <strong>ضمان نسق الهندسي رقم 01 (تدعيم الأوزان في الهيكل الخرساني)</strong>، تم تعليق الثريا الكريستالية العملاقة بواسطة جسور فولاذية مجلفنة (Unistrut) مزروعة مباشرة في الصبة الخرسانية المسلحة للخرسانة فوق الجبس بورد. ويتميز السقف بـ:</p>
      <ul>
        <li><strong>مستويات دائرية ساقطة:</strong> تتداخل بنعومة هندسية لإخفاء خطوط إضاءة الـ LED الدافئة (2700K) التي تضيء المجلس بنعومة وتمنع أي وهج مزعج لعيون الضيوف.</li>
        <li><strong>صرة سقف مركزية منحوتة:</strong> صرة زهرية باروكية ضخمة تحتضن قاعدة الثريا وتوزع ثقلها البصري بشكل متوازن.</li>
        <li><strong>إزار محيطي مسنن بنقش نباتي:</strong> كورنيش كلاسيكي محيط بكامل الغرفة مدمج بفتحات التكييف الخطية بطريقة لا تؤثر على تدفق الهواء البارد أو تسبب تكاثف الرطوبة.</li>
      </ul>

      <h2>5. المجلس المكتمل: هيبة الضيافة الإماراتية في أبهى صورها</h2>
      <p>جاء المشهد النهائي للمجلس بعد اكتمال تركيب الجلسة الأرضية الفاخرة والسجاد الكلاسيكي والستائر ليعكس قمة الفخامة والترحاب الأصيل:</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/khalifa-city-majlis/grand-khalifa-city-majlis-completed.jpg" alt="المجلس الإماراتي الفخم المكتمل في مدينة خليفة أ حوض 12 قبة سقف وثريا كريستال وبانوهات مذهبة وجلسة متناسقة برقم 0505334861" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1024" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 5: المجلس المكتمل بالكامل في مدينة خليفة أ قطاع 12. تناغم مطلق بين الإضاءة الدافئة، وتذهيب البانوهات، وقبة السقف الدائرية، والجلسة المحيطية التي تستقبل الضيوف بأعلى درجات الهيبة والوقار (توثيق أرشيف نسق المعتمد 050 533 4861).</p>
      </div>

      <p>أبدى السيد عبد الله العامري سعادته الغامرة بالنتيجة التي فاقت الصورة الأولية التي أحضرها، معرباً عن تقديره لأمانة نسق الهندسية، والوفاء بالمواعيد، وتوفير آلاف الدراهم التي كانت ستُهدر في رسومات 3D لا داعي لها، مع الحصول على ضمان خطي لمدة 12 شهراً.</p>

      <h2>6. لماذا يختار ملاك الفلل والمجالس في مدينة خليفة شركة نسق؟</h2>
      <p>يقدم نموذج مجلس السيد عبد الله العامري دليلاً واضحاً على الأسباب التي تجعل نسق الخيار الأول لأصحاب الفلل والمجالس في <strong>مدينة خليفة أ، قطاع 12، مدينة شخبوط، وشاطئ الراحة</strong>:</p>

      <ol>
        <li><strong>تنفيذ أي صورة أو فكرة فوراً:</strong> أحضر صورتك من بنترست أو إنستغرام وسيقوم مهندسونا برفع المقاسات وتطبيقها بالمليمتر على الواقع.</li>
        <li><strong>صفر رسوم تصميم 3D مفروضة:</strong> وفر من 15,000 إلى 35,000 درهم واستثمر ميزانيتك في جودة المواد والخامات الحقيقية.</li>
        <li><strong>تذهيب يدوي ونحت حقيقي:</strong> حرفيون متخصصون في التذهيب بورق الذهب والنحت اليدوي الراقي.</li>
        <li><strong>ضمان خطي معتمد 12 شهراً:</strong> مدعوماً بضماناتنا الست الصارمة لراحة بال تامة وثقة مطلقة.</li>
      </ol>

      <!-- Frequently Asked Questions -->
      <section class="section pale" style="margin-top:50px;padding:35px;border-radius:4px;" id="faq">
        <h3 style="font-size:24px;margin-bottom:24px;color:#fff;">الأسئلة الشائعة حول تشطيب المجالس في مدينة خليفة (FAQ)</h3>
        <div style="display:flex;flex-direction:column;gap:20px;">
          
          <article class="faq-card">
            <h4>كيف تنفذ شركة نسق مجلساً فاخراً من مجرد صورة فوتوغرافية دون فرض رسوم تصميم 3D؟</h4>
            <p>بخلاف مكاتب التصميم التي تلزم العميل بدفع من 15,000 إلى 35,000 درهم فقط لإعادة رسم الصور ببرامج 3D Max، فإن نسق هي مقاول تنفيذ معتمد. يقوم مهندسونا بإجراء رفع مساحي ثلاثي الأبعاد بالليزر لمجلسك مجاناً، وتحويل صورتك إلى مخططات تنفيذية مطابقة للأبعاد الواقعية، وتقديم اقتراحات هندسية ترفع من فخامة المكان دون أي رسوم تصميم إضافية.</p>
          </article>

          <article class="faq-card">
            <h4>ما هي تقنية التذهيب اليدوي المستخدمة في بانوهات مجلس مدينة خليفة؟</h4>
            <p>تم تطبيق رقائق الذهب المعتق (24K Antique Gold Leaf) يدوياً على زوايا البانوهات الباروكية والكرانيش بواسطة مادة ميسيون التذهيب التخصصية، ثم عزلها بطبقة حماية بوليمرية شفافة تمنع بهتان الذهب أو تحوله للون الأخضر بفعل رطوبة الجو.</p>
          </article>

          <article class="faq-card">
            <h4>كيف يتم تثبيت ثريا كريستال عملاقة في قبة سقف دائرية؟</h4>
            <p>وفقاً لضمان نسق الهندسي رقم 01، يُمنع تعليق الثريات على صاج الجبس. نقوم بتركيب جسور صلب مجلفنة (Unistrut) وتيودورات مقواة مربوطة مباشرة بالصبة الخرسانية المسلحة للسقف، مختبرة لتحمل أكثر من 10 أضعاف وزن الثريا الصافي مع امتصاص الاهتزازات.</p>
          </article>

          <article class="faq-card">
            <h4>أين يقع هذا المشروع في أبوظبي؟</h4>
            <p>يقع هذا المجلس الفاخر في مدينة خليفة أ، قطاع 12 (حوض 12)، أبوظبي، ونُفذ لصالح السيد عبد الله العامري المحترم.</p>
          </article>

          <article class="faq-card">
            <h4>هل يمكن تفصيل البانوهات والكرانيش لتتناسب مع أثاث المجلس ومكيفات الهواء القائمة؟</h4>
            <p>نعم بالتأكيد. يقوم مهندسو نسق بتصميم وتوزيع إطارات البانوهات ومواقع إضاءات الجدران وفتحات التكييف الطولية (Linear Slot Diffusers) بدقة متناهية تتناغم مع مسارات الجلسة الأرضية أو الكنب ومواقع النوافذ.</p>
          </article>

        </div>
      </section>

      <!-- CTA Box -->
      <div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">
        <h4 style="color:var(--bronze);font-size:18px;">هل لديك صورة أو فكرة تود تنفيذها لمجلسك في مدينة خليفة؟</h4>
        <p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">لا تهدر ميزانيتك على رسومات 3D ورقية. شاركنا صورتك أو فكرتك عبر واتساب للحصول على استشارة هندسية فورية، ورفع مساحي مجاني بالليزر، ومقايسة أسعار تفصيلية خلال 24 إلى 48 ساعة.</p>
        <div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">
          <a class="button" href="/ar/contact/">طلب عرض أسعار مفصل</a>
          <a class="button" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20شاهدت%20مشروع%20مجلس%20مدينة%20خليفة%20ولدي%20صورة%20أود%20تنفيذها." style="background:#fff;color:#151613;border-color:#fff;">تحدث مع مهندسينا عبر واتساب</a>
        </div>
      </div>

      <!-- Related Guides -->
      <div class="related-insights" style="margin-top:60px;border-top:1px solid #e2e3de;padding-top:40px;">
        <h3 style="font-size:24px;margin-bottom:24px;">مقالات هندسية وأدلة ذات صلة بتشطيب المجالس والفلل في الإمارات</h3>
        <div class="insights-grid">
          <a class="article-card" href="/ar/insights/abu-dhabi-luxury-villa-majlis-fitout-guide/">
            <img class="article-card-img" src="/assets/villa.webp" alt="دليل تشطيب الفلل الفاخرة والمجالس الحديثة في أبوظبي" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">تشطيب الفلل والمجالس الفاخرة</span>
              <h4>دليل تشطيب الفلل الفاخرة والمجالس الحديثة في أبوظبي: البطين، مدينة خليفة، والمشرف</h4>
              <p>الدليل الشامل لتشطيب الفلل الفاخرة، مجالس الرجال والصالات الكبيرة، تكسيات الجدران، وتطبيق التصاميم ثلاثية الأبعاد (3D) بدقة متناهية دون مماطلة في أبوظبي.</p>
            </div>
          </a>
          <a class="article-card" href="/ar/insights/saadiyat-island-sde3-luxury-villa-handcrafted-fitout-case-study/">
            <img class="article-card-img" src="/assets/saadiyat-sde3-project/grand-chandelier-rosette-fluted-column.jpg" alt="قصة نجاح تشطيب فيلا جزيرة السعديات SDE3" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">جزيرة السعديات والحرفية التراثية</span>
              <h4>قصة نجاح تشطيب فيلا جزيرة السعديات (SDE3): نحت نيوكلاسيكي يدوي وأصالة الجبس المغربي المصمت لـ 100 عام</h4>
              <p>تشكيل ونحت يدوي 100% في موقع الفيلا، أعمدة رومانية مخددة، تيجان كورنثية، وبانوهات نيوكلاسيكية تدوم لأكثر من 100 عام بأصالة الجبس المغربي.</p>
            </div>
          </a>
        </div>
      </div>

    </div></article></main><footer><div><span class="wordmark">نسق <span lang="en">NASAQ</span></span><p>تناغم في المساحات.</p><p class="small">شركة نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م<br>أبوظبي، دولة الإمارات العربية المتحدة</p></div><div><a href="tel:+971505334861">+971 50 533 4861</a><a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a><a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a><a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">إنستغرام · @nasaq.fitout</a><a href="https://share.google/jD1fYkpZ96pX0pQPN" target="_blank" rel="noopener noreferrer">خرائط Google · ملف نسق</a></div><div><a href="/ar/services/">خدماتنا</a><a href="/ar/insights/">المقالات والأدلة</a><a href="/ar/about/">عن نسق</a><a href="/ar/contact/">ابدأ محادثة</a><p class="small">© 2026 نسق</p></div></footer><a class="floating" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20طلب%20استشارة%20لتشطيب%20مجلس%20في%20مدينة%20خليفة." aria-label="تواصل مع نسق عبر الواتساب">واتساب</a></body></html>`;

// Write HTML files
fs.writeFileSync(path.join(enDir, 'index.html'), enHtml, 'utf8');
fs.writeFileSync(path.join(arDir, 'index.html'), arHtml, 'utf8');
console.log('✅ Generated Khalifa City A Majlis Case Study (EN & AR)');

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
      <image:loc>https://nasaqfitout.ae/assets/khalifa-city-majlis/ceiling-cove-acanthus-cartouche-detail.jpg</image:loc>
      <image:title>Ceiling Stepped Cove and Acanthus Cartouche Detailing</image:title>
    </image:image>
    <image:image>
      <image:loc>https://nasaqfitout.ae/assets/khalifa-city-majlis/vertical-gold-leaf-boiserie-detail.jpg</image:loc>
      <image:title>Hand-Leafed Antique Gold Boiserie Moulding Detail</image:title>
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
      <image:loc>https://nasaqfitout.ae/assets/khalifa-city-majlis/ceiling-cove-acanthus-cartouche-detail.jpg</image:loc>
      <image:title>تفاصيل قبة السقف وزخارف الأكانثوس ومخارج التكييف في مدينة خليفة</image:title>
    </image:image>
    <image:image>
      <image:loc>https://nasaqfitout.ae/assets/khalifa-city-majlis/vertical-gold-leaf-boiserie-detail.jpg</image:loc>
      <image:title>تذهيب البانوهات الجدارية يدوياً بورق الذهب المعتق</image:title>
    </image:image>
  </url>\n`;

  sitemap = sitemap.replace('</urlset>', `${sitemapEntry}</urlset>`);
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ Updated dist/sitemap.xml with 2 new URLs (Total 62 URLs)');
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
      const newCaps = ['KhalifaCityMajlisFitOut', 'PhotoToRealityExecution', 'GoldLeafBoiserieMouldings', 'CircularCeilingDome'];
      newCaps.forEach(c => {
        if (!entry.capabilities.includes(c)) entry.capabilities.push(c);
      });
      const newQueries = [
        'تشطيب مجلس رجال في مدينة خليفة أ حوض 12',
        'تنفيذ صورة بنترست أو تصميم بدون رسوم 3D في أبوظبي',
        'مجلس عبد الله العامري مدينة خليفة نسق',
        'تذهيب البانوهات الجدارية بورق الذهب المعتق في أبوظبي',
        'Khalifa City A Sector 12 luxury majlis fit out',
        'Photo to reality interior execution without 3D fees Abu Dhabi',
        'Abdullah Al Ameri majlis Khalifa City case study',
        'Gold leaf neoclassical boiserie and circular ceiling dome'
      ];
      newQueries.forEach(q => {
        if (!entry.representativeQueries.includes(q)) entry.representativeQueries.push(q);
      });
      fs.writeFileSync(target, JSON.stringify(catalog, null, 2), 'utf8');
      console.log(`✅ Updated ${path.relative(DIST_DIR, target)}`);
    }
  }
});

console.log('\n🚀 Khalifa City A Majlis Case Study successfully built and integrated!');

