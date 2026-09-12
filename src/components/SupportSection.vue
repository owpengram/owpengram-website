<script setup>
import { LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'
</script>

<template>
  <section class="section support" id="support">
    <div class="container inner" v-reveal>
      <div class="copy">
        <span class="eyebrow">Support development</span>
        <h2>Free forever. <span class="grad-text">Faster with you.</span></h2>
        <p>
          Everything here — both clients, the server, the whole source tree —
          has always been <strong>free</strong>, and always will be. No paywall,
          no licence fee, no paid tier with the good parts behind it.
        </p>
        <p>
          It is also built in personal time. Every feature, every fix, every
          release comes out of someone's evenings and weekends rather than a
          company budget.
        </p>
        <p class="note">
          If OwpenGram is useful to you, a pledge on Patreon buys more of that
          time — and supporters get a few perks in return.
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
  </section>
</template>

<style scoped>
/* A full-width tinted band rather than a card: the contact block right below
   is a card, and two identical cards back to back read as one repeated
   element instead of two separate sections. */
.support {
  background: var(--grad-soft);
  /* Bottom only -- the FAQ above already draws the line at this boundary. */
  border-bottom: 1px solid var(--line);
  scroll-margin-top: 80px;
}

.inner {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: center;
}

.copy h2 {
  font-size: clamp(1.7rem, 3.2vw, 2.45rem);
  margin-bottom: 16px;
}

.copy p {
  color: var(--body);
  margin: 0 0 12px;
  max-width: 58ch;
  line-height: 1.75;
}

.copy p:last-child {
  margin-bottom: 0;
}

.copy strong {
  color: var(--ink);
}

.note {
  margin-top: 14px !important;
  font-size: 0.92rem;
  color: var(--accent) !important;
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
  .inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .cta {
    align-items: flex-start;
  }
}
</style>
