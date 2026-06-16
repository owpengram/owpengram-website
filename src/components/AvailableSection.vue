<script setup>
import { AVAILABLE } from '../data.js'
</script>

<template>
  <section class="section available" id="available">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">What works today</span>
        <h2>Shipping now — updated as we go</h2>
        <p>
          A living checklist of what the server and clients can do right now.
          Channels are not ready yet — see what is planned below.
        </p>
      </div>

      <div class="columns">
        <article
          v-for="(col, i) in [AVAILABLE.clients, AVAILABLE.server]"
          :key="col.title"
          class="column card"
          v-reveal="i * 80"
        >
          <header class="col-head">
            <h3>{{ col.title }}</h3>
            <span class="col-note">{{ col.note }}</span>
          </header>
          <ul>
            <li v-for="item in col.items" :key="item.text">
              <span class="icon" aria-hidden="true">{{ item.icon }}</span>
              <span>{{ item.text }}</span>
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
  border-block: 1px solid var(--line);
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.column {
  padding: 28px;
}

.col-head {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--line);
}

.col-head h3 {
  font-size: 1.25rem;
  margin-bottom: 4px;
}

.col-note {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
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
  .columns { grid-template-columns: 1fr; }
}
</style>
