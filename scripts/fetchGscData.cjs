const fs = require('fs');
const https = require('https');
const crypto = require('crypto');

const keyPath = 'gsc-key.json';
if (!fs.existsSync(keyPath)) {
  console.error('❌ gsc-key.json not found!');
  process.exit(1);
}
const creds = JSON.parse(fs.readFileSync(keyPath, 'utf8'));

function base64Url(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function getJwtToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claim = {
    iss: creds.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const signInput = `${base64Url(JSON.stringify(header))}.${base64Url(JSON.stringify(claim))}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signInput);
  signer.end();
  const signature = signer.sign(creds.private_key, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  return `${signInput}.${signature}`;
}

function fetchAccessToken(jwt) {
  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    }).toString();

    const req = https.request({
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (parsed.access_token) resolve(parsed.access_token);
          else reject(new Error(`Failed to get access token: ${body}`));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

function querySearchAnalytics(accessToken, siteUrl, requestBody) {
  return new Promise((resolve, reject) => {
    const encodedSite = encodeURIComponent(siteUrl);
    const options = {
      hostname: 'www.googleapis.com',
      path: `/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, data });
        }
      });
    });

    req.on('error', reject);
    req.write(JSON.stringify(requestBody));
    req.end();
  });
}

async function main() {
  const jwt = getJwtToken();
  const token = await fetchAccessToken(jwt);

  const siteUrl = 'sc-domain:nasaqfitout.ae';
  console.log(`📡 Querying live Google Search Console for: ${siteUrl}...`);

  // Query top keywords over the last 28 days
  const endDate = new Date().toISOString().split('T')[0];
  const startDateObj = new Date();
  startDateObj.setDate(startDateObj.getDate() - 28);
  const startDate = startDateObj.toISOString().split('T')[0];

  const queryPayload = {
    startDate: startDate,
    endDate: endDate,
    dimensions: ['query'],
    rowLimit: 50
  };

  const res = await querySearchAnalytics(token, siteUrl, queryPayload);

  if (res.status === 200 && res.data.rows) {
    console.log(`\n🏆 Top Ranking Search Queries (Last 28 Days):`);
    console.table(res.data.rows.map(r => ({
      Query: r.keys[0],
      Clicks: r.clicks,
      Impressions: r.impressions,
      CTR: (r.ctr * 100).toFixed(1) + '%',
      Position: r.position.toFixed(1)
    })));

    // Also query top pages
    const pagePayload = {
      startDate: startDate,
      endDate: endDate,
      dimensions: ['page'],
      rowLimit: 20
    };
    const pageRes = await querySearchAnalytics(token, siteUrl, pagePayload);
    if (pageRes.data && pageRes.data.rows) {
      console.log(`\n📄 Top Performing Landing Pages:`);
      console.table(pageRes.data.rows.map(r => ({
        Page: r.keys[0].replace('https://nasaqfitout.ae', ''),
        Clicks: r.clicks,
        Impressions: r.impressions,
        CTR: (r.ctr * 100).toFixed(1) + '%',
        Position: r.position.toFixed(1)
      })));
    }
  } else {
    console.log(`Response Status: ${res.status}`);
    console.log(res.data);
  }
}

main().catch(console.error);
