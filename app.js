var express = require('express');
var app = express();
var router = require('./router.js');
//both router.js and server.js should be in same directory
app.use('/', router);
app.listen(8080);
console.log("Server running at http://localhost:8080");
