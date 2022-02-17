<template>
  <div class ='container-details'>
      <div class="Head">
          <p class="h1">ชื่อทุนการศึกษา</p>
          <p class="h5">รับสมัครทุนการศึกษา ประจำปีการศึกษา 2564</p>
          <br><br>
          <div class="img">
              <center><a href="#"><img src="../../assets/rubtun.svg"></a></center>
            </div>
            <br><br>
      </div>
      <!--div-- class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 350px"></textarea>
        <label for="floatingTextarea2">Comments</label>
    </!--div-->
    <div class="txt">
        <p>คุณสมบัติของนิสิตที่ประสงค์ขอรับทุนการศึกษา<br>
            1.นิสิตระดับปริญญาตรี (เฉพาะบางเขน) ทุกคณะ ทุกชั้นปี<br>
            2.เป็นผู้ที่ขาดแคลนทุนทรัพย์เพื่อใช้จ่ายทางการศึกษา<br>
            3. มีผลการเรียนอยู่ในระดับที่สามารถสำเร็จการศึกษาได้ หรือตามเกณฑ์ที่ทุน
            การศึกษาอื่นๆ ระบุไว้<br>
            4.มีความประพฤติ ไม่เป็นผู้ที่อยู่ระหว่างการลงโทษทางวินัยนิสิต<br>
            5.มีคุณสมบัติอื่นๆตามที่ทุนการศึกษานั้นๆ ระบุ<br>
            6.การพิจารณาคัดเลือก กระทำโดยวิธีการสัมภาษณ์จากคณะกรรมการกลั่น
            กรองคุณสมบัตินิสิตเพื่อรับทุนการศึกษา<br>
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