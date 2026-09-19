import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/kc-magical-portfolio/',
  plugins: [react()],
});
