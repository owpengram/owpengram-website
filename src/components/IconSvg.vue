<script setup>
defineProps({ name: { type: String, required: true } })
</script>

<template>
  <!-- GitHub mark (filled) -->
  <svg
    v-if="name === 'github'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M12 .5C5.73.5.5 5.73.5 12.21c0 5.18 3.36 9.58 8.01 11.13.59.11.8-.26.8-.57 0-.28-.01-1.02-.02-2-3.26.72-3.95-1.58-3.95-1.58-.53-1.37-1.3-1.73-1.3-1.73-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.23 1.8 1.23 1.05 1.82 2.76 1.3 3.43.99.11-.77.41-1.3.74-1.6-2.6-.3-5.34-1.32-5.34-5.86 0-1.29.46-2.35 1.22-3.18-.12-.3-.53-1.51.12-3.15 0 0 1-.32 3.3 1.21a11.3 11.3 0 0 1 6 0c2.28-1.53 3.28-1.21 3.28-1.21.65 1.64.24 2.85.12 3.15.76.83 1.22 1.89 1.22 3.18 0 4.55-2.75 5.55-5.36 5.85.42.37.8 1.1.8 2.22 0 1.6-.02 2.9-.02 3.29 0 .31.21.69.81.57 4.65-1.55 8-5.95 8-11.13C23.5 5.73 18.27.5 12 .5z"
    />
  </svg>

  <!-- Stroke icon set -->
  <svg
    v-else
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'shield'">
      <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
      <path d="M8.8 12.2l2.1 2.1 4.3-4.3" />
    </template>
    <template v-else-if="name === 'spark'">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
      <path d="M18.5 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
    </template>
    <template v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.5 4 5.7 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.7-4-9s1.4-6.5 4-9z" />
    </template>
    <template v-else-if="name === 'unlock'">
      <rect x="4.5" y="11" width="15" height="9" rx="2.2" />
      <path d="M8 11V8a4 4 0 0 1 7.5-1.9" />
      <path d="M12 15v2" />
    </template>
    <template v-else-if="name === 'server'">
      <rect x="3.5" y="4" width="17" height="6" rx="2" />
      <rect x="3.5" y="14" width="17" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </template>
    <template v-else-if="name === 'download'">
      <path d="M12 3v12" />
      <path d="M7.5 10.5L12 15l4.5-4.5" />
      <path d="M5 20h14" />
    </template>
    <template v-else-if="name === 'check'">
      <path d="M5 12.5l4.2 4.2L19 7" />
    </template>
    <template v-else-if="name === 'arrow'">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </template>
    <template v-else-if="name === 'phone'">
      <rect x="7" y="3" width="10" height="18" rx="2.4" />
      <path d="M11 18h2" />
    </template>
    <template v-else-if="name === 'desktop'">
      <rect x="3.5" y="4.5" width="17" height="11" rx="2" />
      <path d="M9 20h6M12 15.5V20" />
    </template>
  </svg>
</template>

<style scoped>
svg { width: 100%; height: 100%; display: block; }
</style>
