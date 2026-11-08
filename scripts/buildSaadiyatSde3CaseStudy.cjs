/**
 * NASAQ FITOUT - Build Case Study for Saadiyat Island SDE3 Luxury Villa
 * 
 * Features:
 * - 100% on-site handcrafted neoclassical interior fit-out
 * - Ancient Moroccan solid plaster artisan heritage applied to modern French neoclassical design
 * - 100+ year durability engineering: fluted columns with Corinthian capitals, dentil cornices, multi-tier boiserie
 * - 5 High-res photos (including in-progress master craftsman on scaffolding)
 * - Rich JSON-LD Schemas: Article, HomeAndConstructionBusiness, BreadcrumbList, FAQPage
 * - Bilingual parity (EN & AR) with strict trailing-slash canonicals and reciprocal hreflang
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const enDir = path.join(DIST_DIR, 'insights', 'saadiyat-island-sde3-luxury-villa-handcrafted-fitout-case-study');
const arDir = path.join(DIST_DIR, 'ar', 'insights', 'saadiyat-island-sde3-luxury-villa-handcrafted-fitout-case-study');

[enDir, arDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

const caseStudy = {
  slug: 'saadiyat-island-sde3-luxury-villa-handcrafted-fitout-case-study',
  badgeEn: 'Saadiyat Island & Artisanal Heritage',
  badgeAr: 'جزيرة السعديات والحرفية التراثية',
  readTimeEn: '9 min read',
  readTimeAr: 'قراءة 9 دقائق',
  image: '/assets/saadiyat-sde3-project/grand-chandelier-rosette-fluted-column.jpg',
  date: '2026-11-08',
  
  // SEO Metadata
  titleEn: 'Saadiyat Island SDE3 Villa Fit-Out Case Study: 100-Year Handcrafted Neoclassical Plaster & Moroccan Mastery | NASAQ',
  descEn: 'Authentic case study of a luxury villa in SDE3 Saadiyat Island, Abu Dhabi: 100% on-site handcrafted neoclassical boiserie, fluted columns, Corinthian capitals, and 100-year solid Moroccan plaster longevity.',
  summaryEn: 'Comprehensive case study of a private luxury villa in SDE3, Saadiyat Island, Abu Dhabi. Showcases 100% on-site handcrafted neoclassical plasterwork, fluted Roman columns with Corinthian capitals, intricate dentil cornices, and grand chandelier medallions built using ancestral Moroccan solid plaster techniques engineered to last over 100 years.',

  titleAr: 'قصة نجاح تشطيب فيلا جزيرة السعديات (SDE3): نحت نيوكلاسيكي يدوي وأصالة الجبس المغربي المصمت لـ 100 عام | نسق',
  descAr: 'دراسة حالة واقعية لتشطيب فيلا فاخرة في مشروع SDE3 بجزيرة السعديات بأبوظبي: تشكيل ونحت يدوي 100% في موقع الفيلا، أعمدة رومانية مخددة، تيجان كورنثية، وبانوهات نيوكلاسيكية تدوم لأكثر من 100 عام بأصالة الجبس المغربي.',
  summaryAr: 'دراسة حالة استثنائية لفيلا فاخرة في منطقة SDE3 بجزيرة السعديات في أبوظبي. توثق تنفيذ أعمال الجبس والبانوهات النيوكلاسيكية يدوياً بالكامل في الموقع، تشمل أعمدة رومانية مخددة وتيجان كورنثية وكورنيش مسنن وصرر أسقف ملكية، معتمدة على سر صلابة الحرفة المغربية التقليدية ومصممة لتدوم لأكثر من 100 عام دون أدنى تشقق.'
};

// 1. Generate English HTML
const enHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${caseStudy.titleEn}</title><meta name="description" content="${caseStudy.descEn}"><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=6"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="Saadiyat Island SDE3, Abu Dhabi"><meta name="geo.position" content="24.5230;54.4340"><meta name="ICBM" content="24.5230, 54.4340"><meta property="og:type" content="article"><meta property="og:site_name" content="NASAQ Fit-Out"><meta property="og:title" content="${caseStudy.titleEn}"><meta property="og:description" content="${caseStudy.descEn}"><meta property="og:url" content="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><meta property="og:image" content="https://nasaqfitout.ae${caseStudy.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${caseStudy.titleEn}"><meta name="twitter:description" content="${caseStudy.descEn}"><meta name="twitter:image" content="https://nasaqfitout.ae${caseStudy.image}"><script type="application/ld+json">
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
        "Saadiyat Island",
        "Saadiyat SDE3",
        "Saadiyat Beach Villas",
        "Saadiyat Cultural District",
        "Saadiyat Reserve",
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
      "headline": "Saadiyat Island SDE3 Villa Fit-Out Case Study: 100-Year Handcrafted Neoclassical Plaster & Moroccan Mastery",
      "description": "${caseStudy.descEn}",
      "inLanguage": "en",
      "mainEntityOfPage": "https://nasaqfitout.ae/insights/${caseStudy.slug}/",
      "datePublished": "2026-11-08T09:00:00+04:00",
      "dateModified": "2026-11-08T09:00:00+04:00",
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
          "name": "Saadiyat SDE3 Handcrafted Villa Case Study",
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
          "name": "What makes Moroccan plaster craftsmanship endure for more than 100 years?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional Moroccan master plastering (الجبس البلدي المصمت) utilizes high-purity natural gypsum reinforced with organic natural sisal hemp fibers and slow-curing mineral binders. Unlike commercial hollow drywall or polyurethane foam mouldings that degrade, warp, and crack after 3-5 years, solid fibrous plaster creates a monolithic, stone-like bond with masonry and concrete, capable of withstanding thermal fluctuations and physical impact for over a century."
          }
        },
        {
          "@type": "Question",
          "name": "Were the fluted columns and boiserie in Saadiyat SDE3 cast on-site?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. 100% of the architectural elements—including the grand fluted Roman columns, Corinthian capitals, multi-tier dentil cornices, and French boiserie panels—were hand-moulded, cast, and custom-sculpted directly inside the villa by NASAQ's master craftsmen (Maâlem). This on-site fabrication guarantees millimeter-accurate fitting around existing structural pillars."
          }
        },
        {
          "@type": "Question",
          "name": "How does NASAQ anchor heavy fluted columns safely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under NASAQ Ironclad Guarantee 01, columns are never hollow decorative shells placed loosely against walls. They feature internal reinforced steel ties and solid mortar infill anchored directly into structural columns and concrete slabs, ensuring complete seismic and structural stability."
          }
        },
        {
          "@type": "Question",
          "name": "What paint finish is applied to neoclassical handcrafted plaster?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We apply a Level-5 ultra-smooth surface finish using Jotun Fenomastic Pure Colours in a dead-flat matte white. The substrate is hand-sanded with micro-grit abrasive meshes to ensure zero brush marks, orange peel, or surface waviness under grazing natural daylight."
          }
        },
        {
          "@type": "Question",
          "name": "Does NASAQ undertake turnkey luxury villa fit-outs on Saadiyat Island?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. NASAQ is an authorized fit-out contractor with proven experience across Saadiyat Island, including SDE3, Soho Residences, Saadiyat Beach Villas, Saadiyat Reserve, and Mamsha Al Saadiyat. We handle all developer approvals, security deposits, gate passes, and turnkeys."
          }
        }
      ]
    }
  ]
}
</script></head><body><a class="skip" href="#main">Skip to content</a><header><a class="brand" href="/" aria-label="NASAQ home"><img src="/assets/logo.svg" alt="NASAQ approved logo" width="500" height="500"></a><nav aria-label="Main navigation"><a href="/services/">Services</a><a href="/projects/">Concepts</a><a href="/insights/">Insights</a><a href="/about/">About</a><a href="/contact/">Contact</a></nav><a class="lang-switch" href="/ar/insights/${caseStudy.slug}/" aria-label="النسخة العربية">العربية</a><a class="navcta" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project.">Discuss your project</a><button id="menu" aria-label="Open navigation" aria-expanded="false">Menu</button></header><main id="main"><div class="breadcrumbs"><a href="/">Home</a> / <a href="/insights/">Insights</a> / <span>Saadiyat SDE3 Handcrafted Villa Case Study</span></div><article class="article-container"><div class="article-header"><span class="article-badge">${caseStudy.badgeEn}</span><h1>${caseStudy.titleEn.split('|')[0].trim()}</h1><div class="article-meta-row"><span>By NASAQ Engineering Team</span><span>•</span><span>${caseStudy.readTimeEn}</span><span>•</span><span>Saadiyat Island SDE3, Abu Dhabi</span><span>•</span><span>Updated Nov 2026</span></div></div><img class="article-featured-img" src="${caseStudy.image}" alt="Grand crystal chandelier suspended from hand-cast ceiling rosette with neoclassical fluted column and dentil cornice in SDE3 Saadiyat Island villa" width="1024" height="768" loading="eager"><div class="article-content">

      <!-- Executive Project Summary Card -->
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px;border-bottom:1px solid #383a34;padding-bottom:12px;">
          <strong style="color:var(--bronze);font-size:18px;">PROJECT ARCHIVE · SAADIYAT ISLAND LUXURY VILLA</strong>
          <span style="background:var(--bronze);color:#181918;font-size:12px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:0.5px;">100% ON-SITE HANDCRAFTED · 100-YEAR LIFESPAN</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;font-size:14px;color:#d8d9d0;">
          <div><strong style="color:#fff;">Project:</strong> Private Luxury Family Villa</div>
          <div><strong style="color:#fff;">Location:</strong> Saadiyat Island, SDE3 (Saadiyat Development Zone 3), Abu Dhabi</div>
          <div><strong style="color:#fff;">Style / Architectural Language:</strong> Modern Neoclassical with Classical Roman & French Orders</div>
          <div><strong style="color:#fff;">Craftsmanship Heritage:</strong> Traditional Moroccan Solid Plaster & Fibrous Natural Core (الجبس البلدي المصمت)</div>
          <div><strong style="color:#fff;">Core Elements:</strong> Full Fluted Columns, Sculpted Corinthian Capitals, Modillion & Dentil Cornices, Grand Ceiling Rosettes, Double-Height Wall Boiserie</div>
          <div><strong style="color:#fff;">Design Life:</strong> Engineered for 100+ Years of Crack-Free Structural Longevity</div>
        </div>
      </div>

      <p class="article-lead">On Saadiyat Island—Abu Dhabi's preeminent sanctuary of culture, pristine coastlines, and bespoke architectural residences—luxury villas demand an uncompromising caliber of craftsmanship. While contemporary interior trends frequently flirt with mass-produced polyurethane trims and hollow drywall boards, discerning villa owners understand a timeless truth: <strong>true architectural permanence cannot be bought in a plastic mold from a hardware catalog; it must be sculpted by master hands directly inside the residence</strong>.</p>

      <p>This technical case study documents the extraordinary execution of a private grand salon and double-height living pavilion in <strong>Saadiyat Island, SDE3, Abu Dhabi</strong>. It reveals the architectural synergy achieved by combining <strong>ancient Moroccan master plastercraft (حرفة الجبس المغربي الأصيل)</strong> with <strong>refined French and Roman Neoclassical design</strong>—engineering solid, hand-moulded plaster elements capable of enduring for <strong>more than 100 years without sagging, joint cracking, or surface deterioration</strong>.</p>

      <h2>1. The Problem with Mass-Market Mouldings: Why Commercial Villas Crack</h2>
      <p>In high-end residential fit-outs across the UAE, property owners frequently invest millions of dirhams into palatial villas, only to watch their decorative interior finishes degrade within three to five years. The root cause lies in the commercial construction industry's reliance on shortcut materials:</p>

      <ul>
        <li><strong>Polyurethane & Polystyrene (Foam) Trims:</strong> High-density foam mouldings expand and contract dramatically under UAE HVAC cycling (20°C in air-conditioned interiors vs. 45°C ambient outside). Within 24 months, adhesive bonds snap, leaving open gaps and peeled paint at corner miters.</li>
        <li><strong>Commercial Hollow Drywall:</strong> Standard paper-faced gypsum plasterboard suspended on thin 0.45mm metal studs lacks the mass and rigidity required for deep classical architectural reliefs. Heavy crystal chandeliers cause sagging, and wall impacts leave unsightly holes.</li>
        <li><strong>Factory Pre-Cast Components with Toxic Resins:</strong> Factory-cast components often use chemical binders that emit volatile organic compounds (VOCs) and discolor under UV solar exposure from grand floor-to-ceiling windows.</li>
      </ul>

      <p>For the SDE3 Saadiyat Island villa, the client demanded a generational interior: finishes that feel solid to the touch, radiate palace-grade acoustic gravitas, and stand as pristine in fifty years as on the day of handover.</p>

      <h2>2. The Ancient Secret: Moroccan Solid Fibrous Plaster Mastery</h2>
      <p>To achieve this vision, NASAQ mobilized our elite team of master plaster craftsmen (Maâlem) carrying generations of traditional North African artisanal heritage. Moroccan plasterwork (الجبس البلدي المصمت) has stood inside imperial palaces and grand mosques for centuries, enduring the test of time through distinct material science:</p>

      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin:28px 0;">
        <h4 style="color:var(--bronze);margin-bottom:8px;font-size:16px;">The 4 Pillars of 100-Year Plaster Longevity:</h4>
        <ol style="color:#d8d9d0;font-size:14px;line-height:1.8;margin:0;padding-left:20px;">
          <li><strong>High-Purity Natural Alabaster Gypsum:</strong> Free of chemical plasticizers, mixed with precise water-gypsum ratios to produce a rock-solid mineral crystalline matrix.</li>
          <li><strong>Organic Natural Fiber Reinforcement (Sisal & Hemp):</strong> Long vegetable fibers are saturated and woven into the liquid gypsum paste during casting. This creates an internal tensile reinforcement network akin to rebar in concrete, preventing micro-fissures and brittle fracture.</li>
          <li><strong>Monolithic Substrate Integration:</strong> Rather than gluing elements with superficial mastics, the wet plaster elements are mechanically bonded and chemically fused directly to structural blockwork and concrete columns using galvanized anchor ties.</li>
          <li><strong>Zero Synthetic Off-Gassing:</strong> 100% natural, non-toxic, fireproof (Class A1), and naturally humidity-regulating in coastal marine environments like Saadiyat Island.</li>
        </ol>
      </div>

      <h2>3. Behind the Scenes: 100% On-Site Handcrafting</h2>
      <p>True luxury cannot be hurried through a factory assembly line. Every single fluted column, dentil tooth, and acanthus leaf in this Saadiyat SDE3 residence was <strong>hand-formed, cast, and sculpted on-site inside the villa itself</strong>.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-sde3-project/artisan-installing-fluted-column-onsite.jpg" alt="Master craftsman installing solid fluted Roman column section on scaffolding inside SDE3 Saadiyat Island villa" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 1: Rare behind-the-scenes documentation. NASAQ master artisan on scaffolding, custom-fitting and securing a semi-circular solid fluted column segment over the reinforced structural steel backing.</p>
      </div>

      <p>As documented in Photo 1, the fluted columns were not hollow aesthetic shells glued to the wall. NASAQ's site engineers first erected rigid galvanized structural steel frameworks anchored into the concrete floor slab and upper ceiling beam. Our master craftsmen then hand-cast precision semi-circular fluted segments using on-site negative molds, encased the structural core, and filled the cavity with high-density mineral plaster.</p>

      <p>Once set, the joints between column sections were painstakingly hand-blended using micro-fine plaster paste, resulting in a single, seamless, monolithic column that sounds completely solid when tapped and can never crack or buckle.</p>

      <h2>4. Architectural Anatomy: Roman Columns, Corinthian Capitals & Dentil Cornices</h2>
      <p>The grand salon incorporates authentic classical Roman and French proportions scaled to the monumental ceiling heights of the Saadiyat villa.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-sde3-project/corinthian-capital-dentil-cornice-detail.jpg" alt="Sculpted Corinthian capital, dentil modillion cornice, and French wall mouldings in SDE3 Saadiyat Island villa" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="768" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 2: Upward architectural detail showing the hand-sculpted Corinthian capital, multi-tiered dentil and modillion ceiling cornice, and precision boiserie frame reveals.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:20px;margin:28px 0;">
        <div style="background:#222321;border:1px solid #383a34;padding:18px;border-radius:3px;">
          <h4 style="color:var(--bronze);font-size:16px;margin-bottom:8px;">1. Corinthian Capitals</h4>
          <p style="color:#c5c7be;font-size:13px;line-height:1.7;">Hand-carved acanthus leaves, volutes, and floral abacuses crowning the fluted shaft. Each leaf is undercut with artistic depth to create dramatic play of natural light and shadow.</p>
        </div>
        <div style="background:#222321;border:1px solid #383a34;padding:18px;border-radius:3px;">
          <h4 style="color:var(--bronze);font-size:16px;margin-bottom:8px;">2. Dentil & Modillion Cornices</h4>
          <p style="color:#c5c7be;font-size:13px;line-height:1.7;">A monumental multi-tier cornice featuring alternating modillion brackets and precision-spaced dentil blocks, anchoring the ceiling transition with classical architectural weight.</p>
        </div>
        <div style="background:#222321;border:1px solid #383a34;padding:18px;border-radius:3px;">
          <h4 style="color:var(--bronze);font-size:16px;margin-bottom:8px;">3. French Boiserie Wall Frames</h4>
          <p style="color:#c5c7be;font-size:13px;line-height:1.7;">Double-height vertical wall panelling with double-stepped ovolo and cyma reversa profiles, perfectly centered around crystal wall sconces and grand arched doorways.</p>
        </div>
      </div>

      <h2>5. Grand Reception Perspective & Ceiling Chandelier Medallions</h2>
      <p>The centerpiece of the reception pavilion is a magnificent crystal chandelier suspended from a <strong>hand-cast neoclassical ceiling rosette (medallion)</strong> featuring concentric floral garlands and radiating acanthus palmettes.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-sde3-project/grand-chandelier-rosette-fluted-column.jpg" alt="Grand ceiling view with multi-tiered crystal chandelier, hand-sculpted rosette, and full fluted column in SDE3 Saadiyat villa" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="768" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 3: Full grand salon composition. The chandelier is anchored to a structural steel beam inside the ceiling slab, flanked by dual fluted columns and crowned by hand-cast rosettes.</p>
      </div>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-sde3-project/neoclassical-double-height-boiserie-wall.jpg" alt="Double-height neoclassical wall boiserie with symmetrical crystal sconces and dentil cornice in Saadiyat Island" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="768" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 4: Symmetrical double-height wall framing. Notice the dead-flat Level-5 finish that absorbs natural daylight with zero surface flashing or roller texture.</p>
      </div>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-sde3-project/craftsman-fluted-column-salon.jpg" alt="Finished grand salon with master craftsman inspecting the flawless fluted column and neoclassical mouldings" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 5: Final handover inspection in Saadiyat SDE3. The scale of the fluted column and ceiling cornice commands royal presence, perfectly integrated with luxury bespoke furnishings.</p>
      </div>

      <h2>6. Level-5 Surface Finishing: The Art of Flawless White</h2>
      <p>Applying paint over complex, three-dimensional solid plaster demands supreme surface discipline. Standard painting crews apply thick emulsions with heavy rollers, which clog delicate carving crevices and produce an ugly orange-peel texture.</p>

      <p>NASAQ enforced our Level-5 Architectural Finishing Protocol:</p>
      <ol>
        <li><strong>Substrate Curing & De-Dusting:</strong> Plasterwork was allowed to cure naturally to achieve full crystalline hardness before any primer application.</li>
        <li><strong>Micro-Abrasive Hand Polishing:</strong> Specialized silicone carbide sanding sponges were used to sharpen every dentil groove and smooth every flat panel to glass-like uniformity.</li>
        <li><strong>Jotun Fenomastic Pure Colours:</strong> Airless spray application of premium Jotun Fenomastic dead-flat matte finish in pure architectural white, providing deep color saturation and washability without surface sheen reflection.</li>
      </ol>

      <h2>7. Why Saadiyat Island Villa Owners Entrust NASAQ</h2>
      <p>For villa owners across Saadiyat Island—including <strong>SDE3, Soho Residences, Saadiyat Beach Villas, Saadiyat Reserve, Saadiyat Lagoons, and Mamsha</strong>—NASAQ delivers unmatched advantages:</p>

      <ol>
        <li><strong>Generational 100-Year Craftsmanship:</strong> We reject fragile plastic foam and hollow quick-fixes in favor of authentic, solid, fiber-reinforced mineral plaster.</li>
        <li><strong>Direct In-House Master Artisans:</strong> No subcontractors or brokers. Our master plaster sculptors work exclusively under NASAQ engineering supervision.</li>
        <li><strong>Turnkey Developer Permitting:</strong> Full compliance with Aldar, Modon, and Saadiyat Island building management guidelines, gate passes, and security deposits.</li>
        <li><strong>Ironclad 12-Month Written Warranty:</strong> Backed by our 6 Ironclad Guarantees for complete peace of mind.</li>
      </ol>

      <!-- Frequently Asked Questions -->
      <section class="section pale" style="margin-top:50px;padding:35px;border-radius:4px;" id="faq">
        <h3 style="font-size:24px;margin-bottom:24px;color:#fff;">Frequently Asked Questions (FAQ)</h3>
        <div style="display:flex;flex-direction:column;gap:20px;">
          
          <article class="faq-card">
            <h4>What makes Moroccan plaster craftsmanship endure for more than 100 years?</h4>
            <p>Traditional Moroccan master plastering (الجبس البلدي المصمت) utilizes high-purity natural gypsum reinforced with organic natural sisal hemp fibers and slow-curing mineral binders. Unlike commercial hollow drywall or polyurethane foam mouldings that degrade, warp, and crack after 3-5 years, solid fibrous plaster creates a monolithic, stone-like bond with masonry and concrete, capable of withstanding thermal fluctuations and physical impact for over a century.</p>
          </article>

          <article class="faq-card">
            <h4>Were the fluted columns and boiserie in Saadiyat SDE3 cast on-site?</h4>
            <p>Yes. 100% of the architectural elements—including the grand fluted Roman columns, Corinthian capitals, multi-tier dentil cornices, and French boiserie panels—were hand-moulded, cast, and custom-sculpted directly inside the villa by NASAQ's master craftsmen (Maâlem). This on-site fabrication guarantees millimeter-accurate fitting around existing structural pillars.</p>
          </article>

          <article class="faq-card">
            <h4>How does NASAQ anchor heavy fluted columns safely?</h4>
            <p>Under NASAQ Ironclad Guarantee 01, columns are never hollow decorative shells placed loosely against walls. They feature internal reinforced steel ties and solid mortar infill anchored directly into structural columns and concrete slabs, ensuring complete seismic and structural stability.</p>
          </article>

          <article class="faq-card">
            <h4>What paint finish is applied to neoclassical handcrafted plaster?</h4>
            <p>We apply a Level-5 ultra-smooth surface finish using Jotun Fenomastic Pure Colours in a dead-flat matte white. The substrate is hand-sanded with micro-grit abrasive meshes to ensure zero brush marks, orange peel, or surface waviness under grazing natural daylight.</p>
          </article>

          <article class="faq-card">
            <h4>Does NASAQ undertake turnkey luxury villa fit-outs on Saadiyat Island?</h4>
            <p>Yes. NASAQ is an authorized fit-out contractor with proven experience across Saadiyat Island, including SDE3, Soho Residences, Saadiyat Beach Villas, Saadiyat Reserve, and Mamsha Al Saadiyat. We handle all developer approvals, security deposits, gate passes, and turnkeys.</p>
          </article>

        </div>
      </section>

      <!-- CTA Box -->
      <div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">
        <h4 style="color:var(--bronze);font-size:18px;">Planning a Bespoke Villa Fit-Out on Saadiyat Island?</h4>
        <p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">Commission generational craftsmanship that elevates your residence to a true architectural masterwork. Share your floor plans or inspiration concepts for an itemized BOQ and complimentary 3D laser survey within 24 to 48 hours.</p>
        <div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">
          <a class="button" href="/contact/">Request an itemized quotation</a>
          <a class="button" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20saw%20your%20Saadiyat%20SDE3%20handcrafted%20plaster%20case%20study%20and%20would%20like%20to%20discuss%20my%20villa." style="background:#fff;color:#151613;border-color:#fff;">WhatsApp our site engineers</a>
        </div>
      </div>

      <!-- Related Guides -->
      <div class="related-insights" style="margin-top:60px;border-top:1px solid #e2e3de;padding-top:40px;">
        <h3 style="font-size:24px;margin-bottom:24px;">Related Technical Guides & UAE Case Studies</h3>
        <div class="insights-grid">
          <a class="article-card" href="/insights/saadiyat-island-72-hour-fit-out-case-study/">
            <img class="article-card-img" src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="Saadiyat Island Soho Residence 72-Hour Fit-Out Case Study" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">Real Execution & Case Study</span>
              <h4>Saadiyat Island Soho Residence: 72-Hour Turnkey Wall Mouldings & Gypsum Fit-Out Case Study</h4>
              <p>Case study of a 72-hour luxury apartment transformation in Soho Block A, Saadiyat Island, Abu Dhabi with verified Google review.</p>
            </div>
          </a>
          <a class="article-card" href="/insights/villa-fitout-al-ketbi-mbz-integrity-case-study/">
            <img class="article-card-img" src="/assets/alketbi-project/ceiling-chandeliers-rosette.jpg" alt="MBZ City Villa Fit-Out Case Study Mr. Ali Al Ketbi" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">Client Case Study & Engineering Integrity</span>
              <h4>MBZ City Luxury Villa Fit-Out Case Study: Integrity, Defect Whistleblowing & 7-Year Crack-Free Handover for Mr. Ali Al Ketbi</h4>
              <p>How NASAQ defended the client against contractor-consultant collusion, engineered slab-anchored chandelier mountings, and delivered 7-year zero-crack proof in MBZ City.</p>
            </div>
          </a>
        </div>
      </div>

    </div></article></main><footer><div><span class="wordmark">NASAQ <span lang="ar">نسق</span></span><p>Spaces in harmony.</p><p class="small">NASAQ Interior Design Implementation Works – L.L.C – S.P.C<br>Abu Dhabi, United Arab Emirates</p></div><div><a href="tel:+971505334861">+971 50 533 4861</a><a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a><a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a><a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">Instagram · @nasaq.fitout</a><a href="https://share.google/jD1fYkpZ96pX0pQPN" target="_blank" rel="noopener noreferrer">Google Maps · NASAQ Profile</a></div><div><a href="/services/">Our services</a><a href="/insights/">Insights & Guides</a><a href="/about/">About NASAQ</a><a href="/contact/">Start a conversation</a><p class="small">© 2026 NASAQ</p></div></footer><a class="floating" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project." aria-label="Contact NASAQ on WhatsApp">WhatsApp</a></body></html>`;

// 2. Generate Arabic HTML
const arHtml = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${caseStudy.titleAr}</title><meta name="description" content="${caseStudy.descAr}"><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=6"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="جزيرة السعديات SDE3، أبوظبي"><meta name="geo.position" content="24.5230;54.4340"><meta name="ICBM" content="24.5230, 54.4340"><meta property="og:type" content="article"><meta property="og:site_name" content="نسق للتصميم الداخلي والمقاولات"><meta property="og:title" content="${caseStudy.titleAr}"><meta property="og:description" content="${caseStudy.descAr}"><meta property="og:url" content="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><meta property="og:image" content="https://nasaqfitout.ae${caseStudy.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${caseStudy.titleAr}"><meta name="twitter:description" content="${caseStudy.descAr}"><meta name="twitter:image" content="https://nasaqfitout.ae${caseStudy.image}"><script type="application/ld+json">
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
        "جزيرة السعديات",
        "مشروع SDE3",
        "فلل شاطئ السعديات",
        "المنطقة الثقافية بالسعديات",
        "سعديات ريزيرف",
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
      "headline": "قصة نجاح تشطيب فيلا جزيرة السعديات (SDE3): نحت نيوكلاسيكي يدوي وأصالة الجبس المغربي المصمت لـ 100 عام",
      "description": "${caseStudy.descAr}",
      "inLanguage": "ar",
      "mainEntityOfPage": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/",
      "datePublished": "2026-11-08T09:00:00+04:00",
      "dateModified": "2026-11-08T09:00:00+04:00",
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
          "name": "فيلا السعديات SDE3 والنحت اليدوي",
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
          "name": "ما الذي يجعل حرفة الجبس المغربي المصمت تعيش لأكثر من 100 عام؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "تعتمد حرفة الجبس المغربي البلدي المصمت على مادة الجبس الطبيعي النقي مدمجة بألياف نباتية قوية (حبال السيزار والكتان الطبيعي) بدون أي مواد كيميائية سريعة الجفاف. خلافاً لقوالب الفوم أو ألواح الجبس الهشة التي تتشقق بعد 3 إلى 5 سنوات، يشكل الجبس المصمت كتلة صلبة كالحجر ترتبط بالخرسانة بصلابة تقاوم التمدد الحراري والاهتزازات لأكثر من قرن كامل."
          }
        },
        {
          "@type": "Question",
          "name": "هل تم تصنيع ونحت الأعمدة الرومانية والبانوهات في فيلا السعديات SDE3 بالموقع مباشرة؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، 100% من عناصر التشطيب تم صبها ونحتها وتفصيلها يدوياً داخل موقع الفيلا بجزيرة السعديات بأيدي 'المعلمين' المغاربة التابعين لشركة نسق. لم نستخدم قوالب تجارية مسبقة الصب، مما ضمن تطابقاً ملمترياً فائقاً مع الأعمدة الخرسانية وارتفاعات الأسقف الشاهقة."
          }
        },
        {
          "@type": "Question",
          "name": "كيف يتم تثبيت وتدعيم الأعمدة الكلاسيكية الكبيرة بأمان في الفلل؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "وفقاً لضمان نسق الهندسي رقم 01، يُمنع تركيب الأعمدة كقشور ديكورية فارغة. نقوم بزرع جسور حديد مجلفنة مربوطة بالصبة الخرسانية للأرضية والأسقف، ثم يُصب حولها الجبس المصمت لتصبح الأعمدة كتلة إنشائية صلبة ومتماسكة لا تتحرك أبداً."
          }
        },
        {
          "@type": "Question",
          "name": "ما هو نوع الدهان المستخدم لإبراز تفاصيل الزخارف النيوكلاسيكية؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نطبق دهانات جوتن فينوماستيك النقية (Jotun Fenomastic Pure Colours) بمستوى Level-5 مطفي فائق النعومة، بعد سنفرة الجبس يدوياً بإسفنج كربيد السيليكون الدقيق لضمان اختفاء أي أثر لضربات الرول أو تموجات الضوء الطبيعي."
          }
        },
        {
          "@type": "Question",
          "name": "هل تنفذ شركة نسق مشاريع تشطيب الفلل المتكاملة في جزيرة السعديات؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، شركة نسق مقاول ديكور معتمد يمتلك سجلاً حافلاً في جزيرة السعديات (SDE3، سوهو ريزيدنس، فلل شاطئ السعديات، سعديات ريزيرف، وممشى السعديات)، ونتولى كافة تصاريح الدخول وإيداع التأمينات مع إدارة المباني والمطورين."
          }
        }
      ]
    }
  ]
}
</script></head><body><a class="skip" href="#main">تخطي إلى المحتوى</a><header><a class="brand" href="/ar/" aria-label="الصفحة الرئيسية لنسق"><img src="/assets/logo.svg" alt="شعار نسق المعتمد" width="500" height="500"></a><nav aria-label="الملاحة الرئيسية"><a href="/ar/services/">خدماتنا</a><a href="/ar/projects/">مفاهيم المشاريع</a><a href="/ar/insights/">المقالات والأدلة</a><a href="/ar/about/">عن نسق</a><a href="/ar/contact/">اتصل بنا</a></nav><a class="lang-switch" href="/insights/${caseStudy.slug}/" aria-label="English version">English</a><a class="navcta" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20طلب%20استشارة%20لتشطيب%20فيلا%20في%20جزيرة%20السعديات.">تواصل معنا الآن</a><button id="menu" aria-label="فتح القائمة" aria-expanded="false">القائمة</button></header><main id="main"><div class="breadcrumbs"><a href="/ar/">الرئيسية</a> / <a href="/ar/insights/">المقالات وقصص النجاح</a> / <span>فيلا السعديات SDE3 والنحت اليدوي</span></div><article class="article-container"><div class="article-header"><span class="article-badge">${caseStudy.badgeAr}</span><h1>${caseStudy.titleAr.split('|')[0].trim()}</h1><div class="article-meta-row"><span>بقلم فريق الهندسة في شركة نسق</span><span>•</span><span>${caseStudy.readTimeAr}</span><span>•</span><span>جزيرة السعديات SDE3، أبوظبي</span><span>•</span><span>تحديث نوفمبر 2026</span></div></div><img class="article-featured-img" src="${caseStudy.image}" alt="ثريا كريستال ملكية معلقة في صرة سقف منحوتة يدوياً مع أعمدة رومانية مخددة وكورنيش مسنن في فيلا SDE3 بجزيرة السعديات بأبوظبي" width="1024" height="768" loading="eager"><div class="article-content">

      <!-- Executive Project Summary Card -->
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px;border-bottom:1px solid #383a34;padding-bottom:12px;">
          <strong style="color:var(--bronze);font-size:18px;">توثيق المشروع · فلل جزيرة السعديات الفاخرة</strong>
          <span style="background:var(--bronze);color:#181918;font-size:12px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:0.5px;">تشكيل ونحت يدوي 100% بالموقع · عمر افتراضي +100 عام</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;font-size:14px;color:#d8d9d0;">
          <div><strong style="color:#fff;">المشروع:</strong> فيلا سكنية عائلية ملكية خاصة</div>
          <div><strong style="color:#fff;">الموقع:</strong> جزيرة السعديات، مشروع SDE3 (Saadiyat Development)، أبوظبي</div>
          <div><strong style="color:#fff;">الطراز المعماري:</strong> نيوكلاسيك فخم (Modern Neoclassical) بنسب رومانية وفرنسية أصيلة</div>
          <div><strong style="color:#fff;">الحرفة والتنفيذ:</strong> أصالة الجبس المغربي البلدي المصمت المدعم بالألياف الطبيعية</div>
          <div><strong style="color:#fff;">العناصر المنفذة:</strong> أعمدة رومانية مخددة كاملة، تيجان كورنثية منحوتة، كورنيش مسنن (Dentil & Modillion)، صرر أسقف ملكية، وبانوهات جدارية بارتفاع مزدوج</div>
          <div><strong style="color:#fff;">معيار المتانة:</strong> مصممة هندسياً لتدوم لأكثر من 100 عام بلا أي شروخ أو هبوط</div>
        </div>
      </div>

      <p class="article-lead">في جزيرة السعديات بأبوظبي—حيث تلتقي المتاحف العالمية وشواطئ الخليج العربي الصافية بأرقى المجتمعات السكنية في الدولة—تتطلب الفلل الفاخرة مستوى استثنائياً من الإتقان المعماري لا يقبل الحلول الوسط. وفي حين تنجرف بعض ممارسات السوق التجاري نحو قوالب الفوم البلاستيكية المستوردة وألواح الجبس المجوفة الرخيصة، يدرك أصحاب الفلل الراقية حقيقة معمارية ثابتة: <strong>الفخامة الملكية التي تتوارثها الأجيال لا تُشترى جاهزة في كراتين، بل تُنحت وتُشكل قطعة بقطعة بأيدي كبار الحرفيين داخل موقع الفيلا نفسه</strong>.</p>

      <p>توثق هذه المقالة الفنية دراسة حالة استثنائية لتشطيب صالة الاستقبال الكبرى وصالات المعيشة ذات الارتفاعات الشاهقة (Double-Height) في <strong>فيلا فاخرة بمشروع SDE3 بجزيرة السعديات في أبوظبي</strong>. وتستعرض كيف حققت شركة نسق إنجازاً معمارياً فريداً بدمج <strong>أصالة وصلابة الحرفة المغربية التقليدية (الجبس البلدي المصمت)</strong> مع <strong>الأناقة الإمبراطورية للطراز النيوكلاسيكي الفرنسي والروماني</strong>، لينتج عن ذلك صرح معماري <strong>مبني ليدوم لأكثر من 100 عام دون أي تشقق أو هبوط في الأسقف والجدران</strong>.</p>

      <h2>1. المشكلة في الديكورات التجارية السريعة: لماذا تتشقق الفلل بعد سنوات قليلة؟</h2>
      <p>في العديد من الفلل الحديثة بالإمارات، ينفق الملاك مبالغ طائلة على البناء، ليفاجأوا بعد سنتين أو ثلاث بظهور شروخ مزعجة في زوايا الأسقف، وتخلخل في إطارات الجدران، وتغير في درجات الدهان. ويعود السبب الرئيسي إلى استخدام مواد تجارية غير صالحة للمباني الملكية:</p>

      <ul>
        <li><strong>قوالب الفوم والبولي يوريثان الرخيصة:</strong> تتأثر قوالب الفوم الصناعية بشدة بفروق درجات الحرارة بين تبريد التكييف الداخلي (20 مئوية) وحرارة ورطوبة البحر بالخارج، مما يفكك الغراء ويفصل الفواصل مسبباً شروخاً واضحة.</li>
        <li><strong>ألواح الجبس بورد المجوفة:</strong> الأسقف المعلقة التجارية المصنوعة من ألواح ورقية رقيقة (Drywall) لا تمتلك الكتلة والصلابة الكافية لحمل زخارف كلاسيكية غائرة، وتتهدل بفعل وزن الثريات الكريستالية الضخمة.</li>
        <li><strong>قوالب الجبس الجاهزة المحشوة بمواد كيماوية:</strong> تعتمد المصانع على جبس سريع التصلب مع مواد كيميائية تصبح هشة مع الوقت وتتفتت عند التعرض لأي اهتزاز أو رطوبة.</li>
      </ul>

      <p>ولذلك، وفي فيلا SDE3 بجزيرة السعديات، كان قرار العميل وفريق نسق الهندسي حاسماً: <strong>تنفيذ كافة الأعمال بنظام الجبس المصمت المنحوت يدوياً في الموقع لضمان بقائه مدى الحياة</strong>.</p>

      <h2>2. سر المتانة لـ 100 عام: أصالة الجبس المغربي المصمت (البلدي)</h2>
      <p>لتحقيق أعلى درجات المتانة، قاد المشروع نخبة من كبار الحرفيين المغاربة (المعلمين) التابعين لنسق، والذين توارثوا أسرار حرفة الجبس البلدي التقليدي التي شيدت بها القصور والقلاع التاريخية عبر القرون:</p>

      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin:28px 0;">
        <h4 style="color:var(--bronze);margin-bottom:8px;font-size:16px;">أركان الجودة الأربعة للجبس المصمت المعمر (+100 عام):</h4>
        <ol style="color:#d8d9d0;font-size:14px;line-height:1.8;margin:0;padding-right:20px;">
          <li><strong>جبس صخري طبيعي عالي النقاء:</strong> خالٍ تماماً من الملدنات الكيميائية، ويُخلط بنسب مائية دقيقة ومدروسة ليتصلب في بنية بلورية حجرية شديدة الصلابة.</li>
          <li><strong>تدعيم شبكي بألياف الحبال الطبيعية (السيزار والكتان):</strong> يتم تشبيع حبال وألياف نباتية طويلة بالجبس الصافي ونسجها داخل المونة أثناء الصب اليدوي، لتعمل كشبكة حديد تسليح داخلية تمنع الشروخ الشعرية والكسر الهش.</li>
          <li><strong>الربط الإنشائي الكيميائي والميكانيكي:</strong> بدلاً من اللصق الخارجي، تُرتبط العناصر المصبوبة ميكانيكياً بجدران الطابوق وأعمدة الخرسانة بجسور مجلفنة ومونة لاصقة تصبح جزءاً لا يتجزأ من عظم المبنى.</li>
          <li><strong>مقاومة تامة لرطوبة البحر:</strong> مادة طبيعية 100%، غير قابلة للاشتعال (درجة A1)، ومثالية لبيئة السعديات البحرية لكونها لا تتأثر بالرطوبة أو العوامل الجوية.</li>
        </ol>
      </div>

      <h2>3. كواليس الموقع: تشكيل وصب يدوي 100% داخل الفيلا</h2>
      <p>الأعمال الاستثنائية لا تُنتج في خطوط تجميع المصانع. كل عمود مخدد، وكل سن في الكورنيش المسنن، وكل ورقة في التيجان الكورنثية في هذه الفيلا تم <strong>تشكيلها وصبها وتركيبها يدوياً بالكامل في موقع الفيلا بجزيرة السعديات</strong>.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-sde3-project/artisan-installing-fluted-column-onsite.jpg" alt="المعلم الحرفي على السقالات يقوم بتركيب وتثبيت قطاع عمود روماني مخدد مصمت حول الهيكل الإنشائي في فيلا السعديات SDE3" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 1: توثيق حي من كواليس العمل الميداني. أحد 'معلمي' نسق الحرفيين على السقالة يقوم بوزن وتثبيت قطاع عمود نصف دائري مخدد ومصمت حول العمود الإنشائي المسلح.</p>
      </div>

      <p>وكما توثق الصورة 1، فإن الأعمدة ليست مجرد ألواح ديكورية ملصوقة على الجدار، بل قام مهندسو نسق بزرع شاسيهات حديد صلب مجلفن مربوطة بالصبة الخرسانية للأرضية والسقف. ثم قام الحرفيون بصب قطاعات الأعمدة المخددة المصمتة باستخدام قوالب سلبية جهزت في الموقع، وتثبيتها ميكانيكياً، ثم صب مونة الجبس والألياف داخل التجويف لتمتزج مع الهيكل الداخلي.</p>

      <p>وبعد التصلب، قام المعلمون بلحام الفواصل ومعالجتها يدوياً بعجينة الجبس الميكروية ليتحول العمود إلى كتلة واحدة متجانسة مصمتة لا يمكن أن تتشقق أو تصدر أي صوت رنين مجوف عند الطرق عليها.</p>

      <h2>4. التفاصيل المعمارية: الأعمدة الرومانية والتيجان الكورنثية والكورنيش المسنن</h2>
      <p>تجسد صالة الاستقبال الكبرى الطراز النيوكلاسيكي الإمبراطوري المتناسق بنسبه الذهبية الدقيقة مع الارتفاع المزدوج لأسقف فيلا السعديات.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-sde3-project/corinthian-capital-dentil-cornice-detail.jpg" alt="تفاصيل التاج الكورنثي المنحوت يدوياً مع الكورنيش المسنن المزدوج والبانوهات الجدارية في فيلا SDE3 بالسعديات" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="768" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 2: لقطة معمارية مقربة لأعلى العمود. التاج الكورنثي المنحوت بدقة متناهية يتوج العمود المخدد، ويعلوه كورنيش مسنن (Dentil & Modillion) متعدد الطبقات وبانوهات جدارية متقنة.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:20px;margin:28px 0;">
        <div style="background:#222321;border:1px solid #383a34;padding:18px;border-radius:3px;">
          <h4 style="color:var(--bronze);font-size:16px;margin-bottom:8px;">1. التيجان الكورنثية (Corinthian Capitals)</h4>
          <p style="color:#c5c7be;font-size:13px;line-height:1.7;">منحوتة يدوياً بزخارف أوراق الأكانثوس الإغريقية والحلزونات المعمارية الملتفة، مع عمق نحت ثلاثي الأبعاد يخلق تلاعباً بصرياً مبهراً مع الإضاءة الطبيعية لجزيرة السعديات.</p>
        </div>
        <div style="background:#222321;border:1px solid #383a34;padding:18px;border-radius:3px;">
          <h4 style="color:var(--bronze);font-size:16px;margin-bottom:8px;">2. الكورنيش المسنن (Dentil & Modillion)</h4>
          <p style="color:#c5c7be;font-size:13px;line-height:1.7;">كورنيش سقف ضخم متعدد المستويات يضم كوابيل معمارية بارزة وأسناناً كلاسيكية متناسقة الأبعاد، يربط السقف الشاهق بالجدران بوزن بصري هادئ وفخم.</p>
        </div>
        <div style="background:#222321;border:1px solid #383a34;padding:18px;border-radius:3px;">
          <h4 style="color:var(--bronze);font-size:16px;margin-bottom:8px;">3. البانوهات الفرنسية بارتفاع مزدوج</h4>
          <p style="color:#c5c7be;font-size:13px;line-height:1.7;">إطارات جدارية كلاسيكية شاهقة تمتد على كامل الارتفاع المزدوج، صُممت هندسياً لتتوسط إضاءات الجدران الكريستالية والمداخل الفخمة بتناظر بصري دقيق.</p>
        </div>
      </div>

      <h2>5. الإطلالة الملكية لصالة الاستقبال وصرر الأسقف المحفورة</h2>
      <p>تتوسط صالة الاستقبال ثريا كريستالية ضخمة متدلية من <strong>صرة سقف نيوكلاسيكية صلبة تم نحتها يدوياً</strong> بنقوش نباتية دائرية وأكاليل من أوراق الأكانثوس.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-sde3-project/grand-chandelier-rosette-fluted-column.jpg" alt="صالة الاستقبال الملكية في فيلا SDE3 بجزيرة السعديات ثريا كريستال وصرة سقف معمارية وأعمدة رومانية" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="768" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 3: صالة الاستقبال الملكية كاملة. الثريا الكريستالية معلقة في صلب الخرسانة المسلحة، وتتوسط صرة الجبس المنحوتة يدوياً وتحيط بها الأعمدة الرومانية المخددة.</p>
      </div>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-sde3-project/neoclassical-double-height-boiserie-wall.jpg" alt="تناظر البانوهات الجدارية الشاهقة والدهان الأبيض الناعم في فيلا جزيرة السعديات" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="768" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 4: تناسق هندسي بديع للبانوهات الجدارية الشاهقة. استواء فائق لدهان Level-5 بدون أي تموجات أو لمعان عاكس تحت ضوء النهار.</p>
      </div>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-sde3-project/craftsman-fluted-column-salon.jpg" alt="مهندس نسق يفحص الأعمدة المخددة والكورنيش في صالة الاستقبال بعد التسليم في جزيرة السعديات" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 5: تسليم المشروع في جزيرة السعديات SDE3. شموخ الأعمدة الرومانية ونقاء التفاصيل الجبسية ينسجم بامتياز مع الأثاث الملكي الفاخر.</p>
      </div>

      <h2>6. دهانات بمستوى Level-5: سر البياض الملكي الناعم</h2>
      <p>إن تطبيق الدهانات على زخارف كلاسيكية بارزة ذات تفاصيل محفورة يتطلب دقة بالغة؛ فالدهان العشوائي بالرول العادي يطمس حواف النقش ويعطي ملمساً خشناً ومشوهاً.</p>

      <p>اعتمدت نسق بروتوكول الدهان المعماري فائق النعومة (Level-5):</p>
      <ol>
        <li><strong>الجفاف والتبلور التام:</strong> تترك الزخارف المصبوبة لتجف طبيعياً وتصل إلى أقصى صلابة حجرية قبل وضع أي طبقة تأسيس.</li>
        <li><strong>السنفرة اليدوية بإسفنج كربيد السيليكون:</strong> سنفرة يدوية دقيقة لكافة الزوايا والأسنان لإزالة أي ذرة غبار وتحقيق سطح أملس كالمرمر.</li>
        <li><strong>دهان جوتن فينوماستيك نقي (Jotun Fenomastic Pure Colours):</strong> رش آلي متجانس بمستوى مطفي (Dead-Flat Matte) بلون أبيض ناصع يعكس الضوء بنقاء ويمتاز بقابلية كاملة للغسيل ومقاومة الخدوش.</li>
      </ol>

      <h2>7. لماذا يختار ملاك الفلل في جزيرة السعديات شركة نسق؟</h2>
      <p>يقدم نموذج فيلا SDE3 دليلاً ساطعاً على المزايا التنافسية التي تجعل نسق الخيار الأول لأصحاب القصور والفلل الفاخرة في جزيرة السعديات (SDE3، سوهو ريزيدنس، فلل شاطئ السعديات، سعديات ريزيرف، وممشى السعديات):</p>

      <ol>
        <li><strong>حرفة أصيلة تعيش لأكثر من 100 عام:</strong> نرفض قوالب الفوم الرخيصة والألواح الهشة، ونقدم جبساً صخرياً مصمتاً مدعماً بالألياف الطبيعية.</li>
        <li><strong>كوادر حرفية مباشرة بدون وسطاء:</strong> كبار الحرفيين المغاربة يعملون تحت إشراف مهندسي نسق الميدانيين مباشرة.</li>
        <li><strong>خبرة معتمدة بتصاريح السعديات:</strong> معرفة شاملة بمتطلبات الدار، ومودون، وإدارة مجمعات السعديات السكنية والتأمينات وتصاريح البوابات.</li>
        <li><strong>ضمان خطي معتمد 12 شهراً:</strong> مدعوماً بضماناتنا الست الصارمة لراحة بال مطلقة لمالك الفيلا.</li>
      </ol>

      <!-- Frequently Asked Questions -->
      <section class="section pale" style="margin-top:50px;padding:35px;border-radius:4px;" id="faq">
        <h3 style="font-size:24px;margin-bottom:24px;color:#fff;">الأسئلة الشائعة حول تشطيب الفلل في جزيرة السعديات (FAQ)</h3>
        <div style="display:flex;flex-direction:column;gap:20px;">
          
          <article class="faq-card">
            <h4>ما الذي يجعل حرفة الجبس المغربي المصمت تعيش لأكثر من 100 عام؟</h4>
            <p>تعتمد حرفة الجبس المغربي البلدي المصمت على مادة الجبس الطبيعي النقي مدمجة بألياف نباتية قوية (حبال السيزار والكتان الطبيعي) بدون أي مواد كيميائية سريعة الجفاف. خلافاً لقوالب الفوم أو ألواح الجبس الهشة التي تتشقق بعد 3 إلى 5 سنوات، يشكل الجبس المصمت كتلة صلبة كالحجر ترتبط بالخرسانة بصلابة تقاوم التمدد الحراري والاهتزازات لأكثر من قرن كامل.</p>
          </article>

          <article class="faq-card">
            <h4>هل تم تصنيع ونحت الأعمدة الرومانية والبانوهات في فيلا السعديات SDE3 بالموقع مباشرة؟</h4>
            <p>نعم، 100% من عناصر التشطيب تم صبها ونحتها وتفصيلها يدوياً داخل موقع الفيلا بجزيرة السعديات بأيدي 'المعلمين' المغاربة التابعين لشركة نسق. لم نستخدم قوالب تجارية مسبقة الصب، مما ضمن تطابقاً ملمترياً فائقاً مع الأعمدة الخرسانية وارتفاعات الأسقف الشاهقة.</p>
          </article>

          <article class="faq-card">
            <h4>كيف يتم تثبيت وتدعيم الأعمدة الكلاسيكية الكبيرة بأمان في الفلل؟</h4>
            <p>وفقاً لضمان نسق الهندسي رقم 01، يُمنع تركيب الأعمدة كقشور ديكورية فارغة. نقوم بزرع جسور حديد مجلفنة مربوطة بالصبة الخرسانية للأرضية والأسقف، ثم يُصب حولها الجبس المصمت لتصبح الأعمدة كتلة إنشائية صلبة ومتماسكة لا تتحرك أبداً.</p>
          </article>

          <article class="faq-card">
            <h4>ما هو نوع الدهان المستخدم لإبراز تفاصيل الزخارف النيوكلاسيكية؟</h4>
            <p>نطبق دهانات جوتن فينوماستيك النقية (Jotun Fenomastic Pure Colours) بمستوى Level-5 مطفي فائق النعومة، بعد سنفرة الجبس يدوياً بإسفنج كربيد السيليكون الدقيق لضمان اختفاء أي أثر لضربات الرول أو تموجات الضوء الطبيعي.</p>
          </article>

          <article class="faq-card">
            <h4>هل تنفذ شركة نسق مشاريع تشطيب الفلل المتكاملة في جزيرة السعديات؟</h4>
            <p>نعم، شركة نسق مقاول ديكور معتمد يمتلك سجلاً حافلاً في جزيرة السعديات (SDE3، سوهو ريزيدنس، فلل شاطئ السعديات، سعديات ريزيرف، وممشى السعديات)، ونتولى كافة تصاريح الدخول وإيداع التأمينات مع إدارة المباني والمطورين.</p>
          </article>

        </div>
      </section>

      <!-- CTA Box -->
      <div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">
        <h4 style="color:var(--bronze);font-size:18px;">هل تخطط لتشطيب فيلا فاخرة في جزيرة السعديات؟</h4>
        <p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">اختر الحرفة اليدوية المعمرة التي تليق بقيمة استثمارك في أرقى وجهات العاصمة. شاركنا مخططات فيلتك أو أفكارك للحصول على مقايسة تفصيلية ورفع مساحي مجاني بالليزر خلال 24 إلى 48 ساعة.</p>
        <div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">
          <a class="button" href="/ar/contact/">طلب عرض أسعار مفصل</a>
          <a class="button" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20شاهدت%20مشروع%20فيلا%20السعديات%20SDE3%20وأود%20استشارة%20لتشطيب%20فيلتي." style="background:#fff;color:#151613;border-color:#fff;">تحدث مع مهندسينا عبر واتساب</a>
        </div>
      </div>

      <!-- Related Guides -->
      <div class="related-insights" style="margin-top:60px;border-top:1px solid #e2e3de;padding-top:40px;">
        <h3 style="font-size:24px;margin-bottom:24px;">مقالات هندسية وأدلة ذات صلة بتشطيب الفلل في الإمارات</h3>
        <div class="insights-grid">
          <a class="article-card" href="/ar/insights/saadiyat-island-72-hour-fit-out-case-study/">
            <img class="article-card-img" src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="سوهو ريزيدنس جزيرة السعديات دراسة حالة 72 ساعة" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">تنفيذ واقعي ودراسة حالة</span>
              <h4>سوهو ريزيدنس جزيرة السعديات: دراسة حالة تشطيب بانوهات جدارية وجبس بورد خلال 72 ساعة</h4>
              <p>توثيق عملي لتحويل شقة فاخرة في بلوك A بسوهو ريزيدنس جزيرة السعديات في 72 ساعة مع تقييم موثق على Google.</p>
            </div>
          </a>
          <a class="article-card" href="/ar/insights/villa-fitout-al-ketbi-mbz-integrity-case-study/">
            <img class="article-card-img" src="/assets/alketbi-project/ceiling-chandeliers-rosette.jpg" alt="قصة نجاح فيلا السيد علي الكتبي حوض 30 مدينة محمد بن زايد" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">دراسة حالة واقعية ونزاهة هندسية</span>
              <h4>قصة نجاح تشطيب فيلا السيد علي الكتبي في مدينة محمد بن زايد (حوض 30): النزاهة الهندسية وكشف عيوب المقاول والاستشاري</h4>
              <p>كيف رفضت نسق إخفاء شروخ الجدران بالجبس بورد، وحمت العميل علي الكتبي غدير، وسلمت تشطيباً ملكياً لا يزال بلا شروخ بعد 7 سنوات.</p>
            </div>
          </a>
        </div>
      </div>

    </div></article></main><footer><div><span class="wordmark">نسق <span lang="en">NASAQ</span></span><p>تناغم في المساحات.</p><p class="small">شركة نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م<br>أبوظبي، دولة الإمارات العربية المتحدة</p></div><div><a href="tel:+971505334861">+971 50 533 4861</a><a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a><a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a><a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">إنستغرام · @nasaq.fitout</a><a href="https://share.google/jD1fYkpZ96pX0pQPN" target="_blank" rel="noopener noreferrer">خرائط Google · ملف نسق</a></div><div><a href="/ar/services/">خدماتنا</a><a href="/ar/insights/">المقالات والأدلة</a><a href="/ar/about/">عن نسق</a><a href="/ar/contact/">ابدأ محادثة</a><p class="small">© 2026 نسق</p></div></footer><a class="floating" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20طلب%20استشارة%20لتشطيب%20فيلا%20في%20جزيرة%20السعديات." aria-label="تواصل مع نسق عبر الواتساب">واتساب</a></body></html>`;

// Write HTML files
fs.writeFileSync(path.join(enDir, 'index.html'), enHtml, 'utf8');
fs.writeFileSync(path.join(arDir, 'index.html'), arHtml, 'utf8');
console.log('✅ Generated Saadiyat SDE3 Handcrafted Villa Case Study (EN & AR)');

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
      <image:loc>https://nasaqfitout.ae/assets/saadiyat-sde3-project/artisan-installing-fluted-column-onsite.jpg</image:loc>
      <image:title>Artisan Hand-Installing Solid Fluted Column On-Site Saadiyat SDE3</image:title>
    </image:image>
    <image:image>
      <image:loc>https://nasaqfitout.ae/assets/saadiyat-sde3-project/corinthian-capital-dentil-cornice-detail.jpg</image:loc>
      <image:title>Corinthian Capital and Dentil Cornice Detailing Saadiyat Island</image:title>
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
      <image:loc>https://nasaqfitout.ae/assets/saadiyat-sde3-project/artisan-installing-fluted-column-onsite.jpg</image:loc>
      <image:title>تشكيل وتركيب الأعمدة الرومانية المخددة يدوياً في موقع فيلا السعديات SDE3</image:title>
    </image:image>
    <image:image>
      <image:loc>https://nasaqfitout.ae/assets/saadiyat-sde3-project/corinthian-capital-dentil-cornice-detail.jpg</image:loc>
      <image:title>تفاصيل التاج الكورنثي والكورنيش المسنن في جزيرة السعديات</image:title>
    </image:image>
  </url>\n`;

  sitemap = sitemap.replace('</urlset>', `${sitemapEntry}</urlset>`);
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ Updated dist/sitemap.xml with 2 new URLs (Total 60 URLs)');
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
      const newCaps = ['SaadiyatSDE3VillaFitOut', 'HandcraftedSolidPlaster', 'MoroccanPlasterMastery', 'FlutedColumnsBoiserie'];
      newCaps.forEach(c => {
        if (!entry.capabilities.includes(c)) entry.capabilities.push(c);
      });
      const newQueries = [
        'تشطيب فيلا جزيرة السعديات SDE3 بأبوظبي',
        'نحت وتركيب أعمدة كلاسيكية مخددة وتيجان كورنثية أبوظبي',
        'الجبس المغربي المصمت ونحت البانوهات اليدوي 100 عام',
        'أفضل مقاول تشطيب ونحت جبس يدوي في السعديات',
        'Saadiyat Island SDE3 luxury villa fit out Abu Dhabi',
        'Handcrafted fluted Roman columns and Corinthian capitals Abu Dhabi',
        '100-year solid Moroccan plaster neoclassical fitout UAE',
        'Turnkey luxury villa contractor Saadiyat Beach Villas'
      ];
      newQueries.forEach(q => {
        if (!entry.representativeQueries.includes(q)) entry.representativeQueries.push(q);
      });
      fs.writeFileSync(target, JSON.stringify(catalog, null, 2), 'utf8');
      console.log(`✅ Updated ${path.relative(DIST_DIR, target)}`);
    }
  }
});

console.log('\n🚀 Saadiyat SDE3 Handcrafted Villa Case Study successfully built and integrated!');
