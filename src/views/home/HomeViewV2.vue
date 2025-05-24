<script setup lang="ts">
import v1 from '/video/v1.mp4';
import videoSrc from '/video/v2.mp4';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import profile from "/files/RSTS - Company Profile v2.pdf";
import v2Poster from "/images/v2-poster.png";
import { ref } from 'vue';
import DrillingTraning1 from "/images/trainingImages/Drilling Traning (1).jpg";
import DrillingTraning2 from "/images/trainingImages/Drilling Traning (2).jpg";
import DrillingTraning3 from "/images/trainingImages/Drilling Traning (3).jpg";
import DrillingTraning4 from "/images/trainingImages/Drilling Traning (4).jpg";
import DrillingTraning5 from "/images/trainingImages/Drilling Traning (5).jpg";
import DrillingTraning6 from "/images/trainingImages/Drilling Traning (6).jpg";
import DrillingTraning7 from "/images/trainingImages/Drilling Traning (7).jpg";
import IWCFWellConrolTraining1 from "/images/trainingImages/IWCF Well Conrol Training (1).jpg";
import IWCFWellConrolTraining2 from "/images/trainingImages/IWCF Well Conrol Training (2).jpg";
import IWCFWellConrolTraining3 from "/images/trainingImages/IWCF Well Conrol Training (3).jpg";
import IWCFWellConrolTraining4 from "/images/trainingImages/IWCF Well Conrol Training (4).jpg";
import IWCFWellConrolTraining5 from "/images/trainingImages/IWCF Well Conrol Training (5).jpg";


library.add(faArrowRightLong);

const openProfile = () => {

  window.open(profile, "_blank");
}

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
  <div class="sec1">
    <video width="100%" :src="v1" autoplay muted loop />
    <div class="sec1Wrapper">
      <div class="sec1Title">
        <span class="level1Title">Welcome To RSTS Academy</span>
        <p class="welcomContent">
          Rainbow Star Training Service LLC, is a leading integrated training service supplier in the oil and gas
          industry to provide a full range and levels of in-depth training programs based on the extensive, proprietary
          research. We are authorized to issue the general certificate of attendance and international accreditation
          qualification certificate. A regular competency assessment is carried out to revise the training plan and make
          trainees fully equipped with enhancing professional attitude, skills and expertise knowledge to face the
          challenges of their role at the work. We aim to constantly be creative and innovative in our training programs
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

  <div class="sec2">
    <div class="sec2Wrapper">
      <div class="thumbnail">
        <el-image :src="v2Poster" class="video-thumbnail"></el-image>
        <el-button class="play-button" type="primary" @click="playVideo" circle size="large">
          <el-icon>
            <VideoPlay />
          </el-icon>
        </el-button>
      </div>
      <div class="secDes">
        <span class="secDesTitle">Integrated Training Sollutions and Service for Oil and Gas Industry</span>
        <h2></h2>
      </div>
    </div>
  </div>

  <div class="secRoll">
    <div class="secRollWrapper">
      <div class="secRollDes secRollDecLeft">
        <span class="secRollDesTitle">Drilling Training</span>
        <span class="secRollSubDesTitle">In-Depth knowledge and hands-on experience in oil and gas extraction.
          Participants will learn about modern drilling techniques, safety procedures, well control, and equipment
          operation to ensure efficient and safe drilling operations.</span>
      </div>
      <div class="secRollContent secRollContentLeft">
        <el-carousel trigger="click" height="600px"> <!-- 设置carousel的固定高度 -->
          <el-carousel-item key="1">
            <el-image :src="DrillingTraning1" fit="cover" class="carousel-image" />
          </el-carousel-item>
          <el-carousel-item key="2">
            <el-image :src="DrillingTraning2" fit="cover" class="carousel-image" />
          </el-carousel-item>
          <el-carousel-item key="3">
            <el-image :src="DrillingTraning3" fit="cover" class="carousel-image" />
          </el-carousel-item>
          <el-carousel-item key="4">
            <el-image :src="DrillingTraning4" fit="cover" class="carousel-image" />
          </el-carousel-item>
          <el-carousel-item key="5">
            <el-image :src="DrillingTraning5" fit="cover" class="carousel-image" />
          </el-carousel-item>
          <el-carousel-item key="6">
            <el-image :src="DrillingTraning6" fit="cover" class="carousel-image" />
          </el-carousel-item>
          <el-carousel-item key="7">
            <el-image :src="DrillingTraning7" fit="cover" class="carousel-image" />
          </el-carousel-item>
        </el-carousel>
      </div>

    </div>
  </div>

  <div class="secRoll secRollBlue">
    <div class="secRollWrapper">
      <div class="secRollContent secRollContentRight">
        <el-carousel trigger="click" height="600px"> <!-- 设置carousel的固定高度 -->
          <el-carousel-item key="1">
            <el-image :src="IWCFWellConrolTraining1" fit="cover" class="carousel-image" />
          </el-carousel-item>
          <el-carousel-item key="2">
            <el-image :src="IWCFWellConrolTraining2" fit="cover" class="carousel-image" />
          </el-carousel-item>
          <el-carousel-item key="3">
            <el-image :src="IWCFWellConrolTraining3" fit="cover" class="carousel-image" />
          </el-carousel-item>
          <el-carousel-item key="4">
            <el-image :src="IWCFWellConrolTraining4" fit="cover" class="carousel-image" />
          </el-carousel-item>
          <el-carousel-item key="5">
            <el-image :src="IWCFWellConrolTraining5" fit="cover" class="carousel-image" />
          </el-carousel-item>

        </el-carousel>
      </div>

      <div class="secRollDes secRollDecRight">
        <span class="secRollDesTitle" style="color: #fff">IWCF Well Conrol Training</span>
        <span class="secRollSubDesTitle" style="color: #fff">Gain hands-on experience in well control operations with
          our IWCF Well Control Training. Participants will use industry-standard simulators to practice pressure
          control, kick detection, and shut-in procedures, ensuring readiness for real-world well control
          scenarios.</span>
      </div>

    </div>
  </div>


  <el-dialog v-model="dialogVisible" title="Integrated Training Sollutions and Service for Oil and Gas Industry"
    @close="handleDialogClose" align-center :style="{ padding: '8px' }" class="video-dialog" width="70%">
    <video v-if="dialogVisible" ref="videoPlayer" :src="videoSrc" autoplay controls class="video-player"></video>
  </el-dialog>
</template>


<style lang="scss" scoped>
.level1Title {
  font-weight: 700;
  font-size: 48px;
}

.sec1 {
  position: relative;
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: row;
  /* 让 video 和 sec1Title 垂直排列 */
  align-items: center;
  text-align: center;


  video {
    object-fit: cover;
    width: 100%;
    height: 1000px;
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
      // margin: auto;

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

.sec2 {
  width: 100%;
  height: 800px;
  background-color: rgb(46, 61, 150);
  // background-image: url(/images/v2-poster.png);
  background-size: 100% auto;
  background-repeat: no-repeat;

  .sec2Wrapper {
    width: 1230px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: left;
    /* 让两个 div 之间有间隔 */
    align-items: center;

    .thumbnail {
      width: 60%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .secDes {
      width: 40%;
      position: relative;
      padding-left: 10px;
      text-align: center;
      color: #fff;
    }

    .secDesTitle {
      font-size: 28px;
      font-weight: 800;
      line-height: 50px;
      color: #fff;
    }

    .video-thumbnail {
      width: 100%;
      height: 530px;
      // max-width: 600px;
      border-radius: 10px;
    }

    .play-button {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      font-size: 24px;
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;

      .el-icon {
        font-size: 70px;
      }
    }


  }
}

.secRollBlue {
  background-color: #003366 !important;
}

.secRoll {
  width: 100%;
  height: 600px;
  background-color: rgba(105, 179, 254, 0.09);

  .secRollWrapper {
    width: 1230px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: left;
    /* 让两个 div 之间有间隔 */
    align-items: center;
    // padding: 10px 0px;


    .secRollDecLeft {
      padding-right: 30px;
    }

    .secRollDecRight {
      padding-left: 30px;
      color: #fff !important;
    }

    .secRollDes {
      width: 40%;
      position: relative;
      text-align: left;
      color: black;
      display: flex;
      flex-direction: column;


      .secRollDesTitle {
        font-size: 32px;
        font-weight: 800;
        color: black;
      }

      .secRollSubDesTitle {
        font-size: 18px;
        color: black;
        margin-top: 10px;
        line-height: 1.8;
        font-style: italic;
      }
    }

    .secRollContent {
      width: 60%;

      .carousel-image {
        width: 100%;
        /* 让图片宽度自适应 */
        height: 100%;
        /* 让图片高度自适应 */
        object-fit: cover;
        /* 保持图片比例，确保不裁剪 */
      }

      .el-carousel {
        width: 100%;
        /* 容器宽度自适应 */
        height: 520px;
        /* 可以根据需要调整高度 */
        border-radius: 10px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      }
    }

  }
}

.video-dialog {
  height: 70vh;
  border-radius: 10px;
  display: 'flex';
  align-items: center;
  justify-content: center;

  ::deep().el-dialog__body {
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