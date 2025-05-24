<script setup lang="ts">
import h2sImg from '/images/trainingImages/h2s/h2s.png';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import QrcodeVue from 'qrcode.vue'


const route = useRoute();
const router = useRouter();
const currentHolder = ref<any>({})
const certifiateHolder = ref<any>([])


const value = ref('qrcode')


// 可传入二维码图片相关的属性，支持二维码 LOGO；
const imageSettings = ref<any>({
    src: 'https://github.com/scopewu.png',
    width: 30,
    height: 30,
    // x: 10,
    // y: 10,
    excavate: true,
})

// 可传入渐变相关的属性，支持渐变：
const gradient = ref(false)
const gradientType = ref<any>('linear')
const gradientStartColor = ref('#000000')
const gradientEndColor = ref('#38bdf8')
const liCls = ref('singleCol')

onMounted(async () => {
    const resp = await fetch("/certificatesHolder.json", { mode: 'same-origin' })
    if (!resp.ok) {
        throw new Error('Request failed')
    }
    certifiateHolder.value = await resp.json()

    currentHolder.value = certifiateHolder.value.find((item: any) => String(item.sn) === route.params.sn)

    if (currentHolder.value.courseContent.length > 1) {
        liCls.value = 'tCol';
    }

})

</script>
<template>
    <el-row style="margin-top: 20px; margin-bottom: 20px;">
        <el-col>
            <span class="course-title">RSTS Certification Validation System</span>
        </el-col>

    </el-row>
    <el-row :gutter="10">
        <el-col :span="10">
            <el-image :src="h2sImg" alt="course image" style="width: 400; height: 450px; " />
        </el-col>
        <el-col :span="14" class="CertContent">
            <el-row justify="center">
                <el-col :span="12" class="info-label">Hydrogen Sulfide Safety Awareness</el-col>
                <el-col :span="12">
                    <qrcode-vue :value="value" level="Q" render-as="svg" background="rgba(212, 208, 208)" :margin="2"
                        foreground='#000' :gradient="gradient" :gradient-type="gradientType"
                        :gradient-start-color="gradientStartColor" :gradient-end-color="gradientEndColor"
                        :image-settings='imageSettings' />
                </el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">S/N</el-col>
                <el-col :span="16">{{ currentHolder.sn }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Trainees Name</el-col>
                <el-col :span="16">{{ currentHolder.traineesName }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Nationality</el-col>
                <el-col :span="16">{{ currentHolder.nationality }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Passport No.</el-col>
                <el-col :span="16">{{ currentHolder.passportNo }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Certificate ID</el-col>
                <el-col :span="16">{{ currentHolder.certificateID }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Validity Period</el-col>
                <el-col :span="16">{{ currentHolder.validityPeriod }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Completion Date</el-col>
                <el-col :span="16">{{ currentHolder.completionDate }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Expiring Date</el-col>
                <el-col :span="16">{{ currentHolder.expiringDate }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Form of instruction</el-col>
                <el-col :span="16">{{ currentHolder.formOfInstruction }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Training Hours</el-col>
                <el-col :span="16">{{ currentHolder.trainningHours }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Trainer Name</el-col>
                <el-col :span="16">{{ currentHolder.trainerName }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Coordinator Name</el-col>
                <el-col :span="16">{{ currentHolder.coordinatorName }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Exam Invigilator Name</el-col>
                <el-col :span="16">{{ currentHolder.examInvigilatorName }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Issuer Name</el-col>
                <el-col :span="16">{{ currentHolder.issuerName }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Approver Name</el-col>
                <el-col :span="16">{{ currentHolder.approverName }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Awarding body</el-col>
                <el-col :span="16">{{ currentHolder.awardingBody }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Reference Standards</el-col>
                <el-col :span="16">{{ currentHolder.referenceStandards }}</el-col>
            </el-row>
            <el-row justify="center">
                <el-col :span="8" class="info-label">Course Name</el-col>
                <el-col :span="16">{{ currentHolder.courseName }}</el-col>
            </el-row>
        </el-col>
    </el-row>
    <el-divider content-position="left">Course Content</el-divider>
    <el-row style="margin-bottom: 40px;">
        <ul>
            <li v-for="item in currentHolder.courseContent" :class="liCls">{{ item }}</li>

        </ul>
    </el-row>
</template>

<style lang="scss" scoped>
.course-title {
    font-size: 20px;
    font-weight: bold;
}

.CertContent {
    .el-row {
        border-bottom: 1px solid rgba(127, 126, 126, 0.362);

        .el-col {
            border-right: 1px solid rgba(127, 126, 126, 0.362);
            //height: 30px;
            padding-left: 15px;
            // text-align: center;
        }

        .el-col:first-child {
            border-left: 1px solid rgba(127, 126, 126, 0.362);
        }
    }

    .el-row:first-child {
        border-top: 1px solid rgba(127, 126, 126, 0.362);
    }
}

.title {
    font-size: 16px;
    font-weight: bold;
}

.info-label {
    font-weight: bold;
    color: #00008B
}

ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0px;
    width: 100%;
    /* 允许换行 */
}

li.singleCol {
    width: 100%;
    /* 每个占50%，刚好两列 */
    box-sizing: border-box;
}

li.tCol {
    width: 50%;
    /* 每个占50%，刚好两列 */
    box-sizing: border-box;
}

.el-divider {
    margin-top: 24px;
    margin-bottom: 24px;
}

::v-deep(.el-divider__text) {
    background-color: #fff;
    font-size: 16px;
    font-weight: bold;
}



.el-divider--horizontal {
    border-top: 1px solid rgba(127, 126, 126, 0.362)
}
</style>