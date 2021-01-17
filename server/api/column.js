const { Router } = require('express');
const router = Router();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "kanbansDB",
});

//CREATE COLUMN
router.post("/addcolumn", (req, res) => {

  const boardID = req.body.boardID;
  const columnName = req.body.columnName;
  const index = req.body.index;

  const sqlInsert =
    "INSERT INTO `kanbansDB`.`Column` (`boardID`, `columnName`, `index`) VALUES (?, ?, ?)";
  db.query(sqlInsert, [boardID, columnName, index], (err, result) => {
    if (result === undefined) {
      return res.status(400).json({ error : "Error while inserting (board id)"});
    }
  });
});

// DELETE COLUMN

router.delete("/deletecolumn", (req, res) => {
  const columnID = req.body.columnID;

  const sqlDelete =
    "DELETE FROM `kanbansDB`.`Column` WHERE (`columnID` = ?);";
  db.query(sqlDelete, [columnID], (err, result) => {
    res.send("Column deleted");
  })
});


//CHANGE COLUMN NAME
router.put("/changecolumnname", (req, res) => {
  const columnID = req.body.columnID;
  const value = req.body.valueName;

  const sqlUpdate =
    "UPDATE `kanbansDB`.`Column` SET `columnName` = ? WHERE (`columnID` = ?);";
  db.query(sqlUpdate, [value, columnID], (err, result) => {
    res.send("Column's name updated");
  })
});

//CHANGE COLUMN INDEX
router.put("/changecolumnindex", (req, res) => {
  const columnID = req.body.columnID;
  const newIndex = req.body.newIndex;

  const sqlUpdate =
    "UPDATE `kanbansDB`.`Column` SET `index` = ? WHERE (`columnID` = ?);";
  db.query(sqlUpdate, [newIndex, columnID], (err, result) => {
    res.send("Column's index updated");
  })
});

module.exports = router