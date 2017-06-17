var http = require("http");

function requestHandler(request, response) {
	var d = new Date();	
	console.log(d + "In comes a request to: " + request.url);
	response.end("Hello, World! " + d);

}

var server = http.createServer(requestHandler);

server.listen(3000);
