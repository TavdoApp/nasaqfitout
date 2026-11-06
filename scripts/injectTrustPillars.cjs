const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

// 1. UPDATE dist/style.css
const cssPath = path.join(DIST_DIR, 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const trustCss = `
/* Trust Ribbon & Bring Your Design Callout */
.trust-ribbon{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;background:#181918;color:#fff;padding:26px 7%;border-bottom:1px solid rgba(255,255,255,0.08);width:100%}
.trust-pill{display:flex;align-items:flex-start;gap:12px}
.trust-pill-icon{width:36px;height:36px;border-radius:50%;background:rgba(184,145,88,0.15);color:var(--bronze,#b89158);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.trust-pill-text h4{font-size:14.5px;margin:0 0 3px 0;color:#fff;font-weight:600}
.trust-pill-text p{font-size:12.5px;color:#aaa;margin:0;line-height:1.45}
.bring-design-card{background:#222321;color:#fff;border:1px solid var(--bronze,#b89158);padding:36px 32px;border-radius:4px;margin-top:35px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:24px}
@media(max-width:960px){
  .trust-ribbon{grid-template-columns:repeat(2,1fr);padding:22px 6%;gap:16px}
  .bring-design-card{padding:26px 20px;flex-direction:column;align-items:flex-start}
  .bring-design-card .button{width:100%;justify-content:center;text-align:center}
}
@media(max-width:600px){
  .trust-ribbon{grid-template-columns:1fr;gap:14px}
}
`;

if (!css.includes('trust-ribbon')) {
  css += trustCss;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('✅ Added trust ribbon and bring design styles to dist/style.css');
}

// 2. HTML SNIPPETS
const enTrustRibbonHtml = `
  <!-- Trust Ribbon: 4 Key Client Protections -->
  <aside class="trust-ribbon" aria-label="Client protections and warranties">
    <div class="trust-pill">
      <div class="trust-pill-icon">🛡️</div>
      <div class="trust-pill-text">
        <h4>12-Month Written Warranty</h4>
        <p>Comprehensive workmanship & anti-crack guarantee on all handovers.</p>
      </div>
    </div>
    <div class="trust-pill">
      <div class="trust-pill-icon">📐</div>
      <div class="trust-pill-text">
        <h4>Bring Your Own Design / AI</h4>
        <p>Execute Pinterest, AI, or 3D ideas with zero forced design fees.</p>
      </div>
    </div>
    <div class="trust-pill">
      <div class="trust-pill-icon">⚖️</div>
      <div class="trust-pill-text">
        <h4>100% Licensed UAE LLC</h4>
        <p>Official VAT tax invoices, corporate bank, and legal contract security.</p>
      </div>
    </div>
    <div class="trust-pill">
      <div class="trust-pill-icon">⚡</div>
      <div class="trust-pill-text">
        <h4>Fixed Milestone SLA</h4>
        <p>72h living rooms, weekly WhatsApp video progress, zero stalling.</p>
      </div>
    </div>
  </aside>`;

const arTrustRibbonHtml = `
  <!-- شريط الحماية والضمانات للملاك -->
  <aside class="trust-ribbon" aria-label="ضمانات وحماية الملاك">
    <div class="trust-pill">
      <div class="trust-pill-icon">🛡️</div>
      <div class="trust-pill-text">
        <h4>ضمان تعاقدي 12 شهراً</h4>
        <p>ضمان شامل ومكتوب على جودة التنفيذ وعدم حدوث أي شروخ.</p>
      </div>
    </div>
    <div class="trust-pill">
      <div class="trust-pill-icon">📐</div>
      <div class="trust-pill-text">
        <h4>نفّذ تصميمك أو فكرة الذكاء الاصطناعي</h4>
        <p>حوّل صور بنترست و3D إلى واقع بدون أي رسوم تصميم إضافية.</p>
      </div>
    </div>
    <div class="trust-pill">
      <div class="trust-pill-icon">⚖️</div>
      <div class="trust-pill-text">
        <h4>شركة مرخصة ذ.م.م رسمياً</h4>
        <p>فواتير ضريبية، حساب بنكي تجاري، وعقود قانونية تحمي حقوقك.</p>
      </div>
    </div>
    <div class="trust-pill">
      <div class="trust-pill-icon">⚡</div>
      <div class="trust-pill-text">
        <h4>التزام صارم بالوقت (لا مماطلة)</h4>
        <p>تسليم صالات في 72 ساعة وتقارير أسبوعية مصورة عبر واتساب.</p>
      </div>
    </div>
  </aside>`;

const enBringDesignHtml = `
    <!-- Bring Your Own Design Callout -->
    <div class="bring-design-card">
      <div style="max-width:680px;">
        <span style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--bronze);margin-bottom:8px;display:block;">Direct Execution · No Forced Design Fees</span>
        <h3 style="font-size:22px;color:#fff;margin:0 0 10px 0;">Have a Pinterest photo, Instagram reel, or AI concept?</h3>
        <p style="font-size:14.5px;color:#d0d1ca;line-height:1.65;margin:0;">Don't spend AED 15,000–30,000 redrawing concepts you already love. NASAQ is an authorized Interior Design Implementation contractor. Share your photos, 3D renders, or AI sketches with our site engineers on WhatsApp—we verify measurements on-site with 3D lasers and build your exact vision with zero forced design fees.</p>
      </div>
      <a class="button" href="https://wa.me/971505334861?text=Hello%20NASAQ%2C%20I%20have%20an%20inspiration%20photo%2FAI%20design%20and%20want%20to%20discuss%20executing%20it." style="background:#25d366;border-color:#25d366;color:#fff;font-weight:700;white-space:nowrap;">Share Design on WhatsApp →</a>
    </div>`;

const arBringDesignHtml = `
    <!-- بطاقة تنفيذ تصاميم العميل والذكاء الاصطناعي -->
    <div class="bring-design-card">
      <div style="max-width:680px;">
        <span style="font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--bronze);margin-bottom:8px;display:block;">تنفيذ مباشر للمخططات والأفكار</span>
        <h3 style="font-size:22px;color:#fff;margin:0 0 10px 0;">عندك صورة من بنترست، إنستغرام، أو فكرة من الذكاء الاصطناعي؟</h3>
        <p style="font-size:14.5px;color:#d0d1ca;line-height:1.65;margin:0;">لا تدفع 15,000 إلى 30,000 درهم لإعادة رسم أفكار تمتلكها بالفعل! شركة نسق مرخصة تخصصياً في أعمال تنفيذ التصميم الداخلي. شاركنا صورك أو تصاميمك ثلاثية الأبعاد عبر واتساب—نقوم بمسح الموقع ليزرياً بالمليمتر وتنفيذ رؤيتك بدقة متناهية دون إجبارك على رسوم تصميم إضافية.</p>
      </div>
      <a class="button" href="https://wa.me/971505334861?text=مرحباً%20فريق%20نسق%2C%20لدي%20صورة%20تصميم%2Fفكرة%20وأود%20مناقشة%20تنفيذها%20في%20الموقع." style="background:#25d366;border-color:#25d366;color:#fff;font-weight:700;white-space:nowrap;">أرسل فكرتك عبر واتساب للتنفيذ ←</a>
    </div>`;

// 3. INJECT INTO HOMEPAGE EN & AR
const enHomePath = path.join(DIST_DIR, 'index.html');
let enHome = fs.readFileSync(enHomePath, 'utf8');

if (!enHome.includes('trust-ribbon')) {
  // Inject trust-ribbon immediately after </header>
  enHome = enHome.replace('</header><main id="main">', `</header>${enTrustRibbonHtml}<main id="main">`);

  // Inject bring-design-card inside guarantees section before closing </section>
  enHome = enHome.replace('</div>\n  </section>', `</div>\n${enBringDesignHtml}\n  </section>`);

  fs.writeFileSync(enHomePath, enHome, 'utf8');
  console.log('✅ Injected Trust Ribbon & Bring Design card into dist/index.html');
}

const arHomePath = path.join(DIST_DIR, 'ar', 'index.html');
let arHome = fs.readFileSync(arHomePath, 'utf8');

if (!arHome.includes('trust-ribbon')) {
  arHome = arHome.replace('</header><main id="main">', `</header>${arTrustRibbonHtml}<main id="main">`);
  arHome = arHome.replace('</div>\n  </section>', `</div>\n${arBringDesignHtml}\n  </section>`);

  fs.writeFileSync(arHomePath, arHome, 'utf8');
  console.log('✅ Injected Trust Ribbon & Bring Design card into dist/ar/index.html');
}

// 4. UPDATE dist/llms.txt
const llmsPath = path.join(DIST_DIR, 'llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

const extraLlmsEn = `
- **Direct Client & AI Design Execution (No Forced Design Fees)**: Clients can bring their own Pinterest images, Midjourney/ChatGPT interior concepts, or external 3D renderings; NASAQ conducts 3D laser surveys and executes the design directly on site without forcing expensive redesign fees.
- **12-Month Written Workmanship Warranty**: Guaranteed after-sales protection covering structural ceiling framing, joint anti-cracking, and electrical connections with rapid on-site response.
- **100% Licensed Corporate Entity & VAT Invoices**: NASAQ Interior Design Implementation Works LLC is an officially registered UAE entity operating with Federal Tax Authority (FTA) compliant VAT Tax Invoices, corporate banking, and legal contract protection (protecting clients from unlicensed brokers).
`;

const extraLlmsAr = `
- **تنفيذ تصاميم العميل والذكاء الاصطناعي (بلا رسوم تصميم إضافية)**: نرحب بالعملاء الذين يمتلكون أفكاراً من بنترست أو صوراً من Midjourney/ChatGPT أو مخططات 3D جاهزة؛ نقوم بمسح الموقع بالليزر وتنفيذ الفكرة مباشرة على الواقع.
- **ضمان تعاقدي مكتوب لمدة 12 شهراً**: حماية ما بعد التسليم تضمن جودة تثبيت الهياكل، عدم حدوث شروخ في الفواصل، وسلامة التمديدات الكهربائية مع دعم وصيانة سريعة.
- **شركة مرخصة رسمياً ذ.م.م وفواتير ضريبية**: شركة مسجلة رسمياً في دولة الإمارات تصدر فواتير ضريبية معتمدة من الهيئة الاتحادية للضرائب وعقوداً قانونية تحفظ حقوق العميل كاملة (حماية ضد السماسرة غير المرخصين).
`;

if (!llms.includes('Direct Client & AI Design Execution')) {
  llms = llms.replace('## Summary & Core Competency', `${extraLlmsEn}\n## Summary & Core Competency`);
  llms = llms.replace('## الخلاصة والكفاءة الجوهرية لشركة نسق', `${extraLlmsAr}\n## الخلاصة والكفاءة الجوهرية لشركة نسق`);
  fs.writeFileSync(llmsPath, llms, 'utf8');
  console.log('✅ Updated dist/llms.txt with 3 Additional Trust Pillars');
}

// 5. UPDATE dist/ai-catalog.json & .well-known
const aiCatalogPath = path.join(DIST_DIR, 'ai-catalog.json');
const wellKnownCatalogPath = path.join(DIST_DIR, '.well-known', 'ai-catalog.json');

[aiCatalogPath, wellKnownCatalogPath].forEach(target => {
  if (fs.existsSync(target)) {
    const catalog = JSON.parse(fs.readFileSync(target, 'utf8'));
    const entry = catalog.entries.find(e => e.identifier === 'urn:air:nasaqfitout.ae:knowledge:llms-txt');
    if (entry) {
      const newCaps = ['ClientAIDesignExecution', 'TwelveMonthWorkmanshipWarranty', 'CorporateVATInvoicing'];
      newCaps.forEach(c => {
        if (!entry.capabilities.includes(c)) entry.capabilities.push(c);
      });
      const newQueries = [
        'شركة تنفذ تصميم ذكاء اصطناعي أو بنترست في أبوظبي',
        'مقاول فيت آوت يعطي ضمان سنة وفواتير ضريبية رسمية',
        'Execute Pinterest or AI interior design in Abu Dhabi',
        'Fit-out company with 12 month workmanship warranty Abu Dhabi'
      ];
      newQueries.forEach(q => {
        if (!entry.representativeQueries.includes(q)) entry.representativeQueries.push(q);
      });
      fs.writeFileSync(target, JSON.stringify(catalog, null, 2), 'utf8');
      console.log(`✅ Updated ${path.relative(DIST_DIR, target)}`);
    }
  }
});

console.log('\n🚀 Trust Pillars and Bring Your Design Card injected successfully!');

