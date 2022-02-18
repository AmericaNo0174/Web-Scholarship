<template>
  <div class ='container-details'>
      <div class="Head">
          <p class="h1">ชื่อทุนการศึกษา</p>
          <p class="h5">โครงการทุนการศึกษา เครือเจริญโภคภัณฑ์ 2564</p>
          <div class="img">
              <center><a href="#"><img src="../../assets/CP.png"></a></center>
            </div>
      </div>
      <!--div-- class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 350px"></textarea>
        <label for="floatingTextarea2">Comments</label>
    </!--div-->
    <div class="txt">
        <p>ด้วยเครือเจริญโภคภัณฑ์ มีความประสงค์จะสนับสนุนทุนการศึกษาระดับอุดมศึกษา สำหรับนักศึกษาที่มีความประพฤติดี เรียนดี มีความมุ่งมั่น และมีความเป็นผู้นำ<br> 
            แต่ขาดแคลนทุนทรัพย์ ให้มีทุนทรัพย์เพียงพอในการศึกษาจนสำเร็จการศึกษา  ได้กำหนดให้การสนับสนุนทุนการศึกษา มูลค่าทุนละ 30,000 บาทต่อปีการศึกษา<br> 
            เป็นทุนต่อเนื่องจนสำเร็จการศึกษา ให้แก่นักศึกษาที่มีคุณสมบัติ ดังต่อไปนี้<br>
            1. เป็นนักศึกษาระดับปริญญาตรี ในสาขาวิชาที่โครงการทุนการศึกษาฯ กำหนดตามเอกสารแนบ 2<br>
            2. ศึกษาในชั้นปีที่ 2 (สำหรับหลักสูตร 4 ปี) หรือศึกษาในชั้นปีที่ 3 (สำหรับหลักสูตร 5 ปี)<br> 
            3. มีผลการเรียนเฉลี่ยสะสมตั้งแต่ชั้นปีที่ 1 จนถึงชั้นปีล่าสุด ไม่ต่ำกว่า 2.75<br>
            4. เป็นผู้ซึ่งขาดแคลนทุนทรัพย์<br>
            5. มีความประพฤติดี และมีความเป็นผู้นำ<br>
            6. สามารถเข้าร่วมกิจกรรมในโครงการพัฒนาศักย์ภาพตามที่โครงการทุนการศึกษากำหนดได้<br>
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
     left: 320%;         
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
    left: 320%;       
    }

</style>