<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  threshold: {
    type: Number,
    default: 0.1,
  },
  rootMargin: {
    type: String,
    default: '0px 0px -6% 0px',
  },
})

const root = ref(null)
const isVisible = ref(false)
let observer

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

onMounted(() => {
  if (reducedMotion()) {
    isVisible.value = true
    return
  }
  const el = root.value
  if (!el || typeof IntersectionObserver === 'undefined') {
    isVisible.value = true
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: props.threshold, rootMargin: props.rootMargin }
  )
  observer.observe(el)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div
    ref="root"
    class="scroll-stagger"
    :class="{ 'scroll-stagger--visible': isVisible }"
  >
    <slot />
  </div>
</template>
