import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5e87-49-207-195-126.ngrok-free.app'] // allows all hosts (useful for ngrok, localtunnel, etc.)
  }
})
