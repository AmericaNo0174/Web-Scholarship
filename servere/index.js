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
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
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

app.put("/update_score", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const set_score = JSON.stringify(req.body.set_score);
  const user_id = req.body.user_id;
  db.query(
    `UPDATE sumpoint SET total_score='${set_score}' WHERE user_id = '${user_id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
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
    const link = capital.link;
    const score = JSON.stringify(capital.arr_score);
    const email = JSON.stringify(capital.arr_email);
    const interviewdetail = capital.interview_detail;
    const giver = capital.giver;
    const money = capital.money;
    const date_end = capital.date_end;
    const meeting = capital.meeting;
    try {
      db.query(
        "INSERT INTO capital (image,type,name,details,document,giver_name,money,date,date_end,interviewlink,interviewscore,commit,interviewdetail,timemeet) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
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
          link,
          score,
          email,
          interviewdetail,
          meeting,
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

app.post("/show_score", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const user_id = req.body.user_id;
  db.query(
    `SELECT * FROM sumpoint INNER JOIN form ON form.user_id = sumpoint.user_id INNER JOIN confirm ON confirm.confirm_id = sumpoint.confirm_id  INNER JOIN capital ON sumpoint.capital_id = capital.capital_id WHERE sumpoint.user_id  = '${user_id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/editrole", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.body);
  const user_id = req.body.user_id;
  const role = req.body.role;
  db.query(
    `UPDATE user SET Role ='${role}' WHERE user_id = '${user_id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
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
    [identity_card_img, identity_house_img, house_image, gpa_file],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        db.query(`UPDATE form SET user_image='${user_image}'`),
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
              res.send(result);
            }
          };
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
  const d = new Date();
  const day = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join("-");
  db.query(
    `SELECT * FROM capital WHERE date_end >= "${day}" and date <= "${day}"  `,
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

app.get("/show_step",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  db.query(`SELECT * FROM step`,(err,result)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('asdasda',result);
      res.send(result);
    }
  })
})

app.post("/show_topic_score", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const user_id = req.body.user_id;
  db.query(
    `SELECT * FROM sumpoint INNER JOIN capital ON sumpoint.capital_id = capital.capital_id INNER JOIN confirm ON sumpoint.confirm_id = confirm.confirm_id WHERE sumpoint.user_id = '${user_id}'`,
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

app.post("/add_sumpoint", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const user_id = req.body.user_id;
  const capital_id = req.body.capital_id;
  const confirm_id = req.body.confirm_id;
  db.query(
    `SELECT * FROM sumpoint WHERE user_id = '${user_id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {
          console.log(result);
        } else {
          db.query(
            `INSERT INTO sumpoint (confirm_id,user_id,capital_id) VALUES (?,?,?)`,
            [confirm_id, user_id, capital_id],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                console.log(result);
              }
            }
          );
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
        for (let i = 0; i < result.length; i++) {
          result[i].date = [
            result[i].date.getDate(),
            result[i].date.getMonth() + 1,
            result[i].date.getFullYear(),
          ].join("/");
          result[i].date_end = [
            result[i].date_end.getDate(),
            result[i].date_end.getMonth() + 1,
            result[i].date_end.getFullYear(),
          ].join("/");
        }
        res.send(result);
      }
    }
  );
});

app.post("/add_step", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
    console.log('asdasdasdass',req.body);
  req.body.forEach((step) => {
     console.log(step);
      const detail = JSON.stringify(step.arr_step);
      try {
        db.query(
          "INSERT INTO step (detail) VALUES (?)",
          [
            detail,
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

//ทำการเอา profile ไปโชว์
app.post("/showform", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const id_user = req.body.id_user;
  const capital_id = req.body.capital_id;
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

app.post("/admin_form", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const form_id = req.body.form_id;
  db.query(
    `SELECT * FROM form INNER JOIN upload ON form.form_id = upload.form_id INNER JOIN confirm ON upload.upload_id = confirm.upload_id WHERE form.form_id= "${form_id}"`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/showrole", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const id_user = req.body.id_user;
  db.query(
    `SELECT * FROM form INNER JOIN user ON form.user_id = user.user_id WHERE user.user_id = '${id_user}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          db.query(
            `SELECT * FROM user WHERE user_id = '${id_user}'`,
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
  console.log(id_user);
  db.query(`SELECT * FROM form WHERE user_id = '${id_user}'`, (err, result) => {
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
  });
});

app.put("/update_complete", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const user_id = req.body.user_id;
  const complete = req.body.complete;
  db.query(
    `UPDATE confirm SET complete='${complete}' WHERE user_id = '${user_id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/showordername", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const user_id = req.body.user_id;

  db.query(
    `SELECT * FROM confirm INNER JOIN form ON confirm.user_id = form.user_id INNER JOIN sumpoint ON sumpoint.confirm_id = confirm.confirm_id INNER JOIN capital ON capital.capital_id = sumpoint.capital_id WHERE confirm.complete = 1 and confirm.user_id = '${user_id}' `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < result.length; i++) {
          result[i].date_confirm = [
            result[i].date_confirm.getDate(),
            result[i].date_confirm.getMonth() + 1,
            result[i].date_confirm.getFullYear(),
          ].join("/");
        }
        res.send(result);
      }
    }
  );
});

app.post("/show_complete", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  let filter = req.body.filter;
  db.query(
    "SELECT * FROM confirm INNER JOIN form ON confirm.user_id = form.user_id INNER JOIN sumpoint ON sumpoint.confirm_id = confirm.confirm_id INNER JOIN capital ON capital.capital_id = sumpoint.capital_id WHERE confirm.complete = 1",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        let data = [];
        result.forEach(function (item) {
          item.date_confirm = [
            item.date_confirm.getDate(),
            item.date_confirm.getMonth() + 1,
            item.date_confirm.getFullYear(),
          ].join("/");

          item.data_user = JSON.parse(item.data_user);
          if (filter != "") {
            
            let name = item.data_user.fname +" "+ item.data_user.lname
            if (
              item.data_user.idstudent.search(filter) != -1 ||
              name.search(filter) != -1 || item.type.search(filter) != -1 || item.date_confirm.search(filter) != -1 || item.name.search(filter) != -1 
            ) {
              data.push(item);
            }
          }
          else{
            data.push(item);
          }
        });
        res.send(data);
      }
    }
  );
});

app.put("/save_check_upload", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log(req.body.upload_id);
  const upload_id = req.body.upload_id;
  const check_gpa_file = req.body.check_gpa_file;
  const check_house_image = req.body.check_house_image;
  const check_identity_card = req.body.check_identity_card;
  const check_identity_house = req.body.check_identity_house;
  const check_user_image = req.body.check_user_image;
  const confirm_date = req.body.confirm_date;
  const other = req.body.other;
  db.query(
    `UPDATE upload SET check_gpa_file ='${check_gpa_file}',check_house_image = '${check_house_image}',check_identity_card = '${check_identity_card}',check_identity_house = '${check_identity_house}',check_user_image = '${check_user_image}',other = '${other}' WHERE upload_id = '${upload_id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        db.query(
          `UPDATE confirm SET date_confirm='${confirm_date}' WHERE upload_id = '${upload_id}'`,
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


app.post("/showinterview", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const user_id = req.body.id_user;
  db.query(
    `SELECT * FROM capital INNER JOIN upload ON capital.capital_id = upload.capital_id  INNER JOIN confirm ON confirm.upload_id = upload.upload_id WHERE confirm.user_id = '${user_id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < result.length; i++) {
          result[i].date_confirm = [
            result[i].date_confirm.getDate(),
            result[i].date_confirm.getMonth() + 1,
            result[i].date_confirm.getFullYear(),
          ].join("/");
        }
        res.send(result);
      }
    }
  );
});



app.post("/showstatus", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const id_user = req.body.id_user;

  db.query(
    `SELECT * FROM upload INNER JOIN form ON upload.form_id = form.form_id INNER JOIN capital ON upload.capital_id = capital.capital_id INNER JOIN confirm ON upload.upload_id = confirm.upload_id WHERE confirm.user_id = "${id_user}" `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < result.length; i++) {
          if (result[i].date_confirm != null) {
            result[i].date_confirm = [
              result[i].date_confirm.getDate(),
              result[i].date_confirm.getMonth() + 1,
              result[i].date_confirm.getFullYear(),
            ].join("/");
          }
        }
        res.send(result);
      }
    }
  );
});



app.post("/showstatusname", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  let filter = req.body.filter;
  db.query(
    `SELECT * FROM upload INNER JOIN form ON upload.form_id = form.form_id INNER JOIN capital ON upload.capital_id = capital.capital_id INNER JOIN confirm ON upload.upload_id = confirm.upload_id  `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result)
        let data = [];
        result.forEach(function (item) {
          item.data_user = JSON.parse(item.data_user);
          if (filter != "") {
            
            let name = item.data_user.fname +" "+ item.data_user.lname
            if (
              item.data_user.idstudent.search(filter) != -1 ||
              name.search(filter) != -1 || item.name.search(filter) != -1 
            ) {
              data.push(item);
            }
          }
          else{
            
            data.push(item);
          }
        });

        res.send(data);
      }
    }
  );
});


app.post("/searchshowcomplete", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  let filter = req.body.filter;
  db.query(
    `SELECT * FROM form INNER JOIN upload on upload.form_id = form.form_id INNER JOIN capital ON upload.capital_id = capital.capital_id INNER JOIN confirm ON upload.upload_id = confirm.upload_id WHERE confirm.confirm_upload = 1 and confirm.date_confirm IS NOT NULL`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        {
          let data = [];
          result.forEach(function (item) {
            item.date_confirm = [
              item.date_confirm.getDate(),
              item.date_confirm.getMonth() + 1,
              item.date_confirm.getFullYear(),
            ].join("/");
            item.data_user = JSON.parse(item.data_user);
            if (filter != "") {
              
              let name = item.data_user.fname +" "+ item.data_user.lname
              if (
                item.data_user.idstudent.search(filter) != -1 ||
                name.search(filter) != -1 || item.name.search(filter) != -1 || item.data_user.offset.search(filter) != -1 
              ) {
                data.push(item);
              }
            }
            else{
              data.push(item);
            }
          });
  
          res.send(data);
        }
      }
    }
  );
});


app.get("/showcomplete", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // let filter = req.body.filter;
  db.query(
    `SELECT * FROM form INNER JOIN upload on upload.form_id = form.form_id INNER JOIN capital ON upload.capital_id = capital.capital_id INNER JOIN confirm ON upload.upload_id = confirm.upload_id WHERE confirm.confirm_upload = 1 and confirm.date_confirm IS NOT NULL`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < result.length; i++) {
            result[i].date_confirm = [
            result[i].date_confirm.getDate(),
            result[i].date_confirm.getMonth() + 1,
            result[i].date_confirm.getFullYear(),
          ].join("/");
        }
        res.send(result);
      }
    }
  );
});



app.put("/setStatus", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const check_status_upload = req.body.check_status_upload;
  const upload_id = req.body.upload_id;
  db.query(
    `UPDATE upload SET check_status_upload='${check_status_upload}' WHERE upload_id = '${upload_id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        db.query(
          `UPDATE confirm SET confirm_upload=${check_status_upload} WHERE upload_id = '${upload_id}'`,
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              console.log(result);
            }
          }
        );
      }
    }
  );
});





app.get("/show_confirm", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  db.query(
    `SELECT * FROM confirm INNER JOIN upload ON confirm.upload_id = upload.upload_id `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});



app.get("/show_upload", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  db.query(
    `SELECT * FROM upload INNER JOIN form ON upload.form_id = form.form_id `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/setConfirm", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const upload_id = req.body.upload_id;
  const user_id = req.body.user_id;
  //ทำการเช็คว่ามีข้อมูลอยู่แล้วรึเปล่า
  db.query(
    `SELECT * FROM confirm WHERE upload_id  = '${upload_id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        if (result.length > 0) {
          console.log("มีข้อมูลอยู่แล้ว");
          res.send(result);
        } else {
          db.query(
            `INSERT INTO confirm (upload_id,user_id) VALUES (?,?) `,
            [upload_id, user_id],
            (err, result) => {
              if (err) {
                console.log(err);
              } else {
                console.log(result);
              }
            }
          );
        }
      }
    }
  );
});
app.put("/setcomplete", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const confirm_id = req.body.confirm_id;
  const complete = req.body.complete;
  db.query(
    `UPDATE confirm SET complete='${complete}' WHERE confirm_id = '${confirm_id}'`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
