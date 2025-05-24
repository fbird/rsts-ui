<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { computed, ref } from 'vue'
import { useTokenStore } from '@/stores/token'

import { downloadCertificateTemplate, uploadCertificates } from '@/apis/certificateApi'

const props = defineProps<{
  visible: boolean
  getTableData: () => void
}>()
const innerVisible = ref(false)
const uploadData = ref([])
const loading = ref(false)
const tokenStore = useTokenStore();

const emits = defineEmits(['close'])
const handleClose = () => {
  emits('close')
  uploadData.value = [];
}
const uploadAction = () => {
  return uploadCertificates()
}

const uploadSuccess = (respons: any) => {
  loading.value = false
  innerVisible.value = true
  uploadData.value = respons.data
  props.getTableData()
  ElMessage.success('Upload Success')
}
const handleError = () => {
  ElMessage.error('upload Error')
  loading.value = false
}

const handleDownload = () => {
  let a = document.createElement('a')
  a.href = downloadCertificateTemplate()
  a.setAttribute('download', 'Certificate Template')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
const uploadProgress = () => {
  loading.value = true
}

const uploadHeaders = computed(() => {
  return {
    Authorization: 'Bearer ' + tokenStore?.token!.tokenValue!
  }

})

</script>
<template>
  <el-dialog :model-value="props.visible" title="Batch Import" width="600px" :close-on-click-modal="false"
    @close="handleClose">
    <el-button type="primary" icon="Download" @click="handleDownload" style="margin-bottom: 10px">Download
      Template</el-button>
    <el-upload class="upload-demo" drag :action="uploadAction()" :headers="uploadHeaders" :on-success="uploadSuccess"
      :on-error="handleError" accept=".xlsx,.xls" :on-progress="uploadProgress" v-loading="loading">
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">
        Upload File By Click Or Drag File Here
        <div class="text-tip">Supported File Extension: .xlsx,.xls</div>
      </div>
    </el-upload>
    <div>
      Upload Total：{{ uploadData.length }}
    </div>
  </el-dialog>
</template>
<style lang="scss" scoped>
::v-deep().el-loading-mask {
  background-color: rgba(255, 255, 255, 0);
}

::v-deep().el-progress--line {
  display: none;
}
</style>
