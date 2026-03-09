<script setup lang="ts">
import AcademyName from '/images/AcademyName.png'
import Address from '/images/Address.png'
import EMail from '/images/E-mail.png'
import Phone from '/images/Phone.png'
import Website from '/images/Website.png'
import contact from '/images/Valve Training.jpg'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { sendContactEmail } from '@/apis/contactApi'

const contactInfo = ref({
  firstName: '',
  lastName: '',
  company: '',
  subject: '',
  email: '',
  message: '',
})

const loading = ref(false)

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
    contactInfo.value = {
      firstName: '',
      lastName: '',
      company: '',
      subject: '',
      email: '',
      message: '',
    }
  } catch (error) {
    ElMessage.error('Failed to send message. Please try again.')
  } finally {
    loading.value = false
  }
}
</script>
<template>
  <el-row style="padding: 50px 0px">
    <el-col :span="8" class="contactInfo">
      <el-row>
        <el-col>
          <el-image :src="contact" fit="scale-down" />
        </el-col>
      </el-row>
      <el-row style="margin-top: 30px">
        <el-col :span="2">
          <el-image :src="AcademyName" fit="scale-down" style="height: 20px; width: 20px" />
        </el-col>
        <el-col :span="22">
          <span>Rainbow Star Training Services LLC</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <el-image :src="Address" fit="scale-down" style="height: 20px; width: 20px" />
        </el-col>
        <el-col :span="22">
          <el-link type="primary" href="https://maps.app.goo.gl/dLAtRu9MdQJGf1VS8" target="_blank"
            underline="never">Unit 501 Abdulla Darwish Building - 802 Hamdan Bin Mohammed St - Al Zahiyah - Abu
            Dhabi</el-link>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <el-image :src="EMail" fit="scale-down" style="height: 20px; width: 20px" />
        </el-col>
        <el-col :span="22">
          <span> info@rainbowstar1.com</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <el-image :src="Phone" fit="scale-down" style="height: 20px; width: 20px" />
        </el-col>
        <el-col :span="22">
          <span>+971 55-446-9950</span>
          <el-divider direction="vertical" style="margin: 0px 20px" />
          <span>+971 54-449-4027</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <el-image :src="Website" fit="scale-down" style="height: 20px; width: 20px" />
        </el-col>
        <el-col :span="22">
          <el-link type="primary" href=" https://www.rstsacademy.com" target="_blank" underline="never">
            https://www.rstsacademy.com</el-link>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="2" style="text-align: center">
      <el-divider direction="vertical" style="height: 100%" />
    </el-col>

    <el-col :span="12">
      <h4>Send Us a Message</h4>
      <el-card class="emailBox">
        <el-row>
          <el-col>
            <el-input v-model="contactInfo.firstName" placeholder="First Name" />
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-input v-model="contactInfo.lastName" placeholder="Last Name" />
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-input v-model="contactInfo.company" placeholder="Company" />
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-input v-model="contactInfo.subject" placeholder="Subject" />
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-input v-model="contactInfo.email" placeholder="Email" />
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-input v-model="contactInfo.message" type="textarea" placeholder="Message" :rows="10" />
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <el-button :loading="loading" @click="sendEmail">Send Message</el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.contactInfo {
  .el-row {
    margin-top: 10px;
  }
}

.emailBox {
  background: rgba(105, 179, 254, 0.09);
  padding: 10px 20px;
  vertical-align: middle;

  .el-row {
    margin-top: 15px;
  }

  .el-input {
    background: #fff;
  }

  .el-textarea {
    background: #fff;
  }

  .el-button {
    background: rgb(1, 54, 99);
    color: #fff;
    font-size: 15px;
    height: 40px;
  }
}
</style>
