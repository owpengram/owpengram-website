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
        <!-- The brand name is already in the navbar and the tab title; spending
             the h1 on it again says nothing. The headline is the promise, and
             the sentence under it is what the product actually is. -->
        <h1 v-reveal="50">
          Your messenger.<br />Your server.<br /><span class="grad-text">Your rules.</span>
        </h1>

        <p class="lead" v-reveal="100">
          <strong>{{ SITE.name }}</strong> is an open-source messenger that speaks
          the MTProto protocol. Clients for <strong>Windows</strong>,
          <strong>Linux</strong> and <strong>Android</strong> connect to the
          official network, to our public server, or to one you run yourself.
        </p>

        <div class="cta" v-reveal="150">
          <a :href="LINKS.desktopRelease" target="_blank" rel="noopener" class="btn btn-primary" v-ripple>
            <IconSvg name="desktop" /> Windows
          </a>
          <a :href="LINKS.androidRelease" target="_blank" rel="noopener" class="btn btn-primary" v-ripple>
            <IconSvg name="phone" /> Android
          </a>
          <a :href="LINKS.server" target="_blank" rel="noopener" class="btn btn-ghost" v-ripple>
            <IconSvg name="server" /> Server
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
  font-size: clamp(2.3rem, 4.6vw, 3.6rem);
  line-height: 1.04;
  margin-bottom: 18px;
}

.lead {
  font-size: 1.06rem;
  color: var(--body);
  max-width: 500px;
  line-height: 1.75;
}

.lead strong:first-child { color: var(--ink); }

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
