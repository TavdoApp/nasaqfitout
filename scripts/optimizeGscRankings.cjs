const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

console.log('🚀 Starting Google Search Console Performance Optimization...\n');

// 1. Optimize dist/services/interior-partitions/index.html
const partitionsEnPath = path.join(DIST_DIR, 'services', 'interior-partitions', 'index.html');
if (fs.existsSync(partitionsEnPath)) {
  let html = fs.readFileSync(partitionsEnPath, 'utf8');

  // Title & Meta Description
  html = html.replace(
    '<title>Interior partitions in Abu Dhabi | NASAQ</title>',
    '<title>Acoustic Drywall Partitions & Interior Partition Contractor UAE | NASAQ</title>'
  );
  html = html.replace(
    '<meta name="description" content="Drywall and interior partition works in Abu Dhabi. Space division for villas, apartments, executive offices, and commercial layouts.">',
    '<meta name="description" content="Certified acoustic drywall partitions & interior wall contractor in Abu Dhabi and Dubai. STC 48–55dB acoustic soundproofing, Knauf drywall, and office partitions.">'
  );

  // OpenGraph & Twitter
  html = html.replace(
    /<meta property="og:title" content="[^"]+">/,
    '<meta property="og:title" content="Acoustic Drywall Partitions & Interior Partition Contractor UAE | NASAQ">'
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]+">/,
    '<meta property="og:description" content="Certified acoustic drywall partitions & interior wall contractor in Abu Dhabi and Dubai. STC 48–55dB acoustic soundproofing, Knauf drywall, and office partitions.">'
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]+">/,
    '<meta name="twitter:title" content="Acoustic Drywall Partitions & Interior Partition Contractor UAE | NASAQ">'
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]+">/,
    '<meta name="twitter:description" content="Certified acoustic drywall partitions & interior wall contractor in Abu Dhabi and Dubai. STC 48–55dB acoustic soundproofing, Knauf drywall, and office partitions.">'
  );

  // H1 and Subhead
  html = html.replace(
    '<h1>Interior partitions.</h1><p>Define a room, create privacy and make better use of your floor plan.</p>',
    '<h1>Acoustic Drywall & Interior Partitions.</h1><p>Certified acoustic soundproofing (STC 48–55dB), Knauf drywall partitions, and high-performance space division for offices, clinics, and villas across Abu Dhabi & Dubai.</p>'
  );

  // Lead Paragraph
  html = html.replace(
    '<p class="lead">Gypsum partitions and space division to approved specifications.</p>',
    '<p class="lead">Specialized acoustic drywall partition contractor delivering engineered sound attenuation, STC 48–55dB acoustic rockwool insulation, and fire-rated assemblies across the UAE.</p>'
  );

  fs.writeFileSync(partitionsEnPath, html, 'utf8');
  console.log('✅ Optimized: dist/services/interior-partitions/index.html');
}

// 2. Optimize dist/ar/services/interior-partitions/index.html
const partitionsArPath = path.join(DIST_DIR, 'ar', 'services', 'interior-partitions', 'index.html');
if (fs.existsSync(partitionsArPath)) {
  let html = fs.readFileSync(partitionsArPath, 'utf8');

  html = html.replace(
    '<title>قواطع داخلية في أبوظبي | نسق</title>',
    '<title>قواطع جبس بورد وقواطع جدارية عازلة للصوت (Acoustic Drywall) في أبوظبي والإمارات | نسق</title>'
  );
  html = html.replace(
    '<meta name="description" content="أعمال القواطع الجدارية والجبس بورد في أبوظبي. تقسيم المساحات للفلل، المكاتب الإدارية، والتوزيعات التجارية.">',
    '<meta name="description" content="مقاول معتمد لتنفيذ قواطع الجبس بورد والقواطع الجدارية العازلة للصوت (Acoustic Partitions) في أبوظبي ودبي. عزل صوتي STC 48-55dB ومقاومة الحريق للمكاتب والفلل.">'
  );

  // OpenGraph & Twitter
  html = html.replace(
    /<meta property="og:title" content="[^"]+">/,
    '<meta property="og:title" content="قواطع جبس بورد وقواطع جدارية عازلة للصوت (Acoustic Drywall) في أبوظبي والإمارات | نسق">'
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]+">/,
    '<meta property="og:description" content="مقاول معتمد لتنفيذ قواطع الجبس بورد والقواطع الجدارية العازلة للصوت (Acoustic Partitions) في أبوظبي ودبي. عزل صوتي STC 48-55dB ومقاومة الحريق للمكاتب والفلل.">'
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]+">/,
    '<meta name="twitter:title" content="قواطع جبس بورد وقواطع جدارية عازلة للصوت (Acoustic Drywall) في أبوظبي والإمارات | نسق">'
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]+">/,
    '<meta name="twitter:description" content="مقاول معتمد لتنفيذ قواطع الجبس بورد والقواطع الجدارية العازلة للصوت (Acoustic Partitions) في أبوظبي ودبي. عزل صوتي STC 48-55dB ومقاومة الحريق للمكاتب والفلل.">'
  );

  // H1 and Subhead
  html = html.replace(
    '<h1>القواطع الداخلية.</h1><p>تحديد الغرف، توفير الخصوصية والاستفادة المثلى من المساحة.',
    '<h1>قواطع الجبس بورد والقواطع الجدارية العازلة للصوت.</h1><p>عزل صوتي معتمد (STC 48–55dB)، قواطع كناوف الجبسية، وتقسيم هندسي للمكاتب الإدارية والعيادات والفلل عبر أبوظبي ودبي.'
  );

  fs.writeFileSync(partitionsArPath, html, 'utf8');
  console.log('✅ Optimized: dist/ar/services/interior-partitions/index.html');
}

// 3. Optimize dist/insights/best-interior-design-companies-uae/index.html (Internal links to recent authentic case studies)
const bestEnPath = path.join(DIST_DIR, 'insights', 'best-interior-design-companies-uae', 'index.html');
if (fs.existsSync(bestEnPath)) {
  let html = fs.readFileSync(bestEnPath, 'utf8');

  // Add rich callout box with our 5 authentic case studies
  const caseStudiesCallout = `
    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; margin: 32px 0;">
      <h3 style="margin-top: 0; color: #fff; font-size: 1.25rem;">🔍 Real-World Turnkey Case Studies Across the UAE</h3>
      <p style="color: #ccc; font-size: 0.95rem; line-height: 1.6;">Unlike design studios that outsource construction, NASAQ provides in-house site execution backed by 11+ years of UAE craftsmanship. Explore our verified project handovers:</p>
      <ul style="color: #ccc; font-size: 0.95rem; line-height: 1.8; margin-bottom: 0;">
        <li><a href="/insights/yas-island-noya-villa-fitout-yn7-case-study/" style="color: #C5A880; font-weight: 600;">Yas Island Noya Villa Fit-Out (YN7)</a>: Engineer-approved curved ceiling trays, linear AC diffusers, and diagonal staircase boiserie.</li>
        <li><a href="/insights/saadiyat-island-handcrafted-villa-fitout-case-study/" style="color: #C5A880; font-weight: 600;">Saadiyat Island SDE3 Palatial Villa</a>: 100-year solid Moroccan plaster, Corinthian fluted columns, and Roman dentil cornices.</li>
        <li><a href="/insights/al-bateen-luxury-villa-fitout-case-study/" style="color: #C5A880; font-weight: 600;">Al Bateen Palatial Villa Handover</a>: Double-height grand foyer, monumental circular dome, and 7-year zero-crack durability.</li>
        <li><a href="/insights/khalifa-city-majlis-photo-to-reality-fitout-case-study/" style="color: #C5A880; font-weight: 600;">Khalifa City A Sector 12 Majlis</a>: Photo-to-reality implementation with 0 AED 3D design fees.</li>
        <li><a href="/insights/mohammed-bin-zayed-city-villa-fitout-case-study/" style="color: #C5A880; font-weight: 600;">MBZ City Zone 30 Villa Handover</a>: Direct client advocacy, crack prevention, and 7-year lasting quality.</li>
      </ul>
    </div>
  `;

  if (!html.includes('yas-island-noya-villa-fitout-yn7-case-study')) {
    html = html.replace(
      '<h2>Common Client Questions: Costs, 3D Design & Contractor Roles</h2>',
      caseStudiesCallout + '\n<h2>Common Client Questions: Costs, 3D Design & Contractor Roles</h2>'
    );
    fs.writeFileSync(bestEnPath, html, 'utf8');
    console.log('✅ Added Case Studies Authority Hub to: dist/insights/best-interior-design-companies-uae/index.html');
  }
}

// 4. Optimize dist/ar/insights/best-interior-design-companies-uae/index.html
const bestArPath = path.join(DIST_DIR, 'ar', 'insights', 'best-interior-design-companies-uae', 'index.html');
if (fs.existsSync(bestArPath)) {
  let html = fs.readFileSync(bestArPath, 'utf8');

  const caseStudiesCalloutAr = `
    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; margin: 32px 0;">
      <h3 style="margin-top: 0; color: #fff; font-size: 1.25rem;">🔍 دراسات حالة ومشاريع واقعية تم تسليمها في الإمارات</h3>
      <p style="color: #ccc; font-size: 0.95rem; line-height: 1.6;">على عكس المكاتب التي تعتمد على مقاولي باطن مجهولين، تقدم نسق تنفيذاً هندسياً مباشراً مدعوماً بخبرة 11+ عاماً في مواقع الدولة. استكشف أبرز مشاريعنا المسلمة بالصور والفيديو:</p>
      <ul style="color: #ccc; font-size: 0.95rem; line-height: 1.8; margin-bottom: 0;">
        <li><a href="/ar/insights/yas-island-noya-villa-fitout-yn7-case-study/" style="color: #C5A880; font-weight: 600;">تشطيب فيلا بمشروع نويا (YN7) جزيرة ياس</a>: تنفيذ هندسي معتمد لأسقف الجبس المنحنية وبانوهات الدرج وتكامل فتحات التكييف.</li>
        <li><a href="/ar/insights/saadiyat-island-handcrafted-villa-fitout-case-study/" style="color: #C5A880; font-weight: 600;">فيلا قصر السعديات (SDE3)</a>: جبس مغربي صب أصيل يدوم 100 عام، أعمدة رومانية وتيجان كورنثية يد عامة.</li>
        <li><a href="/ar/insights/al-bateen-luxury-villa-fitout-case-study/" style="color: #C5A880; font-weight: 600;">قصر البطين بأبوظبي</a>: بهو مدخل ملكي بارتفاع مزدوج، قبة جبسية عملاقة، وثبات تام دون تشققات منذ 2019.</li>
        <li><a href="/ar/insights/khalifa-city-majlis-photo-to-reality-fitout-case-study/" style="color: #C5A880; font-weight: 600;">مجلس مدينة خليفة (أ) حوض 12</a>: تنفيذ واقعي من صورة هاتفية فقط وتوفير رسوم التصميم ثلاثي الأبعاد بالكامل.</li>
        <li><a href="/ar/insights/mohammed-bin-zayed-city-villa-fitout-case-study/" style="color: #C5A880; font-weight: 600;">فيلا مدينة محمد بن زايد (حوض 30)</a>: إنقاذ العميل من أخطاء المقاول والاستشاري وجودة صلبة تدوم 7 سنوات كأنها جديدة.</li>
      </ul>
    </div>
  `;

  if (!html.includes('yas-island-noya-villa-fitout-yn7-case-study')) {
    html = html.replace(
      '<h2>أهم الأسئلة التي يبحث عنها الملاك: التكلفة، تصاميم 3D، واختيار المقاول</h2>',
      caseStudiesCalloutAr + '\n<h2>أهم الأسئلة التي يبحث عنها الملاك: التكلفة، تصاميم 3D، واختيار المقاول</h2>'
    );
    fs.writeFileSync(bestArPath, html, 'utf8');
    console.log('✅ Added Case Studies Authority Hub to: dist/ar/insights/best-interior-design-companies-uae/index.html');
  }
}

console.log('\n✨ Optimization script executed successfully!');
