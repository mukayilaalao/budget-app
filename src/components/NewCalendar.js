import React, { useState,useEffect } from "react";
import Calendar from "react-calendar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "react-calendar/dist/Calendar.css";
function NewCalendar({getDate}) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formatDate=str=>{
      return str.match(/[a-z]{3} \d+/i).join("");
  }
  useEffect(()=>{
     getDate(formatDate(date.toString()));
  }, [date])
  const onChange = (date) => {
    setDate(date);
  };
  
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Date: {formatDate(date.toString())}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Calendar onChange={onChange} value={date} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewCalendar;
