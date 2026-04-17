import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANTE: nome do repositório
export default defineConfig({
  base: '/meu-projeto-react/',
  plugins: [react()],
})