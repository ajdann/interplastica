var express = require('express')
var app = express();
var cookieParser = require('cookie-parser');
var i18n = require('i18n');
var session = require('session')

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));





app.get('/', function(req, res) {
    res.render('home');				  
});

app.get('/contact', function(req, res) {
    res.render('contact');				  
});



app.listen(3000);
console.log('listening on port 3000...');