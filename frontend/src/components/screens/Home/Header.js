import React from 'react';

import "./Header.css"

import Map from "./Home-Component/Map"

const Header = props => {

  return(
      <section className="header">
        <section className="search">
          <section className="selectors">
            <section className="inputform">
            <select id="inputState" className="form-control select">
                <option selected>Comunidad</option>
                <option>Hombre</option>
                <option>Mujer</option>
                <option>Otro</option>
            </select>
            </section>

            <section className="inputform">
            <select id="inputState" className="form-control select">
                <option selected>Proviencia</option>
                <option>Hombre</option>
                <option>Mujer</option>
                <option>Otro</option>
            </select>
            </section>

            <section className="inputform">
            <select id="inputState" className="form-control select">
                <option selected>Ciudad</option>
                <option>Hombre</option>
                <option>Mujer</option>
                <option>Otro</option>
            </select>
            </section>
          </section>
            <button className="btn-home" style={{backgroundImage: "linear-gradient(to right, #EA4C46, #F07470, #F1959B)"}} >Search</button>
        </section>
        <Map map={props.map}></Map>
      </section>

  );
}


export default Header;