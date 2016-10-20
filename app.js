var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var useragent = require('express-useragent');

var status = ["successful","fraduelent","timed_out"]
[Math.floor(Math.random() * 3)];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use(useragent.express());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/', (req, res) => {
  res.send(req.useragent);
})

app.post('/transaction', (req, res) => {
  res.json({"status": status});
});

app.listen(3000);
