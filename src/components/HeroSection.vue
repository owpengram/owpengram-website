<script setup>
import { LINKS, SCREENSHOTS, SITE, STATS } from '../data.js'
import IconSvg from './IconSvg.vue'
import ScreenshotPair from './ScreenshotPair.vue'
</script>

<template>
  <section id="top" class="hero">
    <div class="glow"></div>
    <div class="grid-bg"></div>

    <div class="container hero-inner">
      <div class="copy">
        <h1 v-reveal="50">
          Messaging you<br />
          <span class="grad-text">actually own.</span>
        </h1>

        <p class="lead" v-reveal="100">
          {{ SITE.name }} pairs a familiar messenger with a server you can deploy
          yourself. Ready-made clients for <strong>Windows</strong> and
          <strong>Android</strong> — connect to the official network or your
          private node from one app.
        </p>

        <div class="cta" v-reveal="150">
          <a :href="LINKS.desktopRelease" target="_blank" rel="noopener" class="btn btn-primary">
            <IconSvg name="desktop" /> Windows
          </a>
          <a :href="LINKS.androidRelease" target="_blank" rel="noopener" class="btn btn-primary">
            <IconSvg name="phone" /> Android
          </a>
          <a :href="LINKS.server" target="_blank" rel="noopener" class="btn btn-ghost">
            <IconSvg name="server" /> Deploy server
          </a>
        </div>

        <p class="note" v-reveal="190">
          Linux & macOS desktop builds are in development — source is on GitHub today.
        </p>
      </div>

      <div class="visual" v-reveal="120">
        <ScreenshotPair desktop="desktopChatList" phone="androidChatList" />
      </div>
    </div>

    <div class="container">
      <div class="stats" v-reveal="220">
        <div v-for="s in STATS" :key="s.label" class="stat">
          <strong>{{ s.value }}</strong>
          <span class="stat-label">{{ s.label }}</span>
          <small>{{ s.detail }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 128px 0 0;
  overflow: hidden;
}

.glow {
  position: absolute;
  inset: -20% 0 auto;
  height: 70%;
  background:
    radial-gradient(50% 50% at 70% 20%, var(--hero-glow), transparent 70%),
    radial-gradient(40% 40% at 20% 10%, color-mix(in srgb, var(--accent-bright) 18%, transparent), transparent 70%);
  pointer-events: none;
}

.grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--hero-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--hero-grid) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: linear-gradient(180deg, black, transparent 90%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 0.92fr 1.08fr;
  gap: 40px;
  align-items: center;
  padding-bottom: 52px;
}

h1 {
  font-size: clamp(2.6rem, 5.8vw, 4.4rem);
  max-width: 10ch;
}

.lead {
  font-size: 1.08rem;
  color: var(--body);
  max-width: 480px;
  line-height: 1.75;
}

.lead strong {
  color: var(--ink);
  font-weight: 700;
}

.cta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 28px 0 14px;
}

.note {
  font-size: 0.84rem;
  color: var(--muted);
  max-width: 420px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 52px;
}

.stat {
  background: var(--surface);
  padding: 26px 22px;
  text-align: center;
}

.stat strong {
  display: block;
  font-size: clamp(1.7rem, 3vw, 2.2rem);
  line-height: 1;
  color: var(--ink);
  letter-spacing: -0.04em;
}

.stat-label {
  display: block;
  margin-top: 8px;
  font-weight: 700;
  color: var(--ink);
  font-size: 0.92rem;
}

.stat small {
  display: block;
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.8rem;
  line-height: 1.45;
}

@media (max-width: 960px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  h1 { max-width: none; }

  .visual {
    max-width: 520px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 720px) {
  .hero { padding-top: 108px; }
  .stats { grid-template-columns: 1fr; }
}
</style>
