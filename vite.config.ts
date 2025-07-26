import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ FIXED base to '/' for production deployment
export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
