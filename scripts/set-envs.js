const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/environments/environment.ts');
const targetPathDev = path.join(__dirname, '../src/environments/environment.development.ts');

const apiUrl = process.env.API_URL || 'http://localhost:3000';
const apiBookingUrl = process.env.API_BOOKING_SERVICE_URL || 'http://localhost:4000';
const internalSecret = process.env.X_INTERNAL_SECRET || 'SECRET_DEFAULT_LOCAL';
const version = process.env.VERSION || '1.0.0';
const localStorage = process.env.LOCALSTORAGE || 'tokenAccess';

const envConfigFile = `export const environment = {
  production: true,
  apiUrl: '${apiUrl}',
  apiBookingServiceUrl: '${apiBookingUrl}',
  appName: "SeatGuard Reservation Frontend",
  version: '${version}',
  localStorage: '${localStorage}',
  xInternalSecret: '${internalSecret}',
};
`;

const dir = path.dirname(targetPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error('❌ Error al generar environment.ts:', err);
    process.exit(1);
  }
  console.log('✅ environment.ts generado correctamente.');
});

fs.writeFile(targetPathDev, envConfigFile, (err) => {
    if (err) {
      console.error('❌ Error al generar environment.development.ts:', err);
      process.exit(1);
    }
    console.log('✅ environment.development.ts generado correctamente.');
});
