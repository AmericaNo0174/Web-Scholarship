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
    <body class="container-from needs-validation" novalidate>
      <!-- หัวข้อ -->
      <div class="container mt-5 mb-4">
        <h1 id="h01"><b>กรอกข้อมูลสำหรับสมัครขอรับทุนการศึกษา</b></h1>
        <h2 class="h02"><b>ประวัติส่วนตัว</b></h2>
      </div>
      <div class="container mb-4">
        <!-- ชื่อและนามสกุล -->
        <form @submit.prevent="to_upload">
          <div class="input-group mb-4">
            <span class="boxf input-group-text"> ชื่อและนามสกุล </span>
            <input
              type="text"
              aria-label="First name"
              class="inf form-control"
              v-model="form_user.fname"
              placeholder="กรุณาระบุชื่อ"
             required
            />
            <input
              type="text"
              aria-label="Last name"
              class="inf form-control"
              v-model="form_user.lname"
              placeholder="กรุณาระบุนามสกุล"
             required
            />
          </div>

          <!-- รหัสนิสิต ชั้นปี -->
          <div class="input-group mb-4">
            <span class="boxf input-group-text"> รหัสประจำตัวนิสิต </span>
            <input
              type="text"
              maxlength="10"
              class="inf form-control"
              v-model="form_user.idstudent"
              placeholder="กรุณากรอกรหัสนิสิต"
             required
            />
            <span class="boxf input-group-text"> ชั้นปีที่ </span>
            <input
              type="number"
              class="inf form-control"
              v-model="form_user.grade"
              max="8"
              min="1"
              value="1"
             required
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
             required
            />
            <span class="boxf input-group-text"> อายุ </span>
            <input
              type="number"
              name="age"
              max="30"
              min="18"
              class="inf form-control"
              v-model="form_user.age"
             required
            /><span class="boxf input-group-text"> ปี </span>
          </div>

          <div class="input-group mb-4">
            <span class="boxf input-group-text"> รหัสประจำตัวประชาชน </span>
            <input
              type="text"
             
              maxlength="13"
            
              class="inf form-control"
              v-model="form_user.idcard"
              placeholder="รหัสประจำตัวประชาชน13หลัก"
             required
            />
          </div>

          <div class="input-group mb-4">
            <span class="boxf input-group-text"> สัญชาติ </span>
            <input
              type="text"
              class="inf form-control"
              v-model="form_user.nationality"
             required
            />
            <span class="boxf input-group-text"> เชื้อชาติ </span>
            <input
              type="text"
              class="inf form-control"
              v-model="form_user.origin"
             required
            />
            <span class="boxf input-group-text"> ศาสนา </span>
            <input
              type="text"
              class="inf form-control"
              v-model="form_user.religion"
             required
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
               required
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
               required
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
             required
            />
            <span class="boxf input-group-text"> สาขา </span>
            <input
              type="text"
              v-model="form_user.offset"
              class="inf form-control"
              placeholder="TXX"
             required
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
             required
            />
            <span class="boxf input-group-text"> อาจารย์ที่ปรึกษา </span>
            <input
              type="text"
              class="inf form-control"
              name="lecture"
              placeholder="กรุณาระบุชื่ออาจารย์ที่ปรึกษา"
              v-model="form_user.professor"
             required
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
             required
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
             required
            />
          </div>
          <div class="input-group mb-5">
            <span class="boxf input-group-text"> เบอร์โทรศัพท์ </span>
            <input
              type="text"
              maxlength="10"
              class="inf form-control"
              name="phone"
              placeholder="กรุณาระบุเบอร์โทรศัพท์ที่ติดต่อได้"
              v-model="form_user.phonenumber"
             required
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
               required
              />
              <input
                type="text"
                aria-label="Last name"
                class="inf form-control"
                v-model="form_family.d_lname"
                placeholder="นามสกุลบิดา"
               required
              />
              <span class="boxf input-group-text"> อายุ </span>
              <input
                type="number"
                class="inf form-control"
                v-model="form_family.d_age"
                name="age"
                max="110"
                min="25"
               required
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
                 required
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
                 required
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
                :disabled="form_family.d_status=='ถึงแก่กรรรม'"
               required
              />
              <span class="boxf input-group-text"> รายได้เดือนละ </span>
              <input
                type="number"
                class="inf form-control"
                 max="100000000000"
                min="1"
                name="lecture"
                placeholder="รายได้ต่อเดือนบิดา"
                v-model="form_family.d_money"
                :disabled="form_family.d_status=='ถึงแก่กรรรม'"
               required
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
                :disabled="form_family.d_status=='ถึงแก่กรรรม'"
               required
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
                :disabled="form_family.d_status=='ถึงแก่กรรรม'"
               required
              ></textarea>
            </div>
            <!-- เบอร์โทรศัพท์บิดา -->
            <div class="input-group mb-4">
              <span class="boxf input-group-text"> เบอร์โทรศัพท์ </span>
              <input
                type="text"
                maxlength="10"
                class="inf form-control"
                name="phone"
                v-model="form_family.d_phonenumber"
                placeholder="เบอร์โทรศัพท์บิดา"
                :disabled="form_family.d_status=='ถึงแก่กรรรม'"
               required
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
             required
            />
            <input
              type="text"
              v-model="form_family.m_lname"
              aria-label="Last name"
              class="inf form-control"
              placeholder="นามสกุลมารดา"
             required
            />

            <span class="boxf input-group-text"> อายุ </span>
            <input
              type="number"
              class="inf form-control"
              v-model="form_family.m_age"
              name="age"
              max="110"
              min="25"
             required
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
               required
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
               required
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
             required
              :disabled="form_family.m_status=='ถึงแก่กรรรม'"
            />
            <span class="boxf input-group-text"> รายได้เดือนละ </span>
            <input
              type="number"
              max="100000000000"
                min="1"
              class="inf form-control"
              v-model="form_family.m_money"
              name="lecture"
              placeholder="รายได้ต่อเดือนมารดา"
             required
              :disabled="form_family.m_status=='ถึงแก่กรรรม'"
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
             required
              :disabled="form_family.m_status=='ถึงแก่กรรรม'"
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
             required
              :disabled="form_family.m_status=='ถึงแก่กรรรม'"
            ></textarea>
          </div>

          <!-- เบอร์โทรศัพท์มารดา -->
          <div class="input-group mb-5">
            <span class="boxf input-group-text"> เบอร์โทรศัพท์ </span>
            <input
              type="text"
              maxlength="10"
              class="inf form-control"
              v-model="form_family.m_phonenumber"
              name="phone"
              placeholder="เบอร์โทรศัพท์มารดา"
              :disabled="form_family.m_status=='ถึงแก่กรรรม'"
              required
            />
          </div>

          <!-- รายได้ของผู้รับทุน -->
          <div>
            <div class="mb-4">
              <h2 class="h02"><b> รายได้ของผู้รับทุน </b></h2>
            </div>

            <!-- ค่าใ้ชจ่ายผู้รับทุน -->
            <div class="input-group mb-4">
              <span class="boxf input-group-text">
                ได้รับค่าใช้จ่ายเดือนละ
              </span>
              <input
                type="number"
                max="100000000000"
                min="1"
                class="inf form-control"
                v-model="form_money.manager_money"
                placeholder="ค่าใช้จ่ายได้รับต่อเดือน"
               required
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
                 required
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
                 required
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
                 required
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
               required
                :disabled="form_money.manager_from =='มารดา' ||form_money.manager_from =='บิดา'"
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
               required
                :disabled="form_money.manager_from =='มารดา' ||form_money.manager_from =='บิดา'"
              />
              <input
                type="text"
                aria-label="Last name"
                v-model="form_money.manager_lname"
                class="inf form-control"
               required
                :disabled="form_money.manager_from =='มารดา' ||form_money.manager_from =='บิดา'"
              />

              <span class="boxf input-group-text"> อายุ </span>
              <input
                type="number"
                class="inf form-control"
                v-model="form_money.manager_age"
                name="age"
                max="110"
                min="25"
               required
                :disabled="form_money.manager_from =='มารดา' ||form_money.manager_from =='บิดา'"
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
               required
                :disabled="form_money.manager_from =='มารดา' ||form_money.manager_from =='บิดา'"
              />
              <span class="boxf input-group-text"> สถานที่ประกอบอาชีพ </span>
              <input
                type="text"
                class="inf form-control"
                v-model="form_money.manager_worklocation"
                placeholder="หากระบุ บิดา มารดา ไม่ต้องระบุช่องนี้"
               required
                :disabled="form_money.manager_from =='มารดา' ||form_money.manager_from =='บิดา'"
              />
            </div>

            <!-- เบอร์ผู้อุปการะ -->
            <div class="input-group mb-4">
              <span class="boxf input-group-text"> เบอร์โทรศัพท์ </span>
              <input
                type="text"
                maxlength="10"
                class="inf form-control"
                v-model="form_money.manager_phonenumber"
                name="phone"
                placeholder="เบอร์โทรศัพท์ผู้อุปการะ หากระบุบิดามารดา ไม่ต้องระบุช่องนี้"
               required
                :disabled="form_money.manager_from =='มารดา' ||form_money.manager_from =='บิดา'"
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
                 required
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
                 required
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
                  name="form_money flexRadioDefault"
                  value="ไม่ได้กู้"
                  required
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
                <router-link to="/open_capital"
                  ><button type="button" class="btn-back btn-danger">
                    Back
                  </button></router-link
                >
                <div class="btf">
                  <button
                    class="btn btn-danger"
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </body>
  </html>
</template>

<script>
import axios from "axios";
import Footer from "../../components/footer.vue";
import Swal from "sweetalert2";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      check_capital: null,
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
      },
      capital_id: null,
    };
  },

  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    if (!this.$store.state.login) {
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
      this.check_capital = this.$route.params.check_capital;
      console.log("form_user", this.form_user);
    } else if (this.$route.params) {
      this.capital_id = this.$route.params.capital_id;
      console.log("capital_id:", this.capital_id);
      this.check_capital = this.$route.params.check_capital;
      console.log("this.check_capital", this.check_capital);
    }
    if (this.check_capital != false) {
      this.$router.push({
        name: "Show_form",
        params: {
          capital_id: this.capital_id,
          check_capital: this.check_capital,
        },
      });
    }
  },
  methods: {
    showhistory() {
      this.http
        .post("showprofile", {
          id_user: this.$store.state.user.user_id,
        })
        .then((res) => {
          console.log(res);
          this.form_user = JSON.parse(res.data[0].data_user);
          this.form_family = JSON.parse(res.data[0].data_family);
          this.form_money = JSON.parse(res.data[0].data_money);
          console.log(this.form_user);
        });
    },
    to_upload() {
        let checkIsIDcard = /\d{13}/.test(this.form_user.idcard)
        let checkIsoffset = /[T]+\d{2}/.test(this.form_user.offset)
        let checkIsIDstudent = /\d{10}/.test(this.form_user.idstudent)
        let checkIsgpa = /\d{1}.\d{2}/.test(this.form_user.gpa)
        let checkIsphonenumber = /[0]\d{9}/.test(this.form_user.phonenumber)
        let checkIsD_phonenumber = /[0]\d{9}/.test(this.form_family.d_phonenumber)
        let checkIsM_phonenumber = /[0]\d{9}/.test(this.form_family.m_phonenumber)
        let CheckIsManager_phonenumber = /[0]\d{9}/.test(this.form_money.manager_phonenumber)
        if(!checkIsoffset || !checkIsIDcard || !checkIsIDstudent || !checkIsgpa ||!checkIsphonenumber || !checkIsD_phonenumber ||!checkIsM_phonenumber || !CheckIsManager_phonenumber){
          Swal.fire({
            title:'กรอกข้อมูลไม่ถูกต้อง!!',
            icon:'error'
          })
           return
        }
        this.$router.push({
        name: "uploadform",
        params: {
          form_user: this.form_user,
          form_family: this.form_family,
          form_money: this.form_money,
          form_img: this.form_img,
          capital_id: this.capital_id,
          check_capital: this.check_capital,
        },
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
