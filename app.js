var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//mongoose

mongoose.connect('mongodb://localhost/planter');

//express config

const app = express();

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
