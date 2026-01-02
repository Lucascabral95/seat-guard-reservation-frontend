const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/environments/environment.ts');
const targetPathDev = path.join(__dirname, '../src/environments/environment.development.ts');

const awsBaseUrl = process.env.AWS_ALB_URL || 'http://localhost';

const apiUrl = awsBaseUrl === 'http://localhost'
  ? 'http://localhost:3000'
  : awsBaseUrl;

const apiBookingUrl = awsBaseUrl === 'http://localhost'
  ? 'http://localhost:4000'
  : `${awsBaseUrl}:8080`;

// ---------------------------------------------------

const internalSecret = process.env.X_INTERNAL_SECRET || 'SECRET_DEFAULT_LOCAL';
const version = process.env.VERSION || '1.0.0';
const localStorageKey = process.env.LOCAL_STORAGE_KEY || 'tokenAccess';

const envConfigFile = `export const environment = {
  production: true,
  apiUrl: '${apiUrl}',
  apiBookingServiceUrl: '${apiBookingUrl}',
  appName: "SeatGuard Reservation Frontend",
  version: '${version}',
  localStorage: '${localStorageKey}',
  xInternalSecret: '${internalSecret}',
};
`;

const dir = path.dirname(targetPath);
if (!fs.existsSync(dir)) { fs.mkdirSync(dir, { recursive: true }); }

fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) { console.error(err); process.exit(1); }
  console.log('✅ environment.ts generado.');
});

fs.writeFile(targetPathDev, envConfigFile, (err) => {
  if (err) { console.error(err); process.exit(1); }
  console.log('✅ environment.development.ts generado.');
});
