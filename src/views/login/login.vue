<template>
  <div class="loginapp">
    <div id="container">
      <!-- <br><br><br> -->
      <div class="boxlogin2">
        <center>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/ENG_th-flat_transparent_%281%29.gif"
            width="150"
            height="150"
            alt=""
          />
          <h1>SIGN IN</h1>
          <br />
          <GoogleLogin
            :params="params"
            :renderParams="renderParams"
            :onSuccess="onSuccess"
            :onFailure="onFailure"
          ></GoogleLogin>
          <!-- <button @click="login()">login</button> -->
          <!-- <form @submit.prevent="login">
                  <div class="txt_field">
                      <p><i class="fas fa-user"></i><input v-model="username" required placeholder="Username/Email" type="text" name="" id=""></p>
                  </div>
                   <div class="txt_field">
                      <p><i class="fas fa-key"></i><input v-model="username" required placeholder="Password" type="password" name="" id=""></p>
                  </div>
                
                <br>
                <router-link class="back-nameorder" to="/main"
                ><p><button type="submit">Login</button></p></router-link
                >
              </form> -->
        </center>
      </div>


      <div class="boxlogin">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://reg.src.ku.ac.th/res/image/reg64_2.jpg"
                class="d-block w-100"
                width="300"
                height="300"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://reg.src.ku.ac.th/res/image/reg64_2.jpg"
                class="d-block w-100"
                width="300"
                height="300"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://reg.src.ku.ac.th/res/image/reg64_2.jpg"
                class="d-block w-100"
                width="300"
                height="300"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Swal from "sweetalert2";
import GoogleLogin from "vue-google-login";
import 'lodash'
import axios from "axios";
export default {
  name: "App",
  /*Role 1). Admin
         2). คณะกรรมการ
         3). User */
  data() {
    return {
      http: null,
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id:
          "170464062249-vd40pgbkemkkvpdc2m6flgavtepbhgrp.apps.googleusercontent.com",
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
  },
  components: {
    GoogleLogin,
  },
  methods: {
    onSuccess(googleUser) {
      console.log(googleUser.getBasicProfile());
      var profile = googleUser.getBasicProfile();
      const fullName = profile.getName();
      const [first, last] = fullName.split(' ');
      
      console.log(first);
      console.log(last); 
      // var lname = googleUser.getBasicProfile().vW;
      // console.log(lname);
      const email = profile.getEmail();
      this.http
        .post("pf_student", {
          fname: first,
          lname: last,
          email: email,
        })
        .then((res) => {
          console.log('login',res);
          // window.user_id = res.data[0].user_id;
          // console.log(window.user_id);
          window.localStorage.setItem('id_user',res.data[0].user_id );
          this.$router.push({ name: "Main" });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "ล็อกอินสำเร็จ!!",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((res) => {
          console.log(res);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "อีเมลไม่ถูกต้อง!!",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    onFailure(e) {
      console.log(e);
    },
  },
};
</script>


<style>
.loginapp {
  max-width: 100%;
  max-height: 100%;
  /* border: 1px solid rgb(255, 0, 0); */
  font-weight: normal;

  /* justify-content:space-between; */
}
#container {
  width: 100%;
  height: 100vh;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  /* border: 1px solid red; */
  /* background-image: url('assets/123.jpg') ; */
}
.boxlogin {
  width: 50%;
  height: 100%;
  background-image: url("../../assets/123.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
}
.boxlogin2 {
  width: 50%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  margin-top: 30px;
  color: #680c07;
  font-size: 17.37px;
  font-style: Roboto;
}
center {
  margin-bottom: 10px;
}
button {
  font-size: 15px;
  font-style: Roboto;
  padding: 13px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: #680c07;
}
.center form {
  padding: 0 40px;
  box-sizing: border-box;
}
form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.txt_field input {
  width: 60vh;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
</style>


