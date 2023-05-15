const rollupOptions = {

  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};


import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from "./config/unocss";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    // 添加JSX插件
    // options are passed on to @vue/babel-plugin-jsx
    vueJsx(),
    // 添加UnoCSS插件
    Unocss()],

  // 添加库模式配置
  build: {
    rollupOptions,
    minify:false,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd","iife"],
    },
    cssCodeSplit: true,   // 决定在编译的时候是否要独立输出 css
  },
});