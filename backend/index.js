//----------------------- REQUIRES -----------------------//
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan');

const public = require('./routes/public')

const cors = require('cors')

const app = express()


const {cronclock} = require('./services/cron')



// ----------------------- CONFIG -----------------------//

dotenv.config() 
cronclock()

/*

app.set('port', process.env.PORT || 8080) 
//----------------------- DATA CONNECTION -----------------------//

mongoose.connect(process.env.DB || 'mongodb://localhost:27017/covid',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 

mongoose.connection.once('open', () => {
    console.log('Database successfully connected!')
})

//----------------------- MIDDLEWARE -----------------------//

app.use(morgan('dev'))
app.use(cors());
app.use(express.json())
// app.use('/private')
app.use('/public', public)

//----------------------- LISTENING AND SERVE -----------------------//

app.listen(app.get('port'), () => {
    console.log('Server successfully started!',app.get('port'))
});

*/