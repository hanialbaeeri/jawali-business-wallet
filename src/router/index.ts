import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import Transfers from '@/pages/Transfers.vue'
import IndividualTransfer from '@/pages/IndividualTransfer.vue'
import BulkTransfer from '@/pages/BulkTransfer.vue'
import Reports from '@/pages/Reports.vue'
import Settings from '@/pages/Settings.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/transfers',
      component: Transfers,
    },
    {
      path: '/transfers/individual',
      component: IndividualTransfer,
    },
    {
      path: '/transfers/bulk',
      component: BulkTransfer,
    },
    {
      path: '/reports',
      component: Reports,
    },
    {
      path: '/settings',
      component: Settings,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    },
  ],
})

export default router

