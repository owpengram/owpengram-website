<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { GIFT_SHOWCASE } from '../data.js'

// The real Grind Pack animations, played live rather than as screenshots.
// Each one only runs while the grid is on screen; with reduced motion they
// hold a single frame instead.
const grid = ref(null)
const slots = ref([])
const anims = []
let observer = null

const reduced =
  typeof matchMedia !== 'undefined' &&
  matchMedia('(prefers-reduced-motion: reduce)').matches

function stars(n) {
  return n.toLocaleString('en-US')
}

async function load() {
  // The player is most of the page's script weight, so it is its own chunk,
  // fetched only once the grid comes near the screen.
  const { default: lottie } = await import('lottie-web/build/player/lottie_light')
  await Promise.all(
    GIFT_SHOWCASE.map(async (gift, i) => {
      const el = slots.value[i]
      if (!el) return
      const data = await fetch(`/gifts/${gift.anim}.json`).then((r) => r.json())
      const anim = lottie.loadAnimation({
        container: el,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        animationData: data,
        rendererSettings: { preserveAspectRatio: 'xMidYMid meet', progressiveLoad: true },
      })
      anims[i] = anim
      if (reduced) anim.goToAndStop(Math.floor(anim.totalFrames / 2), true)
    }),
  )
}

onMounted(() => {
  // Nothing is fetched until the grid is close to the viewport.
  let loaded = false
  observer = new IntersectionObserver(
    async ([entry]) => {
      if (entry.isIntersecting && !loaded) {
        loaded = true
        await load()
      }
      if (reduced) return
      anims.forEach((a) => a && (entry.isIntersecting ? a.play() : a.pause()))
    },
    { rootMargin: '200px 0px' },
  )
  if (grid.value) observer.observe(grid.value)
})

onUnmounted(() => {
  observer?.disconnect()
  anims.forEach((a) => a?.destroy())
})
</script>

<template>
  <div ref="grid" class="gifts" role="list" aria-label="Gifts from the Grind Pack">
    <article
      v-for="(gift, i) in GIFT_SHOWCASE"
      :key="gift.anim"
      class="gift"
      :class="{ unique: gift.backdrop }"
      role="listitem"
      :style="
        gift.backdrop
          ? {
              '--center': gift.backdrop.center,
              '--edge': gift.backdrop.edge,
              '--text': gift.backdrop.text,
            }
          : null
      "
    >
      <div :ref="(el) => (slots[i] = el)" class="anim" aria-hidden="true"></div>
      <p class="title">{{ gift.title }}</p>
      <p v-if="gift.backdrop" class="meta">{{ gift.model }} · #{{ gift.number }}</p>
      <p v-else class="meta price">★ {{ stars(gift.stars) }}</p>
    </article>
  </div>
</template>

<style scoped>
.gifts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  min-width: 0;
}

.gift {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 8px 14px;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background: var(--surface);
  text-align: center;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.gift:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--accent) 45%, var(--line));
}

/* A collectible sits on its backdrop, the same centre-to-edge radial the
   clients draw behind an upgraded gift. */
.gift.unique {
  border-color: transparent;
  background: radial-gradient(circle at 50% 38%, var(--center), var(--edge) 78%);
}

.anim {
  width: 100%;
  max-width: 112px;
  aspect-ratio: 1;
}

.title {
  margin: 6px 0 2px;
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.25;
}

.meta {
  margin: 0;
  font-size: 0.8rem;
  color: var(--muted);
}

.price {
  font-weight: 700;
  color: #f5b301;
}

.unique .title { color: var(--text); }

.unique .meta {
  color: var(--text);
  opacity: 0.8;
}

@media (max-width: 520px) {
  .gifts { gap: 10px; }
  .gift { padding: 10px 6px 12px; }
  .title { font-size: 0.8rem; }
  .meta { font-size: 0.72rem; }
}
</style>
