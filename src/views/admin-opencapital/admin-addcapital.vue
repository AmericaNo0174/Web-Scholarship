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
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="inputGroupFileAddon04"
            >
              บันทึก
            </button>
          </div>
          <div class="add-text">
            <label for="typecapital">ประเภททุน: </label>
            <input type="text" v-model="capital.type" />
            <label for="namecapital">ชื่อทุน: </label>
            <input type="text" v-model="capital.name" />
            <label for="detailcapital">รายละเอียดทุน: </label>
            <input type="text" v-model="capital.detail" />
            <label for="datecapital">วันที่เปิด: </label>
            <input type="date" v-model="capital.date" />
          </div>
          <div class="add-button">
            <button
              id="save-add"
              type="button"
              class="btn btn-danger"
              @click="save_capital"
            >
              บันทึก
            </button>
            <button id="delete-add" type="button" class="btn btn-danger">
              <i class="fas fa-trash-alt"></i>ลบทิ้ง
            </button>
          </div>
        </div>
      </div>




      <div class="back-addcapital">
        <button id="cancle" type="button" class="btn btn-danger">CANCLE</button>
        <button id="save" type="button" class="btn btn-danger">SAVE</button>
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
      capital: {
        img: "",
        type: "",
        name: "",
        detail: "",
        date: "",
      },
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
    save_capital(capital) {
      console.log(capital);
      // console.log(this.capital.img);
      console.log(this.capital.type);
      console.log(this.capital.detail);
      console.log(this.capital.data);
      this.http
        .post("capital", this.capital, {
          // img: capital.img,
          type: capital.type,
          name: capital.name,
          detail: capital.detail,
          date: capital.date,
        })
        .then((res) => {
          console.log(res);
          if (res.statusText === 'OK') {
            // ดึงทุนมาแสดง
            this.http
              .get('allCapital')
              .then((res) => {
                console.log("all capital form database \n", res);
                console.log(res.data) // [{},{},{}]
                console.log(res.data[0].details)
              });
            // this page refresh
          }
        });
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
  height: 60vh;
}
.addcapital .add-capital1 .input-group,
.add-text,
.add-button {
  margin: 30px 0;
}
.add-text {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.add-text input {
  margin: 0 20px;
}
.add-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-button button {
  margin: 0 20px;
  font-size: 20px;
  height: 40px;
  width: 130px;
  border-radius: 30px;
  color: #ffffff;
}
.back-addcapital {
  text-align: end;
  margin: 20px 0;
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