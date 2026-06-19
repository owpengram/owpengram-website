<script setup>
import { AVAILABLE } from '../data.js'
</script>

<template>
  <section class="section available" id="available">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">What works today</span>
        <h2>Current features</h2>
        <p>
          What the server and clients can do right now.
        </p>
      </div>

      <ul class="list">
        <li v-for="(item, i) in AVAILABLE" :key="item.text" v-reveal="i * 40">
          <span class="icon" aria-hidden="true">{{ item.icon }}</span>
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.available {
  background: var(--surface-2);
  border-block: 1px solid var(--line);
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  font-size: 0.94rem;
  line-height: 1.55;
  color: var(--body);
}

.icon {
  flex: none;
  width: 1.5rem;
  text-align: center;
  font-size: 1.05rem;
  line-height: 1.4;
}

li span:last-child {
  color: var(--ink);
  font-weight: 500;
}

@media (max-width: 720px) {
  .list { grid-template-columns: 1fr; }
}
</style>
