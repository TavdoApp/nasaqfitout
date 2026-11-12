const fs = require('fs');
const https = require('https');
const crypto = require('crypto');

// Load credentials
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

  const encodedHeader = base64Url(JSON.stringify(header));
  const encodedClaim = base64Url(JSON.stringify(claim));
  const signInput = `${encodedHeader}.${encodedClaim}`;

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

function callGscApi(accessToken, endpoint, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'www.googleapis.com',
      path: endpoint,
      method: method,
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
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function main() {
  console.log('1. Signing JWT token for service account:', creds.client_email);
  const jwt = getJwtToken();
  
  console.log('2. Requesting OAuth2 access token from Google...');
  const token = await fetchAccessToken(jwt);
  console.log('✅ OAuth2 Access Token successfully granted by Google!');

  console.log('3. Fetching Search Console sites list...');
  const sitesRes = await callGscApi(token, '/webmasters/v3/sites');
  console.log('Sites response:', JSON.stringify(sitesRes, null, 2));

  if (sitesRes.data && sitesRes.data.siteEntry) {
    console.log('✅ Access granted to sites:');
    sitesRes.data.siteEntry.forEach(s => console.log(' - ' + s.siteUrl + ' (' + s.permissionLevel + ')'));
  } else {
    console.log('⚠️ Service account authenticated with Google, but has not been added to the GSC property yet.');
    console.log('Please add this email to your GSC (Settings > Users and permissions):');
    console.log(creds.client_email);
  }
}

main().catch(console.error);
