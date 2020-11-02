import React from 'react';

import NavBar from './components/NavBar'
import Home from './components/screens/Home/Home'
import SignIn from './components/screens/SignIn/SignIn'
import SignUp from './components/screens/SignUp/SignUp';

import history from './history'

import {Router, Route} from 'react-router'

import "./App.css"


function App() {
  return(
    <div className="App">
      <Router history={history}>
        <NavBar/>
        <Route path="/" exact render={() => <Home name="Aragon"/>} ></Route>
        <Route path="/login" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
      </Router>
    </div>
  );
}








export default App;
