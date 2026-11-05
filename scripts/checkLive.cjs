const https = require('https');

https.get('https://nasaqfitout.ae/', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('class="actions"');
    console.log('Live actions index:', idx);
    if (idx !== -1) {
      console.log(data.slice(idx - 100, idx + 300));
    } else {
      console.log('actions NOT FOUND in live HTML!');
      const heroIdx = data.indexOf('class="hero"');
      console.log(data.slice(heroIdx, heroIdx + 1000));
    }
  });
});
