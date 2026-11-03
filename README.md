# emmanuelcordoba.com

Sitio personal de Emmanuel Córdoba. Astro + Tailwind CSS, desplegado en GitHub
Pages con GitHub Actions.

## Desarrollo

```bash
npm install
npm run dev
```

## Actualizar el CV

Todo el contenido vive en **[`src/data/cv.ts`](src/data/cv.ts)**: perfil, cifras,
experiencia, docencia, educación, habilidades e idiomas. Editar ese archivo
alcanza; las secciones se arman solas a partir de él.

Para agregar un trabajo, sumar un objeto al array `experience` (el orden del
array es el orden en pantalla, del más reciente al más antiguo).

## Despliegue

Cada push a `master` dispara [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
que construye el sitio y lo publica en Pages.

> **Settings → Pages → Source tiene que estar en "GitHub Actions"**, no en
> "Deploy from a branch". Con la opción vieja, Pages serviría la raíz del repo,
> donde ya no hay un `index.html`.

### Archivos que no hay que mover

| Archivo | Por qué |
| --- | --- |
| `public/CNAME` | Mantiene el dominio `emmanuelcordoba.com`. Si no está en el output del build, Pages pierde el dominio en el primer deploy. |
| `public/.nojekyll` | Evita que Jekyll se coma las carpetas que empiezan con `_`, como `_astro/`. |

## Estructura

```
src/
  data/cv.ts                     # ← el contenido
  layouts/Base.astro             # <head>, metadatos, Open Graph
  components/                    # Sidebar, Section, JobItem, SocialIcon
  pages/
    index.astro                  # la página
    privacypolicy/index.astro    # texto legal heredado, misma URL que antes
  content/privacy-policy.html    # ese texto, sin modificar
  styles/global.css              # tokens de color y tipografía
public/                          # CNAME, favicons, foto, og.png
```

## Colores

Heredados del sitio anterior, definidos en `src/styles/global.css`:

| Token | Valor |
| --- | --- |
| `--color-brand` | `#527A60` |
| `--color-brand-light` | `#6FA682` |
| `--color-ink` | `#252625` |
