<template>
  <div class="sec">
    <el-carousel style="width: 100%; height: 100%" indicator-position="outside">
      <el-carousel-item v-for="(item, index) in trainingImgs" :key="index">
        <el-image :src="item.img" fit="cover" class="img" />
      </el-carousel-item>
    </el-carousel>

    <div class="courseTitle">
      <div class="course-info">
        <h1 class="course-title">IWCF Drilling Well Control Driller Training</h1>
        <div class="course-meta">
          <el-tag type="info" effect="dark" class="client-tag">Individual candidates</el-tag>
          <el-tag type="success" effect="dark" class="date-tag">2025/05/21 - 2025/05/26</el-tag>
        </div>
        <div class="course-desc">
          <section class="desc-item">
            The IWCF Drilling Well Control Level 3 (Driller) training is designed for personnel in
            wellsite supervisory roles and those involved in the operational decision-making
            process, such as Drilling Supervisors, Superintendents, and Company Men. This advanced
            course builds upon Level 3 content, focusing on more complex aspects of well control and
            well kill methodology. It is a five-day program that includes both practical assessments
            and written tests on equipment, principles, and procedures.
          </section>
        </div>
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
  background: linear-gradient(135deg, #0d1b2a 20%, #1b263b 80%);
  color: #e0e6f1;

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    filter: brightness(0.8);
    transition: filter 0.4s ease;
    cursor: pointer;
  }

  .img:hover {
    filter: brightness(1);
  }

  ::v-deep(.el-carousel__container) {
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: none;
    border: none;
  }

  .courseTitle {
    position: absolute;
    top: 50%;
    right: 60px;
    transform: translateY(-50%);
    width: 720px;

    /* 深蓝灰半透明 */
    border-radius: 24px;
    padding: 40px 50px;
    // box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
    // background: rgba(56, 103, 214, 0.85); /* 明亮蓝色带点透明感 */
    background: rgba(20, 60, 120, 0.85); /* 深宝石蓝，透明度适中 */
    box-shadow:
      0 6px 20px rgba(20, 60, 120, 0.4),
      0 3px 10px rgba(20, 60, 120, 0.25);
    /* 轻微阴影增加立体感 */
    user-select: none;

    .course-info {
      text-align: left;
      color: #cbd5e1;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .course-title {
      font-size: 44px;
      font-weight: 900;
      color: #f7c948;
      /* 柔和暖黄 */
      margin-bottom: 16px;
      line-height: 1.1;
      user-select: text;
    }

    .course-meta {
      display: flex;
      gap: 18px;

      .client-tag {
        background-color: #335073 !important;
        /* 深蓝 */
        color: #a8c0ff !important;
        /* 柔和蓝色 */
        font-weight: 600;
        font-size: 14px;
        border-radius: 20px;
        padding: 8px 24px;
        border: none !important;
        cursor: default;
      }

      .date-tag {
        background-color: #bb4e3b !important;
        /* 暗红 */
        color: #fff !important;
        font-weight: 600;
        font-size: 14px;
        border-radius: 20px;
        padding: 8px 24px;
        border: none !important;
        cursor: default;
      }
    }

    .course-desc {
      font-size: 18px;
      line-height: 1.6;
      color: #cbd5e1;
      margin-top: 25px;
      user-select: text;
    }
  }
}
</style>
