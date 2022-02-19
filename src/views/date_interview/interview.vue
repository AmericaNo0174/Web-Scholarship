<template>
  <div class="container-interview">
    <h3 style="text-decoration-line:underline;">รายละเอียดวันนัดสัมภาษณ์</h3>
    <center>
      <div class="main-interview">
        <h5>สัมภาษณ์ผ่านช่องทางออนไลน์์ วันพฤหัสที่ 18 / 01 / 2564 เวลา 12.00 น.</h5>
            <h6>สิ่งที่นิสิตควรเตรียมพร้อมก่อนทำการสอบสัมภาษณ์</h6><br/>
           <p> a แต่งกายชุดนิสิตสุภาพ<br/>
            b. กล้องและไมค์โครโฟนพร้อมใช้งานได้<br/>
            c. และอื่นๆ</p>
        <div class="go-interview">
          <button type="button" class="btn btn-danger">ห้องสอบสัมภาษณ์<i class="fas fa-camera-retro"></i></button>
        </div>
      </div>
    </center>
    <div class="back-interview">
     <button type="button" class="btn btn-danger">Back</button>
    </div>
    <Footer/>
</div>
</template>

<script>
import Footer from '../../components/footer.vue';
export default {
  components: {
    Footer,
  }
}
</script>

<style>
  .container-interview{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-interview h3{
    margin: 17px;
    color: rgba(104, 12, 7, 1);
    text-decoration-line:underline;
  }
  .main-interview{ 
    width: 70%;
    box-shadow: 3px 3px 10px black;
    border-radius: 80px;
    overflow: hidden;
    height: 450px;
  }
  .main-interview p{
    width: 90%;
    height: 65%;
  }
  .main-interview .go-interview button{
    font-size:15px;
    height: 50px;
    width:230px;
    border-radius: 25px 25px 25px 25px;
    color:#FFFFFF;
    background-color:rgba(255, 13, 0, 1);
  }
  .main-interview h6{
    font-size: 20px;
    color: rgba(104, 12, 7, 1);
  }
  .main-interview p{
    font-size: 18px;
    /* background-color: aquamarine; */
    text-align: left;
    width: 50%;
    height: 50%;
  }
  .back-interview{
    margin-top: 10px;
  }
  .container-interview .back-interview button{
    position: relative;
    font-size:15px;
    height: 50px;
    width:130px;
    border-radius: 25px 25px 25px 25px;
    color:#FFFFFF;
    background-color:rgba(180, 45, 37, 1);
    left: 40%;
  }
  
</style>