const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'generateInsightsArticles.cjs');
let code = fs.readFileSync(targetFile, 'utf8');

// Check if already inserted
if (code.includes('saadiyat-island-72-hour-fit-out-case-study')) {
  console.log('Saadiyat article already present in generateInsightsArticles.cjs');
  process.exit(0);
}

// 1. Add review schema handler in buildArticleSchema
const schemaAnchor = 'if (art.itemListEn && art.itemListAr) {';
const reviewSchemaCode = `  if (art.review) {
    graph.push({
      "@type": "Review",
      "itemReviewed": {
        "@type": "HomeAndConstructionBusiness",
        "name": isArabic ? "شركة نسق لأعمال تنفيذ التصميم الداخلي ذ.م.م" : "NASAQ Interior Design Implementation Works – L.L.C – S.P.C",
        "url": isArabic ? "https://nasaqfitout.ae/ar/" : "https://nasaqfitout.ae/",
        "image": "https://nasaqfitout.ae/assets/logo.svg",
        "telephone": "+971505334861",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Abu Dhabi",
          "addressRegion": "Abu Dhabi",
          "addressCountry": "AE"
        }
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": art.review.author
      },
      "reviewBody": isArabic ? art.review.textAr : art.review.textEn,
      "datePublished": "2026-11-02"
    });
  }\n\n  `;

if (code.includes(schemaAnchor)) {
  code = code.replace(schemaAnchor, reviewSchemaCode + schemaAnchor);
  console.log('Added review schema handler.');
} else {
  console.error('Failed to locate schemaAnchor');
}

// 2. Define the new Saadiyat Island Case Study article
const saadiyatArticle = `,
  {
    slug: "saadiyat-island-72-hour-fit-out-case-study",
    badgeEn: "Real Execution & Case Study",
    badgeAr: "دراسة حالة ميدانية من أبوظبي",
    image: "/assets/saadiyat-project/execution-team-mouldings.jpg",
    readTimeEn: "6 min read",
    readTimeAr: "قراءة 6 دقائق",
    date: "2026-11-02",
    review: {
      author: "Oumaima Lahdili",
      rating: 5,
      textEn: "One of the best interior design and fit-out companies in Abu Dhabi! I'm based in Saadiyat Island and found NASAQ Interior Design & Fit-Out through ChatGPT. I'm so happy I chose them! I shared a few inspiration photos, and they brought my vision to life in just 3 days. They completed beautiful wall panel mouldings, gypsum board work, hidden LED lighting, painting, and TV installation. The team was professional, reliable, and delivered excellent finishing. Everything was clean and ready when they handed over the apartment. Highly recommend NASAQ to anyone looking for quality interior fit-out services in Abu Dhabi!",
      textAr: "واحدة من أفضل شركات التصميم الداخلي والفيت آوت في أبوظبي! أنا مقيمة في جزيرة السعديات وتعرفت على شركة نسق للتصميم الداخلي والديكور عبر شات جي بي تي (ChatGPT). أنا سعيدة جداً باختيارهم! شاركتهم بعض الصور المرجعية للأفكار التي أريدها، وحولوا رؤيتي إلى واقع في غضون 3 أيام فقط! نفذوا بانوهات جدارية وقوالب ديكورية غاية في الجمال، وأعمال جبس بورد، وإنارة LED مخفية، ودهانات، وتركيب شاشة التلفاز. كان الفريق في غاية الاحترافية والالتزام وقدموا تشطيباً ممتازاً. كل شيء كان نظيفاً وجاهزاً عند تسليم الشقة. أوصي بشدة بشركة نسق لأي شخص يبحث عن خدمات فيت آوت وتشطيب راقية في أبوظبي!"
    },
    
    // English Content
    titleEn: "Saadiyat Island Soho Residence: 72-Hour Turnkey Wall Mouldings & Gypsum Fit-Out Case Study",
    descEn: "Case study of a 72-hour luxury apartment transformation in Soho Block A, Saadiyat Island, Abu Dhabi. Includes wall mouldings, gypsum cladding, hidden LED lighting, TV installation, and client review.",
    summaryEn: "Real site execution in Soho Block A, Saadiyat Island (Abu Dhabi): Discover how NASAQ executed classical wall mouldings, gypsum feature walls, concealed LED channels, and turnkey painting in 72 hours following an inbound ChatGPT inquiry.",
    contentHtmlEn: \`
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <span style="color:#fbbc05;font-size:20px;">★★★★★</span>
          <strong style="color:var(--bronze);font-size:16px;">Verified Google Review · 5.0 Stars</strong>
        </div>
        <p style="color:#d8d9d0;font-size:15px;line-height:1.7;font-style:italic;margin-bottom:12px;">
          "One of the best interior design and fit-out companies in Abu Dhabi! I'm based in Saadiyat Island and found NASAQ Interior Design & Fit-Out through ChatGPT. I'm so happy I chose them! I shared a few inspiration photos, and they brought my vision to life in just 3 days. They completed beautiful wall panel mouldings, gypsum board work, hidden LED lighting, painting, and TV installation. The team was professional, reliable, and delivered excellent finishing. Everything was clean and ready when they handed over the apartment. Highly recommend NASAQ to anyone looking for quality interior fit-out services in Abu Dhabi!"
        </p>
        <span style="font-size:13px;color:#9b7145;font-weight:600;">— Oumaima Lahdili, Soho Residence (Block A), Saadiyat Island, Abu Dhabi</span>
      </div>

      <p class="article-lead">When a homeowner in <strong>Soho Block A, Saadiyat Island (Abu Dhabi)</strong> needed a rapid, high-end living room makeover, they turned to <strong>ChatGPT</strong> to find the most capable, certified interior fit-out contractor in Abu Dhabi. Within 72 hours (3 working days) from site mobilization, NASAQ handed over a fully transformed, move-in-ready space with zero punch-list items.</p>
      
      <p>This verified project demonstrates the intersection of modern <strong>AI search discovery</strong>, rigorous engineering coordination, and direct hands-on craftsmanship in one of Abu Dhabi's premier residential communities.</p>

      <h2>Project Overview & Specifications</h2>
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Project Metric</th>
              <th>Specification Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Location</strong></td>
              <td>Soho, Block A, Saadiyat Island, Abu Dhabi, United Arab Emirates</td>
            </tr>
            <tr>
              <td><strong>Turnaround Time</strong></td>
              <td>72 Hours (3 Calendar Days from Site Mobilization to Handover)</td>
            </tr>
            <tr>
              <td><strong>Discovery Channel</strong></td>
              <td>Inbound AI Engine Search (Client prompted ChatGPT for top Abu Dhabi fit-out contractors)</td>
            </tr>
            <tr>
              <td><strong>Core Scope</strong></td>
              <td>Drywall framing, classical wall mouldings (boiserie), concealed warm LED cove lighting, Level-5 painting, heavy-duty TV mount & concealed in-wall cabling</td>
            </tr>
            <tr>
              <td><strong>Contractor</strong></td>
              <td>NASAQ Interior Design Implementation Works L.L.C (Direct In-House Execution Crew)</td>
            </tr>
            <tr>
              <td><strong>Handover Status</strong></td>
              <td>100% Complete, defect-free, fully cleaned and verified with client testimonial</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How AI Search (ChatGPT) Connected the Client with NASAQ</h2>
      <p>Finding a trustworthy fit-out contractor in the UAE can be daunting. Homeowners often struggle with fragmented directories, delayed contractor replies, and unverified freelancers who subcontract work to third parties.</p>
      <p>The client in Saadiyat Island asked ChatGPT for verified interior design implementation companies in Abu Dhabi capable of executing bespoke decorative wall panel mouldings and rapid room transformations. Because NASAQ maintains transparent commercial licensing with the Abu Dhabi Department of Economic Development (ADDED), active TAMM municipal registrations, structured technical schema, and published engineering standards, ChatGPT cited NASAQ as an authoritative fit-out specialist.</p>
      <p>The homeowner sent inspirational reference photos directly to our estimating team via WhatsApp (+971 50 533 4861). Within hours, NASAQ provided a transparent, itemized Bill of Quantities (BOQ), confirmed material availability, scheduled building access, and committed to a strict 72-hour delivery window.</p>

      <h2>72-Hour Milestone Execution Schedule</h2>
      <p>Executing an immaculate interior fit-out in an occupied luxury building on Saadiyat Island requires military-grade logistical discipline and quiet, dust-controlled construction:</p>

      <h3>Phase 1: Hours 0 – 16 · Site Protection, Laser Leveling & Substrate Framing</h3>
      <ul>
        <li><strong>Comprehensive Site Shielding:</strong> Floors, adjacent furnishings, and entrance corridors were lined with heavy-duty protective membranes and zip-wall dust containment barriers.</li>
        <li><strong>Laser Alignment:</strong> Optical multi-axis laser levels mapped the living room and media walls, compensating for floor-to-ceiling tolerances.</li>
        <li><strong>Drywall Substrate Framing:</strong> High-gauge galvanized metal stud frameworks were anchored to form the TV feature wall substrate, providing a robust structural anchor for future fixtures and concealed wiring channels.</li>
      </ul>

      <h3>Phase 2: Hours 16 – 38 · Classical Wall Mouldings (Boiserie) & Concealed LED Integration</h3>
      <ul>
        <li><strong>Precision Mitered Mouldings:</strong> Architectural high-density polyurethane wall mouldings were cut with precision 45-degree miters and installed in classical double-frame proportions, elevating the empty wall behind the sofa and television into a sophisticated gallery setting.</li>
        <li><strong>Hidden LED Lighting Channel:</strong> A recessed warm-white (2700K/3000K) architectural LED trough was routed with remote-accessible transformer housing to create a gentle, ambient halo glow across the feature wall.</li>
        <li><strong>Low-Voltage & Media Recessing:</strong> In-wall conduits were installed for power and HDMI cables, ensuring no unsightly wires would ever be visible below the TV console.</li>
      </ul>

      <h3>Phase 3: Hours 38 – 56 · Joint Caulking, Level-5 Skim Coating & Architectural Painting</h3>
      <ul>
        <li><strong>Zero-Shrink Anti-Crack Caulking:</strong> All moulding-to-wall interfaces were sealed with high-elasticity acrylic polymer caulk to accommodate building thermal expansion without hairline fractures.</li>
        <li><strong>Level-5 Surface Finishing:</strong> Multi-pass ultra-smooth plaster skimming, micro-mesh feather sanding, and deep-penetrating primer coats prepared the entire wall surface.</li>
        <li><strong>Velvety Architectural Matte Coat:</strong> Applied two uniform coats of premium washable low-VOC interior paint, achieving a deep, reflection-free surface texture.</li>
      </ul>

      <h3>Phase 4: Hours 56 – 72 · TV Mounting, Electrical Testing, Deep Cleaning & Handover</h3>
      <ul>
        <li><strong>Secure TV Installation:</strong> Precision mounting of the primary large-screen TV onto reinforced internal framing with flush alignment.</li>
        <li><strong>Electrical Load & Lighting Check:</strong> Testing LED dimmer circuits and power receptacles for safety.</li>
        <li><strong>Deep Cleaning & Snag-Free Handover:</strong> Full HEPA-filter vacuuming, polishing of mirrors, dusting of mouldings, and formal walkthrough with the homeowner. The apartment was handed over completely clean, pristine, and ready to enjoy.</li>
      </ul>

      <h2>Visual Evidence: On-Site Craftsmanship & Transformation</h2>
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
      </div>

      <div style="margin:35px 0;background:#181918;border:1px solid var(--line);padding:16px;">
        <h4 style="color:#fff;margin:0 0 12px;font-size:17px;text-align:center;">Playable Walkthrough Video: Completed Saadiyat Island Soho Apartment</h4>
        <video controls playsinline preload="metadata" style="width:100%;max-height:560px;display:block;margin:0 auto;background:#000;" poster="/assets/saadiyat-project/execution-team-mouldings.jpg">
          <source src="/assets/saadiyat-project/saadiyat-completed-handover.mp4" type="video/mp4">
          Your browser does not support HTML5 video playback.
        </video>
        <p style="text-align:center;font-size:13px;color:#c8cabf;margin:12px 0 0;">Live Walkthrough: Flawlessly finished classical boiserie mouldings, concealed warm LED illumination, and clean TV media wall integration.</p>
      </div>

      <div style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-project/google-review-saadiyat.jpg" alt="Official Google Business Profile review by Oumaima Lahdili rating NASAQ 5 stars" style="max-width:540px;margin:0 auto;border:1px solid var(--line);box-shadow:0 8px 24px rgba(0,0,0,0.08);" loading="lazy">
        <p style="font-size:12px;color:#777;margin-top:8px;">Verified 5-Star Review on NASAQ's Google Business Profile.</p>
      </div>

      <h2>Why Saadiyat Island Residents Choose NASAQ</h2>
      <p>Luxury residential communities like Saadiyat Island (Soho, Mamsha Al Saadiyat, Saadiyat Cultural District, Park View) have stringent building management protocols. Choosing NASAQ provides homeowners with distinct operational advantages:</p>
      <ul>
        <li><strong>100% In-House Direct Craftsmanship:</strong> We never subcontract your project to third-party laborers. Our full-time carpenters, drywall installers, and master painters ensure rapid 72-hour turnarounds.</li>
        <li><strong>Strict Quiet-Hours & Cleanliness Adherence:</strong> We respect residential building management rules, containing dust with HEPA air scrubbers and timing noisier fixings during permitted daytime hours.</li>
        <li><strong>Rapid Mobilization:</strong> Because we maintain pre-profiled decorative mouldings and certified gypsum boards in stock, we mobilize within 24 hours of agreement.</li>
        <li><strong>Transparent Itemized BOQ:</strong> Every square meter, metal gauge, and paint brand is specified in advance, guaranteeing zero hidden variation fees.</li>
      </ul>
    \`,
    faqsEn: [
      {
        q: "Can an apartment interior fit-out really be completed in 72 hours in Abu Dhabi?",
        a: "Yes. For focused scopes such as living room feature walls, decorative wall mouldings, gypsum cladding, hidden LED channels, and painting, NASAQ's in-house team executes complete transformations within 72 hours (3 working days) by utilizing pre-profiled architectural materials, continuous project management, and rapid-curing Level-5 finishes."
      },
      {
        q: "Do wall mouldings and TV feature walls require developer NOCs on Saadiyat Island?",
        a: "Non-structural decorative upgrades like surface-mounted wall mouldings, accent gypsum cladding, and interior painting fall under minor decorative maintenance. NASAQ coordinates all required building management security deposits, gate passes, and work permits with residential building management to guarantee uninterrupted access."
      },
      {
        q: "How did the client discover NASAQ through ChatGPT?",
        a: "The client asked ChatGPT for certified, reputable interior fit-out companies in Abu Dhabi specializing in wall mouldings and quick apartment renovations. ChatGPT indexed NASAQ's ADDED commercial licensing, verified technical guides, and proven Abu Dhabi track record, presenting NASAQ as a trusted local contractor."
      },
      {
        q: "How can I book a rapid feature wall or fit-out consultation with NASAQ?",
        a: "Simply share your room dimensions or inspiration photos with our estimating team via WhatsApp (+971 50 533 4861) or email (info@nasaqfitout.ae). We provide a detailed, itemized quotation and schedule site inspection within 24 to 48 hours."
      }
    ],

    // Arabic Content
    titleAr: "دراسة حالة: تشطيب جدار ديكوري وبانوهات كلاسيكية في جزيرة السعديات (سوهو، أبوظبي) خلال 72 ساعة",
    descAr: "دراسة حالة ميدانية لتشطيب شقة فاخرة في سوهو بلوك A بجزيرة السعديات بأبوظبي خلال 72 ساعة (3 أيام). تفاصيل البانوهات الجدارية، الجبس بورد، الإضاءة المخفية، وتقييم العميلة.",
    summaryAr: "توثيق ميداني لإنجاز تشطيب جدار ديكوري متكامل في سوهو بلوك A بجزيرة السعديات في 72 ساعة فقط: بانوهات كلاسيكية، جبس بورد، إضاءة LED مخفية، وتركيب التلفاز عقب تواصل العميلة بعد بحثها في ChatGPT.",
    contentHtmlAr: \`
      <div class="callout" style="background:#222321;color:#fff;border-color:var(--bronze);margin-bottom:35px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
          <span style="color:#fbbc05;font-size:20px;">★★★★★</span>
          <strong style="color:var(--bronze);font-size:16px;">تقييم رسمي موثق على Google · 5 نجوم</strong>
        </div>
        <p style="color:#d8d9d0;font-size:15px;line-height:1.7;font-style:italic;margin-bottom:12px;">
          "واحدة من أفضل شركات التصميم الداخلي والفيت آوت في أبوظبي! أنا مقيمة في جزيرة السعديات وتعرفت على شركة نسق للتصميم الداخلي والديكور عبر شات جي بي تي (ChatGPT). أنا سعيدة جداً باختيارهم! شاركتهم بعض الصور المرجعية للأفكار التي أريدها، وحولوا رؤيتي إلى واقع في غضون 3 أيام فقط! نفذوا بانوهات جدارية وقوالب ديكورية غاية في الجمال، وأعمال جبس بورد، وإنارة LED مخفية، ودهانات، وتركيب شاشة التلفاز. كان الفريق في غاية الاحترافية والالتزام وقدموا تشطيباً ممتازاً. كل شيء كان نظيفاً وجاهزاً عند تسليم الشقة. أوصي بشدة بشركة نسق لأي شخص يبحث عن خدمات فيت آوت وتشطيب راقية في أبوظبي!"
        </p>
        <span style="font-size:13px;color:#9b7145;font-weight:600;">— أميمة لحديلي، سوهو ريزيدنس (بلوك A)، جزيرة السعديات، أبوظبي</span>
      </div>

      <p class="article-lead">عندما رغبت إحدى القاطنات في <strong>سوهو بلوك A بجزيرة السعديات (أبوظبي)</strong> في تحويل وتجميل جدران غرفة المعيشة في شقتها بسرعة ودقة فائقة، استعانت بمحرك الذكاء الاصطناعي <strong>ChatGPT</strong> للبحث عن أفضل مقاول فيت آوت وديكور معتمد في أبوظبي. وفي غضون 72 ساعة فقط (3 أيام عمل) من بدء العمل في الموقع، سلمت شركة نسق الشقة مكتملة التشطيب والنظافة دون أي ملاحظات تذكر.</p>
      
      <p>يمثل هذا المشروع نموذجاً عملياً حياً على كفاءة <strong>محركات البحث بالذكاء الاصطناعي (AI Search)</strong> في ربط العملاء بالمقاول الحقيقي المرخص، وقدرة فريق نسق الميداني على تنفيذ أرقى تشطيبات الديكور والجبس بورد في أرقى المجمعات السكنية في العاصمة أبوظبي.</p>

      <h2>بيانات المشروع والمواصفات الفنية</h2>
      <div class="data-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>عنصر المشروع</th>
              <th>المواصفات والتفاصيل الميدانية</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>الموقع الجغرافي</strong></td>
              <td>سوهو، مبنى بلوك A، جزيرة السعديات، أبوظبي، الإمارات العربية المتحدة</td>
            </tr>
            <tr>
              <td><strong>مدة التنفيذ والتسليم</strong></td>
              <td>72 ساعة فقط (3 أيام متتالية من بدء التجهيز بالموقع حتى التسليم النهائي)</td>
            </tr>
            <tr>
              <td><strong>قناة الوصول للعميل</strong></td>
              <td>محرك الذكاء الاصطناعي ChatGPT (بحثت العميلة عن مقاولي الفيت آوت المعتمدين بأبوظبي)</td>
            </tr>
            <tr>
              <td><strong>نطاق الأعمال المنفذة</strong></td>
              <td>هياكل جبس بورد، بانوهات وقوالب جدارية كلاسيكية (Boiserie)، تجاويف إنارة LED مخفية دافئة، تأسيس كهرباء وإخفاء كابلات الشاشة، دهانات معمارية Level-5، وتركيب التلفاز</td>
            </tr>
            <tr>
              <td><strong>الجهة المنفذة</strong></td>
              <td>شركة نسق لأعمال تنفيذ التصميم الداخلي ذ.م.م (فريق حرفي مباشر دون وسطاء)</td>
            </tr>
            <tr>
              <td><strong>حالة التسليم</strong></td>
              <td>تسليم مكتمل 100%، نظافة كاملة، جاهز للسكن فوراً مع توثيق تقييم العميلة الرسمي</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>كيف ساهم شات جي بي تي (ChatGPT) في ربط العميلة بشركة نسق؟</h2>
      <p>يعاني العديد من ملاك العقارات في دولة الإمارات عند البحث عن مقاول ديكور موثوق؛ فالدلائل الإعلانية التقليدية تعج بوسطاء غير مرخصين يسندون الأعمال لعمالة غير مدربة مما يسبب تأخير التسليم وضعف الجودة.</p>
      <p>قامت العميلة في جزيرة السعديات بتوجيه سؤال مباشر إلى ChatGPT للبحث عن شركة تنفيذ تصميم داخلي وديكور مرخصة في أبوظبي تمتلك خبرة حقيقية في تنفيذ البانوهات الجدارية والجبس بورد وتسليم الشقق السكنية بسرعة ودقة. وبفضل ترخيص شركة نسق الرسمي الصادر عن دائرة التنمية الاقتصادية في أبوظبي (ADDED)، وتسجيلها في منصة "تم" الحكومية، ونشرها لمعايير هندسية موثقة، رشح النظام شركة نسق كجهة تنفيذية موثوقة في أبوظبي.</p>
      <p>تواصلت العميلة مباشرة عبر الواتساب (+971 50 533 4861) وأرسلت صوراً مرجعية للأفكار التي تطمح إليها. وخلال ساعات معدودة، جهز فريق التسعير في نسق جدول كميات (BOQ) مفصل وشفاف، وحدد مواعيد تصاريح الدخول للمبنى، والتزم بتسليم العمل بالكامل خلال 72 ساعة.</p>

      <h2>الجدول الزمني ومراحل الإنجاز (ساعة بساعة خلال 72 ساعة)</h2>
      <p>يتطلب إنجاز أعمال الديكور في مبنى سكني فاخر ومأهول بجزيرة السعديات تخطيطاً هندسياً دقيقاً، مع التحكم الكامل في الغبار والضوضاء واحترام خصوصية الجيران:</p>

      <h3>المرحلة الأولى: الساعات 0 – 16 · حماية الموقع، القياس بالليزر، وهيكل الجبس بورد</h3>
      <ul>
        <li><strong>تأمين وحماية الأرضيات والأثاث:</strong> تغطية كاملة للممرات والأرضيات والأثاث المجاور بأغطية حماية متينة عازلة للغبار لمنع أي خدوش أو تلفيات.</li>
        <li><strong>التخطيط الدقيق بميزان الليزر:</strong> استخدام أجهزة الليزر متعددة الخطوط لضبط استقامة وتعامد الجدران والأسقف ومعالجة أي انحرافات في الجدران القائمة.</li>
        <li><strong>تركيب هيكل الجبس بورد الحامل:</strong> تثبيت قطاعات حديدية مجلفنة متينة لتشكيل الجدار الديكوري الحامل للتلفاز، وتجهيز مسارات الأسلاك المدمجة.</li>
      </ul>

      <h3>المرحلة الثانية: الساعات 16 – 38 · تركيب البانوهات الكلاسيكية وتأسيس الإنارة المخفية</h3>
      <ul>
        <li><strong>قص وتثبيت البانوهات بدقة 45 درجة:</strong> استخدام قوالب جدارية معمارية عالية الكثافة ومقاومة للرطوبة، وقص الزوايا بدقة ليزرية متناهية لتشكيل إطارات كلاسيكية مزدوجة متناسقة خلف الأريكة وحول الشاشة.</li>
        <li><strong>مجرى الإنارة المخفية (LED Cove):</strong> تأسيس قناة إنارة غير مباشرة بضوء دافئ (2700K/3000K) خلف المرآة المعمارية والجدار الديكوري لمنح الصالة أجواء فندقية ساحرة.</li>
        <li><strong>إخفاء التمديدات الكهربائية:</strong> تمرير مواسير داخلية لنقل كابلات HDMI ومنافذ الكهرباء خلف الجدار الجبسي لضمان عدم ظهور أي أسلاك مشوهة للرؤية.</li>
      </ul>

      <h3>المرحلة الثالثة: الساعات 38 – 56 · معالجة الفواصل، معجون Level-5، والدهانات المعمارية</h3>
      <ul>
        <li><strong>سد الفواصل بمعجون بوليمري مرن:</strong> حقن جميع فواصل البانوهات بمادة عزل أكريليكية عالية المرونة ومقاومة للانكماش تمنع ظهور أي شروخ شعرية مستقبلاً.</li>
        <li><strong>معجون وصنفرة دقيقة بمستوى Level-5:</strong> تنفيذ طبقات متتالية من المعجون فائق النعومة، والصنفرة الميكانيكية بأقراص ناعمة، ثم تطبيق دهان أساس (Primer) قوي التماسك.</li>
        <li><strong>دهان مخملي مطفي قابل للغسيل:</strong> طلاء الجدران والبانوهات بطبقتين من الدهان المعماري عالي الجودة المقاوم للرطوبة مع تشطيب مطفي يبرز جمال الإطارات الكلاسيكية.</li>
      </ul>

      <h3>المرحلة الرابعة: الساعات 56 – 72 · تركيب الشاشة، فحص الإنارة، التنظيف الشامل والتسليم</h3>
      <ul>
        <li><strong>تثبيت حامل التلفاز:</strong> تركيب الشاشة الكبيرة بأمان على الهيكل الداخلي المدعم والتأكد من وزنها بدقة هندسية.</li>
        <li><strong>اختبار دوائر الكهرباء والإنارة:</strong> فحص مفاتيح التعتيم وشدة إضاءة الـ LED المخفية وسلامة التوصيلات.</li>
        <li><strong>التنظيف العميق والتسليم:</strong> شفط الأتربة بفلاتر HEPA وتنظيف المرايا ومسح الأرضيات، ثم إجراء جولة التسليم النهائي مع العميلة دون أي ملاحظات معلقة.</li>
      </ul>

      <h2>توثيق بالصور والفيديو: تنفيذ فريق نسق بالموقع</h2>
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
      </div>

      <div style="margin:35px 0;background:#181918;border:1px solid var(--line);padding:16px;">
        <h4 style="color:#fff;margin:0 0 12px;font-size:17px;text-align:center;">فيديو التسليم الميداني: جولة حية في الشقة بعد انتهاء التشطيب</h4>
        <video controls playsinline preload="metadata" style="width:100%;max-height:560px;display:block;margin:0 auto;background:#000;" poster="/assets/saadiyat-project/execution-team-mouldings.jpg">
          <source src="/assets/saadiyat-project/saadiyat-completed-handover.mp4" type="video/mp4">
          متصفحك لا يدعم تشغيل الفيديو المباشر.
        </video>
        <p style="text-align:center;font-size:13px;color:#c8cabf;margin:12px 0 0;">فيديو الجولة النهائية: البانوهات الكلاسيكية الأنيقة، الإضاءة الدافئة المخفية، وتسليم جدار التلفاز في سوهو بلوك A بجزيرة السعديات.</p>
      </div>

      <div style="margin:30px 0;text-align:center;">
        <img src="/assets/saadiyat-project/google-review-saadiyat.jpg" alt="صورة التقييم الرسمي للعميلة أميمة لحديلي على ملف جوجل لشركة نسق" style="max-width:540px;margin:0 auto;border:1px solid var(--line);box-shadow:0 8px 24px rgba(0,0,0,0.08);" loading="lazy">
        <p style="font-size:12px;color:#777;margin-top:8px;">تقييم رسمي موثق بدرجة 5 نجوم على ملف شركة نسق على Google.</p>
      </div>

      <h2>لماذا يفضل سكان جزيرة السعديات التعاقد المباشر مع نسق؟</h2>
      <p>تفرض المجمعات السكنية الراقية في السعديات (مثل سوهو، ممشى السعديات، المنطقة الثقافية، بارك فيو) معايير صارمة لإدارة المباني. التعاقد مع شركة نسق يمنح الملاك مزايا استثنائية:</p>
      <ul>
        <li><strong>تنفيذ مباشر بكادر الشركة الداخلي:</strong> لا نعتمد على مقاولين من الباطن؛ حرفيونا وفنيونا ينفذون الأعمال مباشرة لضمان سرعة التسليم خلال 72 ساعة.</li>
        <li><strong>التزام صارم بأوقات العمل والهدوء:</strong> نحترم لوائح إدارة المبنى ونستخدم معدات شفط غبار متقدمة ونجدول الأعمال الصامتة في الفترات الحساسة.</li>
        <li><strong>سرعة حشد الموارد والمواد:</strong> نوفر في مستودعاتنا أفضل أنواع البانوهات والجبس بورد والإضاءة المعتمدة، مما يمكننا من بدء العمل خلال 24 ساعة من الاتفاق.</li>
        <li><strong>شفافية الأسعار بدون تكاليف مستترة:</strong> نحدد كل متر ومواصفة في جدول كميات تفصيلي يضمن عدم وجود أي مطالبات إضافية غير مبررة.</li>
      </ul>
    \`,
    faqsAr: [
      {
        q: "هل يمكن حقاً إنجاز تشطيب جدار ديكوري وبانوهات في 72 ساعة بأبوظبي؟",
        a: "نعم بالتأكيد. في الأعمال المركزة مثل الجدران الديكورية والبانوهات وقواطع الجبس بورد والإنارة المخفية والدهان، يمتلك فريق نسق الداخلي الجاهزية لإنجاز العمل كاملاً خلال 72 ساعة (3 أيام عمل) بفضل المواد المعمارية سريعة التجهيز والخبرة الميدانية العالية."
      },
      {
        q: "هل تحتاج البانوهات الجدارية وديكور الشاشة لتصريح في شقق جزيرة السعديات؟",
        a: "تُعد أعمال البانوهات والديكور الجداري والدهانات من أعمال الصيانة والتجميل غير الإنشائية. وتتولى شركة نسق التنسيق الكامل مع إدارة المبنى لإيداع التأمينات واستخراج تصاريح الدخول للعمال والمواد دون إشغال العميل."
      },
      {
        q: "كيف ساهم ChatGPT في مساعدة العميلة على اختيار شركة نسق؟",
        a: "استفسرت العميلة من ChatGPT عن شركات فيت آوت وديكور معتمدة في أبوظبي تنفذ أعمال البانوهات الجدارية بسرعة واحترافية. وبفضل توثيق ترخيص نسق التجاري الرسمي واعتمادات منصة تم ومقالاتها الهندسية المعتمدة، رشح الذكاء الاصطناعي شركة نسق كجهة موثوقة ومثالية للمشروع."
      },
      {
        q: "كيف يمكنني طلب معاينة أو تسعير ديكور سريع من شركة نسق؟",
        a: "يمكنك إرسال أبعاد الغرفة أو صور الأفكار التي تريدها مباشرة عبر تطبيق الواتساب (+971 50 533 4861) أو عبر البريد الإلكتروني (info@nasaqfitout.ae)، وسيقوم مهندس التسعير بدراسة الطلب وتزويدك بعرض أسعار مفصل خلال 24 إلى 48 ساعة."
      }
    ]
  }
`;

// Insert the article at the end of the articles array
const arrayEndRegex = /(\r?\n\];\r?\n\r?\n\/\/ Helper to build JSON-LD schema for articles)/;
if (arrayEndRegex.test(code)) {
  code = code.replace(arrayEndRegex, saadiyatArticle + '$1');
  console.log('Successfully inserted Saadiyat Island article into articles array.');
} else {
  console.error('Failed to locate arrayEndRegex!');
  process.exit(1);
}

fs.writeFileSync(targetFile, code, 'utf8');
console.log('generateInsightsArticles.cjs updated successfully.');
