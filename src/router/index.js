import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Sidebar from '../components/Sidebar.vue'
import Status from '../views/status/status.vue'
import Interview from '../views/date_interview/interview.vue'
import Open from '../views/open_capital/open_capital.vue'
import Step from '../views/step/step.vue'
import DetailsCP from '../views/details/detailsCP.vue'
import DetailsKU from '../views/details/detailsKU.vue'
import Detailsrub from '../views/details/detailsrub.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Sidebar,
    children:[
      {
        path:'/status',
        name:'Status',
        component: Status
      },
      {
        path:'/interview',
        name:'Interview',
        component: Interview
      },
      {
        path:'/open_capital',
        name:'Open',
        component: Open
      },
      {
        path:'/step',
        name:'Step',
        component: Step
      },
      {
        path:'/detailsCP',
        name:'DetailsCP',
        component: DetailsCP
      },
      {
        path:'/detailsKU',
        name:'DetailsKU',
        component: DetailsKU
      },
      {
        path:'/detailsrub',
        name:'Detailsrub',
        component: Detailsrub
      }
    ]
  },
  {
    path:'/',
    name:'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
