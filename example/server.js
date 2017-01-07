var connect = require('connect'), serveStatic = require('serve-static'); 
var logger = require('morgan');

var http = require("http")
var ws = require("nodejs-websocket")
var fs = require("fs")


//var app = connect().use(logger());


connect()
  .use(logger())
  .use(serveStatic(__dirname))
  .use(serveStatic(__dirname + '/../lib/'))
  .listen(8080);
console.log('Server running at http://0.0.0.0:8080/');


var server = ws.createServer(function (connection) {
	connection.nickname = null
	connection.on("text", function (str) {
		if (connection.nickname === null) {
			connection.nickname = str
			broadcast(str+" entered")
		} else
			broadcast("["+connection.nickname+"] "+str)
	})
	connection.on("close", function () {
		broadcast(connection.nickname+" left")
	})
})
server.listen(61623);
console.log('Stomp server running at ws://0.0.0.0:61623/');

function broadcast(str) {
	server.connections.forEach(function (connection) {
//		console.log(str)
	})
}
