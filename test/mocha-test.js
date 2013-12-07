var assert = require("assert");
describe('Array', function(){
    describe('#indexOf()', function(){
          it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
});

require('should')
describe('Array', function(){
    describe('#indexOf', function(){
        it('should return -1 when the value is not present.', function(){
            [1, 2, 3].indexOf(5).should.equal(-1);
            [1, 2, 3].indexOf(0).should.equal(-1);
        })
    })
})

// for Example you may wish to populate database with dummy content before eash test
describe('Connection', function(){
    var db = new Connection
})
