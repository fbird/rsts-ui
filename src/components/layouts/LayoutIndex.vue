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
    // min-height: 7.08rem;
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

        padding: 0px;
        overflow-y: auto;


        .contentWrapper {
            width: 100%;
            background-color: #fff;
            min-height: calc(100vh - 80px - 150px);

            .content {
                width: 1230px;
                margin: auto;
            }

            .fullSecContent {
                width: 100%;
                margin: auto;
            }
        }

        .footerWrapper {
            width: 100%;
            height: 400px;
            background-color: #2b3445;
        }
    }


}
</style>
