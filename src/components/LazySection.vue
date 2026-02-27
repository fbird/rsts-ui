<template>
  <div ref="el" :style="placeholderStyle">
    <slot v-if="visible" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const el = ref<HTMLElement | null>(null)
const visible = ref(false)

const placeholderStyle = computed(() =>
  visible.value
    ? {}
    : {
        minHeight: '400px' // ⚠️ 关键：必须有高度
      }
)

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    {
      rootMargin: '300px', // 提前加载（非常重要）
      threshold: 0
    }
  )
  el.value && observer.observe(el.value)
})

onUnmounted(() => observer?.disconnect())
</script>