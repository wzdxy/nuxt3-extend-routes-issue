import { ModuleContainer} from "@nuxt/kit"
import { resolve, join } from "path"

export default function (this: ModuleContainer) {
  this.extendRoutes(function (routes) {
    routes.push({
      path: '/topic:id(\\d+)',
      name: 'topic1',
      file: join(__dirname, 'pages', 'topic.vue'),
    })
    console.log(routes)
    return routes
  })
}