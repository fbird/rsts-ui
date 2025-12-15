<script setup lang="ts">
</script>

<template>
    <div class="footer">
        <el-row>
            <el-col :span="8">
                <h4 class="logoText">
                    <span>Rainbow Star Training Services LLC</span>
                    <span class="copyRight">®</span>
                </h4>
            </el-col>
        </el-row>
        <el-divider class="divider" />
        <el-row class="footerContent">
            <el-col :span="10">
                <h4 style="font-weight: bold; font-size: 16px;">Rainbow Star Training Services LLC Abu Dhabi Office.
                </h4>
                <el-row>
                    <el-col :span="6" style="font-weight: bold;">
                        Address
                    </el-col>
                    <el-col :span="16">
                        Unit 501 Abdulla Darwish Building - 802 Hamdan Bin Mohammed St - Al Zahiyah - Abu Dhabi
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" style="font-weight: bold;">
                        Google Address
                    </el-col>
                    <el-col :span="16">
                        <el-link type="primary" href="https://maps.app.goo.gl/dLAtRu9MdQJGf1VS8" target="_blank"
                            :underline="false">https://maps.app.goo.gl/dLAtRu9MdQJGf1VS8</el-link>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" style="font-weight: bold;">
                        Website
                    </el-col>
                    <el-col :span="16">
                        <el-link type="primary" href="http://www.rstsacademy.com" target="_blank"
                            :underline="false">http://www.rstsacademy.com</el-link>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="8">
                <h4 style="font-weight: bold; font-size: 16px;">Start a Conversation.</h4>
                <el-row>
                    <el-col :span="8" style="font-weight: bold;">
                        Mobile
                    </el-col>
                    <el-col :span="16">
                        <el-row>
                            <el-col>
                                +971 55-446-9950
                            </el-col>
                            <el-col>
                                +971 54-449-4027
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" style="font-weight: bold;">
                        WhatsApp
                    </el-col>
                    <el-col :span="16">
                        <el-row>
                            <el-col>
                                +971 55-446-9950
                            </el-col>
                            <el-col>
                                +971 54-449-4027
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" style="font-weight: bold;">
                        E-mail
                    </el-col>
                    <el-col :span="16">
                        info@rainbowstar1.com
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="6">
                <h4 style="font-weight: bold; font-size: 16px;">Copyright.</h4>
                Copyright © 2025 Rainbow Star Training Services LLC(RSTS). All Rights Reserved.
            </el-col>
        </el-row>
        <el-row>

        </el-row>
    </div>

</template>

<style lang="scss" scoped>
.footer {
    // width: 100%;
    margin: auto;
    padding: 0 20px;
    color: #fff;

    .logoText {
        font-size: 24px;
        font-weight: 700;
        vertical-align: top;

        .copyRight {
            vertical-align: top;
            font-size: 12px;
        }
    }

    .divider {
        border-top: 1px solid rgb(255, 255, 255, 0.2);
        margin: 0px 0px 5px 0px;
    }

    .footerContent {
        .el-row {
            margin-bottom: 8px;
        }
    }
}
</style>
