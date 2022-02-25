<template>
  <div class="container-adminstatusinterview">
    <h2>รายชื่อผู้มีสิททธิ์สัมภาษณ์</h2>
      <div class="main-searchadminstatusinterview">
        <div class="col-md-8">
          <div class="searchadminstatusinterview">
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
            </tbody>
          </table>
          <div class="l-r">
            <button class="btn"><i class="fas fa-chevron-left"></i></button>
            <button class="btn"><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </center>
      <div class="button-adminstatusinterview">
          <button type="button" class="btn btn-danger">Back</button>
          <button id="save" type="button" class="btn btn-danger">Save</button>
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
  .main-searchadminstatusinterview{
    margin-top: 25px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .searchadminstatusinterview{
    display: flex;
    height: 40px;
    width: 100%;
  }
  .searchadminstatusinterview button,i{
    display: flex;
    align-items: center;
  }
  .table-adminstatusinterview{
    margin-top: 20px;
    width: 90%;
    height: 50vh;
    justify-content: center;
    align-items: center;
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
  
  .button-adminstatusinterview{
   display: flex;
   justify-content: space-between;
  margin: 10px 0;   
  }
.button-adminstatusinterview button{
    margin: 0 30px;
    font-size:15px;
    height: 50px;
    width:130px;
    border-radius: 25px 25px 25px 25px;
    color:#FFFFFF;
}
#save{
  background-color: rgba(8, 186, 36, 1);
}
</style>


