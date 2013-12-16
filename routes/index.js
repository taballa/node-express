/*
 * GET home page.
 */

// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', {
            title: 'Express'
        });
    })
}

module.exports.custom = function(req, res){
  res.render('custom', {title: 'Custom Page', supplies: ['mop', 'broom', 'duster']});
}
