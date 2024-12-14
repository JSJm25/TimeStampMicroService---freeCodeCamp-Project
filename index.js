const express = require('express');
const app = express();
var cors = require('cors');

require('dotenv').config();
const myDir = (__dirname + '/views/index.html');

app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static('public'));

app.use((req, res, next) => {
  let s = new Date();
  console.log(`${req.method}, ${req.path} - ${req.ip}  at ${s.valueOf()}`);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(myDir);
});

app.get("/api/:date?", (req, res) => {
  let regex = /^\d+$/;
  if(!req.params.date){

    let date = new Date();
    let utcString = date.toUTCString();
    let unixNumber = date.getTime()
    res.json({unix: unixNumber, utc: utcString });

  } else {

    let date = new Date(req.params.date);

    if(regex.test(req.params.date)) date = new Date(+req.params.date);

    if(date.toUTCString() === "Invalid Date"){
      res.json({error: "Invalid Date"})
    } else {

    let utcString = date.toUTCString();
    let unixNumber = date.getTime()
    res.json({unix: unixNumber, utc: utcString });

    }

  }
  
});



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});