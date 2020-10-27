// Mover a carpeta Job?

const Cronjob = require('cron').CronJob;

const synchro = require('./synchro')
const mail = require('./mail')

const User = require('../database/model/user');
const Community = require('../database/model/community')


const sync = new Cronjob('0 0 0 * * *', async() => {
    await synchro.RegionUpdate()
    await synchro.CommunityUpdate()
})

const daily_bulletin = new Cronjob('0 0 6 * * *', async() => {
    
    /// mandamos email solo a los usuarios verificados
    const users = Userfind({verificated: true})

    // To develop : mejorar rendimiento añadir + info + html templates
    users.map((value) => {
        const casesIncrement = Community.findOne({$and: [{name : value.location.community}, {date: Date.now()}]})
        mail.sendEmail(value.user.name,'Boletín diario','incrementos de casos diarios en '+ value.location.community + ' :' + casesIncrement)
    })
})

module.exports = {sync,daily_bulletin}
