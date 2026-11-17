import { defineConfig } from "vite";

// HTML 版の開発サーバーの設定。
// react/ フォルダ（React 版）は別のプロジェクトなので、ここでは読み込まない
export default defineConfig({
  optimizeDeps: { entries: ["*.html"] },
  server: { watch: { ignored: ["**/react/**"] } },
});
