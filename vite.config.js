import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Lightweight static landing site. No router, no state libs — just Vue + Vite.
export default defineConfig({
  plugins: [vue()],
  base: './',
  // The public site is served from behind a reverse proxy under this host name; Vite
  // refuses requests for unknown Host headers unless they are listed (dev and preview).
  server: { allowedHosts: ['owpengram.org', 'www.owpengram.org'] },
  preview: { allowedHosts: ['owpengram.org', 'www.owpengram.org'] },
})
