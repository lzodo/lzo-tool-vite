import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import viteCompression from "vite-plugin-compression";

// defineConfig 语法智能提示
export default defineConfig({
  base: "./",
  server: {
    host: "0.0.0.0",
    proxy: {
      "/testApi": {
        target: "http://192.168.203.132:8778",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/testApi/, ""),
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等, 不去引入也能用
      imports: ["vue"],
    }),
    viteCompression({
      verbose: true, // 默认即可
      disable: false, //开启压缩(不禁用)，默认即可
      deleteOriginFile: false, //删除源文件
      threshold: 1024, //压缩前最小文件大小
      algorithm: "gzip", //压缩算法
      ext: ".gz", //文件类型
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // manualChunks 配置,第三方库拆包
        manualChunks: {
          // 将 Lodash 库的代码单独打包
          lodash: ["lodash-es"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/vue", import.meta.url)),
    },
  },
});
