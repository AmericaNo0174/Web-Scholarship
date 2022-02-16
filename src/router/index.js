import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Sidebar from '../components/Sidebar.vue'
import Status from '../views/status/status.vue'
import Interview from '../views/date_interview/interview.vue'
import form from '../views/form/form.vue'
import uploadform from '../views/form/uploadform.vue'
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
        path:'/form',
        name:'form',
        component: form
      },
      {
        path:'/uploadform',
        name:'uploadform',
        component: uploadform
      },
      
      
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
