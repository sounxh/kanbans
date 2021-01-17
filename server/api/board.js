const { Router } = require('express');
const router = Router();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "kanbansDB",
});

//CREATE BOARD
router.post("/addboard", (req, res) => {

  const ownerID = req.body.ownerID;
  const boardName = req.body.boardName;

  const sqlInsert =
    "INSERT INTO `kanbansDB`.`Board` (`ownerID`, `boardName`) VALUES (?, ?)";
  db.query(sqlInsert, [ownerID, boardName], (err, result) => {
    if (result === undefined) {
      return res.status(400).json({ error : "Error while inserting (id owner)"});
    }
  });
});

// DELETE BOARD

router.delete("/deleteboard", (req, res) => {
  const boardID = req.body.boardID;

  const sqlDelete =
    "DELETE FROM `kanbansDB`.`Board` WHERE (`boardID` = ?);";
  db.query(sqlDelete, [boardID], (err, result) => {
    res.send("Board Deleted");
  })
});


//CHANGE BOARD NAME
router.put("/changeboardname", (req, res) => {
  const boardID = req.body.boardID;
  const value = req.body.valueName;

  const sqlUpdate =
    "UPDATE `kanbansDB`.`Board` SET `boardName` = ? WHERE (`boardID` = ?);";
  db.query(sqlUpdate, [value, boardID], (err, result) => {
    res.send("Board's name update");
  })
});


module.exports = router
