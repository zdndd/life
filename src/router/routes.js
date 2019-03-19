import Login from '../views/login/login.vue'
import Monthly from '../views/money/money.vue'
import MoneyTotal from '../views/money/moneyTotal.vue'
import HK from '../views/hk/hk.vue'
import Apartment from '../views/apartment/apartment.vue'
import NotFoundComponent from '../views/none.vue'

export default [
  {path: '*', component: NotFoundComponent },
  {path: '/', redirect: '/apartment'},

  {path: '/login', component: Login},
  {
    path: '/money', component: MoneyTotal,
    children: [

      {
        path: 'monthly',
        component: Monthly
      },

      {
        path: 'hk',
        component: HK
      }
    ]
  },
  // {path: '/hk', component: HK},
  {path: '/apartment', component: Apartment}
]
