import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Country from './screens/Home/Country'
import SignIn from './screens/SignIn/SignIn'
import SignUp from './screens/SignUp/SignUp'
import Province from './screens/Home/Province'
import Region from './screens/Home/Region'

import history from './history'

import {Router, Route} from 'react-router'

import "./App.css"


function App() {
  return(
    <div className="App">
      <Router history={history}>
        
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
