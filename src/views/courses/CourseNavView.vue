<script setup lang="ts">


</script>

<template>
  <div class="courseNav">
    <div class="overlay"></div>
    <div class="navTitle">
      <div class="navTitleShell">
        <span>Curriculum</span>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.courseNav {
  position: relative;
  /* 让 .navTitle 和 .overlay 在 courseNav 中定位 */
  height: 260px;
  overflow: hidden;
  isolation: isolate;
  background-image: url(/images/WellServiceTraining2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  /* 让背景图片完全覆盖容器 */
  background-position: center;

  &::before {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(255, 255, 255, 0.11) 1px, transparent 1px),
      linear-gradient(180deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
    background-size: 96px 100%, 100% 64px;
    content: "";
    opacity: 0.58;
    z-index: 1;
  }

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 5px;
    background: linear-gradient(90deg, transparent 0%, #c9a35e 18%, #1c8f84 50%, #c9a35e 82%, transparent 100%);
    content: "";
    z-index: 3;
  }
}

.overlay {
  position: absolute;
  /* 遮罩层覆盖背景图片 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(135deg, rgba(7, 21, 34, 0.82) 0%, rgba(7, 21, 34, 0.62) 52%, rgba(1, 54, 99, 0.7) 100%);
  /* 设置遮罩的颜色和透明度 */
  z-index: 2;
  /* 遮罩层的堆叠顺序 */
}

.navTitle {
  width: 100%;
  position: absolute;
  /* 使文字层位于图片上方 */
  top: 50%;
  /* 垂直居中 */
  left: 50%;
  /* 水平居中 */
  transform: translate(-50%, -50%);
  /* 完全居中 */
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  /* 设置文字颜色为白色 */
  z-index: 4;
  /* 确保文字在遮罩层上面 */

  .navTitleShell {
    width: min(1240px, calc(100% - 56px));
    margin: 0 auto;
    text-align: left;
  }

  span {
    display: inline-block;
    position: relative;
    padding: 0 28px 18px;
    text-shadow: 0 14px 34px rgba(0, 0, 0, 0.28);

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, transparent, #c9a35e 18%, #ffffff 50%, #c9a35e 82%, transparent);
      content: "";
    }
  }
}

@media (max-width: 820px) {
  .courseNav {
    height: 210px;
  }

  .navTitle {
    font-size: 34px;

    .navTitleShell {
      width: min(100% - 32px, 560px);
    }
  }
}
</style>
