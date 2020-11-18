import React from 'react';

import Header from './Header';

import "./Home.css"

const Country = props => {

  return(
	<section className="home">
    <section className="section">
    	  <Header map={props.match.params.province}/>
    </section>
	</section>
  );
}


export default Country;