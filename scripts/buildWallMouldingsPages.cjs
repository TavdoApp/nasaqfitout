const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

// 1. Ensure target directories exist
const enDir = path.join(DIST_DIR, 'services', 'wall-mouldings-boiserie');
const arDir = path.join(DIST_DIR, 'ar', 'services', 'wall-mouldings-boiserie');

if (!fs.existsSync(enDir)) fs.mkdirSync(enDir, { recursive: true });
if (!fs.existsSync(arDir)) fs.mkdirSync(arDir, { recursive: true });

// ==========================================
// ENGLISH PAGE HTML
// ==========================================
const enHtml = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Wall Mouldings, Boiserie & Feature Walls Abu Dhabi | 72-Hour Fit-Out | NASAQ</title><meta name="description" content="Precision architectural wall mouldings, classical French boiserie, wainscoting, and TV media feature walls with concealed LED cove lighting in Abu Dhabi. Delivered in 72 hours by NASAQ."><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/services/wall-mouldings-boiserie/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/services/wall-mouldings-boiserie/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/services/wall-mouldings-boiserie/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/services/wall-mouldings-boiserie/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=4"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="Abu Dhabi"><meta name="geo.position" content="24.4539;54.3773"><meta name="ICBM" content="24.4539, 54.3773"><meta property="og:site_name" content="NASAQ | نسق"><meta property="og:type" content="website"><meta property="og:locale" content="en_AE"><meta property="og:locale:alternate" content="ar_AE"><meta property="og:title" content="Wall Mouldings, Boiserie & Feature Walls Abu Dhabi | 72-Hour Fit-Out | NASAQ"><meta property="og:description" content="Precision architectural wall mouldings, French boiserie, wainscoting, and TV media feature walls with concealed LED lighting in Abu Dhabi. Delivered in 72 hours."><meta property="og:url" content="https://nasaqfitout.ae/services/wall-mouldings-boiserie/"><meta property="og:image" content="https://nasaqfitout.ae/assets/saadiyat-project/after-tv-wall-close-up-led.jpg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Wall Mouldings, Boiserie & Feature Walls Abu Dhabi | NASAQ"><meta name="twitter:description" content="Precision architectural wall mouldings, French boiserie, wainscoting, and TV media feature walls with concealed LED lighting in Abu Dhabi. Delivered in 72 hours."><meta name="twitter:image" content="https://nasaqfitout.ae/assets/saadiyat-project/after-tv-wall-close-up-led.jpg"><script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://nasaqfitout.ae/"},{"@type":"ListItem","position":2,"name":"Services","item":"https://nasaqfitout.ae/services/"},{"@type":"ListItem","position":3,"name":"Wall Mouldings & Boiserie","item":"https://nasaqfitout.ae/services/wall-mouldings-boiserie/"}]},{"@type":"Service","name":"Architectural Wall Mouldings, Boiserie & Feature Walls in Abu Dhabi","serviceType":"Architectural Wall Panelling, Boiserie & Living Room Feature Walls","description":"Bespoke supply, laser-aligned installation, and Level-5 finishing of high-density polyurethane wall mouldings, classical French boiserie frames, TV media walls with concealed cabling, and warm indirect LED cove lighting delivered in rapid 72-hour turnarounds across Abu Dhabi and UAE.","url":"https://nasaqfitout.ae/services/wall-mouldings-boiserie/","provider":{"@id":"https://nasaqfitout.ae/#business"},"areaServed":[{"@type":"City","name":"Abu Dhabi"},{"@type":"AdministrativeArea","name":"Saadiyat Island"},{"@type":"AdministrativeArea","name":"Yas Island"},{"@type":"AdministrativeArea","name":"Al Reem Island"},{"@type":"AdministrativeArea","name":"Al Raha Beach"},{"@type":"City","name":"Dubai"}]},{"@type":"Review","itemReviewed":{"@type":"HomeAndConstructionBusiness","name":"NASAQ Interior Design Implementation Works – L.L.C – S.P.C","url":"https://nasaqfitout.ae/","telephone":"+971505334861"},"reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"Oumaima Lahdili"},"reviewBody":"One of the best interior design and fit-out companies in Abu Dhabi! I'm based in Saadiyat Island and found NASAQ Interior Design & Fit-Out through ChatGPT. I'm so happy I chose them! I shared a few inspiration photos, and they brought my vision to life in just 3 days. They completed beautiful wall panel mouldings, gypsum board work, hidden LED lighting, painting, and TV installation. The team was professional, reliable, and delivered excellent finishing. Everything was clean and ready when they handed over the apartment. Highly recommend NASAQ to anyone looking for quality interior fit-out services in Abu Dhabi!","datePublished":"2026-11-02"},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does it take NASAQ to complete a wall moulding and TV feature wall project?","acceptedAnswer":{"@type":"Answer","text":"For typical apartment living rooms and master suites up to 50 square meters, NASAQ completes the entire turnkey scope in exactly 72 hours (3 calendar days) from initial laser survey to final touch-up, electrical commissioning, and dust-free handover."}},{"@type":"Question","name":"What materials are used for wall mouldings, and why not timber or MDF in the UAE?","acceptedAnswer":{"@type":"Answer","text":"We utilize high-density polyurethane (HDPS) and polymer architectural mouldings. Unlike wood or MDF, high-density polyurethane does not absorb ambient humidity, will not warp or expand under cycling air conditioning, resists termites, and holds crisp neoclassical lines permanently without joint cracking."}},{"@type":"Question","name":"Can NASAQ completely conceal TV power cords, HDMI cables, and streaming boxes?","acceptedAnswer":{"@type":"Answer","text":"Yes. We build shallow flush drywall feature walls or chase fire-rated in-wall conduits so all cabling, socket extensions, and media wires are 100% hidden behind the mounted television, accompanied by integrated 3000K warm LED cove lighting."}},{"@type":"Question","name":"Do we need building management NOC permits for wall mouldings in Abu Dhabi?","acceptedAnswer":{"@type":"Answer","text":"In major residential developments including Saadiyat Island, Al Reem Island, and Yas Island, decorative wall mouldings and interior painting are treated as non-structural cosmetic works. They require only a routine Building Management Work Permit and Gate Pass, which NASAQ coordinates on behalf of the client."}},{"@type":"Question","name":"Which paint brands and sheens are applied over the mouldings?","acceptedAnswer":{"@type":"Answer","text":"We exclusively use premium scrub-resistant silk emulsions such as Jotun Fenomastic (Pure Colours / Wonderwall Lux) or Caparol, applied after sealing all mitered joints with German-grade flexible acrylic caulk for a seamless Level-5 finish."}}]}]}</script><script src="/app.js" defer></script></head><body><a class="skip" href="#main">Skip to content</a><header><a class="brand" href="/" aria-label="NASAQ home"><img src="/assets/logo.svg" alt="NASAQ نسق approved logo" width="500" height="500"></a><nav aria-label="Main navigation"><a href="/services/">Services</a><a href="/projects/">Concepts</a><a href="/insights/">Insights</a><a href="/about/">About</a><a href="/contact/">Contact</a></nav><a class="lang-switch" href="/ar/services/wall-mouldings-boiserie/" aria-label="النسخة العربية">العربية</a><a class="navcta" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20wall%20moulding%20and%20feature%20wall%20project.">Discuss your project</a><button id="menu" aria-label="Open navigation" aria-expanded="false">Menu</button></header><main id="main">

  <section class="intro">
    <p class="eyebrow">Specialist Fit-Out · Abu Dhabi & Dubai</p>
    <h1>Wall mouldings, boiserie & feature walls.</h1>
    <p>Transforming blank residential surfaces into architectural statements—classical French panelling, illuminated media walls, and Level-5 finishes delivered in as little as 72 hours.</p>
  </section>

  <section class="section split">
    <div>
      <p class="eyebrow">Bespoke Wall Architecture</p>
      <h2>From blank plaster<br>to timeless character.</h2>
    </div>
    <div>
      <p class="lead">Polyurethane boiserie, concealed LED cove lighting, and in-wall cable concealment engineered for modern UAE homes.</p>
      <p>Bare, expansive living room walls and messy surface cables detract from high-end UAE apartments and villas. NASAQ's specialist joinery and drywall craftspeople install custom-proportioned wall mouldings, classical French wainscoting frames, and illuminated TV feature walls with zero hassle.</p>
      <p>Whether you require a neoclassical double-box moulding layout behind your sofa, a contemporary fluted TV backdrop, or hidden cove lighting for ambient warmth, our in-house team executes the complete installation in a disciplined, fast-track process.</p>
      <div style="margin-top:28px;display:flex;gap:14px;flex-wrap:wrap;">
        <a class="button" href="/contact/?service=wall-mouldings-boiserie">Request a wall moulding quotation</a>
        <a class="button" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20wall%20moulding%20and%20feature%20wall%20project." style="background:#25d366;border-color:#25d366;color:#fff;">Instant WhatsApp consultation</a>
      </div>
    </div>
  </section>

  <!-- Featured Real Project Handover Spotlight -->
  <section class="section pale">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">Verified Real-World Handover</p>
        <h2>Saadiyat Island Soho Residence: 72-Hour Delivery.</h2>
      </div>
      <p>Watch how our on-site team transformed a blank apartment in Soho Block A, Saadiyat Island into an elegant neoclassical sanctuary in just 3 days.</p>
    </div>

    <!-- Video Embed -->
    <div style="margin:30px 0;background:#000;border:1px solid var(--line);overflow:hidden;box-shadow:0 12px 32px rgba(0,0,0,0.12);">
      <video controls playsinline preload="metadata" style="width:100%;max-height:480px;display:block;margin:0 auto;background:#000;" poster="/assets/saadiyat-project/execution-team-mouldings.jpg">
        <source src="/assets/saadiyat-project/saadiyat-completed-handover.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </div>

    <!-- Photo Transformation Grid -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:30px;">
      <div>
        <img src="/assets/saadiyat-project/before-tv-wall.jpg" alt="Before: Blank apartment TV wall in Saadiyat Island" style="width:100%;aspect-ratio:16/10;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <p style="font-size:13px;color:#7a7b74;margin-top:8px;"><strong>Before:</strong> Blank TV wall and surface cables before NASAQ fit-out.</p>
      </div>
      <div>
        <img src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="During: NASAQ in-house team installing mouldings on site in Saadiyat Island" style="width:100%;aspect-ratio:16/10;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <p style="font-size:13px;color:#7a7b74;margin-top:8px;"><strong>Day 2:</strong> Laser-aligning framing and high-density moulding profiles.</p>
      </div>
      <div>
        <img src="/assets/saadiyat-project/after-tv-wall-close-up-led.jpg" alt="After: Completed illuminated TV feature wall with concealed cove lighting" style="width:100%;aspect-ratio:16/10;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <p style="font-size:13px;color:#7a7b74;margin-top:8px;"><strong>Day 3 Handover:</strong> Recessed 3000K warm LED glow and concealed TV cabling.</p>
      </div>
      <div>
        <img src="/assets/saadiyat-project/after-sofa-wall.jpg" alt="After: Neoclassical French boiserie moulding behind living room sofa" style="width:100%;aspect-ratio:16/10;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <p style="font-size:13px;color:#7a7b74;margin-top:8px;"><strong>Finished Result:</strong> Classical symmetrical boiserie panelling behind sofa.</p>
      </div>
    </div>

    <!-- Verbatim Client Review Card -->
    <div style="margin-top:40px;background:#fff;border:1px solid #dcded8;border-left:4px solid #b89158;padding:32px 36px;box-shadow:0 4px 18px rgba(0,0,0,0.04);">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:20px;color:#e8a317;">★★★★★</span>
          <span style="font-size:14px;font-weight:700;color:#1d1f1c;">5.0 Star Verified Google Review</span>
        </div>
        <span style="font-size:13px;color:#85877f;">Discovered NASAQ via ChatGPT</span>
      </div>
      <blockquote style="margin:0;font-style:italic;color:#383a35;font-size:16px;line-height:1.75;">
        "One of the best interior design and fit-out companies in Abu Dhabi! I'm based in Saadiyat Island and found NASAQ Interior Design & Fit-Out through ChatGPT. I'm so happy I chose them! I shared a few inspiration photos, and they brought my vision to life in just 3 days. They completed beautiful wall panel mouldings, gypsum board work, hidden LED lighting, painting, and TV installation. The team was professional, reliable, and delivered excellent finishing. Everything was clean and ready when they handed over the apartment. Highly recommend NASAQ to anyone looking for quality interior fit-out services in Abu Dhabi!"
      </blockquote>
      <div style="margin-top:18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
        <div>
          <strong style="font-size:14px;color:#181918;">Oumaima Lahdili</strong>
          <span style="font-size:13px;color:#777970;display:block;">Soho Residence (Block A), Saadiyat Island, Abu Dhabi</span>
        </div>
        <a class="textlink" href="/insights/saadiyat-island-72-hour-fit-out-case-study/">Read complete technical case study &rarr;</a>
      </div>
    </div>
  </section>

  <!-- 72-Hour Rapid Delivery Protocol -->
  <section class="section">
    <p class="eyebrow">72-Hour Rapid Delivery Protocol</p>
    <h2>The 3-day living room transformation timeline.</h2>
    <div class="process">
      <article>
        <span class="number">01</span>
        <h3>Laser Survey & Sub-Wall Prep</h3>
        <p>Day 1: 3D laser elevation mapping, marking panel ratios around electrical outlets, laying surface drop-sheets, and chasing in-wall TV wiring channels.</p>
      </article>
      <article>
        <span class="number">02</span>
        <h3>Precision Cutting & Polymer Bonding</h3>
        <p>Day 2: 45° miter-cutting of high-density mouldings, industrial polymer adhesive fixing, acoustic perimeter caulking, and installing aluminum LED profiles.</p>
      </article>
      <article>
        <span class="number">03</span>
        <h3>Level-5 Spray & Roller Finishing</h3>
        <p>Day 3: Microfiber application of Jotun Fenomastic silk emulsion, seamless joint sanding, warm 3000K LED testing, TV bracket mounting, and zero-snag inspection.</p>
      </article>
      <article>
        <span class="number">04</span>
        <h3>Deep Clean & Handover</h3>
        <p>Handover: Full HEPA-filter vacuuming, wiping all surfaces, and instant occupancy without residual construction odor or dust.</p>
      </article>
    </div>
  </section>

  <!-- Technical Features & Specifications -->
  <section class="section pale features-section">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">Technical Deliverables</p>
        <h2>Engineered materials & finishing standards.</h2>
      </div>
      <p>Every moulding profile and electrical fitting is selected to withstand the UAE indoor climate without warping, shrinkage, or cracks.</p>
    </div>
    <div class="features-grid">
      <div class="feature-item">
        <h3>High-Density Polyurethane (HDPS)</h3>
        <p>Water-resistant, termite-proof, and dimensionally stable. Unlike timber or MDF, it will never warp, expand, or develop hairline cracks under continuous AC cycles.</p>
      </div>
      <div class="feature-item">
        <h3>In-Wall Conduit & Cable Chasing</h3>
        <p>In-wall conduits conceal all HDMI, optical, and high-voltage power cables behind your mounted TV, delivering an uncluttered, floating display aesthetic.</p>
      </div>
      <div class="feature-item">
        <h3>Diffused 3000K Warm LED Coves</h3>
        <p>High-CRI strip LEDs embedded inside anodized aluminum heat-sink profiles with frosted silicone diffusers produce an even, glare-free architectural halo.</p>
      </div>
      <div class="feature-item">
        <h3>Anti-Crack Elastic Joint Sealant</h3>
        <p>German-grade flexible acrylic sealants applied at all mitered 45° corner joints and wall perimeters absorb subtle building expansion without opening.</p>
      </div>
      <div class="feature-item">
        <h3>Bespoke Neoclassical & Modern Geometry</h3>
        <p>Custom panel proportions calculated to frame your artwork, mirror wall heights, and harmonize with room doors and architectural reveals.</p>
      </div>
      <div class="feature-item">
        <h3>Zero-Dust Clean Execution</h3>
        <p>Active dust-extraction miter saws and complete heavy-duty floor and furniture wrapping ensure your living space stays clean throughout the 72-hour work.</p>
      </div>
    </div>
  </section>

  <!-- Communities Served -->
  <section class="section">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">UAE Community Coverage</p>
        <h2>Serving premier residential developments.</h2>
      </div>
      <p>Our teams are experienced with building management guidelines and security gate passes across Abu Dhabi and Dubai luxury communities.</p>
    </div>
    <div class="features-grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr));">
      <div class="feature-item">
        <h3>Saadiyat Island</h3>
        <p>Soho Block A & B, Mamsha Al Saadiyat, Saadiyat Grove, Park View, and Saadiyat Lagoons private villas.</p>
      </div>
      <div class="feature-item">
        <h3>Yas Island</h3>
        <p>Yas Acres, Water's Edge, Ansam Residences, Mayan, and West Yas luxury waterfront developments.</p>
      </div>
      <div class="feature-item">
        <h3>Al Reem Island</h3>
        <p>Gate Towers, Sun & Sky Towers, Marina Square, Shams Abu Dhabi, and City of Lights residential high-rises.</p>
      </div>
      <div class="feature-item">
        <h3>Al Raha Beach</h3>
        <p>Al Bandar, Al Muneera, and Al Zeina waterfront apartments and luxury podium townhouses.</p>
      </div>
      <div class="feature-item">
        <h3>Private Villa Suburbs</h3>
        <p>Khalifa City, Mohamed Bin Zayed City, Shakhbout City, Al Falah, and Al Bateen family majlises and villas.</p>
      </div>
      <div class="feature-item">
        <h3>Dubai Luxury Communities</h3>
        <p>Downtown Dubai, Dubai Hills Estate, Palm Jumeirah, and Dubai Marina apartment and penthouse renovations.</p>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section faq-section">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">Frequently Asked Questions</p>
        <h2>Expert guidance on wall mouldings & feature walls.</h2>
      </div>
      <p>Direct answers from our Abu Dhabi interior fit-out engineering and design team.</p>
    </div>
    <div class="faq-grid">
      <article class="faq-card">
        <h3>How long does it take NASAQ to complete a wall moulding and TV feature wall project?</h3>
        <p>For typical apartment living rooms and master suites up to 50 square meters, NASAQ completes the entire turnkey scope in exactly 72 hours (3 calendar days) from initial laser survey to final touch-up, electrical commissioning, and dust-free handover.</p>
      </article>
      <article class="faq-card">
        <h3>What materials are used for wall mouldings, and why not timber or MDF in the UAE?</h3>
        <p>We utilize high-density polyurethane (HDPS) and polymer architectural mouldings. Unlike wood or MDF, high-density polyurethane does not absorb ambient humidity, will not warp or expand under cycling air conditioning, resists termites, and holds crisp neoclassical lines permanently without joint cracking.</p>
      </article>
      <article class="faq-card">
        <h3>Can NASAQ completely conceal TV power cords, HDMI cables, and streaming boxes?</h3>
        <p>Yes. We build shallow flush drywall feature walls or chase fire-rated in-wall conduits so all cabling, socket extensions, and media wires are 100% hidden behind the mounted television, accompanied by integrated 3000K warm LED cove lighting.</p>
      </article>
      <article class="faq-card">
        <h3>Do we need building management NOC permits for wall mouldings in Abu Dhabi?</h3>
        <p>In major residential developments including Saadiyat Island, Al Reem Island, and Yas Island, decorative wall mouldings and interior painting are treated as non-structural cosmetic works. They require only a routine Building Management Work Permit and Gate Pass, which NASAQ coordinates on behalf of the client.</p>
      </article>
      <article class="faq-card">
        <h3>Which paint brands and sheens are applied over the mouldings?</h3>
        <p>We exclusively use premium scrub-resistant silk emulsions such as Jotun Fenomastic (Pure Colours / Wonderwall Lux) or Caparol, applied after sealing all mitered joints with German-grade flexible acrylic caulk for a seamless Level-5 finish.</p>
      </article>
      <article class="faq-card">
        <h3>Can I choose custom frame designs and asymmetrical layouts?</h3>
        <p>Yes. Our site engineers produce customized 2D elevation shop drawings showing exact box widths, chair rail heights, and spacing around switches and artwork before any cuts are made on site.</p>
      </article>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta">
    <p class="eyebrow">Ready for a 72-Hour Living Room Makeover?</p>
    <h2>Let’s design your<br>feature wall today.</h2>
    <a class="button" href="/contact/?service=wall-mouldings-boiserie">Request a quotation</a>
    <a class="plain" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20wall%20moulding%20project.">WhatsApp our estimators: +971 50 533 4861</a>
  </section>

</main>

<footer>
  <div>
    <span class="wordmark">NASAQ <span lang="ar">نسق</span></span>
    <p>Spaces in harmony.</p>
    <p class="small">NASAQ Interior Design Implementation Works – L.L.C – S.P.C<br>Abu Dhabi, United Arab Emirates</p>
  </div>
  <div>
    <a href="tel:+971505334861">+971 50 533 4861</a>
    <a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a>
    <a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a>
    <a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">Instagram · @nasaq.fitout</a>
    <a href="https://www.linkedin.com/company/nasaq-fitout" target="_blank" rel="noopener noreferrer">LinkedIn · NASAQ</a>
  </div>
  <div>
    <a href="/services/">Our services</a>
    <a href="/insights/">Insights & Guides</a>
    <a href="/about/">About NASAQ</a>
    <a href="/contact/">Start a conversation</a>
    <p class="small">© 2026 NASAQ</p>
  </div>
</footer>

<a class="floating" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20wall%20moulding%20and%20feature%20wall%20project." aria-label="Contact NASAQ on WhatsApp">WhatsApp</a>
</body></html>`;

// ==========================================
// ARABIC PAGE HTML
// ==========================================
const arHtml = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>بانوهات جدارية وبوازيري وتجاويف إنارة ليد في أبوظبي | تنفيذ خلال 72 ساعة | نسق</title><meta name="description" content="تركيب وتصميم إطارات وبانوهات الجدران (بوازيري)، تجاويف شاشات التلفزيون العصرية، وإنارة ليد مخفية في أبوظبي. تنفيذ احترافي وتسليم خلال 72 ساعة من شركة نسق."><meta name="theme-color" content="#181918"><link rel="canonical" href="https://nasaqfitout.ae/ar/services/wall-mouldings-boiserie/"><link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/services/wall-mouldings-boiserie/"><link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/services/wall-mouldings-boiserie/"><link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/services/wall-mouldings-boiserie/"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="alternate icon" href="/assets/favicon.png"><link rel="stylesheet" href="/style.css?v=4"><meta name="geo.region" content="AE-AZ"><meta name="geo.placename" content="أبوظبي"><meta name="geo.position" content="24.4539;54.3773"><meta name="ICBM" content="24.4539, 54.3773"><meta property="og:site_name" content="نسق | NASAQ"><meta property="og:type" content="website"><meta property="og:locale" content="ar_AE"><meta property="og:locale:alternate" content="en_AE"><meta property="og:title" content="بانوهات جدارية وبوازيري وتجاويف إنارة ليد في أبوظبي | تنفيذ خلال 72 ساعة | نسق"><meta property="og:description" content="تركيب وتصميم إطارات الجدران (البوازيري)، وتجاويف التلفزيون العصرية مع إضاءة ليد مخفية ودهانات فائقة النعومة في أبوظبي خلال 72 ساعة."><meta property="og:url" content="https://nasaqfitout.ae/ar/services/wall-mouldings-boiserie/"><meta property="og:image" content="https://nasaqfitout.ae/assets/saadiyat-project/after-tv-wall-close-up-led.jpg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="بانوهات جدارية وبوازيري وتجاويف إنارة ليد في أبوظبي | نسق"><meta name="twitter:description" content="تركيب وتصميم إطارات وبانوهات الجدران (بوازيري)، تجاويف التلفزيون، وإضاءة مخفية في أبوظبي خلال 72 ساعة."><meta name="twitter:image" content="https://nasaqfitout.ae/assets/saadiyat-project/after-tv-wall-close-up-led.jpg"><script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"الرئيسية","item":"https://nasaqfitout.ae/ar/"},{"@type":"ListItem","position":2,"name":"الخدمات","item":"https://nasaqfitout.ae/ar/services/"},{"@type":"ListItem","position":3,"name":"بانوهات وبوازيري الجدران","item":"https://nasaqfitout.ae/ar/services/wall-mouldings-boiserie/"}]},{"@type":"Service","name":"بانوهات جدارية وبوازيري وتجاويف إنارة ليد في أبوظبي","serviceType":"تركيب إطارات وبانوهات جدارية وبوازيري وتجاويف شاشات التلفزيون","description":"توريد وتركيب وتشطيب إطارات وبانوهات الجدران الكلاسيكية (بوازيري) من البولي يوريثان عالي الكثافة، وتجاويف شاشات التلفزيون مع إخفاء الأسلاك وإنارة ليد دافئة غير مباشرة، وتسليم قياسي خلال 72 ساعة في أبوظبي والإمارات.","url":"https://nasaqfitout.ae/ar/services/wall-mouldings-boiserie/","provider":{"@id":"https://nasaqfitout.ae/#business"},"areaServed":[{"@type":"City","name":"أبوظبي"},{"@type":"AdministrativeArea","name":"جزيرة السعديات"},{"@type":"AdministrativeArea","name":"جزيرة ياس"},{"@type":"AdministrativeArea","name":"جزيرة الريم"},{"@type":"AdministrativeArea","name":"شاطئ الراحة"},{"@type":"City","name":"دبي"}]},{"@type":"Review","itemReviewed":{"@type":"HomeAndConstructionBusiness","name":"شركة نسق لأعمال تنفيذ التصميم الداخلي ذ.م.م","url":"https://nasaqfitout.ae/ar/","telephone":"+971505334861"},"reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"author":{"@type":"Person","name":"أميمة لحديلي"},"reviewBody":"من أفضل شركات التصميم الداخلي والفيت آوت في أبوظبي! أنا مقيمة في جزيرة السعديات وتعرفت على شركة نسق للتصميم الداخلي والفيت آوت عبر ChatGPT. سعيدة جداً باختيارهم! شاركتهم بعض الصور التوضيحية وحوّلوا تصوري إلى واقع ملموس في 3 أيام فقط. أنجزوا إطارات وبانوهات جدارية رائعة، أعمال ألواح الجبس بورد، إضاءة ليد مخفية، دهانات فائقة الجودة، وتركيب التلفزيون. فريق عمل محترف، موثوق، وتشطيب متقن للغاية. كل شيء كان نظيفاً وجاهزاً عند تسليم الشقة. أوصي بشدة بشركة نسق لأي شخص يبحث عن خدمات فيت آوت عالية الجودة في أبوظبي!","datePublished":"2026-11-02"},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"كم تستغرق مدة تنفيذ بانوهات الجدران وتجويف التلفزيون في أبوظبي؟","acceptedAnswer":{"@type":"Answer","text":"لغرف المعيشة والأجنحة الرئيسية التي تصل مساحتها إلى 50 متراً مربعاً، تُنجز شركة نسق المشروع بالكامل في 72 ساعة فقط (3 أيام عمل) من المسح الليزري الأولي حتى الدهان واختبار الإضاءة والتسليم النظيف."}},{"@type":"Question","name":"ما هي المواد المستخدمة في بانوهات نسق ولماذا نتفادى الخشب أو الإم دي إف (MDF) في الإمارات؟","acceptedAnswer":{"@type":"Answer","text":"نعتمد حصرياً على البولي يوريثان عالي الكثافة (HDPS) والبوليمر المقاوم للرطوبة. على عكس الخشب المعرض للتمدد والانكماش والشروخ بسبب تفاوت درجات التكييف والرطوبة في الإمارات، فإن البولي يوريثان مقاوم للماء والحرارة والنمل الأبيض ويحتفظ بحوافه المستقيمة بدقة تامة وبلا شروخ نهائياً."}},{"@type":"Question","name":"هل يمكن إخفاء كابلات التلفزيون وأجهزة الاستقبال بالكامل داخل الجدار؟","acceptedAnswer":{"@type":"Answer","text":"نعم، نقوم بتمديد خراطيم ومسارات كهربائية معزولة ومقاومة للحريق داخل الجدار أو عبر جدار جبسي نحيف غاطس، بحيث تكون جميع كابلات الطاقة والـ HDMI مخفية تماماً خلف الشاشة مع إضاءة ليد مخفية 3000K."}},{"@type":"Question","name":"هل يتطلب تركيب البانوهات والدهانات تصاريح وموافقات مسبقة في مجمعات أبوظبي؟","acceptedAnswer":{"@type":"Answer","text":"في أغلب المجمعات السكنية الفاخرة مثل جزيرة السعديات والريم وياس، تُصنف البانوهات والدهانات كأعمال ديكور تجميلية لا تمس الهيكل الإنشائي، وتتطلب فقط تصريح دخول وعمل روتيني من إدارة المبنى (Gate Pass)، وتتولى نسق التنسيق الكامل بشأنه."}},{"@type":"Question","name":"ما هي أنواع وجودة الدهانات المستخدمة فوق البانوهات؟","acceptedAnswer":{"@type":"Answer","text":"نستخدم دهانات جوتن فينوماستيك الحريرية الفاخرة المقاومة للغسيل (Pure Colours / Wonderwall Lux) أو كابارول الألمانية، وتُطبق بعد ملء فواصل الزوايا بمعجون أكريليك ألماني مرن مضاد للشروخ لتحقيق استواء ونعومة بمستوى Level-5."}}]}]}</script><script src="/app.js" defer></script></head><body><a class="skip" href="#main">تخطي إلى المحتوى</a><header><a class="brand" href="/ar/" aria-label="الرئيسية نسق"><img src="/assets/logo.svg" alt="شعار شركة نسق لتنفيذ التصميم الداخلي والديكور" width="500" height="500"></a><nav aria-label="التنقل الرئيسي"><a href="/ar/services/">الخدمات</a><a href="/ar/projects/">التصاميم</a><a href="/ar/insights/">المقالات</a><a href="/ar/about/">من نحن</a><a href="/ar/contact/">اتصل بنا</a></nav><a class="lang-switch" href="/services/wall-mouldings-boiserie/" aria-label="English Version">English</a><a class="navcta" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20مناقشة%20مشروع%20بانوهات%20جدارية%20وبوازيري.">طلب استشارة</a><button id="menu" aria-label="افتح القائمة" aria-expanded="false">القائمة</button></header><main id="main">

  <section class="intro">
    <p class="eyebrow">أعمال فيت آوت وديكور تخصصية · أبوظبي والإمارات</p>
    <h1>بانوهات جدارية وبوازيري وتجاويف إنارة ليد.</h1>
    <p>تحويل الجدران الصامتة إلى لوحات معمارية خالدة—إطارات كلاسيكية فرنسية، تجاويف شاشات التلفزيون المضاءة، وتشطيبات Level-5 حريرية تُسلّم خلال 72 ساعة فقط.</p>
  </section>

  <section class="section split">
    <div>
      <p class="eyebrow">عمارة الجدران المبتكرة</p>
      <h2>من جدران عادية<br>إلى فخامة متكاملة.</h2>
    </div>
    <div>
      <p class="lead">بولي يوريثان عالي الكثافة، إضاءة ليد مخفية، وتمديدات كهربائية غاطسة مصممة للمنازل والشقق العصرية في الإمارات.</p>
      <p>تعاني العديد من الشقق والفلل الفاخرة في جزيرة السعديات وجزيرة ياس والريم من اتساع الجدران البيضاء الصامتة وتشابك كابلات التلفزيون الظاهرة. يتولى فريق نسق المتخصص تصميم وقص وتثبيت إطارات البانوهات الجدارية (البوازيري الفرنسية) والجبس المضاء بدقة ليزرية ودون إحداث فوضى في المكان.</p>
      <p>سواء كنت ترغب في تشكيل هندسي كلاسيكي مزدوج (Double-Box) خلف أريكة الصالة، أو جدار تلفزيون مودرن مع إضاءة ليد محيطية دافئة، ينفذ فريقنا كامل المشروع وفق جدول زمني محكم وسريع.</p>
      <div style="margin-top:28px;display:flex;gap:14px;flex-wrap:wrap;">
        <a class="button" href="/ar/contact/?service=wall-mouldings-boiserie">طلب تسعير بانوهات الجدران</a>
        <a class="button" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20مناقشة%20مشروع%20بانوهات%20جدارية%20وبوازيري." style="background:#25d366;border-color:#25d366;color:#fff;">استشارة فورية عبر الواتساب</a>
      </div>
    </div>
  </section>

  <!-- Featured Real Project Handover Spotlight -->
  <section class="section pale">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">مشروع ميداني موثق</p>
        <h2>شقة سوهو، جزيرة السعديات: تسليم قياسي في 72 ساعة.</h2>
      </div>
      <p>شاهد كيف حوّل فريق نسق الميداني شقة سكنية في سوهو بلوك A، جزيرة السعديات إلى مساحة نيوكلاسيكية راقية خلال 3 أيام فقط.</p>
    </div>

    <!-- Video Embed -->
    <div style="margin:30px 0;background:#000;border:1px solid var(--line);overflow:hidden;box-shadow:0 12px 32px rgba(0,0,0,0.12);">
      <video controls playsinline preload="metadata" style="width:100%;max-height:480px;display:block;margin:0 auto;background:#000;" poster="/assets/saadiyat-project/execution-team-mouldings.jpg">
        <source src="/assets/saadiyat-project/saadiyat-completed-handover.mp4" type="video/mp4">
        متصفحك لا يدعم تشغيل فيديو HTML5.
      </video>
    </div>

    <!-- Photo Transformation Grid -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:30px;">
      <div>
        <img src="/assets/saadiyat-project/before-tv-wall.jpg" alt="قبل العمل: جدار التلفزيون الصامت في شقة جزيرة السعديات" style="width:100%;aspect-ratio:16/10;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <p style="font-size:13px;color:#7a7b74;margin-top:8px;"><strong>قبل البدء:</strong> جدار التلفزيون التقليدي مع كابلات ظاهرة قبل تدخل نسق.</p>
      </div>
      <div>
        <img src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="أثناء العمل: فريق نسق يركب إطارات البانوهات على الموقع في السعديات" style="width:100%;aspect-ratio:16/10;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <p style="font-size:13px;color:#7a7b74;margin-top:8px;"><strong>اليوم 2:</strong> المحاذاة الليزرية وتثبيت الإطارات والجبس بورد المعزول.</p>
      </div>
      <div>
        <img src="/assets/saadiyat-project/after-tv-wall-close-up-led.jpg" alt="بعد التسليم: جدار التلفزيون المضاء مع إخفاء الأسلاك وإنارة ليد دافئة" style="width:100%;aspect-ratio:16/10;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <p style="font-size:13px;color:#7a7b74;margin-top:8px;"><strong>تسليم اليوم 3:</strong> إضاءة مخفية 3000K وتثبيت الشاشة بدون أي سلك ظاهر.</p>
      </div>
      <div>
        <img src="/assets/saadiyat-project/after-sofa-wall.jpg" alt="بعد التسليم: إطارات وبانوهات بوازيري كلاسيكية خلف أريكة الصالة" style="width:100%;aspect-ratio:16/10;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <p style="font-size:13px;color:#7a7b74;margin-top:8px;"><strong>النتيجة النهائية:</strong> بانوهات بوازيري فرنسية متناظرة وفخمة خلف الأريكة.</p>
      </div>
    </div>

    <!-- Verbatim Client Review Card -->
    <div style="margin-top:40px;background:#fff;border:1px solid #dcded8;border-right:4px solid #b89158;padding:32px 36px;box-shadow:0 4px 18px rgba(0,0,0,0.04);">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:20px;color:#e8a317;">★★★★★</span>
          <span style="font-size:14px;font-weight:700;color:#1d1f1c;">تقييم 5 نجوم موثق على Google</span>
        </div>
        <span style="font-size:13px;color:#85877f;">وجدت شركة نسق عبر ChatGPT</span>
      </div>
      <blockquote style="margin:0;font-style:italic;color:#383a35;font-size:16px;line-height:1.75;">
        "من أفضل شركات التصميم الداخلي والفيت آوت في أبوظبي! أنا مقيمة في جزيرة السعديات وتعرفت على شركة نسق للتصميم الداخلي والفيت آوت عبر ChatGPT. سعيدة جداً باختيارهم! شاركتهم بعض الصور التوضيحية وحوّلوا تصوري إلى واقع ملموس في 3 أيام فقط. أنجزوا إطارات وبانوهات جدارية رائعة، أعمال ألواح الجبس بورد، إضاءة ليد مخفية، دهانات فائقة الجودة، وتركيب التلفزيون. فريق عمل محترف، موثوق، وتشطيب متقن للغاية. كل شيء كان نظيفاً وجاهزاً عند تسليم الشقة. أوصي بشدة بشركة نسق لأي شخص يبحث عن خدمات فيت آوت عالية الجودة في أبوظبي!"
      </blockquote>
      <div style="margin-top:18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
        <div>
          <strong style="font-size:14px;color:#181918;">أميمة لحديلي</strong>
          <span style="font-size:13px;color:#777970;display:block;">سوهو ريزيدنس (بلوك A)، جزيرة السعديات، أبوظبي</span>
        </div>
        <a class="textlink" href="/ar/insights/saadiyat-island-72-hour-fit-out-case-study/">اقرأ دراسة الحالة الفنية بالكامل &larr;</a>
      </div>
    </div>
  </section>

  <!-- 72-Hour Rapid Delivery Protocol -->
  <section class="section">
    <p class="eyebrow">خطة التنفيذ السريع خلال 72 ساعة</p>
    <h2>جدول زمني دقيق لتحويل غرفة المعيشة في 3 أيام.</h2>
    <div class="process">
      <article>
        <span class="number">01</span>
        <h3>المسح الليزري وتجهيز الجدران</h3>
        <p>اليوم 1: رسم أبعاد الجدران بالليزر ثلاثي الأبعاد، موازنة أبعاد الإطارات حول مفاتيح الكهرباء، فرش طبقات الحماية وتمديد مسارات كابلات التلفزيون.</p>
      </article>
      <article>
        <span class="number">02</span>
        <h3>القص الدقيق وتثبيت البوليمر</h3>
        <p>اليوم 2: قص زوايا البانوهات بزاوية 45 درجة بدقة متناهية، التثبيت بغراء بوليمر هيكلي، عزل المحيط بمعجون مرن، وتركيب قطاعات ألومنيوم الليد.</p>
      </article>
      <article>
        <span class="number">03</span>
        <h3>الدهانات الحريرية والتشغيل</h3>
        <p>اليوم 3: تطبيق دهانات جوتن فينوماستيك الحريرية، سنفرة الفواصل لضمان نعومة تامة، اختبار إنارة الليد 3000K، تركيب حامل الشاشة، ومعاينة التسليم.</p>
      </article>
      <article>
        <span class="number">04</span>
        <h3>التنظيف العميق والتسليم الفوري</h3>
        <p>التسليم: شفط الغبار بفلاتر HEPA عالية الكفاءة، مسح الأسطح بالكامل، واستلام الشقة جاهزة للسكن والاستخدام دون أي روائح أو مخلفات.</p>
      </article>
    </div>
  </section>

  <!-- Technical Features & Specifications -->
  <section class="section pale features-section">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">المواصفات الفنية المعتمدة</p>
        <h2>مواد هندسية وتشطيبات فائقة المتانة.</h2>
      </div>
      <p>تم اختيار كل قطاع بانوه وتجهيزة كهربائية لتحمل درجات الحرارة والتكييف الداخلي في الإمارات دون أي تلف.</p>
    </div>
    <div class="features-grid">
      <div class="feature-item">
        <h3>بولي يوريثان عالي الكثافة (HDPS)</h3>
        <p>مقاوم للماء والرطوبة والنمل الأبيض وثابت الأبعاد. على عكس الخشب والإم دي إف، لا يتعرض للتقوس أو الانكماش أو الشروخ مع تشغيل التكييف المستمر.</p>
      </div>
      <div class="feature-item">
        <h3>مسارات وتمديدات داخل الجدار</h3>
        <p>تمديد خراطيم معزولة تخفي كابلات الـ HDMI ومآخذ الطاقة بالكامل خلف شاشة التلفزيون، مما يمنح الجدار مظهراً انسيابياً معلقاً.</p>
      </div>
      <div class="feature-item">
        <h3>إنارة ليد مخفية 3000K دافئة</h3>
        <p>شرائط ليد عالية الوضوح اللوني داخل مجاري ألومنيوم تشتيت حراري مع أغطية سيليكون ناشرة للضوء تمنح إضاءة ناعمة خالية من التوهج المزعج.</p>
      </div>
      <div class="feature-item">
        <h3>معجون فواصل ألماني مرن مضاد للشروخ</h3>
        <p>استخدام معجون أكريليك مرن عالي الجودة لملء زوايا الإطارات والفواصل مع الجدار لاستيعاب حركات التمدد الطفيفة في المبنى ومنع ظهور أي خطوط شعرية.</p>
      </div>
      <div class="feature-item">
        <h3>هندسة كلاسيكية ومودرن حسب الطلب</h3>
        <p>توزيع أبعاد الإطارات بحسابات دقيقة تتناسب مع اللوحات الجدارية، ارتفاعات الأسقف، ومحاذاة الأبواب والنوافذ المعمارية.</p>
      </div>
      <div class="feature-item">
        <h3>تنفيذ نظيف مع شفط الغبار</h3>
        <p>استخدام مناشير مجهزة بشفاطات غبار نشطة وتغطية كاملة للأرضيات والأثاث لضمان بقاء منزلك نظيفاً طوال فترة العمل في الـ 72 ساعة.</p>
      </div>
    </div>
  </section>

  <!-- Communities Served -->
  <section class="section">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">التغطية الميدانية في الإمارات</p>
        <h2>نخدم أرقى المجمعات السكنية في أبوظبي ودبي.</h2>
      </div>
      <p>فرقنا على دراية تامة باشتراطات إدارات المباني وتصاريح البوابات الأمنية في مختلف المشاريع الفاخرة.</p>
    </div>
    <div class="features-grid" style="grid-template-columns:repeat(auto-fit,minmax(280px,1fr));">
      <div class="feature-item">
        <h3>جزيرة السعديات</h3>
        <p>سوهو بلوك A وB، ممشى السعديات، سعديات جروف، بارك فيو، وفلل سعديات لاجونز السكنية.</p>
      </div>
      <div class="feature-item">
        <h3>جزيرة ياس</h3>
        <p>ياس إيكرز، ووترز إيدج، أنسام، مايان، وفلل ويست ياس الفاخرة.</p>
      </div>
      <div class="feature-item">
        <h3>جزيرة الريم</h3>
        <p>أبراج البوابة (Gate Towers)، صن آند سكاي، مارينا سكوير، شمس أبوظبي، وأبراج سيتي أوف لايتس.</p>
      </div>
      <div class="feature-item">
        <h3>شاطئ الراحة</h3>
        <p>شقق وتاون هاوس البندر، المنيرة، والزينة بإطلالاتها البحرية المتميزة.</p>
      </div>
      <div class="feature-item">
        <h3>أحياء الفلل المستقلة</h3>
        <p>مدينة خليفة، مدينة محمد بن زايد، مدينة شخبوط، الفلاح، ومجالس وفلل البطين والمشرف.</p>
      </div>
      <div class="feature-item">
        <h3>المجمعات الراقية في دبي</h3>
        <p>وسط مدينة دبي (داون تاون)، دبي هيلز استيت، نخلة جميرا، وشقق دبي مارينا والبنتهاوس.</p>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section faq-section">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">الأسئلة الشائعة</p>
        <h2>إرشادات هندسية حول بانوهات الجدران وتجاويف التلفزيون.</h2>
      </div>
      <p>إجابات مباشرة ومفصلة من فريق مهندسي الديكور والتنفيذ في شركة نسق بأبوظبي.</p>
    </div>
    <div class="faq-grid">
      <article class="faq-card">
        <h3>كم تستغرق مدة تنفيذ بانوهات الجدران وتجويف التلفزيون في أبوظبي؟</h3>
        <p>لغرف المعيشة والأجنحة الرئيسية التي تصل مساحتها إلى 50 متراً مربعاً، تُنجز شركة نسق المشروع بالكامل في 72 ساعة فقط (3 أيام عمل) من المسح الليزري الأولي حتى الدهان واختبار الإضاءة والتسليم النظيف.</p>
      </article>
      <article class="faq-card">
        <h3>ما هي المواد المستخدمة في بانوهات نسق ولماذا نتفادى الخشب أو الإم دي إف (MDF) في الإمارات؟</h3>
        <p>نعتمد حصرياً على البولي يوريثان عالي الكثافة (HDPS) والبوليمر المقاوم للرطوبة. على عكس الخشب المعرض للتمدد والانكماش والشروخ بسبب تفاوت درجات التكييف والرطوبة في الإمارات، فإن البولي يوريثان مقاوم للماء والحرارة والنمل الأبيض ويحتفظ بحوافه المستقيمة بدقة تامة وبلا شروخ نهائياً.</p>
      </article>
      <article class="faq-card">
        <h3>هل يمكن إخفاء كابلات التلفزيون وأجهزة الاستقبال بالكامل داخل الجدار؟</h3>
        <p>نعم، نقوم بتمديد خراطيم ومسارات كهربائية معزولة ومقاومة للحريق داخل الجدار أو عبر جدار جبسي نحيف غاطس، بحيث تكون جميع كابلات الطاقة والـ HDMI مخفية تماماً خلف الشاشة مع إضاءة ليد مخفية 3000K.</p>
      </article>
      <article class="faq-card">
        <h3>هل يتطلب تركيب البانوهات والدهانات تصاريح وموافقات مسبقة في مجمعات أبوظبي؟</h3>
        <p>في أغلب المجمعات السكنية الفاخرة مثل جزيرة السعديات والريم وياس، تُصنف البانوهات والدهانات كأعمال ديكور تجميلية لا تمس الهيكل الإنشائي، وتتطلب فقط تصريح دخول وعمل روتيني من إدارة المبنى (Gate Pass)، وتتولى نسق التنسيق الكامل بشأنه.</p>
      </article>
      <article class="faq-card">
        <h3>ما هي أنواع وجودة الدهانات المستخدمة فوق البانوهات؟</h3>
        <p>نستخدم دهانات جوتن فينوماستيك الحريرية الفاخرة المقاومة للغسيل (Pure Colours / Wonderwall Lux) أو كابارول الألمانية، وتُطبق بعد ملء فواصل الزوايا بمعجون أكريليك ألماني مرن مضاد للشروخ لتحقيق استواء ونعومة بمستوى Level-5.</p>
      </article>
      <article class="faq-card">
        <h3>هل يمكنني اختيار تصاميم وتقسيمات إطارات مخصصة وغير متناظرة؟</h3>
        <p>نعم، يقدم مهندسونا مخططات تنفيذية ثنائية الأبعاد (2D Shop Drawings) توضح الأبعاد والمسافات الدقيقة للإطارات وتوزيعها حول الإنارة والمقابس قبل بدء أي أعمال قص أو تثبيت في الموقع.</p>
      </article>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta">
    <p class="eyebrow">جاهز لتجديد غرفة المعيشة خلال 72 ساعة؟</p>
    <h2>لنبدأ في تصميم<br>جدارك المميز اليوم.</h2>
    <a class="button" href="/ar/contact/?service=wall-mouldings-boiserie">طلب عرض أسعار</a>
    <a class="plain" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20طلب%20تسعير%20مشروع%20بانوهات%20جدارية.">تواصل مباشرة عبر واتساب: 0505334861 971+</a>
  </section>

</main>

<footer>
  <div>
    <span class="wordmark">نسق <span lang="en">NASAQ</span></span>
    <p>تناغم في المساحات.</p>
    <p class="small">شركة نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م<br>أبوظبي، دولة الإمارات العربية المتحدة</p>
  </div>
  <div>
    <a href="tel:+971505334861">+971 50 533 4861</a>
    <a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a>
    <a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a>
    <a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">إنستغرام · @nasaq.fitout</a>
    <a href="https://share.google/jD1fYkpZ96pX0pQPN" target="_blank" rel="noopener noreferrer">خرائط Google · ملف نسق</a>
  </div>
  <div>
    <a href="/ar/services/">خدماتنا</a>
    <a href="/ar/insights/">المقالات والأدلة</a>
    <a href="/ar/about/">عن نسق</a>
    <a href="/ar/contact/">ابدأ محادثة</a>
    <p class="small">© 2026 نسق</p>
  </div>
</footer>

<a class="floating" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20مناقشة%20مشروع%20بانوهات%20جدارية%20وبوازيري." aria-label="تواصل مع نسق عبر الواتساب">واتساب</a>
</body></html>`;

// Write the files
fs.writeFileSync(path.join(enDir, 'index.html'), enHtml, 'utf8');
fs.writeFileSync(path.join(arDir, 'index.html'), arHtml, 'utf8');
console.log('✅ Created dist/services/wall-mouldings-boiserie/index.html');
console.log('✅ Created dist/ar/services/wall-mouldings-boiserie/index.html');

// ==========================================
// UPDATE dist/services/index.html
// ==========================================
const enServicesHubPath = path.join(DIST_DIR, 'services', 'index.html');
let enServicesContent = fs.readFileSync(enServicesHubPath, 'utf8');

const enCardToAdd = `<a href="/services/wall-mouldings-boiserie/"><span class="number">10</span><h3>Wall mouldings & boiserie</h3><p>Bespoke classical French boiserie, TV media feature walls, and hidden LED lighting delivered in 72 hours.</p><span class="textlink">Explore service</span></a>`;

if (!enServicesContent.includes('/services/wall-mouldings-boiserie/')) {
  const targetStr = '<a href="/services/residential-fit-out/"><span class="number">09</span><h3>Residential fit-out</h3><p>Spaces built around the way you live, for apartments, penthouses and townhouses.</p><span class="textlink">Explore service</span></a>';
  if (enServicesContent.includes(targetStr)) {
    enServicesContent = enServicesContent.replace(targetStr, targetStr + enCardToAdd);
    fs.writeFileSync(enServicesHubPath, enServicesContent, 'utf8');
    console.log('✅ Updated dist/services/index.html with Service 10 in services grid');
  } else {
    console.error('❌ Could not find targetStr in dist/services/index.html');
  }
} else {
  console.log('ℹ️ dist/services/index.html already contains wall-mouldings-boiserie link');
}

// ==========================================
// UPDATE dist/ar/services/index.html
// ==========================================
const arServicesHubPath = path.join(DIST_DIR, 'ar', 'services', 'index.html');
let arServicesContent = fs.readFileSync(arServicesHubPath, 'utf8');

const arCardToAdd = `<a href="/ar/services/wall-mouldings-boiserie/"><span class="number">10</span><h3>بانوهات وبوازيري الجدران</h3><p>إطارات جدارية كلاسيكية، تجاويف شاشات التلفزيون العصرية، وإنارة ليد مخفية تسلّم خلال 72 ساعة.</p><span class="textlink">استكشف الخدمة</span></a>`;

if (!arServicesContent.includes('/ar/services/wall-mouldings-boiserie/')) {
  const arTargetStr = '<a href="/ar/services/residential-fit-out/"><span class="number">09</span><h3>التشطيب السكني</h3><p>مساحات مصممة وفق أسلوب حياتك، للشقق الفندقية والسكنية والفلل والبنتهاوس.</p><span class="textlink">استكشف الخدمة</span></a>';
  if (arServicesContent.includes(arTargetStr)) {
    arServicesContent = arServicesContent.replace(arTargetStr, arTargetStr + arCardToAdd);
    fs.writeFileSync(arServicesHubPath, arServicesContent, 'utf8');
    console.log('✅ Updated dist/ar/services/index.html with Service 10 in services grid');
  } else {
    // If exact string has variation, try finding by link
    const regex = /(<a\s+href="\/ar\/services\/residential-fit-out\/">[\s\S]*?<\/a>)/;
    if (regex.test(arServicesContent)) {
      arServicesContent = arServicesContent.replace(regex, `$1${arCardToAdd}`);
      fs.writeFileSync(arServicesHubPath, arServicesContent, 'utf8');
      console.log('✅ Updated dist/ar/services/index.html with Service 10 via regex');
    } else {
      console.error('❌ Could not find residential-fit-out in dist/ar/services/index.html');
    }
  }
} else {
  console.log('ℹ️ dist/ar/services/index.html already contains wall-mouldings-boiserie link');
}

// ==========================================
// UPDATE dist/sitemap.xml
// ==========================================
const sitemapPath = path.join(DIST_DIR, 'sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

if (!sitemapContent.includes('/services/wall-mouldings-boiserie/')) {
  const newUrls = `  <url>
    <loc>https://nasaqfitout.ae/services/wall-mouldings-boiserie/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/services/wall-mouldings-boiserie/"/>
    <xhtml:link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/services/wall-mouldings-boiserie/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/services/wall-mouldings-boiserie/"/>
    <lastmod>2026-11-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://nasaqfitout.ae/assets/saadiyat-project/after-tv-wall-close-up-led.jpg</image:loc>
      <image:title>Architectural Wall Mouldings and Illuminated TV Feature Wall in Abu Dhabi</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://nasaqfitout.ae/ar/services/wall-mouldings-boiserie/</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/services/wall-mouldings-boiserie/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/services/wall-mouldings-boiserie/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/services/wall-mouldings-boiserie/"/>
    <lastmod>2026-11-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
    <image:image>
      <image:loc>https://nasaqfitout.ae/assets/saadiyat-project/after-tv-wall-close-up-led.jpg</image:loc>
      <image:title>بانوهات جدارية وبوازيري وتجاويف إنارة ليد في أبوظبي</image:title>
    </image:image>
  </url>
</urlset>`;

  sitemapContent = sitemapContent.replace('</urlset>', newUrls);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('✅ Updated dist/sitemap.xml with 2 new bilingual service URLs (total 46 URLs)');
}

// ==========================================
// UPDATE dist/llms.txt
// ==========================================
const llmsPath = path.join(DIST_DIR, 'llms.txt');
let llmsContent = fs.readFileSync(llmsPath, 'utf8');

if (!llmsContent.includes('/services/wall-mouldings-boiserie/')) {
  // English section insertion
  const enAnchor = '- [Residential Fit-Out](https://nasaqfitout.ae/services/residential-fit-out/): Coordinated interior execution for apartments, penthouses, and townhouses';
  const enNewEntry = `${enAnchor}\n- [Wall Mouldings, Boiserie & Feature Walls](https://nasaqfitout.ae/services/wall-mouldings-boiserie/): Turnkey classical French boiserie, high-density polyurethane wall panelling, and illuminated TV media walls delivered in 72 hours across Abu Dhabi and Dubai`;
  llmsContent = llmsContent.replace(enAnchor, enNewEntry);

  // Arabic section insertion
  const arAnchor = '- [التشطيب السكني للشقق](https://nasaqfitout.ae/ar/services/residential-fit-out/): تشطيب الشقق الفندقية والسكنية والبنتهاوس';
  const arNewEntry = `${arAnchor}\n- [بانوهات وبوازيري الجدران وتجاويف التلفزيون](https://nasaqfitout.ae/ar/services/wall-mouldings-boiserie/): تنفيذ إطارات وبانوهات الجدران الفرنسية الكلاسيكية، وتجاويف شاشات التلفزيون مع إخفاء الأسلاك وإنارة ليد مخفية تسلّم خلال 72 ساعة`;
  llmsContent = llmsContent.replace(arAnchor, arNewEntry);

  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log('✅ Updated dist/llms.txt with Wall Mouldings & Boiserie entries');
}

// ==========================================
// UPDATE dist/ai-catalog.json & .well-known
// ==========================================
const aiCatalogPath = path.join(DIST_DIR, 'ai-catalog.json');
const wellKnownCatalogPath = path.join(DIST_DIR, '.well-known', 'ai-catalog.json');

[aiCatalogPath, wellKnownCatalogPath].forEach(target => {
  if (fs.existsSync(target)) {
    const catalog = JSON.parse(fs.readFileSync(target, 'utf8'));
    const entry = catalog.entries.find(e => e.identifier === 'urn:air:nasaqfitout.ae:knowledge:llms-txt');
    if (entry) {
      if (!entry.capabilities.includes('WallMouldingsBoiserie')) {
        entry.capabilities.push('WallMouldingsBoiserie', 'Rapid72HourFitOut');
      }
      if (!entry.tags.includes('wall-mouldings')) {
        entry.tags.push('wall-mouldings', 'boiserie', 'feature-wall', '72-hour-fitout');
      }
      if (!entry.representativeQueries.includes('تركيب بانوهات جدران وبوازيري في أبوظبي')) {
        entry.representativeQueries.push(
          'تركيب بانوهات جدران وبوازيري في أبوظبي',
          'Wall mouldings and boiserie contractor Abu Dhabi',
          '72-hour living room fit out Abu Dhabi Saadiyat'
        );
      }
      fs.writeFileSync(target, JSON.stringify(catalog, null, 2), 'utf8');
      console.log(`✅ Updated ${path.relative(DIST_DIR, target)}`);
    }
  }
});

console.log('\n🚀 All Wall Mouldings service assets generated successfully!');
