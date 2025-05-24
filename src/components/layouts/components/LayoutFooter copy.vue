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

</script>

<template>
    <el-row style="margin-bottom: 15px;">
        <el-col>Company Certifications & Licenses</el-col>
    </el-row>
    <el-row>
        <el-col :span="4">
            <el-image :src="ascb" alt="ASCB" style="width: 120px; height: 120px;" />
        </el-col>
        <el-col :span="4">
            <el-image :src="actvetLogo" alt="ACTVET" style="width: 120px; height: 120px;" />
        </el-col>
        <el-col :span="4">
            <el-image :src="dac" alt="dac" style="width: 120px; height: 120px;" fit="scale-down" />
        </el-col>
        <el-col :span="4">
            <el-image :src="highfield" alt="highfield" style="width: 120px; height: 120px;" fit="scale-down" />
        </el-col>
        <el-col :span="4">
            <el-image :src="iaf" alt="iaf" style="width: 120px; height: 120px;" fit="scale-down" />
        </el-col>
        <el-col :span="4">
            <el-image :src="iadc" alt="iadc" style="width: 120px; height: 120px;" fit="scale-down" />
        </el-col>
        <el-col :span="4">
            <el-image :src="icv" alt="icv" style="width: 120px; height: 120px;" fit="scale-down" />
        </el-col>
        <el-col :span="4">
            <el-image :src="iso3" alt="iso3" style="width: 120px; height: 120px;" fit="scale-down" />
        </el-col>
        <el-col :span="4">
            <el-image :src="irqao" alt="irqao" style="width: 120px; height: 120px;" fit="scale-down" />
        </el-col>
        <el-col :span="4">
            <el-image :src="iwcf" alt="iwcf" style="width: 120px; height: 120px;" fit="scale-down" />
        </el-col>
        <el-col :span="4">
            <el-image :src="liberiaMaritimeAuthority" alt="liberiaMaritimeAuthority"
                style="width: 120px; height: 120px;" fit="scale-down" />
        </el-col>
        <el-col :span="4">
            <el-image :src="qrsIso" alt="qrsIso" style="width: 120px; height: 120px;" fit="scale-down" />
        </el-col>
        <el-col :span="4">
            <el-image :src="qualityPlus" alt="qualityPlus" style="width: 120px; height: 120px;" fit="scale-down" />
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped></style>
