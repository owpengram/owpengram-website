<script setup>
import { computed } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: 'OwpenGram screenshot' },
  caption: { type: String, default: '' },
  variant: { type: String, default: 'desktop' },
  aspect: { type: String, default: '' },
})

const screenStyle = computed(() => (props.aspect ? { aspectRatio: props.aspect } : {}))
</script>

<template>
  <figure class="shot" :class="`shot--${variant}`">
    <div class="frame">
      <div class="screen" :style="screenStyle">
        <img
          v-if="src"
          :src="src"
          :alt="alt"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    <figcaption v-if="caption" class="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.shot {
  margin: 0;
  width: 100%;
}

.frame {
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--shot-border);
  background: var(--shot-bg);
  box-shadow: var(--shot-shadow);
}

.screen {
  line-height: 0;
  background: var(--shot-bg);
}

.screen img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  object-position: top center;
}

.shot--phone {
  max-width: 260px;
  margin: 0 auto;
}

.shot--phone .frame {
  border-radius: 20px;
}

.shot--wide .frame {
  border-radius: var(--radius);
}

.shot--card {
  max-width: 420px;
}

.shot--card .frame {
  border-radius: var(--radius);
}

.caption {
  margin-top: 10px;
  text-align: center;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
</style>
