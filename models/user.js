var mongodb = require('./db')

function User(user){
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
}

module.exports = User;


// Save user infomation
User.prototype.save = function(callback){
    // user infomation
    var user = {
        name: this.name,
        password: this.password,
        email: this.email
    }

    // open database
    mongodb.open(function(err, db){
        if (err){
            return callback(err) //error message
        }
        // reading users
        db.collection('users', function(err, collection){
            if (err){
                mongodb.close();
                return callback(err);
            }
            collection.insert(user, {safe: true}, function(err, user){
                mongodb.close();
                if(err){
                    return callback(err);

                }
                callback(null, user[0]); // success! return queried user infomation
            })
        })
    })
}

