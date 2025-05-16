import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['e445-2401-4900-1f26-79d2-3cfe-8566-1baf-4e93.ngrok-free.app'] // allows all hosts (useful for ngrok, localtunnel, etc.)
  }
})
