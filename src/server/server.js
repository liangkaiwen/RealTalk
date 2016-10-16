//import HTTP module
var http = require('http');
var fs = require('fs');

//set port #
const PORT = 8080;

//load HTML files
var rootDir = process.cwd() + '/..';
var homePage = fs.readFileSync(rootDir + '/app/public/index.html', 'utf8');

//We need a function which handles requests and send response
//req = request
//res = response
function handleRequest(req, res) {
	info(req.url);

    if (req.url.match("^/home$")) {
    	res.writeHead(200, {"Content-Type": "text/html"});
    	res.end(homePage);
    }
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function() {
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

//Logging Code
function info(message) {
	console.log("[INFO]: " + message);
}