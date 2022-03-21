<template>
  <div class="container-role">
    <center>
    <div class="role">
      <h2>ข้อมูลสมาชิก</h2>
    </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>Name</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, idx) in user" :key="idx">
              <td>{{idx+1}}</td>
              <td>{{user.name}}</td>
              <td>{{user.lastname}}</td>
              <td>{{user.email}}</td>
              <td><button type="button" class="btn btn-dark">Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  <Footer/>
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
      c : false,
      user: [
        {
      }]
    };
  },
  mounted() {
    this.http = axios.create({
      baseURL: "http://localhost:3001/",
    });
    this.getuser();
    if (!this.$store.state.login) {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    getuser() {
      this.http
        .get("getuser")
        .then((res) => {
          console.log("res:", res.data);
          this.user = res.data
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>



<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
.container-role {
  width: 100%;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>