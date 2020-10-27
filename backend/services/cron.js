const Cronjob = require('cron').CronJob;
const { csv } = require('csvtojson')
const fs = require('fs')
const axios = require('axios');

const Region = require('../database/model/region');
const Community = require('../database/model/community')

const folder = __dirname + "/../public/"

const RegionInit = async() => {

    const writer = fs.createWriteStream(folder + "Aragon_Region.csv")

    // Region
    const res = await axios({'url': process.env.REGION_URL, method: 'GET', 'responseType': 'stream'});
    
    res.data.pipe(writer)

    writer.on('finish', async() => {
        writer.close();

        const results = await csv({delimiter: ";"}).fromFile(folder + "Aragon_Region.csv");
        
        results.map( async(value) => {
            const region = new Region({
                name: value.provincia,
                date: value.fecha,
                confirmedCases: value.casos_confirmados,
                hospitalCheckIn: value.ingresos_hospitalarios,
                uciCheckIn: value.ingresos_uci,
                deaths: value.fallecimientos,
                discharges: value.altas,

            })
            console.log(region);

            const dataExist = await Region.findOne({$and:[{date : region.date},{name : region.name}]})

            if(!dataExist){
                await Region.save()
            }
        })
    })

    writer.on('error', (err) => {
        console.log(err)
    })
}

const CommunityInit = async() => {

    const writer = fs.createWriteStream(folder + "Aragon_Comunidad.csv")

    
    const res = await axios({'url': process.env.COMMUNITY_URL, method: 'GET', 'responseType': 'stream'});
    
    res.data.pipe(writer)

    writer.on('finish', async() => {
        writer.close();

        const results = await csv({delimiter: ";"}).fromFile(folder + "Aragon_Comunidad.csv");
        
        results.map( async(value) => {
            const community = new Community({
                name: "Aragon",
                date: value.fecha,
                confirmedCases: value.casos_confirmados,
                hospitalCheckIn: value.ingresos_hospitalarios,
                uciCheckIn: value.ingresos_uci,
                deaths: value.fallecimientos,
                discharges: value.altas,
                hospitalBed: value.camas_planta_ocupadas,
                uciBed: value.camas_uci_ocupadas,
                casesIncrement: value.incremento_casos_confirmados_diario
            })
            const dataExist = await Community.findOne({$and:[{date : community.date},{name : community.name}]})

            if(!dataExist){
                await Community.save()
            }
           
        })
    })

    writer.on('error', (err) => {
        console.log(err)
    })
}


const RegionUpdate = async() => {

    const writer = fs.createWriteStream(folder + "Aragon_Region.csv")

    // Region
    const res = await axios({'url': process.env.REGION_URL, method: 'GET', 'responseType': 'stream'});
    
    res.data.pipe(writer)

    writer.on('finish', async() => {
        writer.close();

        const results = await csv({delimiter: ";"}).fromFile(folder + "Aragon_Region.csv");
        
        results.map(async(value) => {
            const region = new Region({
                name: value.provincia,
                date: value.fecha,
                confirmedCases: value.casos_confirmados,
                hospitalCheckIn: value.ingresos_hospitalarios,
                uciCheckIn: value.ingresos_uci,
                deaths: value.fallecimientos,
                discharges: value.altas,

            })
            console.log(region);

            const dataExist = await Region.update({$and:[{date : region.date},{name : region.name}]},region,{upsert: true, setDefaultsOnInsert: true})
        })
    })

    writer.on('error', (err) => {
        console.log(err)
    })
}

const CommunityUpdate = async() => {

    const writer = fs.createWriteStream(folder + "Aragon_Comunidad.csv")

    
    const res = await axios({'url': process.env.COMMUNITY_URL, method: 'GET', 'responseType': 'stream'});
    
    res.data.pipe(writer)

    writer.on('finish', async() => {
        writer.close();

        const results = await csv({delimiter: ";"}).fromFile(folder + "Aragon_Comunidad.csv");
        
        results.map( async(value) => {
            const community = new Community({
                name: "Aragon",
                date: value.fecha,
                confirmedCases: value.casos_confirmados,
                hospitalCheckIn: value.ingresos_hospitalarios,
                uciCheckIn: value.ingresos_uci,
                deaths: value.fallecimientos,
                discharges: value.altas,
                hospitalBed: value.camas_planta_ocupadas,
                uciBed: value.camas_uci_ocupadas,
                casesIncrement: value.incremento_casos_confirmados_diario
            })
            const dataExist = await Community.update({$and:[{date : community.date},{name : community.name}]},community,{upsert: true, setDefaultsOnInsert: true})

        })
    })

    writer.on('error', (err) => {
        console.log(err)
    })
}



const job = new Cronjob('0 0 0 * * *', () => {
    RegionUpdate();
    CommunityUpdate();
})
module.exports = job;