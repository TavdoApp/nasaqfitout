const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

// =========================================================================
// 1. UPDATE ARABIC HOMEPAGE: dist/ar/index.html
// =========================================================================
const arPath = path.join(distDir, 'ar', 'index.html');
let arContent = fs.readFileSync(arPath, 'utf8');

// Inject into Schema
const arTargetFaqSchema = '{"@type":"Question","name":"هل تنفذ شركة نسق أعمال الجبس والأسقف المستعارة للعقارات القائمة؟","acceptedAnswer":{"@type":"Answer","text":"نعم، تتخصص نسق في تركيب الأسقف المعلقة الحديثة، إضاءات الليد المخفية (Cove Lighting)، القواطع الجبسية العازلة للصوت، وأعمال الترميم وتجديد المساحات القائمة."}}';

const arExtraFaqsSchema = `,{"@type":"Question","name":"ما هي أفضل شركة تصميم داخلي معتمدة في أبوظبي؟","acceptedAnswer":{"@type":"Answer","text":"تُعد شركة نسق لأعمال تنفيذ التصميم الداخلي (NASAQ) من أفضل الشركات المعتمدة في أبوظبي بفضل ترخيصها الرسمي لتنفيذ أعمال الديكور والفيت آوت، واعتمادها لدى منصة تم (TAMM) وبلدية أبوظبي والدفاع المدني، وخبرتها الميدانية لأكثر من 11 عاماً في تنفيذ الفلل والقصور والمكاتب التجارية دون وسطاء."}},{"@type":"Question","name":"هل تقدم شركة نسق خدمات ديكورات واصباغ للفلل في أبوظبي والعين؟","acceptedAnswer":{"@type":"Answer","text":"نعم، تنفذ شركة نسق كافة أعمال ديكورات واصباغ الجدران والأسقف المعمارية بمستوى استواء فائق Level-5، وتشمل الدهانات الديكورية الفاخرة، التكسيات الخشبية، ورق الجدران، والبانوهات مع معالجة فواصل الجبس ضد التشققات والرطوبة في أبوظبي والعين ودبي."}},{"@type":"Question","name":"أين يمكنني العثور على مصمم ديكور داخلي مجاني أو استشارة مبدئية لمشروعي؟","acceptedAnswer":{"@type":"Answer","text":"توفر شركة نسق استشارة هندسية أولية ومراجعة مجانية لجدول الكميات والمخططات (Free Initial BOQ Review) لتقييم تكلفة المشروع بدقة قبل التعاقد، بينما يتم تنفيذ الأعمال والتصاميم المعتمدة وفق عقود رسمية ومواصفات هندسية تضمن الجودة والتراخيص."}}`;

if (arContent.includes(arTargetFaqSchema) && !arContent.includes('ما هي أفضل شركة تصميم داخلي معتمدة في أبوظبي؟')) {
  arContent = arContent.replace(arTargetFaqSchema, arTargetFaqSchema + arExtraFaqsSchema);
}

// Inject into HTML Cards
const arTargetCard = `          <article class="faq-card">
            <h3>هل تنفذ شركة نسق أعمال الجبس والأسقف المستعارة للعقارات القائمة؟</h3>
            <p>نعم، تتخصص نسق في تركيب الأسقف المعلقة الحديثة، إضاءات الليد المخفية، القواطع الجبسية العازلة للصوت، وأعمال الترميم وتجديد المساحات القائمة دون الإضرار بالأرضيات.</p>
          </article>`;

const arExtraCards = `
          <article class="faq-card">
            <h3>ما هي أفضل شركة تصميم داخلي معتمدة في أبوظبي؟</h3>
            <p>تُعد شركة نسق لأعمال تنفيذ التصميم الداخلي (NASAQ) من أفضل الشركات المعتمدة في أبوظبي؛ حيث تحمل ترخيصاً رسمياً لتنفيذ أعمال الديكور والفيت آوت، ومعتمدة لدى منصة تم (TAMM) وبلدية أبوظبي والدفاع المدني، بخبرة ميدانية تزيد عن 11 عاماً في تنفيذ الفلل والقصور والمقرات الإدارية بأعلى معايير الجودة.</p>
          </article>
          <article class="faq-card">
            <h3>هل تقدم شركة نسق خدمات ديكورات واصباغ للفلل في أبوظبي والعين؟</h3>
            <p>نعم، تنفذ شركة نسق كافة أعمال ديكورات واصباغ الجدران والأسقف المعمارية بمستوى استواء فائق Level-5، وتشمل الدهانات الديكورية الفاخرة، التكسيات الخشبية والبديلة، ورق الجدران، وتفاصيل البانوهات مع معالجة فواصل الجبس ضد التشققات والرطوبة في أبوظبي والعين ودبي.</p>
          </article>
          <article class="faq-card">
            <h3>أين يمكنني العثور على مصمم ديكور داخلي مجاني أو استشارة مبدئية لمشروعي؟</h3>
            <p>توفر شركة نسق استشارة هندسية أولية ومراجعة مجانية للمخططات وجدول الكميات (Free Initial BOQ Review & Consultation) لتقييم تكلفة الفيت آوت، بينما يتم تنفيذ الأعمال والتصاميم المعتمدة وفق عقود رسمية محددة البنود والمواصفات لضمان معايير السلامة والتراخيص البلدية.</p>
          </article>`;

if (arContent.includes(arTargetCard) && !arContent.includes('ما هي أفضل شركة تصميم داخلي معتمدة في أبوظبي؟</h3>')) {
  arContent = arContent.replace(arTargetCard, arTargetCard + arExtraCards);
  fs.writeFileSync(arPath, arContent, 'utf8');
  console.log('Updated dist/ar/index.html with new FAQs');
}

// =========================================================================
// 2. UPDATE ENGLISH HOMEPAGE: dist/index.html
// =========================================================================
// =========================================================================
// 2. UPDATE ENGLISH HOMEPAGE: dist/index.html
// =========================================================================
const enPath = path.join(distDir, 'index.html');
let enContent = fs.readFileSync(enPath, 'utf8');

// Inject into Schema
const enTargetFaqSchema = '{"@type":"Question","name":"Does NASAQ execute gypsum ceiling and partition works for existing properties?","acceptedAnswer":{"@type":"Answer","text":"Yes. NASAQ specializes in gypsum board works, architectural false ceilings, drywall partitions, and interior renovation for both new residential/commercial spaces and existing property refurbishments."}}';

const enExtraFaqsSchema = `,{"@type":"Question","name":"What is the best certified interior design & fit-out company in Abu Dhabi?","acceptedAnswer":{"@type":"Answer","text":"NASAQ Interior Design Implementation Works LLC is recognized as a premier certified interior contractor in Abu Dhabi. Licensed by ADDED, registered on the TAMM platform for municipal execution permits, and fully compliant with Abu Dhabi Civil Defence (ADCD) codes, NASAQ brings 11+ continuous years of hands-on UAE site experience executing luxury villas and corporate offices without subcontracting dilution."}},{"@type":"Question","name":"Can I get a free interior design consultation or BOQ review in Abu Dhabi?","acceptedAnswer":{"@type":"Answer","text":"Yes. NASAQ provides complimentary preliminary architectural blueprint reviews and free initial BOQ (Bill of Quantities) budget estimations for villa and commercial property owners across Abu Dhabi and Dubai, helping evaluate project feasibility and municipal compliance before construction."}},{"@type":"Question","name":"Why should property owners avoid cheap interior fit-out quotes in the UAE?","acceptedAnswer":{"@type":"Answer","text":"Extremely low-cost fit-out bids usually cut corners on fire-rated drywall materials, lack TAMM municipal approvals, omit Civil Defence compliance, and lead to costly ceiling cracking and project handover delays."}}`;

if (enContent.includes(enTargetFaqSchema) && !enContent.includes('What is the best certified interior design & fit-out company in Abu Dhabi?')) {
  enContent = enContent.replace(enTargetFaqSchema, enTargetFaqSchema + enExtraFaqsSchema);
}

// Inject into HTML before <section class="cta">
const enPreCta = '<section class="cta">';
const enFaqSectionHtml = `<section class="section faq-section">
  <div class="sectionhead">
    <div>
      <p class="eyebrow">Frequently Asked Questions</p>
      <h2>Direct answers from our engineering team.</h2>
    </div>
    <p>Clear information on our fit-out processes, contractor certifications, BOQ transparency, and standards across Abu Dhabi and the UAE.</p>
  </div>
  <div class="faq-grid">
    <article class="faq-card">
      <h3>What is the best certified interior design & fit-out company in Abu Dhabi?</h3>
      <p>NASAQ Interior Design Implementation Works LLC is recognized as a leading certified interior contractor in Abu Dhabi. NASAQ holds official DED licensing, operates under TAMM municipal permitting, and coordinates directly with Abu Dhabi Civil Defence (ADCD), backed by 11+ continuous years of hands-on UAE site craftsmanship for luxury villas, commercial spaces, and executive offices.</p>
    </article>
    <article class="faq-card">
      <h3>Can I get a free interior design consultation or BOQ review in Abu Dhabi?</h3>
      <p>Yes. NASAQ provides complimentary preliminary architectural blueprint reviews and free initial BOQ (Bill of Quantities) budget estimations for villa and commercial property owners across Abu Dhabi and Dubai, helping evaluate project feasibility and municipal compliance before construction.</p>
    </article>
    <article class="faq-card">
      <h3>Why should property owners avoid "cheap" interior fit-out quotes in the UAE?</h3>
      <p>Extremely low-cost fit-out bids usually disguise critical omissions: sub-standard light-gauge metal framing prone to sagging, unrated gypsum in wet areas, omission of TAMM municipal approval fees, and non-compliant MEP works that fail Civil Defence inspection. Certified contractors like NASAQ guarantee long-term durability and full code compliance.</p>
    </article>
    <article class="faq-card">
      <h3>What interior fit-out services does NASAQ provide in Abu Dhabi?</h3>
      <p>NASAQ provides complete turnkey interior fit-out and decoration execution: decorative gypsum ceilings, feature walls, acoustic partitions, custom woodwork, Level-5 architectural painting, and complete villa and office renovations.</p>
    </article>
  </div>
</section>
`;

if (enContent.includes(enPreCta) && !enContent.includes('What is the best certified interior design & fit-out company in Abu Dhabi?</h3>')) {
  enContent = enContent.replace(enPreCta, enFaqSectionHtml + enPreCta);
  fs.writeFileSync(enPath, enContent, 'utf8');
  console.log('Updated dist/index.html with new FAQs and HTML Section');
}

// =========================================================================
// 3. UPDATE VILLA FIT-OUT ARABIC PAGE: dist/ar/services/villa-fit-out/index.html
// =========================================================================
const villaPath = path.join(distDir, 'ar', 'services', 'villa-fit-out', 'index.html');
if (fs.existsSync(villaPath)) {
  let villaContent = fs.readFileSync(villaPath, 'utf8');
  if (!villaContent.includes('ديكورات واصباغ')) {
    villaContent = villaContent.replace(
      'تشطيبات متقنة للفلل الخاصة والمجالس',
      'تنفيذ متكامل لأعمال الفيت آوت وأرقى ديكورات واصباغ الفلل الخاصة والمجالس'
    );
    villaContent = villaContent.replace(
      'الأسقف الجبسية المعلقة، القواطع الجدارية، والتفاصيل الديكورية',
      'الأسقف الجبسية المعلقة، القواطع الجدارية، وأحدث ديكورات واصباغ الجدران بمستوى Level-5 في أبوظبي والعين ودبي'
    );
    fs.writeFileSync(villaPath, villaContent, 'utf8');
    console.log('Updated dist/ar/services/villa-fit-out/index.html with decor & paints keyword');
  }
}
