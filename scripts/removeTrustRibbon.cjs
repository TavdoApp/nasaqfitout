const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

['index.html', 'ar/index.html'].forEach(relPath => {
  const filePath = path.join(DIST_DIR, relPath);
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // Match the trust-ribbon block and remove it
  const ribbonRegex = /<!--\s*(?:Trust Ribbon|شريط الحماية)[\s\S]*?<\/aside>/;
  if (ribbonRegex.test(html)) {
    html = html.replace(ribbonRegex, '');
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ Removed trust-ribbon from ${relPath}`);
  } else {
    console.log(`ℹ️ No trust-ribbon found in ${relPath}`);
  }
});

