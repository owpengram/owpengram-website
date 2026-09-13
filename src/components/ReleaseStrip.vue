<script setup>
import { computed } from 'vue'
import { useGithubRelease, relativeDay, formatDay } from '../composables/useGithubRelease.js'
import IconSvg from './IconSvg.vue'

const { tag, releasedAt, lastCommitAt, releasesUrl } = useGithubRelease()

const released = computed(() => formatDay(releasedAt.value))
const commit = computed(() => relativeDay(lastCommitAt.value))
</script>

<template>
  <!-- Three things a first-time visitor actually wants to know about a project
       they have never heard of: is it alive, when did it last ship, and what
       may they do with it. Deliberately not a star count -- vanity numbers on
       a young project say the opposite of what they are meant to. -->
  <section class="strip" aria-label="Project status">
    <div class="container inner">
      <a class="fact fact--link" :href="releasesUrl" target="_blank" rel="noopener">
        <IconSvg name="download" />
        <span>
          <strong>Latest release {{ tag }}</strong>
          <small v-if="released">{{ released }}</small>
        </span>
      </a>

      <div class="fact" v-if="commit">
        <IconSvg name="spark" />
        <span>
          <strong>Actively developed</strong>
          <small>last commit {{ commit }}</small>
        </span>
      </div>

      <div class="fact">
        <IconSvg name="code" />
        <span>
          <strong>Apache-2.0 &amp; GPL</strong>
          <small>server and clients, all published</small>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.strip {
  border-block: 1px solid var(--line);
  /* One step lighter than the page, one step darker than the section below:
     the strip reads as the hero's footing rather than a section of its own. */
  background: var(--bg-elevated);
}

.inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 28px;
  padding-block: 18px;
}

.fact {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--body);
  min-width: 0;
}

.fact :deep(svg) {
  width: 20px;
  height: 20px;
  flex: none;
  color: var(--accent-icon);
}

.fact strong {
  display: block;
  color: var(--ink);
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.3;
}

.fact small {
  display: block;
  color: var(--muted);
  font-size: 0.8rem;
  line-height: 1.4;
}

.fact--link {
  transition: color 0.15s ease;
}

.fact--link:hover strong {
  color: var(--accent);
}

/* Separators between the cells, but never one hanging off the last cell or
   at the start of a wrapped row. */
.fact + .fact {
  border-left: 1px solid var(--line);
  padding-left: 28px;
}

@media (max-width: 760px) {
  .inner { grid-template-columns: 1fr; gap: 0; }
  .fact + .fact {
    border-left: 0;
    padding-left: 0;
    border-top: 1px solid var(--line);
    margin-top: 14px;
    padding-top: 14px;
  }
}
</style>
