<script setup lang="ts">
import { ref, defineAsyncComponent, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faArrowRightLong,
  faPlay,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

const router = useRouter()

const navigateToCatalog = () => {
  router.push('/course/catalog')
}

const LazySection = defineAsyncComponent(() => import('@/components/LazySection.vue'))

const DetAPost = defineAsyncComponent(() => import('./components/DetAPost.vue'))
const IwcfL3 = defineAsyncComponent(() => import('./components/IwcfL3.vue'))
const IwcfDwc = defineAsyncComponent(() => import('./components/IwcfDwc.vue'))
const WcAWst = defineAsyncComponent(() => import('./components/WcAWst.vue'))
const H2S = defineAsyncComponent(() => import('./components/H2S.vue'))
const IadaOilAndGasRep = defineAsyncComponent(() => import('./components/IadcOilAndGasRep.vue'))
const IadcWellSharp = defineAsyncComponent(() => import('./components/IadcWellSharp.vue'))

const v1 = '/video/v1.mp4'
const videoSrc = '/video/v2.mp4'

const v1Poster = computed(() => '/images/v1-poster.png')
const v2Poster = computed(() => '/images/image.png')
const profile = '/files/RSTS - Company Profile v2.pdf'

const dialogVisible = ref(false)
const videoPlayer = ref<HTMLVideoElement>()

const openProfile = () => {
  window.open(profile, '_blank')
}

const playVideo = () => {
  dialogVisible.value = true
}

const handleDialogClose = () => {
  videoPlayer.value?.pause()
  videoPlayer.value!.currentTime = 0
}

const banners = ref([
  { img: '/images/rolling/1.png' },
  { img: '/images/rolling/2.png' },
  { img: '/images/rolling/3.png' },
  { img: '/images/rolling/4.png' },
  { img: '/images/rolling/5.png' },
  { img: '/images/rolling/6.png' },
  { img: '/images/rolling/7.png' },
  { img: '/images/rolling/8.png' },
  { img: '/images/rolling/9.png' },
  { img: '/images/rolling/10.png' },
  { img: '/images/rolling/11.png' },
  { img: '/images/rolling/12.png' },
  { img: '/images/rolling/13.png' },
])

const currentBannerIndex = ref(0)

const visibleBanners = computed(() => {
  const total = banners.value.length
  const prev = (currentBannerIndex.value - 1 + total) % total
  const next = (currentBannerIndex.value + 1) % total
  return [banners.value[prev], banners.value[currentBannerIndex.value], banners.value[next]]
})

const scrollToBanner = (index: number) => {
  currentBannerIndex.value = index
}

const prevBanner = () => {
  const newIndex =
    currentBannerIndex.value === 0 ? banners.value.length - 1 : currentBannerIndex.value - 1
  scrollToBanner(newIndex)
}

const nextBanner = () => {
  const newIndex =
    currentBannerIndex.value === banners.value.length - 1 ? 0 : currentBannerIndex.value + 1
  scrollToBanner(newIndex)
}

const isVisible = ref(false)

onMounted(() => {
  isVisible.value = true
})
</script>

<template>
  <div class="home-container">
    <!-- 轮播图 -->
    <el-carousel height="320px" indicator-position="outside" type="card">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <el-image
          style="width: 100%; height: 100%"
          :src="item.img"
          fit="scale-down"
          show-progress
          loading="lazy"
        >
        </el-image>
      </el-carousel-item>
    </el-carousel>

    <section class="hero-section">
      <div class="hero-video-container">
        <video autoplay muted loop playsinline preload="none" :poster="v1Poster" class="hero-video">
          <source :src="v1" type="video/mp4" />
        </video>
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-line"></span>
          <span class="badge-text">Industry-Leading Training Provider</span>
          <span class="badge-line"></span>
        </div>
        <h1 class="hero-title">
          <span class="title-line">Welcome To</span>
          <span class="title-line highlight">RSTS Academy</span>
        </h1>
        <p class="hero-description">
          Rainbow Star Training Services LLC is a leading integrated training service supplier in
          the oil and gas industry, providing comprehensive in-depth training programs based on
          extensive proprietary research. We are authorized to issue general certificates of
          attendance and international accreditation qualification certificates.
        </p>
        <div class="hero-actions">
          <el-button size="large" @click="openProfile" class="btn-primary">
            <span>View Company Profile</span>
            <font-awesome-icon :icon="faArrowRightLong" />
          </el-button>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">15+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">50+</span>
            <span class="stat-label">Training Programs</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">10K+</span>
            <span class="stat-label">Certified Professionals</span>
          </div>
        </div>
      </div>
    </section>

    <section class="video-section">
      <div class="video-container">
        <div class="video-info">
          <span class="section-tag">Our Introduction</span>
          <h2 class="section-title">Integrated Training Solutions for Oil and Gas Industry</h2>
          <p class="section-desc">
            Delivering world-class training programs designed to enhance professional competencies
            and ensure safety compliance across the energy sector.
          </p>
          <div class="feature-list">
            <div class="feature-item">
              <span class="check-icon">✓</span>
              <span>Internationally Certified</span>
            </div>
            <div class="feature-item">
              <span class="check-icon">✓</span>
              <span>Expert Instructors</span>
            </div>
            <div class="feature-item">
              <span class="check-icon">✓</span>
              <span>State-of-the-Art Facilities</span>
            </div>
          </div>
        </div>
        <div class="video-wrapper">
          <div class="video-card">
            <div class="video-thumbnail-wrapper">
              <el-image :src="v2Poster" class="video-thumbnail" fit="cover" loading="lazy" />
              <div class="video-overlay" @click="playVideo">
                <div class="play-button">
                  <font-awesome-icon :icon="faPlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <LazySection>
      <DetAPost />
    </LazySection>

    <LazySection>
      <IwcfL3 />
    </LazySection>

    <LazySection>
      <IwcfDwc />
    </LazySection>

    <LazySection>
      <WcAWst />
    </LazySection>

    <LazySection>
      <H2S />
    </LazySection>

    <LazySection>
      <IadaOilAndGasRep />
    </LazySection>

    <LazySection>
      <IadcWellSharp />
    </LazySection>

    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Ready to Advance Your Career?</h2>
        <p class="cta-description">
          Join thousands of professionals who have enhanced their skills through our internationally
          accredited training programs.
        </p>
        <el-button type="primary" size="large" class="cta-button" @click="navigateToCatalog">
          <span>Explore Courses</span>
          <font-awesome-icon :icon="faArrowRightLong" />
        </el-button>
      </div>
    </section>
  </div>

  <el-dialog
    v-model="dialogVisible"
    title=""
    @close="handleDialogClose"
    align-center
    class="video-dialog"
    width="85%"
    :destroy-on-close="true"
  >
    <video
      v-if="dialogVisible"
      ref="videoPlayer"
      :src="videoSrc"
      autoplay
      controls
      class="video-player"
    ></video>
  </el-dialog>
</template>

<style scoped>
.home-container {
  background: #fff;
  overflow-x: hidden;
}

/* Banner Section */
.banner-section {
  position: relative;
  height: 600px;
  background: linear-gradient(180deg, #0a0f17 0%, #0d1525 100%);
  overflow: hidden;
}

.banner-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-slide {
  position: absolute;
  width: 65%;
  height: 450px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(-100%) scale(0.85);
  z-index: 1;
}

.banner-slide.prev {
  transform: translateX(-160%) scale(0.75);
  opacity: 0.4;
  z-index: 0;
}

.banner-slide.next {
  transform: translateX(60%) scale(0.75);
  opacity: 0.4;
  z-index: 0;
}

.banner-slide.active {
  transform: translateX(0) scale(1);
  opacity: 1;
  z-index: 2;
}

.banner-slide {
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
  background: #0a1220;
}

.banner-img-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.banner-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  border: none;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-nav:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-50%) scale(1.1);
}

.banner-nav.prev {
  left: calc(50% - 380px);
}

.banner-nav.next {
  right: calc(50% - 380px);
}

.banner-indicators {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.indicator {
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 2px;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.indicator-inner {
  display: block;
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, #f0a500, #ff6b35);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.indicator.active .indicator-inner {
  width: 100%;
}

.indicator:hover .indicator-inner {
  width: 50%;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 40px;
}

.hero-video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 17, 23, 0.08);
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(240, 165, 0, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.06) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  max-width: 900px;
  text-align: center;
  z-index: 2;
}

.hero-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
}

.badge-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(240, 165, 0, 0.6), transparent);
}

.badge-text {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffcc00;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}

.hero-title {
  margin: 0 0 28px;
  line-height: 1.1;
}

.title-line {
  display: block;
  font-size: 64px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -1px;
}

.title-line.highlight {
  background: linear-gradient(135deg, #f0a500 0%, #ff6b35 50%, #f0a500 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 2px 8px rgba(240, 165, 0, 0.4));
}

.hero-description {
  font-size: 20px;
  line-height: 1.85;
  color: #ffffff;
  margin: 0 0 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
}

.hero-actions {
  margin-bottom: 56px;
}

.btn-primary {
  height: 56px;
  padding: 0 40px;
  font-size: 15px;
  font-weight: 600;
  background: linear-gradient(135deg, #f0a500 0%, #e69500 100%);
  border: none;
  border-radius: 4px;
  color: #fff;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  letter-spacing: 0.5px;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(240, 165, 0, 0.35);
}

.btn-primary .fa-icon {
  margin-left: 10px;
  font-size: 14px;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #ffd700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 500;
}

.stat-divider {
  width: 1px;
  height: 48px;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.2), transparent);
}

/* Video Section */
.video-section {
  padding: 80px 40px;
  background: linear-gradient(135deg, #e8eef5 0%, #d4dde9 50%, #e2e9f2 100%);
  position: relative;
}

.video-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(ellipse at 20% 30%, rgba(240, 165, 0, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(255, 107, 53, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.video-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 60px;
  align-items: center;
}

.video-wrapper {
  width: 100%;
}

.video-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.video-thumbnail-wrapper {
  position: relative;
}

.video-thumbnail {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  display: block;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.video-overlay:hover {
  background: rgba(0, 0, 0, 0.25);
}

.play-button {
  width: 72px;
  height: 72px;
  background: #ffd700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #0d1117;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.video-overlay:hover .play-button {
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.video-info {
  padding: 10px;
}

.section-tag {
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f0a500;
  margin-bottom: 16px;
}

.section-title {
  font-size: 38px;
  font-weight: 700;
  color: #0f1419;
  margin: 0 0 20px;
  line-height: 1.3;
}

.section-desc {
  font-size: 18px;
  line-height: 1.8;
  color: #2c3e50;
  margin: 0 0 28px;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 17px;
  color: #1a1f29;
  font-weight: 500;
}

.check-icon {
  width: 22px;
  height: 22px;
  background: #f0a500;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #0d1117;
  font-weight: bold;
  flex-shrink: 0;
}

/* CTA Section */
.cta-section {
  padding: 100px 40px;
  background: linear-gradient(135deg, #1a1f29 0%, #0d1117 100%);
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(ellipse at 30% 50%, rgba(240, 165, 0, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 50%, rgba(255, 107, 53, 0.06) 0%, transparent 50%);
}

.cta-content {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  z-index: 1;
}

.cta-title {
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 20px;
  line-height: 1.2;
}

.cta-description {
  font-size: 17px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.55);
  margin: 0 0 40px;
}

.cta-button {
  height: 56px;
  padding: 0 44px;
  font-size: 15px;
  font-weight: 600;
  background: transparent;
  border: 2px solid rgba(240, 165, 0, 0.5);
  border-radius: 4px;
  color: #f0a500;
  transition: all 0.35s ease;
}

.cta-button:hover {
  background: #f0a500;
  border-color: #f0a500;
  color: #0d1117;
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(240, 165, 0, 0.25);
}

/* Video Dialog */
.video-dialog {
  border-radius: 8px;
  overflow: hidden;
}

.video-dialog :deep(.el-dialog__header) {
  display: none;
}

.video-dialog :deep(.el-dialog__body) {
  padding: 0;
}

.video-dialog :deep(.el-dialog) {
  background: #000;
  border-radius: 8px;
}

.video-player {
  width: 100%;
  display: block;
  background: #000;
}

/* Responsive */
@media (max-width: 1200px) {
  .banner-slide {
    width: 55%;
    height: 380px;
  }

  .banner-nav.prev {
    left: 20px;
  }

  .banner-nav.next {
    right: 20px;
  }
}

@media (max-width: 768px) {
  .banner-section {
    height: 400px;
  }

  .banner-slide {
    width: 80%;
    height: 280px;
  }

  .banner-nav {
    width: 44px;
    height: 44px;
    font-size: 16px;
  }

  .hero-section {
    min-height: 600px;
    padding: 60px 24px;
  }

  .title-line {
    font-size: 36px;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 24px;
  }

  .stat-divider {
    width: 48px;
    height: 1px;
  }

  .video-section {
    padding: 60px 24px;
  }

  .video-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .video-thumbnail {
    height: auto;
    aspect-ratio: 16 / 9;
  }

  .section-title {
    font-size: 26px;
  }

  .section-desc {
    font-size: 15px;
  }

  .video-info {
    padding: 0;
    text-align: center;
  }

  .feature-list {
    align-items: center;
  }

  .cta-section {
    padding: 60px 24px;
  }

  .cta-title {
    font-size: 28px;
  }
}
</style>
