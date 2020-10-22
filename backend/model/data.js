const {model, Schema} = require('mongoose');

const Data = new Schema({
    type: {
        type: String,
        enum: ['region','community','poblation'],
        requiered: true
    },
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
    hospitalBed: Number,
    uciBed: Number,
    casesIncrement: Number
});

module.exports = model('Data', Data)