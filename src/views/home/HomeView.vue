<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, DocumentChecked, VideoPlay } from '@element-plus/icons-vue'

import companyProfile from '/files/RSTS - Company Profile v2.pdf'
import introVideo from '/video/v2.mp4'

type Metric = {
  value: string
  label: string
}

type PartnerLogo = {
  name: string
  image: string
}

type Course = {
  index: string
  title: string
  focus: string
  pathway: string
  description: string
  image: string
  catalog: string
  featured?: boolean
}

type DeliveryPoint = {
  title: string
  description: string
  image: string
}

type FieldStory = {
  title: string
  meta: string
  image: string
  large?: boolean
}

const dialogVisible = ref(false)
const videoPlayer = ref<HTMLVideoElement | null>(null)

const metrics: Metric[] = [
  { value: '19', label: 'Curriculum categories' },
  { value: 'IWCF / IADC', label: 'Well control and WellSharp pathways' },
  { value: 'Abu Dhabi', label: 'Regional delivery base' },
]

const partnerLogos: PartnerLogo[] = [
  { name: 'IADC', image: '/images/companyQualification/IADC.png.webp' },
  { name: 'IWCF', image: '/images/companyQualification/IWCF.png.webp' },
  { name: 'Highfield', image: '/images/companyQualification/Highfield.png.webp' },
  { name: 'ACTVET', image: '/images/companyQualification/ActvetLogo.png.webp' },
  { name: 'ISO 9001', image: '/images/companyQualification/QRS-ISO-9001-2015-Certified-Logo-Vector.png.webp' },
  { name: 'DAC', image: '/images/companyQualification/DAC Logo.png.webp' },
]

const courses: Course[] = [
  {
    index: '01',
    title: 'Drilling Equipment, Techniques and Procedures On-Site Training',
    focus: 'On-site drilling operations',
    pathway: 'Rig crew / field technician readiness',
    description: 'Equipment recognition, rig-floor workflow, drilling sequence control and procedural communication for teams assigned to active wellsite operations.',
    image: '/images/5. Drilling Equpiment, Techniques and Procedures On Site Training, TPIC, Apr 2025/20250401.jpg.webp',
    catalog: 'Well Construction/Drilling',
    featured: true,
  },
  {
    index: '02',
    title: 'IWCF Drilling Well Control Driller Training',
    focus: 'IWCF driller pathway',
    pathway: 'Driller-level well control competency',
    description: 'Kick detection, shut-in discipline, pressure interpretation and immediate well control response for personnel responsible for driller actions.',
    image: '/images/2. IWCF Drilling Well Control Well Site Supervisor Training, Individual candidate, Dec 2024/20241201.jpg.webp',
    catalog: 'Well Construction/Drilling',
  },
  {
    index: '03',
    title: 'IWCF Drilling Well Control Well Site Supervisor Training',
    focus: 'IWCF supervisor pathway',
    pathway: 'Well site supervisor decision control',
    description: 'Barrier management, kill method selection, well control coordination and operational command for supervisors accountable for wellsite decisions.',
    image: '/images/8. IWCF Drilling Well Control Well Site Supervisor Training, Baker Eastern S.A., June 2025/20250604.jpeg.webp',
    catalog: 'Well Construction/Drilling',
    featured: true,
  },
  {
    index: '04',
    title: 'Well Completion & Well Service Training',
    focus: 'Completion and servicing',
    pathway: 'Completion / workover execution teams',
    description: 'Completion workflow, well service sequence, intervention readiness and procedural control for crews working after drilling handover.',
    image: '/images/10. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250714.jpeg.webp',
    catalog: 'Completions Engineering',
  },
  {
    index: '05',
    title: 'H2S Safety Awareness Training',
    focus: 'H2S hazard response',
    pathway: 'Field personnel safety awareness',
    description: 'Hazard recognition, alarm response, escape behavior, respiratory protection awareness and site discipline around potential H2S exposure.',
    image: '/images/4. H2S Safety Awareness Training, Western Atlas International, Inc., Feb 2025/20250202.jpg.webp',
    catalog: 'Health, Safety, Environment',
  },
  {
    index: '06',
    title: 'IADC WellSharp Oil & Gas Operator Representative',
    focus: 'IADC WellSharp operator representative',
    pathway: 'Operator oversight and intervention control',
    description: 'Workover and intervention oversight, contractor coordination, pressure-control awareness and service-quality review for operator representatives.',
    image: '/images/6. IADC Oil & Gas Operator Representative (Workover and Intervention), Baker Eastern S.A., May 2025/20250501.jpeg.webp',
    catalog: 'Workover and Well intervention',
  },
  {
    index: '07',
    title: 'IADC WellSharp Well Servicing Coiled Tubing',
    focus: 'IADC WellSharp well servicing',
    pathway: 'Coiled tubing pressure-control pathway',
    description: 'Well servicing pressure control, coiled tubing operating awareness and risk recognition for crews supporting intervention activities.',
    image: '/images/1. IADC WellSharp Well Servicing Coiled Tubing Courses, Individual Candidate, Dec 2023/20231201.png.webp',
    catalog: 'Workover and Well intervention',
  },
]

const deliveryPoints: DeliveryPoint[] = [
  {
    title: 'Role-based training paths',
    description: 'Programs are organized around the work performed by drillers, supervisors, operator representatives and well service crews.',
    image: '/images/3. IWCF Drilling Well Control Well Site Supervisor Training, Northern Offshore Drilling Operations Ltd., Jan 2025/20250101.jpg.webp',
  },
  {
    title: 'Instructor-led field context',
    description: 'Training sessions connect procedures, equipment, hazards and communication to the decisions teams make on site.',
    image: '/images/8. IWCF Drilling Well Control Well Site Supervisor Training, Baker Eastern S.A., June 2025/20250603.jpeg.webp',
  },
  {
    title: 'Records ready for review',
    description: 'Participants and clients can use training records and certificate verification for competency review and audit preparation.',
    image: '/images/certificate-verificate.webp',
  },
]

const fieldStories: FieldStory[] = [
  {
    title: 'On-site drilling procedures',
    meta: 'TPIC / Apr 2025',
    image: '/images/5. Drilling Equpiment, Techniques and Procedures On Site Training, TPIC, Apr 2025/20250402.jpg.webp',
    large: true,
  },
  {
    title: 'Well control delivery',
    meta: 'Baker Eastern S.A. / Jun 2025',
    image: '/images/8. IWCF Drilling Well Control Well Site Supervisor Training, Baker Eastern S.A., June 2025/20250605.jpg.webp',
  },
  {
    title: 'Completion and well service',
    meta: 'Kerui Oilfield Service / Jul 2025',
    image: '/images/10. Well Completion and Well Service Training, Kerui Oilfield Service Iraqi Branch, Jul 2025/20250710.jpeg.webp',
  },
  {
    title: 'H2S safety awareness',
    meta: 'Western Atlas International / Feb 2025',
    image: '/images/4. H2S Safety Awareness Training, Western Atlas International, Inc., Feb 2025/20250203.jpg.webp',
  },
  {
    title: 'Operator representative',
    meta: 'IADC WellSharp / May 2025',
    image: '/images/6. IADC Oil & Gas Operator Representative (Workover and Intervention), Baker Eastern S.A., May 2025/20250503.jpeg.webp',
  },
  {
    title: 'Coiled tubing servicing',
    meta: 'IADC WellSharp / Dec 2023',
    image: '/images/1. IADC WellSharp Well Servicing Coiled Tubing Courses, Individual Candidate, Dec 2023/20231204.jpg.webp',
  },
]

const openProfile = () => {
  window.open(companyProfile, '_blank', 'noopener,noreferrer')
}

const openVideo = () => {
  dialogVisible.value = true
}

const handleDialogClose = () => {
  if (!videoPlayer.value) return
  videoPlayer.value.pause()
  videoPlayer.value.currentTime = 0
}
</script>

<template>
  <main class="home-page">
    <section class="hero-section" aria-label="RSTS Academy">
      <picture class="hero-media">
        <source srcset="/images/v1-poster.png.webp" type="image/webp" />
        <img src="/images/v1-poster.png" alt="RSTS Academy oil and gas training environment" fetchpriority="high"
          decoding="async" />
      </picture>
      <span class="hero-shade"></span>
      <span class="hero-lines" aria-hidden="true"></span>

      <div class="hero-shell">
        <div class="hero-copy">
          <p class="section-eyebrow">Rainbow Star Training Services LLC</p>
          <h1>RSTS Academy</h1>
          <p class="hero-statement">
            Oil and gas training for exploration, drilling, well control and well service teams responsible for
            operating discipline in the field.
          </p>
          <div class="hero-actions" aria-label="Primary actions">
            <router-link class="primary-action" to="/course/catalog">
              Explore programs
              <el-icon>
                <ArrowRight />
              </el-icon>
            </router-link>
            <button class="ghost-action" type="button" @click="openProfile">Company profile</button>
          </div>
        </div>

        <button class="hero-video-panel" type="button" @click="openVideo" aria-label="Watch academy overview video">
          <picture>
            <source srcset="/images/v2-poster.png.webp" type="image/webp" />
            <img src="/images/v2-poster.png" alt="RSTS Academy overview video preview" loading="eager"
              decoding="async" />
          </picture>
          <span class="video-panel-shade"></span>
          <span class="video-panel-rail">
            <span>RSTS Academy film</span>
            <span>Oil and gas training</span>
          </span>
          <span class="video-panel-content">
            <span class="video-panel-play">
              <el-icon>
                <VideoPlay />
              </el-icon>
            </span>
            <span class="video-panel-copy">
              <strong>Integrated training solutions for field-ready oil and gas teams.</strong>
            </span>
          </span>
        </button>

        <div class="hero-metrics" aria-label="RSTS Academy highlights">
          <div v-for="metric in metrics" :key="metric.label" class="metric-item">
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="recognition-section" aria-label="Recognitions and qualifications">
      <div class="recognition-shell">
        <div class="recognition-copy">
          <span class="section-eyebrow">Recognition network</span>
          <p>Internationally aligned training programs, regional delivery in Abu Dhabi, and certificate records prepared
            for client review.</p>
        </div>
        <div class="recognition-logos">
          <div v-for="partner in partnerLogos" :key="partner.name" class="logo-cell">
            <img :src="partner.image" :alt="partner.name" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>

    <section class="position-section" aria-labelledby="position-title">
      <div class="section-shell position-layout">
        <div class="position-copy">
          <span class="section-eyebrow">Competency position</span>
          <h2 id="position-title">Role-based training for controlled wellsite execution.</h2>
          <div class="position-brief">
            <span>Operational competency framework</span>
            <strong>RSTS aligns drilling equipment, IWCF well control, well service, H2S awareness and IADC WellSharp
              pathways with the responsibilities carried on site.</strong>
          </div>
          <p>
            Programs are structured for the personnel who identify abnormal conditions, apply pressure-control
            discipline, follow completion and service procedures, respond to H2S exposure risk and maintain competency
            evidence for client and audit review.
          </p>
          <div class="position-tracks" aria-label="Training pathways">
            <span>Drilling equipment</span>
            <span>IWCF well control</span>
            <span>Well service</span>
            <span>H2S safety</span>
            <span>IADC WellSharp</span>
          </div>
        </div>
        <figure class="position-visual">
          <img src="/images/WellServiceTraining2.jpg.webp"
            alt="Oil and gas operator working with well service control equipment" loading="lazy" decoding="async" />
          <figcaption>
            <span>Field execution context</span>
            <strong>Practical scenarios connect equipment condition, procedural control and safety response to the
              decisions made during drilling and well service operations.</strong>
          </figcaption>
        </figure>
        <div class="position-body">
          <div class="position-points">
            <div class="point-item">
              <strong>Drilling and service personnel</strong>
              <span>Equipment recognition, drilling procedures, completion workflow and coiled tubing service awareness
                for personnel working close to active operations.</span>
            </div>
            <div class="point-item">
              <strong>Drillers and supervisors</strong>
              <span>IWCF and IADC WellSharp pathways strengthen shut-in discipline, well control decision-making,
                communication and procedural accountability.</span>
            </div>
            <div class="point-item">
              <strong>Operators and client teams</strong>
              <span>Training records, certificate verification and role-based outcomes support competency assurance,
                mobilization readiness and external review.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio-section" aria-labelledby="portfolio-title">
      <div class="section-shell portfolio-heading">
        <div class="portfolio-kicker">
          <span class="section-eyebrow">Courses curriculum</span>
          <strong>Core oil and gas training lines</strong>
        </div>
        <h2 id="portfolio-title">Structured pathways for drilling, well control, well service and field safety
          competency.</h2>
        <p>
          RSTS Academy organizes its curriculum around the responsibilities carried by crews, drillers, supervisors,
          operator representatives and servicing personnel working across wellsite operations.
        </p>
        <router-link class="inline-action" to="/course/catalog">
          Full catalog
          <el-icon>
            <ArrowRight />
          </el-icon>
        </router-link>
      </div>

      <div class="section-shell portfolio-grid">
        <router-link v-for="course in courses" :key="course.title" class="course-tile"
          :class="{ featured: course.featured }" :to="{ name: 'catalogDetail', params: { name: course.catalog } }">
          <img :src="course.image" :alt="course.title" loading="lazy" decoding="async" />
          <span class="course-index">{{ course.index }}</span>
          <span class="course-content">
            <strong>{{ course.title }}</strong>
            <b>{{ course.pathway }}</b>
            <small>{{ course.description }}</small>
          </span>
        </router-link>
      </div>
    </section>

    <section class="delivery-section" aria-labelledby="delivery-title">
      <div class="section-shell delivery-layout">
        <div class="delivery-visual">
          <img
            src="/images/8. IWCF Drilling Well Control Well Site Supervisor Training, Baker Eastern S.A., June 2025/20250604.jpeg.webp"
            alt="Instructor-led oil and gas training session" loading="lazy" decoding="async" />
        </div>
        <div class="delivery-copy">
          <span class="section-eyebrow">How training is delivered</span>
          <h2 id="delivery-title">From classroom instruction to wellsite decision quality.</h2>
          <p>
            Training is planned around job roles, operating exposure and company priorities. The result is a cleaner
            path from required standards to practical readiness for personnel on drilling and well service assignments.
          </p>
          <div class="delivery-list">
            <article v-for="point in deliveryPoints" :key="point.title" class="delivery-item">
              <img :src="point.image" :alt="point.title" loading="lazy" decoding="async" />
              <span>
                <strong>{{ point.title }}</strong>
                <small>{{ point.description }}</small>
              </span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="field-section" aria-labelledby="field-title">
      <div class="section-shell field-heading">
        <span class="section-eyebrow">Field evidence</span>
        <h2 id="field-title">Recent training delivery across drilling, well control, HSE and well servicing.</h2>
      </div>
      <div class="section-shell field-grid">
        <figure v-for="story in fieldStories" :key="story.image" class="field-tile" :class="{ large: story.large }">
          <img :src="story.image" :alt="story.title" loading="lazy" decoding="async" />
          <figcaption>
            <span>{{ story.meta }}</span>
            <strong>{{ story.title }}</strong>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="records-section" aria-labelledby="records-title">
      <div class="section-shell records-layout">
        <div class="records-copy">
          <span class="section-eyebrow">Certificate records</span>
          <h2 id="records-title">Authorized programs with traceable training outcomes.</h2>
          <p>
            Participants can verify certificates online, while companies keep clearer records for IWCF, IADC WellSharp,
            H2S and practical site training programs.
          </p>
        </div>
        <router-link class="records-action" to="/certificates/index">
          Verify certificates
          <el-icon>
            <DocumentChecked />
          </el-icon>
        </router-link>
      </div>
    </section>
  </main>

  <el-dialog v-model="dialogVisible" title="Integrated Training Solutions and Service for Oil and Gas Industry"
    align-center class="video-dialog" width="min(980px, 92vw)" @close="handleDialogClose">
    <video v-if="dialogVisible" ref="videoPlayer" class="video-player" :src="introVideo" autoplay controls playsinline
      preload="metadata"></video>
  </el-dialog>
</template>

<style scoped lang="scss">
.home-page {
  --ink: #101820;
  --muted: #62707a;
  --deep: #071522;
  --navy: #0b2234;
  --steel: #d8dedc;
  --field: #e9ece5;
  --paper: #ffffff;
  --accent: #c99c5e;
  --champagne: #d9bd7a;
  --ivory: #f7f5ee;
  --ivory-deep: #ebe6da;
  --charcoal: #11181f;
  --petrol: #0b2e36;
  --line: rgba(16, 24, 32, 0.14);
  --line-light: rgba(255, 255, 255, 0.22);
  --white: #ffffff;

  overflow: hidden;
  background: var(--field);
  color: var(--ink);
  font-family:
    Aptos,
    "Gill Sans",
    "Trebuchet MS",
    sans-serif;
}

.section-shell {
  width: min(1240px, calc(100% - 56px));
  margin: 0 auto;
}

.section-eyebrow {
  display: inline-flex;
  color: var(--accent);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1;
  margin-bottom: 18px;
  text-transform: uppercase;
}

.hero-section {
  position: relative;
  min-height: min(890px, calc(100svh - 76px));
  display: grid;
  isolation: isolate;
  background: var(--deep);
  overflow: hidden;
}

.hero-media,
.hero-shade,
.hero-lines {
  position: absolute;
  inset: 0;
}

.hero-media {
  z-index: -3;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center 40%;
    transform: scale(1.06);
    animation: hero-drift 18s ease-in-out infinite alternate;
  }
}

.hero-shade {
  z-index: -2;
  background:
    radial-gradient(circle at 78% 22%, rgba(23, 125, 120, 0.22), transparent 34%),
    linear-gradient(180deg, rgba(5, 13, 22, 0) 66%, rgba(5, 13, 22, 0.96) 100%),
    linear-gradient(90deg, rgba(5, 13, 22, 0.98), rgba(5, 13, 22, 0.76) 42%, rgba(5, 13, 22, 0.18)),
    linear-gradient(0deg, rgba(5, 13, 22, 0.98), rgba(5, 13, 22, 0.18) 72%);
}

.hero-lines {
  z-index: -1;
  opacity: 0.22;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.24) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.18) 1px, transparent 1px);
  background-size: 25% 100%, 25% 100%;
}

.hero-shell {
  width: min(1240px, calc(100% - 56px));
  margin: 0 auto;
  padding: 92px 0 32px;
  display: grid;
  grid-template-columns: minmax(620px, 1fr) minmax(430px, 0.52fr);
  grid-template-rows: 1fr auto;
  gap: 52px 72px;
  align-items: end;
  color: var(--white);
}

.hero-copy {
  max-width: 940px;

  .section-eyebrow {
    color: rgba(255, 255, 255, 0.72);
  }

  h1 {
    margin: 0;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(96px, 8.8vw, 144px);
    font-weight: 500;
    letter-spacing: 0;
    line-height: 0.84;
  }
}

.hero-statement {
  max-width: 780px;
  margin: 28px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 25px;
  line-height: 1.44;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.primary-action,
.ghost-action,
.inline-action,
.records-action {
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  padding: 0 22px;
  border: 1px solid transparent;
  cursor: pointer;
  font: inherit;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease,
    color 180ms ease;
}

.primary-action {
  background: var(--accent);
  border-color: var(--accent);
  color: #101820;

  &:hover {
    background: #dfbd79;
    color: #101820;
    transform: translateY(-2px);
  }
}

.ghost-action {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.42);
  color: var(--white);

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }
}

.hero-metrics {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--line-light);
  border-bottom: 1px solid var(--line-light);
}

.metric-item {
  min-height: 104px;
  display: grid;
  align-content: center;
  gap: 10px;
  padding: 22px 34px;
  border-right: 1px solid var(--line-light);

  &:last-child {
    border-right: 0;
  }

  strong {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 36px;
    font-weight: 500;
    line-height: 1;
  }

  span {
    color: rgba(255, 255, 255, 0.62);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }
}

.hero-ppt-panel {
  position: relative;
  width: min(100%, 1040px);
  aspect-ratio: 2.12;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  gap: 14px;
  padding: 18px;
  overflow: hidden;
  border: 1px solid rgba(17, 24, 31, 0.12);
  border-bottom-color: rgba(201, 163, 94, 0.58);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 244, 234, 0.98));
  color: var(--ink);
  box-shadow:
    0 34px 94px rgba(17, 24, 31, 0.18),
    inset 0 0 0 1px rgba(255, 255, 255, 0.56);
}

.ppt-panel-head,
.ppt-panel-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.ppt-panel-head {
  strong {
    display: block;
    max-width: 520px;
    color: var(--ink);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.08;
  }
}

.ppt-panel-kicker {
  display: inline-flex;
  margin-bottom: 8px;
  color: #9c7730;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
}

.ppt-panel-play {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  flex: none;
  border: 1px solid rgba(201, 163, 94, 0.58);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.74);
  color: #9c7730;
  transition:
    border-color 180ms ease,
    background 180ms ease,
    color 180ms ease,
    transform 180ms ease;

  .el-icon {
    font-size: 24px;
  }

  &:hover {
    border-color: rgba(201, 163, 94, 0.9);
    background: #fff;
    color: #7d5b19;
    transform: translateY(-1px);
  }
}

.ppt-stage {
  min-height: 0;
  overflow: hidden;
  border: 1px solid rgba(17, 24, 31, 0.08);
  border-radius: 16px;
  background:
    radial-gradient(circle at 50% 0%, rgba(217, 189, 122, 0.12), transparent 36%),
    linear-gradient(180deg, #f5f1e8, #ede7db);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.7),
    inset 0 -20px 50px rgba(17, 24, 31, 0.05);

  :deep(.el-carousel) {
    width: 100%;
    height: 100%;
  }

  :deep(.el-carousel__container) {
    height: 100%;
  }
}

.ppt-slide {
  position: relative;
  height: 100%;
  margin: 0;
  display: grid;
  align-items: stretch;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
    object-position: center;
    background: #f3efe6;
  }

  figcaption {
    position: absolute;
    right: 22px;
    bottom: 22px;
    left: 22px;
    display: grid;
    gap: 6px;
    max-width: 420px;
    padding: 16px 18px;
    border: 1px solid rgba(17, 24, 31, 0.1);
    border-left: 2px solid var(--champagne);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.88);
    color: var(--ink);
    box-shadow: 0 16px 40px rgba(17, 24, 31, 0.1);

    span {
      color: #9c7730;
      font-size: 11px;
      font-weight: 900;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    strong {
      color: var(--ink);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 24px;
      font-weight: 500;
      line-height: 1.1;
    }
  }
}

.ppt-panel-foot {
  min-height: 54px;

  span {
    display: inline-flex;
    margin-bottom: 6px;
    color: #9c7730;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1;
    text-transform: uppercase;
  }

  strong {
    display: block;
    color: var(--ink);
    font-size: 15px;
    line-height: 1.32;
  }
}

.ppt-panel-pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: none;

  span {
    margin: 0;
    color: #6a7178;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0;
    text-transform: none;
  }
}

.ppt-dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: 0;
  border-radius: 999px;
  background: rgba(17, 24, 31, 0.2);
  cursor: pointer;
  transition:
    transform 180ms ease,
    background 180ms ease,
    width 180ms ease;

  &.active {
    width: 24px;
    background: var(--champagne);
  }

  &:hover {
    transform: translateY(-1px);
  }
}

.hero-ppt-panel:hover .ppt-panel-play {
  transform: translateY(-1px);
}

.hero-video-panel {
  position: relative;
  width: min(100%, 470px);
  aspect-ratio: 1.36;
  align-self: end;
  justify-self: end;
  display: grid;
  padding: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-bottom-color: rgba(201, 163, 94, 0.62);
  background: rgba(7, 21, 34, 0.42);
  color: var(--white);
  cursor: pointer;
  font: inherit;
  text-align: left;
  box-shadow:
    0 38px 110px rgba(0, 0, 0, 0.38),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 200ms ease;

  picture,
  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  picture {
    position: absolute;
    inset: 0;
  }

  img {
    object-fit: cover;
    object-position: center;
    filter: saturate(0.98) contrast(1.06);
    transform: scale(1.03);
    transition:
      filter 240ms ease,
      transform 240ms ease;
  }

  &:hover {
    border-color: rgba(201, 163, 94, 0.78);
    box-shadow:
      0 44px 130px rgba(0, 0, 0, 0.46),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    transform: translateY(-4px);

    img {
      filter: saturate(1.08) contrast(1.08);
      transform: scale(1.06);
    }

    .video-panel-play {
      background: var(--accent);
      color: #101820;
      transform: scale(1.04);
    }
  }
}

.video-panel-shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(5, 13, 22, 0.06), rgba(5, 13, 22, 0.2) 42%, rgba(5, 13, 22, 0.92)),
    linear-gradient(90deg, rgba(5, 13, 22, 0.5), rgba(5, 13, 22, 0.06) 58%);
}

.video-panel-rail {
  position: absolute;
  top: 18px;
  right: 20px;
  left: 20px;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
  line-height: 1;
  text-transform: uppercase;
}

.video-panel-content {
  position: absolute;
  right: 24px;
  bottom: 24px;
  left: 24px;
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 16px;
  align-items: end;
}

.video-panel-play {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(201, 163, 94, 0.9);
  border-radius: 50%;
  background: rgba(7, 21, 34, 0.64);
  color: var(--accent);
  transition:
    background 200ms ease,
    color 200ms ease,
    transform 200ms ease;

  .el-icon {
    font-size: 30px;
  }
}

.video-panel-copy {
  display: grid;
  gap: 8px;

  span {
    color: var(--accent);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  strong {
    max-width: 360px;
    color: var(--white);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.08;
  }
}

.recognition-section {
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}

.recognition-shell {
  width: min(1240px, calc(100% - 56px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(340px, 0.42fr) minmax(560px, 1fr);
  gap: 56px;
  align-items: center;
  padding: 28px 0;
}

.recognition-copy {
  p {
    margin: 0;
    color: var(--ink);
    font-size: 18px;
    line-height: 1.5;
  }

  .section-eyebrow {
    margin-bottom: 12px;
  }
}

.recognition-logos {
  display: grid;
  grid-template-columns: repeat(6, minmax(88px, 1fr));
  border-left: 1px solid var(--line);
}

.logo-cell {
  min-height: 88px;
  display: grid;
  place-items: center;
  padding: 18px;
  border-right: 1px solid var(--line);

  img {
    max-width: 100px;
    max-height: 58px;
    object-fit: contain;
    filter: grayscale(0.08) saturate(0.95);
  }
}

.position-section,
.portfolio-section,
.field-section {
  padding: 60px 0;
}

.position-section {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(17, 24, 31, 0.045) 1px, transparent 1px),
    linear-gradient(180deg, #fbfaf6 0%, var(--ivory) 60%, #efe9dc 100%);
  background-size: 112px 100%, auto;
  color: var(--ink);
  border-top: 1px solid rgba(16, 24, 32, 0.08);
  border-bottom: 1px solid rgba(16, 24, 32, 0.08);

  &::before,
  &::after {
    position: absolute;
    inset: 0;
    pointer-events: none;
    content: "";
  }

  &::before {
    opacity: 1;
    background:
      linear-gradient(115deg, transparent 0 64%, rgba(17, 24, 31, 0.045) 64% 100%),
      radial-gradient(circle at 84% 16%, rgba(217, 189, 122, 0.18), transparent 34%);
  }

  &::after {
    top: auto;
    height: 1px;
    background: rgba(16, 24, 32, 0.12);
  }
}

.position-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(480px, 0.78fr) minmax(560px, 0.92fr);
  gap: 68px;
  align-items: center;
}

.position-copy h2,
.portfolio-heading h2,
.delivery-copy h2,
.field-heading h2,
.records-copy h2 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1;
}

.position-copy {
  position: relative;
  padding: 42px 0;

  &::before {
    display: block;
    width: 96px;
    height: 2px;
    margin-bottom: 28px;
    background: linear-gradient(90deg, var(--charcoal), var(--champagne));
    content: "";
  }
}

.position-copy h2 {
  max-width: 780px;
  color: var(--ink);
  font-size: clamp(54px, 5vw, 76px);
  line-height: 0.98;
}

.position-visual {
  position: relative;
  min-height: 620px;
  margin: 0;
  overflow: hidden;
  background: #071522;
  border: 1px solid rgba(17, 24, 31, 0.12);
  box-shadow:
    0 46px 110px rgba(17, 24, 31, 0.18),
    inset 0 0 0 1px rgba(255, 255, 255, 0.16);

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
    filter: saturate(0.9) contrast(1.04) brightness(0.96);
    transition:
      filter 220ms ease,
      transform 220ms ease;
  }

  &:hover img {
    filter: saturate(0.98) contrast(1.06) brightness(0.98);
    transform: scale(1.025);
  }

  &::after {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(5, 13, 22, 0) 34%, rgba(5, 13, 22, 0.84)),
      linear-gradient(90deg, rgba(17, 24, 31, 0.64), rgba(5, 13, 22, 0.02) 64%);
    content: "";
  }

  &::before {
    position: absolute;
    inset: 26px;
    z-index: 1;
    pointer-events: none;
    background:
      linear-gradient(rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0.38)) 0 0 / 100% 1px no-repeat,
      linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)) 100% 0 / 74px 1px no-repeat,
      linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)) 100% 0 / 1px 74px no-repeat,
      linear-gradient(rgba(201, 163, 94, 0.72), rgba(201, 163, 94, 0.72)) 0 100% / 74px 1px no-repeat,
      linear-gradient(rgba(201, 163, 94, 0.72), rgba(201, 163, 94, 0.72)) 0 100% / 1px 74px no-repeat;
    content: "";
  }
}

.position-visual figcaption {
  position: absolute;
  right: 34px;
  bottom: 32px;
  left: 34px;
  z-index: 1;
  display: grid;
  gap: 12px;
  max-width: 520px;
  color: var(--white);

  span {
    color: var(--accent);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  strong {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.12;
  }

  &::before {
    display: block;
    width: 46px;
    height: 2px;
    margin-bottom: 4px;
    background: var(--accent);
    content: "";
  }
}

.position-brief {
  display: grid;
  gap: 16px;
  margin-top: 38px;
  padding: 0 0 0 24px;
  border-left: 2px solid var(--champagne);
  color: var(--ink);

  span {
    color: #9c7730;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.12em;
    line-height: 1;
    text-transform: uppercase;
  }

  strong {
    font-family: Georgia, "Times New Roman", serif;
    max-width: 700px;
    color: var(--ink);
    font-size: 30px;
    font-weight: 500;
    line-height: 1.12;
  }
}

.position-copy p {
  margin: 28px 0 0;
  max-width: 700px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.76;
}

.position-tracks {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;

  span {
    display: inline-flex;
    min-height: 36px;
    align-items: center;
    padding: 0 12px;
    border: 1px solid rgba(17, 24, 31, 0.12);
    background: rgba(255, 255, 255, 0.72);
    color: var(--ink);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
}

.position-body {
  grid-column: 1 / -1;
  padding: 0;
  border-top: 0;
  background: #141b22;
  color: var(--white);
  box-shadow: 0 28px 80px rgba(17, 24, 31, 0.14);
}

.position-points {
  counter-reset: position-point;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.point-item {
  counter-increment: position-point;
  position: relative;
  display: grid;
  gap: 13px;
  min-height: 156px;
  padding: 28px 34px;
  border-right: 1px solid rgba(255, 255, 255, 0.12);

  &:last-child {
    padding-right: 0;
    border-right: 0;
  }

  &::before {
    color: rgba(201, 163, 94, 0.86);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.16em;
    line-height: 1;
    content: "0" counter(position-point);
  }

  strong {
    color: var(--white);
    font-size: 20px;
    line-height: 1.32;
  }

  span {
    color: rgba(255, 255, 255, 0.66);
    line-height: 1.6;
  }
}

.portfolio-section {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, #fbfaf6 0%, #f4efe4 62%, #eee6d6 100%);
  border-top: 1px solid rgba(17, 24, 31, 0.08);
  color: var(--ink);

  &::before,
  &::after {
    position: absolute;
    pointer-events: none;
    content: "";
  }

  &::before {
    top: 86px;
    right: -9vw;
    width: 48vw;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(217, 189, 122, 0.72), transparent);
    transform: rotate(-12deg);
    transform-origin: right center;
  }

  &::after {
    right: 0;
    bottom: 0;
    left: 0;
    height: 42%;
    background: linear-gradient(180deg, transparent, rgba(17, 24, 31, 0.035));
  }
}

.portfolio-heading {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.68fr) minmax(320px, 0.32fr);
  gap: 40px;
  align-items: start;
  margin-bottom: 66px;

  h2 {
    grid-column: 1;
    max-width: 900px;
    color: var(--ink);
    font-size: 64px;
  }

  p {
    grid-column: 2;
    margin: 42px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.68;
  }

  .inline-action {
    grid-column: 2;
    justify-self: start;
    margin-top: 28px;
  }
}

.portfolio-kicker {
  grid-column: 1;
  display: grid;
  gap: 10px;
  margin-bottom: 22px;

  .section-eyebrow {
    margin-bottom: 0;
  }

  strong {
    color: var(--ink);
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1.45;
    text-transform: uppercase;
  }
}

.inline-action {
  min-height: auto;
  padding: 0 0 8px;
  border-bottom: 1px solid currentColor;
  color: inherit;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
}

.portfolio-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-auto-rows: 232px;
  gap: 14px;
}

.course-tile {
  position: relative;
  grid-column: span 4;
  min-height: auto;
  display: grid;
  align-items: end;
  overflow: hidden;
  border: 1px solid rgba(17, 24, 31, 0.1);
  background: #11181f;
  color: var(--white);
  text-decoration: none;
  isolation: isolate;
  box-shadow: 0 24px 68px rgba(17, 24, 31, 0.14);
  transition:
    border-color 220ms ease,
    box-shadow 220ms ease,
    transform 220ms ease;

  &.featured {
    grid-column: span 6;
    grid-row: span 2;

    .course-content strong {
      font-size: 43px;
    }

    .course-content b,
    .course-content small {
      display: block;
    }
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      linear-gradient(180deg, rgba(5, 13, 22, 0) 26%, rgba(5, 13, 22, 0.26) 58%, rgba(5, 13, 22, 0.84)),
      linear-gradient(90deg, rgba(8, 20, 32, 0.34), rgba(8, 20, 32, 0.02) 62%);
  }

  &::before {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    width: 58px;
    height: 58px;
    border-top: 1px solid rgba(217, 189, 122, 0.72);
    border-right: 1px solid rgba(217, 189, 122, 0.72);
    content: "";
  }

  img {
    position: absolute;
    inset: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    filter: saturate(0.82) contrast(1.04) brightness(0.88);
    transition:
      filter 500ms ease,
      transform 600ms ease;
  }

  &:hover {
    border-color: rgba(201, 163, 94, 0.52);
    box-shadow: 0 32px 86px rgba(17, 24, 31, 0.2);
    transform: translateY(-4px);

    img {
      filter: saturate(0.94) contrast(1.06) brightness(0.92);
      transform: scale(1.055);
    }
  }
}

.course-index {
  position: absolute;
  top: 22px;
  left: 22px;
  z-index: 1;
  min-height: 30px;
  display: inline-flex;
  align-items: center;
  padding: 0 11px;
  border: 1px solid rgba(244, 213, 138, 0.46);
  background: rgba(5, 13, 22, 0.78);
  color: #f4d58a;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.12em;
  line-height: 1;
  box-shadow:
    0 12px 28px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.14);
}

.course-content {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 9px;
  align-self: end;
  padding: 30px;
  text-shadow: 0 3px 18px rgba(0, 0, 0, 0.58);

  em {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #f4d58a;
    font-style: normal;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.11em;
    line-height: 1;
    text-transform: uppercase;

    &::before {
      width: 18px;
      height: 1px;
      background: rgba(244, 213, 138, 0.82);
      content: "";
    }
  }

  strong {
    max-width: 560px;
    color: #fff7ea;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 29px;
    font-weight: 500;
    line-height: 1.08;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.42);
  }

  b {
    display: none;
    width: fit-content;
    max-width: 100%;
    padding-left: 12px;
    border-left: 2px solid rgba(244, 213, 138, 0.72);
    color: #f4e4bf;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1.35;
    text-transform: uppercase;
  }

  small {
    display: none;
    max-width: 540px;
    color: rgba(232, 239, 243, 0.8);
    font-size: 14px;
    line-height: 1.62;
  }
}

.delivery-section {
  padding: 60px 0;
  background:
    linear-gradient(180deg, #fbfaf6 0%, #f3efe5 100%);
  color: var(--ink);
}

.delivery-layout {
  display: grid;
  grid-template-columns: minmax(520px, 0.86fr) minmax(430px, 0.74fr);
  gap: 76px;
  align-items: center;
}

.delivery-visual {
  position: relative;
  min-height: 680px;
  overflow: hidden;
  border: 1px solid rgba(17, 24, 31, 0.1);
  box-shadow: 0 36px 95px rgba(17, 24, 31, 0.16);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  &::after {
    position: absolute;
    inset: 22px;
    border: 1px solid rgba(255, 255, 255, 0.48);
    border-bottom-color: rgba(201, 163, 94, 0.8);
    pointer-events: none;
    content: "";
  }
}

.delivery-copy {
  h2 {
    max-width: 640px;
    font-size: 62px;
    color: var(--ink);
  }

  p {
    margin: 28px 0 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.75;
  }
}

.delivery-list {
  display: grid;
  gap: 14px;
  margin-top: 42px;
}

.delivery-item {
  display: grid;
  grid-template-columns: 118px 1fr;
  gap: 20px;
  align-items: center;
  margin: 0;
  padding: 18px;
  border: 1px solid rgba(17, 24, 31, 0.1);
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0 14px 40px rgba(17, 24, 31, 0.06);

  img {
    width: 118px;
    height: 82px;
    object-fit: cover;
  }

  span {
    display: grid;
    gap: 8px;
  }

  strong {
    color: var(--ink);
    line-height: 1.3;
  }

  small {
    color: var(--muted);
    font-size: 14px;
    line-height: 1.55;
  }
}

.field-section {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, #101820 0%, #14232b 100%);
  color: var(--white);

  &::before {
    position: absolute;
    top: 88px;
    right: 0;
    left: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(217, 189, 122, 0.34), transparent);
    content: "";
  }

  &::after {
    position: absolute;
    right: -12vw;
    bottom: -22vw;
    width: 46vw;
    aspect-ratio: 1;
    border: 1px solid rgba(217, 189, 122, 0.12);
    border-radius: 50%;
    content: "";
  }
}

.field-heading {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(280px, 0.34fr) minmax(620px, 1fr);
  gap: 70px;
  align-items: end;
  margin-bottom: 58px;

  h2 {
    grid-column: 2;
    max-width: 900px;
    color: var(--white);
    font-size: 62px;
  }
}

.field-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 260px;
  gap: 18px;
}

.field-tile {
  position: relative;
  display: flex;
  align-items: end;
  margin: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: var(--white);
  isolation: isolate;
  box-shadow:
    0 24px 70px rgba(0, 0, 0, 0.24),
    0 1px 0 rgba(255, 255, 255, 0.12) inset;

  &.large {
    grid-column: span 2;
    grid-row: span 2;

    strong {
      font-size: 44px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      linear-gradient(0deg, rgba(5, 15, 25, 0.78), rgba(5, 15, 25, 0.08) 68%),
      linear-gradient(90deg, rgba(5, 13, 22, 0.34), rgba(5, 15, 25, 0.02));
  }

  img {
    position: absolute;
    inset: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    filter: saturate(0.86) contrast(1.04) brightness(0.9);
    transition:
      filter 500ms ease,
      transform 600ms ease;
  }

  &:hover {
    img {
      filter: saturate(0.98) contrast(1.06) brightness(0.94);
      transform: scale(1.055);
    }
  }

  figcaption {
    position: relative;
    z-index: 1;
    display: grid;
    gap: 10px;
    padding: 10px;
    text-shadow: 0 3px 18px rgba(0, 0, 0, 0.6);


  }

  span {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #f4d58a;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.11em;
    line-height: 1;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.42);
    text-transform: uppercase;

  }

  strong {
    max-width: 560px;
    color: #fff7ea;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.05;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.44);
  }
}

.records-section {
  padding: 0;
  background: #11181f;
  color: var(--white);
}

.records-layout {
  display: grid;
  grid-template-columns: minmax(620px, 1fr) auto;
  gap: 52px;
  align-items: end;
  border-top: 1px solid rgba(217, 189, 122, 0.18);
  border-bottom: 1px solid rgba(217, 189, 122, 0.18);
  padding: 74px 0;
}

.records-copy {
  h2 {
    max-width: 820px;
    color: var(--white);
    font-size: 58px;
  }

  p {
    max-width: 720px;
    margin: 24px 0 0;
    color: rgba(255, 255, 255, 0.66);
    font-size: 17px;
    line-height: 1.72;
  }
}

.records-action {
  min-width: 230px;
  border-color: rgba(255, 255, 255, 0.36);
  color: var(--white);

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-2px);
  }
}

.video-dialog {
  :deep(.el-dialog__body) {
    padding: 0;
  }
}

.video-player {
  width: 100%;
  max-height: 72vh;
  display: block;
  background: #000;
}

@keyframes hero-drift {
  from {
    transform: scale(1.06) translate3d(-1.2%, -0.8%, 0);
  }

  to {
    transform: scale(1.14) translate3d(1.4%, 1%, 0);
  }
}

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
  }

  .hero-media img {
    animation: none;
    transform: scale(1.06);
  }
}

@media (max-width: 1180px) {

  .recognition-shell,
  .position-layout,
  .delivery-layout,
  .records-layout {
    grid-template-columns: 1fr;
  }

  .hero-shell {
    grid-template-columns: minmax(0, 1fr) minmax(360px, 0.44fr);
    gap: 56px 36px;
  }

  .hero-section {
    min-height: min(830px, calc(100svh - 68px));
  }

  .hero-ppt-panel {
    width: min(100%, 400px);
  }

  .ppt-panel-head strong {
    font-size: 23px;
  }

  .recognition-logos {
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid var(--line);
  }

  .logo-cell {
    border-bottom: 1px solid var(--line);
  }

  .position-layout {
    gap: 48px;
  }

  .position-visual {
    max-width: 760px;
    min-height: 500px;
  }

  .position-body {
    padding-top: 36px;
  }

  .portfolio-heading,
  .field-heading {
    grid-template-columns: 1fr;

    h2,
    p {
      grid-column: auto;
    }
  }

  .portfolio-heading .inline-action {
    grid-column: auto;
    margin-top: 0;
  }

  .portfolio-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: auto;
  }

  .course-tile,
  .course-tile.featured {
    grid-column: auto;
    grid-row: auto;
    min-height: 360px;

    .course-content strong {
      font-size: 32px;
    }

    .course-content b,
    .course-content small {
      display: block;
    }
  }
}

@media (max-width: 820px) {

  .section-shell,
  .hero-shell,
  .recognition-shell {
    width: min(100% - 32px, 560px);
  }

  .hero-section {
    min-height: auto;
  }

  .hero-shell {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 42px 0 20px;
  }

  .hero-copy h1 {
    font-size: 62px;
    line-height: 0.9;
  }

  .hero-statement {
    font-size: 18px;
    margin-top: 18px;
  }

  .hero-actions {
    margin-top: 24px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .primary-action,
  .ghost-action {
    width: 100%;
  }

  .hero-ppt-panel {
    width: 100%;
    aspect-ratio: 1.55;
    justify-self: stretch;
    transform: none;
  }

  .ppt-panel-head {
    align-items: flex-start;
  }

  .ppt-panel-head strong {
    font-size: 22px;
  }

  .ppt-panel-foot {
    align-items: flex-start;
    flex-direction: column;
  }

  .ppt-panel-pagination {
    width: 100%;
    justify-content: space-between;
  }

  .hero-metrics {
    grid-template-columns: 1fr;
    margin-top: 0;
  }

  .metric-item {
    min-height: auto;
    padding: 13px 0;
    border-right: 0;
    border-bottom: 1px solid var(--line-light);

    &:last-child {
      border-bottom: 0;
    }
  }

  .recognition-shell {
    gap: 24px;
    padding: 34px 0 24px;
  }

  .recognition-logos {
    grid-template-columns: repeat(2, 1fr);
  }

  .position-section,
  .portfolio-section,
  .delivery-section,
  .field-section {
    padding: 72px 0;
  }

  .records-section {
    padding: 0;
  }

  .position-copy h2,
  .portfolio-heading h2,
  .delivery-copy h2,
  .field-heading h2,
  .records-copy h2 {
    font-size: 40px;
  }

  .position-visual {
    margin-top: 32px;
    min-height: 420px;
  }

  .position-copy {
    padding: 0;
  }

  .position-brief {
    margin-top: 30px;
    padding: 0 0 0 20px;

    strong {
      font-size: 26px;
    }
  }

  .position-tracks span {
    min-height: 32px;
  }

  .position-copy p {
    margin-top: 24px;
  }

  .position-body {
    padding-top: 0;
  }

  .position-points {
    grid-template-columns: 1fr;
  }

  .point-item {
    gap: 8px;
    min-height: auto;
    padding: 20px 0;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);

    &:last-child {
      padding-right: 0;
      border-bottom: 0;
    }
  }

  .portfolio-heading {
    gap: 22px;
    margin-bottom: 38px;

    p {
      margin-top: 0;
      font-size: 15px;
    }
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }

  .course-tile,
  .course-tile.featured {
    grid-column: auto;
    min-height: 390px;

    .course-content {
      padding: 24px;
    }

    .course-content strong {
      font-size: 28px;
    }

    .course-content b {
      font-size: 11px;
    }
  }

  .delivery-visual {
    min-height: 390px;
  }

  .delivery-item {
    padding: 12px;
  }

  .delivery-item {
    grid-template-columns: 96px 1fr;

    img {
      width: 96px;
      height: 76px;
    }
  }

  .field-heading {
    gap: 22px;
    margin-bottom: 34px;
  }

  .field-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }

  .field-tile,
  .field-tile.large {
    grid-column: auto;
    grid-row: auto;
    min-height: 360px;

    strong {
      font-size: 30px;
    }

    figcaption {
      padding: 24px;
    }
  }

  .records-layout {
    padding: 48px 0;
  }

  .records-action {
    width: 100%;
  }
}

@media (max-width: 460px) {
  .hero-copy h1 {
    font-size: 54px;
  }

  .ppt-panel-foot strong {
    font-size: 20px;
  }

  .position-visual {
    min-height: 340px;

    figcaption {
      right: 22px;
      bottom: 22px;
      left: 22px;

      strong {
        font-size: 24px;
      }
    }
  }

  .course-tile,
  .course-tile.featured,
  .field-tile,
  .field-tile.large {
    min-height: 320px;
  }

  .course-content,
  .field-tile figcaption {
    padding: 20px;
  }

  .course-content em,
  .field-tile span {
    font-size: 11px;
    letter-spacing: 0.08em;
  }

  .course-content strong,
  .field-tile strong,
  .field-tile.large strong {
    font-size: 24px;
  }
}
</style>
