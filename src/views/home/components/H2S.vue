<template>
  <div class="sec">
    <div class="content-wrapper">
      <div class="content-left">
        <el-carousel :interval="5000" arrow="never" indicator-position="outside" height="100%">
          <el-carousel-item v-for="(item, index) in imgs" :key="index">
            <img :src="item" class="carousel-img" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="content-right">
        <div class="course-card">
          <h1 class="course-title">H2S Safety Awareness Training</h1>
          <div class="tags">
            <el-tag class="client-tag">Western Atlas International, Inc.</el-tag>
            <el-tag class="date-tag">2025/02/02 - 2025/02/02</el-tag>
          </div>
          <p class="course-desc">
            An H2S safety awareness training outline typically covers the properties of hydrogen
            sulfide (H2S), its dangers, and how to respond to potential exposure. Key topics include
            understanding H2S properties, health effects, detection methods, and emergency
            procedures, with a focus on prevention and personal protective equipment (PPE).
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const imgs = ref<string[]>([
  '/images/4. H2S Safety Awareness Training, Western Atlas International, Inc., Feb 2025/20250201.GIF',
  '/images/4. H2S Safety Awareness Training, Western Atlas International, Inc., Feb 2025/20250202.jpg',
  '/images/4. H2S Safety Awareness Training, Western Atlas International, Inc., Feb 2025/20250203.jpg',
])
</script>

<style scoped lang="scss">
.sec {
  height: 700px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0d1525 0%, #1a2744 100%);

  .content-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .content-left {
    flex: 1;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 35px 90px rgba(0, 0, 0, 0.6);

    :deep(.el-carousel) {
      height: 100%;
    }

    :deep(.el-carousel__container) {
      height: 100%;
    }

    .carousel-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  .content-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 100px;
    background: linear-gradient(145deg, rgba(20, 50, 110, 0.95), rgba(15, 40, 90, 0.98));
    box-sizing: border-box;
  }

  .course-card {
    background: transparent;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    color: #e8ecf4;
    width: 100%;
    max-width: 680px;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .course-title {
      font-size: 44px;
      font-weight: 700;
      color: #f7c948;
      margin: 0;
      line-height: 1.2;
    }

    .tags {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;

      .client-tag {
        background-color: #00897b !important;
        color: #fff !important;
        border: none !important;
        font-weight: 600;
        font-size: 13px;
        border-radius: 20px;
        padding: 6px 16px;
      }

      .date-tag {
        background-color: #ffeb3b !important;
        color: #4a6a34 !important;
        border: none !important;
        font-weight: 600;
        font-size: 13px;
        border-radius: 20px;
        padding: 6px 16px;
      }
    }

    .course-desc {
      font-size: 17px;
      line-height: 1.7;
      color: rgba(232, 236, 244, 0.9);
      margin: 0;
    }
  }
}
</style>
