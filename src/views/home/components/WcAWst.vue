<template>
  <div class="course-gallery">
    <section class="course-section">

      <div class="content-wrapper">
        <div class="content-left">
          <div class="text-card">
            <h1 class="course-title">Well completion </h1>
            <h1 class="course-title">& well service Training</h1>
            <p class="course-desc">
              <span class="desc-title">Well completion</span> is the final phase of preparing an oil
              or gas well for production. It involves various processes and techniques to enable the
              extraction of hydrocarbons from the reservoir. Activities include casing, cementing,
              perforation, installing tubing, and using technologies to optimize production and
              ensure well integrity. The goal is to establish a secure and efficient connection
              between the reservoir and surface facilities.
            </p>

            <p class="course-desc" style="margin-top: 20px">
              <span class="desc-title">Well intervention</span> refers to any operation conducted in
              a live well to address issues, maintain or restore production, or perform maintenance.
              Common interventions include wireline, coiled tubing, and snubbing operations. Well
              workover involves maintenance, repair, or enhancement operations on an existing oil or
              gas well to improve productivity. It addresses issues like declining production,
              equipment malfunctions, or wellbore damage. Activities include tubing replacement,
              wellbore repairs, reservoir stimulation, and other measures to optimize performance
              and extend the well's life. The goal is to maximize production potential and ensure
              efficient operations.
            </p>
          </div>

          <div class="client-cards">
            <div v-for="(trainningClient, idx) in trainningClients" :key="idx" class="client-card"
              :class="{ active: currentIndex === idx }" @click="currentIndex = idx">
              <img :src="trainningClient.images[0]" class="client-thumb" />
              <div class="client-info">
                <p class="client-name">{{ trainningClient.client }}</p>
                <p class="client-date">{{ trainningClient.date }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="content-right">
          <div class="photo-wall-grid">
            <div v-for="(img, imgIndex) in trainningClients[currentIndex].images.slice(0, 4)" :key="imgIndex"
              class="photo-wall-item">
              <el-image :src="img" class="photo-wall-img" fit="cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const trainningClients = ref<any>([
  // {
  //     client: 'Cener Middle East FZE',
  //     date: '2025/07/09 - 2025/07/15',
  //     images: [
  //         '/images/9. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250701.jpeg',
  //         '/images/9. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250702.jpeg',
  //         '/images/9. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250703.jpeg',
  //         '/images/9. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250704.jpeg',
  //         '/images/9. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250705.jpeg',
  //         '/images/9. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250706.jpeg',
  //         '/images/9. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250707.jpeg',
  //         '/images/9. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250708.jpeg',
  //         '/images/9. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250709.jpeg',
  //         '/images/9. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250710.jpeg',
  //     ],
  // },
  {
    client: 'Kerui Oilfield Service Iraqi Branch',
    date: '2025/07/09 - 2025/07/15',
    images: [
      '/images/10. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250710.jpeg',
      '/images/10. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250713.jpeg',
      '/images/10. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250715.jpeg',
      '/images/10. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250716.jpeg',
    ],
  },
  {
    client: 'Cener Middle East FZE',
    date: '2025/07/20 - 2025/07/26',
    images: [
      '/images/11. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250717.jpeg',
      '/images/11. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250720.jpeg',
      '/images/11. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250721.jpeg',
      '/images/11. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250722.jpeg',
    ],
  },
  {
    client: 'Kerui Oilfield Service Iraqi Branch',
    date: '2025/07/20 - 2025/07/26',
    images: [
      '/images/12. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250723.jpeg',
      '/images/12. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250724.jpeg',
      '/images/12. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250726.jpeg',
      '/images/12. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250727.jpeg',
    ],
  },
  {
    client: 'Daqing Zuantan Engineering Company',
    date: '2025/07/22 - 2025/08/02',
    images: [
      '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250730.png',
      '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250732.png',
      '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250733.png',
      '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250734.png',
    ],
  },
])

// 当前每门课程轮播图片索引
const currentIndex = ref<any>(0)
</script>

<style scoped>
.course-gallery {
  min-height: 700px;
  height: 870px;
  background: linear-gradient(145deg, #0a1a2e 0%, #162a45 50%, #1e3a5f 100%);
  color: #f0f4ff;
  padding: 10px 5px;
  box-sizing: border-box;
  overflow: hidden;
}

.course-section {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.course-title {
  font-size: 38px;
  font-weight: 700;
  color: #ffffff;
  user-select: none;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 0 2px 20px rgba(59, 130, 246, 0.5);
}

.content-wrapper {
  height: 100%;
  display: flex;
  gap: 10px;
  flex: 1;
  box-sizing: border-box;
  align-items: stretch;
}

.content-left {
  flex: 0 0 480px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
}

.text-card {
  background: linear-gradient(135deg, rgba(30, 60, 100, 0.6), rgba(20, 40, 70, 0.8));
  border-radius: 20px;
  padding: 28px;
  border: 1px solid rgba(100, 150, 220, 0.2);
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  flex-shrink: 0;
}

.course-desc {
  font-size: 15px;
  line-height: 1.8;
  margin: 0px;
  color: #b8c5d6;

  .desc-title {
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    color: #fbbf24;
    text-transform: uppercase;
    margin-right: 8px;
    padding: 3px 10px;
    background: linear-gradient(135deg, rgba(251, 191, 36, 0.25), rgba(245, 158, 11, 0.15));
    border-radius: 6px;
    border: 1px solid rgba(251, 191, 36, 0.3);
  }
}

.client-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  flex: 1;
  align-content: start;
}

.client-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.client-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.client-card.active {
  border-color: #fbbf24;
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(30, 60, 100, 0.4));
  box-shadow: 0 4px 20px rgba(251, 191, 36, 0.2);
}

.client-thumb {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}

.client-info {
  flex: 1;
  min-width: 0;
}

.client-name {
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
  margin: 0 0 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.client-date {
  font-size: 11px;
  color: #94a3b8;
  margin: 0;
}

.content-right {
  flex: 1;
  min-height: 0;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
  /* background: rgba(255, 255, 255, 0.95); */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.photo-wall-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
  height: 100%;
  /* padding: 16px; */
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

:deep(.el-carousel) {
  height: 100%;
}

:deep(.el-carousel__container) {
  height: 100%;
}

:deep(.el-carousel__item) {
  height: 100%;
}

.photo-wall-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 12px;
  height: 100%;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
}

.photo-wall-item {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: 4px solid #ffffff;
  background: #fff;
}

.photo-wall-item:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.photo-wall-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

:deep(.el-carousel__indicator--horizontal) {
  padding: 12px 8px;
}

:deep(.el-carousel__button) {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
}

:deep(.el-carousel__indicator.is-active .el-carousel__button) {
  background-color: #fbbf24;
}
</style>
