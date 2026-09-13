<script setup>
import { SERVICES, LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'
</script>

<template>
  <section class="section services" id="services">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Services</span>
        <h2>Or have it set up for you</h2>
        <p>
          The software is free and stays that way. What you can buy is the time
          it takes to get a server running properly, and someone to call when it
          matters.
        </p>
      </div>

      <!-- One-time work: the setup itself, then the pieces that depend on how
           the server will actually be used. -->
      <div class="onetime" v-reveal="60">
        <article class="card setup">
          <header>
            <span class="label">{{ SERVICES.setup.name }}</span>
            <div class="price">
              {{ SERVICES.setup.price }}<small>{{ SERVICES.setup.unit }}</small>
            </div>
          </header>
          <p class="lead">{{ SERVICES.setup.lead }}</p>
          <ul>
            <li v-for="item in SERVICES.setup.items" :key="item">
              <IconSvg name="check" /><span>{{ item }}</span>
            </li>
          </ul>
          <p class="note">{{ SERVICES.setup.note }}</p>
        </article>

        <div class="addons">
          <span class="group-label">Add on, if you need it</span>
          <article v-for="a in SERVICES.addons" :key="a.name" class="card addon">
            <div class="addon-head">
              <strong>{{ a.name }}</strong>
              <span class="addon-price">{{ a.price }}</span>
            </div>
            <p>{{ a.text }}</p>
          </article>
        </div>
      </div>

      <div class="support-block" v-reveal="80">
        <span class="group-label">Ongoing support</span>
        <div class="tiers">
          <article
            v-for="t in SERVICES.support"
            :key="t.name"
            class="card tier"
            :class="{ featured: t.featured }"
          >
            <span class="label">{{ t.name }}</span>
            <div class="price">{{ t.price }}<small>{{ t.unit }}</small></div>
            <p>{{ t.text }}</p>
          </article>
        </div>
      </div>

      <div class="custom card" v-reveal="100">
        <div>
          <strong>Custom work</strong>
          <p>{{ SERVICES.custom.text }}</p>
        </div>
        <span class="custom-price">{{ SERVICES.custom.price }}</span>
      </div>

      <div class="cta" v-reveal="120">
        <p>Tell me what you need and I will tell you which of these fits.</p>
        <a href="#contact" class="btn btn-primary"><IconSvg name="mail" /> Get in touch</a>
      </div>

      <div class="patreon" v-reveal="140">
        <div>
          <strong>{{ SERVICES.patreon.title }}</strong>
          <p>{{ SERVICES.patreon.text }}</p>
        </div>
        <a
          :href="LINKS.patreon"
          target="_blank"
          rel="noopener"
          class="btn btn-patreon"
        >
          <IconSvg name="patreon" /> Support on Patreon
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Transparent on purpose: the FAQ above and the contact block below are both
   filled, so this keeps the page alternating instead of stacking three solid
   blocks in a row. */
.services { scroll-margin-top: 80px; }

.card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 28px;
}

.group-label {
  display: block;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 14px;
}

.label {
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-icon);
  margin-bottom: 8px;
}

.price {
  font-size: 2.1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.1;
}

.price small {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--muted);
  margin-left: 8px;
  letter-spacing: 0;
}

/* ── one-time ─────────────────────────────────────────────────────────── */

.onetime {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 22px;
  align-items: start;
  margin-bottom: 42px;
}

.setup header { margin-bottom: 14px; }

.setup .lead {
  color: var(--body);
  line-height: 1.7;
  margin: 0 0 18px;
}

.setup ul {
  list-style: none;
  padding: 0;
  margin: 0 0 18px;
  display: grid;
  gap: 11px;
}

.setup li {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 12px;
  align-items: start;
  font-size: 0.94rem;
  color: var(--ink);
  line-height: 1.5;
}

.setup li :deep(svg) {
  width: 18px;
  height: 18px;
  margin-top: 3px;
  color: var(--accent-icon);
}

.note {
  margin: 0;
  padding-top: 16px;
  border-top: 1px solid var(--line);
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--muted);
}

.addons { display: grid; gap: 12px; }
.addon { padding: 20px 22px; }

.addon-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 6px;
}

.addon-head strong { color: var(--ink); font-size: 1rem; }

.addon-price {
  font-weight: 800;
  color: var(--accent);
  white-space: nowrap;
}

.addon p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--body);
}

/* ── support ──────────────────────────────────────────────────────────── */

.support-block { margin-bottom: 28px; }

.tiers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.tier p {
  margin: 12px 0 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--body);
}

.tier.featured {
  border-color: color-mix(in srgb, var(--accent) 45%, var(--line));
  box-shadow: 0 18px 50px -34px var(--accent);
}

/* ── custom + cta ─────────────────────────────────────────────────────── */

.custom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  padding: 22px 28px;
}

.custom strong { color: var(--ink); display: block; margin-bottom: 4px; }

.custom p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--body);
  max-width: 76ch;
}

.custom-price {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--accent);
  white-space: nowrap;
}

.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 32px;
}

.cta p { margin: 0; color: var(--body); }

/* Deliberately small. It is an aside to the paid packages above, not a
   competing pitch -- the old full-height band made two money asks in a row. */
.patreon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 34px;
  padding: 20px 26px;
  border-radius: var(--radius);
  background: var(--grad-soft);
  border: 1px solid var(--line);
}

.patreon strong { color: var(--ink); display: block; margin-bottom: 4px; }

.patreon p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--body);
  max-width: 68ch;
}

.btn-patreon {
  background: #ff424d;
  color: #fff;
  white-space: nowrap;
  box-shadow: 0 12px 28px -16px rgba(255, 66, 77, 0.75);
}

.btn-patreon:hover { background: #ff5a63; }

@media (max-width: 980px) {
  .onetime { grid-template-columns: 1fr; }
  .tiers { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .card { padding: 22px; }
  .custom { flex-direction: column; align-items: flex-start; gap: 14px; }
  .cta { flex-direction: column; gap: 14px; }
  .patreon { flex-direction: column; align-items: flex-start; gap: 16px; }
}
</style>
