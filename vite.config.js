import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve:{
    alias: {
      '@': '/src',
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less',   // 如需使用 less 变量，设置为 'less'；否则设置为 'css'
        }),
      ],
    }),
  ],
})