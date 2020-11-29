import React, { useReducer, useMemo } from 'react';
import {Router, Route} from 'react-router'

import Country from './screens/Home/Country'
import SignIn from './screens/SignIn/SignIn'
import SignUp from './screens/SignUp/SignUp'
import Province from './screens/Home/Province'
import Region from './screens/Home/Region'
import PublicNavBar from './components/PublicNavBar'
import PrivateNavBar from './components/PrivateNavBar'

import AuthContext from './contex'
import history from './history'

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  const initialState = {
    Token: null,
    Data: null
  }


  const reducer = (prevState, action) => {
    switch(action.type){
      case 'LOGIN':
        return{
          ...prevState,
          Token: action.Token,
          Data: action.Data,
        } 
      case 'LOGOUT':
        return{
          ...prevState,
          Token: null,
          Data: null
        }
      default:
        return{
          ...prevState
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const authContext = useMemo(() => ({
    signIn: async(userData,userToken) => {
      try {
        dispatch({type:'LOGIN', Token: userToken, Data:userData});
      } catch(err) {
        console.log(err);
      }
    },
    signOut: async() => {
      try {
      } catch(e) {
        console.log(e);
      }
      dispatch({type:'LOGOUT'});
    },
    signUp: () => {

    }
  }), []);


  return(
    <AuthContext.Provider value={authContext}>
      {state.Token == null ?
        <section className="App">
          <Router history={history}>
            <PublicNavBar/>
            <Route path="/" exact render={ ()=>{history.push('/España')} }/>
            <Route path="/login" exact component={SignIn}></Route>
            <Route path="/signup" exact component={SignUp}></Route>
            <Route path="/España" exact component={Country}></Route>
            <Route path="/España/:province" exact component={Province} ></Route>
            <Route path="/España/:province/:region" exact component={Region} ></Route>
          </Router>
        </section>
      :
        <section className="App">
          <Router history={history}>
            <PrivateNavBar name={state.Data}/>
            <Route path="/" exact render={ ()=>{history.push('/España')} }/>
            <Route path="/login" exact component={SignIn}></Route>
            <Route path="/signup" exact component={SignUp}></Route>
            <Route path="/España" exact component={Country}></Route>
            <Route path="/España/:province" exact component={Province} ></Route>
            <Route path="/España/:province/:region" exact component={Region} ></Route>
          </Router>
        </section>
      }
    </AuthContext.Provider>
  );
}

export default App;
