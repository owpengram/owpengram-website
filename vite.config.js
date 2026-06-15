import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Lightweight static landing site. No router, no state libs — just Vue + Vite.
export default defineConfig({
  plugins: [vue()],
  base: './',
})
