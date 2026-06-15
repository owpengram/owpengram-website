<script setup>
import { PERSONAS } from '../data.js'
</script>

<template>
  <section class="section who" id="who">
    <div class="glow"></div>
    <div class="container">
      <div class="section-head" v-reveal>
        <span class="eyebrow eyebrow--light">Built for real needs</span>
        <h2>Made for everyone who values <span class="grad-text">control</span></h2>
        <p>
          From a curious first-time user to a newsroom under pressure — OwpenGram
          adapts to how much control you need, without giving up comfort.
        </p>
      </div>

      <div class="grid">
        <article
          v-for="(p, i) in PERSONAS"
          :key="p.title"
          class="who-card"
          v-reveal="i * 90"
        >
          <span class="num">0{{ i + 1 }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </article>
      </div>

      <p class="freedom" v-reveal>
        When the network is blocked, when servers go dark, when a state decides what
        you may say — a server you own keeps the conversation alive.
        <strong>That’s the point.</strong>
      </p>
    </div>
  </section>
</template>

<style scoped>
.who {
  position: relative;
  background:
    radial-gradient(80% 120% at 80% 0%, #102b46, transparent 60%),
    var(--navy);
  color: var(--navy-body);
  overflow: hidden;
}
.who :deep(h2) { color: var(--navy-ink); }
.who .section-head p { color: var(--navy-body); }
.glow {
  position: absolute; width: 460px; height: 460px; border-radius: 50%;
  background: rgba(32, 203, 232, 0.18); filter: blur(90px);
  top: -120px; left: -100px; pointer-events: none;
}
.eyebrow--light { color: var(--cyan); }

.grid { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.who-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--navy-line);
  border-radius: var(--radius);
  padding: 26px;
  transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
}
.who-card:hover { transform: translateY(-4px); border-color: rgba(32, 203, 232, 0.5); background: rgba(255, 255, 255, 0.06); }
.num {
  font-weight: 800; font-size: 0.9rem;
  background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent;
}
.who-card h3 { color: var(--navy-ink); font-size: 1.12rem; margin: 10px 0 8px; }
.who-card p { color: var(--navy-body); margin: 0; font-size: 0.94rem; }

.freedom {
  position: relative;
  max-width: 760px; margin: 56px auto 0; text-align: center;
  font-size: 1.22rem; line-height: 1.6; color: var(--navy-ink);
}
.freedom strong { color: var(--cyan); }

@media (max-width: 980px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .grid { grid-template-columns: 1fr; } }
</style>
