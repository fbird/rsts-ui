import { icon, text } from "@fortawesome/fontawesome-svg-core"
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { width } from "@fortawesome/free-regular-svg-icons/faAddressBook"
import button from "element-plus/es/components/button/index.mjs"
import card from "element-plus/es/components/card/index.mjs"
import color from "element-plus/es/components/color-picker/src/utils/color.mjs"
import form from "element-plus/es/components/form/index.mjs"
import input from "element-plus/es/components/input/index.mjs"
import loading from "element-plus/es/components/loading/index.mjs"
import message from "element-plus/es/components/message/index.mjs"
import { el } from "element-plus/es/locales.mjs"

<template>
    <div class="login-card">
        <div class="card">
            <div
                style="display: flex;align-items: center; text-align: center; justify-content: center; margin-bottom: 20px;">
                <el-icon style="margin-right: 10px;" :size="24">
                    <Lock />
                </el-icon>
                <h2 class="card-title">Security</h2>
            </div>



            <el-form :model="LoginFormData" :rules="rules" label-width="auto" style="max-width: 600px" status-icon
                ref="loginForm">
                <!-- 用户名输入 -->
                <div class="form-group">
                    <el-form-item label="Username" prop="username">
                        <el-input clearable v-model="LoginFormData.username" placeholder="Please input username" ref="usernameRef"
                            autocomplete="off">

                        </el-input>
                    </el-form-item>
                </div>

                <!-- 密码输入 -->
                <div class="form-group">
                    <el-form-item label="Password" prop="password">
                        <el-input clearable type="password" v-model="LoginFormData.password"
                            placeholder="Please input password" show-password autocomplete="off">

                        </el-input>
                    </el-form-item>
                </div>
            </el-form>

            <!-- 登录按钮 -->
            <div class="form-group">
                <el-button primary :loading="loading" @click="handleSubmit(loginForm)" @keydown.enter>Login</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { FormInstance, FormRules } from 'element-plus'
import { doLogin } from '@/apis/userApi'
import { useTokenStore } from '@/stores/token'
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const loading = ref(false)
const loginForm = ref<FormInstance>()
const LoginFormData = ref<any>({});
const tokenStore = useTokenStore();
const router = useRouter();

const usernameRef = ref<HTMLInputElement | null>(null)
const rules: FormRules = reactive<FormRules>({
    username: [
        { required: true, message: 'UserName Required', trigger: 'blur' }
    ],
    password: [
        { required: true, message: 'Password Required', trigger: 'blur' }
    ]
})

const handleSubmit = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    loading.value = true;
    formEl.validate((valid) => {
        if (valid) {
            doLogin(LoginFormData.value).then((resp: any) => {
                tokenStore.token = resp
                if (tokenStore.callbackUrl) {
                    window.location.href = tokenStore.callbackUrl;
                } else {
                    router.push({ name: "home" })
                }

            })
        }
    }).finally(() => {
        loading.value = false;
    })
}

const keyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.code == 'Enter') {
    handleSubmit(loginForm.value)
  }
}

onMounted(async () => {
  window.addEventListener('keydown', keyDown)
  if (usernameRef.value) {
    usernameRef.value.focus()
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', keyDown, false)
})

</script>

<style scoped>
.login-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 300px);
}

.card {
    width: 400px;
    height: 320px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
}

.card-title {
    text-align: center;
}

.form-group {
    margin-bottom: 45px;

    label {
        margin-bottom: 6px;
        font-weight: bold;
    }

    .el-input {
        height: 35px !important;
    }

    .el-button {
        font-size: 20px;
        font-weight: bold;
    }
}

label {
    display: block;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;

}

input.input-error {
    border-color: red;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4ca74f;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    height: 40px;
}

button:hover {
    background-color: #4CAF50;
    color: white;
}
</style>