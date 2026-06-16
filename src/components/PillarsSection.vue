<script setup>
import { PILLARS } from '../data.js'
import IconSvg from './IconSvg.vue'
</script>

<template>
  <section class="section pillars" id="why">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Principles</span>
        <h2>Built for ownership</h2>
        <p>
          Open source is the baseline. The product goal is simple — communication
          that feels effortless while the infrastructure stays yours.
        </p>
      </div>

      <div class="grid">
        <article
          v-for="(p, i) in PILLARS"
          :key="p.title"
          class="card pillar"
          v-reveal="i * 70"
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
.pillars {
  border-bottom: 1px solid var(--line);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.pillar {
  display: flex;
  flex-direction: column;
}

.ic {
  width: 44px;
  height: 44px;
  padding: 11px;
  border-radius: 11px;
  color: #fff;
  background: var(--grad);
  margin-bottom: 16px;
}

.pillar h3 {
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.pillar p {
  color: var(--muted);
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
