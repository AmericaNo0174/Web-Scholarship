<template>
  <div class="container-status">
      <div class="profile">
        <a href="#"><img src="../../assets/profile.svg" alt=""></a>
        <h2>สภานะขอทุน</h2>
        <h5>นายกิตติ์ธเนศ ธานี 6230300xxx</h5>
      </div>
      <center>
        <div class="table-status">
          <!-- <table class="table">
            <thead>
              <tr>
                <th scope="col"><p>ทุนที่สมัค</p></th>
                <th scope="col"><p>เอกสาร</p></th>
                <th scope="col"><p>วันสัมภาษณ์</p></th>
                <th scope="col"><p>สัมภาษณ์</p></th>
                <th scope="col"><p>รายละเอียดในการสัมภาษณ์</p></th>
                <th scope="col">ทุนที่สมัค</th>
                <th scope="col">เอกสาร</th>
                <th scope="col">วันสัมภาษณ์</th>
                <th scope="col">สัมภาษณ์</th>
                <th scope="col">รายละเอียดในการสัมภาษณ์</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><p>โครงการทุนการศึกษา</p></th>
                <td><i class="fas fa-check-circle"></i></td>
                <td>15/8/2563</td>
                <td><i class="fas fa-check-circle"></i></td>
                <td><i class="fas fa-mouse-pointer"></i> click</td>
              </tr>
              <tr>
                <th scope="row">ทุนฉลองสมโภชพระเจ้าหลานเธอ</th>
                <td><i class="fas fa-check-circle"></i></td>
                <td>21/9/2563</td>
                <td><i class="fas fa-clock"></i></td>
                <td><i class="fas fa-minus"></i></td>
              </tr>
              <tr>
                <th scope="row">ทุนการศึกษาประจำปีการศึกษา2564</th>
                <td><i class="fas fa-times-circle"></i></td>
                <td>@25/10/2563</td>
                <td><i class="fas fa-times-circle"></i></td>
                <td><i class="fas fa-minus"></i></td>
              </tr>
            </tbody>
          </table> -->
          <table class="table">
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
                <th scope="row"><p>โครงการทุนการศึกษา</p></th>
                <td><i class="fas fa-check-circle"></i></td>
                <td>15/8/2563</td>
                <td><i class="fas fa-check-circle"></i></td>
                <td><i class="fas fa-mouse-pointer"></i> click</td>
              </tr>
              <tr>
                <th scope="row">ทุนฉลองสมโภชพระเจ้าหลานเธอ</th>
                <td><i class="fas fa-check-circle"></i></td>
                <td>21/9/2563</td>
                <td><i class="fas fa-clock"></i></td>
                <td><i class="fas fa-minus"></i></td>
              </tr>
              <tr>
                <th scope="row">ทุนการศึกษาประจำปีการศึกษา2564</th>
                <td><i class="fas fa-times-circle"></i></td>
                <td>@25/10/2563</td>
                <td><i class="fas fa-times-circle"></i></td>
                <td><i class="fas fa-minus"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
      <div>
        <button type="button" class="btn btn-danger">Danger</button>
        <p><i class="fas fa-check-circle"></i> ผ่าน</p>
        <p><i class="fas fa-times-circle"></i> ไม่ผ่าน</p>
        <p><i class="fas fa-clock"></i> รอดำเนินการ</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style >
  .container-status{
    height: 100%;
    width: 100%;
    text-align: center;
  }
  .profile{
    margin: 10px;
  }
  .profile h2,h5{
    margin: 20px;
    color: rgba(104, 12, 7, 1);
  }
  .table-status{
    width: 100%;
    height: auto;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
    
  }
  .table-status table{
    width: 80%; 
    border: 1px solid darkblue;

  }
  
  .table-status table thead ,tr,th,td{
    /* border: 1px solid violet; */
    text-align: center;
    border: 1px solid darkblue;
  }
  .table-status table thead ,tr,th,td p{
    color: rgba(104, 12, 7, 1);
  }
</style>