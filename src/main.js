import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// Lightweight scroll-reveal directive (no animation library needed).
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
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )
    : null

app.directive('reveal', {
  mounted(el, binding) {
    if (!observer) {
      el.classList.add('is-visible')
      return
    }
    el.classList.add('reveal')
    if (binding.value) {
      el.style.transitionDelay = `${binding.value}ms`
    }
    observer.observe(el)
  },
})

app.mount('#app')
