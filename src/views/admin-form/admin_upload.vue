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
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">ดูรูปภาพ</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img :src="show_img()" alt="" />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="upload container mt-5 mb-5 hup">
        <h1 class="hfup"><b>อัพโหลดเอกสาร</b></h1>
      </div>

      <form class="upload container mb-5">
        <div class="mb-4">
          <label for="formFile" class="lup form-label"
            ><b> สำเนาบัตรประชาชนผู้สมัคร </b></label
          >
          <br />
          <button
            @click="temp = 'identity_card'"
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            ดูรูปภาพ
          </button>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="check_idcard exampleRadios"
              value="1"
              v-model="form_img.check_identity_card"
            />
            <label class="form-check-label" for="exampleRadios1">
              เอกสารถูกต้อง
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="check_idcard exampleRadios"
              value="0"
              v-model="form_img.check_identity_card"
            />
            <label class="form-check-label" for="exampleRadios2">
              เอกสารไม่ถูกต้อง
            </label>
          </div>
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup form-label"
            ><b> สำเนาทะเบียนบ้านของผู้สมัคร </b></label
          >
          <br /><button
            @click="temp = 'identity_house'"
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            ดูรูปภาพ
          </button>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="check_house exampleRadios"
              value="1"
              v-model="form_img.check_identity_house"
            />
            <label class="form-check-label" for="exampleRadios1">
              เอกสารถูกต้อง
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="check_house exampleRadios"
              value="0"
              v-model="form_img.check_identity_house"
            />
            <label class="form-check-label" for="exampleRadios2">
              เอกสารไม่ถูกต้อง
            </label>
          </div>
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup form-label"
            ><b> รูปถ่ายนิสิต </b></label
          >
          <br /><button
            @click="temp = 'user_img'"
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            ดูรูปภาพ
          </button>
           <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="check_user exampleRadios"
              value="1"
              v-model="form_img.check_user_image"
            />
            <label class="form-check-label" for="exampleRadios1">
              เอกสารถูกต้อง
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="check_user exampleRadios"
              value="0"
              v-model="form_img.check_user_image"
            />
            <label class="form-check-label" for="exampleRadios2">
              เอกสารม่ถูกต้อง
            </label>
          </div>
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup form-label"
            ><b> รูปถ่ายที่พักอาศัยตามภูมิลำเนา </b></label
          >
          <br /><button
            @click="temp = 'house_img'"
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            ดูรูปภาพ
          </button>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="check_house exampleRadios"
              value="1"
              v-model="form_img.check_house_image"
            />
            <label class="form-check-label" for="exampleRadios1">
              เอกสารถูกต้อง
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="check_house exampleRadios"
              value="0"
              v-model="form_img.check_house_image"
            />
            <label class="form-check-label" for="exampleRadios2">
              เอกสารม่ถูกต้อง
            </label>
          </div>
        </div>

        <div class="mb-4">
          <label for="formFile" class="lup form-label"
            ><b> ใบรายงานผลการศึกษา </b></label
          >
          <br /><button
            @click="temp = 'gpa_file'"
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            ดูรูปภาพ
          </button>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="check_gpa exampleRadios"
              value="1"
              v-model="form_img.check_gpa_file"
            />
            <label class="form-check-label" for="exampleRadios1">
              เอกสารถูกต้อง
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="check_gpa exampleRadios"
              value="0"
              v-model="form_img.check_gpa_file"
            />
            <label class="form-check-label" for="exampleRadios2">
              เอกสารม่ถูกต้อง
            </label>
          </div>
        </div>
        <div class="input-group mb-4">
          <span class="boxf input-group-text">วันนัดสัมภาษณ์ </span>
          <input
            type="date"
            name="date"
            class="inf form-control"
            v-model="confirm.date"
          />
        </div>
        <div>
          <label for="formFile" class="lup form-label"
            ><b> หมายเหตุ </b></label
          >
           <textarea
                    v-model="confirm.other"
                    placeholder="หมายเหตุ"
                    cols="20"
                    rows="1"
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
            disabled
          ></textarea>
        </div>

        <div class="bbbup">
          <router-link
            class="btfback"
            :to="{
              name: 'Adminform',
              params: {
                form_user: form_user,
                form_family: form_family,
                form_money: form_money,
                form_img: form_img,
                capital_id: capital_id,
                form_id: form_id,
                confirm: confirm,
              },
            }"
            ><button type="button" class="btn btn-danger">
              Back
            </button></router-link
          >
          <router-link class="btfup" to=""
            ><button
              type="button"
              class="btn btn-danger"
              @click="save_check_upload()"
            >
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
import Swal from "sweetalert2";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      form_id: null,
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
        user_img: null,
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
        house_image: null,
        gpa_file: null,
        essay: null,
        check_gpa_file: null,
        check_house_image: null,
        check_identity_card: null,
        check_identity_house: null,
        check_user_image: null,
      },
      confirm: {
        confirm_upload: null,
        date: null,
        complete: null,
        confirm_id: null,
        other:null
      },
      temp: null,
      capital_id: null,
      upload_id: null,
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    if (!this.$store.state.login || this.$store.state.user.Role != 1) {
      this.$router.push({ name: "Login" });
    }
    //ส่งข้อมุลที่กรอกกลับมาเก็บเผื่อ user แก้ไข และเช็คก่อนว่ามาจากหน้า form หรือรีเฟรชหน้า
    if (this.$route.params.form_user) {
      console.log(this.$route.params);
      this.form_user = this.$route.params.form_user;
      this.form_family = this.$route.params.form_family;
      this.form_money = this.$route.params.form_money;
      this.form_img = this.$route.params.form_img;
      this.capital_id = this.$route.params.capital_id;
      this.form_id = this.$route.params.form_id;
      this.upload_id = this.$route.params.upload_id;
      this.confirm = this.$route.params.confirm;
    }
  },
  methods: {
    show_img() {
      if (this.temp == "identity_card") {
        return this.form_img.identity_card_img;
      } else if (this.temp == "identity_house") {
        return this.form_img.identity_house_img;
      } else if (this.temp == "user_img") {
        return this.form_user.user_img;
      } else if (this.temp == "house_img") {
        return this.form_img.house_image;
      } else if (this.temp == "gpa_file") {
        return this.form_img.gpa_file;
      }
    },
    save_check_upload() {
      this.http
        .put("save_check_upload", {
          upload_id: this.upload_id,
          check_gpa_file: this.form_img.check_gpa_file,
          check_house_image: this.form_img.check_house_image,
          check_identity_card: this.form_img.check_identity_card,
          check_identity_house: this.form_img.check_identity_house,
          check_user_image: this.form_img.check_user_image,
          confirm_date: this.confirm.date,
          other:this.confirm.other
        })
        .then((res) => {
          console.log(res);
          //เช็คว่าอัพเดตรึยัง
          if (res.data.changedRows == 1 ){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "ตรวจสอบเรียบร้อย",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push({ name: "Statusname" });
          } else {
            this.$router.push({ name: "Statusname" });
          }
        });
    },
  },
};
</script>

<style scoped>
.form-check {
  display: flex;
  align-items: center;
}
.form-check .form-check-input {
  margin-right: 10px;
}
.container-upload {
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}
.container-upload h1 {
  text-align: center;
}
.container-upload .modal-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 720px;
  align-items: center;
}
.container-upload .modal-body img {
  margin: 30px 0;
  width: 600px;
  height: 600px;
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

