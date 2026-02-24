// Endpoint para recibir reportes de violaciones de CSP
// Este es un serverless function para Vercel

export default async function handler(req, res) {
  // Solo acepta POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const report = req.body;
    
    // Log del reporte (en producción, enviar a servicio de logging)
    console.log('CSP Violation Report:', JSON.stringify(report, null, 2));
    
    // En producción, podrías enviar esto a:
    // - Sentry
    // - LogRocket
    // - DataDog
    // - Tu propio sistema de logging
    
    // Ejemplo con Sentry (descomentado cuando lo configures):
    // const Sentry = require('@sentry/node');
    // Sentry.captureMessage('CSP Violation', {
    //   level: 'warning',
    //   extra: report
    // });

    return res.status(204).end();
  } catch (error) {
    console.error('Error processing CSP report:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
