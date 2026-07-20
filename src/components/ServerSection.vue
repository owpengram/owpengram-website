<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { LINKS, SCREENSHOTS } from '../data.js'
import IconSvg from './IconSvg.vue'
import ScreenshotFrame from './ScreenshotFrame.vue'

const el = ref(null)
const tilt = ref({ rx: 0, ry: 0 })
const maxTilt = 5

function onMove(e) {
  if (!el.value) return
  const rect = el.value.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height
  tilt.value = { rx: (y - 0.5) * -maxTilt, ry: (x - 0.5) * maxTilt }
}

function onLeave() {
  tilt.value = { rx: 0, ry: 0 }
}

onMounted(() => {
  const p = el.value
  if (p) {
    p.addEventListener('mousemove', onMove)
    p.addEventListener('mouseleave', onLeave)
  }
})

onUnmounted(() => {
  const p = el.value
  if (p) {
    p.removeEventListener('mousemove', onMove)
    p.removeEventListener('mouseleave', onLeave)
  }
})
</script>

<template>
  <section class="section server" id="server">
    <div class="container">
      <div class="layout" v-reveal>
        <div class="copy">
          <span class="eyebrow">Self-host</span>
          <h2>Your server, one binary</h2>
          <p>
            A single Go binary runs the whole server — chats, media, groups,
            channels, bots, calls. Docker Compose brings up PostgreSQL and
            Redis in one command; everything else is source and tooling in
            the open.
          </p>
          <ul>
            <li>• Single Go binary — build and run in minutes</li>
            <li>• Compatible with Windows & Android clients</li>
            <li>• Full source on GitHub</li>
          </ul>
          <a :href="LINKS.server" target="_blank" rel="noopener" class="btn btn-primary">
            <IconSvg name="server" /> Server repository
          </a>
        </div>

        <div
          ref="el"
          class="shot-wrap"
          :style="{
            perspective: '800px',
          }"
        >
          <div
            class="shot-inner"
            :style="{
              transform: 'rotateX(' + tilt.rx + 'deg) rotateY(' + tilt.ry + 'deg)',
            }"
          >
            <ScreenshotFrame v-bind="SCREENSHOTS.serverDocker" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.server {
  background: var(--surface-2);
  border-block: 1px solid var(--line);
  scroll-margin-top: 80px;
}

.layout {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 40px;
  align-items: center;
}

.shot-wrap {
  perspective: 800px;
}

.shot-inner {
  transition: transform 0.15s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
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
  font-weight: 600;
  color: var(--ink);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .copy h2 { font-size: clamp(1.4rem, 7vw, 1.8rem); }
  .copy p { font-size: 0.95rem; }
}
</style>
