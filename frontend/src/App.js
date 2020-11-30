import React, { useReducer, useMemo, useEffect } from 'react';
import {Router, Route} from 'react-router'

import Country from './screens/Home/Country'
import SignIn from './screens/SignIn/SignIn'
import Recovery from './screens/Recovery/Recovery'
import SignUp from './screens/SignUp/SignUp'
import Province from './screens/Home/Province'
import Region from './screens/Home/Region'
import PublicNavBar from './components/PublicNavBar'
import PrivateNavBar from './components/PrivateNavBar'

import AuthContext from './contex'
import history from './history'

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Tweets from './screens/Tweets/Tweets';


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
        localStorage.setItem('token', userToken);
        localStorage.setItem('user', userData);
      } catch(err) {
        console.log(err);
      }
    }
  }), []);

  useEffect(()=>{
    const userToken = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    dispatch({type:'LOGIN', Token: userToken, Data:userData});
  },[])


  return(
    <AuthContext.Provider value={authContext}>
      
        <section className="App">
          <Router history={history}>
          {state.Token == null ?
            <PublicNavBar/>
            :
            <>
            <PrivateNavBar name={state.Data}/>
            <Route path="/info" exact component={Tweets}/>
            <Route path="/myinfo" exact component={Tweets}/>
            </>
          }
            
            <Route path="/" exact render={ ()=>{history.push('/España')} }/>
            <Route path="/login" exact component={SignIn}></Route>
            <Route path="/recovery" exact component={Recovery}></Route>
            <Route path="/signup" exact component={SignUp}></Route>
            <Route path="/Profile" exact component={Country}></Route>
            <Route path="/SignOut" exact render={ () => {localStorage.removeItem('token'); localStorage.removeItem('user'); history.push('/España')}}></Route>
            <Route path="/España" exact component={Country}></Route>
            <Route path="/España/:province" exact component={Province} ></Route>
            <Route path="/España/:province/:region" exact component={Region} ></Route>
          </Router>
        </section>
      
    </AuthContext.Provider>
  );
}

export default App;
