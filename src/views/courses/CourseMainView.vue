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
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="item in catelog" :key="item">
                <el-card class="courseCard" @click="openCatalog(item)">
                    {{ item }}
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>


<style lang="scss" scoped>
.courseContent {
    position: relative;
    width: min(1240px, calc(100% - 56px));
    margin: 0 auto 50px;
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

    &::after {
        position: absolute;
        top: 0;
        bottom: 28px;
        left: 50%;
        width: 1px;
        background: linear-gradient(180deg, rgba(1, 54, 99, 0.14), transparent 78%);
        content: "";
        pointer-events: none;
    }

    :deep(.el-row) {
        position: relative;
        z-index: 1;
        align-items: stretch;
    }

    .courseCard {
        position: relative;
        overflow: hidden;
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
        border: 0;
        border-radius: 4px;
        box-shadow: 0 14px 34px rgba(1, 54, 99, 0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        cursor: pointer;

        &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #c9a35e, #1c8f84);
            content: "";
            z-index: 1;
        }

        &::after {
            position: absolute;
            right: -44px;
            bottom: -58px;
            width: 150px;
            height: 150px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent 58%);
            content: "";
            transform: rotate(36deg);
        }

        :deep(.el-card__body) {
            position: relative;
            z-index: 2;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            line-height: 1.35;
        }
    }

    .courseCard:hover {
        transform: translateY(-6px);
        background-color: #072f53;
        box-shadow: 0 18px 42px rgba(1, 54, 99, 0.18);

        &::after {
            border-color: rgba(201, 163, 94, 0.48);
        }
    }
}

@media (max-width: 820px) {
    .courseContent {
        width: min(100% - 32px, 560px);
        padding: 42px 0 64px;

        .courseCard {
            height: 130px;
            font-size: 18px;
        }
    }
}
</style>
