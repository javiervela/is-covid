const router = require('express').Router();
const User = require('../model/user')
const Data = require('../model/data')
const bycript = require('bcrypt');
/*
router.post('/signUp', async (req,res) => {
    // VALIDACION

    //
    const userExist = await User.findOne({email: req.body.email})
    if(userExist){
        return res.status(401).send('user already exist')
    }

    const salt = await bycript.genSalt(10)
    
})
*/
router.get('/datos-comunidad/:name', async (req, res) => {
    try{
        const data = await Data.findOne({$and: [{name: req.params.name},{type: 'community'}]})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
});

router.get('/datos-region/:name', async (req, res) => {
    try{
        const data = await Data.findOne({$and: [{name: req.params.name},{type: 'region'}]})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
});

router.get('/datos-poblation/:name', async (req, res) => {
    try{
        const data = await Data.findOne({$and: [{name: req.params.name},{type: 'poblation'}]})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
});

module.exports = router;

