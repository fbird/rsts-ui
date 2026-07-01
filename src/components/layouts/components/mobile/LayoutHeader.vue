<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTokenStore } from '@/stores/token';
import { doLogout } from '@/apis/userApi';
import { Menu } from '@element-plus/icons-vue';

const router = useRouter();
const tokenStore = useTokenStore();
const showDrawer = ref(false);


const toPage = (index: string) => {
  showDrawer.value = false;
  if (index === '/admin/logout') {
    doLogout(null).then(() => {
      tokenStore.callbackUrl = null;
      tokenStore.token = null;
      router.push({ name: 'home' });
    });
  } else {
    router.push({ path: index });
  }
};

const defaultActive = computed(() => {
  const path = router.currentRoute.value.fullPath;
  return path.split('/').slice(0, 2).join('/');
});
</script>

<template>
  <div class="header">
    <button class="left" type="button" @click="toPage('/home')" aria-label="Go to homepage">
      <div class="title-text">
        <span>RSTS</span>
        <strong>Rainbow Star Training Services</strong>
      </div>
    </button>


    <!-- Mobile Burger -->
    <div class="burger" @click="showDrawer = true">
      <el-icon>
        <Menu />
      </el-icon>
    </div>

    <!-- Mobile Drawer -->
    <el-drawer v-model="showDrawer" direction="ltr" size="220px" title="Menu" :with-header="false">
      <el-menu class="mobile-menu" mode="vertical" :default-active="defaultActive" @select="toPage">
        <el-menu-item index="/home">Home</el-menu-item>
        <el-menu-item index="/course">Courses</el-menu-item>
        <el-menu-item index="/certificates">Certificates</el-menu-item>
        <el-menu-item index="/about/m">About Us</el-menu-item>
        <el-menu-item index="/contact">Contact Us</el-menu-item>
        <el-menu-item index="/admin/login" v-if="!tokenStore.token">Login</el-menu-item>
        <el-sub-menu index="/admin" v-else>
          <template #title>Admin</template>
          <el-menu-item index="/admin/certificate">Certificate</el-menu-item>
          <el-menu-item index="/admin/logout">Logout</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-drawer>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 100%;
  max-width: 1230px;
  margin: auto;
  padding: 0 16px;
  box-sizing: border-box;

  .left {
    display: flex;
    align-items: center;
    min-height: 48px;
    padding: 0 0 0 58px;
    border: 0;
    background-color: transparent;
    background-image: url(/images/logo.jpg.webp);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 46px auto;
    color: #fff;
    cursor: pointer;
    font: inherit;

    .title-text {
      display: grid;
      gap: 2px;
      text-align: left;
      color: #fff;

      span {
        font-family: Georgia, "Times New Roman", serif;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: 1;
      }

      strong {
        color: rgba(255, 255, 255, 0.66);
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.08em;
        line-height: 1.2;
        max-width: 180px;
        text-transform: uppercase;
      }
    }
  }

  .burger {
    font-size: 26px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
