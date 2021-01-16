const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const testRouter = require('./api/test.js');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extends: true}));

app.use('/api/insert', testRouter);

app.listen(3001, () => {
  console.log("running on port 3001");
});
