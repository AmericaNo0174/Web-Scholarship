<template>
  <div class="container-history">
    <h3>ประวัติรายชื่อผู้ได้รับทุน</h3>
   <div class="main-search">
      <div class="col-md-8">
        <div class="search">
          <input
            @change="show_complete()"
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
     <center v-if="isShow">
        <div class="table-history">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">รหัสนิสิต</th>
                <th scope="col" class="tb-name">ชื่อ-นามสกุล</th>
                <th scope="col">ประเภททุน</th>
                <th scope="col">ชื่อทุน</th>
                <th scope="col">วัน/เดือน/ปี</th>
                <th scope="col">ทุนการศึกษาที่ได้รับ</th>
              </tr>
            </thead>
            <tbody v-for="(item, idx) in list_name_complete" :key="idx">
              <tr >
                <th scope="row">1</th>
                <th>{{item.data_user.idstudent}}</th>
                <th >{{ item.data_user.fname + " " + item.data_user.lname }}</th>
                <th>{{item.type}}</th>
                <th>{{item.name}}</th>
                <td>{{item.date_confirm}}</td>
                <td>{{item.money}} บาท</td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
       <div class="end-history">
        <router-link class="back-status" to="/main"
        ><button type="button" class="btn btn-danger">Back</button></router-link
        >
        <!-- <div class="back-status">
          <button type="button" class="btn btn-danger">Back</button>
        </div> -->
        <div class="sum-history" >
          <p><i class="fas fa-coins"></i>ยอดเงินรวมทั้งสิน</p>
          <p type="output">{{summoney}} บาท</p>
        </div>
      </div>
    <div class="Footer-history">
      <Footer/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Footer from '../../components/footer.vue';
export default {
  components: {
    Footer,
  },
  data(){
    return{
      filterText:"",
      isShow:null,
      summoney:null,
      list_name_complete:[
        {
          data_user:null,
        }
      ]
    }
  },
   mounted() {
      this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
         if(!this.$store.state.login){
                this.$router.push({name:'Login'})
    }
    this.show_complete()
     },
    methods:{
      show_complete(){
        this.http.post("show_complete",{
          filter: this.filterText,
        }).then((res)=>{
          console.log(res);
          if(res.data.length > 0)
          {
            this.list_name_complete = res.data;
            this.isShow=true
            for (let i = 0; i < res.data.length; i++) {
            //   this.list_name_complete[i].data_user = JSON.parse(
            //     res.data[i].data_user
            //   );
              this.summoney += res.data[i].money
            //   console.log( this.summoney );
            }
            console.log(this.list_name_complete);
          }
          else{
            this.isShow=false
          }
        })
      }
    }
}
</script>

<style>
  .container-history{
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
  }
  .container-history h3{
    margin-top: 20px;
    font-weight: bold;
    color: rgba(104, 12, 7, 1);
  }
  .container-history label b{
    color:rgba(104, 12, 7, 1);
  }
  .container-history form{
    width: 97%;
    margin:25px auto;
    /* border: 1px solid blue; */
   
  }
  .container-history #ID,#Type,#Name,#Year{
    margin: 10px auto;
    align-items: center;
    justify-content: center;
  }
  .container-history form .button-search{
    display: flex;
    width: 120px;
    align-items: center;
    height: 50px;
  }
  .table-history{
    margin-top: 20px;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
  }
  .table-history table{
    width: 90%; 
    height: auto;
  }
    .table-history table thead {
    text-align: center;
     font-size: 20px;
    padding-block: 10px;

  }
  .table-history table tbody th{
    text-align: left;
    padding-block: 10px;
    padding-left: 10px;
    border: 0.5px solid black;
  }
  .table-history table tbody tr,td{
    text-align: center;
    padding-block: 10px;
    border: 0.5px solid black;
  } 
  .table-history table thead ,tr,th,td p{
    color: rgba(104, 12, 7, 1);
  } 
  .end-history{
    display: flex;
    justify-content: space-between;
    margin-top: 177px;
  }
  .sum-history{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 236, 235, 1);
    border-radius: 25px 25px 25px 25px;
    width: 300px;
    margin-right: 30px;
  }
  .sum-history p,i{
     /* border: 1px solid olivedrab; */
     margin: 0 5px;

  }
  .back-status button{
  font-size:15px;
  height: 50px;
  width:130px;
  border-radius: 25px 25px 25px 25px;
  color:#FFFFFF;
  background-color:rgba(180, 45, 37, 1);
  margin-left: 30px;
  }
  .Footer-history{
    margin-top: 282px;
  }
  
</style>