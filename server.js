// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
const Timestamp = require("./timestamp.js");

app.get("/api/",function(req,res){

  let timestamp = new Timestamp();
  let response = timestamp.getCurrent();
  
  res.send(response);
});

app.get("/api/:date",function(req,res){
  let {date} = req.params;

  let timestamp = new Timestamp();

  let response = timestamp.getFromDate(date);

  res.send(response);
});

function isInvalidDate(date){
  return date == "Invalid Date";
}

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
