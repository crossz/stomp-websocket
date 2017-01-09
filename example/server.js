var connect = require('connect'), serveStatic = require('serve-static');
var logger = require('morgan');

connect()
    .use(logger())
    .use(serveStatic(__dirname))
    .use(serveStatic(__dirname + '/../lib/'))
    .listen(8080);
console.log('Server running at http://0.0.0.0:8080/');


var http = require("http");
var ws = require("nodejs-websocket");

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer({"validProtocols":['v10.stomp', 'v11.stomp']},function (conn) {
    console.log("New connection");
    conn.on("text", function (str) {
        console.log("Received "+str);
        conn.sendText(str.toUpperCase()+"!!!")
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    });
}).listen(61623);
console.log('Stomp server running at ws://0.0.0.0:61623/');
