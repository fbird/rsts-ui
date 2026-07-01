<script setup lang="ts">
import { ref } from 'vue'

import { ElMessage } from 'element-plus'

import type { ContactForm } from '@/apis/contactApi'
import { sendContactEmail } from '@/apis/contactApi'

type ContactLine = {
  text: string
  href?: string
}

type ContactItem = {
  icon: string
  label: string
  lines: ContactLine[]
}

const createEmptyContactInfo = (): ContactForm => ({
  firstName: '',
  lastName: '',
  company: '',
  subject: '',
  email: '',
  message: '',
})

const contactInfo = ref<ContactForm>(createEmptyContactInfo())
const loading = ref(false)

const contactImage = '/images/Valve Training.jpg'
const contactImageWebp = '/images/Valve Training.jpg.webp'

const contactItems: ContactItem[] = [
  {
    icon: '/images/AcademyName.png',
    label: 'Company',
    lines: [{ text: 'Rainbow Star Training Services LLC' }],
  },
  {
    icon: '/images/Address.png',
    label: 'Office',
    lines: [
      {
        text: 'Unit 501 Abdulla Darwish Building - 802 Hamdan Bin Mohammed St - Al Zahiyah - Abu Dhabi',
        href: 'https://maps.app.goo.gl/dLAtRu9MdQJGf1VS8',
      },
    ],
  },
  {
    icon: '/images/E-mail.png',
    label: 'Email',
    lines: [{ text: 'info@rainbowstar1.com', href: 'mailto:info@rainbowstar1.com' }],
  },
  {
    icon: '/images/Phone.png',
    label: 'Phone',
    lines: [
      { text: '+971 55-446-9950', href: 'tel:+971554469950' },
      { text: '+971 54-449-4027', href: 'tel:+971544494027' },
    ],
  },
  {
    icon: '/images/Website.png',
    label: 'Website',
    lines: [{ text: 'www.rstsacademy.com', href: 'https://www.rstsacademy.com' }],
  },
]

const isExternalLink = (href?: string) => !!href && /^https?:\/\//i.test(href)

const sendEmail = async () => {
  if (!contactInfo.value.firstName) {
    ElMessage.warning('Please enter your first name')
    return
  }

  if (!contactInfo.value.lastName) {
    ElMessage.warning('Please enter your last name')
    return
  }

  if (!contactInfo.value.email) {
    ElMessage.warning('Please enter your email')
    return
  }

  if (!contactInfo.value.message) {
    ElMessage.warning('Please enter your message')
    return
  }

  if (!contactInfo.value.subject) {
    ElMessage.warning('Please enter a subject')
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(contactInfo.value.email)) {
    ElMessage.warning('Please enter a valid email address')
    return
  }

  loading.value = true

  try {
    await sendContactEmail(contactInfo.value)
    ElMessage.success('Message sent successfully!')
    contactInfo.value = createEmptyContactInfo()
  } catch {
    ElMessage.error('Failed to send message. Please try again.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="contact-page">
    <section class="contact-section" aria-labelledby="contact-title">
      <div class="section-shell contact-heading">
        <h1 id="contact-title">Reach Rainbow Star Training Services LLC</h1>
        <p>
          Connect with RSTS Academy for course coordination, certificate support, company training requests and general
          service inquiries.
        </p>
      </div>

      <div class="section-shell contact-layout">
        <aside class="contact-panel" aria-label="RSTS Academy contact information">
          <picture class="contact-image">
            <source :srcset="contactImageWebp" type="image/webp" />
            <img :src="contactImage" alt="RSTS practical valve training session" decoding="async" loading="eager" />
          </picture>

          <div class="contact-list">
            <article v-for="item in contactItems" :key="item.label" class="contact-item">
              <span class="contact-icon" aria-hidden="true">
                <img :src="item.icon" alt="" loading="lazy" decoding="async" />
              </span>

              <div class="contact-copy">
                <span class="contact-label">{{ item.label }}</span>
                <div class="contact-lines">
                  <template v-for="line in item.lines" :key="line.text">
                    <a
                      v-if="line.href"
                      class="contact-value"
                      :href="line.href"
                      :target="isExternalLink(line.href) ? '_blank' : undefined"
                      :rel="isExternalLink(line.href) ? 'noreferrer' : undefined"
                    >
                      {{ line.text }}
                    </a>
                    <span v-else class="contact-value">{{ line.text }}</span>
                  </template>
                </div>
              </div>
            </article>
          </div>
        </aside>

        <section class="message-panel" aria-labelledby="message-title">
          <div class="message-heading">
            <span class="section-eyebrow">Message</span>
            <h2 id="message-title">Send Us a Message</h2>
          </div>

          <el-form class="message-form" label-position="top" :model="contactInfo" @submit.prevent="sendEmail">
            <div class="form-grid">
              <el-form-item label="First Name">
                <el-input v-model.trim="contactInfo.firstName" placeholder="First Name" />
              </el-form-item>

              <el-form-item label="Last Name">
                <el-input v-model.trim="contactInfo.lastName" placeholder="Last Name" />
              </el-form-item>

              <el-form-item label="Company">
                <el-input v-model.trim="contactInfo.company" placeholder="Company" />
              </el-form-item>

              <el-form-item label="Subject">
                <el-input v-model.trim="contactInfo.subject" placeholder="Subject" />
              </el-form-item>

              <el-form-item class="full-field" label="Email">
                <el-input v-model.trim="contactInfo.email" placeholder="Email" />
              </el-form-item>

              <el-form-item class="full-field" label="Message">
                <el-input v-model="contactInfo.message" type="textarea" placeholder="Message" :rows="14" />
              </el-form-item>
            </div>

            <el-button class="send-button" :loading="loading" native-type="submit">Send Message</el-button>
          </el-form>
        </section>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.contact-page {
  --ink: #101820;
  --muted: #68747d;
  --deep: #071522;
  --navy: #0b2234;
  --field: #edf0ea;
  --paper: #ffffff;
  --accent: #c9a35e;
  --accent-soft: rgba(201, 163, 94, 0.32);
  --line: rgba(16, 24, 32, 0.1);
  --line-soft: rgba(16, 24, 32, 0.065);
  --line-faint: rgba(16, 24, 32, 0.035);
  --display-font: Georgia, 'Times New Roman', serif;
  --text-font: Aptos, 'Gill Sans', 'Trebuchet MS', sans-serif;

  overflow: hidden;
  background: var(--field);
  color: var(--ink);
  font-family: var(--text-font);
}

.contact-page,
.contact-page *,
.contact-page *::before,
.contact-page *::after {
  box-sizing: border-box;
}

.section-shell {
  width: min(1240px, calc(100% - 56px));
  margin: 0 auto;
}

.section-eyebrow {
  display: inline-flex;
  margin-bottom: 16px;
  color: var(--accent);
  font-size: 11px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
}

.contact-section {
  position: relative;
  min-height: calc(100vh - 96px);
  padding: 20px 0 104px;
  background:
    linear-gradient(90deg, var(--line-faint) 1px, transparent 1px),
    linear-gradient(180deg, #ffffff 0%, #f6f7f3 44%, var(--field) 44% 100%);
  background-size:
    160px 100%,
    auto;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, var(--line-soft) 18%, var(--line-soft) 82%, transparent 100%);
    content: '';
  }
}

.contact-heading {
  position: relative;
  margin-bottom: 10px;
  padding-top: 22px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 96px;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), rgba(201, 163, 94, 0));
    content: '';
  }

  h1 {
    max-width: 780px;
    margin: 0;
    color: var(--ink);
    font-family: var(--display-font);
    font-size: clamp(48px, 4.6vw, 74px);
    font-weight: 500;
    line-height: 1.02;
  }

  p {
    max-width: 690px;
    margin: 22px 0 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.64;
  }
}

.contact-layout {
  position: relative;
  display: grid;
  grid-template-columns: minmax(360px, 0.42fr) minmax(560px, 0.58fr);
  gap: 48px;
  align-items: stretch;

  &::before {
    position: absolute;
    top: -22px;
    right: 0;
    left: 0;
    height: 1px;
    background: linear-gradient(90deg, var(--accent-soft), var(--line-soft) 38%, transparent 100%);
    content: '';
  }
}

.contact-panel,
.message-panel {
  position: relative;
  min-height: 520px;
  height: 100%;
  background: var(--paper);
  border: 1px solid var(--line-soft);
  box-shadow:
    inset 0 3px 0 var(--accent-soft),
    0 24px 60px rgba(7, 21, 34, 0.055);

  &::after {
    position: absolute;
    right: 18px;
    bottom: 18px;
    width: 54px;
    height: 54px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    pointer-events: none;
    content: '';
  }
}

.contact-panel {
  display: grid;
  grid-template-rows: minmax(308px, 0.9fr) auto;
}

.contact-image {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1.18;
  overflow: hidden;
  background: var(--deep);

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.48) 50%, transparent 100%);
    content: '';
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: saturate(0.95) contrast(1.04);
  }
}

.contact-list {
  display: grid;
  padding: 30px;
}

.contact-item {
  position: relative;
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr);
  gap: 16px;
  padding: 15px 0;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 58px;
    height: 1px;
    background: linear-gradient(90deg, var(--line-soft), transparent 92%);
    content: '';
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;

    &::after {
      display: none;
    }
  }
}

.contact-icon {
  display: inline-grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--accent-soft);
  background:
    linear-gradient(135deg, rgba(201, 163, 94, 0.14), rgba(201, 163, 94, 0.04)),
    #ffffff;

  img {
    width: 21px;
    height: 21px;
    object-fit: contain;
  }
}

.contact-copy {
  display: grid;
  gap: 8px;
  min-width: 0;
}

.contact-label {
  color: var(--muted);
  font-size: 10px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
}

.contact-lines {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
}

.contact-value {
  color: var(--ink);
  font-size: 15px;
  font-weight: 500;
  line-height: 1.52;
  overflow-wrap: anywhere;
  text-decoration: none;
}

a.contact-value:hover {
  color: var(--accent);
}

.message-panel {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 28px;
  padding: 38px;
}

.message-heading {
  padding-bottom: 24px;
  background: linear-gradient(var(--line-soft), var(--line-soft)) left bottom / 74% 1px no-repeat;

  .section-eyebrow {
    margin-bottom: 14px;
  }

  h2 {
    margin: 0;
    color: var(--ink);
    font-family: var(--display-font);
    font-size: 38px;
    font-weight: 500;
    line-height: 1.1;
  }
}

.message-form {
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 26px;
  height: 100%;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px 20px;
}

.full-field {
  grid-column: 1 / -1;
}

.message-form :deep(.el-form-item) {
  margin-bottom: 0;
}

.message-form :deep(.el-form-item__label) {
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
}

.message-form :deep(.el-input__inner),
.message-form :deep(.el-textarea__inner) {
  color: var(--ink);
  font-family: var(--text-font);
  font-size: 14px;
  font-weight: 600;
}

.message-form :deep(.el-input__wrapper),
.message-form :deep(.el-textarea__inner) {
  min-height: 46px;
  border: 1px solid transparent;
  border-radius: 6px;
  background:
    linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(90deg, var(--line-soft), rgba(201, 163, 94, 0.22)) border-box;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.86);
}

.message-form :deep(.el-input__wrapper.is-focus),
.message-form :deep(.el-textarea__inner:focus) {
  border-color: var(--accent);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.86),
    0 0 0 3px rgba(201, 163, 94, 0.13);
}

.message-form :deep(.el-textarea__inner) {
  padding: 13px 15px;
  line-height: 1.55;
  resize: vertical;
}

.send-button {
  width: fit-content;
  min-width: 164px;
  height: 46px;
  padding: 0 24px;
  border: 0;
  border-radius: 6px;
  background: var(--navy);
  color: #ffffff;
  font-size: 13px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
}

.send-button:hover,
.send-button:focus {
  background: #12344e;
  color: #ffffff;
}

@media (max-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .contact-panel,
  .message-panel {
    min-height: 0;
  }

  .contact-image {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 768px) {
  .section-shell {
    width: min(100% - 32px, 560px);
  }

  .contact-section {
    min-height: calc(100vh - 64px);
    padding: 20px 0 72px;
    background:
      linear-gradient(90deg, rgba(16, 24, 32, 0.035) 1px, transparent 1px),
      linear-gradient(180deg, #ffffff 0%, #f6f7f3 36%, var(--field) 36% 100%);
    background-size:
      80px 100%,
      auto;
  }

  .contact-heading {
    margin-bottom: 34px;

    h1 {
      max-width: 100%;
      font-size: 40px;
      line-height: 1.06;
    }

    p {
      margin-top: 20px;
      font-size: 16px;
      line-height: 1.65;
    }
  }

  .contact-layout {
    gap: 24px;
  }

  .contact-list,
  .message-panel {
    padding: 24px;
  }

  .contact-item {
    grid-template-columns: 36px minmax(0, 1fr);
    gap: 14px;
  }

  .contact-item::after {
    left: 50px;
  }

  .contact-icon {
    width: 36px;
    height: 36px;

    img {
      width: 19px;
      height: 19px;
    }
  }

  .contact-value {
    font-size: 15px;
  }

  .message-panel {
    gap: 24px;
  }

  .message-heading h2 {
    font-size: 31px;
  }

  .message-form {
    grid-template-rows: auto auto;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .send-button {
    width: 100%;
  }
}
</style>
