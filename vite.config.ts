import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
import path from 'path'

export default defineConfig({
  plugins: [
  vue()
  ],
  css: {
  preprocessorOptions: {
  scss: {
  additionalData: `@use "@/assets/styles/main.scss";`,
  }
  }
  },
  resolve: {
  alias: {
    '@': path.resolve('src')
  }
  }
  })
