const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

console.log('🚀 Updating Estimator Button to Warm Beige/Bronze (Hero Palette)...\n');

// 1. UPDATE dist/style.css
const cssPath = path.join(DIST_DIR, 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const oldBtnRegex = /\.est-whatsapp-btn\{[^}]+\}/;
const newBtnCss = `.est-whatsapp-btn{display:inline-flex;align-items:center;gap:10px;background:var(--bronze,#c39a68);color:#151613;border:1px solid var(--bronze,#c39a68);padding:14px 24px;border-radius:2px;font-size:14.5px;font-weight:600;letter-spacing:0.02em;text-decoration:none;transition:all 0.25s ease;box-shadow:0 4px 14px rgba(0,0,0,0.25)}`;

const oldHoverRegex = /\.est-whatsapp-btn:hover\{[^}]+\}/;
const newHoverCss = `.est-whatsapp-btn:hover{background:#d3ae81;border-color:#d3ae81;color:#151613;transform:translateY(-2px);box-shadow:0 6px 20px rgba(211,174,129,0.35)}`;

const oldSvgRegex = /\.est-whatsapp-btn svg\{[^}]+\}/;
const newSvgCss = `.est-whatsapp-btn svg{flex-shrink:0;fill:#151613;transition:fill 0.25s ease}\n.est-whatsapp-btn:hover svg{fill:#151613}`;

if (oldBtnRegex.test(css)) {
  css = css.replace(oldBtnRegex, newBtnCss);
}
if (oldHoverRegex.test(css)) {
  css = css.replace(oldHoverRegex, newHoverCss);
}
if (oldSvgRegex.test(css)) {
  css = css.replace(oldSvgRegex, newSvgCss);
}

fs.writeFileSync(cssPath, css, 'utf8');
console.log('✅ Updated dist/style.css with warm beige/bronze button styling');

// 2. UPDATE ALL HTML FILES: Cache Buster (v=5) and Inline Style on .est-whatsapp-btn
function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getAllHtmlFiles(DIST_DIR);
let countBusted = 0;
let countBtnStyled = 0;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Bump style.css version
  if (content.includes('style.css?v=4') || content.includes('style.css"')) {
    content = content.replace(/style\.css(\?v=\d+)?/g, 'style.css?v=5');
    changed = true;
    countBusted++;
  }

  // Ensure .est-whatsapp-btn has inline styling for beige/bronze
  if (content.includes('class="est-whatsapp-btn"')) {
    // Replace if it doesn't already have inline style or if it has another style
    content = content.replace(/class="est-whatsapp-btn"(\s+style="[^"]*")?/g,
      'class="est-whatsapp-btn" style="background:#c39a68;color:#151613;border:1px solid #c39a68;font-weight:600;"');
    changed = true;
    countBtnStyled++;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
  }
});

console.log(`✅ Bumped style.css?v=5 across ${countBusted} HTML files`);
console.log(`✅ Applied inline beige/bronze style to .est-whatsapp-btn across ${countBtnStyled} HTML files`);
console.log('\n🎉 Done! The estimator button is now warm beige/bronze, perfectly matching the hero.');

