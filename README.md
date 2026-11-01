# OwpenGram — project website

Lightweight marketing / landing site for the OwpenGram project.
Built with **Vue 3 + Vite**. No backend, fully static — deploy the `dist/`
output anywhere (the domain is `owpengram.org`).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

## Structure

- `index.html` — document head, meta/OG tags, favicon.
- `src/main.js` — app bootstrap + tiny scroll-reveal directive.
- `src/style.css` — design tokens (brand colors from the logo) + base styles.
- `src/data.js` — single source of truth for links, features, personas, roadmap.
- `src/App.vue` — page composition.
- `src/components/*` — page sections.
- `public/logo.png`, `public/logo-1024.png` — brand logo / favicon.

## Editing content

- **Links** (GitHub org/repos) and the **domain** live in `src/data.js`.
- **Screenshots** are placeholders (`ScreenshotFrame.vue`). Drop real images
  into `public/` and pass `src="/your-image.png"` to replace a placeholder.

## License

The site source is licensed under the [Apache License 2.0](LICENSE).
The bundled Plus Jakarta Sans font is under the SIL Open Font License
(see `public/fonts/OFL.txt`).
