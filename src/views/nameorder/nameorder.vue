<template>
   <div class="container-nameorder">
    <h2>ประวัติขอทุน</h2>
    <div class="profile">
      <a href="#"><img src="../../assets/profile.svg" alt=""></a>
      <h5>นายกิตติ์ธเนศ ธานี 6230300xxx</h5>
      <h5>วิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ฯ(T12)</h5>
    </div>
    <center>
      <div class="table-nameorder">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ชื่อทุน</th>
              <th scope="col">วัน/เดือน/ปี</th>
              <th scope="col">ทุนการศึกษาที่ได้รับ</th>
              <th scope="col">หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>ทุนการศึกษาประจำปี 2564</td>
              <td>10 เม.ย. 2564</td>
              <td>25,000 บาท</td>
              <td><i class="fas fa-minus"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
    <div class="end-nameorder">
      <router-link class="back-nameorder" to="/main"
        ><button type="button" class="btn btn-danger">Back</button></router-link
      >
      <!-- <div class="back-nameorder">
        <button type="button" class="btn btn-danger">Back</button>
      </div> -->
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
        if(!window.isLogin){
            this.$router.push({name:'Login'})
        }
     }
}
</script>

<style>
.container-nameorder{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-nameorder h2{
    margin-top: 20px;
    color: rgba(104, 12, 7, 1);
    font-weight: bold;
  }
  .profile a img{
    margin-top: 20px;
  }
   .profile h5{
    margin: 20px 0;
    color: rgba(104, 12, 7, 1);
    font-size: 20px;
  }
  .table-nameorder{
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 40vh;
    margin-top: 30px;
  }
  .table-nameorder table{
    width: 80%; 
  }
  .table-nameorder table thead ,tbody{
    text-align: center;
    border: 1px solid black;
  }
   .table-nameorder table thead th{
     font-size: 20px;
      border: 1px solid black;
      padding-block: 10px;
   }
   .table-nameorder table tbody td{
     padding-block: 10px;
      border: 1px solid gray;
   }

  .table-nameorder table thead ,tr,th,td p{
    color: rgba(104, 12, 7, 1);
  }
  .end-nameorder{
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: flex-end;  
    
}
  .back-nameorder button{
  font-size:15px;
  margin-right: 30px;
  height: 50px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(180, 45, 37, 1);
  }
</style>