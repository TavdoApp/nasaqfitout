const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

// ==========================================
// 1. UPDATE dist/index.html (Homepage - English)
// ==========================================
const enHomePath = path.join(distDir, 'index.html');
let enHomeHtml = fs.readFileSync(enHomePath, 'utf8');

// Update Title and Meta Description
enHomeHtml = enHomeHtml.replace(
  '<title>Interior Fit-Out & Gypsum Works in Abu Dhabi | NASAQ</title>',
  '<title>Complete Interior Fit-Out & Decoration Contractor Abu Dhabi | NASAQ</title>'
);
enHomeHtml = enHomeHtml.replace(
  '<meta name="description" content="NASAQ delivers villa, office and commercial interior fit-out, gypsum works, false ceilings and interior renovation in Abu Dhabi.">',
  '<meta name="description" content="Complete interior fit-out and decoration execution in Abu Dhabi: decorative ceilings, custom woodwork, feature walls, mouldings, painting, and turnkey finishing for villas and commercial spaces.">'
);
enHomeHtml = enHomeHtml.replace(
  '<meta property="og:title" content="Interior Fit-Out & Gypsum Works in Abu Dhabi | NASAQ">',
  '<meta property="og:title" content="Complete Interior Fit-Out & Decoration Contractor Abu Dhabi | NASAQ">'
);
enHomeHtml = enHomeHtml.replace(
  '<meta property="og:description" content="NASAQ delivers villa, office and commercial interior fit-out, gypsum works, false ceilings and interior renovation in Abu Dhabi.">',
  '<meta property="og:description" content="Complete interior fit-out and decoration execution in Abu Dhabi: decorative ceilings, custom woodwork, feature walls, mouldings, painting, and turnkey finishing for villas and commercial spaces.">'
);
enHomeHtml = enHomeHtml.replace(
  '<meta name="twitter:title" content="Interior Fit-Out & Gypsum Works in Abu Dhabi | NASAQ">',
  '<meta name="twitter:title" content="Complete Interior Fit-Out & Decoration Contractor Abu Dhabi | NASAQ">'
);
enHomeHtml = enHomeHtml.replace(
  '<meta name="twitter:description" content="NASAQ delivers villa, office and commercial interior fit-out, gypsum works, false ceilings and interior renovation in Abu Dhabi.">',
  '<meta name="twitter:description" content="Complete interior fit-out and decoration execution in Abu Dhabi: decorative ceilings, custom woodwork, feature walls, mouldings, painting, and turnkey finishing for villas and commercial spaces.">'
);

// Update Hero text and ribbon
const oldHeroCopy = `<div class="hero-copy"><p class="eyebrow">Abu Dhabi · Interior fit-out & implementation</p><h1>Considered spaces.<br><em>Precisely built.</em></h1><p>From drawings to the details you live with. Interior fit-out for villas, offices and commercial spaces across Abu Dhabi.</p><div class="actions"><a class="button" href="/contact/">Request a quotation</a><a class="outline" href="/services/">Explore our services</a></div></div>`;
const newHeroCopy = `<div class="hero-copy"><p class="eyebrow">Abu Dhabi · Complete Interior Fit-Out & Decoration Contractor</p><h1>Complete Interior Fit-Out<br>& <em>Decoration Execution.</em></h1><p>From decorative ceilings and feature walls to custom woodwork, architectural mouldings, and turnkey interior finishing—NASAQ executes complete residential and commercial spaces across Abu Dhabi.</p><div class="actions"><a class="button" href="/contact/">Request a quotation</a><a class="outline" href="/services/">Explore our services</a></div></div>`;
if (enHomeHtml.includes(oldHeroCopy)) {
  enHomeHtml = enHomeHtml.replace(oldHeroCopy, newHeroCopy);
}

const oldRibbon = `<div class="ribbon"><span>Residential fit-out</span><span>Commercial interiors</span><span>Gypsum & ceilings</span><span>Interior renovation</span></div>`;
const newRibbon = `<div class="ribbon"><span>Complete Fit-Out & Decoration</span><span>Decorative Ceilings & Walls</span><span>Custom Woodwork & Joinery</span><span>Direct & Subcontracting Works</span></div>`;
if (enHomeHtml.includes(oldRibbon)) {
  enHomeHtml = enHomeHtml.replace(oldRibbon, newRibbon);
}

// Update The NASAQ Approach copy to emphasize decoration and fit-out execution
const oldApproach = `<p class="lead">Great interiors come together in the details.</p><p>NASAQ is an Abu Dhabi-based interior fit-out and design implementation company. We turn approved interior plans into physical spaces through material coordination, site execution and careful finishing.</p>`;
const newApproach = `<p class="lead">Great interiors come together through disciplined execution and complete decorative craftsmanship.</p><p>NASAQ is an Abu Dhabi-based contractor specializing in complete interior fit-out and decoration execution. We turn approved design concepts into physical reality—handling decorative ceilings, feature walls, custom woodwork, architectural mouldings, and turnkey finishing for private villas, corporate offices, and commercial developments.</p>`;
if (enHomeHtml.includes(oldApproach)) {
  enHomeHtml = enHomeHtml.replace(oldApproach, newApproach);
}

// Section A: Decoration & Craftsmanship Scope (placed right after 01-09 services)
const enDecorationSection = `
<section class="section pale decoration-section">
  <div class="sectionhead">
    <div>
      <p class="eyebrow">Decoration & Craftsmanship Scope</p>
      <h2>Walls, ceilings, woodwork<br>& turnkey interior finishing.</h2>
    </div>
    <p>Complete decoration execution for Abu Dhabi villas, offices, and commercial spaces—crafted with architectural accuracy and material integrity.</p>
  </div>
  <div class="sectors-grid">
    <div class="sector-card">
      <div class="sector-tag">Ceilings & Lighting</div>
      <h3>Decorative Ceilings & Architectural Details</h3>
      <p>Multi-tier false ceilings, perimeter shadow gaps, indirect LED cove recesses, decorative plaster cornices, and flush linear AC diffuser integration.</p>
      <div class="sector-pills">
        <span class="sector-pill">Decorative Ceilings</span>
        <span class="sector-pill">False Ceilings</span>
        <span class="sector-pill">LED Cove Recesses</span>
        <span class="sector-pill">Architectural Cornices</span>
      </div>
    </div>
    <div class="sector-card">
      <div class="sector-tag">Feature Walls</div>
      <h3>Feature Walls & Decorative Wall Finishes</h3>
      <p>Statement accent walls, textured stucco, Venetian plaster, architectural stone veneers, and 3D textured panel systems tailored for living areas and executive suites.</p>
      <div class="sector-pills">
        <span class="sector-pill">Feature Walls</span>
        <span class="sector-pill">Decorative Plaster</span>
        <span class="sector-pill">Stone Veneers</span>
        <span class="sector-pill">3D Wall Panels</span>
      </div>
    </div>
    <div class="sector-card">
      <div class="sector-tag">Custom Woodwork</div>
      <h3>Custom Woodwork & Architectural Elements</h3>
      <p>Fluted timber wall panelling, decorative wooden slats, bespoke room dividers, architectural beams, and custom vanity joinery manufactured to design specifications.</p>
      <div class="sector-pills">
        <span class="sector-pill">Custom Woodwork</span>
        <span class="sector-pill">Fluted Wall Panels</span>
        <span class="sector-pill">Decorative Slats</span>
        <span class="sector-pill">Architectural Joinery</span>
      </div>
    </div>
    <div class="sector-card">
      <div class="sector-tag">Wall Detailing</div>
      <h3>Wall Mouldings, Frames & Boiserie Detailing</h3>
      <p>Neoclassical and contemporary wall mouldings, decorative picture frames, wainscoting panelling, bespoke archways, and precision skirting integration.</p>
      <div class="sector-pills">
        <span class="sector-pill">Wall Mouldings</span>
        <span class="sector-pill">Decorative Frames</span>
        <span class="sector-pill">Boiserie Panelling</span>
        <span class="sector-pill">Wainscoting</span>
      </div>
    </div>
    <div class="sector-card">
      <div class="sector-tag">Surface Finishing</div>
      <h3>Interior Painting & Luxury Surface Finishing</h3>
      <p>Level-5 ultra-smooth surface preparation, microcement applications, limewash textures, moisture-resistant washable coatings, and flawless architectural paint.</p>
      <div class="sector-pills">
        <span class="sector-pill">Level-5 Finishing</span>
        <span class="sector-pill">Interior Painting</span>
        <span class="sector-pill">Microcement</span>
        <span class="sector-pill">Surface Finishing</span>
      </div>
    </div>
    <div class="sector-card">
      <div class="sector-tag">Partitions & Cladding</div>
      <h3>Gypsum Partitions & Wall Cladding Systems</h3>
      <p>High-STC acoustic drywall partitions, fire-rated and moisture-resistant wall assemblies, and large-format porcelain and marble architectural wall cladding.</p>
      <div class="sector-pills">
        <span class="sector-pill">Gypsum Partitions</span>
        <span class="sector-pill">Acoustic Wall Systems</span>
        <span class="sector-pill">Wall Cladding</span>
        <span class="sector-pill">Drywall Installation</span>
      </div>
    </div>
  </div>
</section>
`;

if (!enHomeHtml.includes('decoration-section')) {
  enHomeHtml = enHomeHtml.replace(
    'Explore service</span></a></div></section>',
    'Explore service</span></a></div></section>' + enDecorationSection
  );
}

// Section B: Who We Work With / Direct & Subcontracting Scope (placed right after Process section)
const enClientsSection = `
<section class="section clients-section">
  <div class="sectionhead">
    <div>
      <p class="eyebrow">Client & Subcontracting Scope</p>
      <h2>Trusted by homeowners, designers,<br>& main contractors.</h2>
    </div>
    <p>NASAQ welcomes both direct turnkey interior fit-out projects and specialized subcontracting packages across Abu Dhabi and the UAE.</p>
  </div>
  <div class="clients-grid">
    <div class="client-card">
      <span class="client-tag">Residential Clients</span>
      <h3>Villa Owners & Homeowners</h3>
      <p>Complete turnkey villa fit-out, majlis decoration, luxury bathroom remodelling, and ceiling upgrades delivered with transparent BOQs and milestone handovers.</p>
    </div>
    <div class="client-card">
      <span class="client-tag">Design Consultancies</span>
      <h3>Architects & Interior Designers</h3>
      <p>Uncompromising physical execution of approved 3D renders and CAD drawings, precision shop drawings, and strict material fidelity matching designer intent.</p>
    </div>
    <div class="client-card">
      <span class="client-tag">Subcontracting Packages</span>
      <h3>Main Contractors & General Contractors</h3>
      <p>Reliable, safety-compliant specialized subcontractor for gypsum ceilings, drywall partitions, joinery, and decorative wall finishes with on-time handover.</p>
    </div>
    <div class="client-card">
      <span class="client-tag">Commercial & Corporate</span>
      <h3>Property Developers & Project Managers</h3>
      <p>Fast-track commercial fit-out, corporate offices, clinics, retail stores, and full coordination for TAMM, ADCD, and municipality authority approvals.</p>
    </div>
  </div>
</section>
`;

if (!enHomeHtml.includes('clients-section')) {
  enHomeHtml = enHomeHtml.replace(
    '</article></div></section>',
    '</article></div></section>' + enClientsSection
  );
}

// Update Schema.org knowsAbout and description on English Homepage
try {
  const schemaMatch = enHomeHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (schemaMatch) {
    const parsed = JSON.parse(schemaMatch[1]);
    const biz = parsed['@graph'].find(item => item['@type'] === 'HomeAndConstructionBusiness');
    if (biz) {
      biz.description = "NASAQ is an Abu Dhabi-based contractor specializing in complete interior fit-out and decoration execution, delivering decorative ceilings, custom woodwork, feature walls, mouldings, interior partitions, and turnkey finishing for villas and commercial spaces across the UAE.";
      const newKeywords = [
        "Complete Interior Fit-Out & Decoration Works",
        "Decorative Gypsum Ceilings & False Ceilings",
        "Feature Walls & Decorative Wall Finishes",
        "Custom Woodwork & Decorative Wooden Elements",
        "Wall Mouldings, Decorative Frames & Architectural Details",
        "Interior Painting & Decorative Finishes",
        "Interior Finishing Subcontractor Abu Dhabi",
        "Woodwork and wall panelling Abu Dhabi",
        "Boiserie and decorative wall panelling UAE",
        "Turnkey villa decoration contractor Abu Dhabi"
      ];
      for (const kw of newKeywords) {
        if (!biz.knowsAbout.includes(kw)) biz.knowsAbout.push(kw);
      }
    }
    enHomeHtml = enHomeHtml.replace(schemaMatch[0], `<script type="application/ld+json">${JSON.stringify(parsed)}</script>`);
  }
} catch (e) {
  console.error('Error updating EN home schema:', e);
}

fs.writeFileSync(enHomePath, enHomeHtml, 'utf8');
console.log('✅ Updated dist/index.html with Complete Fit-Out & Decoration Positioning.');


// ==========================================
// 2. UPDATE dist/ar/index.html (Homepage - Arabic)
// ==========================================
const arHomePath = path.join(distDir, 'ar', 'index.html');
let arHomeHtml = fs.readFileSync(arHomePath, 'utf8');

arHomeHtml = arHomeHtml.replace(
  '<title>شركة فيت آوت وأعمال جبس بورد في أبوظبي | نسق</title>',
  '<title>شركة تنفيذ التصميم الداخلي والفيت آوت والديكور في أبوظبي | نسق</title>'
);
arHomeHtml = arHomeHtml.replace(
  '<meta name="description" content="شركة نسق متخصصة في أعمال تنفيذ التصميم الداخلي والفيت آوت للفلل والمكاتب والمساحات التجارية وأعمال الجبس بورد والأسقف المعلقة والترميم في أبوظبي.">',
  '<meta name="description" content="تنفيذ متكامل للتصميم الداخلي والفيت آوت والديكور في أبوظبي: أسقف ديكورية، أعمال نجارة خشبية، جدران مميزة وبانوهات، دهانات داخلية، وتشطيب متقن للفلل والمساحات التجارية.">'
);
arHomeHtml = arHomeHtml.replace(
  '<meta property="og:title" content="شركة فيت آوت وأعمال جبس بورد في أبوظبي | نسق">',
  '<meta property="og:title" content="شركة تنفيذ التصميم الداخلي والفيت آوت والديكور في أبوظبي | نسق">'
);
arHomeHtml = arHomeHtml.replace(
  '<meta property="og:description" content="شركة نسق متخصصة في أعمال تنفيذ التصميم الداخلي والفيت آوت للفلل والمكاتب والمساحات التجارية وأعمال الجبس بورد والأسقف المعلقة والترميم في أبوظبي.">',
  '<meta property="og:description" content="تنفيذ متكامل للتصميم الداخلي والفيت آوت والديكور في أبوظبي: أسقف ديكورية، أعمال نجارة خشبية، جدران مميزة وبانوهات، دهانات داخلية، وتشطيب متقن للفلل والمساحات التجارية.">'
);
arHomeHtml = arHomeHtml.replace(
  '<meta name="twitter:title" content="شركة فيت آوت وأعمال جبس بورد في أبوظبي | نسق">',
  '<meta name="twitter:title" content="شركة تنفيذ التصميم الداخلي والفيت آوت والديكور في أبوظبي | نسق">'
);
arHomeHtml = arHomeHtml.replace(
  '<meta name="twitter:description" content="شركة نسق متخصصة في أعمال تنفيذ التصميم الداخلي والفيت آوت للفلل والمكاتب والمساحات التجارية وأعمال الجبس بورد والأسقف المعلقة والترميم في أبوظبي.">',
  '<meta name="twitter:description" content="تنفيذ متكامل للتصميم الداخلي والفيت آوت والديكور في أبوظبي: أسقف ديكورية، أعمال نجارة خشبية، جدران مميزة وبانوهات، دهانات داخلية، وتشطيب متقن للفلل والمساحات التجارية.">'
);

// Update Arabic Hero
const oldArHero = `<div class="hero-copy"><p class="eyebrow">أبوظبي · تنفيذ التصميم الداخلي والفيت آوت</p><h1>مساحات متقنة.<br><em>تنفيذ معماري دقيق.</em></h1><p>من المخططات المعتمدة إلى أدق تفاصيل التشطيب. أعمال فيت آوت متكاملة للفلل، المكاتب، والمساحات التجارية في أبوظبي.</p><div class="actions"><a class="button" href="/ar/contact/">طلب عرض أسعار</a><a class="outline" href="/ar/services/">استكشف خدماتنا</a></div></div>`;
const newArHero = `<div class="hero-copy"><p class="eyebrow">أبوظبي والإمارات · تنفيذ متكامل للفيت آوت والديكور الداخلي</p><h1>تنفيذ متكامل للفيت آوت<br><em>والديكور المعماري.</em></h1><p>من الأسقف الديكورية والجدران المميزة إلى أعمال النجارة الخشبية، البانوهات الجدارية، والتشطيبات الفاخرة—تتولى نسق تنفيذ المساحات السكنية والتجارية المتكاملة في أبوظبي بأعلى درجات الانضباط الميداني.</p><div class="actions"><a class="button" href="/ar/contact/">طلب عرض أسعار</a><a class="outline" href="/ar/services/">استكشف خدماتنا</a></div></div>`;
if (arHomeHtml.includes(oldArHero)) {
  arHomeHtml = arHomeHtml.replace(oldArHero, newArHero);
}

const oldArRibbon = `<div class="ribbon"><span>تشطيب الفلل والمجالس</span><span>المساحات التجارية</span><span>الجبس والأسقف المعلقة</span><span>التجديد والترميم</span></div>`;
const newArRibbon = `<div class="ribbon"><span>تنفيذ متكامل للفيت آوت والديكور</span><span>أسقف وجدران ديكورية</span><span>أعمال النجارة والبانوهات</span><span>مشاريع مباشرة ومقاولات باطن</span></div>`;
if (arHomeHtml.includes(oldArRibbon)) {
  arHomeHtml = arHomeHtml.replace(oldArRibbon, newArRibbon);
}

// Update Arabic Approach
const oldArApproach = `<p class="lead">جمال المساحات يكمن في دقة تنفيذ تفاصيلها.</p><p>نسق هي شركة متخصصة في تنفيذ التصميم الداخلي والفيت آوت والديكور، ومقرها أبوظبي. نحول المخططات والتصاميم المعتمدة إلى واقع ملموس من خلال التنسيق الدقيق للمواد، الإشراف الميداني الصارم، والتشطيب عالي الجودة.</p>`;
const newArApproach = `<p class="lead">جمال المساحات يكتمل بالانضباط الميداني والحرفية المتكاملة في الديكور والتنفيذ.</p><p>نسق هي شركة متخصصة في التنفيذ الشامل للتصميم الداخلي والفيت آوت والديكور ومقرها أبوظبي. نحول الرؤى المعمارية إلى واقع ملموس—حيث نتولى الأسقف الديكورية، الجدران المميزة، أعمال النجارة، البانوهات الجدارية، والتشطيب النهائي المتكامل للفلل الخاصة والمقرات التجارية.</p>`;
if (arHomeHtml.includes(oldArApproach)) {
  arHomeHtml = arHomeHtml.replace(oldArApproach, newArApproach);
}

// Arabic Section A: Decoration & Craftsmanship Scope
const arDecorationSection = `
<section class="section pale decoration-section">
  <div class="sectionhead">
    <div>
      <p class="eyebrow">نطاق أعمال الديكور والحرفية المعمارية</p>
      <h2>أسقف، جدران، أعمال خشبية<br>وتشطيب داخلي متكامل.</h2>
    </div>
    <p>تنفيذ متكامل للديكور الداخلي للفلل والمكاتب والمساحات التجارية في أبوظبي—بدقة هندسية عالية والتزام كامل بمواصفات المواد.</p>
  </div>
  <div class="sectors-grid">
    <div class="sector-card">
      <div class="sector-tag">الأسقف والإنارة</div>
      <h3>الأسقف الديكورية والتفاصيل المعمارية</h3>
      <p>أسقف مستعارة متعددة المستويات، فواصل الظل (Shadow Gaps)، تجاويف الإضاءة المخفية، كورنيشات جبسية، وتنسيق فتحات التكييف والإنارة الخطية.</p>
      <div class="sector-pills">
        <span class="sector-pill">أسقف ديكورية</span>
        <span class="sector-pill">أسقف مستعارة</span>
        <span class="sector-pill">إضاءة مخفية</span>
        <span class="sector-pill">كورنيشات معمارية</span>
      </div>
    </div>
    <div class="sector-card">
      <div class="sector-tag">الجدران المميزة</div>
      <h3>الجدران المميزة والتشطيبات الجدارية الديكورية</h3>
      <p>جدران مميزة (Feature Walls)، تشطيبات المايكروسمنت، الجص الإيطالي (Stucco)، تكسيات الأحجار الطبيعية، وألواح الجدران ثلاثية الأبعاد للأجنحة والمجالس.</p>
      <div class="sector-pills">
        <span class="sector-pill">جدران مميزة</span>
        <span class="sector-pill">تشطيبات ستوكو</span>
        <span class="sector-pill">تكسيات حجرية</span>
        <span class="sector-pill">بانوهات 3D</span>
      </div>
    </div>
    <div class="sector-card">
      <div class="sector-tag">النجارة الديكورية</div>
      <h3>أعمال النجارة الخشبية والعناصر المعمارية</h3>
      <p>تكسيات الجدران الخشبية المضلعة (Fluted Panels)، القواطع الخشبية الديكورية، فواصل المساحات، والأعمال الخشبية المصنعة حسب الطلب والمواصفات.</p>
      <div class="sector-pills">
        <span class="sector-pill">أعمال نجارة</span>
        <span class="sector-pill">تكسيات خشبية</span>
        <span class="sector-pill">قواطع خشبية</span>
        <span class="sector-pill">نجارة معمارية</span>
      </div>
    </div>
    <div class="sector-card">
      <div class="sector-tag">البانوهات والإطارات</div>
      <h3>البانوهات الجدارية والإطارات المعمارية (Boiserie)</h3>
      <p>بانوهات جدارية كلاسيكية وحديثة، إطارات جدارية ديكورية، وزرات جدارية (Wainscoting)، تأطير الممرات والأقواس المعمارية بأعلى درجات الدقة.</p>
      <div class="sector-pills">
        <span class="sector-pill">بانوهات جدارية</span>
        <span class="sector-pill">إطارات ديكورية</span>
        <span class="sector-pill">بوازيري Boiserie</span>
        <span class="sector-pill">وزرات جدارية</span>
      </div>
    </div>
    <div class="sector-card">
      <div class="sector-tag">الدهانات والتشطيب</div>
      <h3>الدهانات الداخلية والتشطيب فائق النعومة</h3>
      <p>تجهيز أسطح الجدران والأسقف بمستوى نعومة Level-5، دهانات مايكروسمنت ودهانات ليم واش، دهانات مقاومة للرطوبة وقابلة للغسيل بتشطيبات مثالية.</p>
      <div class="sector-pills">
        <span class="sector-pill">تشطيب Level-5</span>
        <span class="sector-pill">دهانات داخلية</span>
        <span class="sector-pill">مايكروسمنت</span>
        <span class="sector-pill">تجهيز الأسطح</span>
      </div>
    </div>
    <div class="sector-card">
      <div class="sector-tag">القواطع والتكسيات</div>
      <h3>القواطع الجدارية وتكسيات البورسلان والرخام</h3>
      <p>قواطع جبسية عازلة للصوت، أنظمة مقاومة للحريق والرطوبة للمطابخ والحمامات، وتكسيات البورسلان والرخام للألواح الكبيرة على الجدران.</p>
      <div class="sector-pills">
        <span class="sector-pill">قواطع جبسية</span>
        <span class="sector-pill">عزل صوتي</span>
        <span class="sector-pill">تكسيات جدارية</span>
        <span class="sector-pill">تركيب البورسلان</span>
      </div>
    </div>
  </div>
</section>
`;

if (!arHomeHtml.includes('decoration-section')) {
  arHomeHtml = arHomeHtml.replace(
    'تفاصيل الخدمة</span>\n          </a>\n        </div>\n      </section>',
    'تفاصيل الخدمة</span>\n          </a>\n        </div>\n      </section>' + arDecorationSection
  );
}

// Arabic Section B: Who We Work With / Direct & Subcontracting Scope
const arClientsSection = `
<section class="section clients-section">
  <div class="sectionhead">
    <div>
      <p class="eyebrow">شركاؤنا ونطاق التعاقد</p>
      <h2>محل ثقة الملاك، المصممين،<br>وشركات المقاولات العامة.</h2>
    </div>
    <p>تستقبل نسق كلاً من مشاريع الفيت آوت المتكاملة المباشرة وحزم المقاولات من الباطن للمشاريع الإنشائية والتجارية في أبوظبي والإمارات.</p>
  </div>
  <div class="clients-grid">
    <div class="client-card">
      <span class="client-tag">المشاريع السكنية</span>
      <h3>أصحاب الفلل والملاك</h3>
      <p>تشطيب متكامل للفلل الخاصة، ديكور المجالس، وتجديد الحمامات الفاخرة والأسقف وفق جداول كميات واضحة ومراحل تسليم منضبطة.</p>
    </div>
    <div class="client-card">
      <span class="client-tag">الاستشارات التصميمية</span>
      <h3>المصممون الداخليون والمعماريون</h3>
      <p>تنفيذ أمين ومتقن للتصاميم ثلاثية الأبعاد (3D Renders) والمخططات التنفيذية، وإعداد المخططات الورشية (Shop Drawings) بلا تنازل عن الرؤية التصميمية.</p>
    </div>
    <div class="client-card">
      <span class="client-tag">مقاولات الباطن</span>
      <h3>المقاولون الرئيسيون وشركات المقاولات</h3>
      <p>مقاول باطن متخصص وموثوق لأعمال الأسقف الجبسية، القواطع الجدارية، النجارة، والتشطيبات الديكورية مع التزام صارم بمعايير السلامة والتسليم.</p>
    </div>
    <div class="client-card">
      <span class="client-tag">المشاريع التجارية</span>
      <h3>المطورون العقاريون وإدارات المشاريع</h3>
      <p>تنفيذ متسارع للمساحات التجارية، المكاتب المؤسسية، العيادات، والمتاجر مع متابعة الموافقات الرسمية واشتراطات الدفاع المدني والبلدية (TAMM).</p>
    </div>
  </div>
</section>
`;

if (!arHomeHtml.includes('clients-section')) {
  arHomeHtml = arHomeHtml.replace(
    '</article>\n        </div>\n      </section>',
    '</article>\n        </div>\n      </section>' + arClientsSection
  );
}

// Update Arabic Home Schema knowsAbout
try {
  const schemaMatch = arHomeHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (schemaMatch) {
    const parsed = JSON.parse(schemaMatch[1]);
    const biz = parsed['@graph'].find(item => item['@type'] === 'HomeAndConstructionBusiness');
    if (biz) {
      biz.description = "شركة نسق متخصصة في التنفيذ الشامل للتصميم الداخلي والفيت آوت والديكور في أبوظبي والإمارات: أسقف ديكورية، أعمال نجارة خشبية، جدران مميزة، بانوهات جدارية، دهانات وتشطيبات فلل ومقرات تجارية متكاملة.";
      const newArKeywords = [
        "تنفيذ متكامل للتصميم الداخلي والفيت آوت",
        "أسقف ديكورية وأسقف مستعارة معلقة",
        "جدران مميزة وتشطيبات ديكورية",
        "أعمال النجارة الخشبية والتكسيات الديكورية",
        "بانوهات جدارية وإطارات معمارية وبوازيري",
        "الدهانات الداخلية وتشطيب Level-5",
        "مقاول تشطيب باطن مقاولات عامة أبوظبي",
        "أعمال فيت آوت وديكور الفلل والمجالس أبوظبي"
      ];
      for (const kw of newArKeywords) {
        if (!biz.knowsAbout.includes(kw)) biz.knowsAbout.push(kw);
      }
    }
    arHomeHtml = arHomeHtml.replace(schemaMatch[0], `<script type="application/ld+json">${JSON.stringify(parsed)}</script>`);
  }
} catch (e) {
  console.error('Error updating AR home schema:', e);
}

fs.writeFileSync(arHomePath, arHomeHtml, 'utf8');
console.log('✅ Updated dist/ar/index.html with Complete Fit-Out & Decoration Positioning.');


// ==========================================
// 3. UPDATE dist/services/index.html & dist/ar/services/index.html
// ==========================================
const enServicesPath = path.join(distDir, 'services', 'index.html');
let enServicesHtml = fs.readFileSync(enServicesPath, 'utf8');

enServicesHtml = enServicesHtml.replace(
  '<title>Interior Fit-Out Services in Abu Dhabi | NASAQ</title>',
  '<title>Complete Interior Fit-Out & Decoration Services Abu Dhabi | NASAQ</title>'
);
enServicesHtml = enServicesHtml.replace(
  '<meta name="description" content="Comprehensive interior fit-out services in Abu Dhabi: villa fit-out, office fit-out, commercial fit-out, gypsum works, false ceilings, and interior renovation.">',
  '<meta name="description" content="Complete interior fit-out and decoration execution in Abu Dhabi: decorative ceilings, custom woodwork, feature walls, mouldings, interior partitions, and turnkey finishing.">'
);
enServicesHtml = enServicesHtml.replace(
  '<p>Interior fit-out and specialist finishing for residential and commercial spaces in Abu Dhabi.</p>',
  '<p>Complete interior decoration, fit-out execution, and specialist architectural finishing for villas, offices, and commercial spaces across Abu Dhabi.</p>'
);
fs.writeFileSync(enServicesPath, enServicesHtml, 'utf8');
console.log('✅ Updated dist/services/index.html titles & intro.');

const arServicesPath = path.join(distDir, 'ar', 'services', 'index.html');
let arServicesHtml = fs.readFileSync(arServicesPath, 'utf8');

arServicesHtml = arServicesHtml.replace(
  '<title>خدمات الفيت آوت والديكور في أبوظبي | نسق</title>',
  '<title>خدمات الفيت آوت والديكور والتنفيذ الداخلي في أبوظبي | نسق</title>'
);
arServicesHtml = arServicesHtml.replace(
  '<p>مجموعة متكاملة من خدمات الفيت آوت وأعمال الديكور التخصصية المصممة لتحويل المخططات المعتمدة إلى مساحات مكتملة بأعلى معايير الإتقان.</p>',
  '<p>مجموعة شاملة من خدمات تنفيذ التصميم الداخلي، الفيت آوت المتكامل، أعمال الديكور المعماري، النجارة، والأسقف لتحويل المخططات إلى مساحات مكتملة بأعلى معايير الإتقان.</p>'
);
fs.writeFileSync(arServicesPath, arServicesHtml, 'utf8');
console.log('✅ Updated dist/ar/services/index.html titles & intro.');


// ==========================================
// 4. UPDATE dist/about/index.html & dist/ar/about/index.html
// ==========================================
const enAboutPath = path.join(distDir, 'about', 'index.html');
let enAboutHtml = fs.readFileSync(enAboutPath, 'utf8');

enAboutHtml = enAboutHtml.replace(
  '<title>About NASAQ | 11+ Yrs UAE Fit-Out & Decor Team</title>',
  '<title>About NASAQ | Complete Interior Fit-Out & Decoration Execution Contractor</title>'
);
enAboutHtml = enAboutHtml.replace(
  '<p>We are a specialized interior fit-out and decor team with over 11 years of continuous site execution in the UAE, delivering thousands of completed projects across all seven Emirates.</p>',
  '<p>We are an Abu Dhabi contractor specializing in complete interior fit-out and decoration execution—from decorative ceilings, feature walls, and woodwork to full turnkey spaces and main contractor subcontracting across the UAE.</p>'
);
fs.writeFileSync(enAboutPath, enAboutHtml, 'utf8');
console.log('✅ Updated dist/about/index.html positioning.');

const arAboutPath = path.join(distDir, 'ar', 'about', 'index.html');
let arAboutHtml = fs.readFileSync(arAboutPath, 'utf8');

arAboutHtml = arAboutHtml.replace(
  '<title>عن نسق | فريق متخصص في الفيت آوت والديكور بخبرة 11+ عاماً في الإمارات</title>',
  '<title>عن نسق | مقاول تنفيذ متكامل للتصميم الداخلي والفيت آوت والديكور أبوظبي</title>'
);
arAboutHtml = arAboutHtml.replace(
  '<p>فريق متخصص في تنفيذ التصميم الداخلي وأعمال الديكور والفيت آوت بخبرة متواصلة تفوق 11 عاماً في مواقع العمل بالإمارات، مع سجل حافل بآلاف المشاريع المنجزة عبر كافة الإمارات السبع.</p>',
  '<p>شركة متخصصة في التنفيذ الشامل للتصميم الداخلي والفيت آوت والديكور—من الأسقف الديكورية والجدران المميزة وأعمال النجارة إلى المشاريع المباشرة المتكاملة ومقاولات الباطن في الإمارات.</p>'
);
fs.writeFileSync(arAboutPath, arAboutHtml, 'utf8');
console.log('✅ Updated dist/ar/about/index.html positioning.');


// ==========================================
// 5. UPDATE dist/llms.txt (AI Knowledge Base)
// ==========================================
const llmsPath = path.join(distDir, 'llms.txt');
if (fs.existsSync(llmsPath)) {
  let llms = fs.readFileSync(llmsPath, 'utf8');
  
  // Update English Summary
  llms = llms.replace(
    'NASAQ (نسق - meaning order, harmony, and disciplined arrangement) is an Abu Dhabi-based interior fit-out and design implementation company. Backed by an in-house execution team with 11+ continuous years of UAE site experience and thousands of completed projects across all seven Emirates, we turn approved interior plans, drawings, and BOQs into physical spaces through meticulous material coordination, on-site supervision, and high-precision finishing.',
    'NASAQ (نسق - meaning order, harmony, and disciplined arrangement) is an Abu Dhabi-based contractor specializing in COMPLETE INTERIOR FIT-OUT & DECORATION EXECUTION. Backed by an in-house execution team with 11+ continuous years of UAE site experience and thousands of completed projects across all seven Emirates, NASAQ is NOT merely a gypsum ceiling installer; we execute full interior spaces including decorative false ceilings, feature walls, custom architectural woodwork & fluted panelling, wall mouldings & boiserie, Level-5 interior painting, drywall partitions, and turnkey finishing for private villa owners, commercial spaces, and main contractor subcontracting.'
  );

  // Update Arabic Summary
  llms = llms.replace(
    'شركة نسق (NASAQ) هي شركة متخصصة في تنفيذ التصميم الداخلي وأعمال الفيت آوت والديكور في أبوظبي ودولة الإمارات العربية المتحدة. يمتلك فريقنا التنفيذي خبرة ميدانية متواصلة تتجاوز 11 عاماً وسجلاً حافلاً بآلاف المشاريع المنفذة بنجاح عبر كافة الإمارات السبع.',
    'شركة نسق (NASAQ) هي شركة متخصصة في التنفيذ الشامل والمتكامل للتصميم الداخلي والفيت آوت والديكور المعماري في أبوظبي والإمارات. نسق ليست مجرد مقاول أسقف جبسية، بل تتولى التنفيذ الكامل للديكورات الداخلية بما يشمل الأسقف المستعارة الديكورية، الجدران المميزة (Feature Walls)، أعمال النجارة والتكسيات الخشبية، البانوهات الجدارية (Boiserie)، الدهانات الداخلية فائقة النعومة بمستوى Level-5، القواطع الجدارية، والتشطيب المتكامل للفلل السكنية، المقرات التجارية، وحزم المقاولات من الباطن للمقاولين الرئيسيين.'
  );

  fs.writeFileSync(llmsPath, llms, 'utf8');
  console.log('✅ Updated dist/llms.txt with Complete Fit-Out & Decoration Authority.');
}
