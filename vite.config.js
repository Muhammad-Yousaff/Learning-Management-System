// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Learning-Management-System/', // <--- This is the key fix!
  plugins: [react()],
})
