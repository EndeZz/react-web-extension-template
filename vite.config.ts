import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import { manifest } from './src/shared/configs/manifest.config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      public: path.resolve(__dirname, 'public/'),
    },
  },
})
