<template>
  <div class="container-capital">
    <h3>ทุนที่เปิดให้ลงทะเบียน</h3>
    <div class="capital-name">
      <router-link class="name-capital" to="/statusname"
        ><button type="button" class="btn btn-danger">
          รายชื่อผู้ขอทุน
        </button></router-link
      >
      <router-link class="nametest-capital" to="/statusinterview"
        ><button type="button" class="btn btn-danger">
          ผู้มีสิทธิ์สอบสัมภาษณ์
        </button></router-link
      >
    </div>
    <div class="main-capital" v-for="(item, idx) in form_capital" :key="idx">
      <div class="capital1">
        <img :src="item.imageUpload" alt="" />
        <div class="data-capital">
          <div class="main-data">
            <h1>{{ idx + 1 }}</h1>
            <h3>{{ item.name }}</h3>
          </div>
          <p>{{ item.details }}</p>
          <div class="btn-capital">
            <button
              id="register-capital"
              type="button"
              class="btn btn-danger"
              @click="checkapply(item)"
            >
              สมัค
            </button>
            <router-link
              class="about-capital"
              :to="{
                name: 'Detailcapital',
                params: {
                  capital_id: item.capital_id,
                },
              }"
              ><button id="about" type="button" class="btn btn-danger">
                อ่านเพิ่มเติม
              </button></router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="end-capital">
      <router-link class="back-capital" to="/main"
        ><button type="button" class="btn btn-danger">Back</button></router-link
      >
      <!-- <div class="back-capital">
      <button type="button" class="btn btn-danger">Back</button>
    </div> -->
      <div class="contract-capital">
        <p>@Contract</p>
        <a href=""><i id="fb" class="fab fa-facebook"></i></a>
        <a href=""><i id="fm" class="fab fa-facebook-messenger"></i></a>
        <a href=""><i id="line" class="fab fa-line"></i></a>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Swal from "sweetalert2";
import axios from "axios";
import Footer from "../../components/footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      check_capital: false,
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
      this.http.get("showcapital", {}).then((res) => {
        var self = this;
        console.log("res:", res.data);
        self.form_capital = res.data;
        console.log("form", self.form_capital);
        console.log(self.form_capital.length);

        // Change ArrayBuffer to Base64
        for (let index = 0; index < self.form_capital.length; index++) {
          var binary = "";
          var bytes = new Uint8Array(self.form_capital[index].image.data);
          var len = bytes.byteLength;
          for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          self.form_capital[index].imageUpload = binary;
          // console.log("arr:", self.form_capital[index].imageUpload);
        }
      });
    },
    checkapply(item) {
      console.log(item);
      const checkapply = item.capital_id;
      const id_user = this.$store.state.user.user_id;
      console.log(checkapply);
      this.http
        .post("checkcapital", {
          checkapply: checkapply,
          id_user: id_user,
        })
        .then((res) => {
          console.log("สมัคแล้ว", res);
          if (res.statusText == "OK") {
            this.check_capital = true;
            console.log(this.check_capital);
            // this.$router.params({
            //   capital_id: item.capital_id,
            //   check_capital:this.check_capital
            // })
            this.$router.push({ name: "form" });
            Swal.fire({
              title: "คุณได้เคยสมัคทุนนี้ไปแล้ว",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        });
    },
  },
};
</script>



<style>
.container-capital {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.container-capital h3 {
  margin: 40px 0;
  color: rgba(104, 12, 7, 1);
  font-weight: bold;
  font-size: 35px;
}
.capital-name button {
  font-size: 20px;
  margin: 0 30px;
  height: 65px;
  width: 215px;
  border-radius: 30px;
  color: #ffffff;
  background-color: rgba(104, 12, 7, 1);
}
.main-capital {
  margin-top: 30px;
  height: 60%;
}
.main-capital .capital1 {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}
.main-capital .capital1 img {
  padding: 0 150px;
}
.main-capital .capital1 .data-capital {
  display: block;
  width: 45%;
  margin: 0 20px;
  margin-top: 40px;
}
.main-capital .capital1 .data-capital .main-data {
  display: flex;
}
.main-capital .capital1 .data-capital h1 {
  font-size: 60px;
  padding: 0;
  margin: 0 10px;
}
.main-capital .capital1 .data-capital h3 {
  font-size: 25px;
}
.main-capital .capital1 .data-capital p {
  font-size: 15px;
  color: rgba(135, 18, 12, 1);
  /* background-color:wheat; */
}
.btn-capital button {
  font-size: 15px;
  margin: 0 20px;
  height: 40px;
  width: 130px;
  border-radius: 30px;
  color: #ffffff;
}
.end-capital {
  margin-top: 50px;
  text-align: end;
}
.end-capital .back-capital button {
  margin-right: 30px;
  font-size: 15px;
  height: 50px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(180, 45, 37, 1);
}
.end-capital .contract-capital {
  text-align: center;
}
.end-capital .contract-capital p {
  text-align: center;
}
.end-capital .contract-capital i {
  text-align: center;
  margin: 0 12px;
}
#register-capital {
  background-color: rgba(255, 153, 0, 1);
}
#about {
  background-color: rgba(255, 0, 0, 1);
}
#fb {
  color: rgba(57, 81, 133, 1);
}
#fm {
  color: rgba(0, 194, 255, 1);
}
#line {
  color: rgba(4, 216, 38, 1);
}
</style>