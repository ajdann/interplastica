var express = require('express')
var app = express();
var cookieParser = require('cookie-parser');
var i18n = require('i18n');
var session = require('session')

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));





app.get('/', function(req, res) {
    res.locals.title = "Home"; 
    res.render('Home');				  
});

app.get('/alati', function(req, res) {
    res.locals.title = "Alati"; 
    res.render('Alati');				  
});

app.get('/precistaci', function(req, res) {
    res.locals.title = "Precistaci"; 
    res.render('precistaci');				  
});

app.get('/razvoj', function(req, res) {
    res.locals.title = "Razvoj Proizvoda"; 
    res.render('razvoj');				  
});


app.get('/onama', function(req, res) {
    res.locals.title = "O nama"; 
    res.render('onama');				  
});

app.get("/profiles", function(req, res){
    res.locals.title = "Profile";
    res.render("profiles");
})

app.get('/contact', function(req, res) {
    res.locals.title = "Contact"; 
    res.render('contact');				  
});

app.get("/fences", function(req, res){
    res.locals.title = "Fences";
    res.render("ograde");
})



app.listen(3000);
console.log('listening on port 3000...');
