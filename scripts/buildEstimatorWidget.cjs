const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

// 1. UPDATE dist/style.css
const cssPath = path.join(DIST_DIR, 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const estimatorCss = `
/* Instant Fit-Out WhatsApp Estimator */
.fitout-estimator{background:#fff;border:1px solid #dcded8;border-radius:4px;padding:36px;box-shadow:0 10px 30px rgba(0,0,0,0.04);margin-top:35px}
.est-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:25px}
.est-field label{display:block;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#181918;margin-bottom:8px}
.est-field select{width:100%;padding:14px 16px;background:#fbfbf9;border:1px solid #cfd0c9;border-radius:3px;font-size:15px;color:#181918;font-family:inherit;outline:none;cursor:pointer;transition:border-color 0.2s}
.est-field select:focus{border-color:var(--bronze,#b89158)}
.est-output-card{background:#181918;color:#fff;border-radius:3px;padding:24px 28px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:20px}
.est-output-info h4{font-size:18px;color:#fff;margin:0 0 6px 0;font-weight:600}
.est-output-info p{font-size:14px;color:#bbb;margin:0;line-height:1.5}
.est-whatsapp-btn{display:inline-flex;align-items:center;gap:10px;background:#25d366;color:#fff;padding:14px 24px;border-radius:3px;font-size:15px;font-weight:700;text-decoration:none;transition:transform 0.2s,background 0.2s}
.est-whatsapp-btn:hover{background:#20ba5a;transform:translateY(-2px);color:#fff}
.est-whatsapp-btn svg{flex-shrink:0}
@media(max-width:860px){
  .fitout-estimator{padding:24px 18px}
  .est-grid{grid-template-columns:1fr;gap:16px}
  .est-output-card{flex-direction:column;align-items:flex-start}
  .est-whatsapp-btn{width:100%;justify-content:center}
}
`;

if (!css.includes('fitout-estimator')) {
  css += estimatorCss;
  fs.writeFileSync(cssPath, css, 'utf8');
  console.log('✅ Appended estimator styles to dist/style.css');
}

// 2. UPDATE dist/app.js
const appJsPath = path.join(DIST_DIR, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

const estimatorJs = `
// Instant WhatsApp Fit-Out Estimator
function initEstimators(){
  document.querySelectorAll('.fitout-estimator').forEach(estimator=>{
    const isAr = document.documentElement.lang === 'ar';
    const typeSelect = estimator.querySelector('.est-type');
    const locSelect = estimator.querySelector('.est-loc');
    const timeSelect = estimator.querySelector('.est-time');
    const waBtn = estimator.querySelector('.est-whatsapp-btn');

    function update(){
      const type = typeSelect ? typeSelect.value : '';
      const loc = locSelect ? locSelect.value : '';
      const time = timeSelect ? timeSelect.value : '';

      const text = isAr
        ? 'مرحباً فريق نسق، استخدمت حاسبة التقدير السريع على موقعكم:\\n\\n' +
          '• نوع المشروع: ' + type + '\\n' +
          '• المجمع / الموقع: ' + loc + '\\n' +
          '• الجدول الزمني المطلوب: ' + time + '\\n\\n' +
          'أرجو تزويدي بالتقدير الأولي وتفاصيل المعاينة وموافقات المبنى.'
        : 'Hello NASAQ, I used the instant fit-out estimator on your website:\\n\\n' +
          '• Project Vision: ' + type + '\\n' +
          '• Community / Location: ' + loc + '\\n' +
          '• Preferred Timeline: ' + time + '\\n\\n' +
          'Please provide the preliminary estimate and discuss the site survey and building gate pass.';

      if(waBtn){
        waBtn.href = 'https://wa.me/971505334861?text=' + encodeURIComponent(text);
      }
    }

    [typeSelect, locSelect, timeSelect].forEach(sel => {
      sel && sel.addEventListener('change', update);
    });
    update();
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEstimators);
} else {
  initEstimators();
}
`;

if (!appJs.includes('initEstimators')) {
  appJs += estimatorJs;
  fs.writeFileSync(appJsPath, appJs, 'utf8');
  console.log('✅ Added initEstimators to dist/app.js');
}

// 3. HTML Snippets
const enEstimatorHtml = `
  <section class="section pale estimator-section" id="estimator">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">Instant 72-Hour Fit-Out Estimator</p>
        <h2>Calculate your interior makeover in 3 clicks.</h2>
      </div>
      <p>Select your design vision, community, and scope for an immediate itemized assessment delivered directly to your WhatsApp.</p>
    </div>
    <div class="fitout-estimator">
      <div class="est-grid">
        <div class="est-field">
          <label>1. Project Vision</label>
          <select class="est-type">
            <option value="Classical French Wall Mouldings & Boiserie">Classical French Wall Mouldings & Boiserie</option>
            <option value="Illuminated TV Feature Wall & Hidden Cabling">Illuminated TV Feature Wall & Hidden Cabling</option>
            <option value="Complete Living Room Makeover (72-Hour Turnkey)">Complete Living Room Makeover (72-Hour Turnkey)</option>
            <option value="Master Bedroom & Acoustic Dressing Suite">Master Bedroom & Acoustic Dressing Suite</option>
            <option value="Full Villa or Apartment Interior Fit-Out">Full Villa or Apartment Interior Fit-Out</option>
          </select>
        </div>
        <div class="est-field">
          <label>2. Community / Location</label>
          <select class="est-loc">
            <option value="Saadiyat Island (Soho, Mamsha, Grove, Lagoons)">Saadiyat Island (Soho, Mamsha, Grove, Lagoons)</option>
            <option value="Yas Island (Yas Acres, Water's Edge, Ansam, Mayan)">Yas Island (Yas Acres, Water's Edge, Ansam, Mayan)</option>
            <option value="Al Reem Island (Gate Towers, Marina Sq, Shams)">Al Reem Island (Gate Towers, Marina Sq, Shams)</option>
            <option value="Al Raha Beach (Al Bandar, Al Muneera, Al Zeina)">Al Raha Beach (Al Bandar, Al Muneera, Al Zeina)</option>
            <option value="Khalifa City & Mohamed Bin Zayed City (Villas)">Khalifa City & Mohamed Bin Zayed City (Villas)</option>
            <option value="Dubai Luxury Residential (Downtown, Hills, Palm)">Dubai Luxury Residential (Downtown, Hills, Palm)</option>
            <option value="Other Abu Dhabi / UAE Area">Other Abu Dhabi / UAE Area</option>
          </select>
        </div>
        <div class="est-field">
          <label>3. Preferred Timeline</label>
          <select class="est-time">
            <option value="72-Hour Fast-Track Handover">72-Hour Fast-Track Handover</option>
            <option value="1 to 2 Weeks (Pre-Move-In Turnkey)">1 to 2 Weeks (Pre-Move-In Turnkey)</option>
            <option value="Flexible / Full Refurbishment">Flexible / Full Refurbishment</option>
          </select>
        </div>
      </div>
      <div class="est-output-card">
        <div class="est-output-info">
          <h4>72-Hour Turnkey Assessment · Free 3D Laser Site Survey</h4>
          <p>Includes complete materials, Level-5 Jotun finish, in-wall conduits, building management gate pass handling & dust-free HEPA handover.</p>
        </div>
        <a class="est-whatsapp-btn" href="https://wa.me/971505334861" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.02-.072-.25-.081-.577-.197-1.002-.382-1.787-.779-2.951-2.583-3.04-2.702-.089-.12-1.012-1.348-1.012-2.569 0-1.222.634-1.822.86-2.069.225-.246.491-.307.655-.307.164 0 .328.002.471.01.151.008.353-.057.553.422.205.491.701 1.709.762 1.832.061.123.102.266.02.43-.082.164-.123.266-.246.409-.123.143-.258.32-.369.43-.123.122-.251.255-.108.5.144.246.638 1.053 1.37 1.706.942.84 1.737 1.101 1.983 1.224.246.123.389.102.533-.062.143-.163.614-.716.778-.962.164-.246.328-.205.553-.123.225.082 1.434.676 1.68.799.246.123.409.184.471.287.062.102.062.593-.082.998z"/></svg>
          <span>Get Instant WhatsApp Assessment →</span>
        </a>
      </div>
    </div>
  </section>`;

const arEstimatorHtml = `
  <section class="section pale estimator-section" id="estimator">
    <div class="sectionhead">
      <div>
        <p class="eyebrow">حاسبة التقدير الفوري لأعمال الفيت آوت (72 ساعة)</p>
        <h2>احسب تكلفة مشروعك الداخلي في 3 نقرات.</h2>
      </div>
      <p>اختر نوع التصميم، المجمع السكني، والجدول الزمني للحصول على تقييم أولي فوري يُرسل مباشرة إلى واتساب فريقنا الهندسي.</p>
    </div>
    <div class="fitout-estimator">
      <div class="est-grid">
        <div class="est-field">
          <label>1. نوع التصميم والديكور</label>
          <select class="est-type">
            <option value="بانوهات وبوازيري جدارية كلاسيكية فرنسية">بانوهات وبوازيري جدارية كلاسيكية فرنسية</option>
            <option value="جدار تلفزيون مضاء مع إخفاء الأسلاك بالكامل">جدار تلفزيون مضاء مع إخفاء الأسلاك بالكامل</option>
            <option value="تجديد شامل لصالة المعيشة (تسليم في 72 ساعة)">تجديد شامل لصالة المعيشة (تسليم في 72 ساعة)</option>
            <option value="جناح النوم الرئيسي وغرفة الملابس العازلة">جناح النوم الرئيسي وغرفة الملابس العازلة</option>
            <option value="تشطيب فيلا أو شقة فاخرة بالكامل">تشطيب فيلا أو شقة فاخرة بالكامل</option>
          </select>
        </div>
        <div class="est-field">
          <label>2. المجمع السكني / المنطقة</label>
          <select class="est-loc">
            <option value="جزيرة السعديات (سوهو، ممشى، جروف، لاغونز)">جزيرة السعديات (سوهو، ممشى، جروف، لاغونز)</option>
            <option value="جزيرة ياس (ياس إيكرز، ووترز إيدج، أنسام، مايان)">جزيرة ياس (ياس إيكرز، ووترز إيدج، أنسام، مايان)</option>
            <option value="جزيرة الريم (أبراج البوابة، مارينا سكوير، شمس)">جزيرة الريم (أبراج البوابة، مارينا سكوير، شمس)</option>
            <option value="شاطئ الراحة (البندر، المنيرة، الزينة)">شاطئ الراحة (البندر، المنيرة، الزينة)</option>
            <option value="مدينة خليفة ومحمد بن زايد (فلل ومجالس)">مدينة خليفة ومحمد بن زايد (فلل ومجالس)</option>
            <option value="مجمعات دبي الراقية (داون تاون، دبي هيلز، النخلة)">مجمعات دبي الراقية (داون تاون، دبي هيلز، النخلة)</option>
            <option value="مناطق أخرى في أبوظبي / الإمارات">مناطق أخرى في أبوظبي / الإمارات</option>
          </select>
        </div>
        <div class="est-field">
          <label>3. الجدول الزمني المفضل</label>
          <select class="est-time">
            <option value="تسليم قياسي سريع خلال 72 ساعة">تسليم قياسي سريع خلال 72 ساعة</option>
            <option value="من أسبوع إلى أسبوعين (جاهزية قبل السكن)">من أسبوع إلى أسبوعين (جاهزية قبل السكن)</option>
            <option value="تجديد شامل بجدول زمني مرن">تجديد شامل بجدول زمني مرن</option>
          </select>
        </div>
      </div>
      <div class="est-output-card">
        <div class="est-output-info">
          <h4>تقييم فوري خلال 72 ساعة · مسح ليزري مجاني للموقع</h4>
          <p>يشمل توريد المواد المعتمدة، دهانات جوتن Level-5 الحريرية، تمديد الكابلات الغاطسة، تنسيق تصاريح البوابات الأمنية، وتنظيف الموقع بالكامل.</p>
        </div>
        <a class="est-whatsapp-btn" href="https://wa.me/971505334861" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.053-1.02-.072-.25-.081-.577-.197-1.002-.382-1.787-.779-2.951-2.583-3.04-2.702-.089-.12-1.012-1.348-1.012-2.569 0-1.222.634-1.822.86-2.069.225-.246.491-.307.655-.307.164 0 .328.002.471.01.151.008.353-.057.553.422.205.491.701 1.709.762 1.832.061.123.102.266.02.43-.082.164-.123.266-.246.409-.123.143-.258.32-.369.43-.123.122-.251.255-.108.5.144.246.638 1.053 1.37 1.706.942.84 1.737 1.101 1.983 1.224.246.123.389.102.533-.062.143-.163.614-.716.778-.962.164-.246.328-.205.553-.123.225.082 1.434.676 1.68.799.246.123.409.184.471.287.062.102.062.593-.082.998z"/></svg>
          <span>الحصول على التقدير عبر الواتساب فوراً ←</span>
        </a>
      </div>
    </div>
  </section>`;

// 4. Inject into Homepage EN & AR
function injectIntoHome() {
  const enHomePath = path.join(DIST_DIR, 'index.html');
  let enHome = fs.readFileSync(enHomePath, 'utf8');
  if (!enHome.includes('id="estimator"')) {
    enHome = enHome.replace('<section class="section"><div class="sectionhead"><div><p class="eyebrow">Explore the possibilities</p>', `${enEstimatorHtml}\n  <section class="section"><div class="sectionhead"><div><p class="eyebrow">Explore the possibilities</p>`);
    fs.writeFileSync(enHomePath, enHome, 'utf8');
    console.log('✅ Injected Estimator into dist/index.html');
  }

  const arHomePath = path.join(DIST_DIR, 'ar', 'index.html');
  let arHome = fs.readFileSync(arHomePath, 'utf8');
  if (!arHome.includes('id="estimator"')) {
    arHome = arHome.replace('<section class="section"><div class="sectionhead"><div><p class="eyebrow">استكشف آفاق التصميم</p>', `${arEstimatorHtml}\n  <section class="section"><div class="sectionhead"><div><p class="eyebrow">استكشف آفاق التصميم</p>`);
    fs.writeFileSync(arHomePath, arHome, 'utf8');
    console.log('✅ Injected Estimator into dist/ar/index.html');
  }
}
injectIntoHome();

// 5. Inject into Wall Mouldings Service Page EN & AR
function injectIntoWallMouldings() {
  const enMouldPath = path.join(DIST_DIR, 'services', 'wall-mouldings-boiserie', 'index.html');
  if (fs.existsSync(enMouldPath)) {
    let enMould = fs.readFileSync(enMouldPath, 'utf8');
    if (!enMould.includes('id="estimator"')) {
      enMould = enMould.replace('<!-- CTA Section -->', `${enEstimatorHtml}\n  <!-- CTA Section -->`);
      fs.writeFileSync(enMouldPath, enMould, 'utf8');
      console.log('✅ Injected Estimator into dist/services/wall-mouldings-boiserie/index.html');
    }
  }

  const arMouldPath = path.join(DIST_DIR, 'ar', 'services', 'wall-mouldings-boiserie', 'index.html');
  if (fs.existsSync(arMouldPath)) {
    let arMould = fs.readFileSync(arMouldPath, 'utf8');
    if (!arMould.includes('id="estimator"')) {
      arMould = arMould.replace('<!-- CTA Section -->', `${arEstimatorHtml}\n  <!-- CTA Section -->`);
      fs.writeFileSync(arMouldPath, arMould, 'utf8');
      console.log('✅ Injected Estimator into dist/ar/services/wall-mouldings-boiserie/index.html');
    }
  }
}
injectIntoWallMouldings();

// 6. Inject into Contact Page EN & AR
function injectIntoContact() {
  const enContactPath = path.join(DIST_DIR, 'contact', 'index.html');
  if (fs.existsSync(enContactPath)) {
    let enContact = fs.readFileSync(enContactPath, 'utf8');
    if (!enContact.includes('id="estimator"')) {
      enContact = enContact.replace('<section class="section faq-section">', `${enEstimatorHtml}\n  <section class="section faq-section">`);
      fs.writeFileSync(enContactPath, enContact, 'utf8');
      console.log('✅ Injected Estimator into dist/contact/index.html');
    }
  }

  const arContactPath = path.join(DIST_DIR, 'ar', 'contact', 'index.html');
  if (fs.existsSync(arContactPath)) {
    let arContact = fs.readFileSync(arContactPath, 'utf8');
    if (!arContact.includes('id="estimator"')) {
      arContact = arContact.replace('<section class="section faq-section">', `${arEstimatorHtml}\n  <section class="section faq-section">`);
      fs.writeFileSync(arContactPath, arContact, 'utf8');
      console.log('✅ Injected Estimator into dist/ar/contact/index.html');
    }
  }
}
injectIntoContact();

console.log('\n🚀 Instant WhatsApp Estimator Widget built and deployed successfully!');
