import React from 'react';

import NavBar from './components/NavBar'
import Home from './components/screens/Home/Home'
import SignIn from './components/screens/SignIn/SignIn'



import { BrowserRouter as Router, Route} from 'react-router-dom'

import "./App.css"
import SignUp from './components/screens/SignUp/SignUp';

function App() {
  return(
    <div className="App">
      <Router>
        <NavBar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={SignUp}></Route>
      </Router>
    </div>
  );
}








export default App;
