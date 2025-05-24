import { ref } from 'vue'
import { defineStore } from 'pinia'
import MenuItem from 'element-plus/es/components/menu/src/utils/menu-item.mjs'

export const useTokenStore = defineStore('tokenStore', {
  state: () => ({
    token: ref<any>(),
    callbackUrl: ref<any>(),
  }),
  persist: {
    key: 'tokenStore',
    storage: sessionStorage,
    paths: [
      'token'
    ]
  }
})
