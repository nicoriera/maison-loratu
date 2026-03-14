<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="py-16 px-4">
    <div class="container mx-auto max-w-4xl">
      <h2
        v-if="title"
        class="text-3xl md:text-4xl font-serif text-terracotta-500 text-center mb-4"
      >
        {{ title }}
      </h2>
      <p
        v-if="subtitle"
        class="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
      >
        {{ subtitle }}
      </p>
      <div class="prose prose-lg max-w-none">
        <slot />
      </div>
    </div>
  </section>
</template>
