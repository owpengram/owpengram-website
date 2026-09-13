<script setup>
import { CAPABILITY_GROUPS } from '../data.js'
import IconSvg from './IconSvg.vue'
</script>

<template>
  <section class="section available" id="available">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">What works today</span>
        <h2>Shipped, not planned</h2>
        <p>
          Everything below is in the current release and runs on the public
          server right now. Nothing on this page is a roadmap item.
        </p>
      </div>

      <div class="groups">
        <article
          v-for="(group, i) in CAPABILITY_GROUPS"
          :key="group.title"
          class="group card"
          v-reveal="i * 60"
        >
          <header>
            <span class="badge"><IconSvg :name="group.icon" /></span>
            <div>
              <h3>{{ group.title }}</h3>
              <p>{{ group.text }}</p>
            </div>
          </header>
          <ul>
            <li v-for="item in group.items" :key="item">
              <IconSvg name="check" /><span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.available {
  background: var(--surface-2);
  border-bottom: 1px solid var(--line);
  scroll-margin-top: 80px;
}

.groups {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  align-items: start;
}

.group { padding: 30px; }

header {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  align-items: start;
  margin-bottom: 22px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--line);
}

/* Tinted tile rather than a bare glyph: at this size a 22px stroke icon on
   its own reads as an afterthought next to the heading. */
.badge {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 13px;
  background: var(--accent-soft);
  color: var(--accent-icon);
}

.badge :deep(svg) { width: 23px; height: 23px; }

h3 {
  font-size: 1.18rem;
  margin: 0 0 5px;
  letter-spacing: -0.02em;
}

header p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--muted);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 11px;
}

li {
  display: grid;
  grid-template-columns: 17px 1fr;
  gap: 12px;
  align-items: start;
  font-size: 0.93rem;
  line-height: 1.5;
  color: var(--ink);
}

li :deep(svg) {
  width: 17px;
  height: 17px;
  margin-top: 3px;
  color: var(--accent-icon);
}

@media (max-width: 900px) {
  .groups { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .group { padding: 22px; }
  .badge { width: 40px; height: 40px; border-radius: 11px; }
  .badge :deep(svg) { width: 20px; height: 20px; }
  header { gap: 13px; }
}
</style>
