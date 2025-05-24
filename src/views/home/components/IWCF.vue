<template>
    <div class="sec">
        <div class="left">
            <el-carousel trigger="click" height="100%">
                <el-carousel-item key="1">
                    <el-image :src="IWCFWellConrolTraining1" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="2">
                    <el-image :src="IWCFWellConrolTraining2" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="3">
                    <el-image :src="IWCFWellConrolTraining3" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="4">
                    <el-image :src="IWCFWellConrolTraining4" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="5">
                    <el-image :src="IWCFWellConrolTraining5" fit="cover" class="carousel-image" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="right">


        </div>
        <div class="contentCover">
            <div class="contentWrapper" style="float: right">
                <span class="l1" style="color: #fff">IWCF Well Conrol Training</span>
                <span class="l2" style="color: #fff">Gain hands-on experience in well control operations with
                    our IWCF Well Control Training. Participants will use industry-standard simulators to practice
                    pressure
                    control, kick detection, and shut-in procedures, ensuring readiness for real-world well control
                    scenarios.</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IWCFWellConrolTraining1 from "/images/trainingImages/iwcfWellControll/IWCF Well Conrol Training (1).jpg";
import IWCFWellConrolTraining2 from "/images/trainingImages/iwcfWellControll/IWCF Well Conrol Training (2).jpg";
import IWCFWellConrolTraining3 from "/images/trainingImages/iwcfWellControll/IWCF Well Conrol Training (3).jpg";
import IWCFWellConrolTraining4 from "/images/trainingImages/iwcfWellControll/IWCF Well Conrol Training (4).jpg";
import IWCFWellConrolTraining5 from "/images/trainingImages/iwcfWellControll/IWCF Well Conrol Training (5).jpg";

</script>

<style lang="scss" scoped>
.sec {
    width: 100%;
    height: 700px;
    // background-color: rgba(105, 179, 254, 0.09);
    background-color: #2e3d96 !important;
    display: flex;
    position: relative;


    .left {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contentCover {
        position: absolute;
        width: 1230px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

    }

    .contentWrapper {
        width: 480px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .l1 {
            font-size: 32px;
            font-weight: 800;
            color: black;
        }

        .l2 {
            font-size: 18px;
            color: black;
            margin-top: 40px;
            line-height: 1.8;
            font-style: italic;
        }
    }

    .right {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .carousel-image {
        width: 100%;
        /* 让图片宽度自适应 */
        height: 100%;
        /* 让图片高度自适应 */
        object-fit: cover;
        /* 保持图片比例，确保不裁剪 */
    }

    .el-carousel {
        width: 98%;
        /* 容器宽度自适应 */
        height: 95%;
        /* 可以根据需要调整高度 */
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

    }

}
</style>