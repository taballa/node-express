var htutil = require('./htutil')
var math = require('./math')
var express = require('express')
var app = express(
        express.logger()
    )
var swig = require('swig')

// app.engine('html', require('ejs').renderFile)
app.engine('html', swig.renderFile) //for swig
// app.set('view engine', 'ejs')
app.set('view engine', 'html') //for swig
// Disable cacheing.
app.set('view cache', false) //for swig and expressjs
swig.setDefaults({ cache: false })
app.set('views', __dirname + '/views') //for template

app.configure(function(){
    app.use(app.router);
    app.use(express.static(__dirname + '/filez'))
    app.use(express.errorHandler({
        dumpException : true, showStack : true
    }))
})

app.get('/', function(req, res){
    // res.render('home.html', {title: 'Math Wizard'}) //for ejs
    var myLabel = function label(){
        return "<h1>My Labels</h1>"
    }
    res.render('home',
    {
        title: 'Math Wizard',
        birthday: new Date(),
        label: "<h1>My stuff things</h1>"
    }) // for swig
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
