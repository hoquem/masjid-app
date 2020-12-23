const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    },
    houseno: {
        type: String,
        required: true,
        trim: true
    },
    street: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    postcode: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Member', MemberSchema);
