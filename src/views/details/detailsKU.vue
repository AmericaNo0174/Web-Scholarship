<template>
  <div class ='container-details'>
      <div class="Head">
          <p class="h1">ชื่อทุนการศึกษา</p>
          <p class="h5">ทุนฉลองสมโภชพระเจ้าหลานเธอ พระองค์เจ้าทีปังกรรัศมีโชติ</p>
          <div class="img">
              <center><a href="#"><img src="../../assets/KU.svg"></a></center>
            </div>
      </div>
      <!--div-- class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 350px"></textarea>
        <label for="floatingTextarea2">Comments</label>
    </!--div-->
    <div class="txt">
        <p>1.คณะเป็นผู้ดำเนินการคัดเลือกนิสิตตามคุณสมบัติ จำนวน ๒ คน แล้ว ขอให้จัดส่งรายชื่อและใบ
            สมัครไปยังฝ่ายเลขานุการคณะอนุกรรมการ (หน่วยทุนการศึกษา กองกิจการนิสิต วิทยาเขตศรีราชา)<br>
            2.คณะอนุกรรมการจะคัดเลือกโดยการสัมภาษณ์ และ อาจจัดการตรวจเยี่ยมบ้านนิสิตได้<br>
            3.กรณียังไม่ปรากฏผลการเรียนเฉลี่ยสะสมของนิสิต ให้คณะพิจารณาจากผลการเรียนในภาคการ
            ศึกษาที่ผ่านมาเป็นเบื้องตัน หลังจากการสัมภาษณ์คณะกรรมการ จะติดตามผลการเรียนเพื่อนำมาประกอบการพิจารณา
            ต่อไป<br>
        </p>
        <br><br>
    </div>
    
    <div class="btn">     
        <div class="back-contract">      
            <button type="button" class="btn-1">Apply</button>         
            <button type="button" class="btn-2">Back</button>     
        </div>         
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container-details{
    width: 100%;
    height: 100%;
    border: 1px solid red;
}
.Head .h1,.h5{
    text-align: center;
}
.form-floating{
    text-align: center;
}
.txt{
    
    margin-left: 20px;
}
.btn{           
    position: relative;           
    right: 50px;                
    }
 .btn-1{             
     position: relative;             
     font-size: 15px;             
     height: 50px;             
     width: 130px;             
     border-radius: 25px;             
     color:#FFFFFF;             
     background-color:rgb(42, 180, 37);             
     left: 410%;         
     margin: 5px;          
     }  
.btn-2{             
    position: relative;             
    font-size: 15px;             
    height: 50px;             
    width: 130px;            
    border-radius: 25px;             
    color:#FFFFFF;             
    background-color:rgba(180, 45, 37, 1);             
    left: 410%;       
    }

</style>