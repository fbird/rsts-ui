<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Menu } from '@element-plus/icons-vue';

const router = useRouter();
const showDrawer = ref(false);


const toPage = (index: string) => {
  showDrawer.value = false;
  router.push({ path: index });
};

const defaultActive = computed(() => {
  const path = router.currentRoute.value.fullPath;
  return path.split('/').slice(0, 2).join('/');
});
</script>

<template>
  <div class="header">
    <div class="left">
      <div class="title-text">
        <div style="font-size: 20px;">RAINBOW STAR</div>
        <div style="font-size: 18px;">TRAINING SERVICES LLC</div>
      </div>
    </div>


    <!-- Mobile Burger -->
    <div class="burger" @click="showDrawer = true">
      <el-icon>
        <Menu />
      </el-icon>
    </div>

    <!-- Mobile Drawer -->
    <el-drawer v-model="showDrawer" direction="ltr" size="220px" title="Menu" :with-header="false">
      <el-menu class="mobile-menu" mode="vertical" :default-active="defaultActive" @select="toPage">
        <el-menu-item index="/about/m">About Us</el-menu-item>
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
    padding-left: 60px;
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

  .burger {
    font-size: 26px;
    color: #fff;
    cursor: pointer;
  }
}
</style>