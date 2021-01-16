const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "kanbansDB",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extends: true}));


app.post("/api/insert", (req, res) => {

  const cardName = req.body.cardName;

  const sqlInsert =
    "INSERT INTO `kanbansDB`.`test` (`cardName`) VALUES (?)";
  db.query(sqlInsert, [cardName], (err, result) => {
  console.log(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
