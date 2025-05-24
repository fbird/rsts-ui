import { http } from '@/utils/request'
import { RSTS_PORTAL_API } from '@/constants/serviceConstant'


/**
 * 新增certificate列表
 */
export const doLogin = (data: any) =>
  http.post(`/apis/v1/admin/users/doLogin`, data, {
    baseURL: RSTS_PORTAL_API.value
  })

  export const doLogout = (data: any) =>
  http.post(`/apis/v1/admin/users/doLogout`, data, {
    baseURL: RSTS_PORTAL_API.value
  })