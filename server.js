var http = require('http');
var fs = require('fs');
var dt = require('./service/utils');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(data);
    res.end();
  });
}).listen(8080);