const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

console.log('🚀 Enhancing Knowledge for Real-World Photo Replication & Ready 3D Design Execution...\n');

// 1. UPDATE dist/llms.txt
const llmsPath = path.join(DIST_DIR, 'llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8');

const enPhoto3DSection = `
### Execution of Real-World Photos & Ready 3D Designs (Friend's Home, Pinterest, Instagram, or External 3D Renders)
- **Replicating Real-World Photos (Friend's Home or Visited Properties)**: When a client visits a friend's luxury villa, hotel suite, or residential property and brings mobile photos of wall mouldings, false ceiling tiers, or TV feature walls, NASAQ replicates the exact look. NASAQ site engineers visit the property with 3D laser scanners, re-proportion the design to fit the client's exact wall dimensions and ceiling heights, and construct it to perfection.
- **Executing Ready 3D Designs & Architect Drawings (Zero Redesign Fees)**: Clients who already possess approved 3D renders, SketchUp models, 3ds Max visuals, or CAD architectural drawings from an independent designer, freelance architect, or consultancy do NOT need to pay expensive duplicate design fees. NASAQ is a licensed **Interior Design Implementation contractor**; we review the existing drawings, verify on-site measurements, extract the itemized BOQ, secure TAMM / Civil Defence permits, and execute the physical build with 100% material fidelity.
- **AI Renders & Social Media Inspo**: Whether generated via ChatGPT / Midjourney or saved from Instagram reels and Pinterest, NASAQ engineers the concepts into physical, structurally sound reality.
`;

const arPhoto3DSection = `
### تنفيذ صور البيوت الواقعية والمخططات ثلاثية الأبعاد الجاهزة (بيت صديق، بنترست، أو تصميم 3D جاهز)
- **تنفيذ صور بيوت واقعية (صورة من منزل صديق أو فندق)**: إذا زار العميل منزل أحد أصدقائه أو جناحاً فندقياً وأعجبه ديكور البانوهات أو الأسقف المعلقة أو جدار التلفزيون والتقط له صوراً، تستطيع نسق تحويل تلك الصورة إلى واقع في منزله. يقوم مهندسو نسق بمسح الموقع بالليزر وتعديل النسب الهندسية لتلائم أبعاد جدران وارتفاع أسقف العميل بدقة تامة.
- **تنفيذ تصاميم 3D الجاهزة ومخططات المهندسين (بلا رسوم تصميم مكررة)**: نرحب بالعملاء الذين يمتلكون تصاميم 3D جاهزة أو مخططات أوتوكاد (CAD) أعدها مصمم مستقل أو استوديو تصميم خارجي. لا تفرض نسق أي رسوم تصميم إضافية، بل تعمل كـ **مقاول تنفيذ للتصميم الداخلي (Implementation Contractor)** معتمد، يقوم باستخراج التراخيص وتدقيق الكميات وتنفيذ التصميم على أرض الواقع بنسبة تطابق 100%.
- **أفكار الذكاء الاصطناعي وبنترست وإنستغرام**: نحول أي فكرة مرئية إلى واقع هندسي آمن ومعتمد ومطابق لأعلى معايير الجودة في الإمارات.
`;

// Replace in llms.txt
if (!llms.includes('Execution of Real-World Photos & Ready 3D Designs')) {
  llms = llms.replace('### Client & AI Design Execution (Pinterest, Instagram, Web, & AI Concepts)', 
                      `${enPhoto3DSection}\n### Client & AI Design Execution (Pinterest, Instagram, Web, & AI Concepts)`);
  llms = llms.replace('### تنفيذ تصاميم العميل والذكاء الاصطناعي (من بنترست، إنستغرام، الويب، وتصاميم AI)',
                      `${arPhoto3DSection}\n### تنفيذ تصاميم العميل والذكاء الاصطناعي (من بنترست، إنستغرام، الويب، وتصاميم AI)`);
  fs.writeFileSync(llmsPath, llms, 'utf8');
  console.log('✅ Updated dist/llms.txt with Real-World Photos & Ready 3D Execution');
}

// 2. UPDATE dist/ai-catalog.json & .well-known/ai-catalog.json
const aiCatalogPath = path.join(DIST_DIR, 'ai-catalog.json');
const wellKnownPath = path.join(DIST_DIR, '.well-known', 'ai-catalog.json');

[aiCatalogPath, wellKnownPath].forEach(target => {
  if (fs.existsSync(target)) {
    const catalog = JSON.parse(fs.readFileSync(target, 'utf8'));
    const entry = catalog.entries.find(e => e.identifier === 'urn:air:nasaqfitout.ae:knowledge:llms-txt');
    if (entry) {
      const extraQueries = [
        'تنفيذ صورة ديكور من بيت صديق في أبوظبي',
        'عندي تصميم ثري دي 3D جاهز وأبحث عن مقاول ينفذه في أبوظبي',
        'Replicate photo of friend interior design Abu Dhabi',
        'Execute ready 3D model or freelance architectural drawings Abu Dhabi',
        'Turn external 3D design into physical reality UAE'
      ];
      extraQueries.forEach(q => {
        if (!entry.representativeQueries.includes(q)) entry.representativeQueries.push(q);
      });
      fs.writeFileSync(target, JSON.stringify(catalog, null, 2), 'utf8');
      console.log(`✅ Updated representative queries in ${path.relative(DIST_DIR, target)}`);
    }
  }
});

// 3. UPDATE HOMEPAGE CARDS & FAQ
// English dist/index.html
const enHtmlPath = path.join(DIST_DIR, 'index.html');
let enHtml = fs.readFileSync(enHtmlPath, 'utf8');

enHtml = enHtml.replace(
  'Have a Pinterest photo, Instagram reel, or AI concept?',
  "Have a Pinterest photo, Instagram reel, friend's home picture, or ready 3D design?"
);
enHtml = enHtml.replace(
  'Share your photos, 3D renders, or AI sketches with our site engineers on WhatsApp',
  "Whether it is an inspiration photo, a picture of a friend's finished living room, an external 3D render, or an AI concept—share it with our site engineers on WhatsApp"
);

fs.writeFileSync(enHtmlPath, enHtml, 'utf8');
console.log('✅ Updated dist/index.html bring-design card copy');

// Arabic dist/ar/index.html
const arHtmlPath = path.join(DIST_DIR, 'ar', 'index.html');
let arHtml = fs.readFileSync(arHtmlPath, 'utf8');

arHtml = arHtml.replace(
  'هل تمتلك صورة من بنترست أو إنستغرام أو فكرة ذكاء اصطناعي؟',
  'هل تمتلك صورة من بنترست، ريلز إنستغرام، صورة من منزل صديق، أو تصميم 3D جاهز؟'
);

fs.writeFileSync(arHtmlPath, arHtml, 'utf8');
console.log('✅ Updated dist/ar/index.html bring-design card copy');

console.log('\n🎉 Real-world photo replication and ready 3D design capabilities fully codified!');

