import React, {useState} from 'react';
import logo from '../../../avatar.svg'
import './SignUp.css';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";



const SignUp = () => {

      const [selectedDay, setSelectedDay] = useState(null);
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
                                    value={""}
                                    onChange={()=>{}}
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
                                    value={""}
                                    onChange={()=>{}}
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
                                    value={""}
                                    onChange={()=>{}}
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
                                    value={""}
                                    onChange={()=>{}}
                                />
            	            </section>
                        </section>
                        <section className="line"></section>
                        <section className="input-section email">
                            <section/>
                            <div class="form-group col-md-4">
                                <select id="inputState" class="form-control">
                                    <option selected>Sexo</option>
                                    <option>Hombre</option>
                                    <option>Mujer</option>
                                    <option>Otro</option>
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
            	        <input type="submit" className="btn" value="Login" style={{backgroundImage: "linear-gradient(to right, #32be8f, #38d39f, #32be8f)"}}></input>
                        <button className="btn" style={{backgroundImage: "linear-gradient(to right, #EA4C46, #F07470, #F1959B)"}} >SignUp</button>
                        
                </form>
            </section>
        );
}

export default SignUp;