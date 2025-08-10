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

const selectedCertificateData = ref<any>({

})
const certificateId = ref<any>('');

const route = useRoute();
const router = useRouter();
const qrCode = ref<any>('');
const gradient = ref(false)
const gradientType = ref<any>('linear')
const gradientStartColor = ref('#000000')
const gradientEndColor = ref('#38bdf8')
const liCls = ref('singleCol')

const imageSettings = ref({
  src: 'https://github.com/scopewu.png',
  width: 30,
  height: 30,
  excavate: true,
})

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

const formatDate = (dateStr: any) => {
  const options = ref<any>({ day: '2-digit', month: 'short', year: 'numeric' });

  const formattedDate = new Date(dateStr).toLocaleDateString('en-GB', options.value);

  return formattedDate.replace(/\s/g, '-');
}


const hasCertificate = ref(false);

const downloadLoading = ref(false);
const printLoading = ref(false);

const backToIndex = () => {
  router.push({ name: 'certificatesIndex' });
}

const downloadCertificate = () => {
  downloadLoading.value = true;

  downloadCertificatePdf(certificateId.value).then((response) => {
    const blob = new Blob([response.data]); // 创建 Blob 对象
    const url = window.URL.createObjectURL(blob); // 创建指向 Blob 对象的 URL
    const link = document.createElement('a'); // 创建隐藏的 <a> 元素
    link.style.display = 'none';
    link.href = url;

    // 从响应头或其他来源获取文件名
    const contentDisposition = response.headers['content-disposition'];
    let fileName = `${selectedCertificateData.value.traineesName + '_' + certificateId.value}.pdf`;

    link.setAttribute('download', fileName); // 设置下载文件名
    document.body.appendChild(link);
    link.click(); // 触发点击事件下载文件
    document.body.removeChild(link); // 下载完成后移除元素
    window.URL.revokeObjectURL(url); // 释放 URL 对象
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
</script>

<template>
  <el-card class="certifiateDetail" shadow="always">
    <template #header>
      <div class="certifiateId">
        <h1 style="margin: 0px; text-align: left;">RSTS Certification Validation System</h1>
        <div>
          <el-button :icon="Back" style="font-weight: 500;" type="primary" link @click="backToIndex">Back</el-button>
          <el-button :icon="Download" :loading="downloadLoading" :disabled="!hasCertificate" link type="primary"
            style="height: 40px" @click="downloadCertificate">Download</el-button>
          <el-button :icon="Printer" :loading="printLoading" :disabled="!hasCertificate" link type="primary"
            style=" height: 40px" @click="printPdf">Print</el-button>
        </div>

      </div>
    </template>
    <div class="content" v-if="hasCertificate">

      <!-- 学员信息组 -->
      <el-row class="group-section">
        <el-col :span="12">
          <el-descriptions title="Trainee Information" :column="1" label-width="150px">
            <el-descriptions-item label="Trainee Name">{{ selectedCertificateData.traineesName }}</el-descriptions-item>
            <el-descriptions-item label="Nationality">{{ selectedCertificateData.nationality }}</el-descriptions-item>
            <el-descriptions-item label="Passport No.">{{ selectedCertificateData.passportNo }}</el-descriptions-item>
          </el-descriptions>
        </el-col>
        <el-col :span="12" class="qr-section">
          <qrcode-vue :value="qrCode" level="Q" render-as="svg" background="rgba(212, 208, 208, 0.14)" :margin="2"
            foreground='#000' :gradient="gradient" :gradient-type="gradientType"
            :gradient-start-color="gradientStartColor" :gradient-end-color="gradientEndColor" />
          <!-- 学员二维码区域 -->
          <!-- <el-image style="width: 120px; height: 120px; display: block; margin: 0 auto;"
          src="https://www.example.com/qrcode.png" alt="QR Code" /> -->
        </el-col>
      </el-row>

      <!-- 证书信息组 -->
      <el-descriptions title="Certificate Information" :column="2" label-width="150px">
        <!-- <el-descriptions-item label="Certificate SN">{{ selectedCertificateData.sn }}</el-descriptions-item> -->
        <el-descriptions-item label="Certificate ID">{{ selectedCertificateData.certificateId }}</el-descriptions-item>
        <el-descriptions-item label="Validity Period">{{ selectedCertificateData.validityPeriod
        }}</el-descriptions-item>
        <el-descriptions-item label="Issue Date">{{ formatDate(selectedCertificateData.completionDate)
        }}</el-descriptions-item>
        <el-descriptions-item label="Expiring Date">{{ formatDate(selectedCertificateData.expiringDate)
        }}</el-descriptions-item>
      </el-descriptions>

      <!-- 培训信息组 -->
      <el-descriptions title="Training Information" :column="2" label-width="150px">

        <el-descriptions-item label="Course Name">{{ selectedCertificateData.courseName
        }}</el-descriptions-item>
        <el-descriptions-item label="Form of Instruction">{{ selectedCertificateData.formOfInstruction
        }}</el-descriptions-item>
        <el-descriptions-item label="Reference Standards">{{ selectedCertificateData.referenceStandards
        }}</el-descriptions-item>
        <el-descriptions-item label="Training Hours">{{ selectedCertificateData.trainingHours
        }}</el-descriptions-item>



      </el-descriptions>

      <!-- 认证信息组 -->
      <el-descriptions title="Awarding Body Information" :column="2" label-width="150px">
        <el-descriptions-item label="Trainer Name">{{ selectedCertificateData.trainerName }}</el-descriptions-item>
        <el-descriptions-item label="Coordinator Name">{{ selectedCertificateData.coordinatorName
        }}</el-descriptions-item>
        <el-descriptions-item label="Exam Invigilator Name">{{ selectedCertificateData.examInvigilatorName
        }}</el-descriptions-item>
        <el-descriptions-item label="Issuer Name">{{ selectedCertificateData.issuerName }}</el-descriptions-item>
        <el-descriptions-item label="Approver Name">{{ selectedCertificateData.approverName
        }}</el-descriptions-item>
        <el-descriptions-item label="Awarding Body">{{ selectedCertificateData.awardingBody
        }}</el-descriptions-item>


      </el-descriptions>
    </div>



    <el-empty v-else :image="noData">
      <template #description>
        No Data Found!
      </template>
    </el-empty>


  </el-card>
</template>


<style lang="scss" , scoped>
.certifiateDetail {
  width: 98%;
  min-height: calc(100vh - 300px);
  margin: 20px auto;
  background-color: #f9f9f9;

  .certifiateId {
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 24px;
      color: #2c3e50;
    }

    span {
      font-weight: bold;
      color: #e74c3c;
    }
  }

  .group-section {
    margin-bottom: 20px;
  }

  .qr-section {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
  }

  .el-descriptions {
    margin-top: 20px;
  }

  ::v-deep(.el-descriptions__title) {
    color: #3498db;
    border-left: 2px solid #3498db;
    padding-left: 3px;
  }

  ::v-deep(.el-descriptions__label) {
    font-weight: bold;
  }

  ::v-deep(.el-card__header) {
    border: none;
    padding-bottom: 0px;
  }

  ::v-deep(.el-card__body) {

    min-height: calc(100vh - 400px);
  }


  ::v-deep(.el-card__body) {
    padding-top: 5px;
  }

  ::v-deep(.el-descriptions__cell) {
    width: 50%;
  }
}
</style>