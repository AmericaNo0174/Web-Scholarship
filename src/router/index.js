import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
import Sidebar from '../components/Sidebar.vue'
import Status from '../views/status/status.vue'
import Interview from '../views/date_interview/interview.vue'
import Contact from '../views/contact/contact'
import History from '../views/capital_history/history.vue'
import form from '../views/form/form.vue'
import uploadform from '../views/form/uploadform.vue'
import Open from '../views/open_capital/open_capital.vue'
import Statusname from '../views/statusname/statusname.vue'
import Statusinterview  from '../views/statusinterview/statusinterview.vue'
import Nameorder from '../views/nameorder/nameorder.vue'
import Step from '../views/step/step.vue'
import Profile from '../views/profile/profile.vue'
import Main from '../views/main/main.vue'
import Adminaddcapital from '../views/admin-opencapital/admin-addcapital.vue'
import Adminaddstep from '../views/admin-step/admin-addstep.vue'
import Role from '../views/Role/Role.vue'
import Roleedit from '../views/Role/Role_edit.vue'
import Detailcapital from '../views/open_capital/detail_capital.vue'
import Showform from '../views/form/show_form.vue'
import Showupload from '../views/form/show_uploadform.vue'
import Adminform from '../views/admin-form/admin_form.vue'
import Adminupload from '../views/admin-form/admin_upload.vue'
import scorecommit from '../views/Scorecommit/scorecommit.vue'
import scoreadmin from '../views/Scorecommit/scoreadmin.vue'
import formscore from '../views/form/formscore.vue'
import uploadscore from '../views/form/uploadscore.vue'




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

        path:'/contact',
        name:'Contact',
        component: Contact
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
      {
        path:'/uploadscore',
        name:'uploadscore',
        component: uploadscore
      },
      {
        path:'/Scorecommit',
        name:'scoreadmin',
        component: scoreadmin
      },
      {
        path:'/profile',
        name:'Profile',
        component: Profile
      },
      {
        path:'/nameorder',
        name:'Nameorder',
        component: Nameorder
      },
      {
        path:'/detail_capital',
        name:'Detailcapital',
        component: Detailcapital
      },
      {
        path:'/step',
        name:'Step',
        component: Step
      },
      {
        path:'/main',
        name:'Main',
        component: Main
      },
      {
        path:'/show_form',
        name:'Show_form',
        component: Showform
      },
      {
        path:'/Scorecommit',
        name:'scorecommit',
        component: scorecommit  
      },
      // {
      //   path:'/show_form/:capital_id',
      //   name:'Show_form',
      //   component: Showform
      // },
      {
          path:'/show_upload',
          name:'Show_upload',
          component: Showupload
        },
      // {
      //   path:'/show_upload/:capital_id',
      //   name:'Show_upload',
      //   component: Showupload
      // },
      // ####### ADMIN ########
      {
        path:'/formscore',
        name:'formscore',
        component: formscore
      },

      {
        path:'/admin-addcapital',
        name:'Adminaddcapital',
        component: Adminaddcapital
      },
      {
        path:'/Role',
        name:'Role',
        component: Role
      },
      {
        path:'/Roleedit',
        name:'Roleedit',
        component: Roleedit
      },
      {
        path:'/admin-addstep',
        name:'Adminaddstep',
        component: Adminaddstep
      },
      {
        path:'/admin-form',
        name:'Adminform',
        component: Adminform
      },
      {
        path:'/admin-upload',
        name:'Adminupload',
        component: Adminupload
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

