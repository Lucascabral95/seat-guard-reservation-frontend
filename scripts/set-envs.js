// const fs = require('fs');
// const path = require('path');

// const targetPath = path.join(__dirname, '../src/environments/environment.ts');
// const targetPathDev = path.join(__dirname, '../src/environments/environment.development.ts');

// const apiUrl = process.env.API_URL || 'http://localhost:3000';
// const apiBookingUrl = process.env.API_BOOKING_SERVICE_URL || 'http://localhost:4000';
// const internalSecret = process.env.X_INTERNAL_SECRET || 'SECRET_DEFAULT_LOCAL';
// const version = process.env.VERSION || '1.0.0';
// const localStorageKey = process.env.LOCAL_STORAGE_KEY || 'tokenAccess';

// const envConfigFile = `export const environment = {
//   production: true,
//   apiUrl: '${apiUrl}',
//   apiBookingServiceUrl: '${apiBookingUrl}',
//   appName: "SeatGuard Reservation Frontend",
//   version: '${version}',
//   localStorage: '${localStorageKey}',
//   xInternalSecret: '${internalSecret}',
// };
// `;

// // GENERACIÓN DE ARCHIVOS
// const dir = path.dirname(targetPath);
// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir, { recursive: true });
// }

// fs.writeFile(targetPath, envConfigFile, (err) => {
//   if (err) {
//     console.error('❌ Error al generar environment.ts:', err);
//     process.exit(1);
//   }
//   console.log('✅ environment.ts generado correctamente.');
// });

// fs.writeFile(targetPathDev, envConfigFile, (err) => {
//     if (err) {
//       console.error('❌ Error al generar environment.development.ts:', err);
//       process.exit(1);
//     }
//     console.log('✅ environment.development.ts generado correctamente.');
// });

const fs = require('fs');
const path = require('path');

console.log('--- DEBUG ENVS ---');
console.log('AWS_ALB_URL:', process.env.AWS_ALB_URL ? process.env.AWS_ALB_URL : 'UNDEFINED');
console.log('------------------');

const targetPath = path.join(__dirname, '../src/environments/environment.ts');
const targetPathDev = path.join(__dirname, '../src/environments/environment.development.ts');

// Si no hay variable en Vercel, usa localhost (esto causa el error si olvidas la env var)
const awsBaseUrl = process.env.AWS_ALB_URL || 'http://localhost';

// Construimos URLs inseguras
// Auth en puerto 3000, Booking en puerto 8080 (o 4000 segun tu local)
const apiUrl = awsBaseUrl === 'http://localhost' ? 'http://localhost:3000' : `${awsBaseUrl}:3000`;
const apiBookingUrl = awsBaseUrl === 'http://localhost' ? 'http://localhost:4000' : `${awsBaseUrl}:8080`;

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
