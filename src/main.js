import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

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
app.provide('transitionName', transitionName)
app.mount('#app')
