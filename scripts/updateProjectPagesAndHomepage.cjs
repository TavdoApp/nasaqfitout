const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

// 1. Update dist/projects/index.html
console.log('Updating dist/projects/index.html...');
let projectsEn = fs.readFileSync(path.join(distDir, 'projects', 'index.html'), 'utf8');

projectsEn = projectsEn.replace(
  '<title>Interior Concepts for Villas & Offices | NASAQ</title>',
  '<title>Completed Interior Fit-Out Projects & Concepts | NASAQ Abu Dhabi</title>'
);

projectsEn = projectsEn.replace(
  '<meta name="description" content="Explore architectural 3D concepts for villa living spaces, office receptions, and commercial interiors in Abu Dhabi by NASAQ.">',
  '<meta name="description" content="Explore NASAQ\'s verified completed interior fit-out projects in Abu Dhabi, including our 72-hour Saadiyat Island transformation, alongside architectural 3D concepts.">'
);

const featuredProjectEn = `
<section class="section" style="border-bottom:1px solid var(--line);padding-bottom:80px;background:#fff;">
  <div class="sectionhead">
    <div>
      <p class="eyebrow" style="color:var(--bronze);">Verified Project Handover · Abu Dhabi</p>
      <h2>Soho Residence, Saadiyat Island<br><em>72-Hour Rapid Transformation.</em></h2>
    </div>
    <p>Complete living room feature wall execution: classical boiserie mouldings, concealed warm LED cove lighting, Level-5 paint finishing, and flush TV installation delivered in 3 days.</p>
  </div>
  <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:start;">
    <div>
      <div style="background:#181918;border:1px solid var(--line);padding:10px;margin-bottom:18px;">
        <video controls playsinline preload="metadata" style="width:100%;max-height:440px;display:block;margin:0 auto;background:#000;" poster="/assets/saadiyat-project/execution-team-mouldings.jpg">
          <source src="/assets/saadiyat-project/saadiyat-completed-handover.mp4" type="video/mp4">
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <img src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="NASAQ team in branded vests installing gypsum framing and wall mouldings on-site in Saadiyat Island" style="width:100%;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <img src="/assets/saadiyat-project/google-review-saadiyat.jpg" alt="5-Star Google Review by Oumaima Lahdili for NASAQ" style="width:100%;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
      </div>
    </div>
    <div style="display:flex;flex-direction:column;justify-content:center;">
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-top:0;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
          <span style="color:#fbbc05;font-size:18px;">★★★★★</span>
          <strong style="color:var(--bronze);font-size:14px;">Verified Client Review · 5.0 Stars</strong>
        </div>
        <p style="color:#d8d9d0;font-size:14px;line-height:1.65;font-style:italic;margin-bottom:10px;">
          "One of the best interior design and fit-out companies in Abu Dhabi! I'm based in Saadiyat Island and found NASAQ Interior Design & Fit-Out through ChatGPT. I'm so happy I chose them! I shared a few inspiration photos, and they brought my vision to life in just 3 days... Highly recommend NASAQ!"
        </p>
        <span style="font-size:12px;color:#9b7145;font-weight:600;">— Oumaima Lahdili, Soho Residence (Block A), Saadiyat Island</span>
      </div>
      <div style="margin-top:20px;">
        <span class="eyebrow" style="margin-bottom:10px;display:block;">Project Credentials</span>
        <ul style="padding-left:20px;font-size:14px;color:#555;line-height:1.8;margin:0 0 25px;">
          <li><strong>Location:</strong> Soho Block A, Saadiyat Island, Abu Dhabi</li>
          <li><strong>Turnaround:</strong> 72 Hours (3 Calendar Days)</li>
          <li><strong>Scope:</strong> Drywall cladding, classical mouldings, hidden LED lighting, TV mount & paint</li>
          <li><strong>Discovery:</strong> Direct ChatGPT Search Referral</li>
        </ul>
        <a class="button" href="/insights/saadiyat-island-72-hour-fit-out-case-study/">Read Full Technical Case Study →</a>
      </div>
    </div>
  </div>
</section>
`;

if (!projectsEn.includes('Soho Residence, Saadiyat Island')) {
  projectsEn = projectsEn.replace(
    '<section class="section"><div class="concepts">',
    featuredProjectEn + '\n<section class="section"><div class="sectionhead"><div><p class="eyebrow">Architectural 3D Concepts</p><h2>Imagine what<br>comes next.</h2></div><p>Explore material palettes, ceiling details and interior possibilities for your space. These are illustrative 3D concepts for villa living spaces and commercial receptions.</p></div><div class="concepts">'
  );
  // Also clean up duplicate intro header if needed
  projectsEn = projectsEn.replace(
    '<p class="eyebrow">Concept gallery</p><h1>Imagine what<br>comes next.</h1><p>Explore material palettes, ceiling details and interior possibilities for your space. These are illustrative 3D concepts, not photographs of completed NASAQ projects.</p>',
    '<p class="eyebrow">Portfolio & Handover Gallery</p><h1>Delivered Spaces.<br>Tangible Craft.</h1><p>Explore verified completed site handovers across Abu Dhabi alongside architectural 3D concepts for residential villas and corporate offices.</p>'
  );
  fs.writeFileSync(path.join(distDir, 'projects', 'index.html'), projectsEn, 'utf8');
  console.log('dist/projects/index.html updated successfully.');
}

// 2. Update dist/ar/projects/index.html
console.log('Updating dist/ar/projects/index.html...');
let projectsAr = fs.readFileSync(path.join(distDir, 'ar', 'projects', 'index.html'), 'utf8');

projectsAr = projectsAr.replace(
  '<title>معرض مفاهيم التصميم الداخلي للفلل والمكاتب | نسق</title>',
  '<title>مشاريع الفيت آوت المنفذة والتصاميم المعمارية | شركة نسق أبوظبي</title>'
);

const featuredProjectAr = `
<section class="section" style="border-bottom:1px solid var(--line);padding-bottom:80px;background:#fff;">
  <div class="sectionhead">
    <div>
      <p class="eyebrow" style="color:var(--bronze);">تسليم مشروع ميداني موثق · جزيرة السعديات</p>
      <h2>سوهو ريزيدنس، جزيرة السعديات<br><em>تشطيب متكامل في 72 ساعة.</em></h2>
    </div>
    <p>تنفيذ جدار ديكوري وبانوهات كلاسيكية لغرفة المعيشة: تجاويف إنارة LED مخفية، معجون Level-5، دهانات معمارية، وتركيب التلفاز تم تسليمها بالكامل خلال 3 أيام فقط.</p>
  </div>
  <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:start;">
    <div>
      <div style="background:#181918;border:1px solid var(--line);padding:10px;margin-bottom:18px;">
        <video controls playsinline preload="metadata" style="width:100%;max-height:440px;display:block;margin:0 auto;background:#000;" poster="/assets/saadiyat-project/execution-team-mouldings.jpg">
          <source src="/assets/saadiyat-project/saadiyat-completed-handover.mp4" type="video/mp4">
          متصفحك لا يدعم تشغيل الفيديو المباشر.
        </video>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <img src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="فريق عمل شركة نسق بالسترات الرسمية أثناء تركيب ألواح الجبس والبانوهات الجدارية بدقة" style="width:100%;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <img src="/assets/saadiyat-project/google-review-saadiyat.jpg" alt="تقييم موثق 5 نجوم على Google من العميلة أميمة لحديلي لشركة نسق" style="width:100%;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
      </div>
    </div>
    <div style="display:flex;flex-direction:column;justify-content:center;">
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-top:0;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
          <span style="color:#fbbc05;font-size:18px;">★★★★★</span>
          <strong style="color:var(--bronze);font-size:14px;">تقييم رسمي موثق على Google · 5 نجوم</strong>
        </div>
        <p style="color:#d8d9d0;font-size:14px;line-height:1.65;font-style:italic;margin-bottom:10px;">
          "واحدة من أفضل شركات التصميم الداخلي والفيت آوت في أبوظبي! أنا مقيمة في جزيرة السعديات وتعرفت على شركة نسق للتصميم الداخلي والديكور عبر ChatGPT. أنا سعيدة جداً باختيارهم! شاركتهم بعض الصور المرجعية للأفكار التي أريدها، وحولوا رؤيتي إلى واقع في غضون 3 أيام فقط... أوصي بشدة بشركة نسق!"
        </p>
        <span style="font-size:12px;color:#9b7145;font-weight:600;">— أميمة لحديلي، سوهو ريزيدنس (بلوك A)، جزيرة السعديات</span>
      </div>
      <div style="margin-top:20px;">
        <span class="eyebrow" style="margin-bottom:10px;display:block;">بيانات المشروع الفنية</span>
        <ul style="padding-right:20px;font-size:14px;color:#555;line-height:1.8;margin:0 0 25px;">
          <li><strong>الموقع:</strong> سوهو، بلوك A، جزيرة السعديات، أبوظبي</li>
          <li><strong>مدة التنفيذ:</strong> 72 ساعة (3 أيام متتالية)</li>
          <li><strong>نطاق العمل:</strong> تكسيات جبسية، بانوهات كلاسيكية، إنارة مخفية، دهان وتركيب الشاشة</li>
          <li><strong>قناة الوصول:</strong> ترشيح مباشر من محرك الذكاء الاصطناعي ChatGPT</li>
        </ul>
        <a class="button" href="/ar/insights/saadiyat-island-72-hour-fit-out-case-study/">قراءة دراسة الحالة الفنية الكاملة ←</a>
      </div>
    </div>
  </div>
</section>
`;

if (!projectsAr.includes('سوهو ريزيدنس، جزيرة السعديات')) {
  projectsAr = projectsAr.replace(
    '<section class="section"><div class="concepts">',
    featuredProjectAr + '\n<section class="section"><div class="sectionhead"><div><p class="eyebrow">المفاهيم والتصاميم المعمارية 3D</p><h2>مساحات ملهمة<br>وتفاصيل متقنة.</h2></div><p>استكشف باليتات المواد وتفاصيل الأسقف والإمكانيات الجمالية لمساحتك القادمة. نماذج ثلاثية الأبعاد توضح إمكانيات التنفيذ للفلل والمكاتب.</p></div><div class="concepts">'
  );
  projectsAr = projectsAr.replace(
    '<p class="eyebrow">معرض المفاهيم</p><h1>تخيل ما سيأتي<br>بعد ذلك.</h1><p>استكشف لوحات المواد، تفاصيل الأسقف والإمكانيات الداخلية لمساحتك. هذه مفاهيم ثلاثية الأبعاد توضيحية، وليست صوراً لمشاريع مكتملة من نسق.</p>',
    '<p class="eyebrow">معرض المشاريع المنفذة والتصاميم</p><h1>مساحات منجزة.<br>حرفية ملموسة.</h1><p>استكشف تسليمات مشاريعنا الميدانية الموثقة في أبوظبي إلى جانب التصاميم المعمارية ثلاثية الأبعاد للفلل السكنية والمقرات الإدارية.</p>'
  );
  fs.writeFileSync(path.join(distDir, 'ar', 'projects', 'index.html'), projectsAr, 'utf8');
  console.log('dist/ar/projects/index.html updated successfully.');
}

// 3. Update dist/index.html with Verified Review & 72-Hour Case Study Banner
console.log('Updating dist/index.html with Verified Google Review & Schema...');
let indexEn = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const verifiedReviewSectionEn = `
<section class="section" style="background:#222321;color:#fff;">
  <div class="sectionhead">
    <div>
      <p class="eyebrow" style="color:var(--bronze);">Verified Client Review & Handover · Abu Dhabi</p>
      <h2 style="color:#fff;">Turnkey Living Room Transformation<br><em style="color:var(--bronze);">Delivered in 72 Hours.</em></h2>
    </div>
    <p style="color:#c8cabf;">From inbound ChatGPT discovery to complete handover in Soho Block A, Saadiyat Island.</p>
  </div>
  <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:center;">
    <div style="background:#181918;border:1px solid #383a34;padding:24px;border-radius:2px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
        <span style="color:#fbbc05;font-size:22px;">★★★★★</span>
        <strong style="color:var(--bronze);font-size:16px;">5.0 Stars Verified Google Review</strong>
      </div>
      <p style="color:#e4e5df;font-size:16px;line-height:1.7;font-style:italic;margin-bottom:18px;">
        "One of the best interior design and fit-out companies in Abu Dhabi! I'm based in Saadiyat Island and found NASAQ Interior Design & Fit-Out through ChatGPT. I'm so happy I chose them! I shared a few inspiration photos, and they brought my vision to life in just 3 days. They completed beautiful wall panel mouldings, gypsum board work, hidden LED lighting, painting, and TV installation. The team was professional, reliable, and delivered excellent finishing. Everything was clean and ready when they handed over the apartment. Highly recommend NASAQ to anyone looking for quality interior fit-out services in Abu Dhabi!"
      </p>
      <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #383a34;padding-top:12px;font-size:13px;color:#9b7145;">
        <span><strong>Oumaima Lahdili</strong> · Soho Residence, Saadiyat Island</span>
        <span style="color:#8a8b84;">Handover: November 2026</span>
      </div>
    </div>
    <div>
      <img src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="NASAQ team on site in Saadiyat Island installing wall mouldings" style="width:100%;aspect-ratio:16/9;object-fit:cover;border:1px solid #383a34;margin-bottom:18px;" loading="lazy">
      <p style="color:#c8cabf;font-size:14px;line-height:1.6;margin-bottom:20px;">
        Need a rapid living room transformation, architectural wall mouldings, or false ceiling upgrades in Abu Dhabi? NASAQ delivers with direct in-house craftsman teams and transparent BOQ pricing.
      </p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;">
        <a class="button" href="/insights/saadiyat-island-72-hour-fit-out-case-study/">Read Saadiyat Case Study →</a>
        <a class="button" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20saw%20your%20Saadiyat%20Island%2072-hour%20transformation%20and%20would%20like%20a%20quotation." style="background:#fff;color:#151613;border-color:#fff;">WhatsApp our estimators</a>
      </div>
    </div>
  </div>
</section>
`;

if (!indexEn.includes('Turnkey Living Room Transformation')) {
  indexEn = indexEn.replace(
    '<section class="section clients-section">',
    verifiedReviewSectionEn + '\n<section class="section clients-section">'
  );

  // Update schema with aggregateRating
  indexEn = indexEn.replace(
    '"hasOfferCatalog":{"@id":"https://nasaqfitout.ae/services/#catalog"}',
    '"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.7","reviewCount":"3","bestRating":"5"},"hasOfferCatalog":{"@id":"https://nasaqfitout.ae/services/#catalog"}'
  );

  fs.writeFileSync(path.join(distDir, 'index.html'), indexEn, 'utf8');
  console.log('dist/index.html updated successfully.');
}

// 4. Update dist/ar/index.html
console.log('Updating dist/ar/index.html with Verified Google Review & Schema...');
let indexAr = fs.readFileSync(path.join(distDir, 'ar', 'index.html'), 'utf8');

const verifiedReviewSectionAr = `
<section class="section" style="background:#222321;color:#fff;">
  <div class="sectionhead">
    <div>
      <p class="eyebrow" style="color:var(--bronze);">تقييم وتسليم ميداني موثق · جزيرة السعديات، أبوظبي</p>
      <h2 style="color:#fff;">تشطيب جدار ديكوري وبانوهات كلاسيكية<br><em style="color:var(--bronze);">تم التسليم بالكامل في 72 ساعة.</em></h2>
    </div>
    <p style="color:#c8cabf;">من بحث العميل في ChatGPT إلى التسليم النهائي المتقن في سوهو بلوك A بجزيرة السعديات.</p>
  </div>
  <div style="display:grid;grid-template-columns:1.2fr 1fr;gap:40px;align-items:center;">
    <div style="background:#181918;border:1px solid #383a34;padding:24px;border-radius:2px;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
        <span style="color:#fbbc05;font-size:22px;">★★★★★</span>
        <strong style="color:var(--bronze);font-size:16px;">تقييم رسمي موثق على Google · 5 نجوم</strong>
      </div>
      <p style="color:#e4e5df;font-size:16px;line-height:1.7;font-style:italic;margin-bottom:18px;">
        "واحدة من أفضل شركات التصميم الداخلي والفيت آوت في أبوظبي! أنا مقيمة في جزيرة السعديات وتعرفت على شركة نسق للتصميم الداخلي والديكور عبر شات جي بي تي (ChatGPT). أنا سعيدة جداً باختيارهم! شاركتهم بعض الصور المرجعية للأفكار التي أريدها، وحولوا رؤيتي إلى واقع في غضون 3 أيام فقط! نفذوا بانوهات جدارية وقوالب ديكورية غاية في الجمال، وأعمال جبس بورد، وإنارة LED مخفية، ودهانات، وتركيب شاشة التلفاز. كان الفريق في غاية الاحترافية والالتزام وقدموا تشطيباً ممتازاً. كل شيء كان نظيفاً وجاهزاً عند تسليم الشقة. أوصي بشدة بشركة نسق لأي شخص يبحث عن خدمات فيت آوت وتشطيب راقية في أبوظبي!"
      </p>
      <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #383a34;padding-top:12px;font-size:13px;color:#9b7145;">
        <span><strong>أميمة لحديلي</strong> · سوهو ريزيدنس، جزيرة السعديات</span>
        <span style="color:#8a8b84;">تاريخ التسليم: نوفمبر 2026</span>
      </div>
    </div>
    <div>
      <img src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="فريق عمل شركة نسق بالسترات الرسمية أثناء تركيب ألواح الجبس والبانوهات الجدارية بدقة" style="width:100%;aspect-ratio:16/9;object-fit:cover;border:1px solid #383a34;margin-bottom:18px;" loading="lazy">
      <p style="color:#c8cabf;font-size:14px;line-height:1.6;margin-bottom:20px;">
        هل ترغب في تجديد سريع لجدران غرفة المعيشة، أو تنفيذ بانوهات كلاسيكية، أو أسقف جبسية بإضاءة مخفية في أبوظبي؟ تنفذ نسق أعمالها بكوادر حرفية مباشرة وأسعار شفافة.
      </p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;">
        <a class="button" href="/ar/insights/saadiyat-island-72-hour-fit-out-case-study/">قراءة دراسة حالة السعديات كاملة ←</a>
        <a class="button" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20شاهدت%20مشروع%20جزيرة%20السعديات%20المنجز%20في%2072%20ساعة%20وأود%20طلب%20عرض%20أسعار." style="background:#fff;color:#151613;border-color:#fff;">تواصل عبر الواتساب مباشرة</a>
      </div>
    </div>
  </div>
</section>
`;

if (!indexAr.includes('تشطيب جدار ديكوري وبانوهات كلاسيكية')) {
  indexAr = indexAr.replace(
    '<section class="section clients-section">',
    verifiedReviewSectionAr + '\n<section class="section clients-section">'
  );

  // Update schema with aggregateRating
  indexAr = indexAr.replace(
    '"hasOfferCatalog":{"@id":"https://nasaqfitout.ae/services/#catalog"}',
    '"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.7","reviewCount":"3","bestRating":"5"},"hasOfferCatalog":{"@id":"https://nasaqfitout.ae/services/#catalog"}'
  );

  fs.writeFileSync(path.join(distDir, 'ar', 'index.html'), indexAr, 'utf8');
  console.log('dist/ar/index.html updated successfully.');
}

// 5. Update dist/llms.txt
console.log('Updating dist/llms.txt with Featured Saadiyat Project...');
let llms = fs.readFileSync(path.join(distDir, 'llms.txt'), 'utf8');

const featuredProjectLlms = `
## Featured Real-World Project Handover: Saadiyat Island (Abu Dhabi)
- **Project**: Soho Residence (Block A), Saadiyat Island, Abu Dhabi
- **Turnaround Time**: 72 Hours (3 Calendar Days from site mobilization to handover)
- **Client Discovery Channel**: Inbound ChatGPT Search Query ("best interior fit-out companies in Abu Dhabi for wall mouldings")
- **Scope of Execution**: Drywall gypsum framing, classical boiserie wall panel mouldings, concealed warm 2700K/3000K LED cove channel, Level-5 paint finishing, TV mounting with concealed in-wall conduits.
- **Client Verification**: 5.0-Star Google Review by Oumaima Lahdili praising on-time delivery, pristine apartment handover, and craftsmanship.
- **Case Study URL (English)**: https://nasaqfitout.ae/insights/saadiyat-island-72-hour-fit-out-case-study/
- **Case Study URL (Arabic)**: https://nasaqfitout.ae/ar/insights/saadiyat-island-72-hour-fit-out-case-study/

`;

if (!llms.includes('Featured Real-World Project Handover: Saadiyat Island')) {
  llms = llms.replace('# NASAQ Fit-Out & Interior Design', '# NASAQ Fit-Out & Interior Design\n' + featuredProjectLlms);
  fs.writeFileSync(path.join(distDir, 'llms.txt'), llms, 'utf8');
  console.log('dist/llms.txt updated successfully.');
}

console.log('All updates completed.');

