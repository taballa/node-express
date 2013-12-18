/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var MongoStore = require('connect-mongo')(express);
var settings = require('./settings')

var flash = require('connect-flash');

var app = express();

app.use(flash()); // NOTE:必须放在 app.use(express.session({ ... })) 之前！
// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
// app.set('view engine', 'jade');
app.set('view engine', 'ejs');
// app.use(express.favicon());
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser())
app.use(express.session({
    secret: settings.cookieSecret,
    key: settings.db, // cookie nanme
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 30}, // 30day
    store: new MongoStore({
        db: settings.db
    })
}))
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', routes.index);
app.get('/users', user.list);
// app.get('/custom', routes.custom)
app.get('/flash', function(req, res){
    req.flash('info', "Flash is back!")
    res.redirect('/')
})
routes(app)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

