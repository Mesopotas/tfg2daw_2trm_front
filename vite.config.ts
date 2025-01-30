import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
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
  '@': fileURLToPath(new URL('./src', import.meta.url))
  }
  }
  })
