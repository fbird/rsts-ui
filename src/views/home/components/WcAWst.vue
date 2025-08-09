<template>
    <div class="course-gallery">
        <section class="course-section">
            <div class="content-wrapper">
                <div class="content-left">
                    <h1 class="course-title">Well completion and well service Training</h1>
                    <p class="course-desc">
                        <span class="desc-title">Well completion</span> is the final phase of preparing an oil or gas
                        well for production. It involves various processes and techniques to enable the extraction of
                        hydrocarbons from the reservoir. Activities include casing, cementing, perforation, installing
                        tubing, and using technologies to optimize production and ensure well integrity. The goal is to
                        establish a secure and efficient connection between the reservoir and surface facilities.
                    </p>

                    <p class="course-desc" style="margin-top: 18px;">
                        <span class="desc-title">Well intervention</span> refers to any operation conducted in a live
                        well to address issues, maintain or restore production, or perform maintenance. Common
                        interventions include wireline, coiled tubing, and snubbing operations. Well workover involves
                        maintenance, repair, or enhancement operations on an existing oil or gas well to improve
                        productivity. It addresses issues like declining production, equipment malfunctions, or wellbore
                        damage. Activities include tubing replacement, wellbore repairs, reservoir stimulation, and
                        other measures to optimize performance and extend the well’s life. The goal is to maximize
                        production potential and ensure efficient operations.
                    </p>
                </div>
                <div class="content-right">
                    <!-- <el-carousel :interval="4000" arrow="always" height="480px" width="500px" trigger="click"
                        v-model="currentIndex" type="fade">
                        <el-carousel-item v-for="(img, imgIndex) in trainningClients[currentIndex].images"
                            :key="imgIndex">
                            <img :src="img" class="main-image" />
                        </el-carousel-item>
                    </el-carousel> -->

                    <el-carousel style="width: 100%;height: 500px;" indicator-position="outside">
                        <el-carousel-item v-for="(item, index) in trainningClients[currentIndex].images" type="fade"
                            :key="index">
                            <el-image :src="item" class="main-image">
                            </el-image>
                        </el-carousel-item>
                    </el-carousel>

                    <div class="thumbs">
                        <div v-for="(trainningClient, idx) in trainningClients" :key="idx"
                            style="width: calc(25% - 6px)">
                            <img :src="trainningClient.images[0]"
                                :class="['thumb-image', { active: currentIndex === idx }]"
                                @click="currentIndex = idx" />
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
import { ref } from "vue";


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
            '/images/10. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250712.jpeg',
            '/images/10. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250713.jpeg',
            '/images/10. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250714.jpeg',
            '/images/10. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250715.jpeg',
            '/images/10. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250716.jpeg',
        ],
    },
    {
        client: 'Cener Middle East FZE',
        date: '2025/07/20 - 2025/07/26',
        images: [
            '/images/11. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250717.jpeg',
            '/images/11. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250718.jpeg',
            '/images/11. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250719.jpeg',
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
            '/images/12. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250725.jpeg',
            '/images/12. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250726.jpeg',
            '/images/12. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250727.jpeg',
        ],
    },
    {
        client: 'Daqing Zuantan Engineering Company',
        date: '2025/07/22 - 2025/08/02',
        images: [
            '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/2025035.png',
            '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250728.png',
            '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250728.png',
            '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250730.png',
            '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250731.png',
            '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250732.png',
            '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250733.png',
            '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250734.png',
        ],
    }
])

// 当前每门课程轮播图片索引
const currentIndex = ref<number>(0);
</script>

<style scoped>
.course-gallery {
    height: 800px;
    /* background: linear-gradient(135deg, #1b315f, #3b569f); */
    background-repeat: no-repeat;
    background-size: cover;
    /* color: #f0f4ff; */
    background: linear-gradient(135deg, #0f253d, #2a4d5e);
  color: #f0f4ff;
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
    color: #e0e7ff;
    user-select: none;
    text-align: center;
}

.content-wrapper {
    display: flex;
    gap: 30px;
    height: 100%;
    padding: 30px 0px;
    /* 留出标题和padding */
    box-sizing: border-box;
}

.content-left {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    /* 垂直方向居中 */
    font-size: 16px;
    line-height: 1.6;
    color: #cbd5e1;
    white-space: pre-line;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
    overflow-y: auto;
    padding-right: 20px;

    .course-desc {
        font-size: 18px;
        line-height: 1.4;
        font-style: italic;
        margin: 0px;

        .desc-title {
            display: inline-block;
            font-size: 20px;
            font-weight: bold;
            color: #ffcc00;
            /* 金色，科技风且对深色背景有对比 */
            text-transform: uppercase;
            /* 全大写 */
            margin-right: 6px;
            padding: 2px 6px;
            background: rgba(255, 255, 255, 0.1);
            /* 半透明背景块 */
            border-radius: 4px;
        }
    }
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
    border-radius: 20px;
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
    /* max-width: 900px; */
}

.thumbs::-webkit-scrollbar {
    height: 8px;
}

.thumbs::-webkit-scrollbar-thumb {
    background-color: #4a6ea9;
    border-radius: 4px;
}

.thumbs>div {
    overflow: hidden;
    /* 关键 */
}

.thumb-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.thumb-image:hover {
    transform: scale(1.08);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

.thumb-client {
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
    background: linear-gradient(90deg, #3b6fc4, #5d9cec);
    /* 稍深的科技蓝渐变 */
    padding: 4px 8px;
    border-radius: 6px;
    margin: 6px 0 2px;
    transition: all 0.3s ease;
}

.thumb-date {
    font-size: 14px;
    color: #d0e4ff;
    /* 柔和浅蓝字体 */
    font-style: italic;
    transition: all 0.3s ease;
}
</style>