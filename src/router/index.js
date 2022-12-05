import {
    createWebHistory,
    createRouter
} from "vue-router";
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Success from '../views/Success.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/product/:id',
        props: true,
        name: 'product',
        component: Product
    },
    {
        path: '/cart',
        name: 'cart',
        component: ShoppingCart
    },
    {
        path: '/success',
        name: 'success',
        component: Success
    },
]

const router = createRouter({
    history: createWebHistory,
    routes
})

export default router