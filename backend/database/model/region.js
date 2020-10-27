const {model, Schema} = require('mongoose');

const Region = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    confirmedCases: Number,
    hospitalCheckIn: Number,
    uciCheckIn: Number,
    deaths: Number,
    discharges: Number,
});

module.exports = model('Region', Region)