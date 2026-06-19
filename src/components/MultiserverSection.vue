<script setup>
import { LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'
import ScreenshotPair from './ScreenshotPair.vue'
</script>

<template>
  <section class="section panel multiserver" id="multiserver">
    <div class="container inner">
      <div class="copy" v-reveal>
        <span class="eyebrow eyebrow--panel">Multi-server</span>
        <h2>Pick a network per account</h2>
        <p>
          Sign in to the official Telegram network, your OwpenGram server, or any
          compatible node. Accounts stay isolated — switch between them without
          installing another app.
        </p>
        <ul class="points">
          <li>• Server selection at sign-in</li>
          <li>• Multiple accounts on one device</li>
          <li>• Move to self-hosting when you are ready</li>
        </ul>
        <div class="btn-group">
          <a :href="LINKS.desktop" target="_blank" rel="noopener" class="btn btn-dark">
            <IconSvg name="desktop" /> Windows source
          </a>
          <a :href="LINKS.android" target="_blank" rel="noopener" class="btn btn-dark">
            <IconSvg name="phone" /> Android source
          </a>
        </div>
      </div>

      <div v-reveal="90">
        <ScreenshotPair desktop="desktopChooseServer" phone="androidChooseServer" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.multiserver {
  border-block: 1px solid var(--panel-line);
  scroll-margin-top: 80px;
}

.inner {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: center;
}

.copy h2 {
  font-size: clamp(1.9rem, 3.5vw, 2.6rem);
  color: var(--panel-ink);
}

.copy p {
  color: var(--panel-body);
  font-size: 1.05rem;
  line-height: 1.75;
  margin-bottom: 20px;
}

.points {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: grid;
  gap: 10px;
}

.points li {
  font-weight: 600;
  color: var(--panel-ink);
  font-size: 0.92rem;
}

.btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

@media (max-width: 900px) {
  .inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
