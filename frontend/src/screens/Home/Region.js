import React, {useEffect,useState} from 'react';
import Footer from'./Footer/Footer'
import axios from 'axios'

import "./Home.css"

const Region = props => {


  const useDefault = {
    name: "",
    data: [],
    label: []
  }

  const [CasosTotales , setCasosTotales] = useState(useDefault)
  const [Defunciones , setDefunciones] = useState(useDefault)
  const [IngresosHospitalarios, setIngresosHospitalarios] = useState(useDefault)

  const [Data,setData] = useState([])

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await axios.get('http://localhost:80/public/datos-region/',{
          params: {
            name: props.match.params.region
          }
        })
        const data = [
          {name: "Casos totales", data : res.data[res.data.length-1].confirmedCases},
          {name: "Defunciones", data : res.data[res.data.length-1].deaths},
          {name: "Ingresos Uci", data: res.data[res.data.length-1].uciCheckIn},
          {name: "Ingresos Hospitalarios", data : res.data[res.data.length-1].hospitalCheckIn},
        ]

        setData(data)
        
        var fecha = []
        
        res.data.forEach(value => {
          const date = new Date(value.date)
          let day = date.getDate()
          let month = date.getMonth() + 1
          let year = date.getFullYear()

          if(month < 10){
            fecha = [...fecha,`${day}-0${month}-${year}`]
          }else{
            fecha = [...fecha,`${day}-${month}-${year}`]
          }
          
        })
        
        var casosTotales = {
          name: "Casos Totales",
          data: [],
          label: fecha
        }
        var defunciones = {
          name: "Defunciones",
          data: [],
          label: fecha
        }
        var ingresosHospitalarios = {
          name: "Ingresos Hospitalarios",
          data: [],
          label: fecha
        }

        res.data.forEach(value => {
          
          casosTotales.data = [...casosTotales.data ,value.confirmedCases]

          defunciones.data = [...defunciones.data, value.deaths]

          ingresosHospitalarios.data = [...ingresosHospitalarios.data, value.hospitalCheckIn]

        });

        setCasosTotales(casosTotales)
        setDefunciones(defunciones)
        setIngresosHospitalarios(ingresosHospitalarios)

        
      }catch(err){
      }
    }
    fetchData()
  },[props])

  return(
	<section className="home">
    <section className="section">
    	<Footer d={Data} g1={CasosTotales} g2={Defunciones} g3={IngresosHospitalarios}/>
    </section>
	</section>
  );
}


export default Region;