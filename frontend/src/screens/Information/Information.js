import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './information.css'
import '../Home/Footer/Footer.css'
import Stats from '../Home/Footer/Footer-Components/Stats'
import Map from '../Home/Header/Header-Components/Map'
const MyInfo = props => {
    const [Data,setData] = useState([])
    useEffect(() => {
        async function fetchData(){
          try{

            const resProvience = await axios.get('http://localhost:8080/public/datos-comunidad/',{
              params: {
                name: props.match.params.province
              }
            })

            const resRegion = await axios.get('http://localhost:8080/public/datos-region/',{
              params: {
                name: props.match.params.region
              }
            })

            const data = [
                {name: `Casos diarios en ${props.match.params.province}`, data: resProvience.data[resProvience.data.length-1].casesIncrement},
                {name: `Casos totales en ${props.match.params.province}`, data : resProvience.data[resProvience.data.length-1].confirmedCases},
                {name: `Defunciones en ${props.match.params.province}`, data : resProvience.data[resProvience.data.length-1].deaths},
                {name: `Camas ocupadas en ${props.match.params.province}`, data: resProvience.data[resProvience.data.length-1].hospitalBed},
                {name: `Ingresos Uci en ${props.match.params.province}`, data: resProvience.data[resProvience.data.length-1].uciCheckIn},
                {name: `Ingresos Hospitalarios en ${props.match.params.province}`, data : resProvience.data[resProvience.data.length-1].hospitalCheckIn},
                {name: `Camas Uci Ocupadas en ${props.match.params.province}`, data: resProvience.data[resProvience.data.length-1].uciBed},
                {name: `Casos totales en ${props.match.params.region}`, data : resRegion.data[resRegion.data.length-1].confirmedCases},
                {name: `Defunciones ${props.match.params.region}`, data : resRegion.data[resRegion.data.length-1].deaths},
                {name: `Ingresos Uci ${props.match.params.region}`, data: resRegion.data[resRegion.data.length-1].uciCheckIn},
                {name: `Ingresos Hospitalarios ${props.match.params.region}`, data : resRegion.data[resRegion.data.length-1].hospitalCheckIn},
            ]
    
            setData(data)
            
            
          }catch(err){
          }
        }
        fetchData()
      },[props])

      const stats = Data.map((v,i) => {
        return <Stats name={v.name} data={v.data} key={i}/>
      })

    return (
        <section className="infoContainer">
            <section className="info">
                <Map map={props.match.params.province}/>
            </section>
            <section className="item list_container">
                {stats}
            </section>
        </section>
    )
}

export default MyInfo