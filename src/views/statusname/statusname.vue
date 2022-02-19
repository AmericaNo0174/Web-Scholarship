<template>
  <div class="container-statusname">
      <h2>รายชื่อผู้ขอทุน</h2>
      <div class="main-search">
        <div class="col-md-8">
          <div class="search">
            <input type="text" class="form-control" placeholder="ชื่อ/รหัสนิสิต">
            <button class="btn btn-dark"><i class="fa fa-search"></i>Search</button> 
          </div>
        </div>
      </div>
      <center>
        <div class="table-statusname">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ลำดับ</th>
                <th scope="col">รหัสนิสิต</th>
                <th scope="col">ชื่อ-นามสกุล</th>
                <th scope="col">บัตรประชาชน</th>
                <th scope="col">ใบเกรด</th>
                <th scope="col">รับรองรายได้</th>
                <th scope="col">การตรวจสอบเอกสาร</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>6030300114</td>
                <td>Matt</td>
                <td><i class="fas fa-check-circle"></i></td>
                <td><i class="fas fa-check-circle"></i></td>
                <td><i class="fas fa-check-circle"></i></td>
                <td><i class="fas fa-minus"></i></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>6030300362</td>
                <td>Joe</td>
                <td><i class="fas fa-check-circle"></i></td>
                <td><i class="fas fa-minus"></i></td>
                <td><i class="fas fa-minus"></i></td>
                <td><i class="fas fa-minus"></i></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>6030300821</td>
                <td>Rose</td>
                <td><i class="fas fa-times-circle"></i></td>
                <td><i class="fas fa-minus"></i></td>
                <td><i class="fas fa-times-circle"></i></td>
                <td><i class="fas fa-check-circle"></i></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>6030300519</td>
                <td>Jack</td>
                <td><i class="fas fa-times-circle"></i></td>
                <td><i class="fas fa-minus"></i></td>
                <td><i class="fas fa-check-circle"></i></td>
                <td><i class="fas fa-check-circle"></i></td>
              </tr>
            </tbody>
          </table>
          <button class="btn"><i class="fas fa-chevron-left"></i></button>
          <button class="btn"><i class="fas fa-chevron-right"></i></button>
        </div>
      </center>
      <div class="end-statusname">
        <div class="back-statusname">
          <button type="button" class="btn btn-danger">Back</button>
        </div>
        <div class="check-statusname">
          <p><i class="fas fa-check-circle" id="yes"></i>ผ่าน</p>
          <p><i class="fas fa-times-circle" id="no"></i>ไม่ผ่าน/ไม่สมบุรณ์</p>
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
  .container-statusname{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-statusname h2{
    margin-top: 25px;
    color: rgba(104, 12, 7, 1);
  }
  .table-statusname{
    width: 100%;
    margin: 20px;
    height: auto;
    justify-content: center;
    align-items: center;
    
  }
  .main-search{
    margin-top: 25px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .search{
    display: flex;
    height: 40px;
    width: 100%;
  }
  .search button,i{
    display: flex;
    align-items: center;
  }
  .table-statusname{
    margin-top: 20px;
    width: 90%;
    height: 50vh;
    justify-content: center;
    align-items: center;
  /* background-color: black; */
  }
  .table-statusname table{
    width: 80%; 
    margin: 30px;
    padding-block: 30px;
  }
   .table-statusname table td,th,thead,tbody,tr{
     border: 0.5px solid black;
   }
  .table-statusname table thead {
    text-align: center;
  }
  .table-statusname table thead th{
    padding-block: 10px;
    tab-size: 20px;
  }
  .table-statusname table tbody th{
    text-align: left;
    padding-left: 10px;
  }
  .table-statusname table tbody tr,td{
    text-align: center;
  }
  .end-statusname{
    display: flex;
    justify-content: space-between;
    bottom: 1;
    align-items: center;
  }
  .check-statusname {
    display: flex;
    margin-right: 30px;
    align-items: center;
  }
  .check-statusname p,i{
    font-size: 18px;
    display: flex;
    align-items: center;
    margin-left: 30px ;
  }
  .back-statusname button{
    font-size:15px;
    height: 50px;
    width:130px;
    border-radius: 25px 25px 25px 25px;
    color:#FFFFFF;
    background-color:rgba(180, 45, 37, 1);
    margin-left: 30px;
  }
  #yes{
    color: rgba(0, 255, 10, 1);
  }
  #no{
    color: rgba(255, 0, 0, 1);
  }

</style>