<template>
  <div class="container-history">
    <h3>ประวัติรายชื่อผู้ได้รับทุน</h3>
    <form class="row row-cols-lg-auto g-2 align-items-center">
        <div class="row" id="ID">
          <label class="col-6 col-sm-4 col-form-label" style="width:90px"><b>รหัสนิสิต</b></label>
          <div class="col-sm-8" style="width:150px">
            <input type="text" class="form-control" placeholder="623030XXXX">
          </div>
        </div>
      <div class="row" id="Type">
        <label class="col-6 col-sm-4 col-form-label" style="width:110px"><b>ประเภททุน</b></label>
        <div class="row col-8">
          <select class="form-select" style="width:150px">
            <option selected >ทั้งหมด</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row " id="Name">
        <label class="col-6 col-sm-4 col-form-label" style="width:90px"><b>ชื่อทุน</b></label>
        <div class="row col-8">
          <input list="datalistOptions"  style="width:150px" placeholder="ทั้งหมด">
          <datalist id="datalistOptions">
            <option value="San Francisco"></option>
            <option value="New York"></option>
            <option value="Seattle"></option>
            <option value="Los Angeles"></option>
            <option value="Chicago"></option>
          </datalist>
        </div>
      </div>
      <div class="row" id="Year">
       <label class="col-6 col-sm-4 col-form-label " style="width:120px"><b>ปีการศึกษา</b></label>
        <div class="row col-6">
          <select class="form-select" style="width:150px" >
            <option selected>ทั้งหมด</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row col-12">
        <button  class="button-search btn-danger">ค้นหา<i class="fas fa-search"></i></button>
      </div>
    </form>
     <center>
        <div class="table-history">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">รหัสนิสิต</th>
                <th scope="col" class="tb-name">ชื่อ-นามสกุล</th>
                <th scope="col">ประเภททุน</th>
                <th scope="col">ชื่อทุน</th>
                <th scope="col">วัน/เดือน/ปี</th>
                <th scope="col">ทุนการศึกษาที่ได้รับ</th>
                <th scope="col">หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <th>623030XXXX</th>
                <th >นายกิตติ์ธเนศ ธานี</th>
                <th>ทุนเรียนดี</th>
                <th>ทุนเรียนดีก็เรียนฟรีไปเลยสิจ๊ะ</th>
                <td>15/08/2554</td>
                <td>25,000 บาท</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <th>623030XXXX</th>
                <th>นายนพวัสสต์ กาญจนนินทร์</th>
                <th>ทุนเรียนเด็กขยัน</th>
                <th>ทุนเด็กมีพรสวรรค์</th>
                <td>18/08/2544</td>
                <td>100,000 บาท</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <th>623030XXXX</th>
                <th>นายชม พู</th>
                <th>ทุนเรียนดี</th>
                <th>ทุนฉลองสมโภชพระเจ้าหลานเธอ</th>
                <td>12/08/2554</td>
                <td>15,000 บาท</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
      <div class="end-history">
        <router-link class="back-status" to="/main"
        ><button type="button" class="btn btn-danger">Back</button></router-link
        >
        <!-- <div class="back-status">
          <button type="button" class="btn btn-danger">Back</button>
        </div> -->
        <div class="sum-history">
          <p><i class="fas fa-coins"></i>ยอดเงินรวมทั้งสิน</p>
          <p type="output">20000 บาท</p>
        </div>
      </div>
    <div class="Footer-history">
      <Footer/>
    </div>
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
  .container-history{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-history h3{
    margin-top: 20px;
    font-weight: bold;
    color: rgba(104, 12, 7, 1);
  }
  .container-history label b{
    color:rgba(104, 12, 7, 1);
  }
  .container-history form{
    width: 97%;
    margin:25px auto;
    /* border: 1px solid blue; */
   
  }
  .container-history #ID,#Type,#Name,#Year{
    margin: 10px auto;
    align-items: center;
    justify-content: center;
  }
  .container-history form .button-search{
    display: flex;
    width: 120px;
    align-items: center;
    height: 50px;
  }
  .table-history{
    margin-top: 20px;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
  }
  .table-history table{
    width: 90%; 
    height: auto;
  }
    .table-history table thead {
    text-align: center;
     font-size: 20px;
    padding-block: 10px;

  }
  .table-history table tbody th{
    text-align: left;
    padding-block: 10px;
    padding-left: 10px;
    border: 0.5px solid black;
  }
  .table-history table tbody tr,td{
    text-align: center;
    padding-block: 10px;
    border: 0.5px solid black;
  } 
  .table-history table thead ,tr,th,td p{
    color: rgba(104, 12, 7, 1);
  } 
  .end-history{
    display: flex;
    justify-content: space-between;
    margin-top: 177px;
  }
  .sum-history{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 236, 235, 1);
    border-radius: 25px 25px 25px 25px;
    width: 300px;
    margin-right: 30px;
  }
  .sum-history p,i{
     /* border: 1px solid olivedrab; */
     margin: 0 5px;

  }
  .back-status button{
  font-size:15px;
  height: 50px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(180, 45, 37, 1);
  margin-left: 30px;
  }
  .Footer-history{
    margin-top: 48px;
  }
  
</style>