<script setup>
import { ref } from 'vue'
import { FAQ } from '../data.js'

const open = ref(null)

function toggle(i) {
  open.value = open.value === i ? null : i
}
</script>

<template>
  <section class="section faq" id="faq">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">FAQ</span>
        <h2>Frequently asked questions</h2>
      </div>

      <div class="list">
        <div
          v-for="(item, i) in FAQ"
          :key="i"
          class="faq-item"
          :class="{ active: open === i }"
          v-reveal="i * 60"
        >
          <button class="faq-q" @click="toggle(i)" :aria-expanded="open === i">
            <span>{{ item.q }}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="chevron"><path d="M6 9l6 6 6-6" /></svg>
          </button>
          <div class="faq-a">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: var(--surface-2);
  border-block: 1px solid var(--line);
  scroll-margin-top: 80px;
}

.list {
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.faq-item {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  overflow: hidden;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.faq-item:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--line));
  box-shadow: 0 0 24px -10px color-mix(in srgb, var(--accent) 20%, transparent);
}

.faq-q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 18px 20px;
  font: inherit;
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--ink);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  -webkit-appearance: none;
  appearance: none;
  transition: color 0.15s ease;
}

.faq-q:hover {
  color: var(--accent);
}

.chevron {
  width: 20px;
  height: 20px;
  flex: none;
  transition: transform 0.25s ease;
  color: var(--muted);
}

.active .chevron {
  transform: rotate(-180deg);
}

.faq-a {
  display: grid;
  transition: grid-template-rows 0.3s ease;
}

.faq-item:not(.active) .faq-a {
  grid-template-rows: 0fr;
}

.faq-item.active .faq-a {
  grid-template-rows: 1fr;
}

.faq-a p {
  overflow: hidden;
  margin: 0;
  padding: 0 20px 18px;
  color: var(--body);
  font-size: 0.95rem;
  line-height: 1.7;
}

.faq-item:not(.active) .faq-a p {
  padding: 0 20px;
}

@media (max-width: 480px) {
  .faq-q {
    padding: 14px 16px;
    font-size: 0.92rem;
  }

  .faq-a p {
    padding: 0 16px 14px;
    font-size: 0.9rem;
  }
}
</style>
