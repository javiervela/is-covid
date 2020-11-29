import React, { useState } from 'react'
import logo from '../../public/avatar.svg'

import history from "../../history"

const Recovery = () => {
    const [Email,setEmail] = useState("")
    
        return(
            <section className="content">
                <form onSubmit={()=>{}}>
                    <section className="img">
                     <img src={logo} alt="user icon"/>
                    </section>
                    
                    <h2 className="title">Recovery</h2>
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
                    <button className="btn" style={{backgroundImage: "linear-gradient(to right, #32be8f, #38d39f, #32be8f)",marginTop: "40px"}} onClick={()=>{history.push('/signUp')}}>Recuperar Cuenta</button>
                </form>
            </section>
        );
}

export default Recovery;