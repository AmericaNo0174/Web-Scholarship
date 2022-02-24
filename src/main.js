import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/css/tailwind.css'

Vue.router = router
Vue.use(router)
Vue.config.productionTip = false
import { LoaderPlugin } from 'vue-google-login';
Vue.use(LoaderPlugin, {
  client_id: "170464062249-vd40pgbkemkkvpdc2m6flgavtepbhgrp.apps.googleusercontent.com"
});
Vue.GoogleAuth.then(auth2 => {
  console.log(auth2.isSignedIn.get());
  console.log(auth2.currentUser.get())
})

// import GAuth from 'vue-google-oauth2'
// const gauthOption = {
//   clientId: '170464062249-vd40pgbkemkkvpdc2m6flgavtepbhgrp.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'consent',
//   fetch_basic_profile:true
// }
// Vue.use(GAuth, gauthOption)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
