<template>
    <div class="sec">
        <div class="left">


        </div>

        <div class="right">
            <el-carousel trigger="click" height="100%">
                <el-carousel-item key="1">
                    <el-image :src="wat" fit="cover" class="carousel-image" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="contentCover">
            <div class="contentWrapper">
                <span class="l1">Work At Height</span>
                <span class="l2">Work at Height Training is a vital program that equips individuals with the knowledge
                    and skills to perform tasks safely and effectively at elevated positions. With the potential for
                    severe accidents in this work environment, this training is fundamental to ensuring workplace
                    safety.</span>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import wat from "/images/trainingImages/wah/workAtHeight.jpg"

</script>

<style lang="scss" scoped>
.sec {
    width: 100%;
    height: 550px;
    background-color: #fff;
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
        width: 480px;
        height: 100%;
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