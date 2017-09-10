
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    config = require('./config'),
    User = require('./app/model/user'),
    port = process.env['PORT'] || 8080;

// Configuration

// Connect to the database and set the secret key
mongoose.connect(config.database);
app.set('superSecret', config.secret);

// Retrieve information from POST/URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Log requests to the console
app.use(morgan('dev'));

// Routing

// Basic route
app.get('/', function(req, res) {
    res.send('API Location: http://localhost:' + port + '/api');
});

// API Routes

// Server start
app.listen(port);
console.log('Server running at http://localhost:' + port);