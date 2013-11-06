var connect = require('connect')
var htutil = require('./htutil')

connect.createServer()
    .use(connect.favicon())
    .use(connect.logger())
    .use('/filez', connect.static(__dirname + 'filez'))
    .use(connect.router(function(app){
        app.get('/', require('./home-node').get);
        app.get('/square', htutil.loadParams, require('./square-node').get)

    }))

