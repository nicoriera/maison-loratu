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
      'inline-block px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95',
      variant === 'primary'
        ? 'bg-[#C16A46] text-white hover:bg-[#B85A36] shadow-md hover:shadow-lg'
        : 'bg-white text-[#C16A46] border-2 border-[#C16A46] hover:bg-cream-100',
    ]"
  >
    <slot />
  </router-link>
</template>
