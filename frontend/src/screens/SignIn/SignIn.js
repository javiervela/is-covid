import React, { useState, useEffect } from 'react'
import logo from '../../public/avatar.svg'
import './SignIn.css'
import axios from 'axios'

import history from "../../history"

const SignIn = () => {
    const [Email,setEmail] = useState("")
    const [Password,setPassword] = useState("")
    const saveUser = async () => {
            const user = {email:Email,
                        password:Password}
           //const res = await axios.post('http://localhost:8080/public/signIn')
           history.push('/signIn')
    }
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
                                value={Email}
                                onChange={(v)=>{setEmail(v.target.value)}}
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
                                value={Password}
                                onChange={(p)=>{setPassword(p.target.value)}}
                            />
            	        </section>
                    </section>
                    <section className="line"></section>
                    <a className="login-component" href="google.com">Forgot Password?</a>
            	    <input type="submit" className="btn" value="Login" style={{backgroundImage: "linear-gradient(to right, #32be8f, #38d39f, #32be8f)"}} onClick={saveUser}></input>
                    <button className="btn" style={{backgroundImage: "linear-gradient(to right, #EA4C46, #F07470, #F1959B)"}} onClick={()=>{history.push('/signUp')}}>SignUp</button>
                </form>
            </section>
        );
}

export default SignIn;