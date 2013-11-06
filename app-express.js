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
