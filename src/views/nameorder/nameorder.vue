<template>
  <div class="container-nameorder">
    <h2>ประวัติขอทุน</h2>
    <div class="profile" v-if="isShow">
      <a href="#"
        ><img
          class="img-profile"
          :src="form_nameoder[0].data_user.user_img"
          alt=""
      /></a>
      <h5>
        {{
          form_nameoder[0].data_user.fname +
          " " +
          form_nameoder[0].data_user.lname
        }}
      </h5>
      <h5>
        รหัสประจำตัวนิสิต {{ form_nameoder[0].data_user.idstudent }} สาขา ({{
          form_nameoder[0].data_user.offset
        }})
      </h5>
    </div>
    <div class="profile" v-else>
      <a href="#"
        ><img
          class="img-profile"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=850&q=50"
          alt=""
      /></a>
      <h5>ชื่อ นามสกุล</h5>
      <h5>รหัสประจำตัวนิสิต สาขา (TXX)</h5>
    </div>

    <center>
      <div class="table-nameorder" v-if="isShow">
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ประเภททุน</th>
              <th>ชื่อทุน</th>
              <th>วัน/เดือน/ปี</th>
              <th>ทุนที่ได้รับ</th>
            </tr>
          </thead>
          <tbody v-for="(item, idx) in form_nameoder" :key="idx">
            <tr>
              <td>{{ idx + 1 }}</td>
              <td>{{ item.type}}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.date_confirm }}</td>
              <td>{{ item.money }} บาท</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-nameorder" v-else>
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ประเภททุน</th>
              <th>ชื่อทุน</th>
              <th>วัน/เดือน/ปี</th>
              <th>ทุนที่ได้รับ</th>
            </tr>
          </thead>
        </table>
      </div>
    </center>
    <div class="end-nameorder">
      <router-link class="back-nameorder" to="/main"
        ><button type="button" class="btn btn-danger">Back</button></router-link
      >
    </div>
    <Footer />
  </div>
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
      isShow: null,
      form_nameoder: [
        {
          data_user: null,
        },
      ],
    };
  },
  mounted() {
    if (!this.$store.state.login) {
      this.$router.push({ name: "Login" });
    }
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    if (!this.$store.state.login || this.$store.state.user.Role !=2) {
      this.$router.push({ name: "Login" });
    }
    this.show_order();
  },
  methods: {
    show_order() {
      this.http
        .post("showordername", {
          user_id: this.$store.state.user.user_id,
        })
        .then((res) => {
          console.log(res);
          if (res.data.length > 0) {
            this.form_nameoder = res.data;
            console.log("res:", this.form_nameoder);
            this.isShow = true;
            for (let i = 0; i < res.data.length; i++) {
              this.form_nameoder[i].data_user = JSON.parse(
                res.data[i].data_user
              );
            }
          } else {
            this.isShow = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.container-nameorder {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.container-nameorder h2 {
  margin-top: 20px;
  color: rgba(104, 12, 7, 1);
  font-weight: bold;
}
.profile a img {
  margin-top: 20px;
}
.profile h5 {
  margin: 20px 0;
  color: rgba(104, 12, 7, 1);
  font-size: 20px;
}
.table-nameorder {
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 40vh;
  margin-top: 30px;
}
.table-nameorder table {
  width: 80%;
}
.table-nameorder table thead,
tbody {
  text-align: center;
  border: 1px solid black;
}
.table-nameorder table thead th {
  font-size: 20px;
  border: 1px solid black;
  padding-block: 10px;
}
.table-nameorder table tbody td {
  padding-block: 10px;
  border: 1px solid gray;
}

.table-nameorder table thead,
tr,
th,
td p {
  color: rgba(104, 12, 7, 1);
}
.end-nameorder {
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: flex-end;
}
.back-nameorder button {
  font-size: 15px;
  margin-right: 30px;
  height: 50px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(180, 45, 37, 1);
}
</style>