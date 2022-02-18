<template>
  <div class="container-statusinterview">
    <h2>รายชื่อผู้มีสิททธิ์สัมภาษณ์</h2>
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-md-8">
          <div class="search">
            <input type="text" class="form-control" placeholder="ชื่อ/รหัสนิสิต">
            <button class="btn btn-dark"><i class="fa fa-search"></i>Search</button> 
          </div>
        </div>
      </div>
      <center>
        <div class="table-statusinterview">
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
                <th scope="row">5</th>
                <th>.</th>
                <th>.</th>
                <td>.</td>
                <td>.</td>
                <td>.</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <th>.</th>
                <th>.</th>
                <td>.</td>
                <td>.</td>
                <td>.</td>
              </tr>
            </tbody>
        </table>
        </div>
    <button class="btn"><i class="fas fa-chevron-left"></i></button>
    <button class="btn"><i class="fas fa-chevron-right"></i></button>
    </center>
    <div class="end-statusinterview">
        <div class="back-statusinterview">
          <button type="button" class="btn btn-danger">Back</button>
        </div>
    </div>
</div>
</template>


<script>
export default {

}
</script>



<style >
  .container-statusinterview{
    width: 99%;
    text-align: center;
    height: auto;
  }
  .container-statusinterview h2{
    margin: 20px;
    color: rgba(104, 12, 7, 1);
  }
  .search{
    display: flex;
    height: 40px;
  }
  .search button,i{
    display: flex;
    align-items: center;
  }
  .table-statusinterview{
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
  
  }

  .table-statusinterview table{
    width: 80%; 
    margin: 30px;
    height: 30px;
    border: 2px solid brown;
  }
   .table-statusinterview table td,th,thead,tbody{
     border: 1px solid black;
   }
  /* .table-statusinterview table thead {
    text-align: center;

  }
  .table-statusinterview table tbody th{
    text-align: left;
    border: 1px solid rebeccapurple ;
  }
  .table-statusinterview table tbody tr,td{
    text-align: center;
    border: 1px solid  red ;
  } */
  .end-statusinterview{
    display: flex;
    justify-content: space-between;
    bottom: 1;
    margin: 32px 0;
  }
  .check-statusinterview {
    display: flex;
  }
  .check-statusinterview p,i{
    font-size: 18px;
    display: flex;
    margin: 0 20px;
  }
  .back-statusinterview button{
    font-size:15px;
    height: 50px;
    width:130px;
    border-radius: 25px 25px 25px 25px;
    color:#FFFFFF;
    background-color:rgba(180, 45, 37, 1);
    }
 
</style>