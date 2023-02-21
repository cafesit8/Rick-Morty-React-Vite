import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://cafesit8.github.io/Rick-Morty-React-Vite/",
  plugins: [react()],
})
