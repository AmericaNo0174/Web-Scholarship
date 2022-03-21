<template>
  <div class="container-role_edit">
    <div class="role_edit">
      <h2>ข้อมูลส่วนตัว</h2>
    </div>
    <div class="data-role_edit">
      <div class="roleeditposition1">
        <div class="p-data1">
          <h5>ชื่อ:</h5>
          <p>{{ form.fname }}</p>
           <!-- <input type="text" v-model="form.fname" /> -->
        </div>
        <div class="p-data2">
          <h5>นามสกุล:</h5>
          <p>{{ form.lname }}</p>
          <!-- <input type="text" v-model="form.lname" /> -->
        </div>
      </div>
      <div class="roleeditposition2">
        <div class="p-data3">
          <h5>เลขบัตรประชาชน:</h5>
          <p>{{ form.idcard }}</p>
          <!-- <input type="text" v-model="form.idcard" /> -->
        </div>
        <div class="p-data4">
          <h5>วันเกิด:</h5>
          <p>{{ form.birthday }}</p>
          <!-- <input type="text" v-model="form.birthday" /> -->
        </div>
      </div>
      <div class="p-data5">
        <h5>สัญชาติ:</h5>
        <p>{{ form.nationality }}</p>
        <!-- <input type="text" v-model="form.nationality" /> -->
      </div>
      <div class="p-data6">
        <h5>ศาสนา:</h5>
        <p>{{ form.religion }}</p>
        <!-- <input type="text" v-model="form.religion" /> -->
      </div>
    </div>
    <div class="end-role_edit">
        <div class="button-roleedit">
          <button type="button" class="btn btn-danger">Back</button>
          <button type="button" class="btn btn-dark">Save</button>
        </div>
    </div>
      <!-- <div class="back-role_edit">
        <button type="button" class="btn btn-danger">Back</button>
      </div> -->
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
      isShow:false,
      form: {
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
        imageUpload:null
      },
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    this.open_profile();
    if(!this.$store.state.login){
        this.$router.push({name:'Login'})
    }
  },
  methods: {
    open_profile() {
       //เอาข้อมูลไปเช็คใน database
       this.http
        .post("showprofile", {
          id_user: this.$store.state.user.user_id,
        })
        .then((res) => {
          console.log("res:", res.data);

         //เช็คว่ากรอกข้อมูลไปรึยัง
          if(res.data){
             // แปลง string to json
            this.form = JSON.parse(res.data[0].data_user);
            this.isShow = true
            console.log('form',this.form);
          }
          else{
            this.isShow = false
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
.container-role_edit {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.container-role_edit .img-role_edit{
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
.roleeditposition1{
   display: flex;
   justify-content: space-between;
   margin: 10px 0;   
}
.roleeditposition2{
   display: flex;
   justify-content: space-between;
   margin: 10px 0;   
}
.button-roleedit{
   display: flex;
   justify-content: space-between;
  margin: 10px 0;   
}
.data-role_edit .p-data1,
.p-data2,
.p-data3,
.p-data4,
.p-data5,
.p-data6,
.p-data7,
.p-data8,
.p-data9,
.p-data10 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 13%;
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
</style>