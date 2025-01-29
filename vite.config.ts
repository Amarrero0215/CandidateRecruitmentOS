import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables correctly
  const env = loadEnv(mode, path.resolve(process.cwd(), "environment")); 

  return {
    plugins: [react()],
    define: {
      "import.meta.env": env, 
    },
  };
});
