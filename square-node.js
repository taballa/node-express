var htutil = require("./htutil.js")
exports.get = function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"})
    res.end(htutil.page("Square", htutil.navbar(), [
        (!isNaN(req.a) ?
            ('<p class="result">{a} squared = {sq}</p>'
            .replace("{a}", req.a)
            .replace("{sq}", req.a*req.a))
            : ""
        ),
        '<p>Enter a number to see its square.</p>',
        '<form action="/square" method="get" name="square">',
        'A: <input type="text" name="a" />',
        '</form>'].join('\n')
    ))
}
