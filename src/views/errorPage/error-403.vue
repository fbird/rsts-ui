<template>
  <div id="error-page-403">
    <div class="content">
      <img src="@/assets/svgs/error_403.svg" alt="" />
      <div class="m-t-32 text">Authentication Error！</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#error-page-403 {
  // height: calc(100vh - 0.6rem);
  // min-height: calc(100vh - 0.6rem);
  height: 100%;
  box-sizing: border-box;
  overflow: initial;
  // background-color: #fff;
  // padding-top: 2.09rem;
  display: flex;
  align-items: center;

  .content {
    text-align: center;
    margin: 0 auto;
    user-select: none;
    .text {
      color: #999;
    }
    img {
      opacity: 0.6;
    }
  }
}
</style>
