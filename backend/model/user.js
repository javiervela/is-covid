const {model, Schema} = require('mongoose')

const User = new Schema({
    name: {
        type: String,
        required: true,
        max: 50,
    },
    surname: {
        type: String,
        required: true,
        max: 50
    },
    
    password: {
        type: String,
        required: true,
        mix: 8,
        max: 24
    },
    birthdate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    email: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: false,
        enum: ['male','female','other']
    },
    authentication: {
        type: Boolean,
        default: false
    },
    location: {
        postcode: Number,
        community: String,
        region: String,
        poblation: String
    }
})

module.exports = model('User', User)