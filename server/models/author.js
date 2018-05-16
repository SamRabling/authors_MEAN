const mongoose = requier("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 5}
})

mongoose.model('task', TaskSchema)