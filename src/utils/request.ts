import axios from "axios";
import type {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { ElMessage as Message } from "element-plus";
import { showLoading, hideLoading } from "./loading";
import validateStatus from "./validateStatus";
import type { GenericResponse } from "@/types/base";
import {useTokenStore} from '@/stores/token'
import router from  '@/router'
const service: AxiosInstance = axios.create({
  headers: {},
  baseURL: "/rsts-server/apis/v1",
  timeout: 1000 * 10 * 60 * 10,
});




/* 请求拦截器 */

service.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {


    if (config.headers?.Authorization) {
      return config;
    }

    if(!config.url?.includes("/admin") || config.url?.includes("/doLogin")){
      return config;
    }

    const tokenStore = useTokenStore();

    if (!tokenStore.token) {
      router.push({name: 'login'})
      return config;
    }

    config.headers!.Authorization = 'Bearer ' + tokenStore?.token!.tokenValue!;

    showLoading();
    return config;

  },
  (error: AxiosError) => {
    Message.error(error.message);
    return Promise.reject(error);
  }
);

/* 响应拦截器 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    setTimeout(() => {
      hideLoading();
    }, 200);

    if(response.config.responseType == 'blob'){
      return response;
    }

    const genericResp: GenericResponse<any> = response.data;

    if (!genericResp.success) {
      validateStatus(response.status, genericResp.message)
      return Promise.reject(response);
    }
    return genericResp.data;
  },
  (error: AxiosError<AxiosResponse>) => {
    setTimeout(() => {
      hideLoading();
    }, 200);
    const errorResp: GenericResponse<any> | undefined = error.response?.data;
    validateStatus(error.response?.status, errorResp?.message)
    return Promise.reject(error);
  }
);





/* 导出封装的请求方法 */
export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config);
  },

  post<T = any>(
    url: string,
    data?: object,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return service.post(url, data, config);
  },

  put<T = any>(
    url: string,
    data?: object | null,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return service.put(url, data, config);
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config);
  },
};
