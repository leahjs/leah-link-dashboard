import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const VERSION = Date.now().toString(36);

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "versioning",
      generateBundle(options, bundle) {
        for (const [fileName, file] of Object.entries(bundle)) {
          if (file.type === "chunk" && fileName.includes("index-") && fileName.endsWith(".js")) {
            const newName = fileName.replace(/index-([A-Za-z0-9_-]+)\.js$/, `index-$1.${VERSION}.js`);
            bundle[newName] = file;
            delete bundle[fileName];
          }
          if (file.type === "asset" && fileName.includes("index-") && fileName.endsWith(".css")) {
            const newName = fileName.replace(/index-([A-Za-z0-9_-]+)\.css$/, `index-$1.${VERSION}.css`);
            bundle[newName] = file;
            delete bundle[fileName];
          }
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5173,
    strictPort: true,
    hmr: false,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
