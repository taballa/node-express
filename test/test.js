var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(done){
      var user = new User('Luna');
      user.save(function(err){
        if (err) throw err;
        done();
      });
    })
  })
})

fs = require('fs');
describe('File', function(){
    describe('#readFile()', function(){
        it.skip('should read test.ls without error', function(done){
            fs.readFile('test.as', function(err){
                if (err) throw err;
                done();
            });
        })
        it('should read test.js without error', function(done){
        })
    })
})
