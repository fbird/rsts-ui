<script setup lang="ts">

import Header from './components/LayoutHeader.vue';
import Footer from './components/LayoutFooter.vue';

</script>

<template>
    <el-container id="layout">
        <el-header class="layoutHeader">
            <Header />
        </el-header>
        <el-main class="layoutContent">
            <div class="contentWrapper">
                <div class="fullSecContent">
                    <router-view name="fullSecContent"></router-view>
                </div>
                <div class="content">
                    <router-view />
                </div>
            </div>
            <div class="footerWrapper">
                <Footer />
            </div>

        </el-main>
    </el-container>
</template>

<style scoped lang="scss">
#layout {
    height: 100vh;
    width: 100%;
    background-color: #fff;

    .layoutHeader {
        width: 100%;
        background-color: #2e3d96;
        height: 80px;
    }

    .layoutContent {
        width: 100%;
        padding: 0;
        overflow-y: auto;

        .contentWrapper {
            width: 100%;
            background-color: #fff;
            min-height: calc(100vh - 80px - 150px); // header + footer

            .fullSecContent {
                width: 100%;
                margin: auto;
                // padding: 0 16px;
                box-sizing: border-box;
            }

            .content {
                width: 100%;
                // max-width: 1230px;
                margin: auto;
                padding: 0 16px;
                box-sizing: border-box;
            }
        }

        .footerWrapper {
            width: 100%;
            height: 400px;
            background-color: #2b3445;
        }
    }

    // ✅ 响应式：小屏幕优化
    @media (max-width: 768px) {
        .layoutHeader {
            height: 60px;
        }

        .layoutContent {
            .contentWrapper {
                min-height: calc(100vh - 60px - 300px); // 可根据移动端 footer 适当调节高度
            }

            .footerWrapper {
                height: 300px;
            }
        }
    }
}
</style>
