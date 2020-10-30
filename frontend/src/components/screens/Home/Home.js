import React from 'react';
import Footer from'./Footer'
import Header from './Header';

import "./Home.css"

const Home = () => {
  return(
	<section>
    <section className="section">
    	<Header/>
    </section>
	<section className="section">
    	<Footer/>
    </section>
	</section>
  );
}


export default Home;