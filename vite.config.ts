import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load the correct .env file
  const env = loadEnv(mode, path.resolve(process.cwd(), "environment"));

  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_GITHUB_TOKEN": JSON.stringify(env.VITE_GITHUB_TOKEN), // Ensure env variables are accessible
    },
  };
});
