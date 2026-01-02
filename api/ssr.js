import { reqHandler } from '../dist/seatguard-reservation-frontend/server/server.mjs';

console.log('[SSR Handler] Importing server handler...');

export default async (req, res) => {
  try {
    console.log(`[SSR Handler] ${req.method} ${req.url}`);
    await reqHandler(req, res);
  } catch (error) {
    console.error('[SSR Handler] Error:', {
      message: error.message,
      stack: error.stack,
      url: req.url,
      method: req.method,
    });

    if (!res.headersSent) {
      res.status(500).json({
        error: 'Internal Server Error',
        message: error.message,
      });
    }
  }
};


