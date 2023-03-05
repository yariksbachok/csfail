import Index from '@/pages/Index'
import BattlePass from '@/pages/BattlePass'
import Bonuses from '@/pages/Bonuses'
import Top from '@/pages/Top'
import Referrals from '@/pages/Referals'
import ProvablyFair from '@/pages/ProvablyFair/Index'
import DistributeProvablyFair from '@/pages/ProvablyFair/distribute'
import Support from '@/pages/Support/Index'
import DistributeSupport from '@/pages/Support/distribute'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/season-pass',
        component: BattlePass
    },
    {
        path: '/bonuses',
        component: Bonuses
    },
    {
        path: '/top',
        component: Top
    },
    {
        path: '/referrals',
        component: Referrals
    },
    {
        path: '/provably-fair',
        component: ProvablyFair
    },
    {
        path: '/provably-fair/:article',
        component: DistributeProvablyFair
    },
    {
        path: '/support',
        component: Support
    },
    {
        path: '/support/:article',
        component: DistributeSupport
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL),
})

export default router;
