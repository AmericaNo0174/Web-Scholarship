S<template >
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>กรอกข้อมูลส่วนตัว</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body class="container-from"> 
<!-- หัวข้อ -->
  <div class="container  mt-5 mb-4">
    <h1 id="h01"><b>กรอกข้อมูลสำหรับสมัครขอรับทุนการศึกษา</b></h1>
    <h2 class="h02"><b>ประวัติส่วนตัว</b></h2>
  </div>

  <form class="container mb-4" >
<!-- ชื่อและนามสกุล -->

    <div class="input-group mb-4">
      <span class="boxf input-group-text "> ชื่อและนามสกุล </span>
      <input type="text" aria-label="First name" class="inf form-control" placeholder="กรุณาระบุชื่อ" required>
      <input type="text" aria-label="Last name" class="inf form-control" placeholder="กรุณาระบุนามสกุล" required>
    </div>

  <!-- รหัสนิสิต ชั้นปี -->
    <div class="input-group mb-4">
      <span class="boxf input-group-text"> รหัสประจำตัวนิสิต </span>
      <input type="text"  class="inf form-control" placeholder="กรุณากรอกรหัสนิสิต" required>
      <span class="boxf input-group-text "> ชั้นปีที่ </span>
      <input type="number" class="inf form-control " max="8" min="1" value="1">  
    </div>

  <!-- วันเกิด อายุ -->
    <div class="input-group mb-4">
      <span class="boxf input-group-text"> วันเกิด </span>
      <input type="date" name="date" class="inf form-control" >
      <span class="boxf input-group-text"> อายุ </span>
      <input type="number" name="age" max="100" min="1" class="inf form-control"><span class="boxf input-group-text"> ปี </span>
    </div>

    <div class="input-group mb-4">
      <span class="boxf input-group-text"> รหัสประจำตัวประชาชน </span>
      <input type="text"  class="inf form-control" placeholder="รหัสประจำตัวประชาชน13หลัก" required>
    </div>

    <div class="input-group mb-4">
      <span class="boxf input-group-text"> สัญชาติ </span>
      <input type="text"  class="inf form-control" required>
      <span class="boxf input-group-text"> เชื้อชาติ </span>
      <input type="text"  class="inf form-control" required>
      <span class="boxf input-group-text"> ศาสนา </span>
      <input type="text"  class="inf form-control" required>
    </div>

  <!-- ภาคเรียน -->
    <div class="mb-4">
      <label for="season" class="laf from-label"><b>ภาคเรียน</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label> 
      <div class="form-check form-check-inline" >
        <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="laf form-check-label" for="inlineRadio1"> ภาคปกติ </label>
      </div>
    
      <div class="form-check form-check-inline">
        <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="laf form-check-label" for="inlineRadio2"> ภาคพิเศษ </label>    
      </div>
    </div>

  <!-- คณะ สาขา -->
    <div class="input-group mb-4">
        <span class="boxf input-group-text"> คณะ </span>
        <input type="text"  class="inf form-control" placeholder="ระบุคณะที่เรียน" required>
        <span class="boxf input-group-text"> สาขา </span>
        <input type="text"  class="inf form-control" placeholder="ระบุสาขาที่เรียน" required>
    </div>

  <!-- คะแนนเฉลี่ยสะสม -->
    <div div class="input-group mb-4">
      <span class="boxf input-group-text "> เกรดเฉลี่ยสะสม </span>
      <input type="text" class="inf form-control" required>
      <span class="boxf input-group-text"> อาจารย์ที่ปรึกษา </span>
      <input type="text" class="inf form-control" name="lecture" placeholder="กรุณาระบุชื่ออาจารย์ที่ปรึกษา" required>
    </div>

    <div class="mb-4">
      <label class="laf form-label" for="address"><b> ที่อยู่ปัจจุบัน(สามารถติดต่อได้) </b></label>
      <textarea name="" class="inf form-control"  cols="30" rows="3" placeholder="กรุณาระบุที่อยู่ปัจจุบันของคุณ"></textarea>
    </div>

    <div class= "input-group mb-4">
      <span class="boxf input-group-text "> Email </span> 
      <input type="email" class="inf form-control" name="email" placeholder="example@gmail.com" required>
    </div>
    
    <div class= "input-group mb-5">
      <span class="boxf input-group-text "> เบอร์โทรศัพท์ </span> 
      <input type="tel" class="inf form-control" name="phone" placeholder="กรุณาระบุเบอร์โทรศัพท์ที่ติดต่อได้" required>
    </div>

  <!-- father -->
    <div>
      <h2 class="h02 mb-4 "><b> ประวัติครอบครัว </b></h2>

    <!-- ชื่อนามสกุลบิดา -->
        <div class="input-group mb-4 ">
          <span class="boxf input-group-text "> ชื่อและนามสกุลบิดา </span>
          <input type="text" aria-label="First name" class="inf form-control" placeholder="ชื่อบิดา" required>
          <input type="text" aria-label="Last name" class="inf form-control" placeholder="นามสกุลบิดา" required>

          <span class="boxf input-group-text  "> อายุ </span>
          <input type="number" class="inf form-control" name="age" max="99" min="1" ><span class="boxf input-group-text "> ปี </span>
        </div>

    <!-- สภานภาพบิดา -->
      <div class="mb-4">
        <label label for="season" class="laf from-label"><b> สถานภาพ </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        
        <div class="form-check form-check-inline" >
          <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
          <label class="laf form-check-label" for="inlineRadio1"> ยังมีชีวิต </label>
        </div>
      
        <div class="form-check form-check-inline">
          <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
          <label class="laf form-check-label" for="inlineRadio2"> ถึงแก่กรรรม </label>    
        </div>
      </div>

    <!-- อาชีพ รายได้บิดา -->
      <div div class=" input-group mb-4">
        <span class="boxf input-group-text "> อาชีพ </span>
        <input type="text" class="inf form-control" placeholder="ประกอบอาชีพ" required>
        <span class="boxf input-group-text"> รายได้เดือนละ </span>
        <input type="text" class="inf form-control" name="lecture" placeholder="รายได้ต่อเดือนบิดา" required> <span class="boxf input-group-text"> บาท </span>
      </div>

    <!-- สถานที่ทำงาน -->
      <div div class="input-group mb-4">
        <span class="boxf input-group-text "> สถานที่ทำงาน </span>
        <input type="text" class="inf form-control" placeholder="สถานที่ทำงานบิดา" required>
      </div>  

    <!-- ที่อยู่อาศัยบิดา -->
      <div class="mb-4">
        <label for="laf home" class="laf"><b> ที่อยู่อาศัย </b></label>
        <textarea name="home" class="inf form-control" placeholder="ที่อยุ่อาศัยบิดา" cols="50" rows="3" required></textarea>
      </div>

    <!-- เบอร์โทรศัพท์บิดา -->
      <div class= "input-group mb-4">
        <span class="boxf input-group-text "> เบอร์โทรศัพท์ </span> 
        <input type="tel" class="inf form-control" name="phone" placeholder="เบอร์โทรศัพท์บิดา" required>
      </div>
    </div>

    <!-- mother -->

    <!-- ชื่อนามสกุลบิดา -->
    <div class="input-group mb-4 ">
      <span class="boxf input-group-text "> ชื่อและนามสกุลมารดา </span>
      <input type="text" aria-label="First name" class="inf form-control" placeholder="ชื่อมารดา" required>
      <input type="text" aria-label="Last name" class="inf form-control" placeholder="นามสกุลมารดา" required>

      <span class="boxf input-group-text  "> อายุ </span>
      <input type="number" class="inf form-control" name="age" max="99" min="1" ><span class="boxf input-group-text "> ปี </span>
    </div>

    <!-- สภานภาพมารดา -->
    <div class="mb-4">
      <label for="season" class="laf from-label"><b> สถานภาพ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b> </label>
      
      <div class="form-check form-check-inline" >
        <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="laf form-check-label" for="inlineRadio1"> ยังมีชีวิต </label>
      </div>
      
      <div class="form-check form-check-inline">
        <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="laf form-check-label" for="inlineRadio2"> ถึงแก่กรรรม </label>    
      </div>
    </div>

  <!-- อาชีพ รายได้มารดา -->
    <div div class="input-group mb-4">
      <span class="boxf input-group-text "> อาชีพ </span>
      <input type="text" class="inf form-control" placeholder="ประกอบอาชีพ" required>
      <span class="boxf input-group-text"> รายได้เดือนละ </span>
      <input type="text" class="inf form-control" name="lecture" placeholder="รายได้ต่อเดือนมารดา" required> <span class="boxf input-group-text"> บาท </span>
    </div>

  <!-- สถานที่ทำงาน มารดา -->
    <div div class="input-group mb-4">
      <span class="boxf input-group-text "> สถานที่ทำงาน </span>
      <input type="text" class="inf form-control" placeholder="สถานที่ทำงานมารดา" required>
    </div>  

  <!-- ที่อยู่อาศัยมารดา -->
    <div class="mb-4">
      <label for="home" class="laf"><b> ที่อยู่อาศัย </b></label>
      <textarea name="home" class="inf form-control" placeholder="ที่อยุ่อาศัยมารดา" cols="50" rows="3" required></textarea>
    </div>

  <!-- เบอร์โทรศัพท์มารดา -->
    <div class= "input-group mb-5">
      <span class="boxf input-group-text "> เบอร์โทรศัพท์ </span> 
      <input type="tel" class="inf form-control" name="phone" placeholder="เบอร์โทรศัพท์มารดา" required>
    </div>


  <!-- รายได้ของผู้รับทุน -->
  <div>

    <div class="mb-4">
      <h2 class="h02"><b> รายได้ของผู้รับทุน </b></h2>
    </div>

  <!-- ค่าใ้ชจ่ายผู้รับทุน -->
    <div class="input-group mb-4">
      <span class="boxf input-group-text "> ได้รับค่าใช้จ่ายเดือนละ </span>
      <input type="text" class="inf form-control" placeholder="ค่าใช้จ่ายได้รับต่อเดือน" required><span class="boxf input-group-text "> บาท </span>
    </div>

  <!-- ได้รับเงินเดือนจาก -->
    <div class="input-group mb-4">
      <label for="season" class="laf from-label"><b> ได้รับจาก&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b></label>
      <div class="form-check form-check-inline" >
      <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
      <label class="laf form-check-label" for="inlineRadio1">บิดา </label>
      </div>
    
      <div class="form-check form-check-inline">
      <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
      <label class="laf form-check-label" for="inlineRadio2"> มารดา </label>    
      </div>

      <div class="form-check form-check-inline">
      <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
      <label class="laf form-check-label" for="inlineRadio2"> ผู้อุปการะ </label>    
      </div>
    </div>

  <!-- กรณีผู้อุปการะให้เงิน -->
    <div class="input-group mb-4">
      <span class="boxf input-group-text "> กรณีที่ได้รับจากผู้อุปการะ ผู้อุปการะนั้นเกี่ยวข้องเป็น </span>
      <input type="text" class="inf form-control" placeholder="หากระบุ บิดา มารดา ไม่ต้องระบุช่องนี้">
    </div>  

      <div class="input-group mb-4 ">
      <span class="boxf input-group-text "> ชื่อและนามสกุลผู้อุปการะ </span>
      <input type="text" aria-label="First name" class="inf form-control" placeholder="หากระบุ บิดา มารดา ไม่ต้องระบุช่องนี้">
      <input type="text" aria-label="Last name" class="inf form-control">

      <span class="boxf input-group-text  "> อายุ </span>
      <input type="number" class="inf form-control" name="age" max="99" min="1" ><span class="boxf input-group-text "> ปี </span>
    </div>

  <!-- อาชีพผู้อุปการะ -->
    <div class="input-group mb-4">
      <span class="boxf input-group-text "> มีอาชีพ </span>
      <input type="text" class="inf form-control" placeholder="หากระบุ บิดา มารดา ไม่ต้องระบุช่องนี้">
      <span class="boxf input-group-text "> สถานที่ประกอบอาชีพ </span>
      <input type="text" class="inf form-control" placeholder="หากระบุ บิดา มารดา ไม่ต้องระบุช่องนี้">
    </div>

  <!-- เบอร์ผู้อุปการะ -->
    <div class= "input-group mb-4">
      <span class="boxf input-group-text "> เบอร์โทรศัพท์ </span> 
      <input type="tel" class="inf form-control" name="phone" placeholder="เบอร์โทรศัพท์ผู้อุปการะ หากระบุบิดามารดา ไม่ต้องระบุช่องนี้">
    </div>

  <!-- กู้ยืม -->
    <div class="input-group mb-5">
      <label for="season" class="laf from-label"><b> ปัจุบันท่านได้กู้ยืมเงินกองทุนเงินให้กู้ยืนเพื่อการศึกษาหรือไม่&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b></label>
      <div class="form-check form-check-inline" >
      <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
      <label class="laf form-check-label" for="inlineRadio1"> กยศ.</label>
      </div>
    
      <div class="form-check form-check-inline">
      <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
      <label class="laf form-check-label" for="inlineRadio2"> กรอ. </label>    
      </div>

      <div class="form-check form-check-inline">
      <input class="inf form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option3">
      <label class="laf form-check-label" for="inlineRadio3"> ไม่ได้กู้<div class=""></div> </label>    
      </div>
    </div>
    <!-- btn-next -->
    <div class="bbb">
       <router-link class="btfb" to="/open_capital"
          ><button type="button" class="btn btn-danger">Back</button></router-link
          >
      <router-link class="btf" to="/uploadform"
          ><button type="button" class="btn btn-danger">Next</button></router-link
          >
    </div>
  </div>
  </form>
  <Footer/>
</body>
</html>
  
</template>

<script>
import Footer from '../../components/footer.vue'
export default {
  components:{
    Footer,
  },
   mounted() {
        if(!window.isLogin){
            this.$router.push({name:'Login'})
        }
     }

}
</script>
<style scoped>
.container-from{
    width: 100%;
    
    max-height: 90vh;
    overflow-y:auto;
  }
.container-from h2,h1{
  text-align: center;
  margin: 20px 0;
}
#h01{
  color: #680C07 ;
}
.h02{
  color: #680C07;
}
.boxf{
   color: white;
   font-size: large;
   background-color:#680C07;
   border-color:rgb(219, 209, 209);
   border-radius: 10px; 
}
.laf{
   color: #680C07;
   font-size: large;
}
.inf:hover{
  opacity: 0.7;
}
.inf{
  color: #680C07;
  background-color: #FFECEB;
  border-color:rgb(219, 209, 209);
}
.btf button{
  font-size:15px;
  font-style:Roboto;
  padding:13px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(104, 12, 7, 1);
  float: right;
  position: relative;
 
}
.btfb button{
  font-size:15px;
  font-style:Roboto;
  padding:13px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(180, 45, 37, 1);
  float: right;
  position: relative;

}
.bbb{
  display: flex;
  justify-content: space-between;

}

.bbb:hover{
  opacity: 0.8;
}
</style>>
