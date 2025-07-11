import router from '@/router'
import { useTokenStore } from './stores/token'

export const permissionCheck = () => {

  router.beforeEach((to:any, _from:any, next:any) => {
    const tokenStore = useTokenStore()
    if (to.path?.includes('/home') && window._RSTS_GLOBAL_.maintenance) {
      router.push({ path: '/maintenance' })
      return;
    }

    
    if (!to.path?.includes('/admin') || to.name === 'login') {
      next()
      return
    }else {
      if(tokenStore.token) {
        next()
        return
      }else {
        tokenStore.callbackUrl = window.location.href;
        router.push({ path: '/admin/login' })
      }
    }

  })
}
