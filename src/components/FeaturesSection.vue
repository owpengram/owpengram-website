<script setup>
import { SHOWCASE } from '../data.js'
import ScreenshotPair from './ScreenshotPair.vue'
</script>

<template>
  <section class="section" id="product">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Product</span>
        <h2>Real software — not a slide deck</h2>
        <p>
          Screens from the current Windows and Android builds. Same flows, same
          polish — running against servers you choose.
        </p>
      </div>

      <div class="showcase-list">
        <article
          v-for="(row, i) in SHOWCASE"
          :key="row.id"
          class="showcase-row"
          :class="{ reverse: i % 2 === 1 }"
          v-reveal="i * 70"
        >
          <div class="copy">
            <span class="row-eyebrow">{{ row.eyebrow }}</span>
            <h3>{{ row.title }}</h3>
            <p>{{ row.text }}</p>
            <ul>
              <li v-for="point in row.points" :key="point">• {{ point }}</li>
            </ul>
          </div>
          <ScreenshotPair :desktop="row.desktop" :phone="row.phone" />
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
section { scroll-margin-top: 80px; }

.showcase-list {
  display: grid;
  gap: 80px;
}

.showcase-row {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: 40px;
  align-items: center;
}

.showcase-row.reverse {
  grid-template-columns: 1.12fr 0.88fr;
}

.showcase-row.reverse .copy {
  order: 2;
}

.copy h3 {
  font-size: clamp(1.45rem, 2.6vw, 1.95rem);
  margin-bottom: 12px;
}

.copy p {
  color: var(--body);
  line-height: 1.7;
  margin-bottom: 18px;
}

.row-eyebrow {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-bright);
  margin-bottom: 10px;
}

.copy ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
}

.copy li {
  font-weight: 600;
  color: var(--ink);
  font-size: 0.9rem;
}

@media (max-width: 980px) {
  .showcase-row,
  .showcase-row.reverse {
    grid-template-columns: 1fr;
  }

  .showcase-row.reverse .copy { order: 0; }
}

@media (max-width: 560px) {
  .showcase-list { gap: 56px; }
}

@media (max-width: 480px) {
  .copy h3 { font-size: clamp(1.2rem, 5.5vw, 1.45rem); }
  .copy p { font-size: 0.95rem; }
}
</style>
