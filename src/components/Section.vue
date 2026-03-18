<script setup>
import { ref, onMounted } from 'vue'

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

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  if (!sectionRef.value || typeof IntersectionObserver === 'undefined') {
    isVisible.value = true
    return
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -20px 0px' }
  )
  observer.observe(sectionRef.value)
})
</script>

<template>
  <section
    ref="sectionRef"
    class="py-16 px-4"
    :class="[
      isVisible ? 'section-reveal' : 'section-reveal-init',
    ]"
  >
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
