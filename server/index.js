const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const testRouter = require('./api/test.js');
const userRouter = require('./api/user.js');
const boardRouter = require('./api/board.js');
const columnRouter = require('./api/column.js');
const cardRouter = require('./api/card.js');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extends: true}));

app.use('/api/insert', testRouter);

// 'email' -> adresse email de l'utilisateur
// 'password1' -> première tentative mot de passe
// 'password2' -> deuxieme tentative
// 'name' -> nom de l'utilisateur
// 'id' -> id referent au userID
/*
    /register : name, password1, password2, email
    /login : email, password
    /userinfo : id
*/
app.use('/api/user', userRouter);

app.use('/api/board', boardRouter);

app.use('/api/column', columnRouter);

app.use('/api/card', cardRouter);

app.listen(3001, () => {
  console.log("running on port 3001");
});
