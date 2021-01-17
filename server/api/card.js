const { Router } = require('express');
const router = Router();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "kanbansDB",
});

//CREATE CARD
router.post("/addcard", (req, res) => {

  const columnID = req.body.columnID;
  const actorID = req.body.actorID;
  const cardName = req.body.cardName;
  const index = req.body.index;

  const sqlInsert =
    "INSERT INTO `kanbansDB`.`Card` (`columnID`, `cardName`, `index`) VALUES (?, ?, ?)";
  db.query(sqlInsert, [columnID, cardName, index], (err, result) => {
    if (result === undefined) {
      const rr = res.status(400).json({ error : "Error while inserting (board id)"});
    }
  });

  /*var cardID = 0;
  const sqlSelect =
    "SELECT `cardID` FROM `kanbansDB`.`Card` WHERE `columnID`= ? AND `index`= ?"
  db.query(sqlSelect, [columnID, index], (err,result) => {
    if (result === undefined) {
      //const rr  = res.status(400).json({ error : "Error while inserting (board id)"});
    }
    console.log(cardID);
    cardID = result[0].cardID;
  })
  const sqlInsert2 =
    "INSERT INTO `kanbansDB`.`Contains` (`columnID`, `cardID`) VALUES (?, ?)";
    db.query(sqlInsert2, [columnID, cardID], (err, result) => {
      if (result === undefined) {
        console.log(result+" IN INSERT2");
        //const rr  = res.status(400).json({ error : "Error while inserting (board id)"});
      }
    })

*/
});

// DELETE CARD
router.delete("/deletecard", (req, res) => {
  const cardID = req.body.cardID;

  const sqlDelete =
    "DELETE FROM `kanbansDB`.`Card` WHERE (`cardID` = ?);";
  db.query(sqlDelete, [cardID], (err, result) => {
    res.send("Card deleted");
  })
});


//CHANGE CARD NAME
router.put("/changecardname", (req, res) => {
  const cardID = req.body.cardID;
  const value = req.body.valueName;

  const sqlUpdate =
    "UPDATE `kanbansDB`.`Card` SET `cardName` = ? WHERE (`cardID` = ?);";
  db.query(sqlUpdate, [value, cardID], (err, result) => {
    res.send("Card's name updated");
  })
});

//CHANGE CARD INDEX
router.put("/changecardindex", (req, res) => {
  const cardID = req.body.cardID;
  const newIndex = req.body.newIndex;

  const sqlUpdate =
    "UPDATE `kanbansDB`.`Card` SET `index` = ? WHERE (`cardID` = ?);";
  db.query(sqlUpdate, [newIndex, cardID], (err, result) => {
    res.send("Card's index updated");
  })
});

// UPDATE ACTOR
router.put("/updateactor", (req, res) => {
  const cardID = req.body.cardID;
  const actorID = req.body.actorID;

  const sqlUpdate =
    "UPDATE `kanbansDB`.`Card` SET `actorID` = ? WHERE (`cardID` = ?);";
  db.query(sqlUpdate, [actorID, cardID], (err, result) => {
    console.log(result);
    if (result === undefined) {
      res.send("Problem with updating actor");
    } else {
      res.send("Card's actor updated");
    }
  })
});


module.exports = router