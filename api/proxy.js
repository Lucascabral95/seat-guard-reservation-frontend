export default async function handler(req, res) {
  const { target } = req.query;
  if (!target) return res.status(400).send('Falta parametro target');

  try {
    console.log(`Proxy conectando a: ${target}`);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    const response = await fetch(target, {
      method: req.method,
      headers: {
        ...req.headers,
        host: new URL(target).host
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : null,
      signal: controller.signal
    });

    clearTimeout(timeout);

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
