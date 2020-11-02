import React  from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal } from 'react-bootstrap';


const Modall = props => {

  return (
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cuidado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Sin desarrollar
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Modall