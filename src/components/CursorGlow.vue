<script setup>
import { useMousePosition } from '../composables/useMousePosition.js'
const mouse = useMousePosition()
</script>

<template>
  <div
    class="cursor-glow"
    :style="{
      transform: 'translate(' + (mouse.rawX - 150) + 'px, ' + (mouse.rawY - 150) + 'px)',
    }"
    aria-hidden="true"
  />
</template>

<style scoped>
.cursor-glow {
  position: fixed;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--accent-bright) 10%, transparent);
  filter: blur(60px);
  pointer-events: none;
  z-index: 998;
  transform: translate(-50%, -50%);
  will-change: transform;
}
</style>
