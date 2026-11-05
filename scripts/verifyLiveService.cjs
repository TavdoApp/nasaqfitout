const https = require('https');

const urls = [
  'https://d6a56183.nasaqfitout.pages.dev/services/wall-mouldings-boiserie/',
  'https://d6a56183.nasaqfitout.pages.dev/ar/services/wall-mouldings-boiserie/',
  'https://nasaqfitout.ae/services/wall-mouldings-boiserie/',
  'https://nasaqfitout.ae/ar/services/wall-mouldings-boiserie/'
];

function check(url) {
  return new Promise(resolve => {
    https.get(url, res => {
      console.log(`[${res.statusCode}] ${url}`);
      resolve(res.statusCode);
    }).on('error', err => {
      console.error(`[ERR] ${url}: ${err.message}`);
      resolve(500);
    });
  });
}

(async () => {
  for (const u of urls) {
    await check(u);
  }
})();
