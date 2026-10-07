const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const enInsightsDir = path.join(distDir, 'insights');
const arInsightsDir = path.join(distDir, 'ar', 'insights');

[enInsightsDir, arInsightsDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Common Entities
const businessEntityEn = {
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://nasaqfitout.ae/#business",
  "name": "NASAQ Interior Design Implementation Works – L.L.C – S.P.C",
  "url": "https://nasaqfitout.ae/",
  "logo": "https://nasaqfitout.ae/assets/logo.svg",
  "telephone": "+971505334861",
  "email": "info@nasaqfitout.ae"
};

const businessEntityAr = {
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://nasaqfitout.ae/#business",
  "name": "شركة نسق لأعمال تنفيذ التصميم الداخلي ذ.م.م",
  "url": "https://nasaqfitout.ae/ar/",
  "logo": "https://nasaqfitout.ae/assets/logo.svg",
  "telephone": "+971505334861",
  "email": "info@nasaqfitout.ae"
};

// 5 Pillar Articles Data
const articles = [
  {
    slug: "interior-fit-out-cost-uae-guide",
    badgeEn: "Cost & Budgeting Guide 2026",
    badgeAr: "دليل التكلفة والميزانية 2026",
    image: "/assets/cost-guide.jpg",
    readTimeEn: "8 min read",
    readTimeAr: "قراءة 8 دقائق",
    date: "2026-03-15",
    
    // English Content
    titleEn: "Interior Fit-Out Cost Guide in the UAE (2026): Abu Dhabi & Dubai Rates",
    descEn: "Comprehensive guide to interior fit-out costs per sqft in Abu Dhabi and Dubai. Cost benchmarks for villas, offices, and retail, plus key cost drivers and hidden fees.",
    summaryEn: "A realistic breakdown of fit-out costs per square foot in the UAE, covering shell & core vs. fitted upgrades, bespoke joinery, MEP modifications, and authority approval budgets.",
    contentHtmlEn: `
      <p class="article-lead">Understanding interior fit-out costs in the UAE is one of the most critical steps before embarking on any residential or commercial interior project in Abu Dhabi or Dubai.</p>
      
      <p>Whether you are fitting out a private luxury villa on Saadiyat Island, modernizing a commercial office in Downtown Dubai, or opening a retail venue in Abu Dhabi Mall, interior fit-out costs depend on existing site handover conditions, material specifications, and regulatory compliance requirements.</p>

      <h2>Average Interior Fit-Out Rates in the UAE (2026 Market Benchmark)</h2>
      <p>Fit-out rates across the UAE generally fall into three distinct quality tiers based on square footage (sqft) or square meters (sqm):</p>

      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Fit-Out Quality Level</th>
              <th>Average Cost (AED / Sq. Ft.)</th>
              <th>Average Cost (AED / Sq. Meter)</th>
              <th>Typical Scope & Finishes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Standard / Basic Fit-Out</strong></td>
              <td>AED 250 – AED 450</td>
              <td>AED 2,700 – AED 4,850</td>
              <td>Standard drywall partitions, flat gypsum ceilings, basic commercial carpet or porcelain tiles, standard lighting.</td>
            </tr>
            <tr>
              <td><strong>Mid to High-End Fit-Out</strong></td>
              <td>AED 500 – AED 850</td>
              <td>AED 5,380 – AED 9,150</td>
              <td>Multi-tiered gypsum ceilings, concealed warm LED cove lighting, acoustic glass partitions, engineered wood flooring, custom joinery.</td>
            </tr>
            <tr>
              <td><strong>Ultra-Luxury / Turnkey Villa</strong></td>
              <td>AED 900 – AED 1,400+</td>
              <td>AED 9,680 – AED 15,000+</td>
              <td>Imported Italian marble, bookmatched travertine, bespoke architectural metalwork, high-end acoustic zoning, automated shading.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Primary Drivers of Fit-Out Costs in the UAE</h2>
      <p>When our estimating team at NASAQ reviews a project Bill of Quantities (BOQ), four primary factors dictate the final cost:</p>

      <h3>1. Initial Handover Condition (Shell & Core vs. Fitted)</h3>
      <p>Units delivered in "Shell and Core" condition require substantial capital investment because they lack flooring, ceiling framing, secondary electrical distribution, and HVAC ducts. In contrast, semi-fitted spaces require only layout reconfiguration, ceiling detailing, and surface finishing.</p>

      <h3>2. Ceiling Complexity & Gypsum Board Detailing</h3>
      <p>Simple flat false ceilings are economical, but luxury UAE villas typically demand multi-level ceiling bulkheads, recessed curtain pockets, integrated AC linear slot diffusers, and shadow-gap perimeter details requiring Level-5 plaster finishing.</p>

      <h3>3. Mechanical, Electrical & Plumbing (MEP) Modifications</h3>
      <p>Relocating chilled water fan coil units (FCUs), adding dedicated circuits, or reconfiguring fire sprinklers to align with new partition layouts accounts for 25% to 40% of the total fit-out budget.</p>

      <h3>4. Authority Approvals & Building Management Fees</h3>
      <p>Permit applications via Abu Dhabi's TAMM portal, Abu Dhabi Civil Defence (ADCD) approvals, and developer security deposits (such as Aldar or Provis) require dedicated budget allocations before site work begins.</p>

      <div class="callout">
        <h4>Practical Recommendation from NASAQ's Team</h4>
        <p>Always maintain a 10% to 15% contingency reserve in your fit-out budget for unforeseen site conditions, particularly behind existing ceiling voids or concealed plumbing risers.</p>
      </div>
    `,
    faqsEn: [
      {
        q: "What is typically included in a turnkey fit-out quote in the UAE?",
        a: "A comprehensive fit-out quote includes site preparation, gypsum false ceilings, drywall partitions, MEP modifications, surface plastering and Level-5 painting, flooring installation, and authority approvals coordination."
      },
      {
        q: "How much does a villa interior fit-out cost in Abu Dhabi?",
        a: "Villa fit-out costs typically range from AED 350 to AED 750 per square foot for standard to high-end finishes, and AED 800 to AED 1,400+ per square foot for bespoke luxury finishes involving imported marble and custom millwork."
      },
      {
        q: "Why should clients avoid choosing the lowest fit-out bid?",
        a: "Low bids frequently suffer from 'scope gaps'—omitting crucial MEP items, surface preparation, or authority fees—which lead to costly variations, delayed handovers, and inferior materials."
      },
      {
        q: "How can I obtain a precise fit-out estimate for my project?",
        a: "You can share your architectural drawings and Bill of Quantities (BOQ) with NASAQ via WhatsApp (+971 50 533 4861) or email (info@nasaqfitout.ae) for a detailed, itemized quotation within 24 to 48 hours."
      }
    ],

    // Arabic Content
    titleAr: "دليل تكلفة الفيت آوت والتشطيب الداخلي في الإمارات (2026): أسعار أبوظبي ودبي",
    descAr: "دليل شامل لاحتساب تكاليف الفيت آوت والتشطيب الداخلي للمتر المربع والقدم المربع في أبوظبي ودبي. مقارنة أسعار الفلل والمكاتب والمحلات وأهم العوامل المؤثرة.",
    summaryAr: "تحليل دقيق لتكاليف الفيت آوت والتشطيب الداخلي في دولة الإمارات، يوضح متوسط الأسعار للقدم والمتر المربع، والفرق بين المساحات العظم والمشطبة، وتكاليف التراخيص والجبس والمواد.",
    contentHtmlAr: `
      <p class="article-lead">يعد تقدير تكلفة أعمال الفيت آوت والتشطيب الداخلي في دولة الإمارات العربية المتحدة الخطوة الجوهرية الأولى لضمان نجاح أي مشروع سكني أو تجاري في أبوظبي أو دبي.</p>
      
      <p>سواء كنت تخطط لتشطيب فيلا خاصة في جزيرة السعديات أو مدينة خليفة، أو تأسيس مقر إداري لشركتك في الخليج التجاري، أو افتتاح متجر تجاري في أحد مولات العاصمة، فإن التكلفة الإجمالية تتحدد بناءً على حالة تسليم العقار، ونوعية المواد المعتمدة، ومتطلبات الاعتمادات الرسمية.</p>

      <h2>متوسط أسعار الفيت آوت في الإمارات (معايير سوق 2026)</h2>
      <p>تنقسم أسعار التشطيب الداخلي في السوق الإماراتي إلى ثلاث فئات رئيسية بناءً على مساحة القدم المربع أو المتر المربع:</p>

      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>مستوى التشطيب</th>
              <th>متوسط التكلفة (درهم / قدم مربع)</th>
              <th>متوسط التكلفة (درهم / متر مربع)</th>
              <th>نطاق الأعمال والمواد المعتمدة</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>تشطيب قياسي / أساسي</strong></td>
              <td>250 – 450 درهم</td>
              <td>2,700 – 4,850 درهم</td>
              <td>قواطع جبسية عادية، أسقف مستوية بسيطة، أرضيات بورسلين أو موكيت تجاري، تمديدات كهربائية وإنارة قياسية.</td>
            </tr>
            <tr>
              <td><strong>تشطيب راقٍ ومتميز</strong></td>
              <td>500 – 850 درهم</td>
              <td>5,380 – 9,150 درهم</td>
              <td>أسقف جبسية متعددة المستويات، تجاويف إضاءة مخفية دافئة، قواطع زجاجية وجبسية عازلة للصوت، خشب طبيعي وأعمال نجارة مخصصة.</td>
            </tr>
            <tr>
              <td><strong>فيت آوت فاخر للفلل والبنتهاوس</strong></td>
              <td>900 – 1,400+ درهم</td>
              <td>9,680 – 15,000+ درهم</td>
              <td>رخام إيطالي طبيعي، حجر ترافرتين، تكسيات جدارية خشبية فاخرة، عزل صوتي متقدم، أنظمة إنارة ذكية.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>أبرز العوامل المؤثرة في تكلفة الفيت آوت بالإمارات</h2>
      <p>عندما يقوم فريق التسعير في شركة نسق بدراسة جداول الكميات (BOQ)، نأخذ في الاعتبار أربعة عوامل رئيسية تحسم الميزانية:</p>

      <h3>1. حالة تسليم المساحة (عظم Shell & Core مقابل شبه مشطب)</h3>
      <p>المساحات المستلمة "عظم" تتطلب ميزانية أعلى لأنها تخلو تماماً من الأرضيات والأسقف ومجاري التكييف والتمديدات الكهربائية الفرعية، بينما المساحات المجهزة مسبقاً تحتاج فقط لإعادة ترتيب وتطوير التشطيبات السطحية.</p>

      <h3>2. هندسة الأسقف وتفاصيل الجبس بورد</h3>
      <p>الأسقف المستوية البسيطة تعتبر اقتصادية، بينما تتطلب الفلل والمقرات الفاخرة أسقفاً معمارية متدرجة، وصناديق ستائر مدمجة، ومخارج تكييف خطية (Linear Diffusers)، وفواصل ظلال (Shadow Gaps) تحتاج إلى معجون وصنفرة دقيقة بمستوى Level-5.</p>

      <h3>3. التعديلات الكهروميكانيكية (MEP)</h3>
      <p>نقل وحدات التكييف (FCUs) أو تعديل شبكات رشاشات الحريق لتتوافق مع القواطع الجديدة يمثل ما بين 25% إلى 40% من ميزانية التشطيب في المشروعات الإدارية والتجارية.</p>

      <h3>4. رسوم التراخيص وتأمينات إدارة المبنى</h3>
      <p>تقديم المعاملات عبر منصة "تم" في أبوظبي، واعتمادات الدفاع المدني، والودائع التأمينية للمطورين (مثل الدار أو بروفيس) تتطلب تخصيص بند مالي واضح قبل انطلاق العمل بالموقع.</p>

      <div class="callout">
        <h4>نصيحة هندسية من فريق شركة نسق</h4>
        <p>احرص دائماً على تخصيص احتياطي طوارئ بنسبة 10% إلى 15% من الميزانية لتغطية أي مفاجآت تظهر أثناء الكشف على مجاري التكييف أو التمديدات المخفية داخل الأسقف القائمة.</p>
      </div>
    `,
    faqsAr: [
      {
        q: "ما الذي يشمله عرض أسعار الفيت آوت المتكامل في الإمارات؟",
        a: "يشمل العرض المتكامل أعمال الموقع: الأسقف المستعارة، القواطع الجبسية، التعديلات الكهروميكانيكية، التلييس والدهانات بمستوى Level-5، الأرضيات، وتنسيق التراخيص الرسمية."
      },
      {
        q: "كم تبلغ تكلفة تشطيب الفيلا في أبوظبي؟",
        a: "تتراوح تكلفة فيت آوت الفلل عادة بين 350 إلى 750 درهماً للقدم المربع للتشطيبات الراقية، وترتفع إلى 900 حتى 1,400+ درهم للقدم في حالات التشطيب الفاخر بالرخام الطبيعي والتكسيات الخشبية."
      },
      {
        q: "لماذا يحذر الخبراء من اختيار أرخص عروض الأسعار؟",
        a: "غالباً ما يعتمد السعر المنخفض جداً على إسقاط بنود أساسية أو استخدام مواد ضعيفة، مما يؤدي إلى مطالبات مالية إضافية أثناء التنفيذ وتأخير في موعد التسليم النهائي."
      },
      {
        q: "كيف أحصل على تسعير مفصل لمشروعي؟",
        a: "يمكنك إرسال المخططات المعمارية وجدول الكميات (BOQ) مباشرة لفريق نسق عبر الواتساب (0505334861 971+) أو البريد (info@nasaqfitout.ae) للحصول على دراسة تفصيلية خلال 24-48 ساعة."
      }
    ]
  },

  {
    slug: "abu-dhabi-fit-out-approvals-noc-guide",
    badgeEn: "Regulations & Approvals Guide",
    badgeAr: "دليل التراخيص والاشتراطات",
    image: "/assets/approvals-guide.jpg",
    readTimeEn: "7 min read",
    readTimeAr: "قراءة 7 دقائق",
    date: "2026-03-20",
    
    // English Content
    titleEn: "Abu Dhabi Fit-Out Approvals & NOC Guide: TAMM, Municipality & Civil Defence",
    descEn: "Complete roadmap to obtaining fit-out permits in Abu Dhabi. Learn the TAMM portal process, Department of Municipalities and Transport (DMT) rules, ADCD fire safety, and developer NOCs.",
    summaryEn: "A step-by-step regulatory manual for homeowners and businesses navigating fit-out approvals, landlord NOCs, and civil defence compliance in Abu Dhabi.",
    contentHtmlEn: `
      <p class="article-lead">Securing proper statutory approvals and No Objection Certificates (NOCs) is a mandatory legal prerequisite before starting any interior fit-out project in Abu Dhabi.</p>
      
      <p>Commencing site works without approved municipality permits risks hefty municipal fines, stop-work notices, and delays in connecting utility services. Here is the step-by-step roadmap practiced by NASAQ's engineering team across Abu Dhabi sites.</p>

      <h2>1. The Four Layers of Fit-Out Approvals in Abu Dhabi</h2>
      <p>Fit-out authorization in the emirate is categorized into four sequential tiers:</p>

      <h3>Layer 1: Master Developer / Landlord NOC</h3>
      <p>Before municipal submission, you must obtain a formal NOC from the property management or master developer (such as Aldar Properties for Yas Island and Saadiyat Island, Modon, or Provis). Developers verify that proposed architectural modifications do not exceed structural load limits or disrupt common building services.</p>

      <h3>Layer 2: Department of Municipalities and Transport (DMT) via TAMM</h3>
      <p>Official building and renovation permits are processed online through Abu Dhabi's unified government portal, <strong>TAMM</strong>. Non-structural interior works, drywall additions, and ceiling remodelling fall under the streamlined <em>Minor Works Permit</em> category.</p>

      <h3>Layer 3: Abu Dhabi Civil Defence (ADCD) Fire Safety Clearance</h3>
      <p>Any project modifying partition layouts, ceiling heights, or emergency egress routes requires ADCD engineering review. Key compliance points include maintaining sprinkler discharge cones, smoke detector spacing, and using Class-A fire-rated gypsum boards.</p>

      <h3>Layer 4: Abu Dhabi Distribution Company (ADDC)</h3>
      <p>If your project involves increasing connected electrical loads or altering main distribution boards (MDB/SMDB), an electrical approval from ADDC must be secured.</p>

      <h2>Mandatory Engineering Drawings Required for Submission</h2>
      <p>To avoid rejection or delays, your fit-out package submitted to TAMM must include approved architectural and MEP sets:</p>
      <ul>
        <li><strong>Architectural Demolition & Proposed Layout:</strong> Dimensioned floor plans showing existing vs. proposed partitions.</li>
        <li><strong>Reflected Ceiling Plan (RCP):</strong> Comprehensive ceiling layout displaying gypsum bulkheads, access panels, and lighting tracks.</li>
        <li><strong>MEP Engineering Set:</strong> HVAC diffuser layouts, electrical load schedules, and plumbing schematics.</li>
        <li><strong>Material Technical Data Sheets:</strong> Certification verifying ASTM C1396 compliance and fire propagation ratings.</li>
      </ul>

      <div class="callout">
        <h4>Typical Approval Timeframes in Abu Dhabi</h4>
        <p>Developer NOCs generally take 5 to 10 working days. DMT minor works approval via TAMM takes 3 to 7 working days, while ADCD inspections take 5 to 10 working days. Plan for a 3 to 4 week total approval window before commencing physical demolition.</p>
      </div>
    `,
    faqsEn: [
      {
        q: "Do I need a municipality permit to renovate my private villa in Abu Dhabi?",
        a: "Yes. Non-structural alterations, ceiling upgrades, and partition installations require a Minor Works Permit issued through the TAMM portal to ensure code compliance and safety."
      },
      {
        q: "Who is responsible for applying for fit-out approvals in Abu Dhabi?",
        a: "Typically, your appointed fit-out contractor or engineering consultant prepares the engineering submittal pack, coordinates drawings, and submits the application through the TAMM platform."
      },
      {
        q: "What causes fit-out permit applications to be rejected?",
        a: "The most common causes are missing reflected ceiling plans (RCP), sprinkler head clashes with new gypsum bulkheads, uncertified partition materials, or lack of developer NOC."
      },
      {
        q: "Does NASAQ assist with authority approvals and developer NOCs?",
        a: "Yes. Our in-house technical team coordinates drawing sets, liaises with developers, and ensures all gypsum, ceiling, and partition specifications meet Abu Dhabi Municipality and Civil Defence criteria."
      }
    ],

    // Arabic Content
    titleAr: "دليل تصاريح الفيت آوت وشهادات عدم الممانعة في أبوظبي: منصة تم والبلدية والدفاع المدني",
    descAr: "الدليل الشامل لاستخراج تصاريح الفيت آوت والتشطيب الداخلي في أبوظبي. خطوات منصة تم، اشتراطات دائرة البلديات والنقل، الدفاع المدني، وشهادات عدم الممانعة من المطورين.",
    summaryAr: "دليل إرشادي مفصل يوضح متطلبات التراخيص الرسمية لأعمال الفيت آوت في إمارة أبوظبي، وكيفية استخراج تصاريح الأعمال البسيطة وموافقات الدفاع المدني وشهادات المطورين.",
    contentHtmlAr: `
      <p class="article-lead">يعد الحصول على التراخيص الرسمية وشهادات عدم الممانعة (NOC) شرطاً قانونياً أساسياً لا غنى عنه قبل مباشرة أي أعمال فيت آوت أو تعديل ديكور داخلي في إمارة أبوظبي.</p>
      
      <p>البدء في الأعمال الإنشائية أو هدم القواطع دون تصريح معتمد يعرض صاحب المشروع لغرامات بلدية ووقف فوري للأعمال. فيما يلي خارطة الطريق الإجرائية المتبعة لدى الفريق الهندسي لشركة نسق في مشاريع العاصمة.</p>

      <h2>1. الجهات الأربع المسؤولة عن اعتمادات الفيت آوت في أبوظبي</h2>
      <p>تمر إجراءات الترخيص في الإمارة بأربع مراحل متتالية:</p>

      <h3>المرحلة الأولى: شهادة عدم الممانعة من المطور العقاري أو المالك (Landlord NOC)</h3>
      <p>قبل التقديم للبلدية، يجب الحصول على شهادة عدم ممانعة رسمية من المطور الرئيسي (مثل شركة الدار العقارية لمشاريع جزيرتي ياس والسعديات، أو مدن، أو بروفيس). يتأكد المطور من أن التعديلات لا تؤثر على الأحمال الإنشائية أو شبكات المبنى المشتركة.</p>

      <h3>المرحلة الثانية: دائرة البلديات والنقل عبر منصة "تم" (TAMM)</h3>
      <p>تتم كافة معاملات تصاريح البناء والتشطيب الداخلي عبر منظومة خدمات أبوظبي الحكومية الموحدة <strong>تم</strong>. وتندرج أعمال القواطع الجبسية والأسقف المستعارة والتعديلات الداخلية غير الإنشائية تحت تصنيف <em>تصريح أعمال بسيطة (Minor Works Permit)</em>.</p>

      <h3>المرحلة الثالثة: هيئة أبوظبي للدفاع المدني (ADCD)</h3>
      <p>أي تعديل في مسارات القواطع أو مناسيب الأسقف يتطلب تدقيقاً من الدفاع المدني لضمان مطابقة رشاشات الحريق وكواشف الدخان، والتأكد من استخدام ألواح جبس معتمدة مقاومة لانتشار اللهب.</p>

      <h3>المرحلة الرابعة: شركة أبوظبي للتوزيع (ADDC)</h3>
      <p>في حال تضمن المشروع زيادة في الأحمال الكهربائية المخصصة أو تعديل القواطع الرئيسية (MDB/SMDB)، يتم تقديم مخططات الأحمال لاعتمادها من شركة التوزيع.</p>

      <h2>المخططات الهندسية المطلوبة لتقديم المعاملة</h2>
      <p>لتفادي رفض المعاملة، يجب أن يتضمن الملف الهندسي المقدم عبر منصة تم المخططات التالية:</p>
      <ul>
        <li><strong>مخطط التعديلات المعمارية:</strong> مخطط مسقط أفقي يوضح القواطع القائمة والمقترح إزالتها أو إنشاؤها بدقة.</li>
        <li><strong>مخطط الأسقف المستعارة (RCP):</strong> مسقط تفصيلي يوضح مناسيب الأسقف، تجاويف الإنارة، ومواقع فتحات التفتيش.</li>
        <li><strong>المخططات الكهروميكانيكية (MEP):</strong> مسارات مجاري ومخارج التكييف وتوزيع الإنارة وأحمال اللوحات.</li>
        <li><strong>صحائف البيانات الفنية للمواد:</strong> شهادات اعتماد ألواح الجبس والهياكل المعدنية ومقاومتها للحريق.</li>
      </ul>

      <div class="callout">
        <h4>الجدول الزمني المعتاد للموافقات في أبوظبي</h4>
        <p>تستغرق شهادة عدم الممانعة من المطور نحو 5 إلى 10 أيام عمل، ويستغرق تصريح الأعمال البسيطة عبر "تم" من 3 إلى 7 أيام، وتدقيق الدفاع المدني من 5 إلى 10 أيام. ننصح بتخصيص فترة تتراوح بين 3 إلى 4 أسابيع للمعاملات قبل بدء التنفيذ بالموقع.</p>
      </div>
    `,
    faqsAr: [
      {
        q: "هل أحتاج تصريحاً من البلدية لتجديد فيلتي الخاصة في أبوظبي؟",
        a: "نعم، تتطلب التعديلات الداخلية غير الإنشائية وتجديد الأسقف والقواطع استخراج تصريح أعمال بسيطة عبر منصة تم لضمان السلامة والالتزام بكود البناء."
      },
      {
        q: "من المسؤول عن تقديم معاملة ترخيص الفيت آوت؟",
        a: "يتولى مقاول الفيت آوت المعتمد أو الاستشاري الهندسي إعداد الملف الفني والمخططات وتقديم الطلب عبر منصة تم ومتابعة الاعتمادات حتى صدور التصريح."
      },
      {
        q: "ما هي الأسباب الأكثر شيوعاً لرفض طلبات تصاريح التشطيب؟",
        a: "أهم أسباب الرفض: غياب مخطط الأسقف المستعارة (RCP)، تعارض القواطع مع رشاشات الحريق، استخدام مواد غير مطابقة، أو عدم إرفاق موافقة المطور العقاري."
      },
      {
        q: "هل تساعد شركة نسق في استخراج التراخيص وموافقات المطورين؟",
        a: "نعم، يقوم الفريق الفني لشركة نسق بمراجعة المخططات واستيفاء اشتراطات المطورين وبلدية أبوظبي والدفاع المدني لضمان سلاسة إجراءات الترخيص."
      }
    ]
  },

  {
    slug: "prevent-gypsum-ceiling-cracks-uae",
    badgeEn: "Technical Craft & Material Science",
    badgeAr: "الحرفية الهندسية وعلوم المواد",
    image: "/assets/gypsum-guide.jpg",
    readTimeEn: "6 min read",
    readTimeAr: "قراءة 6 دقائق",
    date: "2026-03-25",
    
    // English Content
    titleEn: "How to Prevent Gypsum Ceiling Cracks in UAE Homes: Framing, Humidity & Craft",
    descEn: "Why gypsum ceilings develop cracks in UAE villas and offices, and the engineering best practices to eliminate them: heavy-gauge framing, ASTM C1396 boards, and Level-5 joint finishing.",
    summaryEn: "A technical guide examining thermal expansion, vibration, moisture behavior, and joint finishing protocols required to build crack-free gypsum ceilings in the UAE climate.",
    contentHtmlEn: `
      <p class="article-lead">Hairline cracks along ceiling joints, sagging bulkheads, and surface popping are among the most frequent complaints homeowners and commercial tenants face in the UAE.</p>
      
      <p>The United Arab Emirates presents a challenging operational climate for gypsum ceilings: extreme summer outdoor temperatures exceeding 45°C contrast sharply with continuous indoor air conditioning (20°C–22°C). This rapid thermal cycling, combined with coastal humidity in Abu Dhabi and Dubai, causes materials to expand and contract continuously.</p>

      <h2>The Root Causes of Ceiling Cracks in the UAE</h2>
      <p>Based on our 11+ years of site execution across thousands of UAE projects, ceiling cracks almost never result from bad paint; they stem from structural errors beneath the surface:</p>

      <h3>1. Substandard Lightweight Wire Suspension</h3>
      <p>Budget contractors frequently suspend ceilings using thin tie wires anchored with light plugs. When central AC fan coil units blow air, the pressure differentials cause wire movement, resulting in stress fractures at board joints.</p>

      <h3>2. Incorrect Gypsum Board Selection</h3>
      <p>Using regular white plasterboards in humid areas like bathrooms, kitchens, or semi-exposed villa lobbies causes moisture absorption, board swelling, and joint separation. Bathrooms and kitchens strictly require green Moisture-Resistant (MR) plasterboards compliant with ASTM C1396.</p>

      <h3>3. Neglecting Thermal Expansion Joints</h3>
      <p>Gypsum expands and contracts over large surface areas. Any continuous ceiling expanse exceeding 9 to 10 linear meters without a dedicated expansion joint will crack at its weakest seam.</p>

      <h3>4. Poor Joint Taping & Hurried Compound Drying</h3>
      <p>Using cheap self-adhesive mesh tape instead of high-tensile fiberglass paper tape, or applying thick single coats of filler rather than three graduated coats, guarantees cracking within 6 to 12 months.</p>

      <h2>The NASAQ Standard for Crack-Free Ceilings</h2>
      <p>Our engineering teams implement a strict 5-point protocol on all Abu Dhabi and Dubai sites:</p>

      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Engineering Stage</th>
              <th>Common Market Practice (Risky)</th>
              <th>NASAQ Standard (Crack-Resistant)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Framing Steel</strong></td>
              <td>0.35mm light gauge channel</td>
              <td>0.50mm – 0.70mm heavy galvanized steel studs & channels</td>
            </tr>
            <tr>
              <td><strong>Suspension System</strong></td>
              <td>Flexible tie wires</td>
              <td>Rigid galvanized threaded rods with heavy-duty anchors</td>
            </tr>
            <tr>
              <td><strong>Wet Area Boards</strong></td>
              <td>Standard white plasterboard</td>
              <td>Knauf / Gyproc Green MR (Moisture Resistant) boards</td>
            </tr>
            <tr>
              <td><strong>Joint Reinforcement</strong></td>
              <td>Self-adhesive open mesh tape</td>
              <td>Embedded high-tensile fiberglass perforated paper tape</td>
            </tr>
            <tr>
              <td><strong>Finishing Protocol</strong></td>
              <td>2 quick coats of joint filler</td>
              <td>3 graduated compound coats + Level-5 skim coat for cove lighting</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout">
        <h4>Why Level-5 Finishing Matters for Concealed LED Lighting</h4>
        <p>Concealed cove lighting casts grazing light directly across the ceiling surface. Any microscopic bump or joint depression casts visible shadows. A complete Level-5 skim coat creates an optically flat plane that remains seamless under warm architectural LED illumination.</p>
      </div>
    `,
    faqsEn: [
      {
        q: "Why do new gypsum ceilings in UAE villas crack after a few months?",
        a: "Cracks are typically caused by building settlement, temperature fluctuations between outdoor heat and indoor AC, lightweight framing, and lack of expansion joints in large rooms."
      },
      {
        q: "Can existing ceiling cracks be permanently repaired?",
        a: "Yes. Simply applying surface paint will fail. The joint must be routed, reinforced with embedded high-strength tape, refilled with flexible compound, and feathered out before repainting."
      },
      {
        q: "What is the difference between regular and MR gypsum board?",
        a: "Moisture-Resistant (MR) boards feature silicone-treated water-repellent cores and water-resistant green paper liners, preventing mold growth and sagging in high-humidity UAE environments."
      },
      {
        q: "How does NASAQ guarantee ceiling stability?",
        a: "We utilize heavy-duty galvanized steel framing (0.50–0.70mm), rigid suspension rods, ASTM C1396 certified boards, and 3-coat joint finishing with Level-5 skimming for cove lighting areas."
      }
    ],

    // Arabic Content
    titleAr: "كيفية تجنب شروخ الأسقف الجبسية في مناخ الإمارات: المواد والهياكل والتشطيب",
    descAr: "أسباب ظهور التشققات والشروخ في الأسقف الجبسية بالفلل والمكاتب في الإمارات، وأفضل المعايير الهندسية لتفاديها: الهياكل المجلفنة، ألواح MR المقاومة للرطوبة، وتشطيب Level-5.",
    summaryAr: "دليل فني يستعرض تأثير التمدد الحراري والرطوبة على الجبس بورد في الإمارات، والبروتوكول الهندسي المعتمد لتنفيذ أسقف مستعارة ثابتة ومقاومة للشروخ لعشرات السنين.",
    contentHtmlAr: `
      <p class="article-lead">تعتبر الشروخ الشعرية على فواصل الأسقف الجبسية وهبوط التجاويف من أكثر المشكلات إزعاجاً وشيوعاً لدى ملاك الفلل والشركات في دولة الإمارات.</p>
      
      <p>يتميز مناخ الإمارات بظروف تشغيلية قاسية للأسقف المستعارة: درجات حرارة صيفية خارجية تتجاوز 45 مئوية تقابلها برودة تكييف مستمرة بالداخل (20-22 مئوية). هذا التباين الحراري المتسارع، إلى جانب الرطوبة الساحلية في أبوظبي ودبي، يؤدي إلى تمدد وانكماش مستمر في المواد الإنشائية.</p>

      <h2>الأسباب الحقيقية لظهور شروخ الأسقف الجبسية بالإمارات</h2>
      <p>من واقع خبرتنا الميدانية لأكثر من 11 عاماً وتنفيذ آلاف المشاريع في الدولة، نؤكد أن الشروخ نادراً ما تنتج عن نوعية الدهان، بل تعود إلى أخطاء هيكلية تحت السطح:</p>

      <h3>1. استخدام أسلاك تعليق خفيفة غير متينة</h3>
      <p>يلجأ بعض المقاولين التجاريين إلى تعليق الأسقف بأسلاك حديدية رفيعة قابلة للاهتزاز. ومع ضغط الهواء الناتج عن وحدات التكييف المركزية، تحدث حركة مجهرية تؤدي لتمزق معجون الفواصل وظهور شروخ مستمرة.</p>

      <h3>2. استخدام ألواح جبس غير مناسبة للمكان</h3>
      <p>تركيب الألواح البيضاء العادية في بيئات رطبة كالمطابخ والحمامات ومداخل الفلل يؤدي لامتصاص الرطوبة وانتفاخ الجبس وتفكك الفواصل. تتطلب هذه المناطق حصراً ألواح الجبس الخضراء المقاومة للرطوبة (MR) المطابقة للمواصفة القياسية ASTM C1396.</p>

      <h3>3. إغفال فواصل التمدد الإنشائية (Expansion Joints)</h3>
      <p>يتمدد الجبس بورد وينكمش حرارياً في المساحات الكبيرة. وأي مساحة سقف مستمرة تتجاوز 9 إلى 10 أمتار طولية دون فاصل تمدد مرن ستتعرض حتماً لشرخ ناتج عن الإجهاد الداخلي.</p>

      <h3>4. شريط الفواصل الرديء والتعجل في تجفيف المعجون</h3>
      <p>استخدام شريط الشبك اللاصق الرخيص بدلاً من شريط الفايبر جلاس الورقي المثقب عالي الشد، أو وضع طبقة معجون واحدة سميكة بدلاً من ثلاث طبقات متدرجة، يؤدي لتشقق الفاصل خلال 6 أشهر.</p>

      <h2>معايير شركة نسق لتنفيذ أسقف مستعارة خالية من الشروخ</h2>
      <p>يطبق فريقنا الهندسي بروتوكولاً صارماً من 5 محاور في كافة مواقع العمل بأبوظبي ودبي:</p>

      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>المرحلة الهندسية</th>
              <th>الممارسات الشائعة (عالية المخاطر)</th>
              <th>معيار شركة نسق (مقاوم للشروخ)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>مقاطع الحديد</strong></td>
              <td>حديد خفيف بسماكة 0.35 ملم</td>
              <td>حديد مجلفن ثقيل بسماكة 0.50 – 0.70 ملم معتمد</td>
            </tr>
            <tr>
              <td><strong>نظام التعليق</strong></td>
              <td>أسلاك ربط مرنة قابلة للتأرجح</td>
              <td>تيش حديد مجلفن ملولب ومثبتات صلبة غير قابلة للاهتزاز</td>
            </tr>
            <tr>
              <td><strong>ألواح المناطق الرطبة</strong></td>
              <td>ألواح بيضاء عادية</td>
              <td>ألواح خضراء معتمدة (Knauf / Gyproc MR) مقاومة للرطوبة</td>
            </tr>
            <tr>
              <td><strong>تسليح الفواصل</strong></td>
              <td>شبك لاصق خفيف</td>
              <td>شريط ورقي فايبر جلاس مثقب مدفون في معجون الفواصل</td>
            </tr>
            <tr>
              <td><strong>معالجة السطح</strong></td>
              <td>طبقتان سريعتان من المعجون</td>
              <td>3 طبقات متدرجة + معجون كامل Level-5 لمناطق إضاءة الليد</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout">
        <h4>أهمية تشطيب Level-5 مع إضاءات الليد المخفية</h4>
        <p>تسلط إضاءة الليد المخفية (Cove Light) الضوء بزاوية مائلة تماماً على السقف. وأي تموج أو انخفاض بسيط يظهر فوراً كظل داكن مشوه. إن تطبيق طبقة معجون كاملة بمستوى Level-5 يمنح السقف استواءً بصرياً تاماً يدوم لسنوات طويلة.</p>
      </div>
    `,
    faqsAr: [
      {
        q: "لماذا تظهر شروخ في الأسقف الجبسية الجديدة بالفلل بعد بضعة أشهر؟",
        a: "تعود الشروخ عادة إلى هبوط المبنى الطبيعي، التباين الحراري بين حرارة الصيف وبرودة التكييف، استخدام هياكل تعليق خفيفة، وإغفال فواصل التمدد في المساحات الكبيرة."
      },
      {
        q: "هل يمكن معالجة الشروخ القائمة في الأسقف بشكل نهائي؟",
        a: "نعم، ولكن لا تكفي إعادة الطلاء السطحي. يجب فتح الفاصل وتنظيفه، وتركيب شريط فايبر جلاس مدعم، وإعادة ملئه بمعجون مرن على طبقات متدرجة قبل الصنفرة والدهان."
      },
      {
        q: "ما هو الفرق بين الجبس بورد العادي والألواح المقاومة للرطوبة (MR)؟",
        a: "تحتوي ألواح MR الخضراء على مادة السيليكون المعالجة ومغلفة بورق طارد للمياه يمنع امتصاص الرطوبة وتكون العفن، وهو أمر ضروري في حمامات ومطابخ الإمارات."
      },
      {
        q: "كيف تضمن شركة نسق ثبات وجودة الأسقف المستعارة؟",
        a: "نعتمد هياكل حديد مجلفن بسماكة 0.50-0.70 ملم، تيش تعليق صلب، ألواح معتمدة وفق ASTM C1396، ومعالجة فواصل ثلاثية الطبقات مع تشطيب Level-5."
      }
    ]
  },

  {
    slug: "interior-design-vs-fit-out-implementation",
    badgeEn: "Industry Insights & Process",
    badgeAr: "رؤى الصناعة وآليات التنفيذ",
    image: "/assets/villa.webp",
    readTimeEn: "7 min read",
    readTimeAr: "قراءة 7 دقائق",
    date: "2026-03-28",
    
    // English Content
    titleEn: "Interior Design vs. Interior Fit-Out Implementation: What UAE Clients Must Know",
    descEn: "Discover the vital distinction between concept design and physical fit-out implementation in the UAE. Avoid scope gaps, cost overruns, and construction delays.",
    summaryEn: "An essential guide explaining the roles of interior design consultants vs. licensed interior design implementation contractors (like NASAQ) on UAE residential and commercial sites.",
    contentHtmlEn: `
      <p class="article-lead">In the UAE interior market, clients frequently ask: <em>"What is the actual difference between an Interior Designer and an Interior Design Implementation (Fit-Out) Contractor?"</em></p>
      
      <p>Conflating these two distinct disciplines is one of the leading causes of budget overruns, unmet visual expectations, and construction friction on UAE villa and commercial projects.</p>

      <h2>The Core Distinction: Creative Vision vs. Physical Reality</h2>
      <p>While both disciplines work toward creating exceptional spaces, their daily responsibilities, licensing, and site operations differ fundamentally:</p>

      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Project Dimension</th>
              <th>Interior Designer / Consultant</th>
              <th>Interior Implementation Contractor (NASAQ)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Primary Focus</strong></td>
              <td>Concept, spatial layout, moodboards, 3D renderings, and FF&E selections.</td>
              <td>Physical on-site construction, structural framing, MEP coordination, and precision finishing.</td>
            </tr>
            <tr>
              <td><strong>Primary Deliverables</strong></td>
              <td>Concept presentations, design drawings, sample boards, and Bill of Quantities (BOQ).</td>
              <td>Built ceilings, acoustic partitions, installed finishes, authority clearances, and physical handover.</td>
            </tr>
            <tr>
              <td><strong>Licensing & Activity</strong></td>
              <td>Architectural & Interior Design Consultancy.</td>
              <td>Interior Design Implementation Works (Decor & Fit-Out).</td>
            </tr>
            <tr>
              <td><strong>On-Site Role</strong></td>
              <td>Periodic design inspection visits to ensure visual alignment.</td>
              <td>Daily site supervision, trade coordination, health & safety compliance, and snagging resolution.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Why Projects Fail When Implementation Is Overlooked</h2>
      <p>A 3D rendering looks stunning on a screen, but transforming digital geometry into a physical room requires rigorous construction discipline:</p>
      <ul>
        <li><strong>Material Availability & Buildability:</strong> A concept designer may specify an imported marble slab or ceiling profile that cannot physically fit into a residential tower elevator or withstand UAE humidity. An implementation contractor verifies buildability before procurement.</li>
        <li><strong>Clashes with Hidden Services:</strong> Beautiful recessed ceiling troughs frequently clash with ductwork or drainage lines. Implementation contractors resolve these clashes through reflected ceiling coordination drawings.</li>
        <li><strong>Dimensional Tolerances:</strong> Physical walls are rarely 100% plumb. Implementation specialists measure actual site conditions using laser levels, ensuring bespoke joinery fits without clumsy filler strips.</li>
      </ul>

      <div class="callout">
        <h4>How NASAQ Collaborates with Clients and Designers</h4>
        <p>NASAQ specializes specifically in <strong>Interior Design Implementation Works</strong>. We work harmoniously with your appointed architect or designer, executing approved drawings with absolute material fidelity, strict tolerances, and transparent project milestones.</p>
      </div>
    `,
    faqsEn: [
      {
        q: "Can I hire NASAQ if I already have drawings from an interior designer?",
        a: "Yes, that is our core specialization. NASAQ turns approved third-party design packages and BOQs into physical reality, coordinating materials, MEP, and site trades to exact specifications."
      },
      {
        q: "What is an Interior Design Implementation contractor's licensed activity in Abu Dhabi?",
        a: "In Abu Dhabi, the official economic license category is 'Interior Design Implementation Works (Decor)', authorizing on-site execution of ceilings, partitions, wall cladding, and finishes."
      },
      {
        q: "Why do drawings often differ from the finished room?",
        a: "Differences occur when the contractor lacks execution discipline, substitutes materials, or fails to coordinate hidden MEP infrastructure with the architectural ceiling plan."
      },
      {
        q: "How does NASAQ ensure the completed space matches the 3D design?",
        a: "We conduct detailed pre-construction site surveys, produce coordination shop drawings, prepare physical material sample boards for client sign-off, and enforce daily quality control."
      }
    ],

    // Arabic Content
    titleAr: "الفرق بين التصميم الداخلي وتنفيذ الديكور والفيت آوت: دليل الملاك في الإمارات",
    descAr: "تعرف على الفرق الجوهري بين مكاتب التصميم الداخلي وشركات تنفيذ الديكور والفيت آوت في الإمارات. كيف تتجنب تجاوز الميزانية وفجوات التنفيذ الميداني.",
    summaryAr: "مقارنة هندسية عملية توضح للملاك والشركات الفرق بين مرحلة التصميم ومرحلة التنفيذ الميداني، ودور مقاول تنفيذ التصميم الداخلي المرخص في تحويل المخططات إلى واقع.",
    contentHtmlAr: `
      <p class="article-lead">يطرح العديد من الملاك والشركات في الإمارات تساؤلاً جوهرياً: <em>"ما هو الفرق الفعلي بين مصمم الديكور (Interior Designer) وشركة تنفيذ التصميم الداخلي والفيت آوت؟"</em></p>
      
      <p>يعد الخلط بين هذين المجالين المنفصلين أحد أبرز أسباب تعثر المشروعات، وتجاوز الميزانيات المقررة، أو الحصول على نتيجة نهائية لا تطابق الصور والتصورات المعمارية ثلاثية الأبعاد.</p>

      <h2>الفرق الجوهري: الرؤية الإبداعية مقابل التنفيذ الواقعي</h2>
      <p>على الرغم من تكامل المجالين لتحقيق فضاء داخلي راقٍ، إلا أن المهام اليومية والترخيص والمسؤوليات تختلف جذرياً:</p>

      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>محور المشروع</th>
              <th>مصمم الديكور / الاستشاري</th>
              <th>مقاول تنفيذ التصميم الداخلي (شركة نسق)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>التركيز الأساسي</strong></td>
              <td>المفهوم الجمالي، توزيع الفراغات، لوحات الخامات، الرندرات ثلاثية الأبعاد، وتنسيق الأثاث.</td>
              <td>البناء الميداني الواقعي، تثبيت الهياكل، تنسيق شبكات التكييف والكهرباء، والتشطيب عالي الدقة.</td>
            </tr>
            <tr>
              <td><strong>المخرجات المسلمة</strong></td>
              <td>مخططات تصميمية، عروض تقديمية، جداول الكميات التقديرية (BOQ)، وعينات الألوان.</td>
              <td>أسقف منفذة، قواطع جدارية معزولة، أسطح ملساء، تراخيص بلدية معتمدة، وتسليم نهائي جاهز للسكن.</td>
            </tr>
            <tr>
              <td><strong>النشاط المرخص</strong></td>
              <td>استشارات وتصميم معماري وتصميم داخلي.</td>
              <td>أعمال تنفيذ التصميم الداخلي (ديكور وفيت آوت).</td>
            </tr>
            <tr>
              <td><strong>الدور في الموقع</strong></td>
              <td>زيارات دورية للإشراف البصري والتأكد من مطابقة التصميم العام.</td>
              <td>إدارة ميدانية يومية مباشرة، توجيه العمالة والحرفيين، ضبط السلامة، وفحص وإصلاح أي ملاحظات (Snagging).</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>لماذا تتعثر المشاريع عند إغفال خبرة التنفيذ الميداني؟</h2>
      <p>تبدو التصاميم ثلاثية الأبعاد باهرة على الشاشة، ولكن تحويلها إلى واقع ملموس يتطلب حنكة إنشائية:</p>
      <ul>
        <li><strong>واقعية المواد وإمكانية توريدها:</strong> قد يقترح المصمم رخاماً معيناً أو تجويف سقف يتعارض تركيبه مع الرطوبة أو يصعب إدخاله عبر مصاعد البرج. يتولى مقاول التنفيذ تدقيق قابلية البناء قبل التوريد.</li>
        <li><strong>التعارض مع التمديدات المخفية:</strong> كثيراً ما تتعارض تجاويف الإنارة المخفية مع مجاري التكييف أو مواسير الصرف. يقوم مقاول التنفيذ بحل هذه التعارضات عبر مخططات الأسقف المنسقة (RCP).</li>
        <li><strong>استواء الجدران وتفاوت الأبعاد:</strong> الجدران القائمة نادراً ما تكون مستقيمة تماماً. يقوم فريق التنفيذ بقياس أبعاد الموقع بأجهزة الليزر لضمان تركيب الخشب والجبس بدقة دون أي فراغات مشوهة.</li>
      </ul>

      <div class="callout">
        <h4>كيف تتعاون شركة نسق مع الملاك والمصممين</h4>
        <p>تتخصص شركة نسق حصرياً في <strong>أعمال تنفيذ التصميم الداخلي</strong>. نعمل بتناغم تام مع المصمم أو الاستشاري الخاص بكم، ونلتزم بتحويل مخططاته المعتمدة إلى واقع بأعلى درجات الدقة والشفافية التامة في المواعيد والمواصفات.</p>
      </div>
    `,
    faqsAr: [
      {
        q: "هل يمكنني التعاقد مع شركة نسق إذا كانت لدي مخططات جاهزة من مصمم خارجي؟",
        a: "نعم، هذا هو تخصصنا الأساسي؛ نقوم بدراسة المخططات وجدول الكميات (BOQ) وتحويلها إلى واقع ملموس في الموقع مع التزام كامل بالمواصفات المعتمدة."
      },
      {
        q: "ما هو النشاط المرخص لمقاول التنفيذ في أبوظبي؟",
        a: "النشاط الاقتصادي المرخص في إمارة أبوظبي هو 'أعمال تنفيذ التصميم الداخلي (ديكور)'، وهو المخول قانونياً بتنفيذ الأسقف والقواطع والتشطيبات بالموقع."
      },
      {
        q: "لماذا تختلف الغرفة المكتملة أحياناً عن الصور ثلاثية الأبعاد (3D)؟",
        a: "يحدث الاختلاف عندما يفتقر المقاول للخبرة الحرفية، أو يقوم باستبدال المواد بمواد تجارية أقل جودة، أو يفشل في معالجة تعارضات مجاري التكييف مع الأسقف."
      },
      {
        q: "كيف تضمن شركة نسق مطابقة التشطيب للتصميم المعتمد؟",
        a: "نقوم بإجراء مسح ليزري للموقع قبل البدء، واعتماد عينات المواد الحقيقية مع العميل، وإجراء إشراف ميداني يومي لمنع أي حيود عن المخطط."
      }
    ]
  },

  {
    slug: "acoustic-drywall-soundproofing-uae",
    badgeEn: "Acoustics & Spatial Planning",
    badgeAr: "العزل الصوتي وتخطيط المساحات",
    image: "/assets/office.webp",
    readTimeEn: "6 min read",
    readTimeAr: "قراءة 6 دقائق",
    date: "2026-03-30",
    
    // English Content
    titleEn: "Acoustic Partition Walls & Soundproofing for UAE Villas and Offices",
    descEn: "How to engineer soundproof drywall partition walls in UAE executive offices, boardrooms, and residential majlis areas. STC ratings, Rockwool insulation, and acoustic detailing.",
    summaryEn: "A technical guide to achieving Sound Transmission Class (STC 48-55dB) ratings with drywall partitions, deflection heads, and floor preservation techniques across UAE properties.",
    contentHtmlEn: `
      <p class="article-lead">Acoustic privacy is a crucial design requirement in modern UAE interiors, whether for confidential corporate boardrooms in Abu Dhabi commercial towers or peaceful bedroom suites and private majlis areas in villas.</p>
      
      <p>Standard single-layer drywall partitions block only 30 to 35 decibels (dB), allowing normal speech to be clearly understood in adjacent rooms. Achieving executive privacy requires engineered acoustic partition assemblies.</p>

      <h2>Understanding Sound Transmission Class (STC) Ratings</h2>
      <p>Sound Transmission Class (STC) measures an interior partition's effectiveness in attenuating airborne sound:</p>

      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>STC Rating Level</th>
              <th>Acoustic Privacy Performance</th>
              <th>Ideal Application in the UAE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>STC 35 – 38</strong></td>
              <td>Loud speech heard clearly; normal conversation audible as a murmur.</td>
              <td>Standard residential storage rooms, internal utility zones.</td>
            </tr>
            <tr>
              <td><strong>STC 45 – 48</strong></td>
              <td>Loud speech heard faintly; normal speech completely unintelligible.</td>
              <td>Executive private offices, villa bedrooms, study rooms.</td>
            </tr>
            <tr>
              <td><strong>STC 50 – 55+</strong></td>
              <td>Loud speech and shouting inaudible; maximum confidential isolation.</td>
              <td>Corporate boardrooms, legal consultation suites, villa home cinemas, majlis.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Anatomy of an High-Performance Acoustic Drywall System</h2>
      <p>To achieve STC 50+ without building heavy masonry blockwork, NASAQ's crews construct multi-layered drywall systems combining five acoustic components:</p>

      <h3>1. Dual-Layer Gypsum Board Linings</h3>
      <p>Installing two staggered layers of 12.5mm or 15mm dense gypsum board on each side of the steel stud framework dramatically increases mass, preventing airborne sound transmission.</p>

      <h3>2. High-Density Rockwool Cavity Insulation</h3>
      <p>The internal cavity between studs is filled with high-density acoustic rockwool (minimum 50 kg/m³ density). This acts as a sound-absorbing damper, eliminating hollow resonant drum effects.</p>

      <h3>3. Acoustic Perimeter Foam & Sealants</h3>
      <p>Sound travels like water through microscopic air gaps. Continuous acoustic sealants are applied under the floor track, along perimeter wall connections, and behind ceiling deflection tracks.</p>

      <h3>4. Preserving Existing Tile & Marble Flooring</h3>
      <p>In luxury villas and leased commercial offices, damaging existing Italian marble or porcelain tiles is unacceptable. NASAQ utilizes high-tack neoprene acoustic damping tracks and specialized non-destructive anchoring methods that maintain structural stability while preserving the underlying floor finish.</p>

      <div class="callout">
        <h4>Watch Out for Ceiling Sound Flanking</h4>
        <p>A common error on UAE sites is stopping the partition at the false ceiling line. Sound easily travels up through the ceiling, over the wall, and down into the next room. High-privacy walls must extend full-height to the structural concrete slab with an acoustic deflection head.</p>
      </div>
    `,
    faqsEn: [
      {
        q: "Can drywall partitions achieve the same soundproofing as blockwork walls?",
        a: "Yes. Dual-layer drywall partitions with high-density rockwool insulation can achieve STC 50 to 55dB, matching or exceeding typical 100mm hollow concrete blockwork while weighing 80% less."
      },
      {
        q: "Can acoustic partitions be installed without drilling into marble floors?",
        a: "Yes. We utilize high-strength acoustic bonding tracks and perimeter wall anchors to securely stabilize partition frames while protecting delicate marble or hardwood floors."
      },
      {
        q: "Why can I still hear noise even after installing a partition wall?",
        a: "Noise usually leaks through 'flanking paths': gaps above the false ceiling, back-to-back electrical outlet boxes, unsealed pipe penetrations, or uninsulated hollow-core doors."
      },
      {
        q: "What types of acoustic projects does NASAQ undertake?",
        a: "NASAQ installs high-performance acoustic partitions and ceiling baffles for executive boardrooms, confidential meeting spaces, villa majlis areas, bedrooms, and commercial clinics."
      }
    ],

    // Arabic Content
    titleAr: "القواطع الجدارية العازلة للصوت في الفلل والمكاتب بدولة الإمارات",
    descAr: "كيفية تنفيذ قواطع جبسية عازلة للصوت في المكاتب التنفيذية وقاعات الاجتماعات ومجالس الفلل في الإمارات. معايير STC، عزل الصوف الصخري، وحماية الأرضيات.",
    summaryAr: "دليل هندسي متخصص يشرح أسس العزل الصوتي بالقواطع الجدارية الجبسية، وكيفية تحقيق درجات عزل STC 50+ لحماية الخصوصية في المقرات الإدارية والفلل الفاخرة.",
    contentHtmlAr: `
      <p class="article-lead">تعد الخصوصية الصوتية والراحة السمعية من أهم أولويات التصميم المعماري الحديث في الإمارات، سواء لمجالس الإدارة وقاعات الاجتماعات في أبراج أبوظبي، أو في غرف النوم والمجالس العائلية بالفلل الخاصة.</p>
      
      <p>القواطع الجدارية الجبسية المفردة العادية تعزل ما بين 30 إلى 35 ديسيبل فقط، مما يجعل الحديث العادي مسموعاً بوضوح في الغرفة المجاورة. ولتحقيق الخصوصية التامة، لابد من تصميم نظام قواطع جدارية عازلة للصوت بمواصفات معتمدة.</p>

      <h2>مستويات تصنيف العزل الصوتي (STC)</h2>
      <p>يقاس أداء العزل الصوتي عبر مؤشر تصنيف انتقال الصوت (Sound Transmission Class - STC):</p>

      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>تصنيف العزل (STC)</th>
              <th>مستوى الخصوصية الصوتية</th>
              <th>الاستخدام المثالي في الإمارات</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>STC 35 – 38</strong></td>
              <td>الصوت العالي مسموع بوضوح، والحديث العادي مسموع كهمهمة.</td>
              <td>المستودعات المنزلية والمساحات الخدمية الداخلية.</td>
            </tr>
            <tr>
              <td><strong>STC 45 – 48</strong></td>
              <td>الصوت العالي يسمع بصعوبة خفيفة، والحديث العادي غير مفهوم إطلاقاً.</td>
              <td>المكاتب الفردية التنفيذية، غرف النوم الرئيسية، وغرف الدراسة.</td>
            </tr>
            <tr>
              <td><strong>STC 50 – 55+</strong></td>
              <td>الصوت العالي والصراخ غير مسموع؛ خصوصية وسرية تامة.</td>
              <td>قاعات مجالس الإدارة، المكاتب القانونية، قاعات السينما المنزلية، والمجالس الكبرى.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>مكونات نظام القواطع الجبسية عالي العزل الصوتي</h2>
      <p>للوصول إلى مستوى عزل STC 50+ دون الحاجة لبناء جدران طابوقية ثقيلة، تنفذ فرق شركة نسق أنظمة قواطع متطورة تدمج خمسة عناصر أساسية:</p>

      <h3>1. ألواح جبس مزدوجة متعاقبة الفواصل</h3>
      <p>تركيب طبقتين متعاقبتين من ألواح الجبس بسماكة 12.5 ملم أو 15 ملم على كل جانب من الهيكل المعدني يضاعف الكتلة الجدارية، مما يعيق انتقال الموجات الصوتية عبر الهواء.</p>

      <h3>2. حشوات الصوف الصخري عالي الكثافة (Rockwool)</h3>
      <p>يتم ملء الفراغ الداخلي بين القوائم المعدنية بصوف صخري صوتي بكثافة لا تقل عن 50 كجم/م³، مما يمتص الترددات الصوتية ويمنع الرنين الداخلي المجوف.</p>

      <h3>3. أشرطة العزل المطاطية والمعجون الصوتي</h3>
      <p>ينتقل الصوت مثل الهواء عبر أصغر الشقوق المجهرية. لذلك نضع شريط عزل مطاطي مانع للاهتزاز أسفل المجرى الأرضي، مع تطبيق معجون صوتي مرن حول كافة الفواصل المحيطية.</p>

      <h3>4. الحفاظ على أرضيات الرخام والبورسلين القائمة</h3>
      <p>في الفلل الفاخرة والمكاتب المؤجرة، يعد إتلاف الرخام أو السيراميك أمراً مرفوضاً. تستخدم شركة نسق مجاري تثبيت مدعمة ومثبتات خاصة تضمن صلابة القاطع الجداري وثباته التام دون المساس بسلامة الأرضيات القائمة.</p>

      <div class="callout">
        <h4>احذر من تسريب الصوت عبر تجويف السقف المستعار</h4>
        <p>من الأخطاء الكبرى إنهاء القاطع عند مستوى السقف المستعار؛ إذ ينتقل الصوت بسهولة للأعلى ثم يعبر للغرفة المجاورة. لضمان الخصوصية القصوى، لابد من رفع القاطع ليصل مباشرة إلى الخرسانة الإنشائية في الأعلى.</p>
      </div>
    `,
    faqsAr: [
      {
        q: "هل توفر القواطع الجبسية نفس كفاءة عزل الجدران الخرسانية أو الطابوق؟",
        a: "نعم، القواطع الجبسية المزدوجة المحشوة بالصوف الصخري تحقق عزلاً صوتياً STC 50 إلى 55dB، وهو ما يعادل أو يفوق جدار الطابوق المجوف بسماكة 100 ملم وبوزن أخف بنسبة 80%."
      },
      {
        q: "هل يمكن تركيب قاطع عازل للصوت دون ثقب أرضيات الرخام الفاخرة؟",
        a: "نعم، نستخدم وسائد مطاطية ومواد تثبيت خاصة تثبت القاطع بقوة مع الجدران والأسقف لحماية الرخام والأرضيات الخشبية من أي تلف."
      },
      {
        q: "لماذا يستمر تسرب الصوت في بعض الغرف رغم وجود قاطع جبسي؟",
        a: "يعود ذلك إلى 'المسارات الالتفافية': الفراغ المفتوح فوق السقف المستعار، علب المقابس الكهربائية المتقابلة مباشرة، أو الأبواب المجوفة غير العازلة."
      },
      {
        q: "ما هي المشاريع التي تنفذ فيها شركة نسق أنظمة العزل الصوتي؟",
        a: "ننفذ القواطع والأسقف العازلة لقاعات مجالس الإدارة، المكاتب التنفيذية، العيادات، المجالس العائلية، وغرف النوم والسينما المنزلية في كافة الإمارات."
      }
    ]
  }
];

// Helper to build JSON-LD schema for articles
function buildArticleSchema(art, isArabic) {
  const canonical = isArabic 
    ? `https://nasaqfitout.ae/ar/insights/${art.slug}/` 
    : `https://nasaqfitout.ae/insights/${art.slug}/`;

  const title = isArabic ? art.titleAr : art.titleEn;
  const desc = isArabic ? art.descAr : art.descEn;
  const faqs = isArabic ? art.faqsAr : art.faqsEn;

  return {
    "@context": "https://schema.org",
    "@graph": [
      isArabic ? businessEntityAr : businessEntityEn,
      {
        "@type": "Article",
        "headline": title,
        "description": desc,
        "image": `https://nasaqfitout.ae${art.image}`,
        "datePublished": `${art.date}T08:00:00+04:00`,
        "dateModified": `${art.date}T10:00:00+04:00`,
        "author": {
          "@type": "Organization",
          "name": isArabic ? "الفريق الهندسي لشركة نسق" : "NASAQ Engineering & Fit-Out Team",
          "url": isArabic ? "https://nasaqfitout.ae/ar/" : "https://nasaqfitout.ae/"
        },
        "publisher": {
          "@type": "Organization",
          "name": isArabic ? "نسق" : "NASAQ",
          "logo": {
            "@type": "ImageObject",
            "url": "https://nasaqfitout.ae/assets/logo.svg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonical
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": isArabic ? "الرئيسية" : "Home",
            "item": isArabic ? "https://nasaqfitout.ae/ar/" : "https://nasaqfitout.ae/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": isArabic ? "المقالات والأدلة" : "Insights",
            "item": isArabic ? "https://nasaqfitout.ae/ar/insights/" : "https://nasaqfitout.ae/insights/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": title,
            "item": canonical
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };
}

// 1. Generate All 5 English Article Pages
console.log("Generating 5 English articles under dist/insights/ ...");
for (const art of articles) {
  const artDir = path.join(enInsightsDir, art.slug);
  if (!fs.existsSync(artDir)) fs.mkdirSync(artDir, { recursive: true });

  const canonical = `https://nasaqfitout.ae/insights/${art.slug}/`;
  const arCanonical = `https://nasaqfitout.ae/ar/insights/${art.slug}/`;
  const schema = buildArticleSchema(art, false);

  const html = `<!doctype html><html lang="en"><head>` +
    `<meta charset="utf-8">` +
    `<meta name="viewport" content="width=device-width,initial-scale=1">` +
    `<title>${art.titleEn} | NASAQ</title>` +
    `<meta name="description" content="${art.descEn}">` +
    `<meta name="theme-color" content="#181918">` +
    `<link rel="canonical" href="${canonical}">` +
    `<link rel="alternate" hreflang="en" href="${canonical}">` +
    `<link rel="alternate" hreflang="ar" href="${arCanonical}">` +
    `<link rel="alternate" hreflang="x-default" href="${canonical}">` +
    `<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">` +
    `<link rel="alternate icon" href="/assets/favicon.png">` +
    `<link rel="stylesheet" href="/style.css?v=3">` +
    `<meta name="geo.region" content="AE-AZ">` +
    `<meta name="geo.placename" content="Abu Dhabi">` +
    `<meta name="geo.position" content="24.4539;54.3773">` +
    `<meta name="ICBM" content="24.4539, 54.3773">` +
    `<meta property="og:site_name" content="NASAQ | نسق">` +
    `<meta property="og:type" content="article">` +
    `<meta property="og:locale" content="en_AE">` +
    `<meta property="og:locale:alternate" content="ar_AE">` +
    `<meta property="og:title" content="${art.titleEn} | NASAQ">` +
    `<meta property="og:description" content="${art.descEn}">` +
    `<meta property="og:url" content="${canonical}">` +
    `<meta property="og:image" content="https://nasaqfitout.ae${art.image}">` +
    `<meta name="twitter:card" content="summary_large_image">` +
    `<meta name="twitter:title" content="${art.titleEn} | NASAQ">` +
    `<meta name="twitter:description" content="${art.descEn}">` +
    `<meta name="twitter:image" content="https://nasaqfitout.ae${art.image}">` +
    `<script type="application/ld+json">${JSON.stringify(schema)}</script>` +
    `<script src="/app.js" defer></script>` +
  `</head><body>` +
    `<a class="skip" href="#main">Skip to content</a>` +
    `<header>` +
      `<a class="brand" href="/" aria-label="NASAQ home"><img src="/assets/logo.svg" alt="NASAQ approved logo" width="500" height="500"></a>` +
      `<nav aria-label="Main navigation">` +
        `<a href="/services/">Services</a>` +
        `<a href="/projects/">Concepts</a>` +
        `<a href="/insights/">Insights</a>` +
        `<a href="/about/">About</a>` +
        `<a href="/contact/">Contact</a>` +
      `</nav>` +
      `<a class="lang-switch" href="${arCanonical.replace('https://nasaqfitout.ae', '')}" aria-label="النسخة العربية">العربية</a>` +
      `<a class="navcta" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project.">Discuss your project</a>` +
      `<button id="menu" aria-label="Open navigation" aria-expanded="false">Menu</button>` +
    `</header>` +
    `<main id="main">` +
      `<article class="article-container">` +
        `<div class="article-header">` +
          `<span class="article-badge">${art.badgeEn}</span>` +
          `<h1>${art.titleEn}</h1>` +
          `<div class="article-meta-row">` +
            `<span>By NASAQ Engineering Team</span>` +
            `<span>•</span>` +
            `<span>${art.readTimeEn}</span>` +
            `<span>•</span>` +
            `<span>UAE Local Practice</span>` +
          `</div>` +
        `</div>` +
        `<img class="article-featured-img" src="${art.image}" alt="${art.titleEn}" width="1536" height="864" loading="eager">` +
        `<div class="article-content">` +
          art.contentHtmlEn +
        `</div>` +
        `<section class="section faq-section" style="padding:60px 0 20px;">` +
          `<div class="sectionhead">` +
            `<div>` +
              `<p class="eyebrow">Frequently Asked Questions</p>` +
              `<h2>Expert Answers for UAE Clients</h2>` +
            `</div>` +
          `</div>` +
          `<div class="faq-grid">` +
            art.faqsEn.map(f => `
              <article class="faq-card">
                <h3>${f.q}</h3>
                <p>${f.a}</p>
              </article>
            `).join('') +
          `</div>` +
        `</section>` +
        `<div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">` +
          `<h4 style="color:var(--bronze);font-size:18px;">Planning a Fit-Out Project in Abu Dhabi or Dubai?</h4>` +
          `<p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">Our team brings 11+ continuous years of UAE site execution and thousands of completed projects. Share your drawings or BOQ for an itemized quotation within 24 to 48 hours.</p>` +
          `<div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">` +
            `<a class="button" href="/contact/">Request a quotation</a>` +
            `<a class="button" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20read%20your%20article%20and%20would%20like%20to%20discuss%20a%20project." style="background:#fff;color:#151613;border-color:#fff;">WhatsApp our estimators</a>` +
          `</div>` +
        `</div>` +
      `</article>` +
    `</main>` +
    `<footer>` +
      `<div>` +
        `<span class="wordmark">NASAQ <span lang="ar">نسق</span></span>` +
        `<p>Spaces in harmony.</p>` +
        `<p class="small">NASAQ Interior Design Implementation Works – L.L.C – S.P.C<br>Abu Dhabi, United Arab Emirates</p>` +
      `</div>` +
      `<div>` +
        `<a href="tel:+971505334861">+971 50 533 4861</a>` +
        `<a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a>` +
        `<a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a>` +
        `<a href="https://www.instagram.com/nasaq.fitout/">Instagram · @nasaq.fitout</a>` +
      `</div>` +
      `<div>` +
        `<a href="/services/">Our services</a>` +
        `<a href="/insights/">Insights & Guides</a>` +
        `<a href="/about/">About NASAQ</a>` +
        `<a href="/contact/">Start a conversation</a>` +
        `<p class="small">© 2026 NASAQ</p>` +
      `</div>` +
    `</footer>` +
    `<a class="floating" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project." aria-label="Contact NASAQ on WhatsApp">WhatsApp</a>` +
  `</body></html>`;

  fs.writeFileSync(path.join(artDir, 'index.html'), html, 'utf8');
  console.log(`Created English article: dist/insights/${art.slug}/index.html`);
}

// 2. Generate All 5 Arabic Article Pages
console.log("Generating 5 Arabic articles under dist/ar/insights/ ...");
for (const art of articles) {
  const artDir = path.join(arInsightsDir, art.slug);
  if (!fs.existsSync(artDir)) fs.mkdirSync(artDir, { recursive: true });

  const canonical = `https://nasaqfitout.ae/ar/insights/${art.slug}/`;
  const enCanonical = `https://nasaqfitout.ae/insights/${art.slug}/`;
  const schema = buildArticleSchema(art, true);

  const html = `<!doctype html><html lang="ar" dir="rtl"><head>` +
    `<meta charset="utf-8">` +
    `<meta name="viewport" content="width=device-width,initial-scale=1">` +
    `<title>${art.titleAr} | نسق</title>` +
    `<meta name="description" content="${art.descAr}">` +
    `<meta name="theme-color" content="#181918">` +
    `<link rel="canonical" href="${canonical}">` +
    `<link rel="alternate" hreflang="ar" href="${canonical}">` +
    `<link rel="alternate" hreflang="en" href="${enCanonical}">` +
    `<link rel="alternate" hreflang="x-default" href="${enCanonical}">` +
    `<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">` +
    `<link rel="alternate icon" href="/assets/favicon.png">` +
    `<link rel="stylesheet" href="/style.css?v=3">` +
    `<meta name="geo.region" content="AE-AZ">` +
    `<meta name="geo.placename" content="أبوظبي">` +
    `<meta name="geo.position" content="24.4539;54.3773">` +
    `<meta name="ICBM" content="24.4539, 54.3773">` +
    `<meta property="og:site_name" content="نسق | NASAQ">` +
    `<meta property="og:type" content="article">` +
    `<meta property="og:locale" content="ar_AE">` +
    `<meta property="og:locale:alternate" content="en_AE">` +
    `<meta property="og:title" content="${art.titleAr} | نسق">` +
    `<meta property="og:description" content="${art.descAr}">` +
    `<meta property="og:url" content="${canonical}">` +
    `<meta property="og:image" content="https://nasaqfitout.ae${art.image}">` +
    `<meta name="twitter:card" content="summary_large_image">` +
    `<meta name="twitter:title" content="${art.titleAr} | نسق">` +
    `<meta name="twitter:description" content="${art.descAr}">` +
    `<meta name="twitter:image" content="https://nasaqfitout.ae${art.image}">` +
    `<script type="application/ld+json">${JSON.stringify(schema)}</script>` +
    `<script src="/app.js" defer></script>` +
  `</head><body>` +
    `<a class="skip" href="#main">تخطي إلى المحتوى</a>` +
    `<header>` +
      `<a class="brand" href="/ar/" aria-label="الرئيسية نسق"><img src="/assets/logo.svg" alt="شعار شركة نسق" width="500" height="500"></a>` +
      `<nav aria-label="التنقل الرئيسي">` +
        `<a href="/ar/services/">الخدمات</a>` +
        `<a href="/ar/projects/">التصاميم</a>` +
        `<a href="/ar/insights/">المقالات</a>` +
        `<a href="/ar/about/">من نحن</a>` +
        `<a href="/ar/contact/">اتصل بنا</a>` +
      `</nav>` +
      `<a class="lang-switch" href="${enCanonical.replace('https://nasaqfitout.ae', '')}" aria-label="English Version">English</a>` +
      `<a class="navcta" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20مناقشة%20مشروع%20فيت%20آوت%20وديكور.">طلب استشارة</a>` +
      `<button id="menu" aria-label="افتح القائمة" aria-expanded="false">القائمة</button>` +
    `</header>` +
    `<main id="main">` +
      `<article class="article-container">` +
        `<div class="article-header">` +
          `<span class="article-badge">${art.badgeAr}</span>` +
          `<h1>${art.titleAr}</h1>` +
          `<div class="article-meta-row">` +
            `<span>إعداد: الفريق الهندسي لشركة نسق</span>` +
            `<span>•</span>` +
            `<span>${art.readTimeAr}</span>` +
            `<span>•</span>` +
            `<span>الممارسات الميدانية بالإمارات</span>` +
          `</div>` +
        `</div>` +
        `<img class="article-featured-img" src="${art.image}" alt="${art.titleAr}" width="1536" height="864" loading="eager">` +
        `<div class="article-content">` +
          art.contentHtmlAr +
        `</div>` +
        `<section class="section faq-section" style="padding:60px 0 20px;">` +
          `<div class="sectionhead">` +
            `<div>` +
              `<p class="eyebrow">الأسئلة الشائعة</p>` +
              `<h2>إجابات مباشرة للملاك في الإمارات</h2>` +
            `</div>` +
          `</div>` +
          `<div class="faq-grid">` +
            art.faqsAr.map(f => `
              <article class="faq-card">
                <h3>${f.q}</h3>
                <p>${f.a}</p>
              </article>
            `).join('') +
          `</div>` +
        `</section>` +
        `<div class="callout" style="margin-top:50px;background:#222321;color:#fff;border-color:var(--bronze);">` +
          `<h4 style="color:var(--bronze);font-size:18px;">هل تخطط لمشروع فيت آوت أو ديكور في أبوظبي أو دبي؟</h4>` +
          `<p style="color:#d8d9d0;margin-top:6px;line-height:1.7;">يتمتع فريقنا بخبرة تتجاوز 11 عاماً في تنفيذ المشاريع بالإمارات مع إنجاز آلاف المساحات بنجاح. أرسل مخططاتك أو جدول الكميات لدراستها وتزويدكم بعرض أسعار شفاف خلال 24-48 ساعة.</p>` +
          `<div style="margin-top:20px;display:flex;gap:14px;flex-wrap:wrap;">` +
            `<a class="button" href="/ar/contact/">طلب عرض أسعار</a>` +
            `<a class="button" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20قرأت%20المقال%20وأود%20مناقشة%20مشروع%20فيت%20آوت." style="background:#fff;color:#151613;border-color:#fff;">تواصل عبر الواتساب مباشرة</a>` +
          `</div>` +
        `</div>` +
      `</article>` +
    `</main>` +
    `<footer>` +
      `<div>` +
        `<span class="wordmark">نسق <span lang="en">NASAQ</span></span>` +
        `<p>تناغم في المساحات.</p>` +
        `<p class="small">شركة نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م<br>أبوظبي، دولة الإمارات العربية المتحدة</p>` +
      `</div>` +
      `<div>` +
        `<a href="tel:+971505334861">+971 50 533 4861</a>` +
        `<a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a>` +
        `<a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a>` +
        `<a href="https://www.instagram.com/nasaq.fitout/">إنستغرام · @nasaq.fitout</a>` +
      `</div>` +
      `<div>` +
        `<a href="/ar/services/">خدماتنا</a>` +
        `<a href="/ar/insights/">المقالات والأدلة</a>` +
        `<a href="/ar/about/">عن نسق</a>` +
        `<a href="/ar/contact/">ابدأ محادثة</a>` +
        `<p class="small">© 2026 نسق</p>` +
      `</div>` +
    `</footer>` +
    `<a class="floating" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20مناقشة%20مشروع%20فيت%20آوت%20وديكور." aria-label="تواصل مع نسق عبر الواتساب">واتساب</a>` +
  `</body></html>`;

  fs.writeFileSync(path.join(artDir, 'index.html'), html, 'utf8');
  console.log(`Created Arabic article: dist/ar/insights/${art.slug}/index.html`);
}

// 3. Generate English Insights Hub Index
console.log("Generating English Insights Hub: dist/insights/index.html ...");
const enHubHtml = `<!doctype html><html lang="en"><head>` +
  `<meta charset="utf-8">` +
  `<meta name="viewport" content="width=device-width,initial-scale=1">` +
  `<title>Interior Fit-Out Guides & Insights UAE | NASAQ</title>` +
  `<meta name="description" content="Expert guides and answers to UAE interior fit-out questions: costs per sqft, Abu Dhabi TAMM approvals, crack-free gypsum ceilings, and acoustic soundproofing.">` +
  `<meta name="theme-color" content="#181918">` +
  `<link rel="canonical" href="https://nasaqfitout.ae/insights/">` +
  `<link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/">` +
  `<link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/">` +
  `<link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/">` +
  `<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">` +
  `<link rel="alternate icon" href="/assets/favicon.png">` +
  `<link rel="stylesheet" href="/style.css?v=3">` +
  `<meta name="geo.region" content="AE-AZ">` +
  `<meta name="geo.placename" content="Abu Dhabi">` +
  `<meta name="geo.position" content="24.4539;54.3773">` +
  `<meta name="ICBM" content="24.4539, 54.3773">` +
  `<meta property="og:site_name" content="NASAQ | نسق">` +
  `<meta property="og:type" content="website">` +
  `<meta property="og:locale" content="en_AE">` +
  `<meta property="og:locale:alternate" content="ar_AE">` +
  `<meta property="og:title" content="Interior Fit-Out Guides & Insights UAE | NASAQ">` +
  `<meta property="og:description" content="Expert guides and answers to UAE interior fit-out questions: costs per sqft, Abu Dhabi TAMM approvals, crack-free gypsum ceilings, and acoustic soundproofing.">` +
  `<meta property="og:url" content="https://nasaqfitout.ae/insights/">` +
  `<meta property="og:image" content="https://nasaqfitout.ae/assets/cost-guide.jpg">` +
  `<meta name="twitter:card" content="summary_large_image">` +
  `<meta name="twitter:title" content="Interior Fit-Out Guides & Insights UAE | NASAQ">` +
  `<meta name="twitter:description" content="Expert guides and answers to UAE interior fit-out questions: costs per sqft, Abu Dhabi TAMM approvals, crack-free gypsum ceilings, and acoustic soundproofing.">` +
  `<meta name="twitter:image" content="https://nasaqfitout.ae/assets/cost-guide.jpg">` +
  `<script type="application/ld+json">` +
  JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      businessEntityEn,
      {
        "@type": "CollectionPage",
        "name": "NASAQ Interior Fit-Out Guides & Insights",
        "description": "Authoritative engineering and costing guides for interior fit-out and decor in the UAE.",
        "url": "https://nasaqfitout.ae/insights/",
        "hasPart": articles.map(a => ({
          "@type": "Article",
          "name": a.titleEn,
          "url": `https://nasaqfitout.ae/insights/${a.slug}/`
        }))
      }
    ]
  }) +
  `</script>` +
  `<script src="/app.js" defer></script>` +
`</head><body>` +
  `<a class="skip" href="#main">Skip to content</a>` +
  `<header>` +
    `<a class="brand" href="/" aria-label="NASAQ home"><img src="/assets/logo.svg" alt="NASAQ approved logo" width="500" height="500"></a>` +
    `<nav aria-label="Main navigation">` +
      `<a href="/services/">Services</a>` +
      `<a href="/projects/">Concepts</a>` +
      `<a href="/insights/">Insights</a>` +
      `<a href="/about/">About</a>` +
      `<a href="/contact/">Contact</a>` +
    `</nav>` +
    `<a class="lang-switch" href="/ar/insights/" aria-label="النسخة العربية">العربية</a>` +
    `<a class="navcta" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project.">Discuss your project</a>` +
    `<button id="menu" aria-label="Open navigation" aria-expanded="false">Menu</button>` +
  `</header>` +
  `<main id="main">` +
    `<section class="intro">` +
      `<p class="eyebrow">Knowledge & Guidance · UAE Fit-Out</p>` +
      `<h1>Guides & Insights.<br>Clarity for your project.</h1>` +
      `<p>Practical, authoritative answers to the most frequent questions UAE homeowners, architects, and corporate clients ask about interior fit-out, gypsum craft, costs, and statutory approvals.</p>` +
    `</section>` +
    `<section class="section">` +
      `<div class="insights-grid">` +
        articles.map(a => `
          <a class="article-card" href="/insights/${a.slug}/">
            <img class="article-card-img" src="${a.image}" alt="${a.titleEn}" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">${a.badgeEn}</span>
              <h3>${a.titleEn}</h3>
              <p>${a.summaryEn}</p>
              <div class="article-card-meta">
                <span>${a.readTimeEn}</span> • <span>Read Guide →</span>
              </div>
            </div>
          </a>
        `).join('') +
      `</div>` +
    `</section>` +
    `<section class="cta">` +
      `<p class="eyebrow">Have a specific question about your space?</p>` +
      `<h2>Let’s discuss your interior project.</h2>` +
      `<p style="margin:0 auto 30px;max-width:560px;color:#454640;">Share your drawings or BOQ with our estimation team. We provide transparent, itemized quotations within 24 to 48 hours.</p>` +
      `<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">` +
        `<a class="button" href="/contact/">Request a quotation</a>` +
        `<a class="button" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20project." style="background:#222321;color:#fff;border-color:#222321;">WhatsApp our team</a>` +
      `</div>` +
      `<a class="plain" href="tel:+971505334861">Direct line: +971 50 533 4861</a>` +
    `</section>` +
  `</main>` +
  `<footer>` +
    `<div>` +
      `<span class="wordmark">NASAQ <span lang="ar">نسق</span></span>` +
      `<p>Spaces in harmony.</p>` +
      `<p class="small">NASAQ Interior Design Implementation Works – L.L.C – S.P.C<br>Abu Dhabi, United Arab Emirates</p>` +
    `</div>` +
    `<div>` +
      `<a href="tel:+971505334861">+971 50 533 4861</a>` +
      `<a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a>` +
      `<a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a>` +
      `<a href="https://www.instagram.com/nasaq.fitout/">Instagram · @nasaq.fitout</a>` +
    `</div>` +
    `<div>` +
      `<a href="/services/">Our services</a>` +
      `<a href="/insights/">Insights & Guides</a>` +
      `<a href="/about/">About NASAQ</a>` +
      `<a href="/contact/">Start a conversation</a>` +
      `<p class="small">© 2026 NASAQ</p>` +
    `</div>` +
  `</footer>` +
  `<a class="floating" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20would%20like%20to%20discuss%20a%20fit-out%20project." aria-label="Contact NASAQ on WhatsApp">WhatsApp</a>` +
`</body></html>`;

fs.writeFileSync(path.join(enInsightsDir, 'index.html'), enHubHtml, 'utf8');
console.log("Created English Insights Hub: dist/insights/index.html");

// 4. Generate Arabic Insights Hub Index
console.log("Generating Arabic Insights Hub: dist/ar/insights/index.html ...");
const arHubHtml = `<!doctype html><html lang="ar" dir="rtl"><head>` +
  `<meta charset="utf-8">` +
  `<meta name="viewport" content="width=device-width,initial-scale=1">` +
  `<title>دليل ومقالات الفيت آوت والتشطيب الداخلي في الإمارات | نسق</title>` +
  `<meta name="description" content="أدلة هندسية وإجابات شاملة لأسئلة الفيت آوت في الإمارات: التكاليف للمتر المربع، تصاريح منصة تم بأبوظبي، تجنب شروخ الأسقف الجبسية، والعزل الصوتي.">` +
  `<meta name="theme-color" content="#181918">` +
  `<link rel="canonical" href="https://nasaqfitout.ae/ar/insights/">` +
  `<link rel="alternate" hreflang="ar" href="https://nasaqfitout.ae/ar/insights/">` +
  `<link rel="alternate" hreflang="en" href="https://nasaqfitout.ae/insights/">` +
  `<link rel="alternate" hreflang="x-default" href="https://nasaqfitout.ae/insights/">` +
  `<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">` +
  `<link rel="alternate icon" href="/assets/favicon.png">` +
  `<link rel="stylesheet" href="/style.css?v=3">` +
  `<meta name="geo.region" content="AE-AZ">` +
  `<meta name="geo.placename" content="أبوظبي">` +
  `<meta name="geo.position" content="24.4539;54.3773">` +
  `<meta name="ICBM" content="24.4539, 54.3773">` +
  `<meta property="og:site_name" content="نسق | NASAQ">` +
  `<meta property="og:type" content="website">` +
  `<meta property="og:locale" content="ar_AE">` +
  `<meta property="og:locale:alternate" content="en_AE">` +
  `<meta property="og:title" content="دليل ومقالات الفيت آوت والتشطيب الداخلي في الإمارات | نسق">` +
  `<meta property="og:description" content="أدلة هندسية وإجابات شاملة لأسئلة الفيت آوت في الإمارات: التكاليف للمتر المربع، تصاريح منصة تم بأبوظبي، تجنب شروخ الأسقف الجبسية، والعزل الصوتي.">` +
  `<meta property="og:url" content="https://nasaqfitout.ae/ar/insights/">` +
  `<meta property="og:image" content="https://nasaqfitout.ae/assets/cost-guide.jpg">` +
  `<meta name="twitter:card" content="summary_large_image">` +
  `<meta name="twitter:title" content="دليل ومقالات الفيت آوت والتشطيب الداخلي في الإمارات | نسق">` +
  `<meta name="twitter:description" content="أدلة هندسية وإجابات شاملة لأسئلة الفيت آوت في الإمارات: التكاليف للمتر المربع، تصاريح منصة تم بأبوظبي، تجنب شروخ الأسقف الجبسية، والعزل الصوتي.">` +
  `<meta name="twitter:image" content="https://nasaqfitout.ae/assets/cost-guide.jpg">` +
  `<script type="application/ld+json">` +
  JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      businessEntityAr,
      {
        "@type": "CollectionPage",
        "name": "أدلة ومقالات الفيت آوت والتصميم الداخلي - شركة نسق",
        "description": "أدلة هندسية وإجابات متخصصة لتكاليف واشتراطات وأساليب الفيت آوت والديكور في دولة الإمارات.",
        "url": "https://nasaqfitout.ae/ar/insights/",
        "hasPart": articles.map(a => ({
          "@type": "Article",
          "name": a.titleAr,
          "url": `https://nasaqfitout.ae/ar/insights/${a.slug}/`
        }))
      }
    ]
  }) +
  `</script>` +
  `<script src="/app.js" defer></script>` +
`</head><body>` +
  `<a class="skip" href="#main">تخطي إلى المحتوى</a>` +
  `<header>` +
    `<a class="brand" href="/ar/" aria-label="الرئيسية نسق"><img src="/assets/logo.svg" alt="شعار شركة نسق" width="500" height="500"></a>` +
    `<nav aria-label="التنقل الرئيسي">` +
      `<a href="/ar/services/">الخدمات</a>` +
      `<a href="/ar/projects/">التصاميم</a>` +
      `<a href="/ar/insights/">المقالات</a>` +
      `<a href="/ar/about/">من نحن</a>` +
      `<a href="/ar/contact/">اتصل بنا</a>` +
    `</nav>` +
    `<a class="lang-switch" href="/insights/" aria-label="English Version">English</a>` +
    `<a class="navcta" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20مناقشة%20مشروع%20فيت%20آوت%20وديكور.">طلب استشارة</a>` +
    `<button id="menu" aria-label="افتح القائمة" aria-expanded="false">القائمة</button>` +
  `</header>` +
  `<main id="main">` +
    `<section class="intro">` +
      `<p class="eyebrow">المعرفة والإرشاد الهندسي · الفيت آوت في الإمارات</p>` +
      `<h1>المقالات والأدلة المتخصصة.<br>وضوح كامل لمشروعك.</h1>` +
      `<p>إجابات عملية وموثوقة لأهم الأسئلة التي يبحث عنها الملاك والمهندسون في الإمارات حول تكاليف الفيت آوت، تصاريح تم، معالجة الجبس، والعزل الصوتي.</p>` +
    `</section>` +
    `<section class="section">` +
      `<div class="insights-grid">` +
        articles.map(a => `
          <a class="article-card" href="/ar/insights/${a.slug}/">
            <img class="article-card-img" src="${a.image}" alt="${a.titleAr}" width="600" height="338" loading="lazy">
            <div class="article-card-body">
              <span class="article-badge">${a.badgeAr}</span>
              <h3>${a.titleAr}</h3>
              <p>${a.summaryAr}</p>
              <div class="article-card-meta">
                <span>${a.readTimeAr}</span> • <span>اقرأ الدليل الكامل ←</span>
              </div>
            </div>
          </a>
        `).join('') +
      `</div>` +
    `</section>` +
    `<section class="cta">` +
      `<p class="eyebrow">هل لديك استفسار محدد حول مساحتك؟</p>` +
      `<h2>تحدث مباشرة مع فريقنا الهندسي.</h2>` +
      `<p style="margin:0 auto 30px;max-width:560px;color:#454640;">شارك مخططاتك أو جدول الكميات مع فريق التسعير لدراسة المواصفات وتزويدكم بعرض أسعار دقيق خلال 24 إلى 48 ساعة.</p>` +
      `<div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap;">` +
        `<a class="button" href="/ar/contact/">طلب عرض أسعار</a>` +
        `<a class="button" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20مناقشة%20مشروع%20فيت%20آوت." style="background:#222321;color:#fff;border-color:#222321;">تواصل عبر الواتساب</a>` +
      `</div>` +
      `<a class="plain" href="tel:+971505334861">الاتصال المباشر: 0505334861 971+</a>` +
    `</section>` +
  `</main>` +
  `<footer>` +
    `<div>` +
      `<span class="wordmark">نسق <span lang="en">NASAQ</span></span>` +
      `<p>تناغم في المساحات.</p>` +
      `<p class="small">شركة نسق لأعمال تنفيذ التصميم الداخلي شركة الشخص الواحد ذ.م.م<br>أبوظبي، دولة الإمارات العربية المتحدة</p>` +
    `</div>` +
    `<div>` +
      `<a href="tel:+971505334861">+971 50 533 4861</a>` +
      `<a href="mailto:info@nasaqfitout.ae">info@nasaqfitout.ae</a>` +
      `<a href="mailto:ossama@nasaqfitout.ae">ossama@nasaqfitout.ae</a>` +
      `<a href="https://www.instagram.com/nasaq.fitout/">إنستغرام · @nasaq.fitout</a>` +
    `</div>` +
    `<div>` +
      `<a href="/ar/services/">خدماتنا</a>` +
      `<a href="/ar/insights/">المقالات والأدلة</a>` +
      `<a href="/ar/about/">عن نسق</a>` +
      `<a href="/ar/contact/">ابدأ محادثة</a>` +
      `<p class="small">© 2026 نسق</p>` +
    `</div>` +
  `</footer>` +
  `<a class="floating" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20أود%20مناقشة%20مشروع%20فيت%20آوت%20وديكور." aria-label="تواصل مع نسق عبر الواتساب">واتساب</a>` +
`</body></html>`;

fs.writeFileSync(path.join(arInsightsDir, 'index.html'), arHubHtml, 'utf8');
console.log("Created Arabic Insights Hub: dist/ar/insights/index.html");

// 5. Update Navigation Bar on existing pages to include Insights
console.log("Updating navigation across existing pages to include Insights link...");
function updateNavInHtmlFile(filePath, isArabic) {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // Update English nav
  if (!isArabic) {
    if (!html.includes('<a href="/insights/">')) {
      html = html.replace('<a href="/about/">', '<a href="/insights/">Insights</a><a href="/about/">');
    }
    if (!html.includes('<a href="/insights/">Insights & Guides</a>') && html.includes('<a href="/about/">About NASAQ</a>')) {
      html = html.replace('<a href="/about/">About NASAQ</a>', '<a href="/insights/">Insights & Guides</a><a href="/about/">About NASAQ</a>');
    }
  } else {
    // Update Arabic nav
    if (!html.includes('<a href="/ar/insights/">')) {
      html = html.replace('<a href="/ar/about/">', '<a href="/ar/insights/">المقالات</a><a href="/ar/about/">');
    }
    if (!html.includes('<a href="/ar/insights/">المقالات والأدلة</a>') && html.includes('<a href="/ar/about/">عن نسق</a>')) {
      html = html.replace('<a href="/ar/about/">عن نسق</a>', '<a href="/ar/insights/">المقالات والأدلة</a><a href="/ar/about/">عن نسق</a>');
    }
  }
  fs.writeFileSync(filePath, html, 'utf8');
}

const allExistingEn = [
  'index.html', 'about/index.html', 'contact/index.html', 'projects/index.html', 'services/index.html',
  'services/interior-fit-out/index.html', 'services/villa-fit-out/index.html', 'services/office-fit-out/index.html',
  'services/commercial-fit-out/index.html', 'services/gypsum-board-works/index.html', 'services/false-ceilings/index.html',
  'services/interior-partitions/index.html', 'services/interior-renovation/index.html', 'services/residential-fit-out/index.html'
];

allExistingEn.forEach(rel => {
  updateNavInHtmlFile(path.join(distDir, rel), false);
  updateNavInHtmlFile(path.join(distDir, 'ar', rel), true);
});

// 6. Update Sitemap.xml with all 40 URLs
console.log("Regenerating 40-URL bilingual XML sitemap...");
const allUrls = [
  // 14 Core Pages
  { en: "", ar: "", prio: "1.0" },
  { en: "about/", ar: "about/", prio: "0.9" },
  { en: "contact/", ar: "contact/", prio: "0.9" },
  { en: "projects/", ar: "projects/", prio: "0.8" },
  { en: "services/", ar: "services/", prio: "0.9" },
  { en: "services/interior-fit-out/", ar: "services/interior-fit-out/", prio: "0.8" },
  { en: "services/villa-fit-out/", ar: "services/villa-fit-out/", prio: "0.8" },
  { en: "services/office-fit-out/", ar: "services/office-fit-out/", prio: "0.8" },
  { en: "services/commercial-fit-out/", ar: "services/commercial-fit-out/", prio: "0.8" },
  { en: "services/gypsum-board-works/", ar: "services/gypsum-board-works/", prio: "0.8" },
  { en: "services/false-ceilings/", ar: "services/false-ceilings/", prio: "0.8" },
  { en: "services/interior-partitions/", ar: "services/interior-partitions/", prio: "0.8" },
  { en: "services/interior-renovation/", ar: "services/interior-renovation/", prio: "0.8" },
  { en: "services/residential-fit-out/", ar: "services/residential-fit-out/", prio: "0.8" },
  // Insights Hub
  { en: "insights/", ar: "insights/", prio: "0.9" },
  // 5 Articles
  ...articles.map(a => ({
    en: `insights/${a.slug}/`,
    ar: `insights/${a.slug}/`,
    prio: "0.8"
  }))
];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
  `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

for (const u of allUrls) {
  const enUrl = `https://nasaqfitout.ae/${u.en}`;
  const arUrl = `https://nasaqfitout.ae/ar/${u.ar}`;

  sitemapXml += `  <url>\n` +
    `    <loc>${enUrl}</loc>\n` +
    `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>\n` +
    `    <changefreq>weekly</changefreq>\n` +
    `    <priority>${u.prio}</priority>\n` +
    `  </url>\n`;

  sitemapXml += `  <url>\n` +
    `    <loc>${arUrl}</loc>\n` +
    `    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>\n` +
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}"/>\n` +
    `    <changefreq>weekly</changefreq>\n` +
    `    <priority>${u.prio}</priority>\n` +
    `  </url>\n`;
}

sitemapXml += `</urlset>\n`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`Bilingual XML Sitemap generated at dist/sitemap.xml with ${allUrls.length * 2} URLs.`);

// 7. Update llms.txt with Articles summaries for AI Bots
console.log("Updating dist/llms.txt with Insights and Technical Knowledge base...");
const llmsPath = path.join(distDir, 'llms.txt');
let llmsContent = fs.readFileSync(llmsPath, 'utf8');

const newEnLlmsSection = `\n\n## NASAQ Technical Insights & Guides (English)\n` +
  articles.map(a => `- **${a.titleEn}**: https://nasaqfitout.ae/insights/${a.slug}/\n  Summary: ${a.summaryEn}`).join('\n\n') +
  `\n\n## مقالات وأدلة شركة نسق التخصصية (باللغة العربية)\n` +
  articles.map(a => `- **${a.titleAr}**: https://nasaqfitout.ae/ar/insights/${a.slug}/\n  ملخص: ${a.summaryAr}`).join('\n\n');

if (!llmsContent.includes('## NASAQ Technical Insights & Guides')) {
  llmsContent += newEnLlmsSection;
  fs.writeFileSync(llmsPath, llmsContent, 'utf8');
  console.log("Appended guides to dist/llms.txt");
}

console.log("All 10 bilingual articles, 2 hubs, 40 sitemap URLs, and AI index successfully generated!");
