const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

    //Add more fields (timestamps, comments, likes etc)
});

const PostModel = mongoose.model('Post', postSchema);

module.exports = PostModel;