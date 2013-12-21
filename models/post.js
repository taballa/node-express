var mongodb = require('./db');

function Post(name, title, post){
    this.name = name;
    this.title = title;
    this.post = post;
}

module.exports = Post;

// save article
Post.prototype.save = function(callback){
    var date = new Date();

    // all kinds of time.
    var time = {
        date : date,
        year : date.getFullYear(),
        month : date.getFullYear() + '-' + (date.getMonth() + 1),
        day : date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
        minute : date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + '-' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
    }

    // article
    var post = {
        name : this.name,
        time : time,
        title : this.title,
        post : this.post
    }

    // open database
    mongodb.open(function(err, db){
        if (err){
            return callback(err)
        }
        db.collection('posts', function(err, collection){
            if (err){
                mongodb.close();
                return callback(err);
            }
            // article insert to posts collection
            collection.insert(post, {
                saft: true
            }, function(err){
                mongodb.close();
                if (err){
                    return callback(err)
                }
                callback(null)
            })
        })
    })
}

// reading article
Post.get = function(name, callback){
    // open database
    mongodb.open(function(err, db){
        if (err){
            return callback(err)
        }
        // reading posts collection
        db.collection('posts', function(err, collection){
            if (err){
                mongodb.close();
                return callback(err);
            }
            var query = {};
            if (name){
                query.name = name;
            }
            // search article of query.name
            collection.find(query).sort({
                time: -1
            }).toArray(function (err, docs){
                mongodb.close();
                if (err){
                    return callback(err);
                }
                callback(null, docs);
            })
        })
    })
}

