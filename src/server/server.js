//import/setup
var fs = require('fs');
var my_module = require('./testModule');
var express = require('express');

//set port #
const PORT = 8080;
var server = express();

//load HTML files
var rootDir = process.cwd() + '/..';
var homePage = fs.readFileSync(rootDir + '/app/public/index.html', 'utf8');

//We need a function which handles requests and send response
//req = request
//res = response
server.get('/test', function(req, res) {
	if (req.query.param === "a") {
		res.send(my_module.foo());
	} else if (req.query.param === "b") {
		res.send(my_module.bar());
	}
});

server.get('/*', function(req, res) {
	res.send(homePage);
});

server.listen(PORT, function() {
	console.log("Server listening on: http://localhost:%s", PORT);
});

//Logging Code
function info(message) {
	console.log("[INFO]: " + message);
}