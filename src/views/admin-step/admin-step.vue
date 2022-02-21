<template>
  <div class="container-adminstep">
    <h3>ขั้นตอนการสมัครขอทุนการศึกษา</h3>
    <div class="data-adminstep">
      <div class="step1">
        <h5>1. login ด้วยอีเมล KU</h5>
        <div class="img-step1">
          <img alt="Vue logo" src="../../assets/step1.svg">
        </div>
      </div>
      <div class="step2">
        <h5>2. เปิดเมนู ทุนที่เปิดให้ลงทะเบียน</h5>
        <p>เลือกรับทุนที่เปิดให้สมัครรับทุนการศึกษา</p>
        <div class="img-step2">
          <img alt="Vue logo" src="../../assets/step2.svg">
        </div>
      </div>
      <div class="step3">
        <h5>3.กรอกข้อมูลในการสมัครรับทุน</h5>
        <p>กรอกข้อมูลสำหรับสมัครขอรับทุนและอัพโหลดเอกสารให้ครบ แล้วกดบันทึก</p>
        <div class="img-step3">
          <img alt="Vue logo" src="../../assets/step3.svg">
        </div>
      </div>    
    </div> 
    <div class="end-adminstep">
      <div class="back-adminstep">
        <button type="button" class="btn btn-danger">Back</button>
        <button id="editcapital" type="button" class="btn btn-danger">EDIT</button>
      </div>
      <div class="contract-adminstep">
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
    }
  }

</script>

<style>
  .container-adminstep{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-adminstep h3{
    margin: 35px 0;
    color: rgba(104, 12, 7, 1);
    font-weight: bold;
  }
  .data-adminstep{
    height: 100%;
    text-align: center;
    justify-content: center;
    
  }
  .data-adminstep h5{
    font-size: 22px;
    width: 50%;
    text-align: left;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .data-adminstep p{
    font-size: 18px;
    width: 45%;
    text-align: left;
    margin: 30px auto;
    color: rgba(104, 12, 7, 1);
  }
  .data-adminstep .step1{
    margin: 50px 0;
  }
  .step1{
    margin: 50px 0;
    
  }
   .step2{
    margin: 50px 0;
   
  }
   .step3{
    margin: 50px 0;
   
  }
  .step1 .img-step1{
    margin-top: 20px;

    object-fit:cover;
    object-position: center;
  }
  .step1  img{
    width: 350px;
    height: 350px;
  }
  .step2 .img-step2{
    display: flex;
    margin: 30px 0; 
    object-fit:cover;
    object-position: center;
  
  }
  .step2  img{
    width: 600px;
    height: 350px;
    margin: 0 auto;
  }
  .step3 .img-step3{
    display: flex;
    margin: 30px 0; 
    object-fit:cover;
    object-position: center;

   
  }
  .step3  img{
    width: 500px;
    height: 500px;
    margin: 0 auto;
  }
  .end-adminstep{
    margin-top: 10px;
  }
  .end-adminstep .back-adminstep{
    text-align: end;
  }
  .back-adminstep button{
  font-size:15px;
  height: 50px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(180, 45, 37, 1);
  margin-right: 40px;
  }
  .end-adminstep .contract-adminstep
  {
    text-align: center;
  }
  .end-adminstep .contract-adminstep p{
    text-align: center;
  }
  .end-adminstep.contract-adminstep i{
    text-align: center;
    margin: 0 12px;
  }
</style>