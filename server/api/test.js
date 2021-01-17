const { Router } = require('express');
const router = Router();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "kanbansDB",
});

router.post("/", (req, res) => {

  const cardName = req.body.cardName;

  const sqlInsert =
    "INSERT INTO `kanbansDB`.`test` (`cardName`) VALUES (?)";
  db.query(sqlInsert, [cardName], (err, result) => {
  console.log(result);
  });
});

router.get("/", (req, res) => {
  const sqlPrint =
    "SELECT * FROM `kanbansDB`.`test`";
    db.query(sqlPrint, (err, result) => {
      res.status(200).json(result);
    });
});

router.get("/:id", (req, res) => {
  const test1 = req.params.id;
  console.log(req);
  const sqlPrint =
    "SELECT * FROM `kanbansDB`.`test` WHERE `id` = (?)";
    db.query(sqlPrint, [test1], (err, result) => {
      res.status(200).json(result);
    });
});


module.exports = router