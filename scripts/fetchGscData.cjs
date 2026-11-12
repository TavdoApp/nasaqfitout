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

async function run() {
  const jwt = getJwtToken();
  const token = await fetchAccessToken(jwt);
  const siteUrl = 'sc-domain:nasaqfitout.ae';

  const filterKeyword = process.argv[2] || '';

  const payload = {
    startDate: '2026-10-15',
    endDate: '2026-11-12',
    dimensions: ['query', 'page'],
    rowLimit: 50
  };

  if (filterKeyword) {
    payload.dimensionFilterGroups = [{
      filters: [{
        dimension: 'query',
        operator: 'contains',
        expression: filterKeyword
      }]
    }];
  }

  console.log(`📡 Querying GSC with filter: "${filterKeyword || 'ALL'}"...`);
  const res = await querySearchAnalytics(token, siteUrl, payload);

  if (res.status === 200 && res.data.rows) {
    console.table(res.data.rows.map(r => ({
      Query: r.keys[0],
      Page: r.keys[1].replace('https://nasaqfitout.ae', ''),
      Clicks: r.clicks,
      Impressions: r.impressions,
      CTR: (r.ctr * 100).toFixed(1) + '%',
      Position: r.position.toFixed(1)
    })));
  } else {
    console.log(res);
  }
}

run().catch(console.error);
