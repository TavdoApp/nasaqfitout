const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');

function getAllHtmlFiles(dir, fileList = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllHtmlFiles(fullPath, fileList);
    } else if (item.endsWith('.html')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const htmlFiles = getAllHtmlFiles(distDir);
console.log(`Found ${htmlFiles.length} HTML files to update.`);

let updatedCount = 0;

for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  const isArabic = file.includes(path.sep + 'ar' + path.sep) || file.endsWith(path.sep + 'ar' + path.sep + 'index.html');

  // 1. Update Schema.org sameAs
  // Find "sameAs":["https://www.instagram.com/nasaq.fitout/","https://share.google/jD1fYkpZ96pX0pQPN"]
  if (content.includes('"sameAs"') && !content.includes('linkedin.com/company/nasaq-fitout')) {
    content = content.replace(
      /"sameAs":\s*\[\s*"https:\/\/www\.instagram\.com\/nasaq\.fitout\/"\s*,\s*"https:\/\/share\.google\/jD1fYkpZ96pX0pQPN"\s*\]/g,
      '"sameAs":["https://www.instagram.com/nasaq.fitout/","https://www.linkedin.com/company/nasaq-fitout","https://share.google/jD1fYkpZ96pX0pQPN"]'
    );
    // Also handle reverse or single items if any
    content = content.replace(
      /"sameAs":\s*\[\s*"https:\/\/share\.google\/jD1fYkpZ96pX0pQPN"\s*,\s*"https:\/\/www\.instagram\.com\/nasaq\.fitout\/"\s*\]/g,
      '"sameAs":["https://www.instagram.com/nasaq.fitout/","https://www.linkedin.com/company/nasaq-fitout","https://share.google/jD1fYkpZ96pX0pQPN"]'
    );
    changed = true;
  }

  // 2. Update Footer Link
  if (!content.includes('https://www.linkedin.com/company/nasaq-fitout')) {
    if (isArabic) {
      // In Arabic footers, look for Instagram or Google Maps links
      const arLinkedinLink = '<a href="https://www.linkedin.com/company/nasaq-fitout" target="_blank" rel="noopener noreferrer">لينكد إن · نسق</a>';
      if (content.includes('rel="noopener noreferrer">خرائط Google · ملف نسق</a>')) {
        content = content.replace(
          'rel="noopener noreferrer">خرائط Google · ملف نسق</a>',
          'rel="noopener noreferrer">خرائط Google · ملف نسق</a>' + arLinkedinLink
        );
        changed = true;
      } else if (content.includes('instagram.com/nasaq.fitout/')) {
        content = content.replace(
          /(@nasaq\.fitout<\/a>)/,
          '$1' + arLinkedinLink
        );
        changed = true;
      }
    } else {
      // English footers
      const enLinkedinLink = '<a href="https://www.linkedin.com/company/nasaq-fitout" target="_blank" rel="noopener noreferrer">LinkedIn · NASAQ</a>';
      if (content.includes('rel="noopener noreferrer">Google Maps · NASAQ Profile</a>')) {
        content = content.replace(
          'rel="noopener noreferrer">Google Maps · NASAQ Profile</a>',
          'rel="noopener noreferrer">Google Maps · NASAQ Profile</a>' + enLinkedinLink
        );
        changed = true;
      } else if (content.includes('Instagram · @nasaq.fitout</a>')) {
        // Ensure Instagram link has target="_blank" rel="noopener noreferrer"
        content = content.replace(
          '<a href="https://www.instagram.com/nasaq.fitout/">Instagram · @nasaq.fitout</a>',
          '<a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">Instagram · @nasaq.fitout</a>' + enLinkedinLink
        );
        // Or if already has target="_blank"
        if (!content.includes('LinkedIn · NASAQ')) {
          content = content.replace(
            '<a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">Instagram · @nasaq.fitout</a>',
            '<a href="https://www.instagram.com/nasaq.fitout/" target="_blank" rel="noopener noreferrer">Instagram · @nasaq.fitout</a>' + enLinkedinLink
          );
        }
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
  }
}

console.log(`Updated ${updatedCount} HTML files with LinkedIn footer link and Schema sameAs.`);

// 3. Update Contact Pages
const contactEnPath = path.join(distDir, 'contact', 'index.html');
if (fs.existsSync(contactEnPath)) {
  let contactEn = fs.readFileSync(contactEnPath, 'utf8');
  if (!contactEn.includes('linkedin.com/company/nasaq-fitout')) {
    contactEn = contactEn.replace(
      'View on Google Maps / Business Profile</a></p>',
      'View on Google Maps / Business Profile</a></p><p style="margin-bottom:14px;"><a href="https://www.linkedin.com/company/nasaq-fitout" target="_blank" rel="noopener noreferrer" style="color:#9b7145;font-weight:600;display:inline-flex;align-items:center;gap:6px;">💼 Connect on LinkedIn · NASAQ</a></p>'
    );
    fs.writeFileSync(contactEnPath, contactEn, 'utf8');
    console.log('✅ Added LinkedIn to English contact page.');
  }
}

const contactArPath = path.join(distDir, 'ar', 'contact', 'index.html');
if (fs.existsSync(contactArPath)) {
  let contactAr = fs.readFileSync(contactArPath, 'utf8');
  if (!contactAr.includes('linkedin.com/company/nasaq-fitout')) {
    if (contactAr.includes('خرائط Google · ملف نسق')) {
      contactAr = contactAr.replace(
        'خرائط Google · ملف نسق</a></p>',
        'خرائط Google · ملف نسق</a></p><p style="margin-bottom:14px;"><a href="https://www.linkedin.com/company/nasaq-fitout" target="_blank" rel="noopener noreferrer" style="color:#9b7145;font-weight:600;display:inline-flex;align-items:center;gap:6px;">💼 صفحة الشركة على لينكد إن (LinkedIn)</a></p>'
      );
    } else {
      contactAr = contactAr.replace(
        'ossama@nasaqfitout.ae</a>',
        'ossama@nasaqfitout.ae</a><p style="margin-bottom:14px;"><a href="https://www.linkedin.com/company/nasaq-fitout" target="_blank" rel="noopener noreferrer" style="color:#9b7145;font-weight:600;display:inline-flex;align-items:center;gap:6px;">💼 صفحة الشركة على لينكد إن (LinkedIn)</a></p>'
      );
    }
    fs.writeFileSync(contactArPath, contactAr, 'utf8');
    console.log('✅ Added LinkedIn to Arabic contact page.');
  }
}

// 4. Update llms.txt
const llmsPath = path.join(distDir, 'llms.txt');
if (fs.existsSync(llmsPath)) {
  let llms = fs.readFileSync(llmsPath, 'utf8');
  if (!llms.includes('linkedin.com/company/nasaq-fitout')) {
    llms = llms.replace(
      '- **Instagram**: [NASAQ Instagram (@nasaq.fitout)](https://www.instagram.com/nasaq.fitout/)',
      '- **Instagram**: [NASAQ Instagram (@nasaq.fitout)](https://www.instagram.com/nasaq.fitout/)\n- **LinkedIn**: [NASAQ on LinkedIn](https://www.linkedin.com/company/nasaq-fitout)'
    );
    llms = llms.replace(
      '- **إنستغرام**: [حساب إنستغرام نسق (@nasaq.fitout)](https://www.instagram.com/nasaq.fitout/)',
      '- **إنستغرام**: [حساب إنستغرام نسق (@nasaq.fitout)](https://www.instagram.com/nasaq.fitout/)\n- **لينكد إن**: [صفحة شركة نسق على لينكد إن (LinkedIn)](https://www.linkedin.com/company/nasaq-fitout)'
    );
    fs.writeFileSync(llmsPath, llms, 'utf8');
    console.log('✅ Added LinkedIn to llms.txt (EN & AR).');
  }
}

// 5. Update build scripts for persistence
const scriptFiles = [
  path.join(__dirname, 'enhanceSeoGeoAeo.cjs'),
  path.join(__dirname, 'generateArabicPages.cjs'),
  path.join(__dirname, 'generateInsightsArticles.cjs')
];

for (const sf of scriptFiles) {
  if (fs.existsSync(sf)) {
    let scriptContent = fs.readFileSync(sf, 'utf8');
    if (scriptContent.includes('instagram.com/nasaq.fitout') && !scriptContent.includes('linkedin.com/company/nasaq-fitout')) {
      scriptContent = scriptContent.replace(
        /"sameAs":\s*\[\s*"https:\/\/www\.instagram\.com\/nasaq\.fitout\/"\s*,\s*"https:\/\/share\.google\/jD1fYkpZ96pX0pQPN"\s*\]/g,
        '"sameAs":["https://www.instagram.com/nasaq.fitout/","https://www.linkedin.com/company/nasaq-fitout","https://share.google/jD1fYkpZ96pX0pQPN"]'
      );
      fs.writeFileSync(sf, scriptContent, 'utf8');
      console.log(`✅ Updated script ${path.basename(sf)} to include LinkedIn in sameAs.`);
    }
  }
}
