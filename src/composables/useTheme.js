import { ref, watch } from 'vue'

const theme = ref('light')
let initialized = false

function applyTheme(value) {
  document.documentElement.dataset.theme = value
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', value === 'dark' ? '#050508' : '#f7f9fc')
}

export function initTheme() {
  if (initialized) return
  initialized = true

  const saved = localStorage.getItem('owpengram-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.value = saved || (prefersDark ? 'dark' : 'light')
  applyTheme(theme.value)

  watch(theme, (value) => {
    localStorage.setItem('owpengram-theme', value)
    applyTheme(value)
  })
}

export function useTheme() {
  return {
    theme,
    toggle: () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    },
  }
}
