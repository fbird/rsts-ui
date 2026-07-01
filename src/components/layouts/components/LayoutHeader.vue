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
    <button class="left" type="button" @click="toPage('/home')" aria-label="Go to homepage">
      <div class="title-text">
        <span>RSTS</span>
        <strong>Rainbow Star Training Services LLC</strong>
      </div>
    </button>

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
        <el-menu-item index="/about">About Us</el-menu-item>
        <el-menu-item index="/contact">Contact Us</el-menu-item>
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
  height: 96px;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 0 28px;
  box-sizing: border-box;

  .left {
    display: flex;
    align-items: center;
    min-height: 64px;
    padding: 0 0 0 84px;
    border: 0;
    background-color: transparent;
    background-image: url(/images/logo.jpg.webp);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 64px auto;
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
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 0;
        line-height: 1;
      }

      strong {
        color: rgba(255, 255, 255, 0.66);
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.14em;
        line-height: 1.2;
        text-transform: uppercase;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .el-menu-nav {
      height: 96px;
      border: 0;
      background: transparent;

      ::v-deep(.el-menu-item) {
        height: 96px;
        padding: 0 16px;
        border-bottom: 0;
        color: #fff !important;
        background: transparent;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }

      ::v-deep(.el-sub-menu__title) {
        height: 96px;
        border-bottom: 0;
        color: #fff !important;
        background: transparent;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }

      .el-menu-item:hover,
      .el-sub-menu:hover {
        background-color: transparent;
        color: #f2b544 !important;
        border-bottom: 0;
      }

      .el-menu-item.is-active,
      .el-sub-menu.is-active {
        background-color: transparent;
        border-bottom: 0;
        color: #f2b544 !important;
      }

      ::v-deep(.el-sub-menu.is-active .el-sub-menu__title) {
        border-bottom: none;
        color: #f2b544 !important;
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
      min-height: 48px;
      padding-left: 58px;
      background-size: 46px auto;

      .title-text {
        span {
          font-size: 22px;
        }

        strong {
          max-width: 180px;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
