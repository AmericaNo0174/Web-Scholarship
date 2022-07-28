<template>
  <div class="container-statusname">
    <h2>รายชื่อผู้ขอทุน</h2>
    <div class="main-search">
      <div class="col-md-8">
        <div class="search">
          <input
            @change="open_statusname()"
            type="text"
            title="Type in a name"
            class="form-control"
            placeholder="ชื่อ/รหัสนิสิต"
            v-model="filterText"
          />
          <button class="btn btn-dark">
            <i class="fa fa-search"></i>Search
          </button>
        </div>
      </div>
    </div>
    <center>
      <div class="table-statusname" v-if="isShow">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ลำดับ</th>
              <th scope="col">รหัสนิสิต</th>
              <th scope="col">ชื่อ-นามสกุล</th>
              <th scope="col">ชื่อทุน</th>
              <th scope="col">บัตรประชาชน</th>
              <th scope="col">ทะเบียนบ้าน</th>
              <th scope="col">รูปถ่ายนิสิต</th>
              <th scope="col">ใบเกรด</th>
              <th scope="col">รูปถ่ายที่พักอาศัย</th>
              <th scope="col">การตรวจสอบเอกสาร</th>
              <th scope="col">หมายเหตุ</th>
              <th v-if="$store.state.user.Role == 1" scope="col">
                ข้อมูลนิสิต
              </th>
            </tr>
          </thead>
          <tbody id="myUL" v-for="(item, idx) in form_statusname" :key="idx">
            <tr>
              <th scope="row">1</th>
              <td>{{ item.data_user.idstudent }}</td>
              <td>{{ item.data_user.fname + " " + item.data_user.lname }}</td>
              <td>{{ item.name }}</td>
              <!-- เช็คบัตร -->
              <td v-if="item.check_identity_card == 1">
                <i class="fas fa-check-circle" id="yes"></i>
              </td>
              <td v-else>
                <i class="fas fa-times-circle" id="no"></i>
              </td>
              <!--เช็คทะเบียนบ้าน -->
              <td v-if="item.check_identity_house == 1">
                <i class="fas fa-check-circle" id="yes"></i>
              </td>
              <td v-else>
                <i class="fas fa-times-circle" id="no"></i>
              </td>
              <!-- เช้ครูปถ่ายนิสิต -->
              <td v-if="item.check_user_image == 1">
                <i class="fas fa-check-circle" id="yes"></i>
              </td>
              <td v-else>
                <i class="fas fa-times-circle" id="no"></i>
              </td>
              <!-- เช็คเกรด -->
              <td v-if="item.check_gpa_file == 1">
                <i class="fas fa-check-circle" id="yes"></i>
              </td>
              <td v-else>
                <i class="fas fa-times-circle" id="no"></i>
              </td>
              <!-- เช็ครูปถ่ายที่พักอาศัยตามภูมิลำเนา -->
              <td v-if="item.check_house_image == 1">
                <i class="fas fa-check-circle" id="yes"></i>
              </td>
              <td v-else>
                <i class="fas fa-times-circle" id="no"></i>
              </td>
              <!-- เช็คสถานะอัพโหลด -->
              <td v-if="item.check_status_upload == 1">
                <i class="fas fa-check-circle" id="yes"></i>
              </td>
              <td v-else>
                <i class="fas fa-times-circle" id="no"></i>
              </td>
               <td v-if="!item.other">
                <i class="fas fa-minus-circle" id="no"></i>
              </td>
               <td v-else>
                {{item.other}}
              </td>
              <div v-if="$store.state.user.Role == 1">
                <router-link
                  :to="{
                    name: 'Adminform',
                    params: {
                      confirm_user_id: item.user_id,
                      capital_id: item.capital_id,
                      form_id: item.form_id,
                    },
                  }"
                >
                  <i class="fas fa-search"></i
                ></router-link>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
    <div class="end-statusname">
      <router-link class="back-statusname" to="/open_capital"
        ><button type="button" class="btn btn-danger">Back</button></router-link
      >
      <!-- <div class="back-statusname">
          <button type="button" class="btn btn-danger">Back</button>
        </div> -->
      <div class="check-statusname">
        <p><i class="fas fa-check-circle" id="yes"></i>ผ่าน</p>
        <p><i class="fas fa-times-circle" id="no"></i>ไม่ผ่าน/รอดำเนินการ</p>
      </div>
    </div>
    <div class="foot-staname">
    <Footer />
    </div>
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
      filterText:"",
      form_statusname: [
        {
          other:null,
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
    this.show_upload();
    this.open_statusname();
    console.log(this.$store.state.user.Role);
  },
  methods: {
    open_statusname() {
      //เอาข้อมูลไปเช็คใน database
      this.http
        .post("showstatusname", {
          filter: this.filterText,
        })
        .then((res) => {
          //เช็คว่ากรอกข้อมูลไปรึยัง
          if (res.data.length > 0) {
            this.form_statusname = res.data;
            console.log("res:", res.data);
            this.isShow = true;
            // แปลง string to json
            for (let i = 0; i < res.data.length; i++) {
              this.form_statusname[i].data_user = JSON.parse(
                res.data[i].data_user
              );
            }
            this.check_status(this.form_statusname);
          } else {
            this.isShow = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    check_status(data) {
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].check_gpa_file &&
          data[i].check_house_image &&
          data[i].check_identity_card &&
          data[i].check_identity_house &&
          data[i].check_user_image == 1
        ) {
          data[i].check_status_upload = true;
          this.http.put("setStatus", {
            upload_id: data[i].upload_id,
            check_status_upload: 1,
          });
        } else {
          data[i].check_status_upload = false;
          this.http.put("setStatus", {
            upload_id: data[i].upload_id,
            check_status_upload: 0,
          });
        }
      }
    },

    show_upload() {
      this.http.get("show_upload").then((res) => {
        console.log(res.data);
        this.insert_confirm(res.data);
      });
    },
    insert_confirm(data) {
      for (let i = 0; i < data.length; i++) {
        this.http.post("setConfirm", {
          upload_id: data[i].upload_id,
          user_id: data[i].user_id,
        });
      }
    },
  },
};
</script>
<style >
.container-statusname {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.container-statusname h2 {
  margin-top: 25px;
  color: rgba(104, 12, 7, 1);
  font-weight: bold;
}
.table-statusname {
  width: 100%;
  margin: 20px;
  height: auto;
  justify-content: center;
  align-items: center;
}
.main-search {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  width: 100%;
}
.search {
  display: flex;
  height: 40px;
  width: 100%;
}
.search button,
i {
  display: flex;
  align-items: center;
}
.table-statusname {
  margin-top: 20px;
  width: 95%;
  height: 50vh;
  justify-content: center;
  align-items: center;
  /* background-color: black; */
}
.table-statusname table {
  width: 80%;
  margin: 30px;
  padding-block: 30px;
}
.table-statusname table th {
  border: 0.5px solid black;
}
.table-statusname table td,
th,
thead,
tbody,
tr {
  border: 0.5px solid black;
}
.table-statusname table thead {
  text-align: center;
}
.table-statusname table thead th {
  padding-block: 10px;
  tab-size: 20px;
}
.table-statusname table tbody th {
  text-align: left;
  padding-left: 10px;
}
.table-statusname table tbody tr,
td {
  text-align: center;
}
.table-statusname table tbody i {
  text-align: center;
  display: flex;
  justify-content: center;
  margin: auto;
}
.end-statusname {
  display: flex;
  justify-content: space-between;
  bottom: 1;
  align-items: center;
}
.check-statusname {
  display: flex;
  margin-right: 30px;
  align-items: center;
}
.check-statusname p,
i {
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 30px;
}
.back-statusname button {
  font-size: 15px;
  height: 50px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(180, 45, 37, 1);
  margin-left: 30px;
}
#yes {
  color: rgba(0, 255, 10, 1);
}
#no {
  color: rgba(255, 0, 0, 1);
}
#myInput {
  background-image: url("/css/searchicon.png");
  background-position: 10px 12px;
  background-repeat: no-repeat;
}
.foot-staname{
  margin-top: 100px;
}
</style>