import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import { initTheme } from './composables/useTheme.js'

initTheme()

const app = createApp(App)

const observer =
  typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
      )
    : null

app.directive('reveal', {
  mounted(el, binding) {
    if (!observer) {
      el.classList.add('is-visible')
      return
    }
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    observer.observe(el)
  },
})

app.mount('#app')
