<template>
    <div class="footer">
        <el-row>
            <el-col :xs="24" :sm="12" :md="4">
                <h4 class="logoText">
                    <span>Rainbow Star Training Services LLC</span>
                    <span class="copyRight">®</span>
                </h4>
            </el-col>
        </el-row>

        <el-divider class="divider" />

        <el-row class="footerContent" :gutter="20">
            <!-- 地址信息 -->
            <el-col :xs="24" :sm="12" :md="10">
                <h4 class="sectionTitle">Rainbow Star Training Services LLC Abu Dhabi Office.</h4>
                <el-row>
                    <el-col :xs="8" :sm="6" class="label">Address</el-col>
                    <el-col :xs="16" :sm="18">
                        Unit 501 Abdulla Darwish Building - 802 Hamdan Bin Mohammed St - Al Zahiyah - Abu Dhabi
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="8" :sm="6" class="label">Google Address</el-col>
                    <el-col :xs="16" :sm="18">
                        <el-link type="primary" href="https://maps.app.goo.gl/dLAtRu9MdQJGf1VS8" target="_blank"
                            underline="never" class="break-link">
                            https://maps.app.goo.gl/dLAtRu9MdQJGf1VS8
                        </el-link>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="8" :sm="6" class="label">Website</el-col>
                    <el-col :xs="16" :sm="18">
                        <el-link type="primary" href="http://www.rstsacademy.com" target="_blank" underline="never">
                            http://www.rstsacademy.com
                        </el-link>
                    </el-col>
                </el-row>
            </el-col>

            <!-- 联系信息 -->
            <el-col :xs="24" :sm="12" :md="8">
                <h4 class="sectionTitle">Start a Conversation.</h4>
                <el-row>
                    <el-col :xs="8" :sm="6" class="label">Mobile</el-col>
                    <el-col :xs="16" :sm="18">
                        <div>+971 55-446-9950</div>
                        <div>+971 54-449-4027</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="8" :sm="6" class="label">WhatsApp</el-col>
                    <el-col :xs="16" :sm="18">
                        <div>+971 55-446-9950</div>
                        <div>+971 54-449-4027</div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :xs="8" :sm="6" class="label">E-mail</el-col>
                    <el-col :xs="16" :sm="18">info@rainbowstar1.com</el-col>
                </el-row>
            </el-col>

            <!-- 版权信息 -->
            <el-col :xs="24" :sm="24" :md="6">
                <h4 class="sectionTitle">Copyright.</h4>
                Copyright © 2025 Rainbow Star Training Services LLC(RSTS). All Rights Reserved.
            </el-col>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    padding: 0 20px;
    color: #fff;

    .logoText {
        font-size: 24px;
        font-weight: 700;

        .copyRight {
            font-size: 12px;
            vertical-align: top;
        }
    }

    .divider {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        margin: 0 0 10px 0;
    }

    .sectionTitle {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 6px;
    }

    .label {
        font-weight: bold;
    }

    .footerContent .el-row {
        margin-bottom: 6px;
    }

    .break-link {
        white-space: normal;
        /* 允许换行 */
        word-break: break-all;
        /* 单词或长链接在任意位置断行 */
    }
}
</style>