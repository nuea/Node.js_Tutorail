var http = require('http');     //Import HTTP Modul

http.createServer(function (request, response) {        //Create Server Instance
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/html
    response.writeHead(200, {'Content-Type': 'text/html'});
        
    response.end('Hello World!');       // Send the response body as "Hello World"
}).listen(8080);         // Binding Server Instace with the Post No. 8081

// Console will print the message
console.log('Server running at http://localhost:8080/');