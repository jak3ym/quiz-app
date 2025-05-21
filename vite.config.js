import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// optional, until using later libraries/plugins
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
