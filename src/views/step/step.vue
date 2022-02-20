<template>
  <div class="container-step">
    <h3>ขั้นตอนการสมัครขอทุนการศึกษา</h3>
    <div class="data-step">
      <div class="step1">
        <h5>1. login ด้วยอีเมล KU</h5>
        <div class="img-step1">
          <img alt="Vue logo" src="../../assets/step1.png">
        </div>
      </div>
      <div class="step2">
        <h5>2. เปิดเมนู ทุนที่เปิดให้ลงทะเบียน</h5>
        <p>เลือกรับทุนที่เปิดให้สมัครรับทุนการศึกษา</p>
        <div class="img-step2">
          <img alt="Vue logo" src="../../assets/step2.1.png">
          <img alt="Vue logo" src="../../assets/step2.2.png">
        </div>
      </div>
      <div class="step3">
        <h5>3.กรอกข้อมูลในการสมัครรับทุน</h5>
        <p>กรอกข้อมูลสำหรับสมัครขอรับทุนและอัพโหลดเอกสารให้ครบ แล้วกดบันทึก</p>
        <div class="img-step3">
          <img alt="Vue logo" src="../../assets/step3.1.png">
          <img alt="Vue logo" src="../../assets/step3.2.png">
        </div>
      </div>    
    </div> 
    <div class="end-step">
      <div class="back-step">
        <button type="button" class="btn btn-danger">Back</button>
      </div>
      <div class="contract-step">
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
  .container-step{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-step h3{
    margin: 35px 0;
    color: rgba(104, 12, 7, 1);
    font-weight: bold;
  }
  .data-step{
    height: 60%;
  }
  .data-step h5{
    font-size: 22px;
    width: 50%;
    text-align: left;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .data-step p{
    font-size: 18px;
    width: 45%;
    text-align: left;
    margin: 30px auto;
    color: rgba(104, 12, 7, 1);
  }
  .data-step .step1{
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
  }
  .step1  img{
    width: 350px;
    height: 350px;
  }
  .step2 .img-step2{
    display: flex;
    margin: 30px 0; 
  }
  .step2  img{
    width: 600px;
    height: 300px;
    margin: 0 auto;
  }
  .step3 .img-step3{
    display: flex;
    margin: 30px 0; 
  }
  .step3  img{
    width: 500px;
    height: 500px;
    margin: 0 auto;
  }
  .end-step{
    margin-top: 10px;
  }
  .end-step .back-step{
    text-align: end;
  }
  .back-step button{
  font-size:15px;
  height: 50px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(180, 45, 37, 1);
  margin-right: 40px;
  }
  .end-step .contract-step
  {
    text-align: center;
  }
  .end-step .contract-step p{
    text-align: center;
  }
  .end-step.contract-stepi{
    text-align: center;
    margin: 0 12px;
  }
</style>