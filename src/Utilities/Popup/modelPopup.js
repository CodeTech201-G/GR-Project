
import React from 'react';
import { Modal, Button } from "react-bootstrap";
import { t } from '../Translation/Translation'


const modelPopup = (props) => {
    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        size={props.size ? props.size : "lg"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="textcolor1">
            {t(props.title)}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.body}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-color" onClick={props.onHide}>
            {t('Close')}
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default modelPopup
