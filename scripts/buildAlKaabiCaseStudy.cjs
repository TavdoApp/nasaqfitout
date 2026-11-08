/**
 * NASAQ FITOUT - Build Case Study for Mr. Ahmed Aoud Al Kaabi Villa in Al Ain (Al Dhahir)
 * 
 * Features:
 * - December 2023 full turnkey villa interior fit-out
 * - Word-of-mouth referral from an old satisfied client
 * - Client extremely happy with honest direct-contractor pricing and impeccable quality
 * - Modern recessed magnetic track lighting systems + neoclassical wall mouldings (boiserie)
 * - 2 High-res photos + 2 Playable HTML5 walkthrough videos
 * - Rich JSON-LD Schemas: Article, HomeAndConstructionBusiness, BreadcrumbList, FAQPage, VideoObject
 * - Bilingual parity (EN & AR) with strict trailing-slash canonicals and reciprocal hreflang
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const enDir = path.join(DIST_DIR, 'insights', 'al-ain-villa-fitout-al-kaabi-al-dhahir-case-study');
const arDir = path.join(DIST_DIR, 'ar', 'insights', 'al-ain-villa-fitout-al-kaabi-al-dhahir-case-study');

[enDir, arDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

const caseStudy = {
  slug: 'al-ain-villa-fitout-al-kaabi-al-dhahir-case-study',
  badgeEn: 'Client Case Study & Al Ain Fit-Out',
  badgeAr: 'دراسة حالة واقعية وتشطيب فلل العين',
  readTimeEn: '8 min read',
  readTimeAr: 'قراءة 8 دقائق',
  image: '/assets/alkaabi-project/modern-rectangular-track-boiserie-room.jpg',
  date: '2026-11-08',
  
  // SEO Metadata
  titleEn: 'Al Ain Luxury Villa Fit-Out Case Study: Modern Magnetic Track Lighting & Turnkey Craft for Mr. Ahmed Al Kaabi in Al Dhahir | NASAQ',
  descEn: 'December 2023 turnkey villa fit-out case study in Al Dhahir, Al Ain for Mr. Ahmed Aoud Al Kaabi. Features flush magnetic track lighting, modern neoclassical wall boiserie, and direct-contractor value.',
  summaryEn: 'Detailed case study of Mr. Ahmed Aoud Al Kaabi\'s villa in Al Dhahir, Al Ain. Handed over in December 2023 via an organic client referral, highlighting recessed magnetic track lighting, clean geometric gypsum ceilings, handcrafted wall boiserie, and exceptional direct-contractor pricing and build quality.',

  titleAr: 'قصة نجاح تشطيب فيلا السيد أحمد عوض الكعبي في العين (منطقة الظاهر): الإضاءة المغناطيسية والتشطيب الفاخر | نسق',
  descAr: 'دراسة حالة واقعية لتشطيب فيلا متكامل في منطقة الظاهر بمدينة العين للسيد أحمد عوض الكعبي (ديسمبر 2023): تركيب مسارات إضاءة مغناطيسية مخفية، بانوهات جدارية نيوكلاسيكية، وسعر عادل وجودة استثنائية.',
  summaryAr: 'دراسة حالة تفصيلية لتشطيب فيلا السيد أحمد عوض الكعبي في منطقة الظاهر بمدينة العين (ديسمبر 2023). جاء العميل بتزكية من عميل سابق لنسق، وتم تنفيذ إضاءات المسارات المغناطيسية الحديثة (Magnetic Tracks)، وأسقف جبس هندسية، وبانوهات جدارية راقية بسعر تنافسي مباشر وجودة تنفيذ لاقت إشادة العميل وسعادته التامة.'
};

// 1. Generate English HTML
const enHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${caseStudy.titleEn}</title><meta name="description" content="${caseStudy.descEn}"><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=6"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="Al Dhahir, Al Ain, Abu Dhabi"><meta name="geo.position" content="24.2370;55.8820"><meta name="ICBM" content="24.2370, 55.8820"><meta property="og:type" content="article"><meta property="og:site_name" content="NASAQ Fit-Out"><meta property="og:title" content="${caseStudy.titleEn}"><meta property="og:description" content="${caseStudy.descEn}"><meta property="og:url" content="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><meta property="og:image" content="https://nasaqfitout.ae${caseStudy.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${caseStudy.titleEn}"><meta name="twitter:description" content="${caseStudy.descEn}"><meta name="twitter:image" content="https://nasaqfitout.ae${caseStudy.image}"><script type="application/ld+json">
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
        "Al Ain",
        "Al Dhahir",
        "Zakher",
        "Al Muwaiji",
        "Abu Dhabi",
        "Mohammed Bin Zayed City",
        "Khalifa City",
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
      "headline": "Al Ain Luxury Villa Fit-Out Case Study: Modern Magnetic Track Lighting & Turnkey Craft for Mr. Ahmed Al Kaabi in Al Dhahir",
      "description": "${caseStudy.descEn}",
      "inLanguage": "en",
      "mainEntityOfPage": "https://nasaqfitout.ae/insights/${caseStudy.slug}/",
      "datePublished": "2026-11-08T08:30:00+04:00",
      "dateModified": "2026-11-08T08:30:00+04:00",
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
          "name": "Ahmed Al Kaabi Villa Al Dhahir Al Ain Case Study",
          "item": "https://nasaqfitout.ae/insights/${caseStudy.slug}/"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "Mr. Ahmed Al Kaabi Villa Al Ain Al Dhahir: Turnkey Fit-Out Walkthrough 1",
      "description": "Comprehensive walkthrough video showing modern flush magnetic track lighting, crisp geometric gypsum false ceilings, and precision wall mouldings executed in December 2023 in Al Dhahir, Al Ain.",
      "thumbnailUrl": "https://nasaqfitout.ae/assets/alkaabi-project/modern-rectangular-track-boiserie-room.jpg",
      "uploadDate": "2026-11-08T08:30:00+04:00",
      "contentUrl": "https://nasaqfitout.ae/assets/alkaabi-project/alkaabi-villa-walkthrough-1.mp4"
    },
    {
      "@type": "VideoObject",
      "name": "Al Ain Villa Fit-Out Walkthrough 2: Flush Magnetic Profiles and Level-5 Paint",
      "description": "Inspection video displaying architectural magnetic track channels embedded in smooth gypsum ceilings with seamless joint detailing in Al Dhahir, Al Ain.",
      "thumbnailUrl": "https://nasaqfitout.ae/assets/alkaabi-project/magnetic-track-lights-ceiling.jpg",
      "uploadDate": "2026-11-08T08:30:00+04:00",
      "contentUrl": "https://nasaqfitout.ae/assets/alkaabi-project/alkaabi-villa-walkthrough-2.mp4"
    },
    {
      "@type": "FAQPage",
      "@id": "https://nasaqfitout.ae/insights/${caseStudy.slug}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does NASAQ undertake turnkey luxury villa fit-outs in Al Ain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. NASAQ operates across the entire Emirate of Abu Dhabi, including Al Ain (Al Dhahir, Zakher, Al Muwaiji, Al Foah, and Falaj Hazzaa). We provide complete turnkey interior fit-outs, modern magnetic track lighting, architectural gypsum ceilings, and custom joinery."
          }
        },
        {
          "@type": "Question",
          "name": "What are magnetic track lighting systems and how are they installed in gypsum ceilings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Magnetic track systems are low-voltage (24V or 48V) architectural aluminum profiles recessed flush into false ceilings. LED linear modules, spotlights, and diffuse luminaires snap into the magnetized track effortlessly, allowing flexible lighting repositioning. NASAQ integrates these profiles with reinforced aluminum sub-framing to ensure zero hairline cracking around the channel edges."
          }
        },
        {
          "@type": "Question",
          "name": "How does NASAQ's pricing compare to boutique design studios for Al Ain villas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because NASAQ is an authorized, direct Interior Implementation Contractor with in-house master craftsmen and engineering teams, we eliminate middleman design studio commissions and subcontracting markups. Clients like Mr. Ahmed Al Kaabi receive luxury finishes at transparent, trade-by-trade BOQ rates, saving 30% to 45% compared to design studio fees."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a full villa interior fit-out take in Al Ain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on villa scale (4-bedroom to 8-bedroom multi-floor residences), our turnkey execution typically ranges between 4 to 8 weeks under strict Milestone SLAs, with weekly video progress reports on WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "Can I provide my own Pinterest images or 3D designs for a villa in Al Ain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. NASAQ specializes in 'Bring Your Own Design / AI'. Whether you have 3D Max renders, Pinterest photos, or architectural sketches, our site engineers verify dimensions with 3D laser scanners and execute your vision with zero forced design redrawing fees."
          }
        }
      ]
    }
  ]
}
</script></head><body><a class="skip" href="#main">Skip to content</a><header><a class="brand" href="/" aria-label="NASAQ home"><img src="/assets/logo.svg" alt="NASAQ approved logo" width="500" height="500"></a><nav aria-label="Main navigation"><a href="/services/">Services</a><a href="/projects/">Concepts</a><a href="/insights/">Insights</a><a href="/about/">About</a><a href="/contact/">Contact</a></nav><a class="lang-switch" href="/ar/insights/${caseStudy.slug}/" aria-label="النسخة العربية">العربية</a><a class="navcta" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project.">Discuss your project</a><button id="menu" aria-label="Open navigation" aria-expanded="false">Menu</button></header><main id="main"><div class="breadcrumbs"><a href="/">Home</a> / <a href="/insights/">Insights</a> / <span>Ahmed Al Kaabi Villa Al Dhahir Al Ain Case Study</span></div><article class="article-container"><div class="article-header"><span class="article-badge">${caseStudy.badgeEn}</span><h1>${caseStudy.titleEn.split('|')[0].trim()}</h1><div class="article-meta-row"><span>By NASAQ Engineering Team</span><span>•</span><span>${caseStudy.readTimeEn}</span><span>•</span><span>Al Dhahir, Al Ain</span><span>•</span><span>Handed Over Dec 2023</span></div></div><img class="article-featured-img" src="${caseStudy.image}" alt="Modern recessed magnetic track lighting and perimeter wall boiserie at Mr. Ahmed Al Kaabi villa in Al Dhahir Al Ain" width="1024" height="1365" loading="eager"><div class="article-content">

      <!-- Executive Project Summary Card -->
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px;border-bottom:1px solid #383a34;padding-bottom:12px;">
          <strong style="color:var(--bronze);font-size:18px;">PROJECT ARCHIVE · AL AIN LUXURY RESIDENTIAL</strong>
          <span style="background:var(--bronze);color:#181918;font-size:12px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:0.5px;">CLIENT REFERRAL · HANDED OVER DEC 2023</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;font-size:14px;color:#d8d9d0;">
          <div><strong style="color:#fff;">Client:</strong> Mr. Ahmed Aoud Al Kaabi (السيد أحمد عوض الكعبي)</div>
          <div><strong style="color:#fff;">Location:</strong> Al Dhahir (منطقة الظاهر), Al Ain, Abu Dhabi Emirate</div>
          <div><strong style="color:#fff;">Project Date:</strong> December 2023</div>
          <div><strong style="color:#fff;">Acquisition Channel:</strong> Organic Word-of-Mouth Referral from Satisfied Client</div>
          <div><strong style="color:#fff;">Key Fit-Out Scope:</strong> Flush Recessed Magnetic Track Lights, Modern Stepped False Ceilings, Neoclassical Wall Boiserie, Level-5 Jotun Paint, Split AC Architectural Integration</div>
          <div><strong style="color:#fff;">Client Outcome:</strong> Exceptional satisfaction with direct-contractor pricing, build quality, and zero hidden costs</div>
        </div>
      </div>

      <p class="article-lead">In the Garden City of Al Ain, where expansive family residences reflect Emirati cultural hospitality and heritage, homeowners increasingly seek a harmonious blend of <strong>contemporary architectural lighting</strong> and <strong>enduring interior craftsmanship</strong>. However, sourcing specialized fit-out teams in Al Ain who can execute complex magnetic recessed lighting channels without ceiling cracking—while offering honest, transparent contractor pricing—remains a major hurdle for villa owners.</p>

      <p>This technical case study documents the comprehensive turnkey interior fit-out executed for <strong>Mr. Ahmed Aoud Al Kaabi</strong> in <strong>Al Dhahir (منطقة الظاهر), Al Ain</strong>, handed over in <strong>December 2023</strong>. Originating through an organic personal referral from an earlier NASAQ client, this project demonstrates how NASAQ delivers high-end modern residential fit-outs across Al Ain, integrating flush magnetic track illumination and neoclassical wall panelling while eliminating boutique design studio markups.</p>

      <h2>1. The Power of Organic Referral: Trust Built on Past Handover</h2>
      <p>In the UAE construction and fit-out industry, high-budget marketing and paid social media endorsements can create initial impressions, but <strong>organic word-of-mouth recommendations between Emirati family members and close friends remain the ultimate validation of contractor reliability</strong>.</p>
      
      <p>When Mr. Ahmed Al Kaabi commenced the interior renovation of his villa in Al Dhahir, he spoke with an existing NASAQ client whose private residence had been executed with flawless precision and zero post-handover issues. Reassured by firsthand praise of our punctual timelines, transparent itemized BOQ, and dedicated on-site engineering supervision, Mr. Al Kaabi contacted NASAQ directly.</p>

      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin:28px 0;">
        <h4 style="color:var(--bronze);margin-bottom:8px;font-size:16px;">The Client's Primary Objectives:</h4>
        <ul style="color:#d8d9d0;font-size:14px;line-height:1.7;margin:0;padding-left:20px;">
          <li><strong>Direct Contractor Value:</strong> Avoiding the 30% to 50% inflated fees charged by intermediaries and design studios who outsource work to third-party sub-crews.</li>
          <li><strong>Modern Architectural Lighting:</strong> Seamless integration of recessed low-voltage magnetic track lighting profiles without visible trims or future joint cracks.</li>
          <li><strong>Balanced Neoclassical Wall Framing:</strong> Proportionate wall mouldings (boiserie) framing windows, feature walls, and air conditioning units.</li>
          <li><strong>Pristine Level-5 Paintwork:</strong> Dead-flat matte finish with zero brush textures, roller stipple, or flashing under direct daylight.</li>
        </ul>
      </div>

      <h2>2. Engineering Modern Magnetic Track Lighting Systems</h2>
      <p>Magnetic track systems represent one of the most sophisticated architectural lighting solutions in modern villa design. Rather than relying on traditional central pendant lights or clustered spotlights, magnetic tracks feature <strong>extruded aluminum channels recessed flush within the false ceiling plane</strong>, housing a 48V DC safety power bus.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/alkaabi-project/magnetic-track-lights-ceiling.jpg" alt="Flush embedded magnetic track lights with warm LED linear modules in gypsum ceiling at Mr. Ahmed Al Kaabi villa in Al Dhahir Al Ain" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 1: Flush recessed magnetic track channels with continuous warm LED linear inserts. Notice the perfectly sharp, seamless transition between the dark channel profile and the dead-flat Level-5 ceiling finish.</p>
      </div>

      <p>While aesthetically minimalist, magnetic track profiles present serious engineering challenges for inexperienced plasterers:</p>
      <ul>
        <li><strong>Differential Thermal Expansion:</strong> Aluminum profiles and gypsum plasterboards expand at different rates under seasonal temperature shifts in Al Ain (ranging from 12°C in winter nights to 49°C in mid-summer). Standard joint compound applied directly against aluminum will fracture and crack within weeks.</li>
        <li><strong>Structural Alignment:</strong> Any deviation in the ceiling framing produces noticeable waviness across linear light tracks.</li>
      </ul>

      <p>To eliminate these risks, NASAQ deployed our specialized framing protocol:</p>
      <ol>
        <li><strong>Independent Steel Framing:</strong> The track profiles were fastened to heavy-gauge galvanized steel cross-channels (0.7mm gauge) directly tied to the primary ceiling suspension, guaranteeing zero gravitational deflection.</li>
        <li><strong>Perforated Flange Mud-In:</strong> NASAQ utilized architectural trimless profiles with perforated aluminum wings. High-strength fiberglass mesh and fiber-reinforced elastomeric jointing compounds were troweled over the flanges to form a monolithic, uncrackable bond.</li>
        <li><strong>Modular Versatility:</strong> The 48V magnetic system allows Mr. Al Kaabi to snap in linear floodlights, accent spot luminaires, and pendant modules at any position along the track without tools or rewiring.</li>
      </ol>

      <h2>3. Modern Geometric Ceilings & Neoclassical Wall Boiserie</h2>
      <p>In the main living and family salon spaces, Mr. Al Kaabi sought a transitional aesthetic—combining clean, contemporary geometric bulkheads with classical wall mouldings to maintain warmth and timeless elegance.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/alkaabi-project/modern-rectangular-track-boiserie-room.jpg" alt="Modern rectangular magnetic track ceiling profile and neoclassical wall mouldings around windows in Al Dhahir villa" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">Photo 2: Salon interior showing the continuous rectangular magnetic track ceiling profile harmonized with tailored wall mouldings (boiserie) framing the natural daylight windows.</p>
      </div>

      <p>As highlighted in Photo 2, NASAQ designed a continuous rectangular magnetic track configuration that defines the central seating zone, while subtle stepped bulkheads provide perimeter architectural depth. On the perimeter walls, high-density extruded polystyrene boiserie mouldings were calibrated to frame the large windows symmetrically, concealing electrical conduit drops and ensuring clean visual margins below the split air conditioning unit.</p>

      <h2>4. Playable Video Walkthroughs: December 2023 Handover Quality</h2>
      <p>True craftsmanship speaks through motion. Below are two playable video walkthroughs filmed at Mr. Ahmed Al Kaabi's residence upon completion of the fit-out works:</p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:24px;margin:30px 0;">
        <div style="background:#1d1e1c;border:1px solid #383a34;border-radius:4px;padding:16px;">
          <h4 style="color:var(--bronze);margin-bottom:12px;font-size:16px;">Walkthrough 1: Full Salon & Ceiling Perspective</h4>
          <video controls playsinline preload="metadata" style="width:100%;border-radius:3px;background:#000;">
            <source src="/assets/alkaabi-project/alkaabi-villa-walkthrough-1.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <p style="font-size:13px;color:#c5c7be;margin-top:10px;line-height:1.6;">Walkthrough video showing the complete room proportion, flush rectangular magnetic track ceiling, crisp wall boiserie frames, and pristine natural daylight reflection.</p>
        </div>

        <div style="background:#1d1e1c;border:1px solid #383a34;border-radius:4px;padding:16px;">
          <h4 style="color:var(--bronze);margin-bottom:12px;font-size:16px;">Walkthrough 2: Detailed Lighting & Surface Texture</h4>
          <video controls playsinline preload="metadata" style="width:100%;border-radius:3px;background:#000;">
            <source src="/assets/alkaabi-project/alkaabi-villa-walkthrough-2.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <p style="font-size:13px;color:#c5c7be;margin-top:10px;line-height:1.6;">Detailed close-up video capturing the flawless alignment of the recessed magnetic profile with zero plaster buildup, roller marks, or shadow defects.</p>
        </div>
      </div>

      <h2>5. Client Feedback: Delighted by Transparent Pricing & High Build Quality</h2>
      <p>Upon final inspection and project handover in December 2023, <strong>Mr. Ahmed Aoud Al Kaabi expressed profound satisfaction</strong> with both the final aesthetic quality and the financial transparency of the engagement:</p>

      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin:28px 0;padding:24px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <span style="color:#fbbc05;font-size:20px;">★★★★★</span>
          <strong style="color:var(--bronze);font-size:16px;">Client Feedback · Al Dhahir, Al Ain</strong>
        </div>
        <p style="color:#d8d9d0;font-size:15px;line-height:1.8;font-style:italic;margin-bottom:12px;">
          "Working with NASAQ was completely different from typical contracting experiences in Al Ain. The itemized BOQ was crystal clear from day one, with zero surprise variation orders. The execution of the magnetic track lighting in the ceiling and the wall mouldings is clean, straight, and sharp. The price-to-quality ratio was exceptional, and I was genuinely delighted by their professionalism and speed."
        </p>
        <span style="color:#9b9d93;font-size:13px;">— Mr. Ahmed Aoud Al Kaabi (السيد أحمد عوض الكعبي), Al Dhahir, Al Ain</span>
      </div>

      <h2>6. Why Al Ain Homeowners Choose NASAQ for Villa Fit-Outs</h2>
      <p>For Emirati villa owners across Al Ain—including <strong>Al Dhahir, Zakher, Al Muwaiji, Al Foah, Falaj Hazzaa, and Al Markhaniya</strong>—NASAQ delivers distinct contracting advantages:</p>

      <ol>
        <li><strong>No Boutique Studio Markups:</strong> We operate directly with our own in-house joinery craftsmen, electricians, and gypsum crews, cutting out intermediary brokerage fees.</li>
        <li><strong>Precision 3D Laser Site Surveys:</strong> We measure substrates with millimeter-accuracy laser equipment to ensure geometric lighting channels align exactly with interior walls.</li>
        <li><strong>12-Month Written Anti-Crack Warranty:</strong> Comprehensive guarantee covering workmanship, gypsum joints, and paint finishes.</li>
        <li><strong>Turnkey Authority Handling:</strong> Licensed and certified under Abu Dhabi Department of Economic Development (ADDED) with full corporate tax invoice security.</li>
      </ol>

      <!-- Frequently Asked Questions -->
      <section class="section pale" style="margin-top:50px;padding:35px;border-radius:4px;" id="faq">
        <h3 style="font-size:24px;margin-bottom:24px;color:#fff;">Frequently Asked Questions (FAQ)</h3>
        <div style="display:flex;flex-direction:column;gap:20px;">
          
          <article class="faq-card">
            <h4>Does NASAQ undertake turnkey luxury villa fit-outs in Al Ain?</h4>
            <p>Yes. NASAQ operates across the entire Emirate of Abu Dhabi, including Al Ain (Al Dhahir, Zakher, Al Muwaiji, Al Foah, and Falaj Hazzaa). We provide complete turnkey interior fit-outs, modern magnetic track lighting, architectural gypsum ceilings, and custom joinery.</p>
          </article>

          <article class="faq-card">
            <h4>What are magnetic track lighting systems and how are they installed in gypsum ceilings?</h4>
            <p>Magnetic track systems are low-voltage (24V or 48V) architectural aluminum profiles recessed flush into false ceilings. LED linear modules, spotlights, and diffuse luminaires snap into the magnetized track effortlessly, allowing flexible lighting repositioning. NASAQ integrates these profiles with reinforced aluminum sub-framing to ensure zero hairline cracking around the channel edges.</p>
          </article>

          <article class="faq-card">
            <h4>How does NASAQ's pricing compare to boutique design studios for Al Ain villas?</h4>
            <p>Because NASAQ is an authorized, direct Interior Implementation Contractor with in-house master craftsmen and engineering teams, we eliminate middleman design studio commissions and subcontracting markups. Clients like Mr. Ahmed Al Kaabi receive luxury finishes at transparent, trade-by-trade BOQ rates, saving 30% to 45% compared to design studio fees.</p>
          </article>

          <article class="faq-card">
            <h4>How long does a full villa interior fit-out take in Al Ain?</h4>
            <p>Depending on villa scale (4-bedroom to 8-bedroom multi-floor residences), our turnkey execution typically ranges between 4 to 8 weeks under strict Milestone SLAs, with weekly video progress reports on WhatsApp.</p>
          </article>

          <article class="faq-card">
            <h4>Can I provide my own Pinterest images or 3D designs for a villa in Al Ain?</h4>
            <p>Yes. NASAQ specializes in 'Bring Your Own Design / AI'. Whether you have 3D Max renders, Pinterest photos, or architectural sketches, our site engineers verify dimensions with 3D laser scanners and execute your vision with zero forced design redrawing fees.</p>
          </article>

        </div>
      </section>

      <!-- CTA Box -->
      <div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">
        <h4 style="color:var(--bronze);font-size:18px;">Planning a Villa Fit-Out in Al Ain or Abu Dhabi?</h4>
        <p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">Experience the transparency of direct-contractor pricing with European-standard execution. Share your villa blueprints or photos for a comprehensive itemized BOQ and free 3D laser site survey within 24 to 48 hours.</p>
        <div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">
          <a class="button" href="/contact/">Request an itemized quotation</a>
          <a class="button" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20saw%20the%20Al%20Ain%20Al%20Dhahir%20case%20study%20and%20would%20like%20to%20discuss%20a%20villa%20fit-out." style="background:#fff;color:#151613;border-color:#fff;">WhatsApp our site engineers</a>
        </div>
      </div>

      <!-- Related Guides -->
      <div class="related-insights" style="margin-top:60px;border-top:1px solid #e2e3de;padding-top:40px;">
        <h3 style="font-size:24px;margin-bottom:24px;">Related Technical Guides & UAE Case Studies</h3>
        <div class="insights-grid">
          <a class="article-card" href="/insights/villa-fitout-al-ketbi-mbz-integrity-case-study/">
            <img class="article-card-img" src="/assets/alketbi-project/ceiling-chandeliers-rosette.jpg" alt="MBZ City Villa Fit-Out Case Study Mr. Ali Al Ketbi" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">Client Case Study & Engineering Integrity</span>
              <h4>MBZ City Luxury Villa Fit-Out Case Study: Integrity, Defect Whistleblowing & 7-Year Crack-Free Handover for Mr. Ali Al Ketbi</h4>
              <p>How NASAQ stopped contractor-consultant collusion hiding structural cracks, protected the client, and delivered flawless neoclassical fit-out that remains 100% crack-free 7 years later in MBZ City Zone 30 (Z30).</p>
            </div>
          </a>
          <a class="article-card" href="/insights/abu-dhabi-luxury-villa-majlis-fitout-guide/">
            <img class="article-card-img" src="/assets/villa.webp" alt="Luxury Villa and Modern Majlis Fit-Out Guide Abu Dhabi" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">Emirati Villa & Majlis Craft</span>
              <h4>Luxury Villa & Modern Majlis Fit-Out Guide Abu Dhabi: Al Bateen, Khalifa City & Mushrif</h4>
              <p>The definitive guide to luxury villa fit-outs, neoclassical majlises, grand double-height entrance panelling, and executing 3D designs without contractor delays in Abu Dhabi.</p>
            </div>
          </a>
        </div>
      </div>

    </div></article></main><footer><div><span class="wordmark">NASAQ <span lang="ar">نسق</span></span><p>Spaces in harmony.</p><p class="small">NASAQ Interior Design Implementation Works – L.L.C – S.P.C<br>Abu Dhabi, United Arab Emirates</p></div><div><a href="tel:+971505334861">+971 50 533 4861</a><a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a><a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a><a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">Instagram · @nasaq.fitout</a><a href="https://share.google/jD1fYkpZ96pX0pQPN" target="_blank" rel="noopener noreferrer">Google Maps · NASAQ Profile</a></div><div><a href="/services/">Our services</a><a href="/insights/">Insights & Guides</a><a href="/about/">About NASAQ</a><a href="/contact/">Start a conversation</a><p class="small">© 2026 NASAQ</p></div></footer><a class="floating" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project." aria-label="Contact NASAQ on WhatsApp">WhatsApp</a></body></html>`;

// 2. Generate Arabic HTML
const arHtml = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${caseStudy.titleAr}</title><meta name="description" content="${caseStudy.descAr}"><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/${caseStudy.slug}/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=6"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="منطقة الظاهر، العين، إمارة أبوظبي"><meta name="geo.position" content="24.2370;55.8820"><meta name="ICBM" content="24.2370, 55.8820"><meta property="og:type" content="article"><meta property="og:site_name" content="نسق للتصميم الداخلي والمقاولات"><meta property="og:title" content="${caseStudy.titleAr}"><meta property="og:description" content="${caseStudy.descAr}"><meta property="og:url" content="https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"><meta property="og:image" content="https://nasaqfitout.ae${caseStudy.image}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${caseStudy.titleAr}"><meta name="twitter:description" content="${caseStudy.descAr}"><meta name="twitter:image" content="https://nasaqfitout.ae${caseStudy.image}"><script type="application/ld+json">
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
        "العين",
        "منطقة الظاهر",
        "زاخر",
        "المعترض",
        "المويجعي",
        "أبوظبي",
        "مدينة محمد بن زايد",
        "مدينة خليفة",
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
      "headline": "قصة نجاح تشطيب فيلا السيد أحمد عوض الكعبي في العين (منطقة الظاهر): الإضاءة المغناطيسية والتشطيب الفاخر",
      "description": "${caseStudy.descAr}",
      "inLanguage": "ar",
      "mainEntityOfPage": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/",
      "datePublished": "2026-11-08T08:30:00+04:00",
      "dateModified": "2026-11-08T08:30:00+04:00",
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
          "name": "فيلا أحمد عوض الكعبي منطقة الظاهر العين",
          "item": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/"
        }
      ]
    },
    {
      "@type": "VideoObject",
      "name": "فيلا السيد أحمد الكعبي منطقة الظاهر العين: جولة التشطيب الكامل 1",
      "description": "فيديو توثيقي شامل يوضح دقة استقامة مسارات الإضاءة المغناطيسية الحديثة (Magnetic Tracks)، وأسقف الجبس الهندسية، والبانوهات الجدارية المنفذة في ديسمبر 2023 بمنطقة الظاهر بالعين.",
      "thumbnailUrl": "https://nasaqfitout.ae/assets/alkaabi-project/modern-rectangular-track-boiserie-room.jpg",
      "uploadDate": "2026-11-08T08:30:00+04:00",
      "contentUrl": "https://nasaqfitout.ae/assets/alkaabi-project/alkaabi-villa-walkthrough-1.mp4"
    },
    {
      "@type": "VideoObject",
      "name": "تفاصيل مسارات الإضاءة المغناطيسية والدهانات في فيلا الظاهر بالعين",
      "description": "فيديو يوضح نعومة دهانات Level-5 واستقامة بروفايلات الإضاءة المخفية بدون أي تعرجات أو فواصل ظاهرة في فيلا العين.",
      "thumbnailUrl": "https://nasaqfitout.ae/assets/alkaabi-project/magnetic-track-lights-ceiling.jpg",
      "uploadDate": "2026-11-08T08:30:00+04:00",
      "contentUrl": "https://nasaqfitout.ae/assets/alkaabi-project/alkaabi-villa-walkthrough-2.mp4"
    },
    {
      "@type": "FAQPage",
      "@id": "https://nasaqfitout.ae/ar/insights/${caseStudy.slug}/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "هل تنفذ شركة نسق مشاريع تشطيب الفلل المتكاملة في مدينة العين؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم بكل تأكيد. تقدم نسق خدمات تشطيب الفلل المتكاملة والمجالس في كافة مناطق مدينة العين (مثل الظاهر، زاخر، المويجعي، الفوعة، وفلج هزاع)، شاملة الأسقف المستعارة، الإضاءة المغناطيسية المعمارية، البانوهات الجدارية، والنجارة التخصصية."
          }
        },
        {
          "@type": "Question",
          "name": "ما هي أنظمة الإضاءة المغناطيسية (Magnetic Track Lights) وكيف يتم تركيبها في أسقف الجبس؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "هي بروفايلات ألمنيوم معمارية مدمجة بالكامل داخل ألواح الجبس لتبدو غاطسة بدون حواف بارزة، وتعمل بتيار أمان منخفض (48V). يتم تثبيت وحدات الإضاءة الخطية والسبوتلايت داخلها بالمغناطيس بحرية تامة دون أي تمديدات ظاهرة. تدمجها نسق بهياكل حديد مجلفنة مدعمة بشبك فايبر لمنع أي شروخ حرارية."
          }
        },
        {
          "@type": "Question",
          "name": "كيف تقارن أسعار نسق بأسعار استوديوهات التصميم ومكاتب الديكور في العين؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "لأن نسق هي شركة مقاولات تنفيذ داخلي معتمدة تمتلك كوادرها الهندسية وحرفييها المتخصصين مباشرة، فإننا نلغي عمولات الوسطاء وهوامش الربح المبالغ فيها لاستوديوهات التصميم، مما يوفر على المالك من 30% إلى 45% من التكلفة الإجمالية بمقايسة واضحة ومحددة البنود."
          }
        },
        {
          "@type": "Question",
          "name": "كم يستغرق تشطيب الفيلا الكامل في مدينة العين؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "وفقاً لمساحة الفيلا وعدد الغرف والمجالس، يتراوح جدولنا الزمني القياسي بين 4 إلى 8 أسابيع وفق اتفاقية مستوى خدمة صارمة (SLA)، مع إرسال تقارير مصورة دورية عبر واتساب للمالك."
          }
        },
        {
          "@type": "Question",
          "name": "هل يمكن تنفيذ تصميم أو فكرة أحضرها من بنترست أو إنستغرام لفلتي في العين؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، تتيح نسق ميزة 'أحضر تصميمك معك'. سواء كان لديك تصميم 3D جاهز، أو صور إلهام من بنترست أو الذكاء الاصطناعي، يقوم مهندسونا برفع المقاسات بالليزر وتطبيق التصميم بالمليمتر على الواقع دون فرض رسوم إعادة تصميم باهظة."
          }
        }
      ]
    }
  ]
}
</script></head><body><a class="skip" href="#main">تخطي إلى المحتوى</a><header><a class="brand" href="/ar/" aria-label="الصفحة الرئيسية لنسق"><img src="/assets/logo.svg" alt="شعار نسق المعتمد" width="500" height="500"></a><nav aria-label="الملاحة الرئيسية"><a href="/ar/services/">خدماتنا</a><a href="/ar/projects/">مفاهيم المشاريع</a><a href="/ar/insights/">المقالات والأدلة</a><a href="/ar/about/">عن نسق</a><a href="/ar/contact/">اتصل بنا</a></nav><a class="lang-switch" href="/insights/${caseStudy.slug}/" aria-label="English version">English</a><a class="navcta" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20طلب%20استشارة%20لتشطيب%20فيلا%20في%20العين.">تواصل معنا الآن</a><button id="menu" aria-label="فتح القائمة" aria-expanded="false">القائمة</button></header><main id="main"><div class="breadcrumbs"><a href="/ar/">الرئيسية</a> / <a href="/ar/insights/">المقالات وقصص النجاح</a> / <span>فيلا أحمد عوض الكعبي منطقة الظاهر العين</span></div><article class="article-container"><div class="article-header"><span class="article-badge">${caseStudy.badgeAr}</span><h1>${caseStudy.titleAr.split('|')[0].trim()}</h1><div class="article-meta-row"><span>بقلم فريق الهندسة في شركة نسق</span><span>•</span><span>${caseStudy.readTimeAr}</span><span>•</span><span>منطقة الظاهر، مدينة العين</span><span>•</span><span>تم التسليم ديسمبر 2023</span></div></div><img class="article-featured-img" src="${caseStudy.image}" alt="إضاءة المسارات المغناطيسية المخفية وبانوهات جدارية نيوكلاسيكية في فيلا أحمد عوض الكعبي بمنطقة الظاهر في العين" width="1024" height="1365" loading="eager"><div class="article-content">

      <!-- Executive Project Summary Card -->
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:14px;border-bottom:1px solid #383a34;padding-bottom:12px;">
          <strong style="color:var(--bronze);font-size:18px;">أرشيف المشاريع · تشطيب الفلل السكنية الفاخرة بالعين</strong>
          <span style="background:var(--bronze);color:#181918;font-size:12px;font-weight:700;padding:3px 10px;border-radius:2px;letter-spacing:0.5px;">تزكية عميل سابق · تسليم ديسمبر 2023</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:16px;font-size:14px;color:#d8d9d0;">
          <div><strong style="color:#fff;">العميل:</strong> السيد أحمد عوض الكعبي المحترم</div>
          <div><strong style="color:#fff;">الموقع:</strong> منطقة الظاهر، مدينة العين، إمارة أبوظبي</div>
          <div><strong style="color:#fff;">تاريخ الإنجاز:</strong> ديسمبر 2023</div>
          <div><strong style="color:#fff;">مصدر التعاقد:</strong> تزكية شخصية مباشرة من عميل سابق لدى نسق (Word-of-Mouth)</div>
          <div><strong style="color:#fff;">نطاق العمل:</strong> مسارات إضاءة مغناطيسية غاطسة (Magnetic Tracks)، أسقف جبسية هندسية، بانوهات جدارية نيوكلاسيكية، دهانات Level-5، تكامل فتحات التكييف</div>
          <div><strong style="color:#fff;">نتيجة المشروع:</strong> سعادة بالغة من العميل بجودة الإتقان، وعدالة السعر التنافسي المباشر، والالتزام التام</div>
        </div>
      </div>

      <p class="article-lead">في مدينة العين، مدينة الواحات والجمال، حيث تتميز الفلل السكنية برحابتها المعمارية وأصالة مجالسها العائلية، يحرص ملاك الفلل المواطنون على الجمع بين <strong>أحدث أنظمة الإضاءة المعمارية العصرية</strong> و<strong>أناقة التشطيبات الهندسية الكلاسيكية</strong>. ومع ذلك، يواجه العديد من أصحاب المنازل في العين صعوبة في إيجاد مقاول تنفيذ يمتلك الحرفية العالية لدمج مسارات الإضاءة المغناطيسية المخفية بدون تشققات، وبسعر عادل وشفاف بعيداً عن مغالاة المكاتب الاستشارية واستوديوهات التصميم.</p>

      <p>توثق دراسة الحالة هذه مشروع التشطيب الداخلي المتكامل لفيلا <strong>السيد أحمد عوض الكعبي</strong> في <strong>منطقة الظاهر بمدينة العين</strong>، والذي تم تسليمه بنجاح تام في <strong>ديسمبر 2023</strong>. وجاء هذا التعاقد عبر تزكية أصيلة من عميل سابق وثق في نزاهة وجودة نسق، ليجسد هذا المشروع كيف تقدم نسق قيمة حقيقية وسعراً عادلاً وإتقاناً هندسياً لا يضاهى في مجتمع فلل مدينة العين.</p>

      <h2>1. قوة التزكية الشخصية: الثقة المبنية على تجارب تسليم سابقة</h2>
      <p>في قطاع المقاولات والديكور بالدولة، قد تنجح الحملات الإعلانية في لفت الانتباه، ولكن <strong>التزكية الحقيقية التي يتناقلها الأهل والأصدقاء في المجالس الإماراتية تظل دائماً المعيار الأصدق لجودة ومصداقية المقاول</strong>.</p>
      
      <p>عندما بدأ السيد أحمد عوض الكعبي التخطيط لتشطيب فيلته في منطقة الظاهر بالعين، استشار أحد عملائنا السابقين ممن خاضوا تجربة تسليم ناجحة وخالية من المماطلة مع نسق. وبناءً على ما سمعه عن دقة مواعيدنا، والالتزام الصارم بمواصفات المواد، والمقايسة المحددة بلا مفاجآت أو بنود مستترة، تواصل السيد الكعبي معنا مباشرة.</p>

      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin:28px 0;">
        <h4 style="color:var(--bronze);margin-bottom:8px;font-size:16px;">أبرز أهداف وتطلعات العميل في المشروع:</h4>
        <ul style="color:#d8d9d0;font-size:14px;line-height:1.7;margin:0;padding-right:20px;">
          <li><strong>سعر مقاولات عادل ومباشر:</strong> تجنب فروق الأسعار الكبيرة (30% إلى 50%) التي تفرضها مكاتب الديكور كوسيط تجاري يقوم بتشغيل عمالة خارجية.</li>
          <li><strong>أنظمة إضاءة مغناطيسية حديثة:</strong> تركيب بروفايلات مسارات الإضاءة المغناطيسية (Magnetic Tracks) غاطسة داخل أسقف الجبس باستقامة ليزرية ودون أي بروز أو شروخ مستقبلية.</li>
          <li><strong>بانوهات جدارية متناسقة:</strong> تأطير الجدران بإطارات بانوهات نيوكلاسيكية تحيط بالنوافذ وفتحات التكييف بانسجام بصري مريح.</li>
          <li><strong>دهانات بمستوى Level-5:</strong> دهان ناعم مطفي فائق الجودة يخلو من علامات الرول أو التموجات تحت ضوء الشمس الطبيعي لمدينة العين.</li>
        </ul>
      </div>

      <h2>2. الهندسة الدقيقة لأنظمة الإضاءة المغناطيسية (Magnetic Track Lights)</h2>
      <p>تُعد مسارات الإضاءة المغناطيسية واحدة من أحدث صيحات الإضاءة المعمارية في الفلل العصرية. بدلاً من مصابيح السقف التقليدية البارزة، تعتمد هذه التقنية على <strong>بروفايلات ألمنيوم معمارية مدمجة بالكامل ومستوية مع سطح ألواح الجبس</strong>، وتعمل بنظام أمان فائق بقوة 48 فولت.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/alkaabi-project/magnetic-track-lights-ceiling.jpg" alt="مسارات إضاءة مغناطيسية مخفية بوحدات ليد خطية دافئة في سقف جبس فيلا أحمد الكعبي بمنطقة الظاهر العين" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 1: مسارات الإضاءة المغناطيسية المدمجة في السقف مع خطوط إضاءة دافئة (Warm White). لاحظ الانتقال الليزري فائق النعومة بين بروفايل الألمنيوم الأسود وسطح السقف الجبسي المدهون بمستوى Level-5.</p>
      </div>

      <p>على الرغم من بساطة مظهرها المودرن، إلا أن تركيب هذه المسارات يتطلب دقة وخبرة هندسية عالية لتفادي أخطاء شائعة يقع فيها مقاولو الجبس العاديون:</p>
      <ul>
        <li><strong>اختلاف التمدد الحراري:</strong> يتمدد الألمنيوم ويتقلص بمعدل مختلف تماماً عن ألواح الجبس ومعجون الفواصل، خاصة في مناخ العين الذي يشهد تبايناً حرارياً بين ليالي الشتاء الباردة ولهيب الصيف. استخدام معجون عادي فوق الألمنيوم يؤدي حتماً إلى شروخ شعرية وتفتت الفواصل.</li>
        <li><strong>استقامة الشاسيه الحديدي:</strong> أي ميل طفيف في أوميجا الجبس بورد يظهر مباشرة كاعوجاج فاضح في خطوط الإضاءة المستقيمة.</li>
      </ul>

      <p>ولضمان صلابة واستقامة السقف لسنوات طويلة، طبقت نسق معاييرها الهندسية المعتمدة:</p>
      <ol>
        <li><strong>شاسيهات حديد مقوى مجلفن (سمك 0.7 مم):</strong> تم تثبيت بروفايلات الإضاءة على هيكل حديدي مستقل مربوط مباشرة بالصبة الخرسانية لضمان ثبات السقف وعدم حدوث أي هبوط ميكانيكي.</li>
        <li><strong>أجنحة تثبيت مخرمة مع شبك فايبر مرن:</strong> تم استخدام بروفايلات Trimless مخصصة ذات حواف مثقبة دُمجت بالكامل داخل الجبس مع شريط فايبر جلاس ومعجون بوليمري مرن عالي المقاومة يمتص التمدد الحراري دون أي تشقق.</li>
        <li><strong>مرونة توزيع الإضاءة:</strong> يتيح هذا النظام للسيد أحمد الكعبي فك، تحريك، أو إضافة وحدات الإضاءة الخطية أو السبوتلايت في أي نقطة على المسار بسهولة وأمان تام دون الحاجة لأي تمديدات كهربائية إضافية.</li>
      </ol>

      <h2>3. التناغم بين الأسقف المودرن والبانوهات النيوكلاسيكية</h2>
      <p>في الصالات وغرف المعيشة الرئيسية، فضل العميل أسلوباً انتقالياً هادئاً يجمع بين حداثة خطوط الإضاءة الهندسية ودفء البانوهات الجدارية الكلاسيكية.</p>

      <div class="media-container" style="margin:30px 0;text-align:center;">
        <img src="/assets/alkaabi-project/modern-rectangular-track-boiserie-room.jpg" alt="مسار إضاءة مغناطيسي مستطيل مع بانوهات جدارية متناسقة حول النوافذ في فيلا الظاهر بالعين" style="max-width:100%;border-radius:4px;border:1px solid #383a34;" width="1024" height="1365" loading="lazy">
        <p style="font-size:13px;color:#9b9d93;margin-top:8px;font-style:italic;">الصورة 2: صالة المعيشة توضح مسار الإضاءة المغناطيسي المحيط بمركز الجلسة مع إطارات البانوهات الجدارية التي تحيط بالنوافذ الكبيرة وتنسجم مع موقع مكيف الهواء.</p>
      </div>

      <p>وكما تبرز الصورة 2، تم تصميم مسار الإضاءة على شكل مستطيل متكامل يحدد منطقة الجلوس الرئيسية ويمنح المكان توزيعاً ضوئياً مريحاً ومدروساً. وعلى الجدران، تم تفصيل إطارات البانوهات المعالجة ضد الرطوبة بأبعاد دقيقة تناغمت مع النوافذ المطلة على ضوء النهار، ورُكبت بمواد لاصقة مطاطية تمنع أي انفصال جداري.</p>

      <h2>4. توثيق حي بالفيديو: فحص جودة التسليم (ديسمبر 2023)</h2>
      <p>تثبت جودة العمل من خلال لقطات الفيديو الحية في الموقع. فيما يلي مقطعا فيديو توثيقيان تم تصويرهما في فيلا السيد أحمد عوض الكعبي بمنطقة الظاهر في العين عند اكتمال الأعمال:</p>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));gap:24px;margin:30px 0;">
        <div style="background:#1d1e1c;border:1px solid #383a34;border-radius:4px;padding:16px;">
          <h4 style="color:var(--bronze);margin-bottom:12px;font-size:16px;">فيديو 1: جولة شاملة في الصالة والأسقف المغناطيسية</h4>
          <video controls playsinline preload="metadata" style="width:100%;border-radius:3px;background:#000;">
            <source src="/assets/alkaabi-project/alkaabi-villa-walkthrough-1.mp4" type="video/mp4">
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
          <p style="font-size:13px;color:#c5c7be;margin-top:10px;line-height:1.6;">فيديو يوضح أبعاد الصالة، واستقامة مسارات الإضاءة المستطيلة في السقف، ودقة تشطيب البانوهات الجدارية وتناغمها مع الإضاءة الطبيعية.</p>
        </div>

        <div style="background:#1d1e1c;border:1px solid #383a34;border-radius:4px;padding:16px;">
          <h4 style="color:var(--bronze);margin-bottom:12px;font-size:16px;">فيديو 2: لقطة قريبة لبروفايلات الإضاءة والدهانات</h4>
          <video controls playsinline preload="metadata" style="width:100%;border-radius:3px;background:#000;">
            <source src="/assets/alkaabi-project/alkaabi-villa-walkthrough-2.mp4" type="video/mp4">
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
          <p style="font-size:13px;color:#c5c7be;margin-top:10px;line-height:1.6;">فيديو دقيق يبرز نظافة حواف المسار المغناطيسي الغاطس، ونعومة سطح السقف المستوي الخالي تماماً من أي عيوب أو فواصل معجون بارزة.</p>
        </div>
      </div>

      <h2>5. سعادة العميل ورأيه الصادق: التوازن المثالي بين السعر والجودة</h2>
      <p>عند اكتمال التسليم النهائي في ديسمبر 2023، <strong>عبر السيد أحمد عوض الكعبي عن سعادته الغامرة</strong> بالمستوى الفني الراقي للتشطيب، والنزاهة المالية التي تميزت بها شركة نسق:</p>

      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin:28px 0;padding:24px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <span style="color:#fbbc05;font-size:20px;">★★★★★</span>
          <strong style="color:var(--bronze);font-size:16px;">انطباع وتقييم العميل · منطقة الظاهر، مدينة العين</strong>
        </div>
        <p style="color:#d8d9d0;font-size:15px;line-height:1.8;font-style:italic;margin-bottom:12px;">
          "تجربتي مع نسق كانت ممتازة ومختلفة عن كثير من الشركات في العين. جدول الكميات والأسعار كان واضحاً ومفصلاً من أول يوم وبدون أي مصاريف إضافية مفاجئة. دقة تنفيذ مسارات الإضاءة المغناطيسية في السقف والبانوهات على الجدران متقنة ومستقيمة ونظيفة جداً. السعر كان عادلاً ومناسباً جداً مقارنة بالجودة العالية، وأنا سعيد وممتن لاهتمامهم واحترافيتهم العالية."
        </p>
        <span style="color:#9b9d93;font-size:13px;">— السيد أحمد عوض الكعبي المحترم، منطقة الظاهر، مدينة العين</span>
      </div>

      <h2>6. لماذا يختار ملاك الفلل في العين شركة نسق لتشطيب مساكنهم؟</h2>
      <p>يقدم نموذج فيلا السيد أحمد الكعبي دليلاً على المزايا التنافسية التي تجعل نسق الخيار الأول لأصحاب الفلل في العين (الظاهر، زاخر، المويجعي، الفوعة، فلج هزاع، والمرخانية):</p>

      <ol>
        <li><strong>أسعار مقاولات مباشرة بدون وسطاء:</strong> نعمل بكوادرنا الفنية المتخصصة ونلغي هوامش أرباح المكاتب الاستشارية التي تزيد تكلفة المشروع.</li>
        <li><strong>رفع مساحي دقيق بالليزر:</strong> نستخدم أحدث أجهزة الليزر لضمان استقامة مسارات الإضاءة وخطوط الجبس وتطابقها التام مع زوايا الغرف.</li>
        <li><strong>ضمان خطي لمدة 12 شهراً:</strong> ضمان موثق ضد عيوب المصنعية وشروخ فواصل الجبس وتماسك الدهانات.</li>
        <li><strong>شركة مرخصة ومعتمدة:</strong> رخصة رسمية صادرة من دائرة التنمية الاقتصادية في أبوظبي (ADDED) مع فواتير ضريبية نظامية وعقود قانونية تحمي المالك.</li>
      </ol>

      <!-- Frequently Asked Questions -->
      <section class="section pale" style="margin-top:50px;padding:35px;border-radius:4px;" id="faq">
        <h3 style="font-size:24px;margin-bottom:24px;color:#fff;">الأسئلة الشائعة حول تشطيب الفلل في العين (FAQ)</h3>
        <div style="display:flex;flex-direction:column;gap:20px;">
          
          <article class="faq-card">
            <h4>هل تنفذ شركة نسق مشاريع تشطيب الفلل المتكاملة في مدينة العين؟</h4>
            <p>نعم بكل تأكيد. تقدم نسق خدمات تشطيب الفلل المتكاملة والمجالس في كافة مناطق مدينة العين (مثل الظاهر، زاخر، المويجعي، الفوعة، وفلج هزاع)، شاملة الأسقف المستعارة، الإضاءة المغناطيسية المعمارية، البانوهات الجدارية، والنجارة التخصصية.</p>
          </article>

          <article class="faq-card">
            <h4>ما هي أنظمة الإضاءة المغناطيسية (Magnetic Track Lights) وكيف يتم تركيبها في أسقف الجبس؟</h4>
            <p>هي بروفايلات ألمنيوم معمارية مدمجة بالكامل داخل ألواح الجبس لتبدو غاطسة بدون حواف بارزة، وتعمل بتيار أمان منخفض (48V). يتم تثبيت وحدات الإضاءة الخطية والسبوتلايت داخلها بالمغناطيس بحرية تامة دون أي تمديدات ظاهرة. تدمجها نسق بهياكل حديد مجلفنة مدعمة بشبك فايبر لمنع أي شروخ حرارية.</p>
          </article>

          <article class="faq-card">
            <h4>كيف تقارن أسعار نسق بأسعار استوديوهات التصميم ومكاتب الديكور في العين؟</h4>
            <p>لأن نسق هي شركة مقاولات تنفيذ داخلي معتمدة تمتلك كوادرها الهندسية وحرفييها المتخصصين مباشرة، فإننا نلغي عمولات الوسطاء وهوامش الربح المبالغ فيها لاستوديوهات التصميم، مما يوفر على المالك من 30% إلى 45% من التكلفة الإجمالية بمقايسة واضحة ومحددة البنود.</p>
          </article>

          <article class="faq-card">
            <h4>كم يستغرق تشطيب الفيلا الكامل في مدينة العين؟</h4>
            <p>وفقاً لمساحة الفيلا وعدد الغرف والمجالس، يتراوح جدولنا الزمني القياسي بين 4 إلى 8 أسابيع وفق اتفاقية مستوى خدمة صارمة (SLA)، مع إرسال تقارير مصورة دورية عبر واتساب للمالك.</p>
          </article>

          <article class="faq-card">
            <h4>هل يمكن تنفيذ تصميم أو فكرة أحضرها من بنترست أو إنستغرام لفلتي في العين؟</h4>
            <p>نعم، تتيح نسق ميزة 'أحضر تصميمك معك'. سواء كان لديك تصميم 3D جاهز، أو صور إلهام من بنترست أو الذكاء الاصطناعي، يقوم مهندسونا برفع المقاسات بالليزر وتطبيق التصميم بالمليمتر على الواقع دون فرض رسوم إعادة تصميم باهظة.</p>
          </article>

        </div>
      </section>

      <!-- CTA Box -->
      <div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">
        <h4 style="color:var(--bronze);font-size:18px;">هل تخطط لتشطيب فيلتك في العين أو أبوظبي؟</h4>
        <p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">تمتع بشفافية أسعار المقاولات المباشرة مع دقة التنفيذ الهندسي بأعلى المعايير. شاركنا مخططات فيلتك أو أفكارك للحصول على مقايسة تفصيلية ورفع مساحي مجاني بالليزر خلال 24 إلى 48 ساعة.</p>
        <div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">
          <a class="button" href="/ar/contact/">طلب عرض أسعار مفصل</a>
          <a class="button" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20شاهدت%20مشروع%20فيلا%20الظاهر%20بالعين%20وأود%20استشارة%20لتشطيب%20فيلتي." style="background:#fff;color:#151613;border-color:#fff;">تحدث مع مهندسينا عبر واتساب</a>
        </div>
      </div>

      <!-- Related Guides -->
      <div class="related-insights" style="margin-top:60px;border-top:1px solid #e2e3de;padding-top:40px;">
        <h3 style="font-size:24px;margin-bottom:24px;">مقالات هندسية وأدلة ذات صلة بتشطيب الفلل في الإمارات</h3>
        <div class="insights-grid">
          <a class="article-card" href="/ar/insights/villa-fitout-al-ketbi-mbz-integrity-case-study/">
            <img class="article-card-img" src="/assets/alketbi-project/ceiling-chandeliers-rosette.jpg" alt="قصة نجاح فيلا السيد علي الكتبي حوض 30 (Z30) مدينة محمد بن زايد" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">دراسة حالة واقعية ونزاهة هندسية</span>
              <h4>قصة نجاح تشطيب فيلا السيد علي الكتبي في مدينة محمد بن زايد (حوض 30 (Z30)): النزاهة الهندسية وكشف عيوب المقاول والاستشاري</h4>
              <p>كيف رفضت نسق طلب المقاول والاستشاري إخفاء شروخ الجدران بالجبس بورد، وحمت العميل علي الكتبي غدير، وسلمت تشطيباً ملكياً لا يزال بلا شروخ بعد 7 سنوات.</p>
            </div>
          </a>
          <a class="article-card" href="/ar/insights/abu-dhabi-luxury-villa-majlis-fitout-guide/">
            <img class="article-card-img" src="/assets/villa.webp" alt="دليل تشطيب الفلل الفاخرة والمجالس الحديثة في أبوظبي" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">تشطيب الفلل والمجالس الفاخرة</span>
              <h4>دليل تشطيب الفلل الفاخرة والمجالس الحديثة في أبوظبي: البطين، مدينة خليفة، والمشرف</h4>
              <p>الدليل الشامل لتشطيب الفلل الفاخرة، مجالس الرجال والصالات الكبيرة، تكسيات الجدران، وتطبيق التصاميم ثلاثية الأبعاد (3D) بدقة متناهية دون مماطلة في أبوظبي.</p>
            </div>
          </a>
        </div>
      </div>

    </div></article></main><footer><div><span class="wordmark">نسق <span lang="en">NASAQ</span></span><p>تناغم في المساحات.</p><p class="small">شركة نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م<br>أبوظبي، دولة الإمارات العربية المتحدة</p></div><div><a href="tel:+971505334861">+971 50 533 4861</a><a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a><a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a><a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">إنستغرام · @nasaq.fitout</a><a href="https://share.google/jD1fYkpZ96pX0pQPN" target="_blank" rel="noopener noreferrer">خرائط Google · ملف نسق</a></div><div><a href="/ar/services/">خدماتنا</a><a href="/ar/insights/">المقالات والأدلة</a><a href="/ar/about/">عن نسق</a><a href="/ar/contact/">ابدأ محادثة</a><p class="small">© 2026 نسق</p></div></footer><a class="floating" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20طلب%20استشارة%20لتشطيب%20فيلا%20في%20العين." aria-label="تواصل مع نسق عبر الواتساب">واتساب</a></body></html>`;

// Write HTML files
fs.writeFileSync(path.join(enDir, 'index.html'), enHtml, 'utf8');
fs.writeFileSync(path.join(arDir, 'index.html'), arHtml, 'utf8');
console.log('✅ Generated Ahmed Al Kaabi Al Ain Al Dhahir Case Study (EN & AR)');

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
      <video:thumbnail_loc>https://nasaqfitout.ae/assets/alkaabi-project/modern-rectangular-track-boiserie-room.jpg</video:thumbnail_loc>
      <video:title>Mr. Ahmed Al Kaabi Villa Al Ain Al Dhahir Turnkey Fit-Out Walkthrough</video:title>
      <video:description>Walkthrough video showing modern flush magnetic track lighting, crisp geometric gypsum false ceilings, and precision wall mouldings executed in December 2023 in Al Dhahir, Al Ain.</video:description>
      <video:content_loc>https://nasaqfitout.ae/assets/alkaabi-project/alkaabi-villa-walkthrough-1.mp4</video:content_loc>
      <video:publication_date>${caseStudy.date}T08:30:00+04:00</video:publication_date>
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
      <video:thumbnail_loc>https://nasaqfitout.ae/assets/alkaabi-project/modern-rectangular-track-boiserie-room.jpg</video:thumbnail_loc>
      <video:title>توثيق تشطيب فيلا السيد أحمد عوض الكعبي في العين منطقة الظاهر</video:title>
      <video:description>فيديو توثيقي شامل يوضح دقة استقامة مسارات الإضاءة المغناطيسية الحديثة وأسقف الجبس الهندسية والبانوهات في منطقة الظاهر بالعين.</video:description>
      <video:content_loc>https://nasaqfitout.ae/assets/alkaabi-project/alkaabi-villa-walkthrough-1.mp4</video:content_loc>
      <video:publication_date>${caseStudy.date}T08:30:00+04:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
  </url>\n`;

  sitemap = sitemap.replace('</urlset>', `${sitemapEntry}</urlset>`);
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ Updated dist/sitemap.xml with 2 new URLs (Total 58 URLs)');
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
      const newCaps = ['AlAinVillaFitOut', 'MagneticTrackLightingInstallation', 'AlDhahirResidentialFitOut'];
      newCaps.forEach(c => {
        if (!entry.capabilities.includes(c)) entry.capabilities.push(c);
      });
      const newQueries = [
        'تشطيب فيلا أحمد عوض الكعبي في العين منطقة الظاهر',
        'أفضل مقاول تشطيب وديكور في مدينة العين',
        'تركيب مسارات الإضاءة المغناطيسية Magnetic Track في العين',
        'تشطيب فلل ومجالس في منطقة الظاهر وزاخر العين',
        'Al Ain luxury villa fit out contractor Al Dhahir',
        'Flush recessed magnetic track lighting installation Al Ain',
        'Ahmed Al Kaabi villa fit out Al Ain case study',
        'Direct interior implementation contractor Al Ain Abu Dhabi'
      ];
      newQueries.forEach(q => {
        if (!entry.representativeQueries.includes(q)) entry.representativeQueries.push(q);
      });
      fs.writeFileSync(target, JSON.stringify(catalog, null, 2), 'utf8');
      console.log(`✅ Updated ${path.relative(DIST_DIR, target)}`);
    }
  }
});

console.log('\n🚀 Ahmed Al Kaabi Al Ain Al Dhahir Case Study successfully built and integrated!');

