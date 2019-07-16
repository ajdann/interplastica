var express = require('express')
var app = express();
var cookieParser = require('cookie-parser');
var i18n = require('i18n');
var session = require('session')

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


i18n.configure({

    //define how many languages we would support in our application
    locales:['en', 'de', 'bs'],
    
    //define the path to language json files, default is /locales
    directory: __dirname + '/locales',
    
    //define the default language
    defaultLocale: 'en',
    
    // define a custom cookie name to parse locale settings from 
    cookie: 'i18n'
    });

    
// set up the middleware
app.use(function(req, res, next) {
    req.i18n.setLocaleFromQuery();
    req.i18n.setLocaleFromCookie();
    next();
  });


app.use(cookieParser("intermuris"));

app.use(session({
    secret: "intermuris",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));
app.use(i18n.init);



app.get('/', function(req, res) {
    res.setLocale(req.cookies.i18n);
	res.render('home');					  
});

app.listen(3000);
console.log('listening on port 3000...');