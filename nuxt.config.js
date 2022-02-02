export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "DegoTeams ",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Mohammad Sahrullah" },
      {
        hid: "description",
        name: "description",
        content: "blabla taillwussh!",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOriginIsolated: "",
      },
    ],
    link: [
      {
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap",
        rel: "stylesheet",
      },
    ],
    link: [
      {
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap",
        rel: "stylesheet",
      },
    ],
  },
  // https://fonts.gstatic.com
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/fontawesome",
      {
        component: "fa",
        suffix: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // font awesome icon
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      // regular: true,
    },
  },

  // tailwindcss config
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
