const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const public = require('./routes/public')
const mongoose = require('mongoose')
const syncro = require('./services/synchro')

dotenv.config()


app.set('port', process.env.PORT || 8080)

//syncro.CommunityUpdate()
//syncro.RegionUpdate()

mongoose.connect(process.env.DB || 'mongodb://localhost:27017/iscovid',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log('DB connected')
})

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/public',public)

app.listen(app.get('port'), () => {
    console.log('App connected', app.get('port'))
})
