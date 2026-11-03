<script setup>
import { SHOWCASE } from '../data.js'
import ScreenshotCarousel from './ScreenshotCarousel.vue'
import GiftShowcase from './GiftShowcase.vue'
</script>

<template>
  <section class="section" id="product">
    <div class="container">
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
            <h2>{{ row.title }}</h2>
            <p>{{ row.text }}</p>
          </div>
          <GiftShowcase v-if="row.gifts" />
          <ScreenshotCarousel v-else :pairs="row.pairs" />
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


.copy h2 {
  font-size: clamp(1.6rem, 2.9vw, 2.2rem);
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
  color: var(--accent-icon);
  margin-bottom: 10px;
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
  .copy h2 { font-size: clamp(1.3rem, 6vw, 1.6rem); }
  .copy p { font-size: 0.95rem; }
}
</style>
