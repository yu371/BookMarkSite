import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/BookMarkSite/", // ← リポジトリ名を必ず書く！
  plugins: [react()],
});
