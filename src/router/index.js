// IMPORT
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FilmInfo from '../views/FilmInfo'


//VUE
Vue.use(VueRouter)
    //Vue.use(BootstrapVue)

//ROUTES
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/FilmInfo',
        name: 'FilmInfo',
        component: FilmInfo
    },
    {
        path: '/favoris',
        name: 'Favoris',
        component: () =>
            import ( /* webpackChunkName: "favoris" */ '../views/Favoris.vue')
    },
    {
        path: '/filmAV',
        name: 'FilmAV',
        component: () =>
            import ( /* webpackChunkName: "filmAV" */ '../views/FilmAV.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    }
]

//ROUTER
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

//EXPORT
export default router