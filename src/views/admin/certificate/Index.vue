<template>
    <div class="app-container certificate-admin-page">
        <section class="certificate-toolbar">
            <div>
                <p class="toolbar-kicker">Admin / Certificates</p>
                <h1>Certificate Records</h1>
                <div class="toolbar-meta">
                    <el-tag effect="plain" type="info">{{ pageData.total }} records</el-tag>
                    <el-tag v-if="selectedRows.length" effect="plain" type="success">
                        {{ selectedRows.length }} selected
                    </el-tag>
                </div>
            </div>

            <div class="toolbar-actions">
                <el-input v-model="queryParams.searchKey" class="certificate-search" clearable @change="handleSearch"
                    @clear="handleSearch" @keyup.enter="handleSearch" placeholder="Type Training Name or Certificate">
                    <template #prefix>
                        <el-icon>
                            <search />
                        </el-icon>
                    </template>
                </el-input>
                <el-button :icon="Refresh" @click="getList">Refresh</el-button>
                <el-button type="primary" :icon="Plus" @click="handleAdd">Add</el-button>
            </div>
        </section>

        <section class="certificate-list-card">
            <div class="table-action-bar">
                <div class="batch-actions">
                    <el-button type="success" plain :icon="Edit" :disabled="single"
                        @click="handleUpdate">Edit</el-button>
                    <el-button type="danger" plain :icon="Close" :disabled="multiple"
                        @click="handleDelete">Delete</el-button>
                    <el-dropdown @command="handleActionCommand">
                        <el-button type="primary" plain :icon="Menu">
                            More Action<el-icon class="el-icon--right"><arrow-down /></el-icon>
                        </el-button>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item :command="{ command: 'upload' }"
                                    :icon="Upload">Upload</el-dropdown-item>
                                <el-dropdown-item :icon="Download" :command="{ command: 'downloadAll' }">Export
                                    All</el-dropdown-item>
                                <el-dropdown-item :command="{ command: 'downloadExcels' }" :disabled="multiple">
                                    <FontAwesomeIcon :icon="faTableCells" style="margin-right: 6px" /> Export Excels
                                </el-dropdown-item>
                                <el-dropdown-item :command="{ command: 'downloadPdfs' }" :disabled="multiple">
                                    <FontAwesomeIcon :icon="faFilePdf" style="margin-right: 6px" />Export Pdfs
                                </el-dropdown-item>
                                <el-dropdown-item :command="{ command: 'print' }" :icon="Printer"
                                    :disabled="single">Print</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <span>Page {{ pageData.pageNo }} / {{ pageData.totalPage || 1 }}</span>
            </div>

            <el-table :data="certificateList" stripe class="certificate-table" @selection-change="handleSelectionChange"
                @row-dblclick="handleDetail" row-key="id" ref="certTblRef">
                <el-table-column type="selection" :reserve-selection="true" width="44" align="center" />
                <el-table-column label="S/N" width="76" align="center" prop="sn" />
                <el-table-column label="Trainee" min-width="220" fixed="left">
                    <template #default="{ row }">
                        <div class="trainee-cell" @click="handleDetail(row)">
                            <strong>{{ displayValue(row.traineesName) }}</strong>
                            <span>{{ displayValue(row.nationality) }} · Passport {{ displayValue(row.passportNo)
                                }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Certificate" min-width="190">
                    <template #default="{ row }">
                        <button class="certificate-id-link" type="button" @click="handleDetail(row)">
                            {{ displayValue(row.certificateId) }}
                        </button>
                    </template>
                </el-table-column>
                <el-table-column label="Course" min-width="260" show-overflow-tooltip>
                    <template #default="{ row }">
                        <div class="course-cell">
                            <strong>{{ displayValue(row.courseName) }}</strong>
                            <span>{{ displayValue(row.referenceStandards) }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Instruction" min-width="170">
                    <template #default="{ row }">
                        <div class="muted-stack">
                            <span>{{ displayValue(row.formOfInstruction) }}</span>
                            <small>{{ displayValue(row.trainingHours) }} hours</small>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Validity" min-width="190" align="center">
                    <template #default="{ row }">
                        <div class="date-range-cell">
                            <span>{{ displayDate(row.completionDate) }}</span>
                            <small>to {{ displayDate(row.expiringDate) }}</small>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="Created" width="190" align="center" show-overflow-tooltip>
                    <template #default="{ row }">
                        <span class="created-time">{{ displayDateTime(row.createTime) }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="Actions" width="230" align="center" fixed="right">
                    <template #default="{ row }">
                        <div class="row-actions">
                            <el-button link type="primary" :icon="View" @click="handleDetail(row)">Details</el-button>
                            <el-button link type="success" :icon="Edit" @click="handleUpdate(row)">Edit</el-button>
                            <el-button link type="primary" :icon="Download"
                                @click="handleExportPdfs(row)">PDF</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>

            <Pagination :data="pageData" :sizeChange="handleSizeChange" :currentChange="handleCurrentChange"
                :page-size-template="[10, 20, 50]" />
        </section>
    </div>
    <!-- 添加或修改certificate对话框 -->
    <el-dialog :title="title" :model-value="open" width="760px" class="certificateDia" @close="handleClose">
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

    <el-drawer v-model="detailOpen" append-to-body size="560px" class="certificate-detail-drawer" :with-header="false">
        <div v-loading="detailLoading" class="detail-drawer-body">
            <header class="detail-hero">
                <div>
                    <p>Certificate Detail</p>
                    <h2>{{ displayValue(detailData.traineesName) }}</h2>
                    <span>{{ displayValue(detailData.courseName) }}</span>
                </div>
                <el-tag effect="dark" type="success">{{ displayValue(detailData.certificateId) }}</el-tag>
            </header>

            <div class="detail-actions">
                <el-button type="primary" :icon="Edit" @click="handleEditFromDetail">Edit</el-button>
                <el-button :icon="Download" @click="handleExportPdfs(detailData)">Download PDF</el-button>
                <el-button :icon="Printer" @click="handlePrint(detailData)">Print</el-button>
            </div>

            <section v-for="section in detailSections" :key="section.title" class="detail-section">
                <h3>{{ section.title }}</h3>
                <dl>
                    <template v-for="item in section.items" :key="item.label">
                        <dt>{{ item.label }}</dt>
                        <dd>{{ displayValue(item.value) }}</dd>
                    </template>
                </dl>
            </section>
        </div>
    </el-drawer>
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
    Refresh,
    Upload,
    View
} from '@element-plus/icons-vue'
import Pagination from '@/components/MyPagination.vue'
import { ElMessage, ElMessageBox, ElTable } from "element-plus";
import { formatDate } from '@/utils'
import { computed, ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTableCells } from "@fortawesome/free-solid-svg-icons/faTableCells";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons/faFilePdf";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faTableCells, faFilePdf);

const certTblRef = ref<InstanceType<typeof ElTable>>();
// 选中数组
const ids = ref<Array<any>>([]);

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
// certificate表格数据
const certificateList = ref<Array<any>>([]);
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
const selectedRows = ref<Array<any>>([]);
const detailOpen = ref(false);
const detailLoading = ref(false);
const detailData = ref<any>({});

const detailSections = computed(() => [
    {
        title: 'Certificate Information',
        items: [
            { label: 'S/N', value: detailData.value.sn },
            { label: 'Certificate ID', value: detailData.value.certificateId },
            { label: 'Validity Period', value: detailData.value.validityPeriod },
            { label: 'Issue Date', value: displayDate(detailData.value.completionDate) },
            { label: 'Expiring Date', value: displayDate(detailData.value.expiringDate) },
            { label: 'Awarding Body', value: detailData.value.awardingBody }
        ]
    },
    {
        title: 'Trainee',
        items: [
            { label: 'Trainees Name', value: detailData.value.traineesName },
            { label: 'Nationality', value: detailData.value.nationality },
            { label: 'Passport No.', value: detailData.value.passportNo }
        ]
    },
    {
        title: 'Course',
        items: [
            { label: 'Course Name', value: detailData.value.courseName },
            { label: 'Form of Instruction', value: detailData.value.formOfInstruction },
            { label: 'Reference Standards', value: detailData.value.referenceStandards },
            { label: 'Training Hours', value: detailData.value.trainingHours }
        ]
    },
    {
        title: 'Responsible People',
        items: [
            { label: 'Trainer Name', value: detailData.value.trainerName },
            { label: 'Coordinator Name', value: detailData.value.coordinatorName },
            { label: 'Exam Invigilator Name', value: detailData.value.examInvigilatorName },
            { label: 'Issuer Name', value: detailData.value.issuerName },
            { label: 'Approver Name', value: detailData.value.approverName }
        ]
    }
]);

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

// 多选框选中数据
const handleSelectionChange = (selection: any) => {
    selectedRows.value = selection;
    ids.value = selection.map((item: any) => item.id)
    single.value = selection.length !== 1
    multiple.value = !selection.length
}

const handleSearch = () => {
    queryParams.value.pageNo = 1;
    pageData.value.pageNo = 1;
    getList();
}

const displayValue = (value: any) => {
    return value === null || value === undefined || value === '' ? '-' : value;
}

const displayDate = (value: any) => {
    return value ? formatDate(value) : '-';
}

const toDate = (value: any) => {
    if (!value) {
        return null;
    }

    if (value instanceof Date) {
        return Number.isNaN(value.getTime()) ? null : value;
    }

    const normalized = typeof value === 'string' ? value.trim().replace(' ', 'T') : value;
    const date = new Date(normalized);
    return Number.isNaN(date.getTime()) ? null : date;
}

const padDatePart = (value: number) => String(value).padStart(2, '0');

const displayDateTime = (value: any) => {
    const date = toDate(value);

    if (!date) {
        return displayValue(value);
    }

    return `${date.getFullYear()}-${padDatePart(date.getMonth() + 1)}-${padDatePart(date.getDate())} ${padDatePart(date.getHours())}:${padDatePart(date.getMinutes())}:${padDatePart(date.getSeconds())}`;
}

const getSelectedIds = (row?: any) => {
    return row?.id ? [row.id] : ids.value;
}

const getSelectedId = (row?: any) => {
    return row?.id || ids.value[0];
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
    const id = getSelectedId(row)
    getCertificateDetail(id).then(response => {
        formData.value = response;
        open.value = true;
        title.value = "Update Certificate";
    });
}
const handleDetail = (row: any) => {
    const id = getSelectedId(row);
    if (!id) {
        return;
    }

    detailOpen.value = true;
    detailLoading.value = true;
    detailData.value = row || {};
    getCertificateDetail(id).then(response => {
        detailData.value = response;
    }).catch(() => {
        ElMessage.error('Load Certificate Detail Failed')
    }).finally(() => {
        detailLoading.value = false;
    });
}

const handleEditFromDetail = () => {
    if (!detailData.value?.id) {
        return;
    }
    detailOpen.value = false;
    handleUpdate(detailData.value);
}
/** 提交按钮 */
const submitForm = () => {
    if (formData.value.id != null) {
        updateCertificate(formData.value.id, formData.value).then(() => {

            ElMessage.success('Update Success!')

            open.value = false;
            getList();
        });
    } else {
        addCertificate(formData.value).then(() => {
            ElMessage.success('Add Success!')
            open.value = false;
            getList();
        });
    }
}
/** 删除按钮操作 */
const handleDelete = (row: any) => {
    const delIds = getSelectedIds(row);

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

    const selectedIds = getSelectedIds(row)
    downloadPdfById(selectedIds).then((response: any) => {
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
    const selectedIds = getSelectedIds(row)
    downloadPdfById(selectedIds).then((response) => {
        const blob = new Blob([response.data]); // 创建 Blob 对象
        const url = window.URL.createObjectURL(blob); // 创建指向 Blob 对象的 URL
        const link = document.createElement('a'); // 创建隐藏的 <a> 元素
        link.style.display = 'none';
        link.href = url;
        let fileName = 'certificates.zip';
        if (selectedIds.length == 1) {
            const selecctItem: any = certificateList.value.find((item: any) => item.id == selectedIds[0]) || row;
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
.certificate-admin-page,
.certificate-detail-drawer,
.certificateDia {
    --cert-ink: #101820;
    --cert-navy: #071827;
    --cert-panel: #fffdfa;
    --cert-paper: #f7f4ec;
    --cert-line: rgba(16, 24, 32, 0.1);
    --cert-muted: #66717a;
    --cert-gold: #c9a35e;
    --cert-gold-soft: #efe3c7;
    --cert-teal: #1c8f84;
    --cert-danger: #a9473a;
}

.certificate-admin-page {
    width: min(1180px, calc(100vw - 40px));
    margin: 0 auto 56px;
    padding-top: 28px;
    color: var(--cert-ink);
}

.certificate-toolbar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 20px;
    padding: 22px 24px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    background: linear-gradient(135deg, #071827 0%, #101820 58%, #183133 100%);
    box-shadow: 0 20px 48px rgba(7, 24, 39, 0.16);


    &::after {
        position: absolute;
        top: 18px;
        right: 28px;
        width: 220px;
        height: 72px;
        pointer-events: none;
        content: "";
        border-top: 1px solid rgba(201, 163, 94, 0.3);
        border-right: 1px solid rgba(201, 163, 94, 0.18);
        transform: skewX(-18deg);
    }

    >div {
        position: relative;
        z-index: 1;
    }

    h1 {
        margin: 4px 0 10px;
        color: #fffdfa;
        font-size: 26px;
        line-height: 1.2;
    }

    .el-tag {
        border-color: rgba(201, 163, 94, 0.34);
        background: rgba(255, 253, 250, 0.08);
        color: rgba(255, 253, 250, 0.82);
    }
}

.toolbar-kicker {
    margin: 0;
    color: rgba(239, 227, 199, 0.76);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0;
    text-transform: uppercase;
}

.toolbar-meta,
.toolbar-actions,
.batch-actions,
.row-actions,
.detail-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.toolbar-actions {
    flex-wrap: wrap;
    justify-content: flex-end;
}

.certificate-search {
    width: 340px;

    .el-input__wrapper {
        border: 1px solid rgba(255, 253, 250, 0.14);
        background: rgba(255, 253, 250, 0.96);
        box-shadow: none;
    }

    .el-input__wrapper.is-focus {
        border-color: var(--cert-gold);
        box-shadow: 0 0 0 2px rgba(201, 163, 94, 0.18);
    }
}

.certificate-admin-page {
    .el-button {
        border-radius: 6px;
        font-weight: 700;
    }

    .el-button:not(.is-link):not(.el-button--primary):not(.el-button--success):not(.el-button--danger) {
        border-color: rgba(16, 24, 32, 0.14);
        background: #fffdfa;
        color: var(--cert-ink);

        &:hover,
        &:focus {
            border-color: rgba(201, 163, 94, 0.58);
            background: #fbf3df;
            color: #7b5b17;
        }
    }

    .el-button--primary:not(.is-link) {
        border-color: var(--cert-ink);
        background: var(--cert-ink);
        color: #fffdfa;

        &:hover,
        &:focus {
            border-color: var(--cert-gold);
            background: var(--cert-gold);
            color: var(--cert-ink);
        }
    }

    .el-button--primary.is-plain:not(.is-link) {
        border-color: rgba(201, 163, 94, 0.42);
        background: #fbf3df;
        color: #7b5b17;

        &:hover,
        &:focus {
            border-color: var(--cert-gold);
            background: var(--cert-gold);
            color: var(--cert-ink);
        }
    }

    .el-button--success.is-plain {
        border-color: rgba(28, 143, 132, 0.34);
        background: rgba(28, 143, 132, 0.08);
        color: #216b63;
    }

    .el-button--danger.is-plain {
        border-color: rgba(169, 71, 58, 0.28);
        background: rgba(169, 71, 58, 0.08);
        color: var(--cert-danger);
    }

    .el-button.is-link {
        color: #725718;
        font-weight: 700;

        &:hover,
        &:focus {
            color: var(--cert-gold);
        }
    }

    .el-button.is-disabled,
    .el-button.is-disabled:hover,
    .el-button.is-disabled:focus {
        border-color: rgba(16, 24, 32, 0.08);
        background: rgba(16, 24, 32, 0.04);
        color: rgba(16, 24, 32, 0.36);
    }
}

.certificate-list-card {
    position: relative;
    padding: 18px;
    overflow: hidden;
    border: 1px solid var(--cert-line);
    border-radius: 8px;
    background: linear-gradient(180deg, #fffdfa 0%, #fbfaf5 100%);
    box-shadow: 0 22px 54px rgba(7, 24, 39, 0.08);


}

.table-action-bar {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
    color: var(--cert-muted);
    font-size: 13px;
}

.certificate-table {
    width: 100%;
    overflow: hidden;
    border: 1px solid rgba(16, 24, 32, 0.08);
    border-radius: 8px;
    background: #fffdfa;

    .el-table__inner-wrapper::before {
        background: rgba(16, 24, 32, 0.08);
    }

    .el-table__header th {
        border-bottom: 1px solid rgba(201, 163, 94, 0.24);
        background: #f4eddd !important;
        color: var(--cert-ink);
        font-weight: 800;
    }

    .el-table__body td {
        border-bottom-color: rgba(16, 24, 32, 0.06);
    }

    &.el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell {
        background: #fbf8ef;
    }

    .el-table__body tr:hover>td.el-table__cell {
        background: #f6efdf !important;
    }
}

.trainee-cell,
.course-cell,
.muted-stack,
.date-range-cell {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;

    strong {
        color: var(--cert-ink);
        font-size: 14px;
        font-weight: 800;
        line-height: 1.35;
    }

    span,
    small {
        color: var(--cert-muted);
        font-size: 12px;
        line-height: 1.3;
    }
}

.trainee-cell {
    cursor: pointer;
}

.created-time {
    color: #39464d;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
}

.certificate-id-link {
    max-width: 100%;
    padding: 6px 10px;
    overflow: hidden;
    border: 1px solid rgba(201, 163, 94, 0.36);
    border-radius: 6px;
    background: #fbf3df;
    color: #725718;
    font-weight: 800;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;

    &:hover,
    &:focus {
        border-color: var(--cert-gold);
        background: #f4e4bd;
        color: var(--cert-ink);
        outline: none;
    }
}

.row-actions {
    justify-content: center;
}

.certificate-admin-page .el-pagination {
    margin-top: 16px;
    padding-top: 4px;

    .el-pager li.is-active,
    button:hover,
    .el-select .el-input.is-focus .el-input__wrapper {
        color: #725718;
    }
}

.certificate-detail-drawer {
    max-width: 100vw;

    .el-drawer__body {
        padding: 0;
        background: #f5f1e8;
    }
}

.detail-drawer-body {
    min-height: 100%;
    padding: 24px;
}

.detail-hero {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 16px;
    padding: 22px;
    overflow: hidden;
    border-radius: 8px;
    color: #fffdfa;
    background: linear-gradient(135deg, #071827 0%, #101820 62%, #173236 100%);

    &::after {
        position: absolute;
        right: 18px;
        bottom: 0;
        left: 18px;
        height: 2px;
        content: "";
        background: linear-gradient(90deg, var(--cert-gold), rgba(201, 163, 94, 0.14));
    }

    >div,
    .el-tag {
        position: relative;
        z-index: 1;
    }

    .el-tag {
        border-color: rgba(201, 163, 94, 0.48);
        background: rgba(201, 163, 94, 0.18);
        color: #f6e7c0;
    }

    p {
        margin: 0 0 6px;
        color: rgba(239, 227, 199, 0.76);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0;
        text-transform: uppercase;
    }

    h2 {
        margin: 0 0 8px;
        color: #fffdfa;
        font-size: 24px;
        line-height: 1.2;
    }

    span {
        color: rgba(255, 253, 250, 0.78);
        font-size: 13px;
        line-height: 1.4;
    }
}

.detail-actions {
    justify-content: flex-start;
    margin-bottom: 18px;
}

.detail-section {
    margin-top: 14px;
    padding: 18px;
    border: 1px solid rgba(16, 24, 32, 0.09);
    border-radius: 8px;
    background: #fffdfa;
    box-shadow: 0 12px 28px rgba(7, 24, 39, 0.05);

    h3 {
        margin: 0 0 14px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(201, 163, 94, 0.22);
        color: var(--cert-ink);
        font-size: 16px;
        line-height: 1.3;
    }

    dl {
        display: grid;
        grid-template-columns: 150px minmax(0, 1fr);
        gap: 10px 14px;
        margin: 0;
    }

    dt {
        color: var(--cert-muted);
        font-size: 12px;
    }

    dd {
        min-width: 0;
        margin: 0;
        color: var(--cert-ink);
        font-size: 13px;
        font-weight: 700;
        overflow-wrap: anywhere;
    }
}

.certificateDia {
    display: flex;
    flex-direction: column;
    width: min(760px, calc(100vw - 24px));
    height: 750px;
    max-height: calc(100vh - 48px);
    overflow: hidden;
    border: 1px solid rgba(16, 24, 32, 0.08);
    border-radius: 8px;
    background: linear-gradient(180deg, #fffdfa 0%, #faf7ef 100%);
    box-shadow: 0 28px 64px rgba(7, 24, 39, 0.18);
    padding: 0px !important;

    .el-dialog__header {
        flex: 0 0 auto;
        margin: 0;
        padding: 18px 22px 16px;
        border-bottom: 1px solid rgba(201, 163, 94, 0.14);
        background: linear-gradient(180deg, #fffdfa 0%, #faf6ec 100%);
        position: relative;


    }

    .el-dialog__title {
        color: var(--cert-ink);
        font-weight: 800;
        letter-spacing: 0.02em;
    }

    .el-dialog__headerbtn .el-dialog__close {
        color: #6f7a82;
    }

    .el-dialog__body {
        flex: 1 1 auto;
        min-height: 0;
        overflow-y: auto !important;
        padding: 18px 20px 18px 22px !important;
        background: linear-gradient(180deg, #fffdfa 0%, #f8f5ea 100%);

        .el-form {
            width: 100%;
        }

        .el-form-item__label {
            color: #39464d;
            font-weight: 700;
        }

        .el-input__wrapper {
            border: 1px solid rgba(16, 24, 32, 0.1);
            box-shadow: none;

            &.is-focus {
                border-color: var(--cert-gold, #c9a35e);
                box-shadow: 0 0 0 2px rgba(201, 163, 94, 0.14);
            }
        }
    }

    .el-dialog__footer {
        flex: 0 0 auto;
        padding: 14px 22px 18px;
        border-top: 1px solid rgba(16, 24, 32, 0.08);
        background: linear-gradient(180deg, #f8f3e8 0%, #f3ecd9 100%);
    }

    .dialog-footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: 10px;
    }
}

@media (max-width: 900px) {
    .certificate-admin-page {
        width: calc(100vw - 24px);
        padding-top: 20px;
    }

    .certificate-toolbar,
    .table-action-bar {
        align-items: stretch;
        flex-direction: column;
    }

    .toolbar-actions,
    .batch-actions {
        justify-content: flex-start;
    }

    .certificate-search {
        width: 100%;
    }
}

@media (max-width: 620px) {
    .certificate-toolbar {
        padding: 20px;
    }

    .batch-actions,
    .row-actions {
        flex-wrap: wrap;
    }

    .detail-section dl {
        grid-template-columns: 1fr;
    }

    .detail-actions {
        align-items: stretch;
        flex-direction: column;
    }
}
</style>
