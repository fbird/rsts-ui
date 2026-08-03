<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import Layout from '@/components/layouts/LayoutIndex.vue'
import LayoutMobile from '@/components/layouts/LayoutMobileIndex.vue'

const mobileMedia = window.matchMedia('(max-width: 767px)')
const isMobileViewport = ref(mobileMedia.matches)
const isMobile = computed(() => isMobileViewport.value)

const updateViewport = (event: MediaQueryListEvent) => {
  isMobileViewport.value = event.matches
}

mobileMedia.addEventListener('change', updateViewport)
onBeforeUnmount(() => mobileMedia.removeEventListener('change', updateViewport))
</script>

<template>
  <el-config-provider :locale="zhCn">
    <Layout v-if="!isMobile" />
    <LayoutMobile v-else />
  </el-config-provider>
</template>

<style scoped></style>
