<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import noData from '/images/noData.svg'
import { getCertificateDetailByCertificateId, downloadCertificatePdf } from '@/apis/certificateApi';
import QrcodeVue from 'qrcode.vue'

import {
  Download,
  Printer,
  Back
} from '@element-plus/icons-vue'

const selectedCertificateData = ref<any>({})

const certificateId = ref<any>('');

const route = useRoute();
const router = useRouter();
const qrCode = ref<any>('');
const gradient = ref(false)
const gradientType = ref<any>('linear')
const gradientStartColor = ref('#000000')
const gradientEndColor = ref('#38bdf8')

const hasCertificate = ref(false);

const downloadLoading = ref(false);
const printLoading = ref(false);

const backToIndex = () => {
  router.push({ name: 'certificatesIndex' });
}

const downloadCertificate = () => {
  downloadLoading.value = true;

  downloadCertificatePdf(certificateId.value).then((response) => {
    const blob = new Blob([response.data]);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;

    const contentDisposition = response.headers['content-disposition'];
    let fileName = `${selectedCertificateData.value.traineesName + '_' + certificateId.value}.pdf`;

    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }).catch((error) => {
    console.error('下载文件时出错:', error);
  }).finally(() => {
    downloadLoading.value = false;
  });
}

const printPdf = () => {
  printLoading.value = true;
  downloadCertificatePdf(certificateId.value).then((response) => {
    const pdfBlob = response.data;
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = pdfUrl;
    iframe.onload = () => {
      iframe.contentWindow!.print();
      URL.revokeObjectURL(pdfUrl);
    };
    document.body.appendChild(iframe);

  }).catch((error) => {
    console.error('下载文件时出错:', error);
  }).finally(() => {
    printLoading.value = false;
  });
}

const formatDate = (dateStr: any) => {
  const options = ref<any>({ day: '2-digit', month: 'short', year: 'numeric' });
  const formattedDate = new Date(dateStr).toLocaleDateString('en-GB', options.value);
  return formattedDate.replace(/\s/g, '-');
}

onMounted(() => {
  certificateId.value = route.query.query
  getCertificateDetailByCertificateId(certificateId.value).then((resp) => {
    if (!resp) return;
    selectedCertificateData.value = resp;
    qrCode.value = "http://www.rstsacademy.com/certificates/search-result/m?query=" + certificateId.value
    hasCertificate.value = true;
  }).catch((exe) => {
    console.error(exe)
    hasCertificate.value = false;
  })
})
</script>

<template>
  <div class="certifiateDetail">
    <div class="certifiateId">
      <h1 style="margin: 0px;">RSTS Certification Validation System</h1>
      <div>
        <el-button :icon="Download" :loading="downloadLoading" :disabled="!hasCertificate" link type="primary"
          @click="downloadCertificate">Download</el-button>
        <el-button :icon="Printer" :loading="printLoading" :disabled="!hasCertificate" link type="primary"
          @click="printPdf">Print</el-button>
      </div>
    </div>

    <div v-if="hasCertificate" class="content">
      <el-row class="group-section" :gutter="20">
        <el-col :span="16">
          <el-descriptions title="Trainee Information" :column="1" label-width="130px" size="small" :border="false">
            <el-descriptions-item label="Trainee Name">{{ selectedCertificateData.traineesName }}</el-descriptions-item>
            <el-descriptions-item label="Nationality">{{ selectedCertificateData.nationality }}</el-descriptions-item>
            <el-descriptions-item label="Passport No.">{{ selectedCertificateData.passportNo }}</el-descriptions-item>
          </el-descriptions>
        </el-col>

        <el-col :span="8" class="qr-section">
          <qrcode-vue :value="qrCode" level="Q" render-as="svg" background="rgba(212, 208, 208, 0.14)" :margin="2"
            foreground="#000" :gradient="gradient" :gradient-type="gradientType"
            :gradient-start-color="gradientStartColor" :gradient-end-color="gradientEndColor" />
        </el-col>
      </el-row>

      <el-descriptions title="Certificate Information" :column="1" label-width="130px" size="small" :border="false"
        class="description-block">
        <el-descriptions-item label="Certificate ID">{{ selectedCertificateData.certificateId }}</el-descriptions-item>
        <el-descriptions-item label="Validity Period">{{ selectedCertificateData.validityPeriod
        }}</el-descriptions-item>
        <el-descriptions-item label="Issue Date">{{ formatDate(selectedCertificateData.completionDate)
        }}</el-descriptions-item>
        <el-descriptions-item label="Expiring Date">{{ formatDate(selectedCertificateData.expiringDate)
        }}</el-descriptions-item>
      </el-descriptions>

      <el-descriptions title="Training Information" :column="1" label-width="130px" size="small" :border="false"
        class="description-block">
        <el-descriptions-item label="Course Name">{{ selectedCertificateData.courseName }}</el-descriptions-item>
        <el-descriptions-item label="Form of Instruction">{{ selectedCertificateData.formOfInstruction
        }}</el-descriptions-item>
        <el-descriptions-item label="Reference Standards">{{ selectedCertificateData.referenceStandards
        }}</el-descriptions-item>
        <el-descriptions-item label="Training Hours">{{ selectedCertificateData.trainingHours }}</el-descriptions-item>
      </el-descriptions>

      <el-descriptions title="Awarding Body Information" :column="1" label-width="130px" size="small" :border="false"
        class="description-block">
        <el-descriptions-item label="Trainer Name">{{ selectedCertificateData.trainerName }}</el-descriptions-item>
        <el-descriptions-item label="Coordinator Name">{{ selectedCertificateData.coordinatorName
        }}</el-descriptions-item>
        <el-descriptions-item label="Exam Invigilator Name">{{ selectedCertificateData.examInvigilatorName
        }}</el-descriptions-item>
        <el-descriptions-item label="Issuer Name">{{ selectedCertificateData.issuerName }}</el-descriptions-item>
        <el-descriptions-item label="Approver Name">{{ selectedCertificateData.approverName }}</el-descriptions-item>
        <el-descriptions-item label="Awarding Body">{{ selectedCertificateData.awardingBody }}</el-descriptions-item>
      </el-descriptions>
    </div>

    <el-empty v-else :image="noData" description="No Data Found!" />
  </div>
</template>

<style lang="scss" scoped>
.certifiateDetail {
  width: 98%;
  min-height: calc(100vh - 300px);
  margin: 20px auto;

  .certifiateId {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    h1 {
      font-size: 20px;
      color: #2c3e50;
      flex: 1 1 auto;
      min-width: 200px;
    }

    div {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      flex: 1 1 auto;
      justify-content: flex-end;
    }

    .el-button {
      height: 36px;
      font-weight: 500;
    }
  }

  .group-section {
    margin-bottom: 20px;
  }

  .qr-section {
    text-align: center;
    padding-top: 20px;
  }

  .description-block {
    margin-bottom: 20px;
  }

  ::v-deep(.el-descriptions__title) {
    color: #3498db;
    border-left: 2px solid #3498db;
    padding-left: 4px;
    font-weight: 600;
  }

  ::v-deep(.el-descriptions__cell) {
    display: flex;
    /* 内容换行 */
    align-items: flex-start;
  }

  ::v-deep(.el-descriptions__label) {
    flex: 0 0 130px;
    /* 固定宽度，也可以根据需要调整 */
    font-weight: 600;
    padding-right: 10px;
    box-sizing: border-box;
    white-space: nowrap;
    /* label不换行 */
  }

  ::v-deep(.el-descriptions__content) {
    flex: 1 1 auto;
    /* 内容自适应宽度 */
    word-break: break-word;
    /* 内容超长换行 */
    white-space: normal;
  }

  @media (min-width: 768px) {
    .certifiateId h1 {
      font-size: 24px;
    }

    .el-descriptions {
      max-width: 600px;
    }
  }
}
</style>