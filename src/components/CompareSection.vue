<script setup>
import { COMPARE } from '../data.js'
import IconSvg from './IconSvg.vue'

const LABEL = { yes: 'Yes', no: 'No', partial: 'Partly' }
</script>

<template>
  <section class="section compare" id="compare">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">How it compares</span>
        <h2>Where OwpenGram actually fits</h2>
        <p>
          Four ways to run a team or a community chat, side by side. Anything
          arguable is marked <em>partly</em> and explained, never scored down.
        </p>
      </div>

      <!-- The table scrolls inside its own box on narrow screens with the
           first column pinned, rather than being restacked into cards: the
           whole point of a comparison is reading across a row. -->
      <div class="scroller" v-reveal="60" tabindex="0" role="region" aria-label="Feature comparison">
        <table>
          <caption class="visually-hidden">
            OwpenGram compared with Telegram, Matrix with Element, and Rocket.Chat
          </caption>
          <thead>
            <tr>
              <th scope="col" class="rowhead"><span class="visually-hidden">Capability</span></th>
              <th
                v-for="(col, i) in COMPARE.columns"
                :key="col"
                scope="col"
                :class="{ own: i === 0 }"
              >
                {{ col }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in COMPARE.rows" :key="row.label">
              <th scope="row" class="rowhead">
                {{ row.label }}
                <small v-if="row.note">{{ row.note }}</small>
              </th>
              <td
                v-for="(value, i) in row.values"
                :key="i"
                :class="[value, { own: i === 0 }]"
              >
                <IconSvg v-if="value === 'yes'" name="check" />
                <span v-else-if="value === 'partial'" class="dot" aria-hidden="true"></span>
                <span v-else class="dash" aria-hidden="true">—</span>
                <span class="visually-hidden">{{ LABEL[value] }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="hint" aria-hidden="true">Swipe the table to see every column →</p>

    </div>
  </section>
</template>

<style scoped>
.compare { scroll-margin-top: 80px; }

.scroller {
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--surface);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
}

th,
td {
  padding: 15px 16px;
  text-align: center;
  border-bottom: 1px solid var(--line);
}

tbody tr:last-child th,
tbody tr:last-child td {
  border-bottom: 0;
}

thead th {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--muted);
  letter-spacing: 0.02em;
  white-space: nowrap;
  background: var(--surface-2);
}

thead th.own {
  color: var(--accent-icon);
}

/* Pinned so the row stays readable once the table scrolls sideways. */
.rowhead {
  position: sticky;
  left: 0;
  z-index: 1;
  min-width: 300px;
  max-width: 360px;
  text-align: left;
  font-weight: 600;
  color: var(--ink);
  background: var(--surface);
  line-height: 1.45;
}

thead .rowhead { background: var(--surface-2); }

.rowhead small {
  display: block;
  margin-top: 5px;
  font-weight: 500;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--muted);
}

/* The product's own column gets a tint for the length of the table, so the
   eye can follow it without re-reading the header. */
td.own,
thead th.own {
  background: color-mix(in srgb, var(--accent) 7%, transparent);
}

td :deep(svg) {
  width: 20px;
  height: 20px;
  margin: 0 auto;
  color: var(--accent-icon);
}

td.no { color: var(--muted); }

.dash { color: var(--muted); }

.dot {
  display: inline-block;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 2px solid var(--muted);
  background: linear-gradient(90deg, var(--muted) 50%, transparent 50%);
}

/* Only on the widths where the table actually has to be scrolled. */
.hint {
  display: none;
  margin: 10px 0 0;
  font-size: 0.8rem;
  color: var(--muted);
  text-align: center;
}

@media (max-width: 860px) {
  .hint { display: block; }
}

@media (max-width: 720px) {
  .rowhead { min-width: 220px; font-size: 0.88rem; }
  th, td { padding: 13px 12px; }
}
</style>
