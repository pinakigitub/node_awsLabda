
var express = require('express'),
  
  logger = require('morgan'),
  bodyParser = require('body-parser'),
 
  session = require('express-session')
  

module.exports = function (app, config) {
  app.use(logger('dev'));
  app.use(bodyParser.urlencoded({ extended: true, resave: false, saveUnintialized: false }));
  app.use(bodyParser.json());
  app.use(session({ secret: 'secrettexthereyu' }));
  app.use(express.static(config.rootPath));
}