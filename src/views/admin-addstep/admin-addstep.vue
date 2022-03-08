<template>
  <div class="container-addcapital">
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
              <input type="text" v-model="temp.type" />
              <label for="namecapital">ชื่อทุน: </label>
              <input type="text" v-model="temp.name" />
              <label for="detailcapital">รายละเอียดทุน: </label>
              <input type="text" v-model="temp.detail" />
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
            <div class="add-int">
              <label for="namecapital">ชื่อคนมอบทุน: </label>
              <input type="text" v-model="temp.giver" />
              <label for="detailcapital">ทุนที่ได้รับ: </label>
              <input type="number" v-model="temp.money" />
              <label for="datecapital">วันที่เปิด: </label>
              <input type="date" v-model="temp.date" />
              <label for="datecapital">วันที่ปิด: </label>
              <input type="date" v-model="temp.date_end" />
            </div>
            <div>
              <img :src="imageUpload" alt="" />
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
          </div>
          <div class="add-text">
            <label for="typecapital">ประเภททุน: </label>
            <input type="text" v-model="type" />
            <label for="namecapital">ชื่อทุน: </label>
            <input type="text" v-model="name" />
            <label for="detailcapital">รายละเอียดทุน: </label>
            <input type="text" v-model="detail" />
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
              <label class="form-check-label"> สำเนาบัตรประชาชนผู้สมัคร </label>
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
          <div class="add-button"></div>
        </div>
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
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
      //       if(!window.isLogin){
      //           this.$router.push({name:'Login'})
    });
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
  height: 720px;
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
.addcapital .btn-edit {
  display: flex;
  text-align: left;
  height: 50px;
  width: 120px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: yellow;
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

