<template>
  <div class="container-scorelayer">
    <div class="topic_scorcommit">
      <h2>ให้คะแนน</h2>
    </div>
    <h4>เกณฑ์การให้คะแนน</h4>
    <div class="main_scorcommit">
      <div
        class="topic_scor"
        v-for="(item, idx) in form_scorecommit.interviewscore"
        :key="idx"
      >
        <p>{{ item.topic }}</p>
        <span class="input">
          <textarea name="" id="" cols="5" rows="1" v-model="set_score[idx].score"></textarea>
          <p>/ {{ item.score }}</p>
        </span>
      </div>
    </div>
    <div class="end_interview">
        <div class="mt-5 mb-5 button-roleedit">
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
          <button type="button" class="btn-save" @click="update_score" >Save</button>
        </div>
      </div>
      <div class="footer-sc">
      <Footer/>
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
      check_email:false,
      user_id: null,
      form_id: null,
      capital_id: null,
      form_scorecommit: {
        interviewscore: null,
        commit: null,
      },
      set_score:[{
        score:null,
        email:null
      }],
      form_img: null,
      confirm: null,
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    if (!this.$store.state.login || this.$store.state.user.Role != 3) {
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
    this.show_topic();
  },
  methods: {
    show_topic() {
      this.http
        .post("show_topic_score", {
          user_id: this.user_id,
        })
        .then((res) => {
          console.log(res.data);
          this.form_scorecommit = res.data[0];
          this.form_scorecommit.interviewscore = JSON.parse(
            res.data[0].interviewscore
          );
          this.form_scorecommit.commit = JSON.parse(res.data[0].commit);
          this.set_email_to_score(this.form_scorecommit.commit)
        });
    },
    update_score(){
      for(let i = 0 ;i< this.set_score.length;i++){
        let checkIsIscore = /\d{2}/.test(this.set_score[i].score)
  
        if(!checkIsIscore){
          Swal.fire({
            title:'กรอกข้อมูลไม่ถูกต้อง!!',
            icon:'error'
          })
           return
        }
      }
      if(this.check_email){
         this.http.put("update_score",{
        set_score:this.set_score,
        user_id:this.user_id
      })
      .then((res)=>{
        console.log(res);
        if (res.data.changedRows == 1 ){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "ให้คะแนนเรียบร้อย",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push({ name: "Statusinterview" });
          } 
          else{
             Swal.fire({
            position: "center",
            icon: "error",
            title: "กรอกข้อมูลไม่ถูกต้อง",
            showConfirmButton: false,
            timer: 1500,
          });
          }
      })
      }
      else{
        
             Swal.fire({
            position: "center",
            icon: "error",
            title: "email ไม่ตรงกัน",
            showConfirmButton: false,
            timer: 1500,
          });
          
      }
      },
    set_email_to_score(data){
      for(let i = 0; i < data.length;i++){
        if(data[i].email == this.$store.state.user.email)
        {
          this.set_score[i].email = data[i].email
          this.check_email = true;
          break
        }
        else{
          this.check_email = false;
        }
      }
    }
  }
};
</script>

<style>
.footer-sc{
    display: flex;
    background-color: rgba(104, 12, 7, 1);
    bottom: 1;
    width: 100%;
    color: white;
    text-align: center;
    height: 5vh;
    align-items: center;
    margin-top: 5vh;

  }
.container-scorelayer {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}

.topic_scorcommit h2,
h4 {
  margin: 20px;
  color: rgba(104, 12, 7, 1);
}
.topic_scor {
  background-color: rgba(196, 196, 196, 1);
  margin: 30px auto;
  width: 55%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  overflow: hidden;
}
.topic_scor p,
textarea {
  margin: 0 auto;
  font-size: 20px;
  resize: none;
}
.topic_scor .input{

  display: flex;
  margin: 0 auto;
}
.topic_scor .input p,textarea{
  margin: 0 20px;
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
  /*display: flex;*/
  justify-content: space-between;
  margin: 10px 0;
}
.roleeditposition2 {
  /*display: flex;*/
  justify-content: space-between;
  margin: 10px 0;
}

.end-role_edit {
  text-align: end;
}
.button-roleedit button {
  font-size: 15px;
  margin:0 30px;
  height: 50px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(180, 45, 37, 1);
}
.button-roleedit .btn-save{
  background-color: rgba(37, 180, 51, 1);
} 

.footer-sc{
  margin-top: 500px;
}
</style>
