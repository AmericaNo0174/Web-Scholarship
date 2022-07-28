<template>
  <div class="container-addcapital">
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
            <!-- step -->
            <div class="add-text">
              <div
                v-for="(item, idx) in temp.arr_step"
                :key="idx"
                class="add-complece"
              >
                <label for="">หัวข้อ</label>
                <textarea
                  name="home"
                  class="inf form-control"
                  v-model="item.topic"
                  placeholder="topic"
                  cols="20"
                  rows="1"
                />
                <label for="">รายละเอียด</label>
                <textarea
                  name="home"
                  class="inf form-control"
                  v-model="item.detail"
                  placeholder="score"
                  cols="20"
                  rows="1"
                />
                <div>
                  <img :src="item.imageUpload" alt="" />
                </div>
                <button @click="delete_temp_step(idx)" class="btn-delete">
                  <i class="fas fa-trash-alt"></i>ลบทิ้ง
                </button>
              </div>
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
    <h2>แก้ไขขั้นตอนการสมัครขอทุน</h2>

    <!-- ตอนเพิ่มทุน -->
    <center>
      <div class="addcapital">
        <div class="add-capital1">
          <div>
            <div>
              <div
                v-for="(item, idx) in arr_step"
                :key="idx"
                class="add-complece"
              >
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
                <label for="typecapital">หัวข้อ: </label>
                <textarea type="text" v-model="item.topic" cols="50" rows="1" />
                <label for="namecapital">รายละเอียด: </label>
                <textarea
                  type="text"
                  v-model="item.detail"
                  cols="70"
                  rows="5"
                ></textarea>
                <button @click="delete_arr_step(idx)" class="btn-delete">
                  <i class="fas fa-trash-alt"></i>ลบทิ้ง
                </button>
               
              </div>
                <button
                @click="add_step"
                id="add-add"
                type="button"
                class="btn-add btn-danger"
              >
                <i class="fas fa-plus-circle"></i>เพิ่ม
              </button>
            </div>

            <button
              @click="set_step"
              id="save"
              type="button"
              class="btn-add btn-danger"
            >
              <i class="fas fa-plus-circle"></i>save
            </button>

            <!-- ตอนโชว์ทุนที่เพิ่มเข้าไป -->
            <div v-for="(item, idx) in step" :key="idx" class="add-complece">
              <div
                v-for="(item2, i) in item.arr_step"
                :key="i"
                class="add-complece"
              >
                <div>
                  <img :src="item2.imageUpload" alt="" />
                </div>
                <label for="typecapital">หัวข้อ: </label>
                <textarea
                  type="text"
                  v-model="item2.topic"
                  cols="50"
                  rows="1"
                  disabled
                />
                <label for="namecapital">รายละเอียด: </label>
                <textarea
                  type="text"
                  v-model="item2.detail"
                  cols="70"
                  rows="5"
                  disabled
                ></textarea>
              </div>
              <div class="d-capital">
                <button @click="delete_step(idx)" class="btn-delete">
                  <i class="fas fa-trash-alt"></i>ลบทิ้ง
                </button>

                <button
                  @click="edit(idx)"
                  class="btn-edit"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i class="fas fa-edit"></i>แก้ไข
                </button>
              </div>
            </div>
            <div class="add-button"></div>
          </div>
        </div>
        <div class="back-addcapital">
          <router-link class="back-capital" to="/Step"
            ><button id="cancle" type="button" class="btn btn-danger">
              CANCLE
            </button></router-link
          >
          <button
            @click="save_capital"
            id="save"
            type="button"
            class="btn btn-danger"
          >
            SAVE
          </button>
        </div>
      </div>
    </center>
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
      arr_step: [
        {
          imageUpload: null,
          topic: null,
          detail: null,
        },
      ],

      temp: {
        arr_step: null,
      },
      edit_idx: null,
      step: [],
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    if (!this.$store.state.login || this.$store.state.user.Role != 1) {
      this.$router.push({ name: "Login" });
    }
  },

  methods: {
    upload(event) {
      var self = this;
      for (let j = 0; j < self.arr_step.length; j++) {
        console.log('asdads',event.target.files[j]);
        var file = event.target.files[j];
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
          console.log("file.name", file.name);
          // Set imageSource data to show in UI
          self.arr_step[j].imageUpload = "data:image/png;base64," + imageSource;
        };
        
        reader.readAsArrayBuffer(file);
      }
    },

    save_capital() {
      console.log(this.step);
      this.http.post("add_step", this.step)
      .then((res) => {
        console.log(res);
        console.log(res.data.protocol41);
        if (res.data.protocol41 == true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "เพิ่มขั้นตอนสมัคสำเร็จ",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push({ name: "Step" });
        } else {
          Swal.fire({
            icon: "error",
            title: "เพิ่มขั้นตอนไม่สมัคสำเร็จ",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
      },
    //เพิ่มกล่องและรายละเอียดต่างๆของทุนทุน
    add_step() {
      this.arr_step.push({
        topic: this.topic,
        detail: this.detail,
        imageUpload: this.imageUpload,
      });
      this.topic = null;
      this.detail = null;
      this.imageUpload = null;
      console.log(this.arr_step);
    },
    set_step() {
      this.step.push({
        arr_step: this.arr_step,
      });
      this.arr_step = [];
      console.log(this.step);
    },
    //ลบข้อมูลทุนในช่องข้อมูลเก่าของทุนนั้นๆ
    delete_step: function (idx) {
      this.step.splice(idx, 1);
    },
    delete_temp_step: function (idx) {
      this.temp.arr_step.splice(idx, 1);
    },

    delete_arr_step: function (idx) {
      this.arr_step.splice(idx, 1);
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
.container-addcapital .modal-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
}
.container-addcapital .modal-body img {
  margin: 30px 0;
  width: 300px;
  height: 300px;
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

.add-detail {
  display: flex;
  margin: 60px 20px;
  justify-content: center;
  align-items: center;
}
.add-detail label {
  margin-right: 20px;
  font-size: 16px;
}
.add-text {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.add-text label {
  margin: 0 20px;
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
  border: 1px solid black;
  padding: 10px;
  justify-content: center;
  justify-content: space-between;
  margin: 10px;
}
.add-detail {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.add-complece img {
  width: 300px;
  height: 300px;
}
.add-complece .complece-text {
  /* text-align: left; */
  display: flex;
}
.add-complece .complece-text p {
  margin-bottom: 50px;
}
.add-complece .complece-int {
  text-align: left;
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
.addcapital .btn-edit {
  display: flex;
  text-align: left;
  height: 50px;
  width: 120px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: yellow;
}
.d-capital {
  display: flex;
  justify-content: center;
  align-items: center;
}
.addcapital .btn-delete {
  display: flex;
  margin: 0 10px;
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
#save{
   background-color: rgba(36, 255, 0, 1);
}
</style>