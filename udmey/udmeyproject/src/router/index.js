import vue from 'vue'
import Router from 'vue-router'

import HomE from '@/components/Home'
// import HeadeR from '@/components/Header'
import PortfoliO from '@/components/portfolio/portfolio'
import StockS from '@/components/stocks/stocks.vue'




vue.use(Router)

const routes = [
    { path: '/', component: HomE },
    // { path: '/header', component: HeadeR },
    { path: '/portfolio', component: PortfoliO },
    { path: '/stocks', component: StockS }

]
let router = new Router({ routes })

export default router