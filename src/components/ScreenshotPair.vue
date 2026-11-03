<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ScreenshotFrame from './ScreenshotFrame.vue'
import { SCREENSHOTS } from '../data.js'

defineProps({
  desktop: { type: String, required: true },
  // Optional: a slide can be one wide shot (the web client, a call window)
  // with no phone beside it.
  phone: { type: String, default: '' },
})

const el = ref(null)
const tilt = ref({ rx: 0, ry: 0 })
const maxTilt = 6

function onMove(e) {
  if (!el.value) return
  const rect = el.value.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height
  tilt.value = { rx: (y - 0.5) * -maxTilt, ry: (x - 0.5) * maxTilt }
}

function onLeave() {
  tilt.value = { rx: 0, ry: 0 }
}

onMounted(() => {
  const p = el.value
  if (p) {
    p.addEventListener('mousemove', onMove)
    p.addEventListener('mouseleave', onLeave)
  }
})

onUnmounted(() => {
  const p = el.value
  if (p) {
    p.removeEventListener('mousemove', onMove)
    p.removeEventListener('mouseleave', onLeave)
  }
})
</script>

<template>
  <div
    ref="el"
    class="pair"
    :style="{
      perspective: '800px',
    }"
  >
    <div
      class="pair-inner"
      :class="{ single: !phone }"
      :style="{
        transform: 'rotateX(' + tilt.rx + 'deg) rotateY(' + tilt.ry + 'deg)',
      }"
    >
      <ScreenshotFrame v-bind="SCREENSHOTS[desktop]" />
      <ScreenshotFrame v-if="phone" v-bind="SCREENSHOTS[phone]" />
    </div>
  </div>
</template>

<style scoped>
.pair {
  display: grid;
  perspective: 800px;
}

.pair-inner {
  display: grid;
  grid-template-columns: 1.45fr 0.5fr;
  gap: 16px;
  align-items: end;
  transition: transform 0.15s ease-out;
  transform-style: preserve-3d;
  will-change: transform;
}

.pair-inner.single {
  grid-template-columns: 1fr;
}

@media (max-width: 720px) {
  .pair-inner {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin: 0 auto;
  }
}
</style>
