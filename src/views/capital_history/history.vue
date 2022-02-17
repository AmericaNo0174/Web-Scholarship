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
                <td scope="row">1</td>
                <td>623030XXXX</td>
                <td >นายกิตติ์ธเนศ ธานี</td>
                <td>ทุนเรียนดี</td>
                <td>ทุนเรียนดีก็เรียนฟรีไปเลยสิจ๊ะ</td>
                <td>15/08/2554</td>
                <td>25,000 บาท</td>
                <td>-</td>
              </tr>
              <tr>
                <td scope="row">2</td>
                <td>623030XXXX</td>
                <td>นายนพวัสสต์ กาญจนนินทร์</td>
                <td>ทุนเรียนเด็กขยัน</td>
                <td>ทุนเด็กมีพรสวรรค์</td>
                <td>18/08/2544</td>
                <td>100,000 บาท</td>
                <td>-</td>
              </tr>
              <tr>
                <td scope="row">3</td>
                <td>623030XXXX</td>
                <td>นายชม พู</td>
                <td>ทุนเรียนดี</td>
                <td>ทุนฉลองสมโภชพระเจ้าหลานเธอ</td>
                <td>12/08/2554</td>
                <td>15,000 บาท</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
      <div class="end-history">
        <div class="back-status">
          <button type="button" class="btn btn-danger">Back</button>
        </div>
        <div class="sum-history">
          <p><i class="fas fa-coins"></i>ยอดเงินรวมทั้งสิน</p>
          <p type="output">20000 บาท</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .container-history{
    width: 99%;
    text-align: center;
    /* border: 1px solid red; */
    height: 600px;
  }
  .container-history h3{
    margin: 10px;
    color: rgba(104, 12, 7, 1);
  }
  .container-history label b{
    color:rgba(104, 12, 7, 1);
  }
  .container-history form{
    width: 100%;
    margin:30px auto;
    /* border: 1px solid blue;
     */
  }
  .container-history #ID,#Type,#Name,#Year{
    margin: 10px auto;
    align-items: center;
    justify-content: center;
    /* border: 1px solid hotpink; */
  }
  .container-history form .button-search{
    display: flex;
    width: 120px;
    /* border: 1px solid darkcyan; */
    height: 50px;
  }
  .table-history{
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    
  }
  .table-history table{
    width: 90%; 
    /* border: 1px solid black; */
    margin: 0%;
    height: auto;
  }
  
  .table-history table thead ,tbody{
    text-align: center;
    /* border: 1px solid black; */
  }
   .table-history table thead th{
      font-size: 20px;
      /* border: 1px solid black; */
      padding-block: 10px;
   }
   .table-history table tbody td{
      padding-block: 10px;
      /* border: 1px solid gray; */
   }

  .table-history table thead ,tr,th,td p{
    color: rgba(104, 12, 7, 1);
  }
  .end-history{
    display: flex;
    justify-content: space-between;
    margin: 220px 0;
    /* border: 1px solid gold; */
  
  }
  .sum-history{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 236, 235, 1);
    border-radius: 25px 25px 25px 25px;
    width: 300px;
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
  }
  
</style>