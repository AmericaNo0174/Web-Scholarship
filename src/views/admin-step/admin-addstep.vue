<template>
  <div class="container-addstep">
    <!-- The Modal ตอนแก้ไขทุน-->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">แก้ไขทุน</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="add-text">
              <label for="typecapital">หัวข้อ: </label>
              <input type="text" v-model="temp.heading" />
              <label for="namecapital">รายละเอียด: </label>
              <input type="text" v-model="temp.detail" />
            </div>
            
            <div>
              <img :src="temp.imageUpload" alt="" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="save_edit"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <h2>เพิ่มและแก้ไขขั้นตอน</h2>

    <!-- ตอนเพิ่มทุน -->
    <center>
      <div class="addstep">
        <div class="add-step1">
          <div class="input-group">
            <input
              type="file"
              class="form-control"
              ref="file"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              @change="upload"
              accept="image/*"
            />
            <!-- webkitdirectory -->
          </div>
          <div class="add-text">
            <label for="namecapital">หัวข้อ: </label>
            <input type="text" v-model="detail" />
            <label for="typecapital">รายละเอียด: </label>
            <input type="text" v-model="heading" />
          </div>
          <button
            @click="add_capital"
            id="add-add"
            type="button"
            class="btn-add btn-danger"
          >
            <i class="fas fa-plus-circle"></i>add
          </button>

          <!-- ตอนโชว์ทุนที่เพิ่มเข้าไป -->
          <div v-for="(item, idx) in step" :key="idx" class="add-complece">
            <div>
              <img :src="item.imageUpload" alt="" />
            </div>
            <div class="complece-text">
              <p>หัวข้อ: {{ item.heading }}</p>
              <p>รายละเอียด: {{ item.detail }}</p>
            </div>
            <div class="d-step">
              <button @click="delect_step(idx)" class="btn-delete">
                <i class="fas fa-trash-alt"></i>ลบ
              </button>
            </div>
            <button
              @click="edit(idx)"
              class="btn-edit"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <i class="fas fa-edit"></i>แก้ไข
            </button>
          </div>
          <div class="add-button"></div>
        </div>
      </div>
      <div class="back-addstep">
        <button id="cancle" type="button" class="btn btn-danger">CANCLE</button>
        <button
          @click="save_step"
          id="save"
          type="button"
          class="btn btn-danger"
        >
          SAVE
        </button>
      </div>
    </center>
    <Footer />
  </div>
</template>


<script>
import Footer from "../../components/footer.vue";
import axios from "axios";
// import "vue-croppa/dist/vue-croppa.css";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      imageUpload: null,
      heading: null,
      detail: null,
      temp: {
        imageUpload: null,
        heading: null,
        detail: null,
      },
      step: [],
      objectUrl: "",
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
      //       if(!window.isLogin){
      //           this.$router.push({heading:'Login'})
    });
  },

  methods: {
    upload(event) {
      var self = this;
      var file = event.target.files[0];
      console.log(file);
      var arrayBuffer;
      var reader = new FileReader();
      reader.onload = async function () {
        arrayBuffer = await new Uint8Array(reader.result);

        // Change ArrayBuffer to Base64
        var binary = "";
        var bytes = new Uint8Array(arrayBuffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        var imageArray = arrayBuffer; // For save to Database
        var imageSource = window.btoa(binary); // for show image to UI
        console.log("image Source", imageSource);
        console.log("image Array", imageArray);
        console.log("file.heading", file.heading);
        // Set imageSource data to show in UI
        self.imageUpload = "data:image/png;base64," + imageSource;
        console.log('res',self.imageUpload);
      };
      reader.readAsArrayBuffer(file);
    },


    save_step() {
      console.log('step',this.step);
      this.http.post("step", this.step).then((res) => {
        console.log('res',res);
      });
    },


    //เพิ่มกล่องและรายละเอียดต่างๆของทุนทุน
    add_capital() {
      this.step.push({
        imageUpload: this.imageUpload,
        heading: this.heading,
        detail: this.detail,
      });
      (this.imageUpload = null),
        (this.heading = null),
        (this.detail = null)
    },
    //ลบข้อมูลทุนในช่องข้อมูลเก่าของทุนนั้นๆ
    delect_step: function (idx) {
      this.step.splice(idx, 1);
    },
    //เอาข้อมูลไปแก้ใน arr เก่า
    edit(idx) {
      this.temp = this.step[idx];
      this.edit_idx = idx;
    },
    //บันทักทุนที่ทำการเพิ่มลงไปใน array เดิมที่แก้ไข
    save_edit() {
      this.step[this.edit_idx] = this.temp;
      this.edit_idx = null;
      console.log(this.step);
    },
  },
};
</script>



<style>
.container-addstep {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
.container-addstep h2 {
  margin: 30px 0;
  color: rgba(104, 12, 7, 1);
  font-weight: bold;
}
.container-addstep .modal-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 720px;
  align-items: center;
}
.container-addstep .modal-body img {
  margin: 30px 0;
  width: 300px;
  height: 300px;
}
.container-addstep .addstep {
  width: 80%;
  height: 60%;
  margin-bottom: 120px;
  background-color: grey;
  /* border: 1px solid black; */
  /* padding: 20px; */
}
.addstep .add-capital1 .input-group,
.add-text,
.add-button {
  margin: 65px 0;
}
.add-text {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.add-text input {
  margin: 0 10px;
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
.back-addstep {
  text-align: end;
  margin: 20px 0;
}
.addstep .btn-add {
  text-align: left;
  font-size: 15px;
  height: 50px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  margin: 30px 0;
}
.addstep .btn-edit {
  display: flex;
  text-align: left;
  height: 50px;
  width: 120px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: yellow;
}
.addstep .btn-delete {
  display: flex;
  margin: 0 10px;
  text-align: left;
  height: 50px;
  width: 120px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(255, 0, 0, 1);
}
.back-addstep button {
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