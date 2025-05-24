<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useTokenStore } from '@/stores/token'
import { doLogout } from '@/apis/userApi'

const router = useRouter()

const tokenStore = useTokenStore();
const toPage = (index: string) => {
    if (index == '/admin/logout') {
        doLogout(null).then(() => {
            tokenStore.callbackUrl = null;
            tokenStore.token = null;
            router.push({ name: 'home' })
        })
    } else {
        router.push({ path: index })
    }


}

const defaultActive = computed(() => {
    if(router.currentRoute.value.fullPath.includes("/admin")){
        return router.currentRoute.value.fullPath;
    }

    return router.currentRoute.value.fullPath.split("/").slice(0, 2).join("/");

})


</script>

<template>
    <div class="header">
        <div class="left">
            <div class="title-text">
                <div style="font-size: 20px;">RAINBOW STAR </div>
                <div style="font-size: 18px;">TRAINNING SERVICE LLC</div>
            </div>
        </div>
        <div class="right">
            <el-menu class="el-menu-nav" mode="horizontal" :ellipsis="false" :default-active="defaultActive"
                :collapse-transition="true" @select="toPage">
                <el-menu-item index="/home">Home</el-menu-item>
                <el-menu-item index="/course">Courses</el-menu-item>
                <el-menu-item index="/certificates">Certificates</el-menu-item>
                <el-menu-item index="/contact">Contact Us</el-menu-item>
                <el-menu-item index="/about">About Us</el-menu-item>
                <el-menu-item index="/admin/login" v-if="!tokenStore.token">Login</el-menu-item>
                <el-sub-menu index="/admin" v-else="tokenStore.token">
                    <template #title>
                        <span>Admin</span>
                    </template>
                    <el-menu-item index="/admin/certificate">Certificate
                    </el-menu-item>
                    <el-menu-item index="/admin/logout">Logout
                    </el-menu-item>
                </el-sub-menu>

            </el-menu>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 1230px;
    margin: auto;

    .left {
        display: flex;
        align-items: center;
        padding-left: 110px;
        background-image: url(/images/logo.jpg);
        background-repeat: no-repeat;
        background-size: contain;
        text-shadow: 0px 2px 6px rgba(6, 15, 34, 0.54);
        font-family: apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        font-weight: bold;
        color: #fff;
        letter-spacing: 0px;

        .title-text {
            text-align: center;
            color: #fff;
        }

    }

    .right {
        .el-menu-nav {
            height: 80px;

            ::v-deep().el-menu-item {
                font-size: 18px;
                font-weight: 400;
                color: #fff !important;
                background: transparent;
            }

            ::v-deep().el-sub-menu__title {
                font-size: 18px;
                font-weight: 400;
                color: #fff !important;
            }

            .el-menu-item:hover {
                // color: #2e3d96;
                background-color: transparent;
                color: #fff !important;
                border-bottom: 2px solid #fff;
            }

            .el-sub-menu:hover {
                background-color: transparent;
                color: #fff !important;
                border-bottom: 2px solid #fff;
            }

            .el-sub-menu.is-active {
                background-color: #2e3d96;
                border-bottom: 2px solid #fff;
                color: rgb(243, 198, 50) !important;
            }

            .el-menu-item.is-active {
                background-color: #2e3d96;
                border-bottom: 2px solid #fff;
                color: rgb(243, 198, 50) !important;
            }

            ::v-deep().el-sub-menu.is-active .el-sub-menu__title {
                border-bottom: none;
            }
        }

    }

}
</style>