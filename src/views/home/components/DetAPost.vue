<script setup lang="ts">
import { ref } from 'vue';

const trainingImgs = ref<Array<any>>(
    [
        { img: "/images/5. Drilling Equpiment, Techniques and Procedures On Site Training, TPIC, Apr 2025/20250401.jpg" },
        { img: "/images/5. Drilling Equpiment, Techniques and Procedures On Site Training, TPIC, Apr 2025/20250402.jpg" },
    ]
)
</script>

<template>
    <div class="sec">
        <!-- <video style="width: 100%; height:100%; object-fit:fill; float: right;" :src="wellCommentingVideo" autoplay
            muted loop /> -->
        <el-carousel style="width: 100%; height: 100%;" indicator-position="outside">
            <el-carousel-item v-for="(item, index) in trainingImgs" :key="index">
                <el-image :src="item.img" fit="cover" class="img">
                </el-image>
            </el-carousel-item>
        </el-carousel>


        <div class="courseTitle">


            <el-card>
                <div class="course-info">
                    <h1 class="course-title">Drilling Equpiment, Techniques and Procedures On Site Training</h1>
                    <div class="course-meta">
            <el-tag type="info" effect="dark">TPIC</el-tag>
            <el-tag type="success" effect="dark" class="date-tag">2025/04/05 - 2025/07/15</el-tag>
          </div>

                    <div class="course-desc">
                        <section class="desc-item">
                            This course bridges theoretical knowledge with real-world application by focusing on
                            on-site, interactive training sessions, including live demonstrations, equipment handling,
                            and procedural simulations. Participants will gain a deep understanding of: The structure,
                            function, and maintenance of drilling equipment, Step-by-step drilling procedures from
                            spudding to completion, Safety protocols and environmental considerations, Troubleshooting
                            and problem-solving during active drilling operations, This training is ideal for both
                            entry-level and experienced personnel seeking to improve their technical competencies or
                            refresh their skills in line with the latest industry standards and technologies.
                        </section>
                    </div>

                </div>

            </el-card>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.sec {
    height: 800px;
    background-color: cyan;
    position: relative;

    .img {
        width: 100%;
        height: 100%;
    }

    ::v-deep(.el-carousel__container) {
        height: 100%;
    }

    .courseTitle {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 1230px;
        transform: translate(-50%, -50%);

        .el-card {

            // background-color: rgb(255, 255, 255, 0.92);
            background-color: #fff;
            opacity: 0.92;
            border: none;
            height: 540px;
            width: 780px;

            border-radius: 10px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
        }

        ::v-deep(.el-card__body) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #000;

            .course-info {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .course-title {
                font-size: 48px;
                font-weight: 900;
                margin-bottom: 20px;
                line-height: 1.1;
                color: #000;
            }

            .course-meta {
                margin-bottom: 25px;
                display: flex;
                gap: 18px;

                .el-tag {
                    font-weight: 600;
                    font-size: 14px;
                    border-radius: 20px;
                    padding: 8px 20px;
                    user-select: none;
                    cursor: default;
                    border: none;
                }

                .date-tag {
                    background-color: #f9a825 !important;
                    /* 深金黄色 */
                    color: #4a3e00 !important;
                }
            }

            .course-desc {
                font-size: 18px;
                line-height: 1.8;
                font-style: italic;
            }


            .desc-item {
                flex: 1;
                /* 两端等宽 */
            }

            .desc-title {
                // display: block;
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 8px;
            }
        }

    }
}
</style>