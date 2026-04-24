# Headers de Seguridad

Este documento explica los headers de seguridad implementados en el proyecto.

## Resumen de Headers

| Header | Implementado |
|--------|--------------|
| Content-Security-Policy | ✅ |
| X-Frame-Options | ✅ |
| X-Content-Type-Options | ✅ |
| X-XSS-Protection | ✅ |
| Referrer-Policy | ✅ |
| Permissions-Policy | ✅ |
| Strict-Transport-Security | ✅ |
| Cache-Control | ✅ |

## Detalles de Headers

### 1. Content-Security-Policy (CSP)

**Valor:**
```
default-src 'self'; 
script-src 'self' 'unsafe-inline'; 
style-src 'self' 'unsafe-inline'; 
img-src 'self' data: https:; 
font-src 'self' data:; 
connect-src 'self'
```

Previene ataques XSS controlando qué recursos pueden cargarse.

### 2. X-Frame-Options

**Valor:** `DENY`

Previene clickjacking al no permitir que el sitio sea embebido en iframes.

### 3. X-Content-Type-Options

**Valor:** `nosniff`

Previene que el navegador adivine el tipo MIME de los archivos.

### 4. X-XSS-Protection

**Valor:** `1; mode=block`

Activa el filtro XSS del navegador (legacy).

### 5. Referrer-Policy

**Valor:** `strict-origin-when-cross-origin`

Controla qué información de referrer se envía en las peticiones.

### 6. Permissions-Policy

**Valor:**
```
geolocation=(), microphone=(), camera=(), payment=()
```

Deshabilita APIs del navegador que no se utilizan.

### 7. Strict-Transport-Security (HSTS)

**Valor:** `max-age=31536000; includeSubDomains; preload`

Fuerza el uso de HTTPS.

### 8. Cache-Control

**Para HTML:**
```
no-cache, no-store, must-revalidate
```

**Para Assets:**
```
public, max-age=31536000, immutable
```

## Implementación

### HTML (index.html)
```html
<meta http-equiv="Header-Name" content="value">
```

### Vercel (vercel.json)
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

## Verificación

### Herramientas Online
- Security Headers: https://securityheaders.com/
- Mozilla Observatory: https://observatory.mozilla.org/

### DevTools
1. Abre DevTools (F12)
2. Ve a Network
3. Recarga la página
4. Haz clic en el documento HTML
5. Revisa Response Headers

### cURL
```bash
curl -I https://patterson-portfolio.vercel.app/
```

## Mantenimiento

### Actualizar CSP
Si agregas recursos externos, actualiza las directivas correspondientes:
- API externa: `connect-src`
- CDN de imágenes: `img-src`
- Google Fonts: `font-src` y `style-src`

## Referencias
- [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [OWASP: Secure Headers](https://owasp.org/www-project-secure-headers/)
