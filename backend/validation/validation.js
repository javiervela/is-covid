const Joi = require('joi')

const schema = Joi.object().keys({
    name: Joi.string().max(50).required(),
    surname: Joi.string().max(50).required(),
    password: Joi.string().min(8).max(24).required(),
    birthdate: Joi.required(),
    email: Joi.string().email().required(),
    sex: Joi.string().regex(/['male' | 'female' | 'other']/),
    location:{province: Joi.required(), region: Joi.required()}
})

const userValidation = (user) => { 
    return schema.validate(user)
}

module.exports = {userValidation}