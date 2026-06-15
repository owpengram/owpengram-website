<script setup>
import IconSvg from './IconSvg.vue'

const servers = [
  { tag: 'Official', name: 'Telegram network', note: 'Use your existing account', dot: '#1b84e2' },
  { tag: 'Yours', name: 'Your OwpenGram server', note: 'Self-hosted, full control', dot: '#20cbe8', active: true },
  { tag: 'Community', name: 'Alternative node', note: 'Any compatible server', dot: '#7c5cff' },
]
</script>

<template>
  <section class="section ms" id="multiserver">
    <div class="container ms-inner">
      <div class="copy" v-reveal>
        <span class="eyebrow">One app, many networks</span>
        <h2>Multi-server, by design</h2>
        <p>
          OwpenGram isn’t locked to a single network. Each account can live on a
          different server — connect to the official network, run your own private
          server, or join an alternative community node. Switch between them in
          seconds, all from the same app.
        </p>
        <ul class="points">
          <li><IconSvg name="check" /> Mix official and self-hosted accounts side by side</li>
          <li><IconSvg name="check" /> Per-account servers, fully isolated</li>
          <li><IconSvg name="check" /> Move to your own infrastructure whenever you want</li>
        </ul>
      </div>

      <div class="picker" v-reveal="120">
        <div class="picker-head">
          <span class="avatar">&gt;</span>
          <div>
            <strong>Choose a server</strong>
            <small>Per account</small>
          </div>
        </div>
        <button
          v-for="s in servers"
          :key="s.name"
          class="srow"
          :class="{ active: s.active }"
          type="button"
        >
          <span class="dot" :style="{ background: s.dot }"></span>
          <span class="meta">
            <span class="name">{{ s.name }}</span>
            <span class="note">{{ s.note }}</span>
          </span>
          <span class="badge">{{ s.tag }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ms { background: var(--bg-soft); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.ms-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
.points { list-style: none; padding: 0; margin: 22px 0 0; display: grid; gap: 12px; }
.points li { display: flex; align-items: center; gap: 10px; font-weight: 600; color: var(--body); }
.points :deep(svg) { width: 19px; height: 19px; color: var(--cyan); flex: none; }

.picker {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 16px;
  box-shadow: var(--shadow);
  max-width: 440px;
  margin-left: auto;
  width: 100%;
}
.picker-head { display: flex; align-items: center; gap: 12px; padding: 8px 8px 16px; }
.avatar {
  width: 42px; height: 42px; border-radius: 12px;
  display: grid; place-items: center; color: #fff; font-weight: 900;
  background: var(--grad); box-shadow: var(--shadow-cyan);
}
.picker-head strong { display: block; color: var(--ink); }
.picker-head small { color: var(--muted); }

.srow {
  width: 100%;
  display: flex; align-items: center; gap: 14px;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: #fff;
  margin-top: 10px;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
}
.srow:hover { transform: translateY(-2px); border-color: rgba(27, 132, 226, 0.4); }
.srow.active { border-color: var(--cyan); background: var(--grad-soft); }
.dot { width: 12px; height: 12px; border-radius: 50%; flex: none; }
.meta { flex: 1; display: flex; flex-direction: column; }
.name { font-weight: 700; color: var(--ink); }
.note { font-size: 0.84rem; color: var(--muted); }
.badge {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
  color: var(--blue); background: var(--grad-soft);
  padding: 5px 10px; border-radius: 999px;
}

@media (max-width: 900px) {
  .ms-inner { grid-template-columns: 1fr; gap: 40px; }
  .picker { margin: 0 auto; }
}
</style>
