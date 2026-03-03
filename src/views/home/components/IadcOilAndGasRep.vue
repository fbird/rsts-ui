<template>
  <div class="sec">
    <el-carousel trigger="click" style="width: 100%; height: 100%">
      <el-carousel-item v-for="(item, index) in imgs" :key="index">
        <el-image :src="item" fit="cover" class="img" />
      </el-carousel-item>
    </el-carousel>

    <div class="courseTitle">
      <el-card>
        <span class="l1"
          >IADC WellSharp Oil & Gas Operator Representative (Workover and Intervention)</span
        >
        <div class="tags">
          <el-tag type="info" effect="dark">Baker Eastern S.A.</el-tag>
          <el-tag type="success" effect="dark" class="date-tag">2025/05/08 - 2025/05/12</el-tag>
        </div>
        <span class="l2">
          The IADC WellSharp Oil & Gas Operator Representative (Workover and Intervention) course
          focuses on equipping personnel with the knowledge and skills needed to oversee workover
          and intervention operations while ensuring well control. The curriculum covers a range of
          topics, including risk management, well control principles, barrier systems, influx
          management, equipment specifics (coiled tubing, snubbing, wireline), and well kill
          procedures. It emphasizes practical application and is designed for both supervisory and
          office-based personnel involved in these operations.
        </span>
      </el-card>
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
  height: 800px;
  background: linear-gradient(90deg, #2e3d96, #5367c0); /* 深蓝渐变 */
  position: relative;
  overflow: hidden;

  .img {
    width: 100%;
    height: 100%;
    filter: brightness(0.85) contrast(1.05); /* 图片轻微暗调，更突出文字 */
  }

  ::v-deep(.el-carousel__container) {
    height: 100%;
  }

  .courseTitle {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 720px;
    max-width: 90vw;
    transform: translate(-50%, -50%);

    .el-card {
      background-color: rgba(255, 255, 255, 0.88);
      border: none;
      height: auto;
      padding: 40px 50px;
      border-radius: 16px;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
      display: flex;
      flex-direction: column;
      gap: 24px;
      color: #1b2a53;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      user-select: text;
    }

    .tags {
      display: flex;
      gap: 20px;
      margin-top: 8px;

      .el-tag {
        font-weight: 600;
        font-size: 14px;
        border-radius: 20px;
        padding: 6px 14px;
        user-select: none;
      }

      .date-tag {
        background: #4f78d1;
        color: #f0f4ff !important;
      }
    }

    ::v-deep(.el-card__body) {
      padding: 0;

      .l1 {
        font-size: 38px;
        font-weight: 800;
        line-height: 1.15;
        color: #243a73;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .l2 {
        font-size: 18px;
        line-height: 1.7;
        color: #4a5678;
      }
    }
  }
}
</style>
