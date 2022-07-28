<template>
  <div class="container-interview">
    <h3 style="text-decoration-line: underline">รายละเอียดวันนัดสัมภาษณ์</h3>
    <center>
      <div class="main-interview">
        <h5>
          สัมภาษณ์ผ่านช่องทางออนไลน์ {{form_interview.date_confirm}} เวลา {{form_interview.timemeet}}  น.
        </h5>
        <h6>สิ่งที่นิสิตควรเตรียมพร้อมก่อนทำการสอบสัมภาษณ์</h6>
        <br />
        <textarea cols="30" rows="10" v-model="form_interview.interviewdetail" disabled> </textarea>
        <div class="go-interview">
          <a :href="form_interview.interviewlink" target="_blank">
          <button type="button" class="btn btn-danger">
            ห้องสอบสัมภาษณ์<i class="fas fa-camera-retro"></i>
          </button>
          </a>
        </div>
      </div>
    </center>
    <div class="back-interview">
      <router-link class="" to="/status"
        ><button type="button" class="btn btn-danger">Back</button></router-link
      >
      <!-- <button type="button" class="btn btn-danger">Back</button> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "../../components/footer.vue";
export default {
  data() {
    return {
      isShow: false,
      form_interview: {
        
      },
    };
  },
  components: {
    Footer,
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    if (!this.$store.state.login || this.$store.state.user.Role !=2) {
      this.$router.push({ name: "Login" });
    }
    this.opent_interview();
  },
  methods: {
    opent_interview() {
      //เอาข้อมูลไปเช็คใน database
      this.http
        .post("showinterview", {
          id_user: this.$store.state.user.user_id,
        })
        .then((res) => {
          //เช็คว่ากรอกข้อมูลไปรึยัง
          console.log(res.data);
          this.form_interview = res.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>


<style>
.container-interview {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.container-interview h3 {
  margin: 17px;
  color: rgba(104, 12, 7, 1);
  text-decoration-line: underline;
}
.main-interview {
  width: 70%;
  box-shadow: 3px 3px 10px black;
  border-radius: 80px;
  overflow: hidden;
  height: 450px;
}
.main-interview textarea {
  width: 90%;
  height: 65%;
}
.main-interview .go-interview button {
  font-size: 15px;
  height: 50px;
  width: 230px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(255, 13, 0, 1);
}
.main-interview h6 {
  font-size: 20px;
  color: rgba(104, 12, 7, 1);
}
.main-interview textarea {
  font-size: 18px;
  /* background-color: aquamarine; */
  text-align: left;
  width: 80%;
  height: 50%;
  resize: none;
  border: none;
  background: transparent;
  line-height: 2;
}
.back-interview {
  margin-top: 35px;
}
.container-interview .back-interview button {
  position: relative;
  font-size: 15px;
  height: 50px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(180, 45, 37, 1);
  left: 40%;
}
</style>