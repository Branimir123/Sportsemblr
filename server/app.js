'use strict';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var favicon = require('serve-favicon');
var app = express();
const router = express.Router();

const passportConfig = require('./config/passport/passport');
const data = require('./data');

var routes = require('./routes/index')(app, router, passportConfig, data);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session({
    secret: 'somesecret',
    resave: true,
    saveUninitialized: true
}));
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/lib', express.static(path.join(__dirname, '../node_modules')));
app.use('/app', express.static(path.join(__dirname, '../app')));
app.use('/css', express.static(path.join(__dirname, '../public/assets/css')));
app.use('/js', express.static(path.join(__dirname, '../public/assets/js')));
app.use('/config', express.static(path.join(__dirname, '../config')));

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err);
});

module.exports = app;