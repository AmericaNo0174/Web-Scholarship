<template>
  <div class="container-status">
    <div>
      <div class="profile" v-if="!isShow">
        <img
          class="img-profile"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=50"
          alt=""
        />
        <h2>สภานะขอทุน</h2>
        <!-- <h5>นายกิตติ์ธเนศ ธานี 6230300xxx</h5> -->
      </div>
      <div class="profile" v-else>
        <img
          class="img-profile"
          :src="form_status[0].data_user.user_img"
          alt=""
        />
        <h2>สภานะขอทุน</h2>
        <h5>
          {{
            form_status[0].data_user.fname +
            " " +
            form_status[0].data_user.lname +
            " " +
            form_status[0].data_user.idstudent
          }}
        </h5>
      </div>
      <center>
        <div class="table-status">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">ทุนที่สมัคร</th>
                <th scope="col">เอกสาร</th>
                <th scope="col">วันสัมภาษณ์</th>
                <th scope="col">สัมภาษณ์</th>
                <th scope="col">รายละเอียดในการสัมภาษณ์</th>
              </tr>
            </thead>
            <tbody v-for="(item, idx) in form_status" :key="idx">
              <tr>
                <!-- ชื่อทุน -->
                <td scope="row">{{item.name}}</td>
                <!-- สถานะ upload -->
                <td v-if="item.confirm_upload == 1 ">
                  <i class="fas fa-check-circle" id="yes"></i>
                </td>
                <td v-else>
                  <i class="fas fa-times-circle" id="no"></i>
                </td>
                <!-- วันที่สัมภาษณ์ -->
                <td v-if="item.date_confirm">
                  {{item.date_confirm}}
                </td>
                <td v-else>
                  <i class="fas fa-minus-circle"  id="no"></i>
                </td>
                <!-- เช็คว่ามีสิทธิ์สัมภาษณ์ -->
                <td v-if="item.confirm_interview">
                  <i class="fas fa-check-circle" id="yes"></i>
                </td>
                <td v-else>
                  <i class="fas fa-times-circle" id="no"></i>
                </td>
                <td v-if="item.confirm_interview">
                  <router-link class="go-interview" to="/interview"
                    ><i class="fas fa-mouse-pointer"></i> click</router-link
                  >
                </td>
                <td v-else>
                 <i class="fas fa-minus-circle"  id="no"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </div>
    <div class="end-status">
      <router-link class="back-status" to="/main"
        ><button type="button" class="btn btn-danger">Back</button></router-link
      >
      <!-- <div class="back-status">
        <button type="button" class="btn btn-danger">Back</button>
      </div> -->
      <div class="check-status">
        <p><i class="fas fa-check-circle" id="yes"></i>ผ่าน</p>
        <p><i class="fas fa-times-circle" id="no"></i>ไม่ผ่าน/รอดำเนินการ</p>
      </div>
    </div>
    <Footer />
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
      isShow: false,
      
      form_status: [
        {
          check_gpa_file: null,
          check_house_image: null,
          check_identity_card: null,
          check_identity_house: null,
          check_status_upload: null,
          check_user_image: null,
          data_user: [],
          capital_id: null,
          form_id: null,
          user_id: null,
          complete: null,
          confirm_interview:null,
        },
      ],
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    if (!this.$store.state.login || this.$store.state.user.Role !=2) {
      this.$router.push({ name: "Login" });
    }
    this.open_status();
  },
  methods: {
    open_status() {
      //เอาข้อมูลไปเช็คใน database
      this.http
        .post("showstatus", {
          id_user: this.$store.state.user.user_id,
        })
        .then((res) => {
          //เช็คว่ากรอกข้อมูลไปรึยัง
          if (res.data.length > 0) {
            this.form_status = res.data;
            this.isShow = true;
            // แปลง string to json
            for (let i = 0; i < res.data.length; i++) {
              this.form_status[i].data_user = JSON.parse(res.data[i].data_user);
            }
            console.log(this.form_status);
            this.ConfirmInterview(this.form_status)
          } else {
            this.isShow = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //อัพเดตสถานะสัมภาษณ์
    ConfirmInterview(data){
      for(let i = 0;i< data.length;i++ ){
        if(data[i].confirm_upload == 1 && data[i].date_confirm != null){
          this.form_status[i].confirm_interview = true
        }
        else{
          this.form_status[i].confirm_interview = false
        }
      }
    }
  },
};
</script>

<style >
.img-profile {
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 20px auto;
}
.container-status {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.profile a img {
  margin-top: 25px;
}
.profile h2,
h5 {
  margin: 18px 0;
  color: rgba(104, 12, 7, 1);
  font-weight: bold;
}
.table-status {
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 40vh;
  /* background-color: darkblue; */
}
.table-status table {
  width: 80%;
  /* border: 1px solid black; */
}

.table-status table thead,
tbody {
  text-align: center;
  border: 1px solid black;
}
.table-status table thead th {
  font-size: 20px;
  border: 1px solid black;
  padding-block: 10px;
  text-align: center;
}
.table-status table tbody td {
  padding-block: 10px;
  border: 1px solid gray;
  text-align: center;
}

.table-status table tbody td i{
  margin-right: 30px;
}

.table-status table thead,
tr,
th,
td p {
  color: rgba(104, 12, 7, 1);
}
.end-status {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  /* border: 1px solid black; */
  align-items: center;
}
.check-status {
  display: flex;
}
.check-status p,
i {
  font-size: 18px;
  display: flex;
  margin: 0 20px;
}
.back-status button {
  font-size: 15px;
  margin-left: 20px;
  height: 50px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(180, 45, 37, 1);
}
.go-interview {
  color: rgba(255, 0, 0, 1);
}
#yes {
  color: rgba(0, 255, 10, 1);
}
#load {
  color: rgba(250, 255, 0, 1);
}
#no {
  color: rgba(255, 0, 0, 1);
}
</style>