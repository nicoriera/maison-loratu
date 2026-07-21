<script setup>
import { computed } from 'vue'

const props = defineProps({
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

const isExternal = computed(() => props.to.startsWith('http://') || props.to.startsWith('https://'))

const variantClass = computed(() =>
  props.variant === 'primary'
    ? 'bg-terracotta-500 text-white shadow-soft hover:bg-terracotta-600 hover:shadow-soft-lg'
    : 'border-2 border-terracotta-300 bg-white text-terracotta-700 hover:border-terracotta-400 hover:bg-cream-100',
)

const buttonClasses = computed(() => [
  'cta-button inline-flex min-h-11 w-full items-center justify-center rounded-full px-8 py-3 text-center font-semibold leading-none transition sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:ring-offset-2 active:scale-95',
  variantClass.value,
])
</script>

<template>
  <component
    :is="isExternal ? 'a' : 'router-link'"
    :to="!isExternal ? to : undefined"
    :href="isExternal ? to : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="buttonClasses"
  >
    <slot />
  </component>
</template>

<style scoped>
.cta-button {
  transition:
    transform var(--duration-ui) var(--ease-warm-out),
    box-shadow var(--duration-ui) var(--ease-warm-out),
    background-color var(--duration-ui) var(--ease-warm-out),
    border-color var(--duration-ui) var(--ease-warm-out),
    color var(--duration-ui) var(--ease-warm-out);
}

@media (prefers-reduced-motion: reduce) {
  .cta-button {
    transition-duration: 0.01ms;
  }
}
</style>
