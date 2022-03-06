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
  db.query("SELECT * FROM user", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/pf_student", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  const name = req.body.fname;
  const lastname = req.body.lname;
  const email = req.body.email;
  const check_mail = /@+[ku]+.+[th]/.test(email);
  // const check_mail = true;
  if (check_mail) {
    db.query(`SELECT * FROM user WHERE email = '${email}'`, (err, result) => {
      if (err) {
        console.log(result);
      } else {
        console.log(result);
        if (result.length > 0) {
          res.send("มีข้อมูลอยู่แล้ว");
        } else {
          db.query(
            "INSERT INTO user (name,lastname,email) VALUES (?,?,?)",
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

app.post("/capital", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  console.log(req.body);
  req.body.forEach(capital => {
    console.log(capital);
    const imageUpload = capital.imageUpload;
    const type = capital.type;
    const name = capital.name;
    const detail = capital.detail;
    const date = capital.date;
    const document = capital.document;
    const giver = capital.giver;
    const money = capital.money;
    const date_end =  capital.date_end;
    db.query(
          "INSERT INTO capital (image,type,name,details,document,giver_name,money,date,date_end) VALUES (?,?,?,?,?,?,?,?,?)",
          [imageUpload,type,name, detail,document,giver,money, date,date_end],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
                res.send(result);
            }
          }
        ); 
  });
//   const type = req.body.type;
//   const name = req.body.name;
//   const detail = req.body.detail;
//   const date = req.body.date;
//   const document = req.body.document;
//   const giver = req.body.giver;
//   const money = req.body.money;
//   const date_end =  req.body.date_end;
//   db.query(
//     "INSERT INTO capital (type,name,details,document,giver_name,money,date,date_end) VALUES (?,?,?,?,?,?,?,?)",
//     [type,name, detail,document,giver,money, date,date_end],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//           res.send(result);
//       }
//     }
//   ); 
});




app.post("/form", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // const testform = JSON.stringify(this.form);
    const email = req.body.form_user.email
     db.query(`SELECT user_id FROM user WHERE email = '${email}'`, (err, result) => {
      const form_user = JSON.stringify(req.body.form_user)
      const form_family = JSON.stringify(req.body.form_family)
      const form_money = JSON.stringify(req.body.form_money)
      db.query(
                "INSERT INTO form (data_user,data_family,data_money,user_id) VALUES (?,?,?,?)",
                [form_user,form_family, form_money,result[0].user_id],
                (err, result) => {
                  if (err) {
                    console.log(err);
                  } else {
                      res.send(result);
                  }
                }
              ); 
    });
  });
app.get("/allCapital", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  db.query(
    "SELECT * FROM capital",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
          res.send(result);
      }
    }
  ); 
});
// app.get("/showprofile", (req, res) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   db.query(
//     "SELECT data_user FROM form",
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
         
//         const myObj = {"name":"John", "age":30, "car":null};
// document.getElementById("demo").innerHTML = myObj.name;
//       }
//     }
//   ); 
// });

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});