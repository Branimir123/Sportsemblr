const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    description: {
        type: String
    },
    sport: {
        type: string,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    peopleNeeded: {
        type: number,
        required: true
    },
    price: {
        type: number,
        required: true
    },
    participants: [String]
}, {
    timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;