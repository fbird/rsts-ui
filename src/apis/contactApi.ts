import { http } from '@/utils/request'
import { RSTS_PORTAL_API } from '@/constants/serviceConstant'

export interface ContactForm {
  firstName: string
  lastName: string
  company?: string
  subject: string
  email: string
  message: string
}

export const sendContactEmail = (data: ContactForm) =>
  http.post(`/apis/v1/contact/send-email`, data, {
    baseURL: RSTS_PORTAL_API.value,
  })
