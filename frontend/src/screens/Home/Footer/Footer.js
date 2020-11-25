import React from 'react';

import "./Footer.css"
import Graphic from "./Footer-Components/Graphic"
import Stats from "./Footer-Components/Stats"




const Footer = props => {
  const stats = props.d.map((v,i) => {
    return <Stats name={v.name} data={v.data} key={i}/>
  })
  return(
    <section className="class_container">
      <section className="grid_row">
        <Graphic data={props.g1.data} name={props.g1.name} label={props.g1.label}/>
        <section className="item list_container"> 
          {stats}
        </section>
      </section>
      <section className="grid_row">
        <Graphic data={props.g2.data} name={props.g2.name} label={props.g2.label}/>
        <Graphic data={props.g3.data} name={props.g3.name} label={props.g3.label}/>
      </section>
    </section>
  );
}


export default Footer;