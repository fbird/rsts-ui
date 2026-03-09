<template>
  <div class="sec">
    <div class="bg-carousel">
      <el-carousel :interval="5000" arrow="never" indicator-position="none" height="100%">
        <el-carousel-item v-for="(item, index) in imgs" :key="index">
          <img :src="item" class="bg-image" />
        </el-carousel-item>
      </el-carousel>
      <div class="bg-overlay"></div>
    </div>

    <div class="content-wrapper">
      <div class="content-bar">
        <h1 class="course-title">IADC WellSharp Oil & Gas Operator Representative</h1>
        <div class="course-meta">
          <el-tag type="info" effect="dark" class="client-tag">Baker Eastern S.A.</el-tag>
          <el-tag type="success" effect="dark" class="date-tag">2025/05/08 - 2025/05/12</el-tag>
        </div>
        <p class="course-desc">
          The IADC WellSharp Oil & Gas Operator Representative (Workover and Intervention) course focuses on equipping
          personnel with the knowledge and skills needed to oversee workover and intervention operations while ensuring
          well control. The curriculum covers a range of topics, including risk management, well control principles,
          barrier systems, influx management, equipment specifics (coiled tubing, snubbing, wireline), and well kill
          procedures. It emphasizes practical application and is designed for both supervisory and office-based
          personnel involved in these operations.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const imgs = [
  '/images/6. IADC Oil & Gas Operator Representative (Workover and Intervention), Baker Eastern S.A., May 2025/20250501.jpeg',
  '/images/6. IADC Oil & Gas Operator Representative (Workover and Intervention), Baker Eastern S.A., May 2025/20250502.jpeg',
  '/images/6. IADC Oil & Gas Operator Representative (Workover and Intervention), Baker Eastern S.A., May 2025/20250503.jpeg',
]
</script>

<style lang="scss" scoped>
.sec {
  height: 700px;
  position: relative;
  overflow: hidden;
  background: #0d1525;

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
      background: linear-gradient(to right,
          rgba(13, 21, 37, 0.75) 0%,
          rgba(13, 21, 37, 0.35) 45%,
          transparent 100%);
    }
  }

  .content-wrapper {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 80px;
    box-sizing: border-box;
  }

  .content-bar {
    max-width: 680px;
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

    .client-tag {
      background-color: #455a64 !important;
      color: #fff !important;
      font-weight: 600;
      font-size: 13px;
      border-radius: 20px;
      padding: 6px 16px;
      border: none !important;
    }

    .date-tag {
      background-color: #f0a500 !important;
      color: #fff !important;
      font-weight: 600;
      font-size: 13px;
      border-radius: 20px;
      padding: 6px 16px;
      border: none !important;
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
