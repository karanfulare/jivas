import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['cc31-2406-7400-56-cdc8-8004-13ea-2687-972b.ngrok-free.app'] // allows all hosts (useful for ngrok, localtunnel, etc.)
  }
})
