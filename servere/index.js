const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json({ limit: "100mb" }));

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
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const name = req.body.fname;
  const lastname = req.body.lname;
  const email = req.body.email;
  //ทำการเช็ค email ว่าต้องเป็นเมล ku login เข้ามา
  const check_mail = /@+[ku]+.+[th]/.test(email);
  if (check_mail) {
    //ทำการเช็คว่ามีข้อมูลอยู่แล้วรึเปล่า
    db.query(`SELECT * FROM user WHERE email = '${email}'`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        if (result.length > 0) {
          console.log("มีข้อมูลอยู่แล้ว");
          res.send(result);
          console.log("id", result[0].user_id);
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
  } else {
    res.send(500);
  }
});

app.post("/capital", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // console.log(req.body);
  //ทำการนำข้อมูลใน capital แต่ละอันมาเก้บจะวนตามจำนวน capital
  req.body.forEach((capital) => {
    const imageUpload = capital.imageUpload;
    const type = capital.type;
    const name = capital.name;
    const detail = capital.detail;
    const date = capital.date;
    const document = JSON.stringify(capital.document);
    const giver = capital.giver;
    const money = capital.money;
    const date_end = capital.date_end;
    try {
      db.query(
        "INSERT INTO capital (image,type,name,details,document,giver_name,money,date,date_end) VALUES (?,?,?,?,?,?,?,?,?)",
        [
          imageUpload,
          type,
          name,
          detail,
          document,
          giver,
          money,
          date,
          date_end,
        ],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
            console.log(result); 
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
});

//อัพเดตรูป
app.put("/update_form_img", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const user_image = req.body.user_img;
  // const capital_id = req.body.capital_id;
  const identity_card_img = req.body.form_img.identity_card_img;
  const identity_house_img = req.body.form_img.identity_house_img;
  const house_image = req.body.form_img.house_img;
  const gpa_file = req.body.form_img.gpa_file;
  const form_id = req.body.form_id;
  db.query(
    `UPDATE upload SET identity_card=?,identity_house=?,house_image=?,gpa_file=? WHERE form_id = '${form_id}'`,
    [identity_card_img,identity_house_img,house_image,gpa_file],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        db.query(`UPDATE form SET user_image='${user_image}'`),
        (err,result)=>{
          if(err){
            console.log(err);
          }
          else{
            console.log(result);
          }
        }
      }
    }
  );
}),

  app.post("/form", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    //เอา email มาเช็ค user_id
    const email = req.body.form_user.email;
    // const user_img = req.body.form_user.user_img
    // console.log(user_img);
    db.query(
      `SELECT user_id FROM user WHERE email = '${email}'`,
      (err, result) => {
        //แปลง json to string
        const form_user = JSON.stringify(req.body.form_user);
        const form_family = JSON.stringify(req.body.form_family);
        const form_money = JSON.stringify(req.body.form_money);
        const identity_card = req.body.form_img.identity_card_img;
        const identity_house = req.body.form_img.identity_house_img;
        const user_img = req.body.form_user.user_img;
        const house_img = req.body.form_img.house_img;
        const gpa_file = req.body.form_img.gpa_file;
        const essay = req.body.form_img.essay;
        const capital_id = req.body.capital_id;
        console.log("capital_id", capital_id);
        // console.log(form_user, form_family, form_money);
        // console.log("user_id", result[0].user_id);
        //เอาข้อมูล form ไปเก็บ
        db.query(
          "INSERT INTO form (data_user,data_family,data_money,user_id,user_image) VALUES (?,?,?,?,?)",
          [form_user, form_family, form_money, result[0].user_id, user_img],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              //จะเอา form_id ไปใช้
              console.log(result.insertId);
              try {
                //เอาข้อมูล upload ไปเก้บ
                db.query(
                  "INSERT INTO upload (identity_card,identity_house,house_image,gpa_file,essay,form_id,capital_id) VALUES (?,?,?,?,?,?,?)",
                  [
                    identity_card,
                    identity_house,
                    house_img,
                    gpa_file,
                    essay,
                    result.insertId,
                    capital_id,
                  ],
                  (err, result) => {
                    if (err) {
                      console.log(err);
                    } else {
                      res.send(result);
                    }
                  }
                );
              } catch (error) {
                console.log(err);
              }
            }
          }
        );
      }
    );
  });

app.get("/showcapital", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // const d = new Date();
  // const day = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join("-");
  db.query(
    // `SELECT * FROM capital WHERE date_end > "${day}"  `,
    `SELECT * FROM capital `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/checkcapital", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const check = req.body.checkapply;
  const id_user = req.body.id_user;
  console.log(id_user);
  console.log(check);
  db.query(
    `SELECT form.user_id,upload.capital_id FROM form INNER JOIN upload ON form.form_id = upload.form_id  WHERE form.user_id = "${id_user}" and upload.capital_id = "${check}"  `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // res.send(result);
        console.log(result);
        //เช็คว่ามีข้อมูลอยู่รึป่าว
        if (result.length > 0) {
          if (check == result[0].capital_id) {
            res.send(result);
          } else {
            // res.send(result);
            res.send(result);
          }
        } else {
          res.send(result);
        }
      }
    }
  );
});

app.post("/capital_detail", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const id_capital = req.body.id_capital;
  db.query(
    `SELECT * FROM capital WHERE capital_id = "${id_capital}" `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.send(result);
      }
    }
  );
});

app.post("/step", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  req.body.forEach((step) => {
    console.log("step", step);
    console.log("res", res);
    const imageUpload = step.imageUpload;
    const heading = step.heading;
    const detail = step.detail;
    try {
      db.query(
        "SELECT INTO step (img,heading,detail) VALUES (?,?,?)",
        [imageUpload, heading, detail],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
            console.log(result);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  });
});

//ทำการเอา profile ไปโชว์
app.post("/showform", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const id_user = req.body.id_user;
  const capital_id = req.body.capital_id
  console.log(capital_id);
  db.query(
    `SELECT * FROM form INNER JOIN upload ON form.form_id = upload.form_id  WHERE form.user_id = "${id_user}" and upload.capital_id = "${capital_id}"  `,
    (err, result) => {
      console.log(result);
      if (result == "") {
        result = false;
        res.send(result);
      } else {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    }
  );
});
app.post("/showprofile", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const id_user = req.body.id_user;
  db.query(
    `SELECT * FROM form WHERE user_id = '${id_user}'`,
    (err, result) => {
      console.log(result);
      if (result == "") {
        result = false;
        res.send(result);
      } else {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    }
  );
});

app.get("/getuser", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  db.query(`SELECT * FROM user`, (err, result) => {
    if (result == "") {
      res.send(result);
    } else {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    }
  });
});

app.post("/showuser", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const id_user = req.body.id_user;
  db.query(`SELECT * FROM user WHERE user_id  ='${id_user}'`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
