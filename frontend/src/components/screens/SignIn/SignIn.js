import React from 'react';
import logo from '../../../avatar.svg'
import './SignIn.css';

import history from "../../../history"

const SignIn = () => {
        return(
            <section className="content">
                <form onSubmit={()=>{}}>
                    <section className="img">
                     <img src={logo} alt="user icon"/>
                    </section>
                    
                    <h2 className="title">Welcome</h2>
                    <section className="input-section email">
                        <section/> 
                        <section>
                            <input type="text" 
                                placeholder="Email"
                                className="input" 
                                required
                                value={""}
                                onChange={()=>{}}
                            />
                        </section>
                        
                    </section>
                    <section className="line"></section>
                    <section className="input-section pass">
                        <section/>
           		        <section>
                           <input type="password" 
                                placeholder="Contraseña"
                                className="input"
                                required
                                value={""}
                                onChange={()=>{}}
                            />
            	        </section>
                    </section>
                    <section className="line"></section>
                    <a className="login-component" href="google.com">Forgot Password?</a>
            	    <input type="submit" className="btn" value="Login" style={{backgroundImage: "linear-gradient(to right, #32be8f, #38d39f, #32be8f)"}}></input>
                    <button className="btn" style={{backgroundImage: "linear-gradient(to right, #EA4C46, #F07470, #F1959B)"}} onClick={()=>{history.push('/signup');}}>SignUp</button>
                </form>
            </section>
        );
}

export default SignIn;