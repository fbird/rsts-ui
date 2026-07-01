<script setup lang="ts">
type AccreditationLogo = {
  src: string
  alt: string
}

type Metric = {
  value: string
  label: string
}

type Capability = {
  title: string
  description: string
}

const deliveryImage = '/images/20250401.jpg'
const deliveryImageWebp = '/images/20250401.jpg.webp'

const accreditationLogos: AccreditationLogo[] = [
  { src: '/images/companyQualification/ASCB.png.webp', alt: 'ASCB' },
  { src: '/images/companyQualification/ActvetLogo.png.webp', alt: 'ACTVET' },
  { src: '/images/companyQualification/DAC Logo.png.webp', alt: 'DAC' },
  { src: '/images/companyQualification/Highfield.png.webp', alt: 'Highfield' },
  { src: '/images/companyQualification/IAF_LOGO.svg', alt: 'IAF' },
  { src: '/images/companyQualification/IADC.png.webp', alt: 'IADC' },
  { src: '/images/companyQualification/ICV LOGO.jpg.webp', alt: 'ICV' },
  { src: '/images/companyQualification/ISO3.png.webp', alt: 'ISO 9001' },
  { src: '/images/companyQualification/IRQAO LOGO.png.webp', alt: 'IRQAO' },
  { src: '/images/companyQualification/IWCF.png.webp', alt: 'IWCF' },
  { src: '/images/companyQualification/Liberia Maritime Authority.png.webp', alt: 'Liberia Maritime Authority' },
  { src: '/images/companyQualification/QRS-ISO-9001-2015-Certified-Logo-Vector.png.webp', alt: 'QRS ISO 9001' },
  { src: '/images/companyQualification/Quality plus_Logo.png.webp', alt: 'Quality Plus' },
]

const metrics: Metric[] = [
  { value: '2019', label: 'Established in Abu Dhabi' },
  { value: '20+', label: 'Qualified regular instructors' },
  { value: 'ISO', label: '9001, 14001 and 45001 certified' },
]

const capabilities: Capability[] = [
  {
    title: 'Technical training for oil and gas',
    description: 'Programs cover exploration, drilling, production, surface facilities, technical service, equipment awareness and job-specific operating knowledge.',
  },
  {
    title: 'HSE training and certification',
    description: 'RSTS supports mandatory safety awareness, HSE systems, risk assessment, permit-to-work, confined space, working at height and other safety topics.',
  },
  {
    title: 'Accredited well control pathways',
    description: 'As an accredited center, RSTS delivers recognized IWCF and IADC programs supported by certified instructors and approved simulator facilities.',
  },
  {
    title: 'Rig audit, inspection and commissioning',
    description: 'The company profile also identifies rig audits, DROPS surveys, inspection support and commissioning services for drilling assets and client sites.',
  },
]

const introSpecialties = [
  'Practical regulatory compliance',
  'Training that improves job performance',
  'Program management that drives measurable results',
  'Risk reduction and hazard exposure control',
  'Construction work training',
  'Integrated oil and gas training solutions',
  'Oil and gas field operation training',
  'Electrical, mechanical and instrument maintenance training',
  'Oil and gas technical service training',
  'Equipment and facility training',
  'QHSE and security training',
  'Administrative business training for oil and gas teams',
]

const culturePoints = [
  'Develop peer and organizational pride',
  'Shape values, avoid unnecessary costs and reduce loss',
  'Build a positive corporate image for internal and external stakeholders',
  'Form a strong cultural foundation through changing business cycles',
  'Cultivate innovation into application',
]

const hsePoints = [
  'Help staff understand health and safety law, liability and enforcement',
  'Make risk assessment practical for real workplace hazards',
  'Use continuous improvement to strengthen HSE systems',
]
</script>

<template>
  <main class="about-page">
    <section class="about-hero" aria-labelledby="about-title">
      <div class="section-shell about-hero-grid">
        <div class="hero-copy">
          <span class="section-eyebrow">About RSTS</span>
          <h1 id="about-title">Rainbow Star Training Services LLC</h1>
          <p>
            An ISO-certified training and consultancy company established in 2019 to serve oil and gas, EPC and
            industrial organizations across technical, HSE and certification needs.
          </p>
        </div>

        <aside class="profile-panel" aria-label="RSTS company profile">
          <span>Company profile</span>
          <strong>From Abu Dhabi, RSTS delivers accredited training, professional development and inspection support for
            onshore and offshore teams.</strong>
          <dl>
            <div>
              <dt>Established</dt>
              <dd>October 2019</dd>
            </div>
            <div>
              <dt>Accreditation</dt>
              <dd>IWCF, IADC, ACTVET and ADNOC supplier approval</dd>
            </div>
            <div>
              <dt>Facilities</dt>
              <dd>Modern training centers, approved portable simulators and flexible delivery options</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>

    <section class="hero-image-section" aria-label="RSTS training environment">
      <div class="section-shell hero-image-layout">
        <picture class="hero-image">
          <source srcset="/images/contact.png.webp" type="image/webp" />
          <img src="/images/contact.png" alt="RSTS Academy offshore oil and gas training platform" decoding="async" />
        </picture>
        <div class="image-caption">
          <strong>Built for demanding training environments.</strong>
          <span>RSTS combines certified instructors, modern facilities and client-specific delivery strategies.</span>
        </div>
        <div class="metric-strip" aria-label="RSTS key facts">
          <article v-for="metric in metrics" :key="metric.label">
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </article>
        </div>
      </div>
    </section>

    <section class="intro-section" aria-label="Company introduction">
      <div class="section-shell intro-grid">
        <div class="section-label">
          <span class="section-eyebrow">What we transfer</span>
          <strong>Turn Experience into Performance</strong>
        </div>
        <div class="intro-copy">
          <p>
            RSTS brings many years of practical experience and proven field success into structured training programs
            for oil and gas, EPC, construction and industrial teams. The goal is simple: help participants understand
            the work, meet compliance expectations and perform with better judgment on the job.
          </p>
          <p>
            Our programs connect regulatory compliance, program management, risk reduction and technical capability
            with the day-to-day realities of site operations, maintenance, facilities, QHSE, security and administrative
            business functions.
          </p>
          <ul class="intro-specialties" aria-label="RSTS training specialties">
            <li v-for="specialty in introSpecialties" :key="specialty">{{ specialty }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="capability-section" aria-labelledby="capability-title">
      <div class="section-shell section-heading">
        <span class="section-eyebrow">Service scope</span>
        <h2 id="capability-title">Technical training, HSE certification and field support services under one company
          profile.</h2>
      </div>
      <div class="section-shell capability-grid">
        <article v-for="capability in capabilities" :key="capability.title" class="capability-item">
          <h3>{{ capability.title }}</h3>
          <p>{{ capability.description }}</p>
        </article>
      </div>
    </section>

    <section class="value-section" aria-label="Organizational value and HSE improvement">
      <div class="section-shell value-grid">
        <article class="value-panel">
          <span class="section-eyebrow">Organizational value</span>
          <h2>Training solutions shaped around people and organizations.</h2>
          <p>
            RSTS focuses on learner engagement, industry collaboration and flexible delivery strategies, helping
            individuals gain practical knowledge while supporting the productivity and competitiveness of their
            organizations.
          </p>
          <ul>
            <li v-for="point in culturePoints" :key="point">{{ point }}</li>
          </ul>
        </article>
        <article class="value-panel">
          <span class="section-eyebrow">HSE improvement</span>
          <h2>Clear HSE learning for safer working environments.</h2>
          <p>
            The company profile places HSE training at the center of staff readiness, from entry-level safety awareness
            to practical hazard recognition, risk assessment and emergency response behaviors.
          </p>
          <ul>
            <li v-for="point in hsePoints" :key="point">{{ point }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="delivery-section" aria-labelledby="delivery-title">
      <div class="section-shell delivery-grid">
        <picture class="delivery-image">
          <source :srcset="deliveryImageWebp" type="image/webp" />
          <img :src="deliveryImage" alt="RSTS well completion and well service training classroom in Daqing"
            loading="lazy" decoding="async" />
        </picture>
        <div class="delivery-copy">
          <span class="section-eyebrow">Execution approach</span>
          <h2 id="delivery-title">Flexible delivery for centers, client sites and international requirements.</h2>
          <p>
            RSTS offers scheduled batches through its centers and can also conduct training to client requirements
            anywhere in the world with prior notice. Modern facilities, air-conditioned classrooms, approved portable
            simulators and practical instructor experience support consistent delivery.
          </p>
          <div class="delivery-steps" aria-label="Training delivery steps">
            <span>Schedule</span>
            <span>Deliver</span>
            <span>Assess</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </section>

    <section class="accreditation-section" aria-labelledby="accreditation-title">
      <div class="section-shell section-heading accreditation-heading">
        <span class="section-eyebrow">Qualification accreditation</span>
        <h2 id="accreditation-title">Accreditation references from the RSTS company profile.</h2>
        <p>
          The company profile lists ISO certification, IWCF, IADC, ACTVET and ADNOC supplier approval. The following
          bodies and marks help clients understand the qualification and certification environment connected to RSTS
          training services.
        </p>
      </div>
      <div class="section-shell logo-grid" aria-label="Qualification accreditation logos">
        <div v-for="logo in accreditationLogos" :key="logo.alt" class="logo-cell">
          <img :src="logo.src" :alt="logo.alt" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.about-page {
  --ink: #101820;
  --muted: #68747d;
  --deep: #071522;
  --navy: #0b2234;
  --field: #edf0ea;
  --paper: #ffffff;
  --accent: #c9a35e;
  --line: rgba(16, 24, 32, 0.14);
  --line-light: rgba(255, 255, 255, 0.2);
  --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  --font-heading: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", sans-serif;

  overflow: hidden;
  background: var(--field);
  color: var(--ink);
  font-family: var(--font-body);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

.about-page,
.about-page *,
.about-page *::before,
.about-page *::after {
  box-sizing: border-box;
}

.about-page * {
  overflow-wrap: anywhere;
}

.section-shell {
  width: min(1240px, calc(100% - 56px));
  margin: 0 auto;
}

.section-eyebrow {
  display: inline-flex;
  color: var(--accent);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.08em;
  line-height: 1.25;
  margin-bottom: 18px;
  text-transform: uppercase;
}

.about-hero {
  position: relative;
  padding: 112px 0 82px;
  background:
    linear-gradient(90deg, rgba(16, 24, 32, 0.045) 1px, transparent 1px),
    linear-gradient(180deg, #ffffff 0%, #f6f7f3 100%);
  background-size:
    120px 100%,
    auto;
  color: var(--ink);
}

.about-hero-grid {
  display: grid;
  grid-template-columns: minmax(620px, 0.74fr) minmax(380px, 0.44fr);
  gap: 78px;
  align-items: start;
  position: relative;
  z-index: 1;
}

.hero-copy {
  h1 {
    max-width: 820px;
    margin: 0;
    font-family: var(--font-heading);
    font-size: clamp(58px, 5.2vw, 88px);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.08;
  }

  p {
    max-width: 720px;
    margin: 34px 0 0;
    color: var(--muted);
    font-size: 24px;
    line-height: 1.5;
  }
}

.profile-panel {
  display: grid;
  gap: 22px;
  padding: 34px 0 0 34px;
  border-top: 4px solid var(--ink);
  border-left: 1px solid var(--line);

  >span {
    color: var(--accent);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1.25;
    text-transform: uppercase;
  }

  strong {
    color: var(--ink);
    font-family: var(--font-heading);
    font-size: 28px;
    font-weight: 600;
    line-height: 1.22;
  }

  dl {
    display: grid;
    margin: 16px 0 0;
  }

  div {
    display: grid;
    grid-template-columns: minmax(118px, 0.36fr) minmax(0, 1fr);
    gap: 20px;
    padding: 18px 0;
    border-top: 1px solid var(--line);
  }

  dt,
  dd {
    margin: 0;
  }

  dt {
    color: var(--muted);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.06em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  dd {
    color: var(--ink);
    font-size: 16px;
    font-weight: 800;
    line-height: 1.55;
  }
}

.hero-image-section {
  padding: 0 0 96px;
  background: linear-gradient(180deg, #f6f7f3 0 46%, var(--field) 46% 100%);
}

.hero-image-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 0.34fr);
  align-items: stretch;
  background: var(--paper);
  border: 1px solid var(--line);
}

.hero-image {
  width: 100%;
  min-height: 560px;
  display: block;
  overflow: hidden;
  background: var(--deep);
  grid-row: span 2;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center 46%;
    filter: saturate(0.94) contrast(1.04);
  }
}

.image-caption {
  display: grid;
  align-content: end;
  gap: 18px;
  padding: 34px;
  background: var(--navy);
  color: #ffffff;

  strong {
    font-family: var(--font-heading);
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
  }

  span {
    color: rgba(255, 255, 255, 0.72);
    font-size: 15px;
    line-height: 1.58;
  }
}

.metric-strip {
  display: grid;
  grid-template-columns: 1fr;
  background: var(--paper);
  border: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  article {
    min-height: 112px;
    display: grid;
    align-content: center;
    gap: 10px;
    padding: 24px 34px;
    border-right: 0;
    border-bottom: 1px solid var(--line);

    &:last-child {
      border-bottom: 0;
    }
  }

  strong {
    color: var(--ink);
    font-family: var(--font-heading);
    font-size: 34px;
    font-weight: 700;
    line-height: 1.12;
  }

  span {
    color: var(--muted);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.06em;
    line-height: 1.35;
    text-transform: uppercase;
  }
}

.intro-section,
.capability-section,
.value-section,
.delivery-section,
.accreditation-section {
  padding: 104px 0;
}

.intro-section,
.delivery-section,
.accreditation-section {
  background: var(--paper);
}

.intro-grid,
.delivery-grid {
  display: grid;
  grid-template-columns: minmax(300px, 0.36fr) minmax(660px, 0.84fr);
  gap: 78px;
  align-items: start;
}

.section-label {
  display: grid;
  gap: 14px;
  padding-top: 16px;
  border-top: 3px solid var(--accent);

  .section-eyebrow {
    margin-bottom: 0;
  }

  strong {
    max-width: 320px;
    color: var(--ink);
    font-family: var(--font-heading);
    font-size: 50px;
    font-weight: 800;
    line-height: 1.22;
  }
}

.intro-copy {
  display: grid;
  gap: 24px;

  p {
    margin: 0;
    color: var(--muted);
    font-size: 20px;
    line-height: 1.82;
  }
}

.intro-specialties {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0;
  margin: 12px 0 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);

  li {
    min-height: 74px;
    display: grid;
    align-items: center;
    padding: 18px 22px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    color: var(--ink);
    font-size: 15px;
    font-weight: 800;
    line-height: 1.45;
    background: rgba(237, 240, 234, 0.44);
  }
}

.capability-section {
  background:
    linear-gradient(90deg, rgba(16, 24, 32, 0.035) 1px, transparent 1px),
    linear-gradient(180deg, #f7f8f4 0%, #edf0ea 100%);
}

.section-heading {
  max-width: 1040px;
  margin-bottom: 54px;

  h2 {
    max-width: 960px;
    margin: 0;
    color: var(--ink);
    font-family: var(--font-heading);
    font-size: clamp(44px, 4vw, 64px);
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.14;
  }

  p {
    max-width: 760px;
    margin: 22px 0 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.7;
  }
}

.capability-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.52);
}

.capability-item {
  min-height: 220px;
  display: grid;
  align-content: start;
  gap: 18px;
  padding: 34px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);

  h3 {
    margin: 0;
    color: var(--ink);
    font-size: 23px;
    font-weight: 900;
    line-height: 1.32;
  }

  p {
    margin: 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.68;
  }
}

.value-section {
  background: var(--navy);
  color: #ffffff;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 72px;
}

.value-panel {
  display: grid;
  align-content: start;

  h2 {
    max-width: 560px;
    margin: 0;
    font-family: var(--font-heading);
    font-size: 42px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.16;
  }

  p {
    margin: 24px 0 0;
    color: rgba(255, 255, 255, 0.72);
    font-size: 17px;
    line-height: 1.7;
  }

  ul {
    display: grid;
    gap: 0;
    margin: 34px 0 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding: 15px 0;
    border-top: 1px solid var(--line-light);
    color: rgba(255, 255, 255, 0.84);
    font-size: 16px;
    line-height: 1.48;
  }
}

.delivery-grid {
  grid-template-columns: minmax(520px, 0.72fr) minmax(420px, 0.58fr);
  align-items: center;
}

.delivery-image {
  min-height: 520px;
  display: block;
  overflow: hidden;
  background: var(--deep);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}

.delivery-copy {
  h2 {
    margin: 0;
    color: var(--ink);
    font-family: var(--font-heading);
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.14;
  }

  p {
    margin: 26px 0 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.78;
  }
}

.delivery-steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 34px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);

  span {
    min-height: 58px;
    display: grid;
    place-items: center;
    border-right: 1px solid var(--line);
    color: var(--ink);
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.06em;
    line-height: 1.3;
    text-transform: uppercase;

    &:last-child {
      border-right: 0;
    }
  }
}

.accreditation-section {
  background:
    linear-gradient(180deg, #f7f8f4 0%, #edf0ea 100%);
  border-top: 1px solid var(--line);
}

.accreditation-heading {
  display: grid;
}

.logo-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.5);
}

.logo-cell {
  min-height: 126px;
  display: grid;
  place-items: center;
  padding: 24px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.54);

  img {
    max-width: 132px;
    max-height: 72px;
    object-fit: contain;
  }
}

@media (max-width: 1180px) {

  .about-hero-grid,
  .hero-image-layout,
  .intro-grid,
  .delivery-grid,
  .value-grid {
    grid-template-columns: 1fr;
  }

  .about-hero-grid,
  .intro-grid,
  .delivery-grid,
  .value-grid {
    gap: 44px;
  }

  .profile-panel,
  .section-label {
    max-width: 680px;
  }

  .profile-panel {
    padding-left: 0;
    border-left: 0;
  }

  .hero-image {
    grid-row: auto;
  }

  .metric-strip {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top-color: var(--line);

    article {
      border-right: 1px solid var(--line);
      border-bottom: 0;

      &:last-child {
        border-right: 0;
      }
    }
  }

  .logo-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 820px) {
  .section-shell {
    width: min(100% - 32px, 560px);
  }

  .about-hero {
    padding: 68px 0 46px;

    &::before {
      display: none;
    }
  }

  .hero-copy h1,
  .section-heading h2,
  .delivery-copy h2 {
    font-size: 42px;
  }

  .hero-copy p,
  .intro-copy p {
    font-size: 17px;
  }

  .profile-panel strong,
  .section-label strong {
    font-size: 25px;
  }

  .profile-panel div {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .hero-image {
    min-height: 390px;
  }

  .metric-strip,
  .capability-grid,
  .intro-specialties,
  .value-grid,
  .delivery-steps {
    grid-template-columns: 1fr;
  }

  .metric-strip article,
  .intro-specialties li,
  .delivery-steps span {
    border-right: 0;
    border-bottom: 1px solid var(--line);
  }

  .metric-strip article:last-child,
  .intro-specialties li:last-child,
  .delivery-steps span:last-child {
    border-bottom: 0;
  }

  .intro-section,
  .capability-section,
  .value-section,
  .delivery-section,
  .accreditation-section {
    padding: 68px 0;
  }

  .capability-item {
    min-height: auto;
    padding: 26px 0;
    border-right: 0;
    border-left: 0;
  }

  .value-panel h2 {
    font-size: 38px;
  }

  .delivery-image {
    min-height: 360px;
  }

  .logo-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .logo-cell {
    min-height: 108px;
    padding: 20px;

    img {
      max-width: 116px;
      max-height: 62px;
    }
  }
}
</style>
