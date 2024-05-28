import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    hmr: {
      host: 'localhost',
    },
  },
  build: {},
  optimizeDeps: {},
});

process.env.BROWSER = 'firefox';
