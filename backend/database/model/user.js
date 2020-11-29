const {model, Schema} = require('mongoose')

const User = new Schema({
    user: {
        name: {
            type: String,
            required: true,
            max: 50,
        },
        surname: {
            type: String,
            required: true,
            max: 50
        }
    },
    rol: {
        type: String,
        required: true,
        enum: ['admin','user'],
        default: 'user'
    },
    password: {
        type: String,
        required: true,
        mix: 8,
        max: 24
    },
    birthdate: {
        type: {day: Number, month: Number, year: Number},
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: false,
        default: 'other',
        enum: ['male','female','other']
    },
    verificated: {
        type: Boolean,
        default: false,
        required: true
    },
    location: {
        postcode: Number,
        province: String,
        region: String,
        poblation: String
    }
})

module.exports = model('User', User)