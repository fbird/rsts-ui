<script setup lang="ts">
type AccreditationLogo = {
  src: string
  alt: string
}

type Metric = {
  value: string
  label: string
}

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

const trainingPoints = [
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
  'Develop a positive corporate image',
  'Form a strong cultural foundation',
  'Cultivate innovation into application',
]

const hsePoints = [
  'Help staff understand health and safety law, liability and enforcement',
  'Make risk assessment practical for real workplace hazards',
  'Use continuous improvement to strengthen HSE systems',
]
</script>

<template>
  <main class="about-mobile-page">
    <section class="mobile-hero" aria-labelledby="mobile-about-title">
      <div class="mobile-shell">
        <span class="section-eyebrow">About RSTS</span>
        <h1 id="mobile-about-title">Rainbow Star Training Services LLC</h1>
        <p>
          An ISO-certified training and consultancy company established in 2019 to serve oil and gas, EPC and industrial
          organizations across technical, HSE and certification needs.
        </p>
        <aside class="mobile-profile-panel" aria-label="RSTS company profile">
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

    <section class="mobile-visual-section" aria-label="RSTS training environment">
      <div class="mobile-shell">
        <picture class="mobile-visual">
          <source srcset="/images/contact.png.webp" type="image/webp" />
          <img src="/images/contact.png" alt="RSTS Academy offshore oil and gas training platform" decoding="async" />
        </picture>
        <div class="mobile-metric-list" aria-label="RSTS key facts">
          <article v-for="metric in metrics" :key="metric.label">
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </article>
        </div>
      </div>
    </section>

    <section class="mobile-section">
      <div class="mobile-shell intro-stack">
        <p>
          RSTS brings many years of practical experience and proven field success into structured training programs
          for oil and gas, EPC, construction and industrial teams.
        </p>
        <p>
          Our training connects regulatory compliance, program management, risk reduction and technical capability
          with the day-to-day realities of site operations, maintenance, facilities, QHSE, security and administrative
          business functions.
        </p>
        <strong>We transfer field-tested knowledge into learning that supports safer work, stronger performance and
          clearer operational decisions.</strong>
      </div>
    </section>

    <section class="mobile-section training-section" aria-labelledby="training-title">
      <div class="mobile-shell">
        <span class="section-eyebrow">Service scope</span>
        <h2 id="training-title">Technical training, HSE certification and field support services under one company
          profile.</h2>
        <ul class="point-list">
          <li v-for="point in trainingPoints" :key="point">{{ point }}</li>
        </ul>
      </div>
    </section>

    <section class="mobile-section value-section" aria-label="RSTS value">
      <div class="mobile-shell value-stack">
        <article>
          <span class="section-eyebrow">Organizational value</span>
          <h2>Training solutions shaped around people and organizations.</h2>
          <p>
            RSTS focuses on learner engagement, industry collaboration and flexible delivery strategies, helping
            individuals gain practical knowledge while supporting organizational productivity.
          </p>
          <ul>
            <li v-for="point in culturePoints" :key="point">{{ point }}</li>
          </ul>
        </article>

        <article>
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

    <section class="mobile-section execution-section">
      <div class="mobile-shell">
        <span class="section-eyebrow">Execution approach</span>
        <p>
          RSTS offers scheduled batches through its centers and can also conduct training to client requirements
          anywhere in the world with prior notice. Modern facilities, air-conditioned classrooms, approved portable
          simulators and practical instructor experience support consistent delivery.
        </p>
      </div>
    </section>

    <section class="mobile-section accreditation-section" aria-labelledby="mobile-accreditation-title">
      <div class="mobile-shell">
        <span class="section-eyebrow">Qualification accreditation</span>
        <h2 id="mobile-accreditation-title">Accreditation references from the RSTS company profile.</h2>
        <p>
          The company profile lists ISO certification, IWCF, IADC, ACTVET and ADNOC supplier approval. The following
          bodies and marks help clients understand the qualification and certification environment connected to RSTS
          training services.
        </p>
        <div class="logo-grid" aria-label="Qualification accreditation logos">
          <div v-for="logo in accreditationLogos" :key="logo.alt" class="logo-cell">
            <img :src="logo.src" :alt="logo.alt" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.about-mobile-page {
  --ink: #101820;
  --muted: #64717b;
  --deep: #071522;
  --navy: #0b2234;
  --field: #e9ece5;
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

.about-mobile-page,
.about-mobile-page *,
.about-mobile-page *::before,
.about-mobile-page *::after {
  box-sizing: border-box;
}

.about-mobile-page * {
  overflow-wrap: anywhere;
}

.mobile-shell {
  width: min(100% - 32px, 560px);
  margin: 0 auto;
}

.section-eyebrow {
  display: inline-flex;
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1.25;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.mobile-hero {
  position: relative;
  display: grid;
  padding: 68px 0 44px;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(16, 24, 32, 0.05) 1px, transparent 1px),
    linear-gradient(180deg, #ffffff 0%, #f6f7f3 100%);
  background-size:
    72px 100%,
    auto;

  h1 {
    margin: 0;
    font-family: var(--font-heading);
    font-size: 42px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.1;
  }

  p {
    margin: 24px 0 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.55;
  }
}

.mobile-profile-panel {
  display: grid;
  gap: 18px;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 4px solid var(--ink);

  >span {
    color: var(--accent);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1.25;
    text-transform: uppercase;
  }

  strong {
    color: var(--ink);
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 600;
    line-height: 1.22;
  }

  dl {
    display: grid;
    margin: 8px 0 0;
  }

  div {
    display: grid;
    gap: 7px;
    padding: 16px 0;
    border-top: 1px solid var(--line);
  }

  dt,
  dd {
    margin: 0;
  }

  dt {
    color: var(--muted);
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.06em;
    line-height: 1.3;
    text-transform: uppercase;
  }

  dd {
    color: var(--ink);
    font-size: 15px;
    font-weight: 800;
    line-height: 1.5;
  }
}

.mobile-visual-section {
  padding: 0 0 58px;
  background: linear-gradient(180deg, #f6f7f3 0 42%, var(--field) 42% 100%);
}

.mobile-visual {
  display: block;
  min-height: 330px;
  overflow: hidden;
  background: var(--deep);
  border: 1px solid var(--line);

  img {
    width: 100%;
    height: 100%;
    min-height: 330px;
    display: block;
    object-fit: cover;
    object-position: center;
    filter: saturate(0.94) contrast(1.04);
  }
}

.mobile-metric-list {
  display: grid;
  background: var(--paper);
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  border-left: 1px solid var(--line);

  article {
    display: grid;
    gap: 8px;
    min-height: 94px;
    align-content: center;
    padding: 20px 22px;
    border-bottom: 1px solid var(--line);

    &:last-child {
      border-bottom: 0;
    }
  }

  strong {
    color: var(--ink);
    font-family: var(--font-heading);
    font-size: 31px;
    font-weight: 700;
    line-height: 1.12;
  }

  span {
    color: var(--muted);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.06em;
    line-height: 1.35;
    text-transform: uppercase;
  }
}

.mobile-section {
  padding: 58px 0;
}

.intro-stack {
  display: grid;
  gap: 18px;
  padding-left: 18px;
  border-left: 4px solid var(--accent);

  p {
    margin: 0;
    color: var(--muted);
    font-size: 16px;
    line-height: 1.76;
  }

  strong {
    margin-top: 6px;
    color: var(--ink);
    font-family: var(--font-heading);
    font-size: 22px;
    font-weight: 600;
    line-height: 1.28;
  }
}

.training-section {
  background:
    linear-gradient(90deg, rgba(16, 24, 32, 0.035) 1px, transparent 1px),
    linear-gradient(180deg, #f8f8f5 0%, #ffffff 100%);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);

  h2 {
    margin: 0;
    color: var(--ink);
    font-family: var(--font-heading);
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.16;
  }
}

.point-list,
.value-stack ul {
  display: grid;
  gap: 14px;
  margin: 30px 0 0;
  padding: 0;
  list-style: none;
}

.point-list li {
  position: relative;
  padding-left: 22px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.52;

  &::before {
    position: absolute;
    top: 0.68em;
    left: 0;
    width: 8px;
    height: 8px;
    border: 2px solid var(--accent);
    content: "";
  }
}

.value-section {
  background: var(--navy);
  color: #ffffff;
}

.value-stack {
  display: grid;
  gap: 48px;

  h2 {
    margin: 0;
    font-family: var(--font-heading);
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.16;
  }

  p {
    margin: 22px 0 0;
    color: rgba(255, 255, 255, 0.72);
    font-size: 16px;
    line-height: 1.68;
  }

  li {
    padding: 14px 0;
    border-top: 1px solid var(--line-light);
    color: rgba(255, 255, 255, 0.82);
    font-size: 15px;
    line-height: 1.48;
  }
}

.execution-section {
  background: var(--paper);

  p {
    margin: 0;
    color: var(--muted);
    font-size: 17px;
    line-height: 1.76;
  }
}

.accreditation-section {
  background: linear-gradient(180deg, #f4f5f1 0%, #e9ece5 100%);
  border-top: 1px solid var(--line);

  h2 {
    margin: 0;
    color: var(--ink);
    font-family: var(--font-heading);
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.16;
  }
}

.logo-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 34px;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.42);
}

.logo-cell {
  min-height: 108px;
  display: grid;
  place-items: center;
  padding: 20px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.52);

  img {
    max-width: 116px;
    max-height: 62px;
    object-fit: contain;
    filter: saturate(0.96) contrast(1.02);
  }
}
</style>
