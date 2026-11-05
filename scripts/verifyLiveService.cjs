const https = require('https');

const urls = [
  'https://nasaqfitout.ae/insights/saadiyat-island-luxury-interior-fitout-guide/',
  'https://nasaqfitout.ae/ar/insights/saadiyat-island-luxury-interior-fitout-guide/',
  'https://nasaqfitout.ae/insights/yas-island-villa-apartment-interior-fitout-guide/',
  'https://nasaqfitout.ae/ar/insights/yas-island-villa-apartment-interior-fitout-guide/',
  'https://nasaqfitout.ae/insights/al-reem-island-luxury-apartment-makeover-guide/',
  'https://nasaqfitout.ae/ar/insights/al-reem-island-luxury-apartment-makeover-guide/'
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
