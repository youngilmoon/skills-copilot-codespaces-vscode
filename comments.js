// create web server
// 1. load modules
var http = require('http');

// 2. create web server
var server = http.createServer(function(request, response) {
    // 3. send http header
    // http status value: 200 : ok
    // content type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 4. send response body as "Hello World"
    response.end('Hello World\n');
}   );

// 5. bind server to port 8081
server.listen(8081);

// 6. print log message
console.log('Server running at http://localhost');

