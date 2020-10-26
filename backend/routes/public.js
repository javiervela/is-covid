const router = require('express').Router();
const User = require('../model/user')
const Region = require('../model/region')
const Community = require('../model/community')
const bycript = require('bcrypt');


router.post('/signUp', SignIn(req,res))

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

