<template>
    <div class="sec">
        <div class="left">
            <el-carousel trigger="click" style="width: 100%; height: 100%;">
                <el-carousel-item v-for="(item, index) in imgs" :key="index">
                    <el-image :src="item" fit="cover" class="img" />
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="right">
            <div class="contentWrapper">
                <span class="l1">IADC WellSharp Well Servicing Coiled Tubing</span>
                <div class="tags">
                    <el-tag class="client-tag">Individual Candidate</el-tag>
                    <el-tag class="date-tag">2023/12/05 - 2023/12/09</el-tag>
                </div>
                <span class="l2">
                    The IADC WellSharp Well Servicing Coiled Tubing course is a specialized training
                    program for individuals involved in coiled tubing operations, focusing on well control principles
                    and risk management. It is designed for service company equipment operators primarily responsible
                    for managing well control during coiled tubing operations. The course, which is part of the IADC
                    WellSharp program, covers pressure control equipment, barrier philosophy, operational
                    considerations, and emergency procedures specific to coiled tubing.
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const imgs = [
    "/images/1. IADC WellSharp Well Servicing Coiled Tubing Courses, Individual Candidate, Dec 2023/20231201.png",
    "/images/1. IADC WellSharp Well Servicing Coiled Tubing Courses, Individual Candidate, Dec 2023/20231202.png",
    "/images/1. IADC WellSharp Well Servicing Coiled Tubing Courses, Individual Candidate, Dec 2023/20231203.jpg",
    "/images/1. IADC WellSharp Well Servicing Coiled Tubing Courses, Individual Candidate, Dec 2023/20231204.jpg",
];
</script>

<style lang="scss" scoped>
.sec {
    display: flex;
    width: 100%;
    height: 600px;
    padding: 0 40px 0 0;
    box-sizing: border-box;
    background: linear-gradient(135deg, #2e3d96 0%, #1c2757 100%);
    position: relative;
    overflow: hidden;

    .left {
        flex: 1.2;

        .el-carousel {
            width: 100%;
            height: 100%;
            // border-radius: 16px;
            // box-shadow: 0 20px 50px rgba(10, 20, 70, 0.7);
            overflow: hidden;
        }

        .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease, filter 0.3s ease;
            filter: brightness(0.85);
            cursor: pointer;
            // border-radius: 16px;
            // box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
        }

        .img:hover {
            filter: brightness(1);
            transform: scale(1.03);
            box-shadow: 0 25px 60px rgba(0, 0, 60, 0.8);
        }

        ::v-deep(.el-carousel__container) {
            height: 100%;
        }
    }

    .right {
        flex: 0.9;
        display: flex;
        align-items: center;
        justify-content: center;

        .contentWrapper {
            width: 100%;
            max-width: 500px;
            background-color: rgba(28, 39, 87, 0.85);
            border-radius: 20px;
            padding: 40px 40px 40px 50px;
            box-shadow: 0 0 30px rgba(40, 60, 140, 0.7);
            color: #e3e9ff;
            user-select: none;
            display: flex;
            flex-direction: column;
            gap: 30px;

            .l1 {
                font-size: 42px;
                font-weight: 900;
                line-height: 1.15;
                letter-spacing: 1.2px;
                color: #f0f4ff;
            }

            .tags {
    display: flex;
    gap: 22px;

    .client-tag {
        background-color: #355070 !important; /* 稳重的藏蓝 */
        color: #f0f4f8 !important;            /* 柔和浅灰白 */
        border: none !important;
        font-weight: 700;
        font-size: 15px;
        border-radius: 25px;
        padding: 8px 24px;
        cursor: default;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #2c3a63 !important; /* 深一点藏蓝 */
        }
    }

    .date-tag {
        background-color: #f28e2b !important; /* 沉稳橙黄 */
        color: #3e2f00 !important;             /* 深褐色 */
        border: none !important;
        font-weight: 700;
        font-size: 15px;
        border-radius: 25px;
        padding: 8px 24px;
        cursor: default;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #d7760b !important; /* 深一点橙色 */
        }
    }
}

            .l2 {
                font-size: 18px;
                font-style: italic;
                line-height: 1.7;
                color: #cbd1e7;
                font-weight: 400;
                user-select: text;
            }
        }
    }
}
</style>