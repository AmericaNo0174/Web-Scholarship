<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Uploadform</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body class="container-upload">
      <div class="upload container mt-5 mb-5 hup">
        <h1 class="hfup" ><b>อัพโหลดเอกสาร</b></h1>
        </div>
      
      <form class="upload container mb-5"> 

        <div class="mb-4">
          <label for="formFile" class="lup form-label"><b> สำเนาบัตรประชาชนผู้สมัคร </b></label>
          <input class="upf form-control" type="file" id="formFile">
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup  form-label"><b> สำเนาทะเบียนบ้านของผู้สมัคร </b></label>
          <input class="upf form-control" type="file" id="formFile">
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup form-label"><b> รูปถ่ายนิสิต </b></label>
          <input class="upf form-control" type="file" id="formFile">
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup form-label"><b> รูปถ่ายที่พักอาศัยตามภูมิลำเนา </b></label>
          <input class="upf form-control" type="file" id="formFile">
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup form-label"><b> ใบรายงานผลการศึกษา </b></label>
          <input class="upf form-control" type="file" id="formFile">
        </div>

        <div class="mb-4">
          <label class="lup  form-label" for="address"><b> เรียงความเล่าประวัติส่วนตัวของตนเองและปัญหาความเดือดร้อน </b></label>
          <textarea name="" class="upf form-control"  cols="5" rows="35" placeholder="กรอกเรียงความประวัติของนิสิต"></textarea>
        </div>

        <div class="bbbup">
          <router-link class="btfback" to="/form"
          ><button type="button" class="btn btn-danger">Back</button></router-link
          >
           <router-link class="btfup" to=""
          ><button type="button" class="btn btn-danger">Save</button></router-link
          >
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
.container-upload{
  width: 100%;
  max-height: 90vh;
  overflow-y:auto;
}
.container-upload h1{
  text-align: center;
}
.upload .mb-4 label{
  margin: 20px 0;
}
.hfup{
  color: #680C07 ;
}
.lup{
  color: #680C07;
  font-size: large;
}
.upf{
    color: #680C07;
  background-color: #FFECEB;
  border-color:rgb(219, 209, 209);
}
.upf:hover{
    opacity: 0.7;
}
.bbbup{
  display: flex;
  justify-content: space-between;
  margin: 50px 20px 0;

}
.bbbup:hover{
  opacity: 0.8;
}
.bbbup .btfback button{
   font-size:15px;
  font-style:Roboto;
  padding:13px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(180, 45, 37, 1);
  float: right;

}
.bbbup .btfup button{
  font-size:15px;
  font-style:Roboto;
  padding:13px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(37, 180, 51, 1);
  float: right;

}
</style>

