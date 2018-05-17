const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2}
})

mongoose.model('author', AuthorSchema)