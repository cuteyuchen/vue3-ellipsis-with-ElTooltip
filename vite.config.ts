import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from "path";

const resolve = (dir: any) => path.join(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      "@": resolve("examples"),
      packages: resolve("packages")
    }
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'elementPlus'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    lib: {
      entry: 'packages/index.ts',
      name: 'vue3-ellipsis-with-eltooltip',
      fileName: (format) => `vue3-ellipsis-with-eltooltip.${format}.js`
    }
  }
})