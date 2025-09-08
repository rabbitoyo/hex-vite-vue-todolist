import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/todolist',
            name: 'todolist',
            component: () => import('../views/TodoListView.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue'),
        },
    ],
})

router.beforeEach((to, from, next) => {
    const token = document.cookie.replace(/(?:^|.*;\s*)todolistToken\s*=\s*([^;]*).*$/i, '$1')

    if (!token && to.path !== '/login' && to.path !== '/register') {
        return next('/login')
    }
    next()
})

export default router
