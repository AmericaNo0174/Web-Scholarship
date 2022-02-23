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
  })
  app.get("/table", (req, res) => {
    db.query("SELECT * FROM form", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});


