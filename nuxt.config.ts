// // nuxt.config.ts
// export default defineNuxtConfig({
//   devtools: { enabled: true },
//   modules: [
//     "@nuxtjs/tailwindcss",
//     "nuxt-icon",
//     "@nuxtjs/color-mode"
//   ],
//   colorMode: {
//     classSuffix: ''
//   },
//   // Add this css property below:
//   // css: ['~/assets/css/tailwind.css'],
// })

const computerFavicon = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3ctext y='.9em' font-size='90'%3e💻%3c/text%3e%3c/svg%3e";

export default defineNuxtConfig({
  // This 'app' block configures the <head> tag for your entire site.
  app: {
    head: {
      title: 'Austin Varghese', // This sets the browser tab title
      link: [
        // This sets the browser tab icon (favicon) to the emoji
        { rel: 'icon', type: 'image/svg+xml', href: computerFavicon }
      ]
    }
  },

  // Your other configurations remain below:
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/color-mode"
  ],
  colorMode: {
    classSuffix: ''
  },

})