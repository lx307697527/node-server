
var server = require("./server");
var router = require("./router");
var requestHandlers =require("./requestHandlers");

// var handle = {}
var handle = requestHandlers.api;
// handle["/api"] = requestHandlers.api;
// handle["/get"] = requestHandlers.get;

server.start(router.route, handle);