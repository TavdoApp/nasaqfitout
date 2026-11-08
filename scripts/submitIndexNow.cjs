const fs = require('fs');
const https = require('https');

const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log('Total URLs found in sitemap:', urls.length);

const payload = JSON.stringify({
  host: 'nasaqfitout.ae',
  key: '9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d',
  keyLocation: 'https://nasaqfitout.ae/9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d.txt',
  urlList: urls
});

function postIndexNow(targetHost, targetPath) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: targetHost,
      port: 443,
      path: targetPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let respData = '';
      res.on('data', d => respData += d);
      res.on('end', () => {
        console.log(`[${targetHost}] Status: ${res.statusCode} ${res.statusMessage}`, respData ? `Response: ${respData}` : '');
        resolve({ host: targetHost, status: res.statusCode });
      });
    });

    req.on('error', (e) => {
      console.error(`[${targetHost}] Error:`, e.message);
      reject(e);
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  console.log('Broadcasting 66 URLs to IndexNow (Bing, Yandex, Seznam, Naver)...');
  await postIndexNow('api.indexnow.org', '/indexnow');
  await postIndexNow('www.bing.com', '/indexnow');
  console.log('✅ IndexNow broadcast complete!');
}

main().catch(console.error);
