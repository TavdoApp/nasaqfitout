const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const cssPath = path.join(distDir, 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Update Hero section CSS
const oldHeroBlock = `.hero{position:relative;min-height:720px;height:calc(100svh - 108px);max-height:980px;background:#30342d;color:white;overflow:hidden;width:100%}
.heroimage,picture.heroimage,picture.heroimage img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% center}
.hero:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(15,20,17,.82),rgba(15,20,17,.4) 55%,rgba(0,0,0,.03))}
.hero-copy{position:relative;z-index:1;padding:110px 7% 120px;max-width:1020px}
.hero-copy .eyebrow{color:#e1c49f}
.hero-copy p:not(.eyebrow){color:#e4e5df;max-width:530px;font-size:18px}
.actions{display:flex;gap:16px;margin-top:38px}
.button,.outline{display:inline-flex;align-items:center;justify-content:center;padding:17px 26px;font-size:14px;background:var(--bronze);color:#151613;border:1px solid var(--bronze);cursor:pointer;letter-spacing:.02em;text-decoration:none}
.button:hover{background:#d3ae81;color:#151613}
.outline{background:transparent;border-color:#bbbbac;color:white}
.hero-bottom{position:absolute;bottom:30px;left:7%;right:7%;z-index:1;display:flex;justify-content:space-between;font-size:12px;letter-spacing:.15em;color:#d8d9d0}`;

const newHeroBlock = `.hero{position:relative;min-height:calc(100vh - 108px);min-height:calc(100svh - 108px);height:auto;background:#30342d;color:white;overflow:hidden;width:100%;display:flex;flex-direction:column;justify-content:center}
.heroimage,picture.heroimage,picture.heroimage img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:60% center}
.hero:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(15,20,17,.82),rgba(15,20,17,.4) 55%,rgba(0,0,0,.03))}
.hero-copy{position:relative;z-index:1;padding:clamp(45px,6vh,85px) 7% clamp(65px,8vh,95px);max-width:1020px}
.hero-copy .eyebrow{color:#e1c49f;margin-bottom:18px}
.hero-copy h1{font-size:clamp(36px,4.8vw,78px);margin-bottom:clamp(16px,2.2vh,24px);line-height:1.12}
.hero-copy p:not(.eyebrow){color:#e4e5df;max-width:550px;font-size:clamp(15px,1.2vw,17.5px);line-height:1.6}
.actions{display:flex;gap:16px;margin-top:clamp(22px,3vh,32px);flex-wrap:wrap;position:relative;z-index:2}
.button,.outline{display:inline-flex;align-items:center;justify-content:center;padding:16px 26px;font-size:14px;background:var(--bronze);color:#151613;border:1px solid var(--bronze);cursor:pointer;letter-spacing:.02em;text-decoration:none}
.button:hover{background:#d3ae81;color:#151613}
.outline{background:transparent;border-color:#bbbbac;color:white}
.hero-bottom{position:absolute;bottom:24px;left:7%;right:7%;z-index:1;display:flex;justify-content:space-between;font-size:11.5px;letter-spacing:.15em;color:#d8d9d0;pointer-events:none}
@media(max-height:760px){.hero-bottom{display:none}}`;

// Helper normalize replace
function normReplace(str, target, replacement) {
  const normStr = str.replace(/\r\n/g, '\n');
  const normTarget = target.replace(/\r\n/g, '\n');
  if (normStr.includes(normTarget)) {
    return normStr.replace(normTarget, replacement);
  }
  return null;
}

const updatedCss = normReplace(css, oldHeroBlock, newHeroBlock);
if (updatedCss) {
  css = updatedCss;
  console.log('Main hero CSS block updated.');
} else {
  console.error('Failed to match main hero CSS block!');
  process.exit(1);
}

// 2. Update media queries for hero
css = css.replace(
  '.hero{height:760px;min-height:650px}\n  .hero-copy{padding:120px 7% 100px}',
  '.hero{min-height:calc(100svh - 90px);height:auto}\n  .hero-copy{padding:60px 7% 70px}'
);
css = css.replace(
  '.hero{height:760px;min-height:650px}\r\n  .hero-copy{padding:120px 7% 100px}',
  '.hero{min-height:calc(100svh - 90px);height:auto}\r\n  .hero-copy{padding:60px 7% 70px}'
);

css = css.replace(
  '.hero{height:700px;min-height:0}\n  .hero-copy{padding:80px 5% 90px}',
  '.hero{min-height:calc(100svh - 78px);height:auto}\n  .hero-copy{padding:40px 5% 50px}'
);
css = css.replace(
  '.hero{height:700px;min-height:0}\r\n  .hero-copy{padding:80px 5% 90px}',
  '.hero{min-height:calc(100svh - 78px);height:auto}\r\n  .hero-copy{padding:40px 5% 50px}'
);

fs.writeFileSync(cssPath, css, 'utf8');
console.log('dist/style.css updated successfully.');

// 3. Bump version query string to ?v=4 across all html files to invalidate browser cache
function updateHtmlVersion(dir) {
  let count = 0;
  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      count += updateHtmlVersion(fullPath);
    } else if (item.endsWith('.html')) {
      let html = fs.readFileSync(fullPath, 'utf8');
      if (html.includes('/style.css?v=3')) {
        html = html.replace(/\/style\.css\?v=3/g, '/style.css?v=4');
        fs.writeFileSync(fullPath, html, 'utf8');
        count++;
      }
    }
  }
  return count;
}

const bumpedCount = updateHtmlVersion(distDir);
console.log(`Bumped CSS version from ?v=3 to ?v=4 across ${bumpedCount} HTML files.`);

