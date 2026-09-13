<script setup>
import { SECURITY, LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'
</script>

<template>
  <section class="section security" id="security">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Security &amp; privacy</span>
        <h2>What is encrypted, and who can read it</h2>
        <p>
          The honest version, with no marketing words in it. Every line below
          points at code you can open.
        </p>
      </div>

      <div class="grid">
        <article
          v-for="(item, i) in SECURITY"
          :key="item.title"
          class="item card"
          v-reveal="(i % 3) * 50"
        >
          <span class="badge"><IconSvg :name="item.icon" /></span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>

      <div class="cta" v-reveal="140">
        <a :href="LINKS.org" target="_blank" rel="noopener" class="btn btn-ghost">
          <IconSvg name="github" /> Read the source
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.security {
  background: var(--surface-2);
  border-block: 1px solid var(--line);
  scroll-margin-top: 80px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.item { padding: 26px; }

.badge {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent-icon);
  margin-bottom: 16px;
}

.badge :deep(svg) { width: 21px; height: 21px; }

h3 {
  font-size: 1.05rem;
  margin: 0 0 8px;
}

.item p {
  margin: 0;
  font-size: 0.91rem;
  line-height: 1.65;
  color: var(--body);
}

.cta {
  display: flex;
  justify-content: center;
  margin-top: 28px;
}

@media (max-width: 980px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 620px) {
  .grid { grid-template-columns: 1fr; }
  .item { padding: 22px; }
  .note { padding: 18px; }
}
</style>
