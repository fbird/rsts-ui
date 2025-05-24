<template>
    <div class="sec">
        <!-- <video style="width: 100%; height:100%; object-fit:fill; float: right;" :src="wellCommentingVideo" autoplay
            muted loop /> -->
        <el-carousel trigger="click" style="width: 100%; height: 100%;">
            <el-carousel-item key="video">
                <video style="width: 100%; height:100%; object-fit:cover;" :src="wellCommentingVideo" autoplay muted
                    loop />
            </el-carousel-item>
            <el-carousel-item key="1">
                <el-image :src="wellcementing1" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="2">
                <el-image :src="wellcementing2" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="3">
                <el-image :src="wellcementing3" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="4">
                <el-image :src="wellcementing4" fit="cover" class="img" />
            </el-carousel-item>

        </el-carousel>

        <div class="courseTitle">


            <el-card>
                <span class="l1">Well Cementing</span>
                <span class="l2">Cementing is a fundamental element of effective well construction. By understanding
                    cement
                    chemistry, additive use, and lab procedures the participants will able to build a solid foundation
                    to
                    design and execute cement jobs. Mud removal and centralization will be taught so that the
                    participants
                    can apply effective processes to ensure cement job success.
                    Special purpose cements will be discussed in a way to show when they should and should not be used,
                    as
                    well as how they can be used to solve challenges encountered in complex and extreme well
                    environments.
                    Foamed, engineered particle sized, flexible, and salt cements will also be covered in detail.</span>
                <span class="l2" style="margin-top: 0px;">
                    During this course, participants will practice cementing calculations, as well as job design
                    exercises
                    and cement evaluation methods using real-life examples. Liner cementing and stage cementing jobs
                    will be
                    developed in the classroom. Cement design software will also be demonstrated.
                </span>
            </el-card>

        </div>
    </div>
</template>

<script setup lang="ts">
import wellCommentingVideo from "/images/trainingImages/wellCementing/well-cementing.mp4";

import wellcementing1 from "/images/trainingImages/wellCementing/well-cementing1.jpg";

import wellcementing2 from "/images/trainingImages/wellCementing/well-cementing2.jpg";

import wellcementing3 from "/images/trainingImages/wellCementing/well-cementing3.jpg";

import wellcementing4 from "/images/trainingImages/wellCementing/well-cementing4.jpg";

</script>

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
            height: 580px;
            width: 615px;

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