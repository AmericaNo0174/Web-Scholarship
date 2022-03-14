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
import Adminstatusinterview from '../views/admin-statusinterview/admin-statusinterview.vue'
import Statusname from '../views/statusname/statusname.vue'
import Statusinterview  from '../views/statusinterview/statusinterview.vue'
import list_tun_nisit from '../views/totalboard_score/list_tun_nisit.vue'
import Nameorder from '../views/nameorder/nameorder.vue'
import Step from '../views/step/step.vue'
import Adminopencapital from '../views/admin-opencapital/admin-opencapital'
import Adminstep from '../views/admin-step/admin-step.vue'
import Profile from '../views/profile/profile.vue'
import Main from '../views/main/main.vue'
import Adminaddcapital from '../views/admin-opencapital/admin-addcapital.vue'
import Adminaddstep from '../views/admin-step/admin-addstep.vue'
import Nav from '../components/Navbar'
import Detailcapital from '../views/open_capital/detail_capital.vue'
Vue.use(VueRouter)

// let express = require('express');
// let router = express.Router();
// let dbcon = require('../servere/index');


// router.get('/',(req,res,next) => {
//   dbcon.querry('SELECT * FROM testjs ORDER BY id desc',(err,rows) => {
//     if(err){
//       req.flash('error',err);
//       res.render('testjs',{ data: ""});
//     } else {
//       res.render('testjs',{ data: rows});
//     }
//   })
// })



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
        path:'/list_tun_nisit',
        name:'list_tun_nisit',
        component: list_tun_nisit
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

      // ####### ADMIN ########
      {
        path:'/admin-statusinterview',
        name:'Adminstatusinterview',
        component: Adminstatusinterview
      },
      {
        path:'/admin-opencapital',
        name:'Adminopencapital',
        component: Adminopencapital
      },
      {
        path:'/admin-step',
        name:'Adminstep',
        component: Adminstep
      },
      {
        path:'/admin-addcapital',
        name:'Adminaddcapital',
        component: Adminaddcapital
      },
      {
        path:'/admin-addstep',
        name:'Adminaddstep',
        component: Adminaddstep
      },
    ]
  },
  {
    path:'/',
    name:'Login',
    component: Login
  },
  {
    path:'/nav',
    name:'Nav',
    component: Nav
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

