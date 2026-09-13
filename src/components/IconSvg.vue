<script setup>
defineProps({ name: { type: String, required: true } })
</script>

<template>
  <svg
    v-if="name === 'patreon'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M15.386.524C10.622.524 6.759 4.382 6.759 9.143c0 4.76 3.863 8.617 8.627 8.617 4.76 0 8.621-3.857 8.621-8.617C24.007 4.382 20.146.524 15.386.524M0 24h4.635V0H0"
    />
  </svg>

  <svg
    v-else-if="name === 'github'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M12 .5C5.73.5.5 5.73.5 12.21c0 5.18 3.36 9.58 8.01 11.13.59.11.8-.26.8-.57 0-.28-.01-1.02-.02-2-3.26.72-3.95-1.58-3.95-1.58-.53-1.37-1.3-1.73-1.3-1.73-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.23 1.8 1.23 1.05 1.82 2.76 1.3 3.43.99.11-.77.41-1.3.74-1.6-2.6-.3-5.34-1.32-5.34-5.86 0-1.29.46-2.35 1.22-3.18-.12-.3-.53-1.51.12-3.15 0 0 1-.32 3.3 1.21a11.3 11.3 0 0 1 6 0c2.28-1.53 3.28-1.21 3.28-1.21.65 1.64.24 2.85.12 3.15.76.83 1.22 1.89 1.22 3.18 0 4.55-2.75 5.55-5.36 5.85.42.37.8 1.1.8 2.22 0 1.6-.02 2.9-.02 3.29 0 .31.21.69.81.57 4.65-1.55 8-5.95 8-11.13C23.5 5.73 18.27.5 12 .5z"
    />
  </svg>

  <!-- Platform marks are filled: that is how they read as logos rather than
       as another line icon in the set. -->
  <svg
    v-else-if="name === 'windows'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M3 5.5l7.4-1.02v7.02H3zM11.5 4.33L21 3v8.5h-9.5zM3 12.6h7.4v6.92L3 18.5zM11.5 12.6H21V21l-9.5-1.3z" />
  </svg>

  <svg
    v-else-if="name === 'linux'"
    viewBox="0 0 24 24"
    fill="currentColor"
    fill-rule="evenodd"
    aria-hidden="true"
  >
    <!-- Tux, cut to what survives at 20px: silhouette, with the face patch and
         belly as negative space and the eyes and beak as islands inside it. -->
    <path
      d="M12 2.2c-2.4 0-4 1.8-4 4.2v1.4c0 .8-.3 1.5-.9 2.2-1.7 2-2.6 4-2.6 6 0 1.6.5 2.9 1.4 3.8-.5.7-.8 1.3-.8 1.9 0 .8.7 1.3 1.8 1.3 1 0 1.9-.3 2.5-.8.8.2 1.7.3 2.6.3s1.8-.1 2.6-.3c.6.5 1.5.8 2.5.8 1.1 0 1.8-.5 1.8-1.3 0-.6-.3-1.2-.8-1.9.9-.9 1.4-2.2 1.4-3.8 0-2-.9-4-2.6-6-.6-.7-.9-1.4-.9-2.2V6.4c0-2.4-1.6-4.2-4-4.2z
         M12 3.9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z
         M12 11.6a3.4 4.2 0 1 0 0 8.4 3.4 4.2 0 1 0 0-8.4z
         M10.75 5.35a.52.52 0 1 0 0 1.04.52.52 0 1 0 0-1.04z
         M13.25 5.35a.52.52 0 1 0 0 1.04.52.52 0 1 0 0-1.04z
         M12 7.15l.85.52-.85.5-.85-.5z"
    />
  </svg>

  <svg
    v-else-if="name === 'ubuntu'"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <!-- Circle of friends: a ring broken at three points, a dot in each break. -->
    <path
      d="M17.30 6.70A7.5 7.5 0 0 1 17.30 17.30M13.94 19.24A7.5 7.5 0 0 1 4.76 13.94M4.76 10.06A7.5 7.5 0 0 1 13.94 4.76"
      stroke="currentColor"
      stroke-width="1.9"
      stroke-linecap="round"
    />
    <circle cx="15.75" cy="5.50" r="2.1" fill="currentColor" />
    <circle cx="15.75" cy="18.50" r="2.1" fill="currentColor" />
    <circle cx="4.50" cy="12" r="2.1" fill="currentColor" />
  </svg>

  <svg
    v-else-if="name === 'android'"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M6.6 11.2a5.4 5.4 0 0 1 10.8 0v.35H6.6zM9.8 7.9a.72.72 0 1 0 0 1.44.72.72 0 0 0 0-1.44zm4.4 0a.72.72 0 1 0 0 1.44.72.72 0 0 0 0-1.44z"
    />
    <path
      d="M6.6 12.7h10.8v5.6a1.5 1.5 0 0 1-1.5 1.5H8.1a1.5 1.5 0 0 1-1.5-1.5z"
    />
    <rect x="3" y="12.7" width="2.5" height="6" rx="1.25" />
    <rect x="18.5" y="12.7" width="2.5" height="6" rx="1.25" />
    <rect x="8.6" y="19.4" width="2.5" height="4.2" rx="1.25" />
    <rect x="12.9" y="19.4" width="2.5" height="4.2" rx="1.25" />
    <path
      d="M8.5 3.6l1.35 2.1M15.5 3.6l-1.35 2.1"
      stroke="currentColor"
      stroke-width="1.3"
      stroke-linecap="round"
      fill="none"
    />
  </svg>

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
    <template v-else-if="name === 'mail'">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 7l9 6.5L21 7" />
    </template>
    <template v-else-if="name === 'telegram'">
      <path d="M21.5 3.5l-19 7.5 5.5 2.5 3 5 3-2 5.5 5z" />
      <path d="M11 14l8.5-8.5" />
    </template>
    <template v-else-if="name === 'chat'">
      <path d="M20 13.5a3 3 0 0 1-3 3H9l-4 3.5v-3.5H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3z" />
      <path d="M8.5 8h7M8.5 11.5h4.5" />
    </template>
    <template v-else-if="name === 'call'">
      <rect x="2.5" y="6" width="12.5" height="12" rx="2.6" />
      <path d="M15 11l6-3.5v9L15 13z" />
    </template>
    <template v-else-if="name === 'network'">
      <circle cx="12" cy="5" r="2.4" />
      <circle cx="5" cy="18.5" r="2.4" />
      <circle cx="19" cy="18.5" r="2.4" />
      <path d="M12 7.4v4.2M12 11.6L6.4 16.6M12 11.6l5.6 5" />
    </template>
    <template v-else-if="name === 'lock'">
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.2" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
      <path d="M12 14.5v2" />
    </template>
    <template v-else-if="name === 'key'">
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9" />
      <path d="M17.5 12v3M20.5 12v2" />
    </template>
    <template v-else-if="name === 'channel'">
      <path d="M4 10v4a1.6 1.6 0 0 0 1.6 1.6h2.2l6.2 4V4.4l-6.2 4H5.6A1.6 1.6 0 0 0 4 10z" />
      <path d="M17.8 9.2a4 4 0 0 1 0 5.6" />
    </template>
    <template v-else-if="name === 'compare'">
      <rect x="4" y="9.5" width="6" height="10.5" rx="1.3" />
      <rect x="14" y="4" width="6" height="16" rx="1.3" />
    </template>
    <template v-else-if="name === 'help'">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.7 9.5a2.4 2.4 0 0 1 4.7.8c0 1.6-2.4 1.9-2.4 3.3" />
      <path d="M12 17.1h.01" />
    </template>
    <template v-else-if="name === 'bug'">
      <rect x="8" y="8" width="8" height="11" rx="4" />
      <path d="M9.2 7.4L7.8 5.6M14.8 7.4l1.4-1.8" />
      <path d="M8 11.5H4.9M8 15.5H4.9M16 11.5h3.1M16 15.5h3.1" />
    </template>
    <template v-else-if="name === 'sliders'">
      <path d="M4 7.5h8M18.5 7.5H20" />
      <circle cx="15.2" cy="7.5" r="2.2" />
      <path d="M4 16.5h3.3M12.5 16.5H20" />
      <circle cx="9.8" cy="16.5" r="2.2" />
    </template>
    <template v-else-if="name === 'code'">
      <path d="M8.5 7.5L3.5 12l5 4.5" />
      <path d="M15.5 7.5L20.5 12l-5 4.5" />
      <path d="M13.5 4.5l-3 15" />
    </template>
  </svg>
</template>

<style scoped>
svg {
  width: 1em;
  height: 1em;
  display: block;
  flex: none;
}
</style>
