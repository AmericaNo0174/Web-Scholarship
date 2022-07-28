<template >
  <!DOCTYPE html>
  <div>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title></title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
    </head>
      <div class="container mt-5 mb-5">
        <h1>
          <b>
            การรับสมัครทุนการศึกษา {{form_capital.name}}
          </b>
        </h1>
      </div>
      <br />
      <center>
      <img :src="form_capital.imageUpload" alt=""/>
      </center>
      <div class=" container mt-5 mb-3">
      <h3 class="hd03 mb-4"><b> รายละเอียดทุน </b></h3>

      <p> <b class="txt-dc" > ประเภททุน&nbsp;&nbsp; : </b> &nbsp;&nbsp; {{form_capital.type}} </p>
      <p> <b class="txt-dc" > ชื่อทุน&nbsp;&nbsp; : </b> &nbsp;&nbsp; {{form_capital.name}} </p>
      <p> <b class="txt-dc" > รายละเอียดของทุน&nbsp;&nbsp; : </b> &nbsp;&nbsp; {{form_capital.details}} </p>
      <p> <b class="txt-dc" > ผู้สนับสนุนทุน&nbsp;&nbsp; : </b> &nbsp;&nbsp; {{form_capital.giver_name}} </p>
      <p> <b class="txt-dc" > เงินทุนที่ได้รับ&nbsp;&nbsp; : </b> &nbsp;&nbsp; {{form_capital.money}} บาท </p>
      <p> <b class="txt-dc" > วันเปิดให้ลงทะเบียน&nbsp;&nbsp; : </b> &nbsp;&nbsp; {{form_capital.date}}</p>
      <p> <b class="txt-dc" > วันปิดให้ลงทะเบียน&nbsp;&nbsp; : </b> &nbsp;&nbsp; {{form_capital.date_end}}</p>
      <br />
      </div>
<div class="container" >
      <hr />
</div>
      <div class="container mt-5 mb-3">
        <h3 class="hd03 mb-4"><b> เอกสารที่ต้องใช้ </b></h3>
      <div v-for="(item, idx) in form_capital.document" :key="idx">
        <p>{{idx+1}}: {{item}}</p>
      </div>
      </div>

      <div class="container mt-5 mb-5" >
      <div class="bdc">
       <router-link class="back-opencapital" to="/open_capital">
        <button type="button" class="btn-dc btn-danger">
              Back
        </button></router-link>
      </div>
      </div>
      <Footer />
    </html>
  </div>
</template>




<script>
import axios from "axios";
import Footer from "../../components/footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      capital_id: null,
      form_capital: [
        {
          imageUpload: null,
          type: null,
          name: null,
          detail: null,
          document: [],
          money: null,
          giver: null,
          date: null,
          date_end: null,
        },
      ],
    };
  },


  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    if (!this.$store.state.login) {
      this.$router.push({ name: "Login" });
    }
    this.show_capital();
  },
  methods: {
    show_capital() {
      this.capital_id = this.$route.params.capital_id;
      console.log("capital_id:", this.capital_id);
      this.http
        .post("capital_detail", {
          id_capital: this.capital_id,
        })
        .then((res) => {
          var self = this;
          self.form_capital = res.data[0];
          console.log("form", self.form_capital);
          self.form_capital.document = JSON.parse(res.data[0].document);
          // Change ArrayBuffer to Base64
          var binary = "";
          var bytes = new Uint8Array(self.form_capital.image.data);
          var len = bytes.byteLength;
          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          self.form_capital.imageUpload = binary;
          console.log(self.form_capital);
        });
    },
  },
};
</script>




<style scoped>
.hd03 {
  color: #680c07;
}

.txt-dc{
  color: #680c07;
}
.btn-dc{
    font-size: 15px;
  font-style: Roboto;
  padding: 13px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(180, 45, 37, 1);
  position: relative;
}
.bdc:hover{
 opacity: 0.8;
}
</style>