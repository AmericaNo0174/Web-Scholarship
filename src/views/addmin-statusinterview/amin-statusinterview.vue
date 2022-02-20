<template>
  <div class="container-adminstatusinterview">
    <h2>รายชื่อผู้มีสิททธิ์สัมภาษณ์</h2>
      <div class="main-search">
        <div class="col-md-8">
          <div class="search">
            <input type="text" class="form-control" placeholder="ชื่อ/รหัสนิสิต">
            <button class="btn btn-dark"><i class="fa fa-search"></i>Search</button> 
          </div>
        </div>
      </div>
      <center>
        <div class="table-adminstatusinterview">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">รหัสนิสิต</th>
                <th scope="col">ชื่อ-นามสกุล</th>
                <th scope="col">สาขา</th>
                <th scope="col">ทุนที่ได้รับ</th>
                <th scope="col">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <th>603030072</th>
                <th>Otto</th>
                <td>T12</td>
                <td>mmm</td>
                <button class="btn"><i class="fas fa-video"></i></button>
              </tr>
              <tr>
                <th scope="row">2</th>
                <th>6030300249</th>
                <th>Thornton</th>
                <td>T08</td>
                <td>aaa</td>
                <button class="btn"><i class="fas fa-video"></i></button>
              </tr>
              <tr>
                <th scope="row">3</th>
                <th>6030300185</th>
                <th>the Bird</th>
                <td>T12</td>
                <td>sss</td>
                <button class="btn"><i class="fas fa-video"></i></button>
              </tr>
              <tr>
                <th scope="row">4</th>
                <th>6030300429</th>
                <th>Fin</th>
                <td>T05</td>
                <td>sss</td>
                <button class="btn"><i class="fas fa-video"></i></button>
              </tr>
              <tr>
                <th scope="row">4</th>
                <th>6030300429</th>
                <th>Fin</th>
                <td>T05</td>
                <td>sss</td>
                <button class="btn"><i class="fas fa-video"></i></button>
              </tr>
              <tr>
                <th scope="row">4</th>
                <th>6030300429</th>
                <th>Fin</th>
                <td>T05</td>
                <td>sss</td>
                <button class="btn"><i class="fas fa-video"></i></button>
              </tr>
            </tbody>
          </table>
          <button class="btn"><i class="fas fa-chevron-left"></i></button>
          <button class="btn"><i class="fas fa-chevron-right"></i></button>
        </div>
      </center>
    <div class="end-adminstatusinterview">
        <div class="back-adminstatusinterview">
          <button type="button" class="btn btn-danger">Back</button>
        </div>
    </div>
    <Footer/>
</div>
</template>









<style >
  .container-adminstatusinterview{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-adminstatusinterview h2{
    margin-top: 25px;
    color: rgba(104, 12, 7, 1);
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
  .table-adminstatusinterview{
    margin-top: 20px;
    width: 90%;
    height: 50vh;
    justify-content: center;
    align-items: center;
  /* background-color: black; */
  }
  .table-adminstatusinterview table{
    width: 80%; 
    margin: 30px;
    padding-block: 30px;
  }
   .table-adminstatusinterview table td,th,thead,tbody,tr{
     border: 0.5px solid black;
   }
  .table-adminstatusinterview table thead {
    text-align: center;
  }
  .table-adminstatusinterview table thead th{
    padding-block: 10px;
    tab-size: 20px;
  }
  .table-adminstatusinterview table tbody th{
    text-align: left;
    padding-left: 10px;
  }
  .table-adminstatusinterview table tbody tr,td{
    text-align: center;
  }
  .end-adminstatusinterview{
    display: flex;
    justify-content: space-between;
    bottom: 1;
    margin: 32px 0;
  }
  .check-adminstatusinterview {
    display: flex;
  }
  .check-adminstatusinterview p,i{
    font-size: 18px;
    display: flex;
  align-items: center;
  }
  .back-adminstatusinterview button{
    font-size:15px;
    height: 50px;
    width:130px;
    border-radius: 25px 25px 25px 25px;
    color:#FFFFFF;
    background-color:rgba(180, 45, 37, 1);
    margin-left: 30px;
    }
 
</style>


