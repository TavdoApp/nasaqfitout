const fs = require('fs');
const path = require('path');

const arProjectsPath = path.join(__dirname, '..', 'dist', 'ar', 'projects', 'index.html');
let content = fs.readFileSync(arProjectsPath, 'utf8');

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

if (!content.includes('سوهو ريزيدنس، جزيرة السعديات')) {
  // Update title & description
  content = content.replace(
    /<title>.*?<\/title>/,
    '<title>مشاريع الفيت آوت المنفذة والتصاميم المعمارية | شركة نسق أبوظبي</title>'
  );
  content = content.replace(
    /<meta name="description" content=".*?">/,
    '<meta name="description" content="استكشف مشاريع شركة نسق المنفذة في أبوظبي بما فيها إنجاز شقة جزيرة السعديات في 72 ساعة إلى جانب التصاميم المعمارية ثلاثية الأبعاد.">'
  );

  // Update intro section
  content = content.replace(
    /<section class="intro">[\s\S]*?<\/section>/,
    `<section class="intro">
        <p class="eyebrow">معرض المشاريع المنفذة والتصاميم</p>
        <h1>مساحات منجزة.<br>حرفية ملموسة.</h1>
        <p>استكشف تسليمات مشاريعنا الميدانية الموثقة في أبوظبي إلى جانب التصاميم المعمارية ثلاثية الأبعاد للفلل السكنية والمقرات الإدارية.</p>
      </section>`
  );

  // Insert featured project section before 3D concepts
  content = content.replace(
    /<section class="section">\s*<div class="concepts">/,
    featuredProjectAr + `\n<section class="section"><div class="sectionhead"><div><p class="eyebrow">المفاهيم والتصاميم المعمارية 3D</p><h2>مساحات ملهمة<br>وتفاصيل متقنة.</h2></div><p>استكشف باليتات المواد وتفاصيل الأسقف والإمكانيات الجمالية لمساحتك القادمة. نماذج ثلاثية الأبعاد توضح إمكانيات التنفيذ للفلل والمكاتب.</p></div><div class="concepts">`
  );

  fs.writeFileSync(arProjectsPath, content, 'utf8');
  console.log('Successfully updated dist/ar/projects/index.html');
} else {
  console.log('Already updated dist/ar/projects/index.html');
}

