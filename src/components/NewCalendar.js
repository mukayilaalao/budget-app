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
      const monthsObj = {
    Jan: "January",
    Feb: "February",
    Mar: "Mars",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "Jully",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December",
  };
    let matchedStr= str.match(/[a-z]{3} \d+/i).join("");
    matchedStr=matchedStr.replace(/[a-z]{3}/i, m=> monthsObj[m]);
    return matchedStr.replace(/[0-9]{2}/i, m=> Number(m));
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
