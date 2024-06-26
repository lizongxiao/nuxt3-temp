// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // 默认开启服务端渲染
  devtools: { enabled: true },// 开启调试工具
  modules: ['@vant/nuxt'],
});
