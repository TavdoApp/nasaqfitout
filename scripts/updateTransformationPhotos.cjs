const fs = require('fs');
const path = require('path');

const generatorFile = path.join(__dirname, 'generateInsightsArticles.cjs');
let code = fs.readFileSync(generatorFile, 'utf8');

// Replacement for English Visual Evidence section
const oldEnVisualEvidence = `      <h2>Visual Evidence: On-Site Craftsmanship & Transformation</h2>
      <p>Below is photographic and video documentation of NASAQ's in-house team executing the project on-site at Saadiyat Island:</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:30px 0;">
        <div>
          <img src="/assets/saadiyat-project/before-sofa-wall.jpg" alt="Before: Empty living room wall behind sofa prior to mouldings" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#777;margin-top:6px;text-align:center;"><strong>Before:</strong> Blank living room wall behind sofa before NASAQ mouldings.</p>
        </div>
        <div>
          <img src="/assets/saadiyat-project/before-tv-wall.jpg" alt="Before: Plain media wall with TV and arched mirror" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#777;margin-top:6px;text-align:center;"><strong>Before:</strong> TV wall and backlit mirror prior to architectural integration.</p>
        </div>
      </div>

      <div style="margin:30px 0;">
        <img src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="NASAQ team in official branded safety vests installing gypsum board framing and classical wall mouldings" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <p style="font-size:13px;color:#555;margin-top:8px;text-align:center;"><strong>Active Site Execution:</strong> NASAQ technicians in official branded safety vests (<span lang="ar">نسق NASAQ</span>) installing drywall cladding and aligning decorative wall mouldings with laser precision.</p>
      </div>`;

const newEnVisualEvidence = `      <h2>Visual Evidence: On-Site Craftsmanship & Transformation</h2>
      <p>Below is photographic and video documentation of NASAQ's in-house team executing the project on-site at Saadiyat Island, showcasing the direct before-and-after transformation:</p>

      <h3 style="font-size:17px;margin:28px 0 12px;color:var(--bronze);text-transform:uppercase;letter-spacing:.08em;">1. Before Transformation (Initial Handover State)</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:15px 0 30px;">
        <div>
          <img src="/assets/saadiyat-project/before-sofa-wall.jpg" alt="Before: Empty living room wall behind sofa prior to mouldings" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#777;margin-top:6px;text-align:center;"><strong>Before:</strong> Blank living room wall behind sofa before NASAQ mouldings.</p>
        </div>
        <div>
          <img src="/assets/saadiyat-project/before-tv-wall.jpg" alt="Before: Plain media wall with TV and arched mirror" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#777;margin-top:6px;text-align:center;"><strong>Before:</strong> Plain TV wall and mirror prior to architectural integration.</p>
        </div>
      </div>

      <h3 style="font-size:17px;margin:28px 0 12px;color:var(--bronze);text-transform:uppercase;letter-spacing:.08em;">2. The Transformation: Completed Handover (After 72 Hours)</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:15px 0 30px;">
        <div>
          <img src="/assets/saadiyat-project/after-sofa-wall.jpg" alt="After: Classical boiserie wall panel mouldings behind sofa" style="width:100%;height:auto;aspect-ratio:3/4;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#555;margin-top:6px;text-align:center;"><strong>After Transformation (Sofa Wall):</strong> Elegant classical boiserie wall mouldings, perfectly aligned behind the sofa with Level-5 velvety paint finish.</p>
        </div>
        <div>
          <img src="/assets/saadiyat-project/after-tv-wall.jpg" alt="After: Complete TV feature wall with warm indirect LED cove lighting and triple-panel mouldings" style="width:100%;height:auto;aspect-ratio:3/4;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#555;margin-top:6px;text-align:center;"><strong>After Transformation (TV Wall):</strong> Architectural TV feature wall with concealed warm LED cove lighting (top and bottom) and triple-frame mouldings.</p>
        </div>
      </div>

      <h3 style="font-size:17px;margin:28px 0 12px;color:var(--bronze);text-transform:uppercase;letter-spacing:.08em;">3. Active Site Craftsmanship & Technical Detailing</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:15px 0 30px;">
        <div>
          <img src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="NASAQ team in official branded safety vests installing gypsum board framing and classical wall mouldings" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#555;margin-top:6px;text-align:center;"><strong>Drywall & Moulding Alignment:</strong> NASAQ technicians in official branded safety vests (<span lang="ar">نسق NASAQ</span>) installing drywall cladding and aligning boiserie frames with laser levels.</p>
        </div>
        <div>
          <img src="/assets/saadiyat-project/after-tv-wall-close-up-led.jpg" alt="NASAQ technician fine-tuning Samsung TV mount and concealed LED cove lighting" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;object-position:center 30%;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#555;margin-top:6px;text-align:center;"><strong>Concealed Wiring & LED Integration:</strong> Close-up of flush Samsung TV installation, warm architectural LED halo, and hidden in-wall cabling.</p>
        </div>
      </div>`;

// Replacement for Arabic Visual Evidence section
const oldArVisualEvidence = `      <h2>توثيق بالصور والفيديو: تنفيذ فريق نسق بالموقع</h2>
      <p>نستعرض فيما يلي صوراً ميدانية ومقطع فيديو يوثق دقة التنفيذ من موقع العمل في جزيرة السعديات:</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:30px 0;">
        <div>
          <img src="/assets/saadiyat-project/before-sofa-wall.jpg" alt="قبل البدء: جدار الصالة الفارغ خلف الكنبة قبل تركيب البانوهات" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#777;margin-top:6px;text-align:center;"><strong>قبل العمل:</strong> جدار غرفة المعيشة خالي من أي ملامح ديكورية خلف الأريكة.</p>
        </div>
        <div>
          <img src="/assets/saadiyat-project/before-tv-wall.jpg" alt="قبل البدء: جدار التلفاز والمرآة المقوسة قبل الدمج المعماري" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#777;margin-top:6px;text-align:center;"><strong>قبل العمل:</strong> جدار الشاشة والمرآة قبل تنفيذ الجبس بورد والإضاءة.</p>
        </div>
      </div>

      <div style="margin:30px 0;">
        <img src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="فريق عمل شركة نسق بالسترات الرسمية أثناء تركيب ألواح الجبس والبانوهات الجدارية بدقة" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
        <p style="font-size:13px;color:#555;margin-top:8px;text-align:center;"><strong>أثناء التنفيذ الميداني:</strong> فنيو شركة نسق يرتدون سترات السلامة المعتمدة للشعار (<span lang="ar">نسق NASAQ</span>) أثناء تثبيت هيكل الجبس بورد وضبط البانوهات الديكورية بالليزر.</p>
      </div>`;

const newArVisualEvidence = `      <h2>توثيق بالصور والفيديو: تنفيذ فريق نسق بالموقع</h2>
      <p>نستعرض فيما يلي صوراً ميدانية ومقطع فيديو يوثق دقة التنفيذ ومراحل التحول في موقع العمل بجزيرة السعديات قبل وبعد إنجاز الديكور:</p>

      <h3 style="font-size:17px;margin:28px 0 12px;color:var(--bronze);letter-spacing:0;">1. قبل بدء العمل (حالة الموقع عند الاستلام)</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:15px 0 30px;">
        <div>
          <img src="/assets/saadiyat-project/before-sofa-wall.jpg" alt="قبل البدء: جدار الصالة الفارغ خلف الكنبة قبل تركيب البانوهات" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#777;margin-top:6px;text-align:center;"><strong>قبل العمل:</strong> جدار غرفة المعيشة خالي من أي ملامح ديكورية خلف الأريكة.</p>
        </div>
        <div>
          <img src="/assets/saadiyat-project/before-tv-wall.jpg" alt="قبل البدء: جدار التلفاز والمرآة المقوسة قبل الدمج المعماري" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#777;margin-top:6px;text-align:center;"><strong>قبل العمل:</strong> جدار الشاشة والمرآة قبل تنفيذ الجبس بورد والإضاءة.</p>
        </div>
      </div>

      <h3 style="font-size:17px;margin:28px 0 12px;color:var(--bronze);letter-spacing:0;">2. بعد التحول الكامل والتسليم (خلال 72 ساعة)</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:15px 0 30px;">
        <div>
          <img src="/assets/saadiyat-project/after-sofa-wall.jpg" alt="بعد التنفيذ: بانوهات جدارية كلاسيكية خلف الأريكة بتشطيب فاخر" style="width:100%;height:auto;aspect-ratio:3/4;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#555;margin-top:6px;text-align:center;"><strong>بعد التحول (جدار الأريكة):</strong> بانوهات كلاسيكية راقية بتناسق هندسي متقن خلف الأريكة مع دهان مطفي مخملي بمستوى Level-5.</p>
        </div>
        <div>
          <img src="/assets/saadiyat-project/after-tv-wall.jpg" alt="بعد التنفيذ: جدار التلفاز الديكوري المتكامل بإنارة LED مخفية علوية وسفلية" style="width:100%;height:auto;aspect-ratio:3/4;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#555;margin-top:6px;text-align:center;"><strong>بعد التحول (جدار التلفاز):</strong> جدار الشاشة الديكوري بإضاءة LED مخفية دافئة (أعلى وأسفل الجدار) مع ثلاثة إطارات بانوهات متناسقة.</p>
        </div>
      </div>

      <h3 style="font-size:17px;margin:28px 0 12px;color:var(--bronze);letter-spacing:0;">3. الحرفية الميدانية والتفاصيل الفنية</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:15px 0 30px;">
        <div>
          <img src="/assets/saadiyat-project/execution-team-mouldings.jpg" alt="فريق عمل شركة نسق بالسترات الرسمية أثناء تركيب ألواح الجبس والبانوهات الجدارية بدقة" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#555;margin-top:6px;text-align:center;"><strong>تثبيت الجبس وضبط الليزر:</strong> فنيو شركة نسق بالسترات الرسمية مع شعار الشركة (<span lang="ar">نسق NASAQ</span>) أثناء ضبط أبعاد البانوهات وتثبيت الهيكل.</p>
        </div>
        <div>
          <img src="/assets/saadiyat-project/after-tv-wall-close-up-led.jpg" alt="فني شركة نسق أثناء ضبط تمديدات وتثبيت شاشة التلفاز والإنارة المخفية" style="width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;object-position:center 30%;border:1px solid var(--line);" loading="lazy">
          <p style="font-size:12px;color:#555;margin-top:6px;text-align:center;"><strong>تمديدات الكابلات وتفاصيل الإنارة:</strong> لقطة مقربة لتثبيت شاشة Samsung وتمرير الأسلاك داخل الجدار مع هالة الإضاءة الدافئة.</p>
        </div>
      </div>`;

// Check line endings and replace
function normalizeAndReplace(source, target, replacement) {
  const normSource = source.replace(/\r\n/g, '\n');
  const normTarget = target.replace(/\r\n/g, '\n');
  if (normSource.includes(normTarget)) {
    return normSource.replace(normTarget, replacement);
  }
  return null;
}

const updatedEn = normalizeAndReplace(code, oldEnVisualEvidence, newEnVisualEvidence);
if (updatedEn) {
  code = updatedEn;
  console.log('Successfully replaced EN visual evidence section in generator script.');
} else {
  console.error('Failed to replace EN visual evidence!');
}

const updatedAr = normalizeAndReplace(code, oldArVisualEvidence, newArVisualEvidence);
if (updatedAr) {
  code = updatedAr;
  console.log('Successfully replaced AR visual evidence section in generator script.');
} else {
  console.error('Failed to replace AR visual evidence!');
}

fs.writeFileSync(generatorFile, code, 'utf8');
console.log('generateInsightsArticles.cjs updated with after transformation photos!');
