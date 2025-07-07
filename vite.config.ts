import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Ensure this is not set to false:
    watch: {
      usePolling: true, // Optional fix for WSL/docker
    },
  },
});
