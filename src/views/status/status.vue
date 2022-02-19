<template>
  <div class="container-status">
    <div class="profile">
      <a href="#"><img src="../../assets/profile.svg" alt=""></a>
      <h2>สภานะขอทุน</h2>
      <h5>นายกิตติ์ธเนศ ธานี 6230300xxx</h5>
    </div>
    <center>
      <div class="table-status">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">ทุนที่สมัค</th>
              <th scope="col">เอกสาร</th>
              <th scope="col">วันสัมภาษณ์</th>
              <th scope="col">สัมภาษณ์</th>
              <th scope="col">รายละเอียดในการสัมภาษณ์</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">โครงการทุนการศึกษา</td>
              <td><i class="fas fa-check-circle"></i></td>
              <td>15/8/2563</td>
              <td><i class="fas fa-check-circle"></i></td>
              <td><i class="fas fa-mouse-pointer"></i> click</td>
            </tr>
            <tr>
              <td scope="row">ทุนฉลองสมโภชพระเจ้าหลานเธอ</td>
              <td><i class="fas fa-check-circle"></i></td>
              <td>21/9/2563</td>
              <td><i class="fas fa-clock"></i></td>
              <td><i class="fas fa-minus"></i></td>
            </tr>
            <tr>
              <td scope="row">ทุนการศึกษาประจำปีการศึกษา2564</td>
              <td><i class="fas fa-times-circle"></i></td>
              <td>@25/10/2563</td>
              <td><i class="fas fa-times-circle"></i></td>
              <td><i class="fas fa-minus"></i></td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </center>
    <div class="end-status">
      <div class="back-status">
        <button type="button" class="btn btn-danger">Back</button>
      </div>
      <div class="check-status">
        <p><i class="fas fa-check-circle" id="yes"></i>ผ่าน</p>
        <p><i class="fas fa-times-circle" id="no"></i>ไม่ผ่าน</p>
        <p><i class="fas fa-clock" id="load"></i>รอดำเนินการ</p>
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

<style >
  .container-status{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .profile a img{
    margin-top: 25px;
  }
  .profile h2,h5{
    margin: 18px 0;
    color: rgba(104, 12, 7, 1);
    font-weight: bold;
  }
  .table-status{
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 40vh;
    /* background-color: darkblue; */

  }
  .table-status table{
    width: 80%; 
    /* border: 1px solid black; */
  }
  
  .table-status table thead ,tbody{
    text-align: center;
    border: 1px solid black;
  }
   .table-status table thead th{
     font-size: 20px;
      border: 1px solid black;
      padding-block: 10px;
   }
   .table-status table tbody td{
     padding-block: 10px;
      border: 1px solid gray;
   }

  .table-status table thead ,tr,th,td p{
    color: rgba(104, 12, 7, 1);
  }
  .end-status{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    /* border: 1px solid black; */
    align-items: center;
  }
  .check-status {
    display: flex;
  }
  .check-status p,i{
    font-size: 18px;
    display: flex;
    margin: 0 20px;
  }
  .back-status button{
  font-size:15px;
  margin-left: 20px;
  height: 50px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(180, 45, 37, 1);
  }

  #yes{
    color: rgba(0, 255, 10, 1);
  }
  #load{
    color: rgba(250, 255, 0, 1);
  }
  #no{
    color: rgba(255, 0, 0, 1);
  }

</style>