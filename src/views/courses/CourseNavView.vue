<script setup lang="ts">


</script>

<template>
  <div class="courseNav">
    <div class="overlay"></div>
    <div class="navTitle">
      <span>Curriculum</span>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.courseNav {
  position: relative;
  /* 让 .navTitle 和 .overlay 在 courseNav 中定位 */
  height: 200px;
  background-image: url(/images/trainingImages/WellServiceTraining2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  /* 让背景图片完全覆盖容器 */
  background-position: center;
}

.overlay {
  position: absolute;
  /* 遮罩层覆盖背景图片 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  /* 设置遮罩的颜色和透明度 */
  z-index: 1;
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
  z-index: 2;
  /* 确保文字在遮罩层上面 */
  span{
    margin-left: 40px;
  }
}
</style>