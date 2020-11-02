import React from 'react'

const Stats = props => {
    return(
        <section className="data hover">
            <section className="data_head" style={{backgroundColor: 'pink'}}>
              <b>{props.data}</b>
            </section>
            <section className="data_body">
              <b>  {props.name} </b>
            </section>
        </section>
    )
}

export default Stats