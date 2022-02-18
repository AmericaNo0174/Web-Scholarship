<template>
    <div>
        <center>
        <div class="head">
            <h1>ขั้นตอนการสมัครขอทุนการศึกษา</h1>
        </div> 
        <br><br>
        <div class="ข้อ1"><h3>1. login ด้วยอีเมล KU</h3>
        </div>
        <div class="รูปข้อ1">
        <img alt="Vue logo" src="../../assets/17.png">
        </div>

        <div class="ข้อ2"><h3>2. เปิดเมนู ทุนที่เปิดให้ลงทะเบียน</h3>
        <br><p1><h5 >-เลือกรับทุนที่เปิดให้สมัครรับทุนการศึกษา-</h5></p1><br>
        </div>

        <div class="รูปข้อ21">
        <img alt="Vue logo" src="../../assets/21.png">
        
        </div>
        <div class="รูปข้อ22">
        <img alt="Vue logo" src="../../assets/22.png">
        </div>

        <div class="ข้อ3"><h3>3.กรอกข้อมูลในการสมัครรับทุน</h3>
        <br><p1><h5> -กรอกข้อมูลสำหรับสมัครขอรับทุนและอัพโหลดเอกสารให้ครบ แล้วกดบันทึก-</h5></p1><br>
        </div>
        <div class="รูปข้อ3">
        <img alt="Vue logo" src="../../assets/31.png">
        <img alt="Vue logo" src="../../assets/32.png">
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div class="contract">
        <img alt="contract" src="../../assets/contract.png">
        </div>
        </center>
        
        <button class="Black">Black</button>
    
    </div>   
</template>

<script>
export default {

  }

</script>

<style type="text/css">


    body{
        font-family: system-ui,-apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,sans-serif;
        font-size: 14px;
    }
    .pic_preview{height:auto;padding-bottom:100%;background-size:cover;background-position:center;}
    .price{font-size: 18px;font-weight: 500;color: #f57224;}
    .cus-icon:before {
        width: 30px;
        height: 30px;
    }   

    .l-sidenav {
        position: fixed; 
        z-index: 1040; 
        top: 0; 
        left: 0;    
        height: 100%; 
        width: 0; 
        overflow-x: hidden; 
    }   

    .page-overlay-bg{
        position: absolute;
        z-index: 1040;
        width: 0;
        height: 100%;
        background-color: rgba(0,0,0,0.4);  
    }   
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
    

.Black {
    background-color:#b42c25;
    border-radius:28px;
    border:1px solid #b42c25;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:17px;
    padding:17px 42px;
    text-decoration:none;

}

.Black:active {
    position:relative;
    top:1px;
}
.Black{
  padding: 10px 20px;
  float : right;
}

.head{
  color: #8B0000;
}
.ข้อ1{
  max-width: 1110px;
  min-height: 50px;
  color: #8B0000;
}

.รูปข้อ1{

  height : 550px;
}

.ข้อ2{
  max-width: 1110px;
  color: #8B0000;
  
}
.รูปข้อ21{
  height : 800px;
}
.รูปข้อ22{
  height : 400px;
}

.ข้อ3{
  max-width: 1110px;
  color: #8B0000;
}

.รูปข้อ3{
  height : 550px;
}

.contract{
 
  max-width: 100%;
  height: auto !important;
}


</style>