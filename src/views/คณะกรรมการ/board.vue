<template>

  <div align="center" ><h1>เกณฑ์การให้คะเเนน</h1></div>
    <h2><br>หัวข้อในการให้คะเเนน</h2>
    <div class="box">
        <div class="item">
            <div class="content">
                <p class="text">การตอบคำถาม</p></label><input type="text" name="score" maxlength="2" class="score">/30<img class="img" src="delete.svg" >
            </div>
        </div>
        <div class="item">
            <div class="content">
                <p class="text">ความจำเป็น,เหตุผล</p><input type="text" name="score" maxlength="2" class="score">/20<img class="img" src="delete.svg" >
            </div>
        </div>
        <div class="item">
            <div class="content">
                <input type="text" name="add" size="15" class="textadd" style="border:none" ><input type="text" name="score" maxlength="2" class="score">/20
                <img class="img" src="add.svg" >
            </div>
        </div>
    </div>

    <div align="center"><br><h3>รายละเอียด</h3></div><input class="detail" type="text" name="ip-detail">
    <div>
        <button class="save">บันทึก</button>
    </div>
    <div>
        <button class="Back">BACK</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .box{
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        padding:10px;
        
        

    }

    .item{
        display: block;
        box-sizing: border-box;
        width: 80%;
        margin-bottom: 20px;
        
        
    }

    .content{
        background-color: #C4C4C4;
        border: 1px ;
        display: flex;
        border-radius:20px;
        padding: 15px;
        
        

        
    }

    .score{
        display:flex;   
        margin:1px 0 0 45%;
        border-radius:10px;
        padding:5px;
        max-width: 30px;
        border:1px solid #C4C4C4;
        font-size: 16px;
        position: relative;
        bottom: 6px; 
        
        
    }
        
    .text{
        width: 150px;
        font-size: 18px;
        margin: 0%;
    }
        
    .textadd{
        border-radius:10px;
    }
        
    .img{
        margin: 1px 0 0 30% ;
    }
 

    .detail{
        display:block;
        background-color: #C4C4C4;
        overflow:auto;
        border-radius:15px;
        margin:1px auto;
        width: 1350px;
        height: 200px;
        border: none;
    
}

    .save{
        padding: 10px 30px;
        border-radius:15px;
        margin:20px 0 0 47%;
        background-color: #17C03C;
        border: none;

    }
    .Back{
        padding: 10px 30px;
        border-radius:15px;
        margin:100px;
        float : right;  
        border: none;
        background-color: #B42D25;
            
    }

</style>