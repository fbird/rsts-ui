import { http } from '@/utils/request'
import { RSTS_PORTAL_API } from '@/constants/serviceConstant'

/**
 * 获取certificate列表
 */
export const getCertificateList = (params: any) =>
  http.get(`/apis/v1/admin/certificates`, {
    baseURL: RSTS_PORTAL_API.value,
    params: params
  })

/**
 * 新增certificate列表
 */
export const addCertificate = (data: any) =>
  http.post(`/apis/v1/admin/certificates`, data, {
    baseURL: RSTS_PORTAL_API.value
  })


/**
 * 修改certificate列表
 */
export const updateCertificate = (id: any, data: any) =>
  http.put(`/apis/v1/admin/certificates/${id}`, data, {
    baseURL: RSTS_PORTAL_API.value
  })

/**
 * 删除certificate列表
 */
export const delCertificates = (data: Array<any>) =>
  http.delete(`/apis/v1/admin/certificates/batch-delete`, {
    baseURL: RSTS_PORTAL_API.value,
    data
  })

/**
 * 获取certificate详情
 */
export const getCertificateDetail = (id: any) =>
  http.get(`/apis/v1/admin/certificates/${id}`, {
    baseURL: RSTS_PORTAL_API.value
  })

/**
 * 根据certificate id 获取详情
 */
export const getCertificateDetailByCertificateId = (certificateId: any) =>
  http.get(`/apis/v1/certificates/detailByCertificateId/${certificateId}`, {
    baseURL: RSTS_PORTAL_API.value
  })

  /**
 * 根据certificate id 下载pdf
 */
export const downloadCertificatePdf = (certificateId: any) => 
  http.get(`/apis/v1/certificates/${certificateId}/pdf`, {
    baseURL: RSTS_PORTAL_API.value,
    responseType: 'blob'
  })

/**
 * 根据 id 下载pdf
 */
export const downloadPdfById = (data: any) => 
  http.post(`/apis/v1/admin/certificates/pdf`, data, {
    baseURL: RSTS_PORTAL_API.value,
    responseType: 'blob'
  })
  

  /**
 * certificate数据批量导入
 */
export const uploadCertificates = () => RSTS_PORTAL_API.value + `/apis/v1/admin/certificates/upload`


/**
 * certificate download template
 */

export const downloadCertificateTemplate = () => RSTS_PORTAL_API.value + `/apis/v1/admin/certificates/template`

export const exportCertificate = (data?: any) =>
  http.post(`/apis/v1/admin/certificates/export`, data, {
    baseURL: RSTS_PORTAL_API.value,
    responseType: 'blob'
    // stream
  })