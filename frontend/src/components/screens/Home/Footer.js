import React, { useEffect } from 'react';

import { Line } from 'react-chartjs-2'

import "./Footer.css"


const data1 = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}

const data2 = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [5, 11, 3, 15, 2, 4],
      fill: false,
      backgroundColor: 'rgb(155, 69, 132)',
      borderColor: 'rgba(24, 145, 132, 0.2)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const Footer = (props) => {

  useEffect(() => {
    const getData = async() =>{

    }
    getData()
  },[props.comunidad])

  return(
    <section className="class_container">
      <section className="grid_row">
        <section className="item card hover">
          <Line data={data1} options={options}/>
        </section>
        <section className="item list_container">
          <section className="data hover">
            <section className="data_head" style={{backgroundColor: 'pink'}}>
              <b>256</b>
            </section>
            <section className="data_body">
              <b>  {props.comunidad}</b>
            </section>
          </section>
		      <section className="data hover">
            <section className="data_head" style={{backgroundColor: 'pink'}}>
              <b>256</b>
            </section>
            <section className="data_body">
              <b>  INGRESOS HOSPITALARIOS</b>
            </section>
          </section>
		      <section className="data hover">
            <section className="data_head" style={{backgroundColor: 'pink'}}>
              <b>256</b>
            </section>
            <section className="data_body">
              <b>  INGRESOS HOSPITALARIOS</b>
            </section>
      		</section>
			  <section className="data hover">
            <section className="data_head" style={{backgroundColor: 'pink'}}>
              <b>256</b>
            </section>
            <section className="data_body">
              <b>  INGRESOS HOSPITALARIOS</b>
            </section>
      		</section>
		  <section className="data hover">
            <section className="data_head" style={{backgroundColor: 'pink'}}>
              <b>256</b>
            </section>
            <section className="data_body">
              <b>  INGRESOS HOSPITALARIOS</b>
            </section>
          </section>
        </section>
      </section>
      <section className="grid_row">
        <section className="item card hover">
          <Line data={data2} options={options}/>
        </section>
        <section className="item card hover">
          <Line data={data1} options={options}/>
        </section>
      </section>
	<button className="button"><b>Share</b></button>
    </section>
  );
}


export default Footer;