<script setup>
import { LINKS, SITE } from '../data.js'
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
          {{ SITE.name }}
        </h1>

        <p class="sub" v-reveal="70">Open source self-hosted MTProto-compatible messenger.</p>

        <p class="lead" v-reveal="100">
          Clients for <strong>Windows</strong> and <strong>Android</strong> — connect to the
          official network or your own server. All open source.
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
      </div>

      <div class="visual" v-reveal="120">
        <ScreenshotPair desktop="desktopChatList" phone="androidChatList" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 128px 0 60px;
  overflow: hidden;
  scroll-margin-top: 80px;
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
  font-size: clamp(2.4rem, 5vw, 3.8rem);
}

.sub {
  font-size: 1rem;
  color: var(--accent-bright);
  font-weight: 600;
  margin: 12px 0 0;
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
}

@media (max-width: 480px) {
  .hero { padding: 96px 0 40px; }
  .cta { flex-direction: column; }
  .cta .btn { width: 100%; justify-content: center; }
  .lead { font-size: 0.96rem; }
}
</style>
