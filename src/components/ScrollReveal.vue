<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  /** Balise HTML racine */
  tag: {
    type: String,
    default: 'div',
  },
  /** up | down | left | right | fade | scale */
  direction: {
    type: String,
    default: 'up',
  },
  /** Délai avant l’animation (ms) */
  delay: {
    type: Number,
    default: 0,
  },
  threshold: {
    type: Number,
    default: 0.12,
  },
  rootMargin: {
    type: String,
    default: '0px 0px -8% 0px',
  },
  once: {
    type: Boolean,
    default: true,
  },
  /**
   * image : pas d’opacité sur le bloc (évite le flash au scroll avec lazy-load)
   */
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'image'].includes(v),
  },
})

const root = ref(null)
const isVisible = ref(false)
let observer

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const visibleStyle = computed(() => {
  if (!isVisible.value || reducedMotion()) return {}
  if (props.variant === 'image' && props.delay > 0) {
    return { '--sr-img-delay': `${props.delay}ms` }
  }
  if (props.delay <= 0) return {}
  return { animationDelay: `${props.delay}ms` }
})

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
  const margin =
    props.variant === 'image' ? '0px 0px 180px 0px' : props.rootMargin
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        isVisible.value = true
        if (props.once) observer.disconnect()
      }
    },
    { threshold: props.variant === 'image' ? 0.05 : props.threshold, rootMargin: margin }
  )
  observer.observe(el)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <component
    :is="tag"
    ref="root"
    class="scroll-reveal"
    :class="[
      variant === 'image' ? 'scroll-reveal--image' : `scroll-reveal--${direction}`,
      isVisible ? 'scroll-reveal--visible' : 'scroll-reveal--hidden',
    ]"
    :style="visibleStyle"
  >
    <slot />
  </component>
</template>
