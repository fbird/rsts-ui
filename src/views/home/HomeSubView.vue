<script setup lang="ts">
import v1 from '/video/v1.mp4';
import v1Poster from '/images/v1-poster.png';
</script>

<template>

  <video width="100%" autoplay :poster="v1Poster" :src="v1" muted></video>
  <div>
    <h1>Welcome To RSTS Academy</h1>
    <span>
      Rainbow Star Training Service LLC, is a leading integrated training service supplier in the oil and gas industry
      to provide a full range and levels of in-depth training programs based on the extensive, proprietary research. We
      are authorized to issue the general certificate of attendance and international accreditation qualification
      certificate. A regular competency assessment is carried out to revise the training plan and make trainees fully
      equipped with enhancing professional attitude, skills and expertise knowledge to face the challenges of their role
      at the work. We aim to constantly be creative and innovative in our training programs to set a peerless benchmark.
    </span>
  </div>
</template>
