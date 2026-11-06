const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
let content = fs.readFileSync(sitemapPath, 'utf8');

// Replace any bare '&' that is not part of a valid XML entity
content = content.replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;');

// Check if any remain
const remaining = content.match(/&(?!amp;|lt;|gt;|quot;|apos;)/g);
if (remaining) {
  console.error('Still has unescaped ampersands:', remaining.length);
} else {
  console.log('✅ All ampersands properly escaped to &amp;!');
}

fs.writeFileSync(sitemapPath, content, 'utf8');
console.log('✅ Saved dist/sitemap.xml');

