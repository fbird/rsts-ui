<template>
    <div class="sec">
        <!-- <video style="width: 100%; height:100%; object-fit:fill; float: right;" :src="wellCommentingVideo" autoplay
            muted loop /> -->
        <el-carousel trigger="click" style="width: 100%; height: 100%;">
            <el-carousel-item key="video1">
                <video style="width: 100%; height:100%; object-fit:cover;" :src="video1" autoplay muted loop />
            </el-carousel-item>
            <el-carousel-item key="video2">
                <video style="width: 100%; height:100%; object-fit:cover;" :src="video2" autoplay muted loop />
            </el-carousel-item>
            <el-carousel-item key="3">
                <el-image :src="iwcfl43" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="4">
                <el-image :src="iwcfl44" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="5">
                <el-image :src="iwcfl45" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="6">
                <el-image :src="iwcfl46" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="7">
                <el-image :src="iwcfl47" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="8">
                <el-image :src="iwcfl48" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="49">
                <el-image :src="iwcfl49" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="10">
                <el-image :src="iwcfl410" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="11">
                <el-image :src="iwcfl411" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="12">
                <el-image :src="iwcfl412" fit="cover" class="img" />
            </el-carousel-item>

        </el-carousel>

        <div class="courseTitle">


            <el-card>
                <span class="l1">IWCF Drilling Well Control Training
                </span>
                <span class="l1" style="text-align: center; margin-top: 15px; font-size: 30px;"> Level 4
                </span>
                <span class="l2">The IWCF Level 4 Drilling Well Control course is essential training for those working
                    in wellsite supervisory roles and for office-based personnel that are primarily involved in the
                    operational decision-making process and/or well design. The course aims to build on Level 3 course
                    content (including kick detection and shut-in) and focus on more complex aspects of well control and
                    well kill methodology.
                </span>
            </el-card>

        </div>
    </div>
</template>

<script setup lang="ts">
import video1 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 1.mp4";
import video2 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 2.mp4";
import iwcfl43 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 3.jpeg";
import iwcfl44 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 4.jpeg";
import iwcfl45 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 5.jpeg";
import iwcfl46 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 6.jpeg";
import iwcfl47 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 7.jpeg";
import iwcfl48 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 8.jpeg";
import iwcfl49 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 9.jpeg";
import iwcfl410 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 10.jpeg";
import iwcfl411 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 11.jpeg";
import iwcfl412 from "/images/trainingImages/iwcfDrillingWellControlL4/IWCF Drilling Well Control Level 4 Training 12.jpeg";

</script>

<style lang="scss" scoped>
.sec {
    height: 700px;
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
            height: 420px;
            width: 580px;

            border-radius: 10px;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
        }

        ::v-deep(.el-card__body) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #000;

            .l1 {
                font-size: 32px;
                font-weight: 800;
            }

            .l2 {
                font-size: 18px;
                margin-top: 40px;
                line-height: 1.8;
                font-style: italic;
            }
        }

    }
}
</style>