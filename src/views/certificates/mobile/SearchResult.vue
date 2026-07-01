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
  const d = new Date(dateStr);

  // en-US 会返回 Sep, 而不是 Sept
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(d);
  const day = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}

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
</script>

<template>
  <section class="certificateMobilePage">
    <div class="certificateShell">
      <header class="certificateHeader">
        <span class="eyebrow">Verified certificate record</span>
        <h1>RSTS Certification Validation System</h1>
        <p v-if="hasCertificate">Certificate ID {{ selectedCertificateData.certificateId }} has a matching RSTS Academy
          record.</p>
        <p v-else>Enter another certificate ID or return to the validation page to search again.</p>
        <div class="headerActions">
          <el-button :icon="Back" @click="backToIndex">Back</el-button>
          <el-button :icon="Download" :loading="downloadLoading" :disabled="!hasCertificate" type="primary"
            @click="downloadCertificate">Download</el-button>
          <el-button :icon="Printer" :loading="printLoading" :disabled="!hasCertificate"
            @click="printPdf">Print</el-button>
        </div>
      </header>

      <div v-if="hasCertificate" class="certificatePanel">
        <div class="recordSummary">
          <div class="sealIcon">
            <el-icon>
              <Medal />
            </el-icon>
          </div>
          <div class="summaryCopy">
            <span>Trainee</span>
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
          <div class="qrCard">
            <span>Mobile verification</span>
            <qrcode-vue :value="qrCode" level="Q" render-as="svg" background="#ffffff" :margin="2" foreground="#102333"
              :gradient="gradient" :gradient-type="gradientType" :gradient-start-color="gradientStartColor"
              :gradient-end-color="gradientEndColor" />
          </div>
        </div>

        <section class="detailSection">
          <div class="sectionTitle">
            <el-icon>
              <DocumentChecked />
            </el-icon>
            <h3>Certificate Information</h3>
          </div>
          <el-descriptions :column="1" label-width="130px" size="small" :border="false">
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
          <el-descriptions :column="1" label-width="130px" size="small" :border="false">
            <el-descriptions-item label="Course Name">{{ selectedCertificateData.courseName }}</el-descriptions-item>
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
          <el-descriptions :column="1" label-width="130px" size="small" :border="false">
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

      <div v-else class="emptyPanel">
        <el-empty :image="noData" description="No Data Found!" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.certificateMobilePage {
  min-height: calc(100vh - 64px - 320px);
  padding: 22px 14px 52px;
  background:
    radial-gradient(circle at 10% 8%, rgba(227, 177, 91, 0.18), transparent 32%),
    linear-gradient(180deg, #f6f8f5 0%, #edf3ef 100%);
}

.certificateShell {
  width: min(640px, 100%);
  margin: 0 auto;
}

.certificateHeader {
  padding: 26px 22px;
  color: #ffffff;
  background:
    linear-gradient(135deg, rgba(7, 24, 39, 0.98), rgba(18, 92, 100, 0.92)),
    linear-gradient(90deg, transparent, rgba(245, 213, 142, 0.12));
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 18px 38px rgba(9, 34, 48, 0.16);

  .eyebrow {
    display: block;
    margin-bottom: 10px;
    color: #f5d58e;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    color: #ffffff;
    font-size: 25px;
    line-height: 1.18;
    font-weight: 800;
    letter-spacing: 0;
  }

  p {
    margin: 12px 0 0;
    color: rgba(255, 255, 255, 0.72);
    font-size: 14px;
    line-height: 1.6;
  }
}

.headerActions {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  margin-top: 20px;

  :deep(.el-button) {
    height: 40px;
    margin-left: 0;
    padding: 0 8px;
    color: #ffffff;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.24);
    border-radius: 0;
  }

  :deep(.el-button--primary) {
    color: #102333;
    background: #d8a84d;
    border-color: #d8a84d;
  }
}

.certificatePanel,
.emptyPanel {
  position: relative;
  margin-top: 14px;
  padding: 18px;
  background: #ffffff;
  border: 1px solid rgba(18, 54, 72, 0.1);
  box-shadow: 0 18px 42px rgba(15, 40, 52, 0.1);
}

.certificatePanel::before {
  content: "";
  position: absolute;
  inset: 10px;
  border: 1px solid rgba(216, 168, 77, 0.22);
  pointer-events: none;
}

.recordSummary,
.detailSection,
.recordMeta {
  position: relative;
  z-index: 1;
}

.recordSummary {
  display: grid;
  gap: 18px;
  padding: 22px;
  background: linear-gradient(135deg, #f8fbf7, #edf6f4);
  border-left: 5px solid #0e6670;
}

.sealIcon {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  color: #102333;
  font-size: 26px;
  background: #f5d58e;
  border-radius: 50%;
  box-shadow: inset 0 0 0 6px rgba(255, 255, 255, 0.45);
}

.summaryCopy {
  span {
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
    font-size: 22px;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: 0;
  }

  p {
    margin: 9px 0 0;
    color: rgba(16, 35, 51, 0.66);
    font-size: 14px;
    line-height: 1.55;
  }

  .identityMeta {
    display: grid;
    grid-template-columns: 1fr;
    gap: 11px;
    margin-top: 16px;
    padding-top: 13px;
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
    width: 110px;
    height: 110px;
  }
}

.detailSection {
  margin-top: 0;
  padding: 22px 6px;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(16, 35, 51, 0.08);

  &:first-of-type {
    margin-top: 14px;
  }

  &:last-of-type {
    border-bottom: none;
  }
}

.sectionTitle {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  color: #0e6670;

  .el-icon {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    color: #0e6670;
    background: rgba(14, 102, 112, 0.1);
    border-radius: 50%;
  }

  h3 {
    margin: 0;
    color: #102333;
    font-size: 16px;
    line-height: 1.25;
    font-weight: 800;
    letter-spacing: 0;
  }
}

.recordMeta {
  display: grid;
  gap: 1px;
  margin-top: 14px;
  overflow: hidden;
  background: rgba(16, 35, 51, 0.1);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-height: 50px;
    color: #102333;
    font-size: 13px;
    font-weight: 700;
    background: #f4f8f6;
  }

  .el-icon {
    color: #d29a34;
    font-size: 17px;
  }
}

:deep(.el-descriptions__body) {
  background: transparent;
}

:deep(.el-descriptions__cell) {
  display: flex;
  align-items: flex-start;
  padding-bottom: 10px !important;
}

:deep(.el-descriptions__label) {
  flex: 0 0 130px;
  box-sizing: border-box;
  padding-right: 10px;
  color: rgba(16, 35, 51, 0.58);
  font-weight: 800;
  white-space: nowrap;
}

:deep(.el-descriptions__content) {
  flex: 1 1 auto;
  color: #102333;
  font-weight: 600;
  white-space: normal;
  word-break: break-word;
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
