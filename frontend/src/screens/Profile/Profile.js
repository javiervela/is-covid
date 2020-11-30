import React, {useEffect, useState} from 'react'
import axios from 'axios'
import logo from '../../public/avatar.svg'
import './Profile.css'




const Profile = props => {
    const [User, setUser] = useState({});
    useEffect(() => {
        async function fetchData(){
          try{
        
              
            const res = await axios.get('http://localhost:8080/public/user/',{
              params: {
                id: props.id
              }
            })
            const user = {
                name : res.data.user.name,
                surname: res.data.user.surname,
                email: res.data.email,
                province: res.data.location.province,
                region: res.data.location.region
            }
            setUser(user)
          }catch(err){
          }
        }
        fetchData()
      },[props])

        return(
            <section className="content">
                <section className="box">
                    <section className="img">
                        <img src={logo} alt="user icon"/>
                    </section>
                    
                    <h2 className="title">Perfil</h2>
                    
                    <section className="input-section email">
                        <section/> 
                        <section>
                            <p className="atr"><b >Nombre:</b> {User.name}</p>
                        </section>
                    </section>
                    <section className="mline"></section>
                    
                    <section className="input-section email">
                        <section/> 
                        <section>
                            <p className="atr"><b >Apellidos:</b> {User.surname}</p>
                        </section>
                    </section>
                    <section className="mline"></section>

                    <section className="input-section email">
                        <section/> 
                        <section>
                            <p className="atr"><b >Email:</b>{User.email}</p>
                        </section>
                    </section>
                    <section className="mline"></section>

                    <section className="input-section email">
                        <section/> 
                        <section>
                            <p className="atr"><b >Comunidad:</b> {User.province}</p>
                        </section>
                    </section>
                    <section className="mline"></section>

                    <section className="input-section email">
                        <section/> 
                        <section>
                            <p className="atr"><b >Provincia:</b>{User.region}</p>
                        </section>
                    </section>
                    <section className="mline"></section>

                    <button type="button" className="btn" style={{backgroundImage: "linear-gradient(to right, #32be8f, #38d39f, #32be8f)", color: 'white'}} >Editar</button>
                </section>
            </section>
        );
}

export default Profile;