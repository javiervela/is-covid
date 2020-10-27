// To develop : model access functions 
// subscribe a user
// update poblation, region, community
// valid a user
// get Users
// ....
// change file name
const Region = require('../model/region')
const Community = require('../model/community')

const getCommunityDataByName = async(req, res) => {
    try{
        const data = await Community.findOne({name: req.params.name})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
}

const getRegionDataByName = async(req, res) => {
    try{
        const data = await Region.findOne({name: req.params.name})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
}

const getCommunityDataByDate = async (req, res) => {
    try{
        const data = await Community.findOne({$and: [{name: req.params.name},{date : new Date(req.params.fecha)}]})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
}

const getRegionDataByDate = async (req, res) => {
    try{
        const data = await Region.findOne({$and: [{name: req.params.name},{date : new Date(req.params.fecha)}]})
        return res.status(200).send(data)
    }catch(err){
        return res.status(402).send('error')
    }
}

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


module.exports = {getCommunityDataByDate,getCommunityDataByName,getRegionDataByDate,getRegionDataByName}