<script setup lang="ts">
import { Collection, DocumentChecked, Link, Location, Message, OfficeBuilding, Phone, School } from '@element-plus/icons-vue'

const year = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="footer-shell">
            <h2>RSTS</h2>
            <p class="brand">Rainbow Star Training Services LLC</p>

            <div class="footer-block">
                <h3>
                    <span class="footer-icon">
                        <el-icon>
                            <OfficeBuilding />
                        </el-icon>
                    </span>
                    Abu Dhabi Office
                </h3>
                <p class="footer-line">
                    <el-icon>
                        <Location />
                    </el-icon>
                    <span>Unit 501 Abdulla Darwish Building, 802 Hamdan Bin Mohammed St, Al Zahiyah, Abu Dhabi</span>
                </p>
                <el-link class="footer-link" type="primary" href="https://maps.app.goo.gl/dLAtRu9MdQJGf1VS8"
                    target="_blank" :underline="false">
                    <el-icon>
                        <Location />
                    </el-icon>
                    Google Maps
                </el-link>
            </div>

            <div class="footer-block">
                <h3>
                    <span class="footer-icon">
                        <el-icon>
                            <Phone />
                        </el-icon>
                    </span>
                    Start a Conversation
                </h3>
                <p class="footer-line">
                    <el-icon>
                        <Phone />
                    </el-icon>
                    <span>+971 55-446-9950<br />+971 54-449-4027</span>
                </p>
                <p class="footer-line">
                    <el-icon>
                        <Message />
                    </el-icon>
                    <span>info@rainbowstar1.com</span>
                </p>
            </div>

            <div class="footer-links">
                <router-link to="/course/catalog">
                    <el-icon>
                        <Collection />
                    </el-icon>
                    Courses
                </router-link>
                <router-link to="/certificates/index">
                    <el-icon>
                        <DocumentChecked />
                    </el-icon>
                    Certificates
                </router-link>
                <router-link to="/about/m">
                    <el-icon>
                        <School />
                    </el-icon>
                    About Us
                </router-link>
                <router-link to="/contact">
                    <el-icon>
                        <Link />
                    </el-icon>
                    Contact Us
                </router-link>
            </div>

            <p class="copyright">Copyright © {{ year }} Rainbow Star Training Services LLC(RSTS). All Rights Reserved.
            </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    color: #fff;
    padding: 42px 0 28px;
}

.footer-shell {
    width: min(100% - 32px, 560px);
    margin: 0 auto;
}

h2 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 45px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 0.96;
    margin: 0;
}

.brand {
    color: rgba(255, 255, 255, 0.62);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.1em;
    margin: 10px 0 32px;
    text-transform: uppercase;
}

.footer-block {
    padding: 24px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.14);

    h3 {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        color: #f2b544;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.08em;
        margin: 0 0 10px;
        text-transform: uppercase;
    }

    p {
        color: rgba(255, 255, 255, 0.72);
        font-size: 16px;
        line-height: 1.62;
        margin: 0 0 10px;
    }
}

.footer-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(242, 181, 68, 0.34);
    color: #f2b544;

    .el-icon {
        font-size: 14px;
    }
}

.footer-line,
.footer-link,
:deep(.footer-link .el-link__inner) {
    display: inline-flex;
    align-items: flex-start;
    gap: 8px;
}

.footer-line {
    .el-icon {
        margin-top: 4px;
        color: #f2b544;
        font-size: 15px;
        flex: 0 0 auto;
    }
}

.footer-link {
    align-items: center;

    .el-icon {
        color: #f2b544;
        font-size: 15px;
        flex: 0 0 auto;
    }
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 24px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.14);

    a {
        min-height: 44px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: rgba(255, 255, 255, 0.72);
        font-weight: 800;
        text-decoration: none;

        .el-icon {
            color: #f2b544;
            font-size: 15px;
            flex: 0 0 auto;
        }
    }
}

.copyright {
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    line-height: 1.55;
    margin: 0;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
}
</style>
