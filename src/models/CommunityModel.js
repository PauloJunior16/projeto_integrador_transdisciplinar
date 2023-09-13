const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    }
    //Add more fields like list of members, moderators etc.
});

const CommunityModel = mongoose.model('Community', communitySchema);

module.exports = CommunityModel;