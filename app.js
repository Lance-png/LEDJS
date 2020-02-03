const express = require('express');
const matrix = require('node-sense-hat').Leds;
const app = express();
const path = require('path');
const router = express.Router();
var rgb;

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.post('/lights', function (req, res) {
  rgb = req.body;
  matrix.clear([parseInt(rgb["r"]), parseInt(rgb["g"]), parseInt(rgb["b"])]);
  return "Chnaged the colour";
});


app.use(express.static("static"));
app.use(express.json());
app.use('/', router);
app.listen(5000);