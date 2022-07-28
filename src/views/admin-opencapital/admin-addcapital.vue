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
            <div class="add-text">
              <label for="typecapital">ประเภททุน: </label>
              <textarea type="text" v-model="temp.type" cols="40" rows="1" />
              <label for="namecapital">ชื่อทุน: </label>
              <textarea type="text" v-model="temp.name" cols="55" rows="1" />
            </div>
            <div>
              <label for="detailcapital">รายละเอียดทุน: </label>
              <textarea
                name="home"
                class="inf form-control"
                v-model="temp.detail"
                placeholder="รายละเอียดทุน"
                cols="100"
                rows="5"
              ></textarea>
            </div>
            <div class="add-detail">
              <label for="detailcapital">เอกสารที่ต้องใช้: </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="สำเนาบัตรประชาชนผู้สมัคร"
                  v-model="temp.document"
                />
                <label class="form-check-label">
                  สำเนาบัตรประชาชนผู้สมัคร
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="สำเนาทะเบียนบ้านของผู้สมัคร"
                  v-model="temp.document"
                />
                <label class="form-check-label">
                  สำเนาทะเบียนบ้านของผู้สมัคร
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="รูปถ่ายนิสิต"
                  v-model="temp.document"
                />
                <label class="form-check-label"> รูปถ่ายนิสิต </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="รูปถ่ายที่พักอาศัยตามภูมิลำเนา"
                  v-model="temp.document"
                />
                <label class="form-check-label">
                  รูปถ่ายที่พักอาศัยตามภูมิลำเนา
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="ใบรายงานผลการศึกษา"
                  v-model="temp.document"
                />
                <label class="form-check-label"> ใบรายงานผลการศึกษา </label>
              </div>
            </div>
            <!-- score -->
            <div class="add-text">
            <div
              v-for="(item, idx) in temp.arr_score"
              :key="idx"
              class="add-complece"
            >
              <label for="">เกณฑ์การให้คะแนน</label>
              <textarea
                name="home"
                class="inf form-control"
                v-model="item.topic"
                placeholder="topic"
                cols="20"
                rows="1"
              />
              <label for="">ตัวคะแนน</label>
              <textarea
                name="home"
                class="inf form-control"
                v-model="item.score"
                placeholder="score"
                cols="20"
                rows="1"
              />
              <button @click="delete_temp_score(idx)" class="btn-delete">
                <i class="fas fa-trash-alt"></i>ลบทิ้ง
              </button>
            </div>
            </div>
            <!-- email -->
            <div class="add-text">
              <div
              v-for="(item, idx) in temp.arr_email"
              :key="idx"
              class="add-complece"
            >
              <label for="">ผู้สัมภาษณ์:</label>
              <textarea
                name="home"
                class="inf form-control"
                v-model="item.email"
                placeholder="XXX.X@ku.th"
                cols="20"
                rows="1"
              />
              <button @click="delete_temp_email(idx)" class="btn-delete">
                <i class="fas fa-trash-alt"></i>ลบทิ้ง
              </button>
            </div>
            </div>
            <div class="add-int">
              <label for="namecapital">ชื่อคนมอบทุน: </label>
              <input type="text" v-model="temp.giver" />
              <label for="detailcapital">ทุนที่ได้รับ: </label>
              <input type="number" v-model="temp.money" />
            </div>
            <div class="add-text">
              <label for="datecapital">วันที่เปิด: </label>
              <input type="date" v-model="temp.date" />
              <label for="datecapital">วันที่ปิด: </label>
              <input type="date" v-model="temp.date_end" />
              <label for="datecapital">เวลาประชุม: </label>
              <input type="time" v-model="temp.meeting" />
            </div>
            <div class="add-text">
              <label for="linkcapital">ลิงก์สัมภาษณ์: </label>
              <textarea
                v-model="temp.link"
                placeholder="https://www.facebook.com/?_rdc=2_rdr"
                cols="50"
                rows="1"
              />
            </div>
            <div class="add-text">
              <label for="">รายละเอียดวันนัดสัมภาษณ์</label>
              <textarea
                name="home"
                class="inf form-control"
                v-model="temp.interview_detail"
                placeholder="a แต่งกายชุดนิสิตสุภาพ
b. กล้องและไมค์โครโฟนพร้อมใช้งานได้
c. และอื่นๆ"
                cols="50"
                rows="5"
              />
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
    <h2>เพิ่มทุน</h2>

    <!-- ตอนเพิ่มทุน -->
    <center>
      <div class="addcapital">
        <div class="add-capital1">
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
          <div>
            <div class="add-text">
              <label for="typecapital">ประเภททุน: </label>
              <textarea type="text" v-model="type" cols="50" rows="1" />
              <label for="namecapital">ชื่อทุน: </label>
              <textarea
                type="text"
                v-model="name"
                cols="70"
                rows="1"
              ></textarea>
            </div>
            <div class="add-text">
              <label for="detailcapital">รายละเอียดทุน: </label>
              <textarea
                name="home"
                class="inf form-control"
                v-model="detail"
                placeholder="รายละเอียดทุน"
                cols="50"
                rows="5"
              ></textarea>
            </div>
            <div class="add-detail">
              <label for="detailcapital">เอกสารที่ต้องใช้: </label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="สำเนาบัตรประชาชนผู้สมัคร"
                  v-model="document"
                />
                <label class="form-check-label">
                  สำเนาบัตรประชาชนผู้สมัคร
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="สำเนาทะเบียนบ้านของผู้สมัคร"
                  v-model="document"
                />
                <label class="form-check-label">
                  สำเนาทะเบียนบ้านของผู้สมัคร
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="รูปถ่ายนิสิต"
                  v-model="document"
                />
                <label class="form-check-label"> รูปถ่ายนิสิต </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="รูปถ่ายที่พักอาศัยตามภูมิลำเนา"
                  v-model="document"
                />
                <label class="form-check-label">
                  รูปถ่ายที่พักอาศัยตามภูมิลำเนา
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="ใบรายงานผลการศึกษา"
                  v-model="document"
                />
                <label class="form-check-label"> ใบรายงานผลการศึกษา </label>
              </div>
            </div>
            <div class="add-text">
              <label for="namecapital">ชื่อคนมอบทุน: </label>
              <textarea
                v-model="giver"
                placeholder="นายก."
                cols="50"
                rows="1"
              />
              <label for="detailcapital">ทุนที่ได้รับ: </label>
              <textarea v-model="money"  placeholder="5000" cols="50" rows="1" />
            </div>
            <div class="add-text">
              <label for="linkcapital">ลิงก์สัมภาษณ์: </label>
              <textarea
                v-model="link"
                placeholder="https://www.facebook.com/?_rdc=2_rdr"
                cols="80"
                rows="1"
              />
            </div>
            <div>
              <div
                v-for="(item, idx) in arr_score"
                :key="idx"
                class="add-complece"
              >
                <label for="">เกณฑ์การให้คะแนน</label>
                <textarea
                  name="home"
                  class="inf form-control"
                  v-model="item.topic"
                  placeholder="topic"
                  cols="20"
                  rows="1"
                />
                <label for="">ตัวคะแนน</label>
                <textarea
                  name="home"
                  class="inf form-control"
                  v-model="item.score"
                  placeholder="score"
                  cols="20"
                  rows="1"
                />
                <button @click="delete_score(idx)" class="btn-delete">
                  <i class="fas fa-trash-alt"></i>ลบทิ้ง
                </button>
              </div>

              <button
                @click="add_score"
                id="add-add"
                type="button"
                class="btn-add btn-danger"
              >
                <i class="fas fa-plus-circle"></i>เกณฑ์
              </button>
            </div>
            <div
              v-for="(item, idx) in arr_email"
              :key="idx"
              class="add-complece"
            >
              <label for="">ผู้สัมภาษณ์: </label>
              <textarea
                name="home"
                class="inf form-control"
                v-model="item.email"
                placeholder="XXX.X@ku.th"
                cols="20"
                rows="1"
              />
              <button @click="delete_email(idx)" class="btn-delete">
                <i class="fas fa-trash-alt"></i>ลบทิ้ง
              </button>
            </div>
            <button
              @click="add_email"
              id="add-add"
              type="button"
              class="btn-add btn-danger"
            >
              <i class="fas fa-plus-circle"></i>email
            </button>
            <div class="add-text">
              <label for="">รายละเอียดวันนัดสัมภาษณ์</label>
              <textarea
                name="home"
                class="inf form-control"
                v-model="interview_detail"
                placeholder="a แต่งกายชุดนิสิตสุภาพ
b. กล้องและไมค์โครโฟนพร้อมใช้งานได้
c. และอื่นๆ"
                cols="50"
                rows="5"
              />
            </div>
            <div class="add-text">
              <label for="datecapital">วันที่เปิด: </label>
              <input type="date" v-model="date" />
              <label for="datecapital">วันที่ปิด: </label>
              <input type="date" v-model="date_end" />
              <label for="datecapital">เวลาประชุม: </label>
              <input type="time" v-model="meeting" />
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
            <div v-for="(item, idx) in capital" :key="idx" class="add-complece">
              <div>
                <img :src="item.imageUpload" alt="" />
              </div>
              <div class="add-text">
                <label for="typecapital">ประเภททุน: </label>
                <textarea
                  type="text"
                  v-model="item.type"
                  cols="50"
                  rows="1"
                  disabled
                />
                <label for="namecapital">ชื่อทุน: </label>
                <textarea
                  type="text"
                  v-model="item.name"
                  cols="70"
                  rows="1"
                  disabled
                ></textarea>
              </div>
              <div class="add-text">
                <label for="detailcapital">รายละเอียดทุน: </label>
                <textarea
                  name="home"
                  class="inf form-control"
                  v-model="item.detail"
                  placeholder="รายละเอียดทุน"
                  cols="50"
                  rows="5"
                  disabled
                ></textarea>
              </div>
              <div class="add-detail">
                <label for="detailcapital">เอกสารที่ต้องใช้: </label>
                <p>{{ item.document.join(" / ") }}</p>
              </div>
              <div class="add-text">
                <label for="namecapital">ชื่อคนมอบทุน: </label>
                <!-- <input type="text" v-model="giver" /> -->
                <textarea
                  v-model="item.giver"
                  placeholder="นายก."
                  cols="50"
                  rows="1"
                  disabled
                />
                <label for="detailcapital">ทุนที่ได้รับ: </label>
                <!-- <input type="number" v-model="money" /> -->
                <textarea
                  v-model="item.money"
                  placeholder="500"
                  cols="50"
                  rows="1"
                  disabled
                />
              </div>
              <div class="add-text">
                <label for="linkcapital">ลิงก์สัมภาษณ์: </label>
                <textarea
                  v-model="item.link"
                  placeholder="https://www.facebook.com/?_rdc=2_rdr"
                  cols="80"
                  rows="1"
                  disabled
                />
              </div>
              <div class="add-text">
                <div
                  v-for="(item2, i) in item.arr_score"
                  :key="i"
                  class="add-complece"
                >
                  <label for="">เกณฑ์การให้คะแนน</label>
                  <textarea
                    name="home"
                    class="inf form-control"
                    v-model="item2.topic"
                    placeholder="topic"
                    cols="20"
                    rows="1"
                    disabled
                  />
                  <label for="">ตัวคะแนน</label>
                  <textarea
                    name="home"
                    class="inf form-control"
                    v-model="item2.score"
                    placeholder="score"
                    cols="20"
                    rows="1"
                    disabled
                  />
                </div>
              </div>
              <div class="add-text">
                <div
                  v-for="(item2, i) in item.arr_email"
                  :key="i"
                  class="add-complece"
                >
                  <label for="">ผู้สัมภาษณ์: </label>
                  <textarea
                    v-model="item2.email"
                    placeholder="topic"
                    cols="20"
                    rows="1"
                    disabled
                  />
                </div>
              </div>
              <div class="add-text">
                <label for="">รายละเอียดวันนัดสัมภาษณ์</label>
                <textarea
                  name="home"
                  class="inf form-control"
                  v-model="item.interview_detail"
                  placeholder="a แต่งกายชุดนิสิตสุภาพ
b. กล้องและไมค์โครโฟนพร้อมใช้งานได้
c. และอื่นๆ"
                  cols="50"
                  rows="5"
                  disabled
                />
              </div>
              <div class="add-text">
                <label for="datecapital">วันที่เปิด: </label>
                <input type="date" v-model="item.date" disabled />
                <label for="datecapital">วันที่ปิด: </label>
                <input type="date" v-model="item.date_end" disabled />
                <label for="datecapital">เวลาประชุม: </label>
                <input type="time" v-model="item.meeting" disabled />
              </div>
              <div class="d-capital">
                <button @click="delete_capital(idx)" class="btn-delete">
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
          <router-link class="back-capital" to="/open_capital"
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
// import "vue-croppa/dist/vue-croppa.css";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      imageUpload: null,
      type: null,
      name: null,
      detail: null,
      document: [],
      money: null,
      giver: null,
      date: null,
      date_end: null,
      link: null,
      arr_score: [
        {
          topic: null,
          score: null,
        },
      ],
      arr_email: [
        {
          email: null,
        },
      ],
      interview_detail: null,
      meeting: null,
      temp: {
        imageUpload: null,
        type: null,
        name: null,
        detail: null,
        document: null,
        money: null,
        giver: null,
        date: null,
        date_end: null,
        link: null,
        arr_score: null,
        arr_email: null,
        interview_detail: null,
        meeting: null,
      },
      edit_idx: null,
      capital: [],
      croppa: {},
      objectUrl: "",
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
        console.log("file.name", file.name);

        // Set imageSource data to show in UI
        self.imageUpload = "data:image/png;base64," + imageSource;
        console.log("res", self.imageUpload);
      };
      reader.readAsArrayBuffer(file);
    },

    save_capital() {
      console.log(this.capital);
      this.http.post("capital", this.capital).then((res) => {
        console.log(res);
        console.log(res.data.protocol41);
        if (res.data.protocol41 == true) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "เพิ่มทุนสำเร็จ",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push({ name: "Open" });
        } else {
          Swal.fire({
            icon: "error",
            title: "เพิ่มทุนไม่สำเร็จ",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
    },
    //เพิ่มกล่องและรายละเอียดต่างๆของทุนทุน
    add_score() {
      this.arr_score.push({
        topic: this.topic,
        score: this.score,
      });
      this.topic = null;
      this.score = null;
      console.log(this.arr_score);
    },
    add_email() {
      this.arr_email.push({
        email: this.email,
      });
      this.email = null;
      console.log(this.arr_email);
    },
    add_capital() {
      // let checkIsmoney= /[0-9]/.test(this.money)
      // let checkIsscore= /[0-9]/.test(this.arr_score.score)
      //   if(!checkIsscore || !checkIsmoney){
      //     Swal.fire({
      //       title:'กรอกข้อมูลไม่ถูกต้อง!!',
      //       icon:'error'
      //     })
      //      return
      //   }
      this.capital.push({
        imageUpload: this.imageUpload,
        type: this.type,
        name: this.name,
        detail: this.detail,
        document: this.document,
        money: this.money,
        giver: this.giver,
        date: this.date,
        date_end: this.date_end,
        link: this.link,
        arr_score: this.arr_score,
        arr_email: this.arr_email,
        interview_detail: this.interview_detail,
        meeting: this.meeting,
      });
      (this.imageUpload = null),
        (this.type = null),
        (this.name = null),
        (this.detail = null),
        (this.document = []),
        (this.money = null),
        (this.giver = null),
        (this.date = null),
        (this.date_end = null);
      this.meeting = null;
      this.link = null;
      this.arr_score = [];
      this.arr_email = [];
      this.interview_detail = null;
      console.log(this.capital);
    },
    //ลบข้อมูลทุนในช่องข้อมูลเก่าของทุนนั้นๆ
    delete_capital: function (idx) {
      this.capital.splice(idx, 1);
    },
    delete_temp_score: function (idx) {
      this.temp.arr_score.splice(idx, 1);
    },
    delete_temp_email: function (idx) {
      this.temp.arr_email.splice(idx, 1);
    },
    delete_score: function (idx) {
      this.arr_score.splice(idx, 1);
    },
    delete_email: function (idx) {
      this.arr_email.splice(idx, 1);
    },
    //เอาข้อมูลไปแก้ใน arr เก่า
    edit(idx) {
      this.temp = this.capital[idx];
      this.edit_idx = idx;
    },
    //บันทักทุนที่ทำการเพิ่มลงไปใน array เดิมที่แก้ไข
    save_edit() {
      this.capital[this.edit_idx] = this.temp;
      this.edit_idx = null;
      console.log(this.capital);
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
</style>