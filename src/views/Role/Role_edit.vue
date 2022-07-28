<template>
  <div class="container-role_edit">
    <div class=" role_edit">
      <h2 class="h2-eidtrole mt-5 mb-5"><b>ข้อมูลส่วนตัว</b></h2>
    </div>
    <div class="container">
    <div class="data-role_edit">
      <div class="p-data">
        <h5>ชื่อ:</h5>
        <p>{{editform.name }}</p>
        <h5>นามสกุล:</h5>
        <p>{{ editform.lastname}}</p>
      </div>
      <center>
      <div class="p-data">
        <h5>Email:</h5>
        <p>{{editform.email}}</p>
      </div>
      </center>
      <div>
        <input
          class="bgrole-edit form-check-input"
          v-model="role"
          type="radio"
          name="m_status flexRadioDefault"
          value="2"
        />
        <label class="edit-role-laf form-check-label" for="inlineRadio1"><b>User</b></label>
        <input
          class="bgrole-edit form-check-input"
          v-model="role"
          type="radio"
          name="m_status flexRadioDefault"
          value="1"
        />
        <label class="edit-role-laf form-check-label" for="inlineRadio1"><b>Admin</b></label>
        <input
          class="bgrole-edit form-check-input"
          v-model="role"
          type="radio"
          name="m_status flexRadioDefault"
          value="3"
        />
        <label class="edit-role-laf form-check-label" for="inlineRadio1"><b>commit</b></label>
      </div>
      <div class="end-role_edit">
        <div class="mt-5 mb-5 button-roleedit">
          <router-link class="menu-edit" to="/Role"
            ><button type="button" class="btn btn-danger">
              Back
            </button></router-link
          >
          <button @click="save_role" type="button" class="btn btn-dark">
            Save
          </button>
        </div>
      </div>
    </div>
    </div>
    <div class="redit-footer">
    <Footer />
    </div>
  </div>
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
      check: null,
      role: null,
      editform: {
        data_user: [],
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
        imageUpload: null,
      },
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    if (!this.$store.state.login || this.$store.state.user.Role != 1) {
      this.$router.push({ name: "Login" });
    }
    if (this.$route.params) {
      this.user_id = this.$route.params.user_id;
      console.log("user_id:", this.user_id);
    }
    this.show_editrole();
  },
  methods: {
    show_editrole() {
      console.log(this.user_id);
      this.http
        .post("showrole", {
          id_user: this.user_id,
        })
        .then((res) => {
          if (res.data) {
            this.editform = res.data[0];
            console.log(res.data[0]);
            
          } else {
            this.isShow = false;
          }
          console.log(this.editform);
        });
    },
    save_role() {
      console.log(this.role);
      this.http
        .put("editrole", {
          user_id: this.user_id,
          role: this.role,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.changedRows == 1) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "แก้ไขสำเร็จ",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push({ name: "Role" });
          } else {
            this.$router.push({ name: "Role" });
          }
        });
    },
  },
};
</script>



<style>
.container-role_edit {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.container-role_edit .img-role_edit {
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  align-items: center;
  margin: 20px auto;
}

.data-role_edit {
  width: 100%;
  height: 60%;
}
.data-role_edit h5 {
  /* display: flex;
  align-items: center;
  flex: initial; */
  text-align: end;
  width: 180px;
  /* background-color: aqua; */
  margin-right: 20px;
}
.roleeditposition1 {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.roleeditposition2 {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.button-roleedit {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.data-role_edit .p-data {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 13%;
  margin-bottom: 50px;
  /* background-color: red; */
}

.data-role_edit p {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  text-align: center;
  margin: 0;
  width: 300px;
  height: 35px;
  background-color: rgba(255, 242, 242, 1);
}
.end-role_edit {
  text-align: end;
}
.back-role_edit button {
  font-size: 15px;
  margin-right: 30px;
  height: 50px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(180, 45, 37, 1);
}

.redit-footer{
  margin-top: 195px;
}

.h2-eidtrole{
  color: #680c07;
}
.edit-role-laf{
  color: #680c07;
  font-size: large;
}

.bgrole-edit{
  background-color:rgb(219, 209, 209);
}
</style>