<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useTokenStore } from '@/stores/token';
import { doLogout } from '@/apis/userApi';
import { Menu } from '@element-plus/icons-vue';

const router = useRouter();
const tokenStore = useTokenStore();

const isMobile = ref(window.innerWidth <= 980);
const showDrawer = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 980;
};

onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile);
});

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
  return path.includes('/admin') ? path : path.split('/').slice(0, 2).join('/');
});
</script>

<template>
  <div class="header">
    <div class="left">
      <div class="title-text">
        <div style="font-size: 20px;">RAINBOW STAR</div>
        <div style="font-size: 18px;">TRAINNING SERVICE LLC</div>
      </div>
    </div>

    <!-- Desktop Menu -->
    <div class="right" v-if="!isMobile">
      <el-menu
        class="el-menu-nav"
        mode="horizontal"
        :ellipsis="false"
        :default-active="defaultActive"
        :collapse-transition="true"
        @select="toPage"
      >
        <el-menu-item index="/home">Home</el-menu-item>
        <el-menu-item index="/course">Courses</el-menu-item>
        <el-menu-item index="/certificates">Certificates</el-menu-item>
        <el-menu-item index="/contact">Contact Us</el-menu-item>
        <el-menu-item index="/about">About Us</el-menu-item>
        <el-menu-item index="/admin/login" v-if="!tokenStore.token">Login</el-menu-item>
        <el-sub-menu index="/admin" v-else>
          <template #title>
            <span>Admin</span>
          </template>
          <el-menu-item index="/admin/certificate">Certificate</el-menu-item>
          <el-menu-item index="/admin/logout">Logout</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>

    <!-- Mobile Burger -->
    <div class="burger" v-else @click="showDrawer = true">
      <el-icon><Menu /></el-icon>
    </div>

    <!-- Mobile Drawer -->
    <el-drawer v-model="showDrawer" direction="ltr" size="220px" title="Menu" :with-header="false">
      <el-menu
        class="mobile-menu"
        mode="vertical"
        :default-active="defaultActive"
        @select="toPage"
      >
        <el-menu-item index="/home">Home</el-menu-item>
        <el-menu-item index="/course">Courses</el-menu-item>
        <el-menu-item index="/certificates">Certificates</el-menu-item>
        <el-menu-item index="/contact">Contact Us</el-menu-item>
        <el-menu-item index="/about">About Us</el-menu-item>
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
  height: 80px;
  width: 100%;
  max-width: 1230px;
  margin: auto;
  padding: 0 16px;
  box-sizing: border-box;

  .left {
    display: flex;
    align-items: center;
    padding-left: 110px;
    background-image: url(/images/logo.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    text-shadow: 0px 2px 6px rgba(6, 15, 34, 0.54);
    font-weight: bold;
    color: #fff;

    .title-text {
      text-align: center;
      color: #fff;
    }
  }

  .right {
    display: flex;
    align-items: center;

    .el-menu-nav {
      height: 80px;

      ::v-deep(.el-menu-item) {
        font-size: 18px;
        color: #fff !important;
        background: transparent;
      }

      ::v-deep(.el-sub-menu__title) {
        font-size: 18px;
        color: #fff !important;
      }

      .el-menu-item:hover,
      .el-sub-menu:hover {
        background-color: transparent;
        color: #fff !important;
        border-bottom: 2px solid #fff;
      }

      .el-menu-item.is-active,
      .el-sub-menu.is-active {
        background-color: #2e3d96;
        border-bottom: 2px solid #fff;
        color: rgb(243, 198, 50) !important;
      }

      ::v-deep(.el-sub-menu.is-active .el-sub-menu__title) {
        border-bottom: none;
      }
    }
  }

  .burger {
    display: none;
    font-size: 26px;
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 980px) {
    .right {
      display: none;
    }

    .burger {
      display: block;
    }

    .left {
      padding-left: 60px;
      background-size: 60px auto;
    }
  }
}
</style>