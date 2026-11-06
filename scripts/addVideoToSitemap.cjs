const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// Ensure video namespace is declared
if (!sitemap.includes('xmlns:video=')) {
  sitemap = sitemap.replace(
    'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
    'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'
  );
}

// English Saadiyat Video XML
const enVideoXml = `    <video:video>
      <video:thumbnail_loc>https://nasaqfitout.ae/assets/saadiyat-project/execution-team-mouldings.jpg</video:thumbnail_loc>
      <video:title>Saadiyat Island Soho Residence 72-Hour Fit-Out Handover Video</video:title>
      <video:description>Completed walkthrough of living room wall mouldings, gypsum feature wall with concealed wiring, and hidden LED cove lighting in Soho Block A, Saadiyat Island, Abu Dhabi by NASAQ.</video:description>
      <video:content_loc>https://nasaqfitout.ae/assets/saadiyat-project/saadiyat-completed-handover.mp4</video:content_loc>
      <video:publication_date>2026-11-02T08:00:00+04:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
`;

// Arabic Saadiyat Video XML
const arVideoXml = `    <video:video>
      <video:thumbnail_loc>https://nasaqfitout.ae/assets/saadiyat-project/execution-team-mouldings.jpg</video:thumbnail_loc>
      <video:title>فيديو تسليم شقة سوهو جزيرة السعديات خلال 72 ساعة - شركة نسق</video:title>
      <video:description>جولة مصورة لتسليم أعمال البانوهات الجدارية وتجويف التلفزيون المضاء بالليد المخفي في سوهو بلوك A بجزيرة السعديات في أبوظبي.</video:description>
      <video:content_loc>https://nasaqfitout.ae/assets/saadiyat-project/saadiyat-completed-handover.mp4</video:content_loc>
      <video:publication_date>2026-11-02T08:00:00+04:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
    </video:video>
`;

if (!sitemap.includes('saadiyat-completed-handover.mp4')) {
  // Add to EN Saadiyat Case Study
  sitemap = sitemap.replace(
    '(<loc>https://nasaqfitout.ae/insights/saadiyat-island-72-hour-fit-out-case-study/</loc>[\\s\\S]*?<image:image>[\\s\\S]*?</image:image>)',
    `$1\n${enVideoXml}`
  );
  // If regex didn't replace, try exact match
  const enAnchor = `<loc>https://nasaqfitout.ae/insights/saadiyat-island-72-hour-fit-out-case-study/</loc>`;
  if (!sitemap.includes('saadiyat-completed-handover.mp4')) {
    sitemap = sitemap.replace(
      enAnchor,
      `${enAnchor}\n${enVideoXml}`
    );
  }

  // Add to AR Saadiyat Case Study
  const arAnchor = `<loc>https://nasaqfitout.ae/ar/insights/saadiyat-island-72-hour-fit-out-case-study/</loc>`;
  sitemap = sitemap.replace(
    arAnchor,
    `${arAnchor}\n${arVideoXml}`
  );

  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log('✅ Added Video Sitemap schemas to dist/sitemap.xml');
} else {
  console.log('ℹ️ Video schema already present in dist/sitemap.xml');
}

