import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['85ca-2401-4900-1f26-219-8cab-7536-fa92-6318.ngrok-free.app'] // allows all hosts (useful for ngrok, localtunnel, etc.)
  }
})
