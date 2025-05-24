<template>
    <div class="sec">
        <div class="left">
        </div>

        <div class="right">
            <el-carousel trigger="click" height="100%">
                <el-carousel-item key="1">
                    <el-image :src="DrillingTraning1" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="2">
                    <el-image :src="DrillingTraning2" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="3">
                    <el-image :src="DrillingTraning3" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="4">
                    <el-image :src="DrillingTraning4" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="5">
                    <el-image :src="DrillingTraning5" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="6">
                    <el-image :src="DrillingTraning6" fit="cover" class="carousel-image" />
                </el-carousel-item>
                <el-carousel-item key="7">
                    <el-image :src="DrillingTraning7" fit="cover" class="carousel-image" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="contentCover">
            <div class="contentWrapper">
                <span class="l1">Drilling Training</span>
                <span class="l2">In-Depth knowledge and hands-on experience in oil and gas extraction. Participants will
                    learn
                    about modern drilling techniques, safety procedures, well control, and equipment operation to ensure
                    efficient
                    and safe drilling operations.</span>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import DrillingTraning1 from "/images/trainingImages/drilling/Drilling Traning (1).jpg";
import DrillingTraning2 from "/images/trainingImages/drilling/Drilling Traning (2).jpg";
import DrillingTraning3 from "/images/trainingImages/drilling/Drilling Traning (3).jpg";
import DrillingTraning4 from "/images/trainingImages/drilling/Drilling Traning (4).jpg";
import DrillingTraning5 from "/images/trainingImages/drilling/Drilling Traning (5).jpg";
import DrillingTraning6 from "/images/trainingImages/drilling/Drilling Traning (6).jpg";
import DrillingTraning7 from "/images/trainingImages/drilling/Drilling Traning (7).jpg";

</script>

<style lang="scss" scoped>
.sec {
    width: 100%;
    height: 700px;
    // background-color: rgba(105, 179, 254, 0.09);
    background-color: #e9ecef;
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