var fs = require("fs");
require("should");

describe("readFile", function() {
    it("The file content should be zhaojian", function(done) {
        fs.readFile("text.txt", "utf8", function(err, data) {
            data.should.eql("zhaojian");
            done();
        });
    });
});
