var htutil = require("./htutil")
var math = require('./math')

// NOTE:返回HTML渲染结果
function sendResult(req, res, a, fiboval){
    res.writeHead(200, {
        'Content-Type':'text/html'
    })
    res.end(
        htutil.page(
            "Fibonacci",
            htutil.navbar,
            [
                (!isNaN(fiboval)?
                    '<p class="result">fibonacci {a} = {fibo}</p>'
                    .replace("{a}", req.a)
                    .replace("{fibo}", fiboval)
                :""),
                '<p>Enter a number to see its fibonacci.</p>',
                '<form action="/fibo2" method="get" name="fibonacci">',
                'A: <input type="text" name="a" />',
                '</form>'
            ].join('\n')
            )
        )
}

exports.get = function(req, res){
    if (!isNaN(req.a)){
        math.fibonacciAsync(Math.floor(req.a), function(val){
            sendResult(req, res, Math.floor(req.a), val);
        })
    } else {
        sendResult(req, res, NaN, NaN)
    }
}
