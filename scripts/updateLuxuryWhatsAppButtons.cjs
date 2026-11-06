const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

console.log('🚀 Updating WhatsApp Buttons to NASAQ Luxury Architectural Aesthetic...\n');

// 1. UPDATE dist/style.css
const cssPath = path.join(DIST_DIR, 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const oldBtnCss = /\.est-whatsapp-btn\{[^}]+\}/;
const newBtnCss = `.est-whatsapp-btn{display:inline-flex;align-items:center;gap:10px;background:#262a22;color:#ffffff;border:1px solid #b38b5a;padding:14px 24px;border-radius:2px;font-size:14.5px;font-weight:600;letter-spacing:0.02em;text-decoration:none;transition:all 0.25s ease;box-shadow:0 4px 14px rgba(0,0,0,0.15)}`;

const oldHoverCss = /\.est-whatsapp-btn:hover\{[^}]+\}/;
const newHoverCss = `.est-whatsapp-btn:hover{background:var(--bronze);border-color:var(--bronze);color:#151613;transform:translateY(-2px);box-shadow:0 6px 20px rgba(179,139,90,0.25)}`;

const oldSvgCss = /\.est-whatsapp-btn svg\{[^}]+\}/;
const newSvgCss = `.est-whatsapp-btn svg{flex-shrink:0;fill:#c39a68;transition:fill 0.25s ease}\n.est-whatsapp-btn:hover svg{fill:#151613}`;

if (oldBtnCss.test(css)) {
  css = css.replace(oldBtnCss, newBtnCss);
}
if (oldHoverCss.test(css)) {
  css = css.replace(oldHoverCss, newHoverCss);
}
if (oldSvgCss.test(css)) {
  css = css.replace(oldSvgCss, newSvgCss);
}

// Ensure .bring-design-card .button has the luxury styling
const bringBtnStyle = `
.bring-design-card .button{background:#262a22;color:#ffffff;border:1px solid #b38b5a;font-weight:600;white-space:nowrap;transition:all 0.25s ease}
.bring-design-card .button:hover{background:var(--bronze);border-color:var(--bronze);color:#151613}
`;

if (!css.includes('.bring-design-card .button{background:#262a22')) {
  css += bringBtnStyle;
}

fs.writeFileSync(cssPath, css, 'utf8');
console.log('✅ Updated dist/style.css with luxury sticky WhatsApp button palette (#262a22 & #b38b5a)');

// 2. UPDATE HTML FILES
const indexHtmlPath = path.join(DIST_DIR, 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// In bring-design-card, update button to remove old green inline style
indexHtml = indexHtml.replace(/style="background:#25d366;border-color:#25d366;color:#082811;font-weight:700;white-space:nowrap;"/g,
  'style="background:#262a22;border:1px solid #b38b5a;color:#ffffff;font-weight:600;white-space:nowrap;"');
indexHtml = indexHtml.replace(/style="background:#25d366;border-color:#25d366;color:#fff;font-weight:700;white-space:nowrap;"/g,
  'style="background:#262a22;border:1px solid #b38b5a;color:#ffffff;font-weight:600;white-space:nowrap;"');

fs.writeFileSync(indexHtmlPath, indexHtml, 'utf8');
console.log('✅ Updated dist/index.html');

// 3. UPDATE WALL MOULDING PAGES
const wmEnPath = path.join(DIST_DIR, 'services', 'wall-mouldings-boiserie', 'index.html');
const wmArPath = path.join(DIST_DIR, 'ar', 'services', 'wall-mouldings-boiserie', 'index.html');

[wmEnPath, wmArPath].forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/style="background:#25d366;border-color:#25d366;color:[^"]+"/g,
      'style="background:#262a22;border:1px solid #b38b5a;color:#ffffff;font-weight:600;"');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${path.relative(DIST_DIR, filePath)}`);
  }
});

console.log('\n🎉 Complete! All WhatsApp buttons now perfectly match the NASAQ luxury design system.');
