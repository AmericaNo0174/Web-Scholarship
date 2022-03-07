<template>
  <div class="container-profile">
    <div class="profile">
      <a href="#"><img src="../../assets/profile.svg" alt="" /></a>
      <h2>ข้อมูลส่วนตัว</h2>
    </div>
    <div class="data-profile">
      <!-- ชื่อ -->
      <div class="p-data1">
        <h5>ชื่อ</h5>
        <input type="text" v-model="form.fname" />
      </div>
      <!-- นามสกุล -->
      <div class="p-data2">
        <h5>นามสกุล</h5>
        <input type="text" v-model="form.lname" />
      </div>
      <!-- เลขบัตรประชาชน -->
      <div class="p-data3">
        <h5>เลขบัตรประชาชน</h5>
        <input type="text" v-model="form.idcard" />
      </div>
      <!-- วันเกิด -->
      <div class="p-data4">
        <h5>วันเกิด</h5>
        <input type="text" v-model="form.birthday" />
      </div>
      <!-- สัญชาติ -->
      <div class="p-data5">
        <h5>สัญชาติ</h5>
        <input type="text" v-model="form.nationality" />
      </div>
      <!-- ศาสนา -->
      <div class="p-data6">
        <h5>ศาสนา</h5>
        <input type="text" v-model="form.religion" />
      </div>
      <!-- คณะ -->
      <div class="p-data7">
        <h5>คณะ</h5>
        <input type="text" v-model="form.faculty"/>
      </div>
      <!-- สาขา -->
      <div class="p-data8">
        <h5>สาขา</h5>
        <input type="text" v-model="form.offset" />
      </div>
      <!-- เบอร์โทรศัพท์ -->
      <div class="p-data9">
        <h5>เบอร์โทรศัพท์</h5>
        <input type="text" v-model="form.phonenumber"/>
      </div>
      <!-- อีเมล์ -->
      <div class="p-data10">
        <h5>อีเมล์</h5>
        <input type="email" v-model="form.email"/>
      </div>
    </div>
    <div class="end-profile">
      <router-link class="back-profile" to="/main"
        ><button type="button" class="btn btn-danger">Back</button></router-link
      >
      <!-- <div class="back-profile">
        <button type="button" class="btn btn-danger">Back</button>
      </div> -->
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
    return{
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
      },
      user_img:null
    }
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    this.open_profile();
    // if(!window.isLogin){
    //     this.$router.push({name:'Login'})
    // }
    
  },
  methods: {
    open_profile() {
      this.http.get("showprofile").then(res =>{
        console.log('res:',res.data);
        // this.form = res.data
        
        // console.log(this.form);
      })
      // .catch(err =>{
      //   console.log(err);
      // })
    },
  },
};
</script>

<style>
.container-profile {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.data-profile {
  width: 100%;
  height: 60%;
}
.data-profile h5 {
  display: flex;
  align-items: center;
  flex: initial;
  text-align: left;
  width: 12%;
}
.data-profile .p-data1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.data-profile .p-data2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.data-profile .p-data3 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.data-profile .p-data4 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.data-profile .p-data5 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.data-profile .p-data6 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.data-profile .p-data7 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.data-profile .p-data8 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.data-profile .p-data9 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.data-profile .p-data10 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.end-profile {
  text-align: end;
}
.back-profile button {
  font-size: 15px;
  margin-right: 30px;
  height: 50px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(180, 45, 37, 1);
}
</style>