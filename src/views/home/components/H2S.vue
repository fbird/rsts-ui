<template>
    <div class="sec">
        <div class="left">
            <el-carousel trigger="click" height="100%">
                <el-carousel-item key="1">
                    <el-image :src="h2s1" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="3">
                    <el-image :src="h2s3" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="4">
                    <el-image :src="h2s4" fit="cover" class="carousel-image" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="right">

        </div>
        <div class="contentCover">
            <div class="contentWrapper">
                <span class="l1">H2S Awareness Training</span>
                <span class="l2">The course is intended for workers that work near or in proximity to the toxic gas
                    hydrogen sulphide (H2S). Please note that this is strictly an awareness course. Some employers may
                    only require hydrogen sulphide awareness training, while others may require more in-depth
                    administrative controls, engineering controls, and safety training, such as H2S Alive, which
                    provides more in-depth safety training and features a practical training component.</span>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import h2s1 from "/images/trainingImages/h2s/H2S1.gif"
import h2s2 from "/images/trainingImages/h2s/H2S2.gif";
import h2s3 from "/images/trainingImages/h2s/H2S3.jpg";
import h2s4 from "/images/trainingImages/h2s/H2S4.jpg";

</script>

<style lang="scss" scoped>
.sec {
    width: 100%;
    height: 550px;
    // background-color: rgba(105, 179, 254, 0.09);
    background-color: #303E9F;
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
        color: #FFF;
        float: right;

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