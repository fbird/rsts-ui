import { ElMessage as Message } from 'element-plus'
import router from '@/router'
import {useTokenStore} from '@/stores/token'




const validateStatus = async (status: number | undefined, defaultMsg: string | undefined) => {
  const tokenStore = useTokenStore();
  
  switch (status) {
    case 400:
      Message.error(defaultMsg ? defaultMsg : 'backend interface error')
      return
    case 401:
      tokenStore.token = null;
      tokenStore.callbackUrl = window.location.href;
      router.push({ name: 'login' })
      return
    case 403:
      Message.error(defaultMsg ? defaultMsg : 'zuthentication error')
      router.push({ name: 'errorPage403' })
      return
    case 404:
      Message.error(defaultMsg ? defaultMsg : 'resource not found')
      router.push({ name: 'errorPage404' })
      return
    case 405:
      Message.error(defaultMsg ? defaultMsg : 'network error')
      return
    case 408:
      Message.error(defaultMsg ? defaultMsg : 'network timout')
      return
    case 500:
      Message.error(defaultMsg ? defaultMsg : 'backend server error')
      return
    default:
      Message.error(defaultMsg ? defaultMsg : 'sorry, the server error')
      return
  }
}

export default validateStatus
