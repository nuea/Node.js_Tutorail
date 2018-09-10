var http =require('http');
var fs = require('fs');

http.createServer(function( req, res){
    fs.readFile('html_read_file.html', function(err, data){
        res.writeHead(200, {'Conten-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

console.log('Server running at http://localhost:8080/');