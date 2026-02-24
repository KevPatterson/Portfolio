# Guía de implementación Open Graph

## Paso 2: Crea tu imagen de Open Graph (og-image.png)

Esta es la imagen que aparece cuando alguien comparte tu link en LinkedIn, WhatsApp, Twitter, etc.

**Especificaciones:**
- Tamaño: **1200 x 630 px**
- Formato: PNG o JPG
- Peso: idealmente menos de 300KB

**Cómo crearla (opciones gratis):**

| Herramienta | URL |
|---|---|
| Canva (recomendado) | https://canva.com → "Crear diseño" → 1200x630 |
| og-image.vercel.app | https://og-image.vercel.app |
| Figma | https://figma.com |

**Qué poner en la imagen:**
- Tu nombre: "Kevin Patterson"
- Tu título: "Frontend Developer"
- Technologies: React · TypeScript · Tailwind
- (Opcional) Tu foto o avatar

**Una vez creada:**
Guárdala como `og-image.png` y colócala en la carpeta `/public` de tu proyecto:
```
Portfolio/
├── public/
│   ├── og-image.png   ← aquí
│   └── vite.svg
├── src/
└── index.html
```

---

## Paso 3: Personaliza los campos en index.html

Busca y reemplaza según corresponda:

| Campo | Valor actual | Cámbialo por |
|---|---|---|
| `<title>` | Kevin Patterson \| Frontend Developer | Tu nombre + tu rol real |
| `name="description"` | "Portfolio of Kevin Patterson..." | Una descripción tuya en ~150 caracteres |
| `og:title` | Kevin Patterson \| Frontend Developer | Igual que el título |
| `og:description` | "Portfolio of Kevin Patterson..." | Igual que la description |
| `sameAs` en JSON-LD | Solo GitHub | Agrega LinkedIn, etc. si tienes |
| `knowsAbout` en JSON-LD | React, TypeScript... | Tus tecnologías reales |
| `jobTitle` en JSON-LD | "Frontend Developer" | Tu título real |

---

## Paso 4: Sube los cambios y despliega

```bash
git add index.html public/og-image.png
git commit -m "feat: add SEO meta tags and Open Graph image"
git push
```

## Paso 5: Verifica que todo funciona

**Validar Open Graph (LinkedIn, Facebook, WhatsApp):**
→ https://www.opengraph.xyz

**Validar Twitter Card:**
→ https://cards-dev.twitter.com/validator

**Validar datos estructurados (Schema.org):**
→ https://search.google.com/test/rich-results

**Verificar indexación en Google:**
→ https://search.google.com/search-console
(Agrega tu sitio y solicita indexación manual)
