<script setup>
import { LINKS, SITE } from '../data.js'
import IconSvg from './IconSvg.vue'

const year = new Date().getFullYear()
const cols = [
  {
    head: 'Project',
    links: [
      { label: 'GitHub organization', href: LINKS.org },
      { label: 'Server', href: LINKS.server },
    ],
  },
  {
    head: 'Clients',
    links: [
      { label: 'Desktop client', href: LINKS.desktop },
      { label: 'Android client', href: LINKS.android },
    ],
  },
  {
    head: 'On this page',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Multi-server', href: '#multiserver' },
      { label: 'Who it’s for', href: '#who' },
    ],
  },
]
</script>

<template>
  <footer class="foot">
    <div class="container foot-inner">
      <div class="brand">
        <div class="logo">
          <img src="/logo.png" alt="OwpenGram logo" />
          <strong>{{ SITE.name }}</strong>
        </div>
        <p>{{ SITE.tagline }}</p>
        <a :href="LINKS.org" target="_blank" rel="noopener" class="gh">
          <IconSvg name="github" /> Open source on GitHub
        </a>
      </div>

      <div class="cols">
        <div v-for="c in cols" :key="c.head" class="col">
          <h4>{{ c.head }}</h4>
          <a
            v-for="l in c.links"
            :key="l.label"
            :href="l.href"
            :target="l.href.startsWith('#') ? '_self' : '_blank'"
            rel="noopener"
          >{{ l.label }}</a>
        </div>
      </div>
    </div>

    <div class="container bottom">
      <span>© {{ year }} {{ SITE.name }} · {{ SITE.domain }}</span>
      <span class="wip">● Open source · Work in progress</span>
    </div>
  </footer>
</template>

<style scoped>
.foot { background: var(--navy-2); color: var(--navy-body); padding: 64px 0 28px; border-top: 1px solid var(--navy-line); }
.foot-inner { display: grid; grid-template-columns: 1.2fr 2fr; gap: 48px; }
.logo { display: flex; align-items: center; gap: 10px; }
.logo img { width: 34px; height: 34px; }
.logo strong { color: var(--navy-ink); font-size: 1.2rem; }
.brand p { margin: 14px 0 18px; max-width: 280px; }
.gh { display: inline-flex; align-items: center; gap: 8px; color: var(--cyan); font-weight: 600; }
.gh :deep(svg) { width: 18px; height: 18px; }

.cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.col h4 { color: var(--navy-ink); margin: 0 0 14px; font-size: 0.95rem; }
.col a { display: block; color: var(--navy-body); padding: 6px 0; font-size: 0.92rem; transition: color 0.15s ease; }
.col a:hover { color: var(--cyan); }

.bottom {
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;
  margin-top: 48px; padding-top: 22px; border-top: 1px solid var(--navy-line);
  font-size: 0.85rem;
}
.wip { color: var(--cyan); }

@media (max-width: 820px) {
  .foot-inner { grid-template-columns: 1fr; gap: 36px; }
}
@media (max-width: 520px) {
  .cols { grid-template-columns: 1fr 1fr; }
}
</style>
