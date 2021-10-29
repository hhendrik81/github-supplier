import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import SuppliersList from '../components/SuppliersList.vue'
import SuppliersMap from '../components/SuppliersMap.vue'
import Supplier from '../components/Supplier.vue'


const routes = [
    {path: '/', component: Home},
    {path: '/suppliers', component: SuppliersList},
    {path: '/map', component: SuppliersMap},
    {path: '/supplier', component: Supplier}

]
let router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
    