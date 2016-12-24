'use strict';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var favicon = require('serve-favicon');
var app = express();
const router = express.Router();

const connectionString = process.env.connectionString || 'mongodb://localhost/ng2';

const User = require('./models/user.model'),
    Event = require('./models/event.model');

const models = {
    User,
    Event
};

const data = require('./data')(models, connectionString);
const passportConfig = require('./config/passport/passport')(data);

const userController = require('./controllers/user-controller')(data, passportConfig.passport),
    eventController = require('./controllers/event-controller')(data);

const controllers = {
    userController,
    eventController
};

app.use(passportConfig.passport.initialize());
app.use(passportConfig.passport.session());

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

var routes = require('./routes/index')(app, router, passportConfig, controllers);

module.exports = app;