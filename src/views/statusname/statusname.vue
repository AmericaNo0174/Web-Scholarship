<template>
  <div class="container-statusname">
      <h2>รายชื่อผู้ขอทุน</h2>
      <div class="row height d-flex justify-content-center align-items-center">
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
  </div>
</template>



<script>
export default {

}
</script>




<style >
  .container-statusname{
    width: 99%;
    text-align: center;
    height: 600px;
  }
  .container-statusname h2{
    margin: 20px;
    color: rgba(104, 12, 7, 1);
    
  }
  .table-statusname{
    width: 100%;
    margin: 20px;
    height: auto;
    justify-content: center;
    align-items: center;
    
  }
  .search{
    display: flex;
    height: 40px;
  }
  .search button,i{
    display: flex;
    align-items: center;
  }
  .table-statusname table{
    width: 80%; 
    border: 1px solid black;
    margin: 30px;
    height: auto;
  }
  
  .table-statusname table thead ,tr,th,td{
    text-align: center;
    border: 1px solid black;
  }
  .table-statusname table thead ,tr,th,td p{
    color: rgba(104, 12, 7, 1);
  }
  .end-statusname{
    display: flex;
    justify-content: space-between;
    margin: 150px 0;
    /* border: 1px solid blue; */
    
  }
  .check-statusname {
    display: flex;
  }
  .check-statusname p,i{
    font-size: 18px;
    display: flex;
    margin: 0 20px;
    align-items: center;
  }
  .back-statusname button{
  font-size:15px;
  height: 50px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(180, 45, 37, 1);
  }
  #yes{
    color: rgba(0, 255, 10, 1);
  }
  #no{
    color: rgba(255, 0, 0, 1);
  }

</style>