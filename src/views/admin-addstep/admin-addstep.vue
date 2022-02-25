<template>
  <div class="container-addstep">
    <h2>ขั้นตอนการสมัครขอทุน</h2>
    <center>
      <div class="addstep">
        <div class="add-step">
          <div class="add-text">
            <label for="fname">ขั้นตอนที่: </label>
            <input type="text">     
          </div>  
          <div class="add-addsteptext">
            <label for="fname">รายละเอียด: </label>
            <input type="text">     
          </div>      
          <div class="input-group">
            <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
            <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">บันทึก</button>
          </div>
          <div class="add-addstepbutton">
            <button id="save-add" type="button" class="btn btn-danger">แก้ไข</button>
            <button id="delete-add" type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i>ลบทิ้ง</button>
          </div>
        </div>
        <div class="left-position">
          <button id="add" type="button" class="btn btn-dark">เพิ่ม</button>
        </div>
      </div>
      <div class="back-addstep">
        <button id="cancle" type="button" class="btn btn-danger">CANCLE</button>
        <button id="save" type="button" class="btn btn-danger">SAVE</button>
      </div>
    </center>
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

<style>
  .container-addstep{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-addstep h2{
    margin: 30px 0;
    color: rgba(104, 12, 7, 1);
    font-weight: bold;
  }
  .container-addstep .addstep{
    width: 80%;
    height: 60vh;
  }
  .addstep .add-step1 .input-addstepgroup,.add-addsteptext,.add-addstepbutton{
    margin: 30px 0;
  }
  .add-addsteptext{
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  .add-addsteptext input{
    margin: 0 20px;
  }
  .add-addstepbutton{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .add-addstepbutton button{
    margin: 0 20px;
    font-size:20px;
    height: 40px;
    width:130px;
    border-radius: 30px;
    color:#FFFFFF;
  }
    .left-position{
    text-align: start;
  }
  .back-addstep{
    text-align: end;
    margin: 20px 0;
  }
  .back-addstep button{
  font-size:15px;
  height: 50px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  margin-right: 40px;
  }
  #save-addstep{
    background-color: rgba(36, 255, 0, 1);
  }
  #delete-addstep{
    background-color: rgba(255, 0, 0, 1);
  }
</style>