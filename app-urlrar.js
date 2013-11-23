var http = require('http')
var parse = require('url').parse
var fs = require('fs')

var indexHtml = fs.readFileSync('./index.html')

var app = http.createServer(function(req, res){
    res.setHeader('X-Power-By', 'Nodejs')
    res.setHeader('Content-Type', 'text/html')
    var info = parse(req.url, true)
    if (info.pathname === '/'){
        res.end(indexHtml)
    }
})

module.exports = app;
