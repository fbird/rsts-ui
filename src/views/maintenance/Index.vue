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
        name: "certificatesSearch",
        query: { query: searchData.value }
    });
}

</script>
<template>
    <div class="maintenance">
        <el-icon color="#fc7f40" size="35"><WarnTriangleFilled /></el-icon> 
        <span style="margin-left: 28px;">The website is currently under maintenance. Please check back later.</span>
    </div>
</template>

<style lang="scss" scoped>
.maintenance {
    display: flex;
    align-items: center;
    justify-self: center;
    height: calc(100vh - 80px - 150px);
    font-size: 28px;
}
</style>