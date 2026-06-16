<script setup>
import { LINKS, SITE } from '../data.js'
import IconSvg from './IconSvg.vue'
import ScreenshotFrame from './ScreenshotFrame.vue'
</script>

<template>
  <section id="top" class="hero">
    <div class="glow glow-a"></div>
    <div class="glow glow-b"></div>

    <div class="container hero-inner">
      <div class="copy">
        <span class="eyebrow" v-reveal>● Open source · Work in progress</span>
        <h1 v-reveal="60">
          Your messenger.<br />
          Your <span class="grad-text">server</span>. Your rules.
        </h1>
        <p class="lead" v-reveal="120">
          {{ SITE.name }} is an open-source, multi-server messaging platform.
          Chat on the official network, your own private server, or any community
          node — all from one familiar app. Private by design, free from
          censorship, and yours to control.
        </p>

        <div class="cta" v-reveal="180">
          <a :href="LINKS.androidRelease" target="_blank" rel="noopener" class="btn btn-primary">
            <IconSvg name="phone" /> Download for Android
          </a>
          <a :href="LINKS.desktopRelease" target="_blank" rel="noopener" class="btn btn-primary">
            <IconSvg name="desktop" /> Download for Desktop
          </a>
          <a :href="LINKS.server" target="_blank" rel="noopener" class="btn btn-ghost">
            <IconSvg name="server" /> Self-host the server
          </a>
        </div>

        <ul class="ticks" v-reveal="240">
          <li><IconSvg name="check" /> Private & self-hostable</li>
          <li><IconSvg name="check" /> No cloud lock-in</li>
          <li><IconSvg name="check" /> Familiar experience</li>
        </ul>
      </div>

      <div class="art" v-reveal="160">
        <ScreenshotFrame label="Desktop client" variant="desktop" src="/hero-desktop.png" />
        <div class="phone">
          <ScreenshotFrame label="Mobile client" variant="phone" src="/hero-phone.jpg" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding: 150px 0 90px;
  overflow: hidden;
  background:
    radial-gradient(60% 60% at 50% -10%, var(--bg-tint), transparent 70%),
    var(--bg);
}
.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  opacity: 0.5;
  pointer-events: none;
}
.glow-a { width: 420px; height: 420px; background: rgba(42, 214, 239, 0.35); top: -80px; right: -60px; }
.glow-b { width: 360px; height: 360px; background: rgba(26, 127, 224, 0.28); bottom: -120px; left: -80px; }

.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}
h1 { font-size: clamp(2.4rem, 5.5vw, 4rem); }
.lead { font-size: 1.18rem; color: var(--body); max-width: 560px; }

.cta { display: flex; flex-wrap: wrap; gap: 14px; margin: 28px 0 22px; }

.ticks { list-style: none; display: flex; flex-wrap: wrap; gap: 18px; padding: 0; margin: 0; }
.ticks li { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; color: var(--muted); font-size: 0.92rem; }
.ticks :deep(svg) { width: 18px; height: 18px; color: var(--cyan); }

.art { position: relative; }
.phone { position: absolute; right: -10px; bottom: 4px; width: 150px; }

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .art { max-width: 520px; margin: 0 auto; width: 100%; }
  .phone { right: 0; width: 130px; }
}
@media (max-width: 720px) {
  .hero { padding: 122px 0 70px; }
  .lead { font-size: 1.06rem; }
  .phone { display: none; }
}
</style>
