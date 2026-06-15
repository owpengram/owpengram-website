<script setup>
import { PILLARS } from '../data.js'
import IconSvg from './IconSvg.vue'
</script>

<template>
  <section class="section" id="why">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Why OwpenGram</span>
        <h2>Communication that answers to <span class="grad-text">you</span></h2>
        <p>
          One platform, two halves. A server you can own end to end, and a client
          that feels like home — together they put your conversations back in your hands.
        </p>
      </div>

      <div class="grid">
        <article
          v-for="(p, i) in PILLARS"
          :key="p.title"
          class="card pillar"
          v-reveal="i * 90"
        >
          <div class="ic"><IconSvg :name="p.icon" /></div>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.pillar { display: flex; flex-direction: column; }
.ic {
  width: 52px; height: 52px; padding: 13px;
  border-radius: 14px;
  color: #fff;
  background: var(--grad);
  box-shadow: var(--shadow-cyan);
  margin-bottom: 18px;
}
.pillar h3 { font-size: 1.18rem; }
.pillar p { color: var(--muted); margin: 0; font-size: 0.97rem; }

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
