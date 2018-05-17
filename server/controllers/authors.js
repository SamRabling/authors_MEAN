const mongoose = require("mongoose");
var Author = mongoose.model("author");

module.exports = {
    index: function (req, res) {
        Author.find({}, function (err, author) {
            if (err) {
                res.json({ status: false, data: err });
            } else {
                res.json({ status: true, data: author});
            }
        });
    },

    new: function (req, res) {
        console.log(req.body.name);
        var author = new Author({
            name: req.body.name
        });
        author.save( function (err){
            if (err) {
                res.json({ status: false, data: err });
            } else {
                res.json({ status: true, data: author });
            }
        });
    },

    update: function (req, res, err) {
        Author.findById({_id: req.params.id}, function (err, author){
            if (err) {
                res.json({ status: false, data: err });
            } else {
                author.name = req.body.name
                console.log(req.body.name);
                author.save(function (err, updatedAuthor){
                    if (err) {
                        res.json({ status: false, data: err });
                        console.log(err);
                    } else {
                        res.json({ status: true, data: updatedAuthor });
                    }
                });
            }
        });
    },

    show: function (req, res, err) {
        var id = req.params.id
        Author.findOne({ _id: id }, function (err, author) {
            if (err) {
                res.json({ status: false, data: err });
            } else {
                res.json({ status: true, data: author });
            }
        });
    },

    remove: function (req, res, err) {
        Author.findByIdAndRemove({_id: req.params.id}, function (err, author) {
            if (err) {
                res.json({ status: false, data: err });
            } else {
                res.json({ status: true });
            }
        });
    }
}