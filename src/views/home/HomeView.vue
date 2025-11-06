<script setup lang="ts">
import { ref } from 'vue';
import v1 from '/video/v1.mp4';
import videoSrc from '/video/v2.mp4';
import v1Poster from '/images/v1-poster.png';
import v2Poster from "/images/image.png";
import profile from "/files/RSTS - Company Profile v2.pdf";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";


import DetAPost from './components/DetAPost.vue'
import IwcfL3 from './components/IwcfL3.vue'
import WcAWst from './components/WcAWst.vue'
import IwcfDwc from './components/IwcfDwc.vue'
import H2S from './components/H2S.vue'
import IadaOilAndGasRep from "./components/IadcOilAndGasRep.vue"
import IadcWellSharp from "./components/IadcWellSharp.vue"

library.add(faArrowRightLong);

const openProfile = () => {

  window.open(profile, "_blank");
}

const banners = ref<Array<any>>(
  [
    { img: "/images/rolling/1.png" },
    { img: "/images/rolling/2.png" },
    { img: "/images/rolling/3.png" },
    { img: "/images/rolling/4.png" },
    { img: "/images/rolling/5.png" },
    { img: "/images/rolling/6.png" },
    { img: "/images/rolling/7.png" },
    { img: "/images/rolling/8.png" },
    { img: "/images/rolling/9.png" },
    { img: "/images/rolling/10.png" },
    { img: "/images/rolling/11.png" },
    { img: "/images/rolling/12.png" },
    { img: "/images/rolling/13.png" }
  ]
)

const dialogVisible = ref(false);
const videoPlayer = ref<any>();

const playVideo = () => {
  dialogVisible.value = true;
};

// 点击视频切换播放状态
const handleDialogClose = () => {
  videoPlayer.value.pause(); // 暂停视频
  videoPlayer.value.currentTime = 0; // 重置视频播放进度
};

</script>

<template>
  <div class="home-container">
    <!-- 轮播图 -->
    <el-carousel height="320px" indicator-position="outside" type="card">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <el-image style="width: 100%; height: 100%" :src="item.img" fit="scale-down" show-progress>
        </el-image>
      </el-carousel-item>
    </el-carousel>

    <div class="sec1">
      <video width="100%" autoplay muted loop :poster="v1Poster">
        <source :src="v1" type="video/mp4">
      </video>
      <!-- <video width="100%" :src="v1" autoplay muted loop /> -->
      <div class="sec1Wrapper">
        <div class="sec1Title">
          <span class="level1Title">Welcome To RSTS Academy</span>
          <p class="welcomContent">
            Rainbow Star Training Services LLC, is a leading integrated training service supplier in the oil and gas
            industry to provide a full range and levels of in-depth training programs based on the extensive,
            proprietary
            research. We are authorized to issue the general certificate of attendance and international accreditation
            qualification certificate. A regular competency assessment is carried out to revise the training plan and
            make
            trainees fully equipped with enhancing professional attitude, skills and expertise knowledge to face the
            challenges of their role at the work. We aim to constantly be creative and innovative in our training
            programs
            to set a peerless benchmark.
          </p>
          <el-button @click="openProfile">
            <span style="margin-right: 5px;">
              Profile
            </span>
            <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
          </el-button>
        </div>

      </div>
    </div>

    <div class="secTWrapper">
      <div class="secTB">
        <div class="secTBLeft">
          <el-image :src="v2Poster" class="secTBLeftImg"></el-image>
        </div>

        <div class="secTBRight">
          <span class="secDesTitle">Integrated Training Sollutions and Service for Oil and Gas Industry</span>
        </div>
      </div>
      <el-button class="play-button" type="primary" @click="playVideo" circle size="large">
        <el-icon>
          <VideoPlay />
        </el-icon>
      </el-button>
    </div>


    <DetAPost />
  <IwcfL3 />
    <IwcfDwc />
    <WcAWst />
        <H2S />
    <IadaOilAndGasRep />
    <IadcWellSharp />
  </div>

    <el-dialog v-model="dialogVisible" title="Integrated Training Sollutions and Service for Oil and Gas Industry"
      @close="handleDialogClose" align-center :style="{ padding: '8px' }" class="video-dialog" width="70%">
      <video v-if="dialogVisible" ref="videoPlayer" :src="videoSrc" autoplay controls class="video-player"></video>
    </el-dialog>
</template>


<style scoped>
::v-deep(.el-carousel__arrow) {
  border-radius: 0%;
}

.home-container {
  background: #f5f6fa;
}

.collapse-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.sec1 {
  position: relative;
  width: 100%;
  height: 900px;
  margin: auto;
  display: flex;
  flex-direction: row;
  /* 让 video 和 sec1Title 垂直排列 */
  align-items: center;
  text-align: center;


  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .sec1Wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* 让标题区域与 video 高度相同 */
    display: flex;
    flex-direction: column;
    align-items: center;

    background: rgba(0, 0, 0, 0.2);

    .sec1Title {
      width: 1230px;
      margin: 200px 0px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* 垂直居中 */
      align-items: left;
      /* 水平居中 */
      color: white;
      text-align: left;

      .level1Title {
        font-weight: 700;
        font-size: 48px;
      }

      .welcomContent {
        width: 800px;
        margin-top: 30px;
        font-size: 18px;
        font-weight: bold;
        line-height: 1.8;
        font-style: italic;
      }

      .el-button {
        width: 120px;
        background-color: #22cc99 !important;
        border-color: #22cc99 !important;
        height: 50px;
        margin-top: 40px;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        padding: 20px;
      }
    }

  }
}

.secTWrapper {
  width: 100%;
  height: 600px;
  background-color: rgb(46, 61, 150);
  position: relative;
  text-align: center;

  .secTB {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .secTBLeft {
      width: 50%;
      height: 100%;

      .secTBLeftImg {
        height: 100%;
        width: 100%;
      }
    }

    .secTBRight {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      text-align: center;


      .secDesTitle {
        width: 615px;
        font-size: 28px;
        font-weight: 800;
        line-height: 50px;
        color: #fff;
        display: block;
        padding-left: 10px;
      }
    }
  }

  .play-button {
    position: absolute;
    background-color: rgb(255, 255, 255, 0.1);
    color: white;
    border: none;
    font-size: 32px;
    width: 120px;
    height: 120px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .el-icon {
      font-size: 100px;
    }
  }
}

.video-dialog {
  height: 70vh;
  border-radius: 10px;
  display: 'flex';
  align-items: center;
  justify-content: center;

  ::v-deep(.el-dialog__body) {
    padding: 0px !important;
    /* 移除对话框的内边距 */
  }

  .video-player {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}
</style>