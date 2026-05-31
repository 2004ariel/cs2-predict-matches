export default async function handler(req, res) {
  const { endpoint } = req.query;
  
  const response = await fetch(
    `httpsapi.pandascore.cocsgo${endpoint}`,
    {
      headers {
        Authorization `Bearer ${process.env.PANDASCORE_TOKEN}`
      }
    }
  );
  
  const data = await response.json();
  res.status(200).json(data);
}s