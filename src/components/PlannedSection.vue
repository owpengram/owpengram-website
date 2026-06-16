<script setup>
import { PLANNED } from '../data.js'
</script>

<template>
  <section class="section planned" id="planned">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Up next</span>
        <h2>In progress & planned</h2>
        <p>
          What we are building next. This list changes as priorities shift —
          same idea as the status block above.
        </p>
      </div>

      <ul class="grid">
        <li
          v-for="(item, i) in PLANNED"
          :key="item.text"
          class="item"
          v-reveal="(i % 3) * 50"
        >
          <span class="icon" aria-hidden="true">{{ item.icon }}</span>
          <span class="text">{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 20px;
  background: var(--surface);
  border: 1px dashed color-mix(in srgb, var(--accent) 35%, var(--line));
  border-radius: var(--radius-sm);
  transition: border-color 0.2s ease, background 0.2s ease;
}

.item:hover {
  border-color: color-mix(in srgb, var(--accent) 55%, var(--line));
  background: var(--bg-elevated);
}

.icon {
  flex: none;
  font-size: 1.2rem;
  line-height: 1.3;
}

.text {
  font-size: 0.94rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--ink);
}

@media (max-width: 720px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
