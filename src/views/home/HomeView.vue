<script setup lang="ts">
import { ref, type Component } from 'vue'
import {
  Aim,
  ArrowRight,
  Connection,
  DataAnalysis,
  DocumentChecked,
  Finished,
  FirstAidKit,
  Location,
  Management,
  Monitor,
  Operation,
  School,
  Search,
  SetUp,
  Tools,
  User,
  VideoPlay,
  Warning,
} from '@element-plus/icons-vue'
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

type Capability = {
  icon: Component
  label: string
  title: string
  description: string
  image: string
  imageAlt: string
  items: string[]
}

type Pathway = {
  label: string
  title: string
  description: string
  image: string
  imageAlt: string
}

type FieldStory = {
  icon: Component
  title: string
  meta: string
  description: string
}

type RigService = {
  icon: Component
  title: string
  description: string
}

type DeliveryMode = {
  icon: Component
  title: string
  description: string
}

const dialogVisible = ref(false)
const videoPlayer = ref<HTMLVideoElement | null>(null)

const metrics: Metric[] = [
  { value: 'Since 2019', label: 'Oil and gas competence development' },
  { value: 'IWCF / IADC', label: 'Well control and WellSharp pathways' },
  { value: 'Abu Dhabi', label: 'Regional delivery base' },
]

const partnerLogos: PartnerLogo[] = [
  { name: 'IADC', image: '/images/companyQualification/IADC.png.webp' },
  { name: 'IWCF', image: '/images/companyQualification/IWCF.png.webp' },
  { name: 'Highfield', image: '/images/companyQualification/Highfield.png.webp' },
  { name: 'ACTVET', image: '/images/companyQualification/ActvetLogo.png.webp' },
  {
    name: 'ISO 9001',
    image: '/images/companyQualification/QRS-ISO-9001-2015-Certified-Logo-Vector.png.webp',
  },
  { name: 'DAC', image: '/images/companyQualification/DAC Logo.png.webp' },
]

const capabilities: Capability[] = [
  {
    icon: Aim,
    label: 'Accredited well control',
    title: 'Control begins with prepared decisions.',
    description:
      'Role-aligned IWCF and IADC pathways connect influx detection, shut-in discipline and supervisory judgement to recognised assessment.',
    image: '/images/rsts-capability-well-control-v2.webp',
    imageAlt: 'Illustrative well control training scenario',
    items: ['Foundation personnel', 'Drillers', 'Supervisors and wellsite leaders'],
  },
  {
    icon: Tools,
    label: 'Technical training',
    title: 'Technical depth across the well lifecycle.',
    description:
      'Drilling, completions, production and surface-facility programmes translate engineering principles into operating practice.',
    image:
      '/images/13. Well Completion and Well Service Training, Daqing, Jul 2025/20250728.png.webp',
    imageAlt: 'RSTS instructor leading a technical training session for an operating team',
    items: [
      'Drilling and well construction',
      'Completions and well service',
      'Production facilities',
    ],
  },
  {
    icon: FirstAidKit,
    label: 'HSE and safety',
    title: 'Safety behaviour for demanding environments.',
    description:
      'Practical HSE programmes develop hazard recognition, emergency response and disciplined execution around high-risk work.',
    image:
      '/images/8. IWCF Drilling Well Control Well Site Supervisor Training, Baker Eastern S.A., June 2025/20250604.jpeg.webp',
    imageAlt: 'RSTS instructor working directly with a participant during classroom training',
    items: ['H2S and RigPass', 'Emergency response', 'Lifting and high-risk work'],
  },
  {
    icon: Finished,
    label: 'Rig assurance service',
    title: 'Independent attention to asset readiness.',
    description:
      'DROPS surveys, rig inspection, technical audit and commissioning support help teams identify risk before operations demand a response.',
    image:
      '/images/2. IWCF Drilling Well Control Well Site Supervisor Training, Individual candidate, Dec 2024/20241202.jpg.webp',
    imageAlt: 'Participants completing equipment-based simulation at an RSTS training facility',
    items: ['DROPS management', 'Inspection and audit', 'Commissioning support'],
  },
]

const pathways: Pathway[] = [
  {
    label: 'Foundation personnel',
    title: 'Recognise the signs. Understand the barriers.',
    description:
      'For personnel whose work contributes to influx detection, wellsite awareness and the first line of well control discipline.',
    image: '/images/rsts-capability-technical-v2.webp',
    imageAlt: 'Illustrative technical training environment for foundation personnel',
  },
  {
    label: 'Drillers',
    title: 'Detect, shut in and stabilise.',
    description:
      'For personnel responsible for recognising a kick, executing the shut-in and maintaining control through the initial response.',
    image: '/images/rsts-exploration-hero.webp',
    imageAlt: 'Illustrative drilling operation representing driller responsibility',
  },
  {
    label: 'Supervisors and wellsite leaders',
    title: 'Lead the decision when complexity rises.',
    description:
      'For personnel accountable for well design, kill strategy, operational oversight and coordinated supervisory decisions.',
    image:
      '/images/11. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250718.jpeg.webp',
    imageAlt: 'RSTS instructor supporting participants during a technical programme',
  },
]

const fieldStories: FieldStory[] = [
  {
    icon: Tools,
    title: 'Drilling equipment and procedures',
    meta: 'Client-site delivery / 2025',
    description:
      'Equipment recognition, operating sequence and crew communication in field context.',
  },
  {
    icon: Management,
    title: 'Supervisor well control',
    meta: 'Accredited pathway / 2025',
    description:
      'Decision-led well control development for personnel carrying supervisory responsibility.',
  },
  {
    icon: Connection,
    title: 'Completion and well service',
    meta: 'Technical programme / 2025',
    description: 'Completion workflow and well-service readiness for operating and service teams.',
  },
]

const rigServices: RigService[] = [
  {
    icon: Warning,
    title: 'DROPS surveys',
    description:
      'Baseline surveys, securing-method review and practical close-out support at height.',
  },
  {
    icon: Search,
    title: 'Rig inspection',
    description:
      'Structured inspection of drilling assets against the agreed work scope and operating context.',
  },
  {
    icon: DataAnalysis,
    title: 'Technical audit',
    description:
      'Focused review of equipment condition, systems and readiness against client requirements.',
  },
  {
    icon: SetUp,
    title: 'Commissioning support',
    description:
      'Independent support as machinery, equipment and critical systems move toward operation.',
  },
]

const deliveryModes: DeliveryMode[] = [
  {
    icon: School,
    title: 'Centre-based learning',
    description: 'Instructor-led programmes delivered in a focused training environment.',
  },
  {
    icon: Monitor,
    title: 'Portable simulation',
    description: 'Practical simulation capability positioned closer to crews and operating teams.',
  },
  {
    icon: Location,
    title: 'Client-site delivery',
    description: 'Technical and safety programmes mobilised to the location where teams work.',
  },
  {
    icon: Operation,
    title: 'Tailored team pathways',
    description:
      'Content, scenarios and delivery format aligned to roles and company requirements.',
  },
  {
    icon: User,
    title: 'Candidate coordination',
    description: 'Practical support around programme selection and attendance requirements.',
  },
]

const fieldEvidenceImage =
  '/images/11. Well Completion and Well Service Training, Cener Middle East FZE, Jul 2025/20250718.jpeg.webp'

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
    <section class="hero-section" aria-labelledby="hero-title">
      <picture class="hero-media">
        <source srcset="/images/v1-poster.png.webp" type="image/webp" />
        <img src="/images/v1-poster.png" alt="Oil and gas drilling operation supported by RSTS competence services"
          width="1920" height="1080" fetchpriority="high" decoding="async" />
      </picture>
      <span class="hero-shade" aria-hidden="true"></span>
      <span class="hero-lines" aria-hidden="true"></span>

      <div class="hero-shell">
        <div class="hero-composition">
          <header class="hero-copy">
            <p class="section-eyebrow">Rainbow Star Training Services LLC</p>
            <h1 id="hero-title"><span>RSTS</span><span>Academy</span></h1>
            <p class="hero-statement">
              Oil and gas training for exploration, drilling, well control and well service teams
              responsible for operating discipline in the field.
            </p>
            <div class="hero-actions" aria-label="Explore RSTS">
              <router-link class="primary-action" to="/course/catalog">
                Explore programs
                <el-icon>
                  <ArrowRight />
                </el-icon>
              </router-link>
              <a class="profile-action" :href="companyProfile" target="_blank" rel="noopener noreferrer">
                <img
                  class="profile-pdf-icon"
                  src="/images/adobe-acrobat-reader.svg"
                  alt=""
                  width="22"
                  height="22"
                />
                <span>Company profile</span>
              </a>
            </div>
          </header>

          <button class="hero-film" type="button" aria-label="Play the RSTS company overview video" @click="openVideo">
            <span class="hero-film-frame" aria-hidden="true">
              <img src="/images/v2-poster.png.webp" alt="" width="1920" height="1080" decoding="async" />
              <span class="hero-film-shade"></span>
              <span class="hero-film-play"><el-icon>
                  <VideoPlay />
                </el-icon></span>
            </span>
            <span class="hero-film-copy">
              <span class="hero-film-copy-text">
                <small>RSTS Academy film</small>
                <strong>Integrated training solutions for field-ready oil and gas teams.</strong>
              </span>
            </span>
          </button>
        </div>

        <div class="hero-metrics" aria-label="RSTS highlights">
          <div v-for="metric in metrics" :key="metric.label" class="metric-item">
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="recognition-section" aria-labelledby="recognition-title">
      <div class="recognition-shell">
        <div class="recognition-copy">
          <span class="section-eyebrow">Recognition network</span>
          <h2 id="recognition-title">Standards made visible.</h2>
          <p>Recognition marks represented across RSTS training and quality systems.</p>
        </div>
        <div class="recognition-logos" aria-label="RSTS recognition marks">
          <div v-for="partner in partnerLogos" :key="partner.name" class="logo-cell">
            <img :src="partner.image" :alt="`${partner.name} recognition mark`" width="110" height="64" loading="lazy"
              decoding="async" />
          </div>
        </div>
      </div>
    </section>
    <section class="pathways-section" aria-labelledby="pathways-title">
      <div class="section-shell pathways-layout">
        <figure class="pathways-visual">
          <img src="/images/rsts-capability-hse-v2.webp"
            alt="Illustrative role-aligned safety and operational training scenario" width="1133" height="1600"
            loading="lazy" decoding="async" />
          <figcaption>
            <span>Role-aligned progression</span>
            <strong>From awareness to operational leadership.</strong>
          </figcaption>
        </figure>

        <div class="pathways-content">
          <header class="pathways-copy">
            <span class="section-eyebrow">Accredited pathways</span>
            <h2 id="pathways-title">Responsibility changes. The standard remains.</h2>
            <p>
              Well control development aligned to what personnel must recognise, execute and lead at
              each level of operational responsibility.
            </p>
            <router-link class="inline-action" to="/course/catalog">
              Find a programme
              <el-icon>
                <ArrowRight />
              </el-icon>
            </router-link>
          </header>

          <div class="pathway-list">
            <article v-for="pathway in pathways" :key="pathway.title" class="pathway-item">
              <img class="pathway-image" :src="pathway.image" :alt="pathway.imageAlt" width="160" height="108"
                loading="lazy" decoding="async" />
              <div class="pathway-body">
                <span class="pathway-label">{{ pathway.label }}</span>
                <h3>{{ pathway.title }}</h3>
                <p>{{ pathway.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section class="capabilities-section" aria-labelledby="capabilities-title">
      <div class="section-shell capabilities-heading">
        <div class="capability-signature">
          <el-icon class="semantic-icon" aria-hidden="true">
            <Connection />
          </el-icon>
          <span class="section-eyebrow">Integrated capability</span>
          <strong>People.<br />Decisions.<br />Assets.</strong>
        </div>
        <div class="capability-heading-main">
          <h2 id="capabilities-title">Capability across the operating lifecycle.</h2>
          <div class="capability-heading-summary">
            <p>
              One partner for accredited competence, technical development, safety behaviour and
              operational assurance.
            </p>
            <router-link class="inline-action light" to="/course/catalog">
              Explore the catalogue
              <el-icon>
                <ArrowRight />
              </el-icon>
            </router-link>
          </div>
        </div>
      </div>

      <div class="section-shell capability-stage">
        <article class="capability-lead">
          <img :src="capabilities[0].image" :alt="capabilities[0].imageAlt" width="860" height="720" loading="lazy"
            decoding="async" />
          <span class="capability-lead-shade" aria-hidden="true"></span>
          <div class="capability-lead-copy">
            <div class="capability-kicker">
              <el-icon class="semantic-icon" aria-hidden="true">
                <component :is="capabilities[0].icon" />
              </el-icon>
              <span>{{ capabilities[0].label }}</span>
            </div>
            <h3>{{ capabilities[0].title }}</h3>
            <p>{{ capabilities[0].description }}</p>
            <ul>
              <li v-for="item in capabilities[0].items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </article>

        <div class="capability-index">
          <article v-for="capability in capabilities.slice(1)" :key="capability.title" class="capability-row">
            <figure>
              <img :src="capability.image" :alt="capability.imageAlt" width="260" height="180" loading="lazy"
                decoding="async" />
              <figcaption aria-hidden="true">
                <el-icon class="semantic-icon">
                  <component :is="capability.icon" />
                </el-icon>
              </figcaption>
            </figure>
            <div>
              <span>{{ capability.label }}</span>
              <h3>{{ capability.title }}</h3>
              <p>{{ capability.description }}</p>
              <ul>
                <li v-for="item in capability.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="evidence-section" aria-labelledby="evidence-title">
      <div class="section-shell evidence-heading">
        <div class="evidence-heading-copy">
          <span class="section-eyebrow">Operational evidence</span>
          <h2 id="evidence-title">Training becomes credible where the work is visible.</h2>
        </div>
        <div class="evidence-principle">
          <el-icon class="semantic-icon" aria-hidden="true">
            <DataAnalysis />
          </el-icon>
          <p>
            Practical delivery connects standards to equipment, decisions and the communication
            expected in the field.
          </p>
        </div>
      </div>

      <div class="section-shell evidence-layout">
        <figure class="evidence-media">
          <img :src="fieldEvidenceImage"
            alt="Instructor distributing technical learning material during an RSTS programme" width="900" height="680"
            loading="lazy" decoding="async" />
          <figcaption>
            <span>Applied technical delivery</span>
            <strong>Standards connected to equipment, sequence and crew communication.</strong>
          </figcaption>
        </figure>

        <div class="evidence-log" aria-label="Recent RSTS programme evidence">
          <article v-for="story in fieldStories" :key="story.title" class="evidence-entry">
            <el-icon class="semantic-icon evidence-icon" aria-hidden="true">
              <component :is="story.icon" />
            </el-icon>
            <div>
              <small>{{ story.meta }}</small>
              <h3>{{ story.title }}</h3>
              <p>{{ story.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="rig-section" aria-labelledby="rig-title">
      <div class="rig-layout">
        <figure class="rig-visual">
          <img src="/images/rsts-rig-assurance.webp"
            alt="Illustrative rig assurance inspection scenario on a drilling asset" width="1920" height="1080"
            loading="lazy" decoding="async" />
          <figcaption>Asset readiness / independent field attention</figcaption>
        </figure>

        <div class="rig-content">
          <header class="rig-copy">
            <span class="section-eyebrow">Rig assurance</span>
            <h2 id="rig-title">Readiness is inspected, not assumed.</h2>
            <p>
              Independent field attention for drilling assets, critical equipment and the controls
              that support safer mobilisation and operation.
            </p>
            <router-link class="primary-action compact" to="/contact">
              Discuss rig assurance
              <el-icon>
                <ArrowRight />
              </el-icon>
            </router-link>
          </header>

          <div class="rig-services">
            <article v-for="service in rigServices" :key="service.title" class="rig-service">
              <el-icon class="semantic-icon rig-service-icon" aria-hidden="true">
                <component :is="service.icon" />
              </el-icon>
              <div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="delivery-section" aria-labelledby="delivery-title">
      <div class="section-shell delivery-layout">
        <header class="delivery-copy">
          <span class="section-eyebrow">Flexible by design</span>
          <h2 id="delivery-title">The same standard, closer to your operation.</h2>
          <p>
            Choose a focused training environment or bring RSTS closer to the team. Delivery is
            shaped around role, location and operating context without duplicating the learning
            purpose.
          </p>
          <figure class="section-visual delivery-visual">
            <img src="/images/rsts-delivery-client-site-v2.webp"
              alt="Illustrative client-site technical training scenario" width="1086" height="1448" loading="lazy"
              decoding="async" />
            <figcaption>
              <span>Delivery model</span>
              <strong>Capability brought closer to the team.</strong>
            </figcaption>
          </figure>
        </header>

        <div class="delivery-modes" aria-label="RSTS delivery modes">
          <article v-for="mode in deliveryModes" :key="mode.title" class="delivery-mode">
            <el-icon class="semantic-icon delivery-icon" aria-hidden="true">
              <component :is="mode.icon" />
            </el-icon>
            <h3>{{ mode.title }}</h3>
            <p>{{ mode.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="closing-section" aria-labelledby="closing-title">
      <div class="section-shell assurance-panel">
        <div class="assurance-copy">
          <span class="section-eyebrow">Training assurance</span>
          <h2>Competence records remain visible after the course.</h2>
          <p>
            Certificate verification supports candidate records, company review and audit
            preparation across completed programmes.
          </p>
          <router-link class="verify-action" to="/certificates/index">
            Verify a certificate
            <el-icon>
              <DocumentChecked />
            </el-icon>
          </router-link>
        </div>

        <div class="closing-copy">
          <span class="section-eyebrow">Plan the next requirement</span>
          <h2 id="closing-title">Build capability before the operation demands it.</h2>
          <p>
            Select an accredited pathway, shape a team programme or discuss an assurance scope with
            RSTS.
          </p>
          <div class="closing-actions">
            <router-link class="primary-action compact" to="/contact">
              Talk to RSTS
              <el-icon>
                <ArrowRight />
              </el-icon>
            </router-link>
            <router-link class="ghost-action compact" to="/course/catalog">
              Explore programmes
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>

  <el-dialog v-model="dialogVisible" title="RSTS: Training and Assurance for Oil and Gas Operations" align-center
    class="video-dialog" width="min(980px, 92vw)" @close="handleDialogClose">
    <video v-if="dialogVisible" ref="videoPlayer" class="video-player" :src="introVideo" autoplay controls playsinline
      preload="metadata"></video>
  </el-dialog>
</template>

<style scoped lang="scss">
.home-page {
  --ink: #182630;
  --muted: #62707a;
  --deep: #061726;
  --petrol: #0a2b35;
  --petrol-light: #17434d;
  --mineral: #edf1f2;
  --ivory: #f7f8f7;
  --paper: #ffffff;
  --copper: #c45f45;
  --copper-dark: #97412f;
  --line: rgba(24, 38, 48, 0.15);
  --line-light: rgba(255, 255, 255, 0.22);
  --white: #ffffff;
  --display-font: 'Avenir Next', 'Aptos Display', 'Segoe UI', sans-serif;
  overflow: hidden;
  background: var(--ivory);
  color: var(--ink);
  font-family: Aptos, 'Gill Sans', 'Trebuchet MS', sans-serif;
}

.section-shell,
.hero-shell,
.recognition-shell {
  width: min(1280px, calc(100% - 72px));
  margin: 0 auto;
}

.section-eyebrow {
  display: inline-flex;
  margin: 0;
  color: var(--copper);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.1em;
  line-height: 1.2;
  text-transform: uppercase;
}

.hero-section {
  position: relative;
  min-height: min(890px, calc(100svh - 76px));
  display: grid;
  isolation: isolate;
  overflow: hidden;
  background: var(--deep);
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
    object-position: center 42%;
    animation: hero-drift 18s ease-in-out infinite alternate;
  }
}

.hero-shade {
  z-index: -2;
  background:
    linear-gradient(180deg, rgba(4, 16, 24, 0.02) 58%, rgba(4, 16, 24, 0.98) 100%),
    linear-gradient(90deg,
      rgba(4, 16, 24, 0.98) 0%,
      rgba(4, 16, 24, 0.78) 48%,
      rgba(4, 16, 24, 0.16) 100%);
}

.hero-lines {
  z-index: -1;
  opacity: 0.22;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.24) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.18) 1px, transparent 1px);
  background-size:
    25% 100%,
    25% 100%;
}

.hero-shell {
  width: min(1240px, calc(100% - 72px));
  min-height: inherit;
  display: grid;
  grid-template-rows: minmax(642px, 1fr) 150px;
  align-content: start;
  color: var(--white);
}

.hero-composition {
  display: grid;
  grid-template-columns: minmax(0, 660px) minmax(420px, 520px);
  gap: 60px;
  align-items: end;
  padding: 0 0 52px;
}

.hero-copy {
  max-width: 738px;

  .section-eyebrow {
    color: rgba(255, 255, 255, 0.72);
    font-size: 12px;
    letter-spacing: 0.12em;
    line-height: 1;
    transform: translateY(5px);
  }

  h1 {
    margin: 18px 0 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 144px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 0.84;

    span {
      display: block;
    }
  }
}

.hero-statement {
  max-width: 738px;
  margin: 28px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 25px;
  line-height: 1.44;
}

.hero-actions,
.closing-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.hero-actions {
  margin-top: 34px;
}

.primary-action,
.ghost-action,
.verify-action {
  min-height: 52px;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 22px;
  border: 1px solid transparent;
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background 180ms ease,
    border-color 180ms ease,
    color 180ms ease,
    transform 180ms ease;

  &:hover {
    transform: none;
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }
}

.primary-action {
  background: var(--copper);
  color: #ffffff;

  &:hover {
    background: #b6563e;
  }
}

.ghost-action {
  border-color: rgba(255, 255, 255, 0.48);
  background: rgba(5, 18, 26, 0.24);
  color: #ffffff;

  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.08);
  }
}

.profile-action {
  min-height: 52px;
  box-sizing: border-box;
  display: inline-flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  padding: 0 22px;
  border: 1px solid rgba(255, 255, 255, 0.52);
  background: rgba(5, 18, 26, 0.36);
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
  transition:
    background 180ms ease,
    border-color 180ms ease;

  &:hover {
    border-color: #ffffff;
    background: rgba(255, 255, 255, 0.1);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }

  .profile-pdf-icon {
    width: 22px;
    height: 22px;
    flex: 0 0 22px;
    display: block;
  }
}

.hero-actions .primary-action {
  font-size: 14px;
}

.hero-film {
  position: relative;
  width: min(100%, 520px);
  display: grid;
  justify-self: end;
  overflow: hidden;
  padding: 0;
  border: 0;
  background: #f3f0e9;
  box-shadow: 0 34px 90px rgba(0, 0, 0, 0.48);
  color: var(--ink);
  cursor: pointer;
  font: inherit;
  text-align: left;
  transition:
    box-shadow 400ms ease,
    transform 400ms ease;

  &:hover {
    box-shadow: 0 44px 116px rgba(0, 0, 0, 0.56);
    transform: translateY(-4px);
  }

  &:hover .hero-film-frame>img {
    filter: saturate(1) contrast(1.04);
    transform: scale(1.025);
  }

  &:hover .hero-film-play {
    background: #ffffff;
    color: var(--deep);
    transform: scale(1.06);
  }

  &:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 4px;
  }
}

.hero-film-frame {
  position: relative;
  aspect-ratio: 16 / 9;
  display: block;
  overflow: hidden;
  background: #071821;

  >img,
  .hero-film-shade {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  >img {
    display: block;
    object-fit: cover;
    filter: saturate(0.92) contrast(1.02);
    transition:
      filter 450ms ease,
      transform 600ms ease;
  }
}

.hero-film-shade {
  background: linear-gradient(180deg, rgba(3, 18, 27, 0.02) 45%, rgba(3, 18, 27, 0.46) 100%);
}

.hero-film-copy {
  min-height: 122px;
  box-sizing: border-box;
  display: block;
  padding: 24px 30px 28px;
  background: #f3f0e9;
}

.hero-film-copy-text {
  min-width: 0;

  small {
    display: block;
    margin-bottom: 9px;
    color: var(--copper-dark);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  strong {
    max-width: 440px;
    display: block;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 25px;
    font-weight: 500;
    line-height: 1.1;
    color: var(--ink);
  }
}

.hero-film-play {
  position: absolute;
  right: 26px;
  bottom: 24px;
  z-index: 1;
  width: 64px;
  height: 64px;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: var(--copper);
  color: #ffffff;
  font-size: 22px;
  transition:
    background 180ms ease,
    color 180ms ease,
    transform 180ms ease;
}

.compact {
  min-height: 48px;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--line-light);
  border-bottom: 1px solid var(--line-light);
}

.metric-item {
  min-height: 148px;
  box-sizing: border-box;
  display: grid;
  align-content: center;
  gap: 8px;
  padding: 22px 34px;
  border-left: 1px solid var(--line-light);

  &:first-child {
    border-left: 0;
  }

  strong {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 36px;
    font-weight: 500;
    line-height: 1;
  }

  span {
    color: rgba(255, 255, 255, 0.62);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.09em;
    line-height: 2;
    text-transform: uppercase;
  }
}

.recognition-section {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: #f8f9f8;
  border-bottom: 1px solid var(--line);

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 52%;
    background-image:
      linear-gradient(rgba(24, 38, 48, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(24, 38, 48, 0.035) 1px, transparent 1px);
    background-size: 64px 64px;
    content: '';
  }

  &::after {
    position: absolute;
    top: 0;
    right: 6%;
    width: 150px;
    height: 4px;
    background: var(--copper);
    content: '';
  }
}

.recognition-shell {
  display: grid;
  grid-template-columns: minmax(300px, 0.38fr) minmax(0, 0.62fr);
  gap: 48px;
  align-items: center;
  padding: 38px 0;
}

.recognition-copy {
  h2 {
    margin: 10px 0 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 1.05;
  }

  p {
    max-width: 410px;
    margin: 12px 0 0;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.55;
  }
}

.recognition-logos {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  border-left: 1px solid var(--line);
}

.logo-cell {
  min-height: 90px;
  display: grid;
  place-items: center;
  padding: 14px;
  border-right: 1px solid var(--line);

  img {
    max-width: 100%;
    max-height: 58px;
    object-fit: contain;
  }
}

.capabilities-section {
  position: relative;
  padding: 116px 0 128px;
  overflow: hidden;
  background: #071d27;
  color: #ffffff;

  &::before {
    position: absolute;
    inset: 0;
    opacity: 0.12;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 96px 96px;
    content: '';
  }
}

.capabilities-heading {
  position: relative;
  display: grid;
  grid-template-columns: minmax(220px, 0.27fr) minmax(0, 0.73fr);
  gap: 72px;
  align-items: stretch;
  margin-bottom: 72px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.24);

  .capability-signature {
    display: grid;
    grid-template-columns: 32px 1fr;
    gap: 12px 14px;
    align-content: start;
    padding-right: 38px;
    border-right: 1px solid rgba(255, 255, 255, 0.18);

    .semantic-icon {
      grid-row: 1 / span 2;
      color: #ef896a;
    }

    .section-eyebrow {
      align-self: center;
    }

    strong {
      margin-top: 16px;
      font-family: var(--display-font);
      font-size: 28px;
      font-weight: 450;
      line-height: 1.08;
    }
  }

  .capability-heading-main {
    h2 {
      max-width: 900px;
      margin: 0;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 64px;
      font-weight: 500;
      line-height: 0.96;
    }
  }

  .capability-heading-summary {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 44px;
    align-items: end;
    margin-top: 36px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.18);

    p {
      max-width: 620px;
      margin: 0;
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
      line-height: 1.65;
    }

    .inline-action {
      margin-bottom: 2px;
    }
  }
}

.inline-action {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0 0 9px;
  border-bottom: 1px solid currentColor;
  color: var(--ink);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;

  &.light {
    color: #ffffff;
  }

  &:focus-visible {
    outline: 2px solid var(--copper);
    outline-offset: 4px;
  }
}

.semantic-icon {
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  color: var(--copper-dark);
  font-size: 22px;
}

.capability-stage {
  position: relative;
  width: min(1360px, calc(100% - 72px));
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
}

.capability-lead {
  position: relative;
  min-height: 660px;
  overflow: hidden;

  >img,
  .capability-lead-shade {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  >img {
    display: block;
    object-fit: cover;
  }
}

.capability-lead-shade {
  background: linear-gradient(180deg, rgba(4, 18, 19, 0.05), rgba(4, 18, 19, 0.94));
}

.capability-lead-copy {
  position: absolute;
  right: 54px;
  bottom: 52px;
  left: 54px;

  .capability-kicker {
    display: flex;
    align-items: center;
    gap: 10px;

    .semantic-icon {
      color: #ef896a;
    }

    span {
      color: #ef896a;
      font-size: 10px;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
  }

  h3 {
    max-width: 600px;
    margin: 14px 0 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 52px;
    font-weight: 500;
    line-height: 0.98;
  }

  p {
    max-width: 620px;
    margin: 20px 0 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    line-height: 1.65;
  }

  ul {
    margin: 22px 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 22px;
    padding: 17px 0 0;
    border-top: 1px solid rgba(255, 255, 255, 0.22);
    list-style: none;
  }

  li {
    color: rgba(255, 255, 255, 0.78);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
}

.capability-index {
  border-left: 1px solid rgba(255, 255, 255, 0.16);
}

.capability-row {
  min-height: 220px;
  display: grid;
  grid-template-columns: 150px 1fr;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);

  &:last-child {
    border-bottom: 0;
  }

  figure {
    position: relative;
    min-height: 100%;
    margin: 0;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    figcaption {
      position: absolute;
      top: 14px;
      left: 14px;
      width: 42px;
      height: 42px;
      display: grid;
      place-items: center;
      border: 1px solid rgba(255, 255, 255, 0.35);
      background: rgba(3, 24, 28, 0.76);

      .semantic-icon {
        color: #ffffff;
      }
    }
  }

  >div {
    padding: 30px 28px;
  }

  >div>span {
    color: #ef896a;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h3 {
    margin: 10px 0 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 27px;
    font-weight: 500;
    line-height: 1.06;
  }

  p {
    margin: 13px 0 0;
    color: rgba(255, 255, 255, 0.58);
    font-size: 12px;
    line-height: 1.55;
  }

  ul {
    margin: 15px 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 5px 14px;
    padding: 12px 0 0;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    list-style: none;
  }

  li {
    color: rgba(255, 255, 255, 0.68);
    font-size: 9px;
    font-weight: 800;
    text-transform: uppercase;
  }
}

.pathways-section {
  padding: 54px 0;
  background: #f6f3ed;
}

.pathways-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(440px, 0.95fr);
  gap: clamp(54px, 6vw, 86px);
  align-items: center;
}

.pathways-visual {
  position: relative;
  aspect-ratio: 3 / 4;
  margin: 0;
  overflow: hidden;
  background: var(--deep);
  box-shadow: 0 24px 62px rgba(43, 48, 45, 0.14);

  &::after {
    position: absolute;
    inset: 22px;
    border: 1px solid rgba(230, 184, 107, 0.46);
    pointer-events: none;
    content: '';
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }

  figcaption {
    position: absolute;
    right: 23px;
    bottom: 23px;
    left: 23px;
    z-index: 1;
    padding: 48px 20px 18px;
    background: linear-gradient(180deg, transparent, rgba(4, 21, 27, 0.82));
    color: #ffffff;

    span {
      display: block;
      color: #efb66d;
      font-size: 10px;
      font-weight: 800;
      text-transform: uppercase;
    }

    strong {
      display: block;
      margin-top: 6px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 19px;
      font-weight: 500;
      line-height: 1.2;
    }
  }
}

.pathways-content {
  min-width: 0;
}

.pathways-copy {
  h2 {
    max-width: 600px;
    margin: 18px 0 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(46px, 4.2vw, 66px);
    font-weight: 500;
    line-height: 0.96;
  }

  p {
    max-width: 590px;
    margin: 26px 0 0;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.7;
  }

  .inline-action {
    margin-top: 22px;
  }
}

.section-visual {
  position: relative;
  aspect-ratio: 4 / 3;
  margin: 44px 0 0;
  overflow: hidden;
  border-top: 1px solid rgba(20, 38, 35, 0.28);
  border-bottom: 1px solid rgba(20, 38, 35, 0.28);
  background: var(--deep);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 300ms ease;
  }

  &::after {
    position: absolute;
    inset: 36% 0 0;
    background: linear-gradient(180deg, transparent, rgba(3, 24, 28, 0.9));
    content: '';
  }

  figcaption {
    position: absolute;
    right: 24px;
    bottom: 24px;
    left: 24px;
    z-index: 1;
    color: #ffffff;

    span {
      display: block;
      color: #ef896a;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    strong {
      max-width: 360px;
      display: block;
      margin-top: 9px;
      font-family: var(--display-font);
      font-size: 23px;
      font-weight: 450;
      line-height: 1.08;
    }
  }
}

.delivery-visual {
  aspect-ratio: 5 / 4;

  img {
    object-position: center 38%;
  }
}

.pathway-list {
  display: grid;
  gap: 14px;
  margin-top: 42px;
}

.pathway-item {
  min-height: 112px;
  display: grid;
  grid-template-columns: 128px minmax(0, 1fr);
  gap: 20px;
  align-items: center;
  padding: 14px;
  border: 1px solid rgba(31, 46, 51, 0.11);
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 12px 32px rgba(37, 43, 40, 0.07);

  .pathway-image {
    width: 128px;
    height: 86px;
    display: block;
    object-fit: cover;
  }

  .pathway-label {
    display: block;
    color: var(--copper-dark);
    font-size: 9px;
    font-weight: 900;
    text-transform: uppercase;
  }

  h3 {
    margin: 5px 0 0;
    font-size: 17px;
    line-height: 1.2;
  }

  p {
    margin: 7px 0 0;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.5;
  }
}

.pathways-section .pathways-copy h2,
.pathways-section .pathway-item h3 {
  font-family: Georgia, 'Times New Roman', serif;
}

.evidence-section {
  padding: 96px 0 104px;
  background: var(--paper);
}

.evidence-heading {
  width: min(1360px, calc(100% - 72px));
  min-height: 300px;
  display: grid;
  grid-template-columns: minmax(0, 1.38fr) minmax(340px, 0.62fr);
  gap: 0;
  align-items: stretch;
  overflow: hidden;
  background: #08232c;
  box-shadow: 0 26px 70px rgba(16, 32, 36, 0.12);

  h2 {
    max-width: 840px;
    margin: 24px 0 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(52px, 4.4vw, 66px);
    font-weight: 500;
    line-height: 0.96;
    color: #ffffff;
  }

  .section-eyebrow {
    color: #efb66d;
  }
}

.evidence-heading-copy {
  display: grid;
  align-content: center;
  padding: 54px 64px 58px;
}

.evidence-principle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 42px;
  padding: 52px 56px;
  background: transparent;

  .semantic-icon {
    width: 34px;
    height: 34px;
    color: #efb66d;
    font-size: 30px;
  }

  p {
    max-width: 360px;
    margin: 0;
    color: rgba(255, 255, 255, 0.74);
    font-family: Aptos, 'Gill Sans', 'Trebuchet MS', sans-serif;
    font-size: 17px;
    line-height: 1.7;
  }
}

.evidence-section .evidence-heading h2 {
  font-family: Georgia, 'Times New Roman', serif;
  font-weight: 500;
}

.evidence-layout {
  width: min(1360px, calc(100% - 72px));
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
  margin-top: 38px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.evidence-media {
  position: relative;
  min-height: 560px;
  margin: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  &::after {
    position: absolute;
    inset: 40% 0 0;
    background: linear-gradient(180deg, transparent, rgba(4, 19, 22, 0.9));
    content: '';
  }

  figcaption {
    position: absolute;
    right: 44px;
    bottom: 42px;
    left: 44px;
    z-index: 1;
    color: #ffffff;

    span {
      color: #ef896a;
      font-size: 10px;
      font-weight: 900;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    strong {
      max-width: 620px;
      display: block;
      margin-top: 10px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: 35px;
      font-weight: 500;
      line-height: 1.05;
    }
  }
}

.evidence-log {
  border-left: 1px solid var(--line);
}

.evidence-entry {
  min-height: 186px;
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 22px;
  padding: 30px 32px;
  border-bottom: 1px solid var(--line);

  &:last-child {
    border-bottom: 0;
  }

  .evidence-icon {
    margin-top: 2px;
  }

  small {
    color: var(--copper-dark);
    font-size: 9px;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h3 {
    margin: 10px 0 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 29px;
    font-weight: 500;
    line-height: 1.05;
  }

  p {
    margin: 15px 0 0;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.6;
  }
}

.rig-section {
  background: var(--petrol);
  color: #ffffff;
}

.rig-layout {
  width: min(1440px, 100%);
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(560px, 1fr);
  margin: 0 auto;
}

.rig-visual {
  position: relative;
  min-height: 760px;
  margin: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
  }

  &::after {
    position: absolute;
    inset: 55% 0 0;
    background: linear-gradient(180deg, transparent, rgba(3, 24, 28, 0.82));
    content: '';
  }

  figcaption {
    position: absolute;
    right: 32px;
    bottom: 28px;
    left: 32px;
    z-index: 1;
    color: rgba(255, 255, 255, 0.78);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
}

.rig-content {
  display: grid;
  align-content: center;
  padding: 76px clamp(40px, 5vw, 80px);
  background: #08232c;
}

.rig-copy {
  h2 {
    max-width: 560px;
    margin: 22px 0 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 52px;
    font-weight: 500;
    line-height: 0.94;
  }

  p {
    max-width: 540px;
    margin: 28px 0 0;
    color: rgba(255, 255, 255, 0.72);
    font-size: 17px;
    line-height: 1.7;
  }

  .primary-action {
    margin-top: 34px;
  }
}

.rig-services {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 52px;
  border-top: 1px solid rgba(255, 255, 255, 0.28);
  border-left: 1px solid rgba(255, 255, 255, 0.18);
}

.rig-service {
  min-height: 172px;
  display: block;
  padding: 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.18);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  .rig-service-icon {
    color: #ef896a;
  }

  h3 {
    margin: 24px 0 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 24px;
    font-weight: 500;
  }

  p {
    max-width: 470px;
    margin: 8px 0 0;
    color: rgba(255, 255, 255, 0.62);
    font-size: 13px;
    line-height: 1.55;
  }
}

.delivery-section {
  padding: 96px 0 104px;
  background: var(--mineral);
}

.delivery-layout {
  display: grid;
  grid-template-columns: minmax(320px, 0.78fr) minmax(0, 1.22fr);
  gap: 90px;
}

.delivery-copy {
  h2 {
    max-width: 560px;
    margin: 22px 0 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 52px;
    font-weight: 500;
    line-height: 0.98;
  }

  p {
    max-width: 510px;
    margin: 30px 0 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.7;
  }
}

.delivery-modes {
  border-top: 1px solid rgba(20, 38, 35, 0.24);
}

.delivery-mode {
  min-height: 96px;
  display: grid;
  grid-template-columns: 42px minmax(180px, 0.72fr) minmax(220px, 1fr);
  gap: 22px;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid var(--line);

  .delivery-icon {
    align-self: start;
    margin-top: 1px;
  }

  h3 {
    margin: 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.1;
  }

  p {
    margin: 0;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.55;
  }
}

.closing-section {
  padding: 20px 0;
  background: #071821;
  color: #ffffff;
}

.assurance-panel {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.assurance-copy,
.closing-copy {
  min-height: 540px;
  display: grid;
  align-content: center;
  padding: 76px 64px;

  h2 {
    max-width: 520px;
    margin: 20px 0 0;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 45px;
    font-weight: 500;
    line-height: 1;
  }

  p {
    max-width: 520px;
    margin: 24px 0 0;
    color: rgba(255, 255, 255, 0.64);
    font-size: 15px;
    line-height: 1.65;
  }
}

.assurance-copy {
  border-right: 1px solid rgba(255, 255, 255, 0.16);
  background: #0d2a33;
}

.verify-action {
  width: fit-content;
  margin-top: 32px;
  border-color: rgba(255, 255, 255, 0.38);
  color: #ffffff;
}

.recognition-copy h2,
.capabilities-heading h2,
.capability-lead-copy h3,
.capability-row h3,
.pathways-copy h2,
.pathway-item h3,
.evidence-heading h2,
.evidence-media figcaption strong,
.evidence-entry h3,
.rig-copy h2,
.rig-service h3,
.delivery-copy h2,
.delivery-mode h3,
.assurance-copy h2,
.closing-copy h2 {
  font-family: var(--display-font);
  font-weight: 450;
}

.capability-kicker span,
.capability-row>div>span,
.pathway-label,
.evidence-entry small {
  font-weight: 700;
}

.video-player {
  width: 100%;
  max-height: 72vh;
  display: block;
  background: #000000;
}

@keyframes hero-drift {
  from {
    transform: scale(1.03);
  }

  to {
    transform: scale(1.09) translate3d(1%, 0.6%, 0);
  }
}

@media (max-width: 1180px) {
  .hero-composition {
    grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.72fr);
    gap: 44px;
  }

  .hero-copy h1 {
    font-size: 110px;
  }

  .recognition-shell,
  .capabilities-heading,
  .pathways-layout,
  .delivery-layout {
    gap: 56px;
  }

  .recognition-shell {
    grid-template-columns: 1fr;
  }

  .recognition-logos {
    border-top: 1px solid var(--line);
  }

  .capability-stage {
    grid-template-columns: 1fr;
  }

  .capability-index {
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    border-left: 0;
  }

  .capability-row {
    grid-template-columns: 220px 1fr;
  }

  .evidence-layout {
    grid-template-columns: 1fr;
  }

  .evidence-log {
    border-top: 1px solid var(--line);
    border-left: 0;
  }

  .rig-layout {
    grid-template-columns: 1fr 1fr;
  }

  .delivery-layout {
    grid-template-columns: 0.8fr 1.2fr;
  }
}

@media (max-width: 820px) {

  .section-shell,
  .hero-shell,
  .recognition-shell {
    width: min(100% - 32px, 580px);
  }

  .hero-section {
    min-height: auto;
  }

  .hero-shell {
    grid-template-rows: auto auto;
    padding-top: 34px;
  }

  .hero-composition {
    grid-template-columns: 1fr;
    gap: 34px;
    padding: 36px 0 40px;
  }

  .hero-copy h1 {
    font-size: 88px;
  }

  .hero-statement {
    font-size: 17px;
  }

  .hero-actions {
    display: flex;
  }

  .hero-film {
    width: 100%;
    max-width: none;
    justify-self: stretch;
  }

  .section-eyebrow {
    font-size: 12px;
  }

  .metric-item {
    min-height: 108px;
    gap: 7px;
    padding: 14px 10px;

    strong {
      font-size: 19px;
      line-height: 1.15;
    }

    span {
      font-size: 12px;
      letter-spacing: 0;
    }
  }

  .recognition-section::before {
    width: 70%;
  }

  .recognition-logos {
    grid-template-columns: repeat(2, 1fr);
  }

  .capabilities-section,
  .pathways-section,
  .evidence-section,
  .delivery-section {
    padding: 76px 0 82px;
  }

  .capabilities-heading,
  .pathways-layout,
  .evidence-heading,
  .rig-layout,
  .delivery-layout,
  .assurance-panel {
    grid-template-columns: 1fr;
  }

  .capabilities-heading,
  .evidence-heading {
    gap: 40px;
  }

  .capabilities-heading .capability-signature {
    padding: 0 0 30px;
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }

  .capabilities-heading .capability-heading-summary {
    grid-template-columns: 1fr;
    gap: 24px;

    p {
      max-width: 100%;
    }
  }

  .evidence-heading-copy {
    padding: 44px 34px 48px;
  }

  .evidence-principle {
    gap: 26px;
    padding: 34px;

    p {
      max-width: 100%;
      font-size: 17px;
    }
  }

  .capabilities-heading h2,
  .pathways-copy h2,
  .evidence-heading h2,
  .rig-copy h2,
  .delivery-copy h2 {
    font-size: 44px;
  }

  .capability-lead {
    min-height: 600px;
  }

  .capability-lead-copy {
    right: 26px;
    bottom: 30px;
    left: 26px;

    h3 {
      font-size: 38px;
    }
  }

  .capability-row {
    grid-template-columns: 1fr;

    figure {
      min-height: 210px;
    }
  }

  .pathways-copy {
    margin-bottom: 0;
  }

  .section-visual {
    margin-top: 36px;

    figcaption {
      right: 22px;
      bottom: 22px;
      left: 22px;

      span {
        font-size: 12px;
        letter-spacing: 0;
      }

      strong {
        font-size: 22px;
      }
    }
  }

  .delivery-visual {
    aspect-ratio: 4 / 3;
  }

  .pathway-item {
    min-height: 0;
    grid-template-columns: 112px minmax(0, 1fr);
    gap: 16px;
    padding: 12px;

    .pathway-image {
      width: 112px;
      height: 92px;
    }
  }

  .evidence-layout {
    margin-top: 44px;
  }

  .evidence-media {
    min-height: 500px;

    figcaption {
      right: 24px;
      bottom: 26px;
      left: 24px;

      strong {
        font-size: 29px;
      }
    }
  }

  .evidence-entry {
    min-height: 0;
    padding: 28px 22px;
  }

  .rig-visual {
    min-height: 430px;
  }

  .rig-content {
    padding: 64px 16px 72px;
  }

  .rig-services {
    grid-template-columns: 1fr;
    margin-top: 42px;
  }

  .rig-service {
    min-height: 0;
    padding: 24px;
  }

  .delivery-mode {
    grid-template-columns: 38px 1fr;
    gap: 8px 14px;
    align-items: start;

    .delivery-icon {
      grid-row: 1 / span 2;
      padding-top: 5px;
    }

    h3,
    p {
      grid-column: 2;
    }
  }

  .assurance-copy,
  .closing-copy {
    min-height: 0;
    padding: 64px 28px;
  }

  .assurance-copy {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  }

  .recognition-copy p,
  .capability-lead-copy p,
  .capability-row p,
  .pathway-item p,
  .evidence-entry p,
  .rig-copy p,
  .rig-service p,
  .delivery-mode p,
  .assurance-copy p,
  .closing-copy p {
    font-size: 16px;
  }

  .capability-kicker span,
  .capability-lead-copy li,
  .capability-row>div>span,
  .capability-row li,
  .pathway-label,
  .evidence-media figcaption span,
  .evidence-entry small {
    font-size: 12px;
    letter-spacing: 0;
  }
}

@media (max-width: 460px) {
  .hero-shell {
    padding-top: 22px;
  }

  .hero-composition {
    padding-top: 28px;
  }

  .hero-copy h1 {
    font-size: 78px;
  }

  .hero-actions {
    display: grid;
  }

  .primary-action,
  .profile-action {
    width: 100%;
  }

  .hero-film-copy strong {
    font-size: 21px;
  }

  .hero-film-copy {
    min-height: 112px;
    padding: 20px 22px 23px;
  }

  .hero-film-play {
    width: 56px;
    height: 56px;
    right: 18px;
    bottom: 18px;
  }

  .capabilities-heading h2,
  .pathways-copy h2,
  .evidence-heading h2,
  .rig-copy h2,
  .delivery-copy h2 {
    font-size: 39px;
  }

  .evidence-heading-copy {
    padding: 38px 24px 30px;
  }

  .evidence-principle {
    gap: 22px;
    padding: 0 24px 30px;
  }

  .capability-lead {
    min-height: 560px;
  }

  .capability-lead-copy h3 {
    font-size: 34px;
  }

  .pathways-section {
    padding: 38px 0 46px;
  }

  .pathways-visual {
    aspect-ratio: 4 / 5;

    &::after {
      inset: 14px;
    }

    figcaption {
      right: 15px;
      bottom: 15px;
      left: 15px;
      padding: 42px 14px 14px;
    }
  }

  .pathway-list {
    margin-top: 34px;
  }

  .pathway-item {
    grid-template-columns: 92px minmax(0, 1fr);
    gap: 12px;
    padding: 10px;

    .pathway-image {
      width: 92px;
      height: 92px;
    }

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 13px;
    }
  }

  .pathway-item h3 {
    font-size: 18px;
  }

  .evidence-media {
    min-height: 450px;
  }

  .assurance-copy h2,
  .closing-copy h2 {
    font-size: 38px;
  }
}

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }

  .hero-media img {
    animation: none;
  }
}
</style>
