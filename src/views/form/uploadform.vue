<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Uploadform</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
    </head>
    <body class="container-upload">
      <div class="upload container mt-5 mb-5 hup">
        <h1 class="hfup"><b>อัพโหลดเอกสาร</b></h1>
      </div>

      <form class="upload container mb-5">
        <div class="mb-4">
          <label for="formFile" class="lup form-label"
            ><b> สำเนาบัตรประชาชนผู้สมัคร </b></label
          >
          <input
            @change="upload_img"
            @click="temp = 'id_card'"
            class="upf form-control"
            type="file"
            id="formFile"
          />
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup form-label"
            ><b> สำเนาทะเบียนบ้านของผู้สมัคร </b></label
          >
          <input
            @change="upload_img"
            @click="temp = 'id_house'"
            class="upf form-control"
            type="file"
            id="formFile"
          />
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup form-label"
            ><b> รูปถ่ายนิสิต </b></label
          >
          <input
            @change="upload_img"
            @click="temp = 'user_img'"
            class="upf form-control"
            type="file"
            id="formFile"
          />
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup form-label"
            ><b> รูปถ่ายที่พักอาศัยตามภูมิลำเนา </b></label
          >
          <input
            @change="upload_img"
            @click="temp = 'house_img'"
            class="upf form-control"
            type="file"
            id="formFile"
          />
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup form-label"
            ><b> ใบรายงานผลการศึกษา </b></label
          >
          <input
            @change="upload_img"
            @click="temp = 'gpa_file'"
            class="upf form-control"
            type="file"
            id="formFile"
          />
        </div>

        <div class="mb-4">
          <label class="lup form-label" for="address"
            ><b>
              เรียงความเล่าประวัติส่วนตัวของตนเองและปัญหาความเดือดร้อน
            </b></label
          >
          <textarea
            name=""
            class="upf form-control"
            cols="5"
            rows="35"
            placeholder="กรอกเรียงความประวัติของนิสิต"
            v-model="form_img.essay"
          ></textarea>
        </div>

        <div class="bbbup">
          <router-link
            class="btfback"
            :to="{
              name: 'form',
              params: {
                form_user: form_user,
                form_family: form_family,
                form_money: form_money,
                form_img: form_img,
                capital_id: capital_id
              },
            }"
            ><button type="button" class="btn btn-danger">
              Back
            </button></router-link
          >
          <router-link class="btfup" to=""
            ><button @click="add" type="button" class="btn btn-danger">
              Save
            </button></router-link
          >
        </div>
      </form>
      <Footer />
    </body>
  </html>
</template>

<script>
import Footer from "../../components/footer.vue";
import axios from "axios";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      form_user: {
        fname: null,
        lname: null,
        idstudent: null,
        grade: null,
        birthday: null,
        age: null,
        idcard: null,
        nationality: null,
        origin: null,
        religion: null,
        simester: null,
        faculty: null,
        offset: null,
        gpa: null,
        professor: null,
        address: null,
        email: null,
        phonenumber: null,
      },
      form_family: {
        d_fname: null,
        d_lnamed: null,
        d_age: null,
        d_status: null,
        d_job: null,
        d_money: null,
        d_worklocation: null,
        d_locationd: null,
        d_phonenumber: null,
        m_fname: null,
        m_lname: null,
        m_age: null,
        m_status: null,
        m_job: null,
        m_money: null,
        m_worklocation: null,
        m_location: null,
        m_phonenumber: null,
      },
      form_money: {
        manager_money: null,
        manager_from: null,
        manager_dot: null,
        manager_fname: null,
        manager_lname: null,
        manager_age: null,
        manager_job: null,
        manager_worklocation: null,
        manager_phonenumber: null,
        manager_statusgive: null,
      },
      form_img: {
        identity_card_img: null,
        identity_house_img: null,
        user_img: null,
        house_img: null,
        gpa_file: null,
        essay: null,
      },
      temp: null,
      capital_id:null
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    // if(!window.isLogin){
    //     this.$router.push({name:'Login'})
    // }

    //ส่งข้อมุลที่กรอกกลับมาเก็บเผื่อ user แก้ไข และเช็คก่อนว่ามาจากหน้า form หรือรีเฟรชหน้า
    if (this.$route.params.form_user) {
      console.log(this.$route.params);
      this.form_user = this.$route.params.form_user;
      this.form_family = this.$route.params.form_family;
      this.form_money = this.$route.params.form_money;
      this.form_img = this.$route.params.form_img;
      this.capital_id = this.$route.params.capital_id
      console.log("img", this.form_img);
      console.log('capital_id',this.capital_id);
    }
  },
  methods: {
    //ทำการ add ค่าเข้าไปหลังบ้าน
    add() {
      this.http
        .post("form", {
          form_user: this.form_user,
          form_family: this.form_family,
          form_money: this.form_money,
          form_img: this.form_img,
          capital_id: this.capital_id
        })
        .then((res) => {
          console.log(res);
        });
    },

    upload_img(event) {
      var self = this;
      var file = event.target.files[0];
      console.log(file);
      var arrayBuffer;
      var reader = new FileReader();
      reader.onload = async function () {
        arrayBuffer = await new Uint8Array(reader.result);

        // Change ArrayBuffer to Base64
        var binary = "";
        var bytes = new Uint8Array(arrayBuffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }

        // var imageArray = arrayBuffer; // For save to Database
        var imageSource = window.btoa(binary); // for show image to UI

        // Set imageSource data to show in UI
        //เช็ค
         console.log(self.temp);
         //เช็คก่อนว่าที่เซฟรูปเข้าไปมาจากส่วนไหน
        if (self.temp == "id_card") {
          self.form_img.identity_card_img = "data:image/png;base64," + imageSource;
          console.log('id_card',self.form_img.identity_card_img);
        } if (self.temp == "id_house") {
          self.form_img.identity_house_img ="data:image/png;base64," + imageSource;
            console.log('id_house',self.form_img.identity_house_img);
        } if (self.temp == "user_img") {
          self.form_img.user_img = "data:image/png;base64," + imageSource;
          console.log('user_img',self.form_img.user_img);
        } if (self.temp == "house_img") {
          self.form_img.house_img = "data:image/png;base64," + imageSource;
          console.log('house_img',self.form_img.house_img);
        } if (self.temp == "gpa_file") {
          self.form_img.gpa_file = "data:image/png;base64," + imageSource;
          console.log('gpa_file',self.form_img.gpa_file);
        }
      };
      reader.readAsArrayBuffer(file);
    },
  },
};
</script>

<style scoped>
.container-upload {
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}
.container-upload h1 {
  text-align: center;
}
.upload .mb-4 label {
  margin: 20px 0;
}
.hfup {
  color: #680c07;
}
.lup {
  color: #680c07;
  font-size: large;
}
.upf {
  color: #680c07;
  background-color: #ffeceb;
  border-color: rgb(219, 209, 209);
}
.upf:hover {
  opacity: 0.7;
}
.bbbup {
  display: flex;
  justify-content: space-between;
  margin: 50px 20px 0;
}
.bbbup:hover {
  opacity: 0.8;
}
.bbbup .btfback button {
  font-size: 15px;
  font-style: Roboto;
  padding: 13px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(180, 45, 37, 1);
  float: right;
}
.bbbup .btfup button {
  font-size: 15px;
  font-style: Roboto;
  padding: 13px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(37, 180, 51, 1);
  float: right;
}
</style>

