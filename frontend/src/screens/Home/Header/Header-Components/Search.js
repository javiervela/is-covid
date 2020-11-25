import React, { useEffect, useState } from 'react'

import history from '../../../../history'
import sp from "../../../../public/spain-names.json"

const Search = props => {
    const [Comunidad,setComunidad] = useState([])
    const [Proviencia, setProviencia] = useState([])
    const [ComunidadPick,setComunidadPick] = useState()
    const [ProvienciaPick,setProvienciaPick] = useState()

    useEffect(() => {
        var comunidad = []
        var proviencia = []

        sp.comunidad.forEach((value) => {
            comunidad = [...comunidad,value.nombre]
            value.proviencia.forEach((value) => {
                proviencia = [...proviencia,value.nombre]
            }) 
        })
        setComunidad(comunidad)
        setProviencia(proviencia)

    },[props]) 

    const handleButton = () => {
        if(ComunidadPick !== undefined){
            if(ProvienciaPick !== undefined){
                history.push(`/España/${ComunidadPick}/${ProvienciaPick}`)
            }else{
                history.push(`/España/${ComunidadPick}`)
            }
        }
        
    }
    const Com = Comunidad.map((val,id) => {
        return <option value={val} key={id}>{val}</option>
    })
    const Pro = Proviencia.map((val,id) => {
        return <option value={val} key={id}>{val}</option>
    })
    return(
        <>
        <section className="search">
        <section className="selectors">
            <section className="inputform">
            <select id="inputState" className="form-control select" value={ComunidadPick} onChange={(e) => setComunidadPick(e.target.value)} >
                    <option selected > Comunidad </option>
                    {Com}
            </select>
            </section>
                    
            <section className="inputform">
            <select id="inputState" className="form-control select" value={ProvienciaPick} onChange={(e) => setProvienciaPick(e.target.value)} >
                <option selected> Proviencia </option>
                    {Pro}
            </select>
            </section>
        </section>
        <button className="btn-home"  onClick={handleButton} style={{backgroundImage: "linear-gradient(to right, pink, rgb(255, 99, 132) , rgba(255, 99, 132, 0.2))"}} >Search</button>
        </section>
        </>
    );
}

export default Search;