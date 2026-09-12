<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import ScreenshotPair from './ScreenshotPair.vue'

const props = defineProps({
  pairs: { type: Array, required: true },
})

const track = ref(null)
const index = ref(0)
let ticking = false

// The track is a real overflow-x scroller, so touch swipe, trackpad and
// shift+wheel all work for free -- the arrows/dots only drive scrollTo, they
// are not a separate state machine. This keeps index honest after a swipe,
// which is the one path that never goes through go().
function syncIndex() {
  const t = track.value
  if (!t || !t.clientWidth) return
  index.value = Math.round(t.scrollLeft / t.clientWidth)
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    syncIndex()
    ticking = false
  })
}

function go(i) {
  const t = track.value
  if (!t) return
  const clamped = Math.max(0, Math.min(i, props.pairs.length - 1))
  // Move the indicator now rather than waiting for the scroll to settle: a
  // click should light the dot immediately, and a smooth scroll that gets
  // interrupted must not leave the arrows/dots describing the wrong slide.
  index.value = clamped
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  t.scrollTo({ left: clamped * t.clientWidth, behavior: reduce ? 'auto' : 'smooth' })
}

function onKey(e) {
  if (e.key === 'ArrowLeft') { e.preventDefault(); go(index.value - 1) }
  else if (e.key === 'ArrowRight') { e.preventDefault(); go(index.value + 1) }
}

// A resize changes clientWidth, which would otherwise leave the track parked
// between two slides.
function onResize() {
  nextTick(() => go(index.value))
}

onMounted(() => window.addEventListener('resize', onResize))
onUnmounted(() => window.removeEventListener('resize', onResize))
</script>

<template>
  <div class="carousel">
    <div
      ref="track"
      class="track"
      tabindex="0"
      role="group"
      aria-roledescription="carousel"
      aria-label="Product screenshots"
      @scroll="onScroll"
      @keydown="onKey"
    >
      <div
        v-for="(pair, i) in pairs"
        :key="pair.desktop"
        class="slide"
        role="group"
        aria-roledescription="slide"
        :aria-label="`${i + 1} of ${pairs.length}`"
      >
        <ScreenshotPair :desktop="pair.desktop" :phone="pair.phone" />
      </div>
    </div>

    <div v-if="pairs.length > 1" class="controls">
      <button
        class="arrow"
        type="button"
        aria-label="Previous screenshot"
        :disabled="index === 0"
        @click="go(index - 1)"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </button>

      <div class="dots">
        <button
          v-for="(pair, i) in pairs"
          :key="pair.desktop"
          class="dot"
          type="button"
          :class="{ active: i === index }"
          :aria-label="`Go to screenshot ${i + 1}`"
          :aria-current="i === index"
          @click="go(i)"
        ></button>
      </div>

      <button
        class="arrow"
        type="button"
        aria-label="Next screenshot"
        :disabled="index === pairs.length - 1"
        @click="go(index + 1)"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6" /></svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: grid;
  gap: 18px;
  min-width: 0;
}

.track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  border-radius: var(--radius-sm);
}

.track::-webkit-scrollbar { display: none; }

.track:focus-visible {
  outline: 2px solid var(--accent-bright);
  outline-offset: 6px;
}

.slide {
  scroll-snap-align: center;
  min-width: 0;
  /* Grid, not flex: a flex item sizes itself from its content, and the pair
     inside is built from percentage/fr widths, so it collapsed to ~70px on
     narrow screens. A grid item stretches to the column instead.
     align-content: end bottom-aligns the shorter slide (a call window is
     squarer than a chat window) so captions stay on one line as you swipe. */
  display: grid;
  align-content: end;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.arrow {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink);
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, opacity 0.2s ease;
}

.arrow svg { width: 17px; height: 17px; }

.arrow:hover:not(:disabled) {
  border-color: color-mix(in srgb, var(--accent) 55%, var(--line));
  background: var(--bg-elevated);
}

.arrow:disabled {
  opacity: 0.35;
  cursor: default;
}

.dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dot {
  width: 7px;
  height: 7px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--line);
  cursor: pointer;
  transition: background 0.2s ease, width 0.2s ease;
}

.dot.active {
  width: 20px;
  border-radius: 4px;
  background: var(--accent-bright);
}

@media (prefers-reduced-motion: reduce) {
  .dot { transition: none; }
}
</style>
