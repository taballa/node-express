require('should')

var urllib = require('../lib/urllib')
// urllib.expand(shortenURL, function(err, longURL, redirectConut){
//     // go on
// })

var mapping = [
  [ 'http://www.baidu.com/', 'http://www.baidu.com/' ],
  [ 'http://t.cn/StVkqS', 'http://nodejs.org/community/' ],
  [ 'http://url.cn/48JGfK', 'http://baike.baidu.com/view/6341048.htm' ],
  [ 'http://t.cn/aK1IFu', 'http://v.youku.com/v_show/id_XMjc2MjY1NjEy.html' ],
   // 2 times redirect
  [ 'http://url.cn/3OMI3O', 'http://v.youku.com/v_show/id_XMjc2MjY1NjEy.html', 2 ],
  [ 'http://luo.bo/17221/', 'http://luo.bo/17221/' ],
  [ 'http://t.itc.cn/LLHD6', 'http://app.chrome.csdn.net/work_detail.php?id=57' ],
];

var desc = 'should expand ' + mapping.length + ' shorten urls success'
it(desc, function(done){
    var counter = 0
    mapping.forEach(function(map){
        urllib.expand(map[0], function(err, longURL, redirectCounter){
            should.not.exist(err);
            map[1].should.equal(longurl)
            if (map[2]){
                redirectCounter.should.equal(map[2])
            }
            if (++counter === mapping.length){
                done();
            }
        })
    })
})
