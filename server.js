var http = require('http');
var port = process.env.PORT || 8080;        
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello Heroku !!! update on server.js file');
});
server.listen(port);
