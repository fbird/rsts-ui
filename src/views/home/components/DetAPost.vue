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
      <div class="content-right">
        <div class="course-card">
          <h1 class="course-title">
            Drilling Equpiment, Techniques and Procedures On Site Training
          </h1>
          <div class="course-meta">
            <el-tag type="info" effect="dark">TPIC</el-tag>
            <el-tag type="success" effect="dark" class="date-tag">2025/04/05 - 2025/07/15</el-tag>
          </div>

          <div class="course-desc">
            This course bridges theoretical knowledge with real-world application by focusing on
            on-site, interactive training sessions, including live demonstrations, equipment
            handling, and procedural simulations. Participants will gain a deep understanding of:
            The structure, function, and maintenance of drilling equipment, Step-by-step drilling
            procedures from spudding to completion, Safety protocols and environmental
            considerations, Troubleshooting and problem-solving during active drilling operations,
            This training is ideal for both entry-level and experienced personnel seeking to improve
            their technical competencies or refresh their skills in line with the latest industry
            standards and technologies.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sec {
  height: 750px;
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
      // background: linear-gradient(
      //   135deg,
      //   rgba(13, 21, 37, 0.92) 0%,
      //   rgba(26, 39, 68, 0.85) 50%,
      //   rgba(13, 21, 37, 0.92) 100%
      // );
    }
  }

  .content-wrapper {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    height: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 60px 80px;
    box-sizing: border-box;
    align-items: center;
  }

  .content-right {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  .course-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 40px 48px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
    color: #1a1f29;
    max-width: 720px;
    backdrop-filter: blur(10px);

    .course-title {
      font-size: 40px;
      font-weight: 700;
      color: #0f1419;
      margin: 0 0 20px;
      line-height: 1.2;
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
      color: #3d4852;
    }
  }
}
</style>
