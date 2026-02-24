# Headers de Seguridad - Guía Completa

Este documento explica todos los headers de seguridad implementados en el proyecto.

## 📋 Resumen de Headers Implementados

| Header | Implementado | Capas |
|--------|--------------|-------|
| Content-Security-Policy | ✅ | HTML, Vite, Vercel |
| X-Frame-Options | ✅ | HTML, Vite, Vercel |
| X-Content-Type-Options | ✅ | HTML, Vite, Vercel |
| X-XSS-Protection | ✅ | HTML, Vite, Vercel |
| Referrer-Policy | ✅ | HTML, Vite, Vercel |
| Permissions-Policy | ✅ | HTML, Vite, Vercel |
| Strict-Transport-Security | ✅ | HTML, Vercel |
| Cache-Control | ✅ | HTML, Vite, Vercel |

## 🔒 Detalles de Cada Header

### 1. Content-Security-Policy (CSP)

**Valor:**
```
default-src 'self'; 
script-src 'self' 'unsafe-inline'; 
style-src 'self' 'unsafe-inline'; 
img-src 'self' data: https:; 
font-src 'self' data:; 
connect-src 'self'; 
frame-ancestors 'none'; 
base-uri 'self'; 
form-action 'self'
```

**Propósito:** Previene ataques XSS y de inyección de código al controlar qué recursos pueden cargarse.

**Directivas:**
- `default-src 'self'`: Solo permite recursos del mismo origen
- `script-src 'self' 'unsafe-inline'`: Scripts solo del mismo origen (inline necesario para React)
- `style-src 'self' 'unsafe-inline'`: Estilos solo del mismo origen (inline necesario para Tailwind)
- `img-src 'self' data: https:`: Imágenes del mismo origen, data URIs y HTTPS
- `font-src 'self' data:`: Fuentes del mismo origen y data URIs
- `connect-src 'self'`: Conexiones AJAX/WebSocket solo al mismo origen
- `frame-ancestors 'none'`: No permite que el sitio sea embebido en iframes
- `base-uri 'self'`: Previene ataques de inyección de base tag
- `form-action 'self'`: Formularios solo pueden enviarse al mismo origen

### 2. X-Frame-Options

**Valor:** `DENY`

**Propósito:** Previene ataques de clickjacking al no permitir que el sitio sea embebido en iframes.

**Opciones:**
- `DENY`: No permite ningún iframe
- `SAMEORIGIN`: Solo permite iframes del mismo origen
- `ALLOW-FROM uri`: Permite iframes de un origen específico (obsoleto)

### 3. X-Content-Type-Options

**Valor:** `nosniff`

**Propósito:** Previene que el navegador "adivine" el tipo MIME de los archivos, forzando el uso del Content-Type declarado.

**Protege contra:** Ataques donde un archivo malicioso se hace pasar por otro tipo de archivo.

### 4. X-XSS-Protection

**Valor:** `1; mode=block`

**Propósito:** Activa el filtro XSS del navegador (legacy, para navegadores antiguos).

**Opciones:**
- `0`: Desactiva el filtro
- `1`: Activa el filtro
- `1; mode=block`: Activa y bloquea la página si detecta XSS

**Nota:** Este header es legacy. Los navegadores modernos usan CSP.

### 5. Referrer-Policy

**Valor:** `strict-origin-when-cross-origin`

**Propósito:** Controla qué información de referrer se envía en las peticiones.

**Comportamiento:**
- Mismo origen: Envía URL completa
- HTTPS → HTTPS: Envía solo el origen
- HTTPS → HTTP: No envía nada
- HTTP → cualquiera: Envía solo el origen

**Otras opciones:**
- `no-referrer`: No envía referrer
- `origin`: Solo envía el origen
- `same-origin`: Solo envía referrer en mismo origen

### 6. Permissions-Policy (antes Feature-Policy)

**Valor:**
```
geolocation=(), 
microphone=(), 
camera=(), 
payment=(), 
usb=(), 
magnetometer=(), 
gyroscope=(), 
accelerometer=(), 
ambient-light-sensor=()
```

**Propósito:** Deshabilita APIs del navegador que no se utilizan, reduciendo la superficie de ataque.

**APIs deshabilitadas:**
- `geolocation`: Ubicación GPS
- `microphone`: Acceso al micrófono
- `camera`: Acceso a la cámara
- `payment`: API de pagos
- `usb`: Acceso a dispositivos USB
- `magnetometer`: Sensor magnético
- `gyroscope`: Giroscopio
- `accelerometer`: Acelerómetro
- `ambient-light-sensor`: Sensor de luz ambiental

**Sintaxis:**
- `()`: Deshabilita para todos
- `(self)`: Permite solo para el mismo origen
- `(self "https://example.com")`: Permite para origen específico

### 7. Strict-Transport-Security (HSTS)

**Valor:** `max-age=31536000; includeSubDomains; preload`

**Propósito:** Fuerza el uso de HTTPS y previene ataques de downgrade.

**Directivas:**
- `max-age=31536000`: Duración de 1 año (en segundos)
- `includeSubDomains`: Aplica a todos los subdominios
- `preload`: Permite inclusión en la lista de preload de navegadores

**Importante:** Solo funciona cuando el sitio se sirve por HTTPS.

**Preload:** Para incluir tu sitio en la lista de preload de navegadores, visita: https://hstspreload.org/

### 8. Cache-Control

**Valores implementados:**

**Para HTML:**
```
no-cache, no-store, must-revalidate
```
- Siempre obtiene la versión más reciente del servidor

**Para Assets estáticos (CSS, JS, imágenes):**
```
public, max-age=31536000, immutable
```
- Cache de 1 año
- `immutable`: El archivo nunca cambiará (gracias al hash en el nombre)

**Para desarrollo:**
```
no-cache, no-store, must-revalidate
```
- No cachea nada durante el desarrollo

**Directivas:**
- `no-cache`: Valida con el servidor antes de usar cache
- `no-store`: No almacena en cache
- `must-revalidate`: Debe revalidar cuando expira
- `public`: Puede ser cacheado por cualquier cache
- `max-age`: Tiempo en segundos que el recurso es válido
- `immutable`: El recurso nunca cambiará

## 🏗️ Arquitectura de Implementación

### Capa 1: HTML (index.html)
```html
<meta http-equiv="Header-Name" content="value">
```
- Fallback para navegadores que no respetan headers HTTP
- Siempre presente, incluso en desarrollo local

### Capa 2: Vite (vite.config.ts)
```typescript
server: {
  headers: {
    'Header-Name': 'value'
  }
}
```
- Aplica durante el desarrollo (`npm run dev`)
- Útil para testing de headers

### Capa 3: Vercel (vercel.json)
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Header-Name", "value": "value" }
      ]
    }
  ]
}
```
- Headers HTTP reales a nivel de servidor
- Más confiables que meta tags
- Solo aplica en producción

## 🧪 Cómo Verificar los Headers

### Opción 1: Herramientas Online

1. **Security Headers**: https://securityheaders.com/
   - Analiza todos los headers de seguridad
   - Da una calificación (A+, A, B, etc.)

2. **Mozilla Observatory**: https://observatory.mozilla.org/
   - Análisis completo de seguridad
   - Recomendaciones específicas

### Opción 2: DevTools del Navegador

1. Abre DevTools (F12)
2. Ve a la pestaña "Network"
3. Recarga la página
4. Haz clic en el documento HTML
5. Ve a la pestaña "Headers"
6. Revisa "Response Headers"

### Opción 3: cURL

```bash
curl -I https://patterson-portfolio.vercel.app/
```

### Opción 4: PowerShell

```powershell
Invoke-WebRequest -Uri "https://patterson-portfolio.vercel.app/" -Method Head | Select-Object -ExpandProperty Headers
```

## 📊 Puntuación Esperada

Con esta configuración, deberías obtener:

- **Security Headers**: A+ o A
- **Mozilla Observatory**: A+ o A
- **SSL Labs**: A+ (si HSTS preload está activo)

## 🔄 Mantenimiento

### Revisar Headers Periódicamente

```bash
# Verificar headers en producción
curl -I https://patterson-portfolio.vercel.app/

# Verificar headers en desarrollo
curl -I http://localhost:5173/
```

### Actualizar CSP si Agregas Nuevos Recursos

Si agregas:
- **API externa**: Actualiza `connect-src`
- **CDN de imágenes**: Actualiza `img-src`
- **Google Fonts**: Actualiza `font-src` y `style-src`
- **Analytics**: Actualiza `script-src` y `connect-src`

### Ejemplo: Agregar Google Analytics

```typescript
// En vite.config.ts y vercel.json
'Content-Security-Policy': 
  "default-src 'self'; " +
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; " +
  "connect-src 'self' https://www.google-analytics.com; " +
  // ... resto de directivas
```

## 🚨 Troubleshooting

### Problema: Recursos bloqueados por CSP

**Síntoma:** Errores en consola como "Refused to load..."

**Solución:**
1. Identifica el tipo de recurso bloqueado
2. Actualiza la directiva CSP correspondiente
3. Prueba en desarrollo primero
4. Despliega a producción

### Problema: HSTS no funciona

**Causa:** El sitio no se sirve por HTTPS

**Solución:** Vercel sirve automáticamente por HTTPS, pero verifica que:
1. El dominio esté configurado correctamente
2. No haya redirecciones HTTP → HTTPS rotas

### Problema: Cache muy agresivo

**Síntoma:** Cambios no se reflejan en producción

**Solución:**
1. Verifica que los assets tengan hash en el nombre
2. HTML debe tener `no-cache`
3. Limpia cache del navegador (Ctrl+Shift+R)

## 📚 Referencias

- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [MDN: HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [OWASP: Secure Headers Project](https://owasp.org/www-project-secure-headers/)
- [Security Headers](https://securityheaders.com/)
- [HSTS Preload](https://hstspreload.org/)


---

## 🆕 Headers Adicionales Implementados

### 9. Content-Type (charset)

**Valor:** `text/html; charset=UTF-8`

**Propósito:** Especifica explícitamente el tipo de contenido y la codificación de caracteres.

**Importancia:**
- Previene ataques de confusión de charset
- Asegura renderizado correcto de caracteres especiales
- Evita vulnerabilidades de interpretación de contenido

**Implementación:**
```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```

### 10. Cross-Origin-Opener-Policy (COOP)

**Valor:** `same-origin`

**Propósito:** Aísla el contexto de navegación de otros orígenes, protegiendo contra ataques Spectre.

**Opciones:**
- `unsafe-none`: Sin aislamiento (por defecto)
- `same-origin-allow-popups`: Aísla pero permite popups
- `same-origin`: Aislamiento completo (recomendado)

**Beneficios:**
- Protege contra ataques de timing side-channel (Spectre)
- Previene que ventanas de otros orígenes accedan a tu contexto
- Habilita características avanzadas como `SharedArrayBuffer`

**Compatibilidad:** Chrome 83+, Firefox 79+, Safari 15.2+

### 11. Cross-Origin-Embedder-Policy (COEP)

**Valor:** `require-corp`

**Propósito:** Requiere que todos los recursos cargados tengan CORS o CORP explícito.

**Opciones:**
- `unsafe-none`: Sin restricciones (por defecto)
- `require-corp`: Requiere CORP en todos los recursos (recomendado)
- `credentialless`: Carga recursos sin credenciales

**Beneficios:**
- Habilita "cross-origin isolation"
- Permite usar APIs poderosas como `SharedArrayBuffer`
- Protege contra ataques de timing

**Nota:** Puede requerir ajustes en recursos externos. Para assets propios, usa `Cross-Origin-Resource-Policy: cross-origin`.

### 12. Cross-Origin-Resource-Policy (CORP)

**Valor:** 
- HTML: `same-origin`
- Assets: `cross-origin`

**Propósito:** Controla qué orígenes pueden cargar tus recursos.

**Opciones:**
- `same-origin`: Solo el mismo origen
- `same-site`: Mismo sitio (incluye subdominios)
- `cross-origin`: Cualquier origen (para CDN/assets públicos)

**Uso:**
```javascript
// En vercel.json
{
  "source": "/(.*)",
  "headers": [
    { "key": "Cross-Origin-Resource-Policy", "value": "same-origin" }
  ]
},
{
  "source": "/assets/(.*)",
  "headers": [
    { "key": "Cross-Origin-Resource-Policy", "value": "cross-origin" }
  ]
}
```

### 13. Origin-Agent-Cluster

**Valor:** `?1`

**Propósito:** Solicita que el navegador asigne el documento a un "agent cluster" específico del origen.

**Beneficios:**
- Mejor aislamiento de seguridad
- Previene que scripts de otros orígenes interfieran
- Mejora el rendimiento al permitir mejor paralelización

**Formato:** Structured Header boolean (`?1` = true, `?0` = false)

**Compatibilidad:** Chrome 88+, Edge 88+

### 14. Clear-Site-Data

**Valor:** No implementado por defecto (se usa bajo demanda)

**Propósito:** Limpia datos del navegador (cookies, cache, storage) cuando el usuario cierra sesión.

**Uso típico:**
```javascript
// En endpoint de logout
res.setHeader('Clear-Site-Data', '"cache", "cookies", "storage"');
```

**Directivas:**
- `"cache"`: Limpia cache del navegador
- `"cookies"`: Elimina cookies
- `"storage"`: Limpia localStorage, sessionStorage, IndexedDB
- `"executionContexts"`: Recarga todas las pestañas del origen
- `"*"`: Limpia todo

**Ejemplo de implementación:**
```javascript
// api/logout.js
export default function handler(req, res) {
  res.setHeader('Clear-Site-Data', '"cache", "cookies", "storage"');
  res.status(200).json({ message: 'Logged out' });
}
```

**Nota:** Solo funciona en contextos seguros (HTTPS).

### 15. Expect-CT (Certificate Transparency)

**Valor:** `max-age=86400, enforce`

**Propósito:** Requiere que los certificados SSL aparezcan en logs públicos de Certificate Transparency.

**Directivas:**
- `max-age`: Duración en segundos (86400 = 24 horas)
- `enforce`: Rechaza conexiones si el certificado no está en CT logs
- `report-uri`: URL para reportar violaciones

**Estado:** ⚠️ DEPRECADO - Los navegadores modernos requieren CT por defecto.

**Incluido por:** Compatibilidad con navegadores antiguos.

**Alternativa moderna:** Los certificados emitidos después de abril 2018 deben estar en CT logs automáticamente.

### 16. Content-Security-Policy-Report-Only

**Valor:** Igual que CSP pero con `report-uri`

**Propósito:** Prueba políticas CSP sin bloquear contenido, solo reportando violaciones.

**Uso:**
```html
<meta http-equiv="Content-Security-Policy-Report-Only" 
      content="default-src 'self'; report-uri /csp-report">
```

**Beneficios:**
- Prueba nuevas políticas sin romper el sitio
- Identifica recursos que violan la política
- Monitorea intentos de ataque

**Workflow recomendado:**
1. Implementa CSP-Report-Only con política estricta
2. Monitorea reportes durante 1-2 semanas
3. Ajusta la política según reportes
4. Mueve a CSP (enforce) cuando esté lista

**Endpoint de reportes:**
```javascript
// api/csp-report.js
export default async function handler(req, res) {
  const report = req.body;
  console.log('CSP Violation:', report);
  // Enviar a sistema de logging
  return res.status(204).end();
}
```

---

## 📊 Tabla Completa de Headers

| # | Header | Valor | Capa | Estado |
|---|--------|-------|------|--------|
| 1 | Content-Type | text/html; charset=UTF-8 | HTML, Vite, Vercel | ✅ |
| 2 | Content-Security-Policy | Restrictivo | HTML, Vite, Vercel | ✅ |
| 3 | CSP-Report-Only | Con report-uri | HTML, Vercel | ✅ |
| 4 | X-Frame-Options | DENY | HTML, Vite, Vercel | ✅ |
| 5 | X-Content-Type-Options | nosniff | HTML, Vite, Vercel | ✅ |
| 6 | X-XSS-Protection | 1; mode=block | HTML, Vite, Vercel | ✅ |
| 7 | Referrer-Policy | strict-origin-when-cross-origin | HTML, Vite, Vercel | ✅ |
| 8 | Permissions-Policy | APIs deshabilitadas | HTML, Vite, Vercel | ✅ |
| 9 | Strict-Transport-Security | max-age=31536000 | HTML, Vercel | ✅ |
| 10 | Cache-Control | Optimizado | HTML, Vite, Vercel | ✅ |
| 11 | Cross-Origin-Opener-Policy | same-origin | HTML, Vite, Vercel | ✅ |
| 12 | Cross-Origin-Embedder-Policy | require-corp | HTML, Vite, Vercel | ✅ |
| 13 | Cross-Origin-Resource-Policy | same-origin/cross-origin | Vercel | ✅ |
| 14 | Origin-Agent-Cluster | ?1 | Vercel | ✅ |
| 15 | Expect-CT | max-age=86400, enforce | HTML, Vercel | ✅ |
| 16 | Clear-Site-Data | Bajo demanda | API | 📝 |

**Total:** 16 headers de seguridad implementados

---

## 🔍 Cross-Origin Isolation

La combinación de COOP + COEP habilita "cross-origin isolation", que permite:

### APIs Habilitadas
- `SharedArrayBuffer` (memoria compartida entre workers)
- `performance.measureUserAgentSpecificMemory()`
- `performance.now()` con mayor precisión
- `Atomics.wait()` y `Atomics.waitAsync()`

### Verificación
```javascript
// En la consola del navegador
console.log(self.crossOriginIsolated); // Debe ser true
```

### Consideraciones
- Todos los recursos externos deben tener CORS habilitado
- Imágenes de otros dominios necesitan `crossorigin` attribute
- Puede requerir ajustes en CDNs externos

### Solución para recursos externos
```html
<!-- Para imágenes de otros dominios -->
<img src="https://example.com/image.jpg" crossorigin="anonymous">

<!-- Para scripts de CDN -->
<script src="https://cdn.example.com/lib.js" crossorigin="anonymous"></script>
```

---

## 🚨 Monitoreo de CSP

### Configurar Reportes

1. **Crear endpoint** (ya incluido en `api/csp-report.js`)

2. **Actualizar CSP con report-uri:**
```
Content-Security-Policy: default-src 'self'; report-uri /csp-report
```

3. **Integrar con servicio de logging:**

**Opción A: Sentry**
```javascript
// api/csp-report.js
import * as Sentry from '@sentry/node';

export default async function handler(req, res) {
  const report = req.body;
  Sentry.captureMessage('CSP Violation', {
    level: 'warning',
    extra: report
  });
  return res.status(204).end();
}
```

**Opción B: LogRocket**
```javascript
import LogRocket from 'logrocket';

LogRocket.captureMessage('CSP Violation', {
  extra: report
});
```

**Opción C: Custom logging**
```javascript
// Enviar a tu API
await fetch('https://your-api.com/logs', {
  method: 'POST',
  body: JSON.stringify(report)
});
```

### Analizar Reportes

Los reportes CSP incluyen:
- `document-uri`: Página donde ocurrió la violación
- `violated-directive`: Directiva violada
- `blocked-uri`: Recurso bloqueado
- `source-file`: Archivo que causó la violación
- `line-number`: Línea del código
- `column-number`: Columna del código

### Dashboard de Reportes

Puedes usar servicios como:
- **report-uri.com** (gratuito para bajo volumen)
- **Sentry** (incluye CSP monitoring)
- **DataDog** (monitoreo completo)

---

## 🔧 Troubleshooting Avanzado

### Problema: COEP bloquea recursos

**Síntoma:** Recursos externos no cargan

**Solución:**
```javascript
// Opción 1: Agregar CORS al recurso externo (si controlas el servidor)
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');

// Opción 2: Usar proxy para recursos externos
// En vercel.json
{
  "rewrites": [
    {
      "source": "/proxy/:path*",
      "destination": "https://external-cdn.com/:path*"
    }
  ]
}
```

### Problema: COOP rompe OAuth/popups

**Síntoma:** Login con Google/Facebook no funciona

**Solución:**
```javascript
// Cambiar a same-origin-allow-popups
'Cross-Origin-Opener-Policy': 'same-origin-allow-popups'
```

### Problema: Origin-Agent-Cluster causa errores

**Síntoma:** Scripts cross-origin fallan

**Solución:**
```javascript
// Deshabilitar temporalmente
'Origin-Agent-Cluster': '?0'
```

---

## 📈 Puntuación Esperada (Actualizada)

Con todos los headers implementados:

- **Security Headers**: A+ ⭐
- **Mozilla Observatory**: A+ ⭐
- **SSL Labs**: A+ ⭐
- **Cross-Origin Isolation**: ✅ Habilitado

---

## 🎯 Próximos Pasos

1. **Monitorear reportes CSP** durante 1 semana
2. **Verificar cross-origin isolation** en producción
3. **Ajustar CORP** si hay recursos externos bloqueados
4. **Implementar Clear-Site-Data** si agregas autenticación
5. **Considerar HSTS preload** en hstspreload.org
