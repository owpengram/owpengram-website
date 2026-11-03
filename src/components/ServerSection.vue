<script setup>
import { LINKS } from '../data.js'
import IconSvg from './IconSvg.vue'
import SetupDemo from './SetupDemo.vue'
</script>

<template>
  <section class="section server" id="server">
    <div class="container">
      <div class="layout" v-reveal>
        <div class="copy">
          <span class="eyebrow">Self-host</span>
          <h2>Your server, one command</h2>
          <p>
            A single Go binary runs the whole server — chats, media, groups,
            channels, bots, calls. Download the archive for your system, run
            one script and open the address it prints: a setup wizard in your
            browser asks where to keep data, and the server starts. From then on
            you run it from the panel: accounts, content, storage and health on
            one screen.
          </p>
          <a :href="LINKS.server" target="_blank" rel="noopener" class="btn btn-primary">
            <IconSvg name="server" /> Server repository
          </a>
        </div>

        <SetupDemo />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Deliberately transparent -- the animated orbs and background icons behind
   the page show through here. The neighbouring sections (the multi-server
   panel above, the FAQ below) carry their own backgrounds and edges, so this
   needs no border of its own to read as a separate section. */
.server {
  scroll-margin-top: 80px;
}

.layout {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 40px;
  align-items: center;
}


.copy h2 {
  font-size: clamp(1.8rem, 3.2vw, 2.4rem);
  margin-bottom: 14px;
}

.copy p {
  color: var(--body);
  line-height: 1.75;
  margin-bottom: 28px;
}

@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .copy h2 { font-size: clamp(1.4rem, 7vw, 1.8rem); }
  .copy p { font-size: 0.95rem; }
}
</style>
