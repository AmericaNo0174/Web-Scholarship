const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json({limit:"100mb"}));

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
  //ทำการเช็ค email ว่าต้องเป็นเมล ku login เข้ามา
  const check_mail = /@+[ku]+.+[th]/.test(email);
  if (check_mail) {
    //ทำการเช็คว่ามีข้อมูลอยู่แล้วรึเปล่า
    db.query(`SELECT * FROM user WHERE email = '${email}'`, (err, result) => {
      if (err) {
        console.log(result);
      } else {
        console.log(result);
        if (result.length > 0) {
          console.log('มีข้อมูลอยู่แล้ว');
          res.send(result);
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
  // console.log(req.body);
  //ทำการนำข้อมูลใน capital แต่ละอันมาเก้บจะวนตามจำนวน capital
  req.body.forEach(capital => {
    console.log(capital);
    const imageUpload = capital.imageUpload;
    const type = capital.type;
    const name = capital.name;
    const detail = capital.detail;
    const date = capital.date;
    const document = JSON.stringify(capital.document);
    const giver = capital.giver;
    const money = capital.money;
    const date_end =  capital.date_end;
    try {
      db.query(
        "INSERT INTO capital (image,type,name,details,document,giver_name,money,date,date_end) VALUES (?,?,?,?,?,?,?,?,?)",
        [imageUpload,type,name, detail,document,giver,money, date,date_end],
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

app.post("/form", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  //เอา email มาเช็ค user_id
    const email = req.body.form_user.email
     db.query(`SELECT user_id FROM user WHERE email = '${email}'`, (err, result) => {
       //แปลง json to string
      const form_user = JSON.stringify(req.body.form_user)
      const form_family = JSON.stringify(req.body.form_family)
      const form_money = JSON.stringify(req.body.form_money)
      const identity_card = req.body.form_img.identity_card_img
      const identity_house = req.body.form_img.identity_house_img
      const user_img = req.body.form_img.user_img
      const house_img = req.body.form_img.house_img
      const gpa_file = req.body.form_img.gpa_file
      const essay = req.body.form_img.essay
      const capital_id = req.body.capital_id
      console.log('capital_id',capital_id);
      console.log(form_user,form_family,form_money);
      console.log('user_id',result[0].user_id);
      //เอาข้อมูล form ไปเก็บ
      db.query(
                "INSERT INTO form (data_user,data_family,data_money,user_id) VALUES (?,?,?,?)",
                [form_user,form_family, form_money,result[0].user_id],
                (err, result) => {
                  if (err) {
                    console.log(err);
                  } else {
                    //จะเอา form_id ไปใช้
                    console.log(result.insertId);
                      try {
                        //เอาข้อมูล upload ไปเก้บ
                        db.query(
                          "INSERT INTO upload (identity_card,identity_house,user_image,house_image,gpa_file,essay,form_id,capital_id) VALUES (?,?,?,?,?,?,?,?)",
                          [identity_card,identity_house, user_img,house_img,gpa_file,essay,result.insertId,capital_id],
                          (err, result) => {
                            if (err) {
                              console.log(err);
                            } else {
                                res.send(result);
                            }
                          }
                        )
                      } catch (error) {
                        console.log(err);
                      }
                  }
                }
              ); 
    });
  });

app.get("/showcapital", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  db.query(
    "SELECT * FROM capital",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
          // console.log(result);
          res.send(result)
          
      }
    }
  ); 
});

//ทำการเอา profile ไปโชว์
app.get("/showprofile", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  db.query(
    "SELECT data_user,user_image FROM form,upload",
    (err, result) => {
      if (err) {
        console.log(err);
      } 
      else {
        console.log(result);
        //แปลง string to json
          const obj = JSON.parse(result[0].data_user);
          const user_img = result[0].user_image
          console.log(obj);
          console.log(user_img);
          res.send(obj);
      }
    }
  ); 
});

app.get("/showuser", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  db.query(
    "SELECT * FROM user",
    (err, result) => {
      if (err) {
        console.log(err);
      } 
      else {
        console.log(result);
        
      }
    }
  ); 
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});