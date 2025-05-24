<template>
  <div id="error-page-401">
    <div class="content">
      <img src="@/assets/svgs/error_401.svg" alt="" />
      <div class="m-t-32 text">Authorization Error</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#error-page-401 {
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
    img {
      opacity: 0.6;
    }
    .text {
      color: #999;
    }
  }
}
</style>
