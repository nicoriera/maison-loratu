import { ref } from 'vue'
import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes, scrollBehavior, guardAdminRoutes } from './router'
import { initializeLocale, i18n } from './i18n/index.js'

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ app, router, isClient }) => {
    const transitionName = ref('page-fade')
    router.beforeEach((to, from, next) => {
      if (to.path === '/' && from.name) {
        transitionName.value = 'page-slide-right'
      } else {
        transitionName.value = to.meta.transition || 'page-fade'
      }
      next()
    })

    // Identity n'existe que dans le navigateur : la garde admin ne tourne pas au pré-rendu.
    if (isClient) router.beforeEach(guardAdminRoutes)

    app.use(i18n)
    app.provide('transitionName', transitionName)
    if (isClient) initializeLocale()
  },
)
