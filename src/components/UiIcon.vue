<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Number],
    default: 24,
  },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <template v-if="name === 'home'">
      <path d="m4 10 8-6 8 6" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-5h4v5" />
    </template>
    <template v-else-if="name === 'workshops'">
      <path d="M12 3.5 14 8l4.5.5-3.4 3 1 4.5-4.1-2.4-4.1 2.4 1-4.5-3.4-3L10 8l2-4.5Z" />
      <path d="M12 17v3.5M9.5 20.5h5" />
    </template>
    <template v-else-if="name === 'accompagnement'">
      <circle cx="12" cy="7.5" r="3" />
      <path d="M5.5 20c.5-3.5 2.7-5.5 6.5-5.5s6 2 6.5 5.5" />
      <path d="M4 12h2M18 12h2M12 3V1" />
    </template>
    <template v-else-if="name === 'contact'">
      <path d="M4 5.5h16v11H8l-4 3v-14Z" />
      <path d="m7 9 5 3.5L17 9" />
    </template>
    <template v-else-if="name === 'reserve'">
      <rect x="4" y="5.5" width="16" height="15" rx="2" />
      <path d="M8 3.5v4M16 3.5v4M4 10h16" />
      <path d="m12 13 .8 1.7 1.9.2-1.4 1.3.4 1.8-1.7-.9-1.7.9.4-1.8-1.4-1.3 1.9-.2.8-1.7Z" />
    </template>
    <template v-else-if="name === 'gift'">
      <path d="M4 10h16v10H4zM3 7h18v3H3z" />
      <path d="M12 7v13M12 7H8.5a2 2 0 1 1 2-2c0 1.1 1.5 2 1.5 2ZM12 7h3.5a2 2 0 1 0-2-2c0 1.1-1.5 2-1.5 2Z" />
    </template>
    <template v-else-if="name === 'outdoor'">
      <circle cx="17" cy="7" r="2.5" />
      <path d="M3 19c2.5-4 5-4 7.5 0 2.5-4 5-4 7.5 0 1-.8 2-1.2 3-1.2" />
      <path d="M4 7.5h5M6.5 5v5" />
    </template>
    <template v-else-if="name === 'arrow-right'">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </template>
    <template v-else-if="name === 'question'">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.8 9.5a2.3 2.3 0 1 1 3.6 1.9c-.9.6-1.4 1-1.4 2.1M12 16.5h.01" />
    </template>
    <template v-else-if="name === 'check'">
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.3 2.3 4.7-4.7" />
    </template>
    <template v-else-if="name === 'instagram'">
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17.5 6.5h.01" />
    </template>
  </svg>
</template>
