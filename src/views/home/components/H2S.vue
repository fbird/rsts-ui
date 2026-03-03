<template>
  <div class="sec">
    <div class="left">
      <el-carousel trigger="click" height="100%">
        <el-carousel-item v-for="(item, index) in imgs" :key="index">
          <el-image :src="item" fit="cover" class="carousel-image" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="right">
      <div class="contentWrapper">
        <h1 class="title">H2S Safety Awareness Training</h1>
        <div class="tags">
          <el-tag class="client-tag">Western Atlas International, Inc.</el-tag>
          <el-tag class="date-tag">2025/02/02 - 2025/02/02</el-tag>
        </div>
        <p class="desc">
          An H2S safety awareness training outline typically covers the properties of hydrogen
          sulfide (H2S), its dangers, and how to respond to potential exposure. Key topics include
          understanding H2S properties, health effects, detection methods, and emergency procedures,
          with a focus on prevention and personal protective equipment (PPE).
        </p>
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
  display: flex;
  width: 100%;
  height: 650px;
  background: linear-gradient(135deg, #1c2757, #3a4a91);
  box-sizing: border-box;
  padding: 0 40px;
  overflow: hidden;

  .left {
    flex: 1.1;
    padding-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    .carousel-image {
      width: 100%;
      height: 600px;
      border-radius: 16px;
      box-shadow: 0 25px 50px rgba(0, 0, 40, 0.6);
      object-fit: cover;
      filter: brightness(0.75) saturate(1.1);
      transition:
        filter 0.3s ease,
        transform 0.3s ease;
      cursor: pointer;
    }

    .carousel-image:hover {
      filter: brightness(0.9) saturate(1.2);
      transform: scale(1.02);
      box-shadow: 0 30px 60px rgba(0, 0, 40, 0.8);
    }

    .el-carousel {
      width: 100%;
      height: 600px;
      border-radius: 16px;
      overflow: hidden;
    }
  }

  .right {
    flex: 1;
    color: #e1e9ff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 30px;
    text-shadow: 0 2px 6px rgba(10, 15, 50, 0.8);
    user-select: none;

    .contentWrapper {
      max-width: 480px;
      display: flex;
      flex-direction: column;
      gap: 28px;

      .title {
        font-size: 44px;
        font-weight: 900;
        color: #e1e9ff;
        letter-spacing: 2px;
        line-height: 1.1;
        margin: 0;
      }

      .tags {
        display: flex;
        gap: 18px;

        .client-tag {
          background-color: #00897b !important;
          /* 青绿色 */
          color: #fff !important;
          border: none !important;
          font-weight: 700;
          font-size: 14px;
          border-radius: 20px;
          padding: 8px 20px;
          user-select: none;
          cursor: default;
          transition: box-shadow 0.3s ease;
        }

        .date-tag {
          background-color: #ffeb3b !important;
          /* 明黄 */
          color: #4a6a34 !important;
          /* 深绿 */
          border: none !important;
          font-weight: 700;
          font-size: 14px;
          border-radius: 20px;
          user-select: none;
          padding: 8px 20px;
          cursor: default;
          transition: box-shadow 0.3s ease;

          text-shadow: none !important;
          /* 取消文字阴影 */
        }
      }

      .desc {
        font-size: 18px;
        line-height: 1.7;
        font-weight: 400;
        color: rgba(225, 233, 255, 0.85);
        user-select: text;
      }
    }
  }
}
</style>
