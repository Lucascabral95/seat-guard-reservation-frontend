export default async function handler(req, res) {
  const { target } = req.query;
  if (!target) return res.status(400).send('Falta parametro target');

  try {
    const response = await fetch(target, {
      method: req.method,
      headers: { ...req.headers, host: new URL(target).host },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : null,
    });
    const data = await response.text();
    res.status(response.status).send(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
