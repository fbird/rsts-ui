<template>
  <div class="course-gallery">
    <section class="course-section">
      <div class="content-wrapper">
        <div class="content-left">
          <h1 class="course-title">IWCF Drilling Well Control Well Site Supervisor Training</h1>
          <p class="course-desc">
            The IWCF Drilling Well Control Level 4 (Supervisor) training is designed for personnel
            in wellsite supervisory roles and those involved in the operational decision-making
            process, such as Drilling Supervisors, Superintendents, and Company Men. This advanced
            course builds upon Level 3 content, focusing on more complex aspects of well control and
            well kill methodology. It is a five-day program that includes both practical assessments
            and written tests on equipment, principles, and procedures.
          </p>
        </div>
        <div class="content-right">
          <el-carousel style="width: 100%; height: 500px" indicator-position="outside">
            <el-carousel-item
              v-for="(item, index) in trainningClients[currentIndex].images"
              :key="index"
              type="fade"
            >
              <template v-if="isVideo(item)">
                <video
                  class="main-video"
                  :src="item"
                  autoplay
                  muted
                  loop
                  playsinline
                  controls="false"
                  preload="auto"
                ></video>
              </template>
              <template v-else>
                <el-image :src="item" class="main-image" />
              </template>
            </el-carousel-item>
          </el-carousel>

          <div class="thumbs">
            <div
              v-for="(trainningClient, idx) in trainningClients"
              :key="idx"
              style="width: calc(33% - 6px)"
            >
              <img
                :src="trainningClient.images[0]"
                :class="['thumb-image', { active: currentIndex === idx }]"
                @click="currentIndex = idx"
              />
              <p class="thumb-client">{{ trainningClient.client }}</p>
              <p class="thumb-date">{{ trainningClient.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const trainningClients = ref<any[]>([
  {
    client: 'Individual Candidate',
    date: '2024/12/10 - 2024/12/14',
    images: [
      '/images/2. IWCF Drilling Well Control Well Site Supervisor Training, Individual candidate, Dec 2024/20241201.jpg',
      '/images/2. IWCF Drilling Well Control Well Site Supervisor Training, Individual candidate, Dec 2024/20241202.jpg',
      '/images/2. IWCF Drilling Well Control Well Site Supervisor Training, Individual candidate, Dec 2024/20241203.jpg',
    ],
  },
  {
    client: 'Northern Offshore Drilling Operations Ltd',
    date: '2025/01/06 - 2025/01/10',
    images: [
      '/images/3. IWCF Drilling Well Control Well Site Supervisor Training, Northern Offshore Drilling Operations Ltd., Jan 2025/20250101.jpg',
      '/images/3. IWCF Drilling Well Control Well Site Supervisor Training, Northern Offshore Drilling Operations Ltd., Jan 2025/20250102.jpg',
      '/images/3. IWCF Drilling Well Control Well Site Supervisor Training, Northern Offshore Drilling Operations Ltd., Jan 2025/20250103.jpg',
      '/images/3. IWCF Drilling Well Control Well Site Supervisor Training, Northern Offshore Drilling Operations Ltd., Jan 2025/20250104.png',
      '/images/3. IWCF Drilling Well Control Well Site Supervisor Training, Northern Offshore Drilling Operations Ltd., Jan 2025/20250105.png',
    ],
  },
  {
    client: 'Baker Eastern S.A.',
    date: '2025/06/20 - 2025/06/24',
    images: [
      '/images/8. IWCF Drilling Well Control Well Site Supervisor Training, Baker Eastern S.A., June 2025/20250604.jpeg',
      '/images/8. IWCF Drilling Well Control Well Site Supervisor Training, Baker Eastern S.A., June 2025/20250601.mp4',
      '/images/8. IWCF Drilling Well Control Well Site Supervisor Training, Baker Eastern S.A., June 2025/20250602.mp4',
      '/images/8. IWCF Drilling Well Control Well Site Supervisor Training, Baker Eastern S.A., June 2025/20250603.jpeg',
      '/images/8. IWCF Drilling Well Control Well Site Supervisor Training, Baker Eastern S.A., June 2025/20250605.jpg',
    ],
  },
])

const currentIndex = ref<number>(0)

const isVideo = (url: string) => {
  return (
    url.toLowerCase().endsWith('.mp4') ||
    url.toLowerCase().endsWith('.webm') ||
    url.toLowerCase().endsWith('.ogg')
  )
}
</script>

<style scoped>
.course-gallery {
  height: 800px;
  background: linear-gradient(135deg, #1c2a49, #162c4a);
  color: #a8d0c6;
}

.course-section {
  padding: 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.course-title {
  font-size: 42px;
  font-weight: 900;
  color: #f6aa1c;
  user-select: none;
  text-align: center;
}

.content-wrapper {
  display: flex;
  gap: 30px;
  height: 100%;
  padding: 30px 0;
  box-sizing: border-box;
  flex-direction: row-reverse;
}

.content-left {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  line-height: 1.6;
  color: #c6e1d9;
  white-space: pre-line;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
  overflow-y: auto;
  padding-right: 20px;
}

.content-left .course-desc {
  font-size: 18px;
  line-height: 1.4;
  margin: 0;
}

.content-left .course-desc .desc-title {
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  color: #f6aa1c;
  text-transform: uppercase;
  margin-right: 6px;
  padding: 2px 6px;
  background: rgba(246, 170, 28, 0.15);
  border-radius: 4px;
}

.content-right {
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #000;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

.main-video {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  background-color: #000;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

::v-deep(.el-carousel__container) {
  height: 100%;
}

.thumbs {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 10px;
  width: 100%;
}

.thumbs::-webkit-scrollbar {
  height: 8px;
}

.thumbs::-webkit-scrollbar-thumb {
  background-color: #4a6ea9;
  border-radius: 4px;
}

.thumbs > div {
  overflow: hidden;
}

.thumb-image {
  width: 100%;
  height: 150px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.thumb-image:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.thumb-client {
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  background: linear-gradient(90deg, #225e68, #3ca6af);
  padding: 4px 8px;
  border-radius: 6px;
  margin: 6px 0 2px;
  transition: all 0.3s ease;
  height: 45px;
}

.thumb-date {
  font-size: 14px;
  color: #d0e4ff;
  transition: all 0.3s ease;
}
</style>
