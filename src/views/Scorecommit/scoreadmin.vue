<template>
  <div class="container-scorelayer">
    <div class="topic_scorcommit">
      <h2>ให้คะแนน</h2>
    </div>
    <h4>เกณฑ์การให้คะแนน</h4>
    <div class="main_scorcommit" v-if="isShow">
      <div class="p-data">
        <h5>ชื่อ:</h5>
        <p>{{ form_showscore.form_user.fname }}</p>
        <h5>นามสกุล:</h5>
        <p>{{ form_showscore.form_user.lname }}</p>
        <h5>ทุนที่สมัคร:</h5>
        <p>{{ form_showscore.name }}</p>
      </div>
      <div class="main_scorcommit">
        <div
          class="topic_scor2"
          v-for="(item, idx) in form_showscore.interviewscore"
          :key="idx"
        >
          <h5>{{ item.topic }}</h5>
          <div class="input">
            <textarea
              cols="8"
              rows="1"
              v-model="form_showscore.total_score[idx].score"
              disabled
            ></textarea>
            <h5>/ {{ item.score }}</h5>
          </div>
          <p>{{ form_showscore.total_score[idx].email }}</p>
        </div>
      </div>
    </div>
    
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="check_gpa exampleRadios"
        value="1"
        v-model="form_showscore.complete"
      />
      <label class="form-check-label" for="exampleRadios1"> ได้รับทุน </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="check_gpa exampleRadios"
        value="0"
        v-model="form_showscore.complete"
      />
      <label class="form-check-label" for="exampleRadios2">
        ไม่ได้รับทุน
      </label>
    </div>
    <div class="end_interview">
      <div class="button-roleedit">
        <router-link
          class="menu-edit"
          :to="{
            name: 'uploadscore',
            params: {
              form_img: form_img,
              capital_id: capital_id,
              form_id: form_id,
              user_id: user_id,
            },
          }"
          ><button type="button" class="btn btn-danger">
            Back
          </button></router-link
        >
        <button type="button" class="btn-save" @click="svae_complete">
          Save
        </button>
      </div>
    </div>
    <Footer />
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
      isShow: false,
      user_id: null,
      form_id: null,
      capital_id: null,
      form_showscore: [
        {
          form_user: null,
          interviewscore: [],
          total_score: [],
        },
      ],
      set_score: [
        {
          score: null,
          email: null,
        },
      ],
      form_img: null,
      confirm: null,
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    if (!this.$store.state.login || this.$store.state.user.Role != 1) {
      this.$router.push({ name: "Login" });
    }
    if (this.$route.params.user_id) {
      console.log(this.$route.params);
      this.form_img = this.$route.params.form_img;
      this.capital_id = this.$route.params.capital_id;
      this.form_id = this.$route.params.form_id;
      this.upload_id = this.$route.params.upload_id;
      this.confirm = this.$route.params.confirm;
      this.user_id = this.$route.params.user_id;
    }
    this.show_score();
  },
  methods: {
    show_score() {
      this.http
        .post("show_score", {
          user_id: this.user_id,
        })
        .then((res) => {
          console.log(res.data);
          this.form_showscore = res.data[0];
          this.form_showscore.form_user = JSON.parse(res.data[0].data_user);
          this.form_showscore.interviewscore = JSON.parse(
            res.data[0].interviewscore
          );
          this.form_showscore.total_score = JSON.parse(res.data[0].total_score);
          console.log(this.form_showscore);
          this.isShow = true;
        });
    },
    svae_complete() {
      if(this.form_showscore.complete == 1)
      {
        this.http.put("update_complete",{
        complete:1,
        user_id:this.user_id
      })
      .then((res)=>{
        if (res.data.changedRows == 1) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "บันทึกสำเร็จ",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push({ name: "Statusinterview" });
          } else {
            Swal.fire({
              icon: "error",
              title: "บันทึกไม่สำเร้จ",
              text: "Something went wrong!",
              footer: '<a href="">Why do I have this issue?</a>',
            });
          }
      })
      }
    },
  },
};
</script>

<style>
.p-data {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.p-data h5,
p {
  display: flex;
  margin: 20px;
}
.p-data p {
  display: flex;
  margin: 20px;
  background-color: antiquewhite;
  width: 20%;
  height: 50px;
  justify-content: center;
  align-items: center;
}
.topic_scor2 {
  background-color: rgba(196, 196, 196, 1);
  margin: 30px auto;
  width: 60%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  overflow: hidden;
}
.topic_scor2 .input {
  display: flex;
  margin: 0 auto;
}

.topic_scor2 p,
textarea {
  margin: 0 auto;
  font-size: 20px;
  resize: none;
}
.container-scorelayer {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.container-scorelayer .form-check{
  display: flex;
  width: 20%;
  margin: 0 auto;
  text-align: left;

}
.container-scorelayer .form-check input ,label{
  margin: 0 20px;

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
</style>