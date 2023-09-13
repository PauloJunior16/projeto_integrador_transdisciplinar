const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    //Add fields timestamp, notification type etc
});

const NotificationModel = mongoose.model('Notification', notificationSchema);

module.exports = NotificationModel;