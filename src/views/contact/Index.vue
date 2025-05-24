<script setup lang="ts">
import AcademyName from '/images/AcademyName.png'
import Address from '/images/Address.png'
import EMail from '/images/E-mail.png'
import Phone from '/images/Phone.png'
import Website from '/images/Website.png'
import contact from '/images/trainingImages/Valve Training.jpg'
import { ref } from 'vue'

const contactInfo = ref({
    firstName: '',
    lastName: '',
    company: '',
    subject: '',
    email: '',
    message: ''
})
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
                    <el-image :src="AcademyName" fit="scale-down" style="height: 20px; width: 20px;" />
                </el-col>
                <el-col :span="22">
                    <span>Rainbow Star Training Services LLC</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2">
                    <el-image :src="Address" fit="scale-down" style="height: 20px; width: 20px;" />
                </el-col>
                <el-col :span="22">
                    <el-link type="primary" href="https://maps.app.goo.gl/dLAtRu9MdQJGf1VS8" target="_blank"
                        :underline="false">Unit 501 Abdulla Darwish Building - 802 Hamdan Bin Mohammed St - Al Zahiyah -
                        Abu Dhabi</el-link>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2">
                    <el-image :src="EMail" fit="scale-down" style="height: 20px; width: 20px;" />
                </el-col>
                <el-col :span="22">
                    <span> info@rainbowstar1.com</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2">
                    <el-image :src="Phone" fit="scale-down" style="height: 20px; width: 20px;" />
                </el-col>
                <el-col :span="22">
                    <span>+971 58-124-3299</span>
                    <el-divider direction="vertical" style="margin: 0px 20px" />
                    <span>+971 54-449-4027</span>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="2">
                    <el-image :src="Website" fit="scale-down" style="height: 20px; width: 20px;" />
                </el-col>
                <el-col :span="22">
                    <el-link type="primary" href=" http://www.rstsacademy.com" target="_blank" :underline="false">
                        http://www.rstsacademy.com</el-link>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="2" style="text-align: center;">
            <el-divider direction="vertical" style="height: 100%;" />
        </el-col>

        <el-col :span="12">
            <h4>Send Us a Message</h4>
            <el-card style="width: 600px" class="emailBox">
                <el-row>
                    <el-col>
                        <el-input v-model='contactInfo.firstName' style="width: 560px" placeholder="First Name" />
                    </el-col>
                </el-row>

                <el-row>
                    <el-col>
                        <el-input v-model='contactInfo.lastName' style="width: 560px" placeholder="Last Name" />
                    </el-col>
                </el-row>

                <el-row>
                    <el-col>
                        <el-input v-model='contactInfo.company' style="width: 560px" placeholder="Company" />
                    </el-col>
                </el-row>

                <el-row>
                    <el-col>
                        <el-input v-model='contactInfo.subject' style="width: 560px" placeholder="Subject" />
                    </el-col>
                </el-row>

                <el-row>
                    <el-col>
                        <el-input v-model='contactInfo.email' style="width: 560px" placeholder="Email" />
                    </el-col>
                </el-row>

                <el-row>
                    <el-col>
                        <el-input v-model='contactInfo.message' style="width: 560px" type="textarea"
                            placeholder="Message" :rows="10" />
                    </el-col>
                </el-row>

                <el-row>
                    <el-col>
                        <el-button>Send Message</el-button>
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
    background: rgba(105, 179, 254, .09);
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