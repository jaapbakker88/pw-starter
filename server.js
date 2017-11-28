// server.js
// where your node app starts
require('dotenv').config()

// init project
var express = require('express');

var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('starter');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
