<script setup>
defineProps({
  to: {
    type: String,
    default: '/questionnaire',
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value),
  },
})
</script>

<template>
  <router-link
    :to="to"
    :class="[
      'cta-button inline-block px-8 py-3 rounded-full font-semibold transform hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta-500 focus-visible:outline-offset-2',
      variant === 'primary'
        ? 'bg-[#C16A46] text-white hover:bg-[#B85A36] shadow-md hover:shadow-lg'
        : 'bg-white text-[#C16A46] border-2 border-[#C16A46] hover:bg-cream-100',
    ]"
  >
    <slot />
  </router-link>
</template>

<style scoped>
.cta-button {
  transition: transform var(--duration-ui) var(--ease-warm-out),
    box-shadow var(--duration-ui) var(--ease-warm-out),
    background-color var(--duration-ui) var(--ease-warm-out),
    border-color var(--duration-ui) var(--ease-warm-out);
}
@media (prefers-reduced-motion: reduce) {
  .cta-button {
    transition-duration: 0.01ms;
  }
}
</style>
