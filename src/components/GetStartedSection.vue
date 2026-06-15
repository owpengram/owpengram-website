<script setup>
import { LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'

const cards = [
  { icon: 'desktop', title: 'Desktop client', text: 'Windows, macOS & Linux.', href: LINKS.desktop, cta: 'Desktop repo' },
  { icon: 'phone', title: 'Android client', text: 'Native multi-server app.', href: LINKS.android, cta: 'Android repo' },
  { icon: 'server', title: 'Server', text: 'Self-host with Docker.', href: LINKS.server, cta: 'Server repo' },
]
</script>

<template>
  <section class="section" id="get-started">
    <div class="container">
      <div class="banner" v-reveal>
        <div class="banner-copy">
          <span class="eyebrow eyebrow--light">Get started</span>
          <h2>Open source. Free to use. Yours to run.</h2>
          <p>
            Grab the clients, spin up a server, read the code. Everything lives on
            GitHub — contributions and curiosity welcome.
          </p>
          <a :href="LINKS.org" target="_blank" rel="noopener" class="btn btn-dark">
            <IconSvg name="github" /> Explore the GitHub organization
          </a>
        </div>

        <div class="cards">
          <a
            v-for="(c, i) in cards"
            :key="c.title"
            :href="c.href"
            target="_blank"
            rel="noopener"
            class="gcard"
            v-reveal="i * 80"
          >
            <span class="ic"><IconSvg :name="c.icon" /></span>
            <strong>{{ c.title }}</strong>
            <small>{{ c.text }}</small>
            <span class="go"><IconSvg name="arrow" /> {{ c.cta }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  position: relative;
  background:
    radial-gradient(70% 120% at 90% 0%, #123653, transparent 60%),
    var(--navy);
  border-radius: 28px;
  padding: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 44px;
  align-items: center;
  overflow: hidden;
}
.banner :deep(h2) { color: var(--navy-ink); font-size: clamp(1.7rem, 3.4vw, 2.4rem); }
.banner-copy p { color: var(--navy-body); margin-bottom: 22px; }
.eyebrow--light { color: var(--cyan); }

.cards { display: grid; grid-template-columns: 1fr; gap: 14px; }
.gcard {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'ic title go' 'ic text go';
  column-gap: 14px;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--navy-line);
  border-radius: 16px;
  padding: 16px 18px;
  transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
}
.gcard:hover { transform: translateY(-3px); border-color: rgba(32, 203, 232, 0.55); background: rgba(255, 255, 255, 0.08); }
.ic {
  grid-area: ic; width: 44px; height: 44px; padding: 11px;
  border-radius: 12px; color: #fff; background: var(--grad); box-shadow: var(--shadow-cyan);
}
.gcard strong { grid-area: title; color: var(--navy-ink); align-self: end; }
.gcard small { grid-area: text; color: var(--navy-body); align-self: start; font-size: 0.85rem; }
.go { grid-area: go; display: inline-flex; align-items: center; gap: 6px; color: var(--cyan); font-weight: 700; font-size: 0.82rem; white-space: nowrap; }
.go :deep(svg) { width: 16px; height: 16px; }

@media (max-width: 900px) {
  .banner { grid-template-columns: 1fr; padding: 36px; }
}
@media (max-width: 480px) {
  .banner { padding: 26px; border-radius: 22px; }
}
</style>
