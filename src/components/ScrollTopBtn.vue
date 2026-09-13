<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 400
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <button
    class="scroll-top"
    :class="{ visible }"
    @click="scrollTop"
    aria-label="Scroll to top"
  >
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
  </button>
</template>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 900;
  opacity: 0;
  transform: translateY(16px);
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease, background 0.15s ease;
}

/* The mobile nav sheet owns the whole screen while it is open. */
body.nav-open .scroll-top {
  opacity: 0;
  pointer-events: none;
  transform: translateY(16px);
}

.scroll-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.scroll-top:hover {
  background: var(--accent);
  color: #fff;
  border-color: var(--accent);
}

.scroll-top svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 480px) {
  .scroll-top {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}
</style>
