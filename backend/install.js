const mongoose = require('mongoose')
const dotenv = require('dotenv')
const syncro = require('./services/synchro')


dotenv.config()

mongoose.connect(process.env.DB || 'mongodb://localhost:27017/iscovid',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('DB connected')
    syncro.CommunityInit()
    syncro.RegionInit()
})



