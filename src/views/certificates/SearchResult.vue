<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import noData from '/images/noData.svg'
import { getCertificateDetailByCertificateId, downloadCertificatePdf } from '@/apis/certificateApi';
import QrcodeVue from 'qrcode.vue'

import {
  Calendar,
  DocumentChecked,
  Download,
  Medal,
  OfficeBuilding,
  Printer,
  Reading,
  Stamp,
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

onMounted(() => {
  certificateId.value = route.query.query
  getCertificateDetailByCertificateId(certificateId.value).then((resp) => {
    if (!resp) return;
    selectedCertificateData.value = resp;
    qrCode.value = "https://www.rstsacademy.com/certificates/search-result/m?query=" + certificateId.value
    hasCertificate.value = true;
  }).catch((exe) => {
    console.error(exe)
    hasCertificate.value = false;
  })
})

const formatDate = (dateStr: any) => {
  const d = new Date(dateStr);

  // en-US 会返回 Sep, 而不是 Sept
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(d);
  const day = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
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
  <section class="certificatePage">
    <div class="certificateShell">
      <header class="certificateHeader">
        <div class="headerCopy">
          <span class="eyebrow">Verified certificate record</span>
          <h1>RSTS Certification Validation System</h1>
          <p v-if="hasCertificate">Certificate ID {{ selectedCertificateData.certificateId }} has a matching training
            record in the RSTS Academy verification system.</p>
          <p v-else>Enter another certificate ID or return to the validation page to search again.</p>
        </div>
        <div class="headerActions">
          <el-button :icon="Back" @click="backToIndex">Back</el-button>
          <el-button :icon="Download" :loading="downloadLoading" :disabled="!hasCertificate" type="primary"
            @click="downloadCertificate">Download</el-button>
          <el-button :icon="Printer" :loading="printLoading" :disabled="!hasCertificate"
            @click="printPdf">Print</el-button>
        </div>
      </header>

      <div class="certificatePanel" v-if="hasCertificate">
        <div class="recordSummary">
          <div class="identityBlock">
            <div class="sealIcon">
              <el-icon>
                <Medal />
              </el-icon>
            </div>
            <div>
              <span class="summaryLabel">Trainee</span>
              <h2>{{ selectedCertificateData.traineesName }}</h2>
              <p>{{ selectedCertificateData.courseName }}</p>
              <div class="identityMeta">
                <span>
                  <strong>Nationality</strong>
                  {{ selectedCertificateData.nationality }}
                </span>
                <span>
                  <strong>Passport No.</strong>
                  {{ selectedCertificateData.passportNo }}
                </span>
              </div>
            </div>
          </div>
          <div class="qrCard">
            <span>Mobile verification</span>
            <qrcode-vue :value="qrCode" level="Q" render-as="svg" background="#ffffff" :margin="2" foreground="#102333"
              :gradient="gradient" :gradient-type="gradientType" :gradient-start-color="gradientStartColor"
              :gradient-end-color="gradientEndColor" />
          </div>
        </div>

        <div class="detailGrid">
          <section class="detailSection">
            <div class="sectionTitle">
              <el-icon>
                <DocumentChecked />
              </el-icon>
              <h3>Certificate Information</h3>
            </div>
            <el-descriptions :column="1" label-width="170px">
              <el-descriptions-item label="Certificate ID">{{ selectedCertificateData.certificateId
                }}</el-descriptions-item>
              <el-descriptions-item label="Validity Period">{{ selectedCertificateData.validityPeriod
                }}</el-descriptions-item>
              <el-descriptions-item label="Issue Date">{{ formatDate(selectedCertificateData.completionDate)
                }}</el-descriptions-item>
              <el-descriptions-item label="Expiring Date">{{ formatDate(selectedCertificateData.expiringDate)
                }}</el-descriptions-item>
            </el-descriptions>
          </section>

          <section class="detailSection">
            <div class="sectionTitle">
              <el-icon>
                <Reading />
              </el-icon>
              <h3>Training Information</h3>
            </div>
            <el-descriptions :column="1" label-width="170px">
              <el-descriptions-item label="Course Name">{{ selectedCertificateData.courseName
                }}</el-descriptions-item>
              <el-descriptions-item label="Form of Instruction">{{ selectedCertificateData.formOfInstruction
                }}</el-descriptions-item>
              <el-descriptions-item label="Reference Standards">{{ selectedCertificateData.referenceStandards
                }}</el-descriptions-item>
              <el-descriptions-item label="Training Hours">{{ selectedCertificateData.trainingHours
                }}</el-descriptions-item>
            </el-descriptions>
          </section>

          <section class="detailSection">
            <div class="sectionTitle">
              <el-icon>
                <OfficeBuilding />
              </el-icon>
              <h3>Awarding Body Information</h3>
            </div>
            <el-descriptions :column="1" label-width="170px">
              <el-descriptions-item label="Trainer Name">{{ selectedCertificateData.trainerName
                }}</el-descriptions-item>
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
          </section>

          <div class="recordMeta">
            <div>
              <el-icon>
                <Calendar />
              </el-icon>
              <span>Issued {{ formatDate(selectedCertificateData.completionDate) }}</span>
            </div>
            <div>
              <el-icon>
                <Stamp />
              </el-icon>
              <span>Validated by RSTS Academy</span>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="emptyPanel">
        <el-empty :image="noData">
          <template #description>
            No Data Found!
          </template>
        </el-empty>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.certificatePage {
  min-height: calc(100vh - 96px - 220px);
  padding: 42px 24px 74px;
  background:
    radial-gradient(circle at 12% 14%, rgba(227, 177, 91, 0.18), transparent 28%),
    linear-gradient(180deg, #f6f8f5 0%, #edf3ef 100%);
}

.certificateShell {
  width: min(1120px, 100%);
  margin: 0 auto;
}

.certificateHeader {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
  padding: 34px 38px;
  color: #ffffff;
  background:
    linear-gradient(135deg, rgba(7, 24, 39, 0.98), rgba(18, 92, 100, 0.92)),
    linear-gradient(90deg, transparent, rgba(245, 213, 142, 0.12));
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 22px 48px rgba(9, 34, 48, 0.18);

  .eyebrow {
    display: block;
    margin-bottom: 10px;
    color: #f5d58e;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    color: #ffffff;
    font-size: 32px;
    line-height: 1.16;
    font-weight: 800;
    letter-spacing: 0;
  }

  p {
    max-width: 660px;
    margin: 13px 0 0;
    color: rgba(255, 255, 255, 0.72);
    font-size: 15px;
    line-height: 1.7;
  }
}

.headerActions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 10px;
  flex: 0 0 auto;

  :deep(.el-button) {
    height: 40px;
    margin-left: 0;
    padding: 0 18px;
    color: #ffffff;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.24);
    border-radius: 0;
  }

  :deep(.el-button--primary) {
    background: #d8a84d;
    border-color: #d8a84d;
    color: #102333;
  }
}

.certificatePanel {
  position: relative;
  margin-top: 18px;
  padding: 34px;
  background: #ffffff;
  border: 1px solid rgba(18, 54, 72, 0.1);
  box-shadow: 0 26px 60px rgba(15, 40, 52, 0.12);

  &::before {
    content: "";
    position: absolute;
    inset: 12px;
    border: 1px solid rgba(216, 168, 77, 0.26);
    pointer-events: none;
  }
}

.recordSummary {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 180px;
  gap: 26px;
  align-items: stretch;
  padding: 28px;
  background: linear-gradient(135deg, #f8fbf7, #edf6f4);
  border-left: 5px solid #0e6670;
}

.identityBlock {
  display: flex;
  align-items: center;
  gap: 22px;
  min-width: 0;

  .sealIcon {
    display: grid;
    place-items: center;
    flex: 0 0 76px;
    width: 76px;
    height: 76px;
    color: #102333;
    font-size: 34px;
    background: #f5d58e;
    border-radius: 50%;
    box-shadow: inset 0 0 0 7px rgba(255, 255, 255, 0.45);
  }

  .summaryLabel {
    display: block;
    margin-bottom: 7px;
    color: #0e6670;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    color: #102333;
    font-size: 28px;
    line-height: 1.18;
    font-weight: 800;
    letter-spacing: 0;
  }

  p {
    margin: 10px 0 0;
    color: rgba(16, 35, 51, 0.66);
    font-size: 15px;
    line-height: 1.6;
  }

  .identityMeta {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, max-content));
    gap: 28px;
    width: fit-content;
    margin-top: 18px;
    padding-top: 14px;
    border-top: 1px solid rgba(16, 35, 51, 0.1);

    span {
      display: grid;
      gap: 3px;
      color: #102333;
      font-size: 13px;
      font-weight: 700;
    }

    strong {
      color: rgba(16, 35, 51, 0.56);
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
  }
}

.qrCard {
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 10px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid rgba(16, 35, 51, 0.1);

  span {
    color: rgba(16, 35, 51, 0.64);
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }

  svg {
    width: 104px;
    height: 104px;
  }
}

.detailGrid {
  position: relative;
  z-index: 1;
  display: block;
  margin-top: 22px;
  padding: 6px 30px 4px;
  background: linear-gradient(180deg, #fbfcfa 0%, #f6faf7 100%);
  border: 1px solid rgba(16, 35, 51, 0.09);
  border-left: 5px solid #0e6670;
}

.detailSection {
  position: relative;
  display: grid;
  grid-template-columns: 250px minmax(0, 1fr);
  gap: 28px;
  padding: 26px 0;
  border-bottom: 1px solid rgba(16, 35, 51, 0.08);

  &:last-of-type {
    border-bottom: none;
  }
}

.sectionTitle {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0;
  color: #0e6670;

  .el-icon {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    color: #0e6670;
    background: rgba(14, 102, 112, 0.1);
    border-radius: 50%;
  }

  h3 {
    margin: 0;
    color: #102333;
    font-size: 17px;
    line-height: 1.25;
    font-weight: 800;
    letter-spacing: 0;
  }
}

.recordMeta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1px;
  margin-top: 18px;
  overflow: hidden;
  background: rgba(16, 35, 51, 0.1);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 54px;
    color: #102333;
    font-weight: 700;
    background: #f4f8f6;
  }

  .el-icon {
    color: #d29a34;
    font-size: 18px;
  }
}

.emptyPanel {
  margin-top: 18px;
  padding: 48px;
  background: #ffffff;
  border: 1px solid rgba(18, 54, 72, 0.1);
  box-shadow: 0 20px 44px rgba(15, 40, 52, 0.1);
}

:deep(.el-descriptions__body) {
  background: transparent;
}

:deep(.el-descriptions__cell) {
  display: flex;
  align-items: flex-start;
  padding-bottom: 12px !important;
  vertical-align: top;
}

:deep(.el-descriptions__label) {
  flex: 0 0 170px;
  box-sizing: border-box;
  padding-right: 16px;
  color: rgba(16, 35, 51, 0.58);
  font-weight: 800;
  white-space: nowrap;
}

:deep(.el-descriptions__content) {
  flex: 1 1 auto;
  min-width: 0;
  color: #102333;
  font-weight: 600;
  white-space: normal;
  word-break: normal;
  overflow-wrap: break-word;
}

@media (max-width: 980px) {
  .certificateHeader {
    display: block;
  }

  .headerActions {
    justify-content: flex-start;
    margin-top: 22px;
  }

  .recordSummary,
  .detailGrid {
    grid-template-columns: 1fr;
  }

  .detailGrid {
    padding: 4px 22px;
  }

  .detailSection {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .qrCard {
    width: 180px;
    justify-self: start;
  }

  .recordMeta {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .certificatePage {
    min-height: calc(100vh - 64px - 320px);
    padding: 24px 14px 54px;
  }

  .certificateHeader {
    padding: 26px 22px;

    h1 {
      font-size: 25px;
    }
  }

  .headerActions {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 100%;

    :deep(.el-button) {
      padding: 0 8px;
    }
  }

  .certificatePanel {
    padding: 18px;
  }

  .recordSummary {
    padding: 22px;
  }

  .identityBlock {
    align-items: flex-start;

    .sealIcon {
      flex-basis: 58px;
      width: 58px;
      height: 58px;
      font-size: 26px;
    }

    h2 {
      font-size: 22px;
    }
  }

  .detailSection {
    padding: 22px 0;
  }

  :deep(.el-descriptions__label) {
    flex-basis: 130px;
    padding-right: 10px;
  }
}

@media (max-width: 380px) {
  .headerActions {
    grid-template-columns: 1fr;
  }

  :deep(.el-descriptions__cell) {
    display: block;
  }

  :deep(.el-descriptions__label) {
    display: block;
    margin-bottom: 3px;
    white-space: normal;
  }
}
</style>
