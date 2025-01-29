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

    server: {
      host: "0.0.0.0", // Ensures Vite binds to all network interfaces
      port: 5173, // Render assigns a port, but this is a fallback
      strictPort: true,
      allowedHosts: ["candidaterecruitmentos.onrender.com"], // Allow Render domain
    },

    preview: {
      host: "0.0.0.0",
      port: 5173,
      strictPort: true,
      allowedHosts: ["candidaterecruitmentos.onrender.com"], // Allow Render domain for preview mode
    },
  };
});
