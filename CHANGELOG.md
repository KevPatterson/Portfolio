# Changelog

## [2026-02-24] - Corrección Crítica de Seguridad y Carga

### 🔥 Problemas Críticos Resueltos

#### Página en Blanco al Cargar
- **Problema**: La aplicación cargaba en blanco con múltiples errores de CSP y MIME type
- **Causa**: Headers de seguridad demasiado restrictivos y mal configurados
- **Solución**: Simplificación y corrección de configuración de seguridad

#### Warning de Permissions-Policy
- **Problema**: `Error with Permissions-Policy header: Unrecognized feature: 'ambient-light-sensor'`
- **Causa**: La característica `ambient-light-sensor` no es reconocida por navegadores modernos
- **Solución**: Removida de la política de permisos

### 🔧 Cambios en Archivos

#### `vercel.json`
- ❌ Removido: CSP restrictivo que bloqueaba assets
- ❌ Removido: COEP/COOP que impedían carga de módulos ES
- ❌ Removido: Content-Type global incorrecto
- ✅ Agregado: MIME types específicos para `.js` y `.css`
- ✅ Agregado: Rewrite rule para SPA routing
- ✅ Mantenido: Headers de seguridad esenciales (X-Frame-Options, HSTS, etc.)

#### `index.html`
- ❌ Removido: Headers HTTP en meta tags (CSP, COEP, COOP, X-Frame-Options, etc.)
- ✅ Mantenido: Solo meta tags que funcionan correctamente (`referrer`)
- ✅ Actualizado: Theme color para coincidir con diseño (#020617)
- ✅ Actualizado: Meta tag deprecado `apple-mobile-web-app-capable`

#### `vite.config.ts`
- ❌ Removido: Headers del servidor de desarrollo (causaban conflictos)
- ✅ Agregado: Code splitting optimizado (react-vendor, framer-motion, i18n)
- ✅ Mantenido: Configuración de build segura (sin sourcemaps, minificación)

### 📚 Documentación Nueva

#### `docs/TROUBLESHOOTING.md`
- Guía completa de resolución de problemas
- Explicación detallada del problema de página en blanco
- Comandos de diagnóstico
- Soluciones paso a paso

#### `README.md`
- ✅ Actualizado: Contenido en español
- ✅ Agregado: Stack tecnológico completo con versiones
- ✅ Agregado: Características principales con emojis
- ✅ Agregado: Guía de personalización
- ✅ Agregado: Estructura de carpetas
- ✅ Mejorado: Instrucciones de instalación
- ✅ Mejorado: Formato y legibilidad

### 🛡️ Seguridad

#### Headers Activos (Configurados Correctamente)
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-Frame-Options: DENY`
- ✅ `X-XSS-Protection: 1; mode=block`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `Permissions-Policy: geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()`
- ✅ `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `Permissions-Policy: geolocation=(), microphone=(), ...`
- ✅ `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`

#### Headers Removidos (Causaban Problemas)
- ❌ Content Security Policy (bloqueaba assets de Vite)
- ❌ Cross-Origin-Embedder-Policy (impedía carga de módulos)
- ❌ Cross-Origin-Opener-Policy (causaba errores de MIME)
- ❌ Cross-Origin-Resource-Policy (bloqueaba recursos)

### ⚡ Optimizaciones

#### Code Splitting
```javascript
manualChunks: {
  'react-vendor': ['react', 'react-dom'],      // 3.63 kB
  'framer-motion': ['framer-motion'],          // 130.54 kB
  'i18n': ['i18next', 'react-i18next', ...],   // 50.77 kB
}
```

#### Build Stats
- Total JS: ~470 kB (gzipped: ~152 kB)
- Total CSS: 50.93 kB (gzipped: 13.85 kB)
- Build time: ~15s

### 🧪 Verificación

#### Build Exitoso
```bash
✓ 509 modules transformed
✓ built in 15.31s
```

#### Sin Errores
- ✅ No hay errores de TypeScript
- ✅ No hay errores de ESLint
- ✅ Build completo sin warnings críticos

### 📝 Notas Importantes

#### Para Desarrolladores
1. Los headers de seguridad HTTP deben configurarse en `vercel.json`, NO en meta tags
2. CSP puede re-implementarse en el futuro con una política más permisiva
3. Siempre probar localmente con `npm run build && npm run preview` antes de deploy

#### Para Re-implementar CSP (Opcional)
Si deseas agregar CSP nuevamente, usa esta configuración más permisiva:
```json
{
  "key": "Content-Security-Policy",
  "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'"
}
```

### 🔗 Referencias
- [Vite Build Optimization](https://vitejs.dev/guide/build.html)
- [Vercel Headers Configuration](https://vercel.com/docs/projects/project-configuration#headers)
- [OWASP Secure Headers](https://owasp.org/www-project-secure-headers/)

---

## Versiones Anteriores

### [2026-02-23] - Implementación Inicial de Seguridad
- Agregados headers de seguridad en múltiples capas
- Configurado CSP restrictivo
- Implementado HSTS, X-Frame-Options, etc.
- **Nota**: Esta configuración causó problemas de carga (resueltos en 2026-02-24)
