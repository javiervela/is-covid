import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

import { Modal } from 'react-bootstrap';

import './Graphic.css'

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
	const [Show, setShow] = useState(false);

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
		<>
			<Modal
        	    show={Show}
        	    onHide={() => setShow(false)}
        	    backdrop="static"
				keyboard={false}
			    dialogClassName="full_modal"
        	>
        		<Modal.Header closeButton>
					<Modal.Title>Modal title</Modal.Title>
				</Modal.Header>
        		<Modal.Body>
					<Line data={data} options={options}/>
        		</Modal.Body>
        	</Modal>
        	<section className="item card hover" onClick={() => setShow(true)}>
        	  <Line data={data} options={options}/>
        	</section>
		</>
    );
}

export default Graphic;