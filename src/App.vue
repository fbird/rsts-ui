<script setup lang="ts">
import Layout from '@/components/layouts/LayoutIndex.vue'
import LayoutMobile from '@/components/layouts/LayoutMobileIndex.vue'
import { useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints({
  mobile: 0,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
});

const isMobile = breakpoints.smaller('tablet');



</script>

<template>
  <Layout v-if="!isMobile" />
  <LayoutMobile v-else />
</template>

<style scoped></style>
