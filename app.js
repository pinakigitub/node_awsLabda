var express = require('express');
var cors = require('cors');
const serverless = require('serverless-http');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var directoryName = __dirname;

var config = require('./server/config/config')[env];


config.rootPath = directoryName;
require('./server/config/mongoose')(config);
require('./server/config/express')(app, config);
app.set('superSecret', config.secret);
app.use(cors());


require('./server/config/route')(app, directoryName);
 // app.listen(config.port, function () {
     // console.log('example listening on port ' + config.port);
   
 // });
 // module.exports = app;

module.exports.handler = serverless(app)