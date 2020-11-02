import React, {useEffect,useState} from 'react';
import Footer from'./Footer'
import Header from './Header';
import axios from 'axios'

import "./Home.css"

const Home = props => {


  const [HistorialCasos , setHistorialCasos] = useState([])
  const [HistorialDiario , setHistorialDiario] = useState([])
  //const [Fecha,setFecha] = useState([])

  const [Daily, setDaily] = useState({
    casosTotales: 0,
    casosDiarios: 0,
    defunciones: 0,
    camasOcupadas: 0,
    ingresosHospitalarios: 0,
    camasUciOcupadas: 0,
    ingresosUci: 0

  }) 
  useEffect(() => {
    async function fetchData(){
      try{
        const res = await axios.get('http://localhost:8080/public/datos-comunidad/',{
          params: {
            name: props.match.params.name
          }
        })
        const daily = {
          casosTotales: res.data[res.data.length-1].confirmedCases,
          casosDiarios: res.data[res.data.length-1].casesIncrement,
          defunciones: res.data[res.data.length-1].deaths,
          camasOcupadas: res.data[res.data.length-1].hospitalBed,
          ingresosHospitalarios: res.data[res.data.length-1].hospitalCheckIn,
          camasUciOcupadas : res.data[res.data.length-1].uciBed,
          ingresosUci: res.data[res.data.length-1].uciCheckIn
        }
        setDaily(daily)
  

        var fecha = []
        for (let index = 0; index < res.data.length; index++) {
          fecha = [...fecha,index]
        }

        //setFecha(fecha)
        
        var historialCasos = []
        var historialDiario = []
        res.data.forEach(value => {
          historialCasos = [...historialCasos,value.confirmedCases]
          if(value.casesIncrement === null){
            historialDiario = [...historialDiario,0]
          }else{
            historialDiario = [...historialDiario,value.casesIncrement]
          }
          
        });

        setHistorialDiario(historialDiario)

        setHistorialCasos(historialCasos)
        
      }catch(err){
        setDaily({
          casosTotales: 0,
          casosDiarios: 0,
          defunciones: 0,
          camasOcupadas: 0,
          ingresosHospitalarios: 0,
          camasUciOcupadas: 0,
          ingresosUci: 0
        
        })
        console.log("not implemented")
      }
    }
    fetchData()
  },[props])

  return(
	<section>
    	<section className="section">
    	  <Header map={props.match.params.name}/>
    	</section>
		<section className="section" >
    		<Footer d={Daily} g1={HistorialCasos} g2={HistorialDiario} g3={HistorialDiario}/>
    	</section>
	</section>
  );
}


export default Home;