<template>
  <div class="loginapp">
      <div id="container">
        <!-- <br><br><br> -->
        <div>
            <center>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/ENG_th-flat_transparent_%281%29.gif" width="150" height="150" alt="">
              <h1>SIGN IN</h1>
              <br>
              <form @submit.prevent="login">
                <p><input v-model="username" required placeholder="Username/Email" type="text" name="" id=""></p>
                <p><input v-model="username" required placeholder="Password" type="password" name="" id=""></p>
                <br>
                <p><button type="submit">Login</button></p>
              </form>
            </center>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/ENG_th-flat_transparent_%281%29.gif" width="150" height="150" alt="">
              <h1>SIGN IN</h1>
              <br>
              <form @submit.prevent="login">
                <p><input v-model="username" required placeholder="Username/Email" type="text" name="" id=""></p>
                <p><input v-model="username" required placeholder="Password" type="password" name="" id=""></p>
                <br>
                <p><button type="submit">Login</button></p>
              </form>
          </div>
      </div>
      <!--nav>
        <RouterLink to="/">Home</RouterLink>
      </nav-->
     

    </div>
</template>

<script>
export default {

}
</script>

<style>
.loginapp {
  max-width:100%;
  max-height: 100%;
  /* border: 1px solid rgb(255, 0, 0); */
  font-weight: normal;
  /* justify-content:space-between; */
}
#container{
  width: 100%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  /* border: 1px solid red; */
  /* background-image: url('assets/123.jpg') ; */
}
/* body{
  background-color:rgb(255, 255, 255);
}
center {
  bottom:550px;
  
}
h1{
  text-align:center;
  color:#680C07;
}
h2{
  text-align:center;
  color:#ffffff;
}

button{
  text-align:center;
  color:#FFFF;
  background-color:#680C07;
  border-radius:15px 15px 15px 15px;
  padding:1px;
  width:100px;
  height: 50px;
  font-style: bold;

} */

</style>