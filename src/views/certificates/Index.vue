<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const searchData = ref("");



const doQuery = () => {
    if (!searchData.value) {
        return;
    }
    router.push({
        name: "certificatesSearchResult",
        query: { query: searchData.value }
    });
}

</script>
<template>
    <div class="searchContent">
        <div class="title">
            <div class="logo">
            </div>
            <div>
                <h2>RSTS Certification Validation System</h2>
            </div>
        </div>
        <div class="searchCriteria">
            <el-input v-model="searchData" placeholder="Type Certificate ID For Search" clearable>
                <template #append>
                    <el-button :icon="Search" @click="doQuery" />
                </template>
            </el-input>
        </div>
        <div class="desc">

            <span>
                <p>Welcome to RSTS Certification Validation System!</p>
                <p>Kindly type your certifiate ID to get the related
                    information of
                    your certificate.</p>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.searchContent {
    padding: 140px 0px;
    margin: auto;
    width: 900px;
    text-align: center;

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;

        .logo {
            width: 100px;
            height: 100px;
            background-image: url(/images/certificateSearch.svg);
            background-repeat: no-repeat;
            background-size: contain;

            display: flex;
            align-items: center;
            /* 垂直居中 */
            justify-content: center;
            /* 水平居中（可选） */
            background-position: center;

        }
    }

    .searchCriteria {
        .el-input {
            height: 45px;
            width: 600px;

            ::v-deep(.el-input-group__append) {
                background-color: #2e3d96;
            }

            ::v-deep(.el-icon) {
                color: #fff !important;
            }

            :deep(.el-input__suffix .el-icon) {
                color: gray !important;
                /* 这里改成你想要的颜色 */
            }
        }

    }

    .desc {
        margin-top: 18px;
        font-size: 16px;
        color: rgb(0, 0, 0, 0.8);

        p {
            margin: 5px 0px;
        }
    }
}
</style>