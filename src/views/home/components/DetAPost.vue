<script setup lang="ts">
import { ref } from 'vue'

const trainingImgs = ref<Array<any>>([
  {
    img: '/images/5. Drilling Equpiment, Techniques and Procedures On Site Training, TPIC, Apr 2025/20250401.jpg',
  },
  {
    img: '/images/5. Drilling Equpiment, Techniques and Procedures On Site Training, TPIC, Apr 2025/20250402.jpg',
  },
])
</script>

<template>
  <div class="sec">
    <div class="bg-carousel">
      <el-carousel :interval="5000" arrow="never" indicator-position="none" height="100%">
        <el-carousel-item v-for="(item, index) in trainingImgs" :key="index">
          <div class="bg-wrapper">
            <img :src="item.img" class="bg-image" />
            <div class="bg-overlay"></div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="content-wrapper">
      <div class="content-bar">
        <div class="bar-inner">
          <h1 class="course-title">
            Drilling Equpiment, Techniques and Procedures On Site Training
          </h1>
          <div class="course-meta">
            <el-tag type="info" effect="dark">TPIC</el-tag>
            <el-tag type="success" effect="dark" class="date-tag">2025/04/05 - 2025/07/15</el-tag>
          </div>
          <p class="course-desc">
            This course bridges theoretical knowledge with real-world application by focusing on
            on-site, interactive training sessions, including live demonstrations, equipment
            handling, and procedural simulations. Participants will gain a deep understanding of the
            structure, function, and maintenance of drilling equipment, step-by-step drilling
            procedures from spudding to completion, safety protocols and environmental
            considerations, troubleshooting and problem-solving during active drilling operations.
            This training is ideal for both entry-level and experienced personnel seeking to improve
            their technical competencies or refresh their skills in line with the latest industry
            standards and technologies.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sec {
  height: 700px;
  position: relative;
  overflow: hidden;

  .bg-carousel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    :deep(.el-carousel) {
      height: 100%;
    }

    :deep(.el-carousel__container) {
      height: 100%;
    }

    :deep(.el-carousel__item) {
      height: 100%;
    }

    .bg-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .bg-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .bg-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.85) 0%,
        rgba(0, 0, 0, 0.4) 40%,
        rgba(0, 0, 0, 0.2) 100%
      );
    }
  }

  .content-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    padding: 0;
  }

  .content-bar {
    width: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.7) 60%,
      transparent 100%
    );
    padding: 60px 80px 50px;
    box-sizing: border-box;
  }

  .bar-inner {
    max-width: 1000px;
    margin: 0 auto;
  }

  .course-title {
    font-size: 44px;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 20px;
    line-height: 1.2;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  }

  .course-meta {
    margin-bottom: 20px;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;

    .el-tag {
      font-weight: 600;
      font-size: 13px;
      border-radius: 20px;
      padding: 6px 16px;
      border: none;
    }

    .date-tag {
      background-color: #f0a500 !important;
      color: #fff !important;
    }
  }

  .course-desc {
    font-size: 17px;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
    text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  }
}
</style>
