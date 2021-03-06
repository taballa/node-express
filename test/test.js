var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})


require("should");

var name = "zhaojian";

describe("Name", function() {
    it("The name should be zhaojian", function() {
        name.should.eql("zhaojian");
        // name.should.eql("epson");
    });
});

var Person = function(name) {
    this.name = name;
};
var zhaojian = new Person(name);

describe("InstanceOf", function() {
    it("Zhaojian should be an instance of Person", function() {
        zhaojian.should.be.an.instanceof(Person);
    });

    it("Zhaojian should be an instance of Object", function() {
        zhaojian.should.be.an.instanceof(Object);
    });
});
describe("Property", function() {
    it("Zhaojian should have property name", function() {
        zhaojian.should.have.property("name");
    });
});
