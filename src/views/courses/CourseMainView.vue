<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const catelog = ref([

])

const openCatalog = (item: any) => {
    router.push({ name: "catalogDetail", params: { name: item } })
}

onMounted(async () => {

    const resp = await fetch("/curriculum.json", { mode: 'same-origin' })
    if (!resp.ok) {
        throw new Error('Request failed')
    }
    catelog.value = await resp.json()

})

</script>

<template>
    <div class="courseContent">
        <el-row :gutter="20">
            <el-col :span="6" v-for="item in catelog">
                <el-card class="courseCard" @click="openCatalog(item)">
                    {{ item }}
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>


<style lang="scss" scoped>
.courseContent {
    margin-bottom: 50px;

    .courseCard {
        margin-top: 30px;
        background-color: #013663;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }

    .courseCard:hover {
        transform: scale(1.12);
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    }
}
</style>