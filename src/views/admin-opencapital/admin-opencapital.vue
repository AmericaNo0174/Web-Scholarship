<template>
<div class="container-capital">
  <h3>ทุนที่เปิดให้ลงทะเบียน</h3>
  <div class="capital-name">
    <button type="button" class="btn btn-danger">รายชื่อผู้ขอทุน</button>
    <button type="button" class="btn btn-danger">ผู้มีสิทธิ์สอบสัมภาษณ์</button>
  </div>
  <div class="main-capital">
    <div class="capital1">
      <img src="../../assets/CP.svg" alt="">
      <div class="data-capital">
        <div class="main-data">
          <h1>01</h1>
          <h3>โครงการทุนการศึกษา เครือเจริญโภคภัณฑ์ 2564</h3>
        </div>
        <p>เครือเจริญโภคภัณฑ์ตระหนักถึงความสำคัญของการศึกษาซึ่งเป็นปัจจัยหลักในการพัฒนาเยาวชนของชาติจึงมีนโยบายสนับสนุนช่วยเหลือนักเรียนนิสิตนักศึกษาที่มีความประพฤติดีเรียนดีมีความมุ่งมั่นและความเป็นผู้นำแต่ขาดแคลนทุนทรัพย์ให้มีทุนทรัพยากรพอเพียงในการศึกษา เครือเจิญโภคภัณฑ์ 2564</p>
       <div class="btn-capital">
        <button id="register-capital" type="button" class="btn btn-danger">สมัค</button>
        <button id="about" type="button" class="btn btn-danger">อ่านเพิ่มเติม</button>
      </div>
      </div>
    </div>
  </div>
  <div class="end-admincapital">
    <div class="back-admincapital">
      <button type="button" class="btn btn-danger">Back</button>
      <button id="editcapital" type="button" class="btn btn-danger">Edit</button>
    </div>
    <div class="contract-capital"> 
      <p>@Contract</p>
      <a href=""><i id="fb" class="fab fa-facebook"></i></a>
      <a href=""><i id="fm" class="fab fa-facebook-messenger"></i></a>
      <a href=""><i id="line" class="fab fa-line"></i></a>
    </div>
  </div>
   <!--div class="adminopencapital-btt">
      <router-link class="btt-openedit" to="/admin-addcapital"
        ><button type="button" class="btn btn-danger">
          EDIT
        </button></-router-link
      >
      <router-link class="btt-openback" to="/main"
        ><button type="button" class="btn btn-danger">
          BACK
        </button></router-link
      >
      </div-->
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
   .container-capital{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-capital h3{
    margin: 40px 0;
    color: rgba(104, 12, 7, 1);
    font-weight: bold;
    font-size: 35px;
  }
  .capital-name button{
    font-size:20px;
    margin: 0 30px;
    height: 65px;
    width:215px;
    border-radius: 30px;
    color:#FFFFFF;
    background-color:rgba(104, 12, 7, 1);
  }
  .main-capital{
    margin-top: 30px;
    height: 60%;
  }
  .main-capital .capital1{
    display: flex;
    height: 300px;
    justify-content: space-between;
    margin: 20px 0;
  }
  .main-capital .capital1 img {
    width: 50%;
  }
  .main-capital .capital1 .data-capital{
    display: block;
    width: 45%;
    margin: 0 20px;
    margin-top: 40px;
  }
  .main-capital .capital1 .data-capital .main-data
  {
    display: flex;
  }
  .main-capital .capital1 .data-capital h1{
    font-size: 60px;
    padding: 0;
    margin: 0 10px;
  }
  .main-capital .capital1 .data-capital h3{
    font-size: 25px;
  }
  .main-capital .capital1 .data-capital p{
    font-size: 15px;
    color: rgba(135, 18, 12, 1);
    /* background-color:wheat; */
  }
  .btn-capital button{
    font-size:15px;
    margin: 0 20px;
    height: 40px;
    width:130px;
    border-radius: 30px;
    color:#FFFFFF;
  }
  .end-admincapital {
    margin-top: 30px;
  }
  .end-admincapital .back-admincapital{
    text-align: end;
    margin-right: 30px;
  }
  .end-admincapital .back-admincapital button{
    font-size:15px;
    height: 50px;
    width:130px;
    border-radius: 25px 25px 25px 25px;
    color:#FFFFFF;
    background-color:rgba(180, 45, 37, 1);
    margin: 0 10px;
  }
  .end-capital .contract-capital
  {
    text-align: center;
  }
  .end-capital .contract-capital p{
    text-align: center;
  }
  .end-capital .contract-capital i{
    text-align: center;
    margin: 0 12px;
  }
  #editcapital{
    background-color: rgba(37, 120, 180, 1);
  }

</style>