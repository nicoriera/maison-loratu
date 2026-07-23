<script setup>
import CTAButton from './CTAButton.vue'

const props = defineProps({
  offering: { type: Object, required: true },
  variant: {
    type: String,
    default: 'compact',
    validator: (value) => ['compact', 'detailed'].includes(value),
  },
  ctaLabel: { type: String, default: '' },
})

const isDetailed = props.variant === 'detailed'
</script>

<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1">
    <img :src="offering.image" :alt="offering.title" class="block aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
    <div class="flex flex-1 flex-col p-7">
      <p v-if="isDetailed" class="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta-600">{{ offering.audience }}</p>
      <h2 v-if="isDetailed" class="mt-3 text-2xl text-terracotta-800">{{ offering.title }}</h2>
      <h3 v-else class="text-2xl text-terracotta-800">{{ offering.title }}</h3>
      <p v-if="!isDetailed" class="mt-3 font-semibold text-terracotta-600">{{ offering.detail }}</p>
      <p class="mt-3 leading-relaxed text-gray-700">{{ isDetailed ? offering.description : offering.text }}</p>
      <ul v-if="isDetailed" class="mt-5 space-y-2 text-sm text-gray-600">
        <li v-for="bullet in offering.bullets" :key="bullet" class="flex items-start gap-2">
          <span class="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-terracotta-300" aria-hidden="true" />
          <span>{{ bullet }}</span>
        </li>
      </ul>
      <div class="mt-auto pt-7">
        <CTAButton :to="offering.to">{{ ctaLabel || offering.cta || offering.action }}</CTAButton>
      </div>
    </div>
  </article>
</template>
