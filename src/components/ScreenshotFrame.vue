<script setup>
// Placeholder app-window frame. Pass `src` later to show a real screenshot.
defineProps({
  src: { type: String, default: '' },
  label: { type: String, default: 'Screenshot' },
  variant: { type: String, default: 'desktop' }, // 'desktop' | 'phone'
})
</script>

<template>
  <div class="frame" :class="`frame--${variant}`">
    <div class="bar" v-if="variant === 'desktop'">
      <span></span><span></span><span></span>
    </div>
    <div class="notch" v-else></div>

    <div class="screen">
      <img v-if="src" :src="src" :alt="label" />
      <div v-else class="ph">
        <div class="ph-logo">&gt;</div>
        <span>{{ label }}</span>
        <small>Coming soon</small>
      </div>
    </div>
  </div>
</template>

<style scoped>
.frame {
  background: #0c1b2e;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 0;
  overflow: hidden;
  box-shadow: var(--shadow);
}
.frame--phone {
  border-radius: 30px;
  max-width: 290px;
  margin: 0 auto;
  padding: 8px;
  background: #0a1626;
}
.bar {
  display: flex;
  gap: 7px;
  padding: 12px 14px;
  background: #0a1626;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}
.bar span { width: 11px; height: 11px; border-radius: 50%; background: rgba(255, 255, 255, 0.22); }
.bar span:first-child { background: #ff5f57; }
.bar span:nth-child(2) { background: #febc2e; }
.bar span:nth-child(3) { background: #28c840; }
.notch {
  width: 46%;
  height: 22px;
  margin: 2px auto 8px;
  background: #0a1626;
  border-radius: 0 0 14px 14px;
}
.screen {
  aspect-ratio: 16 / 10;
  background: radial-gradient(120% 120% at 30% 0%, #11233a, #0a1626);
  display: grid;
  place-items: center;
}
.frame--phone .screen { aspect-ratio: 9 / 19; border-radius: 22px; }
.screen img { width: 100%; height: 100%; object-fit: cover; }
.ph { text-align: center; color: var(--navy-body); display: grid; gap: 6px; justify-items: center; }
.ph-logo {
  width: 56px; height: 56px;
  display: grid; place-items: center;
  font-weight: 900; font-size: 1.6rem; color: #fff;
  background: var(--grad);
  border-radius: 16px;
  box-shadow: var(--shadow-cyan);
  margin-bottom: 6px;
}
.ph span { font-weight: 700; color: var(--navy-ink); letter-spacing: 0.01em; }
.ph small { font-size: 0.78rem; opacity: 0.7; }
</style>
