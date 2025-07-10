import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server :{
    proxy:{
      "/api":{
        target:"https://backend-1-vmz8.onrender.com",
        changeOrigin:true
      }
    }
  },
  plugins: [react()],
})
