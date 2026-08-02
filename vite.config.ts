import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 1400,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion') || id.includes('motion')) return 'motion'
            if (id.includes('react-router') || id.includes('react-router-dom')) return 'router'
            if (id.includes('react') || id.includes('scheduler')) return 'react'
            if (id.includes('lucide-react')) return 'icons'
          }
        },
      },
    },
  },
})
