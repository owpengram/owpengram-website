<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'
import ThemeToggle from './ThemeToggle.vue'

const scrolled = ref(false)
const open = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 16)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const nav = [
  { href: '#available', label: 'Status' },
  { href: '#product', label: 'Product' },
  { href: '#multiserver', label: 'Multi-server' },
  { href: '#server', label: 'Server' },
]
const close = () => (open.value = false)
</script>

<template>
  <header class="nav" :class="{ 'nav--solid': scrolled }">
    <div class="container nav-inner">
      <a href="#top" class="brand" @click="close">
        <img src="/logo.png" alt="OwpenGram" />
        <span>OwpenGram</span>
      </a>

      <nav class="links" :class="{ open }">
        <a v-for="l in nav" :key="l.href" :href="l.href" @click="close">{{ l.label }}</a>
        <div class="mobile-dl">
          <strong>Download</strong>
          <a :href="LINKS.desktopRelease" target="_blank" rel="noopener" @click="close"><IconSvg name="desktop" /> Windows</a>
          <a :href="LINKS.androidRelease" target="_blank" rel="noopener" @click="close"><IconSvg name="phone" /> Android</a>
        </div>
        <div class="ext-links">
          <a
            :href="LINKS.patreon"
            target="_blank"
            rel="noopener"
            class="ext ext--patreon"
            @click="close"
          >
            <IconSvg name="patreon" /> Patreon
          </a>
          <a :href="LINKS.telegramChannel" target="_blank" rel="noopener" class="ext" @click="close">
            <IconSvg name="telegram" /> Telegram
          </a>
          <a :href="LINKS.org" target="_blank" rel="noopener" class="ext" @click="close">
            <IconSvg name="github" /> GitHub
          </a>
        </div>
      </nav>

      <div class="actions">
        <ThemeToggle />
        <div class="drop-wrap">
          <button class="btn btn-primary nav-cta">
            Download
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="chev"><path d="M6 9l6 6 6-6" /></svg>
          </button>
          <div class="drop">
            <a :href="LINKS.desktopRelease" target="_blank" rel="noopener" @click="close">
              <IconSvg name="desktop" /> Windows
            </a>
            <a :href="LINKS.androidRelease" target="_blank" rel="noopener" @click="close">
              <IconSvg name="phone" /> Android
            </a>
          </div>
        </div>
        <button class="burger" :class="{ open }" @click="open = !open" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
  border-bottom: 1px solid transparent;
}

.nav--solid {
  background: color-mix(in srgb, var(--bg-elevated) 88%, transparent);
  backdrop-filter: blur(18px) saturate(160%);
  border-bottom-color: var(--line);
  box-shadow: 0 12px 40px -28px rgba(0, 0, 0, 0.35);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  gap: 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  color: var(--ink);
  font-size: 1.05rem;
  letter-spacing: -0.03em;
}

.brand img { width: 32px; height: 32px; }

.links {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;
}

.links a {
  color: var(--body);
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.15s ease;
}

.links a:hover { color: var(--accent); }

.ext-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ext {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--ink) !important;
  border: 1px solid var(--line);
  padding: 8px 12px;
  border-radius: 10px;
  background: var(--surface);
}

.ext--patreon:hover {
  border-color: color-mix(in srgb, #ff424d 55%, var(--line));
  color: #ff424d !important;
}

.ext :deep(svg) { width: 16px; height: 16px; }

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-cta {
  padding: 10px 16px;
  font-size: 0.86rem;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.chev { width: 16px; height: 16px; }

.drop-wrap {
  position: relative;
}

.drop {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 6px;
  min-width: 160px;
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 6px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
  z-index: 60;
}

.drop-wrap:hover .drop,
.drop-wrap:focus-within .drop {
  display: block;
}

.drop a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 8px;
  color: var(--ink);
  font-weight: 600;
  font-size: 0.88rem;
  transition: background 0.15s;
}

.drop a:hover {
  background: var(--surface);
  color: var(--accent);
}

.drop :deep(svg) {
  width: 17px;
  height: 17px;
  color: var(--body);
}

.mobile-dl { display: none; }

.burger {
  display: none;
  background: none;
  border: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.burger span {
  display: block;
  width: 22px;
  height: 2px;
  margin: 4px auto;
  background: var(--ink);
  transition: 0.25s;
  border-radius: 2px;
}

.burger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

@media (max-width: 960px) {
  .burger { display: block; }
  .nav-cta { display: none; }

  .links {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: var(--bg-elevated);
    border-bottom: 1px solid var(--line);
    padding: 8px 16px 18px;
    transform: translateY(-10px);
    opacity: 0;
    pointer-events: none;
    transition: 0.2s ease;
    margin-left: 0;
  }

  .links.open {
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }

  .links a {
    padding: 12px 6px;
    border-bottom: 1px solid var(--line);
  }

  .mobile-dl {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 12px 0 4px;
  }

  .mobile-dl strong {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--body);
    padding: 0 6px 6px;
  }

  .mobile-dl a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 6px;
    color: var(--ink);
    font-weight: 600;
    font-size: 0.9rem;
    border-bottom: 1px solid var(--line);
  }

  .mobile-dl :deep(svg) {
    width: 18px;
    height: 18px;
  }

  .ext-links {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
  }

  .ext {
    justify-content: center;
    width: 100%;
  }
}
</style>
