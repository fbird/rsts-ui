<template>
  <div class="sec">
    <div class="content-wrapper">
      <div class="content-left">
        <el-carousel :interval="5000" arrow="never" indicator-position="outside" height="100%">
          <el-carousel-item v-for="(item, index) in imgs" :key="index">
            <div class="img-wrapper">
              <img :src="item" class="carousel-img" />
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="content-right">
        <div class="course-card">
          <span class="course-title">IADC WellSharp Well Servicing Coiled Tubing</span>
          <div class="tags">
            <el-tag class="client-tag">Individual Candidate</el-tag>
            <el-tag class="date-tag">2023/12/05 - 2023/12/09</el-tag>
          </div>
          <p class="course-desc">
            The IADC WellSharp Well Servicing Coiled Tubing course is a specialized training program
            for individuals involved in coiled tubing operations, focusing on well control
            principles and risk management. It is designed for service company equipment operators
            primarily responsible for managing well control during coiled tubing operations. The
            course covers pressure control equipment, barrier philosophy, operational
            considerations, and emergency procedures specific to coiled tubing.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const imgs = [
  '/images/1. IADC WellSharp Well Servicing Coiled Tubing Courses, Individual Candidate, Dec 2023/20231201.png',
  '/images/1. IADC WellSharp Well Servicing Coiled Tubing Courses, Individual Candidate, Dec 2023/20231202.png',
  '/images/1. IADC WellSharp Well Servicing Coiled Tubing Courses, Individual Candidate, Dec 2023/20231203.jpg',
  '/images/1. IADC WellSharp Well Servicing Coiled Tubing Courses, Individual Candidate, Dec 2023/20231204.jpg',
]
</script>

<style lang="scss" scoped>
.sec {
  height: 800px;
  background: linear-gradient(135deg, #0d1525 0%, #1a2744 50%, #0d1525 100%);
  padding: 60px 60px;
  box-sizing: border-box;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      radial-gradient(ellipse at 20% 80%, rgba(240, 165, 0, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }

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
    border-radius: 0;
    overflow: hidden;
    box-shadow: 0 35px 90px rgba(0, 0, 0, 0.6);

    :deep(.el-carousel) {
      height: 100%;
    }

    :deep(.el-carousel__container) {
      height: 100%;
    }

    .img-wrapper {
      width: 100%;
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

    .course-title {
      display: block;
      font-size: 44px;
      font-weight: 700;
      color: #f7c948;
      margin: 0 0 20px;
      line-height: 1.2;
    }

    .tags {
      display: flex;
      gap: 14px;
      margin-bottom: 20px;
      flex-wrap: wrap;

      .client-tag {
        background-color: #335073 !important;
        color: #a8c0ff !important;
        border: none !important;
        font-weight: 600;
        font-size: 13px;
        border-radius: 20px;
        padding: 6px 16px;
      }

      .date-tag {
        background-color: #e69500 !important;
        color: #fff !important;
        border: none !important;
        font-weight: 600;
        font-size: 13px;
        border-radius: 20px;
        padding: 6px 16px;
      }
    }

    .course-desc {
      font-size: 17px;
      line-height: 1.8;
      color: rgba(232, 236, 244, 0.9);
      margin: 0;
    }
  }
}
</style>
