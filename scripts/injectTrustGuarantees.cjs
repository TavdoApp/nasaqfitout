const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

// 1. UPDATE dist/style.css
const cssPath = path.join(DIST_DIR, 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const guaranteesCss = `
/* NASAQ 6 Ironclad Guarantees */
.guarantees-section{padding:90px 7%}
.guarantees-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:40px;width:100%}
.guarantee-card{background:#fff;border:1px solid #dcded8;border-top:4px solid var(--bronze,#b89158);padding:32px 28px;box-shadow:0 6px 20px rgba(0,0,0,0.03);display:flex;flex-direction:column;justify-content:space-between}
.guarantee-num{font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--bronze,#b89158);margin-bottom:12px;display:inline-block}
.guarantee-card h3{font-size:19px;color:#181918;margin:0 0 12px 0;line-height:1.35}
.guarantee-card p{font-size:14.5px;color:#555750;line-height:1.7;margin:0}
.guarantee-badge{margin-top:18px;display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;color:#181918;background:#f4f5f0;padding:4px 10px;border-radius:3px;align-self:flex-start}
@media(max-width:960px){
  .guarantees-grid{grid-template-columns:1fr;gap:20px}
  .guarantee-card{padding:26px 22px}
}
`;

if (!css.includes('guarantees-section')) {
  css += guaranteesCss;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('✅ Added guarantees styles to dist/style.css');
}

// 2. ENGLISH GUARANTEES HTML
const enGuaranteesHtml = `
  <!-- NASAQ 6 Ironclad Guarantees Section -->
  <section class="section guarantees-section">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">The NASAQ Engineering Standard</p>
        <h2>Why Abu Dhabi homeowners choose NASAQ<br>over conventional contractors.</h2>
      </div>
      <p>Too many clients in Abu Dhabi endure broken promises—months of contractor delays, impossible 3D designs that fail on-site, cheap material substitutions, and dangerous ceiling work. NASAQ was built around 6 non-negotiable engineering standards.</p>
    </div>
    <div class="guarantees-grid">
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">Guarantee 01</span>
          <h3>Structural Heavy-Load Backing</h3>
          <p>We never mount heavy crystal chandeliers or blackout curtains directly to weak drywall. NASAQ installs heavy-gauge structural steel unistrut brackets bolted directly into the concrete slab—tested to support up to 150 kg with zero ceiling cracking.</p>
        </div>
        <span class="guarantee-badge">✓ Anti-Collapse Safety</span>
      </div>
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">Guarantee 02</span>
          <h3>100% Reality-Engineered Execution</h3>
          <p>No fantasy Pinterest pictures that fail on-site. Every project begins with 3D laser millimeter surveying and 2D CAD shop drawings, ensuring exact dimensions, wall reveals, and electrical conduit alignments before cutting a single board.</p>
        </div>
        <span class="guarantee-badge">✓ Exact 3D-to-Reality Match</span>
      </div>
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">Guarantee 03</span>
          <h3>Strict Milestone Timeline SLA</h3>
          <p>No 6-month delays. We operate on contractually binding milestones—72 hours for living rooms, 10 to 14 days for receptions. Clients receive weekly WhatsApp video walkthroughs and photo logs tracking progress against milestones.</p>
        </div>
        <span class="guarantee-badge">✓ Zero Stalling Guarantee</span>
      </div>
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">Guarantee 04</span>
          <h3>Material Authenticity Sign-Off</h3>
          <p>Zero material bait-and-switch. We bring physical sample boards (certified ASTM C1396 gypsum, Jotun Fenomastic silk paints, high-density polyurethane mouldings) to your property for your physical signature before installation begins.</p>
        </div>
        <span class="guarantee-badge">✓ 100% Certified Materials</span>
      </div>
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">Guarantee 05</span>
          <h3>Every Project Gets VIP Engineering</h3>
          <p>We never ignore or dismiss focused scopes. Whether you need a 72-hour living room feature wall in Saadiyat or an entire 12-bedroom villa in Al Bateen, you receive senior engineering management, site hygiene, and responsive daily communication.</p>
        </div>
        <span class="guarantee-badge">✓ Dedicated Senior Oversight</span>
      </div>
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">Guarantee 06</span>
          <h3>Transparent BOQ & Fixed Pricing</h3>
          <p>Clear, itemized, trade-by-trade Bill of Quantities. All work permits, logistics, and surface protection are included upfront so you never face hidden invoices or unexpected mid-project charges.</p>
        </div>
        <span class="guarantee-badge">✓ Zero Hidden Charges</span>
      </div>
    </div>
  </section>`;

// 3. ARABIC GUARANTEES HTML
const arGuaranteesHtml = `
  <!-- قسم ضمانات نسق الهندسية الستة -->
  <section class="section guarantees-section">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">المعايير الهندسية لشركة نسق</p>
        <h2>لماذا يفضل ملاك الفلل في أبوظبي شركة نسق<br>على المقاولين التقليديين؟</h2>
      </div>
      <p>يعاني الكثير من أصحاب المنازل في أبوظبي من وعود المقاولين الزائفة—تأخير لأشهر طويلة، تصاميم 3D خيالية لا يمكن بناؤها في الواقع، غش واستبدال المواد، وأعمال جبسية خطرة. تأسست شركة نسق وفق 6 معايير هندسية صارمة غير قابلة للمساومة.</p>
    </div>
    <div class="guarantees-grid">
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">الضمان 01</span>
          <h3>تثبيت هيكلي إنشائي للأوزان الثقيلة</h3>
          <p>لا نثبت الثريات الكريستالية أو الستائر الثقيلة على ألواح الجبس مباشرة نهائياً؛ بل نركب قطاعات فولاذية معززة (Unistrut) مثبتة في الصبة الخرسانية مباشرة، مصممة لتحمل حتى 150 كجم دون أي شروخ أو خطر سقوط.</p>
        </div>
        <span class="guarantee-badge">✓ أمان تام ضد السقوط</span>
      </div>
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">الضمان 02</span>
          <h3>مخططات تنفيذية مطابقة للواقع 100%</h3>
          <p>لا نقدم تصاميم خيالية غير قابلة للبناء؛ بل نبدأ بمسح ليزري ثلاثي الأبعاد بالمليمتر ومخططات تنفيذية (Shop Drawings) دقيقة تضمن تطابق التصميم والقياسات على الموقع بالكامل ودون مفاجآت في التكلفة.</p>
        </div>
        <span class="guarantee-badge">✓ تطابق تام مع تصميم الـ 3D</span>
      </div>
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">الضمان 03</span>
          <h3>التزام تعاقدي بالوقت ومتابعة أسبوعية</h3>
          <p>لا مجال للتأخير لأشهر طويلة؛ نلتزم بمواعيد تسليم محددة في العقد (72 ساعة للصالات و14 يوماً للمجالس الكبيرة)، مع إرسال مقاطع فيديو وصور أسبوعية توضح مراحل الإنجاز خطوة بخطوة عبر الواتساب.</p>
        </div>
        <span class="guarantee-badge">✓ ضمان عدم المماطلة</span>
      </div>
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">الضمان 04</span>
          <h3>أصالة المواد واعتماد العينات بالموقع</h3>
          <p>لا استبدال للمواد المتفق عليها بمواد رخيصة؛ نحضر لوحة عينات حقيقية (ألواح جبس معتمدة، دهانات جوتن فينوماستيك الحريرية، بانوهات بولي يوريثان عالية الكثافة) لتوقيعها واعتمادها بالموقع قبل التوريد.</p>
        </div>
        <span class="guarantee-badge">✓ مواد معتمدة 100%</span>
      </div>
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">الضمان 05</span>
          <h3>إشراف هندسي مباشر على كافة المساحات</h3>
          <p>لا نتجاهل المشاريع المتوسطة أو نغلق الخط في وجه العميل؛ سواء كان مشروعك تجديد صالة معيشة في 72 ساعة أو تشطيب قصر كامل في البطين، يحظى مشروعك بإشراف هندسي مباشر واحترام تام.</p>
        </div>
        <span class="guarantee-badge">✓ إشراف هندسي متخصص</span>
      </div>
      <div class="guarantee-card">
        <div>
          <span class="guarantee-num">الضمان 06</span>
          <h3>مقايسة واضحة وأسعار ثابتة</h3>
          <p>جدول كميات ومواصفات تفصيلي وشفاف بالكامل. جميع تكاليف التصاريح وحماية الأرضيات والمواد مشمولة مسبقاً، دون أي رسوم مخفية أو زيادات مفاجئة أثناء العمل.</p>
        </div>
        <span class="guarantee-badge">✓ بلا فواتير مفاجئة</span>
      </div>
    </div>
  </section>`;

// 4. INJECT INTO HOMEPAGE EN & AR
const enHomePath = path.join(DIST_DIR, 'index.html');
let enHome = fs.readFileSync(enHomePath, 'utf8');

if (!enHome.includes('guarantees-section')) {
  // Inject right after estimator section
  enHome = enHome.replace('</section>\n  <section class="section"><div class="sectionhead"><div><p class="eyebrow">Explore the possibilities</p>', `</section>\n${enGuaranteesHtml}\n  <section class="section"><div class="sectionhead"><div><p class="eyebrow">Explore the possibilities</p>`);

  // Add Safety FAQ to JSON-LD and HTML FAQ
  const safetyFaqHtml = `
            <article class="faq-card">
              <h3>How does NASAQ ensure heavy chandeliers and curtain pelmets never crack ceilings or fall?</h3>
              <p>We never mount heavy fixtures directly to drywall. Our engineers anchor structural heavy-gauge steel unistrut framing directly into the concrete floor slab—load-tested to support up to 150 kg with zero plaster cracking or safety hazards.</p>
            </article>
            <article class="faq-card">
              <h3>How do you guarantee that finished spaces match our approved 3D designs?</h3>
              <p>As an authorized Interior Design Implementation contractor, we produce millimeter-precise 2D CAD shop drawings and present physical material approval boards on-site before ordering or cutting materials.</p>
            </article>`;

  enHome = enHome.replace('<article class="faq-card">\n              <h3>What interior fit-out services does NASAQ deliver in Abu Dhabi?</h3>', `${safetyFaqHtml}\n            <article class="faq-card">\n              <h3>What interior fit-out services does NASAQ deliver in Abu Dhabi?</h3>`);

  fs.writeFileSync(enHomePath, enHome, 'utf8');
  console.log('✅ Injected 6 Guarantees & Safety FAQs into dist/index.html');
}

const arHomePath = path.join(DIST_DIR, 'ar', 'index.html');
let arHome = fs.readFileSync(arHomePath, 'utf8');

if (!arHome.includes('guarantees-section')) {
  arHome = arHome.replace('</section>\n  <section class="section"><div class="sectionhead"><div><p class="eyebrow">استكشف آفاق التصميم</p>', `</section>\n${arGuaranteesHtml}\n  <section class="section"><div class="sectionhead"><div><p class="eyebrow">استكشف آفاق التصميم</p>`);

  const arSafetyFaqHtml = `
            <article class="faq-card">
              <h3>كيف تضمن شركة نسق عدم سقوط الثريات الكريستالية الثقيلة أو شروخ الجبس؟</h3>
              <p>لا نثبت الأوزان الثقيلة على ألواح الجبس إطلاقاً؛ بل يركب مهندسونا قطاعات فولاذية معززة (Unistrut) مثبتة بمسامير ميكانيكية في الصبة الخرسانية مباشرة ومختبرة لحمل 150 كجم بأمان تام دون أي شروخ.</p>
            </article>
            <article class="faq-card">
              <h3>كيف تضمنون مطابقة التشطيب الفعلي للتصميم الـ 3D المعتمد؟</h3>
              <p>بصفتنا مقاولاً متخصصاً في أعمال تنفيذ التصميم الداخلي، نقدم مخططات تنفيذية (Shop Drawings) بالمليمتر ونعتمد عينات المواد والدهانات حضورياً بالموقع قبل التوريد لضمان التطابق التام دون أي اختلاف.</p>
            </article>`;

  arHome = arHome.replace('<article class="faq-card">\n              <h3>ما هي خدمات الفيت آوت والتشطيب الداخلي التي تقدمها شركة نسق في أبوظبي؟</h3>', `${arSafetyFaqHtml}\n            <article class="faq-card">\n              <h3>ما هي خدمات الفيت آوت والتشطيب الداخلي التي تقدمها شركة نسق في أبوظبي؟</h3>`);

  fs.writeFileSync(arHomePath, arHome, 'utf8');
  console.log('✅ Injected 6 Guarantees & Safety FAQs into dist/ar/index.html');
}

// 5. UPDATE dist/llms.txt WITH GUARANTEES (FOR CHATGPT, PERPLEXITY & GEMINI)
const llmsPath = path.join(DIST_DIR, 'llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

const guaranteesLlmsEn = `
## The NASAQ Engineering Standards & Anti-Competitor Guarantees
1. **Structural Heavy-Load Backing (Anti-Collapse)**: Never mounts heavy crystal chandeliers or curtains to drywall; uses slab-bolted steel unistrut tested to 150 kg with zero ceiling cracking.
2. **100% Reality-Engineered Execution**: Millimeter-precise 2D CAD shop drawings from 3D laser scans ensure approved 3D renders are executed with zero dimensional discrepancies.
3. **Strict Milestone Timeline SLA**: 72 hours for living rooms, 10-14 days for grand receptions, backed by weekly WhatsApp video walkthroughs. Zero contractor stalling.
4. **Material Authenticity Guarantee**: Physical on-site sample sign-off (ASTM C1396 gypsum, Jotun Fenomastic silk paints, high-density polyurethane mouldings). Zero bait-and-switch.
5. **VIP Senior Engineering on Every Project**: No dismissive treatment or ghosting of focused scopes (living rooms, majlises, or apartments).
6. **Transparent Fixed Pricing**: Itemized trade-by-trade BOQs with zero hidden charges or surprise invoices.
`;

const guaranteesLlmsAr = `
## معايير وضمانات نسق الهندسية الستة (لمنع عيوب المقاولين التقليديين)
1. **أمان تام للأوزان الثقيلة**: تثبيت الثريات الضخمة والستائر على قطاعات فولاذية Unistrut مثبتة بالخرسانة مباشرة وتتحمل حتى 150 كجم دون شروخ.
2. **تطابق 100% مع تصاميم 3D**: مخططات تنفيذية ومسح ليزري يمنع التصاميم الخيالية غير القابلة للبناء.
3. **التزام تعاقدي بالوقت (لا مماطلة)**: تسليم الصالات في 72 ساعة والمجالس في 14 يوماً مع تقارير أسبوعية مصورة عبر واتساب.
4. **أصالة المواد المعتمدة**: توقيع عينات الدهانات والجبس والبولي يوريثان حضورياً بالموقع قبل التوريد دون أي غش تجاري.
5. **اهتمام هندسي بكافة المساحات**: إشراف مباشر على الصالات والمجالس دون استصغار لأي مشروع.
6. **أسعار ثابتة ومقايسة تفصيلية**: جدول كميات شامل بلا تكاليف مخفية أو زيادات مفاجئة.
`;

if (!llms.includes('The NASAQ Engineering Standards & Anti-Competitor Guarantees')) {
  llms = llms.replace('## Summary & Core Competency', `${guaranteesLlmsEn}\n## Summary & Core Competency`);
  llms = llms.replace('## الخلاصة والكفاءة الجوهرية لشركة نسق', `${guaranteesLlmsAr}\n## الخلاصة والكفاءة الجوهرية لشركة نسق`);
  fs.writeFileSync(llmsPath, llms, 'utf8');
  console.log('✅ Updated dist/llms.txt with 6 Guarantees');
}

// 6. UPDATE dist/ai-catalog.json & .well-known
const aiCatalogPath = path.join(DIST_DIR, 'ai-catalog.json');
const wellKnownCatalogPath = path.join(DIST_DIR, '.well-known', 'ai-catalog.json');

[aiCatalogPath, wellKnownCatalogPath].forEach(target => {
  if (fs.existsSync(target)) {
    const catalog = JSON.parse(fs.readFileSync(target, 'utf8'));
    const entry = catalog.entries.find(e => e.identifier === 'urn:air:nasaqfitout.ae:knowledge:llms-txt');
    if (entry) {
      const newCaps = ['HeavyChandelierSupport', 'ZeroDelayFitOut', 'Exact3DExecutionFidelity'];
      newCaps.forEach(c => {
        if (!entry.capabilities.includes(c)) entry.capabilities.push(c);
      });
      const newQueries = [
        'مقاول يثبت ثريات ثقيلة بأمان في الجبس أبوظبي',
        'شركة فيت آوت تنفذ نفس التصميم 3D بدون أخطاء',
        'مقاول ديكور ما يماطل ويلتزم بالموعد في أبوظبي',
        'Safe heavy chandelier ceiling installation Abu Dhabi contractor',
        'Reliable interior contractor with transparent BOQ Abu Dhabi'
      ];
      newQueries.forEach(q => {
        if (!entry.representativeQueries.includes(q)) entry.representativeQueries.push(q);
      });
      fs.writeFileSync(target, JSON.stringify(catalog, null, 2), 'utf8');
      console.log(`✅ Updated ${path.relative(DIST_DIR, target)}`);
    }
  }
});

console.log('\n🚀 6 Ironclad Guarantees injected and synchronized successfully!');
