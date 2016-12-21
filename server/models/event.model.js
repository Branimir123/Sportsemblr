const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    description: {
        type: String
    },
    sport: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    peopleNeeded: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    participants: [String]
}, {
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;