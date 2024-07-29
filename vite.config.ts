import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/

export default defineConfig({
  envDir: './env',
  server: {
    port: 6009,
    host: true,
  },
  resolve: {
  },
  plugins: [react()]
})
