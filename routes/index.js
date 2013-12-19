/*
 * GET home page.
 */
var crypto = require('crypto');
var User = require('../models/user')


// exports.index = function(req, res){
//   res.render('index', { title: 'Express' });
// };

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', {
            title: 'Express',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString(),
            info: req.flash('info').toString()
        });
    })

    app.get('/custom', function(req, res) {
        res.render('custom', {
            title: 'Custom Page',
            supplies: ['mop', 'broom', 'duster']
        });
    })

    app.get('/signup', checkNotLogin);
    app.get('/signup', function(req, res) {
        res.render('signup', {
            title: '注册',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString(),
            info: req.flash('info').toString()
        });
    });

    app.get('/login', checkNotLogin);
    app.get('/login', function(req, res) {
        res.render('login', {
            title: '登录',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString(),
            info: req.flash('info').toString()
        });
    });

    app.get('/post', function(req, res) {
        res.render('post', {
            title: '发表',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString(),
            info: req.flash('info').toString()
        });
    });

    app.get('/logout', checkLogin)
    app.get('/logout', function(req, res) {
        req.session.user = null;
        req.flash('success', '登出成功！')
        res.redirect('/')
    });

    app.post('/signup', function(req, res) {
        var name = req.body.name, password = req.body.password, password_repeat = req.body['password-repeat'];
        // check whether the password is consistent.
        if (password_repeat != password){
            req.flash('error', 'entered passwords differ.')
            return res.redirect('/signup')
        }

        // MD5 value generated password
        var MD5 = crypto.createHash('md5'),
            password = MD5.update(req.body.password).digest('hex')
        var newUser = new User({
            name : req.body.name,
            password : password,
            email : req.body.email
        })

        User.get(newUser.name, function(err, user){
            // check whether the username is exist.
            if (user){
                req.flash('error', 'username is exist!')
                return res.redirect('/signup')
            }
            newUser.save(function(err, user){
                if(err){
                    req.flash('error', err)
                    return res.redirect('/signup')
                }
                req.session.user = user;
                req.flash('success', 'sign up success!')
                res.redirect('/')
            })
        })
    });

    app.post('/login', function(req, res) {
        var MD5 = crypto.createHash('md5'),
            password = MD5.update(req.body.password).digest('hex');
        User.get(req.body.name, function(err, user){
            if (!user){
                req.flash('error', 'user not exist.')
                return res.redirect('/login')
            };
            if (password != user.password){
                req.flash('error', 'wrong password.')
                return res.redirect('/login')
            };
            req.session.user = user;
            req.flash('success', 'Login Success.')
            res.redirect('/')
        })
    });

    app.post('/post', function(req, res) {

    });

}

// module.exports.custom = function(req, res){
//     res.render('custom', {title: 'Custom Page', supplies: ['mop', 'broom', 'duster']});
// }

function checkLogin(req, res, next){
    if (!req.session.user){
        req.flash('error', 'not login')
        res.redirect('/')
    }
    next();
}

function checkNotLogin(req, res, next) {
   if (req.session.user){
        req.flash('error', 'logged.')
        res.redirect('back')
    }
    next();

}
