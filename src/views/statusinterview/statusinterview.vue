<template>
  <div class="container-statusinterview">
    <h2>รายชื่อผู้มีสิททธิ์สัมภาษณ์</h2>
      <div class="main-search">
        <div class="col-md-8">
          <div class="search">
            <input
            @change="show_complete()"
            type="text"
            title="Type in a name"
            class="form-control"
            placeholder="ชื่อ/รหัสนิสิต"
            v-model="searchText"
            />
            <button class="btn btn-dark"><i class="fa fa-search"></i>Search</button> 
          </div>
        </div>
      </div>
      <center>
        <div class="table-statusinterview" v-if="isShow">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">รหัสนิสิต</th>
                <th scope="col">ชื่อ-นามสกุล</th>
                <th scope="col">สาขา</th>
                <th scope="col">ทุนที่ได้รับ</th>
                <th scope="col">วันนัดสัมภาษณ์</th>
                <th v-if="($store.state.user.Role == 1 ||$store.state.user.Role == 3)" scope="col">ข้อมูลนิสิต/ให้คะแนน</th>
              </tr>
            </thead>
            <tbody v-for="(item, idx) in form_statusinterview" :key="idx">
              <tr>
                <th scope="row">1</th>
                <th>{{item.data_user.idstudent}}</th>
                <th>{{ item.data_user.fname + " " + item.data_user.lname }}</th>
                <td>{{item.data_user.offset}}</td>
                <td>{{item.name}}</td>
                <td>{{item.date_confirm}}</td>
                <router-link v-if="$store.state.user.Role == 1 ||$store.state.user.Role == 3"
                  :to="{
                    name:'formscore',
                    params: {
                      user_id: item.user_id,
                      capital_id:item.capital_id,
                      form_id:item.form_id,
                    },
                  }"
                >
                <i  class = "fas fa-search" ></i
                ></router-link>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    <div class="end-statusinterview">
        <!-- <div class="back-statusinterview">
          <button type="button" class="btn btn-danger">Back</button>
        </div> -->
        <router-link class="back-statusinterview" to="/open_capital"
        ><button type="button" class="btn btn-danger">Back</button></router-link
        >
    </div>
    <div class="footer-sin">
    <Footer/>
    </div>
</div>
</template>


<script>
import axios from "axios";
import Footer from '../../components/footer.vue'
export default {
  components:{
    Footer
  },
  data(){
    return{
      searchText:"",
      isShow: false,
      form_statusinterview: [
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
          complete:null
        },
      ],
    }
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
      if(!this.$store.state.login){
          this.$router.push({name:'Login'})
      }
      this.show_user();
      this.show_complete();
    },
    methods:{
      show_complete(){
        this.http
        .post("searchshowcomplete",{
          filter:this.searchText,
        })
        .then((res)=>{
          //เช็คว่ากรอกข้อมูลไปรึยัง
          if (res.data.length > 0) {
            this.form_statusinterview = res.data;
            console.log("res:", this.form_statusinterview);
            this.isShow = true;
            // แปลง string to json
            for (let i = 0; i < res.data.length; i++) {
              this.form_statusinterview[i].data_user = JSON.parse(
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
      show_user(){
        this.http.get("show_confirm")
        .then((res)=>{ 
          for(let i =0 ;i<res.data.length;i++){
            this.http.post("add_sumpoint",{
              confirm_id:res.data[i].confirm_id,
              capital_id: res.data[i].capital_id,
              user_id:res.data[i].user_id,
            })
          }
        })
      }
    }
}
</script>

<style >
  .container-statusinterview{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-statusinterview h2{
    margin-top: 25px;
    color: rgba(104, 12, 7, 1);
  }
  .main-search{
    margin-top: 25px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .search{
    display: flex;
    height: 40px;
    width: 100%;
  }
  .search button,i{
    display: flex;
    align-items: center;
  }
  .table-statusinterview{
    margin-top: 20px;
    width: 90%;
    height: 50vh;
    justify-content: center;
    align-items: center;
  /* background-color: black; */
  }
  .table-statusinterview table{
    width: 80%; 
    margin: 30px;
    padding-block: 30px;
  }
   .table-statusinterview table td,th,thead,tbody,tr{
     border: 0.5px solid black;
   }
  .table-statusinterview table thead {
    text-align: center;
  }
  .table-statusinterview table thead th{
    /* padding-block: 10px;
    tab-size: 10px; */
    text-align: center;
    border: 1.2px solid black;
  }
  .table-statusinterview table tbody th{
    text-align: left;
    padding-left: 10px;
    border: 0.2px solid black;
  }
  .table-statusinterview table tbody tr,td{
    text-align: center;
  }
  .table-statusinterview .table button{
    color: rgba(255, 0, 0, 1);
  }
  .end-statusinterview{
    display: flex;
    justify-content: space-between;
    bottom: 1;
    margin: 32px 0;
  }
  .check-statusinterview {
    display: flex;
  }
  .check-statusinterview p,i{
    font-size: 18px;
    display: flex;
  align-items: center;
  }
  .back-statusinterview button{
    font-size:15px;
    height: 50px;
    width:130px;
    border-radius: 25px 25px 25px 25px;
    color:#FFFFFF;
    background-color:rgba(180, 45, 37, 1);
    margin-left: 30px;
    }
  .footer-sin{
    margin-top: 125px;
  }
</style>