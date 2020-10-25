const router = require('express').Router();
const User = require('../model/user')
const Region = require('../model/region')
const Community = require('../model/community')
const bycript = require('bcrypt');
const nodemailer = require('nodemailer');
const { userValidation } = require('../validation/validation')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    aut: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
})

router.post('/signUp', async (req,res) => {
    // VALIDACION
    const isValid = userValidation(req.body)
    
    //
    const userExist = await User.findOne({email: req.body.email})
    if(userExist){
        return res.status(401).send('user already exist')
    }
    try{
        const salt = await bycript.genSalt(10)
        const hashPassword = await bycript.hash(req.body.password,salt);
    }catch{
        return res.status(401).send('error')
    }
    const user = new User({
        name : require.body.name,
        surname: req.body.surname,
        password: hashPassword,
        birthdate: req.body.birthdate,
        email: req.body.email,
        sex: req.body.sex,
        authentication: false,
        location: req.body.location
    })
    try{
        await user.save()
    }catch{
        return res.status(401).send('error')
    }
    // Send a email
    const mailOptions = {
        from: process.env.USER,
        to: 'javiervela@gmail.com',
        subject: 'Invoices due',
        text: 'Dudes, we really need your money.'
    };
    transporter.sendMail(mailOptions, (error, info) => { 
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    })

    return res.status(200)
})

router.get('/datos-comunidad/:name', async (req, res) => {
    try{
        const data = await Community.findOne({name: req.params.name})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
});

router.get('/datos-region/:name', async (req, res) => {
    try{
        const data = await Region.findOne({name: req.params.name})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
});

router.get('/datos-comunidad/:name/:fecha', async (req, res) => {
    try{
        const data = await Community.findOne({$and: [{name: req.params.name},{date : new Date(req.params.fecha)}]})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
});

router.get('/datos-region/:name/:fecha', async (req, res) => {
    try{
        const data = await Region.findOne({$and: [{name: req.params.name},{date : new Date(req.params.fecha)}]})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
});

/*
router.get('/datos-poblation/:name', async (req, res) => {
    try{
        const data = await Data.findOne({$and: [{name: req.params.name},{type: 'poblation'}]})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
});
*/
module.exports = router;

