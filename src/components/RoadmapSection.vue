<script setup>
import { ROADMAP } from '../data.js'
</script>

<template>
  <section class="section road" id="roadmap">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Where we’re headed</span>
        <h2>The goal: free, private, comfortable communication</h2>
        <p>
          OwpenGram is actively evolving. The mission is simple — a communication
          system that anyone can run, trust and enjoy. Here’s what’s next.
        </p>
      </div>

      <div class="grid">
        <article v-for="(r, i) in ROADMAP" :key="r.title" class="step" v-reveal="i * 80">
          <span class="line" v-if="i < ROADMAP.length"></span>
          <span class="bullet"></span>
          <h3>{{ r.title }}</h3>
          <p>{{ r.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.road { background: var(--bg-soft); border-top: 1px solid var(--line); }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.step { position: relative; padding: 24px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius); }
.bullet {
  display: block; width: 16px; height: 16px; border-radius: 50%;
  background: var(--grad); box-shadow: var(--shadow-cyan); margin-bottom: 16px;
}
.step h3 { font-size: 1.06rem; }
.step p { font-size: 0.92rem; color: var(--muted); margin: 0; }

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
