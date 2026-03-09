<template>
  <div class="sec">
    <div class="split-container">
      <div class="split-left">
        <div class="split-content">
          <h1 class="course-title">IWCF Drilling Well Control Driller Training</h1>
          <div class="course-meta">
            <el-tag type="info" effect="dark" class="client-tag">Individual candidates</el-tag>
            <el-tag type="success" effect="dark" class="date-tag">2025/05/21 - 2025/05/26</el-tag>
          </div>
          <p class="course-desc">
            The IWCF Drilling Well Control Level 3 (Driller) training is designed for personnel in wellsite supervisory
            roles and those involved in the operational decision-making process, such as Drilling Supervisors,
            Superintendents, and Company Men. This advanced course builds upon Level 3 content, focusing on more complex
            aspects of well control and well kill methodology. It is a five-day program that includes both practical
            assessments and written tests on equipment, principles, and procedures.
          </p>
        </div>
      </div>
      <div class="split-right">
        <el-carousel :interval="5000" arrow="never" indicator-position="none" height="100%">
          <el-carousel-item v-for="(item, index) in trainingImgs" :key="index">
            <img :src="item.img" class="split-img" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const trainingImgs = ref([
  {
    img: '/images/7. IWCF Drilling Well Control Well Site Supervisor Training, Individual candidate, May 2024/20250504.JPEG',
  },
  {
    img: '/images/7. IWCF Drilling Well Control Well Site Supervisor Training, Individual candidate, May 2024/20250505.JPEG',
  },
  {
    img: '/images/7. IWCF Drilling Well Control Well Site Supervisor Training, Individual candidate, May 2024/20250506.JPEG',
  },
  {
    img: '/images/7. IWCF Drilling Well Control Well Site Supervisor Training, Individual candidate, May 2024/20250507.JPEG',
  },
  {
    img: '/images/7. IWCF Drilling Well Control Well Site Supervisor Training, Individual candidate, May 2024/20250508.JPEG',
  },
])
</script>

<style scoped lang="scss">
.sec {
  height: 700px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0d1525 0%, #1a2744 100%);

  .split-container {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .split-left {
    flex: 0.8;
    position: relative;
    background: linear-gradient(145deg, rgba(20, 50, 110, 0.95), rgba(15, 40, 90, 0.98));
    clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%);
    margin-right: -6%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .split-content {
    padding: 40px 50px 40px 80px;
    max-width: 500px;
  }

  .split-right {
    flex: 1;
    position: relative;
    clip-path: polygon(12% 0, 100% 0, 100% 100%, 0 100%);
    z-index: 0;

    :deep(.el-carousel) {
      height: 100%;
    }

    :deep(.el-carousel__container) {
      height: 100%;
    }

    .split-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .course-title {
    font-size: 44px;
    font-weight: 700;
    color: #f7c948;
    margin: 0 0 20px;
    line-height: 1.2;
  }

  .course-meta {
    margin-bottom: 20px;
    display: flex;
    gap: 14px;
    flex-wrap: wrap;

    .client-tag {
      background-color: #335073 !important;
      color: #a8c0ff !important;
      font-weight: 600;
      font-size: 13px;
      border-radius: 20px;
      padding: 6px 16px;
      border: none !important;
    }

    .date-tag {
      background-color: #e69500 !important;
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
    color: #cbd5e1;
    margin: 0;
  }
}
</style>
