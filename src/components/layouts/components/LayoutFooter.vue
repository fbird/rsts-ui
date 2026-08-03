<script setup lang="ts">
import { Collection, DocumentChecked, Link, Location, Message, OfficeBuilding, Phone, School } from '@element-plus/icons-vue'

const year = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="footer-shell">
            <div class="footer-brand">
                <h2>RSTS</h2>
                <p>Rainbow Star Training Services LLC</p>
            </div>

            <div class="footer-columns">
                <section>
                    <h3>

                        Abu Dhabi Office
                    </h3>
                    <p class="footer-line">
                        <el-icon>
                            <Location />
                        </el-icon>
                        <span>Unit 501 Abdulla Darwish Building, 802 Hamdan Bin Mohammed St, Al Zahiyah, Abu
                            Dhabi</span>
                    </p>
                    <el-link class="footer-link" type="primary" href="https://maps.app.goo.gl/dLAtRu9MdQJGf1VS8"
                        target="_blank" :underline="false">
                        <el-icon>
                            <Location />
                        </el-icon>
                        Google Maps
                    </el-link>
                </section>

                <section>
                    <h3>

                        Start a Conversation
                    </h3>
                    <p class="footer-line">
                        <el-icon>
                            <Phone />
                        </el-icon>
                        <span>Mobile / WhatsApp<br />+971 55-446-9950<br />+971 54-449-4027</span>
                    </p>
                    <p class="footer-line">
                        <el-icon>
                            <Message />
                        </el-icon>
                        <span>info@rainbowstar1.com</span>
                    </p>
                </section>

                <section>
                    <h3>
                        Explore
                    </h3>
                    <router-link class="footer-link" to="/course/catalog">
                        <el-icon>
                            <Collection />
                        </el-icon>
                        Courses
                    </router-link>
                    <router-link class="footer-link" to="/certificates/index">
                        <el-icon>
                            <DocumentChecked />
                        </el-icon>
                        Certificates
                    </router-link>
                    <router-link class="footer-link" to="/about">
                        <el-icon>
                            <School />
                        </el-icon>
                        About Us
                    </router-link>
                    <router-link class="footer-link" to="/contact">
                        <el-icon>
                            <Message />
                        </el-icon>
                        Contact Us
                    </router-link>
                </section>
            </div>

            <div class="footer-bottom">
                <span>Copyright © {{ year }} Rainbow Star Training Services LLC(RSTS). All Rights Reserved.</span>
                <el-link type="primary" href="https://www.rstsacademy.com" target="_blank"
                    :underline="false">www.rstsacademy.com</el-link>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    color: #fff;
    padding: 58px 0 34px;
}

.footer-shell {
    width: min(1180px, calc(100% - 48px));
    margin: 0 auto;
}

.footer-brand {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: end;
    padding-bottom: 34px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.16);

    h2 {
        font-family: Georgia, "Times New Roman", serif;
        font-size: clamp(37px, 5vw, 77px);
        font-weight: 500;
        letter-spacing: 0;
        line-height: 0.95;
        margin: 0;
    }

    p {
        color: rgba(255, 255, 255, 0.62);
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.1em;
        margin: 0;
        text-align: right;
        text-transform: uppercase;
    }
}

.footer-columns {
    display: grid;
    grid-template-columns: 1.25fr 0.9fr 0.55fr;
    gap: clamp(28px, 6vw, 80px);
    padding: 36px 0;

    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    h3 {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        color: #f2b544;
        font-size: 14px;
        font-weight: 800;
        letter-spacing: 0.08em;
        margin: 0 0 4px;
        text-transform: uppercase;
    }

    p,
    a {
        color: rgba(255, 255, 255, 0.72);
        font-size: 16px;
        line-height: 1.6;
        margin: 0;
        text-decoration: none;
    }

    a:hover {
        color: #20bfa9;
    }
}

.footer-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border: 1px solid rgba(242, 181, 68, 0.34);
    color: #f2b544;

    .el-icon {
        font-size: 15px;
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

.footer-bottom {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.52);
    font-size: 14px;
}

@media (max-width: 768px) {
    .footer {
        padding: 42px 0 28px;
    }

    .footer-shell {
        width: min(100% - 32px, 560px);
    }

    .footer-brand,
    .footer-bottom {
        align-items: flex-start;
        flex-direction: column;
    }

    .footer-brand p {
        text-align: left;
    }

    .footer-columns {
        grid-template-columns: 1fr;
    }
}
</style>
