/*
 * GET users listing.
 */

exports.list = function(req, res) {
    // res.send("respond with a resource");
    console.log('user:' + req.seesion)
    // if (!req.seesion.user) {
    //     req.flash('error', 'not login')
    //     res.redirect('/login')
    // }
    res.render('user', {
        user: req.session.user
    })
};
