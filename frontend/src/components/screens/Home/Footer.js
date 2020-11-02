import React from 'react';

import "./Footer.css"
import Graphic from "./Home-Component/Graphic"
import Stats from "./Home-Component/Stats"

const Footer = props => {

  return(
    <section className="class_container">
      <section className="grid_row">
        <Graphic data={props.g1} name="Casos diarios"/>
        <section className="item list_container"> 
          <Stats name="Casos diarios" data={props.d.casosDiarios}/>
		      <Stats name="Casos totales" data={props.d.casosTotales}/>
		      <Stats name="Defunciones" data={props.d.defunciones}/>
          <Stats name="Ingresos hospitalarios" data={props.d.ingresosHospitalarios}/>  	
          <Stats name="Ingreos UCI" data={props.d.ingresosUci}/>
        </section>
      </section>
      <section className="grid_row">
        <Graphic data={props.g2}/>
        <Graphic data={props.g3}/>
      </section>
	<button className="button"><b>Share</b></button>
    </section>
  );
}


export default Footer;