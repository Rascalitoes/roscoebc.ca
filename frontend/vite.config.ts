import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'swiper/react', 'swiper'],
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
    // Guarantees only one copy of React exists in the entire dep graph
  },
})
