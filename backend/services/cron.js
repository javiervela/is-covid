//const cron = require('cron');
const { csv } = require('csvtojson')
const fs = require('fs')
const Region = require('../model/region');
const axios = require('axios');

const folder = __dirname + "/../public/Aragon_Region.csv"

const RegionInit = async () => {

    const writer = fs.createWriteStream(folder)

    // Region
    const res = await axios({'url': process.env.REGION_URL, method: 'GET', 'responseType': 'stream'});
    
    res.data.pipe(writer)

    writer.on('finish', async() => {
        writer.close();

        const results = await csv({delimiter: ";"}).fromFile(folder);
        
        results.map( (value) => {
            const region = new Region({
                name: value.provincia,
                date: value.fecha,
                confirmedCases: value.casos_confirmados,
                hospitalCheckIn: value.ingresos_hospitalarios,
                deaths: value.fallecimientos,
                uciCheckIn: value.ingresos_uci
            })
            console.log(region);
        })
    })

    writer.on('error', (err) => {
        console.log(err)
    })
}

//const job = new cron.Cronjob('0 0 0 * * *', cron())

module.exports = {cronclock};