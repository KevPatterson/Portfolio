// Endpoint para recibir reportes de violaciones de CSP
// Este es un serverless function para Vercel

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const report = req.body;
    console.log('CSP Violation Report:', JSON.stringify(report, null, 2));
    
    return res.status(204).end();
  } catch (error) {
    console.error('Error processing CSP report:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
