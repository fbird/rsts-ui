<script setup lang="ts">
import { Collection, Lock, Medal, Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const searchData = ref("");



const doQuery = () => {
    const keyword = searchData.value.trim();
    if (!keyword) {
        return;
    }
    router.push({
        name: "certificatesSearchResult",
        query: { query: keyword }
    });
}

</script>
<template>
    <div class="searchContent">
        <section class="validationHero">
            <div class="heroBadge">
                <el-icon>
                    <Medal />
                </el-icon>
                <span>Certificate Verification</span>
            </div>
            <div class="title">
                <div class="logo"></div>
                <div class="titleText">
                    <span class="eyebrow">RSTS Academy</span>
                    <h1>RSTS Certification Validation System</h1>
                    <p>Verify a certificate record by entering the certificate ID printed on the issued document.</p>
                </div>
            </div>
            <div class="searchCriteria">
                <el-input v-model="searchData" placeholder="Type Certificate ID For Search" clearable
                    @keyup.enter="doQuery">
                    <template #append>
                        <el-button :icon="Search" @click="doQuery">Search</el-button>
                    </template>
                </el-input>
                <p class="inputHint">Example format: RSTS-OIL-00001</p>
            </div>
            <div class="supportGrid">
                <div class="supportItem">
                    <el-icon>
                        <Collection />
                    </el-icon>
                    <span>Training records</span>
                </div>
                <div class="supportItem">
                    <el-icon>
                        <Lock />
                    </el-icon>
                    <span>Secure validation</span>
                </div>
                <div class="supportItem">
                    <el-icon>
                        <Medal />
                    </el-icon>
                    <span>Certificate status</span>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.searchContent {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 96px - 220px);
    padding: 88px 24px 96px;
    overflow: hidden;
    background:
        linear-gradient(135deg, rgba(6, 28, 44, 0.94), rgba(20, 77, 92, 0.82)),
        radial-gradient(circle at 20% 18%, rgba(233, 178, 80, 0.24), transparent 32%),
        linear-gradient(180deg, #f6f8f5 0%, #eef3ef 100%);

    &::before {
        content: "";
        position: absolute;
        inset: 28px;
        border: 1px solid rgba(255, 255, 255, 0.14);
        pointer-events: none;
    }

    &::after {
        content: "";
        position: absolute;
        right: max(8vw, 40px);
        bottom: 54px;
        width: 220px;
        height: 220px;
        border: 1px solid rgba(238, 197, 118, 0.22);
        transform: rotate(14deg);
        pointer-events: none;
    }

    .validationHero {
        position: relative;
        z-index: 1;
        width: min(900px, 100%);
        padding: 54px 64px 48px;
        text-align: center;
        color: #f8fbf7;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.18);
        box-shadow: 0 28px 70px rgba(4, 22, 34, 0.26);
        backdrop-filter: blur(14px);
    }

    .heroBadge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-height: 34px;
        padding: 0 14px;
        margin-bottom: 26px;
        color: #f5d58e;
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        background: rgba(6, 24, 38, 0.55);
        border: 1px solid rgba(245, 213, 142, 0.34);
        border-radius: 999px;

        .el-icon {
            font-size: 16px;
        }
    }

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 22px;
        margin: 0 auto 34px;

        .logo {
            flex: 0 0 102px;
            width: 102px;
            height: 102px;
            background-image: url(/images/certificateSearch.svg);
            background-repeat: no-repeat;
            background-size: 74%;
            background-position: center;
            background-color: rgba(255, 255, 255, 0.94);
            border: 1px solid rgba(255, 255, 255, 0.72);
            border-radius: 50%;
            box-shadow: 0 20px 38px rgba(4, 20, 33, 0.24), inset 0 0 0 7px rgba(238, 197, 118, 0.18);
        }

        .titleText {
            max-width: 560px;
            text-align: left;
        }

        .eyebrow {
            display: block;
            margin-bottom: 8px;
            color: #f5d58e;
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
        }

        h1 {
            margin: 0;
            color: #ffffff;
            font-size: 32px;
            line-height: 1.12;
            font-weight: 800;
            letter-spacing: 0;
        }

        p {
            margin: 16px 0 0;
            color: rgba(247, 251, 248, 0.78);
            font-size: 14px;
            line-height: 1.7;
        }
    }

    .searchCriteria {
        width: min(640px, 100%);
        margin: 0 auto;

        .el-input {
            height: 56px;
            width: 100%;
            box-shadow: 0 18px 44px rgba(3, 19, 31, 0.22);

            :deep(.el-input__wrapper) {
                padding-left: 22px;
                background-color: #ffffff;
                border-radius: 0;
                box-shadow: none;
            }

            :deep(.el-input__inner) {
                color: #102333;
                font-size: 16px;
                font-weight: 600;
            }

            :deep(.el-input__inner::placeholder) {
                color: rgba(16, 35, 51, 0.48);
                font-weight: 500;
            }

            ::v-deep(.el-input-group__append) {
                padding: 0;
                background: linear-gradient(135deg, #0e5c66, #0a334d);
                border: none;
                border-radius: 0;
            }

            ::v-deep(.el-icon) {
                color: #fff !important;
            }

            :deep(.el-button) {
                height: 56px;
                padding: 0 26px;
                color: #ffffff;
                font-weight: 800;
                letter-spacing: 0.02em;
                background: transparent;
                border: none;
            }

            :deep(.el-input__suffix .el-icon) {
                color: #7b8792 !important;
            }
        }

        .inputHint {
            margin: 14px 0 0;
            color: rgba(247, 251, 248, 0.68);
            font-size: 13px;
            letter-spacing: 0.02em;
        }
    }

    .supportGrid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1px;
        margin: 34px auto 0;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(255, 255, 255, 0.14);
    }

    .supportItem {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        min-height: 70px;
        padding: 12px;
        color: rgba(255, 255, 255, 0.86);
        font-size: 14px;
        font-weight: 700;
        background: rgba(7, 27, 42, 0.42);

        .el-icon {
            color: #f5d58e;
            font-size: 18px;
        }
    }
}

@media (max-width: 768px) {
    .searchContent {
        min-height: calc(100vh - 64px - 320px);
        padding: 52px 16px 64px;

        &::before {
            inset: 14px;
        }

        &::after {
            right: -44px;
            bottom: 26px;
            width: 150px;
            height: 150px;
        }

        .validationHero {
            padding: 34px 20px 28px;
        }

        .heroBadge {
            margin-bottom: 22px;
            font-size: 11px;
        }

        .title {
            display: block;
            margin-bottom: 26px;

            .logo {
                margin: 0 auto 18px;
                width: 86px;
                height: 86px;
            }

            .titleText {
                max-width: none;
                text-align: center;
            }

            h1 {
                font-size: 28px;
            }

            p {
                font-size: 14px;
                line-height: 1.6;
            }
        }

        .searchCriteria {
            .el-input {
                height: auto;
                display: block;
                box-shadow: none;

                :deep(.el-input__wrapper) {
                    height: 52px;
                }

                :deep(.el-input-group__append) {
                    display: block;
                    width: 100%;
                    margin-top: 10px;
                }

                :deep(.el-button) {
                    width: 100%;
                    height: 50px;
                }
            }
        }

        .supportGrid {
            grid-template-columns: 1fr;
            margin-top: 26px;
        }

        .supportItem {
            min-height: 54px;
        }
    }
}
</style>
