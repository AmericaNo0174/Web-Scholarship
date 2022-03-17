<template>
  <div class="container-side">
    <div
      class="sidebar-box"
      :class="{ 'w-0': !sidebarOpen, 'w-200': sidebarOpen }"
    >
      <div class="img-box" v-if="!isShow">
        <div class="">
          <img class="img-profile"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=50"
          />
        </div>
        <div class="user-info">
            <p>Kasetsart University</p>
        </div>
      </div>
      <div class="img-box" v-else>
        <div class="">
          <img class="img-profile"
            :src="form.user_img"
          />
        </div>
        <div class="user-info">
            <p>{{form.fname +' '+form.lname}}</p>
            <p>Kasetsart University</p>
        </div>
      </div>
      <router-link class="menu-list py-9" to="/profile"
        ><span><i class="fas fa-user-circle"></i>ข้อมูลส่วนตัว</span></router-link
      >
      <router-link class="menu-list py-9" to="/open_capital"
        ><span><i class="fas fa-graduation-cap"></i>ทุนที่เปิดให้ลงทะเบียน</span></router-link
      >
       <router-link class="menu-list py-9" to="/step"
        ><span><i class="fas fa-book"></i>ขั้นตอนการสมัครขอทุน</span></router-link
      >
       <router-link class="menu-list py-9" to="/status"
        ><span><i class="fas fa-edit"></i>สถานะ</span></router-link
      >
       <router-link class="menu-list py-9" to="/contact"
        ><span><i class="fas fa-phone-alt"></i>ติดต่อเรา</span></router-link
      >
       <router-link class="menu-list py-9" to="/nameorder"
        ><span><i class="fas fa-history"></i>ประวัติการขอทุน</span></router-link
      >
       <router-link class="menu-list py-9" to="/history"
        ><span><i class="fas fa-calendar-alt"></i>ประวัติรายชื่อผู้ที่ได้รับทุน</span></router-link
      >
    </div>
    <div style="display: flex; flex-direction: column; width: 100vmax">
      <Navbar @openSidebar="openSidebar" />
      <div class="content-box">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from "./Navbar.vue";
import axios from "axios";
export default {

  components: {
    Navbar,
    
  },
  data() {
    return {
      isShow:false,
      sidebarOpen: false,
      form: {
        fname: null,
        lname: null,
        idstudent: null,
        grade: null,
        birthday: null,
        age: null,
        idcard: null,
        nationality: null,
        origin: null,
        religion: null,
        simester: null,
        faculty: null,
        offset: null,
        gpa: null,
        professor: null,
        address: null,
        email: null,
        phonenumber: null,
        user_img: null,
        imageUpload:null
      },
    };
  },
   mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    this.open_profile();
   if(!this.$store.state.login){
                this.$router.push({name:'Login'})
    }  
  },

  methods: {
    openSidebar(isOpen) {
      // console.log(isOpen)
      this.sidebarOpen = isOpen;
    },
    open_profile() {
      //เอา id ไปหาข้อมูลที่อยู่ใน database
      // this.http
      //   .post("showprofile", {
      //     id_user: this.$store.state.user.user_id,
      //   })
      //   .then((res) => {
      //     // console.log("res:", res.data);
      //     // แปลง string to json
      //     this.form = JSON.parse(res.data[0].data_user);
      //     this.isShow = true
      //     // console.log('form',this.form);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
       this.http
        .post("showprofile", {
          id_user: this.$store.state.user.user_id,
        })
        .then((res) => {
          console.log("res:", res.data);

         //เช็คว่ากรอกข้อมูลไปรึยัง
          if(res.data){
             // แปลง string to json
            this.form = JSON.parse(res.data[0].data_user);
            this.isShow = true
            console.log('form',this.form);
          }
          else{
            this.isShow = false
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>


<style>
.container-side {
  display: flex;
}
.sidebar-box {
  height: 100vh;
  width: 300px;
  background-color: rgb(77, 8, 8);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  overflow: hidden;
}
.sidebar-box .img-box {
  display: flex;
  flex-direction: column;
  flex: initial;
  width: 300px;
  height: auto;
  min-width: 0;
  border-bottom: 3px solid whitesmoke;
  align-items: center;
  padding: 8px;
  
}
.img-profile{
    display: flex;
    width: 200px;
    height: 200px;
    border-radius: 50%;

}
.user-info{
    color: white;
    
}
.sidebar-box .menu-list {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: left;
  /* align-items: center;
  justify-content: center; */
  flex: initial;
  border-bottom: 2px solid rgb(235, 235, 235);
  color: whitesmoke;

  text-align: left;
  text-decoration-line: none;
  padding-block: 15px;
  width: 100%;
  /* background-color: rgb(128, 0, 0) */
}
.sidebar-box .menu-list:hover {
  background-color: rgb(3, 19, 51);
}
.w-0 {
  width: 0px;
  transition: 0.3s;
  animation-duration: 1s;
}
.w-200 {
  width: 300px;
  transition: 0.3s;
  animation-duration: 1s;
  height: auto;
}
.content-box {
  padding: 10px;
  padding: 0px;
}
.py-9 {
  padding-top: 9px;
  padding-bottom: 9px;
}
.px-9 {
  padding-right: 9px;
  padding-left: 9px;
}
</style>