import React from 'react'
import { Line } from 'react-chartjs-2'

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

const Graphic = props => {
    const data = {
        labels: props.label,
        datasets: [
          {
            label: props.name,
            data: props.data,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      }
    return (
        <section className="item card hover">
          <Line data={data} options={options}/>
        </section>
    );
}

export default Graphic;