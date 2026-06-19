<script setup>
import { LINKS, SCREENSHOTS } from '../data.js'
import IconSvg from './IconSvg.vue'
import ScreenshotFrame from './ScreenshotFrame.vue'
</script>

<template>
  <section class="section server" id="server">
    <div class="container">
      <div class="layout" v-reveal>
        <div class="copy">
          <span class="eyebrow">Self-host</span>
          <h2>Your server, your Docker stack</h2>
          <p>
            Deploy OwpenGram server with Docker Compose. Chats, media, groups
            and calls — on hardware you control, with build scripts and tooling
            in the open.
          </p>
          <ul>
            <li><IconSvg name="check" /> Docker-based deployment</li>
            <li><IconSvg name="check" /> Compatible with Windows & Android clients</li>
            <li><IconSvg name="check" /> Full source on GitHub</li>
          </ul>
          <a :href="LINKS.server" target="_blank" rel="noopener" class="btn btn-primary">
            <IconSvg name="server" /> Server repository
          </a>
        </div>

        <ScreenshotFrame v-bind="SCREENSHOTS.serverDocker" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.server {
  background: var(--surface-2);
  border-block: 1px solid var(--line);
}

.layout {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 40px;
  align-items: center;
}

.copy h2 {
  font-size: clamp(1.8rem, 3.2vw, 2.4rem);
  margin-bottom: 14px;
}

.copy p {
  color: var(--body);
  line-height: 1.75;
  margin-bottom: 18px;
}

.copy ul {
  list-style: none;
  padding: 0;
  margin: 0 0 22px;
  display: grid;
  gap: 8px;
}

.copy li {
  display: flex;
  align-items: center;
  gap: 9px;
  font-weight: 600;
  color: var(--ink);
  font-size: 0.9rem;
}

.copy ul :deep(svg) {
  width: 17px;
  height: 17px;
  color: var(--accent);
}

@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; }
}
</style>
