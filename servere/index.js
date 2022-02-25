const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "studentname",
});
app.get("/table", (req, res) => {
  db.query("SELECT * FROM form", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.post("/pf_student", (req, res) => {
  const name = req.body.fname;
  const lastname = req.body.lname;
  const email = req.body.email;
  const check_mail = /@+[ku]+.+[th]/.test(email);
  if (check_mail) {
    db.query(`SELECT * FROM login WHERE email = '${email}'`, (err, result) => {
      if (err) {
        console.log(result);
      } else {
        console.log(result);
        if (result.length > 0) {
          res.send("มีข้อมูลอยู่แล้ว");
        } else {
          db.query(
            "INSERT INTO login (name,lastname,email) VALUES (?,?,?)",
            [name, lastname, email],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send(result);
              }
            }
          );
        }
      }
    });
  }
  else{
    res.send(500);
  }
});
app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
