<template >
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>กรอกข้อมูลส่วนตัว</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
    </head>
    <body class="container-from">
      <!-- หัวข้อ -->
      <div class="container mt-5 mb-4">
        <h1 id="h01"><b>กรอกข้อมูลสำหรับสมัครขอรับทุนการศึกษา</b></h1>
        <h2 class="h02"><b>ประวัติส่วนตัว</b></h2>
      </div>

      <div class="container mb-4">
        <!-- ชื่อและนามสกุล -->

        <div class="input-group mb-4">
          <span class="boxf input-group-text"> ชื่อและนามสกุล </span>
          <input
            type="text"
            aria-label="First name"
            class="inf form-control"
            v-model="form_user.fname"
            placeholder="กรุณาระบุชื่อ"
            required
            disabled
          />
          <input
            type="text"
            aria-label="Last name"
            class="inf form-control"
            v-model="form_user.lname"
            placeholder="กรุณาระบุนามสกุล"
            disabled
          />
        </div>
        <!-- รหัสนิสิต ชั้นปี -->
        <div class="input-group mb-4">
          <span class="boxf input-group-text"> รหัสประจำตัวนิสิต </span>
          <input
            type="number"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            maxlength="10"
            pattern="/^-?\d+\.?\d*$/"
            class="inf form-control"
            v-model="form_user.idstudent"
            placeholder="กรุณากรอกรหัสนิสิต"
            disabled
          />
          <span class="boxf input-group-text"> ชั้นปีที่ </span>
          <input
            type="number"
            class="inf form-control"
            v-model="form_user.grade"
            max="8"
            min="1"
            value="1"
            disabled
          />
        </div>

        <!-- วันเกิด อายุ -->
        <div class="input-group mb-4">
          <span class="boxf input-group-text"> วันเกิด </span>
          <input
            type="date"
            name="date"
            class="inf form-control"
            v-model="form_user.birthday"
            disabled
          />
          <span class="boxf input-group-text"> อายุ </span>
          <input
            type="number"
            name="age"
            max="100"
            min="1"
            class="inf form-control"
            v-model="form_user.age"
            disabled
          /><span class="boxf input-group-text"> ปี </span>
        </div>

        <div class="input-group mb-4">
          <span class="boxf input-group-text"> รหัสประจำตัวประชาชน </span>
          <input
            type="number"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            maxlength="13"
            pattern="/^-?\d+\.?\d*$/"
            class="inf form-control"
            v-model="form_user.idcard"
            placeholder="รหัสประจำตัวประชาชน13หลัก"
            disabled
          />
        </div>

        <div class="input-group mb-4">
          <span class="boxf input-group-text"> สัญชาติ </span>
          <input
            type="text"
            class="inf form-control"
            v-model="form_user.nationality"
            disabled
          />
          <span class="boxf input-group-text"> เชื้อชาติ </span>
          <input
            type="text"
            class="inf form-control"
            v-model="form_user.origin"
            disabled
          />
          <span class="boxf input-group-text"> ศาสนา </span>
          <input
            type="text"
            class="inf form-control"
            v-model="form_user.religion"
            disabled
          />
        </div>

        <!-- ภาคเรียน -->
        <div class="mb-4">
          <label for="season" class="laf from-label"
            ><b>ภาคเรียน</b
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <div class="form-check form-check-inline">
            <input
              class="inf form-check-input"
              v-model="form_user.simester"
              type="radio"
              name="simester flexRadioDefault"
              value="ภาคปกติ"
              disabled
            />
            <label class="laf form-check-label" for="inlineRadio1">
              ภาคปกติ
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="inf form-check-input"
              v-model="form_user.simester"
              type="radio"
              name="simester flexRadioDefault"
              value="ภาคพิเศษ"
              disabled
            />
            <label class="laf form-check-label" for="inlineRadio2">
              ภาคพิเศษ
            </label>
          </div>
        </div>

        <!-- คณะ สาขา -->
        <div class="input-group mb-4">
          <span class="boxf input-group-text"> คณะ </span>
          <input
            type="text"
            v-model="form_user.faculty"
            class="inf form-control"
            placeholder="ระบุคณะที่เรียน"
            disabled
          />
          <span class="boxf input-group-text"> สาขา </span>
          <input
            type="text"
            v-model="form_user.offset"
            class="inf form-control"
            placeholder="ระบุสาขาที่เรียน"
            disabled
          />
        </div>

        <!-- คะแนนเฉลี่ยสะสม -->
        <div div class="input-group mb-4">
          <span class="boxf input-group-text"> เกรดเฉลี่ยสะสม </span>
          <input
            type="number"
            step="0.01"
            max="4"
            min="0"
            pattern="/^-?\d+\+-?\d*$/"
            class="inf form-control"
            placeholder="เกรดเฉลี่ยสะสม"
            v-model="form_user.gpa"
            disabled
          />
          <span class="boxf input-group-text"> อาจารย์ที่ปรึกษา </span>
          <input
            type="text"
            class="inf form-control"
            name="lecture"
            placeholder="กรุณาระบุชื่ออาจารย์ที่ปรึกษา"
            v-model="form_user.professor"
            disabled
          />
        </div>

        <div class="mb-4">
          <label class="laf form-label" for="address"
            ><b> ที่อยู่ปัจจุบัน(สามารถติดต่อได้) </b></label
          >
          <textarea
            name=""
            class="inf form-control"
            cols="30"
            rows="3"
            placeholder="กรุณาระบุที่อยู่ปัจจุบันของคุณ"
            v-model="form_user.address"
            disabled
          ></textarea>
        </div>
        <div class="input-group mb-4">
          <span class="boxf input-group-text"> Email </span>
          <input
            type="email"
            class="inf form-control"
            name="email"
            placeholder="example@gmail.com"
            v-model="form_user.email"
            disabled
          />
        </div>
        <div class="input-group mb-5">
          <span class="boxf input-group-text"> เบอร์โทรศัพท์ </span>
          <input
            type="tel"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            maxlength="10"
            pattern="/^-?\d+\.?\d*$/"
            class="inf form-control"
            name="phone"
            placeholder="กรุณาระบุเบอร์โทรศัพท์ที่ติดต่อได้"
            v-model="form_user.phonenumber"
            disabled
          />
        </div>
        <!-- father -->
        <div>
          <h2 class="h02 mb-4"><b> ประวัติครอบครัว </b></h2>

          <!-- ชื่อนามสกุลบิดา -->
          <div class="input-group mb-4">
            <span class="boxf input-group-text"> ชื่อและนามสกุลบิดา </span>
            <input
              type="text"
              aria-label="First name"
              class="inf form-control"
              v-model="form_family.d_fname"
              placeholder="ชื่อบิดา"
              disabled
            />
            <input
              type="text"
              aria-label="Last name"
              class="inf form-control"
              v-model="form_family.d_lname"
              placeholder="นามสกุลบิดา"
              disabled
            />
            <span class="boxf input-group-text"> อายุ </span>
            <input
              type="number"
              class="inf form-control"
              v-model="form_family.d_age"
              name="age"
              max="99"
              min="1"
              disabled
            /><span class="boxf input-group-text"> ปี </span>
          </div>

          <!-- สภานภาพบิดา -->
          <div class="mb-4">
            <label label for="season" class="laf from-label"
              ><b> สถานภาพ </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>

            <div class="form-check form-check-inline">
              <input
                class="inf form-check-input"
                v-model="form_family.d_status"
                type="radio"
                name="d_status flexRadioDefault"
                value="ยังมีชีวิต"
                disabled
              />
              <label class="laf form-check-label" for="inlineRadio1">
                ยังมีชีวิต
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="inf form-check-input"
                type="radio"
                name="d_status flexRadioDefault"
                v-model="form_family.d_status"
                value="ถึงแก่กรรรม"
                disabled
              />
              <label class="laf form-check-label" for="inlineRadio2">
                ถึงแก่กรรรม
              </label>
            </div>
          </div>
          <!-- อาชีพ รายได้บิด -->
          <div div class="input-group mb-4">
            <span class="boxf input-group-text"> อาชีพ </span>
            <input
              type="text"
              class="inf form-control"
              v-model="form_family.d_job"
              placeholder="ประกอบอาชีพ"
              disabled
            />
            <span class="boxf input-group-text"> รายได้เดือนละ </span>
            <input
              type="text"
              class="inf form-control"
              name="lecture"
              placeholder="รายได้ต่อเดือนบิดา"
              v-model="form_family.d_money"
              disabled
            />
            <span class="boxf input-group-text"> บาท </span>
          </div>

          <!-- สถานที่ทำงาน -->
          <div div class="input-group mb-4">
            <span class="boxf input-group-text"> สถานที่ทำงาน </span>
            <input
              type="text"
              class="inf form-control"
              v-model="form_family.d_worklocation"
              placeholder="สถานที่ทำงานบิดา"
              disabled
            />
          </div>

          <!-- ที่อยู่อาศัยบิดา -->
          <div class="mb-4">
            <label for="laf home" class="laf"><b> ที่อยู่อาศัย </b></label>
            <textarea
              name="home"
              class="inf form-control"
              v-model="form_family.d_location"
              placeholder="ที่อยุ่อาศัยบิดา"
              cols="50"
              rows="3"
              disabled
            ></textarea>
          </div>

          <!-- เบอร์โทรศัพท์บิดา -->
          <div class="input-group mb-4">
            <span class="boxf input-group-text"> เบอร์โทรศัพท์ </span>
            <input
              type="tel"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="10"
              pattern="/^-?\d+\.?\d*$/"
              class="inf form-control"
              name="phone"
              v-model="form_family.d_phonenumber"
              placeholder="เบอร์โทรศัพท์บิดา"
              disabled
            />
          </div>
        </div>

        <!-- mother -->

        <!-- ชื่อนามสกุลบิดา -->
        <div class="input-group mb-4">
          <span class="boxf input-group-text"> ชื่อและนามสกุลมารดา </span>
          <input
            type="text"
            v-model="form_family.m_fname"
            aria-label="First name"
            class="inf form-control"
            placeholder="ชื่อมารดา"
            disabled
          />
          <input
            type="text"
            v-model="form_family.m_lname"
            aria-label="Last name"
            class="inf form-control"
            placeholder="นามสกุลมารดา"
            disabled
          />

          <span class="boxf input-group-text"> อายุ </span>
          <input
            type="number"
            class="inf form-control"
            v-model="form_family.m_age"
            name="age"
            max="99"
            min="1"
            disabled
          /><span class="boxf input-group-text"> ปี </span>
        </div>

        <!-- สภานภาพมารดา -->
        <div class="mb-4">
          <label for="season" class="laf from-label"
            ><b> สถานภาพ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b>
          </label>

          <div class="form-check form-check-inline">
            <input
              class="inf form-check-input"
              v-model="form_family.m_status"
              type="radio"
              name="m_status flexRadioDefault"
              value="ยังมีชีวิต"
              disabled
            />
            <label class="laf form-check-label" for="inlineRadio1">
              ยังมีชีวิต
            </label>
          </div>

          <div class="form-check form-check-inline">
            <input
              class="inf form-check-input"
              v-model="form_family.m_status"
              type="radio"
              name="m_status flexRadioDefault"
              value="ถึงแก่กรรรม"
              disabled
            />
            <label class="laf form-check-label" for="inlineRadio2">
              ถึงแก่กรรรม
            </label>
          </div>
        </div>

        <!-- อาชีพ รายได้มารดา -->
        <div div class="input-group mb-4">
          <span class="boxf input-group-text"> อาชีพ </span>
          <input
            type="text"
            class="inf form-control"
            v-model="form_family.m_job"
            placeholder="ประกอบอาชีพ"
            disabled
          />
          <span class="boxf input-group-text"> รายได้เดือนละ </span>
          <input
            type="text"
            class="inf form-control"
            v-model="form_family.m_money"
            name="lecture"
            placeholder="รายได้ต่อเดือนมารดา"
            disabled
          />
          <span class="boxf input-group-text"> บาท </span>
        </div>

        <!-- สถานที่ทำงาน มารดา -->
        <div div class="input-group mb-4">
          <span class="boxf input-group-text"> สถานที่ทำงาน </span>
          <input
            type="text"
            class="inf form-control"
            v-model="form_family.m_worklocation"
            placeholder="สถานที่ทำงานมารดา"
            disabled
          />
        </div>

        <!-- ที่อยู่อาศัยมารดา -->
        <div class="mb-4">
          <label for="home" class="laf"><b> ที่อยู่อาศัย </b></label>
          <textarea
            name="home"
            class="inf form-control"
            v-model="form_family.m_location"
            placeholder="ที่อยุ่อาศัยมารดา"
            cols="50"
            rows="3"
            disabled
          ></textarea>
        </div>

        <!-- เบอร์โทรศัพท์มารดา -->
        <div class="input-group mb-5">
          <span class="boxf input-group-text"> เบอร์โทรศัพท์ </span>
          <input
            type="tel"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            maxlength="10"
            pattern="/^-?\d+\.?\d*$/"
            class="inf form-control"
            v-model="form_family.m_phonenumber"
            name="phone"
            placeholder="เบอร์โทรศัพท์มารดา"
            disabled
          />
        </div>

        <!-- รายได้ของผู้รับทุน -->
        <div>
          <div class="mb-4">
            <h2 class="h02"><b> รายได้ของผู้รับทุน </b></h2>
          </div>

          <!-- ค่าใ้ชจ่ายผู้รับทุน -->
          <div class="input-group mb-4">
            <span class="boxf input-group-text"> ได้รับค่าใช้จ่ายเดือนละ </span>
            <input
              type="text"
              class="inf form-control"
              v-model="form_money.manager_money"
              placeholder="ค่าใช้จ่ายได้รับต่อเดือน"
              disabled
            /><span class="boxf input-group-text"> บาท </span>
          </div>

          <!-- ได้รับเงินเดือนจาก -->
          <div class="input-group mb-4">
            <label for="season" class="laf from-label"
              ><b> ได้รับจาก&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b></label
            >
            <div class="form-check form-check-inline">
              <input
                class="inf form-check-input"
                type="radio"
                name="manager_from flexRadioDefault"
                v-model="form_money.manager_from"
                value="บิดา"
                disabled
              />
              <label class="laf form-check-label" for="inlineRadio1"
                >บิดา
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="inf form-check-input"
                type="radio"
                name="manager_from flexRadioDefault"
                v-model="form_money.manager_from"
                value="มารดา"
                disabled
              />
              <label class="laf form-check-label" for="inlineRadio2">
                มารดา
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="inf form-check-input"
                type="radio"
                name="manager_from flexRadioDefault"
                v-model="form_money.manager_from"
                value="ผู้อุปการะ"
                disabled
              />
              <label class="laf form-check-label" for="inlineRadio2">
                ผู้อุปการะ
              </label>
            </div>
          </div>

          <!-- กรณีผู้อุปการะให้เงิน -->
          <div class="input-group mb-4">
            <span class="boxf input-group-text">
              กรณีที่ได้รับจากผู้อุปการะ ผู้อุปการะนั้นเกี่ยวข้องเป็น
            </span>
            <input
              type="text"
              class="inf form-control"
              v-model="form_money.manager_dot"
              placeholder="หากระบุ บิดา มารดา ไม่ต้องระบุช่องนี้"
              disabled
            />
          </div>

          <div class="input-group mb-4">
            <span class="boxf input-group-text">
              ชื่อและนามสกุลผู้อุปการะ
            </span>
            <input
              type="text"
              aria-label="First name"
              class="inf form-control"
              v-model="form_money.manager_fname"
              placeholder="หากระบุ บิดา มารดา ไม่ต้องระบุช่องนี้"
              disabled
            />
            <input
              type="text"
              aria-label="Last name"
              v-model="form_money.manager_lname"
              class="inf form-control"
              disabled
            />

            <span class="boxf input-group-text"> อายุ </span>
            <input
              type="number"
              class="inf form-control"
              v-model="form_money.manager_age"
              name="age"
              max="99"
              min="1"
              disabled
            /><span class="boxf input-group-text"> ปี </span>
          </div>

          <!-- อาชีพผู้อุปการะ -->
          <div class="input-group mb-4">
            <span class="boxf input-group-text"> มีอาชีพ </span>
            <input
              type="text"
              class="inf form-control"
              v-model="form_money.manager_job"
              placeholder="หากระบุ บิดา มารดา ไม่ต้องระบุช่องนี้"
              disabled
            />
            <span class="boxf input-group-text"> สถานที่ประกอบอาชีพ </span>
            <input
              type="text"
              class="inf form-control"
              v-model="form_money.manager_worklocation"
              placeholder="หากระบุ บิดา มารดา ไม่ต้องระบุช่องนี้"
              disabled
            />
          </div>

          <!-- เบอร์ผู้อุปการะ -->
          <div class="input-group mb-4">
            <span class="boxf input-group-text"> เบอร์โทรศัพท์ </span>
            <input
              type="tel"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="10"
              pattern="/^-?\d+\.?\d*$/"
              class="inf form-control"
              v-model="form_money.manager_phonenumber"
              name="phone"
              placeholder="เบอร์โทรศัพท์ผู้อุปการะ หากระบุบิดามารดา ไม่ต้องระบุช่องนี้"
              disabled
            />
          </div>

          <!-- กู้ยืม -->
          <div class="input-group mb-5">
            <label for="season" class="laf from-label"
              ><b>
                ปัจุบันท่านได้กู้ยืมเงินกองทุนเงินให้กู้ยืนเพื่อการศึกษาหรือไม่&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </b></label
            >
            <div class="form-check form-check-inline">
              <input
                class="inf form-check-input"
                v-model="form_money.manager_statusgive"
                type="radio"
                name="form_money flexRadioDefault"
                value="กยศ."
                disabled
              />
              <label class="laf form-check-label" for="inlineRadio1">
                กยศ.</label
              >
            </div>

            <div class="form-check form-check-inline">
              <input
                class="inf form-check-input"
                v-model="form_money.manager_statusgive"
                type="radio"
                name="form_money flexRadioDefault"
                value="กรอ."
                disabled
              />
              <label class="laf form-check-label" for="inlineRadio2">
                กรอ.
              </label>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="inf form-check-input"
                v-model="form_money.manager_statusgive"
                type="radio"
                name="form_moneyflexRadioDefault"
                value="ไม่ได้กู้"
                disabled
              />
              <label class="laf form-check-label" for="inlineRadio3">
                ไม่ได้กู้
                <div class=""></div>
              </label>
            </div>
          </div>
          <!-- btn-next -->
          <div class="btfb">
            <div class="bbb">
              <router-link to="/Statusname"
                ><button type="button" class="btn-back btn-danger">
                  Back
                </button></router-link
              >
              <div class="btf">
                <router-link
                  :to="{
                    name: 'Adminupload',
                    params: {
                      form_user: form_user,
                      form_family: form_family,
                      form_money: form_money,
                      form_img: form_img,
                      capital_id: capital_id,
                      form_id: form_id,
                      upload_id:upload_id,
                      confirm:confirm
                    },
                  }"
                  ><button class="btn btn-danger">Next</button></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  </html>
</template>

<script>
import axios from "axios";
import Footer from "../../components/footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      form_id: null,
      form_user: {
        fname: null,
        lname: null,
        idstudent: null,
        grade: null,
        birthday: null,
        age: null,
        idcard: null,
        nationality: null,
        origin: null,
        religion: null,
        simester: null,
        faculty: null,
        offset: null,
        gpa: null,
        professor: null,
        address: null,
        email: null,
        phonenumber: null,
        user_img: null,
      },
      form_family: {
        d_fname: null,
        d_lnamed: null,
        d_age: null,
        d_status: null,
        d_job: null,
        d_money: null,
        d_worklocation: null,
        d_locationd: null,
        d_phonenumber: null,
        m_fname: null,
        m_lname: null,
        m_age: null,
        m_status: null,
        m_job: null,
        m_money: null,
        m_worklocation: null,
        m_location: null,
        m_phonenumber: null,
      },
      form_money: {
        manager_money: null,
        manager_from: null,
        manager_dot: null,
        manager_fname: null,
        manager_lname: null,
        manager_age: null,
        manager_job: null,
        manager_worklocation: null,
        manager_phonenumber: null,
        manager_statusgive: null,
      },
      form_img: {
        identity_card_img: null,
        identity_house_img: null,
        house_image: null,
        gpa_file: null,
        essay: null,
        check_gpa_file:null,
        check_house_image:null,
        check_identity_card:null,
        check_identity_house:null,
        check_user_image:null
      },
      confirm:{
        confirm_upload:null,
        date:null,
        complete:null,
        confirm_id:null
      },
      capital_id: null,
      confirm_user_id:null,
      upload_id:null,
    };
  },

  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    if (!this.$store.state.login || this.$store.state.user.Role != 1) {
      this.$router.push({ name: "Login" });
    }

    //ส่งข้อมุลที่กรอกกลับมาเก็บเผื่อ user แก้ไข แล้วทำการเช็คก่อนว่าเป็นการเข้าครั้งแรกหรือกลับมาจากหน้า upload
    if (this.$route.params.form_user) {
      console.log(this.$route.params);
      this.form_user = this.$route.params.form_user;
      this.form_family = this.$route.params.form_family;
      this.form_money = this.$route.params.form_money;
      this.form_img = this.$route.params.form_img;
      this.capital_id = this.$route.params.capital_id;
      this.form_id = this.$route.params.form_id;
      this.form_id = this.$route.params.upload_id
      this.confirm = this.$route.params.confirm
    } else if (this.$route.params) {
      this.capital_id = this.$route.params.capital_id;
      this.confirm_user_id = this.$route.params.confirm_user_id;
      this.form_id = this.$route.params.form_id
      console.log("capital_id:", this.capital_id);
      console.log('confirm_user_id',this.confirm_user_id);
      this.showhistory();
    }
  },
  methods: {
    showhistory() {
      this.http
        .post("admin_form", {
          confirm_user_id: this.confirm_user_id,
          capital_id:this.capital_id,
          form_id:this.form_id
        })
        .then((res) => {
          console.log(res);
          //ข้อมูล user
          this.form_user = JSON.parse(res.data[0].data_user);
          this.form_family = JSON.parse(res.data[0].data_family);
          this.form_money = JSON.parse(res.data[0].data_money);
          //ข้อมูล upload
          this.form_img.essay = res.data[0].essay;
          this.form_img.check_gpa_file = res.data[0].check_gpa_file;
          this.form_img.check_house_image = res.data[0].check_house_image;
          this.form_img.check_identity_card = res.data[0].check_identity_card;
          this.form_img.check_identity_house = res.data[0].check_identity_house;
          this.form_img.check_user_image = res.data[0].check_user_image;

          /////
          this.form_id = res.data[0].form_id;
          this.capital_id = res.data[0].capital_id;
          this.upload_id = res.data[0].upload_id;
          
          //ข้อมูล confirm
          this.confirm.complete = res.data[0].complete
          this.confirm.date = res.data[0].date
          this.confirm.confirm_upload = res.data[0].confirm_upload
          this.confirm.confirm_id = res.data[0].confirm_id
          console.log(this.confirm);
          //เช็คว่ามีรูปเก่าอยู่รึป่าว
          if (res.data[0].identity_card) {
            // Change ArrayBuffer to Base64
            let binary = "";
            let bytes = new Uint8Array(res.data[0].identity_card.data);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            this.form_img.identity_card_img = binary;
          }
          if(res.data[0].identity_house){
            // Change ArrayBuffer to Base64
            let binary = "";
            let bytes = new Uint8Array(res.data[0].identity_house.data);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            this.form_img.identity_house_img = binary;
          }
          if(res.data[0].house_image){
            // Change ArrayBuffer to Base64
            let binary = "";
            let bytes = new Uint8Array(res.data[0].house_image.data);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            this.form_img.house_image = binary;
          }
          if(res.data[0].gpa_file){
            // Change ArrayBuffer to Base64
            let binary = "";
            let bytes = new Uint8Array(res.data[0].gpa_file.data);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            this.form_img.gpa_file = binary;
          }
           if(res.data[0].user_image){
            // Change ArrayBuffer to Base64
            let binary = "";
            let bytes = new Uint8Array(res.data[0].user_image.data);
            let len = bytes.byteLength;
            for (let i = 0; i < len; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            this.form_user.user_image = binary;
          }
        });
    },
  },
};
</script>


<style scoped>
.container-from {
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}
.container-from h2,
h1 {
  text-align: center;
  margin: 20px 0;
}
#h01 {
  color: #680c07;
}
.h02 {
  color: #680c07;
}
.boxf {
  color: white;
  font-size: large;
  background-color: #680c07;
  border-color: rgb(219, 209, 209);
  border-radius: 10px;
}
.laf {
  color: #680c07;
  font-size: large;
}
.inf:hover {
  opacity: 0.7;
}
.inf {
  color: #680c07;
  background-color: #ffeceb;
  border-color: rgb(219, 209, 209);
}
.btf button {
  font-size: 15px;
  font-style: Roboto;
  padding: 13px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;

  float: right;
  position: relative;
}
.btfb .btn-back {
  font-size: 15px;
  font-style: Roboto;
  padding: 13px;
  width: 130px;
  border-radius: 25px 25px 25px 25px;
  color: #ffffff;
  background-color: rgba(180, 45, 37, 1);
  float: right;
  position: relative;
}
.btfb .btn-save {
  background-color: rgba(37, 180, 51, 1);
  margin: 0 20px;
}
.bbb {
  display: flex;
  justify-content: space-between;
}

.bbb:hover {
  opacity: 0.8;
}

</style>>
