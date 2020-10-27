const {model, Schema} = require('mongoose');

const Community = new Schema({
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
    hospitalBed: Number,
    uciBed: Number,
    casesIncrement: Number
});

module.exports = model('Community', Community)