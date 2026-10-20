# theosplace.org

Estructura base del sitio de Theos Place. Reemplaza la versión hecha en Figma Make.

**Stack:** Astro (genera HTML estático) + CSS nativo con variables. Sin Tailwind, sin Sass, sin React.

---

## Lo más importante: cómo cambiar contenido

**Casi todo el contenido vive en `src/data/*.json`.** Para actualizar textos, sedes,
eventos o actividades NO hace falta tocar HTML ni CSS, ni instalar nada.

Se puede hacer desde GitHub en el navegador:

1. Abrir el archivo (por ejemplo `src/data/eventos.json`)
2. Click en el lápiz ✏️
3. Editar, "Commit changes"
4. Vercel republica solo en ~1 minuto

| Qué querés cambiar | Archivo |
|---|---|
| Teléfono, email, redes, enlaces del footer | `src/data/sitio.json` |
| Menú de navegación | `src/data/navegacion.json` |
| Sedes (agregar, quitar, horarios, Waze) | `src/data/sedes.json` |
| Eventos de la home | `src/data/eventos.json` |
| Actividades | `src/data/actividades.json` |
| Puestos de servicio | `src/data/puestos.json` |
| Misión, creencias, valores | `src/data/quienes-somos.json` |
| Niveles y capacitaciones | `src/data/estudios.json` |
| Métodos de donación | `src/data/donaciones.json` |

Para ocultar un evento, actividad o puesto sin borrarlo: poné `"activo": false`.

**Colores y tipografías:** `src/styles/tokens.css`. Es el único archivo que hay que
tocar para cambiar la apariencia global.

---

## Correrlo localmente (solo si vas a tocar código)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

Requiere Node 20 o superior.

---

## Estructura

```
src/
├── data/          ← contenido (JSON). Acá se edita el día a día.
├── styles/
│   ├── tokens.css      ← colores, tipografías, espaciados
│   ├── base.css        ← reset y elementos HTML
│   └── componentes.css ← clases reutilizables (.tarjeta, .boton, .grilla)
├── components/    ← piezas reutilizables (Header, Footer, Tarjeta...)
├── layouts/
│   └── Base.astro      ← envoltorio común: <head>, header, footer, SEO
└── pages/         ← una página = un archivo. El nombre define la URL.
    ├── index.astro              → /
    ├── quienes-somos.astro      → /quienes-somos
    ├── sedes.astro              → /sedes
    ├── estudios-biblicos.astro  → /estudios-biblicos
    ├── actividades.astro        → /actividades
    ├── donaciones.astro         → /donaciones
    ├── puestos-de-servicio.astro→ /puestos-de-servicio
    └── 404.astro                → página de error
```

Las URLs quedan iguales a las del sitio actual, así que no se rompe nada
indexado ni ningún enlace compartido.

---

## Deploy en Vercel

1. Subir el repo a GitHub
2. En Vercel: New Project → importar el repo
3. Vercel detecta Astro solo. No hay que configurar nada.
4. Para producción: apuntar el dominio en Cloudflare DNS a Vercel

Cada rama genera su propio preview, así se puede revisar antes de publicar.

---

## Pendientes antes de salir a producción

- [ ] Llenar todos los `TODO` de `src/data/*.json`
- [ ] Subir las tipografías **AXis** y **Gilmer** a `public/fonts/` y descomentar
      los `@font-face` en `tokens.css` (son de licencia comercial, no están en
      Google Fonts — verificar que la licencia permita uso web)
- [ ] Reemplazar el logo placeholder en `Header.astro` y el `favicon.svg`
- [ ] Subir imágenes a `public/img/` (sedes, eventos, actividades)
- [ ] Subir `public/og-image.jpg` (1200×630) para compartir en redes
- [ ] Definir cómo se muestra el feed de Instagram en la home
- [ ] Revisar los enlaces `#TODO` del footer (Recursos, Software, Checkin, Contacto)
- [ ] Confirmar los links de formularios de CCB Church
