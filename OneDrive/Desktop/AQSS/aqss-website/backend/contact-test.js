import https from 'https';

const payload = JSON.stringify({
  name: 'Test User',
  email: 'test@example.com',
  phone: '+911234567890',
  company: 'Test',
  service: 'Other',
  message: 'Testing contact',
});

const options = {
  hostname: 'aqss-production.up.railway.app',
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload),
  },
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => {
    console.log('STATUS', res.statusCode);
    console.log('HEADERS', res.headers);
    console.log('BODY', body);
  });
});

req.on('error', (err) => {
  console.error('ERROR', err);
});

req.write(payload);
req.end();
