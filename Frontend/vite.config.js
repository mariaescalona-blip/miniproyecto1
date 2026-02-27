import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Opcional: base si publicas en subruta
  // base: '/',
})
