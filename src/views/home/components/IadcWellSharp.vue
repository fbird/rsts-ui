<template>
    <div class="sec">
        <div class="left">


        </div>

        <div class="right">
            <el-carousel trigger="click" height="100%">
                <el-carousel-item key="1">
                    <el-image :src="iadcWellSharp" fit="cover" class="carousel-image" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="contentCover">
            <div class="contentWrapper">
                <span class="l1">IADC WellSharp Well Servicing Wireline
                </span>
                <span class="l2">The IADC WellSharp Well Servicing Wireline course is essential training for those
                    primarily responsible for wireline operational processes of well control.
                    The course has been designed for wireline personnel including Field Engineers, Senior Field
                    Engineers, and Supervisors (Cased Hole/Open Hole/Pip Recovery/Production Logging/TCP).</span>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import iadcWellSharp from "/images/trainingImages/iadcWellSharp/IADC WellSharp WELL SERVICING COURSES-Wireline.jpg"

</script>

<style lang="scss" scoped>
.sec {
    width: 100%;
    height: 550px;
    background-color: #303E9F;
    background-image: url(/images/section-1.png);
    background-position-x: 0px;
    background-position-y: 0px;
    background-repeat: no-repeat;
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
        width: 600px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;

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
        border-radius: 10px 10px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

    }

}
</style>