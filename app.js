var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

const appRoutes = require('./routes/app')

app.use('/', appRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';

app.set('port', port);

const server = http.createServer(app);


server.listen(port, () => {
  console.log('Server is running')
})
