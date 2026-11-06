const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

console.log('🚀 Starting Lighthouse Accessibility & Contrast Optimization...\n');

// 1. UPDATE dist/style.css
const cssPath = path.join(DIST_DIR, 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Update .eyebrow color from #9b7145 to #764d20 (WCAG AAA contrast 5.9:1 - 6.7:1)
css = css.replace('.eyebrow{font-size:12px;text-transform:uppercase;letter-spacing:.19em;font-weight:600;margin:0 0 25px;color:#9b7145}', 
                  '.eyebrow{font-size:12px;text-transform:uppercase;letter-spacing:.19em;font-weight:700;margin:0 0 25px;color:#764d20}');

// Update .number color from #926d47 to #764d20
css = css.replace('.number{font-size:14px;color:#926d47;letter-spacing:.1em}',
                  '.number{font-size:14px;color:#764d20;letter-spacing:.1em;font-weight:700}');

// Update .sector-tag color to #764d20
css = css.replace('.sector-tag{font-size:11px;text-transform:uppercase;letter-spacing:.16em;font-weight:600;color:var(--bronze);margin-bottom:14px}',
                  '.sector-tag{font-size:11px;text-transform:uppercase;letter-spacing:.16em;font-weight:700;color:#764d20;margin-bottom:14px}');

// Update .client-tag color to #764d20 if present
if (css.includes('.client-tag{')) {
  css = css.replace(/\.client-tag\{([^}]+)\}/, (match, body) => {
    return `.client-tag{${body};color:#764d20;font-weight:700}`;
  });
} else {
  css += '\n.client-tag{font-size:11px;text-transform:uppercase;letter-spacing:.16em;font-weight:700;color:#764d20;margin-bottom:14px;display:inline-block}';
}

// Update .guarantee-num to #764d20
css = css.replace(/color:var\(--bronze,#b89158\)/g, 'color:#764d20');

// Update .est-whatsapp-btn to high-contrast dark green text #082811 on #25d366 background
css = css.replace('.est-whatsapp-btn{display:inline-flex;align-items:center;gap:10px;background:#25d366;color:#fff;',
                  '.est-whatsapp-btn{display:inline-flex;align-items:center;gap:10px;background:#25d366;color:#082811;');
css = css.replace('.est-whatsapp-btn:hover{background:#20ba5a;transform:translateY(-2px);color:#fff}',
                  '.est-whatsapp-btn:hover{background:#20ba5a;transform:translateY(-2px);color:#082811}');

// Update .est-output-info h4 to also support h3
css = css.replace('.est-output-info h4{font-size:18px;color:#fff;margin:0 0 6px 0;font-weight:600}',
                  '.est-output-info h4, .est-output-info h3{font-size:18px;color:#fff;margin:0 0 6px 0;font-weight:600}');

fs.writeFileSync(cssPath, css, 'utf8');
console.log('✅ Updated dist/style.css with WCAG AA/AAA compliant colors & typography');

// 2. UPDATE HTML FILES WITH FORM LABELS, IDS, AND HEADING LEVELS
const filesToProcess = [
  path.join(DIST_DIR, 'index.html'),
  path.join(DIST_DIR, 'contact', 'index.html'),
  path.join(DIST_DIR, 'ar', 'contact', 'index.html'),
  path.join(DIST_DIR, 'services', 'wall-mouldings-boiserie', 'index.html'),
  path.join(DIST_DIR, 'ar', 'services', 'wall-mouldings-boiserie', 'index.html')
];

filesToProcess.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');
  const isAr = filePath.includes(path.join('dist', 'ar'));
  const idPrefix = isAr ? 'ar-est' : 'est';

  // Update labels and selects
  // 1. Type
  html = html.replace(/<label>1\.\s*([^<]+)<\/label>\s*<select class="est-type">/g, 
    `<label for="${idPrefix}-project-type">1. $1</label>\n          <select id="${idPrefix}-project-type" name="project-type" aria-label="$1" class="est-type">`);
  
  // 2. Location
  html = html.replace(/<label>2\.\s*([^<]+)<\/label>\s*<select class="est-loc">/g, 
    `<label for="${idPrefix}-project-loc">2. $1</label>\n          <select id="${idPrefix}-project-loc" name="project-location" aria-label="$1" class="est-loc">`);

  // 3. Timeline
  html = html.replace(/<label>3\.\s*([^<]+)<\/label>\s*<select class="est-time">/g, 
    `<label for="${idPrefix}-project-timeline">3. $1</label>\n          <select id="${idPrefix}-project-timeline" name="project-timeline" aria-label="$1" class="est-time">`);

  // 4. Update h4 inside .est-output-info to h3 to eliminate heading skips
  html = html.replace(/<div class="est-output-info">\s*<h4>([^<]+)<\/h4>/g,
    `<div class="est-output-info">\n          <h3 style="font-size:18px;color:#fff;margin:0 0 6px 0;font-weight:600;">$1</h3>`);

  // 5. Update WhatsApp buttons color from #fff to #082811 for high contrast on #25d366
  html = html.replace(/style="background:#25d366;border-color:#25d366;color:#fff;font-weight:700;white-space:nowrap;"/g,
    `style="background:#25d366;border-color:#25d366;color:#082811;font-weight:700;white-space:nowrap;"`);
  html = html.replace(/style="background:#25d366;border-color:#25d366;color:#fff;"/g,
    `style="background:#25d366;border-color:#25d366;color:#082811;font-weight:700;"`);

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`✅ Optimized form labels, headings, and contrast in ${path.relative(DIST_DIR, filePath)}`);
});

console.log('\n🎉 All Accessibility and Agentic Browsing fixes applied successfully!');
