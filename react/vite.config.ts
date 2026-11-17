import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages など、サブフォルダに公開するときは BASE_PATH で公開先のパスを指定する
// 例：BASE_PATH=/komorebi-coffee/react/ pnpm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH ?? "/",
});
