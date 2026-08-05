import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from GitHub Pages under /cs_portfolio/
  base: '/cs_portfolio/',
  plugins: [react(), tailwindcss()],
})
