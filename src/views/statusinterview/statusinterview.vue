<template>
  <div class="container-statusinterview">
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
                <td><i class="fas fa-minus"></i></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <th>6030300249</th>
                <th>Thornton</th>
                <td>T08</td>
                <td>aaa</td>
                <td><i class="fas fa-minus"></i></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <th>6030300185</th>
                <th>the Bird</th>
                <td>T12</td>
                <td>sss</td>
                <td><i class="fas fa-minus"></i></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <th>6030300429</th>
                <th>Fin</th>
                <td>T05</td>
                <td>sss</td>
                <td><i class="fas fa-minus"></i></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <th>6030300429</th>
                <th>Fin</th>
                <td>T05</td>
                <td>sss</td>
                <td><i class="fas fa-minus"></i></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <th>6030300429</th>
                <th>Fin</th>
                <td>T05</td>
                <td>sss</td>
                <td><i class="fas fa-minus"></i></td>
              </tr>
            </tbody>
          </table>
          <button class="btn"><i class="fas fa-chevron-left"></i></button>
          <button class="btn"><i class="fas fa-chevron-right"></i></button>
        </div>
      </center>
    <div class="end-statusinterview">
        <!-- <div class="back-statusinterview">
          <button type="button" class="btn btn-danger">Back</button>
        </div> -->
        <router-link class="back-statusinterview" to="/open_capital"
        ><button type="button" class="btn btn-danger">Back</button></router-link
        >
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

<style >
  .container-statusinterview{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-statusinterview h2{
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
  .table-statusinterview{
    margin-top: 20px;
    width: 90%;
    height: 50vh;
    justify-content: center;
    align-items: center;
  /* background-color: black; */
  }
  .table-statusinterview table{
    width: 80%; 
    margin: 30px;
    padding-block: 30px;
  }
   .table-statusinterview table td,th,thead,tbody,tr{
     border: 0.5px solid black;
   }
  .table-statusinterview table thead {
    text-align: center;
  }
  .table-statusinterview table thead th{
    padding-block: 10px;
    tab-size: 20px;
  }
  .table-statusinterview table tbody th{
    text-align: left;
    padding-left: 10px;
    border: 0.5px solid black;
  }
  .table-statusinterview table tbody tr,td{
    text-align: center;
  }
  .table-statusinterview .table button{
    color: rgba(255, 0, 0, 1);
  }
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
  align-items: center;
  }
  .back-statusinterview button{
    font-size:15px;
    height: 50px;
    width:130px;
    border-radius: 25px 25px 25px 25px;
    color:#FFFFFF;
    background-color:rgba(180, 45, 37, 1);
    margin-left: 30px;
    }
 
</style>