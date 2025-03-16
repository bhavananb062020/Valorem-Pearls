import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "node:path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@configs": path.resolve(__dirname, "src/configs"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@routes": path.resolve(__dirname, "src/routes")
    }
  },
  server: {
    port: 3000,
    open: true,
  },
})
