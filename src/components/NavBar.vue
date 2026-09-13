<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'
import ThemeToggle from './ThemeToggle.vue'

const scrolled = ref(false)
const open = ref(false)
const active = ref('')
const onScroll = () => (scrolled.value = window.scrollY > 16)
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

// Order here must match the order of the sections on the page: the active item
// is driven by an IntersectionObserver, so a mismatch makes the highlight jump
// backwards as you scroll. #product is deliberately absent -- it sits directly
// under #available and a visitor scrolls into it either way.
const nav = [
  { href: '#available', label: 'Features' },
  { href: '#multiserver', label: 'Multi-server' },
  { href: '#server', label: 'Self-host' },
  { href: '#security', label: 'Security' },
  { href: '#compare', label: 'Compare' },
  { href: '#faq', label: 'FAQ' },
  { href: '#services', label: 'Services' },
]
const close = () => (open.value = false)

watch(open, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
  // Lets anything fixed outside this component get out of the way of the
  // sheet -- the scroll-to-top button sits at z-index 900 and would otherwise
  // float over it.
  document.body.classList.toggle('nav-open', v)
})

let observer = null

function initObserver() {
  const ids = nav.map(l => l.href.slice(1))
  const els = ids.map(id => document.getElementById(id)).filter(Boolean)
  if (!els.length) return

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          active.value = '#' + entry.target.id
        }
      }
    },
    { threshold: 0.3, rootMargin: '0px 0px -30% 0px' }
  )
  els.forEach(el => observer.observe(el))
}

onMounted(initObserver)
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <header class="nav" :class="{ 'nav--solid': scrolled, 'menu-open': open }">
    <div class="container nav-inner">
      <a href="#top" class="brand" @click="close">
        <img src="/logo.png" alt="OwpenGram" />
        <span>OwpenGram</span>
      </a>

      <nav class="links" :class="{ open }">
        <a v-for="l in nav" :key="l.href" :href="l.href" :class="{ active: active === l.href }" @click="close">{{ l.label }}</a>
        <div class="mobile-dl">
          <strong>Download</strong>
          <a :href="LINKS.desktopRelease" target="_blank" rel="noopener" @click="close"><IconSvg name="desktop" /> Desktop</a>
          <a :href="LINKS.androidRelease" target="_blank" rel="noopener" @click="close"><IconSvg name="phone" /> Android</a>
        </div>
        <div class="ext-links">
          <a
            :href="LINKS.patreon"
            target="_blank"
            rel="noopener"
            class="ext ext--patreon"
            title="Patreon"
            aria-label="Patreon"
            @click="close"
          >
            <IconSvg name="patreon" /><span class="ext-label">Patreon</span>
          </a>
          <a
            :href="LINKS.telegramChannel"
            target="_blank"
            rel="noopener"
            class="ext ext--telegram"
            title="Telegram"
            aria-label="Telegram"
            @click="close"
          >
            <IconSvg name="telegram" /><span class="ext-label">Telegram</span>
          </a>
          <a
            :href="LINKS.org"
            target="_blank"
            rel="noopener"
            class="ext ext--github"
            title="GitHub"
            aria-label="GitHub"
            @click="close"
          >
            <IconSvg name="github" /><span class="ext-label">GitHub</span>
          </a>
        </div>
      </nav>

      <div class="actions">
        <div class="drop-wrap">
          <button class="btn btn-primary nav-cta">
            Download
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="chev"><path d="M6 9l6 6 6-6" /></svg>
          </button>
          <div class="drop">
            <a :href="LINKS.desktopRelease" target="_blank" rel="noopener" @click="close">
              <IconSvg name="desktop" /> Desktop
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
    <ThemeToggle class="theme-fixed" />
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
  flex: none;
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
  gap: 22px;
  margin-left: auto;
}

@media (max-width: 1240px) {
  .links { gap: 16px; }
  .links a { font-size: 0.86rem; }
}

.links a {
  color: var(--body);
  font-weight: 600;
  font-size: 0.9rem;
  /* Seven items now: a wrapped "Multi-server" turned the bar two rows tall. */
  white-space: nowrap;
  transition: color 0.15s ease;
}

.links a:hover { color: var(--accent); }
.links a.active { color: var(--accent); }

.ext-links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ext {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: var(--ink) !important;
  border: 1px solid var(--line);
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: var(--surface);
  transition: border-color 0.15s ease, color 0.15s ease;
}

.ext-label { display: none; }

.ext--patreon:hover {
  border-color: color-mix(in srgb, #ff424d 55%, var(--line));
  color: #ff424d !important;
}

.ext--telegram:hover {
  border-color: color-mix(in srgb, #229ed9 55%, var(--line));
  color: #229ed9 !important;
}

.ext--github:hover {
  border-color: color-mix(in srgb, #2ea043 55%, var(--line));
  color: #2ea043 !important;
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

.drop-wrap::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 12px;
}

.drop {
  display: none;
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
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

.theme-fixed {
  position: fixed;
  top: 18px;
  right: 20px;
  z-index: 55;
}

.burger {
  display: none;
  background: none;
  border: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  /* Above .theme-fixed: both live in the header and the toggle is fixed, so
     without this it paints over the burger and swallows the tap. */
  position: relative;
  z-index: 60;
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

/* ── mobile ───────────────────────────────────────────────────────────────
   The collapsed nav is a full-height sheet, not a dropdown: a partial panel
   let the page show through under it, which is what made the old one look
   unfinished. Everything below is scoped to the collapsed layout only. */
@media (max-width: 1100px) {
  .nav-inner { min-width: 0; }

  .burger { display: block; }
  .drop-wrap { display: none; }

  /* The toggle is fixed to the top-right corner, which is exactly where the
     burger appears once the desktop nav collapses. Park it to the left of the
     burger instead of on top of it. */
  .theme-fixed {
    top: 16px;
    right: 64px;
  }

  /* An open sheet needs an opaque header above it, otherwise the brand row
     floats over the hero while the sheet below is solid. */
  .nav.menu-open {
    background: var(--bg-elevated);
    border-bottom-color: var(--line);
    backdrop-filter: none;
  }

  /* Kept in the tree when closed so it can animate; visibility keeps it out
     of the tab order meanwhile. */
  .links {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin-left: 0;
    padding: 10px 20px calc(28px + env(safe-area-inset-bottom));
    background: var(--bg-elevated);
    overflow-y: auto;
    overscroll-behavior: contain;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  }

  .links.open {
    visibility: visible;
    opacity: 1;
    transform: none;
  }

  /* Section links: hairline between items only, never a trailing rule under
     the last one -- that stray line was half of why it read as unfinished. */
  .links > a {
    position: relative;
    padding: 15px 2px;
    font-size: 1rem;
    color: var(--ink);
  }

  .links > a + a {
    border-top: 1px solid var(--line);
  }

  .links > a.active {
    color: var(--accent);
  }

  /* Marker for the current section, in the gutter so the label stays aligned
     with everything else. */
  .links > a.active::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 20px;
    border-radius: 0 3px 3px 0;
    background: var(--accent);
  }

  .mobile-dl {
    display: grid;
    gap: 8px;
    margin-top: 22px;
    padding-top: 20px;
    border-top: 1px solid var(--line);
  }

  .mobile-dl strong {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--muted);
    padding: 0;
  }

  .mobile-dl a {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px 16px;
    border: 1px solid var(--line);
    border-radius: var(--radius-sm);
    background: var(--surface);
    color: var(--ink);
    font-weight: 600;
    font-size: 0.94rem;
  }

  .mobile-dl :deep(svg) {
    width: 18px;
    height: 18px;
    color: var(--accent);
  }

  /* Three across: these are secondary to the sections above, so they get one
     row rather than three full-width bars competing with the download links. */
  .ext-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    width: 100%;
    margin-top: auto;
    padding-top: 24px;
  }

  .ext {
    justify-content: center;
    gap: 6px;
    width: 100%;
    height: auto;
    padding: 11px 6px;
    font-size: 0.82rem;
    font-weight: 600;
  }

  .ext-label { display: inline; }

  .ext :deep(svg) { width: 15px; height: 15px; }
}

/* Tablets get the same sheet, but a full-width one would stretch six links
   across 1000px. Centre the content instead of padding it out. */
@media (min-width: 640px) and (max-width: 1100px) {
  .links {
    padding-left: max(20px, calc((100% - 620px) / 2));
    padding-right: max(20px, calc((100% - 620px) / 2));
  }
}

@media (max-width: 360px) {
  /* The labels are the first thing to give: icons still identify them. */
  .ext { font-size: 0.74rem; gap: 4px; padding: 11px 2px; }
}

@media (max-width: 480px) {
  .brand span { font-size: 0.95rem; }
}
</style>
