var htutil = require("./htutil.js")
var math = require("./math")

exports.get = function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(
        htutil.page("Factorial", htutil.navbar(), [
            (!isNaN(req.a) ?
                ('<p class="factorial">{a} factorial = {fact}</p>'
                    .replace("{a}", req.a)
                    .replace("{fact}", math.factorial(Math.floor(req.a)))
                )
                : ""
            ),
            "<p>Enter a number to see it's factorial. </p>",
            '<form action="/factorial" method="get" name="factorial">',
            'A: <input type="text" name="a" />',
            '</form>'
            ].join('\n'))
        )
}
