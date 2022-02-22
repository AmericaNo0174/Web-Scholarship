<template>
  <div class="loginapp">
      <div id="container">
        <!-- <br><br><br> -->
        <div class="boxlogin2">
            <center>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/ENG_th-flat_transparent_%281%29.gif" width="150" height="150" alt="">
              <h1>SIGN IN</h1>
              <br>
              <form @submit.prevent="login">
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
              </form>
            </center>
          </div>
 
          <div class="boxlogin">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://reg.src.ku.ac.th/res/image/reg64_2.jpg" class="d-block w-100" width="300" height="300" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://reg.src.ku.ac.th/res/image/reg64_2.jpg" class="d-block w-100" width="300" height="300" alt="...">
              </div>
              <div class="carousel-item">
                <img src="https://reg.src.ku.ac.th/res/image/reg64_2.jpg" class="d-block w-100" width="300" height="300" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </div>
      </div>

     

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
  height: 100vh;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  /* border: 1px solid red; */
  /* background-image: url('assets/123.jpg') ; */
}
.boxlogin{
  width:50%;
  height:100%;
  background-image:url('../../assets/123.jpg');
  display:flex;
  align-items:center;
  justify-content:center; 
}
.boxlogin2{
  width:50%;
  height:100%;
  background-color:rgb(255, 255, 255);
  display:flex;
  align-items:center;
  justify-content:center; 
}
h1{
  margin-top:30px;
  color:#680c07;
  font-size:17.37px;
  font-style: Roboto;
}
center{
  margin-bottom:10px;
}
button{
  font-size:15px;
  font-style:Roboto;
  padding:13px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:#680c07;

}
.center form{
  padding:0 40px;
  box-sizing: border-box;
}
form .txt_field{
  position: relative;
  border-bottom:2px solid #adadad;
  margin: 30px 0;

}
.txt_field input{
  width:60vh;
  padding: 0 5px;
  height:40px;
  font-size: 16px;
  border: none;
  background:none;
  outline:none;
}

</style>