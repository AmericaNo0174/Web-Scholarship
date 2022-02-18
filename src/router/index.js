import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Sidebar from '../components/Sidebar.vue'
import Status from '../views/status/status.vue'
import Interview from '../views/date_interview/interview.vue'
import History from '../views/capital_history/history.vue'
import form from '../views/form/form.vue'
import uploadform from '../views/form/uploadform.vue'
import Open from '../views/open_capital/open_capital.vue'
import Statusname from '../views/statusname/statusname.vue'
import Statusinterview  from '../views/statusinterview/statusinterview.vue'
// import Nameorder from '../views/nameorder/nameorder.vue'

import Step from '../views/step/step.vue'
import DetailsCP from '../views/details/detailsCP.vue'
import DetailsKU from '../views/details/detailsKU.vue'
import Detailsrub from '../views/details/detailsrub.vue'


import Main from '../views/main/main.vue'

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
        path:'/history',
        name:'History',
        component: History
      },
      {
        path:'/form',
        name:'form',
        component: form

      },
      {
        path:'/uploadform',
        name:'uploadform',
        component: uploadform
      },
      {
        path:'/main',
        name:'main',
        component: Main
      },
      {
        path:'/open_capital',
        name:'Open',
        component: Open
      },
      {
        path:'/statusname',
        name:'Statusname',
        component: Statusname
      },
      {
        path:'/statusinterview',
        name:'Statusinterview',
        component: Statusinterview
      },
      // {
      //   path:'/nameorder',
      //   name:'Nameorder',
      //   component: Nameorder
      // }


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
