import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  ssgOptions: {
    // Fichiers plats (faq.html) : Netlify les sert sous /faq sans redirection vers /faq/.
    dirStyle: 'flat',
    formatting: 'minify',
    // Les anciennes URL qui redirigent sont gérées par netlify.toml, pas pré-rendues.
    includedRoutes: (paths, routes) =>
      routes.filter((route) => !route.redirect).map((route) => route.path),
  },
})
