const express = require('express');
const app = express();
require('dotenv').config();
const myDir = (__dirname + '/views/index.html');


app.use(express.static('public'));

app.use((req, res, next) => {
  let s = new Date();
  console.log(`${req.method}, ${req.path} - ${req.ip}  at ${s.valueOf()}`);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(myDir);
});

app.get("/api/:date", (req, res) => {
  let date = new Date(req.params.date);
  if(date.toUTCString() === "Invalid Date") date = new Date(+req.params.date);
  let unix = date.getTime();
  let utc = date.toUTCString();
  res.json({"unix": unix, "utc": utc });
})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});