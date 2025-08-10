<script setup lang="ts">
import actvetLogo from '/images/companyQualification/ActvetLogo.png'
import ascb from '/images/companyQualification/ASCB.png'
import dac from '/images/companyQualification/DAC Logo.png'
import highfield from '/images/companyQualification/Highfield.png'
import iadc from '/images/companyQualification/IADC.png'
import iaf from '/images/companyQualification/IAF_LOGO.svg'
import icv from '/images/companyQualification/ICV LOGO.jpg'
import irqao from '/images/companyQualification/IRQAO LOGO.png'
import iso3 from '/images/companyQualification/ISO3.png'
import iwcf from '/images/companyQualification/IWCF.png'
import liberiaMaritimeAuthority from '/images/companyQualification/Liberia Maritime Authority.png'
import qrsIso from '/images/companyQualification/QRS-ISO-9001-2015-Certified-Logo-Vector.png'
import qualityPlus from '/images/companyQualification/Quality plus_Logo.png'

// 将图片改成数组，方便循环
const imageList = [
    { src: ascb, alt: 'ASCB' },
    { src: actvetLogo, alt: 'ACTVET' },
    { src: dac, alt: 'DAC' },
    { src: highfield, alt: 'Highfield' },
    { src: iaf, alt: 'IAF' },
    { src: iadc, alt: 'IADC' },
    { src: icv, alt: 'ICV' },
    { src: iso3, alt: 'ISO3' },
    { src: irqao, alt: 'IRQAO' },
    { src: iwcf, alt: 'IWCF' },
    { src: liberiaMaritimeAuthority, alt: 'Liberia Maritime Authority' },
    { src: qrsIso, alt: 'QRS ISO' },
    { src: qualityPlus, alt: 'Quality Plus' }
]
</script>

<template>
    <h4>About Us</h4>
    <section>
        Rainbow Star Training Service LLC, is a leading integrated training service supplier in the oil and gas industry
        to provide a full range and levels of in-depth training programs based on the extensive, proprietary research.
        We are authorized to issue the general certificate of attendance and international accreditation qualification
        certificate. A regular competency assessment is carried out to revise the training plan and make trainees fully
        equipped with enhancing professional attitude, skills and expertise knowledge to face the challenges of their
        role at the work. We aim to constantly be creative and innovative in our training programs to set a peerless
        benchmark
    </section>

    <section>
        We can transfer many years of practical experience and success to you. We specialize in:
        <ul>
            <li>Practical regulatory compliance.</li>
            <li>Training that translates to better job performance.</li>
            <li>Program management that drives results.</li>
            <li>Minimizing risks and reducing uncontrolled exposure to hazards.</li>
            <li>Training on construction work.</li>
            <li>Integrated Training Solutions and Services for Oil and Gas Industry.</li>
            <li>Oil and Gas field Operation training.</li>
            <li>Oil and Gas Electrical, Mechanical and Instrument Maintenance Training.</li>
            <li>Oil and Gas Technical Service Training.</li>
            <li>Oil and Gas Equipment and Facility Training.</li>
            <li>Oil and Gas QHSE Training and Security Training.</li>
            <li>Oil and Gas Administrative Business Training.</li>
        </ul>
    </section>

    <section>
        At RSTS, we know how to create a positive environment where employees can contribute and teams succeed. We help
        you:
        <ul>
            <li>Develop peer and organizational pride;</li>
            <li>Shape values, avoid unnecessary costs, and reduce loss;</li>
            <li>Develop a positive corporate image for internal and external stakeholders;</li>
            <li>Form a strong cultural foundation that will withstand the ebb and flow of business cycles and changing
                priorities;</li>
            <li>Cultivate innovation into application.</li>
        </ul>
    </section>

    <section>
        Many organizations develop admirable HSE goals without appreciating the difficulty in achieving those goals and
        the barriers that are likely to be faced. We help you achieve your goals by:
        <ul>
            <li>Avoiding the mistakes already made by others, and anticipating and avoiding inevitable obstacles;</li>
            <li>Using continuous improvement models we have developed that leverage strengths, improves system weakness,
                and eliminates deficiencies;</li>
            <li>Solving problems.</li>
        </ul>
    </section>

    <section>
        We facilitate, train, coordinate, broker, manage, measure, assess, survey, investigate, empower, enhance,
        leverage, and derive mutual benefit when executing projects. Working in collaboration with an organization, we
        can do many things that are extremely difficult to accomplish working on the inside. Focusing exclusively on the
        task at hand, we know how to get things done successfully and cost effectively. We satisfy our clients and
        succeed only when our clients succeed.
    </section>

    <div>
        <h4>Qualification Accreditation</h4>
    </div>

    <!-- 响应式栅格布局 -->
    <el-row :gutter="20" style="padding-left: 30px;">
        <el-col :xs="8" :sm="4" :md="4" v-for="(img, index) in imageList" :key="index">
            <el-image :src="img.src" :alt="img.alt" fit="scale-down" />
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
section {
    padding: 0 12px;
    /* 手机端留白 */
    line-height: 1.6;
}

.logo-col {
    text-align: center;
    margin-bottom: 16px;
}

.el-image {
    width: 100%;
    height: auto;
    max-width: 150px;
}

@media (max-width: 768px) {
    .el-image {
        width: 60px;
        height: auto;
    }
}
</style>