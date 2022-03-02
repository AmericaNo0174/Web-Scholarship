<template>
  <div class="container-addcapital">
    <h2>เพิ่มทุน</h2>
    <center>
      <div class="addcapital">
        <div class="add-capital1">
          <div class="input-group">
            <input
              type="file"
              class="form-control"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
            />
          </div>
          <div class="add-text">
            <label for="typecapital">ประเภททุน: </label>
            <input type="text" v-model="type" />
            <label for="namecapital">ชื่อทุน: </label>
            <input type="text" v-model="name" />
            <label for="detailcapital">รายละเอียดทุน: </label>
            <input type="text" v-model="detail" />
            <label for="detailcapital">เอกสารที่ต้องใช้: </label>
            <input type="text" v-model="document" />
          </div>
          <div class="add-int">
            <label for="namecapital">ชื่อคนมอบทุน: </label>
            <input type="text" v-model="giver" />
            <label for="detailcapital">ทุนที่ได้รับ: </label>
            <input type="number" v-model="money" />
            <label for="datecapital">วันที่เปิด: </label>
            <input type="date" v-model="date" />
            <label for="datecapital">วันที่ปิด: </label>
            <input type="date" v-model="date_end" />
          </div>
          <button
            @click="add_capital"
            id="add-add"
            type="button"
            class="btn-add btn-danger"
          >
            <i class="fas fa-plus-circle"></i>add
          </button>
          <!-- เอาตัวทุนเข้าไปเก็บในนี้ -->
          <div v-for="(item, idx) in capital" :key="idx" class="add-complece">
            <div>
              <img
                src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
              />
            </div>
            <div class="complece-text">
              <p>ประเภททุน: {{ item.type }}</p>
              <p>ชื่อทุน: {{ item.name }}</p>
              <p>รายละเอียดทุน: {{ item.detail }}</p>
              <p>เอกสารที่ต้องใช้: {{ item.document }}</p>
            </div>
            <div class="complece-int">
              <p>ชื่อคนมอบทุน: {{ item.giver }}</p>
              <p>ทุนที่ได้รับ: {{ item.money }}</p>
              <p>วันที่เปิด: {{ item.date }}</p>
              <p>วันที่ปิด: {{ item.date_end }}</p>
            </div>
            <div class="d-capital">
              <button @click="delete_capital(idx)" class="btn-delete">
                <i class="fas fa-trash-alt"></i>ลบทิ้ง
              </button>
            </div>
          </div>
          <div class="add-button"></div>
        </div>
      </div>
      <div class="back-addcapital">
        <button id="cancle" type="button" class="btn btn-danger">CANCLE</button>
        <button @click="save_capital" id="save" type="button" class="btn btn-danger">SAVE</button>
      </div>
    </center>
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
      // img: "",
      type: "",
      name: "",
      detail: "",
      document: "",
      money: "",
      giver: "",
      date: "",
      date_end: "",
      capital: [],
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
      //       if(!window.isLogin){
      //           this.$router.push({name:'Login'})
    });
  },
  methods: {
    // upload(event){
    //   var file=event.target.files[0]
    //   this.capital.img = file
    // },
    save_capital() {
      console.log(this.capital);
    //   // console.log(this.capital.img);
    //   // // console.log("this.capital.img");
      this.http.post("capital", this.capital).then((res) => {
        console.log(res);
    //     //     if (res.statusText === "OK") {
    //     //       // ดึงทุนมาแสดง
    //     //       this.http.get("allCapital").then((res) => {
    //     //         console.log("all capital form database \n", res);
    //     //         console.log(res.data);
    //     //         // this.savecapital = res.data
    //     //         // console.log(this.savecapital) // [{},{},{}]
    //     //         // console.log(res.data[0].details)
    //     //       });
    //     //       // this page refresh
    //     //     }
      });
    },
    add_capital() {
      this.capital.push({
        // img: "",
        type: this.type,
        name: this.name,
        detail: this.detail,
        document: this.document,
        money: this.money,
        giver: this.giver,
        date: this.date,
        date_end: this.date_end,
      });
      (this.type = null),
        (this.name = null),
        (this.detail = null),
        (this.document = null),
        (this.money = null),
        (this.giver = null),
        (this.date = null),
        (this.date_end = null);
    },
    delete_capital: function (idx) {
      this.capital.splice(idx, 1);
    },
  },
};
</script>



<style>
.container-addcapital {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.container-addcapital h2 {
  margin: 30px 0;
  color: rgba(104, 12, 7, 1);
  font-weight: bold;
}
.container-addcapital .addcapital {
  width: 80%;
  height: 60%;
  /* border: 1px solid black; */
  /* padding: 20px; */
}
.addcapital .add-capital1 .input-group,
.add-text,
.add-button {
  margin: 65px 0;
}
.add-text {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.add-int {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.add-int input {
  margin: 0 10px;
}
.add-text input {
  margin: 0 10px;
}
.add-complece {
  display: flex;
  border: 1px solid black;
  padding: 10px;
  justify-content: center;
  justify-content: space-between;
  margin: 10px;
}
.add-complece img {
  width: 300px;
  height: 300px;
}
.add-complece .complece-text {
  text-align: left;
  width: 350px;
}
.add-complece .complece-text p {
  margin-bottom: 50px;
}
.add-complece .complece-int {
  text-align: left;
  width: 350px;
}
.add-complece .complece-int p {
  margin-bottom: 50px;
}
.back-addcapital {
  text-align: end;
  margin: 20px 0;
}
.addcapital .btn-add {
  text-align: left;
  font-size: 15px;
  height: 50px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  margin: 30px 0;
}
.addcapital .btn-delete{
  text-align: left;
  height: 50px;
  width: 120px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(255, 0, 0, 1);
}
.back-addcapital button {
  font-size: 15px;
  height: 50px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  margin-right: 40px;
}
#save-add {
  background-color: rgba(36, 255, 0, 1);
}
#delete-add {
  background-color: rgba(255, 0, 0, 1);
}

</style>