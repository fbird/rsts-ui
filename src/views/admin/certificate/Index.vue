<template>
    <div class="app-container">

        <el-row :gutter="2" class="m-b-20 buttonGroup">

            <el-col :span="12">
                <el-button type="primary" plain :icon="Plus" size="default" @click="handleAdd">Add</el-button>
                <el-button type="success" plain :icon="Edit" size="default" :disabled="single"
                    @click="handleUpdate">Edit</el-button>
                <el-button type="danger" plain :icon="Close" size="default" :disabled="multiple"
                    @click="handleDelete">Delete</el-button>

                <el-dropdown @command="handleActionCommand" style="margin-left: 10px;">
                    <el-button type="primary" :icon="Menu">
                        More Action<el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu >
                            <el-dropdown-item :command="{ command: 'upload' }" :icon="Upload">Upload</el-dropdown-item>
                            <el-dropdown-item :icon="Download" :command="{ command: 'downloadAll' }">Export
                                All</el-dropdown-item>
                            <el-dropdown-item :command="{ command: 'downloadExcels' }" :disabled="multiple">
                                <FontAwesomeIcon :icon="faTableCells" style="margin-right: 6px" /> Export Excels
                            </el-dropdown-item>
                            <el-dropdown-item :command="{ command: 'downloadPdfs' }" :disabled="multiple">
                                <FontAwesomeIcon :icon="faFilePdf" style="margin-right: 6px" />Export Pdfs
                            </el-dropdown-item>
                            <el-dropdown-item :command="{ command: 'print' }" :icon="Printer" :disabled="single">Print</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-col>

            <el-col :span="12" style="text-align: right;">
                <el-input v-model="queryParams.searchKey" style="width: 300px" @change="getList"
                    placeholder="Type Training Name or Certificate">
                    <template #suffix>
                        <el-icon class="el-input__icon">
                            <search />
                        </el-icon>
                    </template>
                </el-input>
            </el-col>
        </el-row>

        <el-table :data="certificateList" @selection-change="handleSelectionChange" row-key="id" ref="certTblRef">
            <el-table-column type="selection" :reserve-selection="true" width="35" align="center" />
            <el-table-column label="S/N" width="75" align="center" prop="sn" />
            <el-table-column label="Trainees Name" align="center" prop="traineesName" />
            <el-table-column label="Nationality" align="center" prop="nationality" />
            <el-table-column label="Certificate Id" align="center" prop="certificateId" />
            <el-table-column label="Issue Date" align="center" prop="completionDate" width="120">
                <template #default="{ row }">
                    <span>{{ formatDate(row.completionDate) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Expiring Date" align="center" prop="expiringDate" width="120">
                <template #default="{ row }">
                    <span>{{ formatDate(row.expiringDate) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Form of Instruction" align="center" prop="formOfInstruction" />
            <el-table-column label="Course Name" align="center" prop="courseName" />
            <el-table-column label="Create Time" align="center" prop="createTime" />
        </el-table>

        <Pagination :data="pageData" :sizeChange="handleSizeChange" :currentChange="handleCurrentChange"
            :page-size-template="[10, 20, 50]" />



    </div>
    <!-- 添加或修改certificate对话框 -->
    <el-dialog :title="title" :model-value="open" width="700px" style="height:750px" class="certificateDia"
        @close="handleClose">
        <el-form :model="formData" :rules="rules" label-width="160px">
            <el-form-item label="S/N" prop="sn">
                <el-input v-model="formData.sn" placeholder="Please Input S/N" />
            </el-form-item>
            <el-form-item label="Trainees Name" prop="traineesName">
                <el-input v-model="formData.traineesName" placeholder="Please Input Trainees Name" />
            </el-form-item>
            <el-form-item label="Nationality" prop="nationality">
                <el-input v-model="formData.nationality" placeholder="Please Input Nationality" />
            </el-form-item>

            <el-form-item label="Certificate Id" prop="certificateId" v-if="formData.id">
                <el-input v-model="formData.certificateId" placeholder="Please Input Certificate Id" />
            </el-form-item>

            <el-form-item label="Passport No." prop="passportNo">
                <el-input v-model="formData.passportNo" placeholder="Please Input Passport No." />
            </el-form-item>
            <el-form-item label="Validity Period" prop="validityPeriod">
                <el-input v-model="formData.validityPeriod" placeholder="Please Input Validity Period" />
            </el-form-item>
            <el-form-item label="Issue Date" prop="completionDate">
                <el-date-picker clearable v-model="formData.completionDate" type="date" value-format="YYYY-MM-DD"
                    placeholder="Please Select Issue Date" />
            </el-form-item>
            <el-form-item label="Expiring Date" prop="expiringDate">
                <el-date-picker clearable v-model="formData.expiringDate" type="date" value-format="YYYY-MM-DD"
                    placeholder="Please Select Expiring Date" />
            </el-form-item>
            <el-form-item label="Form of Instruction" prop="formOfInstruction">
                <el-input v-model="formData.formOfInstruction" placeholder="Please Input Form of Instruction" />
            </el-form-item>
            <el-form-item label="Training Hours" prop="trainingHours">
                <el-input v-model="formData.trainingHours" placeholder="Please Input Training Hours" />
            </el-form-item>
            <el-form-item label="Trainer Name" prop="trainerName">
                <el-input v-model="formData.trainerName" placeholder="Please Input Trainer Name" />
            </el-form-item>
            <el-form-item label="Coordinator Name" prop="coordinatorName">
                <el-input v-model="formData.coordinatorName" placeholder="Please Input Coordinator Name" />
            </el-form-item>
            <el-form-item label="Exam Invigilator Name" prop="examInvigilatorName">
                <el-input v-model="formData.examInvigilatorName" placeholder="Please Input Exam Invigilator Name" />
            </el-form-item>
            <el-form-item label="Issuer Name" prop="issuerName">
                <el-input v-model="formData.issuerName" placeholder="Please Input Issuer Name" />
            </el-form-item>
            <el-form-item label="Approver Name" prop="approverName">
                <el-input v-model="formData.approverName" placeholder="Please Input Approver Name" />
            </el-form-item>
            <el-form-item label="Awarding Body" prop="awardingBody">
                <el-input v-model="formData.awardingBody" placeholder="Please Input Awarding Body" />
            </el-form-item>
            <el-form-item label="Reference Standards" prop="referenceStandards">
                <el-input v-model="formData.referenceStandards" placeholder="Please Input Reference Standards" />
            </el-form-item>
            <el-form-item label="Course Name" prop="courseName">
                <el-input v-model="formData.courseName" placeholder="Please Input Course Name" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="submitForm">Confirm</el-button>
                <el-button @click="cancel">Cancel</el-button>
            </div>
        </template>

    </el-dialog>

    <importFormDialog :visible="visibleImport" @close="handleImportClose" :getTableData="refreshData">
    </importFormDialog>
</template>

<script setup lang="ts">
import { getCertificateList, getCertificateDetail, delCertificates, addCertificate, updateCertificate, exportCertificate, downloadPdfById } from "@/apis/certificateApi";
import importFormDialog from './components/ImportFormDialog.vue'
import {
    Plus,
    Close,
    Edit,
    Download,
    Menu,
    Printer,
    Upload
} from '@element-plus/icons-vue'
import Pagination from '@/components/MyPagination.vue'
import { ElMessage, ElMessageBox, ElTable } from "element-plus";
import { formatDate } from '@/utils'
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTableCells, faFilePdf } from "@fortawesome/free-solid-svg-icons";


const certTblRef = ref<InstanceType<typeof ElTable>>();
// 选中数组
const ids = ref([]);

const visibleImport = ref<boolean>(false)

const handleImportClose = () => {
    visibleImport.value = false
}

const refreshData = () => {
    queryParams.value.pageSize = 10
    queryParams.value.pageNo = 1
    getList()
}
// 非单个禁用
const single = ref(true);
// 非多个禁用
const multiple = ref(true);

// 显示搜索条件
const showSearch = ref(true);
// 总条数
const tota = ref(0);
// certificate表格数据
const certificateList = ref([]);
const pageData = ref({
    pageNo: 1,
    pageSize: 10,
    totalPage: 0,
    total: 0
});
// 弹出层标题
const title = ref<any>("");
// 是否显示弹出层
const open = ref(false);
// 查询参数
const queryParams = ref<any>({
    searchKey: '',
    pageNo: 1,
    pageSize: 10,
});

const handleClose = () => {
    open.value = false;
    reset();
}
const selectedRows = ref<any>([]);

// 表单参数
const formData = ref<any>({});
// 表单校验
const rules = ref({
    sn: [
        { required: true, message: "S/N Can Not Be Empty", trigger: "blur" }
    ],
    traineesName: [
        { required: true, message: "Trainees Name Can Not Be Empty", trigger: "blur" }
    ],
    completionDate: [
        { required: true, message: "Issue Date Can Not Be Empty", trigger: "blur" }
    ],
    expiringDate: [
        { required: true, message: "Expiring Date Can Not Be Empty", trigger: "blur" }
    ],
    courseName: [
        { required: true, message: "Course Name Can Not Be Empty", trigger: "blur" }
    ]
});

const getList = () => {
    getCertificateList(queryParams.value).then(response => {
        certificateList.value = response.records;
        pageData.value.pageNo = response.pageNo;
        pageData.value.pageSize = response.pageSize;
        pageData.value.totalPage = response.totalPage;
        pageData.value.total = response.total;
    });
}
// 取消按钮
const cancel = () => {
    open.value = false;
    reset();
}
// 表单重置
const reset = () => {
    formData.value = {
        id: null,
        sn: null,
        traineesName: null,
        certificateId: null,
        nationality: null,
        passportNo: null,
        validityPeriod: null,
        completionDate: null,
        expiringDate: null,
        formOfInstruction: null,
        trainingHours: null,
        trainerName: null,
        coordinatorName: null,
        examInvigilatorName: null,
        issuerName: null,
        approverName: null,
        awardingBody: null,
        referenceStandards: null,
        courseName: null
    };
}

const handleSizeChange = (pageSize: number) => {
    pageData.value.pageNo = 1
    pageData.value.pageSize = pageSize
    queryParams.value.pageNo = 1
    queryParams.value.pageSize = pageSize
    getList()
}

const handleCurrentChange = (page: number) => {
    pageData.value.pageNo = page
    queryParams.value.pageNo = page
    getList()

}

/** 搜索按钮操作 */
const handleQuery = () => {
    queryParams.value.pageNo = 1;
    getList();
}
/** 重置按钮操作 */
const resetQuery = () => {
    handleQuery();
}

// 多选框选中数据
const handleSelectionChange = (selection: any) => {
    ids.value = selection.map((item: any) => item.id)
    single.value = selection.length !== 1
    multiple.value = !selection.length
}

/** 新增按钮操作 */
const handleAdd = () => {
    reset();
    open.value = true;
    title.value = "Add Certificate";
}
/** 修改按钮操作 */
const handleUpdate = (row: any) => {
    reset();
    const id = row.id || ids.value
    getCertificateDetail(id).then(response => {
        formData.value = response;
        open.value = true;
        title.value = "Update Certificate";
    });
}
/** 提交按钮 */
const submitForm = () => {
    if (formData.value.id != null) {
        updateCertificate(formData.value.id, formData.value).then(response => {

            ElMessage.success('Update Success!')

            open.value = false;
            getList();
        });
    } else {
        addCertificate(formData.value).then(response => {
            ElMessage.success('Add Success!')
            open.value = false;
            getList();
        });
    }
}
/** 删除按钮操作 */
const handleDelete = (row: any) => {
    const delIds = row.id || ids.value;

    ElMessageBox.confirm('Really Delete The Selected ' + delIds.length + ' Certificates？', 'Warnning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel'
    }).then(function () {
        return delCertificates(delIds);
    }).then(() => {
        getList();
        certTblRef.value!.clearSelection();
        ElMessage.success('Delete Success!')
    }).catch(() => { });
}

const handleExportAll = () => {
    exportCertificate([]).then((response) => {
        const blob = new Blob([response.data]); // 创建 Blob 对象
        const url = window.URL.createObjectURL(blob); // 创建指向 Blob 对象的 URL
        const link = document.createElement('a'); // 创建隐藏的 <a> 元素
        link.style.display = 'none';
        link.href = url;

        // 从响应头或其他来源获取文件名
        const contentDisposition = response.headers['content-disposition'];
        let fileName = 'certificates.xlsx';

        link.setAttribute('download', fileName); // 设置下载文件名
        document.body.appendChild(link);
        link.click(); // 触发点击事件下载文件
        document.body.removeChild(link); // 下载完成后移除元素
        window.URL.revokeObjectURL(url); // 释放 URL 对象
    }).catch((error) => {
        console.error('下载文件时出错:', error);
    });
}
/** 导出按钮操作 */
const handleExport = () => {
    exportCertificate(ids.value).then((response) => {
        const blob = new Blob([response.data]); // 创建 Blob 对象
        const url = window.URL.createObjectURL(blob); // 创建指向 Blob 对象的 URL
        const link = document.createElement('a'); // 创建隐藏的 <a> 元素
        link.style.display = 'none';
        link.href = url;

        // 从响应头或其他来源获取文件名
        const contentDisposition = response.headers['content-disposition'];
        let fileName = 'certificates.xlsx';

        link.setAttribute('download', fileName); // 设置下载文件名
        document.body.appendChild(link);
        link.click(); // 触发点击事件下载文件
        document.body.removeChild(link); // 下载完成后移除元素
        window.URL.revokeObjectURL(url); // 释放 URL 对象
    }).catch((error) => {
        console.error('下载文件时出错:', error);
    });
}

const handleUpload = () => {
    visibleImport.value = true
}

const handlePrint = (row?: any) => {

    const id = row?.id || ids.value
    downloadPdfById(id).then((response: any) => {
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

    }).catch((error: any) => {
        console.error('download error:', error);
    });
}

const handleExportPdfs = (row?: any) => {
    const id = row?.id || ids.value
    downloadPdfById(id).then((response) => {
        const blob = new Blob([response.data]); // 创建 Blob 对象
        const url = window.URL.createObjectURL(blob); // 创建指向 Blob 对象的 URL
        const link = document.createElement('a'); // 创建隐藏的 <a> 元素
        link.style.display = 'none';
        link.href = url;
        let fileName = 'certificates.zip';
        if (id.length == 1) {
            const selecctItem: any = certificateList.value.find((item: any) => item.id == id);
            fileName = selecctItem!.traineesName + "_" + selecctItem!.certificateId + '.pdf';
        }


        link.setAttribute('download', fileName); // 设置下载文件名
        document.body.appendChild(link);
        link.click(); // 触发点击事件下载文件
        document.body.removeChild(link); // 下载完成后移除元素
        window.URL.revokeObjectURL(url); // 释放 URL 对象
    }).catch((error) => {
        console.error('下载文件时出错:', error);
    });
}

const handleActionCommand = (cmd: { command: any }) => {
    switch (cmd.command) {
        case 'upload':
            handleUpload();
            break;
        case 'downloadAll':
            handleExportAll();
            break;
        case 'downloadExcels':
            handleExport();
            break;
        case 'downloadPdfs':
            handleExportPdfs();
            break;
        case 'print':
            handlePrint();
            break;
        default:
            break;
    }
}
onMounted(() => {
    getList();
})
</script>

<style lang="scss">
.app-container {
    margin-top: 20px;
    margin-bottom: 50px;

    .buttonGroup {
        .el-button {
            // height: 30px;
        }
    }
}

.certificateDia {
    .el-dialog__body {
        height: 600px !important;
        overflow-y: auto !important;
        padding-right: 10px !important;

        .el-form {
            width: 95%;
        }
    }
}
</style>