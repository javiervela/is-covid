import React, {useEffect,useState} from 'react';
import Footer from'./Footer/Footer'
import Header from './Header/Header'
import axios from 'axios'

import "./Home.css"



const Province = props => {

  const useDefault = {
    name: "",
    data: [],
    label: []
  }

  const [CasosDiarios , setCasosDiarios] = useState(useDefault)
  const [CasosTotales , setCasosTotales] = useState(useDefault)
  const [Defunciones , setDefunciones] = useState(useDefault)
  const [CamasOcupadas , setCamasOcupadas] = useState(useDefault)
  const [IngresosUci, setIngresosUci] = useState(useDefault)
  const [IngresosHospitalarios, setIngresosHospitalarios] = useState(useDefault)

  const [Data1,setData1] = useState([])
  const [Data2,setData2] = useState([])


  useEffect(() => {
    async function fetchData(){
      try{
        const res = await axios.get('http://localhost:80/public/datos-comunidad/',{
          params: {
            name: props.match.params.province
          }
        })

        const data1 = [
          {name: "Casos diarios", data: res.data[res.data.length-1].casesIncrement},
          {name: "Casos totales", data : res.data[res.data.length-1].confirmedCases},
          {name: "Defunciones", data : res.data[res.data.length-1].deaths},
          {name: "Camas ocupadas", data: res.data[res.data.length-1].hospitalBed}
        ]

        setData1(data1)

        const data2 = [
          {name: "Ingresos Uci", data: res.data[res.data.length-1].uciCheckIn},
          {name: "Ingresos Hospitalarios", data : res.data[res.data.length-1].hospitalCheckIn},
          {name: "Camas Uci Ocupadas", data: res.data[res.data.length-1].uciBed}
        ]
        setData2(data2)  

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
        
        var casosDiarios = {
          name: "Casos Diarios",
          data: [],
          label: fecha
        }
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
        var camasOcupadas = {
          name: "Camas Ocupadas",
          data: [],
          label: fecha
        }
        var ingresosUci = {
          name: "Ingresos Uci",
          data: [],
          label: fecha
        }
        var ingresosHospitalarios = {
          name: "Ingresos Hospitalarios",
          data: [],
          label: fecha
        }


        res.data.forEach(value => {
          
       
          casosDiarios.data = [...casosDiarios.data,value.casesIncrement]

          casosTotales.data = [...casosTotales.data ,value.confirmedCases]

          defunciones.data = [...defunciones.data, value.deaths]

          camasOcupadas.data = [...camasOcupadas.data, value.hospitalBed]

          ingresosUci.data = [...ingresosUci.data,value.uciCheckIn]

          ingresosHospitalarios.data = [...ingresosHospitalarios.data, value.hospitalCheckIn]
        });

        setCasosDiarios(casosDiarios)
        setCasosTotales(casosTotales)
        setDefunciones(defunciones)
        setCamasOcupadas(camasOcupadas)
        setIngresosUci(ingresosUci)
        setIngresosHospitalarios(ingresosHospitalarios)
        
      }catch(err){
      }
    }
    fetchData()
  },[props])

  return(
	<section className="home">
    <section className="section">
      <Header map={props.match.params.province} comunidad={props.match.params.province}></Header>
    </section>
		<section className="section" >
    		<Footer d={Data1} g1={CasosDiarios} g2={CasosTotales} g3={Defunciones} />
        </section>
        <section className="section" >
    	<Footer d={Data2} g1={CamasOcupadas} g2={IngresosUci} g3={IngresosHospitalarios}/>
        </section>
	</section>
  );
}


export default Province;