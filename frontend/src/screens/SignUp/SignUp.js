import React, {useState} from 'react';
import logo from '../../public/avatar.svg'
import './SignUp.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import axios from 'axios'

import history from "../../history"



const SignUp = () => {

      const [selectedDay, setSelectedDay] = useState(null);
      const [Name,setName] = useState("")
      const [Surname,setSurname] = useState("")
      const [Email,setEmail] = useState("")
      const [Password,setPassword] = useState("")
      const [Sex, setSex] = useState("")
      const [Region, setRegion] = useState("")
      const [Province, setProvince] = useState("")

      const saveUser = async () => {
        try{
        const user = {name:Name,
                    surname:Surname,
                    email:Email,
                    password:Password,
                    sex:Sex,
                    birthdate: selectedDay,
                    location:{province:Province, region:Region}}
       //const res = await axios.post('http://localhost:8080/public/signUp')
       history.push('/signIn')
       
        } catch (err){
            console.error(err);
        }
      
    }
        return(
            <section className="content">
                <form onSubmit={()=>{}}>
                    <section className="img">
                     <img src={logo} alt="user icon"/>
                    </section>
                    
                    <h2 className="title">Register</h2>
                    <section className="form_continer">
                        <section className="form_r">
                        <section className="input-section email">
                            <section/> 
                            <section>
                                <input type="text" 
                                    placeholder="Nombre"
                                    className="input" 
                                    required
                                    value={Name}
                                    onChange={(n)=>{setName(n.target.value)}}
                                />
                            </section>

                        </section>
                        <section className="line"></section>
                        <section className="input-section email">
                            <section/> 
                            <section>
                                <input type="text" 
                                    placeholder="Apellidos"
                                    className="input" 
                                    required
                                    value={Surname}
                                    onChange={(s)=>{setSurname(s.target.value)}}
                                />
                            </section>

                        </section>
                        <section className="line"></section>
                        <section className="input-section email">
                            <section/> 
                            <section>
                                <input type="text" 
                                    placeholder="Email"
                                    className="input" 
                                    required
                                    value={Email}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                            </section>

                        </section>
                        
                        <section className="line"></section>
                        </section>
                        <section className="form_r">
                        <section className="input-section email">
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

                    
                        <section className="form_r">
                        <section className="input-section email">
                            <section/>
           		            <section>
                               <input type="text" 
                                    placeholder="Comunidad"
                                    className="input"
                                    required
                                    value={Region}
                                    onChange={(r)=>{setRegion(r.target.value)}}
                                />
            	            </section>
                        </section>

                        <section className="line"></section>
                        </section>
                        <section className="form_r">
                        <section className="input-section email">
                            <section/>
           		            <section>
                               <input type="text" 
                                    placeholder="Provincia"
                                    className="input"
                                    required
                                    value={Province}
                                    onChange={(p)=>{setProvince(p.target.value)}}
                                />
            	            </section>
                        </section>

                        </section>
                        <section className="line"></section>
                        <section className="input-section email">
                            <section/>
                            <div className="form-group col-md-4">
                                <select id="inputState" className="form-control">
                                    <option selected>Sexo</option>
                                    <option>Hombre</option>
                                    <option>Mujer</option>
                                    <option>Otro</option>
                                    <input
                                         value={Sex}
                                         onChange={(s)=>{setSex(s.target.value)}}
                                    ></input>
                                </select>
                                </div>
                        </section>
                       
                        <section className="input-section email">
                        <section style={{width: '100%'}}>
                            <DatePicker
                                value={selectedDay}
                                onChange={setSelectedDay}
                                colorPrimary="#38d39f"
                                inputClassName="calendar"
                                inputPlaceholder="fecha de nacimiento"
                            
                            />  
                            </section> 
                        </section>
                        </section>
                        </section>
                        
                        <a className="login-component" href="google.com">Forgot Password?</a>
            	        <button className="btn" style={{backgroundImage: "linear-gradient(to right, #32be8f, #38d39f, #32be8f)"}} onClick={()=>{history.push('/signIn')}}>Login</button>
                        <input type="submit" className="btn" style={{backgroundImage: "linear-gradient(to right, #EA4C46, #F07470, #F1959B)"}} onClick = {saveUser}></input>
                        
                </form>
            </section>
        );
}

export default SignUp;