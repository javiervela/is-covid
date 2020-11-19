import React from 'react';

import "./Header.css"

import Map from "./Header-Components/Map"
import Search from './Header-Components/Search'

const Header = props => {

  return(
      <section className="header">
        <Search comunidad={props.comunidad}/>
        <Map map={props.map}></Map>
      </section>

  );
}


export default Header;