const { Router } = require('express');
const router = Router();
const mysql = require("mysql");
const bcrypt = require('bcrypt');

const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "kanbansDB",
});

// REGISTER
router.post("/register", (req, res) => {

  const name = req.body.name;
  const password1 = req.body.password1;
  const password2 = req.body.password2;
  const email = req.body.email;

  const sqlExistence = "SELECT COUNT(*) as count FROM `kanbansDB`.`User` WHERE `email` = ? ";
  db.query(sqlExistence, [email], (err, result) => {
    if (password1 != password2) {
      return res.status(400).json({error : 'Passwords don\'t match'});
    } else if (result[0].count > 0) {
      return res.status(400).json({error : 'Email is already used'});
    }
  });

  const sqlInsert =
  "INSERT INTO `kanbansDB`.`User` (`email`,`password`,`name`) VALUES (?,?,?)";

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password1, salt, function(err, hash) {
      db.query(sqlInsert, [email, hash, name], (err, result) => {
      });
    });
  });
});

// CONNEXION
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT *, COUNT(*) as count FROM `kanbansDB`.`User` WHERE `email` = ?",
    [email], (err, result) => {
      if (err) {
        res.send({ err : err});
      }
      if (result[0].count <= 0) {
        return res.status(400).json({ error : "This user does not exist"});
      } else if (bcrypt.compareSync(password, result[0].password)) {
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password combination !" });
      }
    }
  )
});

// GET USER INFO
router.get("/userinfo/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM `kanbansDB`.`User` WHERE `userID` = ?",
    [id], (err, result) => {
      if (err) {
        res.send({ err : err});
      }
      console.log(result);
      if (result[0].count <= 0) {
        return res.status(400).json({ error : "This user does not exist"});
      } else {
        res.send(result);
      }
    }
  )
});

module.exports = router
