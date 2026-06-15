<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'

const scrolled = ref(false)
const open = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 12)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const nav = [
  { href: '#features', label: 'Features' },
  { href: '#multiserver', label: 'Multi-server' },
  { href: '#who', label: 'Who it’s for' },
  { href: '#get-started', label: 'Get started' },
]
const close = () => (open.value = false)
</script>

<template>
  <header class="nav" :class="{ 'nav--solid': scrolled }">
    <div class="container nav-inner">
      <a href="#top" class="brand" @click="close">
        <img src="/logo.png" alt="OwpenGram logo" />
        <span>OwpenGram</span>
      </a>

      <nav class="links" :class="{ open }">
        <a v-for="l in nav" :key="l.href" :href="l.href" @click="close">{{ l.label }}</a>
        <a :href="LINKS.org" target="_blank" rel="noopener" class="gh" @click="close">
          <IconSvg name="github" /> GitHub
        </a>
      </nav>

      <button class="burger" :class="{ open }" @click="open = !open" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  border-bottom: 1px solid transparent;
}
.nav--solid {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: saturate(180%) blur(14px);
  border-bottom-color: var(--line);
}
.nav-inner { display: flex; align-items: center; justify-content: space-between; height: 68px; }
.brand { display: flex; align-items: center; gap: 10px; font-weight: 800; color: var(--ink); font-size: 1.12rem; }
.brand img { width: 32px; height: 32px; }

.links { display: flex; align-items: center; gap: 28px; }
.links a { color: var(--body); font-weight: 600; font-size: 0.95rem; transition: color 0.15s ease; }
.links a:hover { color: var(--blue); }
.gh {
  display: inline-flex; align-items: center; gap: 7px;
  color: var(--ink) !important;
  border: 1px solid var(--line);
  padding: 8px 14px; border-radius: 999px;
}
.gh:hover { border-color: var(--blue); }
.gh :deep(svg) { width: 17px; height: 17px; }

.burger { display: none; background: none; border: 0; width: 40px; height: 40px; cursor: pointer; }
.burger span { display: block; width: 22px; height: 2px; margin: 4px auto; background: var(--ink); transition: 0.25s; border-radius: 2px; }
.burger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

@media (max-width: 820px) {
  .burger { display: block; }
  .links {
    position: absolute;
    top: 68px; left: 0; right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: #fff;
    border-bottom: 1px solid var(--line);
    padding: 8px 16px 18px;
    transform: translateY(-12px);
    opacity: 0; pointer-events: none;
    transition: 0.22s ease;
  }
  .links.open { transform: none; opacity: 1; pointer-events: auto; }
  .links a { padding: 13px 6px; border-bottom: 1px solid var(--line); }
  .gh { justify-content: center; margin-top: 12px; border-radius: 12px; }
}
</style>
