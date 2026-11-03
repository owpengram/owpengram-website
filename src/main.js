import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import ripple from './directives/ripple.js'
import { FAQ } from './data.js'

const app = createApp(App)
app.directive('ripple', ripple)

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

// FAQPage structured data, generated from the same array the section renders
// so the two can never disagree. The static half (Organization, WebSite,
// SoftwareApplication) lives in index.html.
const faqSchema = document.createElement('script')
faqSchema.type = 'application/ld+json'
faqSchema.textContent = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
})
document.head.appendChild(faqSchema)

app.mount('#app')
