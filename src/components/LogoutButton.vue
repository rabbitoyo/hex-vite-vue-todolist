<script setup>
import { logout } from '../utils/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = async () => {
    try {
        // 登出
        await logout()

        // 清除前端 cookie
        document.cookie = 'vue3-todolist-token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
        document.cookie =
            'vue3-todolist-token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=localhost'

        // 跳轉登入頁
        router.push('/login')
    } catch (error) {
        const msg = error.response?.data?.message || error.message || '登出失敗'
        alert(msg)
    }
}
</script>

<template>
    <button @click="handleLogout">登出</button>
</template>
