import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [react()],
  build: {
    outDir: 'build', // Ensure this matches with your deployment script expectations
  },
  server: {
    headers: {
      'Permissions-Policy': 'camera=(), geolocation=()', // Set other policies, omit `interest-cohort`
    }
  }
})
