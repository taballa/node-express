var connect = require('connect')
var connectRoute = require('connect-route')
var htutil = require('./htutil')

connect.createServer()
    .use(connect.favicon())
    .use(connect.logger())
    .use('/filez', connect.static(__dirname + 'filez'))
    .use(connectRoute(function(app){
        app.get('/', require('./home-node').get);
        // Fix: htutil.loadParams 在这里执行会引起错误，先去试试 expressjs
        // app.get('/square', htutil.loadParams, require('./square-node').get);
        // app.get('/factorial', htutil.loadParams, require('./factorial-node').get);
        // app.get('/fibonacci', htutil.loadParams, require('./fibo2-node').get);
    })).listen(8124)

console.log('listening to http://127.0.0.1:8124')

