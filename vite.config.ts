import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Pisahkan modul node_modules menjadi chunk terpisah
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  // Tambahkan konfigurasi source map
  esbuild: {
    sourcemap: true
  }
})