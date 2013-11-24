var fs = require("fs");
require("should");

describe("readFile", function() {
    it("The file content should be zhaojian", function(done) {
        fs.readFile("text.txt", "utf8", function(err, data) {
            if (err) return done(err)
            // console.log(data)
            data.should.eql("zhaojian\n");
            done();
        });
    });
});
