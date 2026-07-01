<script setup lang="ts">
import course from "/images/certificate-verificate.webp";
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const courseData = ref<any>([
])

const selectedCatalog = ref<any>({});
onMounted(async () => {

    const resp = await fetch("/courses.json", { mode: 'same-origin' })
    if (!resp.ok) {
        throw new Error('Request failed')
    }
    courseData.value = await resp.json()

    selectedCatalog.value = courseData.value.find((item: any) => item.catalog == route.params.name);

})

</script>

<template>
    <div class="courseList">
        <el-row v-for="(item, index) in selectedCatalog.courses" :key="item + index" class="courseItem">
            <el-col :span="2">{{ index + 1 }}</el-col>
            <el-col :span="2" class="courseIcon">
                <el-icon>
                    <Document />
                </el-icon>
                <span style="margin-left: 5px">Course </span>
            </el-col>
            <el-col :span="10" class="courseName">
                <div>
                    <div class="courseTitle"> {{ item }}</div>
                    <div>
                        Foundation | Intermediate | Advanced
                    </div>
                </div>

            </el-col>
            <el-col :span="4">
                <div>
                    F2F | online | OJT
                </div>


            </el-col>
            <el-col :span="4">

                <div>
                    5 days
                </div>

            </el-col>
            <el-col :span="2">
                <el-link type="primary" underline="never">
                    Detail
                </el-link>
            </el-col>
        </el-row>
    </div>

</template>


<style lang="scss" scoped>
.courseList {
    position: relative;
    width: min(1240px, calc(100% - 56px));
    margin: 0 auto;
    padding: 64px 0 82px;

    &::before {
        position: absolute;
        top: 34px;
        right: 0;
        left: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(201, 163, 94, 0.72), transparent);
        content: "";
    }


    .courseIcon {
        display: flex;
        justify-content: left;
        /* 水平居中 */
        align-items: center;
        /* 垂直居中 */
        text-align: center;

        .el-icon {
            color: #c9a35e;
        }
    }

    .courseItem {
        position: relative;
        overflow: hidden;
        border: 1px solid rgba(3, 54, 99, 0.086);
        border-radius: 4px;
        background-color: rgb(246, 247, 249);
        border-color: rgba(3, 54, 99, 0.086);
        color: rgb(1, 54, 99);
        min-height: 76px;
        height: auto;
        margin-bottom: 14px;
        box-shadow: 0 12px 28px rgba(1, 54, 99, 0.06);
        transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;

        &::before {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 4px;
            background: linear-gradient(180deg, #c9a35e, #1c8f84);
            content: "";
        }

        &::after {
            position: absolute;
            right: -48px;
            bottom: -70px;
            width: 170px;
            height: 170px;
            border: 1px solid rgba(1, 54, 99, 0.08);
            background: linear-gradient(135deg, rgba(1, 54, 99, 0.035), transparent 58%);
            content: "";
            transform: rotate(36deg);
        }

        &:hover {
            border-color: rgba(1, 54, 99, 0.18);
            box-shadow: 0 16px 36px rgba(1, 54, 99, 0.11);
            transform: translateY(-2px);

            &::after {
                border-color: rgba(201, 163, 94, 0.28);
            }
        }

        .courseTitle {
            font-weight: bold;
            line-height: 1.35;
        }

        .el-col {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            min-height: 76px;
            padding-top: 10px;
            padding-bottom: 10px;
        }


        .el-col:first-child {
            padding-left: 15px;
            color: #c9a35e;
            font-weight: 800;
        }
    }
}

@media (max-width: 920px) {
    .courseList {
        width: min(100% - 32px, 560px);
        padding: 42px 0 64px;

        .courseItem {
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 8px 14px;
            padding: 14px 16px;

            :deep(.el-col) {
                width: auto !important;
                max-width: none !important;
                flex: initial !important;
                min-height: 0;
                padding: 0;
            }

            :deep(.el-col:first-child) {
                padding-left: 0;
                grid-column: 1;
                grid-row: 1;
            }

            .courseIcon {
                grid-column: 2;
                grid-row: 1;
            }

            .courseName {
                grid-column: 1 / -1;
                grid-row: 2;
            }

            :deep(.el-col:nth-child(4)) {
                grid-column: 1 / 3;
                grid-row: 3;
            }

            :deep(.el-col:nth-child(5)) {
                grid-column: 3;
                grid-row: 3;
                justify-content: flex-end;
            }

            :deep(.el-col:nth-child(6)) {
                grid-column: 3;
                grid-row: 1;
                justify-content: flex-end;
            }
        }
    }
}
</style>
