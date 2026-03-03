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
        <el-row v-for="(item, index) in selectedCatalog.courses" class="courseItem">
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
    margin: 20px 0px;


    .courseIcon {
        display: flex;
        justify-content: left;
        /* 水平居中 */
        align-items: center;
        /* 垂直居中 */
        text-align: center;
    }

    .courseItem {
        border: 1px solid rgba(3, 54, 99, 0.086);
        border-radius: 4px;
        background-color: rgb(246, 247, 249);
        border-color: rgba(3, 54, 99, 0.086);
        color: rgb(1, 54, 99);
        height: 70px;

        .courseTitle {
            font-weight: bold;
        }

        .el-col {
            display: flex;
            align-items: center;
        }


        .el-col:first-child {
            padding-left: 15px;
        }
    }
}
</style>