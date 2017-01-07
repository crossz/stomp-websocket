var connect = require('connect'), serveStatic = require('serve-static'); 
var logger = require('morgan');

//var app = connect().use(logger());


connect()
  .use(logger())
  .use(serveStatic(__dirname))
  .use(serveStatic(__dirname + '/../lib/'))
  .listen(8080);
console.log('Server running at http://0.0.0.0:8080/');
