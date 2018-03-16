let User = require('../model/user.js');
var mongoose = require("mongoose");

exports.register = function(req, res){
    User.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
      });
}

exports.Index = function(req, res){
    res.pageInfo = {};
    res.pageInfo.title = 'CryptoFish';
    //response.send("Hello")
    res.render('Index', res.pageInfo);
};

exports.signin = function(req,res){
    res.abc ={};
    res.abc.title ='Register'
    res.render('reg', res.abc)
};
