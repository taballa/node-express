var htutil = require('./htutil')
var math = require('./math')
var express = require('express')
var app = express(
        express.logger()
    )

app.engine('html', require('ejs').renderFile)
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.configure(function(){
    app.use(app.router);
    app.use(express.static(__dirname + '/filez'))
    app.use(express.errorHandler({
        dumpException : true, showStack : true
    }))
})

app.get('/', function(req, res){
    res.render('home.html', {title: 'Math Wizard'})
})
app.get('/mult', htutil.loadParams, function(req, res){
    if (req.a && req.b) req.result = req.a * req.b
    res.render('mult.html', {title: "Math Wizard", req: req})
})

app.get('/404', function(req, res){
    res.send("NOT FOUND" + req.url)
})

app.listen('8124')
console.log('listening to http://localhost:8124')
