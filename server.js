var bodyParser = require('body-parser');
var path = require('path');

var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render('index');
})
app.get('/starhero', function(req, res) {
 res.render('starhero');
})
app.get('/castor', function(req, res) {
 res.render('castor');
})
app.get('/nim', function(req, res) {
 res.render('nim');
})

app.listen(8000, function() {
 console.log('listening on port 8000');
})

module.exports = app;
