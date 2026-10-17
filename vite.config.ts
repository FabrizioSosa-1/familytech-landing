import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' para que el build funcione en cualquier carpeta o hosting estático
export default defineConfig({
  base: './',
  plugins: [react()],
})
