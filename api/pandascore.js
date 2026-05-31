export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { path, ...params } = req.query;
  if (!path) return res.status(400).json({ error: 'path required' });

  const qs = new URLSearchParams(params).toString();
  const url = `https://api.pandascore.co/csgo/${path}${qs ? '?' + qs : ''}`;

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.PANDASCORE_TOKEN}` }
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
