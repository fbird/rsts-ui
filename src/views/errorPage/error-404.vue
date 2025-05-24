<template>
  <div id="error-page-404">
    <div class="content">
      <img src="@/assets/svgs/error_404.svg" alt="" />
      <div class="m-t-32 text">Resource Not Found！</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#error-page-404 {
  // height: calc(100vh - 1.3rem);
  height: 100%;
  // min-height: calc(100vh - 1.3rem);
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
