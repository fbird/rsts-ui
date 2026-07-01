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
    background-color: #f5f7f4;

    .layoutHeader {
        width: 100%;
        background-color: #071827;
        height: 96px;
        padding: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }

    .layoutContent {
        width: 100%;
        padding: 0;
        overflow-y: auto;

        .contentWrapper {
            width: 100%;
            background-color: #f5f7f4;
            min-height: calc(100vh - 96px - 150px); // header + footer

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
                padding: 0;
                box-sizing: border-box;
            }
        }

        .footerWrapper {
            width: 100%;
            min-height: 360px;
            height: auto;
            background-color: #071827;
        }
    }

    // ✅ 响应式：小屏幕优化
    @media (max-width: 768px) {
        .layoutHeader {
            height: 64px;
        }

        .layoutContent {
            .contentWrapper {
                min-height: calc(100vh - 64px - 300px); // 可根据移动端 footer 适当调节高度
            }

            .footerWrapper {
                min-height: 300px;
            }
        }
    }
}
</style>
