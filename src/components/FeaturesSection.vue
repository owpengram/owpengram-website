<script setup>
import { FEATURES } from '../data.js'
import IconSvg from './IconSvg.vue'
import ScreenshotFrame from './ScreenshotFrame.vue'
</script>

<template>
  <section class="section" id="features">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">What works today</span>
        <h2>A full messenger — already running</h2>
        <p>
          OwpenGram is a work in progress, but it’s far from a concept. Here’s what
          you can use right now, on real devices and real servers.
        </p>
      </div>

      <div class="shots" v-reveal>
        <ScreenshotFrame label="Chats" variant="desktop" />
        <ScreenshotFrame label="Calls" variant="desktop" />
      </div>

      <div class="grid">
        <article
          v-for="(f, i) in FEATURES"
          :key="f.title"
          class="card feat"
          v-reveal="(i % 4) * 70"
        >
          <div class="dot"><IconSvg name="check" /></div>
          <div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.text }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shots {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  margin-bottom: 56px;
}
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.feat { display: flex; gap: 14px; align-items: flex-start; padding: 22px; }
.dot {
  width: 34px; height: 34px; flex: none; padding: 7px;
  border-radius: 10px; color: #fff; background: var(--grad);
}
.feat h3 { font-size: 1.04rem; margin-bottom: 4px; }
.feat p { font-size: 0.9rem; color: var(--muted); margin: 0; }

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 720px) {
  .shots { grid-template-columns: 1fr; }
}
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
