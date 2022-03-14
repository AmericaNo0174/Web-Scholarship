<template >
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>detail_tun</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
    </head>
        <body class="container">
            <div class="container mt-5 mb-5" ><h1><b> การรับสมัครทุนการศึกษา เครือเจริญโภคภัณฑ์ ประจำปีการศึกษา 2563 </b></h1></div><br>
              <center><img src="../../assets/CP.svg" alt="" /></center><br><br><br>
                <p>ชื่อโคตรการ</p>
                <p> ด้วยเครือเจริญโภคภัณฑ์ มีความประสงค์จะสนับสนุนทุนการศึกษาเพื่อช่วยเหลือนักศึกษา ที่มีความประพฤติดี เรียนดี มีความเป็นผู้นำ แต่ขาดแคลนทุนทรัพย์ ให้มีทุนทรัพย์เพียงพอจนสำเร็จการศึกษา</p>
                <p>ในปีการศึกษา 2563 ได้ให้การสนับสนุนทุนการศึกษา มูลค่าทุนละ 30,000 บาทต่อปีการศึกษา เป็นทุนต่อเนื่องจนสำเร็จการศึกษา ให้แก่นักศึกษาที่มีคุณสมบัติ ดังต่อไปนี้</p>
                <p>
                1. เป็นนักศึกษาระดับปริญญาตรี ในสาขาวิชาที่กำหนดในเอกสารแนบ<br>
                2. ศึกษาในชั้นปีที่ 2 (สำหรับหลักสูตร 4 ปี) หรือศึกษาในชั้นปีที่ 3 (สำหรับหลักสูตร 5 ปี)<br>
                3. มีผลการเรียนเฉลี่ยสะสมตั้งแต่ชั้นปีที่ 1 จนถึงชั้นปีล่าสุด ไม่ต่ำกว่า 2.75<br>
                4. เป็นผู้ซึ่งขาดแคลนทุนทรัพย์<br>
                5. สามารถเข้ารับการฝึกอบรม เข้าร่วมโครงการพัฒนาศักยภาพ และเข้ารับการฝึกงานได้ตามที่คณะกรรมการกำหนด<br>
                </p>
                <p>
                สำหรับนักศึกษาที่สนใจสมัครให้ดำเนินการกรอกข้อมูลสมัครและแนบไฟล์เอกสารตามขั้นตอนที่เครือเจริญโภคภัณฑ์กำหนด รายละเอียดดังเอกสารที่แนบมาด้วย ตั้งแต่วันนี้ ถึงวันที่ 15 กันยายน พ.ศ.2563<br><br>

                ประกาศทุนการศึกษาเครือเจริญโภคภัณฑ์ 2563<br>

                สาขาประกาศทุนการศึกษาระดับปริญญาตรี 2563<br> </p><br>

                <hr>

                  <div class="container mt-5 mb-3" ><h3 class="h03"><b> เอกสารที่ใช้สมัคร </b></h3></div>
                  <p> สำเนาบัตรประชาชนผู้สมัคร </p>
                  <p> สำเนาทะเบียนบ้านของผู้สมัคร </p>
                  <p> รูปถ่ายนิสิต </p>
                  <p> รูปถ่ายที่พักอาศัยตามภูมิลำเนา </p>
                  <p> ใบรายงานผลการศึกษา </p>
                  <p> เรียงความเล่าประวัติส่วนตัวของตนเองและปัญหาความเดือดร้อน </p>

        <Footer />
        </body>
    </html>    
</template>

<script>
import axios from "axios";
import Footer from "../../components/footer.vue";
export default {
  components: {
    Footer,
  },
  data(){
    return{
      capital_id:null
    }
  },
   mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    // if (!window.isLogin) {
    //   this.$router.push({ name: "Login" });
    // }
    this.show_capital();
   },
   methods:{
     show_capital(){
        this.capital_id = this.$route.params.capital_id
        console.log('capital_id:',this.capital_id);
       this.http
        .post("capital_detail", {
          id_capital: this.capital_id,
        })
         .then((res) => {
          console.log("res:", res.data);
        })
     }
   }
   
}
</script>

<style scoped>
  .h03 {
  color: #680c07;
}
</style>