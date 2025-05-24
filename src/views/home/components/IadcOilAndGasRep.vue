<template>
    <div class="sec">
        <!-- <video style="width: 100%; height:100%; object-fit:fill; float: right;" :src="wellCommentingVideo" autoplay
            muted loop /> -->
        <el-carousel trigger="click" style="width: 100%; height: 100%;">
            <el-carousel-item key="1">
                <el-image :src="iadcOilAndGasRep1" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="2">
                <el-image :src="iadcOilAndGasRep2" fit="cover" class="img" />
            </el-carousel-item>
            <el-carousel-item key="3">
                <el-image :src="iadcOilAndGasRep3" fit="cover" class="img" />
            </el-carousel-item>

        </el-carousel>

        <div class="courseTitle">


            <el-card>
                <span class="l1">IADC Oil and Gas Operator Representative</span>
                <span class="l2">This IADC WellSharp™ course curriculum is designed for Oil and Gas Operator
                    Representatives who are primarily responsible for the oversight of coiled tubing, snubbing,
                    wireline, and workover operational processes of well control. This curriculum identifies a body of
                    knowledge and a set of job skills that can be used to provide well control training for Oil and Gas
                    Operator Representative. IADC recommends that well site supervisory and office-based personnel who
                    are primarily involved in the operational decision-making process for well control and/or involved
                    in design of well barriers attend this course.
                </span>
            </el-card>

        </div>
    </div>
</template>

<script setup lang="ts">
import iadcOilAndGasRep1 from "/images/trainingImages/iadcOilAndGasRep/IADC Oil & Gas Representative Course 1.jpeg";
import iadcOilAndGasRep2 from "/images/trainingImages/iadcOilAndGasRep/IADC Oil & Gas Representative Course 2.jpeg";
import iadcOilAndGasRep3 from "/images/trainingImages/iadcOilAndGasRep/IADC Oil & Gas Representative Course 3.jpeg";

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
            height: 420px;
            width: 700px;

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