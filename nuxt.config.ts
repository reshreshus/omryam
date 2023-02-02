// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-icons"],
  vite: {
    css: {
      // preprocessorOptions: {
      //   sass: {
      //     additionalData: '@use "@/assets/_colors.sass" as *\n'
      //   }
      // }
    },
  },
  css: ["~/assets/styles/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
