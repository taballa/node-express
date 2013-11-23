var request = require('supertest')
var app = require('../app-urlrar')
require('should')

describe('urlrar app', function(){
    before(function (done){
        app.listen(0, done)
    })

    it('GET / should show the title, a form and a text input', function(done){
        request(app)
        .get('/')
        .expect(200)
        .expect('X-Power-By', 'Nodejs')
        .end(function(err, res){
            if (err) return done(err);
            var body = res.text;
            // console.log(body);
            body.should.include('<title>Shorten URL Expand</title>')
            body.should.include('<form')
            body.should.include('</form>')
            body.should.include('<input')
            done();
        })
    })
})
