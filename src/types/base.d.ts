import { SortOrderEnum } from './enum'


/**
 * dto基础对象
 */
export interface BaseDTO {
  id?: number
  createUser?: string
  createTime?: string
  lastModifyUser?: string
  lastModifyTime?: string
}

/**
 * vo基础对象
 */
export interface BaseVO {
  id: number
  createUser?: string
  createTime?: string
  updateUser?: string
  updateTime?: string
}

/**
 * 排序字段定义对象
 */
export interface SortingField {
  field: string
  order: SortOrderEnum
}

/**
 * 分页请求对象
 */
export interface PageReq {
  pageNo: number
  pageSize: number
  sortingFields?: Array<SortingField> | null
  searchKey?: string | null
}

/**
 * 分页结果对象
 */
export interface PageResult<T> {
  pageNo?: number
  pageSize?: number
  totalPage?: number
  total?: number
  records?: Array<T>
}

/**
 * 基础响应对象
 */
export interface BaseResponse {
  success?: boolean
  code?: string
  message?: string
}

/**
 * 通用响应对象封装
 */
export interface GenericResponse<T> extends BaseResponse {
  data?: T
}

