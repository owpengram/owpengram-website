<script setup>
import { LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'
</script>

<template>
  <section class="section support" id="support">
    <div class="container">
      <div class="support-card panel" v-reveal>
        <div class="copy">
          <span class="eyebrow eyebrow--panel">Support development</span>
          <h2>Free forever. <span class="grad-text">Faster with you.</span></h2>
          <p>
            OwpenGram clients, server, and source code stay
            <strong>free and open</strong> — no paywall, no license fee.
            Patreon support funds development time and helps ship fixes,
            releases, and new features sooner.
          </p>
          <p class="note">
            You are not paying for software. You are helping independent
            open-source work move faster.
          </p>
        </div>
        <div class="cta">
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
    </div>
  </section>
</template>

<style scoped>
.support {
  padding-top: 0;
}

.support-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: center;
  padding: 44px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--panel-line);
}

.copy h2 {
  color: var(--panel-ink);
  font-size: clamp(1.7rem, 3.2vw, 2.45rem);
  margin-bottom: 16px;
}

.copy p {
  color: var(--panel-body);
  margin: 0;
  max-width: 58ch;
  line-height: 1.75;
}

.copy strong {
  color: var(--panel-ink);
}

.note {
  margin-top: 14px !important;
  font-size: 0.92rem;
  color: var(--accent-bright) !important;
  font-weight: 600;
}

.cta {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
}

.btn-patreon {
  background: #ff424d;
  color: #fff;
  padding: 14px 22px;
  font-size: 0.95rem;
  box-shadow: 0 14px 32px -16px rgba(255, 66, 77, 0.75);
}

.btn-patreon:hover {
  background: #ff5a63;
  box-shadow: 0 18px 40px -14px rgba(255, 66, 77, 0.85);
}

@media (max-width: 820px) {
  .support-card {
    grid-template-columns: 1fr;
    padding: 32px;
  }

  .cta {
    align-items: flex-start;
  }
}
</style>
