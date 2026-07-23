import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeLocale, i18n } from './i18n/index.js'

const transitionName = ref('page-fade')
router.beforeEach((to, from, next) => {
  if (to.path === '/' && from.name) {
    transitionName.value = 'page-slide-right'
  } else {
    transitionName.value = to.meta.transition || 'page-fade'
  }
  next()
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.provide('transitionName', transitionName)
initializeLocale()
app.mount('#app')
