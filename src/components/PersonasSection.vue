<script setup>
import { PERSONAS } from '../data.js'
</script>

<template>
  <section class="section panel who" id="who">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow eyebrow--panel">Audience</span>
        <h2>Who it is for</h2>
        <p>
          From a home lab to a newsroom — the same client, scaled to how much
          control you need.
        </p>
      </div>

      <div class="grid">
        <article
          v-for="(p, i) in PERSONAS"
          :key="p.title"
          class="who-card"
          v-reveal="i * 60"
        >
          <span class="num">0{{ i + 1 }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.who {
  border-top: 1px solid var(--panel-line);
}

.who .section-head h2 {
  color: var(--panel-ink);
}

.who .section-head p {
  color: var(--panel-body);
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.who-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--panel-line);
  border-radius: var(--radius);
  padding: 24px;
  transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
}

.who-card:hover {
  border-color: color-mix(in srgb, var(--accent-bright) 50%, var(--panel-line));
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 0 28px -12px color-mix(in srgb, var(--accent-bright) 25%, transparent);
}

.num {
  font-weight: 800;
  font-size: 0.82rem;
  color: var(--accent-bright);
}

.who-card h3 {
  color: var(--panel-ink);
  font-size: 1.05rem;
  margin: 10px 0 8px;
}

.who-card p {
  color: var(--panel-body);
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
