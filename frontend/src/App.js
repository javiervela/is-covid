import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Country from './screens/Home/Country'
import SignIn from './screens/SignIn/SignIn'
import SignUp from './screens/SignUp/SignUp'
import Province from './screens/Home/Province'
import Region from './screens/Home/Region'
import NavBar from './components/NavBar'

import history from './history'

import {Router, Route} from 'react-router'

import "./App.css"


function App() {
  const [Token,setToken] = useState(null);
  return(
    <div className="App">
      <Router history={history}>
        <NavBar></NavBar>
        <Route path="/" exact render={ ()=>{history.push('/España')} }/>
        <Route path="/login" exact component={SignIn}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/España" exact component={Country}></Route>
        <Route path="/España/:province" exact component={Province} ></Route>
        <Route path="/España/:province/:region" exact component={Region} ></Route>
        
      </Router>
    </div>
  );
}








export default App;
