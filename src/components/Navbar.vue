<template>
  <div class="navbar-web">
    <div class="nav1">
      <div @click="openSidebar" class="menu-icon">
        <i class="fa fa-bars text-white" aria-hidden="true"></i>
      </div>
      <div class="logo"><img src="../assets/logo.svg" alt="" /></div>
      <div class="nav-name" ><p>{{$store.state.user.email}}</p></div>
      <!-- <div class="logout"><i class="fa fa-power-off text-white" aria-hidden="true"></i></div> -->
      <router-link class="logout" to="/"
        ><i class="fa fa-power-off text-white" aria-hidden="true" @click="logout" ></i
      ></router-link>
    </div>
    <div class="nav2">
      <div class="nav-name">
        <p>คณะวิศวกรรมศาสตร์ศรีราชา มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      isOpen: true,
      form: {
        fname: null,
        lname: null,
        email: null,
        role: null,
      },
      user_img:null
    };
  },
   mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
     if(!this.$store.state.login){
                this.$router.push({name:'Login'})
    }
    
  },
  methods: {
    openSidebar() {
      this.isOpen = !this.isOpen;
      this.$emit("openSidebar", this.isOpen);
    },
   logout(){
      this.$store.commit('setLogout')
      console.log('status',this.$store.state.login);
    }
  },
};
</script>

<style>
.navbar-web {
  /* border: 1px solid hotpink;  */
  height: 10vh;
}
.navbar-web .nav1 {
  height: 50px;
  /* width: 100vh;
  max-width: 100vh; */
  /* max-width: 100vh; */
  background-color: rgb(128, 0, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 8px; */
}
.navbar-web .nav2 {
  background-color: rgba(135, 18, 12, 1);
  text-align: center;
}
.logo {
  position: relative;
  left: 60px;
  margin: 0 auto;
}
.nav-name p {
  display: flex;
  justify-content: center;
  margin: 0 auto ;
  color: white;
}
.logout {
  color: white;
  padding: 2px;
  border-radius: 2px;
}
.menu-icon {
  font-size: 18px;
}
.menu-icon:hover {
  cursor: pointer;
}
.logout:hover {
  cursor: pointer;
}
.text-white {
  color: white;
}
.footer {
  margin-bottom: 0%;
}
</style>