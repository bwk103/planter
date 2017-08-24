require('dotenv').config();
var express = require('express');
const app = express();
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var passportJWT= require('passport-jwt');
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
// var LocalStrategy = require('passport-local');
var User = require('./models/user');
var jwt = require('jsonwebtoken');
var config = require('./config')

//mongoose

mongoose.connect('mongodb://localhost/planter');

//set jsonwebtoken

app.set(config.secret);

//Passport Setup

// app.use(require('express-session')({
//   secret: "Mia is a cat",
//   resave: false,
//   saveUninitialized: false
// }));
//

// passport.use(new LocalStrategy(User.authenticate()));

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = config.secret;

var strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {

  console.log('payload received', jwt_payload);

  User.findById({id: jwt_payload.id}, (err, user) => {
    if (user) {
      next(null, user);
    } else {
      next(null, false)
    }
  });
});

app.use(passport.initialize());
passport.use(strategy);




//express config

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

//routes

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

const appRoutes = require('./routes/app')

app.use('/', appRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//server

const port = process.env.PORT || '3000';

app.set('port', port);

const server = http.createServer(app);


server.listen(port, () => {
  console.log('Server is running')
})
