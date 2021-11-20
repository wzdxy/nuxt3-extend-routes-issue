import { defineNuxtConfig } from 'nuxt3'
import { join } from "path"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  // use buildModules, working
  // buildModules: [
  //   '~/modules/addRoutes'
  // ],

  // use extendRoutes, not working
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/topic:id(\\d+)',
        name: 'topic1',
        file: join(__dirname, 'pages/topic.vue'),
      })
      console.log(routes)
    },
  },
})
