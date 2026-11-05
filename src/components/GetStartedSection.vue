<script setup>
import { LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'

const cards = [
  {
    icon: 'desktop',
    title: 'Windows client',
    text: 'Release build on GitHub',
    href: LINKS.desktopRelease,
    cta: 'Download',
  },
  {
    icon: 'phone',
    title: 'Android client',
    text: 'APK from latest release',
    href: LINKS.androidRelease,
    cta: 'Download',
  },
  {
    icon: 'server',
    title: 'Server',
    text: 'Ready-to-run archive, no Docker',
    href: LINKS.server,
    cta: 'Repository',
  },
]
</script>

<template>
  <section class="section" id="get-started">
    <div class="container">
      <div class="banner panel" v-reveal>
        <div class="banner-copy">
          <span class="eyebrow eyebrow--panel">Get started</span>
          <h2>Download. Deploy. Audit.</h2>
          <p>
            Grab the Windows or Android client, spin up a server, read every line
            of code on GitHub. No license fee — just infrastructure you run.
          </p>
          <div class="banner-actions">
            <a :href="LINKS.desktopRelease" target="_blank" rel="noopener" class="btn btn-primary">
              <IconSvg name="desktop" /> Windows
            </a>
            <a :href="LINKS.androidRelease" target="_blank" rel="noopener" class="btn btn-primary">
              <IconSvg name="phone" /> Android
            </a>
            <a :href="LINKS.org" target="_blank" rel="noopener" class="btn btn-dark">
              <IconSvg name="github" /> GitHub
            </a>
            <a :href="LINKS.telegramChannel" target="_blank" rel="noopener" class="btn btn-dark">
              Telegram channel
            </a>
            <a :href="LINKS.telegramChat" target="_blank" rel="noopener" class="btn btn-dark">
              Telegram chat
            </a>
          </div>
        </div>

        <div class="cards">
          <a
            v-for="(c, i) in cards"
            :key="c.title"
            :href="c.href"
            target="_blank"
            rel="noopener"
            class="gcard"
            v-reveal="i * 60"
          >
            <span class="ic"><IconSvg :name="c.icon" /></span>
            <div class="meta">
              <strong>{{ c.title }}</strong>
              <small>{{ c.text }}</small>
            </div>
            <span class="go"><IconSvg name="arrow" /> {{ c.cta }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  border-radius: var(--radius-lg);
  padding: 44px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  align-items: center;
  border: 1px solid var(--panel-line);
}

.banner-copy h2 {
  color: var(--panel-ink);
  font-size: clamp(1.7rem, 3.2vw, 2.35rem);
}

.banner-copy p {
  color: var(--panel-body);
  margin-bottom: 22px;
  line-height: 1.7;
}

.banner-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.cards {
  display: grid;
  gap: 10px;
}

.gcard {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--panel-line);
  border-radius: 14px;
  padding: 14px 16px;
  transition: border-color 0.18s ease, background 0.18s ease;
}

.gcard:hover {
  border-color: color-mix(in srgb, var(--accent-bright) 45%, var(--panel-line));
  background: rgba(255, 255, 255, 0.06);
}

.ic {
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  background: var(--grad);
}

.meta strong {
  display: block;
  color: var(--panel-ink);
  font-size: 0.95rem;
}

.meta small {
  color: var(--panel-body);
  font-size: 0.82rem;
}

.go {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--accent-icon);
  font-weight: 700;
  font-size: 0.78rem;
  white-space: nowrap;
}

.go :deep(svg) {
  width: 15px;
  height: 15px;
}

@media (max-width: 900px) {
  .banner {
    grid-template-columns: 1fr;
    padding: 32px;
  }
}
</style>
