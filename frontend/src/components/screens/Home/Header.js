import React from 'react';

import "./Header.css"

import Map from "./Home-Component/Map"
import Search from './Home-Component/Search'

const Header = props => {

  return(
      <section className="header">
        <Search comunidad={props.comunidad}/>
        <Map map={props.map}></Map>
      </section>

  );
}


export default Header;