<template>
  <div class="container-contact">
    <h3>ข้อมูลติดต่อ</h3>
    <div class="data-contact">
      <p>คณะวิศวกรรมศาสตร์ ศรีราชา<br/>
        มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา<br/>
        เลขที่ 199 หมู่ 6 ถ.สุขุมวิท ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230</p><br/>
      <p>โทรศัพท์: 0 3835 4580 ถึง 3<br/>
        ต่อ 662202 งานประชาสัมพันธ์<br/>
        ต่อ 662217 งานรับเข้าศึกษาต่อ<br/>
        ต่อ 662214 งานรับฝึกงานและสหกิจศึกษา</p><br/>
      <p>งานรับเขัาศึกษาต่อปริญญาโท โทร 090 316 3790</p><br/>
      <p>ศูนย์ทดสอบวัสดุวิศวกรรมโยธา<br/>
      โทร 092 248 8390, 081 437 8296</p><br/>
      <p>ศูนย์วิจัยและบริการวิศวกรรม<br/>
      โทร 0 3835 4580 ถึง 3<br/>
      ต่อ 662260, 662261<br/>
      หรือ 099 701 2838</p><br/>
      <div class="img-contact">
        <div class="ku-contact">
          <img src="../../assets/ku.svg" alt="">
          <h6>คณะวิศวกรรมศาสตร์ ศรีราชา</h6>
          <p><i class="fas fa-map-marker-alt"></i>199 Sukhumvit Road Tung Sukla,<br/>
          Chon Buri 20230</p>
        </div>
        <div class="fb-contact">
          <i id="fb-contact" class="fab fa-facebook-square"></i>
          <h6>facebook.com</h6>
        </div>
        <div class="phone-connntact">
          <i id="phone-contact" class="fas fa-phone-square-alt"></i>
          <h6>เบอร์โทรติดต่อ</h6>
          <p><i class="fas fa-phone-alt"></i>086-3972577<br/>
          คุณอัญชลี</p>
        </div>
      </div>
    </div>
    <div class="end-cconnntact">
      <router-link class="back-connntact" to="/main"
        ><button type="button" class="btn btn-danger">Back</button></router-link
      >
      <!-- <div class="back-connntact">
        <button type="button" class="btn btn-danger">Back</button>
      </div> -->
      <div class="contract-connntact">
        <p>@Contract</p>
        <a href=""><i id="fb" class="fab fa-facebook"></i></a>
        <a href=""><i id="fm" class="fab fa-facebook-messenger"></i></a>
        <a href=""><i id="line" class="fab fa-line"></i></a>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../../components/footer.vue'
export default {
  components:{
    Footer
  },
   mounted() {
         if(!this.$store.state.login){
                this.$router.push({name:'Login'})
    }
     }

}
</script>

<style>
  .container-contact{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-contact h3{
    margin: 30px 0;
    color:rgba(104, 12, 7, 1) ;
    font-size: 40px;
  }
  .container-contact p {
    color:rgba(104, 12, 7, 1)  ;
    font-size: 18px;
  }
  .data-contact .img-contact{
    display: flex;
    justify-content: center;
    /* background-color: aquamarine; */
    margin-top: 10px;
  }
  .data-contact .img-contact h6{
    color:rgba(104, 12, 7, 1) ;
    font-weight: bold;
  }
  .ku-contact{
    width: 300px;
    margin: 0 25px;
  }
  .fb-contact{
    width: 300px;
    margin: 0 25px;
    
  }
  .phone-connntact{
    width: 300px;
    margin: 0 25px;
  }

  #fb-contact{
    color:rgba(57, 81, 133, 1);
    font-size: 120px;
    position: relative;
    right: 10px;
    margin-bottom: 10px;
  }
  #phone-contact{
    font-size: 120px;
    position: relative;
    right: 10px;
    margin-bottom: 10px;
  }
  .end-cconnntact{
    margin-top: 10px;
    text-align: end;
  }
  .back-connntact button{
  font-size:15px;
  height: 50px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(180, 45, 37, 1);
  margin-right: 40px;
  }
  .end-cconnntact .contract-connntact
  {
    text-align: center;
  }
  .end-cconnntact .contract-connntact p{
    text-align: center;
  }
  .end-cconnntact .contract-connntact i{
    text-align: center;
    margin: 0 12px;
  }
</style>