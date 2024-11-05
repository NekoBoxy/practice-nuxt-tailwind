// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    // Options
    cssPath: false, // 不引入自設 tailwind css 檔
    configPath: "tailwind.config", // 副檔名可省略，預設為 "tailwind.config"
    exposeConfig: true,
  },
});
