<script setup lang="ts">

import Header from './components/mobile/LayoutHeader.vue';
import Footer from './components/mobile/LayoutFooter.vue';

</script>

<template>
    <el-container id="layout">
        <el-header class="layoutHeader">
            <Header />
        </el-header>
        <el-main class="layoutContent">
            <div class="contentWrapper">
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
            height: 620px;
            background-color: #2b3445;
        }
    }
}
</style>
