/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , http = require('http')
  , path = require('path')
  , server = http.createServer(app);

// all environments
app.set('port', process.env.PORT || 3000);
// app.use(express.favicon(__dirname + "/app/public/images/favicon.ico"));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.use(express.static(__dirname + "/app/public"));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var config = require('./conf.json');

require(__dirname+'/app/router')(app, config);

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});