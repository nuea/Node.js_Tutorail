var http = require('http');
var dt = require('./demo_create_module');       //Include Your Own Module

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);

console.log('Server running at http://localhost:8080/');