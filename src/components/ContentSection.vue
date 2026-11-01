<script setup>
import { GIFT_PACKS, LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'
</script>

<template>
  <section class="section content" id="content">
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow">Server content</span>
        <h2>Gifts for your server</h2>
        <p>
          A fresh server starts with no Star Gifts. Download a gift pack, then
          import it in the admin panel under
          <strong>StarGift Catalog → Import Pack</strong>: preview every gift and
          its collectible variants, and take the whole pack or just the gifts you
          want.
        </p>
      </div>

      <div class="packs">
        <article v-for="(pack, i) in GIFT_PACKS" :key="pack.file" class="card pack" v-reveal="i * 60">
          <header>
            <IconSvg name="spark" />
            <h3>{{ pack.name }}</h3>
          </header>
          <p>{{ pack.text }}</p>
          <a :href="`${LINKS.giftPacksRelease}/download/${pack.file}`" class="btn btn-primary dl">
            <IconSvg name="download" class="dl-mark" />
            <span class="dl-label">{{ pack.file }}</span>
          </a>
        </article>

        <!-- The packs are art; this is where new ones come from. -->
        <article class="card pack" v-reveal="120">
          <header>
            <IconSvg name="code" />
            <h3>Make your own</h3>
          </header>
          <p>
            Packs are a <code>pack.json</code> plus Lottie animations in a zip.
            The guide covers the format, the limits every animation must meet and
            the pitfalls that make one render as nothing in a real client.
          </p>
          <a :href="LINKS.giftPacks" target="_blank" rel="noopener" class="btn btn-ghost dl">
            <IconSvg name="github" class="dl-mark" />
            <span class="dl-label">Gift packs on GitHub</span>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content { scroll-margin-top: 80px; }

.section-head strong { color: var(--ink); }

.packs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  max-width: 1100px;
  margin: 0 auto;
}

.pack {
  display: flex;
  flex-direction: column;
  padding: 28px;
  min-width: 0;
}

header {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 14px;
}

header > :deep(svg) {
  width: 22px;
  height: 22px;
  color: var(--accent-icon);
}

h3 {
  margin: 0;
  font-size: 1.1rem;
}

.pack p {
  flex: 1;
  margin: 0 0 20px;
  color: var(--muted);
}

.dl {
  width: 100%;
  justify-content: flex-start;
  gap: 12px;
  padding: 14px 16px;
}

.dl-mark {
  width: 20px;
  height: 20px;
  flex: none;
}

.dl-label { flex: 1; text-align: left; }

@media (max-width: 900px) {
  .packs { grid-template-columns: 1fr; max-width: 440px; }
}
</style>
