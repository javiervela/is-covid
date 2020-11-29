const router = require('express').Router();

const auth = require('../validation/authentication')
const data = require('../database/config/config')

router.post('/signUp', auth.SignUp)

router.post('/signIn', auth.SignIn)

router.post('/confirmation/:token', auth.Confirmation)

router.get('/datos-comunidad', data.getCommunityDataByName);

router.get('/datos-region/', data.getRegionDataByName);

router.get('/datos-comunidad/:name/:fecha', data.getCommunityDataByDate);

router.get('/datos-region/:name/:fecha', data.getRegionDataByDate);


module.exports = router;

