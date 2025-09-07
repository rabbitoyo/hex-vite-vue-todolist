import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/todolist',
            name: 'todolist',
            component: () => import('../views/TodoListView.vue'),
            meta: { requiresAuth: true },
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue'),
        },
    ],
})

router.beforeEach((to, from, next) => {
    const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)vue3-todolist-token\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    )

    if (to.meta.requiresAuth && !token) {
        next('/login') // 未登入導向 login
    } else if ((to.path === '/login' || to.path === '/register') && token) {
        next('/todolist') // 已登入直接到至 todoList
    } else {
        next() // 通過驗證
    }
})

export default router
