import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/todolist',
            name: 'todolist',
            component: () => import('../views/TodoListView.vue'),
        },
        {
            path: '/',
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

router.beforeEach(async (to, from, next) => {
    const token = document.cookie.replace(/(?:^|.*;\s*)todolistToken\s*=\s*([^;]*).*$/i, '$1')
    if (!token) {
        if (to.path === '/' || to.path === '/register') {
            return next()
        } else {
            return next('/')
        }
    }
    next()
})

export default router
