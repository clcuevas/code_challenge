var http = require('http'),
		fs = require('fs'),
		index = fs.readFileSync('index2.html');

var server = http.createServer(function(req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(index);
	}).listen(3000);

server.on('error', function(e) {
	console.log('Error: ' + e);
});

console.log("Successful connection on port 3000");

