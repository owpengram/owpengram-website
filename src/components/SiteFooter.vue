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
      { label: 'Windows desktop', href: LINKS.desktopRelease },
      { label: 'Android', href: LINKS.androidRelease },
    ],
  },
  {
    head: 'Community',
    links: [
      { label: 'Telegram channel', href: LINKS.telegramChannel },
      { label: 'Telegram chat', href: LINKS.telegramChat },
      { label: 'GitHub', href: LINKS.org },
    ],
  },
  {
    head: 'On this page',
    links: [
      { label: 'What works today', href: '#available' },
      { label: 'Product', href: '#product' },
      { label: 'Multi-server', href: '#multiserver' },
    ],
  },
]
</script>

<template>
  <footer class="foot panel">
    <div class="container foot-inner">
      <div class="brand">
        <div class="logo">
          <img src="/logo.png" alt="OwpenGram" />
          <strong>{{ SITE.name }}</strong>
        </div>
        <p>{{ SITE.tagline }}</p>
        <p class="platforms">Clients: Windows · Android</p>
        <div class="social">
          <a :href="LINKS.org" target="_blank" rel="noopener" class="social-link">
            <IconSvg name="github" /> GitHub
          </a>
          <a :href="LINKS.telegramChannel" target="_blank" rel="noopener" class="social-link">
            Telegram channel
          </a>
          <a :href="LINKS.telegramChat" target="_blank" rel="noopener" class="social-link">
            Telegram chat
          </a>
        </div>
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
      <span class="oss">Open source · Self-hostable</span>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  padding: 60px 0 24px;
  border-top: 1px solid var(--panel-line);
}

.foot-inner {
  display: grid;
  grid-template-columns: 1.15fr 2fr;
  gap: 40px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img { width: 32px; height: 32px; }

.logo strong {
  color: var(--panel-ink);
  font-size: 1.15rem;
}

.brand p {
  margin: 12px 0 0;
  max-width: 280px;
  color: var(--panel-body);
  font-size: 0.92rem;
}

.platforms {
  font-size: 0.82rem !important;
  color: var(--accent-bright) !important;
  font-weight: 600;
}

.social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 16px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent-bright);
  font-weight: 600;
  font-size: 0.9rem;
  transition: opacity 0.15s ease;
}

.social-link:hover {
  opacity: 0.85;
}

.social-link :deep(svg) {
  width: 17px;
  height: 17px;
}

.cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.col h4 {
  color: var(--panel-ink);
  margin: 0 0 12px;
  font-size: 0.9rem;
}

.col a {
  display: block;
  color: var(--panel-body);
  padding: 5px 0;
  font-size: 0.88rem;
  transition: color 0.15s ease;
}

.col a:hover { color: var(--accent-bright); }

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid var(--panel-line);
  font-size: 0.82rem;
  color: var(--panel-body);
}

.oss {
  color: var(--accent-bright);
  font-weight: 600;
}

@media (max-width: 820px) {
  .foot-inner { grid-template-columns: 1fr; }
}

@media (max-width: 520px) {
  .cols { grid-template-columns: 1fr 1fr; }
}
</style>
