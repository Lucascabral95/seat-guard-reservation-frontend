export default async function handler(req, res) {
  const { target } = req.query;
  if (!target) return res.status(400).send('Falta parametro target');

  try {
    console.log(`Proxy conectando a: ${target}`);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    // Limpiar headers que no deben reenviarse
    const { host, connection, 'transfer-encoding': te, ...cleanHeaders } = req.headers;

    const response = await fetch(target, {
      method: req.method,
      headers: {
        ...cleanHeaders,
        host: new URL(target).host,
        'content-type': req.headers['content-type'] || 'application/json'
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : null,
      signal: controller.signal
    });

    clearTimeout(timeout);

    // Copiar headers de respuesta
    Object.entries(response.headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });

    const data = await response.text();
    res.status(response.status).send(data);

  } catch (error) {
    console.error('Error Proxy:', error);
    res.status(500).json({
      error: 'Error conectando al backend inseguro',
      details: error.message,
      cause: error.cause ? error.cause.message : 'Desconocida'
    });
  }
}
