<script setup>
import ScreenshotFrame from './ScreenshotFrame.vue'
import { SCREENSHOTS } from '../data.js'

defineProps({
  desktop: { type: String, required: true },
  phone: { type: String, required: true },
})
</script>

<template>
  <div class="pair">
    <ScreenshotFrame v-bind="SCREENSHOTS[desktop]" />
    <ScreenshotFrame v-bind="SCREENSHOTS[phone]" />
  </div>
</template>

<style scoped>
.pair {
  display: grid;
  grid-template-columns: 1.15fr 0.55fr;
  gap: 16px;
  align-items: end;
}

@media (max-width: 720px) {
  .pair {
    grid-template-columns: 1fr;
    max-width: 420px;
    margin: 0 auto;
  }
}
</style>
