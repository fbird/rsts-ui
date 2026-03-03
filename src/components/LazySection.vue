<template>
  <div ref="el" :style="placeholderStyle">
    <template v-if="visible">
      <slot />
    </template>
    <template v-else>
      <div class="loading-placeholder">
        <!-- 使用 Skeleton 或 Loading 动画 -->
        <el-skeleton :loading="true" animated />
      </div>
    </template>
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
      rootMargin: '600px 0px', // 提前加载（非常重要）
      threshold: 0
    }
  )
  el.value && observer.observe(el.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.loading-placeholder {
  width: 100%;
  height: 400px;
  background: #f0f0f0;
  /* 使用一个加载动画样式，或者你也可以使用 skeleton 组件 */
}
</style>