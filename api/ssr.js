let reqHandler;

console.log('[SSR Handler] Loading server handler...');

// Cargar dinámicamente el handler SSR
async function loadHandler() {
  if (!reqHandler) {
    const module = await import('../dist/seatguard-reservation-frontend/server/server.mjs');
    reqHandler = module.reqHandler;
  }
  return reqHandler;
}

export default async (req, res) => {
  try {
    console.log(`[SSR Handler] ${req.method} ${req.url}`);
    const handler = await loadHandler();
    await handler(req, res);
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


